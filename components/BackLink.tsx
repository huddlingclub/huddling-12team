import Link from "next/link";

type BackLinkProps = {
  href: string;
  label: string;
  variant?: "plain" | "onPhoto";
};

export function BackLink({ href, label, variant = "plain" }: BackLinkProps) {
  const variantClass =
    variant === "onPhoto" ? "bg-white shadow-sm" : "hover:bg-black/5";

  return (
    <Link
      href={href}
      aria-label={label}
      className={`flex size-11 items-center justify-center rounded-full text-ink ${variantClass}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M15 18l-6-6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
