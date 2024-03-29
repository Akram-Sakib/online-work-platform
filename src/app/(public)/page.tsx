import AsapFeatures from "@/components/home/AsapFeatures";
import Faq from "@/components/home/Faq";
import FreeBies from "@/components/home/FreeBies";
import Guarantees from "@/components/home/Guarantees";
import HomepageBanner from "@/components/home/HomepageBanner";
import Tasks from "@/components/home/Tasks";
import Testimonials from "@/components/home/Testimonials";
import TopExperts from "@/components/home/TopExperts";
import TroubleSolution from "@/components/home/TroubleSolution";
// import BuyerMap from "@/components/map/BuyerMap";
// import dynamic from "next/dynamic";
// const BuyerMap = dynamic(() => import("@/components/map/BuyerMap"), {
//   ssr: false,
// });

const HomePage = async () => {
  return (
    <main>
      <HomepageBanner />
      <Tasks />
      <TopExperts />
      <AsapFeatures />
      <Testimonials />
      <Guarantees />
      <TroubleSolution />
      <Faq />
      <FreeBies />
    </main>
  );
};

export default HomePage;
