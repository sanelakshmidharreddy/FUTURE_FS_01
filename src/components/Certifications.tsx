import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

const certs = [
  { name: "AI Builder Masterclass", issuer: "Airtribe", date: "Apr 2026" },
  { name: "Claude101", issuer: "Anthropic", date: "Mar 2026" },
  { name: "AI Tools Workshop", issuer: "Be10x", date: "Feb 2026" },
  { name: "Deloitte Data Analytics Job Simulation", issuer: "Forage", date: "Feb 2026" },
  { name: "Machine Learning Certification", issuer: "DLK Solutions", date: "" },
];

export const Certifications = () => (
  <section className="py-20 px-6 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-foreground">Certifications</h2>
    <div className="grid gap-4 md:grid-cols-2">
      {certs.map((cert, index) => (
        <Card key={index} className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg">{cert.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{cert.issuer} {cert.date && `• ${cert.date}`}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);
