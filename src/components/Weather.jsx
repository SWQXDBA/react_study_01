import React from "react";

export default class Weather extends React.Component {
    state = {isgood: true}
    change = () => {
        const {isgood} = this.state
        this.setState({isgood:!isgood})
    }

    render() {
        return (

            <div>
                <h1>今天好吗? {this.state.isgood ? '好' : '不太好'}</h1>
                <button onClick={this.change}>改变</button>
            </div>
        );
    }
}
//export default Weather;