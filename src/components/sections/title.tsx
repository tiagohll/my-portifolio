export default function SectionTitle({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    return (
        <div className="flex flex-col justify-center gap-1 mb-3 p-1">
            <code className="text-emerald-400">../{subtitle}</code>
            <span className="text-2xl font-bold">{title}</span>
            <span className="w-full border-b border-emerald-950/50 rounded" />
        </div>
    );
}
