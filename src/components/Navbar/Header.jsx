import Logo from "../../assets/thetindung2.png";


export const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full shadow-md bg-green-500 px-4 py-2">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 font-semibold text-gray-700">
          <img src={Logo} className="w-20" alt="Logo" />
        </div>
        <nav className="flex items-center">
          <button className="text-white py-2 px-4 rounded-lg bg-green-700 hover:bg-green-800 font-bold">
          <h1> <a  href="tel:+84879203999">
             HOTLINE: 0879203999
          </a></h1>
          </button>
        </nav>
      </div>
    </div>
  </div>
  )
}

export default Header;
