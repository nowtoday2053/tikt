import Stripe from 'stripe'

// Initialize Stripe with environment variable or empty string for build time
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || ''

if (!stripeSecretKey && process.env.NODE_ENV !== 'production') {
  console.warn(
    'Warning: STRIPE_SECRET_KEY is missing. Please add it to your environment variables.'
  )
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
  typescript: true,
})
