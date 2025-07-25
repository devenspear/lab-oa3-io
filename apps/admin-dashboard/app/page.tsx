"use client";

import React from "react";
import { BarChart3, Users, FileText, TrendingUp, Eye, Clock, Calendar } from "lucide-react";

const StatCard = ({ title, value, icon: Icon, change, color }: any) => (
  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        <p className={`text-sm mt-2 ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {change >= 0 ? '+' : ''}{change}% from last month
        </p>
      </div>
      <div className={`${color} p-3 rounded-lg`}>
        <Icon size={24} className="text-white" />
      </div>
    </div>
  </div>
);

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "2,847", icon: Users, change: 12.5, color: "bg-blue-600" },
    { title: "Blog Posts", value: "42", icon: FileText, change: 8.2, color: "bg-green-600" },
    { title: "Page Views", value: "18.2K", icon: Eye, change: 15.3, color: "bg-purple-600" },
    { title: "Conversion Rate", value: "3.2%", icon: TrendingUp, change: -2.1, color: "bg-orange-600" },
  ];

  const recentActivity = [
    { action: "New blog post published", time: "2 hours ago", type: "content" },
    { action: "User registration spike", time: "4 hours ago", type: "users" },
    { action: "Analytics report generated", time: "6 hours ago", type: "system" },
    { action: "Content updated", time: "1 day ago", type: "content" },
    { action: "System maintenance completed", time: "2 days ago", type: "system" },
  ];

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening with your OA3 Lab applications.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Clock className="mr-2" size={20} />
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    activity.type === 'content' ? 'bg-blue-400' :
                    activity.type === 'users' ? 'bg-green-400' : 'bg-yellow-400'
                  }`}></div>
                  <span className="text-gray-300">{activity.action}</span>
                </div>
                <span className="text-gray-500 text-sm">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Analytics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <BarChart3 className="mr-2" size={20} />
            Quick Analytics
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Landing Page Performance</span>
                <span className="text-green-400">+24%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Blog Engagement</span>
                <span className="text-blue-400">+18%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">User Retention</span>
                <span className="text-purple-400">+12%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="mt-8 bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
          <Calendar className="mr-2" size={20} />
          Action Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="font-medium text-white mb-2">Content Review</h3>
            <p className="text-gray-300 text-sm mb-3">Review and approve 3 pending blog posts</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors">
              Review Now
            </button>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="font-medium text-white mb-2">Analytics Report</h3>
            <p className="text-gray-300 text-sm mb-3">Generate monthly performance report</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
              Generate
            </button>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="font-medium text-white mb-2">System Update</h3>
            <p className="text-gray-300 text-sm mb-3">Schedule maintenance for next week</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors">
              Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 