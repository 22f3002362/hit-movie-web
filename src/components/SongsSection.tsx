
import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Play, Clock } from "lucide-react";

const SongsSection = () => {
  const [hoveredSong, setHoveredSong] = useState<number | null>(null);
  
  const songs = [
    { id: 1, title: "The Hunt Begins", artist: "James Rodriguez", duration: "3:42" },
    { id: 2, title: "Dark Shadows", artist: "Elena Martinez", duration: "4:15" },
    { id: 3, title: "Last Clue", artist: "Michael Chen", duration: "3:28" },
    { id: 4, title: "Red Trail", artist: "Sarah Johnson", duration: "5:01" },
    { id: 5, title: "Mystery Unveiled", artist: "David Wilson", duration: "4:37" },
  ];

  return (
    <section id="songs" className="bg-white py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title flex items-center">
            <Music className="mr-3 text-movie-red" size={36} />
            Original Soundtrack
          </h2>
          <p className="text-lg mb-10 text-gray-700 max-w-3xl">
            Experience the thrilling atmosphere of "HIT: The Third Case" through its captivating soundtrack, featuring original compositions that enhance the suspense and drama of the film.
          </p>
        </motion.div>

        <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-gradient-to-r from-movie-red to-movie-black text-white py-4 px-6">
            <div className="col-span-1 font-medium">#</div>
            <div className="col-span-5 font-medium">TITLE</div>
            <div className="col-span-4 font-medium">ARTIST</div>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="col-span-1 font-medium text-gray-500 relative">
                {hoveredSong === song.id ? (
                  <Play size={18} className="text-movie-red" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div className="col-span-5 font-medium">{song.title}</div>
              <div className="col-span-4 text-gray-600">{song.artist}</div>
              <div className="col-span-2 text-right text-gray-500">{song.duration}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <a 
            href="https://music.example.com/hit-third-case" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-movie-red to-movie-black text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Music size={20} /> Listen on Streaming Platforms
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SongsSection;
