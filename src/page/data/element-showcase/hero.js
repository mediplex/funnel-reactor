const heroHeadline = {
  name: 'text',
  data: {
    props: {
      variant: 'h1'
    },
    customStyle: {
      color: '#ffffff'
    },
    content: `How to <del>cash</del> out your <span style="color:#ffc107">฿itcoin</span> in three steps?`
  }
};

const heroSubheadline = {
  name: 'text',
  data: {
    props: {
      variant: 'subtitle2'
    },
    customStyle: {
      color: '#ffffff'
    },
    content: `How to <del>cash</del> out your <span style="color:#ffc107">฿itcoin</span> in three steps?`
  }
};

const hero = {
  name: 'section',
  data: {
    HtmlElement: 'header',
    contentMaxWidth: 'lg',
    customStyle: {
      justifyContent: 'center',
      height: '100vh',
      backgroundImage:
        'url(http://www.avocoidentity.com/wp-content/uploads/2017/12/blockchain.jpg)',
      backgroundColor: '#ccc'
    },
    content: [heroHeadline, heroSubheadline]
  }
};

export default hero;
