export const CHANGE_TITLE_COMMENT = 'CHANGE_TITLE_COMMENT';
export const CHANGE_TEXT_COMMENT = 'CHANGE_TEXT_COMMENT';
export const SEND_COMMENT = 'SEND_COMMENT';
export const COMMENT_CREATED_SUCCESS = 'COMMENT_CREATED_SUCCESS';
export const RESET_CREATED_SUCCESS = 'RESET_CREATED_SUCCESS';
export const resetCreatedSuccess = () => ({
  type: RESET_CREATED_SUCCESS,
});
export const commentCreatedSuccess = (payload) => ({
  type: COMMENT_CREATED_SUCCESS,
  payload
});

export const sendComment = () => ({
  type: SEND_COMMENT,
});
export const changeTextComment = (payload) => ({
  type: CHANGE_TEXT_COMMENT,
  payload,
});
export const changeTitleComment = (payload) => ({
  type: CHANGE_TITLE_COMMENT,
  payload,
});