import {useState} from "react";
import {motion} from "framer-motion";
import {Music, Play, Clock} from "lucide-react";

const SongsSection = () => {
  const [hoveredSong, setHoveredSong] = useState<number | null>(null);

  const songs = [
    {
      id: 1,
      title: "Prema Velluva - Telugu",
      artist: "Mickey J Meyer",
      duration: "4:12",
      spotify:
        "https://open.spotify.com/track/0iLgVMCi8KCTF9e6QbKvSl?si=6cdc34473ac94293",
      youtube: "https://youtu.be/rslYbT2GvRs?si=MGx6be0iiIIsXM-6",
    },
    {
      id: 2,
      title: "Abki Baar Arjun Sarkaar - Telugu",
      artist: "Mickey J Meyer",
      duration: "4:09",
      spotify:
        "https://open.spotify.com/track/1kEzNdy259gZfOHnSIVV2v?si=3c5419097b43475a",
      youtube: "https://youtu.be/UzrDeGbqG4U?si=eBR_A8HD0kB5yCuC",
    },
  ];

  return (
    <section id="songs" className="bg-white py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          <h2 className="section-title flex items-center">
            <Music className="mr-3 text-movie-red" size={36} />
            Original Soundtrack
          </h2>
          <p className="text-lg mb-10 text-gray-700 max-w-3xl">
            Experience the thrilling atmosphere of "HIT: The Third Case" through
            its captivating soundtrack, featuring original compositions that
            enhance the suspense and drama of the film.
          </p>
        </motion.div>

        {/* Desktop View (hidden on small screens) */}
        <div className="hidden md:block bg-gray-50 rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-gradient-to-r from-movie-red to-movie-black text-white py-4 px-6">
            <div className="col-span-1 font-medium">#</div>
            <div className="col-span-5 font-medium">TITLE</div>
            <div className="col-span-3 font-medium">ARTIST</div>
            <div className="col-span-1 font-medium text-center">LINKS</div>
            <div className="col-span-2 font-medium flex items-center justify-end">
              <Clock size={18} />
            </div>
          </div>

          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              className={`grid grid-cols-12 py-5 px-6 border-b border-gray-200 items-center ${
                hoveredSong === song.id ? "bg-gray-100" : ""
              }`}
              onMouseEnter={() => setHoveredSong(song.id)}
              onMouseLeave={() => setHoveredSong(null)}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: index * 0.1}}
              viewport={{once: true}}
            >
              <div className="col-span-1 font-medium text-gray-500 relative">
                {hoveredSong === song.id ? (
                  <Play size={18} className="text-movie-red" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div className="col-span-5 font-medium">{song.title}</div>
              <div className="col-span-3 text-gray-600">{song.artist}</div>
              <div className="col-span-1 flex space-x-3 justify-center">
                <a
                  href={song.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                  title="Listen on Spotify"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
                <a
                  href={song.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  title="Watch on YouTube"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
              <div className="col-span-2 text-right text-gray-500">
                {song.duration}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View (hidden on medium and larger screens) */}
        <div className="block md:hidden bg-gray-50 rounded-xl shadow-lg overflow-hidden">
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              className={`py-5 px-6 border-b border-gray-200 ${
                hoveredSong === song.id ? "bg-gray-100" : ""
              }`}
              onMouseEnter={() => setHoveredSong(song.id)}
              onMouseLeave={() => setHoveredSong(null)}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: index * 0.1}}
              viewport={{once: true}}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-medium text-gray-500 relative">
                  {hoveredSong === song.id ? (
                    <Play size={18} className="text-movie-red" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div className="text-right text-gray-500">{song.duration}</div>
              </div>
              <div className="font-medium mb-1">{song.title}</div>
              <div className="text-gray-600 mb-3">{song.artist}</div>
              <div className="flex space-x-3 justify-center">
                <a
                  href={song.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                  title="Listen on Spotify"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
                <a
                  href={song.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  title="Watch on YouTube"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.6}}
          viewport={{once: true}}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://open.spotify.com/playlist/6wC3O5bHixCEc6hRMxn4OL"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Full Album on Spotify
          </a>
          <a
            href="https://youtube.com/playlist?list=PLiKhjJB6Iji1YYRd9UcBkXrn7YMXzB9iZ&si=QETLb9qnai60Z3RD"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Full Album on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SongsSection;
