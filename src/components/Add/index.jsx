import React, {Component} from 'react';
import './index.css'
import { v4 as uuidv4 } from 'uuid';
class Add extends Component {
    onkeyup = (event)=>{

        if(event.keyCode!==13){
            return
        }
        if(event.target.value.trim()===''){
            alert('输入不能为空')
            return
        }
        const uid = uuidv4()
        const todo = {
            id:uid,
            text:event.target.value,
            finish:false
        }

        //这里的addTodo是App传来的方法 在这个方法中的this是App而不是Add
        this.props.addTodo(todo)
        event.target.value = ''
    }
    render() {
        return (
            <input onKeyUp={this.onkeyup}  className='add' placeholder='请输入todo信息'/>
        );
    }
}

export default Add;