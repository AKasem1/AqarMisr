import Head from "next/head";
import HeroWrapper from "../components/Wrappers/HeroWrapper";
import StatsWrapper from "@/components/Wrappers/StatsWrapper";
import StepsWrapper from "@/components/Wrappers/StepsWrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aqar Misr | افضل موقع عقارات</title>
        <meta name="description" content="موقع عقار مصر يعرض كل ماهو جديد في عالم العقارات في مصر بشكل عام والعاصمة الادارية بشكل خاص" />
      </Head>
      <main>
        <HeroWrapper/>
        <StatsWrapper/>
        <StepsWrapper/>
      </main>
    </>
  );
}
