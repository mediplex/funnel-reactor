import { withRouter } from 'next/router';

import Elements from '../components/elements';
// import Head from 'next/head';
import '../data';

// const Title = title => <title>{title}</title>;

// const FavIcon = ({ type, href }) => <link rel="icon" type={type} href={href} />;

const redirectToNotFoundPage = () => {
  const err = new Error();
  err.code = 'ENOENT';
  throw err;
};

const Page = ({ page, error404 }) => {
  const getElements = () => {
    const data = JSON.parse(page.data);
    return data.elements;
  };
  {
    /* <Head>
        {page.title && <Title title={page.title} />}
        {page.favicon && <FavIcon favicon={page.favicon} />}
      </Head> */
  }
  if (error404) redirectToNotFoundPage();
  else
    return !page ? (
      <div>loading public page data...</div>
    ) : (
      <div
        // style={{
        //   backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/c/cd/Istanbul_skyline.svg)',
        //   backgroundSize: '25%',
        //   backgroundRepeat: 'repeat-x',
        //   height: '100%',
        //   backgroundPosition: 'bottom'
        // }}
      >
        <Elements elements={getElements()} />
        {/* <style global jsx>
          {`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div,
            div#__next > div > div {
              height: 100%;
            }
          `}
        </style> */}
      </div>
    );
};

Page.getInitialProps = async ({ req, query }) => {
  const domainNameId = req ? req.headers.host : window.location.hostname;
  const path = req ? (req.params.path ? req.params.path : '') : query.path ? query.path : '';

  if (domainNameId) {
    const firestore = await import('../firebase').then(({ firestore }) => firestore);

    const publicPageId = await firestore
      .collection('custom-domains')
      .doc(domainNameId)
      .get()
      .then(doc => {
        if (doc.exists) {
          const customDomainName = doc.data();
          const customPagePointer = customDomainName.customPagePointers.find(p => p.path === path);
          const publicPageId = (customPagePointer && customPagePointer.publicPageId) || null;
          return publicPageId;
        }
      })
      .catch(err => console.log(err));

    if (publicPageId) {
      const page = await firestore
        .collection('public-pages')
        .doc(publicPageId)
        .get()
        .then(doc => {
          if (doc.exists) {
            return { ...doc.data() };
          } 
            return { error404: true };
          
        })
        .catch(err => console.log(err));
      return { page };
    }
    return { error404: true };
  }
  return { error404: true };
};

export default withRouter(Page);
