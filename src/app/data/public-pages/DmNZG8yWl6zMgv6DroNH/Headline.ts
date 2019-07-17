export const headline = {
  name: 'container',
  data: {
    props: {
      component: 'header'
      // maxWidth: 'md'
    },
    elements: [
      {
        name: 'box',
        data: {
          props: {
            padding: '2rem'
          },
          elements: [
            {
              name: 'typograhpy',
              data: {
                props: {
                  component: 'h1',
                  variant: 'h3',
                  align: 'center'
                },
                html: `🔥 Important 🔥<br><br> Are You From <strong style="color:#2aa53f"><u>Morocco</u></strong>? You Can Now <strong style="color:#ff3737">Study</strong> and <strong style="color:#ff3737">Work</strong> in <strong style="color:#ff3737">Turkey</strong> Starting From September.<br> Request More Information Now!`
              }
            }
          ]
        }
      }
    ]
  }
};
