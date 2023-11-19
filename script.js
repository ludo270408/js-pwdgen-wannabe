let nome = prompt('Inserisci il tuo nome: ');

let cognome = prompt('Inserisci il tuo cognome: ');

let colore_preferito = prompt('Inserisci il tuo colore preferito: ');

let password = 'Questa è la tua password: $(nome)$(cognome)$(colore_preferito)23 . attento a non fartela rubare ;)';

document.getElementById('subtitle').innerHTML = password;

console.log('password')