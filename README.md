# DrawTheTree

![Image text](https://raw.githubusercontent.com/YingjieMA/image/master/DrawTheTree/tree-5.png)
> This is the tree you can get.

> You can set the tree bigger or smaller by change the Loop times in `setup{}`.
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
