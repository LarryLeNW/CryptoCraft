import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-context-menu";
import { Switch } from "@radix-ui/react-switch";
import { Download, Key, LogOut, Mail, Phone, Settings, Smartphone, Upload, User } from "lucide-react";
import { useState } from "react";
import { Avatar } from "radix-ui";

function Profile() {
    const [activeTab, setActiveTab] = useState("profile")
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        sms: true,
        trading: true,
    })

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex justify-between  w-full">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h1>
                        <p className="text-gray-500 dark:text-gray-400">Manage your account settings and preferences</p>
                    </div>
                    <Button
                        variant="outline"
                        className="w-fit text-red-600 hover:text-red-700 hover:bg-red-50 md:hidden"
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                    </Button>
                </div>
            </div>

            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                        <Avatar.Root className="w-12 h-12">
                            <Avatar.AvatarImage src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/480920940_1158450402313841_751057879206463714_n.jpg?_nc_cat=102&_nc_cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-XTEjLK9Gh4Q7kNvwGjStZs&_nc_oc=Admbaz6b9A4-8tnVGZW5kAFb8xAdb2H4qqbkSdfUrNlcwOcRKF239R5eClPhPNJwojs&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=sFVY1JSlpeshI4-3L-KSCw&oh=00_AfJGQAMGMpDQ_Iu_9cziOqYgjypA8QA-l_nt1KUYluO4nQ&oe=68427906" />
                            <Avatar.AvatarFallback className="bg-primary text-primary-foreground">YX</Avatar.AvatarFallback>
                        </Avatar.Root>

                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h2>
                            <p className="text-gray-500 dark:text-gray-400">john.doe@example.com</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                                <Badge variant="secondary">Premium Member</Badge>
                                <Badge variant="outline">Verified</Badge>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <Button variant="outline">
                                <Upload className="w-4 h-4 mr-2" />
                                Change Photo
                            </Button>
                            <Button variant="outline">
                                <Download className="w-4 h-4 mr-2" />
                                Export Data
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("profile")}
                    className="flex-1"
                >
                    Profile
                </Button>
                <Button
                    variant={activeTab === "security" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("security")}
                    className="flex-1"
                >
                    Security
                </Button>
                <Button
                    variant={activeTab === "setting" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("setting")}
                    className="flex-1"
                >
                    Settings
                </Button>
            </div>

            {activeTab === "profile" && (
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                            <CardDescription>Update your personal details and contact information</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label >First Name</Label>
                                    <Input id="firstName" defaultValue="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label >Last Name</Label>
                                    <Input id="lastName" defaultValue="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label >Email Address</Label>
                                <Input id="email" type="email" defaultValue="john.doe@example.com" />
                            </div>

                            <div className="space-y-2">
                                <Label >Phone Number</Label>
                                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                            </div>

                            <div className="space-y-2">
                                <Label >Country</Label>
                                <Input id="country" defaultValue="United States" />
                            </div>

                            <Button className="bg-blue-500 hover:bg-blue-600 ml-auto">Save Changes</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Account Status</CardTitle>
                            <CardDescription>Your account verification and membership status</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <Mail className="w-5 h-5 text-green-500" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Email Verified</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Your email address is verified</p>
                                        </div>
                                    </div>
                                    <Badge variant="default">Verified</Badge>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <Phone className="w-5 h-5 text-green-500" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Phone Verified</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Your phone number is verified</p>
                                        </div>
                                    </div>
                                    <Badge variant="default">Verified</Badge>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <User className="w-5 h-5 text-blue-500" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Premium Member</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Access to premium features</p>
                                        </div>
                                    </div>
                                    <Badge variant="secondary">Active</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {activeTab === "security" && (
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password & Authentication</CardTitle>
                            <CardDescription>Manage your password and two-factor authentication</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 flex flex-col">
                            <div className="space-y-2">
                                <Label >Current Password</Label>
                                <Input id="currentPassword" type="password" />
                            </div>

                            <div className="space-y-2">
                                <Label >New Password</Label>
                                <Input id="newPassword" type="password" />
                            </div>

                            <div className="space-y-2">
                                <Label >Confirm New Password</Label>
                                <Input id="confirmPassword" type="password" />
                            </div>

                            <Button className="bg-blue-500 hover:bg-blue-600 w-fit ml-auto">Update Password</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Two-Factor Authentication</CardTitle>
                            <CardDescription>Add an extra layer of security to your account</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <Smartphone className="w-5 h-5 text-blue-500" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Authenticator App</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Use an authenticator app for 2FA</p>
                                        </div>
                                    </div>
                                    <Button variant="outline">Setup</Button>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <Phone className="w-5 h-5 text-green-500" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">SMS Authentication</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Receive codes via SMS</p>
                                        </div>
                                    </div>
                                    <Badge variant="default">Active</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>API Keys</CardTitle>
                            <CardDescription>Manage your API keys for trading and data access</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4 flex flex-col">
                                <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <Key className="w-5 h-5 text-gray-500" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Trading API</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Last used: 2 days ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Badge variant="default">Active</Badge>
                                        <Button variant="outline" size="sm">
                                            Manage
                                        </Button>
                                    </div>
                                </div>

                                <Button variant="outline" className="w-full md:w-1/2 md:ml-auto">
                                    <Key className="w-4 h-4 mr-2" />
                                    Create New API Key
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Button variant="destructive" className="w-full text-center">
                        Delete Account
                    </Button>
                </div>
            )}

            {activeTab === "setting" && (
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notification Preferences</CardTitle>
                            <CardDescription>Choose how you want to receive notifications</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label >Email Notifications</Label>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via email</p>
                                </div>
                                <Switch
                                    id="email-notifications"
                                    checked={notifications.email}
                                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, email: checked }))}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label >Push Notifications</Label>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive push notifications on your device</p>
                                </div>
                                <Switch
                                    id="push-notifications"
                                    checked={notifications.push}
                                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, push: checked }))}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label >SMS Notifications</Label>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via SMS</p>
                                </div>
                                <Switch
                                    id="sms-notifications"
                                    checked={notifications.sms}
                                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, sms: checked }))}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label >Trading Alerts</Label>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Receive alerts for price changes and trades
                                    </p>
                                </div>
                                <Switch
                                    id="trading-alerts"
                                    checked={notifications.trading}
                                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, trading: checked }))}
                                />
                            </div>
                        </CardContent>
                    </Card>
                    <Button variant="outline" className="w-full justify-start">
                        <Settings className="w-4 h-4 mr-2" />
                        Advanced Settings
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Profile;