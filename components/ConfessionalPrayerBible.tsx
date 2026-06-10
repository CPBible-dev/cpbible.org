import Image from "next/image";

export default function ConfessionalPrayerBible() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <span className="rounded-full bg-[#FDF6E2] px-4 py-2 text-sm font-semibold text-[#4E5D30]">
              Flagship Feature
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#1F2937] md:text-5xl">
              The Confessional Prayer Bible
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              CPBible transforms Scripture into personal prayers,
              declarations, confessions, and practical life application.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Move beyond simply reading verses and begin declaring
              God's promises over your life every day.
            </p>

            <div className="mt-10 space-y-4">

            
              <div className="rounded-xl border border-[#E5E7EB] p-4">
                <p className="font-semibold text-[#4E5D30]">
                  Genesis 13:5–10
                </p>
                <p className="mt-2 text-gray-700">
                   When I look, I see through. The Spirit of God aids my sight; my eye penetrates the future of its objects. The face value of things does not deceive me. I am led by the Holy Spirit, not mere sight. I am not Lot; I don't "lift" my eyes except at the Lord's promptings.
                </p>
              </div>

             

            </div>
          </div>

          <div>
           <Image
  src="/screenshots/confessional-prayer.jpeg"
  alt="Confessional Prayer Bible"
  width={600}
  height={1200}
  priority
  className="mx-auto rounded-3xl shadow-2xl"
/>
          </div>

        </div>
      </div>
    </section>
  );
}
