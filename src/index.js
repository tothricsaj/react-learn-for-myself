import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class FancyBorder extends React.Component {
    constructor(pros) {
        super(pros);
    }

    render() {
        return (
            <div className={'FancyBorder FancyBorder-' + this.props.color}>
                {this.props.children}
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div>
                <FancyBorder color={'blue'}>
                    <h2>Hello World!!</h2>
                    <p>Innumine patris...:)</p>
                </FancyBorder>

                <FancyBorder color={'green'}>
                    <h2>Welcome my Practice project</h2>
                </FancyBorder>
            </div>
        );
    }
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Main />, document.getElementById('root'));

