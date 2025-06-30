import TimeStamp from "@/components/shared/time-stamp";
import { LIGHTHOUSE, MY_NAME, PROFESSION } from "@/constent";
import { projects_data, skills_data, social_links_data } from "@/data/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DisplaySkill = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => {
  return (
    <div className=" space-y-3">
      <h1 className=" font-bold flex items-center">
        <ArrowRight size={20} className=" mr-2" />
        <span className=" text-lg">{title}</span>
      </h1>
      <div className=" ml-4 space-x-2 ">
        {skills.length ? skills.map((e, i) => <Tag key={i} label={e} />) : null}
      </div>
    </div>
  );
};

// this display tags
const Tag = ({ label }: { label: string }) => {
  return <button className=" text-sm bg-gray-900 px-2 rounded">{label}</button>;
};

const EachBlok = ({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) => {
  return (
    <div className=" flex flex-col sm:flex-row  pb-4 sm:pb-16 ">
      <div className="w-full sm:w-1/2">
        <div className="sticky top-[83px] flex justify-center items-center min-h-[150px] sm:min-h-[calc(100vh-200px)]">
          {left}
        </div>
      </div>

      <div className="w-full sm:w-1/2 min-h-96 sm:min-h-screen flex items-center ">
        <div className="space-y-4 sm:space-y-16 pr-4 text-gray-300">
          {right}
        </div>
      </div>
    </div>
  );
};

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
            <h1 className="text-xl sm:text-2xl text-gray-300 ">
              <span className="text-2xl text-white px-2">&quot;</span>
              I&apos;m a developer at{" "}
              <Link className=" text-gray-500" href={"https://www.dolami.co/"}>
                Dolami, Inc.
              </Link>
              , where I work with Next.js and Nest.js. I&apos;m passionate about
              creating optimized, scalable, and user-friendly applications for
              users.
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
          <div className=" space-y-10 text-gray-300">
            <div className=" space-y-6">
              <div className=" flex items-baseline justify-between ">
                <Link href={"https://www.dolami.co/"}>
                  <h1 className="text-2xl sm:text-3xl font-bold">
                    Dolami, Inc
                  </h1>
                </Link>
                <p className=" text-sm text-gray-400 italic pr-0 sm:pr-8">
                  {/* 16<sup>th</sup> March 2023 - Current */}
                  March 2023 - Current
                </p>
              </div>
              <p className="text-lg sm:text-xl">
                <Link href={"https://www.dolami.co/"}>Dolami, Inc</Link>. is a
                San Francisco-based startup founded in 2022, specializing in
                virtual reality (VR) technologies. They develop innovative
                products like the X MASK, a facial tracking device that mirrors
                real-life expressions onto VR avatars, and{" "}
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
                avatar and virtual fashion marketplace. I worked as a Full-Stack
                Software Engineer, using Next.js, NestJS, and cloud technologies
                to build scalable and user-friendly features. My work helped
                improve performance, UX, and backend infrastructure for
                real-time customization and transactions.
              </p>
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

      <div className="text-gray-300 ">
        <h1 className="pr-16 text-center text-2xl font-bold ">Performance</h1>
        <p className=" text-gray-400 text-2xl text-center">&</p>
        <h1 className="pl-16 text-center mb-10 text-3xl font-bold ">
          Optimization
        </h1>
        <div className=" flex items-center justify-center pb-4 sm:pb-10">
          <Image
            src={LIGHTHOUSE}
            width={600}
            height={400}
            alt="lighthouse"
            className=" rounded"
          />
        </div>
        <p className=" text-center mx-auto sm:max-w-2/3 mb-8 sm:mb-0 pb-4 sm:pb-16">
          This Lighthouse audit demonstrates a web application I developed that
          achieved perfect scores in all major categories: Performance,
          Accessibility, Best Practices, and SEO. The result highlights my
          ability to build fast, user-friendly, and technically sound
          applications using modern frameworks and best development practices.
          The application was built using Next.js, React, and Tailwind CSS, with
          a strong focus on speed, accessibility, and overall user experience.
        </p>
      </div>

      <EachBlok
        left={
          <div className=" space-y-4">
            <h1 className="text-xl sm:text-2xl text-gray-400 ">My</h1>
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
            <Link key={e.short_url} href={e.link}>
              {e.title}
            </Link>
          ))}
        </div>
      </div>

      <TimeStamp />
    </div>
  );
}
