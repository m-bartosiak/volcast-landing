---
title: "Automatiser l'autoconsommation dans Home Assistant"
description: "Le schéma qui tient : prévision de production, mesure en temps réel et liste de priorités des charges, pour éviter les conflits d'automatisation."
lang: fr
draft: false
category: "k5"
guide: "prevision-solaire-home-assistant-comparatif"
translationKey: "qa-ha-self-consumption"
seo:
  ogTitle: "Automatisations d'autoconsommation dans Home Assistant"
---
Le schéma qui fonctionne, c'est **prévision + mesure en temps réel + liste de priorités** : la prévision de production décide du plan de la journée (quelles charges tourneront au soleil aujourd'hui), les relevés live de l'onduleur ou du compteur décident du moment (le surplus est là, maintenant), et un ordre de priorité empêche les appareils de se disputer les mêmes watts. Une automatisation bâtie sur les seules mesures instantanées court après les nuages ; bâtie sur la seule prévision, elle ignore le réel. Ensemble, elles sont calmes et précises.

## Pourquoi la structure compte plus que l'automatisation isolée

L'approche naïve — « si l'injection dépasse 1 500 W, lance le lave-linge » — tient jusqu'au premier cumulus : la puissance chute, les automatisations battent, les appareils s'allument et s'éteignent en boucle. La structure robuste sépare trois rôles. La **planification** se fait le matin : la prévision dit si la journée porte assez de surplus pour l'eau chaude, pour une recharge du véhicule, ou pour aucun des deux, et arme des helpers booléens. Le **déclenchement** se fait en direct : un capteur d'injection lissé (moyenne sur 5 à 10 minutes, avec hystérésis) démarre la charge armée la plus prioritaire. L'**arbitrage**, c'est la liste de priorités : le ballon avant la voiture, la voiture avant la pompe de piscine, un gros consommateur à la fois.

Home Assistant a déjà toutes les briques : les intégrations de prévision alimentent l'Energy Dashboard et les templates (voir la réponse consacrée à l'Energy Dashboard), les utility meters comptabilisent ce que chaque charge a pris au soleil, et les helpers conservent le plan du jour. Aucun code sur mesure — seulement des automatisations qui lisent ce plan.

## Ce qu'il faut faire

1. **Installez une intégration de prévision** (via HACS) et exposez des capteurs de production heure par heure ; confrontez-les à une journée réelle avant d'automatiser quoi que ce soit.
2. **Créez un capteur de surplus lissé** — `statistics` ou `filter` sur l'injection, fenêtre de 5 à 10 minutes, avec des seuils d'enclenchement et de coupure assez éloignés pour éviter le pendulement.
3. **Écrivez le planificateur du matin** — une seule automatisation vers 6 h, qui compare les kWh prévus au besoin de chaque charge et arme les helpers.
4. **Écrivez une automatisation de déclenchement par charge**, conditionnée par son helper et par les priorités supérieures : c'est ce qui empêche le ballon et la borne de recharge de se partager le surplus en deux charges à moitié alimentées.
5. **Observez une semaine, puis ajustez les seuils** — les cartes des utility meters montreront l'autoconsommation grimper ; corrigez les seuils du planificateur, pas ceux des déclencheurs live.
