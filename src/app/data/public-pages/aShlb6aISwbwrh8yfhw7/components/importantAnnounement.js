export const importantAnnouncement = {
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
            margin: 2,
            padding: 2,
            border: 3,
            bgcolor: '#ffffff',
            borderColor: '#ff0000',
            style: {
              borderStyle: 'dashed'
            }
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
                        md: 1
                      },
                      elements: [
                        {
                          name: 'image',
                          data: {
                            props: {
                              src: 'https://image.flaticon.com/icons/svg/69/69544.svg',
                              style: {
                                hight: '48px',
                                width: '48px'
                              }
                            }
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
                        md: 11
                      },
                      elements: [
                        {
                          name: 'typograhpy',
                          data: {
                            props: {
                              variant: 'body2'
                            },
                            html: `<strong>Due To The Popularity Of Our Awesome Product, It May Sell Out As Of TODAY. We Have A Limited Supply The Thing IN STOCK An Ready To Ship Within The Next 48 Hours.</strong>`
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

export default importantAnnouncement;
