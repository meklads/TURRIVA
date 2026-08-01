"use client";

import { useState } from "react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { TURRIVA_PUBLIC_EMAIL } from "@/shared/constants/brand";

type Props = {
  messages: LuxuryMessages;
  locale: Locale;
  source?: string;
};

function mapCity(city: string): "jeddah" | "makkah" | "other" {
  const normalized = city.trim().toLowerCase();
  if (/jeddah|جدة|jedda/.test(normalized)) return "jeddah";
  if (/makkah|mecca|مكة/.test(normalized)) return "makkah";
  return "other";
}

export function LuxuryQuoteForm({ messages, locale, source = "marketing_quote" }: Props) {
  const q = messages.quoteForm;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("sa");
  const [products, setProducts] = useState<string[]>([]);
  const [quantity, setQuantity] = useState("");
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (products.length === 0) return;
    setStatus("loading");

    const countryLabel = q.countries.find((c) => c.value === country)?.label ?? country;
    const productLabels = products
      .map((value) => q.products.find((p) => p.value === value)?.label ?? value)
      .join(", ");

    const payloadMessage = [
      `Email: ${email}`,
      `Country: ${countryLabel}`,
      `City: ${city}`,
      `Products: ${productLabels}`,
      quantity ? `Quantity/area: ${quantity}` : null,
      fileName ? `Attached file: ${fileName}` : null,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/design/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: phone || email,
          message: payloadMessage,
          locale,
          source,
          city: mapCity(city),
          interest: products.includes("b2b") ? "bespoke" : "execution",
          projectType: products.join(","),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="lux-quote-form__success">{q.formSuccess}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="lux-quote-form">
      <header className="lux-quote-form__head">
        <h2 className="lux-quote-form__title">
          {q.title}
          <span className="lux-quote-form__title-accent" aria-hidden />
        </h2>
        <p className="lux-quote-form__subtitle">{q.subtitle}</p>
      </header>

      <input
        required
        placeholder={`${q.formName} *`}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="lux-quote-form__input lux-quote-form__input--full"
      />

      <div className="lux-quote-form__row">
        <input
          type="email"
          required
          dir="ltr"
          placeholder={`${q.formEmail} *`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="lux-quote-form__input"
        />
        <input
          required
          dir="ltr"
          placeholder={`${q.formPhone} *`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="lux-quote-form__input"
        />
      </div>

      <div className="lux-quote-form__row">
        <input
          required
          placeholder={`${q.formCity} *`}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="lux-quote-form__input"
        />
        <select
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="lux-quote-form__input lux-quote-form__select"
        >
          {q.countries.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="lux-quote-form__products">
        <legend className="lux-quote-form__legend">{q.formProducts} *</legend>
        <div className="lux-quote-form__checks">
          {q.products.map((opt) => (
            <label key={opt.value} className="lux-quote-form__check">
              <input
                type="checkbox"
                checked={products.includes(opt.value)}
                onChange={(e) =>
                  setProducts((prev) =>
                    e.target.checked ? [...prev, opt.value] : prev.filter((v) => v !== opt.value)
                  )
                }
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="lux-quote-form__row">
        <input
          placeholder={`${q.formQuantity} *`}
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="lux-quote-form__input"
        />
        <label className="lux-quote-form__file">
          <span className="lux-quote-form__file-label">{q.formFile}</span>
          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,.webp,.dwg,.dxf"
            className="lux-quote-form__file-input"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
          <span className="lux-quote-form__file-name">{fileName || q.formFileHint}</span>
        </label>
      </div>

      <textarea
        required
        rows={4}
        placeholder={`${q.formMessage} *`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="lux-quote-form__input lux-quote-form__textarea"
      />

      {status === "error" && <p className="lux-quote-form__error">{q.formError}</p>}

      <button type="submit" disabled={status === "loading"} className="lux-quote-form__submit">
        {status === "loading" ? "…" : q.formSubmit}
      </button>
      <p className="lux-quote-form__direct-email">
        {locale === "ar" ? "أو راسلنا مباشرة:" : "Or email us directly:"}{" "}
        <a href={`mailto:${TURRIVA_PUBLIC_EMAIL}`}>{TURRIVA_PUBLIC_EMAIL}</a>
      </p>
    </form>
  );
}
