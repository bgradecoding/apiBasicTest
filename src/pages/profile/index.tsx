import { useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userInfoState } from "atom";
import { useRouter } from "next/router";
import Input from "components/forms/input";
import Label from "components/forms/label";
import Button from "components/buttons";
import { fetchUpdateUserInfo, fetchDeleteUser } from "biz/users";

const Profile: React.FC = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [email, setEmail] = useState(userInfo.email);
  const [username, setUsername] = useState(userInfo.username);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    const response = await fetchUpdateUserInfo({ email, username, password });
    if (response.message === "This is user update") {
      setUserInfo({ ...userInfo, email, username });
    }
  };

  const handleDeleteUser = async () => {
    const response = await fetchDeleteUser();

    useResetRecoilState(userInfoState);
    router.push("/");
  };

  return (
    <>
      <div>Profile</div>
      <Input
        placeholder="email"
        type="text"
        value={email}
        onChange={setEmail}
      />
      <Input
        placeholder="username"
        type="text"
        value={username}
        onChange={setUsername}
      />
      <div>
        <Label text="변경될 패스워드" />
        <Input
          placeholder="변경될 패스워드"
          type="password"
          value={password}
          onChange={setPassword}
        />
      </div>
      <Button onClick={handleSubmit} text="변경" width="w-56" />
      <div className="pt-4 "></div>
      <Button onClick={handleDeleteUser} text="회원탈퇴" width="w-56" />
    </>
  );
};

export default Profile;
