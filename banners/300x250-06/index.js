(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Group = function() {
	this.initialize(img.Group);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,75);


(lib.Group_2 = function() {
	this.initialize(img.Group_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,75);


(lib.brain = function() {
	this.initialize(img.brain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,600);


(lib.elementos = function() {
	this.initialize(img.elementos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.logos = function() {
	this.initialize(img.logos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-1.65,-194.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo20, new cjs.Rectangle(-83.3,-202.3,163.3,15.100000000000023), null);


(lib.Símbolo19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-1.125,-176.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo19, new cjs.Rectangle(-77.7,-183.6,153.2,15), null);


(lib.Símbolo18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-4.45,-178.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo18, new cjs.Rectangle(-105,-186.8,201.2,16), null);


(lib.Símbolo10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.elementos();
	this.instance.setTransform(-150,-300,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo10, new cjs.Rectangle(-150,-300,300,600), null);


(lib.Símbolo9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.brain();
	this.instance.setTransform(-230,-94,1.1111,1.1111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(-230,-94,444.5,666.7), null);


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ7CjQgkgXgSgqQgUgqAAg4QAAg3AUgqQATgpAkgYQAlgXAxAAQAmAAAhAPQAhAPAUAcQAWAdABAoIhcAAQgDgZgOgRQgOgPgYAAQgVAAgQANQgRANgKAaQgJAbAAAkQAAAnAJAZQAJAZAQAOQAQANAUAAQARAAANgGQAMgIAIgNQAIgMACgUIBcAAQgDAmgUAeQgTAeghAPQgfAQguAAQgxAAgjgXgAsdCjQgjgWgUgrQgTgqAAg4QAAg3ATgqQAUgpAkgYQAkgXAyAAQAnAAAgAPQAgAPAVAcQAVAdACAoIhdAAQgDgZgNgRQgPgPgXAAQgVAAgRANQgRANgJAaQgKAbAAAkQAAAlAKAbQAJAZAQAOQAQANATAAQARAAANgGQAMgHAJgOQAIgMABgUIBdAAQgEAngTAdQgUAeggAPQggAQguAAQgwAAgjgXgAyACpQgfgRgRgeQgRgfAAgqIBUAAQAAAhAOASQAOAQAdAAQAXAAAOgKQAOgJAAgTQAAgOgKgIQgKgIgRgGIglgKQgXgGgQgGQgUgHgRgMQgRgMgKgSQgKgTAAgdQAAgeARgZQARgZAegOQAegOAoAAQAjAAAhAOQAfAOAUAbQAUAbAAAnIhVAAQAAgRgJgMQgHgLgNgGQgMgFgNAAQgTAAgOAJQgNAIAAASQAAANAKAJQAKAGARAGIAkAJQARAEAXAIQATAHASANQAQAKAKAVQAKATAAAhQAAAggRAYQgTAZgeANQgfAOgpAAQgrAAghgRgAO1C0IAAlmIELAAIAABFIi2AAIAABFIB1AAIAABFIh1AAIAABSIC4AAIAABFgAF5C0Ihlj5IAHB+IAAB7IhQAAIAAlmIBsAAIBkD9IgFiCIAAh7IBQAAIAAFmgAiUC0IAAlmIEKAAIAABFIi1AAIAABFIB0AAIAABFIh0AAIAABSIC3AAIAABFgAntC0IAAhFIBSAAIAAjcIhSAAIAAhFID6AAIAABFIhTAAIAADcIBTAAIAABFg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(-121.7,-18.6,243.5,37.2), null);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Modo de aislamiento
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.4,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(-62.5,-14.3,124.3,37), null);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMaBOQgRgKgKgVQgJgTAAgcQAAgcAJgTQAKgUARgLQARgKAXAAQAXAAARAKQASALAIAUQAKATAAAcQAAAcgKATQgJAVgRAKQgSALgWAAQgWAAgSgLgAMxgxQgIAHgFAMQgEANAAARQAAASAEAMQAFANAIAGQAIAHAJAAQAJAAAIgHQAIgGAEgNQAFgMAAgSQAAgRgFgNQgEgMgIgHQgIgGgJAAQgJAAgIAGgAEoBOQgQgKgKgVQgKgTAAgcQAAgcAKgTQAKgVAQgKQASgKAWAAQAXAAARAKQARALAKAUQAJATAAAcQAAAcgJATQgKAVgRAKQgSALgWAAQgWAAgSgLgAE/gxQgIAHgEAMQgFANAAARQAAASAFAMQAEANAIAGQAJAHAIAAQAKAAAIgHQAHgGAFgNQAEgMAAgSQAAgRgEgNQgEgMgIgHQgIgGgKAAQgIAAgJAGgAjEBRQgPgIgIgPQgIgOAAgUIAoAAQAAAPAGAIQAIAJANAAQAMAAAGgFQAHgFAAgJQAAgHgFgDQgGgFgHgCQgGgCgMgDIgTgGQgJgCgIgHQgIgFgFgJQgFgJAAgOQAAgPAIgLQAIgLAPgIQANgGAUAAQASAAAPAGQAPAHAJANQAJANABATIgpAAQAAgJgEgFQgFgGgFgCQgFgDgHAAQgJAAgGAEQgHAFAAAIQAAAHAFADQAFAEAIACIAkAKQALAEAHAGQAJAFAEAJQAFAKAAAPQAAAPgJAMQgJAMgOAGQgQAHgTAAQgTAAgRgIgAoTBRQgQgIgIgPQgIgNAAgVIAAhuIAoAAIAABuQAAAKAEAHQAEAHAHAEQAGADAKAAQAJAAAHgDQAGgEAEgHQAEgHAAgKIAAhuIApAAIAABuQAAAUgJAOQgIAPgQAIQgRAIgVAAQgWAAgRgIgAqVBZQgVAAgRgLQgRgKgJgVQgJgTAAgcQAAgcAJgTQAJgUARgLQAQgKAWAAQAWAAAQAKQAQALAKAUQAJATAAAcQAAAMgDAMQgEAMgEAJQgFAKgHAHIASgGIAPgBIgHAigAqlgxQgHAIgEALQgDAMAAASQAAASADAMQAEAMAHAHQAIAHAIAAQAIAAAIgHQAHgGADgNQAEgLAAgTQAAgSgEgMQgEgMgGgHQgIgGgIAAQgIAAgIAGgAOnBWIAAisICCAAIAAAiIhZAAIAAAhIA6AAIAAAhIg6AAIAABIgAIGBWIgxh3IAEB3IgnAAIAAisIA0AAIAwB6IgCh6IAmAAIAACsgABuBWIAAghIAoAAIAAhpIgoAAIAAgiIB4AAIAAAiIgoAAIAABpIAoAAIAAAhgAgPBWIAAiKIgzAAIAAgiICNAAIAAAiIgyAAIAACKgAmFBWIAAisICAAAIAAAiIhXAAIAAAhIA4AAIAAAhIg4AAIAAAnIBYAAIAAAhgAu9BWIgIghIgzAAIgIAhIgoAAIArisIA9AAIAsCsgAvMAUIgShNIgSBNIAkAAg");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(-106.5,-8.9,213,17.8), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.975,-167.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-100,-177.3,198.1,19.400000000000006), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EixjBFeMAAAiK7MFjGAAAMAAACK7g");
	this.shape.setTransform(1363.6,-146.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(227.3,-590.8,2272.7,889.3), null);


(lib.QUESTION = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1C1B").s().p("AmIQNQAAjcBGitQAzh+BoiBQBwiCAqg9QBFhlAAhhQAAhAgvg2Qgtg2g4AAQh1AAhCCCQghBAgJBAIrHktQAJg0AchMQA4iaBeiAQEsmbIwAAQHLAAEdEUQCBB8BFClQBECjAACzQAAC8hjCqQhCBwiZChQipCzgxBGQhkCPAACPg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.QUESTION, new cjs.Rectangle(-102.9,-103.6,205.9,207.3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqEEZQh1AAhShSQhShTgBh0QABh0BShSQBShSB1AAIUKAAQB0AABSBSQBSBSABB0QgBB0hSBTQhSBSh0AAg");
	mask.setTransform(92.65,28.125);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF744A","#F86E56","#E55F75","#C747A8","#9D26EE","#9822F6"],[0,0.118,0.333,0.62,0.961,1],0,0,0,0,0,92).s().p("AueEZIAAoxIc9AAIAAIxg");
	this.shape.setTransform(92.65,28.125);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,185.3,56.3), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqEEZQh1AAhShSQhShTgBh0QABh0BShSQBShSB1AAIUKAAQB0AABSBSQBSBSABB0QgBB0hSBTQhSBSh0AAg");
	mask.setTransform(92.65,28.125);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF744A","#F86E56","#E55F75","#C747A8","#9D26EE","#9822F6"],[0,0.118,0.333,0.62,0.961,1],0,0,0,0,0,92).s().p("AueEZIAAoxIc9AAIAAIxg");
	this.shape.setTransform(92.65,28.125);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,185.3,56.3), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	mask.setTransform(150,125);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF744A","#F86E56","#E55F75","#C747A8","#9D26EE","#9822F6"],[0,0.118,0.333,0.62,0.961,1],0,0.1,0,0,0.1,226.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,300,250), null);


(lib.ClipGroup_3copia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B520F3").s().p("AqIEUQhyAAhQhRQhRhQAAhzQAAhyBRhQQBQhRByAAIUQAAQBzAABQBRQBRBQAAByQAAByhRBRQhQBRhzAAg");
	this.shape.setTransform(139.4,21.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3copia, new cjs.Rectangle(47,-6.5,184.9,55.3), null);


(lib.Símbolo16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Modo de aislamiento
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0.55,-174,1.02,1.02,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo16, new cjs.Rectangle(-152.4,-301.5,306,255), null);


(lib.Símbolo11copia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap6JdIAAy5IT1AAIAAS5g");
	mask.setTransform(103.5,-214.425);

	// Capa_1
	this.instance = new lib.Símbolo10();
	this.instance.setTransform(29,-40);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo11copia, new cjs.Rectangle(40,-274.9,127,120.99999999999997), null);


(lib.Símbolo11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoWIDIAAwFIQtAAIAAQFg");
	mask.setTransform(-123.5,129.575);

	// Capa_1
	this.instance = new lib.Símbolo10();
	this.instance.setTransform(-21,-22);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(-171,78.1,101,103), null);


(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fade:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop ();
	}
	this.frame_24 = function() {
		this.stop ();
	}
	this.frame_45 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(20).call(this.frame_24).wait(21).call(this.frame_45).wait(1));

	// Capa_3
	this.instance = new lib.Símbolo9();
	this.instance.setTransform(-2,139,0.37,0.37,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,104.2,164.4,246.7);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"fade":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_37 = function() {
		this.stop ();
	}
	this.frame_55 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(18).call(this.frame_55).wait(18));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_19 = new cjs.Graphics().p("A93DVIAAmpMA7vAAAIAAGpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:16.775,y:11.3}).wait(54));

	// science
	this.instance = new lib.Símbolo6();
	this.instance.setTransform(0.5,52);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({y:13},18,cjs.Ease.quadOut).wait(1).to({y:-31},16,cjs.Ease.quadIn).to({_off:true},1).wait(18));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EggLADXIAAmtMBAXAAAIAAGtg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:18.025,y:-32.95}).wait(72));

	// question
	this.instance_1 = new lib.Símbolo4();
	this.instance_1.setTransform(0.5,-0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:-22},18,cjs.Ease.quadOut).wait(19).to({y:-66},16,cjs.Ease.quadIn).to({_off:true},1).wait(18));

	// guide
	this.instance_2 = new lib.Símbolo6();
	this.instance_2.setTransform(0.5,13);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Símbolo4();
	this.instance_3.setTransform(0.5,-22);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},1).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.2,-54.4,243.5,87);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"fade":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_95 = function() {
		this.stop ();
	}
	this.frame_111 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(16).call(this.frame_111).wait(1));

	// Símbolo 20
	this.instance = new lib.Símbolo20();
	this.instance.setTransform(2,51);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({y:41,alpha:1},14,cjs.Ease.quadOut).wait(25).to({alpha:0},15).to({_off:true},1).wait(1));

	// Símbolo 19
	this.instance_1 = new lib.Símbolo19();
	this.instance_1.setTransform(0,12);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).to({y:2,alpha:1},14,cjs.Ease.quadOut).wait(39).to({alpha:0},15).to({_off:true},1).wait(1));

	// Símbolo 18
	this.instance_2 = new lib.Símbolo18();
	this.instance_2.setTransform(4,-20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({y:-30,alpha:1},14,cjs.Ease.quadOut).wait(66).to({alpha:0},15).to({_off:true},1).wait(1));

	// Símbolo 2
	this.instance_3 = new lib.Símbolo2();
	this.instance_3.setTransform(0,-52);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:-62,alpha:1},14,cjs.Ease.quadOut).wait(80).to({alpha:0},15).to({_off:true},1).wait(1));

	// Capa_7
	this.instance_4 = new lib.Símbolo19();
	this.instance_4.setTransform(0,2);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Símbolo18();
	this.instance_5.setTransform(4,-30);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Símbolo2();
	this.instance_6.setTransform(0,-62);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[]},1).to({state:[]},94).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.7,-239.3,259.5,334.3);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {reproducir:9};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop ();
	}
	this.frame_25 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(1));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({alpha:1},0).to({alpha:0},15).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-590.8,2500,889.3);


(lib.opia2copiacopia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlcjyIGziuIEGKTImzCug");
	mask.setTransform(-21.525,3.625);

	// Capa_1
	this.instance = new lib.Símbolo10();
	this.instance.setTransform(-21,-22);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.opia2copiacopia, new cjs.Rectangle(-56.4,-38,69.8,83.3), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwMGIIAAsPMAgZAAAIAAMPg");
	mask.setTransform(103.725,39.2);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8,0,0,4).p("AqEkYQh1AAhSBSQhTBSAAB0QAAB0BTBTQBSBSB1AAIUKAAQB0AABShSQBShTAAh0QAAh0hShSQhShSh0AAg");
	this.shape.setTransform(103.7,39.225);

	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(103.75,39.2,1,1,0,0,0,92.7,28.1);

	this.instance_1 = new lib.Group_2();
	this.instance_1.setTransform(2.15,2.15);

	var maskedShapeInstanceList = [this.shape,this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(2.2,2.2,203,75), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwMGIIAAsPMAgZAAAIAAMPg");
	mask.setTransform(103.725,39.2);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8,0,0,4).p("AqEkYQh1AAhSBSQhTBSAAB0QAAB0BTBTQBSBSB1AAIUKAAQB0AABShSQBShTAAh0QAAh0hShSQhShSh0AAg");
	this.shape.setTransform(103.7,39.225);

	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(103.75,39.2,1,1,0,0,0,92.7,28.1);

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(2.15,2.15);

	var maskedShapeInstanceList = [this.shape,this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(2.2,2.2,203,75), null);


(lib.copiacopiacopia2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai9ExIAAphIF7AAIAAJhg");
	mask.setTransform(16.025,105.55);

	// Capa_1
	this.instance = new lib.Símbolo10();
	this.instance.setTransform(-21,-22);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copiacopiacopia2, new cjs.Rectangle(-3,75.1,38.1,61), null);


(lib.copiacopiacopia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al2gsIJhkiICMFnIolE2g");
	mask.setTransform(-6.475,61.55);

	// Capa_1
	this.instance = new lib.Símbolo10();
	this.instance.setTransform(-21,-22);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copiacopiacopia, new cjs.Rectangle(-44,28.1,75.1,67), null);


(lib.copiacopia2copia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlFiWIE+jQIFNH9Ik+DQg");
	mask.setTransform(96.375,125.55);

	// Capa_1
	this.instance = new lib.Símbolo10();
	this.instance.setTransform(-21,-22);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copiacopia2copia, new cjs.Rectangle(63.8,89.6,65.2,71.9), null);


(lib.Símbolo15copia2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {loop:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_179 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// Capa_2
	this.pills = new lib.copiacopiacopia();
	this.pills.name = "pills";
	this.pills.setTransform(114.5,-76.55,1,1,0,0,0,-6,53);

	this.timeline.addTween(cjs.Tween.get(this.pills).to({rotation:-14.4561},109,cjs.Ease.quadInOut).to({rotation:0},70,cjs.Ease.quadInOut).wait(1));

	// Capa_1
	this.pills_1 = new lib.opia2copiacopia();
	this.pills_1.name = "pills_1";
	this.pills_1.setTransform(107.5,-115.55,1,1,0,0,0,-13,14);

	this.timeline.addTween(cjs.Tween.get(this.pills_1).to({rotation:32.4892,x:107.55},99,cjs.Ease.quadInOut).to({rotation:0,x:107.5},80,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.5,-483.7,575.3,667.2);


(lib.Símbolo15copia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"loop":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_179 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// Capa_4
	this.pills = new lib.copiacopia2copia();
	this.pills.name = "pills";
	this.pills.setTransform(572.5,106.65,1,1,0,0,0,98,129);

	this.timeline.addTween(cjs.Tween.get(this.pills).to({regX:98.1,rotation:-15.9399,x:572.65,y:106.6},104,cjs.Ease.quadInOut).to({regX:98,rotation:0,x:572.5,y:106.65},75,cjs.Ease.quadInOut).wait(1));

	// Capa_3
	this.pills_1 = new lib.copiacopiacopia2();
	this.pills_1.name = "pills_1";
	this.pills_1.setTransform(488.6,81.65,1,1,0,0,0,14.1,104);

	this.timeline.addTween(cjs.Tween.get(this.pills_1).to({rotation:22.4742,x:488.65,y:81.75},89,cjs.Ease.quadInOut).to({rotation:0,x:488.6,y:81.65},90,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(190,-382.6,567.7,706.4000000000001);


(lib.Símbolo14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"loop":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_179 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// Capa_1
	this.instance = new lib.Símbolo11copia();
	this.instance.setTransform(2.5,-3.65,1,1,0,0,0,106,-218.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6.35},89,cjs.Ease.quadInOut).to({y:-3.65},90,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,-125.5,300,610);


(lib.Símbolo13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"loop":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_719 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(719).call(this.frame_719).wait(1));

	// Capa_1
	this.instance = new lib.Símbolo11();
	this.instance.setTransform(1.5,0.45,1,1,0,0,0,-119,130);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},719).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.4,-451.5,325.9,600);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(103.7,39.2,1,1,0,0,0,103.7,39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,207.5,78.4), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(103.7,39.2,1,1,0,0,0,103.7,39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,207.5,78.4), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	mask_1.setTransform(149.975,124.975);

	// Capa_3
	this.instance = new lib.Group_0();
	this.instance.setTransform(149.8,137.05,1,1,0,0,0,103.7,39.2);
	this.instance.alpha = 0.8008;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(149.8,137.05,1,1,0,0,0,103.7,39.2);
	this.instance_1.alpha = 0.75;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(46.1,97.9,207.5,78.4), null);


(lib.Símbolo17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {rollOver:2,rollOut:15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop ();
	}
	this.frame_14 = function() {
		this.stop ();
	}
	this.frame_28 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(14).call(this.frame_28).wait(1));

	// <Group>_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8,0,0,4).p("AqEkYQh1AAhSBSQhTBSAAB0QAAB0BTBTQBSBSB1AAIUJAAQB1AABShSQBThTAAh0QAAh0hThSQhShSh1AAg");
	this.shape.setTransform(-0.2,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29));

	// Capa_4
	this.instance = new lib.ClipGroup_3copia();
	this.instance.setTransform(-0.05,-0.4,1,1,0,0,0,139.8,19.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0.8984},13).to({alpha:0},14).wait(1));

	// Modo de aislamiento
	this.instance_1 = new lib.ClipGroup_4();
	this.instance_1.setTransform(0,-11,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-136,300,250);


(lib.Símbolo24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"fade":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_30 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AgyAWQgKAAgGgGQgHgHAAgJQAAgIAHgHQAGgGAKAAIBlAAQAKAAAGAGQAHAHAAAIQAAAJgHAHQgGAGgKAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AhXAmQgQAAgLgLQgMgLAAgQQAAgPAMgLQALgLAQAAICvAAQAQAAALALQAMALAAAPQAAAQgMALQgLALgQAAg");
	var mask_graphics_3 = new cjs.Graphics().p("Ah8A3QgXAAgQgQQgQgQAAgXQAAgWAQgQQAQgQAXAAID6AAQAWAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgWAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AiiBHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIFFAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AjHBXQgkAAgZgZQgagaAAgkQAAgjAagaQAZgZAkAAIGPAAQAkAAAZAZQAaAaAAAjQAAAkgaAaQgZAZgkAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AjrBnQgrAAgegeQgegeAAgrQAAgqAegeQAegeArAAIHXAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AkOB2QgxAAgjgiQgigjAAgxQAAgwAigjQAjgiAxAAIIdAAQAxAAAjAiQAiAjAAAwQAAAxgiAjQgjAigxAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AkwCFQg3AAgngnQgngnAAg3QAAg2AngnQAngnA3AAIJhAAQA3AAAnAnQAnAnAAA2QAAA3gnAnQgnAng3AAg");
	var mask_graphics_9 = new cjs.Graphics().p("AlQCTQg9AAgrgrQgrgrAAg9QAAg8ArgrQArgrA9AAIKhAAQA9AAArArQArArAAA8QAAA9grArQgrArg9AAg");
	var mask_graphics_10 = new cjs.Graphics().p("AluCgQhDAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBDAAILeAAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AmLCtQhHAAgzgzQgzgzAAhHQAAhHAzgyQAzgzBHAAIMXAAQBIAAAyAzQAzAyAABHQAABHgzAzQgyAzhIAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AmlC4QhNAAg2g2Qg2g2AAhMQAAhLA2g3QA2g1BNAAINMAAQBMAAA2A1QA2A3AABLQAABMg2A2Qg2A2hMAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Am+DDQhRAAg5g5Qg5g5AAhRQAAhQA5g5QA5g5BRAAIN+AAQBQAAA5A5QA5A5AABQQAABRg5A5Qg5A5hQAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AnVDNQhVAAg8g8Qg8g8AAhVQAAhUA8g8QA8g8BVAAIOrAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AnqDWQhZAAg/g/Qg+g+AAhZQAAhYA+g/QA/g+BZAAIPVAAQBZAAA/A+QA+A/AABYQAABZg+A+Qg/A/hZAAg");
	var mask_graphics_16 = new cjs.Graphics().p("An9DfQhdAAhBhCQhBhBAAhcQAAhbBBhCQBBhBBdAAIP8AAQBcAABBBBQBBBCAABbQAABchBBBQhBBChcAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AoPDmQhfAAhEhDQhDhEgBhfQABhfBDhDQBEhDBfAAIQfAAQBgAABDBDQBEBDAABfQAABfhEBEQhDBDhgAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AofDtQhiAAhGhFQhGhGAAhiQAAhiBGhFQBGhFBiAAIRAAAQBiAABFBFQBGBFAABiQAABihGBGQhFBFhiAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AouD0QhlAAhHhIQhIhHAAhlQAAhkBIhIQBHhHBlAAIRdAAQBlAABHBHQBIBIAABkQAABlhIBHQhHBIhlAAg");
	var mask_graphics_20 = new cjs.Graphics().p("Ao7D5QhnAAhJhJQhKhJAAhnQAAhnBKhJQBJhIBnAAIR3AAQBoAABIBIQBKBJAABnQAABnhKBJQhIBJhoAAg");
	var mask_graphics_21 = new cjs.Graphics().p("ApHD/QhpAAhLhLQhLhLAAhpQAAhpBLhKQBLhLBpAAISPAAQBqAABKBLQBLBKAABpQAABphLBLQhKBLhqAAg");
	var mask_graphics_22 = new cjs.Graphics().p("ApSEDQhrAAhMhMQhMhMAAhrQAAhrBMhMQBMhLBrAAISlAAQBsAABLBLQBMBMAABrQAABrhMBMQhLBMhsAAg");
	var mask_graphics_23 = new cjs.Graphics().p("ApbEHQhtAAhOhNQhNhNAAhtQAAhsBNhOQBOhMBtAAIS4AAQBtAABNBMQBNBOAABsQAABthNBNQhNBNhtAAg");
	var mask_graphics_24 = new cjs.Graphics().p("ApkELQhuAAhPhOQhOhPAAhuQAAhuBOhOQBPhOBuAAITJAAQBvAABOBOQBOBOAABuQAABuhOBPQhOBOhvAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AprEOQhwAAhPhPQhQhPAAhwQAAhvBQhQQBPhOBwAAITYAAQBwAABOBOQBQBQAABvQAABwhQBPQhOBPhwAAg");
	var mask_graphics_26 = new cjs.Graphics().p("ApyERQhxAAhQhQQhQhQAAhxQAAhwBQhRQBQhPBxAAITlAAQBxAABQBPQBQBRAABwQAABxhQBQQhQBQhxAAg");
	var mask_graphics_27 = new cjs.Graphics().p("Ap3EUQhyAAhRhRQhRhRAAhyQAAhxBRhRQBRhRByAAITwAAQByAABQBRQBRBRAABxQAAByhRBRQhQBRhyAAg");
	var mask_graphics_28 = new cjs.Graphics().p("Ap8EWQhzAAhShSQhRhRAAhzQAAhyBRhSQBShRBzAAIT6AAQBzAABRBRQBRBSAAByQAABzhRBRQhRBShzAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AqAEYQh0AAhShSQhShSAAh0QAAhzBShSQBShSB0AAIUCAAQBzAABSBSQBSBSAABzQAAB0hSBSQhSBShzAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AqDEZQh1AAhShSQhShTAAh0QAAh0BShSQBShSB1AAIUIAAQB0AABSBSQBSBSAAB0QAAB0hSBTQhSBSh0AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:0.0239,y:0.006}).wait(1).to({graphics:mask_graphics_2,x:0.041,y:0.0227}).wait(1).to({graphics:mask_graphics_3,x:0.0584,y:0.0396}).wait(1).to({graphics:mask_graphics_4,x:0.0757,y:0.0565}).wait(1).to({graphics:mask_graphics_5,x:0.0929,y:0.0733}).wait(1).to({graphics:mask_graphics_6,x:0.1097,y:0.0897}).wait(1).to({graphics:mask_graphics_7,x:0.1261,y:0.1056}).wait(1).to({graphics:mask_graphics_8,x:0.1418,y:0.1209}).wait(1).to({graphics:mask_graphics_9,x:0.1567,y:0.1355}).wait(1).to({graphics:mask_graphics_10,x:0.1708,y:0.1493}).wait(1).to({graphics:mask_graphics_11,x:0.1841,y:0.1622}).wait(1).to({graphics:mask_graphics_12,x:0.1965,y:0.1743}).wait(1).to({graphics:mask_graphics_13,x:0.208,y:0.1855}).wait(1).to({graphics:mask_graphics_14,x:0.2186,y:0.1959}).wait(1).to({graphics:mask_graphics_15,x:0.2284,y:0.2054}).wait(1).to({graphics:mask_graphics_16,x:0.2374,y:0.2142}).wait(1).to({graphics:mask_graphics_17,x:0.2456,y:0.2222}).wait(1).to({graphics:mask_graphics_18,x:0.2531,y:0.2295}).wait(1).to({graphics:mask_graphics_19,x:0.2599,y:0.2361}).wait(1).to({graphics:mask_graphics_20,x:0.2661,y:0.2421}).wait(1).to({graphics:mask_graphics_21,x:0.2716,y:0.2475}).wait(1).to({graphics:mask_graphics_22,x:0.2766,y:0.2524}).wait(1).to({graphics:mask_graphics_23,x:0.281,y:0.2567}).wait(1).to({graphics:mask_graphics_24,x:0.285,y:0.2606}).wait(1).to({graphics:mask_graphics_25,x:0.2884,y:0.264}).wait(1).to({graphics:mask_graphics_26,x:0.2915,y:0.2669}).wait(1).to({graphics:mask_graphics_27,x:0.2941,y:0.2695}).wait(1).to({graphics:mask_graphics_28,x:0.2963,y:0.2716}).wait(1).to({graphics:mask_graphics_29,x:0.2982,y:0.2734}).wait(1).to({graphics:mask_graphics_30,x:0.2997,y:0.2749}).wait(1));

	// txt
	this.instance = new lib.Símbolo5();
	this.instance.setTransform(0,-1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(30));

	// Capa_1
	this.btn = new lib.Símbolo17();
	this.btn.name = "btn";
	this.btn.setTransform(0,-0.15,0.0797,0.0797,0,0,0,0,-1.9);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1).to({_off:false},0).wait(1).to({regX:-0.2,regY:1.5,scaleX:0.1367,scaleY:0.1367,x:-0.05,y:0.2},0).wait(1).to({scaleX:0.1945,scaleY:0.1945,y:0.3},0).wait(1).to({scaleX:0.2523,scaleY:0.2523,y:0.4},0).wait(1).to({scaleX:0.3096,scaleY:0.3096,y:0.45},0).wait(1).to({scaleX:0.3658,scaleY:0.3658,y:0.55},0).wait(1).to({scaleX:0.4202,scaleY:0.4202,x:-0.1,y:0.7},0).wait(1).to({scaleX:0.4726,scaleY:0.4726,y:0.75},0).wait(1).to({scaleX:0.5224,scaleY:0.5224,y:0.85},0).wait(1).to({scaleX:0.5695,scaleY:0.5695,y:0.9},0).wait(1).to({scaleX:0.6137,scaleY:0.6137,y:0.95},0).wait(1).to({scaleX:0.655,scaleY:0.655,x:-0.15,y:1.05},0).wait(1).to({scaleX:0.6933,scaleY:0.6933,y:1.15},0).wait(1).to({scaleX:0.7287,scaleY:0.7287,y:1.2},0).wait(1).to({scaleX:0.7613,scaleY:0.7613,y:1.25},0).wait(1).to({scaleX:0.7913,scaleY:0.7913,y:1.3},0).wait(1).to({scaleX:0.8187,scaleY:0.8187,y:1.35},0).wait(1).to({scaleX:0.8436,scaleY:0.8436},0).wait(1).to({scaleX:0.8663,scaleY:0.8663,y:1.4},0).wait(1).to({scaleX:0.8868,scaleY:0.8868,x:-0.2,y:1.45},0).wait(1).to({scaleX:0.9053,scaleY:0.9053},0).wait(1).to({scaleX:0.9219,scaleY:0.9219,y:1.5},0).wait(1).to({scaleX:0.9368,scaleY:0.9368},0).wait(1).to({scaleX:0.9499,scaleY:0.9499},0).wait(1).to({scaleX:0.9615,scaleY:0.9615,y:1.55},0).wait(1).to({scaleX:0.9716,scaleY:0.9716},0).wait(1).to({scaleX:0.9803,scaleY:0.9803},0).wait(1).to({scaleX:0.9877,scaleY:0.9877,y:1.6},0).wait(1).to({scaleX:0.9939,scaleY:0.9939},0).wait(1).to({regX:0,regY:-1.9,scaleX:0.9989,scaleY:0.9989,x:0,y:-1.75},0).wait(1));

	// Capa_4
	this.instance_1 = new lib.Símbolo17();
	this.instance_1.setTransform(0,-1.75,0.9989,0.9989,0,0,0,0,-1.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.8,-135.6,299.6,249.6);


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"loop":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,4,209,229,499,539,874,899];
	// timeline functions:
	this.frame_0 = function() {
		// ------------- Variables ------------------- //
		root = this;
		loopNum = 0;
		
		
		/* EVENTOS MOUSEOVER */
		document.eventoRollOver = function(){
		root.btn.btn.gotoAndPlay ('rollOver');
		}
		
		/* EVENTOS MOUSEOUT*/
		document.eventoRollOut = function(){
		root.btn.btn.gotoAndPlay ('rollOut');
		}
	}
	this.frame_1 = function() {
		this.brian.gotoAndPlay ('fade');
	}
	this.frame_4 = function() {
		root.txt01.gotoAndPlay ('fade');
	}
	this.frame_209 = function() {
		this.txt01.play ();
		this.brian.play ();
	}
	this.frame_229 = function() {
		this.txt02.gotoAndPlay ('fade');
	}
	this.frame_499 = function() {
		this.txt02.play ();
		this.brian.play ();
	}
	this.frame_539 = function() {
		this.btn.gotoAndPlay ('fade');
	}
	this.frame_874 = function() {
		loopNum == 1 ? (this.stop(), this.pills01.stop(), this.pills02.stop(), this.donut.stop(), this.brain.stop()) : (loopNum++ , console.log(loopNum), root.gotoAndPlay());
		
		/*if(loopNum == 3){
			root.stop()
		}else{
			loopNum++
			console.log(loopNum)
			root.gotoAndPlay('fade')
		}*/
	}
	this.frame_899 = function() {
		root.opacidadintro.gotoAndPlay ('reproducir');
		
		root.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(205).call(this.frame_209).wait(20).call(this.frame_229).wait(270).call(this.frame_499).wait(40).call(this.frame_539).wait(335).call(this.frame_874).wait(25).call(this.frame_899).wait(1));

	// opacidadfinal
	this.instance = new lib.Symbol2();
	this.instance.setTransform(-129.45,167.6,0.4905,0.3868,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(875).to({_off:false},0).to({alpha:1},24).wait(1));

	// opacidadintro
	this.opacidadintro = new lib.Symbol1();
	this.opacidadintro.name = "opacidadintro";
	this.opacidadintro.setTransform(-316.2,274,0.4576,0.3868,0,0,0,-411.9,244.2);

	this.timeline.addTween(cjs.Tween.get(this.opacidadintro).wait(900));

	// logos
	this.instance_1 = new lib.logos();
	this.instance_1.setTransform(0,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(900));

	// btn
	this.btn = new lib.Símbolo24();
	this.btn.name = "btn";
	this.btn.setTransform(151,134.05,1,1,0,0,0,0,-1.7);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(539).to({_off:false},0).wait(361));

	// txt02
	this.txt02 = new lib.Símbolo1();
	this.txt02.name = "txt02";
	this.txt02.setTransform(150,271);
	this.txt02._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt02).wait(229).to({_off:false},0).wait(671));

	// txt01
	this.txt01 = new lib.Símbolo3();
	this.txt01.name = "txt01";
	this.txt01.setTransform(157,59,0.8529,0.8529);
	this.txt01._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt01).wait(4).to({_off:false},0).wait(896));

	// brian
	this.brian = new lib.Símbolo8();
	this.brian.name = "brian";
	this.brian.setTransform(148.6,311.05,0.5531,0.5531,0,0,0,-2.5,220.7);

	this.timeline.addTween(cjs.Tween.get(this.brian).to({y:245.05},44,cjs.Ease.quadOut).wait(165).to({regX:-2.4,scaleX:1.3305,scaleY:1.3305,x:147.8,y:215.65},40,cjs.Ease.quadInOut).wait(250).to({regX:-2.5,scaleX:0.5531,scaleY:0.5531,x:148.6,y:245.05},40,cjs.Ease.quadInOut).wait(361));

	// bg
	this.instance_2 = new lib.Símbolo16();
	this.instance_2.setTransform(150,300);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(209).to({_off:false},0).to({alpha:1},20).wait(290).to({alpha:0},20).to({_off:true},1).wait(360));

	// brain
	this.brain = new lib.Símbolo14();
	this.brain.name = "brain";
	this.brain.setTransform(228.1,192.8,0.4469,0.4469,0,0,0,-74.5,174.4);

	this.timeline.addTween(cjs.Tween.get(this.brain).wait(519).to({x:245.1,y:217.8},0).wait(381));

	// donut
	this.donut = new lib.Símbolo13();
	this.donut.name = "donut";
	this.donut.setTransform(17,144.9,0.538,0.538,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.donut).wait(519).to({x:14,y:146.4},0).wait(381));

	// pill02
	this.pills02 = new lib.Símbolo15copia();
	this.pills02.name = "pills02";
	this.pills02.setTransform(17.85,124,0.472,0.472,-12.8937,0,0,153.8,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.pills02).wait(519).to({x:27.85,y:137},0).wait(381));

	// txt01bis
	this.instance_3 = new lib.Símbolo3("single",37);
	this.instance_3.setTransform(-351.7,83.3,0.855,0.855,0,0,0,-585.6,29.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(519).to({_off:false},0).wait(381));

	// pills01
	this.pills01 = new lib.Símbolo15copia2();
	this.pills01.name = "pills01";
	this.pills01.setTransform(196.8,127.3,0.4719,0.4719,0,0,0,153.7,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.pills01).wait(519).to({x:421.8,y:62.35},0).wait(381));

	// question mark
	this.question = new lib.QUESTION();
	this.question.name = "question";
	this.question.setTransform(150.75,174.65,0.0899,0.0899,0,0,0,0.6,103.5);
	this.question._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question).wait(8).to({_off:false},0).to({regX:0.4,regY:103.2,scaleX:0.5536,scaleY:0.5536},46,cjs.Ease.quadOut).wait(846));

	// bg
	this.instance_4 = new lib.Símbolo16();
	this.instance_4.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(900));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(126.3,5.2,970.5,383.7);
// library properties:
lib.properties = {
	id: 'A4DAFDFBAF18B64E9CD2D6DEB02E1B51',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Group.png?1757461641721", id:"Group"},
		{src:"images/Group_2.png?1757461641721", id:"Group_2"},
		{src:"images/brain.png?1757461641721", id:"brain"},
		{src:"images/elementos.png?1757461641721", id:"elementos"},
		{src:"images/logos.png?1757461641721", id:"logos"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A4DAFDFBAF18B64E9CD2D6DEB02E1B51'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;