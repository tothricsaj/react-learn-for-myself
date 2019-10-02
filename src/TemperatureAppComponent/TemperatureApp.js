import React from 'react';

function BoilWaterVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water is boiling!</p>
    } else {
        return <p>The water is not boiling!</p>
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            temperature: ''
        };
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />

                <BoilWaterVerdict
                    celsius={parseFloat(temperature)}
                />
            </fieldset>
        );
    }
}

class TemperatureApp extends React.Component {
    render() {
        return(
            <div>
                <h2>Temperature App :)</h2>
                <Calculator />
            </div>
        );
    }
}

export default TemperatureApp;
