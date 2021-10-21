import React,{Component} from "react";
import './App.css'
import Add from "./components/Add";
import List from "./components/List/List";
class App extends Component {
    render() {
        return (
            <div className='app'>
                <Add/>
                <List/>
            </div>
        );
    }
}

export default App;
