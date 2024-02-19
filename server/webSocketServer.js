import { Server } from 'socket.io';

// @ts-expect-error no easy way of getting the server type
export const createSocketIOServer = (server) => {
	const io = new Server(server);

	io.on('connection', (socket) => {
		socket.on('message', (scoreboard) => {
			console.log(scoreboard);
			io.emit('message', scoreboard);
		});
	});
};
