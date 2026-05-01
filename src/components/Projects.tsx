import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/src/components/ui/badge";

const projects = [
  { title: "Likitha Ladies Beauty Parlour", description: "Engineered a responsive website with WhatsApp booking integration, streamlining client scheduling and enhancing digital visibility.", link: "https://likitha-beauty-parlour.netlify.app/", tech: ["React", "Tailwind CSS", "WhatsApp API", "Responsive Web Design"] },
  { title: "Sri Manikanta Meeseva", description: "Developed a bilingual (Telugu/English) government services portal with intuitive navigation to improve accessibility.", link: "https://sri-manikanta-meeseva.netlify.app", tech: ["React", "Bilingual Support (Telugu/English)", "Tailwind CSS"] },
  { title: "Sai Megha Multi Specialty Hospital", description: "Built a responsive healthcare platform featuring doctor profiles, service categorization, and integrated map navigation.", link: "https://sai-megha-multi-speciality-hospital.netlify.app", tech: ["React", "Responsive UI", "Google Maps Integration"] },
  { title: "Soundarya Ladies Beauty Parlour", description: "Delivered a professional business website focusing on lead enquiry features and WhatsApp communication.", link: "https://parvathi-soundarya-beauty-parlour.netlify.app", tech: ["React", "Lead Generation", "WhatsApp Integration"] },
  { title: "Top 50 AI Tools", description: "Architected a full-stack platform; integrated Razorpay payments/Firebase auth. Demonstrated full product lifecycle: ideation, build, deploy, monetize.", link: "https://top-50-ai-tools.vercel.app/", tech: ["Full Stack", "Firebase Auth", "Razorpay Payment Gateway"] },
  { title: "Edith (Voice Assistant)", description: "Developed a real-time AI voice assistant leveraging integrated APIs for voice input processing and automated system command execution.", link: "#", tech: ["NLP", "Speech Recognition", "System Command Integration"] },
  { title: "Gold Price Prediction", description: "Built a regression model using Random Forest on historical data (2014-2026) to predict trends with optimized regression metrics.", link: "#", tech: ["Regression Models", "Random Forest", "Data Engineering"] },
  { title: "Car Price Prediction", description: "Developed a regression model using Decision Tree Regressor to estimate vehicle valuation through data-driven feature engineering.", link: "#", tech: ["Decision Tree Regressor", "Feature Engineering"] }
];

export const Projects = () => (
  <section className="py-20 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-foreground">Projects</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map(proj => (
        <Card key={proj.title} className="bg-card flex flex-col">
          <CardHeader>
            <CardTitle>{proj.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="mb-4">{proj.description}</CardDescription>
            <h4 className="text-sm font-semibold text-foreground mb-2">Key Technologies Used</h4>
            <div className="flex flex-wrap gap-1">
              {proj.tech.map(t => (
                <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
              ))}
            </div>
          </CardContent>
          {proj.link !== "#" && (
            <div className="p-6 pt-0">
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                View Project
              </a>
            </div>
          )}
        </Card>
      ))}
    </div>
  </section>
);
