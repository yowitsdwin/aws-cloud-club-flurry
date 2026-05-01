
export default function EventFilters({
    categories,
    activeCategory,
    setActiveCategory,
    search,
    setSearch,
    sort,
    setSort,
}) {
    return (
        <div className="max-w-5xl mx-auto px-6 mb-8">

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search events…"
                    className="
                        flex-1 px-4 py-3 rounded-xl
                        bg-white/70 border border-white/40
                        text-gray-800 placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-blue-400/40
                        text-sm
                    "
                />

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="
                        px-4 py-3 rounded-xl
                        bg-white/70 border border-white/40
                        text-gray-700 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-400/40
                        cursor-pointer
                    "
                >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                </select>
            </div>

            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`
                            px-4 py-1.5 rounded-full text-sm font-medium
                            border transition-all duration-150
                            ${activeCategory === cat
                                ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-500/30"
                                : "bg-white/60 border-white/40 text-gray-600 hover:bg-white/90"
                            }
                        `}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}