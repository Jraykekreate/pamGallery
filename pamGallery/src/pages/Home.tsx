
import { Blogs } from '@/components/yourComponents/BlogSection';
import { ChoosePam } from '@/components/yourComponents/ChoosePam';
import Features from '@/components/yourComponents/Features';
import Navbar from '@/components/yourComponents/Navbar';
import HeroSection from '@/components/yourComponents/heroSection';
import Menu from '@/components/yourComponents/Menu';
import { JoinUs } from '@/components/yourComponents/Joinus';
import { Footer } from '@/components/yourComponents/Footer';

export default function Home( ) {
  return (
    <div className='bg-primaryBg'>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Features></Features>
        <Blogs></Blogs>
        <ChoosePam></ChoosePam>
        <Menu></Menu>
        <JoinUs></JoinUs>
        <Footer></Footer>

    </div>
  );
}
