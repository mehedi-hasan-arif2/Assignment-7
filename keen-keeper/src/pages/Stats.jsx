import { useContext } from "react";
import { FriendContext } from "../context/FriendContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Stats = () => {
  const { timeline } = useContext(FriendContext);

  // Calculate data for chart
  const data = [
    { name: "Call", value: timeline.filter(t => t.type === "Call").length },
    { name: "Text", value: timeline.filter(t => t.type === "Text").length },
    { name: "Video", value: timeline.filter(t => t.type === "Video").length },
  ];

  const COLORS = ["#1F4139", "#8B5CF6", "#34A853"];

  return (
    <div className="bg-[#F9FBFA] min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#1A302B] mb-12">Friendship Analytics</h1>
        
        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 font-semibold mb-10">By Interaction Type</p>
          
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Stats;