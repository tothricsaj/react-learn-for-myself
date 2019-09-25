import React from 'react';
import styles from './Hidden.module.css';

class HiddenMenu extends React.Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <p className={styles.menuButton}>Menu</p>
            </div>
        );
    }
}

export default HiddenMenu;
