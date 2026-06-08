import Link from "next/link";
import { Layers, FileText, LayoutGrid, Settings, Database, Wrench, ChevronRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";

const examples = [
  {
    icon: Layers,
    title: "컴포넌트 쇼케이스",
    description: "Button, Badge, Dialog, Toast 등 shadcn/ui 컴포넌트 전체를 실제 예제와 함께 확인하세요.",
    href: "/components",
    label: "쇼케이스 보기",
  },
  {
    icon: FileText,
    title: "폼 예제",
    description: "react-hook-form으로 만든 로그인·회원가입 폼, 실시간 검증과 에러 메시지를 확인하세요.",
    href: "/examples/forms",
    label: "폼 예제 보기",
  },
  {
    icon: LayoutGrid,
    title: "레이아웃 예제",
    description: "1/2/3 컬럼 그리드, 비대칭 레이아웃, 카드 리스트 등 다양한 레이아웃 패턴을 확인하세요.",
    href: "/examples/layouts",
    label: "레이아웃 보기",
  },
  {
    icon: Settings,
    title: "설정 & 최적화",
    description: "테마 전환, 알림 설정, 언어 설정 등 앱 설정 페이지의 구현 패턴을 확인하세요.",
    href: "/examples/settings",
    label: "설정 보기",
  },
  {
    icon: Database,
    title: "데이터 페칭",
    description: "Server Component와 Client Component 방식의 데이터 페칭, 로딩·에러 처리 패턴을 확인하세요.",
    href: "/examples/data-fetching",
    label: "데이터 페칭 보기",
  },
  {
    icon: Wrench,
    title: "usehooks-ts 예제",
    description: "useLocalStorage, useDebounce, useCounter 등 실전 훅의 동작 방식을 직접 체험해보세요.",
    href: "/examples/hooks",
    label: "훅 예제 보기",
  },
];

export default function ExamplesPage() {
  return (
    <div className="py-8">
      <Container>
        <PageHeader
          title="예제 탐색"
          description="스타터킷의 모든 기능을 실제 동작하는 예제를 통해 탐색해보세요."
          className="mb-10"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((example) => {
            const Icon = example.icon;
            return (
              <Card key={example.href} className="group flex flex-col transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{example.title}</CardTitle>
                  <CardDescription>{example.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={example.href}>
                      {example.label}
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
