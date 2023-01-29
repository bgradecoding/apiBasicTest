import { api } from "util/api";
import { CreateCommentParams, CreateCommentResponse } from "models/comments";
import { commentsRouter } from "constants/index";

export const fetchCreateComment = async (
  data: CreateCommentParams
): Promise<CreateCommentResponse> => {
  const response = await api.post<CreateCommentResponse>(
    commentsRouter.comments,
    data
  );
  return response.data;
};

export const fetchDeleteComment = async (
  id: string
): Promise<{ message: string; data: any }> => {
  const response = await api.delete<{ message: string; data: any }>(
    commentsRouter.comments + `/${id}`
  );
  return response.data;
};

export const fetchUpdateComment = async (
  id: string,
  data: { comment: string }
): Promise<CreateCommentResponse> => {
  const response = await api.patch<CreateCommentResponse>(
    commentsRouter.comments + `/${id}`,
    data
  );
  return response.data;
};
