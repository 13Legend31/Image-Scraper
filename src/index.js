import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.css'
import train from './train'

const load = require('./load.js');

function Pic(props) {
    return <img className = 'pic' src= {props.src}></img>
}
function Pictures() {
    return <section className = 'pictures'>
        <Pic/>
        <Pic/>
        <Pic/>
        <Pic/>
        <Pic/>
        <Pic/>
        <Pic/>
        <Pic/>
        <Pic/>
        <Pic/>
    </section>
}

class App extends Component {
    constructor() {
        super();
        this.Load = this.Load.bind(this);
        this.Clear = this.Clear.bind(this);
    }
    Clear() {
        const pics = document.getElementsByClassName('pic');
        for (let i = 0; i < pics.length; i++) {
            pics[i].src = '';
        }
    }
    Load() {
        const src = load();
        const pics = document.getElementsByClassName('pic');
        for (let i = 0; i < src.length; i++) {
            pics[i].src = src[i];
        }
    }
    render() {
        return (
            <section className = 'app'>
                <Pictures/>
                <button className = 'load' onClick = {this.Load}>Load</button>
                <button className = 'train'>Train</button>
                <button className = 'clear' onClick = {this.Clear}>Clear</button>
            </section>
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)