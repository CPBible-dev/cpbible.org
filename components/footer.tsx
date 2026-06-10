import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold">
              CPBible
            </h3>

            <p className="mt-4 text-gray-300">
              Read the Word. Receive Revelation.
              Declare the Word. Live the Word.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Explore
            </h4>

            <div className="mt-4 space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white">
                Home
              </Link>

              <Link href="/why-cpbible" className="block text-gray-300 hover:text-white">
                Why CPBible
              </Link>

              <Link href="/features" className="block text-gray-300 hover:text-white">
                Features
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">
              Support
            </h4>

            <div className="mt-4 space-y-3">
              <Link href="/donate" className="block text-gray-300 hover:text-white">
                Donate
              </Link>

              <Link href="/contact" className="block text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">
              Legal
            </h4>

            <div className="mt-4 space-y-3">
              <Link href="/privacy-policy" className="block text-gray-300 hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/terms-of-use" className="block text-gray-300 hover:text-white">
                Terms of Use
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-400">
          © 2026 CPBible. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}