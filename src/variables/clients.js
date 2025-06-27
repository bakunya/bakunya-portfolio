const clients = [
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/bcm.png',
		name: 'Business Inventory and Management',
		full_name: 'Business Inventory and Management',
		description: 'Contributing to development of Business Inventory and Management Application as full stack developer using laravel and bootstrap.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/Screenshot 2025-06-27 225648.png',
		name: 'Government Web Application',
		full_name: 'Government Collaboration Management Web Application',
		description: 'Full-stack developer using Laravel and PHP, focusing on modules for managing community collaborations and monitoring.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/Screenshot 2025-06-27 225603.png',
		name: 'Inplus News',
		full_name: 'Inplus News',
		description: 'Contributed by adjusting layout responsiveness and fixing bugs to enhance user experience using Next.js and React Query. '
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/Screenshot 2025-06-27 225700.png',
		name: 'Sujud Marketplace',
		full_name: 'Sujud Marketplace',
		description: 'Full-stack developer using Laravel and React, collaborating with other developers to build this online marketplace platform.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/aces.png',
		name: 'Aces Interviews',
		full_name: 'Aces Interviews',
		description: 'Contributing to development of Interview Scheduling Application as full stack developer using honojs, rxjs, bootstrap, and cloudflare as infrastructure.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/Screenshot 2025-06-27 225633.png',
		name: 'X-API',
		full_name: 'X-API Hub',
		description: 'Contributing to development of X-API Hub as frontend developer using reactjs, materialui, and tanstack-query.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/Screenshot 2025-06-27 225445.png',
		name: 'Assessment Management',
		full_name: 'Assessment Management & Scheduling (1.0.0-alpha)',
		description: 'Full-stack developer on core features using Hono, TypeScript, and Cloudflare Workers for this management panel.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/Screenshot 2025-06-27 225543.png',
		name: 'Assessment Test Management',
		full_name: 'Assessment Test Management (2.0.0-alpha)',
		description: 'Full-stack developer on core features using Hono, TypeScript, and HTMX, ensuring technical feasibility for future scalability.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/grand-sehat.png',
		name: 'Grand Sehat',
		full_name: 'Grand Sehat',
		description: 'Contributing to development of Grand Sehat landing page as frontend developer using html, css, js, and bootstrap.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/sendx.png',
		name: 'Send-X',
		full_name: 'Send-X',
		description: 'Contributing to development of Send-X landing page as frontend developer using html, css, js, and bootstrap.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/kopiawan.png',
		name: 'Kopi Awan',
		full_name: 'Kopi Awan',
		description: 'Contributing to development of Kopi Awan profile page as frontend developer using html, css, js, and bootstrap.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/blinks.png',
		name: 'Blinks',
		full_name: 'Blinks',
		description: 'Contributing to development of Blinks landing page as frontend developer using html, css, js, and bootstrap.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/pabriksukses.png',
		name: 'Pabrik Sukses',
		full_name: 'Pabrik Sukses',
		description: 'Contributing to development of Pabrik Sukses landing page as frontend developer using html, css, js, and bootstrap.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/smimotor.png',
		name: 'SMI',
		full_name: 'SMI Motor',
		description: 'Contributing to development of SMI landing page as frontend developer using html, css, js, and bootstrap.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/moto1.png',
		name: 'Moto-1',
		full_name: 'Moto-1',
		description: 'Contributing to development of Moto-1 landing page as frontend developer using html, css, js, and bootstrap.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/namecard.png',
		name: 'Name Card App',
		full_name: 'Name Card App',
		description: 'Contributing to development Name Card App as such as UI development, API integrations, route authentication, and state management as frontend developer using reactjs, css, and material-ui.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/grafiko.png',
		name: 'Grafiko',
		full_name: 'Grafiko',
		description: 'Contributing to slicing from PSD to web html, css, js, and bootstrap.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/nyanload.png',
		name: 'File Uploader App',
		full_name: 'File Uploader App',
		description: 'Development a File Uploader App as fullstack javascript developer using nodejs, express, firebase, reactjs, css, and tailwindcss.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/shortink.png',
		name: 'Shortlink App',
		full_name: 'Shortlink App',
		description: 'Development a Shortlink App as fullstack javascript developer using nextjs, firebase, css, and tailwindcss.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/socialize.png',
		name: 'Socialize',
		full_name: 'Socialize',
		description: 'Contributing to slicing from PSD to web using html, css, js, and bootstrap.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/plusesmedia.png',
		name: 'Pluses Media',
		full_name: 'Pluses Media',
		description: 'Contributing to slicing from PSD to web using html, css, js, and bootstrap.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/cicilsewa.png',
		name: 'Cicil Sewa',
		full_name: 'Cicil Sewa',
		description: 'Contributing to slicing from PSD to web using html, css, js, and bootstrap.'
	},
	{
		id: Date.now(),
		image_url: '/img/cc.png',
		html_url: 'https://circlecreative.id/',
		name: 'Circle creative website company',
		full_name: 'Circle creative website company',
		description: 'Contributing to development in circle creative company website as frontend developer using html, css, js, and bootstrap.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/church-meet.png',
		name: 'Church Meet',
		full_name: 'Church Meet',
		description: 'Contributing to development UI as frontend developer using reactjs, css, material-ui, and jitsi meet.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/xignature.jpg',
		name: 'Xignature App',
		full_name: 'Xignature App',
		description: 'Contributing to development dashboard UI in Xignature App as frontend developer using vue, css, and tailwindcss.'
	},
	{
		id: Date.now(),
		html_url: null,
		image_url: '/img/terraform.png',
		name: 'Terraform',
		full_name: 'Terraform',
		description: 'Contributing to clone from terraform to web using nextjs and tailwindcss.'
	},
]

export default clients