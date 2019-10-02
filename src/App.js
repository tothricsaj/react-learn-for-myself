import React from 'react';
import './App.css';
import HiddenMenu from './MenuComponent/HiddenMenu/Hidden.menu';
import VisibleMenu from './MenuComponent/VisibleMenu/Visible.menu';
import BoxComponent from './BoxComponent/Box.component';
import Comment from './CommentComponent/Comment.component'
import Clock from './ClockComponent/Clock.component';
import NameForm from './NameFormComponent/NameForm.component';
import TemperatureApp from './TemperatureAppComponent/TemperatureApp';

let commentData = [
     {
        author: {
            name: 'Test User',
            imgUrl: 'https://images.pexels.com/photos/2146042/pexels-photo-2146042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100'
        },
        txt: 'Test comment',
        date: new Date().toLocaleDateString(),
        key: 1
    },
    {
        author: {
            name: 'Süni',
            imgUrl: 'https://images.pexels.com/photos/2146032/pexels-photo-2146032.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100'
        },
        txt: 'Test comment adfadfadf',
        date: new Date().toLocaleDateString(),
        key: 2
    },
     {
        author: {
            name: 'Kistücsök',
            imgUrl: 'https://images.pexels.com/photos/2146022/pexels-photo-2146022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100'
        },
        txt: 'foo bar',
        date: new Date().toLocaleDateString(),
        key: 3
    },
];

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
                <div className="tempAppBtn">Temperature App</div>
                <BoxComponent msg='Hello my friend!' />
                <BoxComponent msg='Mesaure failure!' />
                <hr/>
                <ul className="commentLister">
                    {
                        commentData.map((data) => {
                        return <Comment
                            author={data.author}
                            txt={data.txt}
                            date={data.date}
                            key={data.key}
                        />
                        })
                    }
                </ul>
                <Clock />
                <NameForm />
            </div>
      );
    }
}

export default App;
