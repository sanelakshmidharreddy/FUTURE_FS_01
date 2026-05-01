import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Experience = () => (
  <section className="py-20 px-6 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-foreground">Experience</h2>
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Founder & Full Stack Developer | Elite Web Creations</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built and delivered multiple real-world client websites</li>
          <li>Worked with healthcare, beauty, and service businesses</li>
          <li>Implemented WhatsApp integrations and Google Maps</li>
          <li>Focused on responsive and user-friendly design</li>
          <li>Helped local businesses improve digital presence</li>
        </ul>
      </CardContent>
    </Card>
  </section>
);
