import React,{Component} from "react";
import './App.css'
import Add from "./components/Add";
import List from "./components/List/List";
class App extends Component {
    state = {
        todos:[
            {
                text:'你好啊',
                finish:false
            },
            {
                text:'你好啊2',
                finish:false
            }
        ]
    }
    render() {
        return (
            <div className='app'>
                <Add/>
                <List todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
