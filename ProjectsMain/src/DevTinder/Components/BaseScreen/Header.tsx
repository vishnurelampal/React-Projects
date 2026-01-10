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
        <li>{navigation.first}</li>
        <li>{navigation.second}</li>
        <li>{navigation.third}</li>
        <li>{navigation.fourth}</li>
        <li>{navigation.fifth}</li>
      </ul>
    </header>
  );
};

export default Header;
