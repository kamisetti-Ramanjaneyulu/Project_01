import React from 'react'

const Test = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 bg-gray-100 rounded-lg shadow-md px-4 py-4">
          <h3 className="font-bold text-lg mb-4">CONTENT</h3>
          <ul className="list-disc space-y-2">
            <li className="text-gray-600">RECORDING</li>
            <li className="text-gray-600">GROUPS</li>
            <li className="text-gray-600">ASSESSMENTS</li>
          </ul>
        </div>
        <div className="col-span-3 bg-white rounded-lg shadow-md px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Course Outline</h3>
            <button className="text-blue-500 hover:underline">VISIT</button>
          </div>
          <div className="border-b border-gray-200 mb-4 pb-4">
            <h4 className="font-bold text-base mb-2">Pre-reads</h4>
            <p className="text-gray-600">
              Below E-pdf by Goodfellow is a great book to start reading
              additional information about Deep Learning and its applications.
            </p>
            <div className="flex items-center mt-2">
              <p className="text-gray-600 mr-2">Prework Computer vision with CNNs.pdf</p>
              <a href="#" className="text-blue-500 hover:underline">VISIT</a>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-gray-600 mr-2">Deep Learning -E pdf by Goodfellow et.al</p>
              <a href="#" className="text-blue-500 hover:underline">VISIT</a>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">Look at only following topics (2x speed if you are already familiar)</p>
              <ul className="list-disc pl-4 space-y-1 mt-2">
                <li className="text-gray-600">1. Partial derivatives</li>
                <li className="text-gray-600">2. Gradient and directional derivatives</li>
                <li className="text-gray-600">3. Partial derivative and gradient (articles)</li>
              </ul>
              <a href="#" className="text-blue-500 hover:underline mt-2">KhanAcademy_Videos</a>
            </div>
          </div>
          <div className="pt-4">
            <h4 className="font-bold text-base mb-2">Other reads</h4>
            <div className="flex items-center mt-2">
              <p className="text-gray-600 mr-2">Filtering</p>
              <a href="#" className="text-blue-500 hover:underline">VISIT</a>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-gray-600 mr-2">Image Gradients</p>
              <a href="#" className="text-blue-500 hover:underline">VISIT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
