function About() {
  return (
    <div className="bg-slate-50/50 min-h-screen text-slate-800 antialiased font-sans">
      
      {/* Hero Header Banner */}
      <div className="bg-slate-950 text-white py-20 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-indigo-500">YASSH ENTERPRISES</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Carrying forward generations of craftsmanship with modern quality standards in metal fabrication and high-precision sheet metal solutions.
          </p>
        </div>
      </div>

      {/* Credibility Metrics Section */}
      <div className="bg-white border-b border-slate-200/80 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-600">20+</div>
              <div className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Years of Legacy</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-600">5,000+</div>
              <div className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Completed Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-600">99%</div>
              <div className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-600">Mumbai</div>
              <div className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Regional Presence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy Heritage Block */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-2xl border border-slate-200/60 shadow-sm bg-slate-100 aspect-[4/3]">
            <img
              src="/images/family-history.jpg"
              alt="Yassh Enterprises Manufacturing Heritage"
              className="w-full h-full object-cover transition duration-300 hover:scale-[1.01]"
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight mb-6 text-slate-900">
              Our Story & Beliefs
            </h2>
            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              <p>
                Our journey began with a single manual press brake and a simple belief: that premium, custom metalwork shouldn't come with compromised deadlines or cutting corners.
              </p>
              <p>
                From hand-crafted structural frames built with traditional instrumentation to modern automated fabrication matrices, we have fiercely preserved that same foundational attention to millimeter detail.
              </p>
              <p>
                Today, YASSH ENTERPRISES proudly synthesizes deep veteran experience with sophisticated assembly protocols to supply resilient metal products across Mumbai and regional commercial markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Fabrication Process */}
      <div className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-center mb-4">
            How We Work
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-sm md:text-base font-medium">
            From blue-print analysis to delivery, we maintain a highly systematic production pipeline to guarantee quality.
          </p>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 relative">
              <div className="absolute -top-5 left-8 bg-indigo-600 text-white font-extrabold rounded-lg px-4 py-1 text-sm shadow">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">Design & Blueprinting</h3>
              <p className="text-slate-450 text-sm leading-relaxed">
                We analyze your custom specifications or CAD drawings to determine the absolute best metal gauge and alloy (GI, MS, Stainless Steel, or Aluminum) for the job.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 relative">
              <div className="absolute -top-5 left-8 bg-indigo-600 text-white font-extrabold rounded-lg px-4 py-1 text-sm shadow">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">Precision Fabrication</h3>
              <p className="text-slate-450 text-sm leading-relaxed">
                Using calibrated cutting, bending, and punching machinery, we shape the raw metal sheets to stay strictly true to the planned dimensions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 relative">
              <div className="absolute -top-5 left-8 bg-indigo-600 text-white font-extrabold rounded-lg px-4 py-1 text-sm shadow">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">Rigorous QC & Delivery</h3>
              <p className="text-slate-450 text-sm leading-relaxed">
                Every completed product undergoes strict dimensional checks, uniform welding assessments, and rust-proofing treatment before safe transport.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Production Domain Grid */}
      <div className="bg-white border-b border-slate-200/80 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-center text-slate-900 mb-12">
            What We Manufacture
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-150 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">Metal Boxes</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Custom engineered heavy-gauge enclosures and specialized storage panels optimized for industrial operations.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-150 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">Roofing Sheets</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                High-tensile galvanized, premium color-coated, and weatherproof structural corrugated shielding panels.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-150 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">Fabrication Work</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                High-grade customized tooling, welding, and laser processing designed around exact engineering blueprints.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Target Industries */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-center text-slate-900 mb-4">
          Who We Serve
        </h2>
        <p className="text-slate-500 text-center max-w-xl mx-auto mb-16 text-sm font-medium">
          Our products and fabrication work are trusted across diverse industrial sectors.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">Infrastructure & Construction</h4>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Supplying high-durability roofing sheets and structural metal solutions built to withstand heavy weather conditions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">Industrial Manufacturing</h4>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Custom-crafted machinery enclosures, storage boxes, and brackets finished to exact technical specifications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">Commercial Businesses</h4>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Providing flexible batch-production and reliable metal fabrication services for local enterprises across Mumbai.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;