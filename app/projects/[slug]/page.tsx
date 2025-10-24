interface Project {
    slug: string;
    title: string;
    description: string;
    details: string;
  }
  
  const projects: Project[] = [
    { slug: 'project-1', title: 'Proyecto 1', description: 'Descripción breve', details: 'Detalle completo del proyecto 1, tecnologías usadas, screenshots, links, etc.' },
    { slug: 'project-2', title: 'Proyecto 2', description: 'Descripción breve', details: 'Detalle completo del proyecto 2, tecnologías usadas, screenshots, links, etc.' },
  ];
  
  export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return <p className="text-center mt-8">Proyecto no encontrado</p>;
  
    return (
      <div className="max-w-3xl mx-auto py-16 space-y-6">
        <h2 className="text-4xl font-bold">{project.title}</h2>
        <p className="text-gray-700">{project.details}</p>
      </div>
    );
  }
  