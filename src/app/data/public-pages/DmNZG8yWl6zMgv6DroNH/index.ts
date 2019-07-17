const page_ = {
  // title: 'Master Degree',
  data: {
    elements: [
      //! header
      // {
      //   name: 'Grid',
      //   data: {
      //     props: {
      //       component: 'header',
      //       container: true
      //     },
      //     elements: [
      //       {
      //         name: 'Grid',
      //         data: {
      //           props: {
      //             component: 'section',
      //             item: true,
      //             xs: true
      //           },
      //           elements: [
      //             {
      //               name: 'paper',
      //               data: {
      //                 props: {
      //                   elevation: 2,
      //                   square: true
      //                 },
      //                 elements: [
      //                   {
      //                     name: 'box',
      //                     data: {
      //                       paper: {
      //                         square: true,
      //                         elevation: 2
      //                       },
      //                       props: {
      //                         padding: 1,
      //                         bgcolor: '#ff3737',
      //                         component: 'header'
      //                       },
      //                       elements: [
      //                         {
      //                           name: 'typograhpy',
      //                           data: {
      //                             props: {
      //                               variant: 'button',
      //                               align: 'center'
      //                             },
      //                             html: `<strong><span style="color: #ffffff; font-size: 1rem;">This Opportunity will exprire in 00:14:30</span></strong>`
      //                           }
      //                         }
      //                       ]
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           ]
      //         }
      //       }
      //     ]
      //   }
      // },
      //! main
      // {
      //   name: 'container',
      //   data: {
      //     props: {
      //       component: 'main',
      //       maxWidth: 'md'
      //     },
      //     elements: [
      //       {
      //         name: 'box',
      //         data: {
      //           elements: [
      //             {
      //               name: 'typograhpy',
      //               data: {
      //                 props: {
      //                   component: 'h1',
      //                   variant: 'h2',
      //                   align: 'center'
      //                 },
      //                 html: `
      // Your <strong>Licence Pro</strong> is now accepted at our University in <strong style="color:#ff3737">Turkey</strong>, request more information now!`
      //               }
      //             }
      //           ]
      //         }
      //       },
      //       {
      //         name: 'Grid',
      //         data: {
      //           props: {
      //             container: true,
      //             spacing: 2
      //           },
      //           elements: [
      //             {
      //               name: 'Grid',
      //               data: {
      //                 props: {
      //                   component: 'section',
      //                   item: true,
      //                   xs: 12,
      //                   sm: 12,
      //                   md: 7,
      //                   lg: 7,
      //                   xl: 7
      //                 },
      //                 elements: [
      //                   {
      //                     name: 'image',
      //                     data: {
      //                       customStyle: {
      //                         // margin: 'auto',
      //                         // maxWidth: '256px',
      //                         // borderRadius: '290486px'
      //                       },
      //                       props: {
      //                         src: 'http://via.placeholder.com/640x460',
      //                         alt: 'Izmir University of Economics'
      //                       }
      //                     }
      //                   },
      //                   {
      //                     name: 'typograhpy',
      //                     data: {
      //                       props: {
      //                         variant: 'body2',
      //                         paragraph: true
      //                       },
      //                       html: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      //   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      //   Id aliquet lectus proin nibh nisl condimentum id venenatis a.
      //   Non quam lacus suspendisse faucibus. Mauris sit amet massa vitae tortor condimentum.
      //   Vulputate enim nulla aliquet porttitor lacus. Pretium quam vulputate dignissim suspendisse in est ante in nibh.`
      //                     }
      //                   }
      //                 ]
      //               }
      //             },
      //             {
      //               name: 'Grid',
      //               data: {
      //                 props: {
      //                   component: 'section',
      //                   item: true,
      //                   xs: 12,
      //                   sm: 12,
      //                   md: 5,
      //                   lg: 5,
      //                   xl: 5
      //                 },
      //                 elements: [
      //                   {
      //                     name: 'basic-form',
      //                     data: {
      //                       basicFormId: 'CQGaZQxVhXUdEYD5kEmx',
      //                       listId: 'vhHr4FEEE2SKEr3IC4cX',
      //                       redirectTo: 'thank-you-for-your-request',
      //                       elements: [
      //                         {
      //                           inputType: 'text-input',
      //                           name: 'Email',
      //                           label: 'Where should we send you the info?',
      //                           placeholder: 'Your best email',
      //                           multiline: false,
      //                           validation: {
      //                             required: {},
      //                             email: { errorMessage: 'invalid email' },
      //                             matches: {
      //                               // eslint-disable-next-line
      //                               regex:
      //                                 '^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$',
      //                               errorMessage: 'Invalid Email'
      //                             }
      //                           }
      //                         },
      //                         {
      //                           inputType: 'text-input',
      //                           name: 'Name',
      //                           label: 'What is you name?',
      //                           placeholder: 'Your Name',
      //                           validation: { required: {} }
      //                         },
      //                         {
      //                           inputType: 'text-input',
      //                           name: 'WhatsApp',
      //                           label: 'Where should we call you?',
      //                           placeholder: '06xxxxxxx',
      //                           validation: { required: {} }
      //                         },
      //                         {
      //                           inputType: 'select-input',
      //                           name: 'Master Program',
      //                           label: 'What Master Program Do You Want?',
      //                           validation: {
      //                             required: {}
      //                           },
      //                           options: [
      //                             {
      //                               groupLabel: 'group 1',
      //                               values: [
      //                                 'Experimental Psychology',
      //                                 'Financial Economics',
      //                                 'Logistics Management',
      //                                 'Media and Communication Studies',
      //                                 'Private Law Graduate Program',
      //                                 'Marketing Communication and Public Relations',
      //                                 'Political Science and International Relations',
      //                                 'Sustainable Energy',
      //                                 'Design Studies',
      //                                 'Design Management',
      //                                 'Yacht Design'
      //                               ]
      //                             },
      //                             {
      //                               values: [
      //                                 'M.SC. In Intelligent Engineering Systems',
      //                                 'M.SC. in Bioengineering',
      //                                 'M.SC. in Computer Engineering',
      //                                 'M.SC. in Electrical and Electronics Engineering',
      //                                 'M.SC. In Industrial Engineering',
      //                                 'M.SC. In Financial Mathematics',
      //                                 'M.SC. In Advanced Architectural Design',
      //                                 'M.SC. In Architecture',
      //                                 'M.SC. In Applied Statistics',
      //                                 'MBA',
      //                                 'Executive MBA'
      //                               ]
      //                             }
      //                           ]
      //                         }
      //                       ]
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           ]
      //         }
      //       }
      //     ]
      //   }
      // },
      //! footer
      // {
      //   name: 'Grid',
      //   data: {
      //     props: {
      //       component: 'footer',
      //       container: true
      //     },
      //     elements: []
      //   }
      // }
    ]
  }
};

import { aboutUs } from './AboutUs';
import { footer } from './Footer';
import { headline } from './Headline';
import { main} from './Main';
import { ourStudents} from './OurStudents';
import { topBar} from './TopBar';
import { whyIzmir} from './WhyIzmir';

interface Page {
  title: string;
  data: {
    elements: {}[]
  }
}
const page:Page = {
  title: 'Master Degree',
  data: {
    elements: [
      // topBar,
      headline,
      main,
      // ourStudents,
      // whyIzmir,
      // aboutUs,
      footer
    ]
  }
}

export default page;