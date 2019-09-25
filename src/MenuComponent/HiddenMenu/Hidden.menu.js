import React from 'react';
import styles from './Hidden.module.css';

class HiddenMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles.wrapper}>
                <p className={styles.menuButton}
                   onClick={this.props.onClick}
                >
                    Menu
                </p>
            </div>
        );
    }
}

export default HiddenMenu;
