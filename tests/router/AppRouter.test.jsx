import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { AppRouter } from '../../src/router/AppRouter';

jest.mock('../../src/hooks/useAuthStore'); //mock del store

jest.mock('../../src/calendar', () => ({ //mock de un componente, para evitar hacer el mock de todos los hooks dentro de el
    CalendarPage: () => <h1>CalendarPage</h1>
}))




describe('Pruebas en <AppRouter />', () => {

    const mockCheckAuthToken = jest.fn();

    beforeEach(() => jest.clearAllMocks() );


    test('debe de mostrar la pantalla de carga y llamar checkAuthToken', () => {

        useAuthStore.mockReturnValue({ //simulando lo que respondería el store
            status: 'checking',
            checkAuthToken: mockCheckAuthToken
        });

        render( <AppRouter /> ) //renderizar el app router
        // screen.debug(); //genera un snapshot de nuestro componente

        expect( screen.getByText('Cargando...') ).toBeTruthy() 
        expect( mockCheckAuthToken ).toHaveBeenCalled();

    });

    test('debe de mostrar el login en caso de no estar autenticado', () => {
        
        useAuthStore.mockReturnValue({
            status: 'not-authenticated',
            checkAuthToken: mockCheckAuthToken
        });

        const { container } = render(
            <MemoryRouter initialEntries={['/auth2/algo/otracosa']}>
                <AppRouter />
            </MemoryRouter>
        );

        expect( screen.getByText('Ingreso') ).toBeTruthy();
        expect( container ).toMatchSnapshot(); 
    });

    test('debe de mostrar el calendario si estamos autenticados', () => {
        
        useAuthStore.mockReturnValue({
            status: 'authenticated',
            checkAuthToken: mockCheckAuthToken
        });

        render(
            <MemoryRouter>
                <AppRouter />
            </MemoryRouter>
        );

        expect( screen.getByText('CalendarPage') ).toBeTruthy();
        
    });
    


    
});