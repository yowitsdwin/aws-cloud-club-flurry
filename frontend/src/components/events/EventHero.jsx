
export default function EventHero() {
    return (
        <section className="text-center pt-28 pb-12 px-6 relative">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                </span>
                Events &amp; Community
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mt-2 leading-tight tracking-tight">
                Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Events</span>
            </h1>

            <p className="text-gray-500 mt-4 max-w-lg mx-auto text-base leading-relaxed">
                Workshops, webinars, hackathons, and community learning experiences — all in one place.
            </p>
        </section>
    );
}