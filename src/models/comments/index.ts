export interface CreateCommentParams {
  boardId: string;
  comment: string;
}

export type Comments = {
  usersId: string;
  boardsId: string;
  comment: string;
  id: string;
  created_at: string;
};

export interface CreateCommentResponse {
  message: string;
  data: Comments;
}
