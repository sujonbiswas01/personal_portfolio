export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, #1a1f3d 0%, #0d1117 60%, #030712 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, #6366f1 0%, #3b82f6 40%, transparent 70%)",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative w-20 h-20">
          <div
            className="absolute inset-0 rounded-full animate-spin"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 70%, #6366f1 100%)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px))",
              mask:
                "radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px))",
            }}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-indigo-500/20 flex items-center justify-center m-1">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-indigo-400"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        </div>
        {/* Name */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white/90 tracking-tight">
            Sujon Biswas
          </h1>
          <p className="text-sm text-indigo-300/50 mt-1 font-medium tracking-wider uppercase">
            Loading...
          </p>
        </div>
        {/* Progress indicator */}
        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(90deg, #6366f1, #3b82f6, #06b6d4)",
              width: "60%",
            }}
          />
        </div>
      </div>
    </div>
  );
}