export default function Services() {
  return (
    <div className="bg-[#A6B37D] h-screen">
      <div className=" container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold text-center text-black mb-4">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">Service 1</h2>
            <p className="text-black">This is service 1</p>
          </div>

          <div className="bg-white shadow-md p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">Service 2</h2>
            <p className="text-black">This is service 2</p>
          </div>

          <div className="bg-white shadow-md p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">Service 3</h2>
            <p className="text-black">This is service 3</p>
          </div>

          <div className="bg-white shadow-md p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">Service 4</h2>
            <p className="text-black">This is service 4</p>
          </div>
        </div>
      </div>
      <div>
        <Image />
      </div>
    </div>
  );
}
