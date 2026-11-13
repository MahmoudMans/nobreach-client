"use client";
// NB_ANNOUNCEMENT_BAR_V1

export function AnnouncementDismiss({
  id,
  storageKey,
  className
}: {
  id: string;
  storageKey: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      aria-label="Close announcement"
      onClick={() => {
        document.documentElement.setAttribute(
          "data-nb-announcement-dismissed",
          ""
        );
        try {
          window.localStorage.setItem(storageKey, id);
        } catch {
          // storage unavailable: the bar stays hidden until the next page load
        }
      }}
    >
      <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M4 4l8 8M12 4l-8 8" />
      </svg>
    </button>
  );
}
