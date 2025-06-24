import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Bitcoin, Shield, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"
import paths from "@/constant/path"
import { useForm } from "react-hook-form"
import { RegisterForm, registerSchema } from "@/types/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = (data: RegisterForm) => {
        console.log("Register data:", data)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5" />

            <Card className="w-full max-w-md bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="text-center space-y-2">
                    <div className="flex justify-center">
                        <div className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full">
                            <Bitcoin className="h-8 w-8 text-white" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">Tạo tài khoản</CardTitle>
                    <CardDescription className="text-slate-400">Tham gia cộng đồng crypto ngay hôm nay</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="text-slate-200">Họ</Label>
                                <Input id="firstName" {...register("firstName")} className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500" />
                                {errors.firstName && <p className="text-sm text-red-300">{errors.firstName.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="text-slate-200">Tên</Label>
                                <Input id="lastName" {...register("lastName")} className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500" />
                                {errors.lastName && <p className="text-sm text-red-300">{errors.lastName.message}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-200">Email</Label>
                            <Input id="email" {...register("email")} className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500" />
                            {errors.email && <p className="text-sm text-red-300">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-slate-200">Số điện thoại</Label>
                            <Input id="phone"  {...register("phone")} className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500" />
                            {errors.phone && <p className="text-sm text-red-300">{errors.phone.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-slate-200">Mật khẩu</Label>
                            <Input id="password" type="password" {...register("password")} className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500" />
                            <p className="text-xs text-slate-400">Tối thiểu 8 ký tự, bao gồm chữ hoa, chữ thường và số</p>
                            {errors.password && <p className="text-sm text-red-300">{errors.password.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword" className="text-slate-200">Xác nhận mật khẩu</Label>
                            <Input id="confirmPassword" type="password" {...register("confirmPassword")} className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500" />
                            {errors.confirmPassword && <p className="text-sm text-red-300">{errors.confirmPassword.message}</p>}
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" {...register("terms")} className="border-slate-600" />
                                <Label htmlFor="terms" className="text-sm text-slate-400">
                                    Tôi đồng ý với{" "}
                                    <Link to="#terms" className="text-orange-400 hover:text-orange-300 underline">Điều khoản dịch vụ</Link>{" "}
                                    và{" "}
                                    <Link to="#privacy" className="text-orange-400 hover:text-orange-300 underline">Chính sách bảo mật</Link>
                                </Label>
                            </div>
                            {errors.terms && <p className="text-sm text-red-300">{errors.terms.message}</p>}

                            <div className="flex items-center space-x-2">
                                <Checkbox id="newsletter" className="border-slate-600" />
                                <Label htmlFor="newsletter" className="text-sm text-slate-400">
                                    Nhận thông báo về tin tức crypto và cập nhật thị trường
                                </Label>
                            </div>
                        </div>

                        <Button type="submit" className="w-full text-white font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700">
                            Tạo tài khoản
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-slate-600" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-slate-800 px-2 text-slate-400">Hoặc</span>
                        </div>
                    </div>

                    <Button variant="outline" className="w-full bg-slate-700/50 border-slate-600 text-white flex items-center transition-colors duration-500">
                        <p>
                            <svg className="h-4 w-4" viewBox="0 0 24 24">
                                <path
                                    fill="#EA4335"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#4285F4"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                        </p>
                        <p>
                            Đăng kí với Google
                        </p>
                    </Button>
                    <div className="text-center text-sm text-slate-400">
                        Đã có tài khoản?{" "}
                        <Link to={paths.PUBLIC.LOGIN} className="text-sky-300">
                            Đăng nhập ngay
                        </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                        <div className="text-center">
                            <Shield className="h-6 w-6 text-orange-400 mx-auto mb-1" />
                            <p className="text-xs text-slate-400">Bảo mật cao</p>
                        </div>
                        <div className="text-center">
                            <TrendingUp className="h-6 w-6 text-green-400 mx-auto mb-1" />
                            <p className="text-xs text-slate-400">Giao dịch nhanh</p>
                        </div>
                        <div className="text-center">
                            <Bitcoin className="h-6 w-6 text-yellow-400 mx-auto mb-1" />
                            <p className="text-xs text-slate-400">Đa dạng coin</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
