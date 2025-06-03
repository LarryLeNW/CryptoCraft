import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Briefcase, Calendar, Download, PieChart, TrendingDown, TrendingUp } from "lucide-react";
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
            value: 23456.78,
            allocation: 45.2,
            avgBuyPrice: 41200.0,
            pnl: 1123.45,
            pnlPercent: 5.02,
        },
        {
            symbol: "ETH",
            name: "Ethereum",
            amount: 5.2341,
            value: 13876.45,
            allocation: 26.8,
            avgBuyPrice: 2450.0,
            pnl: 1048.32,
            pnlPercent: 8.17,
        },
        {
            symbol: "BNB",
            name: "Binance Coin",
            amount: 12.45,
            value: 3931.71,
            allocation: 7.6,
            avgBuyPrice: 298.5,
            pnl: 215.96,
            pnlPercent: 5.81,
        },
        {
            symbol: "ADA",
            name: "Cardano",
            amount: 2500,
            value: 1212.5,
            allocation: 2.3,
            avgBuyPrice: 0.52,
            pnl: -87.5,
            pnlPercent: -6.73,
        },
    ]

    const totalValue = portfolioData.reduce((sum, asset) => sum + asset.value, 0)
    const totalPnL = portfolioData.reduce((sum, asset) => sum + asset.pnl, 0)
    const totalPnLPercent = (totalPnL / (totalValue - totalPnL)) * 100


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

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</h1>
                    <p className="text-gray-500 dark:text-gray-400">Track your investment performance</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Last 30 days
                    </Button>
                    <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-r dark:from-green-600 from-blue-600 to-green-500">
                    <CardContent className="p-4">
                        <div className="text-center">
                            <p className="text-sm text-gray-200 dark:text-gray-400">Total Value</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                ${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4">
                        <div className="text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Total P&L</p>
                            <p className={`text-2xl font-bold ${totalPnL >= 0 ? "text-green-500" : "text-red-500"}`}>
                                {totalPnL >= 0 ? "+" : ""}${totalPnL.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                            </p>
                            <div className="flex items-center justify-center space-x-1 mt-1">
                                {totalPnL >= 0 ? (
                                    <TrendingUp className="w-3 h-3 text-green-500" />
                                ) : (
                                    <TrendingDown className="w-3 h-3 text-red-500" />
                                )}
                                <span className={`text-sm ${totalPnL >= 0 ? "text-green-500" : "text-red-500"}`}>
                                    {totalPnL >= 0 ? "+" : ""}
                                    {totalPnLPercent.toFixed(2)}%
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4">
                        <div className="text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Best Performer</p>
                            <p className="text-lg font-semibold text-green-500">ETH</p>
                            <p className="text-sm text-green-500">+8.17%</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4">
                        <div className="text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Assets</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">{portfolioData.length}</p>
                            <p className="text-sm text-gray-500">Cryptocurrencies</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>

                    <div>
                        <CardTitle>Portfolio Allocation</CardTitle>
                        <CardDescription>Distribution of your investments</CardDescription>
                    </div>

                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {portfolioData.map((asset) => (
                            <div
                                key={asset.symbol}
                                className="flex  items-center justify-between text-xs md:text-base p-2 md:py-4 md:px-6 rounded-lg border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex items-center space-x-3 ">
                                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">{asset.symbol.slice(0, 2)}</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">{asset.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {asset.amount} {asset.symbol}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            ${asset.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{asset.allocation}% of portfolio</p>
                                    </div>
                                </div>



                                <div className="text-right">
                                    <div className={`flex items-center space-x-1 ${asset.pnl >= 0 ? "text-green-500" : "text-red-500"}`}>
                                        {asset.pnl >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                        <span className="font-medium">
                                            {asset.pnl >= 0 ? "+" : ""}${asset.pnl.toFixed(2)}
                                        </span>
                                    </div>
                                    <p className={`text-sm ${asset.pnl >= 0 ? "text-green-500" : "text-red-500"}`}>
                                        {asset.pnl >= 0 ? "+" : ""}
                                        {asset.pnlPercent.toFixed(2)}%
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>

                    <div className="flex md:items-center justify-between ">
                        <div className="flex flex-col items-center justify-center md:space-x-2">
                            <div className="text-xs md:text-base font-bold">Performance Chart</div>
                            <div className="text-xs md:text-base">Portfolio value over time</div>
                        </div>
                        <div className="flex items-center md:flex-row  space-x-1 md:space-x-2 text-xs md:text-base">
                            <Select value={chartSelected} onValueChange={(value) => setChartSelected(value)}>
                                <SelectTrigger className="w-fit">
                                    <SelectValue placeholder="Select chart type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="pie" >
                                        <div className="flex items-center gap-2">
                                            <PieChart className="w-4 h-4 " />
                                            <p>Pie Chart</p>
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="bar" >
                                        <div className="flex items-center gap-2">
                                            <BarChart3 className="w-4 h-4 mr-2" />
                                            <p>Bar Chart</p>
                                        </div>
                                    </SelectItem >
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="h-64 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        {chartSelected === "pie" && <Pie data={dataPie} />}
                        {chartSelected === "bar" && <Bar data={dataBar} options={{ responsive: true, plugins: { legend: { display: false } } }} />}
                    </div>
                </CardContent>
            </Card>
        </div>)
}

export default Portfolio;