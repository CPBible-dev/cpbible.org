import Link from "next/link";

export default function DonationCTA() {
  return (
    <section className="bg-[#4E5D30] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
          Support The Mission
        </span>

        <h2 className="mt-6 text-4xl font-bold md:text-5xl">
          Help Bring Scripture Transformation
          To Believers Around The World
        </h2>

        <p className="mt-6 text-lg text-white/80">
          Your generosity helps us expand Bible
          translations, develop new confessional prayers,
          strengthen discipleship resources,
          and reach more people with God's Word.
        </p>

        <div className="mt-10">
          <Link
            href="/donate"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-[#4E5D30]"
          >
            Support The Mission
          </Link>
        </div>

      </div>
    </section>
  );
}