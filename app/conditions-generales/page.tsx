import { Badge } from "@/components/ui/badge";

export default function ConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm">
            Informations légales
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Conditions Générales d'Utilisation
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
            
            <h2>1. Objet</h2>
            <p>
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web Pironi et des services proposés. En utilisant notre site et nos services, vous acceptez sans réserve les présentes conditions.
            </p>

            <h2>2. Présentation de la société</h2>
            <ul>
              <li><strong>Raison sociale :</strong> Pironi</li>
              <li><strong>Siège social :</strong> Avenue Foch, 75016 Paris</li>
              <li><strong>Email :</strong> contact@pironi.fr</li>
            </ul>

            <h2>3. Services proposés</h2>
            <p>Pironi propose les services suivants :</p>
            <ul>
              <li><strong>Location sans permis :</strong> Location de véhicules sans permis pour courte et moyenne durée</li>
              <li><strong>Transport & Logistique :</strong> Services de transport de marchandises et livraisons</li>
              <li><strong>Chauffeur privé :</strong> Services de chauffeur avec véhicules de luxe (Rolls-Royce Phantom, Mercedes Maybach)</li>
            </ul>

            <h2>4. Réservations</h2>
            <h3>4.1 Processus de réservation</h3>
            <p>
              Les réservations s'effectuent via notre formulaire de contact ou par téléphone. Toute réservation est soumise à disponibilité et confirmation de notre part.
            </p>

            <h3>4.2 Confirmation</h3>
            <p>
              Une confirmation de réservation vous sera envoyée par email. Le contrat n'est définitivement conclu qu'après cette confirmation.
            </p>

            <h2>5. Tarifs et paiement</h2>
            <h3>5.1 Tarifs</h3>
            <p>
              Les tarifs affichés sur le site sont en euros (€) TTC. Nous nous réservons le droit de modifier nos tarifs à tout moment, mais les services seront facturés sur la base des tarifs en vigueur au moment de la confirmation de la réservation.
            </p>

            <h3>5.2 Modalités de paiement</h3>
            <p>
              Le paiement s'effectue selon les modalités convenues lors de la réservation. Pour certains services, un acompte peut être demandé.
            </p>

            <h2>6. Annulation et modification</h2>
            <h3>6.1 Par le client</h3>
            <p>
              Toute annulation doit être notifiée par email. Les conditions d'annulation sont les suivantes :
            </p>
            <ul>
              <li>Plus de 48h avant : remboursement intégral</li>
              <li>Entre 24h et 48h : remboursement à 50%</li>
              <li>Moins de 24h : aucun remboursement</li>
            </ul>

            <h3>6.2 Par Pironi</h3>
            <p>
              Pironi se réserve le droit d'annuler une réservation en cas de force majeure ou d'indisponibilité imprévue. Dans ce cas, un remboursement intégral sera effectué.
            </p>

            <h2>7. Responsabilité</h2>
            <h3>7.1 Utilisation des véhicules</h3>
            <p>
              Le client s'engage à utiliser les véhicules de manière responsable et conforme au code de la route. Tout dommage causé par une utilisation inappropriée sera à la charge du client.
            </p>

            <h3>7.2 Assurance</h3>
            <p>
              Tous nos véhicules sont assurés. Les conditions spécifiques d'assurance vous seront communiquées lors de la réservation.
            </p>

            <h3>7.3 Limitations</h3>
            <p>
              Pironi ne pourra être tenu responsable des dommages indirects résultant de l'utilisation de nos services.
            </p>

            <h2>8. Obligations du client</h2>
            <p>Le client s'engage à :</p>
            <ul>
              <li>Fournir des informations exactes et à jour</li>
              <li>Respecter les conditions d'utilisation des véhicules</li>
              <li>Restituer les véhicules dans l'état initial</li>
              <li>Respecter les horaires convenus</li>
              <li>Se conformer au code de la route</li>
            </ul>

            <h2>9. Données personnelles</h2>
            <p>
              Le traitement de vos données personnelles est régi par notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>.
            </p>

            <h2>10. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, etc.) est protégé par le droit d'auteur. Toute reproduction non autorisée est interdite.
            </p>

            <h2>11. Litiges</h2>
            <h3>11.1 Médiation</h3>
            <p>
              En cas de litige, nous nous efforcerons de trouver une solution amiable. Vous pouvez contacter notre service client à contact@pironi.fr.
            </p>

            <h3>11.2 Droit applicable</h3>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>

            <h2>12. Modifications des CGU</h2>
            <p>
              Pironi se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le site.
            </p>

            <h2>13. Contact</h2>
            <p>
              Pour toute question concernant ces conditions générales :
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
