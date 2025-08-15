'use client'

import { useState } from 'react'

export default function CheckoutForm() {
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const total = quantity * 5

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1
    if (value >= 1 && value <= 1000) {
      setQuantity(value)
      setError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Client-side validation
    if (quantity < 1 || quantity > 1000) {
      setError('Quantity must be between 1 and 1000')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start checkout')
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-sm mx-auto smooth-hover">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-crisp">Get started</h3>
          <p className="text-gray-600 text-crisp">Choose your quantity and checkout securely</p>
        </div>

        <div className="space-y-4">
          <label htmlFor="quantity" className="block text-sm font-semibold text-gray-900 text-center text-crisp">
            Number of accounts
          </label>
          <div className="relative">
            <input
              type="number"
              id="quantity"
              min="1"
              max="1000"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-2xl font-bold text-center bg-white focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 text-crisp hover:border-gray-300"
              disabled={isLoading}
            />
          </div>
          <p className="text-xs text-gray-500 text-center text-crisp">Min: 1 • Max: 1000</p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center border border-gray-200 transition-all duration-300 hover:shadow-lg">
          <div className="text-sm font-medium text-gray-600 mb-1 text-crisp">Total amount</div>
          <div className="text-4xl font-black text-gray-900 text-crisp">
            ${total.toLocaleString('en-US')}
          </div>
          <div className="text-sm text-gray-500 mt-1 text-crisp">
            {quantity} account{quantity !== 1 ? 's' : ''} × $5 each
          </div>
        </div>

        {error && (
          <div className="text-red-600 text-sm text-center bg-red-50 p-4 rounded-2xl border border-red-100">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          aria-busy={isLoading}
          className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl focus:ring-4 focus:ring-indigo-200 shadow-lg text-crisp"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            `Buy now — $${total.toLocaleString('en-US')}`
          )}
        </button>

        <div className="text-center space-y-2">
          <p className="text-xs text-gray-500 text-crisp">
            🔒 Secure payment via Stripe
          </p>
          <p className="text-xs text-gray-400 text-crisp">
            No refunds • Delivered in 1-3 days
          </p>
        </div>
      </form>
    </div>
  )
}
