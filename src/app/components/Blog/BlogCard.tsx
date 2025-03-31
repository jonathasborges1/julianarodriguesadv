import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
}
const BlogCard = ({ slug, title, excerpt, thumbnail, date }: BlogCardProps) => {
  return (
    <article className="bg-white rounded shadow hover:shadow-lg transition p-4 flex flex-col h-full">
      <Link href={`/blog/${slug}`}>
        <Image
          src={thumbnail}
          alt={title}
          width={600}
          height={400}
          className="rounded mb-4 object-contain w-full h-60"
        />
      </Link>
      <time className="text-xs text-gray-500 mb-2">{date}</time>
      <h3 className="text-lg font-semibold text-[#00274B] mb-2">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-sm text-gray-700 mb-4 flex-grow">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="text-blue-700 font-medium hover:underline mt-auto"
      >
        Leia mais →
      </Link>
    </article>
  );
};

export { BlogCard };
