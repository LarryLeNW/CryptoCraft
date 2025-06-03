import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownLeft, ArrowUpRight, CheckCircle, Clock, Copy, Download, QrCode, Send, Wallet2, XCircle } from "lucide-react";
import { useState } from "react";

function Wallet() {
    const [activeTab, setActiveTab] = useState("overview")

    const walletBalances = [
        { symbol: "BTC", name: "Bitcoin", balance: 0.5432, value: 23456.78, address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
        {
            symbol: "ETH",
            name: "Ethereum",
            balance: 5.2341,
            value: 13876.45,
            address: "0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4",
        },
        {
            symbol: "BNB",
            name: "Binance Coin",
            balance: 12.45,
            value: 3931.71,
            address: "bnb1grpf0955h0ykzq3ar5nmum7y6gdfl6lxfn46h2",
        },
        {
            symbol: "USDT",
            name: "Tether",
            balance: 1500.0,
            value: 1500.0,
            address: "0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4",
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
        },
    ]

    const totalValue = walletBalances.reduce((sum, wallet) => sum + wallet.value, 0)

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Wallet</h1>
                    <p className="text-gray-500 dark:text-gray-400">Manage your cryptocurrency wallets</p>
                </div>
                <div className="flex sm:items-center space-x-2 text-xs md:text-base">
                    <Button className="bg-green-500 hover:bg-green-600 w-full sm:w-auto flex justify-center items-center ">
                        <Download className="w-4 h-4 mr-1 md:mr-2" />
                        Receive
                    </Button>
                    <Button className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto flex justify-center items-center">
                        <Send className="w-4 h-4 mr-1 md:mr-2" />
                        Send
                    </Button>
                </div>
            </div>

            <Card>
                <CardContent className="p-6">
                    <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Total Wallet Balance</p>
                        <p className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            ${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                            <Button size="lg" variant="outline" className="flex justify-center items-center">
                                <QrCode className="w-5 h-5 mr-2" />
                                QR Code
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 overflow-x-auto">
                <Button
                    variant={activeTab === "overview" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("overview")}
                    className="flex-1 min-w-[100px]"
                >
                    Overview
                </Button>
                <Button
                    variant={activeTab === "transactions" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("transactions")}
                    className="flex-1 min-w-[100px]"
                >
                    Transactions
                </Button>
                <Button
                    variant={activeTab === "addresses" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("addresses")}
                    className="flex-1 min-w-[100px]"
                >
                    Addresses
                </Button>
            </div>

            {activeTab === "overview" && (
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Wallet Balances</CardTitle>
                            <CardDescription>Your cryptocurrency holdings across different wallets</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {walletBalances.map((wallet) => (
                                    <div
                                        key={wallet.symbol}
                                        className="flex flex-col sm:flex-row items-center sm:items-start justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                                    >
                                        <div className="flex items-center space-x-3 mb-2 sm:mb-0 w-full sm:w-auto">
                                            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">{wallet.symbol.slice(0, 2)}</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white">{wallet.name}</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    {wallet.balance} {wallet.symbol}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="text-right w-full sm:w-auto">
                                            <p className="font-medium text-gray-900 dark:text-white">
                                                ${wallet.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                            </p>
                                            <div className="flex justify-center sm:justify-end items-center space-x-2 mt-1  text-xs md:text-base">
                                                <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                                                    <Send className="w-3 h-3 mr-1" />
                                                    Send
                                                </Button>
                                                <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                                                    <Download className="w-3 h-3 mr-1" />
                                                    Receive
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {activeTab === "transactions" && (
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Transactions</CardTitle>
                            <CardDescription>Your latest wallet transactions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {transactions.map((tx) => (
                                    <div
                                        key={tx.id}
                                        className="flex flex-col sm:flex-row items-center sm:items-start justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                                    >
                                        <div className="flex items-center space-x-3 mb-2 sm:mb-0 w-full sm:w-auto">
                                            <div
                                                className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === "receive"
                                                    ? "bg-green-100 dark:bg-green-900"
                                                    : "bg-red-100 dark:bg-red-900"
                                                    }`}
                                            >
                                                {tx.type === "receive" ? (
                                                    <ArrowDownLeft className="w-5 h-5 text-green-600 dark:text-green-400" />
                                                ) : (
                                                    <ArrowUpRight className="w-5 h-5 text-red-600 dark:text-red-400" />
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white">
                                                    {tx.type === "receive" ? "Received" : "Sent"} {tx.symbol}
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{tx.date}</p>
                                            </div>
                                        </div>

                                        <div className="text-right w-full sm:w-auto">
                                            <p
                                                className={`font-medium ${tx.type === "receive"
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

                                        <div className="flex items-center space-x-2 mt-2 sm:mt-0 w-full sm:w-auto justify-center sm:justify-start">
                                            <Badge
                                                variant={
                                                    tx.status === "completed"
                                                        ? "default"
                                                        : tx.status === "pending"
                                                            ? "secondary"
                                                            : "destructive"
                                                }
                                            >
                                                {tx.status === "completed" && <CheckCircle className="w-3 h-3 mr-1" />}
                                                {tx.status === "pending" && <Clock className="w-3 h-3 mr-1" />}
                                                {tx.status === "failed" && <XCircle className="w-3 h-3 mr-1" />}
                                                {tx.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {activeTab === "addresses" && (
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Wallet Addresses</CardTitle>
                            <CardDescription>Your cryptocurrency wallet addresses</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {walletBalances.map((wallet) => (
                                    <div
                                        key={wallet.symbol}
                                        className="p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                                    >
                                        <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
                                            <div className="flex items-center space-x-3 w-full sm:w-auto mb-2 sm:mb-0">
                                                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-bold text-xs">{wallet.symbol.slice(0, 2)}</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">{wallet.name}</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{wallet.symbol} Address</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 w-full sm:w-auto justify-center sm:justify-start">
                                                <Button size="sm" variant="outline">
                                                    <QrCode className="w-3 h-3 mr-1" />
                                                    QR
                                                </Button>
                                                <Button size="sm" variant="outline" onClick={() => copyToClipboard(wallet.address)}>
                                                    <Copy className="w-3 h-3 mr-1" />
                                                    Copy
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                                            <p className="text-sm font-mono text-gray-700 dark:text-gray-300 break-all">{wallet.address}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>

    )
}

export default Wallet;