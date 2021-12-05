import React from 'react';
import Footer from './Footer';
import Menu from './Menu';
import NavBar from './NavBar';

const Gallery = () =>{
    
    return(
        <div>
            <NavBar />
            <div class="separator">
                <div class="line"></div>
                    <h2 style={{color:"#14546A"}}>MODESTO JELLO CAKES GALLERY</h2>
            <div class="line"></div>
            </div>
            <Menu />
            <Footer />     
        </div>
    )
}
export default Gallery;