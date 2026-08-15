---
title: "Mon onduleur est plus petit que mes panneaux : erreur ?"
description: "Des modules surdimensionnés face à l'onduleur (ratio DC/AC de 1,1 à 1,3) relèvent de l'ingénierie standard. Quand cela paie et quand cela va trop loin."
lang: fr
draft: false
category: "k1"
guide: "prevision-production-photovoltaique"
translationKey: "qa-inverter-undersized"
seo:
  ogTitle: "Onduleur plus petit que le champ de modules : erreur ou norme ?"
---
Ce n'est presque certainement pas une erreur : **les champs de modules sont couramment surdimensionnés de 10 à 30 % par rapport à l'onduleur** (un ratio DC/AC de 1,1 à 1,3). Les modules délivrent rarement leur puissance de plaque en conditions réelles, donc un onduleur plus petit travaille plus longtemps dans sa plage de bon rendement, pour un coût moindre par kW installé.

## Pourquoi les installateurs font cela

La puissance nominale d'un module est mesurée en laboratoire — 25 °C de température de cellule et un ensoleillement plein et perpendiculaire — dans des conditions qu'une toiture ne voit pratiquement jamais. La production réelle est rognée par la chaleur, la brume, les angles rasants du matin et du soir, et la dégradation progressive. Un onduleur dimensionné sur la puissance de plaque des modules passerait l'essentiel de sa vie à tourner à charge partielle.

Surdimensionner le champ signifie au contraire que l'onduleur atteint sa puissance nominale plus tôt le matin et la tient plus tard l'après-midi : une courbe de production plus large et mieux remplie. Le prix à payer est un plateau écrêté les quelques jours parfaits où les modules pourraient brièvement dépasser la puissance de l'onduleur (voir la réponse sur la production plafonnée à midi). Sur l'année, ces kWh écrêtés restent généralement faibles face aux gains, et avec une toiture est-ouest ou un ombrage partiel le ratio effectif est encore plus prudent que celui affiché sur le papier.

## Que faire

1. **Calculez votre ratio DC/AC** : puissance totale des modules en kWc divisée par la puissance de l'onduleur en kW. Entre 1,0 et 1,3 : cas d'école. Au-delà d'environ 1,4 : demandez à votre installateur de le justifier (cela se défend en est-ouest, beaucoup moins pour un seul string plein sud).
2. **Vérifiez les conditions de garantie** : les fabricants sérieux autorisent explicitement le surdimensionnement jusqu'à un ratio annoncé ; rester en dessous garde la garantie intacte.
3. **Jugez sur le productible annuel, pas sur le pic de midi** : une prévision calculée sur votre configuration exacte modélise l'écrêtage, ce qui vous permet de voir si le choix vous coûte 1 % par an (normal) ou nettement plus.
