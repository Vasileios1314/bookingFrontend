import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../store/user/selectors";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Flag from "react-world-flags";
import Avatar from "react-avatar";
import { formatDistanceToNow } from "date-fns";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { postCommentAction } from "../store/apartment/thunks";

export const Comments = (props) => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const trimmedComment = newComment.trim();
    if (trimmedComment === "") {
      return; // Input is empty or contains only spaces
    }

    dispatch(postCommentAction(newComment));
    setNewComment("");
  };

  const formatDate = (date) => {
    if (!date) {
      return ""; // Handle null or undefined date value
    }
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  };

  return (
    <CommentContainer>
      <Carousel fade keyboard touch variant="dark">
        {props.comments &&
          props.comments.map((comment, index) => (
            <Carousel.Item key={index} className="d-block w-100">
              <CommentItem>
                <UserInfo>
                  {comment.user?.image ? (
                    <UserImage
                      src={comment.user?.image}
                      alt={comment.user?.name}
                    />
                  ) : (
                    <UserAvatar>
                      <Avatar
                        name={
                          comment.user?.name ? comment.user?.name : user.name
                        }
                        size={40}
                        round={true}
                      />
                    </UserAvatar>
                  )}
                  <UserName>{comment.user?.name}</UserName>
                  <UserCountry>
                    <Flag
                      code={comment.user?.country}
                      style={{
                        width: "24px",
                        height: "16px",
                        marginLeft: "4px",
                      }}
                    />
                  </UserCountry>
                </UserInfo>
                <CommentTimestamp>
                  {formatDate(comment.createdAt)}
                </CommentTimestamp>
                <CommentText>"{comment.comment}"</CommentText>
              </CommentItem>
            </Carousel.Item>
          ))}
      </Carousel>
      {token !== null && (
        <CommentForm onSubmit={handleCommentSubmit}>
          <CommentInput
            placeholder="Enter your comment"
            value={newComment}
            onChange={handleCommentChange}
          />
          <CommentButton type="submit">
            <FontAwesomeIcon icon={faComment} /> &nbsp;Add Comment
          </CommentButton>
        </CommentForm>
      )}
    </CommentContainer>
  );
};

const CommentTimestamp = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const CommentInput = styled.textarea`
  height: 100px;
  resize: vertical;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 8px;
`;

const CommentButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 99px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #4caf50;
    border: 2px solid #4caf50;
  }
`;

const CommentItem = styled.div`
  background-color: #f8f8f8;
  padding: 40px;
  padding-left: 160px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const CommentText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 10px;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #666;
  border-radius: 50%;
`;

const UserName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-left: 8px;
`;

const UserCountry = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;
