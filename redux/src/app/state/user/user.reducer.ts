import { createReducer } from "@ngrx/store";
import { initialUserState } from "src/app/state/user/usuario.state";

export const userReducer = createReducer(
    initialUserState
)

