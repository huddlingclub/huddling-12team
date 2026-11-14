type EmptyStateProps = {
  message: string;
};

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-16 text-center">
      <span className="text-3xl" aria-hidden="true">
        🌱
      </span>
      <p className="text-sm text-ink-muted">{message}</p>
    </div>
  );
}
