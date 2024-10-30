import Head from "next/head";
import HeroWrapper from "../components/Wrappers/HeroWrapper";
import StatsWrapper from "@/components/Wrappers/StatsWrapper";
import StepsWrapper from "@/components/Wrappers/StepsWrapper";
import CategoriesWrapper from "@/components/Wrappers/CategoriesWrapper";
import NewsletterWrapper from "@/components/Wrappers/NewsletterWrapper";
import PropertiesWrapper from "@/components/Wrappers/PropertiesWrapper";
import AboutUsWrapper from "@/components/Wrappers/AboutUsWrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aqar Misr | افضل موقع عقارات</title>
        <meta name="description" content="موقع عقار مصر يعرض كل ماهو جديد في عالم العقارات في مصر بشكل عام والعاصمة الادارية بشكل خاص" />
        <script src="https://kit.fontawesome.com/bdf0bd81d0.js" crossorigin="anonymous"></script>
      </Head>
      <main>
        <HeroWrapper/>
        <StatsWrapper/>
        <StepsWrapper/>
        <CategoriesWrapper/>
        <PropertiesWrapper/>
        <AboutUsWrapper/>
        <NewsletterWrapper/>
      </main>
    </>
  );
}
