import InfoProjects from '../common/InfoProjects';
import projectDataRaw from '../../data/projects.json';
import { Layers, Code2, GraduationCap } from "lucide-react";

// 1️⃣ Define the valid icon keys
type IconKeys = "layers" | "code2" | "graduationCap";

// 2️⃣ Define the project section type
interface ProjectSection {
  icon: IconKeys;
  title: string;
  children: string[];
}

// 3️⃣ Type the imported JSON
const projectData = projectDataRaw as ProjectSection[];

// 4️⃣ Map icon names to React components
const iconMap = {
  layers: Layers,
  code2: Code2,
  graduationCap: GraduationCap
} as const;

const ProjectsSummary = () => {
  return (
    <div>
      {projectData.map((section, index) => {
        const IconComponent = iconMap[section.icon]; // now TS knows this is valid

        return (
          <InfoProjects
            key={index}
            icon={IconComponent ? <IconComponent size={24} /> : null}
            title={section.title}
          >
            {section.children.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </InfoProjects>
        );
      })}
    </div>
  );
};

export default ProjectsSummary;