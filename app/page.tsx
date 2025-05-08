// import Image from "next/image";

import TimeStamp from "@/components/shared/time-stamp";
import { MY_NAME } from "@/constents";
import React from "react";

const EachBlok = ({
    left,
    right,
}: {
    left: React.ReactNode;
    right: React.ReactNode;
}) => {
    return (
        <div className=" flex border-b pb-16 ">
            <div className=" w-1/2">
                <div className="sticky top-[83px] flex justify-center items-center min-h-[calc(100vh-200px)]">
                    {left}
                </div>
            </div>

            <div className=" w-1/2 min-h-screen flex items-center ">
                <div className="space-y-16">{right}</div>
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <div className=" relative content-w space-y-16">
            <EachBlok
                left={
                    <div className=" space-y-4">
                        <h1 className=" text-2xl ">Hello There,</h1>
                        <p className="text-6xl font-bold">{MY_NAME}</p>
                        <p className=" text-gray-400 text-xl italic">
                            - Software Engineer
                        </p>
                    </div>
                }
                right={
                    <>
                        <h1 className=" text-2xl text-gray-400 italic ">
                            {`I'm a Software Engineer with 3 years of experience
                            building scalable and high-performance web
                            applications. I specialize in modern
                            JavaScript/TypeScript frameworks like Next.js and
                            NestJS, with a strong focus on full-stack
                            development. I’m passionate about writing clean,
                            maintainable code and optimizing both frontend and
                            backend performance to ensure fast, efficient
                            applications. I've worked remotely with
                            international teams and thrive in fast-paced,
                            collaborative environments.`}
                        </h1>
                    </>
                }
            />

            <EachBlok
                left={
                    <div className=" space-y-4">
                        <h1 className=" text-2xl text-gray-400 ">Work</h1>
                        <p className="text-6xl font-bold pl-8">Experiance</p>
                    </div>
                }
                right={
                    <>
                        {[...Array(4)].map((_, index) => (
                            <p key={index} className="mb-8 text-xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolor quibusdam, tempore
                                obcaecati alias cum rem suscipit quas veniam
                                omnis nesciunt non, repellendus quis voluptatum
                                veritatis reiciendis sint? Ut, ab voluptatem!
                            </p>
                        ))}
                    </>
                }
            />

            <EachBlok
                left={
                    <div className=" space-y-4">
                        <h1 className="text-2xl text-gray-400 ">
                            Professional
                        </h1>
                        <p className="text-6xl font-bold pl-18">Skills</p>
                    </div>
                }
                right={
                    <>
                        {[...Array(10)].map((_, index) => (
                            <p key={index} className="mb-8 text-xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolor quibusdam, tempore
                                obcaecati alias cum rem suscipit quas veniam
                                omnis nesciunt non, repellendus quis voluptatum
                                veritatis reiciendis sint? Ut, ab voluptatem!
                            </p>
                        ))}
                    </>
                }
            />

            <EachBlok
                left={
                    <div className=" space-y-4">
                        <h1 className="text-2xl text-gray-400 ">My</h1>
                        <p className="text-6xl font-bold">Projects</p>
                    </div>
                }
                right={
                    <>
                        {[...Array(10)].map((_, index) => (
                            <p key={index} className="mb-8 text-xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolor quibusdam, tempore
                                obcaecati alias cum rem suscipit quas veniam
                                omnis nesciunt non, repellendus quis voluptatum
                                veritatis reiciendis sint? Ut, ab voluptatem!
                            </p>
                        ))}
                    </>
                }
            />

            <TimeStamp />
        </div>
    );
}
