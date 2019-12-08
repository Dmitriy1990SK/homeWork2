// JavaScript Document

const valueInput = prompt('Enter your value');

let vocabulary = {
	A: 'Álfa' ,
	B: 'Brávo' ,
	C: 'Chárlie' ,
	D: 'Délta' ,
	E: 'Écho' ,
	F: 'Fóxtrot' ,
	G: 'Gólf' ,
	H: 'Hotél' ,
	I: 'Índia' ,
	J: 'Júliett' ,
	K: 'Kílo' ,
	L: 'Líma' ,
	M: 'Míke' ,
	N: 'Novémber' ,
	O: 'Óscar' ,
	P: 'Papá' ,
	Q: 'Quebéc' ,
	R: 'Rómeo' ,
	S: 'Siérra' ,
	T: 'Tángo' ,
	U: 'Úniform' ,
	V: 'Víctor' ,
	W: 'Whísky' ,
	X: 'X́ray' ,
	Y: 'Yánkee' ,
	Z: 'Zúlu' ,
	0: 'Nadazero' ,
	1: 'Unaone' ,
	2: 'Bissotwo' ,
	3: 'Terrathree' ,
	4: 'Kartefour' ,
	5: 'Pantafive' ,
	6: 'Soxisix' ,
	7: 'Setteseven' ,
	8: 'Oktoeight' ,
	9: 'Novenine' ,

};
let value = valueInput.split('');
let userValue = [vocabulary[value[0]],
	vocabulary[value[1]],
		vocabulary[value[2]],
		vocabulary[value[3]]
				 ];

	console.log(`${userValue[0]} ${userValue[1]} ${userValue[2]} ${userValue[3]}`);
console.log(value);
