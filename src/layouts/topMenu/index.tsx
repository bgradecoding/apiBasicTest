// topmenu layout
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "atom";
import { FaUserAlt } from "react-icons/fa";

export type Props = {
  children: React.ReactNode;
};

const TopMenu: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return (
    <div>
      <div className="flex flex-row w-full h-16 bg-white shadow-md">
        <div className="flex flex-row items-center justify-center w-1/4">
          <Link href="/">
            <div className="text-2xl font-bold text-blue-500">ApiBasicTest</div>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center w-1/2">
          <Link href="/board/create">
            <div className="text-xl font-bold text-blue-500">글쓰기</div>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center w-1/4">
          {userInfo.id !== "" ? (
            <div className="flex flex-row items-center justify-center">
              <div className="pl-2">
                <FaUserAlt
                  onClick={() => router.push("/profile")}
                  className="text-2xl text-blue-500 cursor-pointer"
                />
              </div>
            </div>
          ) : (
            <Link href="/login">
              <div className="text-xl font-bold text-blue-500">로그인</div>
            </Link>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TopMenu;
