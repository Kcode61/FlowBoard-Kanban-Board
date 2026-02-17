import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex z-50 relative flex-col items-center justify-center min-h-screen bg-[#1D283A]">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-2xl text-[#88A3B8]">Oops! Page not found</p>
      <Link
        href="/"
        className="text-white underline font-bold mt-4 hover:text-[#606FF6] transition ease duration-300 "
      >
        Return to home
      </Link>
    </div>
  );
}
