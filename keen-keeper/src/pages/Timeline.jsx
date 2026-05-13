import { useContext, useState } from "react";
import { FriendContext } from "../context/FriendContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Assets Import for icons
import callIcon from "../assets/call.png"; 
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

const Timeline = () => {
  const { timeline } = useContext(FriendContext);
  const [filter, setFilter] = useState("All");


  const filteredTimeline = filter === "All" 
    ? timeline 
    : timeline.filter(item => item.type === filter);

  const getIcon = (type) => {
    switch (type) {
      case "Call": return callIcon;
      case "Text": return textIcon;
      case "Video": return videoIcon;
      default: return textIcon;
    }
  };

  return (
    <div className="bg-[#F9FBFA] min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#1A302B] mb-8">Timeline</h1>
        
        {/* Filter Dropdown */}
        <div className="relative mb-8 w-64">
          <select 
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-3 bg-white border border-gray-200 rounded-xl shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600 font-medium cursor-pointer"
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        {/* Timeline Entries List */}
        <div className="flex flex-col gap-4">
          {filteredTimeline.length > 0 ? (
            filteredTimeline.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img src={getIcon(item.type)} alt={item.type} className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.type} <span className="text-gray-400 font-normal ml-1">with {item.friendName}</span>
                  </h3>
                  <p className="text-gray-400 text-sm mt-0.5">{item.date}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-400 font-medium italic">No timeline entries found. Go to a friend's profile to log a check-in!</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Timeline;