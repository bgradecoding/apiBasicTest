import Link from "next/link";
import Label from "components/forms/label";
import Input from "components/forms/input";
import Button from "components/buttons";
import { useState } from "react";
import { fetchLogin } from "biz/users";
import LocalStorage from "util/localstorage";

const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const response = await fetchLogin({ email, password });
    if (response.message === "로그인 완료") {
      LocalStorage.setItem("token", response.data.token);
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
      <div className="flex flex-row w-full">
        <span className="text-secondary mr-1">New user?</span>
        <span>
          <Link href="/create-account">
            <div className="text-blue-500">Create account here</div>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Index;
