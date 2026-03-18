import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WhyNow from '@/components/WhyNow';
import Model from '@/components/Model';
import Journeys from '@/components/Journeys';
import Services from '@/components/Services';
import FTETable from '@/components/FTETable';
import Economics from '@/components/Economics';
import Relationship from '@/components/Relationship';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="font-sans">
      <Nav />
      <Hero />
      <WhyNow />
      <Model />
      <Journeys />
      <Services />
      <FTETable />
      <Economics />
      <Relationship />
      <Footer />
    </main>
  );
}
