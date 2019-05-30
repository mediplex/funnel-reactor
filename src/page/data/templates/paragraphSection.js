const sectionHeadline = {
  name: "text",

  data: {
    props: {
      variant: "h2"
    },
    customStyle: {},
    content: `How to <del>cash</del> out your <span style="color:#ffc107">฿itcoin</span> in three steps?`
  }
};

const sectionParagraph = {
  name: "text",
  data: {
    props: {
      variant: "body2",
      paragraph: true
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Non quam lacus suspendisse faucibus. Mauris sit amet massa vitae tortor condimentum. Vulputate enim nulla aliquet porttitor lacus. Pretium quam vulputate dignissim suspendisse in est ante in nibh. In egestas erat imperdiet sed euismod nisi. Aliquet sagittis id consectetur purus ut. Amet aliquam id diam maecenas ultricies mi. Vitae semper quis lectus nulla at volutpat diam. In mollis nunc sed id. Quis lectus nulla at volutpat. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Eu turpis egestas pretium aenean pharetra magna ac placerat. At lectus urna duis convallis convallis tellus id. Tincidunt lobortis feugiat vivamus at augue eget arcu."
  }
};
const paragraphSection = {
  name: "section",
  data: {
    customStyle: {
      backgroundColor: "#f6f6f6"
    },
    content: [sectionHeadline, sectionParagraph, sectionParagraph]
  }
};

export default paragraphSection;
