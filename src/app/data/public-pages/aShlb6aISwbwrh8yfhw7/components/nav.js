export const nav = {
  name: 'container',
  data: {
    props: {
      maxWidth: 'xl'
    },
    elements: [
      {
        name: 'Level',
        data: {
          left: {
            elements: [
              {
                name: 'typograhpy',
                data: {
                  props: {
                    variant: 'button'
                  },
                  html: `LOGO`
                }
              }
            ]
          },
          elements: [],
          right: {
            elements: [
              {
                name: 'Grid',
                data: {
                  props: {
                    container: true,
                    spacing: 2
                  },
                  elements: [
                    {
                      name: 'Grid',
                      data: {
                        props: {
                          item: true
                        },
                        elements: [
                          {
                            name: 'typograhpy',
                            data: {
                              props: {
                                variant: 'button'
                              },
                              html: `Description`
                            }
                          }
                        ]
                      }
                    },
                    {
                      name: 'Grid',
                      data: {
                        props: {
                          item: true
                        },
                        elements: [
                          {
                            name: 'typograhpy',
                            data: {
                              props: {
                                variant: 'button'
                              },
                              html: `Product`
                            }
                          }
                        ]
                      }
                    },
                    {
                      name: 'Grid',
                      data: {
                        props: {
                          item: true
                        },
                        elements: [
                          {
                            name: 'typograhpy',
                            data: {
                              props: {
                                variant: 'button'
                              },
                              html: `Reviews`
                            }
                          }
                        ]
                      }
                    },
                    {
                      name: 'Grid',
                      data: {
                        props: {
                          item: true
                        },
                        elements: [
                          {
                            name: 'typograhpy',
                            data: {
                              props: {
                                variant: 'button'
                              },
                              html: `Buy Now`
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
      }
    ]
  }
};

export default nav;
