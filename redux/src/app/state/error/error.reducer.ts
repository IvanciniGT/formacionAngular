import { createReducer } from "@ngrx/store";
import { initialErrorState } from "src/app/state/error/error.state";

export const errorReducer = createReducer(
    initialErrorState
)

