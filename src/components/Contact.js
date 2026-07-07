const Contact = () => {
  return (
    <div className="m-2 p-2 ">
      <h1 className="text-2xl font-bold my-2 text-center ">Contact Us</h1>
      <div className="flex flex-col items-center justify-center m-0 p-0">
        <p className=" text-sm my-2 p-2">
          If you have any questions, feedback, or inquiries, please feel free to
          reach out to us. We value your input and are here to assist you in any
          way we can. You can contact us through the following channels:
        </p>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-md p-2 m-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2 m-2 w-full"
          />
          <textarea
            placeholder="Message"
            className="border border-gray-300 rounded-md p-2 m-2 w-full"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 m-2 hover:bg-blue-600 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
