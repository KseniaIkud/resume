import React, {useState} from 'react'
import './App.css';
import {Route, HashRouter} from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/ProjectPage";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Start from "./components/Start/Start"

const App = () => {
    const [language, toggleLanguage] = useState('english')
    return (
        <HashRouter>
            <div className='app'>
                <div className={'menuBurger'}>
                    <BurgerMenu language={language} toggleLanguage={toggleLanguage} />
                </div>
                <div className='sideBar'>
                    <SideBar language={language} toggleLanguage={toggleLanguage} />
                </div>
                <div className='content'>
                    <Route exact path='/'>
                        <Start language={language}/>
                    </Route>
                    <Route path='/resume'>
                        <Start language={language}/>
                    </Route>
                    <Route path='/home'>
                        <Home language={language}/>
                    </Route>
                    <Route path='/skills'>
                        <Skills language={language}/>
                    </Route>
                    <Route path='/projects'>
                        <Projects language={language}/>
                    </Route>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
