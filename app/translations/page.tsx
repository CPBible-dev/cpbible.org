import Image from "next/image";
import Link from "next/link";

export default function TranslationsPage() {
  return (
    <main className="bg-[#FAF7F0] min-h-screen">

      {/* HERO */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
            Bible Translations
          </span>

          <h1 className="mt-8 text-5xl font-bold text-[#1F2937] md:text-6xl">
            Read God's Word In The Translation That Speaks To You
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-gray-600">
            CPBible provides access to multiple trusted Bible translations,
            helping believers read, study, compare, pray, and live God's Word
            with greater understanding and clarity.
          </p>

        </div>
      </section>

      {/* SCREENSHOT */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-lg">

            <Image
              src="/images/translations/all-translations-screen.png"
              alt="CPBible Bible Translations"
              width={1400}
              height={900}
              className="w-full rounded-2xl"
            />

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1F2937]">
                Compare Translations
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                View Scripture across multiple Bible translations to gain
                deeper understanding and insight into God's Word.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1F2937]">
                Study With Confidence
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Access trusted Bible translations that help you explore
                Scripture with greater clarity and spiritual depth.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1F2937]">
                Pray God's Word
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Transform every passage into personal confessional prayer and
                daily declarations of faith through CPBible.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-3xl bg-[#4E5D30] p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              Experience Scripture Transformation
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
              Read the Word. Receive Revelation. Declare the Word.
              Live the Word.
            </p>

            <Link
              href="/download"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#4E5D30] transition hover:opacity-90"
            >
              Download CPBible
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}