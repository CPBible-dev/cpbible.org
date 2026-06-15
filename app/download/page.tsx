export default function DownloadPage() {
  return (
    <main className="bg-[#FAF7F0] min-h-screen">
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
            Download CPBible
          </span>

          <h1 className="mt-8 text-5xl font-bold text-[#1F2937]">
            The Bible You Pray — Not Just Read
          </h1>

          <p className="mt-8 text-xl text-gray-600">
            Download CPBible and transform Scripture into daily prayer,
            confession, and spiritual growth.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <a
              href="#"
              className="rounded-xl bg-[#4E5D30] px-8 py-4 font-semibold text-white"
            >
              Download for iPhone
            </a>

            <a
              href="#"
              className="rounded-xl border border-[#4E5D30] px-8 py-4 font-semibold text-[#4E5D30]"
            >
              Download for Android
            </a>

          </div>

        </div>
      </section>
    </main>
  );
}