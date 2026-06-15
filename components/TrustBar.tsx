export default function TrustBar() {
  return (
    <section className="border-y bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">

          <div>
            <p className="text-3xl font-bold text-[#4E5D30]">
              14+
            </p>
            <p className="text-sm text-slate-600">
              Bible Translations
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#4E5D30]">
              1,000+
            </p>
            <p className="text-sm text-slate-600">
              Confessional Prayers
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#4E5D30]">
              24/7
            </p>
            <p className="text-sm text-slate-600">
              Prayer Community
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#4E5D30]">
              All-in-One
            </p>
            <p className="text-sm text-slate-600">
              Scripture Transformation Platform
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}