"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function ThemeCard() {
  const { theme, setTheme } = useTheme();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">테마 설정</CardTitle>
        <CardDescription>
          next-themes의 useTheme을 사용한 라이트/다크/시스템 테마 전환 예제입니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={theme} onValueChange={setTheme} className="space-y-3">
          {[
            { value: "light", label: "라이트 모드" },
            { value: "dark", label: "다크 모드" },
            { value: "system", label: "시스템 설정 따르기" },
          ].map(({ value, label }) => (
            <div key={value} className="flex items-center gap-3">
              <RadioGroupItem value={value} id={`theme-${value}`} />
              <Label htmlFor={`theme-${value}`} className="cursor-pointer">
                {label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}

const notificationItems = [
  { key: "email", label: "이메일 알림", description: "새 활동에 대한 이메일 수신" },
  { key: "push", label: "푸시 알림", description: "브라우저 푸시 알림" },
  { key: "marketing", label: "마케팅 수신", description: "이벤트·업데이트 정보 수신" },
] as const;

function NotificationCard() {
  const [state, setState] = useState({ email: true, push: false, marketing: false });

  const toggle = (key: keyof typeof state) => {
    setState((prev) => ({ ...prev, [key]: !prev[key] }));
    toast.info("알림 설정이 변경됐습니다.");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">알림 설정</CardTitle>
        <CardDescription>
          Switch 컴포넌트로 알림 항목을 개별 토글하는 패턴입니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {notificationItems.map(({ key, label, description }) => (
          <div key={key} className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">{label}</p>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
            <Switch checked={state[key]} onCheckedChange={() => toggle(key)} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function DisplayCard() {
  const [language, setLanguage] = useState("ko");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">표시 설정</CardTitle>
        <CardDescription>
          Select 컴포넌트를 사용한 언어/지역 설정 패턴입니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>언어</Label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ko">한국어</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ja">日本語</SelectItem>
              <SelectItem value="zh">中文</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button size="sm" onClick={() => toast.success("설정이 저장됐습니다.")}>
          저장
        </Button>
      </CardContent>
    </Card>
  );
}

export default function SettingsPage() {
  return (
    <div className="py-8">
      <Container>
        <PageHeader
          title="설정 & 최적화"
          description="테마, 알림, 표시 설정 등 앱 설정 페이지의 구현 패턴을 확인하세요."
          className="mb-10"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ThemeCard />
          <NotificationCard />
          <DisplayCard />
        </div>
      </Container>
    </div>
  );
}
