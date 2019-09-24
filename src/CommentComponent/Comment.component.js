import React from 'react'
import Avatar from '../AvatarComponent/Avatar.component';
import styles from './Comment.module.css';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles.wrapper}>
                <Avatar user={this.props.author} />
                <h4>{this.props.author.name}</h4>
                <p>{this.props.txt}</p>
                <p className={styles.date}>{this.props.date}</p>
            </div>
        )
    }
}

export default Comment;
