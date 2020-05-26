import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import InputSearch from './lib/index.jsx'

class App extends Component {
    state = {
        lang: 'zh',
        theme: 'light'
    }

    render() {
        const { lang, theme } = this.state

        return <div>
            <p>输入搜索框demo</p>
            <p>
                切换语言
                <select onChange={this.handleLanguage}>
                    <option value='zh'>中文</option>
                    <option value='en'>英文</option>
                </select>
            </p>
            <p>
                切换主题
                <select onChange={this.handleTheme}>
                    <option value='light'>明亮</option>
                    <option value='dark'>暗黑</option>
                </select>
            </p>


            <InputSearch lang={lang} theme={theme} />
        </div>
    }

    handleLanguage = (e) => {
        this.setState({
            lang: e.target.value
        })
    }

    handleTheme = e => {
        this.setState({
            theme: e.target.value
        })
    }
    
}
ReactDOM.render(<App />, document.querySelector('#app'))