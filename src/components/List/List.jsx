import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
            <ul className='list'>
                <li>
                    <input type="checkbox"/>
                    <span>已完成</span>
                    <button>删除</button>
                </li>
            </ul>
        );
    }
}

export default List;