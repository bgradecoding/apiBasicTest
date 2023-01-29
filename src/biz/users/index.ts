import { api } from "util/api";
import { usersRouter } from "constants/index";
import {
  LoginParams,
  LoginResponse,
  SignupParams,
  UserInfoResponse,
  UserUpdateResponse,
} from "models/users";

export const fetchLogin = async (data: LoginParams): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(usersRouter.login, data);
  return response.data;
};

export const fetchSignup = async (
  data: SignupParams
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(usersRouter.signup, data);
  return response.data;
};

export const fetchUserInfo = async (): Promise<UserInfoResponse> => {
  const response = await api.get<UserInfoResponse>(usersRouter.userInfo);
  return response.data;
};

export const fetchUpdateUserInfo = async (
  data: SignupParams
): Promise<UserUpdateResponse> => {
  const response = await api.patch<UserUpdateResponse>(
    usersRouter.updateUserInfo,
    data
  );
  return response.data;
};

export const fetchDeleteUser = async (): Promise<{ message: string }> => {
  const response = await api.delete<{ message: string }>(
    usersRouter.deleteUserInfo
  );
  return response.data;
};
