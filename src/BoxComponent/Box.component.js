import React from 'react';
import styles from './Box.module.css'; // important --> only dot and module and dot and css

class BoxComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isToggleOn: true,
        }
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return <div className={ styles.wrapperBox }>
            <h2 className={ styles.h2Class }>{ this.props.msg }</h2>
            <div className={styles.buttonDiv} onClick={this.handleClick}>{this.state.isToggleOn? ':)' : ':('}</div>
        </div>
    }
}

export default BoxComponent;
