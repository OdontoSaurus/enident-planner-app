import{t as e}from"./jsx-runtime-Dk72oS4N.js";import{f as t}from"./hooks-BG6PZMO0.js";import{F as n,G as r,I as i,J as a,q as o,wt as s,xt as c}from"./index-BRwxa0eZ.js";var l=`# Novità di Enident Planner

Le novità di ogni versione del client desktop, dalla più recente. Sono mostrate nell'app
(pagina "Novità") e diventano le note di rilascio e dell'aggiornamento automatico.

Le voci nuove vanno sotto "Non rilasciato": \`npm run release -- X.Y.Z\` le assegna alla
versione X.Y.Z con la data del giorno. Si scrive per chi usa l'app, non per chi la sviluppa.

## [Non rilasciato]

## [1.1.1] - 2026-10-08

### Migliorato
- Aprendo la scheda del paziente dal nome nel dettaglio di un appuntamento, in cima alla scheda
  c'è «‹ Torna all'appuntamento»: riporta all'agenda con lo stesso appuntamento di nuovo aperto.

## [1.1.0] - 2026-10-08

### Novità
- Importazione dei pazienti da un altro gestionale (solo il proprietario, in Impostazioni →
  Importa pazienti): si carica il file dell'anagrafica, si verifica il riepilogo e si importa.
  I pazienti già nello studio vengono riconosciuti e completati senza sovrascrivere nulla; per i
  casi dubbi (omonimi) decidi tu se collegarli a un paziente o crearne uno nuovo.
- Il formato del file da importare è descritto nella stessa pagina, campo per campo, con lo
  schema e un file di esempio da scaricare per chi prepara l'esportazione.
- Un'importazione si può annullare: i pazienti creati vengono eliminati e le schede completate
  tornano come prima, senza toccare ciò che è stato modificato o usato dopo.
- Scegliendo il paziente per un appuntamento o per la lista d'attesa, l'elenco mostra la data di
  nascita prima del telefono: tra due omonimi si sceglie quello giusto. La data compare anche
  accanto al paziente già scelto.

## [1.0.1] - 2026-10-07

### Novità
- Agenda più veloce da tastiera: Pag giù e Pag su passano al giorno aperto successivo o
  precedente, saltando fine settimana, festività e chiusure dello studio; F7 e F6 vanno avanti o
  indietro di una settimana (nella vista mensile di un mese). Le frecce ‹ › restano come prima e
  il loro suggerimento ricorda le nuove scorciatoie.

## [1.0.0] - 2026-10-07

### Novità
- La guida di Enident Planner: dal menu con il tuo nome (sul telefono in Altro) la voce «Guida»
  apre nel browser le istruzioni passo passo, con le immagini, su enident.it/guida.

## [0.11.3] - 2026-10-07

### Novità
- L'agenda si usa anche da tastiera: con Tab si entra nella griglia, le frecce passano tra gli
  orari liberi e gli appuntamenti, Invio apre o crea, Maiusc+F10 apre il menu, Esc toglie la
  selezione. Nella barra c'è «+ Nuovo appuntamento».
- Lista d'attesa: «Prenota…» su ogni paziente apre il nuovo appuntamento già compilato, senza
  trascinare (anche sul telefono).
- Più accessibile con i lettori di schermo: le operazioni riuscite in agenda vengono annunciate, i
  giorni dei calendari hanno il nome completo e i menu si usano con le frecce.
- Le finestre tengono il cursore al loro interno, lo rimettono dov'era alla chiusura e hanno la ×
  per chiuderle, anche sul telefono.

### Correzioni
- Testi più leggibili: orari, giorni chiusi e voci spente avevano poco contrasto.
- Meno attese dopo ogni modifica in agenda: si ricarica solo ciò che è cambiato, e con il tempo
  reale attivo l'app interroga il server più di rado.
- Dopo una disconnessione il collegamento in tempo reale si riapre prima.
- La scadenza degli inviti si mostra nel fuso dello studio.
- Un appuntamento può durare al massimo 24 ore: per assenze più lunghe si usa un blocco.
- Esportazione dei dati dello studio più leggera per il server anche con molti dati.

## [0.11.2] - 2026-10-07

### Correzioni
- L'app si apre più in fretta: ogni pagina si carica quando serve, e la pagina pubblica di
  prenotazione online scarica meno della metà di prima.
- Agenda più fluida con molti appuntamenti: selezionare, trascinare e il passare dei minuti non
  ridisegnano più tutta l'agenda. La vista mensile legge solo il numero di appuntamenti per giorno.
- Orari di apertura: «Aggiungi fascia» dopo una fascia che chiude tardi (per esempio alle 22:30)
  proponeva una fascia sovrapposta, rifiutata al salvataggio; ora parte dalla chiusura, e quando la
  giornata è piena il pulsante si disattiva.
- Comunicazioni: premendo «Pagina successiva» appena aperta la pagina si tornava alla prima.

## [0.11.1] - 2026-10-06

### Correzioni
- Prenotazione online: a settembre si possono di nuovo scegliere i giorni di ottobre (il cambio
  dell'ora bloccava il calendario del mese). I giorni e gli orari a cavallo del cambio dell'ora
  sono giusti, e l'anticipo massimo si conta in giorni di calendario.
- Accendendo o modificando una regola dei promemoria non parte più una raffica di messaggi: i
  promemoria la cui ora d'invio è già passata si saltano, con il motivo. Ai pazienti eliminati non
  arrivano più promemoria.
- Più affidabilità: un problema in una parte del servizio non ferma più l'invio dei promemoria e
  delle email; nessun promemoria doppio. Accettare una richiesta online mentre scade, o premere
  due volte «Accetta» o «Riprova», non manda più messaggi doppi o contraddittori, e un
  accettazione con spostamento non resta salvata a metà se c'è un conflitto.
- Comunicazioni più veloci con molti messaggi.

## [0.11.0] - 2026-10-06

### Correzioni
- Più sicurezza per gli SMS e i WhatsApp: le risposte dei pazienti e gli esiti di consegna arrivano
  solo allo studio che ha inviato il messaggio, verificati con le sue credenziali.
- Più protezione dell'account: limiti ai tentativi ripetuti di registrazione, accesso, recupero
  della password, reinvio dell'email di conferma e inviti, con un'attesa che cresce se si insiste.
  Dopo 5 password sbagliate l'accesso si blocca per 15 minuti solo dal dispositivo che ha
  sbagliato: chi prova da fuori non può più tenere fuori il titolare.
- Esportazioni e report in CSV: un nome o una nota che inizia con =, +, - o @ non viene più
  eseguito come formula da Excel.

## [0.10.8] - 2026-10-06

### Novità
- Versione web installata sul telefono: icona a tutto tondo con il fondo arancione fino ai bordi,
  che Android ritaglia nella forma del telefono (cerchio, goccia, quadrato arrotondato) senza
  tagliare il disegno, e icona dedicata per la schermata Home dell'iPhone e dell'iPad.

## [0.10.7] - 2026-10-06

### Novità
- «+ Da richiamare» nella lista Da richiamare (barra laterale dell'agenda, pagina completa e
  telefono): si cerca il paziente come in agenda, anche nuovo al volo, con motivo scritto,
  priorità, assegnatario e, se serve, i dati dell'appuntamento desiderato.
- Il pulsante che apre la barra laterale dell'agenda ora si chiama «In sospeso» e conta le voci
  della lista d'attesa più i pazienti da richiamare; si apre sulla scheda che ha voci (prima la
  lista d'attesa). Lo stesso in fondo all'agenda del telefono, dove ora c'è anche Da richiamare.
- Più sicurezza sui dati: ogni mese, di notte, l'ultimo backup del database viene ripristinato
  per prova in un database temporaneo (poi cancellato), per essere certi che si possa davvero
  recuperare; l'esito arriva per email all'amministratore del servizio.
- Agenda più pulita: lo stato dell'appuntamento è ora un piccolo badge colorato in alto a destra
  del riquadro, accanto alle altre icone (da richiamare, promemoria inviato, annullati nello
  stesso orario); passandoci sopra si legge lo stato, con l'ora di arrivo o d'inizio. Sotto il
  nome restano solo le note. «Prenotato» non mostra nulla. Sui riquadri da 15 minuti o affiancati
  le icone sono più piccole e meno, lo stato per primo. Lo stesso sul telefono e nella stampa
  dell'agenda.
- La lista «Da richiamare» ora sta solo nella barra «In sospeso» dell'agenda: la voce del menu e la
  pagina a parte non ci sono più, e il numero dei pazienti da richiamare è nel pulsante «In
  sospeso». Nella scheda «Da richiamare» l'icona dei filtri apre un pannello con stato, motivo,
  assegnato a, periodo e ordinamento (per priorità, più vecchi o più recenti prima); un pallino
  sull'icona ricorda che ci sono filtri attivi, e la postazione se li ricorda. Il pulsante per
  aggiungere un richiamo ora si chiama «+ Aggiungi». Sul telefono, in Altro, «In sospeso» apre
  l'agenda direttamente su Da richiamare, con gli stessi filtri.

## [0.10.6] - 2026-10-06

### Novità
- Nuova lista «Da richiamare», separata dalla lista d'attesa: nel menu (con il numero dei pazienti
  da richiamare), come seconda scheda della barra laterale dell'agenda e, sul telefono, in Altro.
  I pazienti ci entrano da soli quando rispondono NO al promemoria, non si presentano, annullano
  dal link della prenotazione online, la loro richiesta online scade senza risposta o il
  promemoria non arriva; oppure a mano, dalla scheda del paziente e dal dettaglio di un
  appuntamento. Ogni richiamo ha motivo, priorità, a chi è assegnato e i dati dell'appuntamento
  desiderato (presi dall'appuntamento annullato o non presentato), e si chiude con l'esito. Da lì
  «Crea appuntamento» apre il modulo già compilato e «Metti in lista d'attesa» la voce già
  compilata. Un nuovo appuntamento del paziente chiude da solo i richiami che risolve (NO,
  no-show, annullamento, richiesta scaduta); quelli per un promemoria non arrivato o messi a mano
  restano aperti. La pagina «Da richiamare» ha i filtri per motivo, assegnazione e periodo.
  Una persona nuova la cui richiesta online è scaduta entra in anagrafica solo se il richiamo si
  chiude come fatto (anche con un appuntamento o la lista d'attesa); con «Non serve più», o dopo
  30 giorni senza modifiche, i suoi dati vengono cancellati come per le altre richieste scadute.
- Dal dettaglio di un appuntamento annullato o non presentato: «Metti da richiamare» e «Metti in
  lista d'attesa», già compilati con i dati dell'appuntamento.
- Lista d'attesa per anticipare: se il paziente ha già un appuntamento, il modulo lo mostra e
  chiede se tenerlo (la voce ricorda di anticiparlo) o annullarlo, con il motivo; quando si
  prenota lo slot nuovo, Enident propone di annullare quello vecchio.
- Report: il riquadro «Da richiamare» con i richiami nuovi e chiusi nel periodo, il tempo medio di
  chiusura e i motivi.
- Impostazioni → SMS e → WhatsApp: «Rimuovi configurazione», con conferma, cancella le credenziali
  del canale per lo studio e lo spegne. I messaggi già inviati restano in Comunicazioni, quelli
  ancora in coda non partono, e il numero WhatsApp (Phone Number ID) si può collegare a un altro
  studio.
- Informativa della prenotazione online, «Usa il modello Enident»: per le richieste rifiutate o
  scadute i dati si cancellano entro 30 giorni dall'ultimo contatto da parte dello studio.

## [0.10.5] - 2026-10-06

### Novità
- Telefono in orizzontale: l'agenda mostra fino a tre operatori affiancati, quello scelto e i
  successivi. I nomi degli operatori in cima alle colonne non sono più tagliati a metà.

## [0.10.4] - 2026-10-06

### Novità
- Lo stato dell'appuntamento si vede subito: in agenda ogni appuntamento ha a sinistra una barra
  del colore dello stato e, se c'è spazio, lo stato scritto (per chi aspetta anche l'ora di
  arrivo); nel dettaglio lo stato è in evidenza, con gli orari della visita.
- Uno stato messo per sbaglio si corregge: dal dettaglio («Stato messo per sbaglio?») o dal menu
  con il tasto destro («Correggi lo stato») si torna, per esempio, da Completato a In corso o da
  Confermato a Prenotato; un «Non presentato» torna a prenotato, confermato o arrivato. Un
  appuntamento annullato invece si riprogramma, come prima.
- Tempo di attesa dei pazienti: «Arrivato» segna l'ora di arrivo e «Inizia» quella di inizio della
  visita; l'attesa è il tempo tra il più tardi tra orario dell'appuntamento e arrivo e l'inizio
  della visita, e si salva nell'appuntamento. Nel dettaglio si vede da quanto il paziente aspetta
  e gli orari si possono correggere; nella scheda del paziente l'attesa media e quella di ogni
  appuntamento; nei Report il nuovo riquadro «Attesa in studio» con media, mediana, attese oltre
  15 minuti, per operatore e i pazienti che aspettano di più (anche nel CSV).
- Comunicazioni → Risposte: la conversazione parte dagli ultimi messaggi, come in una chat.

### Correzioni
- Versione web sul telefono in orizzontale: la pagina occupava solo una parte dello schermo, con
  il resto bianco, e l'agenda era tagliata in basso. Ora il telefono usa sempre il layout da
  telefono, anche in orizzontale, adattato allo schermo basso (barra in basso più sottile, giorno
  e operatore su una riga, più ore visibili in agenda); il layout da computer riempie sempre
  tutta la finestra, anche su un tablet in verticale, e al cambio di orientamento tutto si
  ridisegna.

## [0.10.3] - 2026-10-05

### Novità
- Impostazioni → WhatsApp con Meta: nuova guida al collegamento, dal portfolio business dello
  studio alla prova con un paziente vero, in sette passi apribili più «Prima di iniziare». Ogni
  passo ha i link alle pagine di Meta e i rimandi ai campi delle credenziali della stessa pagina;
  al passo 5 ci sono URL del webhook e token di verifica da copiare. In fondo alla pagina la
  tabella dei problemi comuni, con sintomo, causa probabile e cosa fare.

## [0.10.2] - 2026-10-05

### Novità
- Comunicazioni → Risposte dei pazienti: gli SMS e i WhatsApp arrivati dai pazienti, con il
  testo, l'appuntamento e cosa ne ha fatto Enident (confermato o da richiamare). Le risposte da
  leggere sono evidenziate e contate nel menu Comunicazioni finché qualcuno non le segna come
  lette; c'è anche "Segna tutte come lette".
- Rispondere al paziente da Enident: "Rispondi…" apre la conversazione con quel numero
  (promemoria, risposte del paziente e dello studio) e manda un SMS, oppure un WhatsApp entro
  24 ore dall'ultimo messaggio del paziente, come vuole WhatsApp.
- Le risposte si riconoscono meglio: oltre a «Sì», «Ok» e «No» valgono anche «Confermo», «Va
  bene», «Ci sarò», 👍, «Non posso», «Disdico» e simili. Una risposta con una domanda o con
  conferma e rifiuto insieme non cambia l'appuntamento e resta da leggere; una conferma con
  altro testo («Ok, arrivo 10 minuti in ritardo») conferma l'appuntamento ma resta da leggere.

### Correzioni
- Una risposta da un numero senza promemoria si abbina al paziente anche se è uno dei suoi
  altri numeri, non solo il preferito, e su Twilio va allo studio del numero che l'ha ricevuta.

## [0.10.1] - 2026-10-05

### Novità
- Modelli WhatsApp con i segnaposto di Enident: nel nuovo modello il testo si scrive con
  {nome}, {cognome}, {studio}, {data}, {ora}, {operatore}, {tipo}, {telefono_studio} e
  {indirizzo_studio}, cliccabili, quanti e dove si vuole. Enident li trasforma nelle variabili di
  WhatsApp nell'ordine in cui compaiono, manda a Meta gli esempi per l'approvazione e ricorda
  quale dato va in ogni variabile; sotto il testo si vede come arriverà a WhatsApp.
- Nuovi segnaposto in email, SMS e WhatsApp: {data_nascita} (data di nascita del paziente, es.
  «05 marzo 1980»), {giorno_settimana} (il giorno dell'appuntamento, es. «lunedì») e
  {data_appuntamento} (es. «05 ottobre 2026»). Passando con il mouse su un segnaposto se ne
  legge il significato. Senza data di nascita nella scheda, nelle email e negli SMS resta vuota
  e su WhatsApp diventa un trattino.
- Per i modelli creati fuori da Enident si sceglie quale dato va in ogni variabile ({{1}},
  {{2}}…); senza una scelta restano nome, studio, data e ora. L'anteprima di "Invia ora" e gli
  invii usano la scelta.

### Correzioni
- Nuovo modello WhatsApp: se Meta o Twilio lo rifiutano, il modulo mostra il motivo (nome già
  usato, variabili non consecutive, esempi mancanti, categoria non accettata, permessi del token)
  insieme al messaggio originale con il codice, invece di un errore generico.
- Impostazioni → WhatsApp e → SMS: "Salva e verifica" poteva restare disattivato senza dire
  nulla. Ora il pulsante torna sempre attivo e c'è sempre un esito: salvato (e verificato),
  l'errore con il messaggio del provider, oppure nessuna risposta entro 15 secondi.

## [0.10.0] - 2026-10-05

### Novità
- Nuova scheda Impostazioni → Template, con tre schede: Email, SMS e WhatsApp. In Email e SMS
  si creano, duplicano, modificano ed eliminano i template (nome, oggetto per l'email, testo con
  i segnaposto cliccabili e l'anteprima su un appuntamento vero) e si segna il preferito di
  ciascun canale. Per gli SMS il testo mostra quanti caratteri e quanti SMS servono.
- WhatsApp: la scheda elenca i modelli dell'account WhatsApp dello studio (Meta o Twilio) con
  lingua, categoria e stato dell'approvazione (in revisione, approvato, rifiutato con il
  motivo); "Aggiorna" rilegge lo stato. Un modello nuovo si crea da qui (nome, lingua, testo con
  le variabili {{1}} nome, {{2}} studio, {{3}} data, {{4}} ora ed esempi) e parte in
  approvazione. Con Twilio si può anche registrare il Content SID di un modello già esistente.
  Il preferito, scelto tra gli approvati, prende il posto del nome del template nelle
  impostazioni WhatsApp.
- Regole dei promemoria: ogni regola sceglie un template per canale (email, SMS e WhatsApp),
  partendo dai preferiti. Con il canale preferito del paziente si usa il template del suo canale.
- "Invia ora" e "Promemoria del giorno": prima si sceglie il canale, poi il template tra quelli
  di quel canale (proposto quello della regola o il preferito). Per email e SMS testo e oggetto
  si possono rivedere prima dell'invio; per WhatsApp si vede il testo del modello con i dati
  del paziente, che non si modifica.
- I template di prima, che avevano i tre testi insieme, sono diventati un template email e uno
  SMS con lo stesso nome, e le regole restano collegate. Il template WhatsApp già indicato nelle
  impostazioni diventa il modello preferito. I testi WhatsApp liberi dei template di prima non
  si usano più: WhatsApp consegna i promemoria solo con i modelli approvati.

### Correzioni
- Impostazioni → Template: "Nuovo template" apre un modulo vuoto (nome, oggetto per l'email,
  testo) e il template si crea solo con "Crea template". Un nome già usato nel canale si segnala
  subito, e se nel frattempo l'ha preso un'altra postazione il messaggio compare nel modulo, che
  resta aperto. Prima poteva rispondere "Esiste già un template chiamato Nuovo template" senza
  aprire nulla.
- Impostazioni → Template → WhatsApp: senza WhatsApp configurato, o con WhatsApp spento, la
  scheda lo spiega e porta a Impostazioni → WhatsApp, invece dell'errore "Elemento non trovato".
  Se la lettura dei modelli non riesce, l'errore dice il motivo reale e "Riprova" rilegge davvero.
- "Invia ora" dal dettaglio dell'appuntamento: il clic su "Invia" poteva non fare nulla (la
  finestra si ricaricava senza inviare), con qualunque provider. Ora il promemoria parte, e se
  il server rifiuta l'invio la finestra resta aperta con il motivo. Lo stesso vale per le altre
  finestre aperte da dentro un modulo.
- Il motivo di un canale non disponibile rimanda alle pagine giuste: Impostazioni → SMS o
  Impostazioni → WhatsApp.

## [0.9.2] - 2026-10-04

### Novità
- Impostazioni: "SMS e WhatsApp" diventa due pagine, "SMS" e "WhatsApp", ognuna con la sua
  guida, le sue credenziali, l'interruttore di attivazione e il messaggio di prova. Le
  configurazioni già fatte restano valide senza fare nulla.
- WhatsApp con Meta: nella pagina WhatsApp si sceglie il provider, Twilio (come finora) oppure
  Meta WhatsApp Cloud API, senza intermediari. Si inseriscono Phone Number ID, WhatsApp Business
  Account ID, il token di accesso permanente (conservato cifrato e mai mostrato) e il nome del
  template approvato con la lingua; Enident genera il token di verifica del webhook, da copiare
  su Meta. La guida spiega il collegamento manuale passo passo: app Meta, numero dedicato,
  token, template "promemoria_appuntamento" e webhook. I promemoria partono con il template
  approvato (o come testo, se il paziente ha scritto nelle ultime 24 ore), e le risposte SI/NO
  confermano o segnano da richiamare come con Twilio. L'uso dello stesso numero anche nell'app
  WhatsApp Business arriverà con il collegamento guidato.
- Impostazioni → Operatori: nel modulo dell'operatore c'è "Account collegato", per scegliere il
  membro dello studio che lavora come quell'operatore (oppure "Nessuno"). Serve perché l'operatore
  veda i propri appuntamenti e per copiarli nel suo Google Calendar. Si possono scegliere solo i
  membri non ancora collegati a un altro operatore, e nell'elenco degli operatori si vede a chi è
  collegato ciascuno.

## [0.9.1] - 2026-10-04

### Novità
- Report: il riquadro "Prenotazione online", per gli studi che l'hanno attivata. Mostra le
  richieste ricevute nel periodo e quante sono state accettate, rifiutate, lasciate scadere o
  annullate dal paziente, il tasso di accettazione e il tempo medio di risposta dello studio, con
  il confronto con il periodo precedente e l'andamento settimanale. Il dettaglio le divide per
  tipo di appuntamento e per operatore; c'è anche nell'esportazione CSV e nella stampa.
- Google Calendar: in Impostazioni account → Account, nel riquadro "Calendario", "Collega Google
  Calendar" copia i tuoi appuntamenti nel tuo Google Calendar (sul telefono da Altro → Account).
  Per ogni studio in cui sei un operatore si crea un calendario dedicato «Enident – <studio>», con
  gli appuntamenti degli ultimi 7 giorni e dei prossimi 90, aggiornato in automatico: nuovi
  appuntamenti, spostamenti e cambi di stato arrivano entro pochi minuti, gli annullati spariscono.
  - Scegli cosa mostrare nel titolo (solo "Appuntamento", il tipo o il nome del paziente), se
    includere le note (di norma no) e i blocchi dell'agenda; le chiusure di giornate intere
    diventano eventi di tutto il giorno.
  - La sincronizzazione va in un solo verso: le modifiche fatte in Google Calendar non tornano
    nell'agenda. Se cancelli il calendario dedicato, si ricrea da solo.
  - "Risincronizza" riallinea tutto; "Scollega" revoca l'accesso a Google e, se vuoi, cancella i
    calendari Enident.

## [0.9.0] - 2026-10-03

### Correzioni
- Impostazioni → Prenotazione online: l'anteprima del QR code nell'app desktop poteva comparire
  come immagine rotta. Ora si vede sempre, anche il cartello da stampare; mentre si carica lo dice,
  e se non arriva mostra il motivo con "Riprova".

## [0.8.9] - 2026-10-03

### Novità
- Impostazioni → Prenotazione online: il QR code si vede in anteprima accanto al link pubblico,
  con il link sotto. "Scarica" salva un PNG ad alta risoluzione; "Stampa" prepara una pagina A4
  da appendere in sala d'attesa, con il nome dello studio, il QR grande e la scritta "Prenota
  online inquadrando il codice". Con la prenotazione disattivata il QR è sfocato, con l'avviso.

### Correzioni
- L'anteprima del QR code della prenotazione online poteva restare vuota.

## [0.8.8] - 2026-10-03

### Novità
- Impostazioni → Prenotazione online: "Usa il modello Enident" compila l'informativa privacy con
  nome, indirizzo, email e telefono dello studio, da rivedere e modificare prima di salvare. I dati
  che mancano restano segnati tra parentesi quadre. L'informativa resta un documento dello studio,
  da verificare con il proprio consulente.
- Nella pagina di prenotazione l'informativa scritta dallo studio si apre in una finestra
  "Informativa privacy"; ogni richiesta registra la versione accettata.

## [0.8.7] - 2026-10-03

### Novità
- Prenotazione online, seconda parte: la pagina pubblica per i pazienti, quella del link e del QR
  code di Impostazioni → Prenotazione online. Funziona dal telefono e dal computer, senza account:
  - il paziente sceglie tipo di visita, operatore (o "Indifferente"), giorno tra quelli liberi e
    orario, poi lascia nome, cognome, telefono, email ed eventuali note e accetta l'informativa
    dello studio;
  - conferma con un codice di 6 cifre ricevuto per email, dopo una verifica anti-bot;
  - riceve l'email "richiesta ricevuta" (o "appuntamento confermato" con la conferma
    automatica), con il link per annullare fino a 24 ore prima. Se annulla, l'appuntamento in
    agenda diventa annullato ("Annullato dal paziente online") e lo studio lo vede subito.
- Se due pazienti scelgono lo stesso orario insieme passa solo il primo; all'altro la pagina
  chiede di sceglierne un altro, senza mostrare dati di nessuno. Ogni recapito può avere al
  massimo 2 richieste in attesa di conferma.

## [0.8.6] - 2026-10-03

### Novità
- Prenotazione online, prima parte (piani Studio e Multi studio). In Impostazioni →
  Prenotazione online si configura cosa si prenota da internet:
  - tipi di appuntamento, anche con una durata dedicata, e operatori;
  - fasce orarie, anticipo minimo e massimo, limite di prenotazioni al giorno;
  - conferma manuale o automatica, e in quante ore va data prima che la richiesta scada;
  - messaggio di benvenuto e informativa privacy dello studio, obbligatoria per attivarla.

  Ci sono anche il link della pagina pubblica da copiare e il QR code da scaricare. La pagina
  pubblica per i pazienti arriverà con la seconda parte.
- Le richieste online occupano subito lo slot e in agenda sono tratteggiate, con un globo.
  Dal menu dell'appuntamento o dal dettaglio si accettano o si rifiutano:
  - si accettano su un paziente già registrato (quello con lo stesso telefono o email viene
    proposto, mai abbinato da solo) o come nuovo paziente, anche in un altro orario;
  - si rifiutano con un messaggio per il paziente.

  Il paziente riceve un'email in entrambi i casi, e anche quando una richiesta non gestita in
  tempo scade e libera lo slot. La pagina «Richieste online» del menu le raccoglie tutte, con
  il numero di quelle da gestire.
- I dati delle richieste online rifiutate o scadute si conservano 30 giorni, poi si cancellano:
  resta solo l'appuntamento annullato, per le statistiche. L'esportazione dei dati dello studio
  comprende le richieste con i loro dati finché non sono cancellati (richieste_online.csv).

### Modifiche
- La scheda Account non è più nelle impostazioni dello studio: account e abbonamento sono nelle
  impostazioni dell'account, dal menu sul tuo nome (sul telefono da Altro).

## [0.8.5] - 2026-10-03

### Novità
- "Nuovo studio" nel menu dell'account e nella scelta dello studio, con la stessa procedura del
  primo accesso. Se il piano non comprende altri studi, al posto del modulo c'è il rimando ai
  piani.
- Con più studi di quanti il piano ne comprenda (per esempio tornando al gratuito), il
  proprietario sceglie una volta quale studio continuare a gestire: resta modificabile, gli altri
  in sola lettura. Il pulsante «Scegli lo studio da gestire» è nell'avviso in alto e nelle
  impostazioni dell'account → Abbonamento; cambiando piano si può scegliere di nuovo.
- In alto a destra, accanto al nome, il piano del tuo account (con "prova" durante la prova
  gratuita); un clic apre l'abbonamento.

### Modifiche
- L'abbonamento è del tuo account, non di uno studio: ora si gestisce dalle impostazioni
  dell'account (menu sul tuo nome → Abbonamento, sul telefono Altro → Abbonamento), con
  qualunque ruolo, anche dopo aver passato la proprietà di uno studio. Lì ci sono piano, prova,
  scelta del piano e gestione del pagamento.
- Nelle impostazioni dello studio, per proprietario e amministratori, "Piano dello studio": il
  piano del titolare che vale per lo studio, l'uso rispetto ai limiti e cosa è in sola lettura.
  Il proprietario ha il link al proprio abbonamento, gli amministratori il nome del titolare da
  contattare (anche nei report non compresi nel piano).

## [0.8.4] - 2026-10-02

### Novità
- Guida rapida al primo ingresso in agenda (anche subito dopo aver creato lo studio): quattro
  passi che evidenziano l'agenda e il menu delle viste, come creare un appuntamento (con clic o
  doppio clic, secondo la preferenza) e un nuovo paziente al volo, dove si attivano i promemoria
  e cosa c'è nelle impostazioni. "Avanti", "Indietro", "Salta" (anche con Esc) e "Fatto"; si usa
  anche da tastiera. Sul telefono sono tre schermate a schermo intero. Si vede una volta per
  computer; si può rivedere da Impostazioni → Applicazione → «Rivedi la guida rapida».

## [0.8.3] - 2026-10-02

### Novità
- Il proprietario può passare la proprietà dello studio a un altro membro (Impostazioni →
  Membri → "Trasferisci proprietà…"), che deve aver confermato l'email. Prima di confermare con
  la password si vede cosa succede: il nuovo proprietario e il suo piano, che da allora vale per
  lo studio, ciò che il suo piano non copre e le funzioni che si perdono. Chi passa lo studio
  resta come amministratore e l'abbonamento resta a chi lo paga. Entrambi ricevono un'email.
- Per eliminare il tuo account, gli studi di cui sei proprietario si sistemano direttamente da
  "Elimina account": per ognuno "Trasferisci" a un altro membro oppure "Elimina".

## [0.8.2] - 2026-10-02

### Novità
- Nella barra della lista d'attesa dell'agenda c'è "Aggiungi": si sceglie il paziente (o lo si
  crea al volo) e si indicano tipo, durata, operatore preferito, priorità e preferenze. Ogni voce
  ha anche "Rimuovi", che toglie il paziente dalla lista dopo una conferma.

## [0.8.1] - 2026-10-02

### Modifiche
- Su telefoni, tablet e schermi touch gli appuntamenti non si spostano più trascinandoli col
  dito, così scorrendo l'agenda non se ne sposta uno per sbaglio: un tocco apre l'appuntamento,
  e per cambiargli orario c'è "Sposta…". Col mouse si trascina come prima.

## [0.8.0] - 2026-10-02

### Novità
- Nuova pagina Report nel menu principale, per il proprietario e gli amministratori, nei piani
  che comprendono i report (negli altri un'anteprima con il rimando all'abbonamento). Si sceglie
  il periodo (settimana, mese, trimestre, anno o date a piacere) e si vedono:
  - occupazione degli operatori e delle stanze, cioè le ore prenotate su quelle disponibili
    secondo orari, chiusure, ferie e festività;
  - appuntamenti per stato e tasso di no-show;
  - appuntamenti per tipo e nuovi pazienti per mese;
  - promemoria inviati per canale, con quanti appuntamenti risultano poi confermati;
  - lista d'attesa (voci inserite, prenotate, attesa media);
  - andamento settimanale dell'anno.

  Ogni riquadro confronta il numero con il periodo precedente; un clic apre il dettaglio per
  operatore, stanza, tipo o canale. "Esporta CSV" salva il report nella cartella Download (si
  apre con Excel), "Stampa" lo stampa su fogli A4.

### Modifiche
- Sulle nuove postazioni il nuovo appuntamento si crea con il doppio clic: il clic singolo
  evidenzia lo slot o seleziona l'appuntamento. Si può tornare al clic singolo da Impostazioni →
  Applicazione.

## [0.7.0] - 2026-10-02

### Novità
- Enident Planner si usa anche dal telefono, nel browser su app.enident.it:
  - navigazione in basso con Agenda, Pazienti, Comunicazioni e Altro;
  - agenda di un giorno per l'operatore scelto, e si cambia giorno con le frecce o scorrendo col
    dito; note del giorno, dettaglio e cambio di stato a tutto schermo;
  - per creare un appuntamento si tocca uno spazio libero o "+ Nuovo"; per spostarlo, "Sposta…"
    nel dettaglio con giorno e ora;
  - ricerca e scheda dei pazienti, comunicazioni e lista d'attesa (in sola lettura).

  Le viste con più operatori, la stampa e le impostazioni dello studio restano nell'app desktop.
- I link delle email (conferma dell'indirizzo, nuova password, inviti) hanno anche "Apri nella
  versione web", per completarli dal telefono senza l'app desktop.
- Preparazione di una versione web di Enident Planner, da usare nel browser e da installare
  come app a schermo intero. Per ora nell'app desktop non cambia nulla.

## [0.6.2] - 2026-10-02

### Novità
- Nel dettaglio di un appuntamento il nome del paziente porta alla sua scheda. Se nel dettaglio
  ci sono modifiche non salvate, prima chiede se lasciarle.

## [0.6.1] - 2026-10-01

### Novità
- Relazioni tra pazienti: nella scheda del paziente il riquadro "Relazioni" collega altri
  pazienti, per esempio "Genitore di Rossi Luca". Basta impostarla una volta: nella scheda
  dell'altro paziente compare da sola dall'altro lato ("Figlio/a di …"). Il nome dell'altro
  paziente porta alla sua scheda.
  - I tipi di relazione si gestiscono in Impostazioni → Relazioni. Ognuno ha due nomi, uno per
    lato; per le relazioni uguali dai due lati, come Coniuge, i nomi coincidono. Si parte da
    quelle familiari: Genitore/Figlio/a, Coniuge, Partner, Fratello/Sorella, Nonno/a/Nipote,
    Zio/a/Nipote, Cugino/a, Tutore legale/Persona tutelata.
  - Nello storico degli appuntamenti della scheda, l'interruttore "Anche i pazienti collegati"
    mostra insieme gli appuntamenti dei pazienti in relazione, con il loro nome e la relazione.
- Il pulsante "Nuovo blocco" sopra l'agenda non c'è più: un blocco si crea da uno spazio libero,
  scegliendo "Blocco" in cima alla finestra che si apre o con "Nuovo blocco qui" nel menu del
  clic destro. Nel modulo del blocco si possono comunque cambiare giorni, orari, operatore,
  stanza o scegliere tutto lo studio.
- Fino a 3 numeri di telefono per paziente, ognuno con una nota accanto per dire di chi è (per
  esempio "madre" o "marito"). Uno solo è il preferito, quello a cui partono i promemoria
  automatici. La ricerca dei pazienti trova anche gli altri numeri. Creando un paziente al volo
  dal modulo dell'appuntamento resta un solo telefono, con il campo "Note tel." accanto; gli
  altri numeri si aggiungono aprendo gli altri dati.
- Gli appuntamenti annullati restano visibili in agenda come traccia tratteggiata e barrata,
  senza occupare l'orario: lo spazio resta libero e un clic lì crea un nuovo appuntamento come
  prima. L'etichetta "Annullato" (o "Spostato", se è già stato riprogrammato) sulla traccia apre
  l'annullato, e con il clic destro il suo menu. Se nello stesso orario c'è ora un altro
  appuntamento, un'icona a forma di orologio con la freccia all'indietro su quell'appuntamento
  dice che prima c'era un annullato (con il numero, se sono più d'uno) e apre lo stesso menu:
  Apri, Riprogramma…, Taglia.
- Un appuntamento annullato o non presentato si può riprogrammare in un altro giorno:
  - con "Riprogramma…" dal dettaglio o dal menu del clic destro: si apre il modulo già compilato
    con paziente, tipo, durata, operatore, stanza e note, e basta scegliere il nuovo orario;
  - oppure con Taglia (Ctrl+X) e poi Incolla (Ctrl+V o clic destro) su uno spazio libero, anche
    in un'altra pagina dell'agenda.

  L'annullato resta nello storico, collegato al nuovo: in agenda mostra "Spostato al …" e nel
  dettaglio di entrambi c'è il collegamento all'altro.

## [0.6.0] - 2026-10-01

### Novità
- Dimensione del testo in Impostazioni → Applicazione, per ogni computer: Normale, Grande
  (112%) o Molto grande (125%). Ingrandisce tutta l'app insieme, e in agenda le righe si
  alzano con il testo, così paziente e note restano leggibili. La stampa ha una sua opzione,
  separata.
- La data nella barra dell'agenda si può cliccare (o premere D): si apre un piccolo calendario
  del mese, con i giorni chiusi e le festività in grigio e oggi segnato. Si sfogliano i mesi e
  un clic porta l'agenda al giorno scelto, nella vista attuale.
- "Esci" non è più nell'intestazione: si trova nel menu dell'account (sul tuo nome) e chiede
  conferma.
- Sicurezza della postazione, in Impostazioni → Applicazione, scelta computer per computer:
  - **Accesso automatico all'avvio:** disattivato, l'app chiede la password a ogni apertura e
    propone l'email già compilata.
  - **Richiedi di nuovo l'accesso dopo:** 1, 7 o 30 giorni dall'ultimo accesso con password.
  - **Blocca dopo inattività:** dopo 5, 15, 30 o 60 minuti senza mouse né tastiera, anche con
    l'app ridotta a icona, l'agenda si nasconde dietro una schermata di blocco. Per riprendere
    da dove eri basta la password, senza perdere le modifiche in corso; da lì si può anche
    uscire dall'account.
- Il titolare può fissare queste regole per i computer di tutti i membri dello studio, in
  Impostazioni → Studio → Sicurezza: per esempio il blocco al massimo dopo 15 minuti. Ogni
  postazione può scegliere valori più severi, non meno.
- Dopo 5 password sbagliate in 15 minuti, nell'accesso o nello sblocco, bisogna aspettare
  qualche minuto prima di riprovare.

## [0.5.0] - 2026-10-01

### Novità
- In agenda la selezione è una sola: scegliere uno spazio libero toglie la selezione
  dall'appuntamento o dal blocco, e viceversa. Esc o un clic su un'area vuota fuori
  dall'agenda tolgono ogni selezione. Ctrl+C, Ctrl+X e Ctrl+V agiscono sull'elemento
  selezionato.
- Copia, Taglia e Incolla valgono anche per i blocchi (dal menu del clic destro o con Ctrl+C e
  Ctrl+X): incollato in uno spazio libero, il blocco mantiene durata, tipo e motivo e prende
  l'operatore o la stanza della colonna in cui lo metti. Se copre appuntamenti già fissati,
  l'app lo dice e propone "Forza comunque". Le chiusure e le assenze di giornate intere si
  gestiscono dal calendario delle chiusure e non si copiano.
- Note del giorno: promemoria interni dello studio legati a una data, per esempio "chiamare il
  laboratorio" o "alle 15 arriva il tecnico". Nelle viste di un giorno e nella settimanale
  compaiono in una fascia gialla sotto l'intestazione dell'agenda, ordinate per ora, con chi le
  ha scritte.
  - Una casella segna la nota come fatta: resta visibile, barrata, fino a fine giornata.
    Chiunque nello studio può segnarla, anche gli operatori.
  - Una nota non fatta si ripropone da sola nei giorni successivi, con l'indicazione del giorno da
    cui arriva, finché non viene fatta o eliminata.
  - Si aggiungono con "+ Nota" nella fascia o con "Nuova nota del giorno" nel menu del clic
    destro su uno spazio libero, con l'ora già compilata. Cliccando il testo si modificano o si
    eliminano.
  - Nella vista mensile un pallino giallo segna i giorni con note da fare.
  - All'apertura dell'app le note di oggi ancora da fare compaiono in una finestra, da cui si
    possono anche segnare come fatte.
  - La stampa dell'agenda le riporta in cima alla pagina.
- I blocchi dell'agenda si usano come gli appuntamenti: con la preferenza "doppio clic" il clic
  singolo li seleziona e il doppio clic li apre, con "clic singolo" un clic li apre; il clic
  destro apre un menu con Apri ed Elimina.
- La selezione ora si vede bene: appuntamenti, blocchi e lo spazio scelto con il clic singolo
  hanno un bordo arancione spesso con un leggero alone, visibile su qualunque colore e anche con
  il contrasto alto (prima il bordo diventava bianco e si confondeva con lo sfondo).
- Il dettaglio di un appuntamento si apre già pronto da modificare, senza il pulsante
  "Modifica": "Salva" si accende solo quando qualcosa è cambiato, e chiudendo con modifiche non
  salvate l'app chiede conferma. Stato, promemoria ed eliminazione restano nella stessa finestra.
  Chi non può modificare gli appuntamenti vede i campi in sola lettura.
- Con la preferenza "doppio clic", anche sugli appuntamenti il clic singolo li seleziona soltanto
  e il doppio clic li apre; il clic destro apre sempre il menu.
- La finestra che si apre da uno spazio libero dell'agenda ha in alto la scelta "Appuntamento /
  Blocco": con Blocco si crea subito un blocco con operatore o stanza della colonna e l'orario
  scelto. Il pulsante "Nuovo blocco" sopra l'agenda resta.
- Impostazioni → Applicazione: "Stampa in bianco e nero" non esce più dal riquadro, e "Novità
  delle versioni" è accanto a "Controlla aggiornamenti".
- A partire da 1024 px di larghezza le Impostazioni non scorrono più in orizzontale: le schede
  vanno a capo e, nell'intestazione, i nomi lunghi dello studio e dell'account si accorciano.
- Stampa dell'agenda più compatta e leggibile: studio e data sullo stesso rigo; le fasce in cui
  nessun operatore è disponibile (pausa, chiusura, blocchi per tutti) diventano una riga sottile
  con l'orario, per esempio "13:00–14:30 pausa", e le ore prima dell'apertura e dopo la
  chiusura non si stampano. Lo spazio recuperato ingrandisce il testo degli appuntamenti,
  sempre in una pagina quando possibile. Nei riquadri: orario, paziente e note, senza il tipo.
- Stampa dell'agenda del giorno: pulsante "Stampa" nell'agenda (o Ctrl+P). Si apre
  un'anteprima in cui scegliere gli operatori (tutti o uno), l'orientamento, se includere note e
  blocchi, la dimensione del testo e il bianco e nero; gli operatori assenti o che non lavorano
  quel giorno sono esclusi. Una pagina A4 quando la giornata ci sta, altrimenti prosegue sulle
  seguenti. In Impostazioni → Applicazione si può scegliere di stampare sempre in bianco e nero.

## [0.4.5] - 2026-09-30

### Novità
- L'icona dell'app compare in alto a sinistra, accanto a "Enident Planner", e il suo disegno è
  più grande dentro il riquadro arancione (anche nell'icona dell'app e dell'installer).
- La finestra si riapre nella posizione e con la dimensione che aveva alla chiusura (anche
  massimizzata).
- In produzione l'intestazione non mostra più l'etichetta dell'ambiente; negli ambienti di prova
  c'è un'etichetta ben visibile ("Ambiente di prova: staging", "Sviluppo"), di un colore diverso
  da quello dell'app, per non confonderli con l'uso reale.

## [0.4.4] - 2026-09-30

### Novità
- Le zone chiuse, fuori orario e bloccate dell'agenda sono più scure, e in Impostazioni →
  Applicazione c'è "Contrasto dell'agenda: Alto" per gli schermi su cui i grigi chiari si
  confondono con il bianco.
- Ogni appuntamento in agenda ha una piccola icona dello stato, accanto a quella del promemoria:
  prenotato, confermato, arrivato o in corso (completati e non presentati restano sbiaditi).
- Clic destro su un appuntamento in agenda: aprirlo, cambiarne lo stato (solo i passaggi
  ammessi; "Annulla appuntamento" chiede il motivo, "Non presentato" compare solo dopo l'orario
  di inizio), copiarlo o tagliarlo, inviare il promemoria o eliminarlo.
- Copia, Taglia e Incolla degli appuntamenti: copia o taglia un appuntamento (anche con Ctrl+C
  e Ctrl+X) e incollalo in un altro orario, giorno o colonna con il clic destro sullo slot o con
  Ctrl+V. Con Copia se ne crea uno nuovo con lo stesso paziente, tipo, note e durata; con Taglia
  l'originale si sposta. Esc svuota gli appunti.

## [0.4.3] - 2026-09-30

### Novità
- Se la versione installata non è più compatibile con il server, l'app lo dice subito con la
  schermata "Aggiornamento necessario" e si aggiorna con un clic.

## [0.4.2] - 2026-09-30

### Novità
- I testi dei promemoria diventano template con un nome, in Impostazioni → Promemoria: ogni
  studio parte con "Promemoria standard" e "Richiesta di conferma", e se ne possono aggiungere
  altri. Ogni regola sceglie quale template usare; i testi che avevi scritto nelle regole sono
  diventati template.
- Una regola può partire anche un certo giorno a un'ora precisa: il giorno dell'appuntamento,
  il giorno prima o fino a 7 giorni prima, per esempio "2 giorni prima alle 10:00".
- "Invia ora" nel dettaglio dell'appuntamento apre una finestra: scegli il template e il canale
  (tra quelli che il paziente può ricevere, partendo dal suo preferito) e rivedi il testo prima
  di inviarlo, modificandolo se serve.
- Nelle viste giornaliere dell'agenda, "Promemoria del giorno" invia il promemoria a tutti i
  pazienti della giornata insieme; puoi togliere chi non vuoi avvisare. Chi l'ha già ricevuto
  parte escluso.
- Lo storico dei messaggi del paziente e la pagina Comunicazioni mostrano il testo dei
  promemoria inviati.

## [0.4.1] - 2026-09-30

### Novità
- In Impostazioni → Studio si compilano anche telefono, email e partita IVA dello studio. Il
  telefono si salva nel formato internazionale, come quello dei pazienti.
- Nei testi dei promemoria ci sono i nuovi segnaposto {indirizzo_studio} ed {email_studio}, oltre a
  {telefono_studio}. Se un segnaposto usato è vuoto nello studio, l'anteprima e la regola salvata lo
  segnalano, con il link per compilarlo.
- Le email di promemoria ai pazienti riportano in fondo nome, indirizzo e telefono dello studio.

## [0.4.0] - 2026-09-30

### Novità
- L'app si collega al server di produzione di Enident.
- Gli errori imprevisti dell'app vengono segnalati in automatico agli sviluppatori, senza dati dei
  pazienti né degli account (niente nomi, email, telefoni o note).

## [0.3.6] - 2026-09-30

### Novità
- Con il nuovo appuntamento a doppio clic, si può anche premere su un orario libero e trascinare
  in basso: il riquadro evidenziato mostra orario e durata, e al rilascio si apre il nuovo
  appuntamento con quella durata (scegliere il tipo non la cambia). Esc annulla.
- Le viste dell'agenda si scelgono da un menu a tendina compatto, che mostra la vista attuale
  e, aperto, tutte le viste con la loro scorciatoia (G, O, S, M restano). Il selettore
  dell'operatore compare solo nelle viste di un operatore.
- Nel modulo dell'appuntamento, scegliendo il tipo il suo nome va all'inizio delle note
  ("Igiene - portare le lastre"); cambiando tipo il nome si sostituisce, senza doppioni. Le note
  restano modificabili a mano.
- In agenda, sotto il nome del paziente, compare la prima riga delle note (il testo intero
  passandoci sopra con il mouse).
- In Impostazioni → Applicazione si sceglie da cosa prendono il colore gli appuntamenti in
  agenda: dal tipo (come finora), dall'operatore o dalla stanza. Vale per questa postazione.
- In agenda una linea rossa segna l'ora attuale (a scatti di 5 minuti), con l'orario accanto:
  nelle viste di oggi e, nella settimanale, nella colonna di oggi. Aprendo l'agenda su oggi
  la griglia scorre da sola fino all'ora attuale.
- Nuova vista "Giorno · un operatore": un solo operatore a tutta larghezza, scelto accanto
  alle viste e ricordato su questa postazione; scorciatoia O.
- Tolta dall'agenda la scritta con il fuso orario: resta in Impostazioni → Studio.

## [0.3.5] - 2026-09-29

### Novità
- Nuova icona dell'app: una "C" che abbraccia un calendario, sull'arancione di Enident.

## [0.3.4] - 2026-09-29

### Novità
- Nuova pagina Comunicazioni nel menu: tutte le email, gli SMS e i WhatsApp dello studio e i
  promemoria non partiti, con i filtri per periodo, canale, esito, paziente e destinatario.
  In alto il riepilogo degli ultimi 7 giorni (inviati, falliti, saltati, in coda); ogni riga
  si apre con il motivo, l'errore del provider, lo stato di consegna e la risposta del
  paziente, con il link al paziente e all'appuntamento.
- "Riprova" rimette in coda un messaggio fallito o un promemoria saltato quando il problema è
  stato risolto (recapito aggiunto, SMS e WhatsApp configurati, piano adeguato), anche per
  tutti i falliti del periodo insieme. Gli esiti si aggiornano da soli.
- Nel menu, accanto a Comunicazioni, il numero di messaggi falliti o saltati degli ultimi 7
  giorni non ancora visti su questa postazione.
- Nuova scelta del colore di operatori, stanze e tipi di appuntamento: una tavolozza di 12
  colori ben distinguibili e leggibili, più "Personalizzato". Alla creazione è già scelto il
  primo colore non ancora usato, così il colore mostrato è quello che viene salvato; chi non
  aveva un colore ne ha ricevuto uno della tavolozza.
- In agenda il testo sugli appuntamenti è scuro o bianco secondo il colore del tipo, scegliendo
  sempre il più leggibile.
- Nuova guida in Impostazioni → SMS e WhatsApp, in sette passi per la Console di Twilio
  attuale: attivazione dell'account, verifica dell'identità nel Trust Hub, credenziali,
  mittente SMS, WhatsApp di prova e definitivo, template del promemoria. Per ogni passo il
  nome della pagina da cercare, il link diretto e il tempo previsto; in più un riquadro con
  gli errori più comuni (20003, 21211, 63016) e cosa fare.
- Il nome del mittente SMS non può più contenere spazi, come richiede Twilio.
- Un account senza studi vede la schermata "Nessuno studio" con due scelte: creare il proprio
  studio o aprire le impostazioni dell'account (account, abbonamento, applicazione ed
  eliminazione dell'account), senza aprire subito la configurazione dello studio.
- Nell'intestazione il nome dell'account apre un menu con le impostazioni dell'account e
  "Esci", presente anche durante la configurazione del primo studio.

## [0.3.3] - 2026-09-29

### Novità
- "Zona pericolosa" in fondo a Impostazioni → Studio, per il proprietario: "Elimina studio"
  con una conferma in due passi in cui si scrive il nome dello studio. I dati restano
  conservati, i membri perdono l'accesso e lista d'attesa e promemoria pianificati vengono
  annullati; poi si torna alla scelta dello studio.
- In "Elimina account" compaiono gli studi di cui sei proprietario, con il link diretto alle
  loro impostazioni per eliminarli prima.

### Correzioni
- Eliminando uno studio i promemoria già pianificati non partono più e il worker non ne
  pianifica di nuovi.

## [0.3.2] - 2026-09-29

### Novità
- Eliminazione dell'account (GDPR) da Impostazioni → Account, con una conferma in due passi:
  esci da tutti gli studi e nome ed email vengono cancellati. Non è possibile finché sei
  proprietario di uno studio o hai un abbonamento attivo, e l'app spiega cosa fare.
- Cancellazione definitiva di un paziente (GDPR), per il titolare dello studio: anagrafica,
  recapiti, note e messaggi vengono cancellati per sempre, mentre gli appuntamenti restano
  come "Paziente rimosso" per le statistiche.
- Esportazione dei dati dello studio da Impostazioni → Studio: un archivio ZIP con pazienti,
  appuntamenti, operatori, stanze e messaggi in CSV, con il link per scaricarlo inviato per
  email e valido 48 ore.
- Guida di Impostazioni → SMS e WhatsApp riscritta per la nuova Console di Twilio: per ogni
  passo il nome della pagina da cercare (con "Copia"), il link diretto da aprire nel browser e
  gli indirizzi da incollare, con le istruzioni distinte tra account in prova (numeri
  verificati, "Try WhatsApp") e account attivo (mittente registrato, WhatsApp Senders).

## [0.3.1] - 2026-09-29

### Novità
- Prova gratuita: chi si registra ha 14 giorni del piano Studio, con i giorni rimanenti in cima
  all'app e in Impostazioni → Abbonamento e un'email tre giorni prima della fine. Alla fine
  l'account passa al piano gratuito senza perdere dati.
- Piani aggiornati: il gratuito comprende 1 studio, 1 operatore, 1 stanza e 2 membri per
  studio (inviti compresi), senza SMS e WhatsApp; i piani Studio e Multi studio comprendono
  anche SMS, WhatsApp e report, senza più un limite di messaggi al mese. La tabella dei piani
  mostra tutte le voci con l'uso attuale.
- Studi e operatori oltre i limiti del piano sono indicati come "sola lettura" in agenda e
  nelle impostazioni, con la spiegazione di cosa fare per tornare a modificarli.
- Abbonamenti: in Impostazioni → Abbonamento (solo per il titolare) i tre piani con prezzi,
  uso e limiti. "Passa a questo piano" apre il pagamento sicuro di Stripe nel browser e l'app
  si aggiorna da sola appena il pagamento è confermato; "Gestisci abbonamento" apre il
  portale di Stripe per carta, fatture, cambio di piano e disdetta.
- Se il pagamento del rinnovo non riesce il piano resta attivo per 15 giorni, con un avviso in
  cima all'app. Tornando al piano gratuito non si perde nulla: gli studi e gli operatori oltre
  i limiti restano consultabili, in sola lettura.

## [0.3.0] - 2026-09-28

### Novità
- Promemoria degli appuntamenti: in Impostazioni → Promemoria si sceglie quante ore prima e
  su quale canale avvisare i pazienti (email, SMS, WhatsApp o il loro canale preferito), con
  i testi personalizzabili e l'anteprima su un appuntamento vero.
- Nel dettaglio dell'appuntamento lo stato dei promemoria e "Invia ora"; in agenda una
  campanella sugli appuntamenti già avvisati; nella scheda del paziente i messaggi inviati.
- Le email (conferma dell'indirizzo, nuova password, inviti) non si perdono più se il server
  si riavvia mentre le sta inviando.
- SMS e WhatsApp con l'account Twilio dello studio: in Impostazioni → SMS e WhatsApp una guida
  passo passo (account, mittente SMS, numero WhatsApp, template del promemoria da far
  approvare), le credenziali, la verifica e i messaggi di prova. Con un account proprio i
  messaggi non contano nel limite del piano.
- I pazienti possono rispondere al promemoria: SI conferma l'appuntamento, NO lo segna da
  richiamare, con un'evidenza rossa in agenda e il pulsante "Richiamato" nel dettaglio. Le
  risposte e lo stato di consegna (consegnato, letto, non consegnato) sono nei messaggi del
  paziente.

## [0.2.1] - 2026-09-28

### Novità
- Il clic che riporta Enident Planner in primo piano non crea più appuntamenti, non apre
  menu e non sposta nulla in agenda per sbaglio.
- Nuova preferenza in Impostazioni → Applicazione: nuovo appuntamento con clic singolo
  oppure con doppio clic (il clic singolo allora evidenzia soltanto lo slot).

## [0.2.0] - 2026-09-28

### Novità
- Aggiornamento in tempo reale: quello che si modifica su un computer compare subito sugli
  altri, senza aspettare. Un pallino in alto a destra indica se il collegamento è attivo.
- Avviso quando l'appuntamento che stai guardando o modificando viene cambiato da un'altra
  postazione.
- Registrazione dall'app, con i requisiti della password e il consenso a termini e privacy.
- I link delle email (conferma dell'indirizzo, nuova password, invito) aprono direttamente
  l'app sulla pagina giusta; se il link non si apre si può incollare il codice.
- Password dimenticata e cambio password da Impostazioni → Account, con l'uscita da tutte
  le postazioni.
- Avviso finché l'indirizzo email non è confermato, con "Reinvia email".
- Impostazioni → Membri: inviti con il ruolo, inviti in sospeso da revocare o reinviare,
  cambio di ruolo e rimozione dei membri.
- Un invito si accetta dal link anche senza account: si crea lì, con l'email già confermata.
- Nuovi colori con l'arancione del marchio Enident, lo stesso di Enident Mobile: intestazione,
  pulsanti, link, selezioni e giorno corrente in agenda. Testi sempre ben leggibili, e nuova
  icona dell'app.
- I link delle email funzionano con tutti i programmi di posta: aprono una pagina web che
  avvia Enident Planner, mostra il codice da incollare e il link per scaricare l'app.
- «Hai un codice dall'email?» nella schermata di accesso, per incollare il codice quando il
  link non apre l'app.

## [0.1.2] - 2026-09-28

### Novità
- Calendario annuale delle chiusure dello studio e delle assenze di ogni operatore: i 12
  mesi a colpo d'occhio, con un clic si chiude o si riapre un giorno e con Maiusc+clic un
  intervallo; le modifiche si salvano tutte insieme.
- Pagina Novità: la versione installata è in evidenza e ogni versione mostra la data di
  rilascio.

## [0.1.0] - 2026-09-28

### Novità
- Agenda a colonne per operatori o per stanze, vista settimanale per operatore e vista
  mensile con il numero di appuntamenti di ogni giorno.
- Appuntamenti creati con un clic su uno slot libero, spostati trascinandoli (anche su un
  altro operatore, stanza o giorno) e ridimensionati dal bordo inferiore.
- Conflitti chiari: l'agenda dice chi o cosa è già occupato e, quando si può, propone di
  forzare.
- Stati dell'appuntamento (confermato, arrivato, in corso, completato, annullato, non
  presentato), con i candidati della lista d'attesa quando si libera uno slot.
- Lista d'attesa a lato dell'agenda: si prenota trascinando il paziente su uno slot libero.
- Blocchi di agenda, chiusure dello studio e assenze degli operatori (ferie, malattia,
  formazione), con le festività nazionali già considerate chiuse.
- Orari di lavoro per ogni operatore, evidenziati nelle sue colonne.
- Pagina Pazienti: ricerca per nome, telefono, email o codice fiscale, scheda con anagrafica,
  consenso privacy e storico degli appuntamenti.
- Accesso che resta attivo alla riapertura dell'app, anche dopo il riavvio del computer.
- Aggiornamenti automatici: l'app avvisa quando c'è una nuova versione e la installa.
`,u=e(),d=o(l),f=d.find(e=>e.versione===a);function p(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`it-IT`,{day:`numeric`,month:`long`,year:`numeric`})}function m(){let{studioId:e=``}=t();return(0,u.jsx)(`div`,{className:`h-full overflow-y-auto`,children:(0,u.jsxs)(`div`,{className:`mx-auto flex max-w-3xl flex-col gap-6 p-6`,children:[(0,u.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,u.jsx)(`h1`,{className:`text-lg font-semibold text-slate-900`,children:c(`novita.titolo`)}),(0,u.jsx)(s,{to:e?`/studi/${e}/impostazioni?sezione=applicazione`:`/account?sezione=applicazione`,className:`ml-auto text-sm text-brand-700 hover:underline`,children:c(`novita.torna`)})]}),(0,u.jsxs)(`div`,{className:`rounded-lg border border-brand-200 bg-brand-50 p-5`,children:[(0,u.jsx)(`p`,{className:`text-xs font-medium uppercase tracking-wide text-brand-700`,children:c(`novita.in_uso`)}),(0,u.jsx)(`p`,{className:`mt-1 text-2xl font-semibold text-slate-900`,children:c(`novita.versione`,{versione:a})}),(0,u.jsx)(`p`,{className:`mt-0.5 text-sm text-slate-700`,children:f?.data?c(`novita.rilasciata_il`,{data:p(f.data)}):c(`novita.non_pubblicata`)})]}),(0,u.jsx)(r,{className:`p-6`,children:(0,u.jsx)(n,{mostraVersione:!1})}),d.length===0&&(0,u.jsx)(`p`,{className:`text-sm text-slate-500`,children:c(`novita.nessuna`)}),d.map(e=>{let t=e.versione===a;return(0,u.jsxs)(r,{className:`p-6 ${t?`ring-2 ring-brand-600`:``}`,children:[(0,u.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,u.jsx)(`h2`,{className:`text-base font-semibold text-slate-900`,children:c(`novita.versione`,{versione:e.versione})}),t&&(0,u.jsx)(`span`,{className:`rounded-full bg-brand-700 px-2.5 py-0.5 text-xs font-medium text-white`,children:c(`novita.installata`)}),(0,u.jsx)(`span`,{className:`basis-full text-sm text-slate-600`,children:e.data?c(`novita.rilasciata_il`,{data:p(e.data)}):c(`novita.senza_data`)})]}),(0,u.jsx)(i,{versione:e})]},e.versione)})]})})}export{m as Novita};