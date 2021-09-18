import React from 'react';
import Footer from './Footer';
import Menu from './Menu';
import NavBar from './NavBar';

const Gallery = () =>{
    return(
        <div>
            <NavBar />
            <div className="test">
            <div className="box-gallery-name-div"> Modesto Jello Cakes Gallery </div>
            </div>
            <Menu />
            <Footer />
        </div>
    )
}
export default Gallery;