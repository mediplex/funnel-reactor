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
          content: [
            {
              name: "paragraph",
              id: "paragraph-6577562469",
              data: {}
            }
          ]
        }
      }
    ]
  }
};

const sectionHeadline = {
  name: "headline",
  id: "headline-1098509932",
  data: {}
};

const section1 = {
  id: "id-section-1",
  name: "section",
  data: {
    content: [sectionHeadline, columns]
  }
};
const section2 = {
  id: "id-section-1296870721",
  name: "section",
  data: {
    content: [sectionHeadline, columns]
  }
};

const hero1 = {
  id: "hero-8397658254",
  name: "hero",
  data: {
    size: "three-quarter-height",
    customStyle: {
      backgroundImage:
        "url(http://www.avocoidentity.com/wp-content/uploads/2017/12/blockchain.jpg)",
      backgroundColor: "#ccc",
      color: "#fff"
    }
  }
};

const heroForm = {
  id: "hero-7893533578",
  name: "hero",
  data: {
    content: {},
    size: "three-quarter-height",
    customStyle: {
      backgroundImage:
        "url('http://www.avocoidentity.com/wp-content/uploads/2017/12/blockchain.jpg')",
      backgroundColor: "#ccc",
      color: "#fff"
    }
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
          content: [hero1]
        }
      },
      {
        name: "main",
        id: "main-2879954606",
        data: {
          content: [
            section1,
            section2,
            heroForm,
            { ...section1, id: "section-1296870721" }
          ]
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
