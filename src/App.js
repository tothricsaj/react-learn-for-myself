import React from 'react';
import './App.css';
import HiddenMenu from './MenuComponent/HiddenMenu/Hidden.menu';
import VisibleMenu from './MenuComponent/VisibleMenu/Visible.menu';
import BoxComponent from './BoxComponent/Box.component';
import Comment from './CommentComponent/Comment.component'
import Clock from './ClockComponent/Clock.component';

let commentData = {
    author: {
        name: 'Test User',
        imgUrl: 'https://images.pexels.com/photos/2146042/pexels-photo-2146042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100'
    },
    txt: 'Test comment',
    date: new Date().toLocaleDateString()
};

class App extends React.Component{
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            isMenuVisible: false
        };
    }

    toggleMenu() {
        this.setState({isMenuVisible: !this.state.isMenuVisible})
    }

    render() {
        const isMenu = this.state.isMenuVisible;
        let menu;

        if(isMenu) {
            menu = <VisibleMenu onClick={this.toggleMenu} />
        } else {
            menu = <HiddenMenu onClick={this.toggleMenu} />;
        }

        return (
            <div className="App">
                {menu}
                <BoxComponent msg='Hello my friend!' />
                <BoxComponent msg='Mesaure failure!' />
                <hr/>
                <Comment
                    author={commentData.author}
                    txt={commentData.txt}
                    date={commentData.date}
                />
                <Clock />
            </div>
      );
    }
}

export default App;
