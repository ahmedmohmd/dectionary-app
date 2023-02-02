import { Form, useActionData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const data = useActionData();
  const [error, setError] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>(
    "Search about Word..."
  );

  useEffect(() => {
    if (data?.message) {
      setError(true);
    } else {
      setError(false);
    }
  }, [data]);

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    setPlaceholder("Search about Word...");
  };

  return (
    <Form method="post" className="container mx-auto px-4 lg:px-36">
      <div className="relative w-full">
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          name="keyword"
          className="bg-[#f4f4f4] border-none text-xl text-gray-600 rounded-lg block w-full  py-4 px-5 font-semibold  dark:bg-[#1f1f1f]  dark:placeholder-gray-400 dark:text-white placeholder:font-normal"
          placeholder={placeholder}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-3 flex items-center pr-3"
        >
          <BsSearch className="text-2xl duration-300 text-[#777] hover:text-primary" />
        </button>
      </div>
      {error ? (
        <div
          className="font-sans p-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-red-500 dark:text-white"
          role="alert"
        >
          {data.message}
        </div>
      ) : null}
    </Form>
  );
};

export default SearchInput;
