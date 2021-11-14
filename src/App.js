import './App.module.css';
import Header from "./components/header/header";
import {BrowserRouter} from "react-router-dom";
import Home from "./components/home/Home";
import c from "./App.module.css"

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Home/>
            </div>
        </BrowserRouter>
    );
}

export default App;
