import React, {Component} from 'react';

class Item extends Component {

state = {
    finish:false
}
constructor(props) {
    super(props)
    this.state.finish = props.finish
}
change = ()=>{
    const {finish} = this.state
    this.setState({finish:!finish})
}
    render() {
        return (
            <li onMouseOver={this.showDelete}>
                <label >
                    <input type="checkbox" checked={this.state.finish} onChange={this.change}/>
                    <span>{this.props.text}</span>
                </label>
                <button ref={'delete'} style={{display:'none'}}>删除</button>

            </li>
        );
    }
    showDelete = ()=>{

    }
}

export default Item;