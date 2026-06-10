export default function FeaturesPage() {
  return (
    <main className="bg-[#FAF7F0]">

      {/* HERO */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
            Features
          </span>

          <h1 className="mt-8 text-5xl font-bold text-[#1F2937] md:text-6xl">
            Everything You Need To Read, Pray, and Live God's Word
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-600">
            CPBible combines Scripture engagement, prayer,
            Bible study tools, discipleship resources,
            and community features into one unified platform.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            Every feature is designed to help believers engage God's Word
            more deeply and live it more intentionally.
          </p>

          <div className="mt-10">
            <p className="text-xl font-semibold text-[#4E5D30]">
              Read the Word • Receive Revelation • Declare the Word • Live the Word
            </p>
          </div>

        </div>
      </section>
      {/* CONFESSIONAL PRAYER BIBLE */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <span className="rounded-full bg-[#FDF6E2] px-4 py-2 text-sm font-semibold text-[#4E5D30]">
                Signature Feature
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#1F2937] md:text-5xl">
                The Confessional Prayer Bible
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Transform biblical truths into personal declarations
                of faith that can be prayed, spoken, and lived daily.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Instead of merely reading God's promises, believers
                can personalize Scripture and declare it confidently
                over their lives.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <span>✓</span>
                  <p>Personalized confessional prayers</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>✓</span>
                  <p>Scripture-based declarations</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>✓</span>
                  <p>Faith-building engagement</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>✓</span>
                  <p>Practical application of God's Word</p>
                </div>

              </div>
            </div>

            {/* Placeholder Screenshot */}
            <div className="flex items-center justify-center">
              <div className="flex h-[500px] w-full max-w-sm items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-100">
                <p className="text-center text-gray-500">
                  Confessional Prayer Bible Screenshot
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
           {/* SCRIPTURE ENGAGEMENT */}
      <section className="bg-[#FAF7F0] py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
              Scripture Engagement
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#1F2937] md:text-5xl">
              Engage God's Word Every Day
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              Access Scripture in multiple formats and build a
              consistent habit of reading, listening, and meditating
              on God's Word.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl">📖</div>
              <h3 className="mt-4 text-xl font-bold">
                Bible Translations
              </h3>
              <p className="mt-3 text-gray-600">
                Read Scripture in multiple trusted Bible translations.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl">🎧</div>
              <h3 className="mt-4 text-xl font-bold">
                Audio Bible
              </h3>
              <p className="mt-3 text-gray-600">
                Listen to God's Word wherever you are.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl">🔍</div>
              <h3 className="mt-4 text-xl font-bold">
                Powerful Search
              </h3>
              <p className="mt-3 text-gray-600">
                Quickly find verses, passages, and keywords.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl">📚</div>
              <h3 className="mt-4 text-xl font-bold">
                Reading Plans
              </h3>
              <p className="mt-3 text-gray-600">
                Stay consistent with structured Bible reading plans.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl">🔖</div>
              <h3 className="mt-4 text-xl font-bold">
                Bookmarks
              </h3>
              <p className="mt-3 text-gray-600">
                Save important passages for future reflection.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl">📤</div>
              <h3 className="mt-4 text-xl font-bold">
                Verse Sharing
              </h3>
              <p className="mt-3 text-gray-600">
                Share encouraging Scriptures with others.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BIBLE STUDY TOOLS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Screenshot Placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex h-[550px] w-full max-w-md items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-100 p-6">
                <div className="text-center">
                  <p className="font-semibold text-gray-700">
                    Future Screenshot
                  </p>

                  <p className="mt-4 text-sm text-gray-500">
                    /screenshots/study-tools.jpeg
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>

              <span className="rounded-full bg-[#FDF6E2] px-4 py-2 text-sm font-semibold text-[#4E5D30]">
                Bible Study Tools
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#1F2937] md:text-5xl">
                Study Scripture With Greater Depth
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Capture insights, highlight key passages,
                and personalize your Bible study experience.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div>📝 Notes</div>

                <div>📓 Margin Notes</div>

                <div>🎨 Text Colors</div>

                <div>✏️ Colored Underlines</div>

                <div>📌 Highlights</div>

                <div>💡 Personal Insights</div>

              </div>

              <p className="mt-8 text-lg leading-relaxed text-gray-600">
                Whether you're studying a single verse,
                journaling a revelation, or preparing for ministry,
                CPBible helps you engage God's Word more intentionally every day.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* PRAYER & SPIRITUAL GROWTH */}
      <section className="bg-[#FAF7F0] py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Content */}
            <div>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
                Prayer & Spiritual Growth
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#1F2937] md:text-5xl">
                Grow Through Prayer and Reflection
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Strengthen your walk with God through intentional prayer,
                Scripture reflection, and personal spiritual growth.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <span>🙏</span>
                  <p>Prayer Lists</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>🛐</span>
                  <p>Prayer Journaling</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>📖</span>
                  <p>Daily Scripture Reflection</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>💡</span>
                  <p>Capture Personal Revelation</p>
                </div>

              </div>

              <p className="mt-8 text-lg leading-relaxed text-gray-600">
                Keep track of prayer requests, record spiritual insights,
                and document your journey as God speaks through His Word.
              </p>

            </div>

            {/* Screenshot Placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex h-[550px] w-full max-w-md items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-100 p-6">
                <div className="text-center">
                  <p className="font-semibold text-gray-700">
                    Future Screenshot
                  </p>

                  <p className="mt-4 text-sm text-gray-500">
                    /screenshots/prayer-growth.jpeg
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* COMMUNITY PRAYER WALL */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Screenshot Placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex h-[550px] w-full max-w-md items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-100 p-6">
                <div className="text-center">
                  <p className="font-semibold text-gray-700">
                    Future Screenshot
                  </p>

                  <p className="mt-4 text-sm text-gray-500">
                    /screenshots/prayer-wall.jpeg
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>

              <span className="rounded-full bg-[#FDF6E2] px-4 py-2 text-sm font-semibold text-[#4E5D30]">
                Community
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#1F2937] md:text-5xl">
                Pray Together With Believers Around the World
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Prayer is powerful, especially when believers come together.
                The Prayer Wall creates a place where users can share requests,
                encourage one another, and celebrate answered prayers.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <span>🌍</span>
                  <p>Global Prayer Community</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>🙏</span>
                  <p>Share Prayer Requests</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>❤️</span>
                  <p>Pray for Others</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>🙌</span>
                  <p>Celebrate Answered Prayers</p>
                </div>

              </div>

              <p className="mt-8 text-lg leading-relaxed text-gray-600">
                Join a growing community of believers supporting one another
                through prayer, encouragement, and faith.
              </p>

            </div>

          </div>

        </div>
      </section>
      {/* DESIGNED FOR EVERY BELIEVER */}
      <section className="bg-[#FAF7F0] py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
              For Everyone
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#1F2937] md:text-5xl">
              Designed For Every Believer
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              Whether you're beginning your faith journey or leading others,
              CPBible provides tools that help you engage God's Word more deeply.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <div className="text-5xl">🌱</div>
              <h3 className="mt-4 text-xl font-bold">
                New Believers
              </h3>
              <p className="mt-3 text-gray-600">
                Build a strong foundation in God's Word.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <div className="text-5xl">📚</div>
              <h3 className="mt-4 text-xl font-bold">
                Bible Study Groups
              </h3>
              <p className="mt-3 text-gray-600">
                Study and discuss Scripture together.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <div className="text-5xl">⛪</div>
              <h3 className="mt-4 text-xl font-bold">
                Church Members
              </h3>
              <p className="mt-3 text-gray-600">
                Grow through prayer and Scripture engagement.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <div className="text-5xl">🙌</div>
              <h3 className="mt-4 text-xl font-bold">
                Ministry Leaders
              </h3>
              <p className="mt-3 text-gray-600">
                Equip others with tools for spiritual growth.
              </p>
            </div>

          </div>

        </div>
      </section>
      {/* FINAL CTA */}
      <section className="bg-[#4E5D30] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Begin Your Scripture Transformation Journey Today
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-white/90">
            Read the Word. Receive Revelation.
            Declare the Word. Live the Word.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/download"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#4E5D30] transition hover:scale-105"
            >
              Download CPBible
            </a>

            <a
              href="/donate"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#4E5D30]"
            >
              Support the Mission
            </a>

          </div>

        </div>
      </section>
    </main>
  );
}