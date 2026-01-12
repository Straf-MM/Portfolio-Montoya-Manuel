import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Clock } from "lucide-react";

export default function Internships() {
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
          <h1 className="text-4xl font-bold text-foreground">Mes Stages</h1>
          <p className="text-muted-foreground mt-2">Découvrez mes expériences professionnelles</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto max-w-5xl px-4 py-12">
        <div className="space-y-12">
          {/* Stage 1 */}
          <div className="bg-card rounded-lg border border-border p-8 hover:border-accent transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Premier Stage</h2>
                <p className="text-accent text-sm font-semibold mt-1">À compléter avec vos informations</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Entreprise</h3>
                <p className="text-muted-foreground">
                  [Nom de l'entreprise - À remplir]
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Période</h3>
                <p className="text-muted-foreground">
                  [Dates du stage - À remplir]
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Poste</h3>
                <p className="text-muted-foreground">
                  [Titre du poste - À remplir]
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Missions et Réalisations</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• [Mission 1 - À remplir]</li>
                  <li>• [Mission 2 - À remplir]</li>
                  <li>• [Mission 3 - À remplir]</li>
                  <li>• [Réalisation importante - À remplir]</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Compétences Acquises</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">[Compétence 1]</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">[Compétence 2]</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">[Compétence 3]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="bg-card rounded-lg border border-border/50 p-8 opacity-60">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Deuxième Stage</h2>
                <p className="text-muted-foreground text-sm font-semibold mt-1">À venir</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground text-center py-8">
                Mon deuxième stage sera effectué prochainement. Cette section sera mise à jour avec mes expériences et réalisations.
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-2">📄 Documents Disponibles</h3>
            <p className="text-muted-foreground mb-4">
              Vous pouvez consulter mes rapports de stage complets dans la section Contact.
            </p>
            <Link href="/contact">
              <a>
                <Button variant="outline" size="sm">
                  Accéder aux documents
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
