const headline = {
  name: "text",
  data: {
    props: {
      variant: "h2",
      component: "h1"
    },
    customStyle: {},
    content: `Do you know that you can obtain you <strong style="color:red">MBA</strong> by the next in Turkey?`
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
  id: "campus-turkey-thank-you",
  data: {
    content: [section]
  }
};

export default page;
