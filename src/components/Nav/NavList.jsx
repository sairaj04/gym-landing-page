import { Link } from "react-router-dom";

function NavList() {
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/#home">Home</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/#about">About</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/#featured">Featured</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/#team">Team</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/#gallery">Gallery</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/#pricing">Pricing</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/#blog">Blog</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;
