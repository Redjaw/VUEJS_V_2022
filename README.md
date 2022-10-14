# VUEJS_V_2022

## Esercitazione Finale: Il tuo gestore di campagne di D&D

Attraverso l'utilizzo di tutte le cose che avete visto dovrete sviluppare un'applicazione per gestire il vostro personaggio di D&D, i combattimenti con i mostri ed il vostro libro degli incantesimi.

L'applicazione dovrà:

-   Mostrare una form di login che richieda nome del personaggio e password.
-   Una volta loggati mostrare una pagina iniziale con la visualizzazione della scheda del proprio personaggio, riportante nome, classe, caratteristiche, punti esperienza, livello e punti vita tramite i servizi `api/heroes - api/heroes?id=id`. I personaggi possono essere Ladri (rogue) o Maghi (wizard).
-   Se il personaggio è un mago devo mostrare un collegamento alla pagina del libro di incantesimi, `https://www.dnd5eapi.co/api/classes/wizard/levels/1/spells` se è un ladro invece no, ma attenzione: i ladri sono infidi e proveranno lo stesso a navigare nel libro di incantesimi. FERMATELI!
-   Tutti i personaggi possono combattere i mostri. Per decidere quale mostro lo potranno cercare in un campo di testo che, utilizzando il servizio `https://www.dnd5eapi.co/api/monster/:nomemostro` ritornerà i punti vita (hit_points), la classe armatura (armor_class) e i punti esperienza (xp). Se il mostro non esiste al giocatore verrà fornito un errore.
-   Una volta selezionato un mostro un bottone lancerà un dado da 20, se il valore sarà inferiore alla classe armatura il personaggio subirà un danno. Se invece supererà la classe armatura del mostro questo sarà sconfitto! I suoi punti experienza saranno aggiunti al giocatore e salvati tramite la put `api/heroes/:id/xp`, inviando gli XP guadagnati. Se i punti ferita del personaggio andranno a 0 il personaggio sarà morto e non potrà più combattere.
-   EXTRA: è presente un log per ogni personaggio e sarebbe bello mostrare contro che mostri ha combattuto e quanti xp ha guadagnato nella sua storia.
-   EXTRA: Siccome D&D è internazionale vogliamo che gli utenti di altri paesi possano cambiare lingua a loro piacimento.

Troverete il server nella cartella server, nella cartella assets una scheda vuota che potete usare come background per la vostra scheda o come ispirazione. Dovrete creare voi la struttura del progetto partendo da 0, ma come più vi aggrada ed usando gli strumenti che volete. In bocca al goblin!
