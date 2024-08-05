import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-2  px-2 md:px-8 bg-white w-full drop-shadow-md h-16 fixed">
      <img src={logo} alt="logo" className="w-20 md:w-24 shadow-lg pt-8" />

      <button className="flex justify-center items-center gap-2 w-28 md:w-36 h-[34px] md:h-[40px] px-4 py-0 mr-8 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#4173b4] via-[#0c63d6] to-[#006fff] hover:shadow-xl hover:shadow-yellow-600 hover:scale-105 duration-300 hover:from-[#FFAC00] hover:to-[#ffaa00a2] ">
        <span className="text-sm">Donate Now</span>
      </button>
    </div>
  );
}
