import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Page404 from './pages/404'
import PaginaBase from './pages/paginaBase'
import Popular from './pages/Popular'
import Luxo from './pages/Luxo'
import Offroad from './pages/Offroad'
import Esportivo from './pages/Esportivo'
import Register from './pages/Logins/Logar'
import Login from './pages/Logins/Registar'


function AppRoutes() {
    return (

    <BrowserRouter>

    <Routes>
    
    <Route path='/' element={ <PaginaBase /> }>
        <Route index element={ <Home /> }></Route>
        <Route path="/popular" element={ <Popular /> }></Route>
        <Route path="/luxo" element={ <Luxo /> }></Route>
        <Route path="/offroad" element={ <Offroad /> }></Route>
        <Route path="/esportivo" element={ <Esportivo /> }></Route>
        <Route path='/register' element={ <Register />}></Route>
        <Route path='/login' element={ <Login />}></Route>
        <Route path="*" element={ <Page404 /> }></Route>
    </Route>
    
    </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes