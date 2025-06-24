import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import paths from "@/constant/path"
import { useToast } from "@/hooks/use-toast"
import { LoginForm, loginSchema } from "@/types/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { Bitcoin } from "lucide-react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"


export default function LoginPage() {
    const { toast } = useToast()
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "demo2025@gmail.com",
            password: "freelacer2025",
        },
    });

    const onSubmit = (data: LoginForm) => {
        if (
            data.email !== "demo2025@gmail.com" &&
            data.password !== "freelacer2025"
        ) {
            alert("User không tồn tại");
            return;
        }

        toast({
            description: "Welcome back! 🎉",
            variant: "default",
            className: "bg-green-500 text-white border-green-400",
            duration: 2000,
        })

        navigate(paths.PUBLIC.HOME);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
            <Card className="w-full max-w-md bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="text-center space-y-4">
                    <div className="flex justify-center">
                        <div className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full">
                            <Bitcoin className="h-8 w-8 text-white" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white font-montserrat">Đăng nhập</CardTitle>
                    <CardDescription className="text-slate-400">Đăng nhập vào tài khoản crypto của bạn</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-200">
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="your@email.com"
                                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500"
                                {...register("email")}
                            />
                            <p className="text-sm min-h-[1.25rem] text-red-300">
                                {errors.email?.message ?? ''}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-slate-200">
                                Mật khẩu
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500"
                                {...register("password")}
                            />
                            <p className="text-sm min-h-[1.25rem] text-red-300">
                                {errors.password?.message ?? ''}
                            </p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="remember" className="rounded border-slate-600 bg-slate-700" />
                                <Label htmlFor="remember" className="text-sm text-slate-400">
                                    Ghi nhớ đăng nhập
                                </Label>
                            </div>
                            <Link to={paths.PUBLIC.FORGOT_PASSWORD} className="text-sm text-orange-400 hover:text-orange-300 underline">
                                Quên mật khẩu?
                            </Link>
                        </div>
                        <Button
                            type="submit"
                            className="w-full text-white font-semibold bg-gradient-to-r from-sky-500 to-blue-600 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700"
                        >
                            Đăng nhập
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
                            Đăng nhập với Google
                        </p>
                    </Button>
                    <div className="text-center text-sm text-slate-400">
                        Chưa có tài khoản?{" "}
                        <Link to={paths.PUBLIC.REGISTER} className="text-orange-400 hover:text-orange-300 underline">
                            Đăng ký ngay
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
