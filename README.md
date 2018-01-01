# DrawTheTree

> This is the tree you can get.

![Image text](https://raw.githubusercontent.com/YingjieMA/image/master/DrawTheTree/tree-5.png)

## Why you can draw a tree

### L-system
> An L-system or Lindenmayer system is a parallel rewriting system and a type of formal grammar. An L-system consists of an alphabet of symbols that can be used to make strings, a collection of production rules that expand each symbol into some larger string of symbols, an initial "axiom" string from which to begin construction, and a mechanism for translating the generated strings into geometric structures. L-systems were introduced and developed in 1968 by Aristid Lindenmayer, a Hungarian theoretical biologist and botanist at the University of Utrecht. Lindenmayer used L-systems to describe the behaviour of plant cells and to model the growth processes of plant development. L-systems have also been used to model the morphology of a variety of organisms and can be used to generate self-similar fractals such as iterated function systems.

### Example

>Lindenmayer's original L-system for modelling the growth of **algae**.

**variables** : A B
**constants** : none
**axiom**  : A
**rules**  : (A → AB), (B → A)
which produces:

n = 0 : A<br>
n = 1 : AB<br>
n = 2 : ABA<br>
n = 3 : ABAAB<br>
n = 4 : ABAABABA<br>
n = 5 : ABAABABAABAAB<br>
n = 6 : ABAABABAABAABABAABABA<br>
n = 7 : ABAABABAABAABABAABABAABAABABAABAAB

> Konw more about L-system. [L-system.wiki](https://en.wikipedia.org/wiki/L-system)

## Let the tree grow

> You can draw the tree bigger or smaller by change the Loop times in `setup{}`.
```javascript
	function setup(){
		createCanvas(600,600);
		background(0);
		angle = radians(25);
		for (var i = 1; i <= 5; i++) {
			generate();
		}
		drawTheTree();
	}
```
