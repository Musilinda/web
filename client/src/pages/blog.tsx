export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Musilinda Blog</h1>
            <a href="/" className="text-indigo-600 hover:text-indigo-800">← Back to Home</a>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Understanding Music Theory Through Practice
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how hands-on practice can revolutionize your understanding of music theory fundamentals.
                </p>
                <div className="text-sm text-gray-500">
                  March 15, 2024
                </div>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  The Power of Interval Training
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how interval training can improve your musical ear and overall comprehension.
                </p>
                <div className="text-sm text-gray-500">
                  March 10, 2024
                </div>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Building Musical Intuition
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore techniques for developing natural musical instincts beyond traditional methods.
                </p>
                <div className="text-sm text-gray-500">
                  March 5, 2024
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}