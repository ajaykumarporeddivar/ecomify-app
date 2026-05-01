export const metadata = { 
  title: 'Ecomify —imize your ecommerce store maximum conversions', 
 description: 'Eify helps small ecommerce store owners simplify store operations, analyze sales data and implement conversion-boosting.' 
}

function Navbar() {
  return    <nav classNamefixed top-0 left0 right-0-white/90 backdropur border-b border-zinc-100 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-zinc-900 w-8 h-8 rounded-full mr-2" />
          <h2 className="text-zinc-900 font-bold">Ecomify</h2>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-zinc-600 hover:text-zinc-900">Features</a>
          <a href="#" className="text-zinc-600 hover:text-zinc-900">Pricing</a>
          <button className="bg-zinc-900 text-white rounded-lg px-4 py-2">Open Dashboard →</button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
      <div className="bg-indigo-500 text-white rounded-full px-2 py-1 text-xs mb-4">AI-Powered SaaS</div>
      <h1 className="font-black text-5xl md:text-7xl tracking-tight leading-none mb-4">Maximize Your Store's Potential</h1>
      <p className="text-zinc-400 text-xl mt-4 mb-8">Ecomify simplifies store operations, analyzes sales data, and implements conversion-boosting strategies for small ecommerce store owners.</p>
      <div className="flex justify-center space-x-6 mb-12">
        <a href="/dashboard" className="bg-white text-zinc-900 font-bold rounded-xl px-8 py-4 shadow-lg hover:shadow-xl">Start Free Today →</a>
        <a href="/dashboard" className="border border-zinc-600 text-zinc-300 rounded-xl px-8 py-4 hover:bg-zinc-800">See It Live →</a>
      </div>
      <div className="rounded-2xl bg-zinc-800/50 border border-zinc-700 p-6 max-w-3xl mx-auto mt-12">
        <div className="bg-zinc-700 p-2 mb-4 animate-pulse" />
        <div className="bg-indigo-500 p-2 mb-4" />
        <div className="bg-emerald-500 p-2 mb-4" />
      </div>
    </div>
  );
}

function SocialProofBar() {
  return (
    <div className="bg-zinc-800/30 border-y border-zinc-700/50 py-8 flex justify-center space-x-12">
      <div className="flex flex-col items-center">
        <h3 className="font-black text-white text-4xl mb-2">10,000+</h3>
        <p className="text-zinc-400 text-sm">Users</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-black text-white text-4xl mb-2">99.9%</h3>
        <p className="text-zinc-400 text-sm">Uptime</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-black text-white text-4xl mb-2">$50M+</h3>
        <p className="text-zinc-400 text-sm">Processed</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-black text-white text-4xl mb-2">4.9★</h3>
        <p className="text-zinc-400 text-sm">Rating</p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="bg-white py-24 px-6">
      <h2 className="text-zinc-900 font-black text-4xl text-center mb-8">Everything you need to optimize your store</h2>
      <p className="text-zinc-500 text-lg text-center mb-12">Ecomify provides a user-friendly platform to streamline store operations, analyze sales data, and implement conversion-boosting strategies.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
          <div className="bg-indigo-100 p-3 rounded-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.005v5.94a8.25 8.25 0 0014 0V3.005M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-zinc-900 font-bold mb-2">User Authentication</h3>
          <p className="text-zinc-600 text-sm">Securely log in to your Ecomify account and access your store's data and optimization tools.</p>
        </div>
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
          <div className="bg-emerald-100 p-3 rounded-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M12 6v6m0 6l-8-8m8 8l-8-8" />
            </svg>
          </div>
          <h3 className="text-zinc-900 font-bold mb-2">Sales Data Analysis</h3>
          <p className="text-zinc-600 text-sm">Analyze your sales data and gain insights to optimize your store's performance.</p>
        </div>
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
          <div className="bg-indigo-100 p-3 rounded-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M10 10a2 2 0 011-2h2a2 2 0 012 2v.01" />
            </svg>
          </div>
          <h3 className="text-zinc-900 font-bold mb-2">Conversion-Boosting Strategies</h3>
          <p className="text-zinc-600 text-sm">Implement conversion-boosting strategies to maximize your store's potential.</p>
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="bg-zinc-50 py-24 px-6">
      <h2 className="text-zinc-900 font-black text-4xl text-center mb-8">How Ecomify works</h2>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center">
          <h3 className="text-indigo-500 text-4xl mb-2">1</h3>
          <h4 className="text-zinc-900 font-bold mb-2">Sign up for Ecomify</h4>
          <p className="text-zinc-600 text-sm">Create an account and access our user-friendly platform.</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-indigo-500 text-4xl mb-2">2</h3>
          <h4 className="text-zinc-900 font-bold mb-2">Connect your store</h4>
          <p className="text-zinc-600 text-sm">Connect your ecommerce store to Ecomify and start optimizing.</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-indigo-500 text-4xl mb-2">3</h3>
          <h4 className="text-zinc-900 font-bold mb-2">Analyze and optimize</h4>
          <p className="text-zinc-600 text-sm">Analyze your sales data and implement conversion-boosting strategies.</p>
        </div>
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="bg-white py-24 px-6">
      <h2 className="text-zinc-900 font-black text-4xl text-center mb-8">Simple, transparent pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
          <h3 className="text-zinc-900 font-bold mb-2">Free</h3>
          <h4 className="text-zinc-900 font-bold text-4xl mb-4">$0/mo</h4>
          <ul className="text-zinc-600 text-sm space-y-2 mb-6">
            <li>1 user</li>
            <li>1 store</li>
            <li>Limited features</li>
          </ul>
          <a href="/dashboard" className="bg-zinc-900 text-white rounded-lg px-4 py-2">Get Started</a>
        </div>
        <div className="bg-zinc-900 text-white rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow scale-105">
          <h3 className="text-white font-bold mb-2">Pro</h3>
          <h4 className="text-white font-bold text-4xl mb-4">$49/mo</h4>
          <ul className="text-zinc-400 text-sm space-y-2 mb-6">
            <li>Unlimited users</li>
            <li>Unlimited stores</li>
            <li>Full features</li>
          </ul>
          <a href="/dashboard" className="bg-white text-zinc-900 rounded-lg px-4 py-2">Get Started</a>
        </div>
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
          <h3 className="text-zinc-900 font-bold mb-2">Enterprise</h3>
          <h4 className="text-zinc-900 font-bold text-4xl mb-4">Custom</h4>
          <ul className="text-zinc-600 text-sm space-y-2 mb-6">
            <li>Everything in Pro</li>
            <li>SLA</li>
            <li>Support</li>
          </ul>
          <a href="#" className="bg-zinc-900 text-white rounded-lg px-4 py-2">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-zinc-50 py-24 px-6">
      <h2 className="text-zinc-900 font-black text-4xl text-center mb-8">What our customers say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
          <p className="text-zinc-600 text-sm mb-4">Ecomify has been a game-changer for our business. We've seen a significant increase in sales and revenue.</p>
          <div className="flex items-center space-x-4">
            <div className="bg-zinc-900 w-8 h-8 rounded-full" />
            <div>
              <h4 className="text-zinc-900 font-bold mb-1">Emily Chen</h4>
              <p className="text-zinc-600 text-sm">Owner, Small Online Boutique</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
          <p className="text-zinc-600 text-sm mb-4">Ecomify's user-friendly platform and excellent customer support have helped us to optimize our store and increase conversions.</p>
          <div className="flex items-center space-x-4">
            <div className="bg-zinc-900 w-8 h-8 rounded-full" />
            <div>
              <h4 className="text-zinc-900 font-bold mb-1">David Lee</h4>
              <p className="text-zinc-600 text-sm">Founder, E-commerce Startup</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
          <p className="text-zinc-600 text-sm mb-4">Ecomify's analytics and insights have helped us to make data-driven decisions and improve our store's performance.</p>
          <div className="flex items-center space-x-4">
            <div className="bg-zinc-900 w-8 h-8 rounded-full" />
            <div>
              <h4 className="text-zinc-900 font-bold mb-1">Sarah Kim</h4>
              <p className="text-zinc-600 text-sm">E-commerce Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-24 px-6 text-center">
      <h2 className="text-white font-black text-4xl mb-4">Launch your store's growth with Ecomify</h2>
      <p className="text-zinc-400 text-lg mb-8">Sign up for a free trial and start optimizing your store today.</p>
      <a href="/dashboard" className="bg-white text-indigo-600 rounded-lg px-4 py-2">Launch Dashboard →</a>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-zinc-900 text-zinc-400 py-12 px-6">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-4">
          <div className="bg-zinc-100 w-8 h-8 rounded-full" />
          <h2 className="text-zinc-100 font-bold">Ecomify</h2>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-zinc-100 hover:text-white">Features</a>
          <a href="#" className="text-zinc-100 hover:text-white">Pricing</a>
          <a href="#" className="text-zinc-100 hover:text-white">Dashboard</a>
        </div>
      </div>
      <p className="text-zinc-400 text-sm text-center">Built with NEXUS OS</p>
      <p className="text-zinc-400 text-sm text-center">&copy; 2025 Ecomify. All rights reserved.</p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProofBar />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <CtaSection />
      <Footer />
    </>
  );
}