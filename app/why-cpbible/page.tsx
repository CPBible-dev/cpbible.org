import Link from "next/link";

export default function WhyCPBiblePage() {
  return (
    <main className="bg-[#FAF7F0]">

      {/* HERO */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
            Why CPBible
          </span>

          <h1 className="mt-8 text-5xl font-bold text-[#1F2937] md:text-6xl">
            The Bible Was Never Meant To Be Read Passively
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-600">
            God's Word was given to transform lives, renew minds,
            strengthen faith, and shape destinies.
          </p>

          <p className="mt-4 text-xl leading-relaxed text-gray-600">
            CPBible helps believers move beyond reading Scripture
            to personally receiving, declaring, and living it.
          </p>

          <div className="mt-10">
            <p className="text-2xl font-semibold text-[#4E5D30]">
              Read the Word • Receive Revelation • Declare the Word • Live the Word
            </p>
          </div>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/download"
              className="rounded-full bg-[#4E5D30] px-8 py-4 font-semibold text-white"
            >
              Download CPBible
            </Link>

            <Link
              href="/donate"
              className="rounded-full border-2 border-[#4E5D30] px-8 py-4 font-semibold text-[#4E5D30]"
            >
              Support the Mission
            </Link>
          </div>

        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold text-[#1F2937]">
            Why Many Believers Struggle To Experience Transformation
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            Millions of Christians faithfully read the Bible.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Yet many struggle to remember what they read,
            apply it to daily life, or consistently pray Scripture.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Reading alone does not always lead to transformation.
          </p>

          <p className="mt-4 text-xl font-semibold text-[#4E5D30]">
            Transformation happens when God's Word becomes personal.
          </p>

        </div>
      </section>

      {/* DISCOVERY */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold text-[#1F2937]">
            When Scripture Becomes Personal, Faith Comes Alive
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            Throughout Scripture, God's people responded to God's Word
            with faith, prayer, declaration, and obedience.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            The more personal God's Word becomes,
            the more powerfully it shapes everyday life.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            This conviction led to the creation of CPBible.
          </p>

        </div>
      </section>

      {/* CONFESSIONAL PRAYER BIBLE */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#1F2937]">
              Introducing The Confessional Prayer Bible
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
              The Confessional Prayer Bible transforms biblical truths
              into personal declarations of faith.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Instead of merely reading God's promises,
              believers can pray them, declare them,
              and apply them personally.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-[#FAF7F0] p-8">
              <h3 className="font-bold text-[#4E5D30]">
                Deuteronomy 28:4
              </h3>

              <p className="mt-4 text-lg">
                The fruits of my body are blessed.
              </p>
            </div>

            <div className="rounded-3xl bg-[#FAF7F0] p-8">
              <h3 className="font-bold text-[#4E5D30]">
                Psalm 23:1
              </h3>

              <p className="mt-4 text-lg">
                The Lord is my shepherd.
                I lack nothing.
              </p>
            </div>

            <div className="rounded-3xl bg-[#FAF7F0] p-8">
              <h3 className="font-bold text-[#4E5D30]">
                Obadiah 1:2
              </h3>

              <p className="mt-4 text-lg">
                The Lord has made me great among the nations.
                I am highly respected.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* READ RECEIVE DECLARE LIVE */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#1F2937]">
              The CPBible Journey
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 text-center">
              <div className="text-4xl">📖</div>
              <h3 className="mt-4 font-bold">Read the Word</h3>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center">
              <div className="text-4xl">💡</div>
              <h3 className="mt-4 font-bold">Receive Revelation</h3>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center">
              <div className="text-4xl">🗣️</div>
              <h3 className="mt-4 font-bold">Declare the Word</h3>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center">
              <div className="text-4xl">🚶</div>
              <h3 className="mt-4 font-bold">Live the Word</h3>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
