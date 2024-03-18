import { ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { useNavbar } from "./navbar/use-navbar";
import AccountExistBanner from "@/features/account/account-exist-banner/account-exist-banner";

type Props = {
  children?: ReactNode;
  bgColor?: string;
  mainClassName?: string;
  className?: string;
  headerColor?: string;
};

const Layout = ({
  children,
  bgColor = "",
  mainClassName = "",
  className = "flex flex-col min-h-screen relative",
}: Props) => {
  const { links } = useNavbar();
  return (
    <div className={className}>
      <header className={`${bgColor}`}>
        <AccountExistBanner />
        <Navbar navLinks={links} />
      </header>

      <main className={`grow ${bgColor} ${mainClassName}`}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
