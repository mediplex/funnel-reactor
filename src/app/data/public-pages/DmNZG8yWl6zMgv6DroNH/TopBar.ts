export const topBar = {
  name: 'Grid',
  data: {
    props: {
      component: 'header',
      container: true
    },
    elements: [
      {
        name: 'Grid',
        data: {
          props: {
            component: 'section',
            item: true,
            xs: true
          },
          elements: [
            {
              name: 'paper',
              data: {
                props: {
                  elevation: 2,
                  square: true
                },
                elements: [
                  {
                    name: 'box',
                    data: {
                      paper: {
                        square: true,
                        elevation: 2
                      },
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
                              variant: 'button',
                              align: 'center'
                            },
                            html: `<strong><span style="color: #ffffff; font-size: 1rem;">This Opportunity will exprire in 00:14:30</span></strong>`
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