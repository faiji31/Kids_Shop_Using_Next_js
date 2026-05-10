export const metadata ={
    title: "Blog - Stories, guides and toy tips for Parents",
    description:"Browse your regular Products on your kids daily needs"
}

const blogPosts = [
  {
    title: "Smart Learning Toys for Early Childhood",
    date: "May 2026",
    summary:
      "Discover the best ways to use educational toys to boost early learning, focus, and creativity for young kids.",
  },
  {
    title: "How to Choose a Safe Toy for Toddlers",
    date: "April 2026",
    summary:
      "A quick guide to selecting safe, durable, and development-friendly toys for toddlers and preschoolers.",
  },
  {
    title: "5 Fun Activities with Counting Boards",
    date: "March 2026",
    summary:
      "Try these hands-on counting games and exercises to make number learning exciting and memorable.",
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
          Blog
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          Stories, guides, and toy tips for parents
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-8">
          Read the latest posts on playful learning, safety, and helpful parenting ideas
          for early childhood development.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-sm text-primary font-semibold mb-3">
              {post.date}
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-6">{post.summary}</p>
            <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/90">
              Read More
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
