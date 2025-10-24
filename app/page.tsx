import { ProjectCard } from '@/components/ProjectsCard';

const projects = [
  { slug: 'project-1', title: 'Proyecto 1', description: 'Un proyecto increíble que muestra mis habilidades en frontend.' },
  { slug: 'project-2', title: 'Proyecto 2', description: 'Otro proyecto con diseño moderno y responsivo.' },
];

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="text-center py-24 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-xl shadow-lg max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-4">Hola, soy Vanessa Machado</h1>
        <p className="text-xl mb-6">Desarrolladora Frontend y Diseñadora UX/UI</p>
        <a href="/contact" className="inline-block px-6 py-3 rounded-lg font-semibold bg-white text-blue-600 hover:bg-gray-100 transition">
          Contáctame
        </a>
      </section>

      {/* Proyectos */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Mis Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}

