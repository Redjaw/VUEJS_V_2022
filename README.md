# VUEJS_V

## Esercitazione 4: Le chiamate REST e Axios

Attraverso l'utilizzo delle chiamate rest dovrete creare una dashboard per la visualizzazione grafica dell'andamento di due azioni.
Un server con relative API è già stato preparato e per lanciarlo è necessario nel terminale inserire il comando `node server`. (richiesta installazione di node.js)

La pagina è composta da 3 componenti:

-   Uno di visualizzazione del grafico, che utilizza i dati provenienti da `/api/stocks` per mostrare l'andamento di Acme Inc e Global Inc.
-   Uno di visualizzazione dell'elenco, che utilizza i dati provenienti da `/api/investors` per mostrare i maggiori investitori. Deve essere possibile filtrarli e richiedere l'elenco tramite il parametro `name`.
-   Una di aggiunta degli ultimi valori che tramite due input inserirà i valori come nuovi stock attraverso una chiamata in POST sempre ad `/api/stocks`. I valori devono esistere entrambi o non deve essere possibile inviare la chiamata.

Le chiamate:

-   Dovranno mostrare all'utente se sono andate in errore, possibilmente con una gestione unificata.
-   Se possibile non dovranno riportare l'intero path http://localhost, ma solo l'entry point.
-   BONUS: Se utilizzate le stesse chiamate con `/api/auth/` dovrete autenticarvi con l'header `authorization: Bearer xxxxx.yyyyy.zzzzz`. In tal caso se non viene trovato o è quello sbagliato ritornerà uno status 401. (da gestire, ovviamente :))

Potete utilizzare qualsiasi stile, il css di bootstrap è già incluso nel progetto.

ATTENZIONE: I dati del grafico non si aggiornano da soli...

Non è necessario utilizzare routing o store in questa esercitazione.
