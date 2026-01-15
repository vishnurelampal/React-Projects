import { Link } from "react-router-dom";

type HeaderComponetType = {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
};
type HeaderNav = {
  navigation: HeaderComponetType;
};
const Header = ({ navigation }: HeaderNav) => {
  return (
    <header className="">
      <ul
        className=" flex gap-5  *:text-white font-bold text-xl *:cursor-pointer *:border-b-2 *:border-b-white *:hover:bg-white *:hover:text-black p-2
      *:px-4 *:pb-2 *:hover:rounded-4xl"
      >
        <Link to={`/${navigation.first}`}>
          <li>{navigation.first}</li>
        </Link>
        <Link to={`/${navigation.second}`}>
          <li>{navigation.second}</li>
        </Link>
        <Link to={`/${navigation.third}`}>
          <li>{navigation.third}</li>
        </Link>
        <Link to={`/${navigation.fourth}`}>
          <li>{navigation.fourth}</li>
        </Link>
        <Link to={`/${navigation.fifth}`}>
          <li>{navigation.fifth}</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
