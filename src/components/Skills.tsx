import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const technicalSkills = [
    "Python",
    "Machine Learning",
    "Data Science",
    "Artificial Intelligence",
    "SQL",
    "Deep Learning",
    "TensorFlow",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Data Analysis",
    "Regression Models",
    "Random Forest",
    "Decision Tree",
  ];

  const devTools = [
    "Web Development",
    "Firebase",
    "Flutter",
    "GitHub",
    "Vercel",
    "Netlify",
  ];

  const softSkills = [
    "Problem Solving",
    "Quick Learning",
    "Self Discipline",
    "Communication",
    "Time Management",
    "Leadership",
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-foreground">Skills</h2>

      <div className="grid gap-6">
        
        {/* Technical Skills */}
        <div>
          <h3 className="font-semibold mb-2">Technical Core</h3>
          <div className="flex flex-wrap gap-2">
            {technicalSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Development & Tools */}
        <div>
          <h3 className="font-semibold mb-2">Development & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {devTools.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="font-semibold mb-2">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

