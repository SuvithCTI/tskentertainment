import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  MessageCircle, 
  Play, 
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Instagram from '../common/InstagramIcon';
import { INSTAGRAM_PROFILE, INSTAGRAM_POSTS } from '../../data/instagramFeedData';
import { useTheme } from '../../context/ThemeContext';

export default function LiveInstaFeed() {
  const { currentTheme } = useTheme();
  const [likedPosts, setLikedPosts] = useState({});

  const toggleLike = (id) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="pt-4 pb-4 sm:py-14 lg:py-20 bg-[#F8F9FC] relative overflow-hidden">
      
      {/* Soft Background Flare */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ backgroundColor: currentTheme.accent }}
      />

      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* STREAMLINED INSTAGRAM HEADER CAPSULE (WITH BACKGROUND) */}
        <div className="bg-white rounded-2xl sm:rounded-full px-4 sm:px-7 py-3 sm:py-4 border border-slate-200 shadow-md shadow-slate-200/60 hover:shadow-lg transition-all flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-10">
          <div className="flex items-center gap-3 sm:gap-3.5 text-left w-full sm:w-auto">
            <div className="relative shrink-0">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-sm">
                <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden flex items-center justify-center">
                  <img
                    src={INSTAGRAM_PROFILE.profilePic}
                    alt="TSK Entertainments"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full p-1 shadow-xs border border-white">
                <Instagram className="w-2.5 h-2.5" />
              </span>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h2 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight truncate">
                  {INSTAGRAM_PROFILE.handle}
                </h2>
                <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-500 text-white shrink-0" />
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                {INSTAGRAM_PROFILE.followers} Followers • Real Stage Moments & BTS
              </p>
            </div>
          </div>

          <a
            href={INSTAGRAM_PROFILE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:brightness-110 shadow-md shadow-pink-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Instagram className="w-3.5 h-3.5 text-white" />
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* 6 BESPOKE INSTAGRAM REELS & POSTS GRID (2 COLUMNS IN MOBILE VIEW) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {INSTAGRAM_POSTS.map((post) => {
            const isLiked = likedPosts[post.id];
            return (
              <div
                key={post.id}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Media Container with 4:3 Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img
                    src={post.thumbnail}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay for Top & Bottom Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40 pointer-events-none" />

                  {/* Top Badges: Category (Linked to Service) & Type/Date */}
                  <div className="absolute top-2 left-2 right-2 sm:top-3.5 sm:left-3.5 sm:right-3.5 flex items-center justify-between z-10">
                    <Link
                      to={`/services?service=${post.serviceId}`}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8.5px] sm:text-[10px] font-black uppercase tracking-wider bg-black/70 hover:bg-amber-500 hover:text-slate-950 backdrop-blur-md text-amber-300 border border-white/20 shadow-md truncate max-w-[85px] xs:max-w-[110px] sm:max-w-none transition-colors pointer-events-auto"
                      title={`Explore ${post.serviceName} service`}
                    >
                      {post.category}
                    </Link>

                    {post.type === 'reel' ? (
                      <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8.5px] sm:text-[10px] font-bold text-white flex items-center gap-1 shadow-md shrink-0">
                        <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white" />
                        <span>{post.views}</span>
                      </div>
                    ) : (
                      <span className="bg-black/60 backdrop-blur-md px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8.5px] sm:text-[10px] font-semibold text-slate-200 border border-white/20 shrink-0">
                        {post.date}
                      </span>
                    )}
                  </div>

                  {/* Center Hover Actions (Explore Service & View Reel) */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 bg-black/60 backdrop-blur-xs transition-opacity duration-300 p-3">
                    <Link
                      to={`/services?service=${post.serviceId}`}
                      className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-[10px] sm:text-xs font-black tracking-wide uppercase flex items-center gap-1.5 shadow-xl transition-all transform hover:scale-105 active:scale-95"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={INSTAGRAM_PROFILE.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 sm:py-1.5 rounded-full bg-white/20 hover:bg-white/35 text-white text-[9.5px] sm:text-[11px] font-bold flex items-center gap-1.5 border border-white/30 backdrop-blur-sm transition-all hover:scale-105"
                    >
                      <Instagram className="w-3 h-3 text-pink-400" />
                      <span>Watch Reel on IG</span>
                    </a>
                  </div>

                  {/* Bottom Subtitle Inside Image (Visible on tablet/desktop) */}
                  <div className="hidden sm:block absolute bottom-3 left-3.5 right-3.5 z-10 text-white pointer-events-none">
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-300 font-semibold drop-shadow">
                      <Sparkles className="w-3 h-3" />
                      <span>TSK Official Event Production</span>
                    </div>
                  </div>
                </div>

                {/* Card Content & Engagement */}
                <div className="p-2.5 sm:p-5 space-y-2 sm:space-y-2.5">
                  {/* Action Bar (Like, Comment, External Link) */}
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-700 pb-1.5 sm:pb-2 border-b border-slate-100">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1 sm:gap-1.5 font-bold transition-colors cursor-pointer ${
                        isLiked ? 'text-rose-600' : 'hover:text-rose-600 text-slate-600'
                      }`}
                      aria-label="Like post"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-600' : ''}`} />
                      <span className="text-[10px] sm:text-xs">{isLiked ? 'Liked' : post.likes}</span>
                    </button>

                    <div className="flex items-center gap-1 sm:gap-1.5 font-semibold text-slate-500">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="text-[10px] sm:text-xs">{post.comments}</span>
                    </div>

                    <a
                      href={INSTAGRAM_PROFILE.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] sm:text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-0.5 sm:gap-1 transition-colors"
                      title="View Post"
                    >
                      <span className="hidden sm:inline">View</span>
                      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </a>
                  </div>

                  {/* Caption & Hashtags */}
                  <p className="text-[10.5px] sm:text-xs text-slate-700 leading-snug line-clamp-2">
                    <strong className="text-slate-900 font-bold mr-1">tskentertainments</strong>
                    {post.caption}
                  </p>

                  {/* Tags */}
                  <div className="hidden sm:flex items-center gap-1.5 flex-wrap pt-0.5">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-slate-400 hover:text-amber-600 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Connected Service Direct Action */}
                  <div className="pt-2 sm:pt-2.5 border-t border-slate-100">
                    <Link
                      to={`/services?service=${post.serviceId}`}
                      className="w-full py-2 px-2.5 sm:px-3 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50/70 hover:from-amber-100 hover:to-orange-100/90 text-slate-800 border border-amber-200/90 hover:border-amber-400 text-[10.5px] sm:text-xs font-bold flex items-center justify-between transition-all group/svc shadow-2xs"
                      title={`View ${post.serviceName} packages`}
                    >
                      <span className="flex items-center gap-1.5 min-w-0 pr-1">
                        <span className="w-5 h-5 rounded-md bg-amber-500/15 flex items-center justify-center shrink-0">
                          <Sparkles className="w-3 h-3 text-amber-600" />
                        </span>
                        <span className="truncate">
                          <span className="hidden xs:inline text-[9.5px] uppercase tracking-wider text-amber-700 font-extrabold mr-1">Service:</span>
                          <span className="font-extrabold text-slate-950">{post.serviceName}</span>
                        </span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider shrink-0 text-amber-800 group-hover/svc:text-amber-950 bg-white/95 px-2 py-0.5 rounded-md border border-amber-200 shadow-2xs">
                        <span className="hidden xs:inline">Packages</span>
                        <ArrowRight className="w-3 h-3 group-hover/svc:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* BOTTOM INSTAGRAM CALL TO ACTION BAR */}
        <div className="mt-5 sm:mt-12 text-center px-2">
          <a
            href={INSTAGRAM_PROFILE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-900/10 hover:scale-105 active:scale-95 transition-all max-w-full text-center"
          >
            <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
            <span className="truncate">View 380+ Behind-The-Scenes Posts</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
}
