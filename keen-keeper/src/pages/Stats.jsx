import { useContext } from "react";
import { FriendContext } from "../context/FriendContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Stats = () => {
  const { timeline } = useContext(FriendContext);

  // Calculate data for chart
  const data = [
    { name: "Call", value: timeline.filter((t) => t.type === "Call").length },
    { name: "Text", value: timeline.filter((t) => t.type === "Text").length },
    { name: "Video", value: timeline.filter((t) => t.type === "Video").length },
  ];

  const COLORS = ["#1F4139", "#8B5CF6", "#34A853"];

  return (
    <div className="bg-[#F9FBFA] min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A302B] mb-8 md:mb-12">
          Friendship Analytics
        </h1>

        <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <p className="text-gray-500 font-semibold mb-6 md:mb-10 text-center md:text-left">
            By Interaction Type
          </p>

          {/* Responsive Height: Mobile 300px, Desktop 450px */}
          <div className="h-[300px] md:h-[450px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius="50%" 
                  outerRadius="80%" 
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      className="outline-none"
                    />
                  ))}
                </Pie>
                
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                  }}
                  cursor={{ fill: 'transparent' }}
                />
                
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  wrapperStyle={{ paddingTop: "20px" }}
                />
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