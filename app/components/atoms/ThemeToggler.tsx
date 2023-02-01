// import { CiDark, CiLight } from "react-icons/ci";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Theme } from "~/utils/config/constants";
import useTheme from "~/utils/theme/useTheme";

const ThemeToggler = () => {
  const [theme, setTheme] = useTheme();

  const handleToggle = () => {
    setTheme((prevTheme: any) =>
      prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    );
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer group">
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={theme === Theme.DARK}
        className="sr-only peer"
      />

      <div className="w-14 h-7 bg-[#767676] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[4px] after:bg-white  after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-primary"></div>
      <span className="ml-3 text-sm font-medium">
        {theme === Theme.DARK ? (
          <MdLightMode className="font-extrabold text-3xl group-hover:animate-spin text-yellow-300" />
        ) : (
          <MdDarkMode className="font-extrabold text-3xl group-hover:animate-bounce group-hover:text-primary text-[#767676]" />
        )}
      </span>
    </label>
  );
};

export default ThemeToggler;
