import { AppRouter } from './router/';
import { BrowserRouter} from 'react-router-dom';

export const CalendarApp = () => {
  return (
    // Necesario para realizar el manejo de rutas con RRD
    <BrowserRouter> 
      <AppRouter />
    </BrowserRouter>
  )
}
