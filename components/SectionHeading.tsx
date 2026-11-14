type SectionHeadingProps = {
  title: string;
  badge?: string;
};

export function SectionHeading({ title, badge }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h2 className="text-lg font-bold text-ink">{title}</h2>
      {badge && (
        <span className="shrink-0 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-600">
          {badge}
        </span>
      )}
    </div>
  );
}
