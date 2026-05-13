import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { FriendContext } from "../context/FriendContext"; // context import
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);
  const { addInteraction } = useContext(FriendContext); // add function

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id === parseInt(id));
        setFriend(found);
      });
  }, [id]);

  // Handle Quick Check-In actions
  const handleAction = (type) => {
    addInteraction(type, friend.name);
    toast.success(`${type} interaction logged!`);
  };

  const handleDelete = () => {
    toast.error(`Deleted ${friend.name} successfully!`);
    navigate("/");
  };

  const handleSnooze = () => {
    toast.success("Relationship snoozed for 2 weeks!");
  };

  if (!friend) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="bg-[#F9FBFA] min-h-screen">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
            <img src={friend.picture} alt={friend.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h2 className="text-2xl font-bold text-gray-800">{friend.name}</h2>
            <div className="flex justify-center gap-2 my-3">
              <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase">{friend.status}</span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold uppercase">{friend.tags[0]}</span>
            </div>
            <p className="text-gray-500 italic mb-1">"{friend.bio}"</p>
            <p className="text-xs text-gray-400">Preferred: email</p>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button onClick={handleSnooze} className="w-full py-4 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-2 font-semibold">🔔 Snooze 2 Weeks</button>
            <button className="w-full py-4 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-2 font-semibold">📥 Archive</button>
            <button onClick={handleDelete} className="w-full py-4 bg-white border border-red-100 text-red-500 rounded-xl flex items-center justify-center gap-2 font-semibold">🗑️ Delete</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h4 className="text-4xl font-bold text-gray-800">{friend.days_since_contact}</h4>
              <p className="text-gray-400 text-sm mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h4 className="text-4xl font-bold text-gray-800">{friend.goal}</h4>
              <p className="text-gray-400 text-sm mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h4 className="text-2xl font-bold text-gray-800">Feb 27, 2026</h4>
              <p className="text-gray-400 text-sm mt-1">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">Relationship Goal</h3>
              <p className="text-gray-500">Connect every <span className="font-bold text-black">{friend.goal} days</span></p>
            </div>
            <button className="px-5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-gray-600">Edit</button>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => handleAction("Call")} className="bg-white py-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center gap-2 hover:bg-gray-50 transition">
                <span className="text-2xl">📞</span>
                <span className="font-semibold text-gray-700">Call</span>
              </button>
              <button onClick={() => handleAction("Text")} className="bg-white py-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center gap-2 hover:bg-gray-50 transition">
                <span className="text-2xl">💬</span>
                <span className="font-semibold text-gray-700">Text</span>
              </button>
              <button onClick={() => handleAction("Video")} className="bg-white py-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center gap-2 hover:bg-gray-50 transition">
                <span className="text-2xl">📹</span>
                <span className="font-semibold text-gray-700">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FriendDetails;