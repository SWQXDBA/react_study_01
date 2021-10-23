import React, {Component} from 'react';
import Item from "../Item";

class List extends Component {

    render() {
        const {todos} = this.props
        return (
            <ul className='list'>
                {
                    todos.map((todo, index) => {
                            return <Item key = {todo.id} deleteItem={this.props.deleteItem}  {...todo}/>
                        }
                    )
                }
            </ul>
        );
    }
}

export default List;