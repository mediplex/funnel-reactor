const heroHeadline = {
  name: "text",
  id: "hero-headline-1098509932",
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
  id: "hero-subheadline-1098509932",
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

const sectionHeadline = {
  name: "text",
  id: "section-headline-1098509932",
  data: {
    props: {
      variant: "h2"
    },
    customStyle: {},
    content: `How to <del>cash</del> out your <span style="color:#ffc107">฿itcoin</span> in three steps?`
  }
};

const sectionParagraph = {
  name: "text",
  id: "section-paragraph-1098509932",
  data: {
    props: {
      variant: "body2",
      paragraph: true
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Non quam lacus suspendisse faucibus. Mauris sit amet massa vitae tortor condimentum. Vulputate enim nulla aliquet porttitor lacus. Pretium quam vulputate dignissim suspendisse in est ante in nibh. In egestas erat imperdiet sed euismod nisi. Aliquet sagittis id consectetur purus ut. Amet aliquam id diam maecenas ultricies mi. Vitae semper quis lectus nulla at volutpat diam. In mollis nunc sed id. Quis lectus nulla at volutpat. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Eu turpis egestas pretium aenean pharetra magna ac placerat. At lectus urna duis convallis convallis tellus id. Tincidunt lobortis feugiat vivamus at augue eget arcu."
  }
};

const columns = {
  name: "columns",
  id: "columns-2116385188",
  data: {
    content: [
      {
        name: "column",
        id: "column-0102735752",
        data: {
          size: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
          content: [
            {
              name: "image",
              id: "image-7531427457",
              data: {}
            }
          ]
        }
      },
      {
        name: "column",
        id: "column-9804782536",
        data: {
          size: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
          content: [sectionParagraph]
        }
      }
    ]
  }
};

const section1 = {
  id: "id-section-1",
  name: "section",
  data: {
    content: [sectionHeadline, columns]
  }
};

const section2 = {
  id: "id-section-2",
  name: "section",
  data: {
    customStyle: {
      backgroundColor: "#f6f6f6"
    },
    content: [
      sectionHeadline,
      sectionParagraph,
      { ...sectionParagraph, id: "section-paragraph-2098509932" }
    ]
  }
};

const section3 = {
  id: "id-section-3",
  name: "section",
  data: {
    content: [sectionHeadline, columns]
  }
};

const hero = {
  id: "hero-8397658254",
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

const page1 = {
  id: "page-1",
  data: {
    content: [
      {
        name: "header",
        id: "header-1818549697",
        data: {
          content: [hero]
        }
      },
      {
        name: "main",
        id: "main-2879954606",
        data: {
          content: [section1, section2, section3]
        }
      },
      {
        name: "footer",
        id: "footer-5958379580",
        data: {
          content: []
        }
      }
    ]
  }
};

const data = {
  pages: [page1]
};

export default data;
