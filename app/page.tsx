import Manifesto from '@/components/Manifesto'
import CheckoutForm from '@/components/CheckoutForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero and manifesto section */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <Manifesto />
      </div>
      
      {/* Checkout section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-crisp">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-crisp">
              Choose your quantity and get your US TikTok accounts delivered in 1-3 days
            </p>
          </div>
          <CheckoutForm />
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
