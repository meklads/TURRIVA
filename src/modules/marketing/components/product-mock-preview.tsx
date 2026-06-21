import type { Messages } from "@/shared/i18n/messages/types";

type Props = {
  mock: Messages["sales"]["mock"];
  compact?: boolean;
};

export function ProductMockPreview({ mock, compact = false }: Props) {
  return (
    <div className={compact ? "ruwaq-product-mock ruwaq-product-mock--hero" : "ruwaq-product-mock"}>
      <div className="ruwaq-product-mock-bar">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ms-auto text-[10px] font-medium text-ruwaq-navy-soft/60">ruwaq.co</span>
      </div>
      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-ruwaq-cream p-5 md:border-b-0 md:border-e">
          <p className="text-[10px] font-bold uppercase tracking-wider text-ruwaq-brown">
            {mock.inputLabel}
          </p>
          <div className="mt-3 space-y-2.5">
            {mock.fields.map((f) => (
              <div
                key={f}
                className="rounded-lg border border-ruwaq-cream bg-ruwaq-cream-bg/50 px-3 py-2 text-xs text-ruwaq-navy-soft"
              >
                {f}
              </div>
            ))}
          </div>
          <div className="mt-4 inline-flex rounded-full bg-ruwaq-brown px-4 py-1.5 text-xs font-bold text-white">
            {mock.generate}
          </div>
        </div>
        <div className="bg-ruwaq-brown-muted/40 p-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-ruwaq-brown">
            {mock.outputLabel}
          </p>
          <div className="mt-3 space-y-2">
            {mock.sections.map((sec) => (
              <div key={sec} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ruwaq-brown" />
                <span className="text-xs font-medium text-ruwaq-navy">{sec}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-semibold text-green-800">
              {mock.badge1}
            </span>
            <span className="rounded-full bg-ruwaq-brown-muted px-2.5 py-0.5 text-[10px] font-semibold text-ruwaq-brown">
              {mock.badge2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
