// pages/index.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4" id="grid">
      <div className="card bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow">
        <img src="/path/to/image1.jpg" alt="Image 1" className="card-image w-full h-32 object-cover rounded-md" />
        <h2 className="card-title text-lg font-semibold mt-4">Title 1</h2>
        <p className="card-description text-sm mt-2">This is a description for card 1.</p>
      </div>
      <div className="card bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow">
        <img src="/path/to/image2.jpg" alt="Image 2" className="card-image w-full h-32 object-cover rounded-md" />
        <h2 className="card-title text-lg font-semibold mt-4">Title 2</h2>
        <p className="card-description text-sm mt-2">This is a description for card 2.</p>
      </div>
      <div className="card bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow">
        <img src="/path/to/image3.jpg" alt="Image 3" className="card-image w-full h-32 object-cover rounded-md" />
        <h2 className="card-title text-lg font-semibold mt-4">Title 3</h2>
        <p className="card-description text-sm mt-2">This is a description for card 3.</p>
      </div>
      <div className="card bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow">
        <img src="/path/to/image4.jpg" alt="Image 4" className="card-image w-full h-32 object-cover rounded-md" />
        <h2 className="card-title text-lg font-semibold mt-4">Title 4</h2>
        <p className="card-description text-sm mt-2">This is a description for card 4.</p>
      </div>
      <div className="card bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow">
        <img src="/path/to/image5.jpg" alt="Image 5" className="card-image w-full h-32 object-cover rounded-md" />
        <h2 className="card-title text-lg font-semibold mt-4">Title 5</h2>
        <p className="card-description text-sm mt-2">This is a description for card 5.</p>
      </div>
      <div className="card bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow">
        <img src="/path/to/image6.jpg" alt="Image 6" className="card-image w-full h-32 object-cover rounded-md" />
        <h2 className="card-title text-lg font-semibold mt-4">Title 6</h2>
        <p className="card-description text-sm mt-2">This is a description for card 6.</p>
      </div>
      <div className="card bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow">
        <img src="/path/to/image7.jpg" alt="Image 7" className="card-image w-full h-32 object-cover rounded-md" />
        <h2 className="card-title text-lg font-semibold mt-4">Title 7</h2>
        <p className="card-description text-sm mt-2">This is a description for card 7.</p>
      </div>
      <div className="card bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow">
        <img src="/path/to/image8.jpg" alt="Image 8" className="card-image w-full h-32 object-cover rounded-md" />
        <h2 className="card-title text-lg font-semibold mt-4">Title 8</h2>
        <p className="card-description text-sm mt-2">This is a description for card 8.</p>
      </div>
    </div>
  );
}

export default Home;
