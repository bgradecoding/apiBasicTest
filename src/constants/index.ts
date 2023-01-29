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
  getBoards: "boards",
} as const;

const commentsRouter = {
  comments: "comments",
} as const;

export { usersRouter, boardsRouter, commentsRouter };
