const heroHeadline = {
  name: "text",
  data: {
    props: {
      variant: "h2",
      component: "h1"
    },
    customStyle: {
      //   color: "#ffffff"
    },
    content: `How to cash out your <span style="color:#ffc107">฿itcoin</span> in three steps?`
  }
};

const form = {
  name: "basic-form",
  data: {
    content: [
      {
        type: "text",
        name: "Email",
        label: "Email Address",
        placeholder: "Your best email",
        validation: {
          type: "string",
          email: { customMessage: "email non valid" },
          required: { customMessage: "this field is required" }
        }
      },
      {
        type: "text",
        name: "Name",
        label: "First Name",
        placeholder: "http://example.com",
        validation: {
          type: "string",
          required: { customMessage: "champ obligatoir" },
        }
      }
    ]
  }
};

const formColumns = {
  name: "columns",
  data: {
    content: [
      {
        name: "column",
        data: {
          size: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
          content: [heroHeadline]
        }
      },
      {
        name: "column",
        data: {
          size: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
          content: [form]
        }
      }
    ]
  }
};

const heroForm = {
  name: "hero",
  data: {
    size: "three-quarter-height",
    customStyle: {
      //   backgroundImage:
      //     "url(http://www.avocoidentity.com/wp-content/uploads/2017/12/blockchain.jpg)",
      //   backgroundColor: "#ccc"
    },
    content: [formColumns]
  }
};

export default heroForm;
