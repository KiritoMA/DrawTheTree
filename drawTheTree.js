	var sentence = "F";
	var angle;
	var len =5;
	var wei =10;

	function generate(){
		var nextSentence = "";
		for (var i = 0;i < sentence.length; i++) {
			var ch = sentence.charAt(i);
			if (ch == "F") {
				nextSentence += "FF+[+F-F-F]-[-F+F+F]";
			} else {
				nextSentence += ch;
			}
		}
		sentence = nextSentence;
	}

	function drawTheTree(){
		translate(width *0.5,height);
		stroke(255);

		for (var i = 0; i < sentence.length; i++) {
			var ch = sentence.charAt(i);
			strokeWeight(wei);

			switch(ch) {
				case "F": line(0,0,0,-len);translate(0,-len);break;
				case "+": rotate(angle);break;
				case "-": rotate(-angle);break;
				case "[": push();wei *= 0.4;break;
				default: pop();wei /= 0.4;
			}
		}
	}

	function setup(){
		createCanvas(600,600);
		background(0);
// 		angle = 20*Math.PI/180;
		angle = radians(25);
		for (var i = 1; i <= 5; i++) {
			generate();
		}
		drawTheTree();
	}
