const sectionHeadline = {
  name: "text",

  data: {
    props: {
      variant: "h2"
    },
    customStyle: {},
    content: `Gallery`
  }
};

const popupVideo = {
  name: "youtube-video-popup",
  data: {
    customStyle: {
      width: "128px"
    },
    youtubeVideo: {
      name: "youtube-video",
      data: {
        customStyle: {},
        props: {
          src:
            "https://www.youtube-nocookie.com/embed/3hj_r_N0qMs?start=54&autoplay=1&controls=0"
        }
      }
    },
    thumbnail: {
      data: {
        customStyle: {},
        props: {
          alt: "",
          src: "https://bulma.io/images/placeholders/128x128.png"
        }
      }
    }
  }
};

const popupImage = {
  name: "image-popup",

  data: {
    customStyle: {
      width: "128px"
    },
    image: {
      data: {
        customStyle: {},
        props: {
          alt: "",
          src: "https://bulma.io/images/placeholders/1280x960.png"
        }
      }
    },
    thumbnail: {
      data: {
        customStyle: {},
        props: {
          alt: "",
          src: "https://bulma.io/images/placeholders/128x128.png"
        }
      }
    }
  }
};

const gallerySection = {
  name: "section",
  data: {
    content: [
      sectionHeadline,
      {
        name: "columns",
        data: {
          content: [
            {
              name: "column",
              data: {
                content: [popupImage]
              }
            },
            {
              name: "column",
              data: {
                content: [popupImage]
              }
            },
            {
              name: "column",
              data: {
                content: [popupImage]
              }
            },
            {
              name: "column",
              data: {
                content: [popupImage]
              }
            },
            {
              name: "column",
              data: {
                content: [popupImage]
              }
            },
            {
              name: "column",
              data: {
                content: [popupImage]
              }
            },
            {
              name: "column",
              data: {
                content: [popupImage]
              }
            },
            {
              name: "column",
              data: {
                content: [popupImage]
              }
            },
            {
              name: "column",
              data: {
                content: [popupVideo]
              }
            }
          ]
        }
      }
    ]
  }
};

export default gallerySection;
