import { projects } from '../data';
// Components
import ProjectsCard from './ProjectsCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className="align-element py-20" id="projects">
      <SectionTitle text="Web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
