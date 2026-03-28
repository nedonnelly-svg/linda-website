export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 py-8">
      <div className="mx-auto max-w-3xl px-4 text-sm text-muted md:px-6">
        <p className="max-w-prose">
          Linda J. Hoffman, PsyD · California: PSY26518 · New York: 025036
        </p>
        <p className="mt-3 max-w-prose text-muted/90">
          Practice information reflects{" "}
          <a
            href="https://www.drlindahoffman.com/"
            className="font-semibold text-accent hover:underline"
          >
            drlindahoffman.com
          </a>
          . Forms, scheduling, and legal notices on the official site remain authoritative.
        </p>
      </div>
    </footer>
  );
}
