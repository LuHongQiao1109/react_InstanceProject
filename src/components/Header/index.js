import React from 'react';
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends React.Component {

    handleKeyup=(event)=>{
        const {keyCode,target} = event
        if(keyCode !== 13 ) return
        if(target.value.trim() === ''){
            alert('输入不能为空')
            return
        }
        const newObject = {id:nanoid(),name:target.value,done:false}
        this.props.addTodo(newObject)
        console.log(this.props)
        target.value=''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyup} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
