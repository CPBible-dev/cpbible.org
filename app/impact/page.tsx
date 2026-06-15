import Link from "next/link";

export default function ImpactPage() {
  return (
    <main className="bg-[#FAF7F0] min-h-screen">

      {/* HERO */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
            Impact
          </span>

          <h1 className="mt-8 text-5xl font-bold text-[#1F2937] md:text-6xl">
            Transforming Lives Through God's Word
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-gray-600">
            CPBible exists to help believers move beyond simply reading Scripture
            to praying it, declaring it, and living it every day.
          </p>

        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-[#1F2937]">
            Why CPBible Exists
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            Many Christians desire a deeper relationship with God but struggle
            to consistently apply Scripture to their daily lives.
            CPBible bridges that gap by transforming Bible passages into
            personal confessional prayers, declarations, reflections,
            and practical spiritual growth tools.
          </p>

        </div>
      </section>

      {/* IMPACT AREAS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#4E5D30]">
                Scripture Engagement
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Helping believers engage God's Word more intentionally through
                prayer, confession, journaling, and study tools.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#4E5D30]">
                Prayer Transformation
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Equipping Christians to pray Scripture confidently and build
                stronger daily prayer habits rooted in God's promises.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#4E5D30]">
                Global Reach
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Making Scripture transformation accessible to believers around
                the world through a free and growing ministry platform.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-[#1F2937]">
            Our Vision
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            We envision millions of believers worldwide experiencing Scripture
            transformation through reading, praying, declaring, and living God's
            Word every day.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Through CPBible, we seek to strengthen discipleship, deepen prayer,
            encourage spiritual growth, and help believers walk confidently in
            their faith.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-3xl bg-[#4E5D30] p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              Join The Mission
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
              Help us bring Scripture transformation to believers around the world.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                href="/download"
                className="rounded-full bg-white px-8 py-4 font-semibold text-[#4E5D30]"
              >
                Download CPBible
              </Link>

              <Link
                href="/donate"
                className="rounded-full border border-white px-8 py-4 font-semibold text-white"
              >
                Support The Mission
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}