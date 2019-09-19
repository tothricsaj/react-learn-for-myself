import React from 'react';
import styles from './Box.module.css'; // important --> only dot and module and dot and css

class BoxComponent extends React.Component {
    render() {
        return <div className={ styles.wrapperBox }>
            <h2 className={ styles.h2Class }>What the bloody horse lungs?????</h2>
        </div>
    }
}

export default BoxComponent;
