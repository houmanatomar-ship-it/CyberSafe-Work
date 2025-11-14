import React from 'react';
import type { BlockData } from './types';

// Helper function to route images through a proxy for better reliability
const imageProxy = (url: string) => `https://images.weserv.nl/?url=${url.replace(/^https?:\/\//, '')}`;

// --- SVG Icons ---

// Fix: Rewrote SVG components using React.createElement to be valid in a .ts file.
// JSX syntax is not supported in .ts files without specific compiler options, and renaming the file to .tsx is not possible.
const PhishingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M11.78 2.37a1 1 0 0 0-1.56 0L2.21 12.1A1 1 0 0 0 2.22 14l9.78 9.78a1 1 0 0 0 1.56 0l9.78-9.78a1 1 0 0 0-.01-1.41z" }),
    React.createElement("path", { d: "m16 8-6 6" }),
    React.createElement("path", { d: "m17 17-6-6" }),
    React.createElement("path", { d: "m12 12 1 1" })
  )
);
const NetworkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M4.91 9.49c4.6-4.49 11.58-4.49 16.18 0" }),
    React.createElement("path", { d: "M7.74 12.32c3.2-3.19 8.32-3.19 11.52 0" }),
    React.createElement("path", { d: "M10.57 15.15a4.23 4.23 0 0 1 5.86 0" }),
    React.createElement("path", { d: "M12 18h.01" })
  )
);
const IdentityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("circle", { cx: "12", cy: "12", r: "3" }),
    React.createElement("path", { d: "M12 18.535V18a6 6 0 1 0 0-12v.535" }),
    React.createElement("path", { d: "M12 2v2.535" }),
    React.createElement("path", { d: "M12 22v-2.535" }),
    React.createElement("path", { d: "M19.07 4.93l-1.782 1.782" }),
    React.createElement("path", { d: "M4.93 19.07l1.782-1.782" }),
    React.createElement("path", { d: "M4.93 4.93l1.782 1.782" }),
    React.createElement("path", { d: "M19.07 19.07l-1.782-1.782" })
  )
);
const IncidentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "m5 11 4-4" }),
    React.createElement("path", { d: "m19 11-4-4" }),
    React.createElement("path", { d: "M2 13h20" }),
    React.createElement("path", { d: "M3 17h2.5" }),
    React.createElement("path", { d: "M18.5 17H21" }),
    React.createElement("path", { d: "M12 17a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2Z" }),
    React.createElement("path", { d: "M6 17a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2Z" }),
    React.createElement("path", { d: "M18 17a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2Z" })
  )
);
const CultureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
    React.createElement("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
    React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  )
);
const ToolboxIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
      React.createElement("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
    )
);
const FingerprintIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement("path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }),
        React.createElement("path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88" }),
        React.createElement("path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02" }),
        React.createElement("path", { d: "M2 12a10 10 0 0 1 10-10c.94 0 1.84.13 2.69.35" }),
        React.createElement("path", { d: "M20 21a10 10 0 0 0-10-10" }),
        React.createElement("path", { d: "M10 22c-3.33 0-5.46-1.44-6-4" }),
        React.createElement("path", { d: "M22 12c0 3.33-1.44 5.46-4 6" })
    )
);


// --- Blocks Data ---

export const BLOCKS_DATA: BlockData[] = [
  {
    id: 1,
    title: 'Bloc 1 : Les pièges du quotidien',
    theme: 'Phishing, e-mails, SMS, liens',
    icon: PhishingIcon,
    color: 'blue',
    accentColor: '#00E0FF',
    quiz: [
      { 
        question: 'Tu reçois un e-mail de ADMIN@MICR0S0FT.com demandant de « vérifier ton compte ».', 
        answer: 'Je vérifie l’adresse et le lien avant d’agir.',
        justification: "Les cybercriminels utilisent souvent des adresses très similaires aux vraies (typosquatting) en remplaçant des lettres par des chiffres (comme '0' pour 'O'). Il est crucial de vérifier l'expéditeur et de survoler les liens avant de cliquer.",
        example: "Exemple : `support@paypaI.com` (avec un 'i' majuscule) au lieu de `support@paypal.com` (avec un 'L' minuscule)."
      },
      { 
        question: 'Un e-mail du « service RH » demande ton mot de passe.', 
        answer: 'Je contacte directement le service RH pour confirmer.',
        justification: "Aucun service légitime (RH, banque, support technique) ne demandera jamais votre mot de passe par e-mail ou téléphone. C'est un signe quasi certain d'une tentative de phishing.",
        example: "Exemple : Si vous recevez un tel e-mail, appelez directement le service concerné via un numéro de téléphone officiel pour vérifier."
      },
      { 
        question: 'Une page ressemble à eNote mais l’URL est https://ofpp1t.net/login.', 
        answer: 'Je ferme la page et vérifie l’adresse officielle.',
        justification: "Le typosquatting est une technique qui consiste à enregistrer des noms de domaine très proches d'un site légitime pour tromper l'utilisateur. Une seule lettre ou un chiffre différent peut vous rediriger vers un site malveillant.",
        example: "Exemple : `g00gle.com` au lieu de `google.com`. Le site frauduleux ressemble à l'original mais volera vos identifiants."
      },
      { 
        question: 'Tu reçois un e-mail d’une “banque” demandant de cliquer sur un lien.', 
        answer: 'Je contacte la banque directement par téléphone.',
        justification: "Les e-mails bancaires frauduleux créent un sentiment d'urgence pour vous pousser à cliquer sans réfléchir. Le réflexe doit toujours être de contacter la banque par un canal que vous connaissez déjà (téléphone, application officielle).",
        example: "Exemple : Ne cliquez jamais sur 'Connectez-vous ici'. Allez sur le site officiel de votre banque en tapant l'adresse vous-même."
      },
      { 
        question: 'Tu reçois un SMS disant “votre compte est bloqué, cliquez ici”.', 
        answer: 'Je contacte ma banque via son site officiel.',
        justification: "Le 'smishing' (phishing par SMS) utilise les mêmes techniques d'urgence et de peur que l'e-mail. Les liens dans les SMS sont particulièrement dangereux car l'URL est souvent masquée.",
        example: "Exemple : Un SMS de 'Chronopost' vous demande de payer 1,99€ pour un colis. C'est une arnaque pour voler vos données bancaires."
      },
      { 
        question: 'Quels sont les signes d’un phishing ?', 
        answer: 'Expéditeur suspect, fautes, urgence, lien étrange.',
        justification: "Le phishing repose sur des techniques de manipulation. Les signes les plus courants sont une adresse e-mail qui semble fausse, des fautes de grammaire, une demande pressante, une salutation générique ('Cher client') et un lien suspect.",
        example: "Exemple : Un e-mail de 'Netflix' avec l'objet 'SUSPENSION DE VOTRE COMPTE' contenant des fautes et un lien vers `netflx-support.com`."
      }
    ],
    definitions: [
        { term: 'Phishing (hameçonnage)', definition: 'Tentative d’escroquerie numérique visant à tromper une personne pour lui soutirer ses informations (identifiants, mots de passe, données bancaires) via un e-mail, SMS ou site frauduleux.', imagePrompt: "Schéma simple d'une attaque de phishing : un pirate envoie un e-mail avec un hameçon à un utilisateur, qui saisit ses informations sur une fausse page de connexion. Style icône, fond blanc, épuré, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Smishing', definition: 'Variante du phishing effectuée par SMS, souvent avec des messages d’urgence ou de livraison.', imagePrompt: "Schéma d'une attaque de smishing : une main tenant un smartphone affichant un SMS frauduleux avec un lien suspect. Style icône, fond blanc, clair et simple, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Spoofing', definition: 'Technique d’usurpation d’identité (adresse e-mail, nom de domaine ou numéro de téléphone) pour faire croire à une source légitime.', imagePrompt: "Schéma de spoofing : un e-mail avec un logo d'entreprise familier, mais l'adresse de l'expéditeur est subtilement incorrecte. Une loupe met en évidence l'adresse falsifiée. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Lien malveillant', definition: 'Lien qui semble sûr mais redirige vers un site piégé pour voler des informations.', imagePrompt: "Schéma d'un lien malveillant : un curseur de souris survole un texte de lien 'Cliquez ici', et une infobulle révèle une URL longue et suspecte. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Typosquatting', definition: 'Création d’un faux site dont l’adresse ressemble beaucoup à une vraie (ex. ofpp1t.net au lieu de ofppt.net).', imagePrompt: "Schéma de typosquatting : deux barres d'adresse de navigateur, l'une correcte 'banque.com' avec une coche verte, l'autre incorrecte 'banque.co' avec une croix rouge. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Faux support technique', definition: 'Appel ou message prétendant provenir d’un service officiel pour obtenir un accès ou un paiement.', imagePrompt: "Schéma d'une arnaque au faux support technique : un pop-up d'alerte sur un écran d'ordinateur avec un numéro de téléphone, incitant l'utilisateur à appeler. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
    ],
    takeaway: 'Le phishing est la cause n°1 de compromission.',
    dic: {
      availability: 'Comptes bloqués après vol d’identifiants.',
      integrity: 'Modification frauduleuse des données.',
      confidentiality: 'Fuite de mails et de mots de passe.'
    },
    history: 'Le phishing existe depuis 1996, lorsqu’un hacker ciblait les utilisateurs AOL via de faux messages. En 2023, 8 utilisateurs sur 10 ont été confrontés à un e-mail frauduleux.',
    example: 'En 2025, une campagne “fake Microsoft 365” a volé des milliers d’identifiants d’entreprises.',
    measures: ['Vérifier l’expéditeur', 'Analyser le lien et le domaine', 'Ne jamais donner son mot de passe par e-mail ou SMS.'],
    remarks: 'Un e-mail légitime n’exige jamais d’action urgente. Vérifiez chaque lien en survolant avant de cliquer. Méfiez-vous des messages émotionnels (peur, urgence, curiosité).',
    imageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/phishing-compare.png'),
    cardImageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/card-phishing.png'),
    positivePrompt: "Capture d'écran claire et nette d'un e-mail légitime de Microsoft. L'expéditeur est clairement visible : 'security@microsoft.com'. Le logo Microsoft est officiel et de haute qualité. Le message informe poliment d'une mise à jour des conditions de service, sans aucune demande urgente d'action. Le ton est professionnel.",
    negativePrompt: "Capture d'écran d'un e-mail de phishing évident et alarmant. L'expéditeur est 'support@micros0ft-login.net'. L'objet est 'URGENT: Votre compte sera suspendu !'. Le logo est de mauvaise qualité. Le texte contient des fautes : 'Veuillez cliqué ici pour vérifier votre compte immédiatement'. Le bouton 'Vérifier maintenant' est bien visible.",
  },
  {
    id: 2,
    title: 'Bloc 2 : Réseaux et environnements de travail',
    theme: 'Wi-Fi public, VPN, navigation privée, téléchargement',
    icon: NetworkIcon,
    color: 'purple',
    accentColor: '#A78BFA',
    quiz: [
      { 
        question: 'Tu dois envoyer un document via un Wi-Fi public.', 
        answer: 'Utiliser un VPN ou le partage de connexion mobile.',
        justification: "Les Wi-Fi publics ne sont pas chiffrés, ce qui signifie qu'un attaquant sur le même réseau peut 'écouter' votre trafic et intercepter vos données. Un VPN crée un tunnel sécurisé et chiffré pour protéger vos informations.",
        example: "Exemple : Sans VPN, un pirate dans le même café peut voir les sites que vous visitez et voler vos mots de passe."
      },
      { 
        question: 'On te propose un “accélérateur Internet gratuit”.', 
        answer: 'Refuser et vérifier sur le site officiel de son fournisseur.',
        justification: "Les logiciels 'gratuits' qui promettent des améliorations de performance sont souvent des leurres pour installer des logiciels malveillants (malwares) ou des logiciels espions (spywares) sur votre ordinateur.",
        example: "Exemple : Un pop-up vous offre 'Super PC Cleaner Gratuit'. En l'installant, vous installez en réalité un virus."
      },
      { 
        question: 'Le mode “navigation privée” rend-il anonyme ?', 
        answer: 'Non, il ne garde pas d’historique local mais reste visible au réseau.',
        justification: "La navigation privée efface uniquement les traces sur votre appareil (historique, cookies). Votre fournisseur d'accès à Internet, votre employeur (sur le réseau de l'entreprise) et les sites web que vous visitez peuvent toujours voir votre activité.",
        example: "Exemple : Vous utilisez la navigation privée au travail. Votre employeur peut toujours voir que vous avez visité `facebook.com`."
      },
      { 
        question: 'Quelle est une source fiable d’applications ?', 
        answer: 'App Store, Google Play ou le store d’entreprise.',
        justification: "Les magasins d'applications officiels (App Store, Google Play) analysent les applications pour détecter les malwares. Télécharger des applications depuis des sources non officielles ('sideloading') augmente considérablement le risque d'infection.",
        example: "Exemple : Télécharger une version 'crackée' d'un jeu depuis un site web inconnu peut installer un ransomware."
      },
      { 
        question: 'Tu travailles dans un café, quelle est la meilleure option ?', 
        answer: 'Utiliser un VPN pour chiffrer la connexion.',
        justification: "Le VPN chiffre tout votre trafic Internet, le rendant illisible pour quiconque tenterait de l'intercepter sur un réseau Wi-Fi public non sécurisé. C'est la protection la plus efficace dans cet environnement.",
        example: "Exemple : En utilisant un VPN à l'aéroport, même si un pirate intercepte vos données, il ne verra qu'un flux de caractères chiffrés."
      },
      { 
        question: '“Un site avec cadenas 🔒 est forcément sûr.”', 
        answer: 'Faux — le cadenas signifie juste que la connexion est chiffrée, pas que le site est légitime.',
        justification: "Le cadenas (HTTPS) garantit que la connexion entre votre navigateur et le site est chiffrée. Cependant, les cybercriminels peuvent aussi obtenir des certificats SSL pour leurs sites de phishing. Le cadenas ne garantit pas la légitimité du site.",
        example: "Exemple : Un site de phishing `ma-banque-securisee.com` peut avoir un cadenas, mais il reste un site frauduleux."
      }
    ],
    definitions: [
        { term: 'Wi-Fi public', definition: 'Réseau sans fil accessible à tous, souvent non sécurisé et facilement espionnable.', imagePrompt: "Schéma d'un Wi-Fi public non sécurisé : un ordinateur portable se connecte à un routeur Wi-Fi, et un pirate à proximité intercepte les données. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'VPN (Virtual Private Network)', definition: 'Outil qui chiffre la connexion Internet pour protéger les données sur les réseaux non sûrs.', imagePrompt: "Schéma d'un VPN : un ordinateur portable se connecte à Internet via un tunnel chiffré (représenté par un tube ou un bouclier), empêchant l'interception. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Navigation privée', definition: 'Mode du navigateur qui empêche l’enregistrement de l’historique, des cookies et des recherches locales, mais ne rend pas anonyme sur Internet.', imagePrompt: "Schéma de la navigation privée : une icône de navigateur avec un masque de carnaval. Une ligne pointillée le sépare d'un œil qui représente le suivi par le FAI ou le site web. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'HTTPS', definition: 'Protocole sécurisé de transfert de données sur Internet (le cadenas dans la barre d’adresse).', imagePrompt: "Schéma de HTTPS : une barre d'adresse de navigateur affichant une URL avec un cadenas fermé et 'https://'. Style icône, fond blanc, simple et clair, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Téléchargement sûr', definition: 'Action de récupérer un logiciel uniquement depuis des sources officielles (App Store, Play Store, site éditeur).', imagePrompt: "Schéma de téléchargement sûr : des icônes de magasins d'applications officiels (comme l'App Store et Google Play) avec des flèches pointant vers un smartphone. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Evil Twin', definition: 'Faux point d’accès Wi-Fi qui imite un réseau légitime pour espionner les utilisateurs.', imagePrompt: "Schéma d'une attaque Evil Twin : deux routeurs Wi-Fi, l'un légitime, l'autre malveillant avec une icône de pirate. Un utilisateur se connecte accidentellement au mauvais. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Hotspot', definition: 'Point de connexion Wi-Fi permettant d’accéder à Internet, parfois mal configuré ou vulnérable.', imagePrompt: "Icône simple d'un hotspot Wi-Fi avec un symbole d'onde radio, accompagné d'un petit point d'exclamation pour suggérer une vulnérabilité potentielle. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
    ],
    takeaway: 'La sécurité du réseau protège toutes les autres couches de la sécurité informatique.',
    dic: {
      availability: 'Interruptions réseau.',
      integrity: 'Altération de paquets.',
      confidentiality: 'Interception de données non chiffrées.'
    },
    history: 'Le Wi-Fi est devenu un standard mondial en 1999. Depuis, plus de 70 % des cyberattaques mobiles débutent sur des connexions non sécurisées.',
    example: 'Une cyberattaque “Evil Twin” imite un Wi-Fi public (ex: "WIFI_AEROPORT_GRATUIT") pour espionner les connexions des utilisateurs et voler leurs mots de passe.',
    measures: ['Utiliser un VPN sur les réseaux publics', 'Privilégier les sites en HTTPS', 'Éviter les Wi-Fi publics pour les transactions sensibles', 'Vérifier les certificats de sécurité.'],
    remarks: 'Utilisez toujours un VPN sur les réseaux inconnus. Évitez de transmettre des fichiers sensibles en public. Le cadenas 🔒 indique un chiffrement, pas une légitimité.',
    imageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/network-compare.png'),
    cardImageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/card-network.png'),
    positivePrompt: "Interface graphique claire d'une application VPN sur un écran d'ordinateur. Le statut 'Connecté et Sécurisé' est affiché en vert avec une grande icône de bouclier. La localisation du serveur est visible, et un graphique montre le trafic de données chiffré. Le design est moderne et inspire confiance.",
    negativePrompt: "Capture d'écran d'une liste de réseaux Wi-Fi sur un smartphone dans un lieu public. Un réseau légitime s'appelle 'AEROPORT_WIFI' et est sécurisé par un cadenas. Juste en dessous, un réseau très similaire s'appelle 'AEROPORT_WIFI_GRATUIT', qui est ouvert et non sécurisé. Une icône d'alerte rouge est affichée à côté du réseau non sécurisé pour souligner le danger.",
  },
  {
    id: 3,
    title: 'Bloc 3 : Identité et accès',
    theme: 'Mots de passe, MFA, ingénierie sociale, LinkedIn',
    icon: IdentityIcon,
    color: 'green',
    accentColor: '#4ADE80',
    quiz: [
      { 
        question: 'Le mot de passe “OFPPT2025” est-il sûr ?', 
        answer: 'Non, il est prévisible et facile à deviner.',
        justification: "Un mot de passe fort doit être long (12+ caractères), complexe (mélange de majuscules, minuscules, chiffres, symboles) et imprévisible. Les mots de passe basés sur des noms, des dates ou des mots courants sont extrêmement vulnérables.",
        example: "Exemple : Un pirate peut 'craquer' le mot de passe `OFPPT2025` en quelques secondes avec une attaque par dictionnaire."
      },
      { 
        question: 'Tu reçois une alerte de “connexion suspecte”.', 
        answer: 'Changer immédiatement le mot de passe et activer l’authentification à double facteur (MFA).',
        justification: "Une alerte de connexion suspecte signifie que quelqu'un a peut-être déjà votre mot de passe. Changer le mot de passe est la première étape. Activer le MFA ajoute une couche de sécurité essentielle qui empêchera l'attaquant de se connecter même s'il a le nouveau mot de passe.",
        example: "Exemple : Vous activez le MFA sur votre e-mail. La prochaine fois qu'un pirate essaiera de se connecter, il lui faudra aussi le code envoyé sur votre téléphone."
      },
      { 
        question: 'Un inconnu t’ajoute sur LinkedIn avec peu d’informations.', 
        answer: 'Vérifier son identité et ses connexions avant d’accepter. Se méfier des faux profils.',
        justification: "L'ingénierie sociale commence souvent par une prise de contact sur les réseaux sociaux. Les attaquants créent de faux profils pour gagner votre confiance avant de vous envoyer un lien de phishing ou de vous demander des informations.",
        example: "Exemple : Un faux recruteur vous contacte pour une 'offre exceptionnelle' et vous envoie un PDF piégé contenant un malware."
      },
      { 
        question: 'Quelle action protège le mieux contre le vol d’identité ?', 
        answer: 'L’activation de l’authentification multifacteur (MFA) sur tous les comptes possibles.',
        justification: "Le MFA est la défense la plus robuste contre l'usurpation de compte. Même si un pirate vole votre mot de passe, il ne pourra pas accéder à votre compte sans le deuxième facteur (code de votre téléphone, clé de sécurité, etc.).",
        example: "Exemple : Activez le MFA partout : e-mails, réseaux sociaux, comptes bancaires. C'est comme ajouter un cadenas supplémentaire à votre porte."
      },
      { 
        question: 'Ton réflexe quotidien le plus sûr ?', 
        answer: 'Vérifier l’expéditeur et les URL, utiliser des mots de passe forts, activer le MFA et faire des sauvegardes.',
        justification: "La cybersécurité n'est pas une seule action, mais un ensemble de bonnes habitudes. La combinaison de la vigilance (vérification), de la protection des accès (mots de passe/MFA) et de la préparation (sauvegardes) forme une défense solide.",
        example: "Exemple : Chaque jour, verrouillez votre ordinateur en vous levant, vérifiez les e-mails suspects et assurez-vous que vos sauvegardes automatiques fonctionnent."
      }
    ],
    definitions: [
        { term: 'Mot de passe fort', definition: 'Chaîne unique, longue (12+ caractères), combinant lettres, chiffres et symboles, non réutilisée ailleurs.', imagePrompt: "Schéma comparant un mot de passe faible ('motdepasse') avec une barre de force rouge et un mot de passe fort ('Zx$3v!p@w8rK') avec une barre de force verte. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Gestionnaire de mots de passe', definition: 'Application qui stocke et chiffre tous vos identifiants de façon sécurisée.', imagePrompt: "Icône d'un coffre-fort numérique avec un champ de mot de passe principal. Style icône, fond blanc, simple, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'MFA / 2FA (Multi-Factor Authentication)', definition: 'Méthode d’authentification utilisant au moins deux preuves d’identité (ex. mot de passe + code SMS).', imagePrompt: "Schéma de MFA : une icône de mot de passe suivie d'une icône de smartphone affichant un code, les deux pointant vers un cadenas fermé. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Ingénierie sociale', definition: 'Manipulation psychologique pour amener une personne à divulguer des informations sensibles.', imagePrompt: "Schéma d'ingénierie sociale : un pirate avec un masque de 'personne de confiance' tendant la main vers un utilisateur pour obtenir un mot de passe. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Usurpation d’identité', definition: 'Usage illégal d’informations personnelles pour se faire passer pour quelqu’un d’autre.', imagePrompt: "Icône d'une personne tenant une carte d'identité qui a le visage de quelqu'un d'autre. Style icône, fond blanc, conceptuel, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Session non verrouillée', definition: 'Poste resté ouvert, accessible à d’autres personnes sans autorisation.', imagePrompt: "Schéma d'une session non verrouillée : un bureau avec un ordinateur portable ouvert et sans surveillance, tandis qu'une autre personne s'approche. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Typosquatting social', definition: 'Compte LinkedIn ou e-mail imitant un profil réel (nom, logo, photo) pour obtenir la confiance d’une victime.', imagePrompt: "Schéma de typosquatting social : deux profils LinkedIn côte à côte, l'un authentique, l'autre un faux légèrement différent. Une loupe met en évidence les différences. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
    ],
    takeaway: 'L’identité numérique est le cœur de la sécurité. Protégez-la comme votre bien le plus précieux.',
    dic: {
      availability: 'Perte d’accès au compte.',
      integrity: 'Modification des autorisations.',
      confidentiality: 'Vol d’identité numérique.'
    },
    history: 'Les mots de passe apparaissent avec UNIX en 1969. Aujourd’hui, 80 % des failles proviennent d’identifiants faibles ou réutilisés.',
    example: 'En 2022, le groupe de hackers Lapsus$ a utilisé des identifiants volés à un seul employé pour infiltrer de grandes entreprises comme Microsoft et Nvidia.',
    measures: ['Utiliser l’authentification multifacteur (MFA)', 'Utiliser un gestionnaire de mots de passe', 'Être prudent sur les réseaux sociaux.'],
    remarks: 'Ne jamais réutiliser un mot de passe. Utilisez la double authentification partout. L’ingénierie sociale commence souvent par un simple message LinkedIn.',
    imageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/identity-compare.png'),
    cardImageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/card-identity.png'),
    positivePrompt: "Interface d'un gestionnaire de mots de passe affichant une entrée pour un compte. Le mot de passe généré est visible : 'Zx$3v!p@w8rK#2b'. Une barre de force du mot de passe est complètement verte et indique 'Très Fort'. Cela illustre clairement l'utilisation d'un mot de passe complexe et unique.",
    negativePrompt: "Capture d'écran d'un profil LinkedIn suspect envoyant un message. Le profil a une photo générique, très peu de connexions et pas d'historique professionnel. Le message est 'Bonjour, j'ai une opportunité d'investissement urgente pour vous. Cliquez ici pour en savoir plus : invest-now.biz'. C'est une tentative claire d'ingénierie sociale.",
  },
  {
    id: 4,
    title: 'Bloc 4 : Réaction face à l’incident',
    theme: 'Ransomware, perte de matériel, comportement à risque',
    icon: IncidentIcon,
    color: 'red',
    accentColor: '#F87171',
    quiz: [
      { 
        question: 'Tu penses avoir cliqué sur un lien suspect.', 
        answer: 'Déconnecter immédiatement l’ordinateur du réseau et alerter le service IT.',
        justification: "Déconnecter la machine du réseau (Wi-Fi et Ethernet) est le premier réflexe pour l'isoler. Cela empêche un éventuel malware de se propager à d'autres ordinateurs de l'entreprise. Alerter l'IT permet une prise en charge rapide par des experts.",
        example: "Exemple : Si vous ne déconnectez pas, un ransomware pourrait commencer à chiffrer les fichiers partagés sur le réseau de l'entreprise."
      },
      { 
        question: 'Tu reçois un message urgent demandant de “payer un fournisseur”.', 
        answer: 'Vérifier la demande par un canal de communication indépendant (téléphone).',
        justification: "C'est une technique d'arnaque au président ou de fraude au fournisseur. Les attaquants usurpent l'identité d'un dirigeant ou d'un fournisseur pour demander un virement urgent. Il faut toujours vérifier par un autre moyen (appel téléphonique sur un numéro connu).",
        example: "Exemple : Vous appelez le fournisseur qui vous confirme qu'il n'a jamais envoyé cette demande. L'e-mail était frauduleux."
      },
      { 
        question: 'Ton PC est soudainement très lent avec des fenêtres étranges.', 
        answer: 'Alerter le service IT et isoler la machine en la déconnectant du réseau.',
        justification: "Un ralentissement soudain et des comportements anormaux sont des signes classiques d'une infection par un malware. Comme pour un lien suspect, l'isolation immédiate est la clé pour contenir la menace.",
        example: "Exemple : Ces 'fenêtres étranges' pourraient être un spyware en train d'enregistrer vos frappes au clavier pour voler vos mots de passe."
      },
      { 
        question: 'Tu as perdu un ordinateur professionnel.', 
        answer: 'Signaler immédiatement la perte au service IT et à sa hiérarchie.',
        justification: "Un ordinateur portable perdu contient des données d'entreprise potentiellement sensibles. Le signaler rapidement permet au service IT de prendre des mesures : blocage du compte à distance, effacement des données si possible, et surveillance des accès.",
        example: "Exemple : Grâce à votre signalement rapide, l'IT a pu bloquer l'accès à distance avant que la personne qui a trouvé l'ordinateur ne puisse consulter les fichiers."
      },
      { 
        question: 'Un message de “Ransomware bloquant vos fichiers” s’affiche. Faut-il payer ?', 
        answer: 'Non, ne jamais payer. Débrancher l’ordinateur du réseau et signaler l’incident.',
        justification: "Payer la rançon n'offre aucune garantie de récupérer vos fichiers. De plus, cela finance les activités criminelles et vous désigne comme une cible prête à payer, vous exposant à de futures attaques. La seule solution fiable est la restauration via des sauvegardes.",
        example: "Exemple : L'entreprise a refusé de payer et a restauré toutes ses données grâce à la sauvegarde de la veille. Perte de données minimale, pas d'argent versé aux criminels."
      }
    ],
    definitions: [
        { term: 'Incident de sécurité', definition: 'Tout événement compromettant la confidentialité, l’intégrité ou la disponibilité d’un système.', imagePrompt: "Icône d'un bouclier brisé avec un point d'exclamation au centre. Style icône, fond blanc, symbolique, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Ransomware (rançongiciel)', definition: 'Logiciel malveillant qui chiffre les fichiers d’un appareil et réclame une rançon pour les déverrouiller.', imagePrompt: "Schéma d'une attaque par ransomware : un fichier est verrouillé par un cadenas, avec une demande de rançon (symbole de bitcoin) pour le déverrouiller. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Malware (logiciel malveillant)', definition: 'Programme conçu pour nuire, voler ou détruire des données.', imagePrompt: "Icône d'un insecte (bug) ou d'un crâne sur un document numérique. Style icône, fond blanc, simple et reconnaissable, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Exfiltration de données', definition: 'Vol ou transfert non autorisé d’informations vers un tiers.', imagePrompt: "Schéma d'exfiltration de données : des documents quittent un ordinateur et entrent dans le cloud d'un pirate, via une flèche pointillée. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Isolation', definition: 'Déconnexion immédiate d’un poste suspecté d’infection pour éviter la propagation.', imagePrompt: "Schéma d'isolation : un ordinateur portable est entouré d'une 'bulle' de protection, le déconnectant des autres ordinateurs du réseau. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Signalement', definition: 'Alerte adressée au service IT ou au responsable sécurité après un incident.', imagePrompt: "Icône d'une personne parlant dans un mégaphone en direction d'une icône de support technique. Style icône, fond blanc, clair, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Sauvegarde (backup)', definition: 'Copie sécurisée des données, conservée séparément pour les restaurer en cas d’attaque.', imagePrompt: "Schéma de sauvegarde : des données d'un ordinateur sont copiées sur un disque dur externe ou un cloud sécurisé. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
    ],
    takeaway: 'La rapidité d’action et de signalement d’un incident est cruciale pour limiter les pertes.',
    dic: {
      availability: 'Blocage complet du système.',
      integrity: 'Données chiffrées.',
      confidentiality: 'Fuite avant chiffrement.'
    },
    history: 'Le premier ransomware (AIDS Trojan) est apparu en 1989, sur disquette. Aujourd’hui, une attaque ransomware survient toutes les 11 secondes dans le monde.',
    example: 'En 2024, la CNSS du Maroc a subi une paralysie temporaire suite à un ransomware, illustrant la vulnérabilité des services critiques.',
    measures: ['Effectuer des sauvegardes régulières et testées', 'Avoir un plan de réponse à incident', 'Communiquer clairement et rapidement en cas de crise.'],
    remarks: 'Déconnectez le poste et alertez immédiatement. Ne payez jamais de rançon. Sauvegardez régulièrement vos fichiers.',
    imageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/incident-compare.png'),
    cardImageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/card-incident.png'),
    positivePrompt: "Illustration simple et claire d'une personne débranchant calmement le câble Ethernet de son ordinateur portable. Un post-it sur le bureau indique : 'Incident ? 1. Déconnecter 2. Appeler le support IT'. Cette image montre la bonne procédure à suivre de manière didactique.",
    negativePrompt: "Un écran d'ordinateur affichant un message de ransomware très agressif. Le fond est noir avec une tête de mort rouge. Le texte dit : 'VOS FICHIERS SONT CHIFFRÉS ! Payez 1 Bitcoin dans les 24 heures ou tout sera effacé'. Un compte à rebours est visible et les icônes de fichiers sont remplacées par des cadenas.",
  },
  {
    id: 5,
    title: 'Bloc 5 : Culture cybersécurité & gouvernance',
    theme: 'Antivirus, culture d’équipe, partage sécurisé, sensibilisation',
    icon: CultureIcon,
    color: 'orange',
    accentColor: '#FF9500',
    quiz: [
      { 
        question: 'À quoi sert un antivirus ?', 
        answer: 'À détecter et bloquer les logiciels malveillants connus, mais il n’est pas suffisant seul.',
        justification: "Un antivirus est essentiel, mais il fonctionne sur la base de 'signatures' de menaces déjà identifiées. Il peut ne pas détecter les menaces nouvelles (zero-day) ou les attaques sophistiquées comme le phishing. La vigilance humaine reste indispensable.",
        example: "Exemple : Votre antivirus est à jour, mais il ne vous empêchera pas de donner votre mot de passe sur un site de phishing."
      },
      { 
        question: 'Comment renforcer la sécurité au sein d’une équipe ?', 
        answer: 'Par la sensibilisation continue, la formation et le partage transparent des incidents.',
        justification: "La sécurité est une responsabilité collective. Des formations régulières maintiennent les réflexes, et le partage d'expériences (ex: 'j'ai reçu ce phishing') aide tout le monde à apprendre et à devenir plus vigilant.",
        example: "Exemple : Une équipe où les collaborateurs s'alertent mutuellement des e-mails suspects est beaucoup plus résiliente."
      },
      { 
        question: 'Tu quittes ton poste de travail en open-space pour quelques minutes.', 
        answer: 'Verrouiller sa session (Windows + L / Ctrl + Cmd + Q).',
        justification: "Laisser une session ouverte, même pour un court instant, est une porte d'entrée pour une personne mal intentionnée (interne ou externe). Le verrouillage est un réflexe simple et rapide qui protège l'accès à vos données et à celles de l'entreprise.",
        example: "Exemple : Un visiteur mal intentionné pourrait, en 30 secondes, brancher une clé USB malveillante sur votre poste non verrouillé."
      },
      { 
        question: 'Un collègue te demande ton mot de passe pour “dépanner”.', 
        answer: 'Refuser poliment. Ne jamais partager ses identifiants, c’est personnel et interdit.',
        justification: "Votre mot de passe est la clé de votre identité numérique. Le partager, même avec un collègue de confiance, annule toute traçabilité. Si un problème survient, les actions seront liées à votre compte. Les services IT ont des procédures pour intervenir sans avoir besoin de votre mot de passe.",
        example: "Exemple : Vous partagez votre mot de passe. Votre collègue fait une erreur qui supprime des données. Vous serez tenu pour responsable."
      },
      { 
        question: 'Un fichier confidentiel a été partagé sur un service cloud non sécurisé.', 
        answer: 'Informer le collègue, signaler l’incident au service IT et transférer le fichier vers un canal sécurisé.',
        justification: "L'erreur est humaine. Il ne faut pas blâmer, mais agir. Prévenir le collègue évite qu'il ne recommence, signaler à l'IT permet de mesurer le risque et de supprimer l'accès public, et utiliser le bon canal corrige l'erreur immédiate.",
        example: "Exemple : Un lien Google Drive partagé en mode 'public' a été remplacé par un partage sécurisé sur le cloud interne de l'entreprise."
      }
    ],
    definitions: [
        { term: 'Antivirus', definition: 'Logiciel détectant, bloquant et supprimant certains programmes malveillants.', imagePrompt: "Schéma d'un antivirus : un bouclier protégeant un ordinateur contre des icônes de virus. Style icône, fond blanc, classique, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Pare-feu (firewall)', definition: 'Barrière numérique filtrant les connexions autorisées et bloquant les accès non souhaités.', imagePrompt: "Schéma d'un pare-feu : un mur de briques protégeant un réseau interne des menaces provenant d'Internet. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Mise à jour de sécurité', definition: 'Correctif publié pour combler les failles et protéger les systèmes.', imagePrompt: "Icône d'une flèche circulaire de mise à jour sur un bouclier, symbolisant une protection renforcée. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Partage sécurisé', definition: 'Transfert d’informations via des canaux approuvés et chiffrés (intranet, cloud interne, VPN).', imagePrompt: "Schéma de partage sécurisé : un document se déplace d'un utilisateur à un autre à l'intérieur d'un tunnel chiffré. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Culture de cybersécurité', definition: 'Ensemble de comportements et de réflexes collectifs visant à protéger les ressources numériques.', imagePrompt: "Icône d'un groupe de personnes formant un cercle de protection autour d'un ordinateur. Style icône, fond blanc, collaboratif, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Sensibilisation', definition: 'Formation régulière pour développer les bons réflexes face aux menaces.', imagePrompt: "Icône d'une ampoule s'allumant au-dessus de la tête d'une personne, symbolisant la prise de conscience. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Politique de sécurité (PSSI)', definition: 'Ensemble des règles et pratiques internes pour garantir la sécurité de l’organisation.', imagePrompt: "Icône d'un document officiel avec un tampon et un bouclier. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
        { term: 'Signalement responsable', definition: 'Démarche d’un employé qui alerte sans crainte lorsqu’un incident survient.', imagePrompt: "Icône d'une personne levant la main pour signaler un problème, sans signe de peur ou de réprimande. Style icône, fond blanc, positif, haute définition, 4K, art vectoriel, lignes nettes." },
    ],
    takeaway: 'La sécurité n’est pas qu’une affaire d’outils, elle repose avant tout sur une culture d’équipe solide.',
    dic: {
      availability: 'Équipes formées = réactions rapides.',
      integrity: 'Moins d’erreurs = systèmes plus stables.',
      confidentiality: 'Vigilance partagée = moins de fuites.'
    },
    history: 'Le premier antivirus commercial (McAfee) est né en 1987. Depuis, la cybersécurité est passée d’un métier technique à une culture collective.',
    example: 'Une entreprise formant ses employés à la cybersécurité réduit de 75 % le risque d’infection par phishing, prouvant l’efficacité de la sensibilisation.',
    measures: ['Établir une charte informatique interne', 'Maintenir les antivirus et systèmes à jour', 'Définir des politiques de partage de données claires.'],
    remarks: 'L’humain est la première ligne de défense. Sensibiliser régulièrement renforce la résilience collective. La sécurité se cultive comme un réflexe.',
    imageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/culture-compare.png'),
    cardImageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/card-culture.png'),
    positivePrompt: "Capture d'écran d'une notification système officielle sur un ordinateur de bureau. La notification, avec le logo du système d'exploitation, dit : 'Mise à jour de sécurité importante prête à être installée'. Un bouton 'Redémarrer et Mettre à jour' est visible. C'est un exemple clair de bonne pratique de maintenance.",
    negativePrompt: "Illustration de deux employés de bureau. L'un passe à l'autre un post-it jaune sur lequel est clairement écrit 'Login: admin, Pass: motdepasse123'. L'échange est visible et met en évidence une pratique de partage d'identifiants extrêmement dangereuse et non sécurisée.",
  },
  {
    id: 6,
    title: 'Bloc 6 : Boîte à outils de cybersécurité',
    theme: 'Outils pratiques pour analyser et se protéger',
    icon: ToolboxIcon,
    color: 'orange',
    accentColor: '#FB923C',
    quiz: [
      { question: 'Quel est le premier réflexe avant de cliquer sur un lien dans un e-mail ?', answer: 'Vérifier l\'adresse de l\'expéditeur et survoler le lien pour voir l\'URL réelle.' },
      { question: 'Un fichier .zip reçu d\'un inconnu est-il sûr ?', answer: 'Non, il faut le considérer comme potentiellement dangereux et ne pas l\'ouvrir.' },
      { question: 'Que faire si une URL semble suspecte ?', answer: 'Utiliser un outil d\'analyse ou la rechercher sur un moteur de recherche au lieu de cliquer directement.' }
    ],
    definitions: [
      { term: 'Analyseur d\'URL', definition: 'Outil qui examine une adresse web pour détecter des signes de phishing, de malwares ou d\'autres menaces.', imagePrompt: "Schéma d'un analyseur d'URL : une URL est entrée dans un champ, et l'outil affiche un rapport avec un score de sécurité (vert/rouge). Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
      { term: 'Scanner de fichiers', definition: 'Programme qui inspecte un fichier à la recherche de code malveillant connu (virus, trojans, etc.).', imagePrompt: "Schéma d'un scanner de fichiers : une loupe passe sur un fichier, révélant une icône de bug à l'intérieur. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
      { term: 'Métadonnées de fichier', definition: 'Informations sur un fichier, telles que son nom, sa taille, son type et sa date de création, qui peuvent parfois indiquer un risque.', imagePrompt: "Icône d'un document avec une étiquette attachée, affichant des informations comme 'nom.pdf.exe', 'taille: 2Mo'. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." }
    ],
    takeaway: 'Des outils simples peuvent grandement améliorer votre vigilance et votre sécurité au quotidien.',
    dic: {
      availability: 'Les outils de détection précoce empêchent les blocages dus aux ransomwares.',
      integrity: 'Scanner les fichiers préserve l\'intégrité de vos données en évitant les modifications par des malwares.',
      confidentiality: 'Analyser les e-mails de phishing protège vos identifiants et informations confidentielles.'
    },
    history: 'Les premiers outils antivirus sont apparus dans les années 1980. Aujourd\'hui, l\'IA permet des analyses comportementales en temps réel pour détecter des menaces inconnues.',
    example: 'Un utilisateur utilise l\'analyseur pour vérifier un e-mail de "sa banque". L\'outil détecte que le domaine est "banque-securite.net" au lieu de "banque.fr", évitant ainsi un vol d\'identifiants.',
    measures: ['Utiliser l\'analyseur d\'URL/e-mail pour tout contenu suspect.', 'Scanner les pièces jointes avant de les ouvrir.', 'Demander un conseil rapide en cas de doute.'],
    remarks: 'Ces outils sont une aide à la décision, mais la vigilance humaine reste la meilleure défense. Ne faites jamais aveuglément confiance.',
    imageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/toolbox-banner.png'),
    cardImageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/card-toolbox.png'),
    positivePrompt: "Interface d'un outil de cybersécurité affichant un résultat d'analyse positif. Un grand bouclier vert avec une coche est visible. Le texte indique 'URL Sûre : Ce site est reconnu comme légitime'. Le design est clair, moderne et rassurant.",
    negativePrompt: "Interface d'un outil d'analyse de cybersécurité affichant une alerte de sécurité critique. Un grand triangle d'avertissement rouge avec un point d'exclamation est au centre. Le texte indique 'DANGER : Site de Phishing Détecté ! Ne saisissez aucune information'. Le fond est sombre et le message est conçu pour être alarmant et clair."
  },
  {
    id: 7,
    title: 'Bloc 7 : Votre Empreinte Numérique',
    theme: 'Les informations que vous partagez sans le savoir',
    icon: FingerprintIcon,
    color: 'blue', // Using a color already in the palette for consistency
    accentColor: '#2DD4BF', // A teal color
    quiz: [
      { question: 'Quelle information permet de vous localiser géographiquement sur Internet ?', answer: 'Votre adresse IP publique.' },
      { question: 'Les cookies sont-ils toujours dangereux ?', answer: 'Non, beaucoup sont utiles (connexion, panier), mais les cookies tiers peuvent suivre votre activité sur plusieurs sites.' },
      { question: 'Pourquoi un site web a-t-il besoin de connaître votre navigateur et votre OS ?', answer: 'Principalement pour afficher le site correctement, mais cette information peut aussi servir au pistage.' }
    ],
    definitions: [
      { term: 'Adresse IP', definition: 'Numéro unique identifiant votre connexion à Internet. Elle peut révéler votre localisation approximative.', imagePrompt: "Schéma d'une adresse IP : une icône de globe terrestre avec un marqueur de localisation pointant vers un utilisateur. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
      { term: 'User-Agent', definition: 'Chaîne de texte envoyée par votre navigateur qui identifie le logiciel, son système d\'exploitation et sa version.', imagePrompt: "Icône représentant une 'carte d'identité' pour un navigateur, affichant les logos de Chrome/Firefox, Windows/macOS. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
      { term: 'Cookie de navigation', definition: 'Petit fichier texte stocké par un site web sur votre ordinateur pour mémoriser des informations sur vous (préférences, connexion, etc.).', imagePrompt: "Icône d'un cookie (gâteau) avec des 0 et des 1 dessus, pour représenter les données stockées. Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." },
      { term: 'Empreinte numérique', definition: 'Ensemble des traces que vous laissez derrière vous en naviguant sur Internet.', imagePrompt: "Schéma d'une empreinte numérique : des pas laissés par un utilisateur, chaque pas contenant une icône (recherche, like, achat). Style icône, fond blanc, haute définition, 4K, art vectoriel, lignes nettes." }
    ],
    takeaway: 'Chaque action en ligne laisse une trace. Comprendre votre empreinte numérique est la première étape pour protéger votre vie privée.',
    dic: {
      availability: 'Une mauvaise configuration de la vie privée peut rendre vos données accessibles publiquement, même si vous ne le souhaitez pas.',
      integrity: 'Des cookies mal sécurisés peuvent être interceptés pour modifier vos sessions ou usurper votre identité.',
      confidentiality: 'Votre adresse IP, votre historique de navigation et vos informations système sont des données précieuses qui peuvent être collectées et vendues.'
    },
    history: 'Le concept d\'empreinte numérique a émergé avec la popularisation du web dans les années 2000. Aujourd\'hui, elle est au cœur des modèles économiques de nombreuses entreprises.',
    example: 'Une personne recherche des "vacances en Italie" sur un moteur de recherche. Quelques minutes plus tard, elle voit des publicités pour des vols et des hôtels en Italie sur les réseaux sociaux. C\'est le résultat du suivi via les cookies et l\'empreinte numérique.',
    measures: ['Utiliser un VPN pour masquer son adresse IP.', 'Nettoyer régulièrement ses cookies.', 'Utiliser des navigateurs axés sur la protection de la vie privée.'],
    remarks: 'La transparence est rare sur Internet. Soyez conscient des informations que vous partagez, même involontairement. Lisez les politiques de confidentialité.',
    imageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/footprint-banner.png'),
    cardImageUrl: imageProxy('https://storage.googleapis.com/aai-web-samples/apps/cybersafe/card-footprint.png'),
    positivePrompt: "Interface claire d'un gestionnaire de confidentialité de navigateur. L'utilisateur active des options comme 'Bloquer les cookies tiers', 'Protection renforcée contre le pistage' et 'Toujours envoyer une requête \"Ne pas suivre\"'. Le design est simple et donne le contrôle à l'utilisateur.",
    negativePrompt: "Une carte du monde stylisée avec de nombreuses lignes connectant différents points, représentant des flux de données. Au centre, un profil d'utilisateur est visible avec des icônes de panier d'achat, de messages et de photos. Des logos de grandes entreprises technologiques entourent la carte, illustrant la collecte massive de données personnelles à travers le globe."
  }
];

export const OFPPT_LOGO_SVG = `
<svg width="100" height="40" viewBox="0 0 227 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M81.2584 81.3333C57.2657 81.3333 37.666 61.947 37.666 38.2045C37.666 14.462 57.2657 0 81.2584 0C105.251 0 124.851 14.462 124.851 38.2045C124.851 61.947 105.251 81.3333 81.2584 81.3333ZM81.2584 5.2554C60.203 5.2554 42.9214 19.7174 42.9214 38.2045C42.9214 56.6916 60.203 76.0779 81.2584 76.0779C102.314 76.0779 119.595 56.6916 119.595 38.2045C119.595 19.7174 102.314 5.2554 81.2584 5.2554Z" class="ofppt-logo-path"/>
<path d="M19.1411 7.88306H0V0H37.3512V7.88306H18.2101V73.4496H37.3512V81.3327H0V73.4496H19.1411V7.88306Z" class="ofppt-logo-path"/>
<path d="M144.27 81.3327H133.278L130.341 70.4735H128.582L120.457 81.3327H107.82L124.162 60.2312L107.283 41.5654H120.301L129.214 56.1042H130.824L133.709 41.5654H144.701L134.372 60.6725L144.27 81.3327Z" class="ofppt-logo-path"/>
<path d="M188.461 41.5654H169.32V57.7348H187.319V65.6179H169.32V73.4496H188.461V81.3327H160.288V41.5654H188.461Z" class="ofppt-logo-path"/>
<path d="M226.969 41.5654H207.828V57.7348H225.827V65.6179H207.828V73.4496H226.969V81.3327H198.796V41.5654H226.969Z" class="ofppt-logo-path"/>
<path d="M188.461 0H169.32V16.1694H187.319V24.0525H169.32V31.8842H188.461V39.7673H160.288V0H188.461Z" class="ofppt-logo-path"/>
<style>
    .ofppt-logo-path { fill: #60A5FA; }
    .dark .ofppt-logo-path { fill: #00E0FF; }
</style>
</svg>
`;