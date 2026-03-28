export function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={`mx-auto w-full max-w-3xl flex-1 px-4 py-10 md:px-6 md:py-14 ${className}`}>
      {children}
    </main>
  );
}
