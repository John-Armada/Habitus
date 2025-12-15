import logo from "./assets/logo.svg";

function Hero() {
  return (
    <main className="flex justify-center items-center w-full px-7.5 pt-7.5">
      <section className="bg-[#FE5D33] rounded-[40px] w-345 h-195.75">
        <header className="flex flex-row justify-around mt-13 items-center">
          <div>
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul className="flex flex-row gap-7.5 justify-center">
              <li className="text-white text-[18px] cursor-pointer">Home</li>
              <li className="text-white text-[18px] cursor-pointer">
                Features
              </li>
              <li className="text-white text-[18px] cursor-pointer">
                How it works
              </li>
              <li className="text-white text-[18px] cursor-pointer">Blog</li>
              <li className="text-white text-[18px] cursor-pointer">
                Resources
              </li>
              <li className="text-white text-[18px] cursor-pointer">
                About Us
              </li>
            </ul>
          </nav>
          <button className="bg-white rounded-[9999px] px-8.25 py-2.75 font-semibold">
            Log In
          </button>
        </header>
      </section>
    </main>
  );
}

export default Hero;
