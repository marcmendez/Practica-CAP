# Practica CAP

This is a work related to the course of 'Advanced concepts of programming'. We will mainly deal with the topic of Continuations in Javascript and Smalltalk. You can find the information of the practical work proposed in the proposal1718 pdf. In detail, we were proposed two different exercises. 

A first exercise about implementing structures of Continuation type in Smalltalk and Javascript that simulate the behavior of functionalities of the opposite language. The proposal of this exercise are the following two implementations:

* Implement in Pharo a method that works exactly as the Continuation() one of Javascript.

* Implement in Javascript a callcc function that works as the callcc structure explained in Pharo.

The second exercise proposes the implementation in Javascript using prototypes and continuations of a cooperative multi-threading system. The exercise proposal includes the examples of the operation check.

## Getting Started

### Prerequisites

In order to execute this project you must have Java JRE installed, Nodejs , Rhino-1.7.7.2.jar downloaded for the javascript part of the project and Pharo for the Smalltalk part. The enviroment of Smalltalk must be the one we have prepared in class containing Continuation.

### Executing and testing

In order to test the project javascript part you just have to clone this repository and execute the desired code via java with the following command:

```
java -cp path/to/rhino-1.7.7.2.jar org.mozilla.javascript.tools.shell.Main -opt -2 name_of_the_code.js

```
If we want to try the project smalltalk part, it is necessary to import the .st to pharo in the continuation package and try it.

## Built With

* [Atom](https://atom.io/)
* [Rhino](https://www.google.es/search?q=rhino&oq=rhino&aqs=chrome..69i57j35i39l2j0l3.673j0j7&sourceid=chrome&ie=UTF-8)
* [Nodejs](https://nodejs.org/es/)
* [Pharo](https://pharo.org/)
* [Java](https://www.java.com/es/)

## Contributing

If you want to contribute to correct a mistake in the project or to add some information for the next students to have a better source of information. Send an email to:

* jordi.estape@est.fib.upc.edu
* marc.mendez.roca@est.fib.upc.edu

## Authors

* **Marc Méndez Roca** - *First exercise* - [marcmendez](https://github.com/marcmendez)
* **Jordi Estapé Canal** - *Second exercise* - [jordiestape](https://github.com/jordiestape)

See also the list of [contributors](https://github.com/cap-practica/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* We want to thank the oportunity and documentation given during this course because it was really extensive and comprehensible. That's the reason why we are uploading this documentation about project for future students to have an extra practical example in order try to ease the lecturer work.
