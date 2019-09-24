import React from 'react'
import UserInfo from '../UserInfoComponent/UserInfo.component';
import styles from './Comment.module.css';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles.wrapper}>
                <UserInfo author={this.props.author} txt={this.props.txt}/>
                <p className={styles.date}>{this.props.date}</p>
            </div>
        )
    }
}

export default Comment;
