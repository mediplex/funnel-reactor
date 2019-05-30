const headline = {
  name: "text",
  data: {
    props: {
      variant: "h2",
      component: "h1"
    },
    customStyle: {},
    content: `Get ready to receive a call from your campus turkey advisor`
  }
};

const paragraph = {
  name: "text",
  data: {
    props: {
      variant: "body2",
      paragraph: true
    },
    content: `
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
};

const video = {
  name: "youtube-video",
  data: {
    customStyle: {},
    props: {
      src: "https://www.youtube-nocookie.com/embed/4F9VxoWoPf4?controls=0"
    }
  }
};

const section = {
  name: "section",
  data: {
    content: [headline, video, paragraph]
  }
};

export const page = {
  id: "thank-you-for-your-request",
  title: "Thank For You Request",
  data: {
    content: [section]
  }
};

export default page;
