---
title: "Ajouter la prévision solaire à l'Energy Dashboard HA"
description: "L'Energy Dashboard sait superposer une prévision à votre courbe de production : comment la brancher via HACS et ce que dit vraiment la ligne pointillée."
lang: fr
draft: false
category: "k5"
guide: "prevision-solaire-home-assistant-comparatif"
translationKey: "qa-ha-energy-dashboard"
seo:
  ogTitle: "Prévision solaire dans l'Energy Dashboard : réglage et pièges"
---
L'Energy Dashboard gère les prévisions nativement : installez une intégration de prévision, puis dans **Settings → Dashboards → Energy** modifiez votre source de production solaire et cochez l'option de prévision fournie par cette intégration. La ligne pointillée se superpose alors à votre production réelle — le tableau de bord cesse d'être un rétroviseur et devient un plan de journée.

## Pourquoi cette ligne pointillée compte

Sans prévision, l'Energy Dashboard vous dit ce qui s'est déjà passé. Avec elle, deux usages apparaissent. D'abord la **planification** : un coup d'œil le matin vous dit si la journée est bonne pour la lessive et la recharge, ou si elle sera grise — et toutes vos automatisations peuvent lire les mêmes entités que le tableau de bord. Ensuite le **suivi de santé** : une production réelle qui colle à la prévision signifie que l'installation va bien ; une production qui reste durablement en dessous est le premier signe visible d'un ombrage, d'un encrassement ou d'un défaut.

La qualité de la prévision décide de la confiance que vous pouvez accorder à ces deux usages. Les modèles simples estiment à partir de la seule position et de la géométrie des modules ; les services fondés sur la physique ajoutent l'irradiance issue des modèles météo (ensemble NWP) et se recalent sur l'historique réel de votre installation, ce qui resserre assez l'erreur pour qu'un écart de 15 % devienne un signal et non du bruit. Le comparatif détaille les options disponibles sous forme d'intégrations Home Assistant.

## Ce qu'il faut faire

1. **Installez l'intégration via HACS**, renseignez votre champ PV (position, orientation, inclinaison, kWc) et vérifiez que les nouveaux capteurs apparaissent (énergie du jour, énergie restante, heure suivante).
2. **Ajoutez la prévision dans l'Energy Dashboard** — modifiez la source solaire, activez la prévision de l'intégration ; la ligne pointillée apparaît sur le graphique de production en moins d'une heure.
3. **Contrôlez le résultat pendant quelques jours** — une prévision très fausse par ciel dégagé trahit presque toujours une inclinaison ou une orientation mal saisie, à corriger avant qu'une automatisation ne s'y fie.
4. **Réutilisez les capteurs au-delà du tableau de bord** — les mêmes entités alimentent l'automatisation du matin et la consigne de charge nocturne de la batterie ; le tableau de bord n'en est que la partie visible.
