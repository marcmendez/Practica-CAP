# Practica CAP

quest és un treball en el qual es tractarà el temari après a l'assignatura 'Conceptes avançats de programació". Tractarem principalment el tema de les Continuacions en Javascript i Smalltalk. Per tal de fer-ho se'ns proposen dos exercissis diferents.

Un primer exercici basat en implementar estructures del tipus Continuacions tant en Smalltalk com en Javascript que simulin el comportament de funcionalitats del llenguatge oposat. La proposta són aquestes dues implementacions:

* Implementar en Pharo un mètode unari continuation tal que funcioni exactament igual que el Continuation() de Javascript.

* Implementar en Javascript una funció callcc(f) que funcioni com l'estructura callcc explicada a Pharo.

El segon exercici proposat és la implementació en Javascript mitjançant prototipus i continuacions d'un sistema de multi-threading cooperatiu. La proposta d'exercici porta inclòs dos exemples per a la comprovació de funcionament (testing).

## Getting Started

### Prerequisites

In order to execute this project you must have Java JRE installed, Nodejs , Rhino-1.7.7.2.jar downloaded for the javascript part of the project and Pharo for the Smalltalk part. The enviroment of Smalltalk must be the one we have prepared in class containing Continuation.

### Executing and testing

In order to test the project javascript part you just have to clone this repository and execute the desired code via java with the following command:

```
java -cp path/to/rhino-1.7.7.2.jar org.mozilla.javascript.tools.shell.Main -opt -2 name_of_the_code.js

```
If we want to try the project smalltalk part, it is necessary to import the .st to pharo in the continuation package and try it.
hed


## Built With

* [Atom](https://atom.io/)
* [Rhino](https://www.google.es/search?q=rhino&oq=rhino&aqs=chrome..69i57j35i39l2j0l3.673j0j7&sourceid=chrome&ie=UTF-8) 
* [Nodejs](https://nodejs.org/es/)
* [Pharo](https://pharo.org/)
* [Java](https://www.java.com/es/)

## Contributing

If you want to contribute to correct a mistake in the project or to add some information for the next students to have a better source of information. Send and email to: jordi.estape@est.fib.upc.edu or to marc.mendez.roca@est.fib.upc.edu

## Authors

* **Marc Méndez Roca** - *First exercise* - [marcmendez](https://github.com/marcmendez)
* **Jordi Estapé Canal** - *Second exercise* - [jordiestape](https://github.com/jordiestape)

See also the list of [contributors](https://github.com/cap-practica/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* We want to thank the oportunity and documentation given during this subject because it was really extensive and comprehensible.
