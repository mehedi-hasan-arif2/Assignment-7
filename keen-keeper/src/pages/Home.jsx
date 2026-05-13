import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FriendCard from "../components/FriendCard";
import Footer from "../components/Footer";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Requirement 10.2: Loading Spinner
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#F9FBFA]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#2D4A43]"></div>
        <p className="mt-4 text-[#2D4A43] font-semibold">Loading Friends...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F9FBFA] min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="text-center mt-16 mb-10 px-4">
        <h1 className="text-5xl font-bold text-[#1A1A1A] mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend,
          and nurture the relationships that matter most.
        </p>
        <button className="bg-[#2D4A43] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 mx-auto hover:bg-[#233a34] transition">
          <span className="text-xl">+</span> Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 mb-16">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800">{friends.length}</h2>
          <p className="text-gray-500 mt-1">Total Friends</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800">
            {friends.filter((f) => f.status === "on-track").length}
          </h2>
          <p className="text-gray-500 mt-1">On Track</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800">
            {friends.filter((f) => f.status !== "on-track").length}
          </h2>
          <p className="text-gray-500 mt-1">Need Attention</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800">12</h2>
          <p className="text-gray-500 mt-1">Interactions This Month</p>
        </div>
      </div>

      {/* Friends Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Your Friends</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;