import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcon from 'react-icons/md';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Gallery',
    path: '/gallery',
    icon: <AiIcons.AiFillPicture />,
    cName: 'nav-text'
  },
  {
    title: 'Order',
    path: '/order',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/about-us',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <MdIcon.MdAccountBox />,
    cName: 'nav-text'
  }
];