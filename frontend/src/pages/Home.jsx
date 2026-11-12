import Hero from "../components/Hero";
import ProofStrip from "../components/ProofStrip";
import Pillars from "../components/Pillars";
import Proof from "../components/Proof";
import Paths from "../components/Paths";
import Testimonials from "../components/Testimonials";
import RecentWork from "../components/RecentWork";
import Story from "../components/Story";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofStrip />
      <Pillars />
      <Proof />
      <Paths />
      <Testimonials />
      <RecentWork />
      <Story />
      <ContactForm />
    </main>
  );
}
