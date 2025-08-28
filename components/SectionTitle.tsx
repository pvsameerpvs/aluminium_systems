type Props = { eyebrow?: string; title: string; subtitle?: string; className?: string };
export default function SectionTitle({ eyebrow, title, subtitle, className }: Props) {
  return (
    <div className={className ?? ""}>
      {eyebrow && <p className="text-xs tracking-widest uppercase text-brand mb-2">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-sm md:text-base muted">{subtitle}</p>}
    </div>
  );
}
