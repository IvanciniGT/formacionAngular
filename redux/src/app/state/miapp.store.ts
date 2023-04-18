import { StoreModule } from "@ngrx/store";
import { errorReducer } from "./error/error.reducer";
import { nombreReducer } from "./nombre/nombre.reducer";
import { userReducer } from "./user/user.reducer";

export const MiAppStore = StoreModule.forRoot(
    { 
        nombre: nombreReducer, 
        error: errorReducer, 
        user: userReducer
    }
)