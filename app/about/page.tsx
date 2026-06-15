import Link from "next/link";

export const metadata = {
  title: "About CPBible | Scripture Transformation Platform",
  description:
    "Learn about the vision, mission, and story behind CPBible, the Bible you pray, declare, and live.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#FAF7F0]">

      {/* HERO */}
      <section className="bg-[#4E5D30] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            About CPBible
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-6xl">
            The Bible You Pray,
            Declare, and Live
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-white/80">
            CPBible exists to help believers move beyond simply reading
            Scripture to actively praying it, declaring it, and living it.
          </p>

        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">

          <h2 className="text-4xl font-bold text-[#1F2937]">
            Our Story
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700">

            <p>
              CPBible was born from a simple but powerful observation:
              many believers read the Bible daily, yet struggle to
              consistently apply God's Word in prayer and everyday life.
            </p>

            <p>
              Scripture was never intended to remain information alone.
              It was given to transform hearts, renew minds, strengthen
              faith, and shape how we live.
            </p>

            <p>
              CPBible bridges the gap between reading and living the Word
              by transforming Scripture into first-person confessional
              prayer that believers can pray, declare, meditate on,
              and apply daily.
            </p>

          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-[#1F2937]">
            Our Mission
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-600">
            To help believers engage God's Word in a transformational way
            through Scripture-based prayer, declaration, discipleship,
            and spiritual growth.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            <div className="rounded-3xl bg-[#FAF7F0] p-8">
              <h3 className="font-bold text-[#4E5D30]">
                Read
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Read God's Word daily.
              </p>
            </div>

            <div className="rounded-3xl bg-[#FAF7F0] p-8">
              <h3 className="font-bold text-[#4E5D30]">
                Receive
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Receive revelation and understanding.
              </p>
            </div>

            <div className="rounded-3xl bg-[#FAF7F0] p-8">
              <h3 className="font-bold text-[#4E5D30]">
                Declare
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Speak Scripture over your life.
              </p>
            </div>

            <div className="rounded-3xl bg-[#FAF7F0] p-8">
              <h3 className="font-bold text-[#4E5D30]">
                Live
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Walk out God's truth daily.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHAT MAKES CPBIBLE UNIQUE */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-center text-4xl font-bold text-[#1F2937]">
            What Makes CPBible Different?
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-8">
              <h3 className="text-xl font-bold">
                Scripture-Based Confessional Prayer
              </h3>

              <p className="mt-4 text-gray-600">
                Every confessional prayer is rooted directly in Scripture,
                helping believers pray God's Word with confidence.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <h3 className="text-xl font-bold">
                All 66 Books Processed
              </h3>

              <p className="mt-4 text-gray-600">
                CPBible includes Scripture-based confessions drawn from
                all sixty-six books of the Bible.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <h3 className="text-xl font-bold">
                Devotionals and Study Tools
              </h3>

              <p className="mt-4 text-gray-600">
                Grow deeper through devotionals, Bible study resources,
                and discipleship tools.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <h3 className="text-xl font-bold">
                Global Accessibility
              </h3>

              <p className="mt-4 text-gray-600">
                We are committed to making Scripture transformation
                accessible to believers everywhere.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAITH CLINIC */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold text-[#1F2937]">
            A Ministry of Faith Clinic
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            CPBible is a ministry initiative of Faith Clinic.
            Our desire is to equip believers around the world with
            practical tools that encourage spiritual growth,
            biblical literacy, prayer, and discipleship.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            We provide CPBible completely free because we believe
            no one should have to pay to pray God's Word.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4E5D30] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Join The Mission
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Help us bring Scripture transformation to believers
            around the world.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/donate"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-[#4E5D30]"
            >
              Support The Mission
            </Link>

            <Link
              href="/features"
              className="rounded-xl border border-white px-8 py-4 font-semibold"
            >
              Explore Features
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}