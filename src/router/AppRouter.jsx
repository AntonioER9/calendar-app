import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';


//Componente en el cual llevaremos el manejo de las rutas
export const AppRouter = () => {

  const authStatus =  'authenticated';//'not-authenticated'; //authenticated

  return (
    <Routes>
      {
        (authStatus === 'not-authenticated')
          ? <Route path='/auth/*' element={<LoginPage />}/>
          : <Route path='/*' element={<CalendarPage />}/>
      }
      <Route path='/*' element={<Navigate to='/auth/login' />}/>
    </Routes>
  )
}
