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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-heading text-black">Get Your Accounts</h3>
        </div>

        <div className="space-y-4">
          <label htmlFor="quantity" className="block text-base font-heading text-black text-center">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            max="1000"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg text-2xl font-heading text-center bg-white focus:ring-0 focus:border-black transition-all duration-200"
            disabled={isLoading}
          />
          <p className="text-sm text-gray-600 text-center">min: 1 • max: 1,000</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
          <div className="space-y-2">
            <div className="text-sm font-heading text-black">total</div>
            <div className="text-4xl font-display text-black">
              ${total.toLocaleString('en-US')}
            </div>
            <div className="text-base text-gray-600">
              {quantity} account{quantity !== 1 ? 's' : ''} × $5 each
            </div>
          </div>
        </div>

        {error && (
          <div className="text-red-600 text-sm text-center bg-red-50 p-4 rounded-lg border border-red-200">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          aria-busy={isLoading}
          className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-heading py-4 px-8 rounded-lg text-lg transition-all duration-200"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              processing...
            </span>
          ) : (
            `buy now — $${total.toLocaleString('en-US')}`
          )}
        </button>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            secure payment via stripe • delivered in 1-3 days
          </p>
        </div>
      </form>
    </div>
  )
}
