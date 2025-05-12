'use client'

import axios from 'axios';
import { useState } from 'react';

export default function ChatUI() {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const createProject = async () => {
    try {
      setIsLoading(true);
      setDescription('');
      const response = await axios.post('http://localhost:8080/api/v1/new-project', {
        name: 'My Project',
        description: description,
      }, {
        withCredentials: true,
      });
      console.log('Project created:', response.data);
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  return (
    <div className="absolute bottom-4 right-4 w-[300px] bg-white/90 rounded-xl shadow-lg p-4">
      <h2 className="text-lg font-bold mb-2">Talk to Manager</h2>
      <input
        className="w-full h-24 p-2 border rounded resize-none"
        placeholder="What do you want to build?"
        value={description}
        onChange={handleInputChange}
      />
        {isLoading && <div className="text-gray-400 font-semibold mt-2 text-center">Creating project</div>}
      <button
        className="mt-2 w-full bg-blue-600 text-white py-2 rounded"
        onClick={createProject}
      >
        Submit
      </button>
    </div>
  );
}
