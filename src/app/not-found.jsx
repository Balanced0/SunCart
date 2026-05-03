import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen container mx-auto px-4 flex items-center justify-center flex-col">
      <h1 className="font-extrabold text-orange-500 text-2xl md:text-3xl">
        404 - Page Not Found
      </h1>
      <p className="mt-2">This page does not exist.</p>
      <Link href="/" className="btn mt-4 btn-xs sm:btn-sm md:btn-md">
        Back to Home
      </Link>
    </div>
  );
}
