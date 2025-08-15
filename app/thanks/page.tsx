import Link from 'next/link'

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
        {/* Brand Header */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full brand-gradient text-white font-display text-lg font-bold neo-shadow">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </div>
          TokSupply
        </div>

        {/* Success icon */}
        <div className="relative">
          <div className="mx-auto w-32 h-32 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center neo-shadow">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="absolute -inset-8 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full blur-2xl"></div>
        </div>
        
        {/* Main thank you message */}
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-display font-black leading-tight text-balance text-gray-900 text-crisp">
            Payment Successful!
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-balance leading-relaxed text-gray-700 text-crisp">
            Your premium accounts will be delivered within 1–3 business days
          </p>
        </div>
        
        {/* Additional info */}
        <div className="relative overflow-hidden">
          <div className="gradient-border">
            <div className="bg-white p-12 md:p-16 rounded-3xl max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-display font-semibold text-green-700">Order Confirmed</span>
                </div>
                <p className="text-lg md:text-xl text-balance text-gray-700 leading-relaxed text-crisp">
                  We'll deliver your premium TikTok accounts to the email address you used at checkout.
                  <br />
                  <span className="font-semibold text-gray-900">Pro tip: Check your spam/promotions folder just in case.</span>
                </p>
                <div className="flex items-center justify-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email Delivery
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Accounts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to home button */}
        <Link 
          href="/"
          className="inline-block brand-gradient hover:shadow-2xl text-white font-display font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-400 transform hover:scale-[1.02] focus:ring-4 focus:ring-indigo-200 neo-shadow relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <span className="relative">← Return to TokSupply</span>
        </Link>
      </div>
    </main>
  )
}
