import TimeStamp from "@/components/shared/time-stamp";
import { LIGHTHOUSE } from "@/constent";
import { social_links_data } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const metadata = {
  title: "Blog",
};

export default function BlogPg() {
  return (
    <div className=" relative content-w space-y-8 mt-8 p-4">
      <div className=" max-w-[650px] mx-auto space-y-4 ">
        {social_links_data.length
          ? social_links_data.map((e) => (
              <div
                key={e.title}
                className=" transition-all duration-300 ease-in-out hover:bg-gray-900 rounded px-2"
              >
                <Link
                  className="flex items-center space-x-4 "
                  href={e.link}
                  key={e.title}
                >
                  <div className="w-20 h-20 flex justify-center items-center">
                    <Image
                      src={LIGHTHOUSE}
                      width={100}
                      height={100}
                      alt="lighthouse"
                      className=" rounded"
                    />
                  </div>
                  <div className=" ">
                    <p className=" font-bold text-md">
                      How to optimize Next.js application
                    </p>
                    <p className=" space-x-4 text-gray-400">
                      <span>5 months age</span>
                      <span>254 views</span>
                    </p>
                  </div>
                </Link>
              </div>
            ))
          : null}
      </div>

      <TimeStamp />
    </div>
  );
}
