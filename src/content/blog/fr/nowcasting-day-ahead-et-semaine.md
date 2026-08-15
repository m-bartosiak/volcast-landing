---
title: "Nowcasting, day-ahead, semaine : la précision par horizon"
description: "Une prévision à 15 minutes et une prévision à 7 jours sont deux problèmes distincts. Ce que chaque horizon peut fournir, et où la précision décroche."
date: 2026-05-19
tags: ["nowcasting", "forecast-horizon", "accuracy", "time-series", "forecasting"]
series: "deep-dives"
seriesOrder: 6
lang: fr
draft: false
seo:
  ogTitle: "Précision de la prévision de production solaire selon l'horizon — du nowcasting à la semaine"
  keywords: ["nowcasting solaire", "précision prévision production lendemain", "horizon de prévision solaire", "prévision solaire court terme"]
relatedPosts: ["prevision-solaire-physique-ou-machine-learning", "nebulosite-variable-la-plus-difficile", "origine-des-previsions-meteo"]
---

Toutes les prévisions ne posent pas le même problème. Prévoir votre production pour les 30 prochaines minutes, pour demain et pour la semaine prochaine demande des sources de données différentes, des méthodes différentes, et débouche sur des niveaux de précision très différents.

Comprendre ce que chaque horizon peut réellement offrir vous aide à utiliser la prévision efficacement — et vous évite d'être déçu quand une prévision à 5 jours n'est pas précise au kilowattheure près.

## Nowcasting : les 0 à 6 prochaines heures

Le *nowcasting* (prévision immédiate) est l'horizon le plus court. Il répond à la question : « Que vont produire mes panneaux dans les prochaines minutes, dans les prochaines heures ? »

Les meilleures approches de prévision immédiate ne s'appuient pas du tout sur les modèles NWP. Elles utilisent plutôt :

**L'imagerie satellite** — les satellites géostationnaires photographient les champs nuageux toutes les 5 à 15 minutes. En suivant le déplacement des nuages d'une image à l'autre, on peut extrapoler leur position 30 à 120 minutes à l'avance. Cette approche par vecteurs de mouvement des nuages capture les conditions du moment bien mieux qu'un modèle météo initialisé il y a 3 à 6 heures.

**Les caméras de ciel** — une caméra à objectif fisheye installée au sol, sur ou près de l'installation, photographie le ciel chaque minute. Le traitement d'image détecte les nuages, estime leur vitesse et leur direction, et prédit le moment où ils ombreront vos modules précisément. On obtient ainsi des prévisions hyperlocales, à une résolution de 1 à 5 minutes.

**Les données de production en temps réel** — si votre production actuelle est de 3,8 kW et que les conditions sont stables, les 15 prochaines minutes seront probablement proches de 3,8 kW. Les modèles de persistance (qui supposent que les conditions actuelles se prolongent) sont étonnamment efficaces sur les horizons très courts.

**Précision :** sur la fenêtre 0 à 30 minutes, la persistance et les méthodes satellitaires atteignent des erreurs absolues moyennes de 5 à 10 % de la puissance installée en conditions stables. Pendant les transitions nuageuses, l'erreur explose, puis se résorbe vite.

**Limite :** la prévision immédiate ne sait pas anticiper une évolution météo qui n'a pas encore commencé. Un système nuageux en train de se former à 50 km n'apparaîtra pas dans l'extrapolation satellitaire avant de s'être beaucoup rapproché.

## Infrajournalier : 6 à 24 heures

Cet horizon couvre « la production restante d'aujourd'hui » et « demain matin ». C'est là que les modèles NWP deviennent la source principale, avec un dernier run encore raisonnablement frais.

L'atmosphère n'est prévisible que dans une certaine mesure à cette échéance : son état actuel contraint ce qui peut se passer dans les 12 à 24 heures qui suivent, mais les processus de méso-échelle (développement des nuages convectifs, brises de mer, effets de relief) introduisent une incertitude importante.

**Précision :** la prévision pour le lendemain (*day-ahead*, soit J+1) tombe typiquement à 15 ou 25 % de la production réelle, rapportés à la puissance installée, sur le cumul journalier. Certaines heures peuvent s'écarter davantage — en particulier entre 11 h et 15 h, quand les nuages convectifs sont les plus probables.

**Ce qui marche :** les modèles physiques brillent ici, parce qu'ils prédisent correctement la forme de la courbe de production (montée matinale, heure du pic, décroissance du soir) à partir de la géométrie. Même si le cumul est faussé par une erreur sur les nuages, la forme de la courbe reste physiquement contrainte et généralement juste.

**Ce qui échoue :** le calage horaire précis des nuages. La prévision peut annoncer une chute de production de 40 % à 14 h alors qu'elle survient à 11 h, ou l'inverse. L'impact nuageux total sur la journée peut être comparable, mais ces décalages sont frustrants pour qui planifie des actions à l'heure près.

## Court terme : 1 à 3 jours

À cette échéance, les modèles NWP restent utiles, mais les prévisions à l'échelle des nuages sont de plus en plus incertaines. Les prévisions de température restent bonnes (à 2 ou 3 °C près). Les configurations de grande échelle (anticyclone égale ensoleillé, passage de front égale couvert) sont bien capturées.

**Précision :** les cumuls journaliers tombent à 20 ou 30 % près pour J+2 et J+3. Les profils horaires deviennent des indications plutôt que des prévisions — « plutôt ensoleillé avec des nuages possibles l'après-midi » plutôt que « pic à 13 h 47 ».

**À quoi ça sert :** choisir le jour où lancer le lave-linge, décider si cela vaut la peine de reporter une tâche énergivore à demain, planifier grossièrement ses consommations sur quelques jours.

## Moyen terme : 4 à 7 jours

À cette échéance, les modèles météo capturent les configurations de grande échelle mais peinent sur les détails. La nature chaotique de l'atmosphère fait que de petites erreurs sur les conditions initiales croissent exponentiellement — c'est l'« effet papillon », qui n'est pas une métaphore mais une propriété mathématique réelle de la dynamique atmosphérique.

**Précision :** les cumuls journaliers peuvent tomber à 30 ou 40 % près. Les heures individuelles ne sont plus que du bruit. La prévision peut vous dire « jeudi sera plus ensoleillé que mercredi », pas « jeudi produira 22,3 kWh ».

**À quoi ça sert :** planifier son énergie sur la semaine, savoir s'il faut s'attendre à une semaine globalement ensoleillée ou couverte, caler approximativement un entretien ou un nettoyage des modules.

## Longue échéance : 1 à 2 semaines et au-delà

Au-delà d'une semaine, les prévisions météo déterministes perdent l'essentiel de leur valeur ajoutée. Les prévisions d'ensemble (le modèle est relancé plusieurs fois avec des conditions initiales légèrement différentes) fournissent une indication probabiliste — « 70 % de chances de conditions solaires supérieures à la normale la semaine prochaine » — mais pas des chiffres de production.

Les prévisions saisonnières (1 à 3 mois) existent pour dégager des tendances générales, mais sont encore moins précises. Elles peuvent indiquer « plus chaud et plus sec que la normale » pour la saison à venir, ce qui se traduit vaguement par « production solaire probablement correcte ».

**À quoi ça sert :** budgéter son énergie sur le long terme, comparer la production cumulée attendue et réelle, comprendre les rythmes saisonniers.

## Ce que fait Volcast

Volcast se concentre sur l'horizon du lendemain — le point d'équilibre où la prévision fondée sur la physique apporte le plus de valeur pratique. Vous obtenez une courbe de production horaire pour le jour suivant, mise à jour au fur et à mesure que de nouvelles données météo arrivent.

C'est l'horizon actionnable : assez proche pour que les modèles météo donnent des prévisions de nébulosité utiles, assez lointain pour que vous puissiez organiser vos consommations de demain, et assez large pour couvrir une journée entière et vous montrer la forme complète de la courbe de production.

La prévision ne prétend pas être précise sur des horizons plus lointains, là où la physique ne le permet pas. Et elle ne cherche pas à faire de la prévision immédiate en temps réel, qui suppose une tout autre infrastructure (flux satellitaires, télémétrie de production) et constitue un problème à part.

Pour le lendemain, à l'heure, sur des bases physiques. C'est là que le rapport signal sur bruit est le meilleur.
