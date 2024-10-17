
export default function Contact() {
  return (
    <div className='bg-[#A6B37D] h-screen flex items-center justify-center'>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">

        <h1 className="text-3xl text-center font-bold mb-4">Contact Me</h1>

        <p className="text-black text-center mb-6">
          If you have any questions, comments, or just want to say hello, please don't hesitate to reach out. We'd love to hear from you!
        </p>

        <form className="max-w-md w-full">
          <div className="mb-4">
            <label className="block text-[#F05A7E] text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#F05A7E] text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#F05A7E] text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
            />
          </div>

          <button
            className="bg-[#B99470] hover:bg-[#C5705D] text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <hr className="my-6" />
      </div>
    </div>
  );
}