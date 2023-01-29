import Head from "next/head";
import { useState, useEffect } from "react";
import { fetchGetBoards } from "biz/boards";
import { Boards } from "models/boards";
import { useRouter } from "next/router";

export default function Home() {
  const [boards, setBoards] = useState<Boards[]>([]);

  const router = useRouter();

  const getBoards = async () => {
    const response = await fetchGetBoards({ skip: 0, take: 5 });
    setBoards(response.data);
  };

  const goBoardDetail = (boardId: string) => {
    router.push(`/board/${boardId}`);
  };

  useEffect(() => {
    getBoards();
  }, []);

  return (
    <>
      <Head>
        <title>ApiBasicTest</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">name</th>
              <th className="px-4 py-2">userId</th>
              <th className="px-4 py-2">created_at</th>
            </tr>
          </thead>
          <tbody>
            {boards.map((board) => (
              <tr key={board.id} className="">
                <td
                  onClick={() => goBoardDetail(board.id)}
                  className="px-4 py-2 border cursor-pointer"
                >
                  {board.name}
                </td>
                <td className="px-4 py-2 border">{board.usersId}</td>
                <td className="px-4 py-2 border">{board.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="fixed bottom-0 right-0 p-4">
          <button
            onClick={() => router.push("/board/create")}
            className="w-12 h-12 text-2xl text-white bg-blue-500 rounded-full"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
