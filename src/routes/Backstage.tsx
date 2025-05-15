import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Backstage = () => {
  const [activeCategory, setActiveCategory] = useState("Books");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setSearchTerm(""); // To Reset search when category changes
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Dummy data - to be replaced with actual data fetching or content
  const resources = [
    {
      id: 1,
      category: "Books",
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
    },
    { id: 2, category: "Books", title: "Sapiens", author: "Yuval Noah Harari" },
    {
      id: 3,
      category: "Poems",
      title: "The Road Not Taken",
      author: "Robert Frost",
    },
    { id: 4, category: "Poems", title: "If", author: "Rudyard Kipling" },
    {
      id: 5,
      category: "Music",
      title: "Kind of Blue",
      artist: "Miles Davis",
      spotifyUrl: "#",
    },
    {
      id: 6,
      category: "Music",
      title: "OK Computer",
      artist: "Radiohead",
      spotifyUrl: "#",
    },
    {
      id: 7,
      category: "Documentaries",
      title: "Planet Earth",
      director: "Alastair Fothergill",
    },
    {
      id: 8,
      category: "Podcasts",
      title: "The Daily",
      producer: "The New York Times",
      podcastUrl: "#",
    },
    {
      id: 9,
      category: "Books",
      title: "Project Hail Mary",
      author: "Andy Weir",
    },
    {
      id: 10,
      category: "Poems",
      title: "Ozymandias",
      author: "Percy Bysshe Shelley",
    },
    {
      id: 11,
      category: "Music",
      title: "Thriller",
      artist: "Michael Jackson",
      spotifyUrl: "#",
    },
    {
      id: 12,
      category: "Documentaries",
      title: "Cosmos",
      director: "Ann Druyan",
    },
    {
      id: 13,
      category: "Podcasts",
      title: "Radiolab",
      producer: "WNYC Studios",
      podcastUrl: "#",
    },
    // ... more resources
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
    <section className="min-h-screen py-20">
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
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
            >
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
              {resource.spotifyUrl && (
                <a
                  href={resource.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline text-sm"
                >
                  Listen on Spotify
                </a>
              )}
              {resource.podcastUrl && (
                <a
                  href={resource.podcastUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline text-sm"
                >
                  Listen to Podcast
                </a>
              )}
              {/* more details/actions to be added here */}
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
