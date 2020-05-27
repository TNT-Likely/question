import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import './index.less'

class App extends PureComponent {
    state = {
        sourceLeft: 'var a = 1',
        sourceRight: 'var b = 2',
        isSubmit: false,
        sim: 0
    }

    render() {
        const { isSubmit, sourceLeft, sourceRight, sim } = this.state

        return <div>
            <h1>js文件在线相似度检测</h1>
            <div className="source">
                <div className="left">
                    <textarea onChange={this.handleSourceChange('sourceLeft')} value={sourceLeft}></textarea>
                </div>
                <div className="right">
                    <textarea onChange={this.handleSourceChange('sourceRight')} value={sourceRight}></textarea>
                </div>
            </div>
            <button className="submit" disabled={isSubmit} onClick={this.handleSubmit}>远程比较</button>
            <div className="result">
                代码相似度为:{sim}%
            </div>
        </div>
    }

    handleSourceChange = key => {
        const { state } = this
        const newState = Object.assign({}, state)
        
        return (e) => {
            const { value } = e.target
            newState[key] = value
            this.setState({...newState})
        }
    }

    handleSubmit = e => {
        const { sourceLeft, sourceRight } = this.state
        fetch('http://localhost:3000', {
            method: 'post',
            body: JSON.stringify({
                sourceLeft,
                sourceRight
            }),
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors'
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                sim: res.sim
            })
        })
    }
}

ReactDOM.render(<App />, document.querySelector('#app'))
