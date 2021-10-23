import React,{Component} from "react";
import './App.css'
import Add from "./components/Add";
import List from "./components/List/List";
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
    state = {
        todos:[
           /* {
                id:uuidv4(),
                text:'你好啊',
                finish:false
            }*/
        ]
    }
    addTodos = (newTodo)=>{
        const {todos} = this.state
        this.setState({todos : [newTodo,...todos]})
    }
    deleteItem = (id)=>{

        const {todos} = this.state;
        const newTodos = todos.filter((obj,index)=>{
            console.log('obj.id'+obj.id)

            console.log('id'+id)
            return obj.id !== id
        });
        console.log(newTodos)
        this.setState({todos: newTodos})
    }

    render() {
        return (
            <div className='app'>
                <Add addTodo = {this.addTodos}/>
                <List deleteItem = {this.deleteItem} todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
