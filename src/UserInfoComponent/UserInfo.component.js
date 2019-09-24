import React from 'react';
import Avatar from '../AvatarComponent/Avatar.component';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       return (
           <div>
               <Avatar user={this.props.author} />
               <h4>{this.props.author.name}</h4>
               <p>{this.props.txt}</p>
           </div>
       )
    }
}

export default UserInfo;
