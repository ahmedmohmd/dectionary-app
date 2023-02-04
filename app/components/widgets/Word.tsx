import { useActionData } from "react-router";
import Sound from "../atoms/Sound";

const Word = () => {
  const data: any = useActionData();

  if (data?.message || !data) {
    return <></>;
  }

  return (
    <article className="mx-auto container px-4 lg:px-36 my-10 flex justify-between items-center">
      <section>
        <h1 className="text-5xl md:text-6xl font-bold mb-3 dark:text-gray-200">
          {data?.word}
        </h1>
        <span className="text-3xl md:text-4xl text-primary">
          {data?.phonetic}
        </span>
      </section>
      {data?.audio ? <Sound audio={data?.audio} /> : null}
    </article>
  );
};

export default Word;
