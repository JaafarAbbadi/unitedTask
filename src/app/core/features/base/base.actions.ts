import { createAction, props } from "@ngrx/store";
import { Init } from '../../models/init.model';

// login, change preference, change country

export const init = createAction(
    '[Base] Initializing',
);
export const initSuccess = createAction(
    '[Base] initialization Success',
    props<{data: Init}>()
);
export const initFail = createAction(
    '[Base] initialization Failed',
    props<{initFailError: any}>()
);

export const changeLanguage = createAction(
    '[Base] Change Language',
    props<{code: string}>()
);
export const changeLanguageSuccess = createAction(
    '[Base] Change Language Success',
);
