const headline = {
  name: 'typograhpy',
  data: {
    props: {
      variant: 'h2',
      component: 'h1'
    },
    html: `
      Your <strong>Licence Pro</strong> is now accepted at our University in <strong style="color:#ff3737">Turkey</strong>, request more information now!`
  }
};

// const subHeadline = {
//   name: 'typograhpy',
//   data: {
//     props: {
//       variant: 'h5',
//       component: 'h2',
//       gutterBottom: true
//     },
//     html: `Where do you want to receive the info you are looking for?`
//   }
// };

const paragraph = {
  name: 'typograhpy',
  data: {
    props: {
      variant: 'body2',
      paragraph: true
    },
    html: `
        <ul>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
        </ul> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Id aliquet lectus proin nibh nisl condimentum id venenatis a.
        Non quam lacus suspendisse faucibus. Mauris sit amet massa vitae tortor condimentum.
        Vulputate enim nulla aliquet porttitor lacus. Pretium quam vulputate dignissim suspendisse in est ante in nibh.
        `
  }
};

const image = {
  name: 'image',
  data: {
    customStyle: {
      // margin: 'auto',
      // maxWidth: '256px',
      borderRadius: '290486px'
    },
    props: {
      src: 'http://bbu.edu.az/uploads/images/Izmir-University-of-Economics.jpg',
      alt: 'Izmir University of Economics'
    }
  }
};

const form = {
  name: 'basic-form',
  data: {
    redirectTo: 'thank-you-for-your-request',
    elements: [
      {
        inputType: 'text-input',
        name: 'Email',
        label: 'Where Should We eSnt The Info?',
        placeholder: 'Your best email',
        multiline: false,
        validation: {
          required: {},
          email: { errorMessage: 'invalid email' },
          matches: {
            // eslint-disable-next-line
            regex: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
            // errorMessage: "invalid Email"
          }
        }
      },
      {
        inputType: 'text-input',
        name: 'Name',
        label: 'What is you name?',
        placeholder: 'Your Name',
        validation: { required: {} }
      },
      {
        inputType: 'text-input',
        name: 'WhatsApp',
        label: 'Where should we call you?',
        placeholder: '06xxxxxxx',
        validation: { required: {} }
      },
      {
        inputType: 'select-input',
        name: 'Master Program',
        label: 'What Master Program Do You Want?',
        validation: {
          required: {}
        },
        options: [
          {
            group: 'Graduate School of Health Sciences',
            values: [
              'Health Institutions Management (without Thesis) (Turkish)',
              'Healthcare Quality and Patient Safety (with Thesis) (Turkish)',
              'Healthcare Quality and Patient Safety (without Thesis) (Turkish)',
              'Reproductive Biology (with Thesis) (Turkish)',
              'Reproductive Biology (without Thesis) (Turkish)',
              'Surgical Nursing(with Thesis) (Turkish)'
            ]
          },

          {
            group: 'Graduate School of Social Sciences',
            values: [
              'Brand Communication (Without Thesis) (Turkish)',
              'Experimental Psychology (With Thesis)',
              'Financial Economics (With Thesis)',
              'Financial Economics (Without Thesis)',
              'Logistics Management (With Thesis)',
              'Logistics Management (Without Thesis)',
              'Media and Communication Studies (With Thesis)',
              'Private Law Graduate Program (With Thesis)',
              'Private Law Graduate Program (Without Thesis)',
              'Marketing Communication and Public Relations(English)',
              'Political Science and International Relations (With Thesis)',
              'Political Science and International Relations (Without thesis)',
              'Sustainable Energy (With Thesis)',
              'Sustainable Energy (Without Thesis)',
              'Design Studies (With Thesis)',
              'Design Management (Without Thesis)',
              'Yacht Design (Without Thesis)'
            ]
          },

          {
            group: 'Graduate School of Natural and Applied Sciences',
            values: [
              'M.SC. In Intelligent Engineering Systems (With Thesis)',
              'M.SC. in Bioengineering (With Thesis) (Turkish)',
              'M.SC. in Bioengineering (Without Thesis)',
              'M.SC. in Computer Engineering (With Thesis)',
              'M.SC. in Computer Engineering (Without Thesis)',
              'M.SC. in Electrical and Electronics Engineering (With Thesis)',
              'M.SC. in Electrical and Electronics Engineering (Without Thesis)',
              'M.SC. In Industrial Engineering (With Thesis)',
              'M.SC. In Financial Mathematics (Without Thesis)',
              'M.SC. In Advanced Architectural Design (Without Thesis)',
              'M.SC. In Architecture (With Thesis)',
              'M.SC. In Applied Statistics (With Thesis)',
              'M.SC. Occupational Health and Safety (With Thesis) (Turkish)',
              'M.SC. Occupational Health and Safety (Without Thesis) (Turkish)'
            ]
          },
          {
            group: 'Graduate School of Business',
            values: [
              'MBA(With Thesis)',
              'MBA(Without Thesis)',
              'Executive MBA (English / Without Thesis)',
              'Executive MBA (Turkish / Without Thesis)',
              'Master of Business Administration - Distance Learning (e-MBA) (English)',
              'Master of Business Administration - Distance Learning (e-MBA) (Turkish)',
              'Finance (Without Thesis)'
            ]
          }
        ]
      },
      {
        inputType: 'checkbox-input',
        name: 'Accept',
        label: 'Accept terms and conditions',
        defaultValue: true,
        validation: {
          required: {}
        }
      }
    ]
  }
};

const columns = {
  name: 'box',
  data: {
    props: {
      display: 'flex',
      flexDirection: {
        xs: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
        xl: 'row'
      },
      alignItems: 'flex-star',
      flexWrap: 'nowrap'
      // css:{ backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...}
    },
    elements: [
      {
        // column 1
        name: 'box',
        data: {
          props: {
            flex: 1.5,
            paddingTop: { xs: 2, sm: 2, md: 2, lg: 0, xl: 0 },
            paddingBottom: { xs: 2, sm: 2, md: 2, lg: 0, xl: 0 },
            paddingRight: { xs: 0, sm: 0, md: 0, lg: 2, xl: 2 },
            paddingLeft: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }
          },
          elements: [image, paragraph]
        }
      },
      {
        // column 2
        name: 'box',
        data: {
          props: {
            flex: 1
          },
          elements: [
            {
              name: 'paper',
              data: {
                elements: [
                  {
                    name: 'box',
                    data: {
                      props: {
                        padding: 2
                      },
                      elements: [form]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
};

const section = {
  name: 'box',
  data: {
    props: {
      paddingTop: { xs: 4, sm: 4, md: 6, lg: 6, xl: 18 },
      paddingBottom: { xs: 4, sm: 4, md: 6, lg: 6, xl: 18 },
      component: 'section'
    },
    elements: [
      {
        name: 'container',
        data: {
          props: {
            maxWidth: 'md'
          },
          elements: [
            {
              name: 'box',
              data: {
                props: {
                  paddingBottom: 4
                },
                elements: [headline]
              }
            }
          ]
        }
      },
      {
        name: 'container',
        data: {
          props: {
            maxWidth: 'md'
          },
          elements: [
            {
              name: 'box',
              data: {
                elements: [columns]
              }
            }
          ]
        }
      }
    ]
  }
};

const topBar = {
  name: 'box',
  data: {
    props: {
      padding: 1,
      bgcolor: '#ff3737',
      component: 'header'
    },
    elements: [
      {
        name: 'typograhpy',
        data: {
          props: {
            // variant: 'h5',
            // component: 'h2',
            // gutterBottom: true,
          },
          html: `<p style="text-align: center;"><strong><span style="color: #ffffff; font-size: 1rem;">This Opportunity will exprire in 00:14:30</span></strong></p>`
        }
      }
    ]
  }
};

export const page = {
  id: 'your-master-degree',
  tile: 'Your Master Degree',
  data: {
    elements: [topBar, section]
  }
};

export default page;
