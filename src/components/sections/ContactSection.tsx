import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, ArrowRight, Check } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { contact, inquiryTypes } from "@/data/publicSectorContent";
import { SectionHeader } from "./SectionHeader";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `[Public Sector Inquiry] ${fd.get("inquiryType") ?? "General"} — ${fd.get("organization") ?? ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nOrganization: ${fd.get("organization")}\nRole: ${fd.get("role")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone")}\nInquiry Type: ${fd.get("inquiryType")}\n\nMessage:\n${fd.get("message")}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-wash">
      <div className="ibc-container">
        <SectionHeader
          eyebrow="Contact"
          title="Start a public-sector or cooperative contracting conversation"
          intro="For procurement inquiries, teaming opportunities, or public-sector program support, contact the IBC team."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.08)}
            className="rounded-3xl border border-border bg-card p-8 shadow-card h-fit"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              {contact.role}
            </motion.span>
            <motion.h3 variants={fadeUp} className="mt-2 text-2xl font-bold">
              {contact.lead}
            </motion.h3>
            <motion.ul variants={staggerContainer(0.06)} className="mt-6 space-y-3">
              <motion.li variants={fadeUp}>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand-soft text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  {contact.email}
                </a>
              </motion.li>
              <motion.li variants={fadeUp}>
                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand-soft text-primary">
                    <Phone className="h-4 w-4" />
                  </span>
                  {contact.phone}
                </a>
              </motion.li>
              <motion.li variants={fadeUp} className="flex items-center gap-3 text-sm font-medium">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand-soft text-primary">
                  <User className="h-4 w-4" />
                </span>
                Public Sector & Cooperative Contracting
              </motion.li>
            </motion.ul>

            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-2xl border border-border bg-secondary/40 p-5 text-sm text-foreground/85 leading-relaxed"
            >
              IBC is positioned to support public-sector and cooperative contracting opportunities
              that require responsive onboarding, transparent reporting, defined scope execution,
              and scalable operational support.
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.04)}
            className="rounded-3xl border border-border bg-card p-8 shadow-card"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Organization" name="organization" required />
              <Field label="Role / Title" name="role" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Inquiry type
                </label>
                <select
                  name="inquiryType"
                  required
                  defaultValue=""
                  className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  {inquiryTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Submitting opens your email client addressed to {contact.email}.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:shadow-card-hover transition-shadow"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" /> Sent
                  </>
                ) : (
                  <>
                    Send inquiry <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
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
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
