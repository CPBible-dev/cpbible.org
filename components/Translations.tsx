import Image from "next/image";

export default function Translations() {
  return (
    <section className="bg-[#FDF6E2] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Content */}
          <div>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
              Bible Translations
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#1F2937] md:text-5xl">
              Read God's Word Your Way
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Access your favorite Bible translations, compare passages,
              listen on the go, and engage Scripture in the format that
              best supports your spiritual journey.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <span>✓</span>
                <p>Multiple Bible Translations</p>
              </div>

              <div className="flex items-center gap-3">
                <span>✓</span>
                <p>Parallel Bible Reading</p>
              </div>

              <div className="flex items-center gap-3">
                <span>✓</span>
                <p>Audio Bible</p>
              </div>

              <div className="flex items-center gap-3">
                <span>✓</span>
                <p>Fast Scripture Search</p>
              </div>

              <div className="flex items-center gap-3">
                <span>✓</span>
                <p>Easy Chapter Navigation</p>
              </div>

              <div className="flex items-center gap-3">
                <span>✓</span>
                <p>Personalized Reading Experience</p>
              </div>

            </div>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">
              Whether you prefer KJV, NKJV, NIV, ESV, NLT, CSB,
              or other trusted translations, CPBible helps you
              stay immersed in God's Word every day.
            </p>
          </div>

          {/* Screenshot */}
          <div>
            <Image
              src="/screenshots/translations.png"
              alt="Bible Translations"
              width={800}
              height={1200}
              className="mx-auto w-full max-w-md rounded-3xl shadow-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}