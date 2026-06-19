function SkeletonCard() {
  return (
    <div
      className="
        w-full
        max-w-[420px]
        rounded-3xl
        overflow-hidden
        border
        border-zinc-800
        bg-zinc-950
        p-5
      "
    >
      {/* Image Skeleton */}
      <div
        className="
          w-full
          h-[420px]
          rounded-3xl
          animate-pulse
          bg-gradient-to-r
          from-zinc-900
          via-zinc-800
          to-zinc-900
        "
      />
      {/* Content Skeleton */}
      <div className="mt-6 space-y-4">
        <div
          className="
            h-8
            w-2/3
            rounded-xl
            animate-pulse
            bg-zinc-800
          "
        />
        <div
          className="
            h-4
            w-full
            rounded-lg
            animate-pulse
            bg-zinc-800
          "
        />
        <div
          className="
            h-4
            w-4/5
            rounded-lg
            animate-pulse
            bg-zinc-800
          "
        />
        <div
          className="
            h-12
            w-40
            rounded-2xl
            animate-pulse
            bg-zinc-800
          "
        />
      </div>
    </div>
  );
}

export default SkeletonCard;