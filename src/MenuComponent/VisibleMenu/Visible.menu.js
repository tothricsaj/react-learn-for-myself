import React from 'react';
import styles from  './Visible.module.css';

class VisibleMenu extends React.Component {

    render() {
        return(
            <div className={styles.wrapper}>
                <ul>
                    <p className={styles.exit}>X</p>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}

export default VisibleMenu;
