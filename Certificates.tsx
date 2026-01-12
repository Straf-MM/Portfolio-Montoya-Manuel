import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award } from "lucide-react";

export default function Certificates() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto max-w-5xl px-4 py-6">
          <Link href="/">
            <a className="flex items-center gap-2 text-accent hover:underline mb-4">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </a>
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Mes Certificats</h1>
          <p className="text-muted-foreground mt-2">Certifications et qualifications professionnelles</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto max-w-5xl px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Icon */}
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
            <Award className="w-10 h-10 text-accent" />
          </div>

          {/* Message */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground">Certificats à Venir</h2>
            <p className="text-lg text-muted-foreground">
              Je suis actuellement en formation et je prépare plusieurs certifications professionnelles dans le domaine des réseaux et de l'infrastructure IT. Cette section sera mise à jour au fur et à mesure de l'obtention de mes certificats.
            </p>
          </div>

          {/* Planned Certifications */}
          <div className="w-full max-w-2xl space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-6">Certifications Prévues</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-4 border border-border hover:border-accent transition-all">
                <h4 className="font-semibold text-foreground mb-2">Cisco CCNA</h4>
                <p className="text-sm text-muted-foreground">Certification en réseautage</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border hover:border-accent transition-all">
                <h4 className="font-semibold text-foreground mb-2">CompTIA Security+</h4>
                <p className="text-sm text-muted-foreground">Certification en sécurité informatique</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border hover:border-accent transition-all">
                <h4 className="font-semibold text-foreground mb-2">Microsoft AZ-900</h4>
                <p className="text-sm text-muted-foreground">Certification Azure Fundamentals</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border hover:border-accent transition-all">
                <h4 className="font-semibold text-foreground mb-2">Linux LPI</h4>
                <p className="text-sm text-muted-foreground">Certification Linux Professional</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <p className="text-muted-foreground mb-4">Revenez bientôt pour découvrir mes certifications !</p>
            <Link href="/">
              <a>
                <Button className="bg-accent text-accent-foreground hover:opacity-90">
                  Retour à l'accueil
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
