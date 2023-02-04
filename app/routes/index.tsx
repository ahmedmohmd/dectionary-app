import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import axios from "axios";
import Navbar from "~/components/widgets/Navbar";
import Noun from "~/components/widgets/Noun";
import SearchInput from "~/components/widgets/SearchInput";
import Source from "~/components/widgets/Source";
import Verb from "~/components/widgets/Verb";
import Word from "~/components/widgets/Word";
import fetchWord from "~/utils/api/api";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { keyword } = Object.fromEntries(formData);

  if (!keyword) {
    return json({
      message: "Sorry, This Filed Cannot Be Empty! ☹",
    });
  }

  const result = await fetchWord(keyword);
  return json(result);
};

export default function Index() {
  return (
    <div className="dark:bg-[#050505] min-h-[100vh]">
      <Navbar />
      <SearchInput />
      <Word />
      <Noun />
      <Verb />
      <Source />
    </div>
  );
}
