


// ?Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.


var studente = {

    nome: 'Danilo',
    cognome: 'D\'Alessandro',
    eta : 30

};


//? Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for( var key in studente){
    console.log(studente[key]);

}


//? Creare un array di oggetti di studenti.

var studenti = [
    {
        nome: 'Rodrigo',
        cognome: 'Sanchez',
        eta: 33
    },

    {
        nome: 'John',
        cognome: 'Espinas',
        eta: 31

    },

    {
        nome: 'Karl',
        cognome: 'Schneider',
        eta: 38

    }
];

//? Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for(var i = 0; i < studenti.length; i++){
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);

}


//? Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


var newStudente = {

    nome: prompt('Inserisci il nome'),
    cognome: prompt('Inserisci il cognome'),
    eta: prompt('Inserisci l\'eta')

}


studenti.push(newStudente);

for(var i = 0; i < studenti.length; i++){
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);

}