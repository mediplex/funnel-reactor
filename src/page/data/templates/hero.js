const heroHeadline = {
  name: "text",
  data: {
    props: {
      variant: "h1"
    },
    customStyle: {
      color: "#ffffff"
    },
    content: `How to <del>cash</del> out your <span style="color:#ffc107">฿itcoin</span> in three steps?`
  }
};

const heroSubheadline = {
  name: "text",
  data: {
    props: {
      variant: "subtitle2"
    },
    customStyle: {
      color: "#ffffff"
    },
    content: `How to <del>cash</del> out your <span style="color:#ffc107">฿itcoin</span> in three steps?`
  }
};

const hero = {
  name: "hero",
  data: {
    size: "three-quarter-height",
    customStyle: {
      backgroundImage:
        "url(http://www.avocoidentity.com/wp-content/uploads/2017/12/blockchain.jpg)",
      backgroundColor: "#ccc"
    },
    content: [heroHeadline, heroSubheadline]
  }
};

export default hero;
