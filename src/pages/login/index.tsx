import Link from "next/link";
import Label from "components/forms/label";
import Input from "components/forms/input";
import Button from "components/buttons";
import { useState } from "react";
import { fetchLogin, fetchUserInfo } from "biz/users";
import LocalStorage from "util/localstorage";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "atom/index";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const router = useRouter();

  const handleSetUserInfo = async () => {
    const response = await fetchUserInfo();
    setUserInfo(response.data);
  };

  const handleSubmit = async () => {
    const response = await fetchLogin({ email, password });
    if (response.message === "로그인 완료") {
      LocalStorage.setItem("token", response.data.token);
      handleSetUserInfo();
      router.push("/");
    }
  };

  return (
    <>
      <div>
        <Label text="email" />
        <Input
          placeholder="email"
          type="text"
          value={email}
          onChange={setEmail}
        />
      </div>
      <div className="pt-3">
        <Label text="password" />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={setPassword}
        />
      </div>
      <div className="pt-3">
        <Button text="Login" width="w-56" onClick={handleSubmit} />
      </div>
      <div className="flex flex-row w-full pt-3">
        <span className="mr-1 text-secondary">New user?</span>
        <span>
          <Link href="/signup">
            <div className="text-blue-500">Create account here</div>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Login;
