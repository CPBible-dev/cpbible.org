import type { Metadata } from "next";


import Hero from "@/components/hero";
import EveryScriptureBecomesPersonal from "@/components/every-scripture-becomes-personal";
import PrayerWall from "@/components/PrayerWall";
import BibleStudyTools from "@/components/BibleStudyTools";
import Translations from "@/components/Translations";
import DownloadApp from "@/components/DownloadApp";
import SupportTheMission from "@/components/SupportTheMission";
import ConfessionalPrayerFeature from "@/components/confessional-prayer-feature";
import ReadPrayRecordLive from "@/components/read-pray-record-live";

export const metadata: Metadata = {
  title: "CPBible | The Bible You Pray, Declare, and Live",
  description:
    "Read the Word, receive revelation, declare the Word, and live the Word through the Confessional Prayer Bible.",
};

export default function Home() {
  return (
    <>
      

      <main>
        <Hero />

        <EveryScriptureBecomesPersonal />

        <ConfessionalPrayerFeature />

        <ReadPrayRecordLive />

        <BibleStudyTools />

        <Translations />

        <PrayerWall />

        {/* TRUST BAR */}
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
                  Scripture
                </p>
                <p className="text-sm text-slate-600">
                  Transformation Platform
                </p>
              </div>
            </div>
          </div>
        </section>

        <DownloadApp />

        <SupportTheMission />
      </main>

      
    </>
  );
}