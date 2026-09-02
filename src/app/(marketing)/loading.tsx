export default function MarketingLoading() {
  return (
    <div className="lux-route-loading" role="status" aria-live="polite">
      <div className="lux-route-loading__bar" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
