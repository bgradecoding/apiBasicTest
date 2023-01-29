const usersRouter = {
  signup: "users/signup",
  login: "users/signin",
  userInfo: "users/userInfo",
  socialLogin: "users/signin/socialLogin",
  socialSignup: "users/signup/socialLogin",
  updateUserInfo: "users",
  deleteUserInfo: "users",
} as const;

const boardsRouter = {
  sendCertCode: "/auth/cert/sendCertCode",
  certCodeCheck: "/auth/cert/check",
  logout: "/auth/logout",
} as const;

const commentsRouter = {
  sendCertCode: "/auth/cert/sendCertCode",
  certCodeCheck: "/auth/cert/check",
  logout: "/auth/logout",
} as const;

export { usersRouter, boardsRouter, commentsRouter };
