import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownLeft, ArrowUpRight, CheckCircle, Clock, Copy, Download, QrCode, Send, XCircle, TrendingUp, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function Wallet() {
    const [activeTab, setActiveTab] = useState("overview")
    const [isBalanceVisible, setIsBalanceVisible] = useState(true)

    const walletBalances = [
        { symbol: "BTC", name: "Bitcoin", balance: 0.5432, value: 23456.78, address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", color: "from-orange-400 to-orange-600", change: "+5.2%" },
        {
            symbol: "ETH",
            name: "Ethereum",
            balance: 5.2341,
            value: 13876.45,
            address: "0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4",
            color: "from-blue-400 to-blue-600",
            change: "+2.8%"
        },
        {
            symbol: "BNB",
            name: "Binance Coin",
            balance: 12.45,
            value: 3931.71,
            address: "bnb1grpf0955h0ykzq3ar5nmum7y6gdfl6lxfn46h2",
            color: "from-yellow-400 to-yellow-600",
            change: "-1.2%"
        },
        {
            symbol: "USDT",
            name: "Tether",
            balance: 1500.0,
            value: 1500.0,
            address: "0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4",
            color: "from-green-400 to-green-600",
            change: "+0.1%"
        },
    ]

    const transactions = [
        {
            id: "1",
            type: "receive",
            symbol: "BTC",
            amount: 0.0234,
            value: 1012.45,
            status: "completed",
            date: "2024-01-15 14:30",
            hash: "1a2b3c4d5e6f7g8h9i0j",
            from: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"
        },
        {
            id: "2",
            type: "send",
            symbol: "ETH",
            amount: 1.5,
            value: 3975.45,
            status: "completed",
            date: "2024-01-14 09:15",
            hash: "2b3c4d5e6f7g8h9i0j1k",
            to: "0x8ba1f109551bD432803012645Hac136c"
        },
        {
            id: "3",
            type: "receive",
            symbol: "USDT",
            amount: 500,
            value: 500.0,
            status: "pending",
            date: "2024-01-13 16:45",
            hash: "3c4d5e6f7g8h9i0j1k2l",
            from: "0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4"
        },
        {
            id: "4",
            type: "send",
            symbol: "BNB",
            amount: 2.5,
            value: 789.5,
            status: "failed",
            date: "2024-01-12 11:20",
            hash: "4d5e6f7g8h9i0j1k2l3m",
            to: "bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23"
        },
    ]

    const totalValue = walletBalances.reduce((sum, wallet) => sum + wallet.value, 0)
    const totalChange = "+3.2%"

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
    }

    const formatAddress = (address) => {
        return `${address.slice(0, 6)}...${address.slice(-6)}`
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            My Wallet
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your cryptocurrency portfolio</p>
                    </div>
                    <div className="flex gap-3">
                        <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                            <Download className="w-4 h-4 mr-2" />
                            Receive
                        </Button>
                        <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                            <Send className="w-4 h-4 mr-2" />
                            Send
                        </Button>
                    </div>
                </div>

                {/* Balance Card */}
                <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl">
                    <CardContent className="p-8">
                        <div className="text-center space-y-4">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Total Portfolio Value</p>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                                    className="h-6 w-6 p-0"
                                >
                                    {isBalanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </Button>
                            </div>

                            <div className="space-y-2">
                                <p className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                    {isBalanceVisible ? `$${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}` : "••••••"}
                                </p>
                                <div className="flex items-center justify-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-green-500" />
                                    <span className="text-green-500 font-medium">{totalChange}</span>
                                    <span className="text-gray-500 text-sm">24h</span>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <Button size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow">
                                    <QrCode className="w-5 h-5 mr-2" />
                                    Show QR Code
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Tab Navigation */}
                <div className="flex bg-white dark:bg-gray-800 rounded-xl p-1 shadow-lg border border-gray-200 dark:border-gray-700">
                    {["overview", "transactions", "addresses"].map((tab) => (
                        <Button
                            key={tab}
                            variant={activeTab === tab ? "default" : "ghost"}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 capitalize ${activeTab === tab ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' : ''}`}
                        >
                            {tab}
                        </Button>
                    ))}
                </div>

                {/* Overview Tab */}
                {activeTab === "overview" && (
                    <Card className="shadow-xl border-0">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-xl">Portfolio Overview</CardTitle>
                            <CardDescription>Your cryptocurrency holdings and performance</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                {walletBalances.map((wallet) => (
                                    <div
                                        key={wallet.symbol}
                                        className="group p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-all duration-200"
                                    >
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-12 h-12 bg-gradient-to-r ${wallet.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                                    <span className="text-white font-bold text-sm">{wallet.symbol}</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{wallet.name}</h3>
                                                    <p className="text-gray-500 dark:text-gray-400">
                                                        {wallet.balance} {wallet.symbol}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                                <div className="text-right">
                                                    <p className="font-bold text-xl text-gray-900 dark:text-white">
                                                        ${wallet.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                                    </p>
                                                    <p className={`text-sm ${wallet.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                                        {wallet.change}
                                                    </p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button size="sm" variant="outline" className="hover:bg-blue-50 dark:hover:bg-blue-900">
                                                        <Send className="w-3 h-3 mr-1" />
                                                        Send
                                                    </Button>
                                                    <Button size="sm" variant="outline" className="hover:bg-green-50 dark:hover:bg-green-900">
                                                        <Download className="w-3 h-3 mr-1" />
                                                        Receive
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Transactions Tab */}
                {activeTab === "transactions" && (
                    <Card className="shadow-xl border-0">
                        <CardHeader>
                            <CardTitle className="text-xl">Transaction History</CardTitle>
                            <CardDescription>Your recent cryptocurrency transactions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {transactions.map((tx) => (
                                    <div
                                        key={tx.id}
                                        className="p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-md transition-all duration-200"
                                    >
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                            <div className="flex items-center space-x-4">
                                                <div
                                                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${tx.type === "receive"
                                                        ? "bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800"
                                                        : "bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900 dark:to-red-800"
                                                        }`}
                                                >
                                                    {tx.type === "receive" ? (
                                                        <ArrowDownLeft className="w-6 h-6 text-green-600 dark:text-green-400" />
                                                    ) : (
                                                        <ArrowUpRight className="w-6 h-6 text-red-600 dark:text-red-400" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900 dark:text-white">
                                                        {tx.type === "receive" ? "Received" : "Sent"} {tx.symbol}
                                                    </p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{tx.date}</p>
                                                    <p className="text-xs text-gray-400 font-mono">
                                                        {tx.type === "receive" ? `From: ${formatAddress(tx.from)}` : `To: ${formatAddress(tx.to)}`}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                                <div className="text-right">
                                                    <p
                                                        className={`font-bold text-lg ${tx.type === "receive"
                                                            ? "text-green-600 dark:text-green-400"
                                                            : "text-red-600 dark:text-red-400"
                                                            }`}
                                                    >
                                                        {tx.type === "receive" ? "+" : "-"}
                                                        {tx.amount} {tx.symbol}
                                                    </p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        ${tx.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                                    </p>
                                                </div>

                                                <Badge
                                                    variant={
                                                        tx.status === "completed"
                                                            ? "default"
                                                            : tx.status === "pending"
                                                                ? "secondary"
                                                                : "destructive"
                                                    }
                                                    className="h-8 px-3"
                                                >
                                                    {tx.status === "completed" && <CheckCircle className="w-3 h-3 mr-1" />}
                                                    {tx.status === "pending" && <Clock className="w-3 h-3 mr-1" />}
                                                    {tx.status === "failed" && <XCircle className="w-3 h-3 mr-1" />}
                                                    {tx.status}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Addresses Tab */}
                {activeTab === "addresses" && (
                    <Card className="shadow-xl border-0">
                        <CardHeader>
                            <CardTitle className="text-xl">Wallet Addresses</CardTitle>
                            <CardDescription>Your cryptocurrency wallet addresses for receiving funds</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {walletBalances.map((wallet) => (
                                    <div
                                        key={wallet.symbol}
                                        className="p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
                                    >
                                        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-10 h-10 bg-gradient-to-r ${wallet.color} rounded-lg flex items-center justify-center shadow-md`}>
                                                    <span className="text-white font-bold text-xs">{wallet.symbol}</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 dark:text-white">{wallet.name}</h3>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{wallet.symbol} Network</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button size="sm" variant="outline" className="hover:bg-blue-50 dark:hover:bg-blue-900">
                                                    <QrCode className="w-4 h-4 mr-1" />
                                                    QR Code
                                                </Button>
                                                <Button size="sm" variant="outline" onClick={() => copyToClipboard(wallet.address)} className="hover:bg-green-50 dark:hover:bg-green-900">
                                                    <Copy className="w-4 h-4 mr-1" />
                                                    Copy
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-4 border">
                                            <p className="text-sm font-mono text-gray-700 dark:text-gray-300 break-all leading-relaxed">
                                                {wallet.address}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default Wallet;