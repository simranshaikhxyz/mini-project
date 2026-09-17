import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-slate-50 text-slate-900 antialiased font-sans min-h-screen overflow-x-hidden">

      {/* =========================================================
          ABOUT HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-slate-950">

        {/* Background Image */}

        <img
          src="https://res.cloudinary.com/cnxvqb67/image/upload/v1789466619/WhatsApp_Image_2026-09-15_at_1.32.54_PM.jpg"
          alt="Yassh Enterprises metal fabrication"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/30" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-28">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10">

              <span className="w-2 h-2 bg-indigo-400 rounded-full" />

              <span className="text-indigo-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">
                About Yassh Enterprises
              </span>

            </div>


            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight mt-6">

              26 Years of

              <br />

              <span className="text-indigo-400">
                Metal Craftsmanship
              </span>

            </h1>


            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-7 max-w-2xl mt-6">

              A family-led journey built around metal fabrication,
              practical solutions and long-term experience.

            </p>

          </div>

        </div>


        {/* Bottom Stats */}

        <div className="relative z-20 border-t border-white/10 bg-slate-950/95 backdrop-blur-md">

          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">

            <div className="px-4 sm:px-6 py-5 border-r border-white/10">

              <p className="text-indigo-400 text-xl sm:text-2xl font-black">
                26+
              </p>

              <p className="text-slate-400 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] mt-1">
                Years Legacy
              </p>

            </div>


            <div className="px-4 sm:px-6 py-5 border-r md:border-r border-white/10">

              <p className="text-indigo-400 text-xl sm:text-2xl font-black">
                CUSTOM
              </p>

              <p className="text-slate-400 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] mt-1">
                Fabrication
              </p>

            </div>


            <div className="px-4 sm:px-6 py-5 border-r border-white/10">

              <p className="text-indigo-400 text-xl sm:text-2xl font-black">
                SMALL
              </p>

              <p className="text-slate-400 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] mt-1">
                To Bulk Orders
              </p>

            </div>


            <div className="px-4 sm:px-6 py-5">

              <p className="text-indigo-400 text-xl sm:text-2xl font-black">
                PUNE
              </p>

              <p className="text-slate-400 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] mt-1">
                Industrial Hub
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          OUR STORY
      ========================================================= */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Image */}

            <div className="relative order-2 lg:order-1">

              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 border-l-4 border-t-4 border-indigo-500 rounded-tl-xl" />

              <div className="rounded-2xl overflow-hidden shadow-2xl">

                <img
                  src="https://res.cloudinary.com/cnxvqb67/image/upload/v1789466619/WhatsApp_Image_2026-09-15_at_1.32.54_PM.jpg"
                  alt="Yassh Enterprises"
                  className="w-full h-[300px] sm:h-[380px] lg:h-[460px] object-cover"
                />

              </div>


              {/* Experience Badge */}

              <div className="absolute -bottom-5 right-4 sm:right-6 bg-slate-950 text-white rounded-xl px-5 sm:px-7 py-4 shadow-xl">

                <p className="text-indigo-400 text-2xl sm:text-3xl font-black">
                  26+
                </p>

                <p className="text-slate-400 text-[8px] sm:text-[9px] uppercase tracking-[0.2em]">
                  Years Experience
                </p>

              </div>

            </div>


            {/* Story */}

            <div className="order-1 lg:order-2">

              <span className="text-indigo-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em]">
                Our Story
              </span>


              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mt-4">

                Built on

                <span className="text-indigo-600">
                  {" "}Experience
                </span>

                <br />

                & Trust

              </h2>


              <div className="w-16 h-1 bg-indigo-600 rounded-full my-6" />


              <p className="text-slate-600 text-sm md:text-base leading-7">
                Yassh Enterprises represents a family legacy in metal
                craftsmanship developed over 26 years of experience.
                Our work is focused on creating practical metal
                solutions for different requirements.
              </p>


              <p className="text-slate-600 text-sm md:text-base leading-7 mt-4">
                From custom metal boxes and storage solutions to
                sheet-metal fabrication and industrial requirements,
                we focus on understanding what the customer needs
                before developing the solution.
              </p>


              <p className="text-slate-600 text-sm md:text-base leading-7 mt-4">
                Our approach combines hands-on fabrication experience
                with a simple and practical way of working with
                customers.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHAT WE DO
      ========================================================= */}

      <section className="bg-slate-100 py-16 sm:py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">

            <span className="text-indigo-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em]">
              What We Do
            </span>


            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 leading-tight">

              Practical Metal

              <span className="text-indigo-600">
                {" "}Solutions
              </span>

            </h2>


            <p className="text-slate-500 text-sm md:text-base leading-7 mt-5 max-w-2xl mx-auto">
              Our work covers a range of metal fabrication requirements,
              from individual custom products to larger business orders.
            </p>

          </div>


          {/* Services */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {/* Card 1 */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-200 transition-all duration-300">

              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
                01
              </div>


              <h3 className="text-lg font-bold mt-6">
                Custom Metal Boxes
              </h3>


              <p className="text-slate-500 text-sm leading-6 mt-3">
                Metal storage boxes and enclosures made according
                to required dimensions and applications.
              </p>

            </div>


            {/* Card 2 */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-200 transition-all duration-300">

              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
                02
              </div>


              <h3 className="text-lg font-bold mt-6">
                Sheet-Metal Fabrication
              </h3>


              <p className="text-slate-500 text-sm leading-6 mt-3">
                Fabrication work based on required material,
                dimensions and practical usage.
              </p>

            </div>


            {/* Card 3 */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-200 transition-all duration-300">

              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
                03
              </div>


              <h3 className="text-lg font-bold mt-6">
                Industrial Solutions
              </h3>


              <p className="text-slate-500 text-sm leading-6 mt-3">
                Practical metal products and fabrication solutions
                for workshops, businesses and industries.
              </p>

            </div>


            {/* Card 4 */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-200 transition-all duration-300">

              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
                04
              </div>


              <h3 className="text-lg font-bold mt-6">
                Small & Bulk Orders
              </h3>


              <p className="text-slate-500 text-sm leading-6 mt-3">
                Requirements can range from individual products
                to larger quantities for businesses.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          OUR VALUES
      ========================================================= */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left */}

            <div>

              <span className="text-indigo-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em]">
                What Matters To Us
              </span>


              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 leading-tight">

                The Way We

                <span className="text-indigo-600">
                  {" "}Work
                </span>

              </h2>


              <p className="text-slate-500 text-sm md:text-base leading-7 mt-5 max-w-xl">
                Our approach is based on understanding requirements,
                practical fabrication and maintaining consistency in
                the work we deliver.
              </p>

            </div>


            {/* Values */}

            <div className="space-y-4">

              {/* Value 1 */}

              <div className="flex gap-4 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl">

                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black shrink-0">
                  01
                </div>


                <div>

                  <h3 className="font-bold text-lg">
                    Understanding Requirements
                  </h3>

                  <p className="text-slate-500 text-sm leading-6 mt-1">
                    We focus on understanding the dimensions,
                    material and intended application.
                  </p>

                </div>

              </div>


              {/* Value 2 */}

              <div className="flex gap-4 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl">

                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black shrink-0">
                  02
                </div>


                <div>

                  <h3 className="font-bold text-lg">
                    Practical Fabrication
                  </h3>

                  <p className="text-slate-500 text-sm leading-6 mt-1">
                    Solutions are developed around actual usage
                    instead of unnecessary complexity.
                  </p>

                </div>

              </div>


              {/* Value 3 */}

              <div className="flex gap-4 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl">

                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black shrink-0">
                  03
                </div>


                <div>

                  <h3 className="font-bold text-lg">
                    Long-Term Relationships
                  </h3>

                  <p className="text-slate-500 text-sm leading-6 mt-1">
                    We aim to build lasting relationships through
                    consistent communication and service.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          HOW WE WORK
      ========================================================= */}

      <section className="bg-slate-950 py-16 sm:py-20 lg:py-24 relative overflow-hidden">

        {/* Glow */}

        <div className="absolute right-0 top-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/10 blur-[120px] rounded-full" />


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">

            <span className="text-indigo-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em]">
              How We Work
            </span>


            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black mt-4 leading-tight">

              From Requirement

              <span className="text-indigo-400">
                {" "}to Fabrication
              </span>

            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

            {/* Step 1 */}

            <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 sm:p-7">

              <span className="text-indigo-400 text-3xl font-black">
                01
              </span>


              <h3 className="text-white text-lg font-bold mt-5">
                Discuss
              </h3>


              <p className="text-slate-400 text-sm leading-6 mt-3">
                Share your required dimensions, material, quantity
                and application.
              </p>

            </div>


            {/* Step 2 */}

            <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 sm:p-7">

              <span className="text-indigo-400 text-3xl font-black">
                02
              </span>


              <h3 className="text-white text-lg font-bold mt-5">
                Fabricate
              </h3>


              <p className="text-slate-400 text-sm leading-6 mt-3">
                The product is fabricated according to the discussed
                requirements and specifications.
              </p>

            </div>


            {/* Step 3 */}

            <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 sm:p-7">

              <span className="text-indigo-400 text-3xl font-black">
                03
              </span>


              <h3 className="text-white text-lg font-bold mt-5">
                Complete
              </h3>


              <p className="text-slate-400 text-sm leading-6 mt-3">
                The completed product is checked and prepared for
                delivery or collection.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          REACH & ORDERS
      ========================================================= */}

      <section className="bg-slate-100 py-16 sm:py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Pune */}

            <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-8">

              <span className="text-indigo-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em]">
                Based In
              </span>


              <h3 className="text-2xl sm:text-3xl font-black mt-3">
                Pune
              </h3>


              <p className="text-slate-500 text-sm leading-6 mt-3">
                Located in Pune, Yassh Enterprises serves fabrication
                and metal requirements for businesses, workshops and
                industrial applications.
              </p>

            </div>


            {/* Orders */}

            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-7 sm:p-8">

              <span className="text-indigo-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em]">
                Order Requirements
              </span>


              <h3 className="text-white text-2xl sm:text-3xl font-black mt-3">
                Small to Bulk
              </h3>


              <p className="text-slate-400 text-sm leading-6 mt-3">
                Whether you require a single custom product or a
                larger quantity, requirements can be discussed based
                on the project.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="bg-slate-900 py-12 sm:py-14 lg:py-16 text-center text-white relative overflow-hidden">

        <div className="absolute -right-32 -top-32 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/10 blur-[100px] rounded-full" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">

          <span className="text-indigo-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em]">
            Work With Yassh
          </span>


          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-2">

            Have a Metal

            <span className="text-indigo-400">
              {" "}Requirement?
            </span>

          </h2>


          <p className="text-slate-300 text-xs md:text-sm leading-6 max-w-xl mx-auto mt-3">
            Tell us what you need and discuss your custom fabrication
            or product requirement with Yassh Enterprises.
          </p>


          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">

            <Link
              to="/contact"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold text-xs transition w-full sm:w-auto"
            >
              Contact Us →
            </Link>


            <Link
              to="/products"
              className="border border-slate-700 hover:border-slate-500 text-white px-6 py-3 rounded-xl font-bold text-xs transition w-full sm:w-auto"
            >
              Browse Products
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;