import axios from "axios";
const apiEndPoint: string = "https://api.dictionaryapi.dev/api/v2/entries/en";

const fetchWord = async (keyword: FormDataEntryValue) => {
  try {
    const { data } = await axios.get(`${apiEndPoint}/${keyword}`);

    // Wanted Data
    const word = data[0].word;
    const phonetic = data[0]?.phonetic
      ? data[0]?.phonetic
      : data[0]?.phonetics.find((p: any) => p.text).text;
    const audio = data[0].phonetics.find((p: any) => p.audio).audio;

    return {
      phonetic,
      audio,
      word,
    };
  } catch (error: any) {
    return { message: "Sorry, Thsi Keyword Not Found! ☹" };
  }
};

export default fetchWord;
