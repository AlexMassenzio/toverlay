import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { type ViteDevServer } from 'vite';

import { Server } from 'socket.io';

// Creating socket-io server using joyofcode guide: https://joyofcode.xyz/using-websockets-with-sveltekit
const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return;

		const io = new Server(server.httpServer);

		io.on('connection', (socket) => {
			socket.on('message', (scoreboard) => {
				console.log(scoreboard);
				io.emit('message', scoreboard);
			});
		});
	}
};

export default defineConfig({
	plugins: [sveltekit(), webSocketServer],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
