// https://developers.facebook.com/docs/facebook-pixel
// https://business.facebook.com/events_manager/pixel/events?business_id=2717921414891407&selected_data_sources=PIXEL&selected_screen_section=DATA_SOURCES&pixel_id=2365292540183374

let initialized = false;
let debug = false;

const defaultOptions = {
  autoConfig: true,
  debug: true
};

const verifyInit = () => {
  if (!initialized) console.warn('Pixel not initialized before using calling init');
  return initialized;
};

const log = (...args) => console.info(...['[FACEBOOK PIXEL]'].concat(args));

const facebookPixel = {
  init(pixelId, advancedMatching = {}, options = defaultOptions) {
    /* eslint-disable */
    !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */

    if (!pixelId) {
      console.warn('Please insert pixel id for initializing');
    } else {
      if (options.autoConfig === false) {
        fbq('set', 'autoConfig', false, pixelId); // eslint-disable-line no-undef
      }

      fbq('init', pixelId, advancedMatching); // eslint-disable-line no-undef

      initialized = true;
      debug = options.debug;
    }
  },

  pageView() {
    if (verifyInit()) {
      // eslint-disable-next-line no-undef
      fbq('track', 'PageView');
      if (debug) log("called fbq('track', 'PageView');");
    }
  },

  track(title, data) {
    if (verifyInit()) {
      fbq('track', title, data); // eslint-disable-line no-undef
      if (debug) {
        log(`called fbq('track', '${title}');`);
        if (data) log('with data', data);
      }
    }
  },

  trackCustom(event, data) {
    if (verifyInit()) {
      fbq('trackCustom', event, data); // eslint-disable-line no-undef
      if (debug) {
        log(`called fbq('trackCustom', '${event}');`);
        if (data) log('with data', data);
      }
    }
  },

  fbq(...args) {
    if (verifyInit()) {
      fbq(...args); // eslint-disable-line no-undef
      if (debug) {
        log(`called fbq('${args.slice(0, 2).join("', '")}')`);
        if (args[2]) log('with data', args[2]);
      }
    }
  }
};

export default facebookPixel;

// const facebookPixelStandardEvents = {
//   addPaymentInfo: '[FACEBOOK PIXEL] ADD PAYMENT INFO',
//   addToCard: '[FACEBOOK PIXEL] ADD TO CARD',
//   addToWishlist: '[FACEBOOK PIXEL] ADD TO WISHLIST',
//   completeRegistration: '[FACEBOOK PIXEL] COMPLETE REGITRATION',
//   contact: '[FACEBOOK PIXEL] CONTACT',
//   customizeProduct: '[FACEBOOK PIXEL] CUSTOMIZE PRODUCT',
//   donate: '[FACEBOOK PIXEL] DONATE',
//   findLocation: '[FACEBOOK PIXEL] FIND LOCATION',
//   initiateCheckout: '[FACEBOOK PIXEL] INITIATE CHECKOUT',
//   lead: '[FACEBOOK PIXEL] LEAD',
//   purchase: '[FACEBOOK PIXEL] PURCHASE',
//   schedule: '[FACEBOOK PIXEL] SCHEDULE',
//   search: '[FACEBOOK PIXEL] SEARCH',
//   startTrial: '[FACEBOOK PIXEL] START TRIAL',
//   submitApplication: '[FACEBOOK PIXEL] SUBMIT APPLICATION',
//   subscribe: '[FACEBOOK PIXEL] SUBSCRIBE',
//   viewContent: '[FACEBOOK PIXEL] VIEW CONTENT'
// };
