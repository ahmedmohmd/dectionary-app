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

    const noun = {
      definitions: data[0].meanings.find((m) => m.partOfSpeech === "noun")
        .definitions,
      synonyms: data[0].meanings.find((m) => m.partOfSpeech === "noun")
        .synonyms,
    };
    const verb = {
      definitions: data[0].meanings.find((m) => m.partOfSpeech === "verb")
        .definitions,
    };

    const source = data[0]?.sourceUrls;

    return {
      phonetic,
      audio,
      word,
      noun,
      verb,
      source,
    };
  } catch (error: any) {
    return { message: "Sorry, This Keyword Not Found! 😵" };
  }
};

export default fetchWord;
