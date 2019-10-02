import React from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Farenheit'
};

// Conversitation functions
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function BoilWaterVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water is boiling!</p>
    } else {
        return <p>The water is not boiling!</p>
    }
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

//////////////////////////////////////////////////////////////

class TemperatureInput extends React.Component {
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
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleName[scale]}</legend>
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

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
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
