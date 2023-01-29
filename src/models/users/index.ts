export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    token: string;
  };
  message: string;
}

export interface SignupParams {
  email: string;
  password: string;
  username: string;
}

export type UserInfo = {
  id: string;
  email: string;
  username: string;
  socialPlatform: string;
  created_at: string;
};

export interface UserInfoResponse {
  data: UserInfo;
  message: string;
}

export interface UserUpdateResponse {
  id: string;
  update: {
    email: string;
    username: string;
  };
  message: string;
}
