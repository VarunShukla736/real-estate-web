import Banner from "../../components/homepage/Banner";
import CategoriesCardContainer from "../../components/homepage/CategoriesCardContainer";
import GetInTouch from "../../components/homepage/GetInTouch";
import NewsAndBlog from "../../components/homepage/NewsAndBlog";
import PartnerSlider from "../../components/homepage/PartnerSlider";
import TestimonialsCardContainer from "../../components/homepage/TestimonialsCardContainer";
import TopLocalitiesContainer from "../../components/homepage/TopLocalitiesContainer";

const Homepage = () => {
  return (
    <>
      <Banner />
      <PartnerSlider />
      <CategoriesCardContainer />
      <TopLocalitiesContainer />
      <TestimonialsCardContainer />
      <NewsAndBlog />
      <GetInTouch />
    </>
  );
};
export default Homepage;
