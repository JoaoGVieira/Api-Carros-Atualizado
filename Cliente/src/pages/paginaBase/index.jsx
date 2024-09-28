import Header from '../../componentes/header'
import Footer from '../../componentes/footer'
import Container from '../../componentes/container'
import { Outlet } from 'react-router-dom'

function paginaBase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default paginaBase