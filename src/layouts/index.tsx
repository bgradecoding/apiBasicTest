import { useEffect } from "react";
import { useRouter } from "next/router";
import Centered from "layouts/centered";
export type LayoutProps = {
  children: React.ReactNode;
};

const Layouts: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  //  const tokenHandler = async () => {
  //    const isAccessTokenOK = await isAccessTokenValid();
  //    if (!isAccessTokenOK) {
  //      const refreshOK = await refreshToken();
  //      if (!refreshOK) {
  //        router.push("/login");
  //      }
  //    }
  //  };

  switch (pathname) {
    case "/login":
      return <Centered>{children}</Centered>;
    default:
      return <>{children}</>;
  }
};

export default Layouts;
