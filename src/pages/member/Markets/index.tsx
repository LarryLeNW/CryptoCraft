import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Filter,
    Search,
    Star,
    TrendingDown,
    TrendingUp,
    Bitcoin,
    ArrowUpDown,
    Eye,
    Activity
} from "lucide-react";

function Markets() {
    const [searchTerm, setSearchTerm] = useState("");
    const [favorites, setFavorites] = useState(new Set([1, 2, 5, 8]));

    const marketData = [
        {
            rank: 1,
            symbol: "BTC",
            name: "Bitcoin",
            price: 68456.87,
            change24h: 4.25,
            volume: "28.5B",
            marketCap: "1.34T",
            favorite: true,
            icon: "₿",
            gradient: "from-orange-400 to-yellow-500",
        },
        {
            rank: 2,
            symbol: "ETH",
            name: "Ethereum",
            price: 3845.90,
            change24h: -1.23,
            volume: "15.2B",
            marketCap: "462.1B",
            favorite: true,
            icon: "Ξ",
            gradient: "from-blue-400 to-indigo-500",
        },
        {
            rank: 3,
            symbol: "USDT",
            name: "Tether",
            price: 1.0,
            change24h: 0.01,
            volume: "45.8B",
            marketCap: "95.1B",
            favorite: false,
            icon: "₮",
            gradient: "from-green-400 to-emerald-500",
        },
        {
            rank: 4,
            symbol: "BNB",
            name: "BNB",
            price: 315.8,
            change24h: 3.67,
            volume: "1.8B",
            marketCap: "47.2B",
            favorite: false,
            icon: "B",
            gradient: "from-yellow-400 to-amber-500",
        },
        {
            rank: 5,
            symbol: "XRP",
            name: "XRP",
            price: 0.615,
            change24h: -2.14,
            volume: "2.1B",
            marketCap: "33.4B",
            favorite: true,
            icon: "X",
            gradient: "from-gray-400 to-gray-600",
        },
        {
            rank: 6,
            symbol: "ADA",
            name: "Cardano",
            price: 0.485,
            change24h: -0.89,
            volume: "890M",
            marketCap: "17.2B",
            favorite: false,
            icon: "₳",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            rank: 7,
            symbol: "DOGE",
            name: "Dogecoin",
            price: 0.082,
            change24h: 5.23,
            volume: "1.2B",
            marketCap: "11.8B",
            favorite: false,
            icon: "Ð",
            gradient: "from-yellow-400 to-orange-400",
        },
        {
            rank: 8,
            symbol: "SOL",
            name: "Solana",
            price: 98.45,
            change24h: 4.12,
            volume: "2.8B",
            marketCap: "42.1B",
            favorite: true,
            icon: "◎",
            gradient: "from-purple-400 to-pink-500",
        },
    ];

    const filteredData = marketData.filter(
        (coin) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleFavorite = (rank) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(rank)) {
            newFavorites.delete(rank);
        } else {
            newFavorites.add(rank);
        }
        setFavorites(newFavorites);
    };

    const formatPrice = (price) => {
        if (price >= 1000) {
            return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        return price.toLocaleString("en-US", { minimumFractionDigits: 3, maximumFractionDigits: 6 });
    };

    const CryptoIcon = ({ coin }) => (
        <div className={`w-10 h-10 bg-gradient-to-br ${coin.gradient} rounded-full flex items-center justify-center shadow-lg`}>
            <span className="text-white font-bold text-sm">{coin.icon}</span>
        </div>
    );

    const ChangeIndicator = ({ change }) => (
        <div className={`flex items-center space-x-1 ${change > 0 ? "text-green-500" : "text-red-500"}`}>
            {change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span className="font-semibold">
                {change > 0 ? "+" : ""}
                {change}%
            </span>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 font-montserrat">
            <div className="p-4 md:p-6 space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Crypto Markets
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            Track cryptocurrency prices and trends in real-time
                        </p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Button variant="outline" size="sm" className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <Filter className="w-4 h-4 mr-2" />
                            Filters
                        </Button>
                        <Button variant="outline" size="sm" className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <ArrowUpDown className="w-4 h-4 mr-2" />
                            Sort
                        </Button>
                    </div>
                </div>

                {/* Search */}
                <Card className="shadow-lg border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
                    <CardContent className="p-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                placeholder="Search cryptocurrencies by name or symbol..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 h-12 text-base bg-transparent border-2 focus:border-blue-500 transition-all duration-300"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Market Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Activity className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">Total Market Cap</p>
                            <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">$2.42T</p>
                            <div className="flex items-center justify-center space-x-1 mt-2">
                                <TrendingUp className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-green-500 font-semibold">+2.4%</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-1">24h Volume</p>
                            <p className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">$89.2B</p>
                            <div className="flex items-center justify-center space-x-1 mt-2">
                                <TrendingDown className="w-4 h-4 text-red-500" />
                                <span className="text-sm text-red-500 font-semibold">-1.2%</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Bitcoin className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-1">BTC Dominance</p>
                            <p className="text-2xl font-bold text-orange-800 dark:text-orange-200">52.3%</p>
                            <div className="flex items-center justify-center space-x-1 mt-2">
                                <TrendingUp className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-green-500 font-semibold">+0.8%</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Eye className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">Active Coins</p>
                            <p className="text-2xl font-bold text-purple-800 dark:text-purple-200">2,847</p>
                            <div className="flex items-center justify-center space-x-1 mt-2">
                                <Badge variant="secondary" className="text-xs">+12 new</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Markets Table */}
                <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-xl font-bold">Top Cryptocurrencies</CardTitle>
                                <CardDescription className="mt-1">Real-time cryptocurrency prices and market data</CardDescription>
                            </div>
                            <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                                Live Data
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="space-y-0">
                            {/* Desktop Header */}
                            <div className="hidden lg:grid lg:grid-cols-8 gap-4 p-4 text-sm font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                                <div className="flex items-center">#</div>
                                <div className="col-span-2">Asset</div>
                                <div className="text-right">Price</div>
                                <div className="text-right">24h Change</div>
                                <div className="text-right">Volume</div>
                                <div className="text-right">Market Cap</div>
                                <div className="text-center">Actions</div>
                            </div>

                            {/* Rows */}
                            {filteredData.map((coin, index) => (
                                <div
                                    key={coin.symbol}
                                    className={`group transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 ${index !== filteredData.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""
                                        }`}
                                >
                                    {/* Mobile Layout */}
                                    <div className="lg:hidden p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-sm font-medium text-gray-500 w-6">#{coin.rank}</span>
                                                <CryptoIcon coin={coin} />
                                                <div>
                                                    <p className="font-semibold text-gray-900 dark:text-white">{coin.name}</p>
                                                    <p className="text-sm text-gray-500">{coin.symbol}</p>
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => toggleFavorite(coin.rank)}
                                                className="p-2"
                                            >
                                                <Star
                                                    className={`w-5 h-5 transition-colors ${favorites.has(coin.rank) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                                                        }`}
                                                />
                                            </Button>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                                    ${formatPrice(coin.price)}
                                                </p>
                                                <p className="text-sm text-gray-500">Vol: {coin.volume}</p>
                                            </div>
                                            <div className="text-right space-y-2">
                                                <ChangeIndicator change={coin.change24h} />
                                                <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg">
                                                    Trade
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop Layout */}
                                    <div className="hidden lg:grid lg:grid-cols-8 gap-4 p-4 items-center">
                                        <div className="flex items-center space-x-3">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => toggleFavorite(coin.rank)}
                                                className="p-1"
                                            >
                                                <Star
                                                    className={`w-4 h-4 transition-colors ${favorites.has(coin.rank) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                                                        }`}
                                                />
                                            </Button>
                                            <span className="text-sm font-medium text-gray-500">#{coin.rank}</span>
                                        </div>

                                        <div className="col-span-2 flex items-center space-x-3">
                                            <CryptoIcon coin={coin} />
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white">{coin.name}</p>
                                                <p className="text-sm text-gray-500">{coin.symbol}</p>
                                            </div>
                                        </div>

                                        <div className="text-right font-semibold text-gray-900 dark:text-white">
                                            ${formatPrice(coin.price)}
                                        </div>

                                        <div className="text-right">
                                            <ChangeIndicator change={coin.change24h} />
                                        </div>

                                        <div className="text-right text-gray-600 dark:text-gray-400 font-medium">
                                            {coin.volume}
                                        </div>

                                        <div className="text-right text-gray-600 dark:text-gray-400 font-medium">
                                            {coin.marketCap}
                                        </div>

                                        <div className="text-center">
                                            <Button
                                                size="sm"
                                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                            >
                                                Trade
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Markets;