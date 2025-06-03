import TimeStamp from "@/components/shared/time-stamp";
import { social_links_data } from "@/data/data";
import Link from "next/link";

import React from "react";

export const metadata = {
    title: "Contact",
};

export default function BlogPg() {
    return (
        <div className=" relative content-w space-y-8 mt-8 p-4">
            <p className="max-w-[500px] mx-auto">
                Feel free to reach out to me through any of these platforms for
                inquiries, collaborations, or just to say hello.
            </p>

            <div className=" max-w-[500px] mx-auto space-y-4 ">
                {social_links_data.length
                    ? social_links_data.map((e) => (
                          <div
                              key={e.title}
                              className=" border hover:border-gray-500 transition-all duration-300 ease-in-out rounded"
                          >
                              <Link
                                  target="_blank"
                                  className="flex items-center"
                                  href={e.link}
                                  key={e.title}
                              >
                                  <div className="w-14 h-14 flex justify-center items-center">
                                      {e.icon}
                                  </div>
                                  <div className=" text-gray-400">
                                      <p>{e.short_url}</p>
                                      <p className=" font-bold">{e.title}</p>
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
