const form = {
  name: 'box',
  data: {
    props: {
      padding: '1rem'
    },
    elements: [
      {
        name: 'box',
        data: {
          elements: [
            {
              name: 'typograhpy',
              data: {
                props: {
                  component: 'h2',
                  variant: 'h6'
                },
                html: `Where do you want to receive the info?`
              }
            }
          ]
        }
      },
      {
        name: 'basic-form',
        data: {
          basicFormId: 'CQGaZQxVhXUdEYD5kEmx',
          listId: 'vhHr4FEEE2SKEr3IC4cX',
          redirectTo: 'thank-you-for-your-request',
          elements: [
            {
              inputType: 'text-input',
              name: 'Name',
              label: 'What is you name?',
              placeholder: 'Your Name',
              validation: { required: {} }
            },
            {
              inputType: 'text-input',
              name: 'Email',
              label: `What's is you email Address?`,
              placeholder: 'Your best email',
              multiline: false,
              validation: {
                required: {},
                email: { errorMessage: 'invalid email' },
                matches: {
                  // eslint-disable-next-line
                  regex:
                    '^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$',
                  errorMessage: 'Invalid Email'
                }
              }
            },
            {
              inputType: 'text-input',
              name: 'WhatsApp',
              label: `What's you phone number`,
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
                  groupLabel: 'Graduate School of Social Sciences',
                  values: [
                    'Experimental Psychology',
                    'Financial Economics',
                    'Logistics Management',
                    'Media and Communication Studies',
                    'Private Law Graduate Program',
                    'Marketing Communication and Public Relations',
                    'Political Science and International Relations',
                    'Sustainable Energy',
                    'Design Studies',
                    'Design Management',
                    'Yacht Design'
                  ]
                },
                {
                  groupLabel: 'Graduate School of Natural and Applied Sciences',
                  values: [
                    'M.SC.In Intelligent Engineering Systems',
                    'M.SC.in Bioengineering',
                    'M.SC.in Computer Engineering',
                    'M.SC.in Electrical and Electronics Engineering',
                    'M.SC.In Industrial Engineering',
                    'M.SC.In Financial Mathematics',
                    'M.SC.In Advanced Architectural Design',
                    'M.SC.In Architecture',
                    'M.SC.In Applied Statistics'
                  ]
                },
                {
                  groupLabel: 'Graduate School of Business',
                  values: ['MBA', 'Executive MBA', 'MBA - Distance Learning (e-MBA)', 'Finance']
                }
              ]
            }
          ]
        }
      }
    ]
  }
};

// const image = {
//   name: 'image',
//   data: {
//     props: {
//       src:
//         'https://firebasestorage.googleapis.com/v0/b/funnel-reactor.appspot.com/o/code.martechpoint.com%2F7658261288_c10e49f50f_o-removebg-preview%20(1).webp?alt=media&token=e6fe2d98-3a12-4e20-98b2-12fdd06c708b',
//       alt: 'A young girl gives a quick smile while studying for her college degree'
//     },
//     customStyle: {
//       paddingBottom: '2rem'
//     }
//   }
// };

const bulletList = {
  name: 'BulletList',
  data: {
    props: {},
    items: ['🔴 Discuss with you parent', '🔴 Help you to get accepted', '🔴 npWe guaranty you acceptence']
  }
};

export const main = {
  name: 'container',
  data: {
    props: {
      component: 'main',
      maxWidth: 'md'
    },
    elements: [
      {
        name: 'box',
        data: {
          props: {
            paddingTop: '2rem',
            paddingBottom: '2rem'
          },
          elements: [
            {
              name: 'Grid',
              data: {
                props: {
                  container: true,
                  spacing: 6
                },
                elements: [
                  {
                    name: 'Grid',
                    data: {
                      props: {
                        component: 'section',
                        item: true,
                        xs: 12,
                        sm: 12,
                        md: 7,
                        lg: 7,
                        xl: 7
                      },
                      elements: [
                        // {
                        //   name: 'box',
                        //   data: {
                        //     elements: [image]
                        //   }
                        // },
                        {
                          name: 'box',
                          data: {
                            elements: [
                              // {
                              //   name: 'typograhpy',
                              //   data: {
                              //     props: {
                              //       component: 'h1',
                              //       variant: 'h4'
                              //     },
                              //     html: `Are You From <span style="color:#2aa53f"> Morocco</span>?`
                              //   }
                              // },
                              {
                                name: 'typograhpy',
                                data: {
                                  props: {
                                    component: 'h1',
                                    variant: 'h4'
                                  },
                                  html: `<span style="color:#2aa53f">Moroccan</span> Students Can Apply For An International Master Degree In <span style="color:#ff3737">Turkey</span>`
                                }
                              },
                              {
                                name: 'typograhpy',
                                data: {
                                  props: {
                                    component: 'h1',
                                    variant: 'h5'
                                  },
                                  html: `
                                         <hr>
                                         Request More Information Now!`
                                }
                              },
                              bulletList
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    name: 'Grid',
                    data: {
                      props: {
                        component: 'section',
                        item: true,
                        xs: 12,
                        sm: 12,
                        md: 5,
                        lg: 5,
                        xl: 5
                      },
                      elements: [
                        {
                          name: 'paper',
                          data: {
                            props: {
                              elevation: 1
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
      }
    ]
  }
};
