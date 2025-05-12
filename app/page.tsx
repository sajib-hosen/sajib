import TimeStamp from "@/components/shared/time-stamp";
import { LIGHTHOUSE, MY_NAME } from "@/constent";
import { projects_data } from "@/data/data";
import { ArrowBigRight, Facebook, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className=" flex flex-col sm:flex-row sm:border-b pb-4 sm:pb-16 ">
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
              - Software Engineer
            </p>
          </div>
        }
        right={
          <>
            <h1 className="text-xl sm:text-2xl text-gray-300 italic ">
              <span className="text-2xl text-white px-2">&quot;</span>
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
              <span className="text-2xl text-white px-2">&quot;</span>
            </h1>

            <div className=" gap-4 flex flex-wrap items-center">
              <button className=" h-10 px-4 cursor-pointer flex justify-center items-center rounded-full hover:bg-gray-700 bg-gray-800">
                Get resume
              </button>

              <Link
                target="_block"
                href={
                  "https://www.facebook.com/share/1BeUqtt9iF/?mibextid=qi2Omg"
                }
              >
                <button className="cursor-pointer h-10 w-10 hover:bg-gray-700 bg-gray-800 flex justify-center items-center rounded-full">
                  <Facebook />
                </button>
              </Link>

              <Link target="_block" href={"https://github.com/sajib-hosen"}>
                <button className="cursor-pointer h-10 w-10 flex justify-center items-center rounded-full hover:bg-gray-700 bg-gray-800">
                  <Github />
                </button>
              </Link>

              <Link
                target="_block"
                href={"https://www.linkedin.com/in/sajib-hosen-815a29218/"}
              >
                <button className="cursor-pointer h-10 w-10 flex justify-center items-center rounded-full hover:bg-gray-700 bg-gray-800">
                  <Linkedin />
                </button>
              </Link>

              <Link href={"mailto:sajib.201h@gmail.com"}>
                <button className="cursor-pointer h-10 w-10 flex justify-center items-center rounded-full hover:bg-gray-700 bg-gray-800">
                  <Mail />
                </button>
              </Link>
            </div>
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
                  May 2020 - Current
                </p>
              </div>
              <p className="text-lg sm:text-xl">
                <Link href={"https://www.dolami.co/"}>Dolami</Link>, Inc. is a
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
              <div className=" space-y-3">
                <h1 className=" font-bold flex items-center">
                  <ArrowBigRight className=" text-orange-400" />
                  <span className="text-lg sm:text-xl">
                    Programming Languages & Frameworks
                  </span>
                </h1>
                <ul className=" ml-4">
                  <li className=" ">
                    <span>
                      JavaScript (ES6+), TypeScript, HTML5, CSS3, Sass
                    </span>
                  </li>
                  <li>Next.js, React, NestJS, Node.js, Express, Tailwindcss</li>
                </ul>
              </div>

              <div className=" space-y-3">
                <h1 className=" font-bold flex items-center">
                  <ArrowBigRight className=" text-orange-400" />
                  <span className=" text-lg sm:text-xl">
                    Backend & Databases
                  </span>
                </h1>
                <ul className=" ml-4">
                  <li className=" ">
                    <span>REST APIs</span>
                  </li>
                  <li>PostgreSQL, MongoDB, TypeORM</li>
                </ul>
              </div>

              <div className=" space-y-3">
                <h1 className=" font-bold flex items-center">
                  <ArrowBigRight className=" text-orange-400" />
                  <span className=" text-lg sm:text-xl">Payment gateway</span>
                </h1>
                <ul className=" ml-4">
                  <li className=" ">
                    <span>sslcommerz, stripe</span>
                  </li>
                </ul>
              </div>

              <div className=" space-y-3">
                <h1 className=" font-bold flex items-center">
                  <ArrowBigRight className=" text-orange-400" />
                  <span className="text-lg sm:text-xl">
                    Performance Optimization
                  </span>
                </h1>
                <ul className=" ml-4">
                  <li className=" ">
                    <span>Lighthouse, bundle-analyzer</span>
                  </li>
                </ul>
              </div>

              <div className=" space-y-3">
                <h1 className=" font-bold flex items-center">
                  <ArrowBigRight className=" text-orange-400" />
                  <span className=" text-lg sm:text-xl">DevOps & Tools</span>
                </h1>
                <ul className=" ml-4">
                  <li className=" ">
                    <span>
                      Git, GitHub, Docker, AWS (EC2, S3, SNS, SES, CDN), Vercel
                    </span>
                  </li>
                  <li>CI/CD (GitHub Actions), Postman, Swagger</li>
                </ul>
              </div>

              <div className=" space-y-3">
                <h1 className=" font-bold flex items-center">
                  <ArrowBigRight className=" text-orange-400" />
                  <span className="text-lg sm:text-xl">Testing</span>
                </h1>
                <ul className=" ml-4">
                  <li className=" ">
                    <span>Jest</span>
                  </li>
                </ul>
              </div>

              <div className=" space-y-3">
                <h1 className=" font-bold flex items-center">
                  <ArrowBigRight className=" text-orange-400" />
                  <span className="text-lg sm:text-xl">Soft Skills</span>
                </h1>
                <ul className=" ml-4">
                  <li className=" ">
                    <span>
                      Remote collaboration, Clear communication, Agile/Scrum
                    </span>
                  </li>
                  <li>Code quality, Attention to detail</li>
                </ul>
              </div>
            </div>
          </>
        }
      />

      <div className="border-b text-gray-300 ">
        <h1 className="pr-16 text-center text-4xl font-bold ">Performance</h1>
        <p className=" text-gray-400 text-2xl text-center">&</p>
        <h1 className="pl-16 text-center mb-10 text-4xl font-bold ">
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
        <p className=" text-sm text-center mx-auto sm:max-w-2/3 mb-8 sm:mb-0 pb-4 sm:pb-16">
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
                    <Image
                      src={e.img_url}
                      width={500}
                      height={100}
                      alt="project"
                      className=" rounded"
                    />
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

      <TimeStamp />
    </div>
  );
}
