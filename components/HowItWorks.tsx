export default function HowItWorks() {
  const steps = [
    {
      title: "Read The Word",
      description:
        "Read Scripture through multiple Bible translations and study tools.",
    },
    {
      title: "Receive Revelation",
      description:
        "Capture insights through notes, highlights, and prayerful reflection.",
    },
    {
      title: "Declare The Word",
      description:
        "Transform Scripture into personal confessions and declarations.",
    },
    {
      title: "Live The Word",
      description:
        "Apply God's Word daily and experience lasting transformation.",
    },
  ];

  return (
    <section className="bg-[#FDF6E2] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
          How CPBible Works
        </span>

        <h2 className="mt-6 text-4xl font-bold text-[#1F2937] md:text-5xl">
          Read. Receive. Declare. Live.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          CPBible helps believers move from reading Scripture to living
          transformed lives through God's Word.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#4E5D30]">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}