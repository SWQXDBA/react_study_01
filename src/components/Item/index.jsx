import React, {Component} from 'react';

class Item extends Component {


    render() {
        return (
            <li onMouseOver={this.showDelete}>
                <label >
                    <input type="checkbox" checked={this.props.finish} onChange={()=>{}}/>
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