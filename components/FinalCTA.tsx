import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[#4E5D30] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-4xl font-bold md:text-5xl">
          Start Transforming Scripture Into Daily Life Today
        </h2>

        <p className="mt-6 text-lg text-white/80">
          Read the Word. Receive Revelation.
          Declare the Word. Live the Word.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/download"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-[#4E5D30]"
          >
            Download CPBible
          </Link>

          <Link
            href="/donate"
            className="rounded-xl border border-white px-8 py-4 font-semibold"
          >
            Support The Mission
          </Link>

        </div>
      </div>
    </section>
  );
}