import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import Item from '../Item'

export default class Main extends React.Component {

    render() {

        const {todos} = this.props
        // console.log(todos)
        return (
            <ul className="todo-main">
                {
                    todos.map((item,index)=>{
                        return <Item key={item.id} {...item}/>
                    })
                }
            </ul>
        )
    }
}