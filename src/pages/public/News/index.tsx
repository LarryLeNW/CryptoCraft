import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bookmark, Clock, ExternalLink, Newspaper, Search, Share, TrendingUp } from "lucide-react";
import { useState } from "react";
import PlaceHolderImage from "@/assets/react.svg";

function News() {
    const [searchTerm, setSearchTerm] = useState("")

    const newsData = [
        {
            id: 1,
            title: "Bitcoin Reaches New All-Time High as Institutional Adoption Grows",
            summary:
                "Bitcoin surged to a new record high of $73,000 as major corporations continue to add BTC to their treasury reserves.",
            source: "CryptoNews",
            time: "2 hours ago",
            category: "Bitcoin",
            image: "/placeholder.svg?height=200&width=300",
            trending: true,
        },
        {
            id: 2,
            title: "Ethereum 2.0 Staking Rewards Hit Record Levels",
            summary:
                "Ethereum staking yields have reached their highest levels since the merge, attracting more validators to the network.",
            source: "DeFi Daily",
            time: "4 hours ago",
            category: "Ethereum",
            image: "/placeholder.svg?height=200&width=300",
            trending: false,
        },
        {
            id: 3,
            title: "Major Bank Announces Cryptocurrency Trading Services",
            summary:
                "One of the largest banks in the US has announced plans to offer cryptocurrency trading services to retail customers.",
            source: "Financial Times",
            time: "6 hours ago",
            category: "Adoption",
            image: "/placeholder.svg?height=200&width=300",
            trending: true,
        },
        {
            id: 4,
            title: "DeFi Protocol Launches Revolutionary Yield Farming Feature",
            summary:
                "A new DeFi protocol has introduced an innovative yield farming mechanism that promises higher returns with lower risk.",
            source: "DeFi Pulse",
            time: "8 hours ago",
            category: "DeFi",
            image: "/placeholder.svg?height=200&width=300",
            trending: false,
        },
        {
            id: 5,
            title: "Regulatory Clarity Boosts Crypto Market Confidence",
            summary: "New regulatory guidelines provide much-needed clarity for cryptocurrency businesses and investors.",
            source: "Regulatory Watch",
            time: "12 hours ago",
            category: "Regulation",
            image: "/placeholder.svg?height=200&width=300",
            trending: false,
        },
        {
            id: 6,
            title: "NFT Marketplace Sees Record Trading Volume",
            summary:
                "The largest NFT marketplace reported record trading volumes as digital art and collectibles gain mainstream adoption.",
            source: "NFT Today",
            time: "1 day ago",
            category: "NFT",
            image: "/placeholder.svg?height=200&width=300",
            trending: true,
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

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Crypto News</h1>
                    <p className="text-gray-500 dark:text-gray-400">Stay updated with the latest cryptocurrency news</p>
                </div>
            </div>

            <Card>
                <CardContent className="p-4 space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            placeholder="Search news articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCategory(category)}
                                className={selectedCategory === category ? "bg-blue-500 hover:bg-blue-600" : ""}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Trending News */}
            <Card>
                <CardHeader>
                    <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-orange-500" />
                        <CardTitle>Trending Now</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {filteredNews
                            .filter((article) => article.trending)
                            .slice(0, 3)
                            .map((article) => (
                                <div
                                    key={article.id}
                                    className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                                >
                                    <img
                                        src={PlaceHolderImage}
                                        alt={article.title}
                                        className="w-full h-32 object-contain rounded-lg mb-3"
                                    />
                                    <Badge variant="secondary" className="mb-2">
                                        {article.category}
                                    </Badge>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{article.title}</h3>
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <span>{article.source}</span>
                                        <div className="flex items-center space-x-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{article.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </CardContent>
            </Card>

            {/* All News */}
            <Card className="md:border border-none" >
                <CardHeader>
                    <CardTitle>Latest News</CardTitle>
                    <CardDescription>All cryptocurrency news and updates</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                    <div className="grid grid-cols-2 gap-2">
                        {filteredNews.map((article) => (
                            <div
                                key={article.id}
                                className="flex flex-col md:flex-row gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow w-full"
                            >
                                <div className="flex-1 w-full flex-shrink-0">
                                    <img
                                        src={PlaceHolderImage}
                                        alt={article.title}
                                        className="w-full h-32 md:h-24 object-contain rounded-lg"
                                    />
                                </div>

                                <div className="flex-1  space-y-2 min-w-0">
                                    <div className="flex items-start justify-between min-w-0">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex  md:space-x-2 space-x-1 mb-1 md:mb-2">
                                                <Badge variant="secondary" className="text-xs">
                                                    {article.category}
                                                </Badge>
                                                {article.trending && (
                                                    <Badge variant="destructive" className="text-xs">
                                                        <TrendingUp className="w-2 h-2 md:w-3 md:h-3 mr-1" />
                                                        Trending
                                                    </Badge>
                                                )}
                                            </div>

                                            <h3 className=" font-semibold text-gray-900 dark:text-white mb-1 md:mb-2 line-clamp-1  min-w-0">
                                                {article.title}
                                            </h3>

                                            <p className=" text-sm text-gray-600 dark:text-gray-400 line-clamp-3 break-words overflow-hidden">
                                                {article.summary}
                                            </p>

                                            <div className="mt-4 md:mt-2  flex flex-col  items-center justify-between">
                                                <div className="text-nowrap flex items-center justify-between  space-x-1 md:space-x-4 text-[6px] md:text-sm text-gray-600 dark:text-gray-400">
                                                    <Badge variant={"outline"}>{article.source}</Badge>
                                                    <div className="flex items-center space-x-1 ">
                                                        <Clock className="w-2 h-2 md:w-3 md:h-3" />
                                                        <span>{article.time}</span>
                                                    </div>
                                                </div>

                                                <div className="mt-auto md:mt-0 flex items-center space-x-2">
                                                    <Button variant="ghost" size="sm">
                                                        <Bookmark className="w-4 h-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm">
                                                        <Share className="w-4 h-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm">
                                                        <ExternalLink className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

export default News;