const Navbar = () => {
  return (
    <header className="bg-slate-900 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Product Browser
        </h1>

        <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
          200K Products
        </span>
      </div>
    </header>
  );
};

export default Navbar;
