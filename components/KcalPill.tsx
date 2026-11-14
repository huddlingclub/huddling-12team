type KcalPillProps = {
  kcal: number;
  size?: "sm" | "md" | "lg";
};

const SIZE_CLASSES: Record<NonNullable<KcalPillProps["size"]>, string> = {
  sm: "px-2.5 py-1 text-sm",
  md: "px-3 py-1.5 text-base",
  lg: "px-4 py-2.5 text-2xl",
};

export function KcalPill({ kcal, size = "md" }: KcalPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-2xl bg-accent font-extrabold text-white ${SIZE_CLASSES[size]}`}
    >
      {kcal}
      <span className="text-xs font-semibold opacity-90">kcal</span>
    </span>
  );
}
