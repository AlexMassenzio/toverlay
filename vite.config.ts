import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { type ViteDevServer } from 'vite';
import { createSocketIOServer } from './server/webSocketServer';

// Creating socket-io server using joyofcode guide: https://joyofcode.xyz/using-websockets-with-sveltekit
const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return;

		createSocketIOServer(server.httpServer);
	}
};

export default defineConfig({
	plugins: [sveltekit(), webSocketServer],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
