import React from 'react'
import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/ProjectPage";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <div className={'menuBurger'}>
                    <BurgerMenu />
                </div>
                <div className='sideBar'>
                    <SideBar />
                </div>
                <div className='content'>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/skills'>
                        <Skills />
                    </Route>
                    <Route path='/projects'>
                        <Projects />
                    </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
