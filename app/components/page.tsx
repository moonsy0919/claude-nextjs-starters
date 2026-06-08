"use client";

import { toast } from "sonner";
import { Info, AlertCircle, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      {children}
      <Separator className="mt-8" />
    </section>
  );
}

export default function ComponentsPage() {
  return (
    <div className="py-8">
      <Container>
        <PageHeader
          title="컴포넌트 쇼케이스"
          description="스타터킷에 포함된 모든 UI 컴포넌트를 확인하세요."
          className="mb-10"
        />

        <div className="space-y-10">
          {/* 버튼 */}
          <Section title="Button">
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
              <Button disabled>Disabled</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
            </div>
          </Section>

          {/* 배지 */}
          <Section title="Badge">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </Section>

          {/* 입력 */}
          <Section title="Input / Label / Textarea">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="bio">소개</Label>
                <Textarea id="bio" placeholder="자기소개를 입력하세요..." />
              </div>
            </div>
          </Section>

          {/* 체크박스 / 스위치 */}
          <Section title="Checkbox / Switch">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">이용약관 동의</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">알림 수신</Label>
              </div>
            </div>
          </Section>

          {/* 진행바 */}
          <Section title="Progress / Skeleton">
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">완료율 68%</p>
                <Progress value={68} />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          </Section>

          {/* 아바타 */}
          <Section title="Avatar">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>김민</AvatarFallback>
              </Avatar>
            </div>
          </Section>

          {/* 알림 */}
          <Section title="Alert">
            <div className="space-y-3">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>안내</AlertTitle>
                <AlertDescription>기본 알림 메시지입니다.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>오류</AlertTitle>
                <AlertDescription>오류가 발생했습니다. 다시 시도해주세요.</AlertDescription>
              </Alert>
            </div>
          </Section>

          {/* 탭 */}
          <Section title="Tabs">
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">개요</TabsTrigger>
                <TabsTrigger value="tab2">상세</TabsTrigger>
                <TabsTrigger value="tab3">설정</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4 text-sm text-muted-foreground">
                개요 탭 콘텐츠입니다.
              </TabsContent>
              <TabsContent value="tab2" className="mt-4 text-sm text-muted-foreground">
                상세 탭 콘텐츠입니다.
              </TabsContent>
              <TabsContent value="tab3" className="mt-4 text-sm text-muted-foreground">
                설정 탭 콘텐츠입니다.
              </TabsContent>
            </Tabs>
          </Section>

          {/* 아코디언 */}
          <Section title="Accordion">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq1">
                <AccordionTrigger>스타터킷은 무료인가요?</AccordionTrigger>
                <AccordionContent>네, 완전히 무료이며 MIT 라이선스입니다.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq2">
                <AccordionTrigger>커스터마이징이 가능한가요?</AccordionTrigger>
                <AccordionContent>shadcn/ui 기반으로 모든 컴포넌트를 자유롭게 수정할 수 있습니다.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Section>

          {/* 오버레이: Dialog / Dropdown / Tooltip */}
          <Section title="Dialog / Dropdown / Tooltip / Toast">
            <div className="flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">다이얼로그 열기</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>다이얼로그 예시</DialogTitle>
                  </DialogHeader>
                  <p className="text-sm text-muted-foreground">
                    모달 내용을 여기에 작성합니다.
                  </p>
                </DialogContent>
              </Dialog>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">드롭다운 열기</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>프로필</DropdownMenuItem>
                  <DropdownMenuItem>설정</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">로그아웃</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">툴팁 호버</Button>
                </TooltipTrigger>
                <TooltipContent>툴팁 메시지입니다</TooltipContent>
              </Tooltip>

              <Button
                variant="outline"
                onClick={() => toast.success("성공!", { description: "작업이 완료되었습니다." })}
              >
                토스트 표시
              </Button>
            </div>
          </Section>

          {/* EmptyState */}
          <Section title="EmptyState">
            <Card>
              <CardContent className="p-0">
                <EmptyState
                  icon={Inbox}
                  title="데이터가 없습니다"
                  description="새 항목을 추가하면 여기에 표시됩니다."
                  action={{ label: "추가하기", onClick: () => toast.info("추가 버튼 클릭") }}
                />
              </CardContent>
            </Card>
          </Section>
        </div>
      </Container>
    </div>
  );
}
