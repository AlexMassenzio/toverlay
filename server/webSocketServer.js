import { Server } from 'socket.io';

// @ts-ignore
export const createSocketIOServer = (server) => {
	const io = new Server(server);

	io.on('connection', (socket) => {
		socket.on('message', (scoreboard) => {
			console.log(scoreboard);
			io.emit('message', scoreboard);
		});
	});
};
