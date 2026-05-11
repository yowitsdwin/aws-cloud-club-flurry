import { useState } from "react";
import { Calendar, Clock, Users, ChevronDown, ChevronUp } from "lucide-react";

import { CATEGORY_COLORS } from "../../data/eventsData";
import CountdownTimer from "./CountdownTimer";
import EventAnnouncement from "./EventAnnouncement";
import EventHighlights from "./EventHighlights";

export default function EventCard({ event }) {
    const [showHighlights, setShowHighlights] = useState(false);

    const colors = CATEGORY_COLORS[event.category] ?? {
        text: "text-gray-400",
        dot: "bg-gray-400",
    };

    const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    const hasHighlights = event.highlights?.length > 0;

    const handleRegisterClick = (e) => {
        if (!event.registrationLink) {
            e.preventDefault();
            alert("Registration link is not available.");
        }
    };

    return (
        <div className="group flex flex-col rounded-2xl overflow-hidden border bg-white shadow-md hover:-translate-y-1 transition-all duration-300">

            <div className="relative overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-3 left-3">
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/50 text-white backdrop-blur-sm">
                        <span className={"w-1.5 h-1.5 rounded-full " + colors.dot} />
                        {event.category}
                    </span>
                </div>

                {event.seats && (
                    <div className="absolute top-3 right-3">
                        <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full bg-black/50 text-white">
                            <Users size={9} />
                            {event.seats} seats
                        </span>
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-col gap-3">
                <h3 className="font-bold text-sm text-black line-clamp-2">
                    {event.title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-2">
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
                            onClick={() => setShowHighlights(!showHighlights)}
                            className="text-xs font-semibold text-gray-500 flex items-center gap-1"
                        >
                            {showHighlights ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                            {showHighlights ? "Hide highlights" : "Show highlights"}
                        </button>

                        {showHighlights && (
                            <EventHighlights highlights={event.highlights} className="mt-2" />
                        )}
                    </div>
                )}

                <div className="flex-1" />

                <div className="text-[11px] text-black space-y-1 pt-3 border-t">
                    <div className="flex items-center gap-1.5">
                        <Calendar size={11} />
                        {formattedDate}
                    </div>

                    {event.time && (
                        <div className="flex items-center gap-1.5">
                            <Clock size={11} />
                            {event.time}
                        </div>
                    )}
                </div>

                {event.speakers && event.speakers.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                        {event.speakers.map((speaker) => (
                            <div
                                key={speaker.name}
                                className="flex items-center gap-1.5 bg-gray-100 rounded-full px-2.5 py-1"
                            >
                                <div className="w-4 h-4 rounded-full bg-[#0d2845] flex items-center justify-center text-white text-[8px] font-bold">
                                    {speaker.name.charAt(0)}
                                </div>
                                <span className="text-[11px] font-semibold text-gray-700">
                                    {speaker.name}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {event.upcoming && (
                    <>
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase">
                            Starts in
                            <CountdownTimer targetDate={event.date} />
                        </div>

                        <a
                            href={event.registrationLink || "https://www.meetup.com"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleRegisterClick}
                            className={
                                "block w-full mt-1 py-2 text-center rounded-xl text-xs font-bold transition-all duration-150 " +
                                (event.registrationLink
                                    ? "bg-[#0d2845] text-white hover:bg-[#1a4a7a] active:scale-95"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none")
                            }
                        >
                            Register Now
                        </a>
                    </>
                )}

                {!event.upcoming && (
                    <span className="text-[10px] font-semibold uppercase text-black">
                        Past event
                    </span>
                )}
            </div>
        </div>
    );
}