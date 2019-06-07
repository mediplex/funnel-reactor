const headline = {
  name: 'text',
  data: {
    props: {
      variant: 'h2',
      component: 'h1'
    },
    content: `
      Your <strong>Licence Pro</strong> is now accepted at our University in <strong style="color:red">Turkey</strong>, request more information now!`
  }
};

const subHeadline = {
  name: 'text',
  data: {
    props: {
      variant: 'h5',
      component: 'h2',
      gutterBottom: true
    },
    content: `Where do you want to receive the info you are looking for?`
  }
};

const paragraph = {
  name: 'text',
  data: {
    props: {
      variant: 'body2',
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

const image = {
  name: 'image',
  data: {
    customStyle: {
      // margin: 'auto',
      // maxWidth: '256px',
      borderRadius: '290486px'
    },
    props: {
      src:
        'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13450866_1136228529730774_3237654540888287185_n.jpg?_nc_cat=104&_nc_oc=AQnhV3UP5LbTfcHqDDsZVWvF_7fwW-RcYyQUJ2SDfUEpDzasQbaNTa-yy9sgjPWV1yc&_nc_ht=scontent-sea1-1.xx&oh=f3262096f26d38f330e41b783edb352d&oe=5D92A067',
      alt: 'building image'
    }
  }
};

const form = {
  name: 'basic-form',
  data: {
    redirectTo: 'thank-you-for-your-request',
    content: [
      {
        inputType: 'text-input',
        name: 'Email',
        label: 'Email Address',
        placeholder: 'Your best email',
        multiline: false,
        validation: {
          required: {},
          email: { errorMessage: 'invalid email' },
          matches: {
            // eslint-disable-next-line
            regex: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
            // errorMessage: "invalid Email"
          }
        }
      },
      {
        inputType: 'text-input',
        name: 'Name',
        label: 'What should we call you?',
        placeholder: 'Your Name',
        validation: { required: {} }
      },
      {
        inputType: 'text-input',
        name: 'WhatsApp',
        label: 'Where should we text you?',
        placeholder: '06xxxxxxx',
        validation: { required: {} }
      },
      {
        inputType: 'select-input',
        name: 'Master Program',
        label: 'What Master Program Do You Want?',
        validation: {
          required: {}
        },
        options: [
          {
            group: 'Graduate School of Health Sciences',
            values: [
              'Health Institutions Management (without Thesis) (Turkish)',
              'Healthcare Quality and Patient Safety (with Thesis) (Turkish)',
              'Healthcare Quality and Patient Safety (without Thesis) (Turkish)',
              'Reproductive Biology (with Thesis) (Turkish)',
              'Reproductive Biology (without Thesis) (Turkish)',
              'Surgical Nursing(with Thesis) (Turkish)'
            ]
          },

          {
            group: 'Graduate School of Social Sciences',
            values: [
              'Brand Communication (Without Thesis) (Turkish)',
              'Experimental Psychology (With Thesis)',
              'Financial Economics (With Thesis)',
              'Financial Economics (Without Thesis)',
              'Logistics Management (With Thesis)',
              'Logistics Management (Without Thesis)',
              'Media and Communication Studies (With Thesis)',
              'Private Law Graduate Program (With Thesis)',
              'Private Law Graduate Program (Without Thesis)',
              'Marketing Communication and Public Relations(English)',
              'Political Science and International Relations (With Thesis)',
              'Political Science and International Relations (Without thesis)',
              'Sustainable Energy (With Thesis)',
              'Sustainable Energy (Without Thesis)',
              'Design Studies (With Thesis)',
              'Design Management (Without Thesis)',
              'Yacht Design (Without Thesis)'
            ]
          },

          {
            group: 'Graduate School of Natural and Applied Sciences',
            values: [
              'M.SC. In Intelligent Engineering Systems (With Thesis)',
              'M.SC. in Bioengineering (With Thesis) (Turkish)',
              'M.SC. in Bioengineering (Without Thesis)',
              'M.SC. in Computer Engineering (With Thesis)',
              'M.SC. in Computer Engineering (Without Thesis)',
              'M.SC. in Electrical and Electronics Engineering (With Thesis)',
              'M.SC. in Electrical and Electronics Engineering (Without Thesis)',
              'M.SC. In Industrial Engineering (With Thesis)',
              'M.SC. In Financial Mathematics (Without Thesis)',
              'M.SC. In Advanced Architectural Design (Without Thesis)',
              'M.SC. In Architecture (With Thesis)',
              'M.SC. In Applied Statistics (With Thesis)',
              'M.SC. Occupational Health and Safety (With Thesis) (Turkish)',
              'M.SC. Occupational Health and Safety (Without Thesis) (Turkish)'
            ]
          },
          {
            group: 'Graduate School of Business',
            values: [
              'MBA(With Thesis)',
              'MBA(Without Thesis)',
              'Executive MBA (English / Without Thesis)',
              'Executive MBA (Turkish / Without Thesis)',
              'Master of Business Administration - Distance Learning (e-MBA) (English)',
              'Master of Business Administration - Distance Learning (e-MBA) (Turkish)',
              'Finance (Without Thesis)'
            ]
          }
        ]
      },
      {
        inputType: 'checkbox-input',
        name: 'Accept',
        label: 'Accept terms and conditions',
        defaultValue: true,
        validation: {
          required: {}
        }
      }
    ]
  }
};

const columns = {
  name: 'box',
  data: {
    props: {
      display: 'flex',
      flexDirection: {
        xs: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
        xl: 'row'
      },
      alignItems: 'flex-star',
      flexWrap: 'nowrap'
      // css:{ backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFhUXGRcbFxgYFxcYGBoYFxgXFhcXFhcaHSggGhomGxgXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICY1LzAtLS0tLS8tLzUtLS0tLS0vLS0tLS0tLS0tLS0tLS0tLy4tLS0vKy0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAACBQEG/8QAOBAAAgEDAwIFAgUCBgIDAQAAAQIRAAMhBBIxQVEFEyJhcTKBkaGxwfBC0QYUI1Lh8TNiFXKSJP/EABoBAQEBAQEBAQAAAAAAAAAAAAEAAgMEBQb/xAArEQACAgIBAwEHBQEAAAAAAAAAAQIRITESA0FRIhNhcaHB0fAEUpGx4YH/2gAMAwEAAhEDEQA/AKlqhu1xrZobWTycV8k/f14K3LlWTiqKkmKYe3AqNJUDW9AoZ1NCujNVAoobCC7TGkaM0LTWRyaae3AxUWWE88Ut5kk0vceuW+9AjIoVwZqSagFRbBsa7mrbKKgqJIAnNO2zigBBNdY9qDQ0hqkZpZ2IqeaagWwrnNButTlu0CM0nqNOVPcUk2V3V0E0OyvqzWpaYRUFiVSKJfwxHSq7xHNFCmCckGgMc0W8ZM1QClAyoolrFU60ZY7VAO2IjNUu2w3GDSykjExXS5FFGqsXuacqZ5FEDURrnpqiPitWY4gXWTXLtogfNFuPwetd3yIrVnGcBA2K5TsVK3yPN7FGrviaBdv0vfuEUCSa5H0dBA2afVC2FE/zvWb5cZrX0Nw7Y69ajLboztRpXByP7fjSzYrX1bkKQRWWTNVilaL6e7GDRWv9BQ0tzmqXcVkirWyactKB0oSGRUk9AaTVBgAWjpRwg4ArPRzNMC6VIJFDBIM+jPQil3Uim11I5mgM8tNQJMHuxVQ1EdcUACo0mHNoEc0scGKKbtCYSakTNHROCKLqFnNA0VrbJOaZuXxtxSYd3ZlajkEc1ZdQR0q7rNWWxUbFmuE5qoNMX7cGlTNRDaWREk1IE0O1cJGBxQXczFQ4LXDmpuriWWPajro55MGkwC5pe9cPFHIiR1FLXBUVl7eaZXiq6bTMRjntVie9QC7Zq+yrUa2uKQqxeKlNbBXaTPEHtmSaC0CtDw+yWDGOO/FDv2PUJEZrLN8rwKFq0/C4yW6dKEEAIJ4FC1FyDIPNQVeBnxIiJGKyBiiPcmhxQOlSD23+9aZsqFiKzdKQDTt68YqZMF5agxRlbECkRcq9q9QbHtLa5J5pfW1VdV0oV+5SZ7gduauqxVt0xTDWRHOajVihvVwtUa0RRVsysmgKKC3PWnvDbI5InNZ7NGKLpdUQcVFPRs6sKBMRWYmZ7dqM+q3nkUeyg+1WzMVxWRC8nUV3R3pJHWqa1oMTigOYg9ajWxq+Iq9qyDzVLeidhMiexmoiRic/vUKaYZSBxSmrXO78a2LfhQZfq9XxiaxL5KkqelNMIzjK0iLdiiNqszSdiCwrTNkbajQpadWYkjmuX0CnHHNDVs1e+8xSZHNPdUZkUpqHMkkEAkxQtOcia1L0FCDxH51BV5MqzczWnbPpP5VlW7eaaDxieKivsDukyealH8z2qU2XAc0V8iU6k/z9KBrrpJx0pQakq27r/BWnorfnT0VRJ+/ArOwxH1MSFya7oLAuOR/PvR2sKrZ47VW0gF0bcTzUL0U8V0gT1KZ79KV06zWn4hpXK7sR2nMfFZaNGatBHPc7fWOtG83FKtc3Gtnw3QqVJbJ7VJFKSjkzQ0iqGmbunCuQOP5ilbuDUjTyWVY4qxtE81xCPvRwxOOlRJAV9PzVTeM1drR6mlrkk0GtDa+rNDN0jH4U3Z0xFuSIjn+9Jk5mqi5JndsiglIMU7pxGW+1TUact9OTUGxFXg1paVmYY4oOp8IdF3Eg94nFd010r0qaMpqWhfVSTB6UFoFNXkYksYFEXwi46bxHExOf+6UUmlll7Ouhcg1S3qpJkc0vom6RNH0rbXkCg1oaHihUU5oLKXBuIBkZrJ8RuB3kDpn5paSMAkVrRzcLWMHdRaCuwXgEx8TiqPeaIk1NjHFcvWikdQeKtm6aQAN3oto5FEsWATnrU8gjPSkENtaETxVC42me1Lai+dsDrQ7cwaBuhvSWweaBq1hyAeK7aeOK5p3G71cVA86KB27/AKVK3EsWiJ2j86lVoxbMzVqJxRNLrjaBAyD+oq1i2HcjiAT+gx+NB1On9VFG5NMNZvq+5n5EbRPeZJ/D86FaAJJ7cUNrQGR0qyMAAZz1qZIb81mIBz/anteg8uIAjAjoax3uFMz/AMdab0XiIJ9WRIkVGWm8oU8gimtLvyZIrQGotPc9ZxBIjEnoKqyKLcqTuPTmOw+ag5+Vk74a1uH3AFpxP/NZeqC7yBxQb11pgiD2qu8qYI56VG1FJt2XvR0q2o9MR1qPZYAORAPFK7+1VGhu4lxVDMBH55q2oWFmh39WzAA/lQi7N6agyPajxj0bYyRHP7VmW2k5PWrtan0xmhOhGOKgSUdGpq3BELS1nVMMdqAlyKIWBz1qqhNW1rfN/wBM4mp4p4ebQBB3A9uR81jWLu1prb02q8wQ09x9qDm4uNNa7mOLrcGj2PEHUbR9jQbihrnWKa0mjL3ltJGTz071G5NU29Cti2NpMwa1PA/Lbdu+r56Vz/EHhbad1VjO4SD36GkVt+XDEdcU5WzPJdSFxeBs6YKxBkZMTjHel7Oml4Bx70xqb5u2xtwVJ/CKS097ZnrUMbaD6zTm2e89aX1EFZ7cUwuoDSX/AOqBccMQqDP4Co1TrIANmjXb2Peh3CfpPSjeE6pUaX/HmKmOkL6fJzitixolf6Ru+OvekNXfS5ddlEKeOkwAD8Zk0bwjV7ZAH896tMw7cb7gteiqAOGB44PvIrPZJM03rULbrh+omT/eiXvJ8sQPUCMyc/I+KRpktaNyAc/jUp+zYUqCTn4rlYoXMU0ZEM8wRAA/elXuSTn4pvxnV2nf0DYB0iPyFIBccVoI21YS0oZSZMgjHzVFHer3NVuIGPTHHT2FR7ROeBUivFDKWBcbZMCCfmOgo3+VVPQcOJkx+9ZTOQQRxTT23Kh2kg/SSf0pDN7N7T+CL5YuuZyMA8Lg/jFI+IsrXFazCien85rOsszDartAHcx+FLm8d22CCKjMYNSbk7Zo27KG6N5O3kxz7Z+abtslu4LhBIgiDkZ7e9ZC6lT81r2dJbfTG4b3rDQExMdPczQPUaW7zgR12ra4SBhOgxj70kUjjrTf+Uc7m2naOTmB81e3qlKeVtAPc/qetBtUsIppyqkbs0a3DTA4P8igXEUAgjcR1FF0dzAKwPn4pJnXKAluD/Pzod5yRBBHXiK5qbhZ9+0lR9WK0L2sBt7IEHO4gznNAW/BmWvDbjKzqpKrz+uKb0mjS6qqphupJEH2AoNrW3Fm2jwDzSt7eDK9OxpM08/I1tH4aiXyl8YAnnBHeaF4nfAubLWEnB9jg/bmsy/rnMkk9j8dqJpXRid7FTGKmHFp8m8j/imjtI6bXndz3n5oJL2LgI+VINZ72ZYxwIJ9q0dLfQXN1wNcQKPePtVRZUaefqM3de2puq14yFEYxz/B+FZ3it6WKgyFOKZe+hDqg2hm9BJyFnAn4pK1aAcoCCOpnGfeq+5rpx4pJKvcG0DbRJB29a7cKsZAgTxTFzUWRZ2KD5qsZOYj26cUTwbWi0/mIAwAzuMfMVA5um0gDCFmJHQ/80o7sPUI5iOtaPi4t7bZt3CXckvbEQs5EdhJiDWReUrySWH9J6UjCakrJduSQTzQbtrkUfTqX+rniu2w1qWEE8QajTbopYgCCas1+IC46GmPAfD/ADrgQutuSTkfkKmv0Yt3GWQdrEFhwQDyKjHNXxvOwFy9uViTFc0GlYwe5/WmdVprSsoW4G3CTHTPX39qUa/BiSBM/wDNW1gzs9dY/wAO3to9S/8A7I/LbUrM0/i1zaP/AOhvxH9q7TyXg876X6j9yMhbQJJJmDRNUwkBc5q3hunvG05QFrYYbjiA0YnrMdPeuaayz+mAI5aZ94jv/ehnrUk7F9Npy77QIIyT8c/ArU0ysbT2ltq5BJnrEDr0HP40HxDy0CG1bhwvrJYncY5A+eI6UHTalkeC8T2B7fTj71GW+Syv5/wHeRgYZYb/AGnp3rvmXCFU/SJ7fP4Ua2Idt2G6M0mI6R3NLvb37WUsNn/kLGFYkmNo7cUJm3WLBO5RoEjHSrW7jEgSskxuPSe9N+WGK3FgbdvpckhiI5OBB7Ve15G8OZG5vVA9IwYAj3pQOVdgFgIjmV3gc59uQaJftQvnKISYEngjmgmPXAMzxgfwV3S6sruAQbWXO7seomgXfY09V4uDbZV3KrKMD1bmAgkk8VmaK4NwZ1kKMjqal9yEWHtiCF2gZMcY/f2oWpvKzCZUjJfoR8d+kUmVGMVj8+psafwkX7Re2LguBjIABQW+cnv96mr8VTULca96HRQLQRYDHru7dMVmaPxa7bTDuEcHbmFPQn8qAVPqAgnmQQRAioyunbbb+Hk3vDvF1sWtgUObineD0PSDHasrV31YQSQR2FLjUEwrEAAglhAY4xtJ6Uxo9Lvuoly6tsMYJYSQDwxzHFG8GkowuX8gtMis6hm2jcAX5CjuRTmtRE3bXVwCQCMEjvFKX7UAopDKHkRguJgFRyeJpe9aIcKFzMBj9OOZ7RQK3sI2nZuFOMmrLEniYxVWLB2ViTuAzkQJ/MGK0NNbt7gtz0KQYO1mbGMBcnP61WLdZM26CIP+7p1+Kb8He36vOV9jSAFMEHpPtVNUCNrustwDu4wYXHBEHntQ1skhVJ7mZiZGBSZeUdbTkOYG7bifftNd11pFVI3C6SQ4P0xyDVWwARvXKgkElS0TxHMdKOb3mMi3X9FtSJjdEyYhczUZcnSYtb0zAgGJmJnHfNU1e5SBwSTI44qgvRPdonk7femNSjqylnDFgGWfVPTJ6cUmrSR21dNq4GP1jaQORHv9q2tV4oQ41B2TcP0j2A5rGbUtcDbmQDnAHJwIA5zFdsm0LB3BjdDDZJIG0jJjrxQZkk81n7ml4qttR5oBV3JPk7SNoI+of+pP64pPT2Ue291ryhhHoK5bpgz+1BOoLmXcnAXf/tABwJ7Zq9vRMlpbpSbZmGkZgjpz1H40grilGTr81+ZE7qncYJOQeP171oazVk+WrhcduT1z+NUv3zeZFSyqFBll/qPUtHP/AHQr+rZgqnaIkg4+Mn7VHTDqxvxq2jBGs79oHrkGA3sa5/k7YtbiQWbAMxBAnI7UkuruFSm+LZgsMczj8+lU09ptxI6dDwfeDzinwYUWsWDS0xEj9alN2tZtEbDj2T9zUqyb9Pk7e/0xsRjt6z6RPSROTE5oN6zcBDt6EcrDSQszEqTz81y+F5ktxMqsGBGIM9esnNH/AM+GZQS7LbhQqgQF5AG4mMmivIP3EvWysNu3iY6RiODMxxk96Ted021bMxGTk4U/OKtpdSBcU4QqdwDOQd0ghYJieKat6wAPcY7WLQyhmkHIEkgbZBJkT7xVXcuTWAa6S6EO5vVMgMYZWwSCOQInnvQmZwCckyAQRAPtnjpmg6bVHcxJk7svOQNskfM9ec5p5tQXVSy4EmY9REjLGCCATExjirJf9BqBukQCuQsmI6ESDMCiWLjMFYZ3sxCqsiRyT74FRrx3HaAckEYjbEGATOCelJ5Jb6to68niRtIGME4H3qQSCXrbsC8rAzIgH2Y5yP8Aijm+pCfVu/q+RE4j0jsM8UmiKWhS0J6hko8g7pg4iR1BNWGsLqQ449UmCxZiGCjG4Cd3780tHNSbZdbe7dduEEgzMciZG0CB0iaO9y3vYm2QgO5txBOR9Ijmlf8AMgbWAk8AGAQ8zuY5k/hwe9WfaVJ7bsE7mY8rOMDaDjJkUZNJ0WXTNwUbbMCMn1SUGMSYJ+BTGo1Tf6dwW7RKrABUqjALEkjBPUiZJoQAa30z1gweFKlh15k8QKEL7Ou0kOoaWUDAkQYYYwduOoHtVTK7LalB65SAQpgMCFgfSCeeJzAzFS6wKrCAAQWPXIxMcgAdBVXsMpQgFhLAE8mIJM8HECfeKmsvumIUqxOBItifS0E5PMjOPsQbizXLBWzZaSy8SApUHBbAzwDP85ounZt7RiBDAkduQMyZ7VW3riwGwEKAQfoAJb+qTnAzkmOkVX/O4IKlpAMEEsIiVXEoDxA7/ariw5tnNQpUsQCxJAA3cAxk9s0yjkW2O+Np/wDHJYliNv1AD04j9uaXu3kYLyeZAJhV5Akkbp/9uce8cvNP0wBkwVBgn0yYG3+me2R7xUEpuSGtNqLjAAqpG48IA25gAM9RP6DvTC3zZXdt3Phk2sCAj49K/wBNwMJk8A8ZrLUl/Ww3Ek7gNtvbOS3oyAA0REer4q9/QFW23MSCEjMmQsmYaMDnPargZlK1Q7q9S9ybhHrklpIncCQXLCVnMYgRFVOnuulzZbLAsu546wMAwP8Ad/3Sdu4BtCceuVcBhkTAkmcT8QK47tuUKQCJjaR6eSdwiARgbT2OM1UwuljBUvcUlnEjIKn0sGGM9SAR+VPnVJtC3JhVhTsaZMN0I6+menY1nhxDAhge7yTJkGSRiO3BiO0Vu3E3sGXev0hkJUz3h8TzgitUZ5YyNay2NoNsEwJO4jBUwdvWI75xRfPHpUJBUAOZJJiYjd9PwMGKU0d9rZYq8fUBKpvjOD3YiB1AxHccTcSpLqIBAENAnbAKk46icZ7UNHRTrIzrrefSxBaD6htEkZDDpHf3ND01g3MI6naIywAPTqRPfH/VfEbzsRcL+rYgXIDbcH6YgCewz3q9tllQwHIJVMjiZz9PaPaoU297F9OQHDMTBMHgeywZgjBz7VZJEptJBIhyOvODx3x8127ZUsAvGDtJzCzOR159+aNqb+9Je4d2SoGR6ZEMehM4P96dhpI5qNKNoIYEnBXiI5Bk+5imTuUo++YwAQcLjG6MiZzFJLpPTmTwQMkm5/twYAjr+VWNzI2+kjBkjJ6gz7TxzH2orBtZwaF/yWMoH2mOm7MCfURnM1KDf8PsOdw1e2YwbTGDABysA5npUrotaRy5JY9Xz+wtavgEKrmSDu9HLAcGDleciDwas+ouMGAswrf0/wBIHEwTIOCJOap5pUrtABH1FiOuG9XJkEe2KLetgAFLpk7YkAgkHIyI2/bvXOzs1ZPD/DxG5Z2I4LgKNwBx/XB27sTOY96uNQv+pABDAgSBAJP1JnBGMk9TSllztDMC2+R/SEBEAsCAB0IgiKvbsJOyDBEJI2gxIIMYPJEzworT2ZUTuntFvqU7WggsNwIzMgSZMD4H5dF8w8BltsPUphonEyOCDJ7805aBuMV3gMAZLGJDkwSRkAcdhVdWrbdwIEs4e2i4VQAQSRyMtz2q2rM1kR00KCNxABPqnuCpO0AHKiRjt1FEuWV3KLnm7YB2EAZJBJR+OOsct810bUYohGODtkkGSsAnvGB71dLDqobBbIG5ZmcyFUgDJ7R6qkykrfuAbcBlyJILEcETC7iAI25wYznsL37LRuYANLAiAw3GOQJxz9j7Va5bbawJcGZ8tjtA2qIYAZ3SOTNEuXxAJ+nAAG5oYCMjnmDyYobKMMC1tJVnP0GRJYEEjbI2RuH4wYPNW1dtbbBRO0bSIEBcGCJODJB+0exn+WcGTgEklRGcQSQeOR9qJrtMyi2QfNUlgVUjepEGWBGAe/Bineh41VnTawuxgJ+pjIVS0j+nuFGfYCBFDu3wRGG3SSeAAcwXAM9BA4+K75P+pctFBymZ3MIMwGXBAzTN6yqsLhuhbm87htIYEiZAMj/upitCW9iUUl5VSAMyAcgDiRz+OOtWt2zta5K5IG0+o5IPpgyJIiSIyOa7uaN5LOAIBbp3AB6R1FWuapGKqbey4AQzAsQykCDtMwfcdarLslQv58Eg5QFZUbiOZPvGO3Tk1QCCPRhYIiSzDcWKxMYz9h1rQt24IXpHByYiMsPbpV00r3byqoCkgAthR6jwWg7QKFLNGnFVYC95awyOTDLgllZt0qSkjIHQsQcjmhNqAGkqZBIBABAEncGHBwYmSfTxmKYvqAduCFcjo24AkxPHPBqae2vrDqchgBu9VsTIMTDdeRGeKbyZ0vIvcuEbSxwWAXBjYxmFkxtk555FcR1UsHdgZcMVEkkCOTEIRifaYNPMHa3bLFGQ7goLAlI+0gRx9qW0Dj6Vhmyig9zhT7ATEnFN5LFAbS7yQqHbBI3EAnIAIJbuQf4al7TmFcqVDDBOBtB+pSDBaQRRX0sbmYMxYQsNIXY20+ZP9MEwMARPSi7nAUmGCBlWXJiPVCrGBntzQy44EQxlWO1iAQu4mNvYsvqETM+32qumtKWliTAEEyZI5AHQwcSYMfg/p9UAVcqPVJYusrvMxCxg9ZIpp9MiOx1C+kKzZuKqeYRI2FQZaCIU/GKVbwYkorNGSgYPuUHAgAeo+mRAKnGIB7Tjiu2NuDISJAG0wcEsS05jC5zFCsXGyER9u0SOgiCCongkCacNuQqu6kMQSMggmcnHvFZsdoT06DbDEwQYCgk4MT9OOO/Sn71mBuuWm2tC7gCw39SpkA/GYI4iuai1Acq5JEepQBAmGABPIGPelLbMAbancAQQm5onO0r+JJ+KfiUm1gI1pVaYMMTEAA9fUB8/oaLbYKq2w6QOoncfpwzFtqjbPQ8fFc0utdYeSYA8sRJDKxI2k4BDSe3OKW8y4VAIYbrhMETuJEBw0dicUrASfIM2iZidrhgp/pO2QWgcGVP/ABRW1DW0KhDhVV9khV5EtJyScdsCqpZ2He3WQCoJIck8/E0W7e8wtDsVbaPTJLbSWIO36s5JPUe2FUFZpA7NpHAY7VJ6AOPb+lon4qVax4DqHUPbsuUMwRsjnpnvUrFP9wPqRTrAexpyjuzmVjCQOT70PU2vRv3FSOmdoB7DoP71cW29TThY9MTI7+0RTH/yKixdRkZrkqAYx5ZEwexGfmirXwPQ8ZFX8RVwqGyFI2zBJ4gHb0gn9aNotOrKEVgBLbZcz3iTxx+dBZ1ay1yIIgFY+6n2zQ9PfDqGbgESoiY9j3p28mVhUi2ssOUt3DCqZVWyR2Mdzgg0O9Zui4qrc9XQAQCNvMDoBindSS7FACbS5UDA7cdDxSqv6ldpI4VpMqOn4U3TwZrkvUGu2Lf/AJQsvBwp4M9J9qpedWVWQnnMiNvYlvucU3b0h9TqJVRBBOR8VWz4gpi2Le3vMcn9qymbSSA6rUM1pfNVmvRJds7gTIC/YgGe1Da7c2ATCkzmDkiCe9WPm7yFA2j3n5HtXV00/wBXM+n+1TlbsYxUcIKLc7SVMbhvyRuHPHSlrV1leEAC74G5zGwnCt2A71p+GJvS8fORWRfpY5aO0/AHek/BrD6liiLNwAmCYkDnJ/mauL8GXJZbetgLqbGyuSxEod0/JMQPiiarUEqEVUkgDeQdwj/2J56Utfs3UYggwMETlSDxTNzWsHUsBgDAXBjGR3+KgTT2W8Osu/8Aph1VIyGMKvUmDQbOlXa77tyKe5j2gx1xQ717JPH5c9KsloBVYgwec4n+RQappjN/XqAqoxbcACSpG3uOKOPEFt2tvlgk8kncc91xj2ovg3h63ri2/MWykEyYkkcDOJ6/akdYq2rrBnDlCYYD6u1a4vaRmU4Zi3lZNPRtZFsv6vNBXYAp2FRy7Hic8ewrO1F+3EKSCSSzYJM8wB+9R/ERdHpBVo6HB+RS92/MBwB7KM/eptaooRrNskQ1tjuCqNqmOV6tHSibLa3ZtsWcEEMfSoB6HHI+KfS1aCBL1xpYelpgKMYPb71lWbqq8bd8HnoY/UVdiWcDOqtrcAG4Sretvc4A9xVvD7N23uaxtOzczOCpECRkNgGKd8auNdIvuAgIGANowDAA/vWPo9RdAKKsI87gOGHOfarTsacodr8bL3Qvlm4RJMbQMjmDxiYmrq1gtbuNaBUQPLkgEDESAds5JpnQOADuSQCTE/lxgUvoFLXDc2qbYBgTtH4kULVlJbB+JakwPLbakttSAFXe26N0SRmAT2FS3oLhUkSygKWyYYzMVUhGP+4AEhQcT/aqjUkABnk8QCcDOBS3byCjSpC6SWLbR6iAOZwI6c5piza3XSpiRA9WMjMfbP4VyyGDehiCDIaRiMyMfyKs2lf/AMreoGSWOWJOSfmjsFuwd5QoGNwHCdO/qgwJ/ejG6GtKrjyyhIEnMZMT2AOB70IawhgwUbmkZ4A4BjvR7Fi76vSXcypETC9T8xA+9N+TTWcFv/jG2vctkeXbhw0w0mTCg/2ql/XN5zNaXy5XmZaSMmehbmrJfbcrbdyqB6CCVgAklgDk0jqrbliQGKkiDBEs09QPnFaRznHyEW2/c1Kl/wAeuoxQDC44HTB/OpWfZyYco+fmaOk1vlmYzz7EEQRS15g0sGiI/wCqJ4km4CGwogH296VRd0qORn59qEd2u40l0bRiZAkcT7H35oemYbW2JwRk9P5mqi+FB3Dn6T2I6fztTGicMpMgFsHpVYpdxbz5chZWeex9qbvbSMD6Rn9aD5YzkE/8fvXFf0nv26/81klbD+FhPMRHO0MQpY/SJOCew/Kr/wCItMLV02wQ0RJHvGaVYnDfl3o2jRbjAFa1aa95njJTbvHgvoNFcC+YoPliQSPzn705pbtk3Nt0llj0leh94zx+FcvXH0spuIVslZ9Le8d/7Vj6y4Wc3IgGOPbrTi7Mu5J/Jo2r3g9xbf8AmQsIciYkrOCR0ms+xrglzcsow4ZTBn7VX/PXzaFnzGKThOZMzjE89Aa9Bq/CdOujDOGt6qMAzuLg8L0K1rjm49jl7RxSXUzbrH1+p5zVktczJ6knk9znrTHlWg6z6xGekH7xSouOHEj8vyIpzVoyeorz+tcz0tJFrmnVoLZQHj+qO1D1uqtcbCbeIiJmex6UYX7exSp9R+oEHn54irFEJCFTiZPfriKsraCovJk3L4H00zpypU7kO49f79are0UXDBG3p/Y0O8YMTx2qux44DvqFDAosR8EE/FG8ZNkMr223sVG4DABjPvSVyzvHBHvTOj8PuKhu7ZABOT0HJpdGXSasS1F8kTGe0RTnh1xSB6BI54k/OJoGrtXgBNoorcMfyjtVLQZcYmg0pcsoY8Q1yuxMe0AfmTQgHX1LI9qZ08oDgFmmOtTV+lII2tHUfyam7KqE2ZhzgNWlpvCwbLXTcCqvQnJPMAdZpmx4Wr6fczruj0iRJP8A9f3rL01xSf8AU6cY6+9aqqbRjlytRehS0DJg7f1I/aueHIpDiB3zWt474batKhFwb3/pkfSB9XsJj5rEtiJETJx/ehqtlGakriM3NUCvlAQOre3ah39SwiNxEQJmKauaW2LYUGbpILD/ANRnJ6fFbfjn+IhqLS6ZbQtohUkzJYrwAIxn9K1CqtujM5S5JRV+X4+5g6SwEur/AJglVHJAJIHsBk57UZ9U1m41zTM8MGWTgkNBJzkE8zzQ/E7zXLYEAbBBIksx+kSf2pnwLXizcRj64mFPHtP84qj6coJtNNNdtdvxiNi83lKq8A5Mcj3PX/ut86mbVqwGDKCbh2g/UQYkjkgFsDiaxvEUYMTundkgcLuPGOpyY6SKLpdaV+kxAj8f3rTuMnRn0zS939nqtJ/gmw6K5v7dwmJGJrleTva5wSATFStKMa/08Mun1bfrf8I0V0q+VvI77v7is/SuFmBg1Klcm6PpRVyaZLltXweJFHu+HeUIPBAPuJqVKzPCTRKT50A1hUlYEHAbsfcdRNBuX9hBHIqVKY5NSwGGsW4fpgkRjjFVta17bGAD85+CIOCKlSs3TNbiD1WruXjNxtxA5PYdKiHGQDUqVq7MNcdEtu1pgVOVYMDzBGRXvfC9Umstl7oAuJJMTAHRh9ulSpXXo+q4s4frYL2fNYa7nmrvjCu7QggqBu4aVJhp+/HsKX13ijuVW4AUH+0AEyIme45qVK58s0d/ZxVUL3bQHWR0mm/BdKrvsJjdie32rlSso31H6W/cG/xBofJA2tumQZEVhaWxLc5FSpVPGjn0ZOUU2ajMwQkAbe+JxWfptc6ym99hP07jt/8AzxUqUQbWjU6Pc/4mDtpFb0yArNA5gdJ45rzPgVlHLPc4UFjOYAEnFSpXWato+f8ApptdOSXvFNbrwl0G1xnDCRHSaF4trmuwTAgz8nj7CpUoeNHpumL6TX3JIUwPzq6GDkcT1qVKw3mjr0/VG2DuWZO4ASf5JNJ+H3yLhLSe341KlN3dnPrSceNeTTv2DuViYZ5YgHpwCT8iI9qT3AtNSpWqwvgaT/se8OuCw/mFfMgyFJgFuk+00jqFdn9USxM+5JkwOgk8VypRGTqjHVVXQ5cUQE7H7cQAPzNVvWPTK4zn4qVKXgI52GXSMRP71KlSuVmbP//Z')" }
    },
    content: [
      {
        // column 1
        name: 'box',
        data: {
          props: {
            flex: 1.5,
            paddingTop: { xs: 2, sm: 2, md: 2, lg: 0, xl: 0 },
            paddingBottom: { xs: 2, sm: 2, md: 2, lg: 0, xl: 0 },
            paddingRight: { xs: 0, sm: 0, md: 0, lg: 2, xl: 2 },
            paddingLeft: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }
          },
          content: [image, paragraph]
        }
      },
      {
        // column 2
        name: 'box',
        data: {
          props: {
            flex: 1
          },
          content: [
            {
              name: 'paper',
              data: {
                content: [
                  {
                    name: 'box',
                    data: {
                      props: {
                        padding: 2
                      },
                      content: [subHeadline, form]
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

const section = {
  name: 'box',
  data: {
    props: {
      paddingTop: { xs: 4, sm: 4, md: 8, lg: 12, xl: 18 },
      paddingBottom: { xs: 4, sm: 4, md: 8, lg: 12, xl: 18 },
      component: 'section'
    },
    content: [
      {
        name: 'container',
        data: {
          props: {
            maxWidth: 'md'
          },
          content: [
            {
              name: 'box',
              data: {
                props: {
                  paddingBottom: 4
                },
                content: [headline]
              }
            }
          ]
        }
      },
      {
        name: 'container',
        data: {
          props: {
            maxWidth: 'md'
          },
          content: [
            {
              name: 'box',
              data: {
                content: [columns]
              }
            }
          ]
        }
      }
    ]
  }
};

export const page = {
  id: 'your-master-degree',
  tile: 'Your Master Degree',
  data: {
    content: [section]
  }
};

export default page;
