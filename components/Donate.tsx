import Link from "next/link";

export const metadata = {
  title: "Support The Mission | CPBible",
  description:
    "Help believers around the world read the Word, receive revelation, declare the Word, and live the Word through CPBible.",
};

export default function DonatePage() {
  return (
    <main className="bg-[#FAF7F0]">

      {/* HERO */}
      <section className="bg-[#4E5D30] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            Support The Mission
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-6xl">
            Help Bring Scripture Transformation
            To Believers Around The World
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-white/80">
            Your generosity helps believers read the Word,
            receive revelation, declare the Word,
            and live the Word through CPBible.
          </p>

        </div>
      </section>

      {/* MISSION */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">

          <h2 className="text-center text-4xl font-bold text-[#1F2937]">
            Why We Keep CPBible Free
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-700">
            CPBible transforms Scripture into first-person confessional prayer,
            helping believers move beyond simply reading God's Word
            to actively praying, declaring, and living it.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Faith Clinic provides CPBible completely free because we believe
            no one should have to pay to pray God's Word.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Every gift helps place the praying Bible into the hands of another believer.
          </p>

        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#1F2937]">
              Your Gift Makes An Impact
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-[#FAF7F0] p-8">
              <h3 className="text-xl font-bold">
                App Development
              </h3>

              <p className="mt-4 text-gray-600">
                Support ongoing improvements and new features for CPBible.
              </p>
            </div>

            <div className="rounded-3xl bg-[#FAF7F0] p-8">
              <h3 className="text-xl font-bold">
                New Content
              </h3>

              <p className="mt-4 text-gray-600">
                Help create confessional prayers, devotionals,
                and discipleship resources.
              </p>
            </div>

            <div className="rounded-3xl bg-[#FAF7F0] p-8">
              <h3 className="text-xl font-bold">
                Global Outreach
              </h3>

              <p className="mt-4 text-gray-600">
                Expand Bible resources and reach believers worldwide.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MONTHLY PARTNERS */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-[#1F2937]">
            Become A Monthly Partner
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Monthly partners help sustain CPBible and expand
            Scripture transformation around the world.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold">$10</h3>
              <p className="mt-2 text-sm">Prayer Partner</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold">$25</h3>
              <p className="mt-2 text-sm">Scripture Partner</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold">$50</h3>
              <p className="mt-2 text-sm">Kingdom Builder</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold">$100</h3>
              <p className="mt-2 text-sm">Mission Champion</p>
            </div>

          </div>

        </div>
      </section>

      {/* GIVE */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold text-[#1F2937]">
            Give Today
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Support the mission through your preferred giving method.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="https://www.zeffy.com/en-US/donation-form/support-cpbible-ministry"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#4E5D30] px-8 py-4 font-semibold text-white"
            >
              Give Through Zeffy
            </a>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#4E5D30] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Thank You For Supporting The Mission
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Together we are helping believers around the world
            read the Word, receive revelation,
            declare the Word, and live the Word.
          </p>

          <div className="mt-10">
            <Link
              href="/"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-[#4E5D30]"
            >
              Return Home
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}