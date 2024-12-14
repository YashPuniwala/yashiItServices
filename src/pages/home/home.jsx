import React from "react";
import Hero from "../../components/home/hero/hero";
import Services from "../../components/home/services/services";
import RecentProjects from "../../components/home/recentProjects/recentProjects";
import StatsSection from "../../components/home/statsSection/statsSection";
import Testimonials from "../../components/home/testimonials";
import WhyChoose from "../../components/home/whyChoose/whyChoose";

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <WhyChoose />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <RecentProjects />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <StatsSection />
      </section>
    </div>
  );
};

export default Home;
