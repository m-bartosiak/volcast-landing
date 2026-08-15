---
title: "Quelle borne de recharge s'intègre à Home Assistant ?"
description: "Pilotage local, courant de charge réglable, pas de dépendance au cloud : la checklist qui compte plus que la marque, et la limite de puissance souscrite."
lang: fr
draft: false
category: "k5"
guide: "recharger-voiture-electrique-avec-le-solaire"
translationKey: "qa-ev-charger-ha"
seo:
  ogTitle: "Bornes de recharge et Home Assistant : ce qu'il faut vérifier"
---
Plus important que la marque, il y a la checklist : **pilotage local (API native, MQTT ou OCPP), courant de charge réglable, et aucune dépendance au cloud du fabricant**. Une borne de recharge qui coche ces trois cases peut suivre votre surplus solaire ampère par ampère depuis Home Assistant ; une borne verrouillée sur son cloud reste à la merci d'une application et d'une connexion internet.

## Pourquoi le pilotage local décide de tout

Suivre le soleil, c'est ajuster le courant de charge toutes les une à deux minutes au passage des nuages. Les API cloud ajoutent des secondes de latence, des quotas d'appels et un risque de panne : tolérable pour « démarrer à 2 h », inutilisable pour suivre un surplus. Les voies robustes sont au nombre de trois. Les bornes dotées d'une **intégration Home Assistant de première classe et d'une API locale** — dans la communauté HA, on croise régulièrement Wallbox, go-e, Easee, Zaptec et openWB, mais vérifiez l'état réel de l'intégration avant d'acheter. Tout ce qui parle **OCPP**, standard ouvert doté d'une intégration HA solide. Enfin les projets **EVSE** orientés DIY, nativement en MQTT. En France, on trouve aussi couramment Schneider EVlink, Hager witty et Legrand : leur pilotage fin depuis Home Assistant varie beaucoup d'un modèle à l'autre, donc à vérifier au cas par cas.

Le courant réglable est le second filtre : la charge sur surplus consiste à moduler entre environ 6 A et le maximum, par phase. Une borne qui ne sait que s'allumer et s'éteindre fait de la charge solaire grossière, et l'écart de granularité se lit directement dans votre taux d'autoconsommation. Le troisième filtre est très français : votre **puissance souscrite**, souvent 6 ou 9 kVA et parfois 3 kVA dans l'ancien, plafonne la somme de tout ce qui tourne. Une borne pilotable, éventuellement complétée par un délestage, évite de faire disjoncter la maison quand le four et la voiture se croisent.

## Ce qu'il faut faire

1. **Avant d'acheter, cherchez le modèle et le mot « integration » sur le forum Home Assistant** — cinq minutes de lecture disent si le pilotage est local, cloud, ou rétro-ingénieré par la communauté.
2. **Privilégiez le support OCPP comme plancher pérenne** — même si le cloud du fabricant tourne mal, le chemin par le protocole ouvert reste disponible.
3. **Vérifiez la commande dynamique du courant dans l'intégration**, pas seulement sur la fiche produit : certaines intégrations exposent des mesures, mais aucune commande.
4. **Confrontez la borne à votre puissance souscrite** — 7,4 kW en monophasé sur un abonnement de 9 kVA ne laisse presque rien au reste de la maison ; une prise renforcée de type Green'Up, bien plus lente, suffit à beaucoup d'usages quotidiens.
5. **Construisez ensuite la logique de surplus** — même schéma prévision + priorités que les autres charges (voir la réponse sur les automatisations d'autoconsommation), la voiture passant en général après l'eau chaude, mais avant l'injection.
