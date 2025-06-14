import BlogCard from "../blog-card";
import BlogHeader from "./blog-header";



export default function BlogSection() {
  const blogPosts = [
    {
      title: "Top 5 Strategies For Monetizing Content With Crypto.",
      description:
        "Learn how to maximize your earnings on dtello with crypto-friendly engagement strategies.",
      authorName: "Michael Thompson",
      imageUrl: "/thinking-dread.png",
    },
    {
      title: "Top 5 Strategies For Monetizing Content With Crypto.",
      description:
        "Learn how to maximize your earnings on dtello with crypto-friendly engagement strategies.",
      authorName: "Michael Thompson",
      imageUrl: "/thinking-dread.png",
    },
  ];

  return (
    <section id="blog" className="bg-[#EBF0EA] w-full mx-auto px-12 py-14  mt-[20px] md:mt-[80px] lg:mt-[100px] mb-12 md:mb-0 rounded-2xl">
      <BlogHeader />
      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
}