import { ArrowRight } from "lucide-react";

export const DisplaySkill = ({
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
export const Tag = ({ label }: { label: string }) => {
  return <button className=" text-sm bg-gray-900 px-2 rounded">{label}</button>;
};

export const EachBlok = ({
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
