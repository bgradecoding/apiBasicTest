import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { fetchUpdateBoard, fetchGetBoard } from "biz/boards";
import Input from "components/forms/input";
import Label from "components/forms/label";
import Button from "components/buttons";

const UpdateBoard = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const { id } = router.query;
  const boardId = id as string;
  const handleSubmit = async () => {
    const response = await fetchUpdateBoard(boardId, { name, content });
    if (response.message === "게시판 삭제 완료") {
      router.push("/");
    }
  };

  useEffect(() => {
    const fetchBoard = async () => {
      const response = await fetchGetBoard(boardId);
      setName(response.data.post.name);
      setContent(response.data.post.content);
    };
    fetchBoard();
  }, [boardId]);

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
        <Button text="수정" width="w-28" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default UpdateBoard;
