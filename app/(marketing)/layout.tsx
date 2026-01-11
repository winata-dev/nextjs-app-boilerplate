export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-slate-900">
            Marketing
          </span>
          <span className="text-sm text-slate-500">Blossend</span>
        </div>
      </header>
      {children}
    </div>
  )
}
