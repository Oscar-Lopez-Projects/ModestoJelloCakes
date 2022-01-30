import React,{useState} from 'react'
import '../styling/UpdatedNavBar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './SlidebarData.js';
import mainLogo from '../../src/MjcLogo.png';
function UpdatedNavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className='ok-omg'>
      <IconContext.Provider value={{ color: '#fff' }}>
         <div>
            <div className='navbar'>
                <div>
                  <Link to='#' className='menu-bars'>
                      <FaIcons.FaBars onClick={showSidebar} />
                  </Link>

                </div>
              
                <div className='pl'>
                  <img className='navbar-flex-updated'  src={mainLogo}/>
                </div>
                
                
            </div>
                
            
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <div className='navbar-toggle'>
               <div className='x-div'>
               <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose className='oam'/>
                </Link>
                </div> 
            </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default UpdatedNavBar
