import buyButton from './components/buyButton';
import customerReviews from './components/customerReviews';
import description from './components/description';
import footer from './components/footer';
import gallery from './components/gallery';
import hurryMessage from './components/hurryMessage';
import menu from './components/menu';
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
          // height: '5rem',
          bgcolor: '#4e4e4e'
        },
        elements: [topBar]
      }
    },
    {
      name: 'box',
      data: {
        props: {},
        elements: [importantAnnounement]
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
