type BadgeDotProps = {
  label: string
}

export function BadgeDot({ label }: BadgeDotProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-700">
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full bg-emerald-500"
      />
      {label}
    </span>
  )
}
