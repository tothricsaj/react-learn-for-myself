import React from 'react';
import './App.css';
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

function App() {
  return (
    <div className="App">
      <VisibleMenu />
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

export default App;
