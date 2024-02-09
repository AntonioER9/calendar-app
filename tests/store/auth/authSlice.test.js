const { authSlice } = require("../../../src/store/auth/authSlice");
const { initialState } = require("../../fixtures/authStates");

describe('Pruebas en authSlice', () => { 

    test('Debe regresar el estado inicial', () => { 

        expect(authSlice.getInitialState()).toEqual(initialState)
    
    });


});