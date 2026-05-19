import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { fadeUp, motion, staggerContainer, viewportOnce } from "@/lib/motion";
import { contact } from "@/data/publicSectorContent";
import { SectionHeader } from "./SectionHeader";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `[Public Sector Inquiry] ${fd.get("organization") ?? ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nOrganization: ${fd.get("organization")}\nRole: ${fd.get("role")}\nEmail: ${fd.get("email")}\n\nMessage:\n${fd.get("message")}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }


  return (
    <section id="contact" className="ibc-section bg-gradient-wash">
      <div className="ibc-container">
        <SectionHeader
          eyebrow="Contact Us"
          title="Public Sector & Cooperative Contracting Inquiries"
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
            className="border border-border/70 bg-card rounded-xl p-4 sm:p-7 md:p-8"
          >
            <div className="grid gap-3 sm:gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Organization" name="organization" required />
              <Field label="Role / Title" name="role" />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="mt-6 flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="border-b border-input bg-transparent py-2 text-sm focus:border-primary focus:outline-none resize-y"
              />
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-end gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-background hover:bg-primary transition-colors"
              >
                {submitted ? "✓ Sent" : "Send inquiry →"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="border-b border-input bg-transparent py-2 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
