import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#f8f9fa] pt-4">
      <div className="w-full mx-auto text-center">
        <Link
          href="/"
          className="text-4xl font-bold hover:text-blue-600 transition"
        >
          Modern Walk
        </Link>
        <hr className="w-full border-2 border-[#D9D9D9] mx-auto my-4" />
      </div>
    </header>
  );
};

export default Header;
