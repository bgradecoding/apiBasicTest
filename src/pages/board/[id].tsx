import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { fetchGetBoard, fetchDeleteBoard } from "biz/boards";
import {
  fetchCreateComment,
  fetchDeleteComment,
  fetchUpdateComment,
} from "biz/comments";
import { Boards, Comments } from "models/boards";
import Input from "components/forms/input";
import Button from "components/buttons";
import { useRecoilValue } from "recoil";
import { userInfoState } from "atom";
import { HiPencil, HiTrash } from "react-icons/hi";

const BoardDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const boardId = id as string;
  const [board, setBoard] = useState<Boards>({
    id: "",
    name: "",
    content: "",
    usersId: "",
    created_at: "",
  });

  //recoil에서 user정보를 가져온다.
  const user = useRecoilValue(userInfoState);

  const [comment, setComment] = useState<Comments[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");
  const [updateCommnet, setUpdateComment] = useState<string>("");
  const [updateCommentInput, setUpdateCommentInput] = useState<string>("");

  const handleCommentInput = (id: string, comment: string) => {
    setUpdateComment(id);
    setUpdateCommentInput(comment);
  };

  const handleCommentUpdate = async (id: string) => {
    const response = await fetchUpdateComment(id, {
      comment: updateCommentInput,
    });
    if (response.message === "comment update complete") {
      setUpdateComment("");
      setUpdateCommentInput("");
      getBoard();
    }
  };

  const handleCommentSubmit = async () => {
    const response = await fetchCreateComment({
      comment: commentInput,
      boardId,
    });
    if (response.message === "comment this post") {
      setCommentInput("");
      getBoard();
    }
  };

  const handleCommentDelete = async (id: string) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const response = await fetchDeleteComment(id);
      if (response.message === "댓글 삭제 완료") {
        getBoard();
      }
    }
  };

  const handleDelete = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const response = await fetchDeleteBoard(boardId);
      if (response.message === "게시판 삭제 완료") {
        router.push("/");
      }
    }
  };

  const getBoard = async () => {
    const response = await fetchGetBoard(boardId);
    setBoard(response.data.post);
    setComment(response.data.comment);
  };

  useEffect(() => {
    if (boardId) getBoard();
    console.log(user);
  }, [boardId]);
  return (
    <div className="px-24 py-[15%]">
      <h1 className="ml-4 text-2xl">{board.name}</h1>
      <div className="ml-4 ">{board.content}</div>
      <div>
        {/* comment를 작성할 수 있는 작성폼 */}
        <div className="flex">
          <Input
            placeholder="댓글을 작성해주세요"
            type="text"
            width=" w-96"
            value={commentInput}
            onChange={setCommentInput}
          />
          <div className="pl-4"></div>
          <Button text="작성" width="w-12" onClick={handleCommentSubmit} />
        </div>
        {comment.length === 0 ? (
          <div>댓글이 없습니다.</div>
        ) : (
          comment.map((comment) => (
            <div key={comment.id} className="flex justify-between">
              <div>
                <div className="flex items-center">
                  {updateCommnet === comment.id ? (
                    <div className="flex">
                      <Input
                        placeholder="댓글을 작성해주세요"
                        type="text"
                        width=" w-96"
                        value={updateCommentInput}
                        onChange={setUpdateCommentInput}
                      />
                      <div className="pl-4"></div>
                      <Button
                        text="수정"
                        width="w-12"
                        onClick={() => handleCommentUpdate(comment.id)}
                      />
                    </div>
                  ) : (
                    <span>{comment.comment}</span>
                  )}

                  {updateCommnet !== comment.id &&
                    user.id === comment.usersId && (
                      <div className="flex">
                        <HiPencil
                          className="cursor-pointer"
                          onClick={() =>
                            handleCommentInput(comment.id, comment.comment)
                          }
                        />
                        <div className="pl-2"></div>
                        <HiTrash
                          className="cursor-pointer"
                          onClick={() => handleCommentDelete(comment.id)}
                        />
                      </div>
                    )}
                </div>
              </div>
              <div>{comment.created_at}</div>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-end pr-12">
        <Button
          text="수정"
          width="w-20"
          onClick={() => router.push(`/board/update?id=${board.id}`)}
        />
        <div className="pl-4"></div>
        <Button text="삭제" width="w-20" onClick={handleDelete} />
        <div className="pl-4"></div>
        <Button text="목록" width="w-20" onClick={() => router.push("/")} />
      </div>
    </div>
  );
};

export default BoardDetail;
