export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
            Contact
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">
            Have a question? Get in touch.
          </h1>
          <p className="mt-4 text-gray-600 leading-8">
            Send us a message about products, orders, or toy recommendations and we’ll
            respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Customer Support</h2>
              <p className="text-gray-600 mt-2">
                support@kidsshop.com
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Phone</h2>
              <p className="text-gray-600 mt-2">+880 1234 567890</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Location</h2>
              <p className="text-gray-600 mt-2">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <form className="space-y-6">
            <label className="block">
              <span className="text-gray-700 font-medium">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-primary focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 font-medium">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-primary focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 font-medium">Message</span>
              <textarea
                rows="5"
                placeholder="Tell us how we can help"
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-primary focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-primary text-white rounded-2xl px-6 py-3 font-semibold hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
