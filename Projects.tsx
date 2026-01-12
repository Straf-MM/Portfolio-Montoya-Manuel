import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap } from "lucide-react";

export default function Projects() {
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
          <h1 className="text-4xl font-bold text-foreground">Mes Projets</h1>
          <p className="text-muted-foreground mt-2">Découvrez mes réalisations académiques et professionnelles</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto max-w-5xl px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Icon */}
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
            <Zap className="w-10 h-10 text-accent" />
          </div>

          {/* Message */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground">Projets en Développement</h2>
            <p className="text-lg text-muted-foreground">
              Je suis actuellement en train de développer plusieurs projets passionnants dans le domaine des réseaux et de l'infrastructure IT. Cette section sera bientôt remplie avec mes réalisations académiques et professionnelles.
            </p>
            <p className="text-muted-foreground">
              Mes projets porteront principalement sur :
            </p>
          </div>

          {/* Project Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-all">
              <h3 className="font-semibold text-foreground mb-2">Infrastructure Réseau</h3>
              <p className="text-sm text-muted-foreground">Configuration de réseaux, VLAN, routage, commutation</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-all">
              <h3 className="font-semibold text-foreground mb-2">Sécurité Réseau</h3>
              <p className="text-sm text-muted-foreground">Firewalls, VPN, IDS/IPS, gestion de certificats</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-all">
              <h3 className="font-semibold text-foreground mb-2">Administration Système</h3>
              <p className="text-sm text-muted-foreground">Serveurs Linux/Windows, Active Directory, scripts</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-all">
              <h3 className="font-semibold text-foreground mb-2">Outils Réseau</h3>
              <p className="text-sm text-muted-foreground">Cisco, Wireshark, GNS3, monitoring et logs</p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <p className="text-muted-foreground mb-4">Revenez bientôt pour découvrir mes projets !</p>
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
