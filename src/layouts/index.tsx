import { useEffect } from "react";
import { useRouter } from "next/router";
import Centered from "layouts/centered";
import TopMenu from "layouts/topMenu";
export type LayoutProps = {
  children: React.ReactNode;
};

const Layouts: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  switch (pathname) {
    case "/login":
    case "/signup":
      return <Centered>{children}</Centered>;
    default:
      return <TopMenu>{children}</TopMenu>;
  }
};

export default Layouts;
