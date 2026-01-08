import { memo } from "react";

const CreatorImage = memo(({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
});

export default CreatorImage;
