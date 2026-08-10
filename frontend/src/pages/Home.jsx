import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased font-sans min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-32 px-6">
        {/* Subtle grid pattern background accent */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-6 uppercase tracking-wider">
            Industrial Grade Manufacturing
          </span>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            YASSH ENTERPRISES
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-4">
            All Kinds of Tin Work & Sheet Metal Manufacturing
          </p>

          <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Roofing Sheets • Galvanized Sheets • Rain Gutters (Parnala) • Custom Heavy Fabrication
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 text-sm"
            >
              Explore Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all duration-200 text-sm font-semibold"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Why Choose Us
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Engineered for durability, tailored for your architectural requirements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-950 mb-2">
              Quality Material
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Premium grade corrosion-resistant roofing sheets and structural metals built to last.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-950 mb-2">
              Custom Fabrication
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Customized widths, profiles, and bending matching your precise blueprint parameters.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-950 mb-2">
              Affordable Pricing
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Highly optimized operational cost structures passing savings straight down to you.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-950 mb-2">
              Fast Delivery
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              On-schedule order processing guarantees rapid transit and minimal project downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white border-y border-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Our Core Offerings
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Explore some of our structural product standards below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-slate-100/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full uppercase">Popular</span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">
                  Color Roofing Sheet
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Highly weather-resistant coated roofing sheets available in a wide selection of RAL colors, sizes, and architectural designs.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/50 flex justify-end">
                <Link to="/products" className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1">
                  Learn Specs →
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-slate-100/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 bg-slate-200/50 px-2.5 py-1 rounded-full uppercase">Standard</span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">
                  Galvanized Sheet (GI)
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Heavy-duty, corrosion-proof zinc galvanized sheets, perfectly suited for demanding industrial enclosures and residential installations.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/50 flex justify-end">
                <Link to="/products" className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1">
                  Learn Specs →
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-slate-100/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase">Utility</span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">
                  Rain Gutter (Parnala)
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Custom-molded, leak-proof rainwater drainage components tailored to prevent water accumulation across buildings.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/50 flex justify-end">
                <Link to="/products" className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1">
                  Learn Specs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-4xl mx-auto py-24 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Trusted by the Community
          </h2>
        </div>

        <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-8 md:p-12 text-center relative">
          {/* Visual double quote decoration */}
          <span className="absolute top-4 left-6 text-6xl text-slate-100 select-none font-serif">“</span>
          
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-lg text-slate-600 italic leading-relaxed max-w-2xl mx-auto">
            "Excellent quality materials and highly reliable timelines. We ordered custom galvanizing and gutter fixtures for our local warehouse project, and everything was shaped precisely to spec."
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 font-bold text-slate-600 flex items-center justify-center">
              RC
            </div>
            <div className="text-left">
              <h4 className="font-bold text-slate-900 text-sm">Raman Chawla</h4>
              <p className="text-slate-400 text-xs">Project Manager, local build site</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer Banner */}
      <section id="contact" className="bg-slate-900 text-white py-16 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Have Custom Tin Work or Fabrication Requirements?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Get in touch with our operations team directly. We support customized widths, custom tooling, and bulk commercial order fulfillment.
          </p>
          <div className="pt-2">
            <a
              href="mailto:yasshenterprises@example.com"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md transition text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              yasshenterprises@example.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;