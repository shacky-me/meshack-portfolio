import React, { useState } from "react";
// import { Link } from "react-router-dom";

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
      title: "Thriller",
      artist: "Michael Jackson",
      spotifyUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
    {
      id: 16,
      category: "Music",
      title: "Kind of Blue",
      artist: "Miles Davis",
      spotifyUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
    },
    {
      id: 17,
      category: "Music",
      title: "OK Computer",
      artist: "Radiohead",
      spotifyUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    },

    // Documentaries
    {
      id: 18,
      category: "Documentaries",
      title: "Planet Earth",
      director: "Alastair Fothergill",
      imageUrl: "https://images.unsplash.com/photo-1606788075760-9fd8b0c1f4f6",
    },

    // Podcasts
    {
      id: 19,
      category: "Podcasts",
      title: "The Daily",
      producer: "The New York Times",
      podcastUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
    },

    {
      id: 21,
      category: "Documentaries",
      title: "Cosmos",
      director: "Ann Druyan",
      imageUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    },
    {
      id: 22,
      category: "Podcasts",
      title: "Radiolab",
      producer: "WNYC Studios",
      podcastUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1581091012184-d8f91b1132ce",
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
                    Listen to Podcasts
                  </a>
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
