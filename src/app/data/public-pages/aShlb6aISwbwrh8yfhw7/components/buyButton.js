export const BuyButton = {
  name: 'box',
  data: {
    props: {
      style: {
        border: '0.2rem',
        padding: '1rem',
        backgroundColor: '#ffffff',
        borderColor: '#ff3860',
        borderStyle: 'dashed',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center'
      }
    },
    elements: [
      {
        name: 'typograhpy',
        data: {
          props: {
            variant: 'h5',
            component: 'p',
            paragraph: true
          },
          html: `Get Yours Now`
        }
      },
      {
        name: 'PayPalButton',
        data: {
          options: {
            clientId: 'AQ5UsHr4Izoxn7RJRX0SIO5jcNQMJWOC1fltg2Fe4GEo8Jw1bPgcYuz5ILibJx8L6lrm3yXxTVYx3VHx'
          }
        }
      },
      {
        name: 'typograhpy',
        data: {
          props: {
            variant: 'button',
            component: 'p',
            paragraph: true
          },
          html: `<u>Click Here To Buy Now</u>`
        }
      }
    ]
  }
};

export default BuyButton;
