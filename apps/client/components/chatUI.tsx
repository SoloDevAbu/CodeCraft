export default function ChatUI() {
    return (
      <div className="absolute bottom-4 right-4 w-[300px] bg-white/90 rounded-xl shadow-lg p-4">
        <h2 className="text-lg font-bold mb-2">Talk to Manager</h2>
        <textarea className="w-full h-24 p-2 border rounded resize-none" placeholder="What do you want to build?" />
        <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded">Submit</button>
      </div>
    )
  }
  