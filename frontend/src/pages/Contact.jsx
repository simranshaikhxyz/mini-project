function Contact() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 antialiased font-sans py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100 mb-3 uppercase tracking-wider">
            Get In Touch
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
            Reach out to our Mumbai facility for custom sheet bending orders, site measurement bookings, and pricing quotes.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* Contact Details Card */}
          <div className="bg-white border border-slate-150 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-mono text-slate-400">Headquarters</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1 mb-8">
                YASSH ENTERPRISES
              </h2>

              <div className="space-y-6">
                {/* Phone Component */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-slate-600 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321.988l-1.305 1.4c-.736.788-.647 2.018.145 2.761 1.054.95 2.233 1.777 3.52 2.454.78.41 1.714.28 2.28-.466l.947-1.02a1.3 1.3 0 011.096-.347l2.2.553a1 1 0 01.724.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Support</h4>
                    <a
                      href="tel:8689846099"
                      className="text-base font-semibold text-indigo-650 hover:text-indigo-700 block mt-1 transition"
                    >
                      +91 86898 46099
                    </a>
                  </div>
                </div>

                {/* Email Component */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-slate-600 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</h4>
                    <a
                      href="mailto:baayassh@gmail.com"
                      className="text-base font-semibold text-indigo-650 hover:text-indigo-700 block mt-1 transition"
                    >
                      baayassh@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address Component */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-slate-600 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Factory Address</h4>
                    <p className="text-slate-600 text-sm font-medium mt-1 leading-relaxed">
                      Room No. 50, L Block, <br />
                      Jogeshwari East, <br />
                      Mumbai, Maharashtra - 400060
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* External Navigation CTA */}
            <div className="mt-10 pt-6 border-t border-slate-100">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Interactive Map Embed Card */}
          <div className="rounded-2xl border border-slate-150 overflow-hidden shadow-sm h-[450px] md:h-auto min-h-[350px] bg-slate-100 relative">
            <iframe
              title="YASSH ENTERPRISES Location"
              src="https://www.google.com/maps?q=Jogeshwari%20East%20Mumbai&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="border-0 w-full h-full absolute inset-0"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;