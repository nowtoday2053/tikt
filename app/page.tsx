import Manifesto from '@/components/Manifesto'
import CheckoutForm from '@/components/CheckoutForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Manifesto />
        
        {/* Checkout section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <CheckoutForm />
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
