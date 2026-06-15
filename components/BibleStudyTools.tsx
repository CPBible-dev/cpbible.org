import Image from "next/image";

export default function BibleStudyTools() {
  const tools = [
    {
      title: "Notes",
      description: "Capture revelations and personal study insights.",
    },
    {
      title: "Margin Notes",
      description: "Write contextual notes directly alongside Scripture.",
    },
    {
      title: "Journals",
      description: "Record prayers, testimonies, and spiritual growth.",
    },
    {
      title: "Highlights",
      description: "Mark important verses for future reflection.",
    },
    {
      title: "Colored Underlines",
      description: "Organize themes and revelations with color-coded markings.",
    },
    {
      title: "Text Colors",
      description: "Visually categorize verses by topic and significance.",
    },
    {
      title: "Voice Notes",
      description: "Save spoken revelations, prayers, and sermon insights.",
    },
    {
      title: "Audio Reader",
      description: "Listen to Scripture wherever you are.",
    },
    {
      title: "Bookmarks",
      description: "Return instantly to key passages and studies.",
    },
    {
      title: "Reading Plans",
      description: "Stay consistent with guided Bible reading journeys.",
    },
  ];

  return (
<section className="bg-[#F3F6EE] py-24">
              <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-[#FDF6E2] px-4 py-2 text-sm font-semibold text-[#4E5D30]">
            Bible Study Tools
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#1F2937] md:text-5xl">
            Everything You Need To Study God's Word
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            CPBible combines powerful study tools, prayer resources,
            journaling, and Scripture declaration to help believers
            grow deeper in God's Word every day.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">

          {/* Screenshot */}
          <div>
            <Image
              src="/screenshots/study-tools.jpeg"
              alt="Bible Study Tools"
              width={800}
              height={1200}
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

          {/* Features */}
          <div>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              CPBible equips believers with powerful study and reflection tools
              designed to deepen biblical understanding, capture revelation,
              and support spiritual growth.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {tools.map((tool) => (
                <div
                  key={tool.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#4E5D30]">
                    {tool.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">
              Whether you're studying a single verse, journaling a revelation,
              listening to Scripture on the go, or preparing for ministry,
              CPBible helps you engage God's Word more intentionally every day.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}