/* Implementation of callcc (Smalltalk) */

Continuation.callcc = function(f) {
	return f(new Continuation());
}

/* Exemple 1 */

print("\n"+ "=== First Example ===" + "\n");

aux = 0;

var cont = Continuation.callcc(function(cc) {
	return cc;
});

if (aux < 10) {
	print("aux = " + aux);
	++aux;
	cont(cont);
} else {
	print("Counter finished!");
}

/* Exemple 2 */

print("\n"+ "=== Second Example ===" + "\n");

aux = 0;

var x = Continuation.callcc(function(cc) {
	cont = cc;
	return cc(true);
});

if(x) {
	print("Passa per aquí");
	x(false);
	print("No passa per aquí");
} else {
	print("Perquè torna a passar per l'if ?");
}

print("\n");
