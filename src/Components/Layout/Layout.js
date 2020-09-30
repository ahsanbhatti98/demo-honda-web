import React from 'react'
import HOC from '../../H.O.C/HOC'
import NavigationBar from '../Header/NavBar/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../Carousel/Carosuel'
import Sections from '../Sections/Sections';
import Footer from '../Footer/Footer';

function Layout() {
    return (
        <HOC>
            <NavigationBar />
            <Carousel />
            <Sections />
            <Footer />

        </HOC>
    )
}
export default Layout