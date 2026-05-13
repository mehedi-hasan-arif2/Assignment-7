import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    if (status === "overdue") return "bg-[#FF4D4D] text-white";
    if (status === "almost due") return "bg-[#FFB84D] text-white";
    return "bg-[#D1FAE5] text-[#065F46]"; // on-track
  };

  return (
    <div 
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-md transition-all cursor-pointer"
    >
      <img 
        src={friend.picture} 
        alt={friend.name} 
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-gray-100"
      />
      <h3 className="text-xl font-bold text-gray-800">{friend.name}</h3>
      <p className="text-gray-400 text-sm mb-3">{friend.days_since_contact}d ago</p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.tags.map((tag, index) => (
          <span key={index} className="bg-[#D1FAE5] text-[#065F46] text-[10px] px-3 py-1 rounded-full uppercase font-bold">
            {tag}
          </span>
        ))}
      </div>

      <div className={`inline-block px-4 py-1 rounded-full text-xs font-semibold ${getStatusColor(friend.status)}`}>
        {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
      </div>
    </div>
  );
};

export default FriendCard;