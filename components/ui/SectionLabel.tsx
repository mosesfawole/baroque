interface Props {
  text: string;
  color?: string;
}

export default function SectionLabel({ text, color = "#c9a84c" }: Props) {
  return (
    <p
      className="text-xs tracking-[0.3em] uppercase font-medium mb-4"
      style={{ color }}
    >
      {text}
    </p>
  );
}
