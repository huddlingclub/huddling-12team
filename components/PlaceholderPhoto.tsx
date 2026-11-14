// 실제 사진이 오기 전까지 쓰는 임시 자리표시자입니다.
// 피그마에서 사진이 확정되면 이 컴포넌트 내부만 next/image로 바꾸면 됩니다.

type PlaceholderPhotoProps = {
  emoji: string;
  label: string;
  className?: string;
  bgClassName?: string;
};

export function PlaceholderPhoto({
  emoji,
  label,
  className = "",
  bgClassName = "bg-surface-muted",
}: PlaceholderPhotoProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center ${bgClassName} ${className}`}
    >
      <span aria-hidden="true">{emoji}</span>
    </div>
  );
}
