import { useEffect, useState, type FormEvent } from "react";
import { Mail, Phone, Upload } from "lucide-react";
import { fadeUp, motion, staggerContainer, viewportOnce } from "@/lib/motion";
import { contact } from "@/data/publicSectorContent";
import { SectionHeader } from "./SectionHeader";

type InquiryType = "client" | "supplier";

const INTEREST_AREAS = [
  "Staffing",
  "Consulting",
  "Technology",
  "Training",
  "Operational Support",
  "Emergency Response",
  "Subcontracting",
  "Teaming",
  "Other",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>("client");
  const [messageLen, setMessageLen] = useState(0);
  const [experienceLen, setExperienceLen] = useState(0);
  const [fileName, setFileName] = useState<string | null>(null);
  const [interests, setInterests] = useState<string[]>([]);
  const [interestError, setInterestError] = useState(false);

  const isSupplier = inquiryType === "supplier";

  useEffect(() => {
    function syncInquiryFromHash() {
      if (window.location.hash === "#supplier-information") {
        setInquiryType("supplier");
      }
    }

    syncInquiryFromHash();
    window.addEventListener("hashchange", syncInquiryFromHash);
    return () => window.removeEventListener("hashchange", syncInquiryFromHash);
  }, []);

  function toggleInterest(area: string) {
    setInterests((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSupplier && interests.length === 0) {
      setInterestError(true);
      return;
    }
    setInterestError(false);
    const fd = new FormData(e.currentTarget);
    if (isSupplier) {
      const subject = encodeURIComponent(
        `[Supplier / Partnership Submission] ${fd.get("company") ?? ""}`,
      );
      const body = encodeURIComponent(
        [
          `Inquiry Type: Supplier / Partnership`,
          `Company: ${fd.get("company")}`,
          `Contact Name: ${fd.get("contact")}`,
          `Email: ${fd.get("email")}`,
          `Phone: ${fd.get("phone")}`,
          `Website: ${fd.get("website")}`,
          `Core Services: ${fd.get("services")}`,
          `Certifications: ${fd.get("certifications")}`,
          `NAICS Codes: ${fd.get("naics")}`,
          `Geographic Coverage: ${fd.get("geography")}`,
          `Public-Sector Experience: ${fd.get("experience")}`,
          `Interest Areas: ${interests.join(", ")}`,
          `Capability Statement: ${fileName ?? "Not attached"}`,
        ].join("\n"),
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    } else {
      const subject = encodeURIComponent(
        `[Public-Sector Inquiry] ${fd.get("organization") ?? ""}`,
      );
      const body = encodeURIComponent(
        `Inquiry Type: Public-Sector / Client\nName: ${fd.get("name")}\nOrganization: ${fd.get("organization")}\nRole: ${fd.get("role")}\nEmail: ${fd.get("email")}\n\nMessage:\n${fd.get("message")}`,
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    }
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
            id="supplier-information"
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
                ? "Share your capabilities with our partner network. Open to MBE, WBE, SBE, DBE, SDVOB, veteran-owned, and other certified diverse and small businesses interested in teaming, subcontracting, staffing, or operational support."
                : "For agencies, cooperatives, and public-sector teams exploring contracting, staffing, or program support."}
            </p>

            {isSupplier ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <PillField label="Company Name*" name="company" required />
                  <PillField label="Contact Name*" name="contact" required />
                  <PillField label="Email*" name="email" type="email" required />
                  <PillField label="Phone*" name="phone" type="tel" required />
                  <PillField label="Website" name="website" type="url" />
                  <PillField label="NAICS Codes (if known)" name="naics" />
                </div>

                <div className="mt-4 grid gap-4">
                  <PillField label="Core Services*" name="services" required />
                  <PillField
                    label="Certifications (MBE, WBE, SBE, DBE, SDVOB, Veteran-Owned, etc.)"
                    name="certifications"
                  />
                  <PillField label="Geographic Coverage" name="geography" />
                  <div>
                    <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                      <span className="text-sm font-medium text-foreground">Public-Sector Experience Summary*</span>
                      <span>{experienceLen} / 200</span>
                    </div>
                    <textarea
                      name="experience"
                      required
                      rows={3}
                      maxLength={200}
                      placeholder="Brief summary of public-sector experience"
                      onChange={(e) => setExperienceLen(e.target.value.length)}
                      className="w-full rounded-3xl border border-input bg-transparent px-5 py-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y"
                    />
                  </div>
                </div>

                {/* Interest areas */}
                <div className="mt-6">
                  <p className="mb-2 text-sm font-medium text-foreground">
                    Interest Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {INTEREST_AREAS.map((area) => {
                      const active = interests.includes(area);
                      return (
                        <button
                          type="button"
                          key={area}
                          onClick={() => toggleInterest(area)}
                          aria-pressed={active}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                            active
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground"
                          }`}
                        >
                          {area}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Capability statement upload */}
                <div className="mt-6">
                  <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-dashed border-input bg-transparent px-5 py-4 text-sm hover:border-primary transition-colors">
                    <span className="flex items-center gap-3 text-muted-foreground">
                      <Upload className="h-4 w-4 text-primary" aria-hidden="true" />
                      {fileName ?? "Upload Capability Statement (PDF, DOC)"}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {fileName ? "Replace" : "Browse"}
                    </span>
                    <input
                      type="file"
                      name="capability"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) =>
                        setFileName(e.target.files?.[0]?.name ?? null)
                      }
                    />
                  </label>
                </div>

              </>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <PillField label="Full Name*" name="name" required />
                  <PillField label="Organization*" name="organization" required />
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
                    placeholder="Message*"
                    onChange={(e) => setMessageLen(e.target.value.length)}
                    className="w-full rounded-3xl border border-input bg-transparent px-5 py-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y"
                  />
                </div>
              </>
            )}

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

            {isSupplier && (
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Submission of supplier information does not guarantee
                subcontracting, teaming, or engagement, but allows IBC to review
                supplier capabilities for potential alignment with future
                opportunities.
              </p>
            )}
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
