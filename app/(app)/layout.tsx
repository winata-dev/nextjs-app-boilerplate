export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-slate-900">
            App
          </span>
          <span className="text-sm text-slate-500">Account</span>
        </div>
      </header>
      {children}
    </div>
  );
}
