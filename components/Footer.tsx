export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Legal Disclaimer */}
          <div className="text-sm text-gray-600 leading-relaxed">
            <h3 className="font-heading text-black text-base mb-4">legal disclaimer</h3>
            <p>
              buying/selling social media accounts may be restricted by platform terms of service and by local laws. 
              by purchasing, you confirm you have reviewed and will comply with all applicable rules and regulations. 
              we do not guarantee performance or longevity of accounts.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              © 2025 toksupply. all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
