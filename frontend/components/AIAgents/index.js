
"use client";
import { useState } from "react";
import { Sparkles, LineChart, ShoppingBag, Tags, User, X } from "lucide-react";

export default function AIAgentsPopup({ onClose, productInfo }) {
  const [activeAgent, setActiveAgent] = useState(null);

  // Configure agents with dynamic product information
  const agents = [
    {
      id: 'fashion-trend',
      name: 'FASHION TREND ANALYZER',
      description: `Analyze how this ${productInfo?.type || 'item'} fits with current fashion trends and get styling recommendations.`,
      icon: <LineChart className="h-5 w-5" />,
      color: 'from-purple-500 to-pink-500',
      message: `This ${productInfo?.type || 'item'} features elements that align with this season's trends. Would you like styling recommendations?`
    },
    {
      id: 'recommendation',
      name: 'AI RECOMMENDATION AGENT',
      description: `Get personalized style suggestions to pair with this ${productInfo?.name || 'item'}.`,
      icon: <Sparkles className="h-5 w-5" />,
      color: 'from-blue-500 to-indigo-600',
      message: `This ${productInfo?.type || 'item'} would pair well with other items in our collection. Would you like to see complete outfit recommendations?`
    },
    {
      id: 'bag',
      name: 'BAG AGENT',
      description: `Let our AI help you decide if this ${productInfo?.type || 'item'} complements your existing wardrobe.`,
      icon: <ShoppingBag className="h-5 w-5" />,
      color: 'from-amber-500 to-orange-600',
      message: `The ${productInfo?.name || 'item'} is a versatile piece that can elevate your wardrobe. Would you like to analyze how it fits with your style?`
    },
    {
      id: 'bargain',
      name: 'BARGAIN AGENT',
      description: 'Find similar styles at different price points or get alerts for price drops.',
      icon: <Tags className="h-5 w-5" />,
      color: 'from-green-500 to-emerald-600',
      message: `This ${productInfo?.type || 'item'} is currently at ${productInfo?.price || 'regular price'}. Would you like to be notified if it goes on sale?`
    },
    {
      id: 'avatar',
      name: 'AVATAR AGENT',
      description: `Create a virtual model to see how this ${productInfo?.type || 'item'} looks on your body type.`,
      icon: <User className="h-5 w-5" />,
      color: 'from-rose-500 to-red-600',
      message: `Create a virtual model with your measurements to see how this ${productInfo?.type || 'item'} fits your body type.`
    }
  ];

  const handleAgentSelect = (id) => {
    setActiveAgent(id === activeAgent ? null : id);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 border-white ">
      <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border-zinc-900">
        <div className="sticky top-0 bg-zinc-900  text-white p-4 flex justify-between items-center ">
          <h2 className="text-3xl font-medium tracking-wider font-[theater]">FASHION AI ASSISTANT</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-zinc-900 text-lg mb-6 font-normal">
            Enhance your shopping experience with our AI-powered fashion assistants. Select an agent below:
          </p>
          
          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {agents.map((agent) => (
              <div 
                key={agent.id}
                className={`relative overflow-hidden border cursor-pointer transition-all duration-300 ${
                  activeAgent === agent.id ? 'border-black' : 'border-zinc-900 hover:border-gray-600 '
                }`}
                onClick={() => handleAgentSelect(agent.id)}
              >
                <div className="p-4">
                  <div className={`w-10 h-10 rounded-full mb-3 flex items-center justify-center bg-gradient-to-br ${agent.color}`}>
                    <div className="text-white">
                      {agent.icon}
                    </div>
                  </div>
                  <h3 className="text-normal font-[theater]  text-xl tracking-wider uppercase font-medium mb-2">{agent.name}</h3>
                  {activeAgent === agent.id && (
                    <p className="text-normal text-zinc-900 mt-2">{agent.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Agent Detail Section */}
          {activeAgent && (
            <div className="border border-black p-6 mt-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-medium mb-4 font-[theater]">
                    {agents.find(a => a.id === activeAgent)?.name}
                  </h2>
                  <p className="text-zinc-900  text-md mb-6">
                    {agents.find(a => a.id === activeAgent)?.description}
                  </p>
                  
                  {/* AI Interaction Area */}
                  <div className="border border-zinc-900 p-4 mb-6">
                    <p className="text-zinc-800 text-md italic ">
                      {agents.find(a => a.id === activeAgent)?.message}
                    </p>
                  </div>
                  
                  <button className="w-full bg-black text-white font-medium py-3 px-4 font-[theater] text-2xl">
                    ACTIVATE {agents.find(a => a.id === activeAgent)?.name}
                  </button>
                </div>
                <div className="w-full md:w-1/3 aspect-square bg-gray-100 flex items-center justify-center">
                  <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${agents.find(a => a.id === activeAgent)?.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {agents.find(a => a.id === activeAgent)?.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}