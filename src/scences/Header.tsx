type Props = {};
function Header({}: Props) {
  return (
    <header className="flex w-full flex-col items-center">
      <div className="flex flex-row items-start justify-between py-20 gap-16">
        <div className="flex flex-col basis-9/12">
          <h1 className="text-[4rem] font-bold">
            Hi, my name is <span className="text-yellow">Phat</span>,
            <br />
            And I'm a <br /><span className="text-yellow underline">Web Developer</span>
          </h1>

          <ul className="mt-20 flex flex-row items-center justify-start gap-x-10">
            <li>
              <span>Icon</span>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <span>Icon</span>
              <a href="">Github</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col basis-3/12">
          <div className="h-[400px] w-[400px] rounded-full bg-[#FFD400]">
            <img src="" alt="" />
          </div>

          <div className="">
            <button>Hire me</button>
            <button>My Resume</button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
