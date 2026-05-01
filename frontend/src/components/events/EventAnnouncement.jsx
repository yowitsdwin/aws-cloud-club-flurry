import { AlertCircle, AlertTriangle, Info, CheckCircle } from "lucide-react";

const VARIANTS = {
    urgent: {
        wrapper: "bg-red-500/10 border-red-500/25",
        icon: AlertCircle,
        text: "text-red-400",
        pulse: true,
    },
    warning: {
        wrapper: "bg-amber-500/10 border-amber-500/25",
        icon: AlertTriangle,
        text: "text-amber-400",
        pulse: false,
    },
    info: {
        wrapper: "bg-sky-500/10 border-sky-500/25",
        icon: Info,
        text: "text-sky-400",
        pulse: false,
    },
    success: {
        wrapper: "bg-emerald-500/10 border-emerald-500/25",
        icon: CheckCircle,
        text: "text-emerald-400",
        pulse: false,
    },
};

export default function EventAnnouncement({ message, type = "info", className = "" }) {
    if (!message) return null;

    const variant = VARIANTS[type] ?? VARIANTS.info;
    const Icon = variant.icon;

    return (
        <div
            className={`
                flex items-start gap-2 px-3 py-2 rounded-xl
                border text-xs font-medium leading-snug
                ${variant.wrapper} ${className}
            `}
        >
            {variant.pulse ? (
                <span className="relative flex-shrink-0 mt-0.5">
                    <span className="absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                </span>
            ) : (
                <Icon size={12} className={`${variant.text} flex-shrink-0 mt-px`} />
            )}

            <p className={variant.text}>{message}</p>
        </div>
    );
}