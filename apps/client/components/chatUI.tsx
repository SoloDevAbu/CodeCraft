'use client';

import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ChatUI() {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const createProject = async () => {
    if (!description.trim()) return;
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'http://localhost:8080/api/v1/new-project',
        { name: 'My Project', description },
        { withCredentials: true }
      );
      
      router.push(`/workspace/${data.data.id}`);
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute bottom-4 right-4 w-[300px] bg-white/90 rounded-xl shadow-lg p-4 z-20">
      <h2 className="text-lg font-bold mb-2">Talk to Manager</h2>
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="What do you want to build?"
      />
      {isLoading && (
        <div className="text-gray-500 text-center mt-2">Creating project…</div>
      )}
      <button
        onClick={createProject}
        disabled={isLoading}
        className="mt-2 w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
      >
        Submit
      </button>
    </div>
  );
}
