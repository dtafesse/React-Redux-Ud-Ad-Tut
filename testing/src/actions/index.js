import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");

  // promise midelware provides an extension
  // point between dispatching an action,
  // and the moment it reaches the reducer.

  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}
