import hero from './hero';
import imageSection from './imageSection';
import paragraphSection from './paragraphSection';
import videoSection from './videoSection';
import gallerySection from './gallerySection';
// import heroForm from "./heroForm";

export const page = {
  id: 'element-showcase',
  tile: 'Element Showcase',
  data: {
    content: [
      hero,
      imageSection,
      paragraphSection,
      videoSection,
      gallerySection
    ]
  }
};

export default page;
