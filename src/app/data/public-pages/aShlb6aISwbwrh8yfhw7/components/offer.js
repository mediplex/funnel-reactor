import gallery from './gallery';
import BuyButton from './buyButton';

export const offer = {
  name: 'container',
  data: {
    props: {
      maxWidth: 'lg'
    },
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
                  item: true,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 6,
                  xl: 6
                },
                elements: [
                  {
                    name: 'box',
                    data: {
                      props: {
                        style: {
                          padding: '1rem'
                        }
                      },
                      elements: [gallery]
                    }
                  }
                ]
              }
            },
            {
              name: 'Grid',
              data: {
                props: {
                  item: true,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 6,
                  xl: 6
                },
                elements: [
                  {
                    name: 'box',
                    data: {
                      props: {
                        style: {
                          padding: '1rem'
                        }
                      },
                      elements: [
                        {
                          name: 'typograhpy',
                          data: {
                            props: {
                              variant: 'h3',
                              component: 'h1',
                              paragraph: true
                            },
                            html: `Awesome thing - Limited Edition`
                          }
                        },
                        {
                          name: 'typograhpy',
                          data: {
                            props: {
                              variant: 'body1',
                              component: 'p',
                              paragraph: true
                            },
                            html: `
                                    List Price: <strong><del>$29.99</del></strong><br>
                                    Your Price: <strong style='color: #ff3860'>$19.99</strong><br>
                                    You Save: <strong>$10</strong>`
                          }
                        },
                        {
                          name: 'typograhpy',
                          data: {
                            props: {
                              variant: 'h5',
                              component: 'p',
                              paragraph: true
                            },
                            html: `<strong style='color: #23d160'>Only 18 left in stock - order soon.</strong>`
                          }
                        },
                        {
                          name: 'typograhpy',
                          data: {
                            props: {
                              variant: 'body1',
                              component: 'p',
                              paragraph: true
                            },
                            html: `Write a brief description of why this thing is awesome in the facilities tow Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet , consectetur.`
                          }
                        },
                       BuyButton
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

export default offer;
