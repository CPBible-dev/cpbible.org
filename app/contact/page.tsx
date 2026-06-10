export default function ContactPage() {
  return (
    <main className="bg-[#FAF7F0] min-h-screen">

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
            Contact
          </span>

          <h1 className="mt-8 text-5xl font-bold text-[#1F2937] md:text-6xl">
            We'd Love To Hear From You
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-600">
            Whether you have a question, partnership opportunity,
            speaking invitation, or support request,
            we'd be delighted to connect with you.
          </p>

        </div>
      </section>
      {/* CONTACT OPTIONS */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl">📧</div>
              <h3 className="mt-4 text-xl font-bold">
                General Enquiries
              </h3>
              <p className="mt-3 text-gray-600">
                Questions about CPBible, the ministry, or the website.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl">⛪</div>
              <h3 className="mt-4 text-xl font-bold">
                Church Partnerships
              </h3>
              <p className="mt-3 text-gray-600">
                Interested in introducing CPBible to your church or ministry.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl">🎤</div>
              <h3 className="mt-4 text-xl font-bold">
                Speaking Invitations
              </h3>
              <p className="mt-3 text-gray-600">
                Conferences, churches, podcasts, and ministry events.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl">🛠️</div>
              <h3 className="mt-4 text-xl font-bold">
                Technical Support
              </h3>
              <p className="mt-3 text-gray-600">
                Need help using the CPBible app or reporting an issue.
              </p>
            </div>

          </div>

        </div>
      </section>
      {/* CONTACT DETAILS + FORM */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* LEFT COLUMN */}
            <div>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4E5D30]">
                Get In Touch
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#1F2937]">
                We'd Love To Connect
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Whether you're a church leader, ministry partner,
                donor, app user, or simply curious about CPBible,
                we'd be delighted to hear from you.
              </p>

              <div className="mt-10 space-y-8">

                <div>
                  <h3 className="font-semibold text-[#1F2937]">
                    Email
                  </h3>
                  <p className="mt-2 text-gray-600">
                    info@cpbible.org
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1F2937]">
                    Church Partnerships
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Interested in bringing CPBible to your church,
                    Bible study group, or ministry?
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1F2937]">
                    Speaking Invitations
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Conferences, churches, podcasts,
                    leadership events, and workshops.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1F2937]">
                    Response Time
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We aim to respond within 1–3 business days.
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="text-2xl font-bold text-[#1F2937]">
                Send Us A Message
              </h3>

              <form className="mt-8 space-y-6">

                <div>
                  <label className="mb-2 block font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-300 p-4"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-gray-300 p-4"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-300 p-4"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full rounded-xl border border-gray-300 p-4"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-[#4E5D30] px-8 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}