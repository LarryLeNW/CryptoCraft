import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import paths from "@/constant/path";
import { faker } from "@faker-js/faker";
import {
    AlertCircle,
    Bell,
    Camera,
    CheckCircle,
    Crown,
    Download,
    Key,
    Lock,
    LogOut,
    Mail,
    Phone,
    Settings,
    Shield,
    Smartphone,
    Trash2,
    User
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate()

    const [activeTab, setActiveTab] = useState("profile");
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        sms: true,
        trading: true,
        security: true,
        marketing: false,
    });

    const userData = {
        name: "Alexandra Johnson",
        email: "alexandra.johnson@crypto.com",
        phone: "+1 (555) 123-4567",
        avatar: faker.image.avatar(),
        country: "United States",
        joinDate: "January 2023",
        membershipTier: "Premium",
        isVerified: true,
        totalTrades: "1,247",
        portfolioValue: "$125,850",
        coverImage: "https://marketplace.canva.com/EAEGvGqwDJY/3/0/1600w/canva-black-and-white-silhouette-motivational-quotes-facebook-cover-vAG0g1GqZ4I.jpg"
    };

    const tabButtons = [
        { id: "profile", label: "Profile", icon: User },
        { id: "security", label: "Security", icon: Shield },
        { id: "settings", label: "Settings", icon: Settings },
    ];

    const TabButton = ({ tab, isActive, onClick, icon: Icon, label }) => (
        <Button
            variant={isActive ? "default" : "ghost"}
            size="sm"
            onClick={() => onClick(tab)}
            className={`flex-1 gap-2 transition-all duration-200 ${isActive
                ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
        >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{label}</span>
        </Button>
    );

    const StatusCard = ({ icon: Icon, title, description, status, statusType = "success" }) => {
        const statusStyles = {
            success: "text-green-500 bg-green-50 dark:bg-green-950",
            warning: "text-yellow-500 bg-yellow-50 dark:bg-yellow-950",
            info: "text-blue-500 bg-blue-50 dark:bg-blue-950",
        };

        return (
            <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-md transition-all duration-200">
                <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${statusStyles[statusType]}`}>
                        <Icon className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
                    </div>
                </div>
                <Badge variant={statusType === "success" ? "default" : "secondary"} className="font-medium">
                    {status}
                </Badge>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 font-montserrat">
            <div className="p-4 md:p-6 space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Account Profile
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            Manage your account settings and preferences
                        </p>
                    </div>
                    <div className="flex items-center justify-end">
                        <Button
                            variant="outline"
                            size="sm"
                            className=" md:hidden text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950 border-red-200 dark:border-red-800"
                            onClick={() => navigate(paths.PUBLIC.LOGIN)}
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign Out
                        </Button>
                    </div>
                </div>

                <div className="rounded-md shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                    <CardContent className="p-0">
                        <div className="relative h-60 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden group/cover">
                            {userData.coverImage && (
                                <img
                                    src={userData.coverImage}
                                    alt="Cover"
                                    className="w-full h-full object-cover"
                                />
                            )}

                            <label htmlFor="cover" className="absolute inset-0 bg-black/30 opacity-0 group-hover/cover:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer">
                                <div className="text-white text-center">
                                    <Camera className="w-8 h-8 mx-auto mb-2" />
                                    <span className="text-sm font-medium">Change Cover</span>
                                </div>
                            </label>
                            <input type="file" className="hidden" id="cover" accept="image/*" />
                        </div>

                        <div className="relative px-6 pb-6">
                            <div className="flex flex-col items-center -mt-20">
                                <div className="relative group">
                                    <div className="w-24 h-24 border-white shadow-xl rounded-full bg-white ">
                                        <img src={userData.avatar} alt={userData.name} className="object-cover w-24 h-24 rounded-full" />
                                        {!userData.avatar && <div className="text-2xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                                            {userData.name.split(' ').map(n => n[0]).join('')}
                                        </div>}
                                    </div>
                                    <label htmlFor="avatar" className="absolute inset-0 h-24 w-24 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer">
                                        <Camera className="w-6 h-6 text-white" />
                                    </label>
                                    <input type="file" className="hidden" id="avatar" accept="image/*" />
                                </div>

                                {/* User Info */}
                                <div className="flex-1 text-center space-y-4 mt-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                            {userData.name}
                                        </h2>
                                        {userData.isVerified && (
                                            <CheckCircle className="w-6 h-6 text-blue-500" />
                                        )}
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        {userData.email}
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-2">
                                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 gap-1">
                                            <Crown className="w-3 h-3" />
                                            {userData.membershipTier} Member
                                        </Badge>
                                        <Badge variant="outline" className="border-green-200 text-green-700 dark:text-green-400 gap-1">
                                            <CheckCircle className="w-3 h-3" />
                                            Verified
                                        </Badge>
                                        <Badge variant="secondary" className="gap-1">
                                            Member since {userData.joinDate}
                                        </Badge>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Total Trades</p>
                                            <p className="text-xl font-bold text-gray-900 dark:text-white">{userData.totalTrades}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Portfolio Value</p>
                                            <p className="text-xl font-bold text-green-600">{userData.portfolioValue}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </CardContent>
                </div>

                {/* Tab Navigation */}
                <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1 shadow-inner">
                    {tabButtons.map(({ id, label, icon }) => (
                        <TabButton
                            key={id}
                            tab={id}
                            isActive={activeTab === id}
                            onClick={setActiveTab}
                            icon={icon}
                            label={label}
                        />
                    ))}
                </div>

                {/* Profile Tab Content */}
                {activeTab === "profile" && (
                    <div className="space-y-6">
                        {/* Personal Information */}
                        <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    Personal Information
                                </CardTitle>
                                <CardDescription>Update your personal details and contact information</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                                        <Input id="firstName" defaultValue="Alexandra" className="border-2 focus:border-blue-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                                        <Input id="lastName" defaultValue="Johnson" className="border-2 focus:border-blue-500" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        defaultValue={userData.email}
                                        className="border-2 focus:border-blue-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        defaultValue={userData.phone}
                                        className="border-2 focus:border-blue-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="country" className="text-sm font-medium">Country</Label>
                                    <Input
                                        id="country"
                                        defaultValue={userData.country}
                                        className="border-2 focus:border-blue-500"
                                    />
                                </div>

                                <div className="flex justify-end pt-4">
                                    <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                                        Save Changes
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Account Status */}
                        <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-2">
                                    <Shield className="w-5 h-5" />
                                    Account Status
                                </CardTitle>
                                <CardDescription>Your account verification and membership status</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <StatusCard
                                    icon={Mail}
                                    title="Email Verified"
                                    description="Your email address is verified and secure"
                                    status="Verified"
                                    statusType="success"
                                />
                                <StatusCard
                                    icon={Phone}
                                    title="Phone Verified"
                                    description="Your phone number is verified for 2FA"
                                    status="Verified"
                                    statusType="success"
                                />
                                <StatusCard
                                    icon={Crown}
                                    title="Premium Member"
                                    description="Access to premium features and priority support"
                                    status="Active"
                                    statusType="info"
                                />
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Security Tab Content */}
                {activeTab === "security" && (
                    <div className="space-y-6">
                        {/* Password Section */}
                        <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-2">
                                    <Lock className="w-5 h-5" />
                                    Password & Authentication
                                </CardTitle>
                                <CardDescription>Manage your password and authentication settings</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="currentPassword" className="text-sm font-medium">Current Password</Label>
                                    <Input
                                        id="currentPassword"
                                        type="password"
                                        placeholder="Enter current password"
                                        className="border-2 focus:border-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="newPassword" className="text-sm font-medium">New Password</Label>
                                    <Input
                                        id="newPassword"
                                        type="password"
                                        placeholder="Enter new password"
                                        className="border-2 focus:border-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm New Password</Label>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirm new password"
                                        className="border-2 focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex justify-end pt-4">
                                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                                        Update Password
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Two-Factor Authentication */}
                        <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-2">
                                    <Smartphone className="w-5 h-5" />
                                    Two-Factor Authentication
                                </CardTitle>
                                <CardDescription>Add an extra layer of security to your account</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <StatusCard
                                    icon={Smartphone}
                                    title="Authenticator App"
                                    description="Use an authenticator app for enhanced security"
                                    status="Setup"
                                    statusType="warning"
                                />
                                <StatusCard
                                    icon={Phone}
                                    title="SMS Authentication"
                                    description="Receive verification codes via SMS"
                                    status="Active"
                                    statusType="success"
                                />
                            </CardContent>
                        </Card>

                        {/* API Keys */}
                        <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-2">
                                    <Key className="w-5 h-5" />
                                    API Keys
                                </CardTitle>
                                <CardDescription>Manage your API keys for trading and data access</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <StatusCard
                                    icon={Key}
                                    title="Trading API"
                                    description="Last used: 2 days ago • Read & Trade permissions"
                                    status="Active"
                                    statusType="success"
                                />
                                <Button variant="outline" className="w-full border-2 border-dashed hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <Key className="w-4 h-4 mr-2" />
                                    Create New API Key
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Danger Zone */}
                        <Card className="shadow-xl border-0 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-2 text-red-600">
                                    <AlertCircle className="w-5 h-5" />
                                    Danger Zone
                                </CardTitle>
                                <CardDescription>Irreversible and destructive actions</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="destructive" className="w-full bg-red-600 hover:bg-red-700">
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete Account
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Settings Tab Content */}
                {activeTab === "settings" && (
                    <div className="space-y-6">
                        {/* Notification Preferences */}
                        <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-2">
                                    <Bell className="w-5 h-5" />
                                    Notification Preferences
                                </CardTitle>
                                <CardDescription>Choose how you want to receive notifications</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {Object.entries({
                                    email: { title: "Email Notifications", description: "Receive notifications via email" },
                                    push: { title: "Push Notifications", description: "Receive push notifications on your device" },
                                    sms: { title: "SMS Notifications", description: "Receive notifications via SMS" },
                                    trading: { title: "Trading Alerts", description: "Receive alerts for price changes and trades" },
                                    security: { title: "Security Alerts", description: "Receive alerts for account security events" },
                                    marketing: { title: "Marketing Updates", description: "Receive promotional offers and updates" }
                                }).map(([key, { title, description }]) => (
                                    <div key={key} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                        <div className="space-y-1">
                                            <Label className="text-base font-medium">{title}</Label>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
                                        </div>
                                        <Switch
                                            checked={notifications[key]}
                                            onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, [key]: checked }))}
                                            className="data-[state=checked]:bg-blue-500"
                                        />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Advanced Settings */}
                        <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-2">
                                    <Settings className="w-5 h-5" />
                                    Advanced Settings
                                </CardTitle>
                                <CardDescription>Additional configuration options</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Button variant="outline" className="w-full justify-start border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <Settings className="w-4 h-4 mr-2" />
                                    Theme & Display Settings
                                </Button>
                                <Button variant="outline" className="w-full justify-start border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <Download className="w-4 h-4 mr-2" />
                                    Data Export & Backup
                                </Button>
                                <Button variant="outline" className="w-full justify-start border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <Shield className="w-4 h-4 mr-2" />
                                    Privacy Settings
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;