import React from 'react';

const Leaderboard = () => {
  const topRanks = [
    {
      rank: 2,
      name: "Rojen Dela Cruz",
      role: "Member",
      points: "2,450 pts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZX66vYz_YxondJlDm4xgCxWHAEEY2EXuXQ&s",
      type: "silver"
    },
    {
      rank: 1,
      name: "Ralph Laurence Baar",
      role: "Member",
      points: "3,120 pts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMW6zcOZMt90yVVaPI5bdSbsjad-a9OjH_w&s",
      type: "gold"
    },
    {
      rank: 3,
      name: "Samuel Ochea",
      role: "Member",
      points: "1,980 pts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BDLVpswl-wodEV7jHhTFWGDELEYX9TCeAA&s",
      type: "bronze"
    }
  ];

  const tableData = [
    { rank: 4, name: "Shan Railey Yase", role: "Member", points: "1,420 pts", img: "https://placehold.co/150x150/f1f5f9/94a3b8?text=No+Image" },
    { rank: 5, name: "Sheldon V. Santiago", role: "Member", points: "1,280 pts", img: "https://placehold.co/150x150/f1f5f9/94a3b8?text=No+Image" },
    { rank: 6, name: "Simon Asis", role: "Member", points: "1,150 pts", img: "https://placehold.co/150x150/f1f5f9/94a3b8?text=No+Image" }
  ];

  const getCardClasses = (type) => {
    switch (type) {
      case 'gold':
        return 'w-[280px] h-[250px] md:w-[220px] md:h-[320px] border-2 border-primary z-[5] order-1 md:order-2 md:-translate-y-[20px] md:scale-110 hover:-translate-y-[10px] md:hover:-translate-y-[25px] hover:scale-[1.02] md:hover:scale-[1.12] hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)]';
      case 'silver':
        return 'w-[130px] h-[200px] md:w-[220px] md:h-[320px] border border-black/[0.03] z-[4] order-2 md:order-1 hover:-translate-y-[5px] md:hover:-translate-y-[10px] hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)]';
      case 'bronze':
        return 'w-[130px] h-[200px] md:w-[220px] md:h-[320px] border border-black/[0.03] z-[3] order-3 md:order-3 hover:-translate-y-[5px] md:hover:-translate-y-[10px] hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)]';
      default:
        return '';
    }
  };

  const getTextStyles = (type) => {
    if (type === 'gold') {
      return {
        badge: 'w-10 h-10 text-[1rem]',
        name: 'text-[1.1rem] md:text-[1rem] mb-1',
        role: 'text-[0.8rem] md:text-[0.7rem] mb-2',
        points: 'text-[1.1rem] md:text-[1rem] mb-3'
      };
    }
    return {
      badge: 'w-8 h-8 md:w-10 md:h-10 text-[0.85rem] md:text-[1rem]',
      name: 'text-[0.8rem] md:text-[1rem] mb-0.5 md:mb-1',
      role: 'text-[0.65rem] md:text-[0.7rem] mb-1.5 md:mb-2',
      points: 'text-[0.85rem] md:text-[1rem] mb-2 md:mb-2.5'
    };
  };

  const getBadgeBg = (type) => {
    switch (type) {
      case 'gold': return '#2577d4';
      case 'silver': return '#9ca3af';
      case 'bronze': return '#d97706';
      default: return '#9ca3af';
    }
  };

  return (
    <section className="py-[100px] px-6 pb-[120px] text-center relative z-[4] overflow-hidden">
      {/* Sky gradient tint */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(240,249,255,0.8) 0%, rgba(228,244,255,0.9) 100%)' }} />

      {/* Cloud blobs */}
      <div className="absolute top-[8%] left-[-5%] w-[380px] h-[150px] opacity-35 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,232,255,1) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'float-slow 11s ease-in-out infinite' }} />
      <div className="absolute bottom-[8%] right-[-4%] w-[320px] h-[140px] opacity-28 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(210,238,255,1) 0%, transparent 70%)', filter: 'blur(35px)', animation: 'float-slow 14s ease-in-out infinite reverse' }} />

      <div className="mx-auto relative z-[1]">
        <div className="mb-[60px]">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.15em] uppercase mb-4 px-3 py-1 rounded-full"
            style={{ background: 'rgba(37,119,212,0.1)', color: '#1a60b8' }}>
            Hall of Fame
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-text-main my-3">Leaderboard</h2>
          <p className="text-text-muted">Recognizing our top contributors and cloud learners of the month.</p>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-start md:items-end gap-x-4 gap-y-8 md:gap-5 mb-[50px] md:mb-[30px] max-w-[290px] md:max-w-none mx-auto">
          {topRanks.map((rank) => {
            const textStyles = getTextStyles(rank.type);
            return (
              <div
                key={rank.rank}
                className={`relative bg-white rounded-[5px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-end group ${getCardClasses(rank.type)}`}
              >
                <div
                  className={`absolute top-[-15px] left-1/2 -translate-x-1/2 rounded-full flex items-center justify-center font-extrabold shadow-[0_4px_10px_rgba(0,0,0,0.1)] text-white z-20 ${textStyles.badge}`}
                  style={{ background: getBadgeBg(rank.type) }}
                >
                  {rank.type === 'gold' ? <i className="fa-solid fa-crown"></i> : rank.rank}
                </div>

                <img
                  src={rank.img}
                  alt={rank.name}
                  className="absolute top-0 left-0 w-full h-full object-cover z-[1] rounded-[5px]"
                />

                <div className="absolute bottom-0 left-0 w-full px-2 pt-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white z-[3] rounded-b-[5px] text-center">
                  <h3 className={`text-white font-medium leading-tight ${textStyles.name}`}>{rank.name}</h3>
                  <span className={`text-white/80 block ${textStyles.role}`}>{rank.role}</span>
                  <p className={`text-primary font-semibold ${textStyles.points}`}>{rank.points}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-[800px] mx-auto mb-10 rounded-[20px] overflow-hidden relative"
          style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 8px 32px rgba(37,119,212,0.08)' }}>
          {tableData.map((row) => (
            <div key={row.rank} className="grid grid-cols-[50px_1fr_100px] gap-px items-center p-4 border-b border-black/5 transition-colors duration-300 hover:bg-[#f9fafb]">
              <div className="font-extrabold text-text-muted text-[0.95rem]">{row.rank}</div>
              <div className="flex items-center gap-4 justify-start text-left">
                <img src={row.img} alt={row.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-text-main">{row.name}</span>
                  <span className="text-[0.75rem] text-text-muted font-medium">{row.role}</span>
                </div>
              </div>
              <div className="font-bold text-primary text-right">{row.points}</div>
            </div>
          ))}
        </div>

        <button className="btn-glow bg-[#2577d4] text-white px-[32px] py-[14px] rounded-[10px] text-[0.9rem] font-semibold shadow-[0_4px_20px_rgba(37,119,212,0.3)] transition-all">
          View full leaderboard
        </button>
      </div>
    </section>
  );
};

export default Leaderboard;
