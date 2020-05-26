import React, { PureComponent } from 'react'
import language from '../language/index'
import themeLib from '../theme/index'
import './index.less'

class InputSearch extends PureComponent {
    state = {
        showOptions: false,
        options: [
            {key: 1, value: 'BeiJing'},
            {key: 2, value: 'ShangHai'},
            {key: 3, value: 'GuangZhou'}
        ],
        value: ''
    }

    render() {
        const { lang, theme } = this.props
        const { showOptions, options, value } = this.state

        const Text = language[lang]
        const Style  = themeLib[theme]

        return <div className={`${theme}`} style={Style.InputSearch}>
            <input style={Style.Input} placeholder={Text.placeholder} onChange={this.handleChange} value={value} />
            <div className={` ${showOptions ? '' : 'hidden'}`} style={Style.InputOptions}>
                {
                    options.length && options.map(i => <div style={Style.InputOption} key={i.key} onClick={this.handleSelect.bind(null, i.value)}>{i.value}</div>)
                }
            </div>
        </div>
    }

    handleChange = e => {
        const { value = '' } = e.target
        const { options } = this.state

        /** 此处省略接口查询 */
        const newOptions = [].concat(options)

        this.setState({
            options: newOptions,
            showOptions: !!value,
            value
        })
    }

    handleSelect = (value) => {
        this.setState({
            value,
            showOptions: false
        })
    }
}

InputSearch.defaultProps = {
    lang: 'zh',
    theme: 'light'
}

export default InputSearch
