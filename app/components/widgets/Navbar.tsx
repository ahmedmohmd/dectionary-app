import { GiBookCover } from "react-icons/gi";
import FontsMenu from "../atoms/FontsMenu";
import ThemeToggler from "../atoms/ThemeToggler";

const Navbar = () => {
  return (
    <article className="container mx-auto px-4 lg:px-36 w-full py-14 flex justify-between items-center">
      <section>
        <GiBookCover className="duration-300 text-5xl dark:text-primary" />
        {/* <img
          src="/images/logo.png"
          alt="Dictionary"
          className="w-12 md:w-16 h-12 md:h-16"
        /> */}
      </section>

      <section className="flex content-center items-center gap-3 md:gap-5">
        <FontsMenu />
        <hr className="h-8 w-[3px] bg-[#ccc] dark:bg-slate-400/75" />
        <ThemeToggler />
      </section>
    </article>
  );
};

export default Navbar;
