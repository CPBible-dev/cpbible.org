export default function EveryScriptureBecomesPersonal() {
  const examples = [
    {
      reference: "Obadiah 1:2",
      title: "Turn Judgment Into Blessing",
      confession:
        "The Lord has made me big among the nations; I am utterly respected.",
    },
    {
      reference: "Genesis 13:5-10",
      title: "Walk By Revelation",
      confession:
        "I am led by the Holy Spirit, not mere sight. My vision is guided by God's wisdom.",
    },
    {
      reference: "Genesis 49:4",
      title: "Reject The Pattern Of Failure",
      confession:
        "Stable as the rock, my superiority is established. I respect boundaries and walk in obedience.",
    },
    {
      reference: "Deuteronomy 28:4",
      title: "Affirm God's Promises",
      confession:
        "The fruits of my body are blessed; the work of my hands is blessed; my increase is blessed.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT */}

          <div>
            <span className="rounded-full bg-[#FDF6E2] px-4 py-2 text-sm font-medium text-[#4E5D30]">
              What Makes CPBible Different
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#1F2937] md:text-5xl">
              Every Scripture
              <span className="block text-[#4E5D30]">
                Becomes Personal
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              CPBible goes beyond Bible reading.
              It helps you transform Scripture into personal
              confessions, declarations, prayers, and practical
              life application rooted in God's Word.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex gap-3">
                <span className="font-bold text-[#4E5D30]">✓</span>
                <p>Turn biblical truth into personal declarations</p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-[#4E5D30]">✓</span>
                <p>Apply Scripture to real-life situations</p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-[#4E5D30]">✓</span>
                <p>Affirm God's promises daily</p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-[#4E5D30]">✓</span>
                <p>Build a lifestyle of faith-filled confession</p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-[#4E5D30]">✓</span>
                <p>Move from information to transformation</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="grid gap-6">
            {examples.map((example) => (
              <div
                key={example.reference}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-[#4E5D30]">
                  {example.reference}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#1F2937]">
                  {example.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  "{example.confession}"
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}