import { createAction, props } from "@ngrx/store";
import { Init } from '../../models/init.model';


export const init = createAction(
    '[NameSpace] Initializing',
);
export const initSuccess = createAction(
    '[NameSpace] initialization Success',
    props<{data: Init}>()
);
export const initFail = createAction(
    '[NameSpace] initialization Failed',
    props<{initFailError: any}>()
);
