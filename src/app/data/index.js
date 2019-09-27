import { firestore } from '../firebase';

import code from './custom-domains/code';
import aShlb6aISwbwrh8yfhw7 from './public-pages/aShlb6aISwbwrh8yfhw7';
// import DmNZG8yWl6zMgv6DroNH from './public-pages/DmNZG8yWl6zMgv6DroNH';
// import SGq3kXQmScOUCXHmRLzV from './public-pages/SGq3kXQmScOUCXHmRLzV';
// import CQGaZQxVhXUdEYD5kEmx from './basic-forms/CQGaZQxVhXUdEYD5kEmx';
// import vhHr4FEEE2SKEr3IC4cX from './lists/vhHr4FEEE2SKEr3IC4cX';

firestore
  .collection('custom-domains')
  .doc('code')
  .set(code);

firestore
  .collection('custom-domains')
  .doc('code.martechpoint.com')
  .set(code);

// firestore
//   .collection('public-pages')
//   .doc('DmNZG8yWl6zMgv6DroNH')
//   .set(DmNZG8yWl6zMgv6DroNH);

// firestore
//   .collection('public-pages')
//   .doc('SGq3kXQmScOUCXHmRLzV')
//   .set(SGq3kXQmScOUCXHmRLzV);

firestore
  .collection('public-pages')
  .doc('aShlb6aISwbwrh8yfhw7')
  .set(aShlb6aISwbwrh8yfhw7);

// firestore
//   .collection('basic-forms')
//   .doc('CQGaZQxVhXUdEYD5kEmx')
//   .set(CQGaZQxVhXUdEYD5kEmx);

// firestore
//   .collection('lists')
//   .doc('vhHr4FEEE2SKEr3IC4cX')
//   .update(vhHr4FEEE2SKEr3IC4cX);

console.log('[FIREBASE] Document Updated');
