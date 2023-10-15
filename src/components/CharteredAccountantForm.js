import React, { useState } from 'react';

const CharteredAccountantForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [intro, setIntro] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [taskComplexity, setTaskComplexity] = useState('');
  const [price, setPrice] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [testimonials, setTestimonials] = useState('');
  const [about, setAbout] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to the server for storage in MongoDB
    try {
      const response = await fetch('/api/chartered-accountants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          image,
          intro,
          rating,
          reviewCount,
          taskComplexity,
          price,
          deliveryTime,
          testimonials,
          about,
        }),
      });

      if (response.status === 200) {
        // Successful submission
        setSuccessMessage('Details saved successfully.');
        setErrorMessage(''); // Clear any previous error messages
      } else {
        // Handle errors or show error messages
        setErrorMessage('Invalid credentials.');
        setSuccessMessage(''); // Clear any previous success messages
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
      setErrorMessage('An error occurred.');
      setSuccessMessage(''); // Clear any previous success messages
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Chartered Accountant Details Form</h2>
        {successMessage && <div className="text-green-600">{successMessage}</div>}
        {errorMessage && <div className="text-red-600">{errorMessage}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="id" className="block font-semibold">ID</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="name" className="block font-semibold">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="image" className="block font-semibold">Image URL</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="intro" className="block font-semibold">Introduction</label>
            <textarea
              id="intro"
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="rating" className="block font-semibold">Rating</label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="reviewCount" className="block font-semibold">Review Count</label>
            <input
              type="number"
              id="reviewCount"
              value={reviewCount}
              onChange={(e) => setReviewCount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="taskComplexity" className="block font-semibold">Task Complexity</label>
            <input
              type="text"
              id="taskComplexity"
              value={taskComplexity}
              onChange={(e) => setTaskComplexity(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="price" className="block font-semibold">Price</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="deliveryTime" className="block font-semibold">Delivery Time</label>
            <input
              type="text"
              id="deliveryTime"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="testimonials" className="block font-semibold">Testimonials</label>
            <textarea
              id="testimonials"
              value={testimonials}
              onChange={(e) => setTestimonials(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="about" className="block font-semibold">About</label>
            <textarea
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CharteredAccountantForm;
