import React from 'react';
import './App.css';
import BoxComponent from './BoxComponent/Box.component';
import Comment from './CommentComponent/Comment.component'

let commentData = {
    author: {
        name: 'Test User',
        imgUrl: 'https://images.pexels.com/photos/2146042/pexels-photo-2146042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    txt: 'Test comment',
    date: new Date().toLocaleDateString()
};

function App() {
  return (
    <div className="App">
      <BoxComponent msg='Hello my friend!' />
      <BoxComponent msg='Dogy, kitty, mesaure failure!' />
      <hr/>
      <Comment
          author={commentData.author}
          txt={commentData.txt}
          date={commentData.date}
      />
    </div>
  );
}

export default App;
