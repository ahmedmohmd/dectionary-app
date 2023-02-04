import { useActionData } from "@remix-run/react";

const Source = () => {
  const data: any = useActionData();

  if (data?.message || !data) {
    return <></>;
  }

  return (
    <div className="container mx-auto px-4 lg:px-36 mt-8 pb-10">
      <div className="h-[3px] bg-[#f2f2f2] dark:!bg-[#1f1f1f] w-full" />
      <div className="mt-4 flex justify-start items-start md:items-center gap-4 ">
        <h3 className="text-[#777] text-2xl  md:text-3xl dark:text-gray-50">
          Source
        </h3>

        <a
          href={data.source}
          target="_blank"
          className="text-gray-700 text-xl underline break-all dark:text-gray-50"
          rel="noreferrer"
        >
          {data.source}
        </a>
      </div>
    </div>
  );
};

export default Source;
