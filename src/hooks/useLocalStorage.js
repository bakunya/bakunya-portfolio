import { useMemo, useState, useEffect, useCallback, useRef } from "react";

// Gets value from localstorage
function getValueFromLocalStorage(key) {
    if (typeof localStorage === "undefined") {
        return null;
    }
    const storedValue = localStorage.getItem(key) ?? "null";

    try {
        return JSON.parse(storedValue);
    } catch (error) {
        console.error(error);
    }

    return storedValue;
}

// Saves value to localstorage
function saveValueToLocalStorage(key, value) {
    if (typeof localStorage === "undefined") {
        return null;
    }

    return localStorage.setItem(key, JSON.stringify(value));
}

/**
 * @param key Key of the localStorage object
 * @param initialState Default initial value
 */
function initialize(key, initialState) {
    const valueLoadedFromLocalStorage = getValueFromLocalStorage(key);
    if (valueLoadedFromLocalStorage === null) {
        return initialState;
    } else {
        return valueLoadedFromLocalStorage;
    }
}

/**
 * useLocalstorageState hook
 * Tracks a value within localStorage and updates it
 *
 * @param {string} key - Key of the localStorage object
 * @param {any} initialState - Default initial value
 */
function useLocalstorageState(key, initialState) {
    const [value, setValue] = useState(() => initialize(key, initialState));
    const isUpdateFromCrossDocumentListener = useRef(false);
    const isUpdateFromWithinDocumentListener = useRef(false);
    const customEventTypeName = useMemo(() => `rooks-${key}-localstorage-update`, [key]);

    useEffect(() => {
        /**
         * We need to ensure there is no loop of
         * storage events fired. Hence we are using a ref
         * to keep track of whether setValue is from another
         * storage event
         */
        if (
            !isUpdateFromCrossDocumentListener.current ||
            !isUpdateFromWithinDocumentListener.current
        ) {
            saveValueToLocalStorage(key, value);
        }

    }, [key, value]);

    const listenToCrossDocumentStorageEvents = useCallback(
        (event) => {
            if (event.storageArea === localStorage && event.key === key) {
                try {
                    isUpdateFromCrossDocumentListener.current = true;
                    const newValue = JSON.parse(event.newValue ?? "null");
                    if (value !== newValue) {
                        setValue(newValue);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        },
        [key, value]
    );

    // check for changes across documents
    useEffect(() => {
        // eslint-disable-next-line no-negated-condition
        if (typeof window !== "undefined") {
            window.addEventListener("storage", listenToCrossDocumentStorageEvents);
            return () => window.removeEventListener("storage", listenToCrossDocumentStorageEvents);

        } else {
            console.warn("useLocalstorageState: window is undefined.");
            return () => {};

        }

    }, [listenToCrossDocumentStorageEvents]);

    const listenToCustomEventWithinDocument = useCallback(
        (event) => {
            try {
                isUpdateFromWithinDocumentListener.current = true;
                const { newValue } = event.detail;
                if (value !== newValue) setValue(newValue);
            } catch (error) {
                console.log(error);
            }
        },
        [value]
    );

    // check for changes within document
    useEffect(() => {
        // eslint-disable-next-line no-negated-condition
        if (typeof document !== "undefined") {
            document.addEventListener(customEventTypeName, listenToCustomEventWithinDocument);
            return () => document.removeEventListener(customEventTypeName, listenToCustomEventWithinDocument);

        } else {
            console.warn("[useLocalstorageState] document is undefined.");
            return () => {};
        }

    }, [customEventTypeName, listenToCustomEventWithinDocument]);

    const broadcastValueWithinDocument = useCallback(
        (newValue) => {
            // eslint-disable-next-line no-negated-condition
            if (typeof document !== "undefined") {
                const event = new CustomEvent(customEventTypeName, { detail: { newValue } });
                document.dispatchEvent(event);
            } else {
                console.warn("[useLocalstorageState] document is undefined.");
            }
        },
        [customEventTypeName]
    );

    const set = useCallback(
        (newValue) => {
            isUpdateFromCrossDocumentListener.current = false;
            isUpdateFromWithinDocumentListener.current = false;
            setValue(newValue);
            broadcastValueWithinDocument(newValue);
        },
        [broadcastValueWithinDocument]
    );

    const remove = useCallback(() => {
        localStorage.removeItem(key);
    }, [key]);

    return [value, set, remove];
}

export default useLocalstorageState;
