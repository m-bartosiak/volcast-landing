# -*- coding: utf-8 -*-
"""Generuje 3 wykresy × 3 języki (pl/en/de) z realnych danych deva. Layout poprawiony
(legendy/adnotacje poza obszarem danych). Styl Midnight Emerald."""
import matplotlib; matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Patch
import os

CANVAS="#05070A"; SURFACE="#0F1218"; EMERALD="#00FF9D"; INDIGO="#818CF8"
TXT="#FFFFFF"; MUTED="#94A3B8"; GRID="#1e293b"; AMBER="#F59E0B"
plt.rcParams.update({"font.family":"DejaVu Sans","font.size":12,"figure.facecolor":CANVAS,
    "axes.facecolor":CANVAS,"savefig.facecolor":CANVAS,"text.color":TXT,"axes.edgecolor":GRID,
    "axes.labelcolor":MUTED,"xtick.color":MUTED,"ytick.color":MUTED})
OUT=os.path.join(os.path.dirname(os.path.abspath(__file__)),"..","..","public","img","blog")
OUT=os.path.normpath(OUT); os.makedirs(OUT,exist_ok=True)

# ---- dane (wspólne) ----
D14=[("14",21.30,18.23,19.75),("15",12.92,11.97,10.28),("16",20.94,19.88,19.68),("17",28.10,27.06,28.99),
     ("18",22.20,18.00,23.16),("19",23.50,25.87,27.85),("20",21.12,26.53,23.21),("21",16.60,21.79,18.71),
     ("22",19.72,21.21,16.06),("23",25.10,26.89,23.00),("24",25.02,27.78,22.69),("25",22.40,24.90,21.27),
     ("26",20.62,27.57,20.97),("27",20.30,27.93,18.64)]
actual=[r[1] for r in D14]; raw=[r[2] for r in D14]; calib=[r[3] for r in D14]; days=[r[0] for r in D14]
mape_raw=sum(abs(p-a)/a for p,a in zip(raw,actual))/len(actual)*100
mape_cal=sum(abs(p-a)/a for p,a in zip(calib,actual))/len(actual)*100
NOV=[6.30,5.30,0.90,6.00,6.40,5.70,5.60,1.00,1.10,2.20,0.70,2.30,4.80,3.30,3.50,2.50,1.10,2.20,3.70,3.40,2.20,3.00,0.00,0.00,0.00,0.60,0.60,2.90,0.50,1.30]
DEC=[0.70,1.30,1.00,1.00,1.70,0.70,1.20,2.20,0.80,2.00,1.40,0.60,0.90,1.60,0.90,1.80,1.90,0.80,1.70,0.80,0.40,1.10,0.50,1.10,1.30,0.40,0.30,1.10,0.60,0.10]
FEB=[0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.10,0.00,0.00,0.10,1.10,1.60,5.10,9.70,2.40,2.60,8.60,10.60,9.00,2.90,3.10,3.00,5.80,12.00,11.30,11.50]
HP={0:0,4:0,5:0.2,6:0.7,7:1.4,8:2.5,9:2.7,10:3.0,11:3.5,12:3.4,13:2.9,14:2.3,15:1.9,16:1.7,17:0.9,18:0.8,19:0.1,20:0.1}

def num(x,lang):  # przecinek dziesiętny dla pl/de
    s=f"{x:.1f}"
    return s.replace(".",",") if lang in("pl","de","it","fr","ro") else s

def base(ax):
    for s in("top","right"): ax.spines[s].set_visible(False)
    ax.grid(True,color=GRID,lw=0.6,alpha=0.5)

def wm(ax):
    ax.text(0.995,-0.16,"volcast.app",transform=ax.transAxes,color=EMERALD,fontsize=10,
            fontweight="bold",ha="right",va="top",alpha=0.85)

def chart14(L,lang):
    fig,ax=plt.subplots(figsize=(10,5.6),dpi=150); x=list(range(len(days)))
    ax.plot(x,raw,color=INDIGO,lw=1.6,ls=(0,(5,3)),marker="o",ms=4,mfc=CANVAS,mec=INDIGO,
            label=f"{L['raw']}  ·  {num(mape_raw,lang)}% {L['err']}",zorder=2)
    ax.plot(x,calib,color=EMERALD,lw=2.6,marker="o",ms=5,mfc=EMERALD,mec=CANVAS,
            label=f"{L['cal']}  ·  {num(mape_cal,lang)}% {L['err']}",zorder=4)
    ax.plot(x,actual,color=TXT,lw=1.4,ls=":",marker="s",ms=4,mfc=TXT,mec=CANVAS,label=L['act'],zorder=3)
    ax.fill_between(x,calib,actual,color=EMERALD,alpha=0.06,zorder=1)
    ax.set_title(L['title'],color=TXT,fontsize=15,fontweight="bold",pad=14,loc="left")
    ax.text(0,1.005,L['sub'],transform=ax.transAxes,color=MUTED,fontsize=10.5,va="bottom")
    ax.set_ylabel(L['yl']); ax.set_xlabel(L['xl'])
    ax.set_xticks(x); ax.set_xticklabels(days); ax.set_ylim(0,32); base(ax)
    leg=ax.legend(loc="upper center",bbox_to_anchor=(0.5,-0.15),ncol=3,frameon=False,fontsize=9.5)
    for t in leg.get_texts(): t.set_color(TXT)
    wm(ax); fig.tight_layout()
    for e in("webp",): fig.savefig(f"{OUT}/forecast-vs-actual-14d-{lang}.{e}",bbox_inches="tight")
    plt.close(fig)

def chartW(L,lang):
    GAP=4; xn=list(range(0,30)); xd=list(range(30+GAP,30+GAP+30))
    jan0=xd[-1]+1; janm=jan0+GAP; xf=list(range(janm+GAP,janm+GAP+28))
    fig,ax=plt.subplots(figsize=(11,5.6),dpi=150)
    def bars(xs,vals,feb=False):
        ax.bar(xs,vals,width=0.82,color=[AMBER if(feb and v<0.2) else EMERALD for v in vals],edgecolor="none")
    bars(xn,NOV); bars(xd,DEC); bars(xf,FEB,True)
    ax.axvspan(jan0-1,janm+GAP-1,color=INDIGO,alpha=0.06)
    ax.text((jan0+janm)/2,12.6,L['jan'],color=INDIGO,fontsize=9,ha="center",va="top",style="italic")
    for xs,lbl,tot in [(xn,L['m_nov'],79),(xd,L['m_dec'],32),(xf,L['m_feb'],100)]:
        ax.text(sum(xs)/len(xs),-1.6,lbl,color=TXT,fontsize=12,fontweight="bold",ha="center",va="top")
        ax.text(sum(xs)/len(xs),-2.9,f"{tot} kWh",color=MUTED,fontsize=10,ha="center",va="top")
    ax.annotate(L['trough'],xy=(xd[15],2.1),xytext=(xd[6],6.6),color=MUTED,fontsize=9.5,
                arrowprops=dict(arrowstyle="->",color=MUTED,lw=1))
    ax.annotate(L['recover'],xy=(xf[19],10.7),xytext=(xf[2],12.9),color=EMERALD,fontsize=9.5,ha="left",va="top",
                arrowprops=dict(arrowstyle="->",color=EMERALD,lw=1))
    ax.set_title(L['title'],color=TXT,fontsize=15,fontweight="bold",pad=14,loc="left")
    ax.text(0,1.005,L['sub'],transform=ax.transAxes,color=MUTED,fontsize=10.5,va="bottom")
    ax.set_ylabel(L['yl']); ax.set_ylim(-3.2,14.2); ax.set_xticks([])
    for s in("top","right","bottom"): ax.spines[s].set_visible(False)
    ax.grid(True,axis="y",color=GRID,lw=0.6,alpha=0.5)
    lg=ax.legend(handles=[Patch(color=EMERALD,label=L['lg_day']),Patch(color=AMBER,label=L['lg_snow'])],
                 loc="upper left",frameon=True,facecolor=SURFACE,edgecolor=GRID,fontsize=10)
    for t in lg.get_texts(): t.set_color(TXT)
    wm(ax); fig.tight_layout()
    for e in("webp",): fig.savefig(f"{OUT}/winter-production-{lang}.{e}",bbox_inches="tight")
    plt.close(fig)

def chartH(L,lang):
    hours=list(range(0,21)); y=[HP.get(h,0.0) for h in hours]; BASE=1.2
    sw=[h for h in hours if HP.get(h,0)>BASE]; lo,hi=min(sw),max(sw)
    fig,ax=plt.subplots(figsize=(10,5.2),dpi=150)
    ax.axvspan(lo-0.5,hi+0.5,color=EMERALD,alpha=0.07,zorder=0)
    ax.fill_between(hours,y,color=EMERALD,alpha=0.12,zorder=1)
    ax.plot(hours,y,color=EMERALD,lw=2.6,marker="o",ms=4,mfc=EMERALD,mec=CANVAS,zorder=3,label=L['leg'])
    ax.axhline(BASE,color=MUTED,lw=1.2,ls="--",zorder=2)
    ax.text(0.2,BASE+0.12,L['baseline'],color=MUTED,fontsize=9,va="bottom")
    ax.text((lo+hi)/2,4.55,L['surplus'],color=EMERALD,fontsize=10.5,fontweight="bold",ha="center",va="top")
    ax.set_title(L['title'],color=TXT,fontsize=15,fontweight="bold",pad=14,loc="left")
    ax.text(0,1.005,L['sub'],transform=ax.transAxes,color=MUTED,fontsize=10.5,va="bottom")
    ax.set_ylabel(L['yl']); ax.set_xlabel(L['xl'])
    ax.set_xticks(range(0,21,2)); ax.set_xlim(-0.5,20.5); ax.set_ylim(0,4.8); base(ax)
    lg=ax.legend(loc="upper right",frameon=True,facecolor=SURFACE,edgecolor=GRID,fontsize=10)
    for t in lg.get_texts(): t.set_color(TXT)
    wm(ax); fig.tight_layout()
    for e in("webp",): fig.savefig(f"{OUT}/hourly-surplus-{lang}.{e}",bbox_inches="tight")
    plt.close(fig)


# --- Wykres 4: blad wzgledem zachmurzenia -----------------------------------
# Zmierzone na prodzie 2026-08-15: pv_actual_production, okno 180 dni.
# Mediana APE liczona PER DZIEN, nie na sumach pulowych — suma pulowa dawala
# bias -41,6% przez kilka instalacji rzedu setek kWp.
#
# KOHORTA: 137 z 320 instalacji, 10 331 dni. Odrzucone: 123 z mniej niz 20 dniami
# danych, 45 z mniej niz 5 dniami bezchmurnymi (nie da sie ustalic linii bazowej)
# oraz 15 z widocznie bledna konfiguracja — mediana stosunku prognoza/rzeczywistosc
# w dni czyste poza pasmem 0,75-1,33. Te ostatnie to staly mnoznik, czyli zle
# wpisana moc instalacji, a nie blad prognozy; ich obecnosc zawyzala odsetek dni
# chybionych o >30% przy czystym niebie z 8,4% na 14,4%.
CLOUD_X   = ["0-20", "20-40", "40-60", "60-80", "80-100"]
CLOUD_CAL = [9.7, 10.5, 12.7, 15.1, 18.2]
CLOUD_RAW = [12.4, 13.1, 15.5, 16.7, 19.0]
CLOUD_N   = [2116, 1879, 1980, 2043, 2313]

def chartC(L, lang):
    fig, ax = plt.subplots(figsize=(10, 5.6), dpi=150)
    x = list(range(len(CLOUD_X))); w = 0.38
    ax.bar([i - w/2 for i in x], CLOUD_RAW, w, color=INDIGO, alpha=0.85, label=L['raw'], zorder=3)
    ax.bar([i + w/2 for i in x], CLOUD_CAL, w, color=EMERALD, label=L['cal'], zorder=3)
    for i in x:
        ax.text(i - w/2, CLOUD_RAW[i] + 0.4, num(CLOUD_RAW[i], lang), ha="center",
                color=INDIGO, fontsize=9, zorder=4)
        ax.text(i + w/2, CLOUD_CAL[i] + 0.4, num(CLOUD_CAL[i], lang), ha="center",
                color=EMERALD, fontsize=9, fontweight="bold", zorder=4)

    ax.set_title(L['title'], color=TXT, fontsize=15, fontweight="bold", pad=14, loc="left")
    ax.text(0, 1.005, L['sub'], transform=ax.transAxes, color=MUTED, fontsize=10.5, va="bottom")
    ax.set_ylabel(L['yl']); ax.set_xlabel(L['xl'])
    # Liczebnosc kubelka wchodzi w SAMA etykiete osi — osobny ax.text() w
    # wspolrzednych danych ladowal dokladnie na opisach osi i je zaslanial.
    ax.set_xticks(x)
    ax.set_xticklabels([b + "\n" + f"n={n}" for b, n in zip(CLOUD_X, CLOUD_N)])
    ax.set_ylim(0, 24); base(ax)
    leg = ax.legend(loc="upper center", bbox_to_anchor=(0.5, -0.17), ncol=2, frameon=False, fontsize=9.5)
    for t in leg.get_texts(): t.set_color(TXT)
    wm(ax); fig.tight_layout()
    for e in ("webp",):
        fig.savefig(f"{OUT}/forecast-error-by-cloud-{lang}.{e}", bbox_inches="tight")
    plt.close(fig)

LAB_C = {
 "pl": {"title": "Błąd prognozy rośnie z zachmurzeniem",
        "sub": "Mediana błędu dziennego: 137 instalacji, 10 331 dni. Kalibracja pomaga przy każdej pogodzie.",
        "raw": "Przed kalibracją", "cal": "Po kalibracji",
        "yl": "Mediana błędu (%)", "xl": "Zachmurzenie (%)"},
 "en": {"title": "Forecast error grows with cloud cover",
        "sub": "Median daily error: 137 systems, 10,331 days. Calibration helps in every kind of weather.",
        "raw": "Before calibration", "cal": "After calibration",
        "yl": "Median error (%)", "xl": "Cloud cover (%)"},
 "de": {"title": "Der Prognosefehler wächst mit der Bewölkung",
        "sub": "Medianer Tagesfehler: 137 Anlagen, 10.331 Tage. Die Kalibrierung hilft bei jedem Wetter.",
        "raw": "Vor der Kalibrierung", "cal": "Nach der Kalibrierung",
        "yl": "Medianer Fehler (%)", "xl": "Bewölkung (%)"},
 "it": {"title": "L'errore di previsione cresce con la nuvolosità",
        "sub": "Errore mediano giornaliero: 137 impianti, 10.331 giorni. La calibrazione aiuta con ogni meteo.",
        "raw": "Prima della calibrazione", "cal": "Dopo la calibrazione",
        "yl": "Errore mediano (%)", "xl": "Nuvolosità (%)"},
 "fr": {"title": "L'erreur de prévision augmente avec la nébulosité",
        "sub": "Erreur médiane journalière : 137 installations, 10 331 jours. Le calibrage aide par tous les temps.",
        "raw": "Avant calibrage", "cal": "Après calibrage",
        "yl": "Erreur médiane (%)", "xl": "Nébulosité (%)"},
 "ro": {"title": "Eroarea prognozei crește cu nebulozitatea",
        "sub": "Eroare mediană zilnică: 137 de sisteme, 10.331 de zile. Calibrarea ajută pe orice vreme.",
        "raw": "Înainte de calibrare", "cal": "După calibrare",
        "yl": "Eroare mediană (%)", "xl": "Nebulozitate (%)"},
}

LAB={
"pl":{"14":{"title":"Prognoza vs rzeczywistość — 14 dni, instalacja 5,2 kWp",
 "sub":"Kalibracja filtrem Kalmana redukuje błąd prawie o połowę — w słoneczne dni poniżej 10%",
 "raw":"Prognoza raw (fizyka)","cal":"Po kalibracji Kalman","act":"Rzeczywista produkcja","err":"śr. błąd",
 "yl":"Produkcja dzienna (kWh)","xl":"Czerwiec 2026"},
 "W":{"title":"Zima na instalacji 5,2 kWp — realna produkcja dzienna",
 "sub":"Grudzień to dołek roku; śnieg potrafi wyzerować całe dni; słoneczne okna zimą warto wyłapać",
 "jan":"styczeń\npanele pod śniegiem\n(pominięto)","m_nov":"Listopad","m_dec":"Grudzień","m_feb":"Luty",
 "trough":"dołek: ~1 kWh/dzień","recover":"śnieg zszedł →\nprodukcja wraca",
 "lg_day":"produkcja dzienna","lg_snow":"panele pod śniegiem (~0)","yl":"Produkcja dzienna (kWh)"},
 "H":{"title":"Krzywa produkcji godzinowej — pogodny dzień, 5,2 kWp",
 "sub":"Prognoza godzinowa pokazuje z wyprzedzeniem, kiedy planować energochłonne urządzenia",
 "baseline":"typowe zużycie domu (~1,2 kW)","surplus":"OKNO NADWYŻKI\nuruchom bojler / pralkę / ładowanie EV",
 "leg":"prognozowana produkcja","yl":"Moc / produkcja (kWh w godzinie)","xl":"Godzina"}},
"en":{"14":{"title":"Forecast vs actual — 14 days, 5.2 kWp system",
 "sub":"Kalman calibration nearly halves the error — under 10% on clear days",
 "raw":"Raw forecast (physics)","cal":"After Kalman calibration","act":"Actual production","err":"avg error",
 "yl":"Daily production (kWh)","xl":"June 2026"},
 "W":{"title":"Winter on a 5.2 kWp system — real daily production",
 "sub":"December is the yearly low; snow can zero out whole days; the sunny winter windows are worth catching",
 "jan":"January\npanels under snow\n(skipped)","m_nov":"November","m_dec":"December","m_feb":"February",
 "trough":"low point: ~1 kWh/day","recover":"snow cleared →\nproduction returns",
 "lg_day":"daily production","lg_snow":"panels under snow (~0)","yl":"Daily production (kWh)"},
 "H":{"title":"Hourly production curve — clear day, 5.2 kWp",
 "sub":"The hourly forecast shows in advance when to schedule heavy appliances",
 "baseline":"typical household load (~1.2 kW)","surplus":"SURPLUS WINDOW\nrun water heater / laundry / EV charging",
 "leg":"forecasted production","yl":"Power / production (kWh per hour)","xl":"Hour"}},
"de":{"14":{"title":"Prognose vs. Realität — 14 Tage, 5,2-kWp-Anlage",
 "sub":"Die Kalman-Kalibrierung halbiert den Fehler fast — an klaren Tagen unter 10%",
 "raw":"Rohprognose (Physik)","cal":"Nach Kalman-Kalibrierung","act":"Reale Produktion","err":"Ø-Fehler",
 "yl":"Tagesproduktion (kWh)","xl":"Juni 2026"},
 "W":{"title":"Winter auf einer 5,2-kWp-Anlage — reale Tagesproduktion",
 "sub":"Dezember ist der Tiefpunkt; Schnee kann ganze Tage auf null bringen; sonnige Winterfenster lohnen sich",
 "jan":"Januar\nModule unter Schnee\n(ausgelassen)","m_nov":"November","m_dec":"Dezember","m_feb":"Februar",
 "trough":"Tiefpunkt: ~1 kWh/Tag","recover":"Schnee weg →\nProduktion kehrt zurück",
 "lg_day":"Tagesproduktion","lg_snow":"Module unter Schnee (~0)","yl":"Tagesproduktion (kWh)"},
 "H":{"title":"Stündliche Produktionskurve — klarer Tag, 5,2 kWp",
 "sub":"Die Stundenprognose zeigt im Voraus, wann sich große Verbraucher lohnen",
 "baseline":"typischer Hausverbrauch (~1,2 kW)","surplus":"ÜBERSCHUSSFENSTER\nWarmwasser / Waschmaschine / E-Auto laden",
 "leg":"prognostizierte Produktion","yl":"Leistung / Produktion (kWh pro Stunde)","xl":"Uhrzeit"}},
"it":{"14":{"title":"Previsione e produzione reale — 14 giorni, 5,2 kWp",
 "sub":"La calibrazione con filtro di Kalman quasi dimezza l'errore: sotto il 10% nelle giornate serene",
 "raw":"Previsione grezza (fisica)","cal":"Dopo la calibrazione","act":"Produzione reale","err":"errore medio",
 "yl":"Produzione giornaliera (kWh)","xl":"Giugno 2026"},
 "W":{"title":"L'inverno su un impianto da 5,2 kWp — produzione reale",
 "sub":"Dicembre è il minimo dell'anno; la neve può azzerare giornate intere; le finestre di sole vanno colte",
 "jan":"gennaio\nmoduli sotto la neve\n(esclusi)","m_nov":"Novembre","m_dec":"Dicembre","m_feb":"Febbraio",
 "trough":"minimo: ~1 kWh/giorno","recover":"neve sciolta →\nla produzione torna",
 "lg_day":"produzione giornaliera","lg_snow":"moduli sotto la neve (~0)","yl":"Produzione giornaliera (kWh)"},
 "H":{"title":"Curva di produzione oraria — giornata serena, 5,2 kWp",
 "sub":"La previsione oraria mostra in anticipo quando far partire gli elettrodomestici",
 "baseline":"consumo tipico di casa (~1,2 kW)","surplus":"FINESTRA DI SURPLUS\nboiler / lavatrice / ricarica auto",
 "leg":"produzione prevista","yl":"Potenza / produzione (kWh nell'ora)","xl":"Ora"}},
"fr":{"14":{"title":"Prévision et production réelle — 14 jours, 5,2 kWc",
 "sub":"La calibration par filtre de Kalman réduit presque de moitié l'erreur : sous 10% par temps clair",
 "raw":"Prévision brute (physique)","cal":"Après calibration","act":"Production réelle","err":"erreur moyenne",
 "yl":"Production journalière (kWh)","xl":"Juin 2026"},
 "W":{"title":"L'hiver sur une installation de 5,2 kWc — production réelle",
 "sub":"Décembre est le creux de l'année ; la neige peut annuler des journées entières ; les fenêtres de soleil comptent",
 "jan":"janvier\nmodules sous la neige\n(exclus)","m_nov":"Novembre","m_dec":"Décembre","m_feb":"Février",
 "trough":"creux : ~1 kWh/jour","recover":"neige fondue →\nla production revient",
 "lg_day":"production journalière","lg_snow":"modules sous la neige (~0)","yl":"Production journalière (kWh)"},
 "H":{"title":"Courbe de production horaire — journée claire, 5,2 kWc",
 "sub":"La prévision horaire indique à l'avance quand lancer les gros appareils",
 "baseline":"consommation typique du foyer (~1,2 kW)","surplus":"FENÊTRE DE SURPLUS\nballon / lave-linge / recharge VE",
 "leg":"production prévue","yl":"Puissance / production (kWh par heure)","xl":"Heure"}},
"ro":{"14":{"title":"Prognoză și producție reală — 14 zile, 5,2 kWp",
 "sub":"Calibrarea cu filtru Kalman reduce eroarea aproape la jumătate: sub 10% în zilele senine",
 "raw":"Prognoză brută (fizică)","cal":"După calibrare","act":"Producție reală","err":"eroare medie",
 "yl":"Producție zilnică (kWh)","xl":"Iunie 2026"},
 "W":{"title":"Iarna pe un sistem de 5,2 kWp — producția reală zilnică",
 "sub":"Decembrie este minimul anului; zăpada poate anula zile întregi; ferestrele însorite merită prinse",
 "jan":"ianuarie\npanouri sub zăpadă\n(excluse)","m_nov":"Noiembrie","m_dec":"Decembrie","m_feb":"Februarie",
 "trough":"minim: ~1 kWh/zi","recover":"zăpada s-a topit →\nproducția revine",
 "lg_day":"producție zilnică","lg_snow":"panouri sub zăpadă (~0)","yl":"Producție zilnică (kWh)"},
 "H":{"title":"Curba de producție orară — zi senină, 5,2 kWp",
 "sub":"Prognoza orară arată din timp când să pornești electrocasnicele mari",
 "baseline":"consum tipic al casei (~1,2 kW)","surplus":"FEREASTRA DE SURPLUS\nboiler / mașină de spălat / încărcare auto",
 "leg":"producție prognozată","yl":"Putere / producție (kWh pe oră)","xl":"Ora"}},
}
for lang,L in LAB.items():
    chart14(L["14"],lang); chartW(L["W"],lang); chartH(L["H"],lang); chartC(LAB_C[lang],lang)
print("done — 24 charts (WebP) in",OUT)
