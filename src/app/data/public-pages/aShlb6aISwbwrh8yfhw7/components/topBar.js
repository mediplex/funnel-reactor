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
              name: 'box',
              data: {
                paper: {
                  square: true,
                  elevation: 2
                },
                props: {
                  padding: 1,
                  // bgcolor: '#ff3737',
                  component: 'header'
                },
                elements: [
                  {
                    name: 'typograhpy',
                    data: {
                      props: {
                        variant: 'body2',
                        align: 'center'
                      },
                      html: ` <span style="color:#fff">WE SHIP GLOBALLY - Call (888) 888-8888</span>`
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

export default topBar;
