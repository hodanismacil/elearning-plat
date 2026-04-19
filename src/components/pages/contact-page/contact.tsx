const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Have questions? We’d love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE - INFO */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>

          <p className="text-gray-600 mb-6">
            You can contact us anytime. We will respond as soon as possible.
          </p>

          <div className="space-y-4 text-gray-600">
            <p>📧 Email: support@elearning.com</p>
            <p>📞 Phone: +252 63 0000000</p>
            <p>📍 Location: Hargeisa, Somaliland</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white p-8 rounded-2xl shadow">

          <form className="space-y-5">

            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;