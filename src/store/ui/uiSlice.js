//Información sobre el UI
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({ //modifica el state de nuestra app
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onOpenDateModal: (state) => {
            // return { (FUERA DEL TOOLKIT)
            //     ...state,
            //     isDateModalOpen: true
            // }
            state.isDateModalOpen = true; // El toolkit nos permite hacer este código como mutación, con redux normal deberiamos utilizar un ...spread
        },

        onCloseDateModal: (state) => {
            state.isDateModalOpen = false;
        }
    }
});
            
            
// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;