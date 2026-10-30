import { useState } from "react";
import { ImageIcon } from "lucide-react";

// Renders the real image when present; a branded placeholder until the file
// is committed to /public/images. Never upscales beyond the natural width.
export default function SmartImage({ src, alt, width, height, className = "", eager = false, testId }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        data-testid={testId}
        role="img"
        aria-label={alt}
        style={width ? { maxWidth: width, aspectRatio: height ? `${width} / ${height}` : "4 / 5" } : { aspectRatio: "4 / 5" }}
        className={`img-fallback flex w-full flex-col items-center justify-center gap-3 ${className}`}
      >
        <ImageIcon size={32} aria-hidden="true" className="text-plum/40" />
        <span className="px-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-plum/50">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "sync" : "async"}
      fetchpriority={eager ? "high" : "auto"}
      onError={() => setFailed(true)}
      data-testid={testId}
      style={width ? { maxWidth: width } : undefined}
      className={className}
    />
  );
}
