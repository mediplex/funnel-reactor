export const page = {
  id: 'thank-you-for-your-request',
  title: 'Thank For You Request',
  data: {
    elements: [
      {
        name: 'box',
        data: {
          elements: [
            {
              name: 'typograhpy',
              data: {
                props: {
                  variant: 'h2',
                  component: 'h1'
                },
                customStyle: {},
                html: `Get ready to receive a call from your campus turkey advisor`
              }
            },
            {
              name: 'youtube-video',
              data: {
                customStyle: {},
                props: {
                  src: 'https://www.youtube-nocookie.com/embed/4F9VxoWoPf4?controls=0'
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
            <li>confirm your email</li>
            <li>like our facebook page</li>
            <li>join our facebook group??</li>
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
      }
    ]
  }
};

export default page;
