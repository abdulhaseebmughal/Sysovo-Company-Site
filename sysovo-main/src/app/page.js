import "./sysovo.css";
import BannerOne from "@/components/banner/BannerOne";
import BackToTop from "@/components/common/BackToTop";
import SysovoCounterUp from "@/components/counterup/SysovoCounterUp";
import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import SysovoServices from "@/components/services/SysovoServices";
import SysovoTechPartnerCta from "@/components/cta/SysovoTechPartnerCta";
import SysovoAdvantage from "@/components/advantage/SysovoAdvantage";
import IndustrySolutions from "@/components/industry/IndustrySolutions";
import TechForImpact from "@/components/tech/TechForImpact";
import CaseStudies from "@/components/casestudies/CaseStudies";
import Testimonials from "@/components/testimonials/Testimonials";
import FaqOne from "@/components/faq/FaqOne";
import BlogOne from "@/components/blog/BlogOne";
import SysovoFinalCta from "@/components/cta/SysovoFinalCta";

export const metadata = {
  title: "IT Service Providers for Startups and Businesses | Sysovo",
  description: "Sysovo is a business-grade IT services provider developing web solutions, mobile apps, enterprise software and SaaS.",
};

export default function Home() {
  return (
    <div className='#'>
      <HeaderOne />
      <BannerOne />
      <SysovoCounterUp />
      <SysovoServices />
      <SysovoTechPartnerCta />
      <SysovoAdvantage />
      <IndustrySolutions />
      <TechForImpact />
      {/* <CaseStudies /> */}
      {/* <Testimonials /> */}
      <FaqOne />
      {/* content pending 2/12/2026 */}
      <BlogOne /> 
      <SysovoFinalCta />
      <FooterOne />
      <BackToTop />
    </div>
  );
}
