import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id === parseInt(id));
        setFriend(found);
      });
  }, [id]);

  if (!friend) return <div className="text-center mt-10">Loading Friend Details...</div>;

  return (
    <div className="bg-[#F9FBFA] min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <button onClick={() => navigate(-1)} className="mb-6 text-gray-600 font-semibold flex items-center gap-2">
          ← Back to Friends
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Profile Info */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
            <img src={friend.picture} alt={friend.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h2 className="text-3xl font-bold text-gray-800">{friend.name}</h2>
            <p className="text-gray-500 mt-2">{friend.bio}</p>
          </div>

          {/* Right: Interaction Section (Timeline logic next) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Log New Interaction</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="p-4 border rounded-xl hover:bg-blue-50">📞 Call</button>
              <button className="p-4 border rounded-xl hover:bg-green-50">💬 Text</button>
              <button className="p-4 border rounded-xl hover:bg-purple-50">📹 Video</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;