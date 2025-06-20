import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']