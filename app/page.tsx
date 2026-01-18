"use client";

import { useState } from "react";
import {
  Video,
  TrendingUp,
  Lightbulb,
  Calendar,
  BarChart3,
  Target,
  Zap,
  MessageSquare,
  Hash,
  FileText,
  Sparkles,
  Clock,
} from "lucide-react";

interface VideoIdea {
  title: string;
  description: string;
  trending: boolean;
  estimatedViews: string;
}

interface AnalysisResult {
  score: number;
  recommendations: string[];
  tags: string[];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("ideas");
  const [niche, setNiche] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoIdeas, setVideoIdeas] = useState<VideoIdea[]>([]);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [contentPlan, setContentPlan] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const generateIdeas = () => {
    setLoading(true);
    setTimeout(() => {
      const ideas: VideoIdea[] = [
        {
          title: `${niche} For Beginners - Complete Guide 2024`,
          description: "Comprehensive beginner-friendly tutorial covering fundamentals",
          trending: true,
          estimatedViews: "50K-100K",
        },
        {
          title: `Top 10 ${niche} Mistakes to Avoid`,
          description: "Common pitfalls and how to overcome them",
          trending: true,
          estimatedViews: "30K-70K",
        },
        {
          title: `${niche} Tips That Actually Work in 2024`,
          description: "Proven strategies and actionable advice",
          trending: false,
          estimatedViews: "20K-50K",
        },
        {
          title: `I Tried ${niche} For 30 Days - Here's What Happened`,
          description: "Personal journey and transformation story",
          trending: true,
          estimatedViews: "40K-90K",
        },
        {
          title: `${niche} vs [Alternative] - Which is Better?`,
          description: "Detailed comparison with pros and cons",
          trending: false,
          estimatedViews: "25K-60K",
        },
      ];
      setVideoIdeas(ideas);
      setLoading(false);
    }, 1500);
  };

  const analyzeVideo = () => {
    setLoading(true);
    setTimeout(() => {
      const result: AnalysisResult = {
        score: Math.floor(Math.random() * 30) + 70,
        recommendations: [
          "Add numbers to your title (e.g., '7 Ways', 'Top 10')",
          "Include current year for freshness signals",
          "Use power words like 'Ultimate', 'Proven', 'Secret'",
          "Keep title under 60 characters for full display",
          "Add emotional triggers or curiosity gaps",
          "Include your main keyword at the beginning",
        ],
        tags: [
          videoTitle.toLowerCase(),
          `${videoTitle.toLowerCase()} tutorial`,
          `${videoTitle.toLowerCase()} 2024`,
          `how to ${videoTitle.toLowerCase()}`,
          `${videoTitle.toLowerCase()} for beginners`,
          `${videoTitle.toLowerCase()} tips`,
          `${videoTitle.toLowerCase()} guide`,
          `best ${videoTitle.toLowerCase()}`,
        ],
      };
      setAnalysis(result);
      setLoading(false);
    }, 1500);
  };

  const generateContentPlan = () => {
    setLoading(true);
    setTimeout(() => {
      const plan = [
        {
          week: 1,
          videos: [
            { day: "Monday", topic: "Introduction & Channel Overview", type: "Evergreen" },
            { day: "Thursday", topic: "Trending Topic Response", type: "Trending" },
          ],
        },
        {
          week: 2,
          videos: [
            { day: "Monday", topic: "Tutorial: Beginner Basics", type: "Educational" },
            { day: "Thursday", topic: "Q&A with Audience", type: "Engagement" },
          ],
        },
        {
          week: 3,
          videos: [
            { day: "Monday", topic: "Advanced Tips & Tricks", type: "Educational" },
            { day: "Thursday", topic: "Behind the Scenes", type: "Personal" },
          ],
        },
        {
          week: 4,
          videos: [
            { day: "Monday", topic: "Month Recap & Results", type: "Update" },
            { day: "Thursday", topic: "Collaboration/Guest Feature", type: "Growth" },
          ],
        },
      ];
      setContentPlan(plan);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-lg bg-black/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 p-2 rounded-lg">
                <Video className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold gradient-text">YouTube Automation Agent</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-gray-400">AI-Powered Growth Tools</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Grow Your YouTube Channel with{" "}
            <span className="gradient-text">AI-Powered Tools</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Generate viral video ideas, optimize titles, plan content, and analyze performance to build a successful YouTube channel
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Video, label: "Video Ideas", value: "1000+", color: "red" },
            { icon: TrendingUp, label: "Avg Growth", value: "300%", color: "green" },
            { icon: Target, label: "Success Rate", value: "94%", color: "blue" },
            { icon: Zap, label: "Time Saved", value: "10h/wk", color: "yellow" },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-6">
              <stat.icon className={`w-8 h-8 mb-3 text-${stat.color}-400`} />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: "ideas", label: "Video Ideas", icon: Lightbulb },
            { id: "optimize", label: "Title Optimizer", icon: Sparkles },
            { id: "schedule", label: "Content Planner", icon: Calendar },
            { id: "analytics", label: "Analytics", icon: BarChart3 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg"
                  : "glass-panel text-gray-300 hover:bg-white/10"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="glass-panel p-8">
          {/* Video Ideas Generator */}
          {activeTab === "ideas" && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Lightbulb className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold">AI Video Ideas Generator</h3>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Your Channel Niche</label>
                <input
                  type="text"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="e.g., Fitness, Cooking, Tech Reviews, Gaming"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <button
                onClick={generateIdeas}
                disabled={!niche || loading}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed mb-8"
              >
                {loading ? "Generating Ideas..." : "Generate Video Ideas"}
              </button>

              {videoIdeas.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Generated Video Ideas</h4>
                  {videoIdeas.map((idea, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="text-lg font-semibold flex-1">{idea.title}</h5>
                        {idea.trending && (
                          <span className="bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 mb-3">{idea.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gray-500">Est. Views: {idea.estimatedViews}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Title Optimizer */}
          {activeTab === "optimize" && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold">Title & SEO Optimizer</h3>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Video Title</label>
                <input
                  type="text"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  placeholder="Enter your video title"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button
                onClick={analyzeVideo}
                disabled={!videoTitle || loading}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed mb-8"
              >
                {loading ? "Analyzing..." : "Analyze & Optimize"}
              </button>

              {analysis && (
                <div className="space-y-6">
                  {/* Score */}
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold">SEO Score</h4>
                      <div className="text-4xl font-bold gradient-text">{analysis.score}/100</div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all"
                        style={{ width: `${analysis.score}%` }}
                      />
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Target className="w-6 h-6 mr-2 text-blue-400" />
                      Optimization Recommendations
                    </h4>
                    <div className="space-y-3">
                      {analysis.recommendations.map((rec, i) => (
                        <div key={i} className="flex items-start space-x-3 bg-white/5 p-4 rounded-lg">
                          <div className="bg-blue-500/20 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                            {i + 1}
                          </div>
                          <p className="text-gray-300">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Hash className="w-6 h-6 mr-2 text-green-400" />
                      Recommended Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {analysis.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Content Planner */}
          {activeTab === "schedule" && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold">30-Day Content Planner</h3>
              </div>

              <p className="text-gray-400 mb-6">
                Generate a strategic content calendar to maintain consistent uploads and maximize channel growth
              </p>

              <button
                onClick={generateContentPlan}
                disabled={loading}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed mb-8"
              >
                {loading ? "Generating Plan..." : "Generate 30-Day Plan"}
              </button>

              {contentPlan.length > 0 && (
                <div className="space-y-6">
                  {contentPlan.map((week) => (
                    <div key={week.week} className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-blue-400" />
                        Week {week.week}
                      </h4>
                      <div className="space-y-3">
                        {week.videos.map((video: any, i: number) => (
                          <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-lg">
                            <div>
                              <div className="font-medium mb-1">{video.day}</div>
                              <div className="text-gray-400">{video.topic}</div>
                            </div>
                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                              {video.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Analytics */}
          {activeTab === "analytics" && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <BarChart3 className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold">Channel Analytics Dashboard</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Subscriber Growth</h4>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold mb-2">+2,547</div>
                  <div className="text-sm text-gray-400">Last 30 days</div>
                  <div className="text-sm text-green-400 mt-2">+23.4% vs previous month</div>
                </div>

                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Total Views</h4>
                    <Video className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold mb-2">147,893</div>
                  <div className="text-sm text-gray-400">Last 30 days</div>
                  <div className="text-sm text-green-400 mt-2">+31.2% vs previous month</div>
                </div>

                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Engagement Rate</h4>
                    <MessageSquare className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold mb-2">8.7%</div>
                  <div className="text-sm text-gray-400">Average</div>
                  <div className="text-sm text-green-400 mt-2">Above industry avg (5.2%)</div>
                </div>

                <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Watch Time</h4>
                    <Clock className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold mb-2">12,450h</div>
                  <div className="text-sm text-gray-400">Last 30 days</div>
                  <div className="text-sm text-green-400 mt-2">+28.9% vs previous month</div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Top Performing Videos</h4>
                <div className="space-y-3">
                  {[
                    { title: "How to Start a YouTube Channel in 2024", views: "45.2K", ctr: "12.3%" },
                    { title: "My Secret to Going Viral on YouTube", views: "38.7K", ctr: "10.8%" },
                    { title: "YouTube Algorithm Explained", views: "32.1K", ctr: "9.4%" },
                  ].map((video, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-red-500/20 text-red-400 rounded w-8 h-8 flex items-center justify-center font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-medium">{video.title}</div>
                          <div className="text-sm text-gray-400">{video.views} views</div>
                        </div>
                      </div>
                      <div className="text-green-400 font-semibold">{video.ctr} CTR</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Unlimited Ideas",
              description: "Never run out of content with AI-generated video concepts tailored to your niche",
            },
            {
              icon: Target,
              title: "SEO Optimization",
              description: "Maximize discoverability with optimized titles, descriptions, and tags",
            },
            {
              icon: Calendar,
              title: "Smart Scheduling",
              description: "Maintain consistency with strategic content calendars and upload plans",
            },
            {
              icon: TrendingUp,
              title: "Trend Analysis",
              description: "Stay ahead with real-time trending topics and viral content opportunities",
            },
            {
              icon: BarChart3,
              title: "Performance Tracking",
              description: "Monitor growth metrics and optimize your strategy based on data",
            },
            {
              icon: Zap,
              title: "Automation Tools",
              description: "Save time with automated workflows for repetitive channel tasks",
            },
          ].map((feature, i) => (
            <div key={i} className="glass-panel p-6 hover:bg-white/10 transition-all group">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>© 2024 YouTube Automation Agent. Powered by AI to help creators succeed.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
