import { MY_NAME, SAJIB_ICON } from "@/constent";
import Image from "next/image";
import Link from "next/link";

const TopNav = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-[4px] bg-black/30 ">
      <nav className="backdrop-blur-[4px] bg-black/30 content-w flex items-center justify-between gap-4 p-2 sm:p-4">
        <Link href={"/"}>
          <div className="flex items-center space-x-1">
            <Image
              src={SAJIB_ICON}
              width={40}
              height={40}
              className=" rounded-full"
              alt="sajib"
            />

            <div className=" border-l pl-1">
              <h1 className="text-xl sm:text-2xl font-bold text-orange-500">
                {MY_NAME}
              </h1>
            </div>
          </div>
        </Link>
        <ul className=" flex space-x-3 sm:space-x-6 text-base sm:text-xl">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;
