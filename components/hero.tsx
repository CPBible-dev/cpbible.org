export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#FDF6E2]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30] shadow-sm">
              Read the Word • Pray the Word • Live the Word
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#1F2937] md:text-7xl">
              The Bible You Pray —
              <br />
              <span className="text-[#4E5D30]">
                Not Just Read
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
              Transform Scripture into personal prayer,
              Bible confessions, study notes, journals,
              prayer requests, and spiritual growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-[#4E5D30] px-8 py-4 font-semibold text-white hover:opacity-90">
                Download App
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold">
                Support Ministry
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
              <span>✓ 14 Bible Translations</span>
              <span>✓ Prayer Wall</span>
              <span>✓ Journals & Notes</span>
              <span>✓ Confessional Prayers</span>
            </div>
          </div>

          {/* RIGHT MOCKUP */}

          <div className="relative">
            <div className="mx-auto flex h-[650px] max-w-[320px] items-center justify-center rounded-[3rem] border-8 border-slate-900 bg-white shadow-2xl">
              <div className="text-center">
                <p className="text-sm text-slate-500">
                  App Screenshot
                </p>

                <p className="mt-2 text-lg font-semibold text-[#4E5D30]">
                  Replace with CPBible image
                </p>
              </div>
            </div>

            <div className="absolute -right-6 top-10 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-xs font-semibold text-[#4E5D30]">
                Confessional Prayers
              </p>
            </div>

            <div className="absolute -left-6 bottom-20 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-xs font-semibold text-[#4E5D30]">
                Prayer Wall
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}