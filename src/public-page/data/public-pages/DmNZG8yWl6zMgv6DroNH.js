export const page = {
  title: 'Master Degree',
  data: {
    elements: [
      {
        name: 'paper',
        data: {
          elements: [
            {
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
            }
          ]
        }
      },
      {
        name: 'box',
        data: {
          props: {
            paddingTop: [4, 4, 6, 6, 18], // { xs: 4, sm: 4, md: 6, lg: 6, xl: 18 },
            paddingBottom: [4, 4, 6, 6, 18], // { xs: 4, sm: 4, md: 6, lg: 6, xl: 18 },
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
                      elements: [
                        {
                          name: 'typograhpy',
                          data: {
                            props: {
                              variant: 'h2',
                              component: 'h1'
                            },
                            html: `
      Your <strong>Licence Pro</strong> is now accepted at our University in <strong style="color:#ff3737">Turkey</strong>, request more information now!`
                          }
                        }
                      ]
                    }
                  },
                  {
                    name: 'box',
                    data: {
                      elements: [
                        {
                          name: 'box',
                          data: {
                            // columns
                            props: {
                              display: 'flex',
                              // flexDirection: 'row',

                              flexDirection: ['column', 'column', 'column', 'row', 'row'],
                              alignItems: 'flex-start',
                              flexWrap: 'nowrap'
                            },
                            elements: [
                              {
                                // column 1
                                name: 'box',
                                data: {
                                  props: {
                                    flex: 60,
                                    paddingTop: [2, 2, 2, 2, 2], // { xs: 2, sm: 2, md: 2, lg: 0, xl: 0 },
                                    paddingBottom: [2, 2, 2, 0, 0], // { xs: 2, sm: 2, md: 2, lg: 0, xl: 0 },
                                    paddingRight: [0, 0, 0, 2, 2], // { xs: 0, sm: 0, md: 0, lg: 2, xl: 2 },
                                    paddingLeft: [0, 0, 0, 0, 0] // { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }
                                  },
                                  elements: [
                                    {
                                      name: 'image',
                                      data: {
                                        customStyle: {
                                          // margin: 'auto',
                                          // maxWidth: '256px',
                                          // borderRadius: '290486px'
                                        },
                                        props: {
                                          src: 'http://bbu.edu.az/uploads/images/Izmir-University-of-Economics.jpg',
                                          alt: 'Izmir University of Economics'
                                        }
                                      }
                                    },
                                    {
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
                                    }
                                  ]
                                }
                              },
                              // column 2
                              {
                                name: 'box',
                                data: {
                                  props: {
                                    flex: 40
                                  },
                                  elements: [
                                    {
                                      name: 'basic-form',
                                      data: {
                                        basicFormId: 'CQGaZQxVhXUdEYD5kEmx',
                                        listId: 'vhHr4FEEE2SKEr3IC4cX'
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
            }
          ]
        }
      }
    ]
  }
};

export default page;
