import Link from 'next/link';

export function ProjectCard({ slug, title, description }: { slug: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={`/projects/${slug}`} className="text-primary font-semibold hover:underline">
        Ver proyecto →
      </Link>
    </div>
  );
}
