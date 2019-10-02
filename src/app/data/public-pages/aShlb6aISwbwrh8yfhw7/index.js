import buyButton from './components/buyButton';
import customerReviews from './components/customerReviews';
import description from './components/description';
import footer from './components/footer';
import gallery from './components/gallery';
import hurryMessage from './components/hurryMessage';
import nav from './components/nav';
import miniBuyButton from './components/miniBuyButton';
import offer from './components/offer';
import recentReviews from './components/recentReviews';
import topBar from './components/topBar';
import importantAnnounement from './components/importantAnnounement';

const data = JSON.stringify({
  elements: [
    {
      name: 'box',
      data: {
        props: {
          component: 'header',
          style: {
            backgroundImage: 'linear-gradient(141deg,#dfd8d9 0,#f5f5f5 71%,#fff 100%)'
          }
        },
        elements: [
          {
            name: 'box',
            data: {
              props: {
                // height: '5rem',
                bgcolor: '#4e4e4e'
              },
              elements: [topBar]
            }
          },
          {
            name: 'box',
            data: {
              props: {
                padding: 1
              },
              elements: [nav]
            }
          },
          {
            name: 'box',
            data: {
              props: {
                padding: 1
              },
              elements: [importantAnnounement]
            }
          },
          {
            name: 'box',
            data: {
              props: {
              },
              elements: [offer]
            }
          }
        ]
      }
    },
    {
      name: 'box',
      data: {
        props: {
          height: '5rem',
          bgcolor: '#4e4e4e'
        },
        elements: []
      }
    },
    {
      name: 'box',
      data: {
        props: {
          height: '5rem',
          bgcolor: '#fefefe'
        },
        elements: []
      }
    },
    {
      name: 'box',
      data: {
        props: {
          height: '5rem',
          bgcolor: '#4e4e4e'
        },
        elements: []
      }
    },
    {
      name: 'box',
      data: {
        props: {
          height: '5rem',
          bgcolor: '#fefefe'
        },
        elements: []
      }
    },
    {
      name: 'box',
      data: {
        props: {
          height: '5rem',
          bgcolor: '#4e4e4e'
        },
        elements: []
      }
    },
    {
      name: 'box',
      data: {
        props: {
          height: '5rem',
          bgcolor: '#fefefe'
        },
        elements: []
      }
    },
    {
      name: 'box',
      data: {
        props: {
          height: '5rem',
          bgcolor: '#4e4e4e'
        },
        elements: []
      }
    },
    {
      name: 'box',
      data: {
        props: {
          height: '5rem',
          bgcolor: '#fefefe'
        },
        elements: []
      }
    }
  ]
});

const page = {
  title: 'product-page',
  data
};

export default page;
