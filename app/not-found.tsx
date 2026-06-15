import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FAF7F0] px-6">
      <div className="max-w-2xl text-center">

        <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
          404 Error
        </span>

        <h1 className="mt-8 text-6xl font-bold text-[#1F2937]">
          Page Not Found
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="rounded-xl bg-[#4E5D30] px-8 py-4 font-semibold text-white"
          >
            Back Home
          </Link>

          <Link
            href="/download"
            className="rounded-xl border border-[#4E5D30] px-8 py-4 font-semibold text-[#4E5D30]"
          >
            Download CPBible
          </Link>

        </div>

      </div>
    </main>
  );
}