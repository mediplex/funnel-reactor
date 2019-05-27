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
    content: `Do you know that you can obtain you <strong style="color:red">MBA</strong> by the next in Turkey?`
  }
};

const form = {
  name: "basic-form",
  data: {
    content: [
      {
        inputType: "text-input",
        name: "Email",
        label: "Email Address",
        placeholder: "Your best email",
        multiline: false,
        validation: {
          required: {},
          email: { errorMessage: "invalid email" },
          matches: {
            // eslint-disable-next-line
            regex: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
            // errorMessage: "invalid Email"
          }
        }
      },
      {
        inputType: "text-input",
        name: "Age",
        label: "Your Age",
        placeholder: "Example: 23",
        multiline: true
      },
      {
        inputType: "select-input",
        name: "Day",
        label: "Select Label",
        validation: {
          required: {}
        },
        options: [
          { values: ["x", "y", "z"] },
          { group: "Alphabet", values: ["A", "B", "C"] },
          { group: "Numbers", values: ["1", "2", "3"] }
        ]
      },
      {
        inputType: "checkbox-input",
        name: "Accept",
        label: "Accept terms and conditions",
        defaultValue: true,
        validation: {
          required: {}
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
