# US TikTok Accounts Sales Website

A production-ready Next.js 14 application for selling US-based TikTok accounts via Stripe Checkout.

## Features

- **Clean Landing Page**: Manifesto-style sales copy with quantity selection
- **Stripe Integration**: Secure payment processing via Checkout Sessions
- **Responsive Design**: Mobile-first with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Server-side Validation**: Quantity validation on both client and server
- **SEO Optimized**: Meta tags and Open Graph support

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payments**: Stripe Checkout Sessions
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy the environment example file:

```bash
cp env.example .env.local
```

Configure the following environment variables in `.env.local`:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_... # or sk_live_... for production

# Site Configuration  
NEXT_PUBLIC_SITE_URL=http://localhost:3000 # or your production domain
```

### 3. Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. For testing, use keys starting with `sk_test_...`
4. For production, use keys starting with `sk_live_...`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 5. Build for Production

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `STRIPE_SECRET_KEY` | Your Stripe secret key (test or live) | `sk_test_...` |
| `NEXT_PUBLIC_SITE_URL` | Your site's URL (used for Stripe redirects) | `https://yourdomain.com` |

## Testing with Stripe

For testing payments, use Stripe's test card numbers:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0025 0000 3155`

Use any future expiry date and any 3-digit CVC.

## Project Structure

```
├── app/
│   ├── api/checkout/route.ts    # Stripe Checkout Session API
│   ├── thanks/page.tsx          # Success page
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Landing page
│   └── globals.css              # Global styles
├── components/
│   ├── CheckoutForm.tsx         # Payment form with quantity selection
│   ├── Manifesto.tsx            # Sales copy component
│   └── Footer.tsx               # Disclaimer footer
├── lib/
│   └── stripe.ts                # Stripe client configuration
└── README.md
```

## Key Features

### Payment Flow

1. User selects quantity (1-1000 accounts)
2. Real-time total calculation ($5 per account)
3. Client and server-side validation
4. Stripe Checkout Session creation
5. Redirect to Stripe's hosted checkout
6. Success/cancel redirects back to site

### Security

- Server-side quantity validation
- Environment variable validation
- Error handling with user-friendly messages
- No sensitive data stored locally

### Responsive Design

- Mobile-first approach
- Sticky checkout form on desktop
- Clean typography with generous spacing
- Dark/light mode support

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Ensure your hosting platform supports:
- Node.js runtime
- Environment variables
- API routes

## Customization

### Styling

All styles use Tailwind CSS. Modify `tailwind.config.ts` for theme customization.

### Copy

Edit `components/Manifesto.tsx` to update sales copy while maintaining the aggressive, direct tone.

### Pricing

Update the `unit_amount` in `app/api/checkout/route.ts` (500 = $5.00 in cents).

### Quantity Limits

Modify validation limits in both `components/CheckoutForm.tsx` and `app/api/checkout/route.ts`.

## Legal Considerations

This application includes a disclaimer about platform Terms of Service compliance. Ensure you:

1. Review TikTok's Terms of Service
2. Comply with local laws regarding account sales
3. Consider additional legal disclaimers
4. Implement proper business registration if required

## Support

For issues with:
- **Stripe Integration**: Check Stripe Dashboard for error logs
- **Deployment**: Verify environment variables are set correctly
- **Styling**: Ensure Tailwind CSS is properly configured
