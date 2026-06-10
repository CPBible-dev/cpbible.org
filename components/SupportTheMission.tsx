import Link from "next/link";

export default function SupportTheMission() {
  return (
    <section className="bg-[#FAF7F0] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
            Support the Mission
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#1F2937] md:text-5xl">
            Help Bring God's Word to More People
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            CPBible exists to help believers read the Word,
            receive revelation, declare the Word, and live the Word.
            Your support helps us continue developing Scripture-centered
            tools that strengthen discipleship, prayer, and spiritual growth.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Together, we can help more people engage with God's Word,
            deepen their prayer lives, and experience transformation
            through daily interaction with Scripture.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="text-4xl">📖</div>
            <h3 className="mt-4 text-xl font-bold text-[#1F2937]">
              Scripture Engagement
            </h3>
            <p className="mt-3 text-gray-600">
              Help believers discover, understand, and apply God's Word daily.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="text-4xl">🙏</div>
            <h3 className="mt-4 text-xl font-bold text-[#1F2937]">
              Prayer & Discipleship
            </h3>
            <p className="mt-3 text-gray-600">
              Strengthen prayer, spiritual growth, and biblical discipleship.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="text-4xl">🌍</div>
            <h3 className="mt-4 text-xl font-bold text-[#1F2937]">
              Global Outreach
            </h3>
            <p className="mt-3 text-gray-600">
              Expand access to biblical resources across nations and cultures.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="text-4xl">🚀</div>
            <h3 className="mt-4 text-xl font-bold text-[#1F2937]">
              Future Development
            </h3>
            <p className="mt-3 text-gray-600">
              Support new features that help believers engage Scripture more deeply.
            </p>
          </div>

        </div>

        <div className="mt-16 text-center">

          <Link
            href="/donate"
            className="inline-flex items-center rounded-full bg-[#4E5D30] px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
          >
            Support the Mission
          </Link>

        </div>

      </div>
    </section>
  );
}