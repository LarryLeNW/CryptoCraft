import { useState } from "react";
import { BarChart3, Bell, Bitcoin, Grid3X3, PiggyBank, TrendingDown, TrendingUp } from "lucide-react";
import { Avatar } from "radix-ui";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Dashboard() {
    const [activeMarketTab, setActiveMarketTab] = useState("gainers");

    const topGainers = [
        { symbol: "BTC", name: "Bitcoin", price: "BTC$8,456.87", amount: "0.154836", change: 4.2 },
        { symbol: "ETH", name: "Ethereum", price: "BTC$8,456.87", amount: "0.154836", change: 1.5 },
        { symbol: "BNB", name: "Binance Coin", price: "BTC$315.80", amount: "12.45", change: 3.67 },
        { symbol: "ADA", name: "Cardano", price: "BTC$0.485", amount: "2500", change: 2.89 },
    ];

    const topLosers = [
        { symbol: "DOGE", name: "Dogecoin", price: "BTC$0.082", amount: "5000", change: -2.14 },
        { symbol: "XRP", name: "XRP", price: "BTC$0.615", amount: "1000", change: -1.23 },
        { symbol: "SOL", name: "Solana", price: "BTC$98.45", amount: "5.2", change: -0.89 },
        { symbol: "MATIC", name: "Polygon", price: "BTC$0.85", amount: "800", change: -3.45 },
    ];

    const currentData = activeMarketTab === "gainers" ? topGainers : topLosers;

    return (
        <div className="min-h-screen bg-white dark:bg-black text-foreground">
            <div className="p-6 pb-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <Avatar.Root className="w-12 h-12">
                            <Avatar.AvatarImage src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/480920940_1158450402313841_751057879206463714_n.jpg?_nc_cat=102&_nc_cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-XTEjLK9Gh4Q7kNvwGjStZs&_nc_oc=Admbaz6b9A4-8tnVGZW5kAFb8xAdb2H4qqbkSdfUrNlcwOcRKF239R5eClPhPNJwojs&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=sFVY1JSlpeshI4-3L-KSCw&oh=00_AfJGQAMGMpDQ_Iu_9cziOqYgjypA8QA-l_nt1KUYluO4nQ&oe=68427906" />
                            <Avatar.AvatarFallback className="bg-primary text-primary-foreground">YX</Avatar.AvatarFallback>
                        </Avatar.Root>
                        <div>
                            <h2 className="font-semibold">Yatin Xarma</h2>
                            <p className="text-sm text-muted-foreground">yatin@example.com</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Button variant="ghost" size="sm">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="sm">
                            <Grid3X3 className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="flex items-center space-x-3">
                        <p className="text-muted-foreground text-sm mb-1">Total Balance</p>
                        <Badge
                            className="bg-green-500/20 text-green-400 border-green-500/30">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            +3.50%
                        </Badge>
                    </div>
                    <h1 className="text-4xl font-bold">$25,150.20</h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-2 md:mb-6">
                    <Card className="bg-gradient-to-r dark:from-indigo-600 from-pink-300 to-blue-500">
                        <CardContent className="p-2 md:p-4">
                            <div className="flex justify-between items-start mb-2 md:mb-4">
                                <div className="text-base md:text-lg font-bold">VISA</div>
                            </div>
                            <div className="space-y-1 md:space-y-2">
                                <div className="text-xs ">Balance</div>
                                <div className="text-lg md:text-xl font-bold text-white">$15,180.50</div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-xs">Expires</div>
                                        <div className="text-sm">05/23</div>
                                    </div>
                                    <div className="text-sm text-white">••••••••2595</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-r dark:from-indigo-600 from-pink-300 to-blue-500">
                        <CardContent className="p-2 md:p-4">
                            <div className="flex justify-between items-start mb-2 md:mb-4">
                                <div className="text-base md:text-lg font-bold">VISA</div>
                            </div>
                            <div className="space-y-1 md:space-y-2">
                                <div className="text-xs ">Balance</div>
                                <div className="text-lg md:text-xl font-bold text-white">$15,180.50</div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-xs">Expires</div>
                                        <div className="text-sm">05/23</div>
                                    </div>
                                    <div className="text-sm text-white">••••••••2595</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>



                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <Card className="bg-muted border border-border">
                        <CardContent className="p-2 md:p-4 text-center">
                            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                                <PiggyBank className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <p className="text-xs text-muted-foreground mb-1">Total Deposit</p>
                            <p className="text-xl font-bold">$15,150.25</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-muted border border-border">
                        <CardContent className="p-2 md:p-4 text-center">
                            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                                <BarChart3 className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <p className="text-xs text-muted-foreground mb-1">Profit & Loss</p>
                            <p className="text-xl font-bold">$45,850.15</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Market Tabs */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">24h Markets</h3>
                    <div className="flex space-x-2 mb-4">
                        <Button
                            variant={activeMarketTab === "gainers" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setActiveMarketTab("gainers")}
                            className={`flex-1 ${activeMarketTab === "gainers"
                                ? "bg-green-500 hover:bg-green-600 text-white"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                                }`}
                        >
                            Top Gainers
                        </Button>
                        <Button
                            variant={activeMarketTab === "losers" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setActiveMarketTab("losers")}
                            className={`flex-1 ${activeMarketTab === "losers"
                                ? "bg-red-500 hover:bg-red-600 text-white"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                                }`}
                        >
                            Top Losers
                        </Button>
                    </div>

                    <div className="space-y-3">
                        {currentData.map((crypto) => (
                            <div
                                key={crypto.symbol}
                                className="flex items-center justify-between p-4 rounded-xl bg-card border border-border"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                                        {crypto.symbol === "BTC" && <Bitcoin className="w-5 h-5 text-white" />}
                                        {crypto.symbol === "ETH" && <span className="text-white font-bold text-sm">Ξ</span>}
                                        {crypto.symbol !== "BTC" && crypto.symbol !== "ETH" && (
                                            <span className="text-white font-bold text-xs">{crypto.symbol.slice(0, 2)}</span>
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-medium">{crypto.name}</p>
                                        <p className="text-sm text-muted-foreground">{crypto.price}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold">{crypto.amount}</p>
                                    <div className={`flex items-center space-x-1 ${crypto.change > 0 ? "text-green-400" : "text-red-400"}`}>
                                        {crypto.change > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                        <span className="text-sm font-medium">
                                            {crypto.change > 0 ? "+" : ""}
                                            {crypto.change}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
