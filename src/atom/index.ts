import { atom } from "recoil";
import { UserInfo } from "models/users";
export const userInfoState = atom<UserInfo>({
  key: "userInfoState",
  default: {
    id: "",
    email: "",
    username: "",
    socialPlatform: "",
    created_at: "",
  },
});
