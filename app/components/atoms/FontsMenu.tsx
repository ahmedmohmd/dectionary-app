import { Font } from "~/utils/config/constants";
import useFont from "~/utils/font/useFont";

const FontsMenu = () => {
  const [, setFont] = useFont();
  const handleSelect = (event: any) => setFont(event.target.value);

  return (
    <select
      id="countries"
      onChange={handleSelect}
      className="hover:text-primary duration-300 border-none text-gray-700 dark:text-gray-300 bg-transparent font-bold text-lg rounded-lg p-2.5 outline-none w-full cursor-pointer"
    >
      {[Font.SERIF, Font.SANS_SERIF, Font.MONOSPACE].map((font) => {
        return (
          <option
            key={font}
            className="bg-white dark:bg-gray-900 text-gray-600 dark:text-slate-100 border-none font-semibold"
            value={font}
          >
            {font}
          </option>
        );
      })}
    </select>
  );
};

export default FontsMenu;
