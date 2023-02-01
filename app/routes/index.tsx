import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import axios from "axios";
import Navbar from "~/components/widgets/Navbar";
import SearchInput from "~/components/widgets/SearchInput";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { keyword } = Object.fromEntries(formData);

  if (!keyword) {
    return json({
      message: "Sorry, This Filed Cannot Be Empty! ☹",
    });
  }

  try {
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    );

    return json(data);
  } catch (error: any) {
    if (error?.response.status) {
      return json({ message: "Sorry, Thsi Keyword Not Found! ☹" });
    }
  }
};

export default function Index() {
  return (
    <>
      <Navbar />
      <SearchInput />
    </>
  );
}
