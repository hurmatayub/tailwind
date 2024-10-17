export default function NotFound() {
  return (
    <div className="bg-[#A6B37D] h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-black mb-4">404</h1>
      <p className="text-xl text-black mb-8">
        Sorry, the page is does not exist.
      </p>
      <a
        href="/"
        className="bg-[#B99470] hover:bg-[#C5705D] text-white font-bold py-2 px-4 rounded"
      >
        Go Back Home
      </a>
    </div>
  );
}
