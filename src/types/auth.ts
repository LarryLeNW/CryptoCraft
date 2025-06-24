import { z } from "zod";

export const registerSchema = z.object({
    firstName: z.string().nonempty({ message: "Họ không được để trống" }),
    lastName: z.string().nonempty({ message: "Tên không được để trống" }),
    email: z.string().nonempty({ message: "Email không được để trống" }).email({ message: "Email không hợp lệ" }),
    phone: z.string().nonempty({ message: "Số điện thoại không được để trống" }),
    password: z.string()
        .nonempty({ message: "Mật khẩu không được để trống" })
        .min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" })
        .regex(/[A-Z]/, { message: "Mật khẩu cần ít nhất 1 chữ hoa" })
        .regex(/[a-z]/, { message: "Mật khẩu cần ít nhất 1 chữ thường" })
        .regex(/[0-9]/, { message: "Mật khẩu cần ít nhất 1 số" }),
    confirmPassword: z.string().nonempty({ message: "Vui lòng xác nhận mật khẩu" }),
    terms: z.literal(true, {
        errorMap: () => ({ message: "Bạn phải đồng ý với điều khoản" }),
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
});
export type RegisterForm = z.infer<typeof registerSchema>


export const loginSchema = z.object({
    email: z
        .string()
        .nonempty({ message: "Email không được để trống" })
        .email({ message: "Email không hợp lệ" }),
    password: z
        .string()
        .nonempty({ message: "Mật khẩu không được để trống" })
        .min(6, { message: "Mật khẩu phải từ 6 ký tự" }),
});
export type LoginForm = z.infer<typeof loginSchema>


export const forgotPasswordSchema = z.object({
    email: z.string().nonempty("Email không được để trống").email("Email không hợp lệ"),
})
export type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>

