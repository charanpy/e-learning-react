import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_KEY ||
    'pk_test_51HT5nIDKV0ASSP3YmtkvyT5WvT5g4L8i0Hu8XHtj4ZeirCVBAN12SVpg7MWLCLgFxUTsKuhG4jatUduiIdeB0CuT007W1d0e8Y'
);

export default stripePromise;
