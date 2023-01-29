export interface GetBoardsParams {
  skip: number;
  take: number;
}

export type Boards = {
  id: string;
  usersId: string;
  name: string;
  content: string;
  created_at: string;
};

export type Comments = {
  id: string;
  usersId: string;
  comment: string;
  created_at: string;
};

export interface GetBoardsResponse {
  data: Boards[];
  message: string;
}

export interface GetBoardResponse {
  data: {
    post: Boards;
    comment: Comments[];
  };
  message: string;
}

export interface CreateBoardParams {
  name: string;
  content: string;
}

export interface CreateBoardResponse {
  data: Boards;
  message: string;
}
