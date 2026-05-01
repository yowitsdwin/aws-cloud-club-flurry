import { useCountdown } from "../../hooks/useCountdown";
import { Timer } from "lucide-react";

export default function CountdownTimer({ targetDate, className = "" }) {
    const { days, hours, minutes, seconds, expired } = useCountdown(targetDate);

    const parts = [];
    if (!expired) {
        if (days > 0) parts.push(`${days} ${days === 1 ? "day" : "days"}`);
        if (hours > 0) parts.push(`${hours} ${hours === 1 ? "hour" : "hours"}`);
        if (days === 0 && minutes > 0) parts.push(`${minutes} ${minutes === 1 ? "min" : "mins"}`);
        if (days === 0 && hours === 0) parts.push(`${seconds}s`);
    }

    return (
        <div className={`flex items-center gap-1.5 ${className}`}>
            <Timer size={11} className="text-white/30 flex-shrink-0" />
            {expired ? (
                <span className="text-xs font-semibold text-white/40">
                    Event started
                </span>
            ) : (
                <span className="text-xs font-semibold text-white/60">
                    {parts.join(", ")}
                </span>
            )}
        </div>
    );
}