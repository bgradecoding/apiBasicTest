import Label from "components/forms/label";
import Input from "components/forms/input";
import Button from "components/buttons";
import { useState } from "react";
import { fetchSignup } from "biz/users";
import LocalStorage from "util/localstorage";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const router = useRouter();
  const handleSubmit = async () => {
    const response = await fetchSignup({ email, password, username });
    if (response.message === "로그인 완료") {
      LocalStorage.setItem("token", response.data.token);
      router.push("/");
    }
  };

  return (
    <>
      <div>
        <AiOutlineArrowLeft
          className="cursor-pointer"
          onClick={() => router.push("/login")}
        />
      </div>
      <div className="pt-3">
        <Label text="email" />
        <Input
          placeholder="email"
          type="text"
          value={email}
          onChange={setEmail}
        />
      </div>
      <div className="pt-3">
        <Label text="username" />
        <Input
          placeholder="username"
          type="text"
          value={username}
          onChange={setUsername}
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
        <Label text="passwordConfirm" />
        <Input
          placeholder="password"
          type="password"
          value={passwordConfirm}
          onChange={setPasswordConfirm}
        />
      </div>
      <div className="pt-3">
        <Button text="signup" width="w-56" onClick={handleSubmit} />
      </div>
    </>
  );
};

export default Signup;
