import React, { Component } from 'react'
import './css/form.css'

class Form extends Component{
    render(){
        return(
            <div className="form">
                <form onSubmit={this.props.handleSubmit}>
                    <input name="title" 
                    type="text"//テキストボックス
                    placeholder="タイトル ※必須"//ヒントメッセージ
                    defaultValue="reactの勉強"//初期値
                    /><br/>

                    <textarea name="disc" //テキストエリア
                    placeholder="説明を入力"
                    defaultValue="todoアプリを作っています！"
                    ></textarea><br/>

                    <button type="submit">
                    todoを作成    
                    </button>

                </form>
            </div>
        )
    }
}

export default Form