export default function ReadPrayRecordLive() {
  const features = [
    {
      title: "Read the Word",
      description:
        "Explore Scripture with 14 Bible translations, parallel reading, audio support, and synchronized tabs.",
    },
    {
      title: "Pray the Word",
      description:
        "Transform Bible verses into powerful confessional prayers and Scripture-based declarations.",
    },
    {
      title: "Record the Word",
      description:
        "Capture revelations with notes, journals, highlights, colored underlines, and personal reflections.",
    },
    {
      title: "Live the Word",
      description:
        "Grow through the Prayer Wall, community encouragement, discipleship resources, and daily faith habits.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-[#1F2937] md:text-5xl">
            Everything You Need In One Place
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            CPBible brings together Bible reading, confessional prayers,
            journaling, discipleship, and community into a single spiritual
            growth platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#4E5D30]">
                {feature.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}