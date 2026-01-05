const Header = () => {
  return (
    <header className="">
      <ul
        className="mt-1 flex gap-5  *:text-white font-bold text-xl *:cursor-pointer *:border-b-2 *:border-b-white *:hover:bg-white *:hover:text-black p-2
      *:px-4 *:py-2 *:hover:rounded-4xl"
      >
        <li>Products</li>
        <li>Learn</li>
        <li>Safety</li>
        <li>Support</li>
        <li>Download</li>
      </ul>
    </header>
  );
};

export default Header;
