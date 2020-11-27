import React from 'react'
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className='app'>
            <div className='header'>
                <Header/>
            </div>
            <div className="body">
                <Home/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
