---
title: "Un tarif indexé sans batterie, est-ce intéressant ?"
description: "Sans stockage, vous déplacez des usages, pas de l'énergie : qui gagne avec des prix horaires, qui doit s'abstenir, et ce que coûtent les semaines grises."
lang: fr
draft: false
updated: 2026-08-14
category: "k4"
guide: "tarif-dynamique-et-photovoltaique"
translationKey: "qa-dynamic-no-battery"
seo:
  ogTitle: "Tarif indexé sans batterie : bonne affaire ou piège ?"
---
Cela peut valoir le coup, mais la marge est plus mince et l'exigence de discipline plus forte. Sans batterie, vous ne pouvez pas *stocker* l'électricité bon marché, seulement **déplacer vos consommations vers les heures basses**. Le gain dépend donc entièrement du volume que vous savez vraiment décaler : la voiture électrique et le ballon d'eau chaude font l'affaire ; un foyer qui n'a ni l'une ni l'autre gagne peu et encaisse les semaines chères.

## Pourquoi la batterie change le calcul

Les offres indexées sur le marché de gros EPEX SPOT (Elmy, Octopus Energy France, OhmEnergie) répercutent le prix heure par heure ; dans le cadre réglementé, l'option Tempo joue le même rôle de prix-signal avec ses jours bleu, blanc et rouge. Toutes rémunèrent la flexibilité. Une batterie, c'est de la flexibilité incarnée : elle arbitre chaque jour, toute seule. Sans elle, votre flexibilité est comportementale — le lave-vaisselle peut attendre la fenêtre bon marché, la voiture peut boire à 2 h du matin, mais le four du dîner paiera ce que coûte la pointe.

Une précision qui vaut spécifiquement pour la France, et qui invalide la moitié de ce qu'on lit sur les marchés anglo-saxons : le prix de votre injection ne suit pas le marché. Le surplus est acheté dans le cadre d'un contrat d'obligation d'achat à tarif fixe, et passer à une offre indexée n'y change rien. Un tarif dynamique ne joue donc que sur ce que vous achetez. Le revers est réel : une vague de froid sans vent peut porter les prix du soir bien au-dessus d'un tarif fixe, et sans stockage vous absorbez tout.

## Ce qu'il faut faire

1. **Faites l'inventaire de vos consommations décalables** — véhicule électrique plus ballon d'eau chaude peuvent déplacer la moitié de votre consommation : dossier solide. Ni l'un ni l'autre : restez en heures pleines / heures creuses ou en Base.
2. **Rejouez le mois écoulé avant de signer** — votre courbe de charge Linky, récupérable dans l'espace client Enedis, passée dans l'historique des prix du fournisseur. Dix minutes remplacent une intuition.
3. **Automatisez le décalage** — prises pilotées, contacteur du ballon, programmation de la borne de recharge, ou Home Assistant ; suivre les prix à la main s'arrête au bout de trois semaines.
4. **Superposez la prévision de production** — les jours de soleil, faites tourner les gros postes à midi sur votre propre toit quel que soit le prix ; les jours gris, suivez la courbe des prix. Ces deux règles captent l'essentiel de ce qu'apporterait une batterie.
