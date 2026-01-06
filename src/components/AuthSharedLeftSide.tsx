import Logo from "../assets/logo.png";

const AuthSharedLeftSide = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-purple-900 items-center justify-center p-12 relative overflow-hidden position-relative">
      <div className="absolute bg-slate-950 pointer-events-none select-none z-2 h-full w-full"></div>
      {/* Logo Container */}
      <div className="relative z-10 text-center">
        <div className="mb-2">
          <img
            src={Logo}
            alt="Amro image Logo"
            className="w-100 h-100 m-auto flex items-center justify-center"
          />
        </div>
        <h1 className="text-white text-5xl mb-4 font-bold">ImageGen</h1>
        <p className="text-purple-300 text-lg">
          A product by&nbsp;<span className="font-bold">AMRO</span>
        </p>
      </div>
    </div>
  );
};

export default AuthSharedLeftSide;
