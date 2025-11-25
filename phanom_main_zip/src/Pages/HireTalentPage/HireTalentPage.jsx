import HeroSection from '../../Components/HireTalentComponents/HeroSection';
import TalentedPeople from '../../Components/HireTalentComponents/TalentedPeople';
import VideoSection from '../../Components/HomeComponents/VideoSection';
import ExploreServices from '../../Components/HomeComponents/ExploreServices';
import FAQs from '../../GlobalComponents/FAQs';
import HireCaseStudy from '../../Components/HireTalentComponents/HireCaseStudy';
const HireTalentPage = () => {

  return (
    <div className='flex flex-col'>
          <HeroSection />
          <TalentedPeople />
          <VideoSection   bg={true}/>
          <ExploreServices/>
          <HireCaseStudy/>
          <FAQs/>
    </div>
  
  );
};

export default HireTalentPage;
