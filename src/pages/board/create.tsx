import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { fetchCreateBoard } from "biz/boards";
import Input from "components/forms/input";
import Label from "components/forms/label";
import Button from "components/buttons";

const CreateBoard = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const response = await fetchCreateBoard({ name, content });
    if (response.message === "upload your post") {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div>
        <Label text="제목" />
        <Input
          placeholder="제목"
          type="text"
          width=" w-96"
          value={name}
          onChange={setName}
        />
      </div>
      <div className="pt-4 ">
        <Label text="내용" />
        <div>
          <textarea
            className="placeholder-gray-300 border border-gray-300 rounded-md h-96 w-96 placeholder:text-xs"
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <div className="flex ">
        <Button text="취소" width="w-28" onClick={() => router.push("/")} />
        <div className="pl-4"></div>
        <Button text="작성" width="w-28" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateBoard;
