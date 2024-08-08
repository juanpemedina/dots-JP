import VEA_logo from "/VEA_logo.jpg";

const Header = () => {
  return (
    <header className="bg-orange-400 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
      <img src={VEA_logo} alt="" className="w-12 h-12" />{" "}
    </header>
  );
};
export default Header;
