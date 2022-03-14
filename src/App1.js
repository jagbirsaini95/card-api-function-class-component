import React from 'react';
// import Button from './components/Button';
export default class App1 extends React.Component {
    constructor() {
        super();
        this.state = {
            increment: 0,
            input: '',
            //  child:''
        }
    }
    handleCounter = (e) => {
        if (e === '+') {
            this.setState({
                //  child:e,
                'increment': this.state.increment + 1
            })
        } else {
            this.setState({
                'increment': this.state.increment - 1
            })
        }
    }

    handleInput(e) {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <>
                <h1 align="center">{this.state.increment}</h1>
                <button onClick={() => this.handleCounter('+')}>increment</button><br />
                <button onClick={() => this.handleCounter('-')}>decrement</button><br />

                {this.state.input}<br />
                <input value={this.state.input} style={{ color: 'red' }} onChange={(e) => this.handleInput(e)} /><br />

                {/* child to parent input: {this.state.child}<br />
                <Button myHandler={this.handleCounter} name={'counter'} /> */}

            </>
        )
    }
}