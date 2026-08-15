---
title: "Pourquoi mon onduleur se coupe-t-il en plein soleil ?"
description: "Les coupures de milieu de journée viennent presque toujours d'une tension réseau trop haute, pas d'une panne. Comment reconnaître le motif et quoi faire."
lang: fr
draft: false
updated: 2026-08-14
category: "k1"
guide: "prevision-production-photovoltaique"
translationKey: "qa-inverter-trips"
seo:
  ogTitle: "Onduleur qui se coupe en plein soleil : la surtension réseau"
---
Dans la très grande majorité des cas, l'onduleur se coupe parce que **la tension du réseau dépasse la limite admissible, soit 253 V** (230 V augmentés de 10 %) — et il a l'obligation de se déconnecter quand cela arrive. Ce n'est pas un défaut de votre installation : c'est un réseau local saturé, dans lequel toute la rue injecte au même moment.

## Pourquoi cela arrive

Chaque installation qui injecte fait légèrement monter la tension à son point de livraison. Quand une dizaine de maisons équipées partagent le même départ de transformateur, la tension de milieu de journée grimpe au-dessus de la limite dès qu'il fait beau. L'onduleur la surveille en continu, se déconnecte sur un défaut de surtension, attend, se reconnecte — et le cycle recommence, parfois des dizaines de fois par jour. Chaque déconnexion vous coûte des kWh précisément aux heures les plus productives.

Le motif est reconnaissable : des coupures les jours ensoleillés entre 11 h et 16 h, aucune les jours couverts, et des codes « surtension réseau » ou « OV » dans le journal de l'onduleur.

## Que faire

1. **Exportez les journaux de l'onduleur** : date, heure et tension mesurée pour chaque coupure. C'est votre preuve.
2. **Mesurez aussi la tension en soirée** : si elle reste haute alors que les panneaux ne produisent plus, le problème réseau devient beaucoup plus facile à démontrer.
3. **Signalez-le au gestionnaire du réseau de distribution** — Enedis dans la plus grande partie du pays, ou l'entreprise locale de distribution là où il y en a une — et non à votre fournisseur d'électricité. La façon de faire un signalement qui aboutit fait l'objet d'une réponse séparée.
4. **Demandez à votre installateur le réglage P(U)** : l'onduleur réduit alors doucement sa puissance au lieu de déclencher franchement ; les détails sont dans la réponse sur le réglage volt-watt.
5. **Chiffrez les pertes** : comparer la production réelle à une prévision calculée sur votre installation montre combien de kWh disparaissent dans les coupures. Un chiffre concret rend la réclamation beaucoup plus difficile à balayer.
