import hero from "./hero";
import imageSection from "./imageSection";
import paragraphSection from "./paragraphSection";
import videoSection from "./videoSection";
import gallerySection from './gallerySection'

const page = {
  data: {
    content: [
      {
        name: "header",
        data: {
          content: [hero]
        }
      },
      {
        name: "main",
        data: {
          content: [imageSection, paragraphSection, videoSection, gallerySection]
        }
      },
      {
        name: "footer",
        data: {
          content: []
        }
      }
    ]
  }
};

export default page;
