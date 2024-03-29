import { Provider } from 'react-redux';
import { AppRouter } from './router/';
import { BrowserRouter, HashRouter} from 'react-router-dom';
import { store } from './store';

//Provider store Necesario para dejar nuestro store en la parte más alta de la aplicación
//BrowserRouter Necesario para realizar el manejo de rutas con RRD
export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter> 
      {/* <HashRouter> otro sistema de manejo de rutas para despliegue */}
        <AppRouter />
      {/* </HashRouter> */}
      </BrowserRouter>
    </Provider>
  )
}
