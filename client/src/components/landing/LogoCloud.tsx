export default function LogoCloud() {
  return (
    <section className="py-12 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8">Trusted by music enthusiasts worldwide</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner 1</span>
            </div>
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner 2</span>
            </div>
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner 3</span>
            </div>
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
