import { act, renderHook } from '@testing-library/react';
import { useUiStore } from '../../src/hooks';
import { Provider } from 'react-redux';
import { store, uiSlice } from '../../src/store';
import { configureStore } from '@reduxjs/toolkit';

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            ui: uiSlice.reducer
        },
        preloadedState: {
            ui: {...initialState}
        }
    })
}

describe('Pruebas en el useUiStore', () => { 

    test('Debe regresar los valores por defecto', () => { 
        //mock del store
        const mockStore = getMockStore({isDateModalOpen: false})
        //sujeto de pruebas
        const {result} = renderHook( () => useUiStore(), {
            wrapper: ({children}) => <Provider store={mockStore} >{children}</Provider> 
        });

        // console.log(result);

        expect(result.current).toEqual({
            isDateModalOpen: false,
            closeDateModal: expect.any(Function),
            openDateModal:  expect.any(Function),
            toggleDateModal:expect.any(Function), 
        });
    });

    test('openDateModal debe colocar true en el isDateModalOpen', () => { 
        const mockStore = getMockStore({isDateModalOpen: false})
        const {result} = renderHook( () => useUiStore(), {
            wrapper: ({children}) => <Provider store={mockStore} >{children}</Provider> 
        });

        const {openDateModal} = result.current;

        act(() => {
            openDateModal();
        });

        expect(result.current.isDateModalOpen).toBeTruthy();
        
    });

    test('closeDateModal debe colocar false en el isDateModalOpen', () => { 
        const mockStore = getMockStore({isDateModalOpen: true})
        const {result} = renderHook( () => useUiStore(), {
            wrapper: ({children}) => <Provider store={mockStore} >{children}</Provider> 
        });

        // const {closeDateModal} = result.current; 
        // otra forma de hacerlo
        act(() => {
            result.current.closeDateModal();
        });

        expect(result.current.isDateModalOpen).toBeFalsy();
        
    });

    test('toggleDateModal debe cambiar el estado', () => { 
        const mockStore = getMockStore({isDateModalOpen: true})
        const {result} = renderHook( () => useUiStore(), {
            wrapper: ({children}) => <Provider store={mockStore} >{children}</Provider> 
        });

        // const {closeDateModal} = result.current; 
        // otra forma de hacerlo
        act(() => {
            result.current.toggleDateModal();
        });
        
        expect(result.current.isDateModalOpen).toBeFalsy();
        
        act(() => {
            result.current.toggleDateModal();
        });
        
        expect(result.current.isDateModalOpen).toBeTruthy();
    });
})