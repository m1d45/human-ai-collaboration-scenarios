/** locales/hu.js — Magyar */
window.LOCALES = window.LOCALES || {};
window.LOCALES.hu = {

  meta: {
    title: '32 forgatókönyv — Az ember és a MI együttműködésének osztályozása'
  },

  ui: {
    eyebrow: 'AI LAB · HSE School of Design · Vadim Bulgakov',
    title: {
      line1: 'Az együttműködés 32 forgatókönyve',
      line2: 'ember és MI között',
      line3: ' a kreatív iparágakban'
    },
    questionnaire: {
      intro_label: 'Találja meg a saját forgatókönyvét',
      intro_text: 'Válaszoljon 5 kérdésre a feladatáról — a rendszer azonosítja a megfelelő forgatókönyveket.',
      q1: {
        label: 'Ez megvalósítási feladat?',
        research: 'Nem',
        impl:     'Igen'
      },
      q2: {
        label: 'Igényel ez a feladat speciális tudást vagy szakmai tapasztalatot?',
        low:  'Nem',
        high: 'Igen'
      },
      q3: {
        label: 'Ezt a feladatot gyorsan kell elvégezni?',
        low:  'Nem',
        high: 'Igen'
      },
      q4: {
        label: 'Fontos Önnek, hogy ezt a feladatot saját maga végezze el?',
        low:  'Nem',
        high: 'Igen'
      },
      q5: {
        label: 'Egy hiba ebben a feladatban nagy költséggel járhat?',
        low:  'Nem',
        high: 'Igen'
      },
      showing: 'Megjelenítve ',
      of_total: ' / 32',
      reset: 'Visszaállítás',
      apply: 'Alkalmazás'
    },
    modes: { aug: 'Augmentáció', coop: 'Kooperáció', auto: 'Automatizálás' },
    stages: { research: 'Feltárás', impl: 'Megvalósítás' },
    search: { placeholder: 'Keresés cím, leírás, példák alapján…' },
    empty_state: 'Nincs a kiválasztott válaszoknak megfelelő forgatókönyv',
    card: {
      human_role: 'Az ember szerepe',
      ai_role: 'A MI szerepe',
      expand: 'Több',
      collapse: 'Kevesebb'
    },
    modal: {
      close: 'Bezárás',
      logic: 'A módválasztás indoklása',
      risk_correct: 'Kockázatok helyes alkalmazás esetén',
      risk_wrong: 'Kockázatok helytelen alkalmazás esetén',
      risk_correct_label: 'Helyes mód',
      risk_wrong_label: 'Helytelen mód',
      examples: 'Feladatpéldák',
      related: 'Kapcsolódó forgatókönyvek'
    },
    graph: {
      page_title:   'Forgatókönyv-térkép',
      back:         '← Összes forgatókönyv',
      hint:         'Húzás · Görgetés a nagyításhoz · Kattintás a felfedezéshez',
      mode_filter:  'Mód:',
      stage_filter: 'Szakasz:',
      map_link:     'Forgatókönyv-térkép →'
    }
  },

  attr_chips: {
    expertise: { low: 'Sz−', high: 'Sz+' },
    speed: { low: 'S−', high: 'S+' },
    motivation: { low: 'M−', high: 'M+' },
    cost: { low: 'Á−', high: 'Á+' }
  },

  codes: {
    a: {
      1:  'Fel · Sz− · S− · M− · Á−', 2:  'Fel · Sz− · S− · M− · Á+',
      3:  'Fel · Sz− · S− · M+ · Á−', 4:  'Fel · Sz− · S− · M+ · Á+',
      5:  'Fel · Sz− · S+ · M− · Á−', 6:  'Fel · Sz− · S+ · M− · Á+',
      7:  'Fel · Sz− · S+ · M+ · Á−', 8:  'Fel · Sz− · S+ · M+ · Á+',
      9:  'Fel · Sz+ · S− · M− · Á−', 10: 'Fel · Sz+ · S− · M− · Á+',
      11: 'Fel · Sz+ · S− · M+ · Á−', 12: 'Fel · Sz+ · S− · M+ · Á+',
      13: 'Fel · Sz+ · S+ · M− · Á−', 14: 'Fel · Sz+ · S+ · M− · Á+',
      15: 'Fel · Sz+ · S+ · M+ · Á−', 16: 'Fel · Sz+ · S+ · M+ · Á+',
      17: 'Meg · Sz− · S− · M− · Á−', 18: 'Meg · Sz− · S− · M− · Á+',
      19: 'Meg · Sz− · S− · M+ · Á−', 20: 'Meg · Sz− · S− · M+ · Á+',
      21: 'Meg · Sz− · S+ · M− · Á−', 22: 'Meg · Sz− · S+ · M− · Á+',
      23: 'Meg · Sz− · S+ · M+ · Á−', 24: 'Meg · Sz− · S+ · M+ · Á+',
      25: 'Meg · Sz+ · S− · M− · Á−', 26: 'Meg · Sz+ · S− · M− · Á+',
      27: 'Meg · Sz+ · S− · M+ · Á−', 28: 'Meg · Sz+ · S− · M+ · Á+',
      29: 'Meg · Sz+ · S+ · M− · Á−', 30: 'Meg · Sz+ · S+ · M− · Á+',
      31: 'Meg · Sz+ · S+ · M+ · Á−', 32: 'Meg · Sz+ · S+ · M+ · Á+'
    }
  },

  scenarios: {
    1: {
      title: 'Vak feltárás',
      human_role: 'Meghatározza a feladatot, és megkapja a végső eredményt. Megfogalmazza a kérést, beállítja a keresési paramétereket, és szükség esetén átnézi a kimenetet.',
      ai_role: 'Széles körű keresést végez, összegyűjti és strukturálja az információkat. Összefoglaló anyagokat, referenciagyűjteményeket és tematikus áttekintéseket készít.',
      logic: 'Az alacsony motiváció azt jelenti, hogy az ember jelenléte a folyamatban nem ad hozzáadott értéket. Az alacsony szakértelem és az alacsony kockázat ezt ideális delegálási forgatókönyvvé teszi.',
      risk_correct: 'A projektre jellemző árnyalatok elveszhetnek — a MI nem fér hozzá az implicit kontextushoz.',
      risk_wrong: 'Az eredmények ellenőrzés nélküli használata; a MI hallucinációinak tényként való kezelése.',
      examples: ['Kezdeti referenciaanyag-gyűjtés egy ismeretlen esztétikai irányhoz', 'Trendáttekintés egy szűk kategóriában előzetes briefinghez', 'Terminológiai glosszárium összeállítása egy új tématerülethez'],
      related: ['С-02', 'С-03', 'С-09']
    },
    2: {
      title: 'Feltárás biztonsági hálóval',
      human_role: 'A folyamat építésze és az eredmény auditora. Meghatározza a paramétereket, az elfogadási kritériumokat, és elvégzi a végső ellenőrzést a felhasználás előtt.',
      ai_role: 'Önállóan végzi a kutatást a megadott paraméterek között. Strukturált kimenetet állít elő, és jelzi a bizonytalansági pontokat, valamint a lehetséges hiányokat.',
      logic: 'A profil megegyezik az 1. forgatókönyvével, egyetlen kivétellel: a hiba költsége magas. Az automatizálás továbbra is indokolt, de plusz ellenőrzési réteget igényel.',
      risk_correct: 'A teljesség illúziója — a MI nem tudja, mit nem tud; kritikus hiányok észrevétlenek maradhatnak.',
      risk_wrong: 'A végső ellenőrzés kihagyása időnyomás miatt; az önbizalmat sugárzó hangnem összetévesztése a pontossággal.',
      examples: ['Versenytárselemzés egy stratégiai ügyfélprezentációhoz', 'Előzetes piacfelmérés befektetői pitch előtt', 'Szabályozási keret összegyűjtése egy erősen szabályozott iparág projektjéhez'],
      related: ['С-01', 'С-04', 'С-10']
    },
    3: {
      title: 'Közös jelentésalkotás',
      human_role: 'A párbeszéd aktív résztvevője: irányt ad, reagál a MI javaslataira, és saját tapasztalatát, intuícióját viszi be a folyamatba.',
      ai_role: 'Beszélgetőpartner és alternatívagenerátor. Nem nyilvánvaló irányokat javasol, pontosító kérdéseket tesz fel, és kitágítja a mezőt a megszokotton túlra.',
      logic: 'A magas motiváció itt a kulcsfontosságú tényező. Még alacsony formális szakértelem mellett is a személynek a folyamatban kell maradnia — az eredménynek személyes nézőpontot kell tükröznie, nem pedig a modell átlagolt kimenetét.',
      risk_correct: '„Visszhangkamra”-hatás — a modell túlságosan igazodik a személy megfogalmazásaihoz, és megszűnik valóban váratlan irányokat javasolni.',
      risk_wrong: 'Átváltás egyszerű augmentációra („csak adj pár opciót”), amivel elvész az élő párbeszéd, amely ezt a módot igazán értékessé teszi.',
      examples: ['Vizuális nyelv keresése egy fiatal tervező új személyes projektjéhez', 'Koncepcionális keret keresése egy nem kereskedelmi művészeti projekthez', 'Egy szűk kulturális téma közös feltárása egy jövőbeli forgatókönyvhöz'],
      related: ['С-01', 'С-04', 'С-07']
    },
    4: {
      title: 'Óvatos párbeszéd',
      human_role: 'Vezető résztvevő fokozott kritikai éberséggel. A magas kockázat megköveteli, hogy minden fontos megállapítást felhasználás előtt ellenőrizzen.',
      ai_role: 'A gondolkodási teret tágító partner, aki nagyfokú átláthatósággal dolgozik: jelöli a bizonyosság szintjét, láthatóvá teszi az ellentmondásokat, és alternatív értelmezéseket kínál.',
      logic: 'A magas motiváció kooperációt követel. A magas hibaköltség szigorúbbá teszi ezt az üzemmódot: az iterációk nemcsak az ötletképzést, hanem az ellenőrzést is szolgálják.',
      risk_correct: 'A folyamat lelassulhat az egyes lépések túlzott ellenőrzése miatt.',
      risk_wrong: 'Automatizálásra váltás nyomás alatt — a kontroll elvesztése éppen ott, ahol arra a leginkább szükség lenne.',
      examples: ['Kutatás egy nagy márka újrapozicionálási stratégiájához iparági szakértelem nélkül', 'Koncepcionális alap egy nyilvánosan megvédendő oktatási programhoz', 'Előzetes kutatás egy nagy társadalmi tétű dokumentumfilm-projekthez'],
      related: ['С-03', 'С-12']
    },
    5: {
      title: 'Gyors feltárás',
      human_role: 'Megfogalmazza a kérést és felhasználja az eredményt. Kéri a kimenetet, és strukturált választ kap.',
      ai_role: 'Nagy sebességű információaggregátor. Gyorsan dolgozik, széles lefedettséggel. Az elsődleges prioritás a sebesség és a teljesség, nem az egyes elemek pontossága.',
      logic: 'A nagy sebesség és az alacsony motiváció egyértelműen az automatizálás irányába mutat. Az embernek gyors eredmény kell, a folyamatba való bevonódás nélkül.',
      risk_correct: 'Felületesség — a gyors gyűjtés fontos árnyalatokat hagyhat ki.',
      risk_wrong: 'Gyors eredmény használata ott, ahol valójában mélyebb elemzésre lenne szükség.',
      examples: ['Gyors referenciaanyag-gyűjtés egy ügyfélbriefing előtt', 'Lehetséges beszállítók listájának összeállítása gyártási feladathoz', 'Friss publikációk áttekintése egy bevezető prezentációs diához'],
      related: ['С-01', 'С-06', 'С-07']
    },
    6: {
      title: 'Sürgős feltárás magas téttel',
      human_role: 'Gyors kimeneti ellenőrző. Nincs idő mély bevonódásra, de a végeredményért vállalt felelősség megmarad.',
      ai_role: 'Maximális sebességgel dolgozik, a megbízható forrásokat priorizálja, és egyértelműen jelzi a bizonyosság szintjét, valamint a fő hiányokat.',
      logic: 'A sebesség és a magas kockázat itt feszültségben állnak egymással. Az alacsony motiváció nem teszi reálissá az aktív részvételt, de a magas hibaköltség kötelezővé teszi a végső ellenőrzést.',
      risk_correct: 'Az időnyomás rontja az ellenőrzés minőségét — a validációs réteget meg kell védeni attól az érvtől, hogy „erre nincs idő”.',
      risk_wrong: 'Teljes automatizálás validáció nélkül — költséges hiba sürgős, magas kockázatú helyzetben.',
      examples: ['Sürgős adatgyűjtés válságkommunikációs egyeztetés előtt', 'Gyors tényellenőrzés egy nagy jelentőségű pitchhez', 'Sürgős versenytárselemzés tárgyalások előtt'],
      related: ['С-05', 'С-08']
    },
    7: {
      title: 'Sprint partnerrel',
      human_role: 'Az ember aktív résztvevője a gyors iterációnak. Reagál a MI javaslataira, kiszűri a nem releváns irányokat, és nagy tempó mellett is megőrzi a stratégiai fókuszt.',
      ai_role: 'Valós idejű, reaktív generátor. Gyorsan opciókat javasol, és az emberi visszajelzéshez igazítja az irányt.',
      logic: 'A magas motiváció emberi jelenlétet kíván a folyamatban a tempó ellenére is. A kooperáció itt egy gyors párbeszéd, amelyben az irányt az ember szabja meg.',
      risk_correct: 'Felszínes eredmények — a gyors kooperáció inkább szélességet, mint mélységet hoz létre.',
      risk_wrong: 'Átváltás tiszta automatizálásra „mert nincs idő” — a szerzői hang elvesztése.',
      examples: ['Koncepcionális irányok brainstormja egy új briefhez egyetlen munkablokk alatt', 'Narratív szögek gyors keresése szerkesztőségi tartalomhoz szoros határidőnél', 'Több vizuális irány generálása gyors teszteléshez'],
      related: ['С-03', 'С-08', 'С-15']
    },
    8: {
      title: 'Sürgős párbeszéd',
      human_role: 'Vezető nyomás alatt. Nagy tempó és nagy tét mellett is megőrzi a kritikai nézőpontot.',
      ai_role: 'Sürgős támogatási módban működik: gyorsan irányokat generál, és átláthatóan jelzi a bizonyosság szintjét.',
      logic: 'A sebesség és a magas kockázat az automatizálás felé tolna, de a motiváció ezt blokkolja. A mód rövid iterációkra és explicit ellenőrzésre épül.',
      risk_correct: 'Stresszhelyzetben könnyű ellenőrzés nélkül elfogadni a MI meggyőző válaszait.',
      risk_wrong: 'Bármilyen automatizálásra váltás itt költséges hibává válhat.',
      examples: ['Expressz kutatás egy kulcsfontosságú partnermegbeszélés előtt', 'Sürgős koncepcionális szög keresése egy válságkampányhoz', 'Gyors precedenskeresés egy szokatlan döntés ügyfél előtti igazolásához'],
      related: ['С-07', 'С-04', 'С-16']
    },
    9: {
      title: 'Szakértői áttekintés',
      human_role: 'Szakértő navigátor: rendkívül specifikus keresési paramétereket ad meg. A kimenetet felerősített tekintettel olvassa — észreveszi azt, amit a MI esetleg kihagyott.',
      ai_role: 'Lefedettségbővítő: nagy mennyiségű anyagot dolgoz fel gyorsabban, mint az expert önmagában, strukturál és aggregál.',
      logic: 'A magas szakértelem szükséges a minőséghez — a MI bővít, nem helyettesít. Az alacsony motiváció azt jelenti, hogy a szakértő nem akar maga elmerülni a keresési folyamatban.',
      risk_correct: 'A szakértő a MI által létrehozott anyagszervezést valódi értelmezésnek tekintheti.',
      risk_wrong: 'Az ellenőrzési lépés kihagyása, mert a szakértő „úgyis ismeri a témát”.',
      examples: ['Szakirodalom gyűjtése speciális témában kutatási projekthez', 'Meglévő megoldások auditja szűk technikai területen K+F célra', 'Bővített fogalomtár összeállítása egy szakmai diszciplínához'],
      related: ['С-01', 'С-10', 'С-11']
    },
    10: {
      title: 'Szakértői audit',
      human_role: 'Szakértő fokozott felelősséggel. Szigorú minőségi kritériumokat határoz meg, ellenőrzi a pontosságot — a hibák költségesek.',
      ai_role: 'Strukturált asszisztens kifejezett bizonytalanságjelzéssel. A források megbízhatóságát helyezi előtérbe, és megjelöli az ellentmondásos adatokat.',
      logic: 'A magas szakértelem és a magas kockázat egy magasabb kontrollszintű augmentációt eredményez. A motiváció alacsony, de a végső eredményért vállalt felelősség teljes.',
      risk_correct: 'A túlzott óvatosság lelassíthatja a munkát.',
      risk_wrong: 'Kooperációra váltás időhiány esetén — kevesebb kontroll magas kockázatú helyzetben.',
      examples: ['Szabályozási környezet kutatása új médiatermék indításához', 'Műszaki dokumentáció elemzése nagy gyártási projekthez', 'Akadémiai kutatás lektorált folyóiratban való publikációhoz'],
      related: ['С-09', 'С-14']
    },
    11: {
      title: 'Mély kutatás jelenléttel',
      human_role: 'Szerzői pozícióval rendelkező kutató. Nem pusztán információt fogyaszt — nézőpontot formál. A MI kitágítja a mezőt, de az irányt az ember határozza meg.',
      ai_role: 'Intellektuális tágító: váratlan kapcsolatokat, szomszédos témákat és alternatív perspektívákat javasol.',
      logic: 'Az augmentáció megőrzi az embert a szerző szerepében; a MI intellektuális nagyítóvá válik. Magas szakértelem mellett a célzott használat gyakran többet ad, mint a nyitott, iteratív párbeszéd.',
      risk_correct: 'A MI annyi váratlan kapcsolatot javasolhat, hogy a kutatás fókusza elmosódik.',
      risk_wrong: 'Kooperációra váltás — a szerzői pozíció felhígulása.',
      examples: ['Koncepcionális kutatás egy tapasztalt alkotó személyes művészeti projektjéhez', 'Akadémiai kutatás egy szomszédos diszciplínában', 'Elméleti keret kidolgozása egy új kurzushoz'],
      related: ['С-09', 'С-12', 'С-15']
    },
    12: {
      title: 'Mérlegelt kutatás',
      human_role: 'Felelős szerző: szakértelem, bevonódás és a magas kockázat tudata egyaránt jelen van. Minden következtetést ellenőriz, minden irányt gondosan mérlegel.',
      ai_role: 'Precíz asszisztens: jelöli a bizonytalanságot, forrásokat ad, és kerüli a szintézist ott, ahol az adatok ellentmondásosak.',
      logic: 'Itt a felelősséggel kapcsolatos paraméterek maximálisan koncentrálódnak, időnyomás nélkül. Az augmentáció a legprofesszionálisabb konfiguráció, teljes emberi kontroll mellett.',
      risk_correct: 'A perfekcionizmus lassíthatja az előrehaladást.',
      risk_wrong: 'A fáradtság automatizálás felé tolhatja a folyamatot, és éppen ott vezethet kontrollvesztéshez, ahol arra a leginkább szükség lenne.',
      examples: ['Kutatási alap disszertációhoz vagy nyilvános tudományos munkához', 'Stratégiai elemzés nagy kulturális vagy üzleti projekthez', 'Nyilvánosan megvédendő tervezési döntés koncepcionális alapja'],
      related: ['С-11', 'С-10', 'С-16']
    },
    13: {
      title: 'Szakértői sprint',
      human_role: 'Szakértő gyorsszkennelő módban. Pontos lekérdezéseket ad, gyorsan felméri az eredmények relevanciáját, és továbbhalad.',
      ai_role: 'Nagy sebességű aggregátor szakértői kritériumok szerinti priorizálással.',
      logic: 'A magas szakértelem, a nagy sebesség és az alacsony motiváció klasszikus augmentációs forgatókönyvvé teszi ezt. A MI felgyorsítja a szakértő munkáját, de nem helyettesíti őt.',
      risk_correct: 'A sebesség csökkenti a mélységet — a szakértő kihagyhat egy fontos árnyalatot, amelyet a MI nem jelzett.',
      risk_wrong: 'Automatizálásra váltás — a szakértő abbahagyja az ellenőrzést, és egyre inkább az intuíciójára hagyatkozik.',
      examples: ['Gyors szakértői versenytárselemzés pitch előtt', 'Sürgős precedenskeresés szakmai érveléshez', 'Meglévő megoldások expressz auditja technikai briefinghez'],
      related: ['С-09', 'С-14', 'С-15']
    },
    14: {
      title: 'Sürgős szakértői audit',
      human_role: 'Nyomás alatt dolgozó, magas felelősségű szakértő. Pontos kritériumokat határoz meg, és gyorsan validálja a kulcseredményeket.',
      ai_role: 'Maximálisan hatékony asszisztens korlátok között: a megbízhatóságot priorizálja, és jelzi a bizonytalanságot.',
      logic: 'Magas kockázat nagy sebességen. Az augmentáció megmarad, mert a szakértelem továbbra is nélkülözhetetlen. Kevesebb iteráció, nagyobb fókusz a végső validációs rétegen.',
      risk_correct: 'A megfelelőség hamis érzete — „ellenőriztük, a MI segített, tehát rendben van”.',
      risk_wrong: 'A validációs réteg kihagyása a gyorsaságra hivatkozva.',
      examples: ['Sürgős szakértői elemzés stratégiai partnerség aláírása előtt', 'Egy kiemelt nyilvános beszéd tényalapjának sürgős ellenőrzése', 'Gyors kutatási audit nagy elérésű tartalom publikálása előtt'],
      related: ['С-13', 'С-16']
    },
    15: {
      title: 'Szakértői kooperáció',
      human_role: 'Szakértő aktív társszerzői módban. Összetett kérdéseket tesz fel, és szakértői pozícióból értékeli a MI váratlan javaslatait.',
      ai_role: 'Egyenrangú gondolkodó partner: olyan kapcsolatokat hoz felszínre, amelyeket a szakértő a specializáció „alagútlátása” miatt nem vett észre.',
      logic: 'A magas motiváció és a magas szakértelem együtt már nem augmentációt jelent. A kooperáció itt szinergiát teremt a szakértői ítélet és a MI nem nyilvánvaló javaslatai között.',
      risk_correct: 'A szakértő elkezdheti „tanítani” a modellt, ahelyett hogy együtt dolgozna vele — ez ritmusvesztéshez vezethet.',
      risk_wrong: 'Visszalépés augmentációba — éppen annak elvesztése, ami miatt a kooperációt választották.',
      examples: ['Gyors koncepciófejlesztés erős szerzői hangú versenyhez', 'Szakértői csapat brainstormingja, ahol a MI „harmadik résztvevő”', 'Több erős koncepcionális irány expressz kidolgozása összehasonlítás céljából'],
      related: ['С-11', 'С-07', 'С-16']
    },
    16: {
      title: 'Szakértői válságpárbeszéd',
      human_role: 'Szakértő maximális nyomás alatt. A magas motiváció, a magas szakértelem és a magas kockázat állandó kritikai éberséget követel.',
      ai_role: 'Gyors, átlátható, precíz partner. Kifejezett bizonyosságjelzéssel javasol opciókat, és segít a gondolkodás strukturálásában nyomás alatt.',
      logic: 'Minden paraméter maximumon van. A kooperáció elkerülhetetlenné válik: a motiváció és a szakértelem blokkolja az automatizálást, a kockázat pedig megakadályozza, hogy a kezdeményezést a MI-nek adják át.',
      risk_correct: 'Kognitív túlterhelés — túl sok bejövő információ nagy tempó mellett, magas felelősséggel.',
      risk_wrong: 'A kontrollszint bármilyen csökkenése súlyos hibává válhat.',
      examples: ['Sürgős koncepcionális kutatás válságbriefinghez egy top ügyfél számára', 'Expressz álláspontkidolgozás egy érzékeny nyilvános kérdésben azonnali megjelenéssel', 'Sürgős analitikai munka nagy tétű versenyhez vagy tenderhez'],
      related: ['С-15', 'С-08', 'С-32']
    },
    17: {
      title: 'Futószalag',
      human_role: 'A rendszer építésze: beállítja a paramétereket, sablonokat hoz létre, minőségi kritériumokat határoz meg, és rendszeresen mintát ellenőriz.',
      ai_role: 'Gyártási végrehajtó: a megadott paraméterek szerint hajtja végre a feladatokat, állandó minőséget tart fenn, és lehetővé teszi a skálázást.',
      logic: 'Klasszikus tiszta automatizálási forgatókönyv. Egyetlen paraméter sem igényel folyamatos emberi jelenlétet a gyártási ciklusban.',
      risk_correct: '„Minőségi sodródás” — rendszeres audit nélkül a rendszer fokozatosan eltávolodik a standardtól.',
      risk_wrong: 'Indítás világos sablon nélkül — egy rosszul definiált feladat automatizálása nagy léptékben középszerűséget eredményez.',
      examples: ['Termékleírások tömeges generálása e-kereskedelmi katalógushoz', 'Standard közösségimédia-posztok automatikus létrehozása tartalomterv alapján', 'Vizuális anyagok tömeges igazítása standard formátumokhoz'],
      related: ['С-18', 'С-19', 'С-25']
    },
    18: {
      title: 'Felügyelt futószalag',
      human_role: 'Gyártási auditor: rendszeresen ellenőrzi az eredmények mintáját, és eltérés esetén finomhangolja a rendszert.',
      ai_role: 'Kibővített metrikákkal rendelkező gyártási rendszer: rögzíti az eltéréseket, és prioritásként jelöli az alacsony bizonyosságú egységeket.',
      logic: 'A profil megegyezik a 17. forgatókönyvével, de a magas hibaköltség strukturált felügyeletet kíván. Az automatizálás gazdasági logikája megmarad, de audit-réteg kerül hozzá.',
      risk_correct: 'Az auditor mintavétel alapján figyelmen kívül hagyhat egy rendszerszintű hibát.',
      risk_wrong: 'A felügyelet csökkentése volumen- vagy határidőnyomás alatt.',
      examples: ['Jogi jelentőségű dokumentumok előállítása sablonokból', 'Tömeges lokalizáció reputációs kockázatú piacokra', 'Automatizált pénzügyi jelentéskészítés előírt formátumban'],
      related: ['С-17', 'С-21']
    },
    19: {
      title: 'Szerzői termelés',
      human_role: 'A szerző a folyamatban van: a MI produktívabbá teszi a jelenlétét. Az ember irányít, szerkeszt, és meghozza a szerzői döntéseket.',
      ai_role: 'Gyártási gyorsító: csökkenti a technikailag egyszerű műveletek terhét, és opciókat javasol a szerző mérlegelésére.',
      logic: 'A magas motiváció azt jelenti, hogy az eredmény értéke az emberi szerzőségtől függ. Az augmentáció gördülékenyebbé teszi a termelést, miközben az ember marad a szerző.',
      risk_correct: 'A szerzői hang fokozatosan kisimulhat a MI javaslatainak hatására.',
      risk_wrong: 'Kooperációra vagy automatizálásra váltás — a szerzői kontroll elvesztése.',
      examples: ['Személyes blog MI-asszisztenssel szerkesztéshez és strukturáláshoz', 'Tartalomgyártás egy junior szakember személyes márkájához', 'Illusztratív anyag létrehozása nem kereskedelmi projekthez'],
      related: ['С-17', 'С-20', 'С-23']
    },
    20: {
      title: 'Felelős szerzői termelés',
      human_role: 'Felelős szerző: a magas motiváció és a magas kockázat maximális kontrollt eredményez. Minden elem emberi döntésen megy keresztül.',
      ai_role: 'Gondos asszisztens: átveszi a technikai műveleteket, opciókat javasol, és kifejezetten jelöli a bizonytalanságot.',
      logic: 'Az augmentáció az egyetlen mód, amely itt a megfelelő egyensúlyt biztosítja: a MI produktivitása és az ember szerzői felelőssége együtt.',
      risk_correct: 'A perfekcionizmus lelassíthatja a termelést.',
      risk_wrong: 'Automatizálásra váltás fáradtságból — a kontroll elvesztése pontosan ott, ahol a legfontosabb.',
      examples: ['Nyilvános tartalmak gyártása, amelyek formálják a szerző reputációját', 'Oktatási anyagok készítése személyes név alatt széles közönségnek', 'Márkatartalom előállítása szigorú hangnemkövetelményekkel'],
      related: ['С-19', 'С-24']
    },
    21: {
      title: 'Gyors futószalag',
      human_role: 'Indítja a folyamatot, és megkapja az eredményt. Minimális részvétel a termelési ciklusban.',
      ai_role: 'Nagy sebességű gyártási végrehajtó. Az elsődleges prioritás a volumen és a gyorsaság a megadott paramétereken belül.',
      logic: 'A sebesség és az összes többi attribútum alacsony értéke együtt a legtisztább automatizálási forgatókönyvet eredményezi.',
      risk_correct: 'A sebesség elrejti a rendszerszintű hibákat egészen addig, amíg felskálázódnak.',
      risk_wrong: 'Ennek a módnak az alkalmazása olyan feladatokra, amelyek legalább minimális szakértelmet igényelnek.',
      examples: ['Rövid eseményleírások automatikus generálása aggregátorhoz', 'Hirdetésszövegek tömeges előállítása A/B tesztekhez', 'Címkék és metaadatok tömeges hozzárendelése médiaarchívumhoz'],
      related: ['С-17', 'С-22', 'С-23']
    },
    22: {
      title: 'Felügyelt gyors futószalag',
      human_role: 'Gyors auditor: a nagy sebesség lerövidíti az ellenőrzés idejét, de a magas kockázat kötelezővé teszi azt.',
      ai_role: 'Gyors gyártási rendszer beépített kockázati jelzőkkel: automatikusan megjelöli a nem standard eseteket prioritásos ellenőrzésre.',
      logic: 'Ez az automatizálási forgatókönyvek legélesebb feszültsége: a sebesség és a magas kockázat együtt. A megoldás az intelligens felügyelet, amely a kockázatos egységekre koncentrál, nem a teljes volumenre.',
      risk_correct: 'A kockázatjelző rendszer maga is hibázhat.',
      risk_wrong: 'A felügyelet formális rituálévá válik valódi kontroll helyett.',
      examples: ['Jogi jelentőségű tartalmak tömeges lokalizálása szűk határidőkkel', 'Hivatalos válságkommunikációs üzenetek sürgős gyártása sablonokból', 'Gyors médiatartalom-előállítás erősen szabályozott iparágban'],
      related: ['С-21', 'С-18']
    },
    23: {
      title: 'Sürgős szerzői termelés',
      human_role: 'Aktív szerző nagy tempóban: megőrzi a szerzői hangját, és gyorsan reagál a MI javaslataira.',
      ai_role: 'Reaktív gyártási partner: gyorsan opciókat generál, és alkalmazkodik a szerző által kijelölt irányhoz.',
      logic: 'A kooperáció az egyetlen mód, amely egyszerre biztosít sebességet és szerzői kontrollt.',
      risk_correct: 'Időnyomás alatt a szerzői hang gyorsabban kisimulhat, mint ahogy azt észlelnénk.',
      risk_wrong: 'Automatizálásra váltás „mert nincs idő”.',
      examples: ['Sürgős szerzői publikáció határidőre', 'Gyors tartalomgyártás élő adáshoz vagy sürgős hírlevélhez', 'Expressz vizuális megoldás sürgős közösségimédia-poszthoz'],
      related: ['С-19', 'С-24', 'С-31']
    },
    24: {
      title: 'Sürgős felelős szerzőség',
      human_role: 'Felelős szerző maximális nyomás alatt: a sebesség nem csökkenti a minőségi követelményeket, a magas kockázat pedig szerzői jelenlétet követel.',
      ai_role: 'Gyors precíziós partner: tartja a tempót, és átláthatóvá teszi a bizonyosság szintjét.',
      logic: 'Maximális feszültség a szerzői megvalósítás forgatókönyveiben. Gyártási tandem maximális kölcsönös átláthatósággal.',
      risk_correct: 'Túlterhelés — túl sok döntés egységnyi idő alatt, magas felelősség mellett.',
      risk_wrong: 'A szerzői kontroll bármilyen gyengülése költséges hibává válhat.',
      examples: ['Sürgős válságkommunikáció felsővezető neve alatt', 'Jelentős szerzői nyilatkozat sürgős publikálása', 'Nagy elérésű tartalom sürgős finomhangolása sugárzás előtt'],
      related: ['С-23', 'С-20', 'С-32']
    },
    25: {
      title: 'Szakértői termelés',
      human_role: 'Szakértő gyártási módban: specializált tudást alkalmaz anélkül, hogy időt akarna veszíteni technikailag egyszerű műveletekre.',
      ai_role: 'Gyártási gyorsító a szakértő számára: átveszi a rutinfeladatokat, és standard megoldásokat javasol a tipikus elemekhez.',
      logic: 'A magas szakértelem blokkolja az automatizálást, mert továbbra is szükség van a szakértői ítéletre; az alacsony motiváció blokkolja a kooperációt, mert nincs igény iteratív párbeszédre.',
      risk_correct: 'A MI fokozatosan többet vehet át a kelleténél, és a szakértelem elsorvadhat.',
      risk_wrong: 'Kooperációra váltás — szakértői idő pazarlása olyan iterációkra, amelyek eszközszerűen is megoldhatók lennének.',
      examples: ['Speciális tartalom gyártása tapasztalt szerző által MI-segítséggel', 'Műszaki dokumentáció készítése MI-vel automatizált sablonrészekkel', 'Professzionális tervezési megoldások létrehozása rutinműveletek MI-gyorsításával'],
      related: ['С-17', 'С-26', 'С-27']
    },
    26: {
      title: 'Precíziós termelés',
      human_role: 'Szakértő teljes felelősséggel a kimenetért. Módszeresen dolgozik, és minden kritikus elemet ellenőriz.',
      ai_role: 'Precíz gyártási asszisztens, amely a megbízhatóságot helyezi előtérbe: jelöli a nem standard eseteket, és biztosítja a döntések követhetőségét.',
      logic: 'A felelős szakértői termelés klasszikus profilja. Itt a pontosság és a kontroll számít, nem a sebesség vagy a párbeszéd.',
      risk_correct: 'A MI-asszisztenstől való túlzott függés csökkentheti a szakértői éberséget.',
      risk_wrong: 'Automatizálásra váltás magas kockázat mellett — végzetes álmegtakarítás.',
      examples: ['Végső tervezés fizikai termék gyártásához', 'Professzionális dokumentáció előkészítése szabályozó hatóság számára', 'Jelentős projekt archivális vagy nyilvános verziójának előállítása'],
      related: ['С-25', 'С-30']
    },
    27: {
      title: 'Szerzői szakértői termelés',
      human_role: 'Mester a folyamatban: olyan szakértő, akinek fontos a személyes jelenléte minden döntésben. A MI felerősít, de nem helyettesít.',
      ai_role: 'Intellektuális eszköz a mester kezében: tágítja a képességeket anélkül, hogy beavatkozna a szerzői folyamatba.',
      logic: 'Magas szakértelem és magas motiváció időnyomás nélkül — ideális profil a mély augmentációhoz. A szakértő erősítést keres, nem párbeszédet.',
      risk_correct: 'A MI megteremti a kísértést, hogy „csak ezt az egy műveletet” átadjuk neki — így fokozatos kontrollvesztés következhet be.',
      risk_wrong: 'Kooperációra váltás — a szakértő ott adja át a kezdeményezést, ahol vezetnie kellene.',
      examples: ['Szerzői tartalomgyártás tapasztalt újságíró vagy író által', 'Komplex tervezési tárgy létrehozása MI-támogatással a technikai műveletekhez', 'Kurzusfejlesztés MI-asszisztenssel a strukturáláshoz'],
      related: ['С-25', 'С-28', 'С-31']
    },
    28: {
      title: 'Felelős mesterség',
      human_role: 'Mester maximális felelősséggel: minden döntés mérlegelt, minden elem ellenőrzött. A termelés legmagasabb sztenderdje.',
      ai_role: 'Fegyelmezett asszisztens: precíz, átlátható, és soha nem vállal át többet annál, amit delegáltak neki.',
      logic: 'Ez az augmentáció a legigényesebb formájában: a szakértő teljes kontrollt gyakorol minden döntés fölött, a magas kockázat pedig kötelezővé teszi ezt a kontrollt.',
      risk_correct: 'A túltervezés kockázata — túlzottan magas kontrollszint egyenként alacsonyabb kockázatú műveleteknél.',
      risk_wrong: 'A szakértői kontroll bármilyen csökkenése magas kockázat mellett.',
      examples: ['Olyan zászlóshajó-termék létrehozása, amely meghatározza egy stúdió reputációját', 'Nyilvános projekt végső verziója nagy médiakitettség mellett', 'Felelős kreatív munka elismert szerző neve alatt'],
      related: ['С-27', 'С-12', 'С-32']
    },
    29: {
      title: 'Szakértői gyorsítás',
      human_role: 'Szakértő nagy kibocsátási módban: specializált tudást alkalmaz gyorsan, felesleges iterációk nélkül.',
      ai_role: 'Gyártási gyorsító: automatizál mindent, ami nem igényel szakértői ítéletet.',
      logic: 'A magas szakértelem, a nagy sebesség és az alacsony motiváció a leghatékonyabb augmentációs forgatókönyvet eredményezi.',
      risk_correct: 'A sebesség csökkenti a mélységet — a szakértő ott is spórolhat az ellenőrzéssel, ahol arra továbbra is szükség lenne.',
      risk_wrong: 'Automatizálásra váltás azzal a logikával, hogy „a MI úgyis elintézi”.',
      examples: ['Technikailag összetett tartalom sürgős előállítása tapasztalt szerző által', 'Komplex tervezési megoldás expressz kidolgozása szoros határidő mellett', 'Szakértői anyag gyors előkészítése publikációhoz'],
      related: ['С-25', 'С-30', 'С-31']
    },
    30: {
      title: 'Sürgős precíziós termelés',
      human_role: 'Szakértő kettős nyomás alatt: gyorsaság és magas kockázat. Figyelmét a legkritikusabb ellenőrzési pontokra összpontosítja.',
      ai_role: 'Maximálisan hatékony gyártási asszisztens: gyorsan dolgozik, és prioritást ad azoknak az elemeknek, amelyek a leginkább emberi felülvizsgálatot igényelnek.',
      logic: 'A megvalósítási szakasz legfeszültebb augmentációs forgatókönyve. A gyorsított szakértői kontroll azt jelenti, hogy az ember azt ellenőrzi, amit kell, nem mindent.',
      risk_correct: 'A kritikus pontok priorizálási rendszere maga is hibázhat.',
      risk_wrong: 'Automatizálásra váltás nyomás alatt — a szakértői kontroll elvesztése éppen akkor, amikor arra a legnagyobb szükség lenne.',
      examples: ['Magas kockázatú projekt sürgős véglegesítése ügyfélátadás előtt', 'Jogi vagy reputációs szempontból érzékeny anyag sürgős előkészítése', 'Komplex technikai megoldás sürgős megvalósítása azonnali határidővel'],
      related: ['С-29', 'С-26']
    },
    31: {
      title: 'Szakértői termelési kooperáció',
      human_role: 'Szerző-szakértő aktív tandem módban. A MI-vel partnerként dolgozik együtt minden jelentős döntésnél.',
      ai_role: 'Aktív gyártási partner: opciókat generál, alkalmazkodik a szakértő visszajelzéséhez, és felgyorsítja az iterációkat.',
      logic: 'A magas motiváció és a magas szakértelem aktív szerzői jelenlétet kíván meg a termelési folyamatban — ez kooperáció. A nagy sebesség mellett a lassú augmentáció nem praktikus.',
      risk_correct: 'A nagy tempójú gyártási kooperáció kisimíthatja a szerzői hangot.',
      risk_wrong: 'Automatizálásra váltás „mert működik” — észrevétlen szerzőségvesztés.',
      examples: ['Jelentős szerzői tartalom sürgős előállítása', 'Komplex kreatív megoldás gyors fejlesztése szerzői hanggal', 'Tervezési rendszer nagy sebességű iteratív fejlesztése erős csapatbevonással'],
      related: ['С-27', 'С-15', 'С-32']
    },
    32: {
      title: 'Mester nyomás alatt',
      human_role: 'Szerző-szakértő maximális felelősséggel extrém nyomás alatt. Minden paraméter a csúcson van. A kooperáció itt nem választás, hanem szükségszerűség.',
      ai_role: 'A legmagasabb bizalmi szintű partner: gyors, átlátható, szakmailag fegyelmezett. Kifejezett kérés nélkül nem veszi át a kezdeményezést.',
      logic: 'Az 1. forgatókönyv tükörképe a mátrixban. A 32 közül a legigényesebb forgatókönyv: kooperáció maximális nyomás és maximális felelősség mellett.',
      risk_correct: 'Ha az extrém feszültség normává válik — az „állandóan 32-es módban” szindróma szakmai kiégéshez vezethet.',
      risk_wrong: 'A kontroll csökkentése nyomás alatt éppen abban a pillanatban, amikor arra a legnagyobb szükség van.',
      examples: ['Egy zászlóshajó-projekt sürgős véglegesítése vezető szakértő neve alatt', 'Magas szintű válsághelyzeti kreatív munka azonnali következményekkel', 'Jelentős szerzői anyag valós idejű előállítása élő adáshoz'],
      related: ['С-31', 'С-28', 'С-16']
    }
  }
};