import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { fadeUp, motion, staggerContainer, viewportOnce } from "@/lib/motion";
import { contact } from "@/data/publicSectorContent";
import { SectionHeader } from "./SectionHeader";

type InquiryType = "client" | "supplier";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>("client");
  const [messageLen, setMessageLen] = useState(0);

  const isSupplier = inquiryType === "supplier";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const prefix = isSupplier
      ? "[Supplier / Partnership Inquiry]"
      : "[Public-Sector Inquiry]";
    const subject = encodeURIComponent(
      `${prefix} ${fd.get("organization") ?? ""}`,
    );
    const body = encodeURIComponent(
      `Inquiry Type: ${isSupplier ? "Supplier / Partnership" : "Client / Public-Sector"}\nName: ${fd.get("name")}\nOrganization: ${fd.get("organization")}\nRole: ${fd.get("role")}\nEmail: ${fd.get("email")}\n\nMessage:\n${fd.get("message")}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="ibc-section bg-gradient-wash">
      <div className="ibc-container">
        <SectionHeader
          eyebrow="Contact Us"
          title="Public-Sector & Cooperative Contracting Inquiries"
          intro="For partnership opportunities, cooperative contracting discussions, or public-sector operational support inquiries, please contact:"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.06)}
            className="border-t border-border/70 pt-8 h-fit"
          >
            <motion.span variants={fadeUp} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              {contact.role}
            </motion.span>
            <motion.h3 variants={fadeUp} className="mt-2 text-2xl font-semibold">
              {contact.lead}
            </motion.h3>
            <motion.ul variants={staggerContainer(0.04)} className="mt-6 space-y-3">
              <motion.li variants={fadeUp}>
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  {contact.email}
                </a>
              </motion.li>
              <motion.li variants={fadeUp}>
                <a href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`} className="inline-flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  {contact.phone}
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.03)}
            className="rounded-3xl bg-card shadow-[0_10px_40px_-20px_rgba(15,23,42,0.15)] p-6 sm:p-8 md:p-10"
          >
            {/* Inquiry type toggle */}
            <div
              role="tablist"
              aria-label="Inquiry type"
              className="mb-6 inline-flex rounded-full border border-border/70 bg-muted/40 p-1 text-sm"
            >
              <button
                type="button"
                role="tab"
                aria-selected={!isSupplier}
                onClick={() => setInquiryType("client")}
                className={`rounded-full px-4 py-2 font-medium transition-colors ${
                  !isSupplier
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Public-Sector Inquiry
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={isSupplier}
                onClick={() => setInquiryType("supplier")}
                className={`rounded-full px-4 py-2 font-medium transition-colors ${
                  isSupplier
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Supplier / Partner
              </button>
            </div>

            <p className="mb-6 text-sm text-muted-foreground">
              {isSupplier
                ? "Share your capabilities with our partner network — for MBE/WBE, small businesses, and strategic partners interested in supporting public-sector initiatives."
                : "For agencies, cooperatives, and public-sector teams exploring contracting, staffing, or program support."}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <PillField label="Full Name*" name="name" required />
              <PillField
                label={isSupplier ? "Company Name*" : "Organization*"}
                name="organization"
                required
              />
              <PillField label="Role / Title*" name="role" required />
              <PillField label="Email*" name="email" type="email" required />
            </div>

            <div className="mt-4">
              <div className="mb-1 flex justify-end text-xs text-muted-foreground">
                {messageLen} / 400
              </div>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={400}
                placeholder={
                  isSupplier
                    ? "Capabilities, certifications (MBE/WBE/etc.), and areas of interest*"
                    : "Message*"
                }
                onChange={(e) => setMessageLen(e.target.value.length)}
                className="w-full rounded-3xl border border-input bg-transparent px-5 py-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {submitted
                ? "✓ Sent"
                : isSupplier
                  ? "Submit Supplier Information"
                  : "Send Inquiry"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function PillField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      type={type}
      required={required}
      placeholder={label}
      className="w-full rounded-full border border-input bg-transparent px-5 py-3.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
    />
  );
}
