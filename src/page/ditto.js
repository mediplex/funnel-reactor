import React, { Suspense } from "react";
import Loading from "./loading";
import NotFound from "./not-found";

const Ditto = props => {
  const getComponents = () => {
    let getComponentByName = (id, name, data) => {
      // ---------------- Lazy import ----------------------
      // -------- const  = React.lazy(() => import('./elements/-elements/'));

      // Base Elements
      const Header = React.lazy(() =>
        import("./elements/base-elements/header")
      );
      const Main = React.lazy(() => import("./elements/base-elements/main"));
      const Footer = React.lazy(() =>
        import("./elements/base-elements/footer")
      );

      //   // Layout Elements
      //   const Hero = React.lazy(() =>
      //     import("./elements/layout-elements/hero")
      //   );
      //   const Section = React.lazy(() =>
      //     import("./elements/layout-elements/section")
      //   );
      //   const Columns = React.lazy(() =>
      //     import("./elements/layout-elements/columns")
      //   );
      //   const Column = React.lazy(() =>
      //     import("./elements/layout-elements/column")
      //   );
      //   // Media Element
      //   const Image = React.lazy(() =>
      //     import("./elements/media-elements/image")
      //   );
      //   // Text Element
      //   const Headline = React.lazy(() =>
      //     import("./elements/text-elements/headline")
      //   );
      //   const Paragraph = React.lazy(() =>
      //     import("./elements/text-elements/paragraph")
      //   );

      // Resolve components by name
      // TODO: The key can be generated by firebase 
      // TODO: The key is used to track the rendering and later to trigger FB Pixel Events
      switch (name) {
        // Base Elements
        case "header":
          return <Header key={id} data={data} />;
        case "main":
          return <Main key={id} data={data} />;
        case "footer":
          return <Footer key={id} data={data} />;
        // Layout Elements
        // case "hero":
        //   return <Hero key={id} data={data} />;
        // case "section":
        //   return <Section key={id} data={data} />;
        // case "columns":
        //   return <Columns key={id} data={data} />;
        // case "column":
        //   return <Column key={id} data={data} />;

        // // Media Elements
        // case "image":
        //   return <Image key={id} data={data} />;
        // // Text Elements
        // case "paragraph":
        //   return <Paragraph key={id} data={data} />;
        // case "headline":
        //   return <Headline key={id} data={data} />;
        default:
          return <NotFound key={id} />; // ! need a random key!
      }
    };

    if (props.data && props.data.length)
      return props.data.map(component =>
        getComponentByName(component.id, component.name, component.data)
      );
    // else return <React.Fragment />;
  };

  return <Suspense fallback={<Loading />}>{getComponents()}</Suspense>;
};

export default Ditto;
