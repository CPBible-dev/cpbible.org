import Image from "next/image";

export default function DownloadApp() {
  return (
    <section 
    className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-3xl bg-[#4E5D30] px-8 py-16 text-center text-white md:px-16">

          <h2 className="text-4xl font-bold md:text-5xl">
            Start Your Scripture Transformation Journey Today
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
            Read the Word. Receive Revelation. Declare the Word. Live the Word.
            Join thousands of believers using CPBible to engage Scripture,
            deepen prayer, and grow spiritually every day.
          </p>

  {/* QR Code */}
  
  <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-white p-8 shadow-2xl">
  <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center">

    {/* QR Code */}
    <div className="text-center">
      <Image
        src="/qr-code.jpeg"
        alt="Download CPBible"
        width={220}
        height={220}
        className="mx-auto rounded-xl"
      />

      <p className="mt-3 text-sm text-gray-600">
        Scan to download
      </p>
    </div>

    {/* Store Badges */}
<div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center">
      <a
         href="https://apps.apple.com/us/app/cpbible/id6468518044"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/app-store-badge.png"
          alt="Download on the App Store"
          width={220}
          height={65}
          style={{
            width: "220px",
            height: "auto",
          }}
        />
      </a>

      <a
             href="https://play.google.com/store/apps/details?id=com.cpbible.org "

        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/google-play-badge.png"
          alt="Get it on Google Play"
          width={220}
          height={65}
          style={{
            width: "220px",
            height: "auto",
          }}
        />
      </a>

    </div>

  </div>

  <p className="mt-6 text-center text-sm text-gray-500">
    Available for iPhone, iPad, Android phones, and tablets.
  </p>
</div>
  </div>

    </div>

     
    </section>
  );
}