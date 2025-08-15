import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { quantity } = body

    // Server-side validation
    if (!quantity || typeof quantity !== 'number' || !Number.isInteger(quantity)) {
      return NextResponse.json(
        { error: 'Quantity must be a valid integer' },
        { status: 400 }
      )
    }

    if (quantity < 1 || quantity > 1000) {
      return NextResponse.json(
        { error: 'Quantity must be between 1 and 1000' },
        { status: 400 }
      )
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    if (!siteUrl) {
      throw new Error('NEXT_PUBLIC_SITE_URL is not configured')
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'US-based TikTok account(s)',
            },
            unit_amount: 500, // $5.00 in cents
          },
          quantity: quantity,
        },
      ],
      success_url: `${siteUrl}/thanks?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/`,
      allow_promotion_codes: false,
      customer_creation: 'always',
      billing_address_collection: 'auto',
      phone_number_collection: {
        enabled: false,
      },
      metadata: {
        quantity: quantity.toString(),
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session. Please try again.' },
      { status: 500 }
    )
  }
}
