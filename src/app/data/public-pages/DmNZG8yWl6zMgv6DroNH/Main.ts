const form = {
  name: 'basic-form',
  data: {
    basicFormId: 'CQGaZQxVhXUdEYD5kEmx',
    listId: 'vhHr4FEEE2SKEr3IC4cX',
    redirectTo: 'thank-you-for-your-request',
    elements: [
      {
        inputType: 'text-input',
        name: 'Email',
        label: 'Where should we send you the info?',
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
      }
    ]
  }
};

const image = {
  name: 'image',
  data: {
    props: {
      src:
        'https://firebasestorage.googleapis.com/v0/b/funnel-reactor.appspot.com/o/code.martechpoint.com%2F7658261288_c10e49f50f_o-removebg-preview%20(1).webp?alt=media&token=e6fe2d98-3a12-4e20-98b2-12fdd06c708b',
      alt: 'A young girl gives a quick smile while studying for her college degree'
    },
    customStyle: {
      paddingBottom: '2rem'
    }
  }
};

const bulletList = {
  name: 'typograhpy',
  data: {
    props: {
      variant: 'body2',
      paragraph: true
    },
    html: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Id aliquet lectus proin nibh nisl condimentum id venenatis a.
        Non quam lacus suspendisse faucibus. Mauris sit amet massa vitae tortor condimentum.
        Vulputate enim nulla aliquet porttitor lacus. Pretium quam vulputate dignissim suspendisse in est ante in nibh.`
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
                  spacing: 4
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
                        {
                          name: 'box',
                          data: {
                            elements: [image]
                          }
                        },
                        {
                          name: 'box',
                          data: {
                            elements: [bulletList]
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
                              elevation: 2
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
