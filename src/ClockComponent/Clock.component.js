import React from 'react';
import styles from  './Clock.module.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <h1>This is a clock</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;
