import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="md:flex hidden flex-row justify-center items-center p-40">
        <div className="relative hidden md:flex flex-col space-y-20 justify-center items-start ml-auto">
          <h1 className="md:text-5xl lg:text-7xl w-3/4 text-left font-bold">
            Make <br /> remote work
          </h1>
          <p className="text-left md:text-base lg:text-lg w-3/4">
            Features Company Careers About Login Register Make remote work Get
            your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <button className="p-4 outline outline-1 outline-black transition-all duration-300 hover:text-black hover:bg-white text-left text-white bg-black font-bold rounded-lg">
            Learn more
          </button>
          <div className="flex flex-row justify-center items-center space-x-5">
            <img className="w-1/4" src="images/client-databiz.svg" alt="" />
            <img className="w-1/4" src="images/client-audiophile.svg" alt="" />
            <img className="w-1/4" src="images/client-meet.svg" alt="" />
            <img className="w-1/4" src="images/client-maker.svg" alt="" />
          </div>
        </div>
        <img
          className="md:w-2/4 lg:w-2/4  md:flex hidden"
          src="images/image-hero-desktop.png"
          alt=""
        />
      </div>

      <div className="flex mt-0 md:hidden flex-col justify-center items-center">
        <img
          className="w-full h-full md:hidden"
          src="images/image-hero-mobile.png"
          alt=""
        />
        <div className="flex text-center md:hidden flex-col space-y-10 justify-center items-center p-10">
          <h1 className="text-4xl font-bold">Make remote work</h1>
          <p>
            Features Company Careers About Login Register Make remote work Get
            your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <button className="p-4 outline outline-1 outline-black transition-all duration-300 hover:text-black hover:bg-white text-left text-white bg-black font-bold rounded-lg">
            Learn more
          </button>
          <div className="flex flex-row justify-center items-center space-x-5">
            <img className="w-1/4" src="images/client-databiz.svg" alt="" />
            <img className="w-1/4" src="images/client-audiophile.svg" alt="" />
            <img className="w-1/4" src="images/client-meet.svg" alt="" />
            <img className="w-1/4" src="images/client-maker.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
