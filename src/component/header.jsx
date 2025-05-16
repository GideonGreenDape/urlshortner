function Header() {
  return (
    <nav className="flex flex-row justify-between items-center bg-joshua h-[100px] px-[60px]">
        <Logo />
        <Links />
    </nav>

  );
}

function Logo() {
  return <p className="font-Bungee text-[32px] text-white font-bold ">SHORTENED URL</p>;
}

function Links() {
  return (
    <ul className= "flex flex-row gap-[0px] bg-linksbg w-fit items-center rounded-md ">
      <li className="text-white bg-linksbg py-3 px-5 rounded-md font-montserrat cursor-pointer hover:bg-cyan-400 ">My Url</li>
      <li className="text-white bg-linksbg py-3 px-5 rounded-md font-montserrat cursor-pointer hover:bg-cyan-400 ">Plans</li>
      <li className="text-white bg-linksbg py-3 px-5 rounded-md font-montserrat cursor-pointer hover:bg-cyan-400 ">Blog</li>
      <li className="text-white bg-linksbg py-3 px-5 rounded-md font-montserrat cursor-pointer hover:bg-cyan-400 ">Features</li>
      <li className="text-white bg-linksbg py-3 px-5 rounded-md font-montserrat cursor-pointer hover:bg-cyan-400 ">Sign Up</li>
      <li className="text-white bg-linksbg py-3 px-5 rounded-md font-montserrat cursor-pointer hover:bg-cyan-400 ">Sign In</li>
    </ul>
  );
}


export default Header;