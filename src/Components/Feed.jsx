import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions  from "./InputOptions";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect( () => {

  }, [])

  const sendPost = (e) => {
    e.precentDefault();

  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
            <InputOptions Icon={ImageIcon} title='Photo' color="#70B5F9"/>
            <InputOptions Icon={SubscriptionsIcon} title='Video' color="#e7a33e"/>
            <InputOptions Icon={EventNoteIcon} title='Event' color="#c0cbcd"/>
            <InputOptions Icon={CalendarViewDayIcon} title='Write Article' color="#7fc15e"/>
        </div>
      </div>

      {posts.map((post) => (
        <Post />
      ))}
        
      <Post 
        name="Anirudh Aggarwal"
        description="MERN developer"
        message="always remember to have fun "
      />
    </div>
  );
}

export default Feed;
