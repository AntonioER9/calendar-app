import calendarApi from "../../src/api/calendarApi"


describe('Pruebas en el CalendarApi', () => { 
    test('debe tener la configuración por defecto', () => { 
        //Sujeto de pruebas
        // console.log(calendarApi);
        expect(calendarApi.defaults.baseURL ).toBe(process.env.VITE_API_URL);
        
    });

    test("debe te tener el x-token en el header de todas las peticiones", async () => {
        const token = "ABC-123-XYZ";
        localStorage.setItem("token", token);
        const res = await calendarApi
            .post("/auth")
            .then((res) => res)
            .catch((res) => res);
        expect(res.config.headers["x-token"]).toBe(token);
      });
})