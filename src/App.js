import React, {useState} from 'react'
import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/ProjectPage";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

const App = () => {
    const [language, toggleLanguage] = useState('english')
    return (
        <BrowserRouter>
            <div className='app'>
                <div className={'menuBurger'}>
                    <BurgerMenu />
                </div>
                <div className='sideBar'>
                    <SideBar language={language} toggleLanguage={toggleLanguage} />
                </div>
                <div className='content'>
                    <Route path='/home'>
                        <Home language={language}/>
                    </Route>
                    <Route path='/skills'>
                        <Skills language={language}/>
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
