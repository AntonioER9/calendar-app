import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, calendarSlice } from './';

//Almacen de información de toda nuestra app
export const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
    }
})