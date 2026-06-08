"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";

type LoginFields = {
  email: string;
  password: string;
};

type RegisterFields = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function LoginFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFields>();

  const onSubmit = async (data: LoginFields) => {
    await new Promise((r) => setTimeout(r, 800));
    toast.success("로그인 성공!", { description: `${data.email}으로 로그인됐습니다.` });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">로그인 폼</CardTitle>
        <CardDescription>
          이메일 형식 검증, 필수 입력 검증, 제출 로딩 상태를 포함합니다.
          빈 칸으로 제출하거나 잘못된 이메일을 입력해보세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="space-y-2">
            <Label htmlFor="login-email">이메일</Label>
            <Input
              id="login-email"
              type="email"
              placeholder="example@email.com"
              aria-invalid={!!errors.email}
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: { value: /\S+@\S+\.\S+/, message: "올바른 이메일 형식이 아닙니다." },
              })}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-password">비밀번호</Label>
            <Input
              id="login-password"
              type="password"
              placeholder="8자 이상"
              aria-invalid={!!errors.password}
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                minLength: { value: 8, message: "비밀번호는 8자 이상이어야 합니다." },
              })}
            />
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "로그인 중..." : "로그인"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function RegisterFormSection() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFields>();

  const onSubmit = async (data: RegisterFields) => {
    await new Promise((r) => setTimeout(r, 800));
    toast.success("회원가입 완료!", { description: `${data.name}님, 환영합니다.` });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">회원가입 폼</CardTitle>
        <CardDescription>
          비밀번호 일치 검증, 여러 필드 처리 패턴을 포함합니다.
          비밀번호 확인란에 다른 값을 입력해보세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="space-y-2">
            <Label htmlFor="reg-name">이름</Label>
            <Input
              id="reg-name"
              placeholder="홍길동"
              aria-invalid={!!errors.name}
              {...register("name", { required: "이름을 입력해주세요." })}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-email">이메일</Label>
            <Input
              id="reg-email"
              type="email"
              placeholder="example@email.com"
              aria-invalid={!!errors.email}
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: { value: /\S+@\S+\.\S+/, message: "올바른 이메일 형식이 아닙니다." },
              })}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-password">비밀번호</Label>
            <Input
              id="reg-password"
              type="password"
              placeholder="8자 이상"
              aria-invalid={!!errors.password}
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                minLength: { value: 8, message: "비밀번호는 8자 이상이어야 합니다." },
              })}
            />
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-confirm">비밀번호 확인</Label>
            <Input
              id="reg-confirm"
              type="password"
              placeholder="비밀번호 재입력"
              aria-invalid={!!errors.confirmPassword}
              {...register("confirmPassword", {
                required: "비밀번호를 다시 입력해주세요.",
                validate: (v) => v === getValues("password") || "비밀번호가 일치하지 않습니다.",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "처리 중..." : "회원가입"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function FormsPage() {
  return (
    <div className="py-8">
      <Container>
        <PageHeader
          title="폼 예제"
          description="react-hook-form으로 구현한 검증 폼입니다. 빈 칸으로 제출하거나 잘못된 값을 입력해보세요."
          className="mb-10"
        />
        <div className="grid gap-8 md:grid-cols-2">
          <LoginFormSection />
          <RegisterFormSection />
        </div>
      </Container>
    </div>
  );
}
