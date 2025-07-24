'use client';

import { useState, useEffect } from 'react';
import FeedbackForm from '../components/FeedbackForm';

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [search, setSearch] = useState('');

  const fetchFeedbacks = async () => {
    const res = await fetch(`/api/feedback${search ? `?search=${search}` : ''}`);
    const data = await res.json();
    setFeedbacks(data.data);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [search]);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <FeedbackForm />

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Submitted Feedback</h2>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search feedback..."
          className="w-full p-2 mb-4 border rounded"
        />

        {feedbacks.length === 0 ? (
          <p className="text-gray-600">No feedback found.</p>
        ) : (
          <ul className="space-y-4">
            {feedbacks.map(fb => (
              <li key={fb._id} className="border p-4 rounded bg-gray-50">
                <p className="font-semibold">{fb.name} <span className="text-sm text-gray-500">({fb.email})</span></p>
                <p>{fb.message}</p>
                <p className="text-sm text-gray-400">{new Date(fb.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
