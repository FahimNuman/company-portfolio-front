import React from 'react';
import { Outlet } from 'react-router-dom';
import Content from '../../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';

const Main = () => {
    return (
        <div>
            <Header/>
            <Subscribe/>
            <Content/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;