export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-[#F5F2E9] px-4 py-2 text-sm font-semibold text-[#4E5D30]">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#1F2937]">
            Lives Being Transformed Through Scripture
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-[#FAF7F0] p-8">
            <p>
              "CPBible helped me move beyond reading Scripture to praying and declaring it daily."
            </p>
            <p className="mt-6 font-semibold">
              Beta User
            </p>
          </div>

          <div className="rounded-3xl bg-[#FAF7F0] p-8">
            <p>
              "The confessional prayers brought fresh life to my devotional time."
            </p>
            <p className="mt-6 font-semibold">
              Beta User
            </p>
          </div>

          <div className="rounded-3xl bg-[#FAF7F0] p-8">
            <p>
              "This is unlike any Bible app I've used before."
            </p>
            <p className="mt-6 font-semibold">
              Beta User
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}