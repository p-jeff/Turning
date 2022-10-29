import { sveltekit } from '@sveltejs/kit/vite';
import { join } from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';

const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json')));


const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: Object.keys(pkg.dependencies || {})
	}
};

export default config;
