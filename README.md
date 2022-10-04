# VUEJS_V

## Esercitazione 3: Vue-router

In questa esercitazione dovrete gestire una biblioteca.

La struttura delle pagine sarà la seguente:

-   Una pagina di ingresso per vedere la lista filtrabile dei libri disponibili nella biblioteca.
-   Selezionando un libro, tramite il suo codice, si andrà nella pagina di dettaglio dello stesso in cui vedremo la sinossi, le informazioni sul libro e 2 diverse sottosezioni alternabili (tramite bottone o tab): lo storico prestiti (default) e i commenti.
-   Si deve poter tornare alla lista tramite un apposito bottone.
-   Deve essere possibile inserire il path `/library/884590184X/comments` ed aprire "Siddharta" di Herman Hesse con la sottosezione commenti.
-   (Bonus) I minori di 14 anni non possono leggere o lasciare commenti, quindi cliccando sulla pagina vedranno un componente diverso (ParentalControl.vue). (Nel router troverete una variabile per cambiare l'età.)

L'elenco dei libri è disponibile nel file `assets/books.json`

Potete utilizzare qualsiasi stile, il css di bootstrap è già incluso nel progetto.

E' necessario utilizzare il router ma non le chiamate REST per questa esercitazione.
