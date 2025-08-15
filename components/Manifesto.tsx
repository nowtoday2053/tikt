export default function Manifesto() {
  return (
    <div className="text-center space-y-16">
      {/* Main headline */}
      <div className="space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-7xl font-black tracking-tight text-balance leading-[0.85] text-gray-900 text-crisp">
          STOP GETTING BLOCKED.
          <br />
          <span className="gradient-text">START GOING VIRAL.</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed text-crisp">
          Clean, ready-to-roll US-based TikTok accounts. No shadows. No "suspicious login detected" nonsense.
        </p>
      </div>

      {/* Manifesto content */}
      <div className="space-y-10 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
        <div className="space-y-8">
          <p className="text-balance font-medium text-gray-800 text-crisp">
            The algorithm doesn't care where you're from.
            <br />
            But the market does.
          </p>

          <p className="text-balance text-gray-700 text-crisp">
            You want reach? You want ads to actually run?
            <br />
            You want trends before the rest of the planet even wakes up?
          </p>

          <p className="text-balance font-bold text-gray-900 text-xl md:text-2xl text-crisp">
            You need US-based TikTok accounts.
          </p>

          <p className="text-balance text-gray-700 text-crisp">
            These aren't burner accounts from some sketchy farm in the middle of nowhere.
            <br />
            These are clean, ready-to-roll US accounts.
            <br />
            No shadows. No "suspicious login detected" nonsense.
          </p>

          <p className="text-balance text-gray-700 text-crisp">
            We don't sell followers. We sell opportunity.
            <br />
          </p>

          <p className="text-balance text-gray-700 text-crisp">
            You tell us how many you want.
            <br />
          
            We deliver in 1–3 days.
          </p>

          <p className="text-balance font-bold text-gray-900 text-xl text-crisp">
            No refunds. No excuses.
            <br />
            Just accounts.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-crisp mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Three simple steps to get your accounts
          </p>
        </div>
        
        <div className="relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
            <div className="relative">
              <div className="absolute top-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30"></div>
              <div className="absolute top-0 right-0 w-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"></div>
            </div>
          </div>
          
          <div className="grid gap-12 md:gap-8 md:grid-cols-3 relative">
            <div className="group text-center smooth-hover">
              <div className="relative mx-auto mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/25">
                  <span className="text-3xl font-black text-white text-crisp">1</span>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 text-crisp">Choose quantity</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                Select how many accounts you need using our simple form
              </p>
            </div>
            
            <div className="group text-center smooth-hover">
              <div className="relative mx-auto mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/25">
                  <span className="text-3xl font-black text-white text-crisp">2</span>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 text-crisp">Pay securely</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                Complete checkout with our secure Stripe payment system
              </p>
            </div>
            
            <div className="group text-center smooth-hover">
              <div className="relative mx-auto mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-pink-500/25">
                  <span className="text-3xl font-black text-white text-crisp">3</span>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 text-crisp">Get delivered</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                Receive your accounts via email within 1-3 business days
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Price callout */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-3xl border border-gray-200 max-w-md mx-auto">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-gray-900">Simple pricing</h3>
          <div className="flex items-center justify-center">
            <span className="text-5xl md:text-6xl font-black text-gray-900">$5</span>
            <span className="text-xl font-medium text-gray-600 ml-2">per account</span>
          </div>
        </div>
      </div>
    </div>
  )
}
