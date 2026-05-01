
export default function EventHighlights({ highlights = [], className = "" }) {
    if (!highlights || highlights.length === 0) return null;

    return (
        <ul className={`space-y-1.5 ${className}`}>
            {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-400 leading-snug">
                    <span className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
                        <svg
                            viewBox="0 0 6 6"
                            className="w-1.5 h-1.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M1 3h4M3 1l2 2-2 2" />
                        </svg>
                    </span>
                    {item}
                </li>
            ))}
        </ul>
    );
}