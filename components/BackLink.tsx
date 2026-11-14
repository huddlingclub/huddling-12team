import Link from "next/link";

// 화면 왼쪽 위 뒤로가기 버튼 (44px 터치 영역)
export default function BackLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      aria-label="뒤로 가기"
      className="flex size-11 items-center justify-center rounded-full bg-surface text-xl font-bold text-ink shadow-sm"
    >
      ‹
    </Link>
  );
}
