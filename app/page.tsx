import { DisplaySkill, EachBlok, Tag } from "@/components/shared/each-block";
import TimeStamp from "@/components/shared/time-stamp";
import {
  BANKS,
  LIGHTHOUSE,
  MY_NAME,
  PAYMENT_GATEWAY,
  PROFESSION,
} from "@/constent";
import { projects_data, skills_data, social_links_data } from "@/data/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getWorkExperience } from "./utils/get-work-experiance";

export default function Home() {
  return (
    <div className=" relative content-w space-y-4 sm:space-y-16 p-4">
      <EachBlok
        left={
          <div className=" space-y-4">
            <h1 className="text-xl sm:text-2xl ">Hello There,</h1>
            <p className="text-5xl sm:text-6xl font-bold">{MY_NAME}</p>
            <p className=" text-gray-400 text-lg sm:text-xl italic">
              - {PROFESSION}
            </p>
          </div>
        }
        right={
          <>
            <h1 className="text-xl sm:text-2xl text-gray-300">
              <span className="text-2xl text-white px-2">&quot;</span>
              I’m a developer currently working at{" "}
              <Link
                className="text-gray-400"
                target="_blank"
                href={"https://flynest.net/"}
              >
                FlyNest Global PLC
              </Link>
              . Previously, I worked at{" "}
              <Link
                className="text-gray-400"
                target="_blank"
                href={"https://www.dolami.co/"}
              >
                Dolami, Inc.
              </Link>{" "}
              (San Francisco, CA, USA). I have{" "}
              <span className="text-gray-400 underline">
                {getWorkExperience("2023-03-01")} of professional experience
              </span>{" "}
              building scalable applications using NestJS, Next.js and Flutter.
              <span className="text-2xl text-white px-2">&quot;</span>
            </h1>

            <div className=" gap-4 flex flex-wrap items-center">
              {social_links_data.length
                ? social_links_data.map((lnk) => (
                    <Link key={lnk.link} target="_block" href={lnk.link}>
                      <button
                        title={lnk.title}
                        className="cursor-pointer h-10 w-10 hover:bg-gray-700 bg-gray-800 flex justify-center items-center rounded-full"
                      >
                        {lnk.icon}
                      </button>
                    </Link>
                  ))
                : null}
            </div>
            <div className=" h-24"></div>
          </>
        }
      />

      <EachBlok
        left={
          <div className=" space-y-4">
            <h1 className="text-xl sm:text-2xl text-gray-400 ">
              Professional work
            </h1>
            <p className="text-5xl sm:text-6xl font-bold pl-8">Experience</p>
          </div>
        }
        right={
          <div className=" space-y-52 text-gray-300 min-h-full ">
            <div className=" min-h-screen my-auto flex items-center">
              <div className=" space-y-6">
                <div className=" flex items-baseline justify-between ">
                  <Link target="_blank" href={"https://flynest.net/"}>
                    <h1 className="text-2xl sm:text-3xl font-bold">
                      FlyNest Global PLC
                    </h1>
                  </Link>
                  <p className=" text-sm text-gray-200 italic pr-0 sm:pr-8">
                    September 2025 - Current
                  </p>
                </div>
                <p className="text-lg sm:text-xl">
                  FlyNest Global PLC is a technology-driven firm based in Dhaka,
                  Bangladesh, specialising in delivering digital platforms
                  across sectors such as education, payments/fintech, travel,
                  and Hajj/Umrah services
                </p>
                <p className="text-lg sm:text-xl">
                  At{" "}
                  <Link target="_blank" href={"https://www.dolami.co"}>
                    FlyNest Global PLC
                  </Link>
                  , I&lsquo;m working to the development of{" "}
                  <Link target="_blank" href={"https://erp.eduflybd.net"}>
                    EduFly{" "}
                  </Link>
                  (SaaS), a ERP system for school/university management. The
                  system supports Fee management, online admission and exam,
                  online payments with{" "}
                  <span className="underline" title={BANKS.join(", ")}>
                    Banks ({BANKS.length})
                  </span>{" "}
                  and Other{" "}
                  <span
                    className="underline"
                    title={PAYMENT_GATEWAY.join(", ")}
                  >
                    payments Gateway ({PAYMENT_GATEWAY.length})
                  </span>
                  ,
                </p>
              </div>
            </div>

            <div className=" min-h-screen my-auto flex items-center">
              <div className=" space-y-6">
                <div className=" flex items-baseline justify-between ">
                  <Link href={"https://www.dolami.co/"}>
                    <h1 className="text-2xl sm:text-3xl font-bold">
                      Dolami, Inc
                    </h1>
                  </Link>
                  <p className=" text-sm text-gray-400 italic pr-0 sm:pr-8">
                    {/* 16<sup>th</sup> March 2023 - Current */}
                    March 2023 - August 2025
                  </p>
                </div>
                <p className="text-lg sm:text-xl">
                  <Link href={"https://www.dolami.co/"}>Dolami, Inc</Link>. is a
                  San Francisco-based startup founded in 2022, specializing in
                  virtual reality (VR) technologies. They develop innovative
                  products like the X MASK, a facial tracking device that
                  mirrors real-life expressions onto VR avatars, and{" "}
                  <Link href={"https://goavatown.com/en"}>Avatown</Link>, a
                  platform for buying and selling 3D avatars and fashion items.
                  <Link href={"https://www.dolami.co/"}>Dolami</Link> aims to
                  democratize avatar creation and enhance creative expression in
                  virtual spaces.
                </p>
                <p className="text-lg sm:text-xl">
                  At <Link href={"https://www.dolami.co/"}>Dolami</Link>, I
                  contributed to the development of{" "}
                  <Link href={"https://goavatown.com/en"}>Avatown</Link>, a 3D
                  avatar and virtual fashion marketplace. I worked as a
                  Full-Stack Software Engineer, using Next.js, NestJS, and cloud
                  technologies to build scalable and user-friendly features. My
                  work helped improve performance, UX, and backend
                  infrastructure for real-time customization and transactions.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <EachBlok
        left={
          <div className=" space-y-4">
            <h1 className="text-xl sm:text-2xl text-gray-400 ">Professional</h1>
            <p className="text-5xl sm:text-6xl font-bold pl-18">Skills</p>
          </div>
        }
        right={
          <>
            <div className=" space-y-6">
              {skills_data.length
                ? skills_data.map((info) => (
                    <DisplaySkill
                      key={info.title}
                      title={info.title}
                      skills={info.skills}
                    />
                  ))
                : null}
            </div>
          </>
        }
      />

      <EachBlok
        left={
          <div className=" space-y-4">
            <h1 className="text-xl sm:text-4xl  ">
              Performance{" "}
              <span className=" text-6xl font-bold text-gray-700">&</span>
            </h1>

            <h1 className="text-xl sm:text-4xl font-bold pl-18">
              Optimization
            </h1>
          </div>
        }
        right={
          <>
            <div className="space-y-6">
              <div className="flex items-center pb-4 sm:pb-10">
                <Image
                  src={LIGHTHOUSE}
                  width={600}
                  height={400}
                  alt="lighthouse"
                  className="rounded"
                />
              </div>

              <p className="mb-8 sm:mb-0 pb-4 sm:pb-16">
                I focus on frontend performance optimization using Next.js and
                React.js. I improve application speed and user experience
                through techniques such as code splitting, lazy loading,
                memoization, and efficient state management. I also optimize
                rendering behavior and leverage server-side rendering (SSR) and
                static generation (SSG) to ensure fast load times and better
                SEO.
              </p>

              <p className="mb-8 sm:mb-0 pb-4 sm:pb-16">
                On the backend, I design and optimize APIs for performance,
                scalability, and security. I work with efficient query
                strategies, indexing, and caching to reduce response time. I
                also implement best practices for authentication, authorization,
                and data validation to ensure secure and reliable systems.
              </p>
            </div>
          </>
        }
      />

      <EachBlok
        left={
          <div className=" space-y-4">
            <h1 className="text-xl sm:text-2xl text-gray-400 ">Reference</h1>
            <p className="text-5xl sm:text-6xl font-bold">Projects</p>
          </div>
        }
        right={
          <>
            {projects_data.map((e, index) => (
              <div key={index} className="flex items-center space-x-6 ">
                <div className=" w-36">
                  <Link target="_block" href={e.project_url}>
                    <div className=" min-w-[150px]">
                      <Image
                        src={e.img_url}
                        width={500}
                        height={100}
                        alt="project"
                        className=" rounded"
                      />
                    </div>
                  </Link>
                </div>
                <div>
                  <h1 className=" font-bold text-xl">
                    <Link target="_block" href={e.project_url}>
                      {e.name}
                    </Link>
                  </h1>
                  <p>{e.description}</p>
                  <div className=" pt-2 space-x-2">
                    {e.tags.length
                      ? e.tags.map((t) => <Tag key={t} label={t} />)
                      : null}
                  </div>
                </div>
              </div>
            ))}
          </>
        }
      />

      <div className=" border-t"></div>

      <div className=" flex justify-center ">
        <div className=" flex gap-4 text-gray-500">
          {social_links_data.map((e) => (
            <Link target="_blank" key={e.short_url} href={e.link}>
              {e.title}
            </Link>
          ))}
        </div>
      </div>

      <TimeStamp />
    </div>
  );
}
