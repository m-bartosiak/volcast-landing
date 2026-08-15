---
title: "Comment un panneau solaire transforme la lumière"
description: "Explication claire de l'effet photovoltaïque : des photons qui frappent le silicium au courant alternatif qui alimente votre maison, sans jargon inutile."
date: 2026-03-24
tags: ["solar-basics", "photovoltaic-effect", "pv-physics", "beginner"]
series: "fundamentals"
seriesOrder: 1
lang: fr
draft: false
seo:
  ogTitle: "Comment un panneau solaire transforme la lumière en électricité"
  keywords: ["comment fonctionne un panneau solaire", "effet photovoltaïque expliqué", "physique de la cellule photovoltaïque", "conversion de l'énergie solaire"]
relatedPosts: ["pourquoi-plus-de-production-au-printemps", "lumiere-directe-et-lumiere-diffuse", "inclinaison-et-azimut-des-panneaux"]
---

Chaque seconde, environ 430 milliards de milliards de joules d'énergie solaire atteignent la surface de la Terre. Vos panneaux en interceptent une part infime et la convertissent en électricité, sans pièce en mouvement, sans combustion et sans bruit. Mais comment ?

La réponse se trouve à l'intersection de la physique quantique et de l'ingénierie des semi-conducteurs. Rassurez-vous : aucun diplôme de physique n'est nécessaire. Reprenons l'histoire étape par étape.

## Tout commence par un photon

La lumière du soleil n'est pas un flux continu d'énergie. Elle arrive sous forme de paquets discrets appelés **photons**, de minuscules grains d'énergie électromagnétique, chacun transportant une quantité précise qui dépend de sa longueur d'onde. Un photon bleu transporte plus d'énergie qu'un photon rouge. Un photon infrarouge en transporte moins que les deux.

Cela compte, parce qu'une cellule photovoltaïque ne peut utiliser que les photons situés au-dessus d'un certain seuil d'énergie. Pour le silicium — le matériau de plus de 95 % des panneaux solaires dans le monde — ce seuil se situe autour de 1,1 électronvolt (eV), ce qui correspond au proche infrarouge. Tout ce qui est en dessous traverse la cellule comme si elle n'était pas là.

## Le sandwich semi-conducteur

Une cellule photovoltaïque est essentiellement une fine plaquette de silicium volontairement « dopée », c'est-à-dire additionnée de quantités infimes d'autres éléments destinées à modifier ses propriétés électriques.

La couche supérieure est dopée au phosphore, qui possède un électron de plus que le silicium. Cela crée une abondance d'électrons libres : c'est le silicium **de type n** (n pour porteurs de charge négatifs).

La couche inférieure est dopée au bore, qui possède un électron de moins. Cela crée des « trous », des places où un électron pourrait se trouver mais ne se trouve pas. C'est le silicium **de type p** (p pour porteurs de charge positifs).

Là où ces deux couches se rencontrent, il se passe quelque chose de remarquable. Des électrons du côté n migrent pour combler les trous du côté p, ce qui crée une zone étroite traversée par un champ électrique interne. C'est la **jonction p-n**, le moteur de toute cellule photovoltaïque.

## L'effet photovoltaïque

Quand un photon d'énergie suffisante frappe le silicium, il arrache un électron à sa liaison atomique. Il se forme une paire électron-trou : un électron libre et une place vacante.

Voici le point clé : le champ électrique de la jonction p-n se comporte comme une porte à sens unique. Il pousse l'électron libéré vers le côté n et le trou vers le côté p. Cette séparation des charges est ce qui crée la tension, la pression électrique qui met le courant en mouvement.

Reliez par un fil le haut de la cellule à son bas, en passant par l'installation électrique de votre maison, et les électrons circulent : c'est l'électricité. L'électron finit par retomber dans un trou, l'énergie du photon a été captée sous forme de travail utile, et le cycle recommence tant que la lumière continue d'arriver.

C'est l'**effet photovoltaïque**, observé pour la première fois par Edmond Becquerel en 1839 et enfin exploité de façon pratique en 1954 aux Bell Labs.

## De la cellule à l'électricité utilisable

Une seule cellule de silicium produit environ 0,5 à 0,6 volt, ce qui est trop peu pour être utile en soi. Les cellules sont donc câblées en série, pour additionner les tensions, et en parallèle, pour additionner les courants, formant un **module** : ce que vous voyez sur votre toit.

Un module résidentiel typique contient 60 ou 72 cellules et produit 30 à 40 volts en courant continu (DC). Votre maison, elle, fonctionne en courant alternatif (AC) à 230 V en Europe, 120 V en Amérique du Nord. C'est le rôle de l'**onduleur** : convertir le courant continu du panneau en courant alternatif compatible avec le réseau.

Le trajet complet est donc : **photon → électron libéré → courant continu → onduleur → courant alternatif → vos appareils.**

## Ce qui se perd en chemin

Toute la lumière du soleil ne devient pas de l'électricité. Un panneau au silicium standard convertit en réalité 18 à 22 % de l'énergie solaire incidente. Où passe le reste ?

**Les photons sous le gap** (environ 19 % de la lumière du soleil) n'ont pas assez d'énergie pour libérer un électron. Ils traversent la cellule ou sont absorbés sous forme de chaleur.

**Les pertes par thermalisation** (environ 33 %) surviennent quand des photons très énergétiques — bleus, ultraviolets — libèrent un électron mais transportent bien plus d'énergie qu'il n'en fallait. Cet excédent devient de la chaleur dans la cellule.

**La recombinaison** se produit quand des électrons libérés retombent dans un trou avant d'atteindre le circuit. La qualité de fabrication et la conception de la cellule la limitent, sans jamais l'éliminer complètement.

**La réflexion et l'ombrage** coûtent encore quelques pour cent, même si les traitements antireflet et les surfaces texturées aident beaucoup.

**La résistance électrique** des contacts métalliques et du câblage de la cellule dissipe une petite fraction en chaleur.

Le rendement maximal théorique d'une cellule silicium à simple jonction est d'environ 29,4 % : c'est la limite de Shockley-Queisser. Les meilleures cellules de laboratoire atteignent 26,8 %. Vos panneaux de toiture sont remarquablement proches de ce que la physique autorise.

## Pourquoi cela compte pour la prévision

Comprendre cette chaîne — du photon à l'électron, puis à la puissance — permet de voir pourquoi prévoir correctement la production est un problème de physique, et pas seulement un problème de statistiques.

La quantité d'électricité que produisent vos panneaux dépend de **combien de photons utilisables atteignent la surface de la cellule** et de **l'efficacité avec laquelle la cellule les convertit** à sa température du moment. Ces deux grandeurs obéissent à des lois physiques que l'on sait modéliser.

Le spectre de la lumière incidente change avec les conditions atmosphériques. Le rendement de la cellule varie avec la température. L'angle d'incidence compte. Tout cela se calcule dès lors qu'on connaît la physique.

C'est exactement ce que fait Volcast. Plutôt que de deviner la production future à partir de motifs historiques, l'application simule la chaîne physique — des conditions atmosphériques à la modélisation de l'irradiance, puis au comportement de la cellule — pour votre installation en particulier.
