type EmptyStateProps = {
  message: string;
  /** 큰 문구 아래에 작게 붙이는 안내 (선택) */
  subMessage?: string;
};

export function EmptyState({ message, subMessage }: EmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-16 text-center">
      <span className="text-3xl" aria-hidden="true">
        🌱
      </span>
      <p className="text-sm text-ink-muted">{message}</p>
      {subMessage && <p className="text-xs text-ink-muted">{subMessage}</p>}
    </div>
  );
}
