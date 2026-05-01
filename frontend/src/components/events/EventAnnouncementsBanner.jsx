import { AlertCircle, AlertTriangle, Info, CheckCircle } from "lucide-react";

const TYPE_STYLES = {
    urgent: "text-red-400",
    warning: "text-amber-400",
    info: "text-sky-400",
    success: "text-emerald-400",
};

const TYPE_ICONS = {
    urgent: AlertCircle,
    warning: AlertTriangle,
    info: Info,
    success: CheckCircle,
};

export default function EventAnnouncementsBanner({ events = [] }) {
    const items = events.filter((e) => e.upcoming && e.announcement);

    if (items.length === 0) return null;

    const repeated = [...items, ...items];

    return (
        <div className="w-full overflow-hidden bg-white/[0.03] border-y border-white/[0.06] py-2.5">
            <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
                {repeated.map((event, i) => {
                    const color = TYPE_STYLES[event.announcementType] ?? TYPE_STYLES.info;
                    const Icon = TYPE_ICONS[event.announcementType] ?? Info;
                    return (
                        <span
                            key={`${event.id}-${i}`}
                            className="inline-flex items-center gap-2 text-xs font-medium"
                        >
                            <Icon size={12} className={color} />
                            <span className="text-white/40 font-semibold">{event.title}</span>
                            <span className="text-white/20">—</span>
                            <span className={color}>{event.announcement}</span>
                            <span className="w-1 h-1 rounded-full bg-white/10 ml-4" />
                        </span>
                    );
                })}
            </div>
        </div>
    );
}