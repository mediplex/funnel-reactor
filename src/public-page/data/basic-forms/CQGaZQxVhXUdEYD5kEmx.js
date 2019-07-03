const formData = {
  redirectTo: '/thank-you-for-your-request',
  elements: [
    {
      inputType: 'text-input',
      name: 'Email',
      label: 'Where should we send you the info?',
      placeholder: 'Your best email',
      multiline: false,
      validation: {
        required: {},
        email: { errorMessage: 'invalid email' },
        matches: {
          // eslint-disable-next-line
          regex:
            '^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$',
          errorMessage: 'Invalid Email'
        }
      }
    },
    {
      inputType: 'text-input',
      name: 'Name',
      label: 'What is you name?',
      placeholder: 'Your Name',
      validation: { required: {} }
    },
    {
      inputType: 'text-input',
      name: 'WhatsApp',
      label: 'Where should we call you?',
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
          groupLabel: 'group 1',
          values: [
            'Experimental Psychology',
            'Financial Economics',
            'Logistics Management',
            'Media and Communication Studies',
            'Private Law Graduate Program',
            'Marketing Communication and Public Relations',
            'Political Science and International Relations',
            'Sustainable Energy',
            'Design Studies',
            'Design Management',
            'Yacht Design'
          ]
        },
        {
          values: [
            'M.SC. In Intelligent Engineering Systems',
            'M.SC. in Bioengineering',
            'M.SC. in Computer Engineering',
            'M.SC. in Electrical and Electronics Engineering',
            'M.SC. In Industrial Engineering',
            'M.SC. In Financial Mathematics',
            'M.SC. In Advanced Architectural Design',
            'M.SC. In Architecture',
            'M.SC. In Applied Statistics',
            'MBA',
            'Executive MBA'
          ]
        }
      ]
    }
  ]
};

export default formData;
