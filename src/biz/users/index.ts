import { api } from "util/api";
import { usersRouter } from "constants/index";
import { LoginParams, LoginResponse } from "models/users";

export const fetchLogin = async (data: LoginParams): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(usersRouter.login, data);
  return response.data;
};
