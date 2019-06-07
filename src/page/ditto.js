import React, { Suspense } from 'react';
import Loading from './loading';
import NotFound from './not-found';

const Ditto = props => {
  const getComponents = () => {
    const getComponentByName = (/* id, */ name, data) => {
      //! temporary code to replace the id provided in the params
      const id =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15);

      // Base Elements
      const Header = React.lazy(() =>
        import('./elements/base-elements/header')
      );
      const Main = React.lazy(() => import('./elements/base-elements/main'));
      const Footer = React.lazy(() =>
        import('./elements/base-elements/footer')
      );

      // Layout Elements
      const Box = React.lazy(() => import('./elements/layout-elements/box'));

      const Container = React.lazy(() =>
        import('./elements/layout-elements/container')
      );

      const Paper = React.lazy(() =>
        import('./elements/layout-elements/paper')
      );

      const Section = React.lazy(() =>
        import('./elements/layout-elements/section')
      );
      const Columns = React.lazy(() =>
        import('./elements/layout-elements/columns')
      );
      const Column = React.lazy(() =>
        import('./elements/layout-elements/column')
      );

      // Media Element
      const Image = React.lazy(() => import('./elements/media-elements/image'));
      const ImagePopup = React.lazy(() =>
        import('./elements/media-elements/image-popup')
      );
      const YoutubeVideo = React.lazy(() =>
        import('./elements/media-elements/youtube-video')
      );
      const YoutubeVideoPopup = React.lazy(() =>
        import('./elements/media-elements/youtube-video-popup')
      );

      // Text Element
      const Text = React.lazy(() => import('./elements/text-elements/text'));

      // Form
      const BasicForm = React.lazy(() => import('./elements/basic-form'));

      // Resolve components by name
      // TODO: The key can be generated by firebase
      // TODO: The key is used to track the rendering and later to trigger FB Pixel Events
      switch (name) {
        // Base Elements
        case 'header':
          return <Header key={id} data={data} />;
        case 'main':
          return <Main key={id} data={data} />;
        case 'footer':
          return <Footer key={id} data={data} />;

        // Layout Elements
        case 'section':
          return <Section key={id} data={data} />;
        case 'box':
          return <Box key={id} data={data} />;
        case 'container':
          return <Container key={id} data={data} />;
        case 'paper':
          return <Paper key={id} data={data} />;
        case 'columns':
          return <Columns key={id} data={data} />;
        case 'column':
          return <Column key={id} data={data} />;

        // Text Elements
        case 'text':
          return <Text key={id} data={data} />;

        // Media Elements
        case 'image':
          return <Image key={id} data={data} />;
        case 'image-popup':
          return <ImagePopup key={id} data={data} />;
        case 'youtube-video':
          return <YoutubeVideo key={id} data={data} />;
        case 'youtube-video-popup':
          return <YoutubeVideoPopup key={id} data={data} />;

        // Form
        case 'basic-form':
          return <BasicForm key={id} data={data} />;

        default:
          return <NotFound key={id} />; // ! need a random key!
      }
    };

    if (props.data && props.data.length)
      return props.data.map(component =>
        getComponentByName(/* component.id, */ component.name, component.data)
      );
    // else return <React.Fragment />;
  };

  return <Suspense fallback={<Loading />}>{getComponents()}</Suspense>;
};

export default Ditto;
