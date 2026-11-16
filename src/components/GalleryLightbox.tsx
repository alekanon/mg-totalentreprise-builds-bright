import { useEffect, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

type GalleryLightboxProps = {
  title: string;
  subtitle?: string;
  images: string[];
  index: number;
  open: boolean;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  /** Optional text panel shown beside the image (e.g. project description). */
  details?: ReactNode;
};

export function GalleryLightbox({
  title,
  subtitle,
  images,
  index,
  open,
  onIndexChange,
  onClose,
  details,
}: GalleryLightboxProps) {
  const count = images.length;
  const prev = () => onIndexChange((index - 1 + count) % count);
  const next = () => onIndexChange((index + 1) % count);

  useEffect(() => {
    if (!open || count < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
      if (e.key === "ArrowRight") onIndexChange((index + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, count, onIndexChange]);

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        hideClose
        className="max-w-[min(96vw,1500px)] grid-cols-[minmax(0,1fr)] gap-0 border-0 bg-transparent p-0 shadow-none sm:rounded-none"
      >
        <DialogDescription className="sr-only">Billedgalleri</DialogDescription>
        <div
          className={
            details ? "grid grid-cols-[minmax(0,1fr)] gap-4 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-stretch" : ""
          }
        >
          <div className="relative flex items-center justify-center">
            <img
              src={images[index]}
              alt={`${title} – billede ${index + 1}`}
              className="max-h-[40vh] w-auto max-w-full object-contain sm:max-h-[78vh]"
            />
          </div>
          {details && (
            <aside className="max-h-[32vh] overflow-y-auto sm:max-h-[78vh] border-t border-white/20 pt-6 text-white lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {details}
            </aside>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 px-1 sm:gap-6 text-white">
          <div className="min-w-0">
            <DialogTitle className="truncate text-lg font-semibold text-white">{title}</DialogTitle>
            {subtitle && <div className="mt-0.5 text-sm text-white/70">{subtitle}</div>}
          </div>
          <div className="flex flex-none items-center gap-2">
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Forrige billede"
                  className="p-2 text-white/80 transition-colors hover:text-white"
                >
                  <ChevronLeft className="h-7 w-7" strokeWidth={1.5} />
                </button>
                <span className="min-w-12 text-center text-sm tabular-nums text-white/80">
                  {index + 1} / {count}
                </span>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Næste billede"
                  className="p-2 text-white/80 transition-colors hover:text-white"
                >
                  <ChevronRight className="h-7 w-7" strokeWidth={1.5} />
                </button>
              </>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Luk"
              className="ml-3 p-2 text-white/80 transition-colors hover:text-white"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
