export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 py-10">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-text">Dr. Linda Hoffman, PsyD</p>
            <p className="mt-1 text-sm text-muted">Licensed clinical psychologist · Trauma-focused care</p>
            <p className="mt-3 text-sm text-muted">
              California PSY26518 · New York 025036
            </p>
          </div>
          <div className="text-sm">
            <a
              href="/contact"
              className="inline-flex rounded-full bg-accent px-4 py-2 font-semibold text-bg hover:brightness-110"
            >
              Request a free phone consultation
            </a>
            <p className="mt-4 text-muted">
              Intake forms and downloadable paperwork:{" "}
              <a
                href="https://www.drlindahoffman.com/contact-260934.html"
                className="font-medium text-accent hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                patient portal &amp; forms ↗
              </a>
            </p>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-muted/80">
          If you are in crisis, call 988 or 911, or text HOME to 741741. This site is not monitored for
          emergencies.
        </p>
      </div>
    </footer>
  );
}
