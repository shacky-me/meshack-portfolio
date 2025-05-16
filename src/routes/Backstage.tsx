import React, { useState } from "react";
// import { Link } from "react-router-dom";

// Type for resource item

const Backstage = () => {
  const [activeCategory, setActiveCategory] = useState("Books");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setSearchTerm(""); // Reset search when category changes
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const resources = [
    {
      id: 1,
      category: "Books",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/960px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
    },
    {
      id: 2,
      category: "Books",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/250px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    },

    {
      id: 3,
      category: "Books",
      title: "Women of Color in Tech",
      author: "Susanne Tedrick",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-roof6wl3JNMZTENueDma9bnWIWFdJuv7w&s",
    },
    {
      id: 4,
      category: "Books",
      title: "Surrounded by Idiots",
      author: "Thomas Erikson",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ruXE5Y4wcmcr7j6wIRP4BtqJpE4vbgI9NA&sa",
    },
    {
      id: 5,
      category: "Books",
      title: "Surrounded by Narcissists",
      author: "Thomas Erikson",
      imageUrl:
        "https://s3.refhub.ir/images/thumb/Surrounded_by_Narcissists_2557.webp",
    },
    {
      id: 6,
      category: "Books",
      title: "Everything Is F*cked: A Book About Hope",
      author: "Mark Manson",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550685003i/43808723.jpg",
    },
    {
      id: 7,
      category: "Books",
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      imageUrl:
        "https://markmanson.net/wp-content/themes/mm-main/images/books-subtle-art.png",
    },
    {
      id: 8,
      category: "Books",
      title: "The Alchemist",
      author: "Paulo Coelho",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    },
    {
      id: 9,
      category: "Books",
      title:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      author: "James Clear",
      imageUrl:
        "https://jamesclear.com/wp-content/uploads/2024/06/atomic-habits-dots.png",
    },

    // Additional resources (Poems, Music, Documentaries, Podcasts)
    // Poems
    {
      id: 10,
      category: "Poems",
      title: "And Still I Rise",
      author: "Maya Angelou",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/And_Still_I_Rise_front_cover%2C_1978_first_edition.jpg/250px-And_Still_I_Rise_front_cover%2C_1978_first_edition.jpg",
    },
    {
      id: 11,
      category: "Poems",
      title: "Milk and honey",
      author: "Rupi Kaur",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfvpmL3VjOvcIYSb9bwhEtvOKRrIxnVDJuQ&s",
    },
    {
      id: 12,
      category: "Poems",
      title: "The Sun and Her Flowers",
      author: "Rupi Kaur",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1331/9925/files/0620619260345_000_b_large.jpg?v=1544024393",
    },
    {
      id: 13,
      category: "Poems",
      title: "Love Is a Dog from Hell",
      author: "Charles Bukowski",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEVHSj4oJoeLWBH-d1vqr0Ubyr7d_6kUMzQ&s",
    },
    {
      id: 14,
      category: "Poems",
      title: "Factotum",
      author: "Charles Bukowski",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/05/Factotum.jpg",
    },

    // Music
    {
      id: 15,
      category: "Music",
      title: "Lucky You(Album Version)",
      artist: "Nyashinski",
      spotifyUrl:
        "https://open.spotify.com/track/4p2tUvvcygfuWjrmX5K3KH?si=87473a94fe36410b",
      imageUrl:
        "data:image/jpeg;base64,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",
      spotifyEmbedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0a9zAMu7wqaBjsLfROfaFB?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
      id: 16,
      category: "Music",
      title: "R&B RhaPsody",
      artist: "by yours truly",
      spotifyUrl:
        "https://open.spotify.com/playlist/5d6KgRgcZUWJYSOOfMPwsl?si=drxTjXgGQ1ivovR8zYQMHA",
      imageUrl:
        "https://storage.googleapis.com/pr-newsroom-wp/1/2024/04/spotify-classics-100-greatest-rb-rnb-songs-streaming-era.jpg",
      spotifyEmbedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5d6KgRgcZUWJYSOOfMPwsl?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
      id: 17,
      category: "Music",
      title: "Pure Serotonin",
      artist: "Playlist",
      spotifyUrl:
        "https://open.spotify.com/playlist/6zSrDeTt3WyHZISEbOe2Ph?si=la8HJIGyTx-mkogND9hn1w",
      imageUrl:
        "https://mrwallpaper.com/images/thumbnail/cassette-tapes-music-aesthetic-1xf8t7pjk46xw67z.webp",
      spotifyEmbedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6zSrDeTt3WyHZISEbOe2Ph?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
      id: 18,
      category: "Music",
      title: "Mr.Morale and the Big Steppers",
      artist: "Kendrick Lamar",
      spotifyUrl:
        "https://open.spotify.com/album/79ONNoS4M9tfIA1mYLBYVX?si=95YTrja4SeivcOq3xmvbHg",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-vJcf3yskf-4yRQkufGh52crkGEynWZfzg&s",
      spotifyEmbedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/79ONNoS4M9tfIA1mYLBYVX?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },

    // Documentaries
    {
      id: 19,
      category: "Documentaries",
      title: "Coded Bias",
      director: "Shalini Kantayya",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5eb23eee707c5356dea97eaa/1615480244221-IU40LJ639079F9TPZ5GX/CODED_Favicom.jpg",
      youtubeEmbedCode: `<iframe width="250" height="200" src="https://www.youtube.com/embed/jZl55PsfZJQ?si=EH9EPOfCBZaQF_Lm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: 20,
      category: "Documentaries",
      title: "The Social Dilemma",
      director: "Jeff Orlowski",
      imageUrl: "https://i.ytimg.com/vi/yGi2YKZZNFg/maxresdefault.jpg",
      youtubeEmbedCode: `<iframe width="250" height="200" src="https://www.youtube.com/embed/uaaC57tcci0?si=8PHelDC5UgnXBDbR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    // Podcasts
    {
      id: 21,
      category: "Podcasts",
      title: "The Daily",
      producer: "Jay Shetty",
      podcastUrl:
        "https://open.spotify.com/episode/6A9SHOs0nBovsdHAtXT4fD?si=gB1fdX9mRP6z-dUSr5c7Gw",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTJRsKAh1fYCavyvr6sFDzYETIlu80pTjGQ&s",
      spotifyEmbedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/6A9SHOs0nBovsdHAtXT4fD?utm_source=generator&t=0" width="100%" height="350" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },

    {
      id: 22,
      category: "Podcasts",
      title: "The Frame of Mind Podcast",
      producer: "Alexander Mugi",
      podcastUrl:
        "https://open.spotify.com/show/2RMIOLaMcEi2H2UC1MoqFE?si=d86b1154fb9a4d3a",
      imageUrl:
        "https://media.wired.com/photos/620eb0f39266d5d11c07b3c5/master/pass/Gear-Podcast-Gear-1327244548.jpg",
      spotifyEmbedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/2RMIOLaMcEi2H2UC1MoqFE?utm_source=generator&t=0" width="100%" height="350" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
      id: 23,
      category: "Podcasts",
      title: "So This Is Love",
      producer: "Julia Gaitho",
      podcastUrl:
        "https://open.spotify.com/show/0DDeORYJfJyqkHDkTCf5uD?si=00933a65cd894c90",
      imageUrl:
        "https://i.scdn.co/image/ab6765630000ba8a55f9f82b5d93dc223ef4ae23",
      spotifyEmbedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/0DDeORYJfJyqkHDkTCf5uD?utm_source=generator&t=0" width="100%" height="350" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
  ];

  const categories = ["Books", "Poems", "Music", "Documentaries", "Podcasts"];

  const filteredResources = resources.filter(
    (resource) =>
      resource.category === activeCategory &&
      (searchTerm === "" ||
        Object.values(resource).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.toLowerCase())
        ))
  );

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold mb-6">Backstage</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          A peek behind the curtain. Here you'll find some of the books I've
          cherished, poems that resonated with me, music that fuels my
          creativity, insightful documentaries, and podcasts that keep me
          learning.
        </p>

        {/* Category Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
          <nav className="-mb-px flex space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                  activeCategory === category
                    ? "border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-blog"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            placeholder={`Search ${activeCategory}`}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Resource List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              {resource.imageUrl && (
                <img
                  src={resource.imageUrl}
                  alt={resource.title}
                  className="p-2 w-full h-50 object-contain bg-white"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  {resource.title}
                </h3>
                {resource.author && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                    By {resource.author}
                  </p>
                )}
                {resource.artist && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                    By {resource.artist}
                  </p>
                )}
                {resource.director && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                    Directed by {resource.director}
                  </p>
                )}
                {resource.producer && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                    Produced by {resource.producer}
                  </p>
                )}
                {resource.spotifyUrl && (
                  <a
                    href={resource.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00293b] hover:underline text-sm"
                  >
                    Listen on Spotify
                  </a>
                )}
                {/* Embed Spotify Playlist for Music items */}
                {resource.category === "Music" && resource.spotifyEmbedCode && (
                  <div
                    className="mt-4"
                    dangerouslySetInnerHTML={{
                      __html: resource.spotifyEmbedCode,
                    }}
                  />
                )}
                {/* Link to Podcast URL */}
                {resource.podcastUrl && (
                  <a
                    href={resource.podcastUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00293b] hover:underline text-sm"
                  >
                    Listen to Podcast
                  </a>
                )}

                {/* Embed Spotify Podcast for Podcasts items */}
                {resource.category === "Podcasts" &&
                  resource.spotifyEmbedCode && (
                    <div
                      className="mt-4"
                      dangerouslySetInnerHTML={{
                        __html: resource.spotifyEmbedCode,
                      }}
                    />
                  )}

                {/* Embed YouTube Video for Documentaries */}
                {resource.category === "Documentaries" &&
                  resource.youtubeEmbedCode && (
                    <div
                      className="mt-4"
                      dangerouslySetInnerHTML={{
                        __html: resource.youtubeEmbedCode,
                      }}
                    />
                  )}
              </div>
            </div>
          ))}
          {filteredResources.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400">
              No {activeCategory.toLowerCase()} found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Backstage;
