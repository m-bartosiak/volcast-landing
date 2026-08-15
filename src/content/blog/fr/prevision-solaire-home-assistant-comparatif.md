---
title: "Prévision solaire dans Home Assistant : le comparatif"
description: "Forecast.Solar, Solcast ou Volcast ? Précision, limites d'API et configuration de la prévision solaire dans Home Assistant, comparées honnêtement."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: fr
draft: false
translationKey: "ha-comparison"
seo:
  ogTitle: "Prévision solaire Home Assistant : les intégrations comparées"
---
La prévision de production est la base de l'automatisation énergétique dans Home Assistant : sans elle, votre ballon d'eau chaude, votre pompe à chaleur et votre borne de recharge réagissent à ce qui *est*, pas à ce qui *arrive*. Trois sources de prévision dominent : Forecast.Solar, Solcast et Volcast. Voici un comparatif honnête — je les ai toutes les trois utilisées avant que nous construisions la nôtre.

## Le comparatif en un coup d'œil

| | Forecast.Solar | Solcast | Volcast |
|---|---|---|---|
| Modèle | statistique, simplifié | données satellite, de très haut niveau | physique + calibration automatique (filtre de Kalman) |
| Calibration sur votre installation | aucune | limitée (tuning) | automatique et continue |
| Offre gratuite | API publique avec limites de requêtes | compte amateur avec un quota quotidien serré | prévision à 2 jours dans l'appli |
| Prévision complète + API | formules payantes | offres commerciales | Premium 4,49 $/mois |
| Résolution | horaire | horaire / 30 min | horaire + 5 minutes |
| Mise en place dans HA | intégration native | intégration communautaire | intégration HACS officielle |
| Profil des masques | non | non | oui, modélisé |
| Application mobile avec notifications | non | non | oui (iOS/Android) |

*Situation en juillet 2026 — les limites et les tarifs des concurrents évoluent ; vérifiez les conditions en vigueur avant de choisir.*

## Forecast.Solar — excellent point de départ, plafond de précision

Sa plus grande force, c'est l'absence de friction : l'intégration est livrée avec Home Assistant, cinq champs à remplir et c'est terminé. Une façon parfaitement légitime de commencer.

Les limites apparaissent avec le temps : le modèle est simplifié et n'apprend jamais votre installation. Avec des masques inhabituels, une configuration est-ouest ou quelques années de dégradation, l'écart entre la prévision et la réalité se creuse — et il est *systématique*. Une automatisation alimentée par une prévision constamment optimiste chauffera constamment votre eau sur l'électricité du réseau.

## Solcast — d'excellentes données, une porte gratuite étroite

Sur la qualité des données satellitaires, Solcast joue dans une catégorie à part — il sert des centrales de grande puissance et des traders d'énergie. Le problème du particulier est ailleurs : le compte gratuit impose un quota quotidien d'appels API serré, ce qui transforme la planification des mises à jour en casse-tête, et l'inscription comme la configuration sont nettement plus techniques. Une très bonne source si vous tenez dans les limites et n'avez pas besoin d'une calibration propre à votre toiture.

## Volcast — la physique, plus un modèle qui apprend votre toiture

Notre approche combine un modèle physique complet (transposition de l'irradiance, corrections spectrales et de température, profil des masques) et une calibration automatique : un filtre de Kalman compare les prévisions à la production réelle et ajuste les paramètres du modèle. Au bout de deux à trois semaines, la prévision connaît votre toiture — ombre de la cheminée à 15 h comprise. Sur ma propre installation de 5,2 kWc, l'erreur sur le lendemain passe sous les 10 % les jours ensoleillés.

Dans Home Assistant, vous obtenez d'emblée : `sensor.volcast_energy_today`, `sensor.volcast_energy_tomorrow`, la puissance en temps réel, un indicateur du pic de production et l'intégration à l'Energy Dashboard. Plus 288 points de 5 minutes par jour via l'API REST — utiles pour la recharge sur surplus à la borne. Pour être juste : l'API demande le Premium (4,49 $/mois) ; l'offre gratuite reste la prévision à 2 jours dans l'application mobile.

## Installer Volcast dans HA — 5 étapes

1. Ouvrez **HACS** → menu ⋮ → *Custom repositories*.
2. Ajoutez `https://github.com/volter-labs/volcast-ha-integration` en tant qu'intégration.
3. Cliquez sur *Install*, puis redémarrez Home Assistant.
4. Générez une clé API dans l'application Volcast (Premium) — au format `vk_...`.
5. *Paramètres → Appareils et services → Ajouter une intégration* → « Volcast » → collez la clé. Les capteurs apparaissent automatiquement.

![La prévision Volcast affichée directement dans l'Energy Dashboard de Home Assistant, superposée à la production réelle d'un onduleur GoodWe](/img/blog/ha-energy-dashboard-en.webp)

## Laquelle pour qui

**Forecast.Solar** — vous voulez *une* prévision en 5 minutes et vous n'allez pas y suspendre des automatisations qui pèsent sur la facture. **Solcast** — il vous faut des données satellitaires de tout premier plan et vous tenez dans les limites gratuites. **Volcast** — vous automatisez de l'argent réel (eau chaude, pompe à chaleur, recharge du véhicule électrique) et vous voulez une prévision calibrée sur votre propre toiture, avec une notification sur le téléphone quand demain change.

## FAQ

**Puis-je faire tourner deux sources de prévision en parallèle ?**
Oui — c'est même une bonne façon de démarrer : faites tourner les deux face à la production réelle dans l'Energy Dashboard pendant deux semaines et gardez celle qui se trompe le moins sur *votre* installation.

**Volcast se connecte-t-il à mon onduleur ?**
Non — la prévision se construit à partir des données d'irradiance des modèles météo (ensemble NWP) et des paramètres de votre installation. La production réelle servant à la calibration peut être saisie à la main ou récupérée automatiquement depuis un capteur d'énergie de HA.

**L'intégration envoie-t-elle des données sur mon logement ?**
En dehors des paramètres de votre installation, l'intégration n'envoie que vos relevés de production réelle — et uniquement si vous activez la calibration. Rien d'autre, aucun pistage.
