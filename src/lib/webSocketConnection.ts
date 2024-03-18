import ioClient from 'socket.io-client';
import OBSWebSocket from 'obs-websocket-js';
import { env } from '$env/dynamic/public';

const socket = ioClient();

const obsWebSocket = new OBSWebSocket();
try {
	/* The entire app is running locally, so we don't need to worry about the
	 * client obtaining the obs websocket password.
	 **/
	await obsWebSocket.connect('ws://' + env.PUBLIC_OBS_WS_IP, env.PUBLIC_OBS_WS_PASS);
	console.log(`Connected to server!`);
} catch (error: unknown) {
	console.error(error);
}

export const obs = obsWebSocket;
export const io = socket;
