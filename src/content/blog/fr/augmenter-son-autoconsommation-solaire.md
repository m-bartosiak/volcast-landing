---
title: "Augmenter son autoconsommation : 7 leviers concrets"
description: "Le surplus injecté est racheté 1,1 c€/kWh : chaque kWh autoconsommé vaut désormais bien plus. Sept leviers concrets pour en consommer davantage."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: fr
draft: false
translationKey: "self-consumption"
seo:
  ogTitle: "Augmenter son autoconsommation photovoltaïque"
---
Depuis le 5 juin 2026, le calcul est devenu très simple en France. Le surplus injecté sur le réseau est racheté 1,1 c€/kWh HT dans le cadre de l'obligation d'achat, tarif unique pour toutes les installations jusqu'à 100 kWc, quel que soit le mode de vente, indexé de 2 % par an sur les vingt ans du contrat (arrêté du 1er juin 2026). En face, chaque kWh que vous ne prenez pas sur votre toiture, vous l'achetez au prix inscrit sur votre facture. Prenez ce prix, divisez-le par 0,011 € et vous obtenez votre multiplicateur : il ne se compte plus en « deux à quatre fois », mais en dizaines de fois.

Le même arrêté a supprimé la prime à l'autoconsommation pour les demandes complètes de raccordement déposées à partir du 5 juin 2026 ; les dossiers antérieurs conservent la prime en vigueur au trimestre de leur demande. Autrement dit, la rentabilité d'une installation résidentielle repose désormais presque entièrement sur l'énergie que vous consommez vous-même. Vérifiez toujours votre situation exacte auprès de votre acheteur (EDF OA ou un acheteur alternatif) et sur le site de la CRE.

Un foyer sans stratégie autoconsomme 20 à 30 % de sa production. Les sept leviers ci-dessous amènent réalistement à 40-60 %, davantage avec une batterie.

## 1. Décalez les gros consommateurs vers les heures de production

Eau chaude sanitaire, lave-linge, lave-vaisselle et sèche-linge représentent ensemble 8 à 10 kWh par jour de consommation librement déplaçable. Changer la seule habitude « appareils le soir » en « appareils à la mi-journée » peut relever le taux d'autoconsommation de 10 à 15 points. La méthode heure par heure, heures creuses comprises, est détaillée dans [Ballon, lave-linge, lave-vaisselle : à quelle heure ? →](/blog/fr/quand-lancer-lave-linge-et-ballon).

## 2. Planifiez sur la prévision, pas sur l'horloge

« Lancez tout à midi » fonctionne mal les journées couvertes et hors saison. Une [prévision de production](/blog/fr/prevision-production-photovoltaique) horaire vous dit si le surplus existera demain et à quelles heures : une décision de 30 secondes le soir, au lieu d'une supposition le matin en regardant par la fenêtre.

## 3. Chauffez l'eau à l'électricité

Une résistance dans le ballon d'eau chaude est la batterie la moins chère qui existe : le surplus de midi devient de l'eau chaude pour le soir. Le ticket d'entrée se limite à un contacteur ou une prise pilotable, et le ballon absorbe 3 à 6 kWh par jour. Si votre cumulus est déjà câblé sur un contacteur jour/nuit, le forcer en position marche pendant les heures ensoleillées est le geste le plus rentable de toute la liste. Un routeur solaire va plus loin : il envoie dans la résistance exactement la puissance excédentaire, watt par watt, au lieu de tout ou rien.

## 4. Automatisez, laissez la maison surveiller le surplus

Home Assistant, un capteur de prévision et quelques prises pilotables : la résistance s'enclenche quand la production prévue dépasse un seuil et se replie sur la plage tarifaire la moins chère les journées couvertes. Configuré une fois, cela tourne tout seul. L'intégration officielle Volcast pour Home Assistant (installation via HACS, Premium requis) expose justement l'énergie du jour, l'énergie de demain et la puissance instantanée, les trois valeurs sur lesquelles se construisent ces automatisations.

## 5. Rechargez le véhicule électrique sur le surplus

Si vous roulez à l'électrique, la voiture est le plus gros consommateur de la maison : 20 à 60 kWh par charge. Même une recharge seulement partielle sur le surplus pèse plus lourd que tous les appareils ménagers réunis. Attention toutefois à la puissance souscrite de votre contrat, souvent 6 ou 9 kVA : la recharge doit être modulée sur le surplus disponible, pas réglée au maximum.

## 6. Décalez la pompe à chaleur

Montez la consigne d'eau chaude sanitaire pendant les heures de production et laissez la PAC « surcharger » le ballon quand il y a du soleil : la soirée tourne ensuite sur la chaleur stockée. Beaucoup de pompes acceptent une entrée SG Ready ou une programmation horaire qui se marie naturellement avec une prévision. En été, le raisonnement s'inverse avec une PAC air/air : rafraîchissez la maison au milieu de la journée, quand l'énergie est la vôtre.

## 7. Envisagez une batterie, mais mesurez d'abord

Le stockage est ce qui augmente le plus l'autoconsommation, jusqu'à 70-80 %, mais c'est aussi l'investissement le plus lourd. Avant d'acheter, passez 2 à 3 mois à mesurer combien d'énergie vous injectez pendant les heures où vous rachetez ensuite du réseau : c'est cette capacité-là dont vous avez besoin, pas celle du dépliant commercial. Deux points propres à la France pèsent sur le calcul. D'abord, avec un rachat à 1,1 c€/kWh, chaque kWh stocké plutôt qu'injecté vaut beaucoup plus qu'auparavant, ce qui pousse dans le sens de la batterie. Ensuite, les batteries restent taxées au taux normal de TVA à 20 %, là où l'installation photovoltaïque résidentielle jusqu'à 9 kWc peut relever du taux réduit à 5,5 % sous conditions. Le marché résidentiel du stockage est aussi moins mature en France qu'en Allemagne ou en Italie : demandez plusieurs devis et méfiez-vous des simulations de rentabilité fournies par le vendeur.

## Par où commencer

L'ordre qui maximise l'effet par euro dépensé : les habitudes (1 et 2), la résistance du ballon (3), l'automatisation (4), la voiture et la pompe à chaleur (5 et 6), la batterie (7). Les quatre premières étapes ne demandent aucun investissement lourd, seulement de savoir ce que vous produirez demain.

## FAQ

**Quel taux d'autoconsommation peut-on considérer comme bon ?**
Sans stratégie, 20 à 30 %. Avec décalage des usages et eau chaude électrique, 40 à 60 %. Avec une batterie, plus de 70 %. Ne confondez pas ce taux d'autoconsommation, qui rapporte la production consommée sur place à la production totale, avec le taux d'autoproduction, qui rapporte la part de votre consommation couverte par les panneaux : les deux chiffres n'évoluent pas dans le même sens.

**Faut-il consommer pour ne pas injecter ?**
Non. L'autoconsommation n'a de sens que pour l'énergie que vous auriez utilisée de toute façon : eau chaude, lessive, recharge. La consommation artificielle est du gaspillage, pas de l'économie.

**Comment mesurer mon autoconsommation ?**
À partir des données de l'onduleur ou du compteur : (production − injection) / production. Le tableau de bord Énergie de Home Assistant l'affiche directement, à condition d'y avoir déclaré la production, le soutirage et l'injection.
