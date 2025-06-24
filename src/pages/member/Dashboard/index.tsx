import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    BarChart3,
    Bell,
    Bitcoin,
    Grid3X3,
    PiggyBank,
    TrendingDown,
    TrendingUp
} from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Dashboard() {
    const [activeMarketTab, setActiveMarketTab] = useState("gainers");

    const visaCards = [
        {
            id: 1,
            type: "CLASSIC",
            brand: "VISA",
            balance: "$15,180.50",
            expiry: "05/27",
            cardNumber: "••••••••2595",
            gradient: "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900",
            textColor: "text-blue-100",
            badge: null
        },
        {
            id: 2,
            type: "GOLD",
            brand: "VISA",
            balance: "$45,890.75",
            expiry: "12/26",
            cardNumber: "••••••••8847",
            gradient: "bg-gradient-to-br from-yellow-600 via-yellow-700 to-yellow-900",
            textColor: "text-yellow-100",
            badge: "GOLD"
        },
        {
            id: 3,
            type: "PLATINUM",
            brand: "VISA",
            balance: "$28,456.90",
            expiry: "08/25",
            cardNumber: "••••••••1247",
            gradient: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900",
            textColor: "text-gray-300",
            badge: "PLATINUM"
        }
    ];

    const topGainers = [
        { symbol: "BTC", name: "Bitcoin", price: "$68,456.87", amount: "0.154836", change: 4.2 },
        { symbol: "ETH", name: "Ethereum", price: "$3,845.90", amount: "2.847621", change: 1.5 },
        { symbol: "BNB", name: "Binance Coin", price: "$315.80", amount: "12.45", change: 3.67 },
        { symbol: "ADA", name: "Cardano", price: "$0.485", amount: "2500", change: 2.89 },
    ];

    const topLosers = [
        { symbol: "DOGE", name: "Dogecoin", price: "$0.082", amount: "5000", change: -2.14 },
        { symbol: "XRP", name: "XRP", price: "$0.615", amount: "1000", change: -1.23 },
        { symbol: "SOL", name: "Solana", price: "$98.45", amount: "5.2", change: -0.89 },
        { symbol: "MATIC", name: "Polygon", price: "$0.85", amount: "800", change: -3.45 },
    ];

    const currentData = activeMarketTab === "gainers" ? topGainers : topLosers;

    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=user`;

    const VisaCard = ({ card }) => (
        <Card className={`${card.gradient} relative overflow-hidden`}>
            <CardContent className="p-3 md:p-4 relative">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div className="text-base md:text-lg font-bold text-white tracking-wider">
                        {card.brand}
                    </div>
                    {card.badge ? (
                        <div className={`text-xs ${card.textColor} font-semibold`}>
                            {card.badge}
                        </div>
                    ) : (
                        <div className="w-6 h-4 md:w-8 md:h-5 bg-white/20 rounded-sm"></div>
                    )}
                </div>

                <div className="space-y-1 md:space-y-2 mt-4">
                    <div className={`text-xs ${card.textColor}`}>Balance</div>
                    <div className="text-lg md:text-xl font-bold text-white">{card.balance}</div>
                    <div className="flex justify-between items-end mt-3 md:mt-4">
                        <div>
                            <div className={`text-xs ${card.textColor}`}>Expires</div>
                            <div className="text-sm text-white font-mono">{card.expiry}</div>
                        </div>
                        <div className="text-xs md:text-sm text-white font-mono tracking-wider">
                            {card.cardNumber}
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
            </CardContent>
        </Card>
    );

    const CryptoIcon = ({ symbol }) => {
        const iconBg = symbol === "BTC" ? "from-orange-400 to-yellow-500" :
            symbol === "ETH" ? "from-blue-400 to-indigo-500" :
                symbol === "BNB" ? "from-yellow-400 to-amber-500" :
                    "from-purple-400 to-pink-500";

        return (
            <div className={`w-10 h-10 bg-gradient-to-r ${iconBg} rounded-full flex items-center justify-center`}>
                {symbol === "BTC" && <Bitcoin className="w-5 h-5 text-white" />}
                {symbol === "ETH" && <span className="text-white font-bold text-sm">Ξ</span>}
                {symbol !== "BTC" && symbol !== "ETH" && (
                    <span className="text-white font-bold text-xs">{symbol.slice(0, 2)}</span>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black text-foreground font-montserrat">
            <div className="p-4 md:p-6 pb-4">
                <header className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src={avatarUrl} alt="User Avatar" />
                        </Avatar>
                        <div>
                            <h2 className="font-semibold text-sm md:text-base">Yatin Sharma</h2>
                            <p className="text-xs md:text-sm text-muted-foreground">yatin@crypto.com</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="p-2">
                            <Bell className="w-4 h-4 md:w-5 md:h-5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2 hidden md:block">
                            <Grid3X3 className="w-4 h-4 md:w-5 md:h-5 " />
                        </Button>
                        <div>
                            <ThemeToggle />
                        </div>
                    </div>
                </header>
                <section className="mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                        <p className="text-muted-foreground text-sm">Total Balance</p>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            +3.50%
                        </Badge>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold">$89,527.45</h1>
                </section>

                <section className="mb-6">
                    <div className="hidden md:block">
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {visaCards.map((card) => (
                                <VisaCard key={card.id} card={card} />
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden mb-4">
                        <Carousel className="w-full">
                            <CarouselContent className="-ml-2">
                                {visaCards.map((card) => (
                                    <CarouselItem key={card.id} className="pl-2 basis-4/5">
                                        <VisaCard card={card} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                        </Carousel>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-3 md:p-4 text-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-md">
                                    <PiggyBank className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-xs text-emerald-600 dark:text-emerald-400 mb-1 font-medium">Total Deposit</p>
                                <p className="text-lg md:text-xl font-bold text-emerald-800 dark:text-emerald-100">$15,150.25</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-3 md:p-4 text-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-md">
                                    <BarChart3 className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-xs text-blue-600 dark:text-blue-400 mb-1 font-medium">Profit & Loss</p>
                                <p className="text-lg md:text-xl font-bold text-blue-800 dark:text-blue-100">$74,377.20</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section>
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

                    <div className="space-y-2">
                        {currentData.map((crypto) => (
                            <Card
                                key={crypto.symbol}
                                className="bg-card border border-border hover:shadow-md transition-all duration-200"
                            >
                                <CardContent className="px-4 py-1">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <CryptoIcon symbol={crypto.symbol} />
                                            <div>
                                                <p className="font-medium text-sm md:text-base">{crypto.name}</p>
                                                <p className="text-xs md:text-sm text-muted-foreground">{crypto.price}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-sm md:text-base">{crypto.amount}</p>
                                            <div className={`flex items-center justify-end space-x-1 ${crypto.change > 0 ? "text-green-400" : "text-red-400"
                                                }`}>
                                                {crypto.change > 0 ? (
                                                    <TrendingUp className="w-3 h-3" />
                                                ) : (
                                                    <TrendingDown className="w-3 h-3" />
                                                )}
                                                <span className="text-xs md:text-sm font-medium">
                                                    {crypto.change > 0 ? "+" : ""}
                                                    {crypto.change}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}