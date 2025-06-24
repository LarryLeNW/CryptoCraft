import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Activity,
    ArrowDownRight,
    ArrowUpRight,
    BarChart3,
    Briefcase,
    Calendar,
    Download,
    MoreVertical,
    PieChart,
    Target,
    Trophy,
    Wallet
} from "lucide-react";
import { useState } from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
);
function Portfolio() {
    const [chartSelected, setChartSelected] = useState("pie");

    const portfolioData = [
        {
            symbol: "BTC",
            name: "Bitcoin",
            amount: 0.5432,
            value: 37123.45,
            allocation: 45.2,
            avgBuyPrice: 41200.0,
            pnl: 4856.78,
            pnlPercent: 15.02,
            icon: "₿",
            gradient: "from-orange-400 to-yellow-500",
            chartColor: "#f59e0b",
        },
        {
            symbol: "ETH",
            name: "Ethereum",
            amount: 5.2341,
            value: 20128.90,
            allocation: 26.8,
            avgBuyPrice: 2450.0,
            pnl: 7296.45,
            pnlPercent: 18.17,
            icon: "Ξ",
            gradient: "from-blue-400 to-indigo-500",
            chartColor: "#3b82f6",
        },
        {
            symbol: "BNB",
            name: "Binance Coin",
            amount: 12.45,
            value: 4234.50,
            allocation: 15.6,
            avgBuyPrice: 298.5,
            pnl: 518.75,
            pnlPercent: 13.91,
            icon: "B",
            gradient: "from-yellow-400 to-amber-500",
            chartColor: "#f59e0b",
        },
        {
            symbol: "ADA",
            name: "Cardano",
            amount: 2500,
            value: 1287.50,
            allocation: 12.4,
            avgBuyPrice: 0.52,
            pnl: -12.50,
            pnlPercent: -0.96,
            icon: "₳",
            gradient: "from-blue-500 to-cyan-500",
            chartColor: "#06b6d4",
        },
    ];

    const totalValue = portfolioData.reduce((sum, asset) => sum + asset.value, 0);
    const totalPnL = portfolioData.reduce((sum, asset) => sum + asset.pnl, 0);
    const totalPnLPercent = (totalPnL / (totalValue - totalPnL)) * 100;
    const labels = portfolioData.map((asset) => asset.symbol);
    const dataPie = {
        labels,
        datasets: [
            {
                label: "Allocation %",
                data: portfolioData.map((asset) => asset.allocation),
                backgroundColor: [
                    "#f87171",
                    "#60a5fa",
                    "#34d399",
                    "#fbbf24",
                ],
                borderWidth: 1,
            },
        ],
    };

    const dataBar = {
        labels,
        datasets: [
            {
                label: "Allocation %",
                data: portfolioData.map((asset) => asset.allocation),
                backgroundColor: "#3b82f6",
            },
        ],
    };

    const bestPerformer = portfolioData.reduce((best, current) =>
        current.pnlPercent > best.pnlPercent ? current : best
    );

    const CryptoIcon = ({ coin }) => (
        <div className={`w-12 h-12 bg-gradient-to-br ${coin.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
            <span className="text-white font-bold text-lg">{coin.icon}</span>
        </div>
    );

    const PnLIndicator = ({ pnl, pnlPercent, size = "sm" }) => {
        const isPositive = pnl >= 0;
        const textSize = size === "lg" ? "text-lg" : "text-sm";
        const iconSize = size === "lg" ? "w-5 h-5" : "w-4 h-4";

        return (
            <div className={`flex items-center space-x-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>
                {isPositive ? (
                    <ArrowUpRight className={iconSize} />
                ) : (
                    <ArrowDownRight className={iconSize} />
                )}
                <div className="flex flex-col">
                    <span className={`font-semibold ${textSize}`}>
                        {isPositive ? "+" : ""}${Math.abs(pnl).toFixed(2)}
                    </span>
                    <span className={`text-xs ${isPositive ? "text-green-400" : "text-red-400"}`}>
                        {isPositive ? "+" : ""}{pnlPercent.toFixed(2)}%
                    </span>
                </div>
            </div>
        );
    };

    const MockChart = ({ type }) => (
        <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700">
            <div className="text-center space-y-2">
                {type === "pie" ? <Pie data={dataPie} /> : <Bar data={dataBar} options={{ responsive: true, plugins: { legend: { display: false } } }} />}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 font-montserrat">
            <div className="p-4 md:p-6 space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            Portfolio Overview
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            Track your investment performance and allocation
                        </p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Button variant="outline" size="sm" className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <Calendar className="w-4 h-4 mr-2" />
                            Last 30 days
                        </Button>
                        <Button variant="outline" size="sm" className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Total Value */}
                    <Card className="bg-gradient-to-br from-green-500 to-emerald-600 border-0 shadow-xl text-white overflow-hidden relative">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <Wallet className="w-8 h-8 text-white/80" />
                                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                                    Live
                                </Badge>
                            </div>
                            <div>
                                <p className="text-sm text-white/80 font-medium">Total Portfolio Value</p>
                                <p className="text-2xl md:text-3xl font-bold mt-1">
                                    ${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                </p>
                            </div>
                            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full"></div>
                        </CardContent>
                    </Card>

                    {/* Total P&L */}
                    <Card className={`border-0 shadow-xl overflow-hidden relative ${totalPnL >= 0
                        ? "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950"
                        : "bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950 dark:to-rose-950"
                        }`}>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <Activity className={`w-8 h-8 ${totalPnL >= 0 ? "text-green-600" : "text-red-600"}`} />
                                <div className={`w-3 h-3 rounded-full ${totalPnL >= 0 ? "bg-green-500" : "bg-red-500"} animate-pulse`}></div>
                            </div>
                            <div>
                                <p className={`text-sm font-medium ${totalPnL >= 0 ? "text-green-600" : "text-red-600"}`}>
                                    Total P&L
                                </p>
                                <p className={`text-2xl md:text-3xl font-bold mt-1 ${totalPnL >= 0 ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"}`}>
                                    {totalPnL >= 0 ? "+" : ""}${Math.abs(totalPnL).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                </p>
                                <div className="flex items-center mt-2">
                                    <PnLIndicator pnl={totalPnL} pnlPercent={totalPnLPercent} size="sm" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Best Performer */}
                    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-0 shadow-xl">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <Trophy className="w-8 h-8 text-purple-600" />
                                <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 border-0">
                                    Best
                                </Badge>
                            </div>
                            <div>
                                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Best Performer</p>
                                <p className="text-2xl font-bold text-purple-800 dark:text-purple-200 mt-1">
                                    {bestPerformer.symbol}
                                </p>
                                <div className="flex items-center mt-2">
                                    <span className="text-sm font-semibold text-green-500">
                                        +{bestPerformer.pnlPercent.toFixed(2)}%
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-0 shadow-xl">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <Target className="w-8 h-8 text-blue-600" />
                                <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-0">
                                    Active
                                </Badge>
                            </div>
                            <div>
                                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Total Assets</p>
                                <p className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-blue-200 mt-1">
                                    {portfolioData.length}
                                </p>
                                <p className="text-xs text-blue-500 mt-1">Cryptocurrencies</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-xl font-bold flex items-center gap-2">
                                    <Briefcase className="w-5 h-5" />
                                    Portfolio Holdings
                                </CardTitle>
                                <CardDescription className="mt-1">Your cryptocurrency investments breakdown</CardDescription>
                            </div>
                            <Button variant="ghost" size="sm">
                                <MoreVertical className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {portfolioData.map((asset, index) => (
                            <Card key={asset.symbol} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                                <CardContent className="p-4 md:p-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        {/* Asset Info */}
                                        <div className="flex items-center space-x-4">
                                            <div className="relative">
                                                <CryptoIcon coin={asset} />
                                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <p className="font-bold text-lg text-gray-900 dark:text-white">{asset.name}</p>
                                                    <Badge variant="outline" className="text-xs">
                                                        {asset.symbol}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    {asset.amount.toLocaleString()} {asset.symbol}
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    Avg. ${asset.avgBuyPrice.toLocaleString()}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Value & Allocation */}
                                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                                            <div className="text-center md:text-left">
                                                <p className="text-sm text-gray-500 mb-1">Current Value</p>
                                                <p className="text-xl font-bold text-gray-900 dark:text-white">
                                                    ${asset.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                                </p>
                                                <div className="flex items-center justify-center md:justify-start mt-1">
                                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 max-w-[100px]">
                                                        <div
                                                            className={`h-2 rounded-full bg-gradient-to-r ${asset.gradient}`}
                                                            style={{ width: `${Math.min(asset.allocation * 2, 100)}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-xs text-gray-500 ml-2">{asset.allocation}%</span>
                                                </div>
                                            </div>

                                            {/* P&L */}
                                            <div className="text-center md:text-right md:min-w-40 md:flex md:items-center md:flex-col text-xs md:text-base">
                                                <p className="text-xs md:text-base text-gray-500 mb-1">Profit & Loss</p>
                                                <PnLIndicator pnl={asset.pnl} pnlPercent={asset.pnlPercent} size="lg" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </CardContent>
                </Card>

                {/* Performance Chart */}
                <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                    <CardHeader className="pb-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <CardTitle className="text-xl font-bold flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5" />
                                    Portfolio Allocation
                                </CardTitle>
                                <CardDescription className="mt-1">Visual breakdown of your investment distribution</CardDescription>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Select value={chartSelected} onValueChange={setChartSelected}>
                                    <SelectTrigger className="w-fit min-w-[140px] border-2">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="pie">
                                            <div className="flex items-center gap-2">
                                                <PieChart className="w-4 h-4" />
                                                <span>Pie Chart</span>
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="bar">
                                            <div className="flex items-center gap-2">
                                                <BarChart3 className="w-4 h-4" />
                                                <span>Bar Chart</span>
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <MockChart type={chartSelected} />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            {portfolioData.map((asset) => (
                                <div key={asset.symbol} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${asset.gradient}`}></div>
                                    <div>
                                        <p className="font-medium text-sm text-gray-900 dark:text-white">{asset.symbol}</p>
                                        <p className="text-xs text-gray-500">{asset.allocation}%</p>
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

export default Portfolio;