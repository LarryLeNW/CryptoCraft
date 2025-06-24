import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bookmark, Clock, ExternalLink, Newspaper, Search, Share, TrendingUp, Filter, BookmarkCheck, Eye } from "lucide-react";
import { useState } from "react";

function News() {
    const [searchTerm, setSearchTerm] = useState("")
    const [bookmarkedArticles, setBookmarkedArticles] = useState(new Set())

    const newsData = [
        {
            id: 1,
            title: "Bitcoin Reaches New All-Time High as Institutional Adoption Grows",
            summary:
                "Bitcoin surged to a new record high of $73,000 as major corporations continue to add BTC to their treasury reserves. This milestone represents a significant shift in corporate treasury management strategies.",
            source: "CryptoNews",
            time: "2 hours ago",
            category: "Bitcoin",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
            trending: true,
            readTime: "3 min read",
            views: "12.5k"
        },
        {
            id: 2,
            title: "Ethereum 2.0 Staking Rewards Hit Record Levels",
            summary:
                "Ethereum staking yields have reached their highest levels since the merge, attracting more validators to the network. The increased participation is strengthening network security and decentralization.",
            source: "DeFi Daily",
            time: "4 hours ago",
            category: "Ethereum",
            image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&h=300&fit=crop",
            trending: false,
            readTime: "5 min read",
            views: "8.2k"
        },
        {
            id: 3,
            title: "Major Bank Announces Cryptocurrency Trading Services",
            summary:
                "One of the largest banks in the US has announced plans to offer cryptocurrency trading services to retail customers. This move signals growing mainstream acceptance of digital assets.",
            source: "Financial Times",
            time: "6 hours ago",
            category: "Adoption",
            image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
            trending: true,
            readTime: "4 min read",
            views: "15.7k"
        },
        {
            id: 4,
            title: "DeFi Protocol Launches Revolutionary Yield Farming Feature",
            summary:
                "A new DeFi protocol has introduced an innovative yield farming mechanism that promises higher returns with lower risk. The protocol uses advanced algorithms to optimize yield strategies.",
            source: "DeFi Pulse",
            time: "8 hours ago",
            category: "DeFi",
            image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop",
            trending: false,
            readTime: "6 min read",
            views: "6.9k"
        },
        {
            id: 5,
            title: "Regulatory Clarity Boosts Crypto Market Confidence",
            summary: "New regulatory guidelines provide much-needed clarity for cryptocurrency businesses and investors. The framework is expected to encourage more institutional participation in the crypto space.",
            source: "Regulatory Watch",
            time: "12 hours ago",
            category: "Regulation",
            image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=400&h=300&fit=crop",
            trending: false,
            readTime: "7 min read",
            views: "9.1k"
        },
        {
            id: 6,
            title: "NFT Marketplace Sees Record Trading Volume",
            summary:
                "The largest NFT marketplace reported record trading volumes as digital art and collectibles gain mainstream adoption. Celebrity endorsements and brand partnerships are driving the surge.",
            source: "NFT Today",
            time: "1 day ago",
            category: "NFT",
            image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=300&fit=crop",
            trending: true,
            readTime: "4 min read",
            views: "11.3k"
        },
    ]

    const categories = ["All", "Bitcoin", "Ethereum", "DeFi", "NFT", "Regulation", "Adoption"]
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredNews = newsData.filter((article) => {
        const matchesSearch =
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.summary.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const toggleBookmark = (articleId) => {
        const newBookmarks = new Set(bookmarkedArticles)
        if (newBookmarks.has(articleId)) {
            newBookmarks.delete(articleId)
        } else {
            newBookmarks.add(articleId)
        }
        setBookmarkedArticles(newBookmarks)
    }

    const getCategoryColor = (category) => {
        const colors = {
            Bitcoin: "from-orange-400 to-orange-600",
            Ethereum: "from-blue-400 to-blue-600",
            DeFi: "from-purple-400 to-purple-600",
            NFT: "from-pink-400 to-pink-600",
            Regulation: "from-green-400 to-green-600",
            Adoption: "from-indigo-400 to-indigo-600"
        }
        return colors[category] || "from-gray-400 to-gray-600"
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                            <Newspaper className="w-8 h-8 text-blue-600" />
                            Crypto News
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">Stay updated with the latest cryptocurrency news and insights</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-white dark:bg-gray-800">
                            <Clock className="w-3 h-3 mr-1" />
                            Live Updates
                        </Badge>
                    </div>
                </div>

                {/* Search and Filters */}
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                    <CardContent className="p-6 space-y-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                placeholder="Search crypto news, topics, or sources..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 h-12 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex items-center gap-2 flex-wrap">
                            <Filter className="w-4 h-4 text-gray-500" />
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category)}
                                    className={
                                        selectedCategory === category
                                            ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md"
                                            : "hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                    }
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Trending News */}
                <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-0 shadow-xl">
                    <CardHeader className="pb-4">
                        <div className="flex items-center space-x-2">
                            <TrendingUp className="w-6 h-6 text-orange-500" />
                            <CardTitle className="text-xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                Trending Stories
                            </CardTitle>
                        </div>
                        <CardDescription>Most popular crypto news right now</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredNews
                                .filter((article) => article.trending)
                                .slice(0, 3)
                                .map((article) => (
                                    <div
                                        key={article.id}
                                        className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <Badge className={`bg-gradient-to-r ${getCategoryColor(article.category)} text-white border-0`}>
                                                    {article.category}
                                                </Badge>
                                            </div>
                                            <div className="absolute top-3 right-3">
                                                <Badge variant="secondary" className="bg-red-500 text-white border-0">
                                                    <TrendingUp className="w-3 h-3 mr-1" />
                                                    Hot
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <h3 className="font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                {article.title}
                                            </h3>

                                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                                                <span className="font-medium">{article.source}</span>
                                                <div className="flex items-center space-x-3">
                                                    <div className="flex items-center space-x-1">
                                                        <Eye className="w-3 h-3" />
                                                        <span>{article.views}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Clock className="w-3 h-3" />
                                                        <span>{article.time}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Badge variant="outline" className="text-xs">
                                                    {article.readTime}
                                                </Badge>
                                                <div className="flex items-center space-x-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => toggleBookmark(article.id)}
                                                        className="h-8 w-8 p-0 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                                    >
                                                        {bookmarkedArticles.has(article.id) ? (
                                                            <BookmarkCheck className="w-4 h-4 text-blue-500" />
                                                        ) : (
                                                            <Bookmark className="w-4 h-4" />
                                                        )}
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-green-50 dark:hover:bg-green-900/20">
                                                        <Share className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </CardContent>
                </Card>

                {/* All News */}
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-xl">Latest Headlines</CardTitle>
                        <CardDescription>All cryptocurrency news and market updates</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            {filteredNews.map((article) => (
                                <div
                                    key={article.id}
                                    className="group flex flex-col lg:flex-row gap-6 p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-700"
                                >
                                    <div className="lg:w-80 flex-shrink-0">
                                        <div className="relative overflow-hidden rounded-lg">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-48 lg:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-2 left-2">
                                                <Badge className={`bg-gradient-to-r ${getCategoryColor(article.category)} text-white border-0 text-xs`}>
                                                    {article.category}
                                                </Badge>
                                            </div>
                                            {article.trending && (
                                                <div className="absolute top-2 right-2">
                                                    <Badge variant="destructive" className="text-xs">
                                                        <TrendingUp className="w-2 h-2 mr-1" />
                                                        Trending
                                                    </Badge>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                                                {article.summary}
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                                <Badge variant="outline" className="font-medium hidden md:block">
                                                    {article.source}
                                                </Badge>
                                                <div className="flex items-center space-x-1">
                                                    <Clock className="w-3 h-3" />
                                                    <span>{article.time}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Eye className="w-3 h-3" />
                                                    <span>{article.views}</span>
                                                </div>
                                                <Badge variant="secondary" className="text-xs">
                                                    {article.readTime}
                                                </Badge>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => toggleBookmark(article.id)}
                                                    className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                                >
                                                    {bookmarkedArticles.has(article.id) ? (
                                                        <BookmarkCheck className="w-4 h-4 text-blue-500" />
                                                    ) : (
                                                        <Bookmark className="w-4 h-4" />
                                                    )}
                                                </Button>
                                                <Button variant="ghost" size="sm" className="hover:bg-green-50 dark:hover:bg-green-900/20">
                                                    <Share className="w-4 h-4" />
                                                </Button>
                                                <Button variant="ghost" size="sm" className="hover:bg-gray-50 dark:hover:bg-gray-900/20">
                                                    <ExternalLink className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default News;