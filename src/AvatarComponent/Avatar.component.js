import React from 'react';

class AvatarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img
                src={this.props.user.imgUrl}
                alt={this.props.user.name}
            />
        )
    }
}

export default AvatarComponent;
