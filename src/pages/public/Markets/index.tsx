import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter, Search, Star, TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";

function Markets() {

    const [searchTerm, setSearchTerm] = useState("")

    const marketData = [
        {
            rank: 1,
            symbol: "BTC",
            name: "Bitcoin",
            price: 43250.5,
            change24h: 2.45,
            volume: "28.5B",
            marketCap: "847.2B",
            favorite: true,
        },
        {
            rank: 2,
            symbol: "ETH",
            name: "Ethereum",
            price: 2650.3,
            change24h: -1.23,
            volume: "15.2B",
            marketCap: "318.4B",
            favorite: true,
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
        },
    ]

    const filteredData = marketData.filter(
        (coin) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
    )


    return <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Markets</h1>
                <p className="text-gray-500 dark:text-gray-400">Track cryptocurrency prices and trends</p>
            </div>
            <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                </Button>
            </div>
        </div>

        {/* Search */}
        <Card>
            <CardContent className="px-4 py-2">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                        placeholder="Search cryptocurrencies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10  "
                    />
                </div>
            </CardContent>
        </Card>

        {/* Market Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
                <CardContent className="p-4">
                    <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Market Cap</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">$1.72T</p>
                        <div className="flex items-center justify-center space-x-1 mt-1">
                            <TrendingUp className="w-3 h-3 text-green-500" />
                            <span className="text-sm text-green-500">+2.4%</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-4">
                    <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">24h Volume</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">$89.2B</p>
                        <div className="flex items-center justify-center space-x-1 mt-1">
                            <TrendingDown className="w-3 h-3 text-red-500" />
                            <span className="text-sm text-red-500">-1.2%</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-4">
                    <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">BTC Dominance</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">49.2%</p>
                        <div className="flex items-center justify-center space-x-1 mt-1">
                            <TrendingUp className="w-3 h-3 text-green-500" />
                            <span className="text-sm text-green-500">+0.8%</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-4">
                    <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Active Coins</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">2,847</p>
                        <div className="flex items-center justify-center space-x-1 mt-1">
                            <span className="text-sm text-gray-500">+12 new</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* Markets Table */}
        <Card>
            <CardHeader>
                <CardTitle>Top Cryptocurrencies</CardTitle>
                <CardDescription>Real-time cryptocurrency prices and market data</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    {/* Header */}
                    <div className="hidden md:grid md:grid-cols-7 gap-4 p-3 text-sm font-medium text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                        <div>#</div>
                        <div>Name</div>
                        <div>Price</div>
                        <div>24h %</div>
                        <div>Volume</div>
                        <div>Market Cap</div>
                        <div>Action</div>
                    </div>

                    {/* Rows */}
                    {filteredData.map((coin) => (
                        <div
                            key={coin.symbol}
                            className="grid grid-cols-1 md:grid-cols-7 gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 md:border-none"
                        >
                            {/* Mobile Layout */}
                            <div className="md:hidden space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-sm text-gray-500">#{coin.rank}</span>
                                        <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">{coin.symbol.slice(0, 2)}</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">{coin.name}</p>
                                            <p className="text-sm text-gray-500">{coin.symbol}</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                        <Star
                                            className={`w-4 h-4 ${coin.favorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
                                        />
                                    </Button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">
                                            ${coin.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                        </p>
                                        <p className="text-sm text-gray-500">Vol: {coin.volume}</p>
                                    </div>
                                    <div className="text-right">
                                        <div
                                            className={`flex items-center space-x-1 ${coin.change24h > 0 ? "text-green-500" : "text-red-500"}`}
                                        >
                                            {coin.change24h > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                            <span className="font-medium">
                                                {coin.change24h > 0 ? "+" : ""}
                                                {coin.change24h}%
                                            </span>
                                        </div>
                                        <Button size="sm" className="mt-1 bg-blue-500 hover:bg-blue-600">
                                            Trade
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden md:contents">
                                <div className="flex items-center">
                                    <Button variant="ghost" size="sm" className="mr-2">
                                        <Star
                                            className={`w-4 h-4 ${coin.favorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
                                        />
                                    </Button>
                                    <span className="text-sm text-gray-500">#{coin.rank}</span>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-xs">{coin.symbol.slice(0, 2)}</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">{coin.name}</p>
                                        <p className="text-sm text-gray-500">{coin.symbol}</p>
                                    </div>
                                </div>

                                <div className="font-semibold text-gray-900 dark:text-white">
                                    ${coin.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                </div>

                                <div
                                    className={`flex items-center space-x-1 ${coin.change24h > 0 ? "text-green-500" : "text-red-500"}`}
                                >
                                    {coin.change24h > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                    <span className="font-medium">
                                        {coin.change24h > 0 ? "+" : ""}
                                        {coin.change24h}%
                                    </span>
                                </div>

                                <div className="text-gray-600 dark:text-gray-400">{coin.volume}</div>
                                <div className="text-gray-600 dark:text-gray-400">{coin.marketCap}</div>

                                <div>
                                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
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
}

export default Markets;