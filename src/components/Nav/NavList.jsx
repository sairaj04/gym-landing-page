import { Link } from "react-router-dom";

function NavList() {
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium">
        <li className=" cursor-pointer">
          <Link>Home</Link>
        </li>
        <li className=" cursor-pointer">
          <Link>About</Link>
        </li>
        <li className=" cursor-pointer">
          <Link>Featured</Link>
        </li>
        <li className=" cursor-pointer">
          <Link>Team</Link>
        </li>
        <li className=" cursor-pointer">
          <Link>Gallery</Link>
        </li>
        <li className=" cursor-pointer">
          <Link>Pricing</Link>
        </li>
        <li className=" cursor-pointer">
          <Link>Blog</Link>
        </li>
        <li className=" cursor-pointer">
          <Link>Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;
