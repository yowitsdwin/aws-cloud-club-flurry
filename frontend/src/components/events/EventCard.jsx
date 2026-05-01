import { useState } from "react";
import { Calendar, Clock, Users, ChevronDown, ChevronUp } from "lucide-react";

import { CATEGORY_COLORS } from "../../data/eventsData";
import CountdownTimer from "./CountdownTimer";
import EventAnnouncement from "./EventAnnouncement";
import EventHighlights from "./EventHighlights";

export default function EventCard({ event }) {
    const [showHighlights, setShowHighlights] = useState(false);

    const colors = CATEGORY_COLORS[event.category] ?? {
        bg: "bg-gray-500/15",
        text: "text-gray-400",
        dot: "bg-gray-400",
    };

    const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    const hasHighlights = event.highlights && event.highlights.length > 0;

    return (
        <div className="
            group flex flex-col rounded-2xl overflow-hidden
            border border-white/10 bg-[#ffffff]
            shadow-md shadow-gray-500/20
            hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30
            transition-all duration-300
        ">
            <div className="relative overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-3 left-3">
                    <span className={`
                        flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full
                        backdrop-blur-sm bg-black/50 border border-white/10
                        ${colors.text}
                    `}>
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                        {event.category}
                    </span>
                </div>

                {event.upcoming && event.seats && (
                    <div className="absolute top-3 right-3">
                        <span className="
                            flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full
                            backdrop-blur-sm bg-black/50 border border-white/10 text-white/70
                        ">
                            <Users size={9} />
                            {event.seats} seats
                        </span>
                    </div>
                )}
            </div>

            <div className="flex flex-col flex-1 p-5 gap-3 bg-white">

                <h3 className="text-black font-bold text-sm leading-snug line-clamp-2">
                    {event.title}
                </h3>

                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                    {event.description}
                </p>

                {event.announcement && (
                    <EventAnnouncement
                        message={event.announcement}
                        type={event.announcementType ?? "info"}
                    />
                )}

                {hasHighlights && (
                    <div>
                        <button
                            onClick={() => setShowHighlights((v) => !v)}
                            className="
                                flex items-center gap-1 text-[11px] font-semibold
                                text-white/40 hover:text-white/70
                                transition-colors duration-150
                            "
                        >
                            {showHighlights ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                            {showHighlights ? "Hide highlights" : "Show highlights"}
                        </button>

                        {showHighlights && (
                            <EventHighlights
                                highlights={event.highlights}
                                className="mt-2"
                            />
                        )}
                    </div>
                )}

                <div className="flex-1" />

                <div className="pt-3 border-t border-white/[0.06] space-y-2">

                    <div className="flex flex-col gap-1 text-[11px] text-black">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={11} />
                            {formattedDate}
                        </span>
                        {event.time && (
                            <span className="flex items-center gap-1.5">
                                <Clock size={11} />
                                {event.time}
                            </span>
                        )}
                    </div>

                    {event.upcoming && (
                        <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-semibold text-black uppercase tracking-wider">
                                Starts in
                            </span>
                            <CountdownTimer targetDate={event.date} />
                        </div>
                    )}

                    {!event.upcoming && (
                        <span className="
                            inline-flex items-center gap-1.5 text-[10px] font-semibold
                            text-black tracking-wide uppercase
                        ">
                            <span className="w-1.5 h-1.5 rounded-full bg-black" />
                            Past event
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}