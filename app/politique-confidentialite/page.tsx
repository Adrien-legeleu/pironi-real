import { Badge } from "@/components/ui/badge";

export default function PolitiquePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm">
            Informations légales
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground">
            
            <h2>1. Introduction</h2>
            <p>
              Pironi s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>

            <h2>2. Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <ul>
              <li><strong>Informations d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong>Informations de réservation :</strong> dates, lieux, type de service demandé</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
              <li><strong>Informations de paiement :</strong> traitées de manière sécurisée par nos prestataires de paiement</li>
            </ul>

            <h2>3. Utilisation des données</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul>
              <li>Traiter vos réservations et demandes de services</li>
              <li>Vous contacter concernant vos réservations</li>
              <li>Améliorer nos services et votre expérience utilisateur</li>
              <li>Vous envoyer des informations sur nos offres (avec votre consentement)</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>

            <h2>4. Conservation des données</h2>
            <p>
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément aux obligations légales applicables. Les données de réservation sont conservées pendant 3 ans après la dernière interaction.
            </p>

            <h2>5. Partage des données</h2>
            <p>
              Vos données peuvent être partagées avec :
            </p>
            <ul>
              <li>Nos chauffeurs et partenaires pour la réalisation des services</li>
              <li>Nos prestataires de paiement pour le traitement sécurisé des transactions</li>
              <li>Les autorités compétentes si la loi l'exige</li>
            </ul>
            <p>
              Nous ne vendons jamais vos données personnelles à des tiers.
            </p>

            <h2>6. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>

            <h2>7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@pironi.fr" className="text-primary hover:underline">contact@pironi.fr</a>
            </p>

            <h2>8. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
            </p>

            <h2>9. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
            </p>

            <h2>10. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, contactez-nous :
            </p>
            <ul>
              <li><strong>Email :</strong> <a href="mailto:contact@pironi.fr" className="text-primary hover:underline">contact@pironi.fr</a></li>
              <li><strong>Adresse :</strong> Avenue Foch, 75016 Paris</li>
            </ul>

          </div>
        </div>
      </section>
    </div>
  );
}
