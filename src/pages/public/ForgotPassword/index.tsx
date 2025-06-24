import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bitcoin, ArrowLeft, Mail, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import paths from "@/constant/path"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ForgotPasswordForm, forgotPasswordSchema } from "@/types/auth"

export default function ForgotPasswordPage() {
    const [step, setStep] = useState<"email" | "sent">("email")

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<ForgotPasswordForm>({
        resolver: zodResolver(forgotPasswordSchema),
    })

    const email = watch("email")

    const onSubmit = (data: ForgotPasswordForm) => {
        console.log("Gửi email đặt lại:", data.email)
        setStep("sent")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5" />

            <Card className="w-full max-w-md bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="text-center space-y-4">
                    <div className="flex justify-center">
                        <div className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full">
                            {step === "email" ? (
                                <Bitcoin className="h-8 w-8 text-white" />
                            ) : (
                                <CheckCircle className="h-8 w-8 text-white" />
                            )}
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">
                        {step === "email" ? "Quên mật khẩu" : "Kiểm tra email"}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                        {step === "email"
                            ? "Nhập email để nhận liên kết đặt lại mật khẩu"
                            : "Chúng tôi đã gửi liên kết đặt lại mật khẩu đến email của bạn"}
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    {step === "email" ? (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-slate-200">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500"
                                    {...register("email")}
                                />
                                {errors.email && <p className="text-sm text-red-300">{errors.email.message}</p>}
                            </div>

                            <Alert className="bg-blue-900/20 border-blue-700 text-blue-200">
                                <Mail className="h-4 w-4" color="white" />
                                <AlertDescription>
                                    Chúng tôi sẽ gửi liên kết đặt lại mật khẩu đến email này nếu tài khoản tồn tại.
                                </AlertDescription>
                            </Alert>
                            <Button
                                type="submit"
                                className="w-full text-white font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700"
                            >
                                Gửi liên kết đặt lại
                            </Button>
                        </form>
                    ) : (
                        <div className="space-y-4">
                            <Alert className="bg-green-900/20 border-green-700 text-green-200">
                                <CheckCircle className="h-4 w-4" color="white" />
                                <AlertDescription>
                                    Liên kết đặt lại mật khẩu đã được gửi đến <strong>{email}</strong>
                                </AlertDescription>
                            </Alert>

                            <div className="text-sm text-slate-400 space-y-2">
                                <p>Vui lòng kiểm tra hộp thư đến và làm theo hướng dẫn để đặt lại mật khẩu.</p>
                                <p>Không thấy email? Kiểm tra thư mục spam hoặc thư rác.</p>
                            </div>

                            <Button
                                onClick={() => setStep("email")}
                                variant="outline"
                                className="w-full bg-slate-700/50 border-slate-600 text-white hover:bg-slate-700"
                            >
                                Gửi lại email
                            </Button>
                        </div>
                    )}

                    <div className="flex items-center justify-center space-x-2 text-sm group">
                        <ArrowLeft className="h-4 w-4 text-slate-400 group-hover:-translate-x-1 group-hover:scale-110 transition-all duration-300" />
                        <Link to={paths.PUBLIC.LOGIN} className="text-sky-300">
                            Quay lại đăng nhập
                        </Link>
                    </div>

                    <div className="text-center text-sm text-slate-400">
                        Chưa có tài khoản?{" "}
                        <Link to="/register" className="text-orange-400 hover:text-orange-300 underline">
                            Đăng ký ngay
                        </Link>
                    </div>

                    <div className="pt-4 border-t border-slate-700">
                        <div className="text-center text-xs text-slate-500">
                            <p>Cần hỗ trợ? Liên hệ với chúng tôi</p>
                            <p className="text-orange-400">support@cryptoplatform.com</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
