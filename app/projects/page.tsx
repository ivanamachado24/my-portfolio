import { ProjectCard } from '@/components/ProjectsCard';

const projects = [
  { slug: 'project-1', title: 'Proyecto 1', description: 'Un proyecto increíble que muestra mis habilidades en frontend.' },
  { slug: 'project-2', title: 'Proyecto 2', description: 'Otro proyecto con diseño moderno y responsivo.' },
];

export default function ProjectsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">Todos los Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </div>
  );
}
