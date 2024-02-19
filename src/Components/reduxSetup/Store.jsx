import storage from "redux-persist/lib/storage";
import myReducer from "./Features"
import { persistReducer, PERSIST } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig={
    key: "root",
    storage: storage
}

const Henry = persistReducer(persistConfig,myReducer)

export const thisIsOurStore = configureStore({
    reducer: {Henry},
    middleware:(e)=> e({
        serializableCheck:{
            ignoreActions:[PERSIST]
        }
    })
})