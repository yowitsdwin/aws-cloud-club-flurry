
export default function EventStats({ events }) {
    const upcoming = events.filter((e) => e.upcoming);
    const totalSeats = upcoming.reduce((sum, e) => sum + (e.seats ?? 0), 0);
    const categories = new Set(events.map((e) => e.category)).size;

    const stats = [
        { label: "Upcoming", value: upcoming.length, suffix: "" },
        { label: "Total", value: events.length, suffix: " events" },
        { label: "Open seats", value: totalSeats, suffix: "+" },
        { label: "Categories", value: categories, suffix: "" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 mb-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map(({ label, value, suffix }) => (
                    <div
                        key={label}
                        className="
                            flex flex-col items-center justify-center
                            rounded-2xl border border-white/[0.08]
                            bg-white/[0.03] backdrop-blur-sm
                            py-5 px-4 text-center
                        "
                    >
                        <p className="text-3xl font-extrabold text-gray-400 tracking-tight">
                            {value}
                            <span className="text-gray-400 text-xl">{suffix}</span>
                        </p>
                        <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 mt-1">
                            {label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}