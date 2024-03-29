import type { Action } from '$lib/types/action';
import type { Scoreboard } from '$lib/types/scoreboard';
import { Server } from 'socket.io';

// @ts-expect-error no easy way of getting the server type
export const createSocketIOServer = (server) => {
	const io = new Server(server);

	io.on('connection', (socket) => {
		socket.on('scoreboard', (scoreboard: Scoreboard) => {
			const now = new Date();
			console.log(
				'Scoreboard Updated at ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
			);
			console.log(scoreboard);
			io.emit('scoreboard', scoreboard);
		});
		socket.on('action', (action: Action) => {
			const now = new Date();
			console.log(
				'Action requested at ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
			);
			console.log(action);
			io.emit('action', action);
		});
	});
};
