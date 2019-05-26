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

const imageColumns = {
  name: "columns",
  data: {
    content: [
      {
        name: "column",
        data: {
          size: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
          content: [
            {
              name: "image",
              data: {
                customStyle: {
                  margin: "auto",
                  maxWidth: "256px",
                  borderRadius: "290486px"
                },
                props: {
                  src:
                    "https://itpeoplecorp.com/wp-content/uploads/2017/03/Building.png",
                  alt: "building image"
                }
              }
            }
          ]
        }
      },
      {
        name: "column",

        data: {
          size: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
          content: [sectionParagraph]
        }
      }
    ]
  }
};

const imageSection = {
  name: "section",
  data: {
    content: [sectionHeadline, imageColumns]
  }
};

export default imageSection;