const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-md p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900">
          Contact Us
        </h1>
        <p className="text-sm text-gray-600 text-center mt-2">
          If you have any questions, feedback, or inquiries, please feel free to
          reach out to us. We value your input and are here to assist you.
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FC8019] focus:ring-2 focus:ring-[#FC8019]/20 transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FC8019] focus:ring-2 focus:ring-[#FC8019]/20 transition"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FC8019] focus:ring-2 focus:ring-[#FC8019]/20 transition"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#FC8019] hover:bg-[#F97316] text-white font-bold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
