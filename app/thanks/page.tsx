import Link from 'next/link'

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
        {/* Success icon */}
        <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        {/* Main thank you message */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-balance text-gray-900 text-crisp">
            Thanks for your purchase!
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-balance leading-relaxed text-gray-700 text-crisp">
            In 1–3 days, the accounts will be ready and sent to you!
          </p>
        </div>
        
        {/* Additional info */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-3xl border border-gray-200 max-w-2xl mx-auto smooth-hover">
          <p className="text-lg md:text-xl text-balance text-gray-700 leading-relaxed text-crisp">
            We'll deliver to the email you used at checkout.
            <br />
            <span className="font-semibold">Check spam/promotions if you don't see anything.</span>
          </p>
        </div>
        
        {/* Back to home button */}
        <Link 
          href="/"
          className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-indigo-200 shadow-lg text-crisp"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
