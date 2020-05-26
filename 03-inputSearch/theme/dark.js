import base from './base'
import merge from 'merge'

export default merge.recursive(true, base, {
    Input: {
        backgroundColor: '#000',
        color: '#fff'
    },

    InputOptions: {
        backgroundColor: '#333',
        color: '#fff'
    }
})