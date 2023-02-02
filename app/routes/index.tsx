import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import axios from "axios";
import Navbar from "~/components/widgets/Navbar";
import SearchInput from "~/components/widgets/SearchInput";
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
    <>
      <Navbar />
      <SearchInput />
      <Word />
    </>
  );
}
