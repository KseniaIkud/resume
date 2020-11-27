import React from 'react'
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import {Route, BrowserRouter} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Games from "./components/Games/Games";

function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <div className='header'>
                    <Header/>
                </div>
                <div className="body">
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/skills'>
                        <Skills/>
                    </Route>
                    <Route path='/projects'>
                        <Projects />
                    </Route>
                    <Route path='/games'>
                        <Games />
                    </Route>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
