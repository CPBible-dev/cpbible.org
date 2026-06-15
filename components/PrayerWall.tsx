import Image from "next/image";

export default function PrayerWall() {
  return (
<section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
              Community Prayer
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#1F2937] md:text-5xl">
              Pray With Believers Around the World
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Share prayer requests, stand in faith with others,
              and experience the power of believers praying together.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Whether you're believing God for healing, breakthrough,
              salvation, restoration, or guidance, you're never praying alone.
            </p>

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">
                <span>🙏</span>
                <p>Submit prayer requests</p>
              </div>

              <div className="flex items-center gap-3">
                <span>❤️</span>
                <p>Support others in prayer</p>
              </div>

              <div className="flex items-center gap-3">
                <span>🌍</span>
                <p>Connect with believers globally</p>
              </div>

              <div className="flex items-center gap-3">
                <span>🙌</span>
                <p>Celebrate testimonies and answered prayers</p>
              </div>

            </div>
          </div>

          <div>
           <img
  src="/screenshots/prayer-wall.jpeg"
  alt="Prayer Wall"
  className="w-full rounded-3xl shadow-2xl"
/>
          </div>

        </div>

      </div>
    </section>
  );
}