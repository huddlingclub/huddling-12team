import Image from "next/image";

type Props = { src: string | null; alt: string; size: number; className?: string };

// 사진. 아직 사진이 없으면 이름 첫 글자 자리표시자를 보여준다.
export default function Thumb({ src, alt, size, className = "" }: Props) {
  if (src) {
    return <Image src={src} alt={alt} width={size} height={size} className={`object-cover ${className}`} />;
  }
  return (
    <span
      role="img"
      aria-label={alt}
      style={{ width: size, height: size }}
      className={`flex shrink-0 items-center justify-center bg-white/70 font-bold text-ink-soft ${className}`}
    >
      {alt[0]}
    </span>
  );
}
