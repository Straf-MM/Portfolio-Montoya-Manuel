import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Briefcase, BookOpen, Award, Mail } from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Plus dynamique */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background gradient animated */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-card to-background opacity-50" />
        
        <div className="container mx-auto max-w-4xl">
          {/* Main Hero */}
          <div className="text-center space-y-8 animate-fade-in">
            {/* Animated Title */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-accent px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  ✨ Bienvenue sur mon portfolio
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Manuel Montoya
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-semibold">
                Spécialiste Réseaux - BTS SIO 2ème année
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Découvrez mon expertise en infrastructure réseau, administration système et sécurité informatique
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/projects">
                <a>
                  <Button className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg flex items-center gap-2">
                    Voir mes projets
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Me contacter
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-left">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">À propos de moi</h2>
                <div className="w-12 h-1 bg-accent rounded-full" />
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Je suis actuellement en deuxième année de BTS SIO, spécialisé dans la filière Réseaux et Infrastructure. Passionné par l'architecture réseau, la sécurité informatique et l'administration système, je développe mes compétences à travers des projets pratiques et des stages en entreprise.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Mon objectif est de devenir un expert en infrastructure réseau capable de concevoir, déployer et sécuriser des solutions réseau robustes pour les organisations.
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="/internships">
                  <a>
                    <Button variant="outline">Mes stages</Button>
                  </a>
                </Link>
              </div>
            </div>

            {/* Right Stats */}
            <div className="space-y-4 animate-slide-right">
              <div className="bg-background rounded-lg p-6 border border-border hover:border-accent transition-all">
                <div className="flex items-start gap-4">
                  <Code2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Développement</h3>
                    <p className="text-sm text-muted-foreground">React, Node.js, TypeScript, Tailwind CSS</p>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border hover:border-accent transition-all">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Expérience</h3>
                    <p className="text-sm text-muted-foreground">2 stages en entreprise, projets académiques</p>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border hover:border-accent transition-all">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Formation</h3>
                    <p className="text-sm text-muted-foreground">BTS SIO 2ème année en cours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Mes domaines de compétence</h2>
            <p className="text-lg text-muted-foreground">Une formation complète couvrant plusieurs aspects de l'informatique</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-card rounded-lg p-8 border border-border hover:border-accent hover:bg-secondary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0ms" }}>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Infrastructure Réseau</h3>
              <p className="text-muted-foreground mb-4">Conception, déploiement et gestion d'infrastructures réseau robustes avec TCP/IP, routage et commutation</p>
              <Link href="/projects">
                <a className="text-accent text-sm font-medium hover:underline flex items-center gap-1">
                  Voir les projets <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group bg-card rounded-lg p-8 border border-border hover:border-accent hover:bg-secondary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sécurité Réseau & Développement</h3>
              <p className="text-muted-foreground mb-4">Sécurisation d'infrastructures, firewalls, VPN, et développement de solutions réseau</p>
              <Link href="/internships">
                <a className="text-accent text-sm font-medium hover:underline flex items-center gap-1">
                  Mes stages <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>

             {/* Card 3 */}
            <div className="group bg-card rounded-lg p-8 border border-border hover:border-accent hover:bg-secondary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Administration Système</h3>
              <p className="text-muted-foreground mb-4">Configuration de serveurs, gestion d'utilisateurs, maintenance système et support IT</p>
              <Link href="/tech-watch">
                <a className="text-accent text-sm font-medium hover:underline flex items-center gap-1">
                  Veille technologique <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Explorez mon portfolio</h2>
            <p className="text-muted-foreground">Accédez rapidement aux différentes sections</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/projects">
              <a className="group">
                <div className="bg-background rounded-lg p-6 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 text-center">
                  <Code2 className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground">Projets</h3>
                  <p className="text-xs text-muted-foreground mt-1">6 projets</p>
                </div>
              </a>
            </Link>

            <Link href="/internships">
              <a className="group">
                <div className="bg-background rounded-lg p-6 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 text-center">
                  <Briefcase className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground">Stages</h3>
                  <p className="text-xs text-muted-foreground mt-1">2 expériences</p>
                </div>
              </a>
            </Link>

            <Link href="/tech-watch">
              <a className="group">
                <div className="bg-background rounded-lg p-6 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 text-center">
                  <BookOpen className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground">Veille Tech</h3>
                  <p className="text-xs text-muted-foreground mt-1">Backdoors</p>
                </div>
              </a>
            </Link>

            <Link href="/certificates">
              <a className="group">
                <div className="bg-background rounded-lg p-6 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 text-center">
                  <Award className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground">Certificats</h3>
                  <p className="text-xs text-muted-foreground mt-1">6 certifications</p>
                </div>
              </a>
            </Link>

            <Link href="/contact">
              <a className="group md:col-span-2">
                <div className="bg-background rounded-lg p-6 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 text-center">
                  <Mail className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground">Contact</h3>
                  <p className="text-xs text-muted-foreground mt-1">Formulaire et documents</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center space-y-6 animate-slide-up">
          <h2 className="text-3xl font-bold text-foreground">Intéressé par mon profil ?</h2>
          <p className="text-lg text-muted-foreground">N'hésitez pas à me contacter pour discuter de collaborations ou d'opportunités</p>
          <Link href="/contact">
            <a>
              <Button className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg">
                Me contacter maintenant
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
