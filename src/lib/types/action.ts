export type Action = NameCrossoutAction | OtherAction;

interface BaseAction {
	type: string;
	payload: object;
}

interface NameCrossoutAction extends BaseAction {
	type: 'NAME_CROSSOUT';
	payload: {
		player: number;
	};
}

interface OtherAction extends BaseAction {
	type: 'OTHER';
	payload: {
		foo: string;
	};
}
