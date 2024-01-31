import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './';

//Almacen de información de toda nuestra app
export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
})