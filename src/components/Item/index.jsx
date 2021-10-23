import React, {Component} from 'react';
import './index.css'

class Item extends Component {
state = {
    finish:false,
    mouseIsEnter:false
}

change = ()=>{
    const {finish} = this.state
    this.setState({finish:!finish})
}
//注意 这里不要通过构造器把props赋值给state 会有问题 应该直接调用props
    render() {

        return (
            //通过切换classname来调整css
            <li className={this.state.mouseIsEnter?'choose':'unchoose'} onMouseEnter={()=>this.mouse(true)} onMouseLeave={()=>this.mouse(false)} >
                <label >
                    <input type="checkbox" checked={this.state.finish} onChange={this.change}/>
                    <span>{this.props.text}</span>
                </label>
                {/*通过直接调整css*/}
                <button onClick={this.delete} className='delete' style={{display:this.state.mouseIsEnter?'inline':'none'}}>删除</button>
            </li>
        );
    }
    mouse = (enter)=>{
        this.setState({mouseIsEnter:enter})
    }
    delete =()=>{
        this.props.deleteItem(this.props.id)
    }

}

export default Item;