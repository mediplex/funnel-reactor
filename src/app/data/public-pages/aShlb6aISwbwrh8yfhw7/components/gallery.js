export const gallery = {
  name: 'Grid',
  data: {
    props: {
      container: true,
      direction: 'column',
      spacing: 1
    },
    elements: [
      {
        name: 'Grid',
        data: {
          props: {
            item: true
          },
          elements: [
            {
              name: 'image-popup',
              data: {
                props: {},
                thumbnail: {
                  data: {
                    props: {
                      src: `https://lorempixel.com/640/480/`
                    }
                  }
                },
                image: {
                  data: {
                    props: {
                      src: `https://lorempixel.com/640/480/`
                    }
                  }
                }
              }
            }
          ]
        }
      },
      {
        name: 'Grid',
        data: {
          props: {
            container: true,
            item: true,
            direction: 'row',
            spacing: 1
          },
          elements: [
            {
              name: 'Grid',
              data: {
                props: {
                  item: true
                },
                elements: [
                  {
                    name: 'image-popup',
                    data: {
                      props: {},
                      thumbnail: {
                        data: {
                          props: {
                            src: `https://lorempixel.com/96/96/`
                          }
                        }
                      },
                      image: {
                        data: {
                          props: {
                            src: `https://lorempixel.com/640/480/`
                          }
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              name: 'Grid',
              data: {
                props: {
                  item: true
                },
                elements: [
                  {
                    name: 'image-popup',
                    data: {
                      props: {},
                      thumbnail: {
                        data: {
                          props: {
                            src: `https://lorempixel.com/96/96/`
                          }
                        }
                      },
                      image: {
                        data: {
                          props: {
                            src: `https://lorempixel.com/640/480/`
                          }
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              name: 'Grid',
              data: {
                props: {
                  item: true
                },
                elements: [
                  {
                    name: 'image-popup',
                    data: {
                      props: {},
                      thumbnail: {
                        data: {
                          props: {
                            src: `https://lorempixel.com/96/96/`
                          }
                        }
                      },
                      image: {
                        data: {
                          props: {
                            src: `https://lorempixel.com/640/480/`
                          }
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              name: 'Grid',
              data: {
                props: {
                  item: true
                },
                elements: [
                  {
                    name: 'image-popup',
                    data: {
                      props: {},
                      thumbnail: {
                        data: {
                          props: {
                            src: `https://lorempixel.com/96/96/`
                          }
                        }
                      },
                      image: {
                        data: {
                          props: {
                            src: `https://lorempixel.com/640/480/`
                          }
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              name: 'Grid',
              data: {
                props: {
                  item: true
                },
                elements: [
                  {
                    name: 'image-popup',
                    data: {
                      props: {},
                      thumbnail: {
                        data: {
                          props: {
                            src: `https://lorempixel.com/96/96/`
                          }
                        }
                      },
                      image: {
                        data: {
                          props: {
                            src: `https://lorempixel.com/640/480/`
                          }
                        }
                      }
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

export default gallery;
// name: 'image-popup',
// data: {
//   props: {},
//   thumbnail: {
//     data: {
//       props: {
//         src: `https://lorempixel.com/96/96/`
//       }
//     }
//   },
//   image: {
//     data: {
//       props: {
//         src: `https://lorempixel.com/640/480/`
//       }
//     }
//   }
// }
