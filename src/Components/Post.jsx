import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import InputOptions from "./InputOptions";
import ThumbsUpDownOutlinedIcon from "@material-ui/icons/ThumbsUpDownOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SharedOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

function Post({ name, description, message, photoURL }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoURL} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbsUpDownOutlinedIcon} title="Like" color="gray"/>
        <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOptions Icon={SharedOutlinedIcon} title="Share" color="gray" />
        <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
