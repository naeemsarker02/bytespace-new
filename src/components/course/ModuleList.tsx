import Icon from "@/components/ui/icons";
import type { CourseModule } from "@/types";

export default function ModuleList({ modules }: { modules: CourseModule[] }) {
  return (
    <ul className="flex flex-col gap-6">
      {modules.map((module) => (
        <li key={module.title} className="flex items-start gap-3">
          <span className="flex size-[72px] shrink-0 items-center justify-center rounded-float bg-electric-400 text-shuttle-950">
            <Icon name="video" size={40} />
          </span>
          <div>
            <h3 className="text-base leading-[1.2] font-medium text-shuttle-950">{module.title}</h3>
            <p className="mt-1 text-base leading-[1.6] text-shuttle-600">{module.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
