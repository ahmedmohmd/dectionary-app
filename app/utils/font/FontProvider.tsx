import { useState } from "react";
import { Font } from "../config/constants";
import FontContext from "./fontContext";

const FontProvider = ({ children }: any) => {
  const [font, setFont] = useState<Font | null>(Font.SERIF);

  return (
    <FontContext.Provider value={[font, setFont]}>
      {children}
    </FontContext.Provider>
  );
};

export default FontProvider;
