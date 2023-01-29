import { api } from "util/api";
import { boardsRouter } from "constants/index";
import {
  GetBoardsParams,
  GetBoardsResponse,
  GetBoardResponse,
  CreateBoardParams,
  CreateBoardResponse,
} from "models/boards";

export const fetchGetBoards = async (
  data: GetBoardsParams
): Promise<GetBoardsResponse> => {
  const response = await api.get<GetBoardsResponse>(
    boardsRouter.getBoards + `?skip=${data.skip}&take=${data.take}`
  );
  return response.data;
};

export const fetchGetBoard = async (id: string): Promise<GetBoardResponse> => {
  const response = await api.get<GetBoardResponse>(
    boardsRouter.getBoards + `/${id}`
  );
  return response.data;
};

export const fetchCreateBoard = async (
  data: CreateBoardParams
): Promise<CreateBoardResponse> => {
  const response = await api.post<CreateBoardResponse>(
    boardsRouter.getBoards,
    data
  );
  return response.data;
};

export const fetchDeleteBoard = async (
  id: string
): Promise<{ message: string; data: any }> => {
  const response = await api.delete<{ message: string; data: any }>(
    boardsRouter.getBoards + `/${id}`
  );
  return response.data;
};

export const fetchUpdateBoard = async (
  id: string,
  data: CreateBoardParams
): Promise<CreateBoardResponse> => {
  const response = await api.patch<CreateBoardResponse>(
    boardsRouter.getBoards + `/${id}`,
    data
  );
  return response.data;
};
