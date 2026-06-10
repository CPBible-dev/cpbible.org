import Link from "next/link";

export default function ConfessionalPrayerFeature() {
  return (
    <section className="bg-[#FDF6E2] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4E5D30]">
              Signature Feature
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#1F2937] md:text-5xl">
              Transform Scripture Into Personal Prayer
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Move beyond simply reading Scripture.
              Turn God's Word into personal declarations,
              faith-filled confessions, and powerful prayers
              for every area of life.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex gap-3">
                <span className="font-bold text-[#4E5D30]">✓</span>
                <p>Identity In Christ Confessions</p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-[#4E5D30]">✓</span>
                <p>Healing & Divine Health</p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-[#4E5D30]">✓</span>
                <p>Protection & Spiritual Warfare</p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-[#4E5D30]">✓</span>
                <p>Marriage & Family</p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-[#4E5D30]">✓</span>
                <p>Fruits Of The Womb</p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-[#4E5D30]">✓</span>
                <p>Purpose, Calling & Destiny</p>
              </div>

            </div>

            <div className="mt-10">
              <Link
                href="/features"
                className="inline-flex rounded-xl bg-[#4E5D30] px-6 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Explore Confessional Prayers
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div>
            <div className="rounded-4xl bg-white p-6 shadow-2xl">

              <div className="rounded-2xl bg-[#FDF6E2] p-6">

                <p className="font-semibold text-[#4E5D30]">
                  Self Affirmation In Christ
                </p>

                <div className="mt-6 space-y-4 text-slate-700">

                  <p>
                    • I am an heir of God and a joint-heir
                    with Christ.
                  </p>

                  <p>
                    • I am led by the Holy Spirit and walk
                    in God's purpose.
                  </p>

                  <p>
                    • I am more than a conqueror through
                    Christ who loves me.
                  </p>

                  <p>
                    • No weapon formed against me shall
                    prosper.
                  </p>

                  <p>
                    • I can do all things through Christ
                    who strengthens me.
                  </p>

                </div>

                <div className="mt-6 rounded-xl bg-white p-4 text-center shadow">
                  Screenshot Placeholder
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}