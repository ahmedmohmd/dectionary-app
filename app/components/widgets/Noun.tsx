import { useActionData } from "@remix-run/react";

const Noun = () => {
  const data: any = useActionData();

  if (data?.message || !data) {
    return <></>;
  }

  return (
    <div className="container mx-auto px-4 lg:px-36">
      <div className="flex justify-between items-center gap-4">
        <span className="font-charm font-extrabold text-3xl dark:text-gray-50">
          noun
        </span>
        <div className="h-[3px] bg-[#f2f2f2] dark:!bg-[#1f1f1f] w-full" />
      </div>
      <div className="mt-6 ">
        <h3 className="text-[#777] text-2xl md:text-3xl dark:text-gray-50">
          Meaning
        </h3>
        <ul className="dark:text-gray-300 text-gray-600">
          {data?.noun?.definitions.map((noun) => {
            return <li key={noun?.definition}>{noun?.definition}</li>;
          })}
        </ul>
      </div>
      <div className="mt-6 flex justify-start items-center gap-4 ">
        <h3 className="text-[#777] text-2xl  md:text-3xl dark:text-gray-50">
          Synoyms
        </h3>
        <div className="text-primary flex justify-center items-center gap-2 font-extrabold text-2xl flex-wrap">
          {data?.noun?.synonyms.map((synonym) => {
            return <span key={synonym}>{synonym}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Noun;
