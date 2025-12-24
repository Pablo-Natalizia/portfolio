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



(lib.brillo = function() {
	this.initialize(img.brillo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,78);


(lib.burbuja = function() {
	this.initialize(img.burbuja);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.Colour_Wheel = function() {
	this.initialize(img.Colour_Wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.degrade = function() {
	this.initialize(img.degrade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,517,48);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,147);


(lib.novo = function() {
	this.initialize(img.novo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,57);


(lib.pack = function() {
	this.initialize(img.pack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.Tooth = function() {
	this.initialize(img.Tooth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,301);// helper functions:

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


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("EghTAXYQt0prAAttQAAtrN0psQNzprTgAAQThAANzJrQN0JsAANrQAANtt0JrQtzJrzhAAQzgAAtzprg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-301.6,-211.5,603.2,423), null);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(-4.025,7.725);

	// Layer_3
	this.instance = new lib.degrade();
	this.instance.setTransform(-114,-22,0.4361,1.383);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-114.8,-20.8,222.1,57), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pack();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AlfBaQgkAAgbgaQgagbAAglQAAgkAagaQAbgbAkAAIK+AAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-44.1,-9,88.2,18), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("A7/VwQrmpAAAswQAAsvLmpAQLmpBQZABQQagBLmJBQLmJAAAMvQAAMvrmJBQrmJAwaAAQwZAArmpAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-253.4,-196.8,506.8,393.70000000000005), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Colour_Wheel();
	this.instance.setTransform(-300,-300,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-300,-300,600,600), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.novo();
	this.instance.setTransform(-70,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-70,-28.5,140,57), null);


(lib.Symbol6yt = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.brillo();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6yt, new cjs.Rectangle(-150,-39,300,78), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pack();
	this.instance.setTransform(-590,-491,1.9667,1.9667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ElkpEcIMAAAo4PMLJTAAAMAAAI4Pg");
	this.shape.setTransform(66.3,-134.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-2216.3,-1953.4,4565.200000000001,3636.9), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
	this.shape.graphics.f("#FFFFFF").s().p("Eg9fAxvMAAAhjdMB6/AAAMAAABjdg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-393.5,-318.3,787.1,636.7), null);


(lib.sigomas = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A5BB8","#11269B"],[0,1],0,0,0,0,0,12.7).s().p("AgOB5QgHAAgGgGQgFgFAAgHIAAgyQAAgJgHgGQgFgGgJAAIgxAAQgIAAgFgFQgFgGAAgHIAAgbQAAgIAFgFQAFgGAIAAIAxAAQAJAAAFgGQAHgGAAgJIAAgwQAAgIAFgGQAGgFAHAAIAbAAQAIAAAFAFQAGAGAAAIIAAAwQAAAJAGAGQAGAGAJAAIAxAAQAIAAAFAGQAGAFAAAIIAAAbQAAAHgGAGQgFAFgIAAIgxAAQgJAAgGAGQgGAGAAAJIAAAyQAAAHgGAFQgFAGgIAAg");
	this.shape.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sigomas, new cjs.Rectangle(-12.1,-12,24.2,24.1), null);


(lib.protecao = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#88918F").s().p("ADvC4IAAgeQAjADAAgJQAAgHgVgBIAAgXQgtgFgdghQgdgiAAgtQAAgzAhgiQAigjA0AAQAfAAAbAPQAaAPAPAZIgnAWQgJgPgQgJQgQgJgTAAQghAAgVAVQgUAVAAAiQAAAgAUAVQAVAVAhAAQATAAAQgJQAQgJAJgPIAnAXQgNAVgVAOQgUAOgaAEIAAAMQAJACAHAGQAHAHAAAKQAAAfg5AAIgPgBgAKBBUQgjgjAAgxQAAgyAjgjQAigjAyAAQAyAAAjAjQAiAjAAAyQAAAxgiAjQgjAigyAAQgyAAgigigAKgg3QgVAWAAAhQAAAgAVAVQAWAVAfAAQAgAAAVgVQAVgVAAggQAAghgVgWQgVgVggAAQgfAAgWAVgAmpBUQgigjAAgxQAAgyAigjQAjgjAyAAQAyAAAiAjQAjAjAAAyQAAAxgjAjQgiAigyAAQgyAAgjgigAmJg3QgVAWAAAhQAAAgAVAVQAVAVAgAAQAfAAAWgVQAVgVAAggQAAghgVgWQgWgVgfAAQggAAgVAVgAIkByIgOgqIheAAIgOAqIgxAAIBQjlIA4AAIBRDlgAHGAeIBBAAIghhdgAgMByIAAjlICLAAIAAArIhfAAIAAAxIBXAAIAAAqIhXAAIAAAzIBhAAIAAAsgAiQByIAAi6Ig+AAIAAgrICpAAIAAArIg+AAIAAC6gAoMByIgvhQIgiAAIAABQIgtAAIAAjlIBcAAQAgAAAWAWQAWAXAAAfQAAAVgMASQgMASgUAJIAzBXgApdgFIAvAAQANAAAJgKQAJgKAAgOQAAgOgJgKQgJgKgNAAIgvAAgAtLByIAAjlIBVAAQAiAAAWAWQAXAXAAAgQAAAhgXAVQgWAWgiAAIgoAAIAABMgAsegDIAoAAQAPAAAJgKQAKgKAAgPQAAgPgKgKQgJgKgPAAIgoAAgAH3iGQgKgBgLgHQgKgHgEABQgEACAAAMIgiAAQAAgPAEgLQADgLAGgFQAGgFAIgCQAHgBAJACQAIACAJAGQAJAGAEgBQAEgBAAgMIAiAAQAAATgFAMQgFAMgJADQgGADgGAAIgHgBg");
	this.shape.setTransform(0.025,-0.0062);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.protecao, new cjs.Rectangle(-84.4,-18.4,168.9,36.9), null);


(lib.legal02n = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F239B").s().p("AICAkQgFgDgCgFIAIgFQAEAGAHAAQAFAAACgDQADgCAAgFIAAgEQgEAGgIAAQgJAAgGgGQgGgGAAgJQAAgIAGgGQAGgGAJAAQAIAAAEAGIAAgFIALAAIAAAmQAAAJgGAFQgHAFgIAAQgHAAgFgCgAIFgHQgDADAAAEQAAAFADADQADADAFAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgDgFAAQgFAAgDADgADtAlIAAgKQAEAAADgCQACgBACgFIgQgmIALAAIALAaIAIgaIALAAIgPAoQgCAIgGAFQgEADgHAAIgCAAgAK2AUQgBgCAAgDIABgFQACgCADAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgDAAgCgCgAJyAQQgFgGAAgKQAAgHAFgHQAGgGAIAAQAJAAAFAGIAAgFIAKAAIAAAoIgKAAIAAgFQgFAGgJAAQgIAAgGgGgAJ6gHQgDADAAAEQAAAFADAEQAEADAEAAQAFAAADgDQAEgEAAgFQAAgEgEgDQgDgDgFAAQgEAAgEADgAGPANQgJgIAAgLQAAgNAJgJQAIgIAMAAQANAAAJAIQAIAJAAANQAAALgIAIQgJAJgNAAQgMAAgIgJgAGXgUQgGAFAAAJQAAAGAGAGQAFAFAHAAQAIAAAGgFQAFgGAAgGQAAgJgFgFQgGgFgIAAQgHAAgFAFgAFJAQQgGgGAAgKQAAgIAGgGQAGgGAJAAQAJAAAGAGQAGAGAAAIIgBAFIgeAAQACAHAJAAQAGAAADgEIAJAFQgGAJgMAAQgKAAgGgGgAFRgIQgCACgBAEIAUAAQgBgEgCgDQgDgCgEAAQgEAAgDADgAC9AQQgGgGAAgKQAAgHAGgHQAGgGAIAAQAIAAAFAGIAAgVIALAAIAAA4IgLAAIAAgFQgFAGgIAAQgIAAgGgGgADFgHQgEADAAAEQAAAFAEAEQADADAFAAQAFAAADgDQADgEAAgFQAAgEgDgDQgDgDgFAAQgFAAgDADgACNAQQgGgGAAgKQAAgHAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAHQAAAKgGAGQgGAGgKAAQgJAAgGgGgACVgGQgDADAAADQAAAFADAEQADADAEAAQAFAAADgDQADgEAAgFQAAgDgDgDQgDgEgFAAQgEAAgDAEgABhAMIAJgFQACAFAGAAQAGAAAAgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBIgEgBIgHgDQgDgBgCgBQgCgDAAgEQAAgGAEgDQAFgEAGAAQAFAAAEACQAEACADAFIgJAFQgCgFgFAAIgDABIgBADQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABAAIAFACIAGACQADABACACQACADAAAEQAAAGgEAEQgFADgHAAQgMAAgFgKgAAKAQQgHgGAAgKQAAgIAHgGQAFgGAKAAQAJAAAGAGQAFAGAAAIIAAAFIgeAAQACAHAJAAQAGAAADgEIAIAFQgGAJgLAAQgKAAgGgGgAASgIQgDACgBAEIAVAAQgBgEgDgDQgDgCgDAAQgEAAgDADgAgjASQgFgDgCgHIAJgGQADAJAKAAQAFAAACgCQACgCAAgCQAAgDgCgCIgKgCIgHgCIgFgEQgCgBgCgDQgBgDAAgEQAAgIAFgEQAGgFAHAAQAHAAAFADQAGAEADAGIgKAFQgDgHgIAAQgDAAgCACQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAADACACIAJAEIAEABIADABIAEACIADACIACADIABACIABAFQAAAIgGAEQgFAFgJAAQgJAAgGgEgAh/AQQgGgGAAgKQAAgHAGgHQAFgGAJAAQAIAAAFAGIAAgFIAKAAIAAAoIgKAAIAAgFQgFAGgIAAQgJAAgFgGgAh4gHQgCADAAAEQAAAFACAEQAEADAEAAQAFAAAEgDQADgEAAgFQAAgEgDgDQgEgDgFAAQgEAAgEADgAj8AQQgHgGAAgKQAAgIAHgGQAFgGAKAAQAJAAAGAGQAFAGAAAIIAAAFIgeAAQACAHAJAAQAGAAADgEIAIAFQgGAJgLAAQgKAAgGgGgAj0gIQgDACgBAEIAVAAQgBgEgDgDQgDgCgDAAQgEAAgDADgAkvAQQgGgGAAgKQAAgHAGgHQAFgGAJAAQAIAAAFAGIAAgVIAKAAIAAA4IgKAAIAAgFQgFAGgIAAQgJAAgFgGgAkngHQgEADAAAEQAAAFAEAEQADADAFAAQAEAAAEgDQADgEAAgFQAAgEgDgDQgEgDgEAAQgFAAgDADgAlyAQQgGgGAAgKQAAgIAGgGQAGgGAJAAQAJAAAGAGQAGAGAAAIIgBAFIgeAAQACAHAJAAQAGAAADgEIAIAFQgFAJgMAAQgKAAgGgGgAlqgIQgCACgCAEIAVAAQgBgEgDgDQgCgCgEAAQgEAAgDADgAnmAQQgGgGAAgKQAAgIAGgGQAGgGAJAAQAJAAAGAGQAFAGAAAIIAAAFIgeAAQACAHAJAAQAGAAADgEIAIAFQgFAJgMAAQgKAAgGgGgAnegIQgCACgCAEIAVAAQgBgEgDgDQgDgCgDAAQgEAAgDADgAouAQQgHgGAAgKQAAgIAHgGQAGgGAJAAQAGAAAFADQAFADACAFIgJAFIgEgEQgCgCgDAAQgFAAgDAEQgDADAAADQAAAFADADQADAEAFAAQADAAACgCQADgBABgDIAJAFQgCAFgFADQgFADgGAAQgJAAgGgGgApvAMIAJgFQACAFAGAAQAFAAAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBgBIgFgBIgGgDQgDgBgCgBQgCgDAAgEQAAgGAEgDQAEgEAHAAQAFAAAEACQAEACACAFIgIAFQgDgFgEAAIgDABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABQABAAAAAAIAFACIAHACQADABACACQACADAAAEQAAAGgEAEQgFADgHAAQgNAAgEgKgAiaATQgFgEAAgIIAAgQIgHAAIAAgKIAHAAIAAgIIALgDIAAALIAJAAIAAAKIgJAAIAAAQQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADABIAFAAIAAAKIgFAAQgHAAgDgCgAKiAVIAAg6IAKAAIAAA6gAJbAVIAAgXQAAgEgCgCQgCgCgEAAQgEAAgCACQgCADAAAFIAAAVIgLAAIAAgoIALAAIAAAFQADgGAJAAQAGAAAEAEQAFAFAAAIIAAAYgAIsAVIAAgoIALAAIAAAogAHmAVIAAgoIAKAAIAAAogAHJAVIAAgoIAKAAIAAAHQABgEAEgCQADgBAEAAIAAALQgEgBgEADQgEACAAAFIAAAUgAExAVIAAgXQAAgEgCgCQgCgCgEAAQgEAAgCACQgCADAAAFIAAAVIgLAAIAAgoIALAAIAAAFQAEgGAIAAQAGAAAFAEQAEAFAAAIIAAAYgABQAVIAAgXQAAgEgCgCQgCgCgEAAQgEAAgCACQgCADAAAFIAAAVIgLAAIAAgoIALAAIAAAFQADgGAJAAQAGAAAEAEQAFAFAAAIIAAAYgAhQAVIAAg6IAKAAIAAA6gAi2AVIAAgXQAAgEgCgCQgCgCgEAAQgEAAgCACQgCADAAAFIAAAVIgLAAIAAgoIALAAIAAAFQADgGAJAAQAGAAAEAEQAFAFAAAIIAAAYgAmJAVIAAgXQAAgEgCgCQgCgCgDAAQgEAAgCACQgBACAAAFIAAAWIgLAAIAAgXQAAgEgCgCQgCgCgDAAQgDAAgCACQgCACAAAFIAAAWIgLAAIAAgoIALAAIAAAFQADgGAIAAQAHAAAEAGQAEgGAIAAQAHAAAEAFQAEAEAAAIIAAAYgAoHAVIAAgoIAKAAIAAAHQACgEADgCQADgBAEAAIAAALQgEgBgEADQgEACAAAFIAAAUgAqSAVIgTg4IAMAAIAOAqIANgqIANAAIgTA4gAq1gTIgEAGIgFgDIAEgGIgHABIAAgHIAHABIgEgGIAFgDIAEAHIADgHIAGADIgFAGIAIgBIAAAHIgIgBIAFAGIgGADgAItgaQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCADgDAAQgCAAgCgDgAHmgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCADgCAAQgDAAgCgDg");
	this.shape.setTransform(-140.125,-51.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legal02n, new cjs.Rectangle(-212.3,-58.6,144.5,34.7), null);


(lib.ClipGroup_4656 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjYCgQg/g+AAhiQAAhaBChBQBChCBdAAQBgAABAA+QA/A+AABeQAABehBBBQhBBChdAAQhkAAg+g+gAiahgQgpAoAAA4QAAA9AoAnQAmAmA/AAQA5AAApgoQAogpAAg6QAAg7gngnQgngmg8AAQg7AAgpApgAo/DXQgegGgSgIIgGgDIAJglQADgNAMgHQALgHANADQAuALAXAAQAqAAAZgPQAagPgBgZQAAgWgWgQQgPgJgogPQg5gWgXgSQgoghgBg2QAAg5AyghQAwghBXAAQAfAAAfAGQAaAEAPAHIAHADIgQApQgDAKgKAFQgJAGgMgDQgkgIgTAAQgqAAgYAMQgYANAAAWQABATAVAOQAOAJAlANQA6AVAYAUQApAgAAA2QAAA+g0AnQgzAohRAAQgiAAgjgHgA6pDXQgegGgSgIIgFgDIAIglQAEgNALgHQALgHAOADQAtALAXAAQApAAAagPQAagPAAgZQAAgWgYgQQgOgJgogPQg5gWgXgSQgoghAAg2QAAg6AwggQAyghBVAAQAgAAAeAGQAbAEAQAHIAGADIgPApQgEAKgKAFQgJAGgLgDQgmgIgRAAQgrAAgYAMQgXANAAAWQAAATAVAOQAOAIAmAOQA5AVAYAUQAqAgAAA2QAAA+g0AnQg0AohSAAQghAAgjgHgAXEDSIAAmjIEPAAIAAAZQAAAQgLAMQgMALgPAAIiJAAIAABnICdAAIAAAaQAAAQgMALQgLALgQAAIh2AAIAAB4IC7AAIAAAdQAAAQgMALQgLAMgQAAgAVJDSQgaAAgOgVIi2juIAAEDIhPAAIAAmjIA0AAQAZAAAQAUIC0DuIAAkCIBQAAIAAGjgAL9DSIAAirIiXj4IBTAAQAWAAALATIBZCTIBaiUQALgSAWAAIBEAAIiVD3IAACFQAAAQgMALQgLAMgQAAgADqDSIAAmjIB+AAQBFAAAqAKQArAJAgAXQAjAZAWAsQAVAsAAAvQAABohJA4QhIA5iIAAgAFLCPIAlAAQBLAAApgnQAogogBhKQABhAgighQghghg/AAIg/AAgArlDSQgZAAgQgVIi1juIAAEDIhPAAIAAmjIA0AAQAZAAAQAUIC0DuIAAkCIBPAAIAAGjgA1pDSIAAmjIEPAAIAAAZQABAQgMAMQgMALgPAAIiIAAIAABnICbAAIAAAaQAAAQgLALQgLALgQAAIh1AAIAAB4IC6AAIgBAdQAAAQgLALQgLAMgQAAg");
	mask.setTransform(175.9,22.175);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#01B9DD","#19428A"],[0,1],0,0,0,0,0,207.7).s().p("A8+EDIAAoFMA59AAAIAAIFg");
	this.shape.setTransform(175.975,22.15);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4656, new cjs.Rectangle(0,0,351.8,44.4), null);


(lib.ClipGroup_165 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsjKGQgkAAghgCIgBAAQADgEAIgDQAGgCBggXIAUgFIAAAAQEBhTCoiPQDSi0CklVQBwjnC3iAIAAAAQCJhhCnggIAvgIQBEgJA8AAIApABIgBAAQgEAEgFACIgBAAQgHADgiAGIhbASIgKACQhyAXhMAyQiNBdhpDTQhlDLhWCRQgrBJgXAgIAAABQidD3kWBrQi6BGjSAAg");
	mask.setTransform(89.4125,65.15);

	// Layer_3
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.8875,0.8866);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_165, new cjs.Rectangle(2.1,0.5,174.70000000000002,129.3), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjYCgQg/g+AAhiQAAhaBChBQBChCBdAAQBgAABAA+QA/A+AABeQAABehBBBQhBBChdAAQhkAAg+g+gAiahgQgpAoAAA4QAAA9AoAnQAmAmA/AAQA5AAApgoQAogpAAg6QAAg7gngnQgngmg8AAQg7AAgpApgAo/DXQgegGgSgIIgGgDIAJglQADgNAMgHQALgHANADQAuALAXAAQAqAAAZgPQAagPgBgZQAAgWgWgQQgPgJgogPQg5gWgXgSQgoghgBg2QAAg5AyghQAwghBXAAQAfAAAfAGQAaAEAPAHIAHADIgQApQgDAKgKAFQgJAGgMgDQgkgIgTAAQgqAAgYAMQgYANAAAWQABATAVAOQAOAJAlANQA6AVAYAUQApAgAAA2QAAA+g0AnQgzAohRAAQgiAAgjgHgA6pDXQgegGgSgIIgFgDIAIglQAEgNALgHQALgHAOADQAtALAXAAQApAAAagPQAagPAAgZQAAgWgYgQQgOgJgogPQg5gWgXgSQgoghAAg2QAAg6AwggQAyghBVAAQAgAAAeAGQAbAEAQAHIAGADIgPApQgEAKgKAFQgJAGgLgDQgmgIgRAAQgrAAgYAMQgXANAAAWQAAATAVAOQAOAIAmAOQA5AVAYAUQAqAgAAA2QAAA+g0AnQg0AohSAAQghAAgjgHgAXEDSIAAmjIEPAAIAAAZQAAAQgLAMQgMALgPAAIiJAAIAABnICdAAIAAAaQAAAQgMALQgLALgQAAIh2AAIAAB4IC7AAIAAAdQAAAQgMALQgLAMgQAAgAVJDSQgaAAgOgVIi2juIAAEDIhPAAIAAmjIA0AAQAZAAAQAUIC0DuIAAkCIBQAAIAAGjgAL9DSIAAirIiXj4IBTAAQAWAAALATIBZCTIBaiUQALgSAWAAIBEAAIiVD3IAACFQAAAQgMALQgLAMgQAAgADqDSIAAmjIB+AAQBFAAAqAKQArAJAgAXQAjAZAWAsQAVAsAAAvQAABohJA4QhIA5iIAAgAFLCPIAlAAQBLAAApgnQAogogBhKQABhAgighQghghg/AAIg/AAgArlDSQgZAAgQgVIi1juIAAEDIhPAAIAAmjIA0AAQAZAAAQAUIC0DuIAAkCIBPAAIAAGjgA1pDSIAAmjIEPAAIAAAZQABAQgMAMQgMALgPAAIiIAAIAABnICbAAIAAAaQAAAQgLALQgLALgQAAIh1AAIAAB4IC6AAIgBAdQAAAQgLALQgLAMgQAAg");
	mask.setTransform(175.9,22.175);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#01B9DD","#19428A"],[0,1],0,0,0,0,0,207.7).s().p("A8+EDIAAoFMA59AAAIAAIFg");
	this.shape.setTransform(175.975,22.15);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,351.8,44.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsjKGQgkAAghgCIgBAAQADgEAIgDQAGgCBggXIAUgFIAAAAQEBhTCoiPQDSi0CklVQBwjnC3iAIAAAAQCJhhCnggIAvgIQBEgJA8AAIApABIgBAAQgEAEgFACIgBAAQgHADgiAGIhbASIgKACQhyAXhMAyQiNBdhpDTQhlDLhWCRQgrBJgXAgIAAABQidD3kWBrQi6BGjSAAg");
	mask.setTransform(89.4125,65.15);

	// Layer_3
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.8875,0.8866);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(2.1,0.5,174.70000000000002,129.3), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADeAgQgHgEgDgIIAMgIQAEALANAAQAGAAACgCQADgCAAgDQAAgEgDgCIgMgFIgIgCIgHgDIgFgGQgCgEAAgFQAAgKAHgFQAHgGAKAAQAIAAAHAEQAHAEADAIIgMAHQgEgKgJAAQgFAAgCACQgDACAAAEQAAADADACQADACAIADIAFABIAEACIAFACIAEACIADAEIACAEIAAAGQAAAKgHAFQgHAGgMAAQgKAAgIgFgAj/AgQgHgEgDgIIAMgIQAEALAMAAQAGAAADgCQADgCAAgDQAAgEgEgCIgMgFIgIgCIgHgDIgFgGQgBgEAAgFQAAgKAHgFQAHgGAJAAQAJAAAGAEQAHAEAEAIIgMAHQgEgKgKAAQgEAAgDACQgCACAAAEQAAADADACQACACAIADIAFABIAFACIAEACIAEACIADAEIACAEIABAGQAAAKgHAFQgIAGgLAAQgLAAgHgFgAC+AkIAAhHIAOAAIAABHgACqAkIgFgNIgdAAIgEANIgQAAIAZhHIASAAIAZBHgACNAKIAUAAIgLgdgABhAkIAAguIgUAhIgCAAIgUggIAAAtIgOAAIAAhHIAOAAIAVAiIAUgiIAPAAIAABHgAgCAkIgFgNIgdAAIgEANIgQAAIAZhHIASAAIAYBHgAgfAKIAUAAIgLgdgAhuAkIAAhHIAcAAQAJAAAHAGQAGAGAAAIQAAAJgHAGQAKAEAAALQAAAJgHAGQgGAGgKAAgAhgAXIAQAAQAEAAACgDQACgCAAgEQAAgDgCgDQgCgCgEAAIgQAAgAhggGIAOAAQADAAADgCQACgCAAgEQAAgDgCgCQgDgDgDAAIgOAAgAiIAkIAAhHIAOAAIAABHgAicAkIgFgNIgdAAIgEANIgQAAIAZhHIASAAIAZBHgAi5AKIAUAAIgLgdg");
	this.shape.setTransform(43.475,6.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(14.7,-2,57.5,16.2), null);


(lib.diente = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tooth();
	this.instance.setTransform(-54.5,-85,0.5648,0.5648);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.diente, new cjs.Rectangle(-54.5,-85,109,170), null);


(lib.degrade53 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#00B6DE","#194898"],[0,1],-0.9,-13.2,0,-0.9,-13.2,47).s().p("AtkCAIAAj/IbJAAIAAD/g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.degrade53, new cjs.Rectangle(-86.9,-12.7,173.9,25.5), null);


(lib.codigo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.663)").s().p("AiVAmQgJAAgGgDIAAAAQgIgCgEgGQgEgGAAgJIABgCIACgBIAIAAIACABIABACQAAAEADADIAAAAQACADAEACIgBAAIAJABIAHgBQADgBACgCIAAAAQACgCAAgDQAAgDgCgCIAAAAQgDgCgEgBIgKgDIgLgDIABAAQgGgCgEgDIAAAAQgEgEAAgIQAAgHAEgFQAEgGAHgCQAGgCAGAAQAIAAAGACIAAAAQAGADAEAFQAEAGAAAIIAAACIgBABIgCAAIgIAAIgCAAIgBgCQgBgGgEgDIAAAAQgDgDgGAAIgGABIgFADIAAAAQgBACAAADQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAHACIAAAAIAKADIALADQAGACADAEQAEAFAAAHIAAABQAAAGgDAEQgDAEgEADIAAAAQgEADgFABIgKABIAAAAgAikAiQAGADAJAAIAJgBQAFgBAEgDQAEgDADgEQACgEABgFIAAgBQgBgHgDgEQgDgEgGgCIgKgDIgKgCIAAAAQgFgBgDgCQgDgCAAgDQAAgEACgCIAAAAQACgCADgBIAHgBQAGAAAEADIAAAAQAEADABAHIABABIABAAIAIAAIABAAIAAgBIABgBQgBgIgDgFQgEgFgGgDIAAAAQgFgCgIAAQgGAAgGACQgGACgEAFQgEAFAAAHQAAAHAEAEIAAAAQADAEAGABIAAgBIAKAEIAKACQAFACADACIAAAAQACACABAEQgBAEgCACIAAAAQgCACgEABIAAAAIgHABIgJgBIAAAAQgEgCgCgDIAAAAQgDgDAAgFIgBgBIgBgBIgIAAIgBABIgBABQAAAIAFAGIAAAAQADAFAHADgAAuAmQgIAAgHgDQgHgDgFgFQgEgGgCgHQgCgHAAgHQAAgGACgHQACgHAEgGIABAAQAFgFAGgDQAHgDAIAAQAJAAAGADQAHADAEAFIAAAAQAFAGACAHQACAHAAAGQAAAHgCAHQgCAHgFAGQgEAFgHADQgGADgJAAIAAAAgAAuAlQAJAAAGgDIAAAAQAGgDAEgFQAFgFACgHQACgHAAgHQAAgGgCgHQgCgHgFgFIAAAAQgEgEgGgEQgGgDgJAAQgIAAgGADQgHAEgEAEIgBAAQgEAFgCAHQgCAHAAAGQAAAHACAHQACAHAEAFIABAAQAEAFAHADIAAAAQAGADAIAAgAHIAmQgHAAgFgDIgBAAQgFgCgEgGQgDgFAAgIQAAgHADgFIAFgDIgDgEIAAAAQgDgFAAgFQAAgHAEgEQACgFAGgCQAFgCAGAAQAIAAAFADQAFADACAEQADAFAAAFQAAAFgDAFIAAAAIgDADQADACACACQAEAFAAAHIAAABQgBAHgDAFIAAAAQgDAGgGACIAAAAQgFADgIAAIAAAAgAGwAOQAAAIAEAEQADAFAFADIAAAAQAFACAHAAQAHAAAFgCIAAAAQAGgDADgFQADgFAAgHQAAgGgDgFIAAAAQgCgDgFgBIAFgFQACgEAAgFQAAgFgCgEQgCgEgFgDQgFgDgHAAQgGAAgFACQgFADgCAEIAAAAQgEAEAAAGQAAAFADAEIAAAAIAFAFQgEABgCADIAAAAQgEAFAAAGgAFOAiIAAAAQgFgEgDgFIAAgBQgCgFgBgHIAAgLIAAgLQABgGACgGIAAAAQADgGAFgDIAAAAQAFgEAJAAQAJAAAFAEIAAAAQAFADADAGIAAAAQACAGABAGIAAALIAAALQgBAHgCAFIAAABQgDAFgFAEIAAAAQgFAEgJAAQgJAAgFgEgAFPgeIAAAAQgFADgCAGIgBAAQgCAFAAAGIgBALIABALQAAAHACAFIABAAQACAFAFAEIAAAAQAFADAIAAQAIAAAFgDIAAAAQAFgEACgFIABAAQACgFAAgHIABgLIgBgLQAAgGgCgFIgBAAQgCgGgFgDIAAAAQgFgEgIAAIAAAAQgIAAgFAEgAEYAiIAAAAQgFgEgDgFIAAgBQgCgFgBgHIAAgLIAAgLQABgGACgGIAAAAQADgGAFgDIAAAAQAFgEAJAAQAJAAAFAEIAAAAQAFADADAGIAAAAQACAGABAGIAAALIAAALQgBAHgCAFIAAABQgDAFgFAEIAAAAQgFAEgJAAQgJAAgFgEgAEZgeIAAAAQgFADgCAGIgBAAQgCAFAAAGIgBALIABALQAAAHACAFIABAAQACAFAFAEIAAAAQAFADAIAAQAIAAAFgDIAAAAQAFgEACgFIABAAQACgFAAgHIABgLIgBgLQAAgGgCgFIgBAAQgCgGgFgDIAAAAQgFgEgIAAIAAAAQgIAAgFAEgAgJAkIgBgBIgdgsIAAArIgBACIgCABIgJAAIgCgBIgBgCIAAhDIABgCIACgBIAKAAIABAAIABABIAeAuIAAgsIABgCIACgBIAIAAIACABIABACIAABDIgBACIgCABIgJAAIAAAAIgCgBgAgJAjIABAAIABAAIAJAAIABAAIAAgBIAAhDIAAgBIgBAAIgIAAIgBAAIAAABIAAAxIghgyIAAAAIgBAAIgKAAIgBAAIAAABIAABDIAAABIABAAIAJAAIABAAIAAgBIAAgwgAjrAkIgBgBIgCgFIAAgGIgBgGIgBgGIgCgDIAAAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBAAgBAAIgTAAIAAAaIgBACIgCABIgJAAIgCgBIgBgCIAAhDIABgCIACgBIAgAAQALAAAGAGQAGAFAAAKQAAAHgDAFIAAABIgEADIABABIADAGIACAHIAAAHIABAFIAAABIACAEIABACIgBACIgCABIgKAAIAAAAIgCgBgAj3AGQAEAAACACIACAEIACAFIAAAHIABAGIACAFIAAAAIABAAIAKAAIABAAIAAgBIAAgBIgCgFIAAAAIgBgGIgBgHIgBgHIgDgFIgDgCQAEgBACgDQADgFAAgHQAAgJgGgFIAAAAQgGgFgKAAIggAAIgBAAIAAABIAABDIAAABIABAAIAJAAIABAAIABgBIAAgcgAmsAlIgIAAIgCgBIgBgBIgPgoIAAAnIgBACIgCABIgJAAIgCgBIgBgCIAAhDIABgCIACgBIANAAIACABIAAABIATAxIASgxIABgBIACgBIAMAAIACABIABACIAABDIgBACIgCABIgIAAIgCgBIgBgCIAAgnIgPAoIgBABIgCABIAAAAgAmsAjIABAAIAAgBIASgvIAAAvIABABIABAAIAIAAIABAAIABgBIAAhDIgBgBIgBAAIgMAAIgBAAIAAABIgUA0IgUg0IAAgBIgBAAIgNAAIgBAAIAAABIAABDIAAABIABAAIAJAAIABAAIAAgBIAAgvIATAvIABABIAAAAgAHmAlIgCgBIgBgBIAAgBQAAgJADgGIAAAAQADgFAFgEIAAAAIAIgGIABAAIAJgFQADgDACgDIAAAAIABgGIgBgFIAAAAIgEgDIAAAAIgFgBQgDAAgCACQgDABAAADIAAABIgCAGIgBACIgCABIgIAAIgCgBIgBgCQAAgHADgGQADgGAFgEIAAAAQAGgDAIAAQAGAAAGACIAAAAQAFADAEAFIAAAAQADAFAAAHQAAAGgDAGIAAAAQgCADgEAEIgBAAIgIAFIAAAAIgIAGIgBAAIgFAEIgCADIAeAAIACABIABACIAAAHIgBACIgCABgAICgXQADACACADIABAFQAAAEgBADQgCADgEADIAAAAIgKAFIgIAGQgEAEgEAFQgCAFgBAJIAAABIABAAIABAAIArAAIABAAIABgBIAAgHIgBgBIgBgBIggAAIADgFQACgDAEgBIAIgGIAJgFIAGgHIAAAAQACgFAAgGQAAgHgCgEQgEgFgFgDIAAAAQgFgCgGAAQgIAAgFAEQgFADgDAGQgCAFAAAHIAAABIABABIAIAAIABgBIABgBIABgHIAAAAQABgDADgCQACgDAEAAIAAAAIAGABgAGRAlIgCgBIgBgCIAAgsIgOAAIgCgBIgBgCIAAgHIABgCIACgBIAIgBIAFgCIABgBIACgGIABgCIACAAIAGAAIACABIABACIAABCIgBACIgCABgAGSgiIAAABQgBAFgCACIgBABIgFADIgJABIgBAAIgBABIAAAHIABABIABAAIAQAAIAAAuIAAABIABAAIAIAAIABAAIABgBIAAhCIgBgBIgBgBIgGAAIAAAAIgBAAgACyAlIgBgBIgBgBIgBgBQABgJACgGIABAAQADgFAEgEIABAAIAIgGIAAAAIAKgFQADgDACgDIgBAAIACgGIgBgFIAAAAIgEgDIAAAAIgFgBQgEAAgCACQgCABgBADIAAABIgBAGIgBACIgCABIgIAAIgCgBIgBgCQAAgHACgGQADgGAFgEIABAAQAFgDAIAAQAHAAAFACIABAAQAFADADAFIAAAAQADAFAAAHQAAAGgCAGIAAAAQgDADgEAEIAAAAIgIAFIAAAAIgJAGIAAAAIgFAEIgCADIAeAAIACABIABACIAAAHIgBACIgCABgADOgXQADACACADIABAFQAAAEgBADQgCADgEADIAAAAIgJAFIgJAGQgEAEgDAFQgDAFAAAJIAAABIABAAIAAAAIAsAAIABAAIAAgBIAAgHIAAgBIgBgBIghAAIAEgFQACgDADgBIAJgGIAIgFIAHgHIAAAAQACgFAAgGQAAgHgDgEQgDgFgFgDIAAAAQgFgCgHAAQgHAAgGAEQgEADgDAGQgDAFAAAHIABABIABABIAIAAIABgBIAAgBIACgHIAAAAQABgDACgCQADgDAEAAIAAAAIAFABgAB8AlIgBgBIgBgBIgBgBQABgJADgGIAAAAQADgFAEgEIABAAIAIgGIAAAAIAKgFQADgDACgDIgBAAIACgGIgBgFIAAAAIgEgDIAAAAIgFgBQgEAAgCACQgCABgBADIAAABIgBAGIgBACIgCABIgIAAIgCgBIgBgCQAAgHACgGQADgGAFgEIABAAQAFgDAIAAQAHAAAFACIABAAQAFADADAFIAAAAQADAFAAAHQAAAGgCAGIAAAAQgDADgEAEIAAAAIgIAFIAAAAIgJAGIAAAAIgFAEIgCADIAeAAIACABIABACIAAAHIgBACIgCABgACYgXQADACACADIABAFQAAAEgBADQgCADgEADIAAAAIgJAFIgJAGQgEAEgDAFQgDAFAAAJIAAABIABAAIAAAAIAsAAIABAAIAAgBIAAgHIAAgBIgBgBIghAAIAEgFQACgDADgBIAJgGIAIgFIAHgHIAAAAQACgFAAgGQAAgHgDgEQgDgFgFgDIAAAAQgFgCgHAAQgHAAgGAEQgEADgDAGQgDAFAAAHIABABIABABIAIAAIABgBIAAgBIACgHIAAAAQABgDACgCQADgDAEAAIAAAAIAFABgAhuAlIgCgBIgBgCIAAhDIABgCIACgBIAuAAIACABIABACIAAAIIgBACIgCABIgiAAIAAAPIAgAAIACABIABACIAAAHIgBACIgCABIggAAIAAARIAiAAIACABIABACIAAAIIgBACIgCABgAhvgiIgBABIAABDIABABIABAAIAuAAIABAAIABgBIAAgIIgBgBIgBAAIgkAAIAAgVIAiAAIABAAIAAgBIAAgHIAAgBIgBAAIgiAAIAAgTIAkAAIABAAIABgBIAAgIIgBgBIgBAAIguAAIgBAAgAlYAlIgCgBIgBgCIAAhDIABgCIACgBIAZAAIAGAAIAAAAIAHABIAGACIAAAAQAEACADAEIAAABQACAEAAAGQAAAGgDAFIgDADQADACACACIAAAAQAEAFAAAHQAAAGgDAFIABAAQgDAFgFADQgGAEgHAAgAlZgiIAAABIAABDIAAABIABAAIAhAAQAHAAAFgDQAFgDACgFIAAABQADgFAAgGQAAgGgEgFIAAAAQgCgDgFgBQADgCACgDQADgEAAgGQAAgGgDgEQgCgDgEgDIgFgBIgHgBIAAAAIgGAAIgZAAIgBAAgAoRAlIgCgBIgBgCIAAhDIABgCIACgBIAeAAQALAAAGAHQAGAFAAALQAAALgGAFQgGAGgLAAIgSAAIAAAZIgBACIgCABgAoSgiIAAABIAABDIAAABIABAAIAJAAIABAAIABgBIAAgaIATAAQAKAAAGgGQAGgFAAgKQAAgKgGgFQgGgGgKAAIgeAAIgBAAgAAuAaQgFAAgFgCIAAAAQgEgCgDgEIAAAAIgDgIIgCgKQAAgEACgFIADgIIAAAAQADgEAEgCQAFgCAFAAQAGAAAEACQAEACACAEIAAAAIAFAIIABAJIgBAKQgCAEgDAEIAAAAQgCAEgEACIAAAAQgEACgGAAIAAAAgAA3AXIAAAAQAEgCACgDIAAgBQADgDABgFIAAABIABgKIgBgJIAAABIgEgIIAAAAQgCgEgEgCQgEgCgFAAQgFAAgEACQgEACgCAEIAAAAIgEAIIAAgBIgBAJIABAJIAEAJIAAgBQACAEAEACIAAAAQAEACAFAAQAFAAAEgCgAG/AXIAAAAQgDgDAAgFQAAgEABgCQACgDACgBIAAAAIAHgBIAHABQACABACADIACAGQgBAFgDADIAAAAQgEADgFAAIAAAAQgGAAgDgDgAG9APQAAAEADADIAAAAQADADAFAAQAFAAADgDIAAAAQADgDAAgEIgBgFIgEgDIgGgCIgGACIgEADIAAAAIgBAFgAFVAYIAAAAQgCgDgCgDIgBgJIAAgIIAAgIIAAAAIABgIQACgEACgCIAAAAQADgDAEAAQAEAAADADIAAAAQACACACAEIABAIIAAAIIAAAIIAAAAIgBAJQgCADgCADIAAAAQgDACgEAAQgEAAgDgCgAFWAXIAAAAQACACAEAAQAEAAABgCIABAAQACgDACgDIgBAAIACgIIAAAAIAAgIIAAgIIgCgIIABABQgCgEgCgCIgBAAQgBgCgEAAQgEAAgCACIAAAAQgCACgBAEIAAgBIgCAIIAAAAIAAAIIAAAIIACAIIAAAAQABADACADgAEfAYIAAAAQgCgDgCgDIgBgJIAAgIIAAgIIAAAAIABgIQACgEACgCIAAAAQADgDAEAAQAEAAADADIAAAAQACACACAEIABAIIAAAIIAAAIIAAAAIgBAJQgCADgCADIAAAAQgDACgEAAQgEAAgDgCgAEgAXIAAAAQACACAEAAQAEAAABgCIABAAQACgDACgDIgBAAIACgIIAAAAIAAgIIAAgIIgCgIIABABQgCgEgCgCIgBAAQgBgCgEAAQgEAAgCACIAAAAQgCACgBAEIAAgBIgCAIIAAAAIAAAIIAAAIIACAIIAAAAQABADACADgAk4AZIgVAAIAAgVIATAAIAGABQADABACACQACACAAAEQAAAFgDACIAAABQgDADgFAAIAAAAgAlMAXIAUAAQAEAAADgCIAAgBQACgCAAgEQAAgDgBgCIgEgCIgGgBIgSAAgADqAOIgCgBIgBgCIAAgHIABgCIACgBIAcAAIACABIABACIAAAHIgBACIgCABgADpADIAAABIAAAHIAAABIABABIAcAAIABgBIAAgBIAAgHIAAgBIgBgBIgcAAIgBABgABYAOIgCgBIgBgCIAAgHIABgCIACgBIAcAAIACABIABACIAAAHIgBACIgCABgABXADIAAABIAAAHIAAABIABABIAcAAIABgBIAAgBIAAgHIAAgBIgBgBIgcAAIgBABgAjWAOIgCgBIgBgCIAAgHIABgCIACgBIAbAAIACABIABACIAAAHIgBACIgCABgAjXADIgBABIAAAHIABABIABABIAbAAIABgBIABgBIAAgHIgBgBIgBgBIgbAAIgBABgAmBAOIgCgBIgBgCIAAgHIABgCIACgBIAcAAIACABIABACIAAAHIgBACIgCABgAmCADIAAABIAAAHIAAABIABABIAcAAIABgBIAAgBIAAgHIAAgBIgBgBIgcAAIgBABgAn2gCIgQAAIAAgWIAQAAQAHAAADADIAAABQADACAAAFQAAAFgDADIAAAAQgDADgHAAIAAAAgAoFgDIAPAAQAGAAADgDIAAAAQACgCAAgFQAAgEgCgCIAAgBQgDgCgGAAIgPAAgAkLgDIAAgVIAUAAQAGAAADADQACADAAAEQAAAFgCACQgCACgDABIgHABgAkKgFIAQAAIAHgBIAEgCQABgCAAgEQAAgDgCgDQgCgCgFAAIgTAAgAlNgFIAAgTIAQAAIAHABIAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIAAAAQACABAAAFQAAAEgCACQgEADgHAAgAlMgHIAPAAQAHAAADgCIgBABQACgDAAgDQAAgEgBgBIAAAAIgDgCIAAAAIgHgBIgPAAgAHDgHIgEgDIAAABIgBgGIABgFIAEgCIAAgBIAFgBQAFAAACADIAAAAQADACAAAEQAAAFgDACIAAAAQgCACgFAAIgFgBgAHOgJIAAAAQACgCAAgEQAAgDgCgCIAAAAQgCgCgEAAIgEABIgBAAIgDACIgBAEIABAFIADACIAFABQAEAAACgCg");
	this.shape.setTransform(88.575,109.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.329)").s().p("AiVAoQgJAAgHgDIAAAAQgIgDgEgGIAAAAQgFgHAAgJIACgEIADgBIAIAAIAEABIABAEQAAADACADIAAAAQACADADABIAAAAIAIABIAGAAIABAAIAEgDIAAAAIACgEIgCgEIAAAAIgGgDIgKgCIgLgEQgGgBgEgDIAAgBQgFgEAAgJQAAgIAFgFQAEgGAHgDQAGgCAHAAQAIAAAGACIABABQAGADAEAFQAEAGABAJIgBACIgCACIgCABIgIAAIgDgBIgCgDQAAgFgDgCIgBgBQgDgCgFAAIgGABIgDACIgBAAIgBAEQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABABIAGACIABAAIAJACIALADQAHADADAEQAEAFABAIIAAABQgBAGgCAEIAAABQgDAFgFACQgEAEgGABIgKABIAAAAgAiVAmIAKgBQAFgBAEgDIAAAAQAEgDADgEQADgEAAgGIAAgBQAAgHgEgFQgDgEgGgCIgLgDIgKgDIAAAAIgHgCQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgDABgCIAAAAIAFgDIAGgBQAGAAADADIAAAAQAEADABAGIABACIACAAIAIAAIACAAIABgBIAAgCQAAgIgEgGQgEgFgGgDIAAAAQgGgCgIAAQgGAAgGACQgHACgEAFQgEAGAAAHQAAAIAEAEIAAAAQAEADAGACIgBAAIALADIAKACQAEACADACIAAAAQACACAAADQAAADgCACIAAAAQgCACgDABIgHABIgJgBIABAAQgEgCgCgDIAAAAQgDgDAAgEIgBgCIgCgBIgIAAIgCABIgBACQAAAJAEAGQAEAGAIACIAAAAQAGADAJAAgAAeAkIABAAQgHgCgGgGIAAgBQgEgFgDgHQgCgIAAgHQAAgGACgIQADgHAEgGIAAAAQAGgFAGgDQAHgEAJAAQAJAAAHAEQAHADAEAFIABAAQAEAGACAHQADAIAAAGQAAAHgDAIQgCAHgEAFQgFAGgHADIAAAAQgHAEgJAAQgJAAgHgEgAA+AjQAGgDAEgFQAFgGACgHQACgHAAgHQAAgGgCgHQgCgHgFgGIAAAAQgEgFgGgDQgHgDgJAAQgIAAgHADQgGADgFAFIgBAAQgEAGgCAHQgCAHAAAGQAAAHACAHQACAHAEAGQAFAFAHADQAHADAIAAQAJAAAHgDgAG7AlIAAAAQgGgDgEgGQgEgFAAgJQAAgHAEgFIAEgDIgCgDIgBAAQgDgFAAgGQAAgIAEgEIAAAAQADgFAGgCQAFgDAHAAQAIAAAFADQAGAEADAFQACAFAAAFQAAAGgDAFIgCACIAEADIAAAAQAEAGAAAHIAAABQAAAHgDAGIgBAAQgDAGgHACIABAAQgGADgIAAIAAAAQgHAAgGgCgAG9ghQgGACgCAFQgEAEAAAHQAAAFADAFIAAAAIADAEIgFADQgDAFAAAHQAAAIADAFQAEAGAFACIABAAQAFADAHAAQAHAAAGgDIAAAAQAGgCADgGIAAAAQADgFABgHIAAgBQAAgHgEgFQgCgCgDgCIADgDIAAAAQADgFAAgFQAAgFgDgFQgCgEgFgDQgFgDgIAAQgGAAgFACgAFNAjIAAAAQgFgEgDgGIgBAAQgCgGAAgHIgBgLIABgLQAAgHACgGIABAAQADgGAFgEQAGgEAJAAQAJAAAGAEQAFAEADAGIAAAAQADAGAAAHIABALIgBALQAAAHgDAGIAAAAQgDAGgFAEIAAAAQgGAEgJAAQgJAAgGgEgAFGgWIAAAAQgCAGgBAGIAAALIAAALQABAHACAFIAAABQADAFAFAEIAAAAQAFAEAJAAQAJAAAFgEIAAAAQAFgEADgFIAAgBQACgFABgHIAAgLIAAgLQgBgGgCgGIAAAAQgDgGgFgDIAAAAQgFgEgJAAQgJAAgFAEIAAAAQgFADgDAGgAEXAjIAAAAQgFgEgDgGIgBAAQgCgGAAgHIgBgLIABgLQAAgHACgGIABAAQADgGAFgEQAGgEAJAAQAJAAAGAEQAFAEADAGIAAAAQADAGAAAHIABALIgBALQAAAHgDAGIAAAAQgDAGgFAEIAAAAQgGAEgJAAQgJAAgGgEgAEQgWIAAAAQgCAGgBAGIAAALIAAALQABAHACAFIAAABQADAFAFAEIAAAAQAFAEAJAAQAJAAAFgEIAAAAQAFgEADgFIAAgBQACgFABgHIAAgLIAAgLQgBgGgCgGIAAAAQgDgGgFgDIAAAAQgFgEgJAAQgJAAgFAEIAAAAQgFADgDAGgAmsAmIgIAAIgCgBIgCgCIgNghIAAAgIgBADIgDABIgJAAIgDgBIgBgDIAAhDIABgDIADgBIANAAIACAAIACADIARAsIARgsIACgDIACAAIAMAAIADABIACADIAABDIgCADIgDABIgIAAIgEgBIgBgDIAAggIgMAhIgCACIgCABIAAAAgAmsAlIACgBIABgBIAPgoIAAAnIABACIACABIAIAAIACgBIABgCIAAhDIgBgCIgCgBIgMAAIgCABIgBABIgSAxIgSgxIgBgBIgCgBIgNAAIgCABIgBACIAABDIABACIACABIAJAAIACgBIABgCIAAgnIAPAoIABABIACABgAIRAmIgrAAIgCgBIgCgBIgBgCQABgKADgFIAAgBQADgFAFgEIAAAAIAJgHIAAAAIAJgEIAFgGIAAABIABgGIgBgEIAAAAIgDgDIgBAAIgEgBQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIAAAAIgBAGIgBADIgEACIgIAAIgDgCIgBgDQAAgHADgHQADgGAFgEIAAAAQAGgEAJAAQAHAAAFACIABABQAFADAEAFQADAFAAAIQAAAHgCAFIgBABQgCADgEAEIgBAAIgIAFIgIAGIgBAAIgFAEIAbAAIADACIACADIAAAHIgCADIgDABIAAAAgAHuAKIAAAAQgFAEgDAFIAAAAQgDAGAAAJIAAABIABABIACABIArAAIACgBIABgCIAAgHIgBgCIgCgBIgeAAIACgDIAFgEIABAAIAIgGIAAAAIAIgFIABAAQAEgEACgDIAAAAQADgGAAgGQAAgHgDgFIAAAAQgEgFgFgDIAAAAQgGgCgGAAQgIAAgGADIAAAAQgFAEgDAGQgDAGAAAHIABACIACABIAIAAIACgBIABgCIACgGIAAgBQABgDACgBQACgCADAAIAFABIAAAAIAEADIAAAAIABAFIgBAGIAAAAQgCADgDADIgJAFIAAAAIgJAGgAGZAmIgIAAIgDgBIgBgDIAAgrIgNAAIgEgBIgBgDIAAgHIABgDIAEgBIAIgBIAEgCQACgDABgDIACgDIACgBIAGAAIAEABIABAEIAABCIgBADIgEABIAAAAgAGRgjIgBACIgCAGIgBABIgFACIgIABIgCABIgBACIAAAHIABACIACABIAOAAIAAAsIABACIACABIAIAAIACgBIABgCIAAhCIgBgCIgCgBIgGAAIgCAAgADeAmIgsAAIgCgBIgCgBIAAgCQAAgKADgFIABgBQADgFAFgEIgBAAIAJgHIABAAIAJgEIAEgGIAAABIABgGIgBgEIAAAAIgDgDIAAAAIgEgBQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIgCAGIgBADIgDACIgIAAIgDgCIgCgDQAAgHADgHQADgGAGgEIAAAAQAGgEAIAAQAHAAAGACIABABQAFADAEAFQADAFAAAIQAAAHgDAFIAAABQgDADgEAEIAAAAIgIAFIgJAGIAAAAIgFAEIAbAAIADACIABADIAAAHIgBADIgDABIAAAAgAC7AKIgBAAQgEAEgDAFIAAAAQgDAGgBAJIABABIABABIABABIAsAAIACgBIABgCIAAgHIgBgCIgCgBIgeAAIACgDIAFgEIAAAAIAJgGIAAAAIAIgFIAAAAQAEgEADgDIAAAAQACgGAAgGQAAgHgDgFIAAAAQgDgFgFgDIgBAAQgFgCgHAAQgIAAgFADIAAAAQgGAEgDAGQgCAGAAAHIABACIACABIAIAAIACgBIABgCIABgGIAAgBQABgDACgBQACgCAEAAIAFABIAAAAIAEADIAAAAIABAFIgCAGIABAAQgCADgDADIgKAFIAAAAIgIAGgACoAmIgsAAIgCgBIgCgBIAAgCQAAgKADgFIABgBQADgFAFgEIgBAAIAJgHIABAAIAJgEIAEgGIAAABIABgGIgBgEIAAAAIgDgDIAAAAIgEgBQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIgCAGIgBADIgDACIgIAAIgDgCIgCgDQAAgHADgHQADgGAGgEIAAAAQAGgEAIAAQAHAAAGACIABABQAFADAEAFQADAFAAAIQAAAHgDAFIAAABQgDADgEAEIAAAAIgIAFIgJAGIAAAAIgFAEIAbAAIADACIABADIAAAHIgBADIgDABIAAAAgACFAKIgBAAQgEAEgDAFIAAAAQgDAGgBAJIABABIABABIABABIAsAAIACgBIABgCIAAgHIgBgCIgCgBIgeAAIACgDIAFgEIAAAAIAJgGIAAAAIAIgFIAAAAQAEgEADgDIAAAAQACgGAAgGQAAgHgDgFIAAAAQgDgFgFgDIgBAAQgFgCgHAAQgIAAgFADIAAAAQgGAEgDAGQgCAGAAAHIABACIACABIAIAAIACgBIABgCIABgGIAAgBQABgDACgBQACgCAEAAIAFABIAAAAIAEADIAAAAIABAFIgCAGIABAAQgCADgDADIgKAFIAAAAIgIAGgAACAmIgJAAIgCAAIgCgCIgbgoIAAAmIgBADIgDABIgJAAIgDgBIgBgDIAAhDIABgDIADgBIAKAAIACAAIACACIAbApIAAgnIABgDIADgBIAIAAIADABIABADIAABDIgBADIgDABIAAAAgAgKAjIABABIACABIAJAAIACgBIABgCIAAhDIgBgCIgCgBIgIAAIgCABIgBACIAAAsIgeguIgBgBIgBAAIgKAAIgCABIgBACIAABDIABACIACABIAJAAIACgBIABgCIAAgrgAhAAmIguAAIgEgBIgBgDIAAhDIABgDIAEgBIAuAAIADABIACADIAAAIIgCADIgDABIghAAIAAANIAfAAIADABIABADIAAAHIgBADIgDABIgfAAIAAAPIAhAAIADABIACADIAAAIIgCADIgDABIAAAAgAhwgjIgBACIAABDIABACIACABIAuAAIACgBIABgCIAAgIIgBgCIgCgBIgiAAIAAgRIAgAAIACgBIABgCIAAgHIgBgCIgCgBIggAAIAAgPIAiAAIACgBIABgCIAAgIIgBgCIgCgBIguAAIgCABgAkNAmIgJAAIgDgBIgBgDIAAhDIABgDIADgBIAgAAQALAAAHAGIAAAAQAHAGAAAKQAAAIgDAFIgBAAIgDADIAEAGIAAAAIABAIIABAHIAAAFIABAAIABAEIABADIgBADIgDABIgKAAIgCAAIgCgCIgCgFIgBgHIAAgGIgCgFIAAAAIgBgDIgEgBIgRAAIAAAZIgBADIgEABIAAAAgAjyAJIAAAAIACADIABAGIABAGIAAAGIACAFIABABIACABIAKAAIACgBIABgCIgBgCIgCgEIAAgBIgBgFIAAgHIgBgHIgEgGIgBgBIAEgDIAAgBQADgFAAgHQAAgKgGgFQgGgGgLAAIggAAIgCABIgBACIAABDIABACIACABIAJAAIACgBIABgCIAAgaIATAAIAAAAIAFABgAlbAlIgBgDIAAhDIABgDIADgBIAZAAIAGAAIAAAAIAHABIAGACIABAAQAEACADAFIAAAAQADAEAAAHQAAAHgDAFIgCACIAEADQAEAGAAAHQAAAGgDAGIAAgBQgDAGgGADQgFAEgIAAIghAAIAAAAIgDgBgAlagjIgBACIAABDIABACIACABIAhAAQAHAAAGgEQAFgDADgFIgBAAQADgFAAgGQAAgHgEgFIAAAAQgCgCgDgCIADgDQADgFAAgGQAAgGgCgEIAAgBQgDgEgEgCIAAAAIgGgCIgHgBIAAAAIgGAAIgZAAIgCABgAoIAmIgJAAIgDgBIgBgDIAAhDIABgDIADgBIAeAAQAMAAAHAHQAGAGAAALQAAAMgGAFQgHAHgMAAIgQAAIAAAXIgBADIgEABIAAAAgAoTgjIgBACIAABDIABACIACABIAJAAIACgBIABgCIAAgZIASAAQALAAAGgGQAGgFAAgLQAAgLgGgFQgGgHgLAAIgeAAIgCABgAAuAZQgFAAgEgCIAAAAQgEgCgCgEIAAABIgEgJIgBgJIABgJIAAABIAEgIIAAAAQACgEAEgCQAEgCAFAAQAFAAAEACQAEACACAEIAAAAIAEAIIAAgBIABAJIgBAKIAAgBQgBAFgDADIAAABQgCADgEACIAAAAQgEACgEAAIgBAAgAAbAAIABAJIAEAIQACADADABIABAAQAEACAEAAQAFAAADgCIABAAQADgBACgDIAAgBQADgDABgEIAAAAIABgJIgBgIIAAAAIgEgHIAAAAQgCgDgEgCQgDgCgFAAQgEAAgEACQgEACgCADIgEAHIAAAAIgBAIgAHAAWIAAAAQgDgDAAgEIABgFIAAAAIAEgDIAGgCIAGACIAEADIABAFQAAAEgDADIAAAAQgDADgFAAIAAAAQgFAAgDgDgAG/APQAAAEACACIAAAAQADACAEAAQAEAAADgCIAAAAQACgDABgDIgBgEIgEgDIgFgBIgGABIABAAIgDADIAAgBIgBAFgAFWAXIAAAAQgCgDgBgDIAAAAIgCgIIAAgIIAAgIIAAAAIACgIIAAABQABgEACgCIAAAAQACgCAEAAQAEAAABACIABAAQACACACAEIgBgBIACAIIAAAIIAAAIIAAAAIgCAIIABAAQgCADgCADIgBAAQgBACgEAAQgEAAgCgCgAFTgHIAAAIIAAAIIABAIIADAEIABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAAAgBQABAAAAAAIABgBIADgEIABgIIAAgIIAAgHIgBgIIAAAAQgBgDgCgCIgBAAQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABIgBAAQgCACgBADIAAAAIgBAHgAEgAXIAAAAQgCgDgBgDIAAAAIgCgIIAAgIIAAgIIAAAAIACgIIAAABQABgEACgCIAAAAQACgCAEAAQAEAAABACIABAAQACACACAEIgBgBIACAIIAAAIIAAAIIAAAAIgCAIIABAAQgCADgCADIgBAAQgBACgEAAQgEAAgCgCgAEdgHIAAABIAAAHIAAAIIABAIIADAEIABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAAAgBQABAAAAAAIABgBIADgEIABgIIAAgIIAAgHIgBgIIAAAAQgBgDgCgCIgBAAQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABIgBAAQgCACgBADIAAAAIgBAHgAk4AXIgUAAIAAgRIASAAIAGABIAEACQABACAAADQAAAEgCACIAAABQgDACgEAAIAAAAgAlKAWIASAAQADAAADgDIAAAAQACgCAAgDIgBgEIgDgCIgGgBIgQAAgAEGAQIgcAAIgDgBIgBgEIAAgHIABgEIADAAIAcAAIADAAIABAEIAAAHIgBAEIgDABIAAAAgADoACIgBACIAAAHIABACIACABIAcAAIACgBIABgCIAAgHIgBgCIgCgBIgcAAIgCABgAB0AQIgcAAIgDgBIgBgEIAAgHIABgEIADAAIAcAAIADAAIABAEIAAAHIgBAEIgDABIAAAAgABWACIgBACIAAAHIABACIACABIAcAAIACgBIABgCIAAgHIgBgCIgCgBIgcAAIgCABgAi7AQIgbAAIgDgBIgCgEIAAgHIACgEIADAAIAbAAIAEAAIABAEIAAAHIgBAEIgEABIAAAAgAjYACIgBACIAAAHIABACIACABIAbAAIACgBIABgCIAAgHIgBgCIgCgBIgbAAIgCABgAllAQIgcAAIgDgBIgBgEIAAgHIABgEIADAAIAcAAIADAAIABAEIAAAHIgBAEIgDABIAAAAgAmDACIgBACIAAAHIABACIACABIAcAAIACgBIABgCIAAgHIgBgCIgCgBIgcAAIgCABgAn2gDIgPAAIAAgTIAPAAQAGAAADACIAAABQACACAAAEQAAAFgCACIAAAAQgDADgGAAIAAAAgAoDgFIANAAQAFAAACgCIABAAQACgCAAgEQAAgDgCgCIgBgBQgCgCgFAAIgNAAgAkKgFIAAgRIATAAQAFAAACACQACADAAADQAAAEgBACIgEACIgHABgAkIgGIAOAAIAHgBIADgCIABgFQAAgDgCgCQgCgCgEAAIgRAAgAlMgHIAAgPIAPAAIAHABIAAAAIADACIAAAAQABABAAAEQAAADgCADIABgBQgDACgHAAgAlKgIIANAAQAFAAADgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIgBgEIAAgBIgCgBIgBAAIgGgBIgNAAgAHIgHIgFgBIgDgCIgBgFIABgEIADgCIABAAIAEgBQAEAAACACIAAAAQACACAAADQAAAEgCACIAAAAQgCACgEAAIAAAAgAHEgUIAAABIgDABIAAADIAAAEIADABIAEABIAFgBIAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBIAAAAQgCgCgDAAIAAAAIgEABg");
	this.shape_1.setTransform(88.575,109.1751);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AikAiQgHgDgDgFIAAAAQgFgGAAgIIABgBIABgBIAIAAIABABIABABQAAAFADADIAAAAQACADAEACIAAAAIAJABIAHgBIAAAAQAEgBACgCIAAAAQACgCABgEQgBgEgCgCIAAAAQgDgCgFgCIgKgCIgKgEIAAABQgGgBgDgEIAAAAQgEgEAAgHQAAgHAEgFQAEgFAGgCQAGgCAGAAQAIAAAFACIAAAAQAGADAEAFQADAFABAIIgBABIAAABIgBAAIgIAAIgBAAIgBgBQgBgHgEgDIAAAAQgEgDgGAAIgHABQgDABgCACIAAAAQgCACAAAEQAAADADACQADACAFABIAAAAIAKACIAKADQAGACADAEQADAEABAHIAAABQgBAFgCAEQgDAEgEADQgEADgFABIgJABIgBAAQgIAAgGgDgAAgAiIAAAAQgHgDgEgFIgBAAQgEgFgCgHQgCgHAAgHQAAgGACgHQACgHAEgFIABAAQAEgEAHgEQAGgDAIAAQAJAAAGADQAGAEAEAEIAAAAQAFAFACAHQACAHAAAGQAAAHgCAHQgCAHgFAFQgEAFgGADIAAAAQgGADgJAAQgIAAgGgDgAA4AYIAAAAQAEgCACgEIAAAAQADgEACgEIABgKIgBgJIgFgIIAAAAQgCgEgEgCQgEgCgGAAQgFAAgFACQgEACgDAEIAAAAIgDAIQgCAFAAAEIACAKIADAIIAAAAQADAEAEACIAAAAQAFACAFAAQAGAAAEgCgAG8AiIAAAAQgFgDgDgFQgEgEAAgIQAAgGAEgFIAAAAQACgDAEgBIgFgFIAAAAQgDgEAAgFQAAgGAEgEIAAAAQACgEAFgDQAFgCAGAAQAHAAAFADQAFADACAEQACAEAAAFQAAAFgCAEIgFAFQAFABACADIAAAAQADAFAAAGQAAAHgDAFQgDAFgGADIAAAAQgFACgHAAIAAAAQgHAAgFgCgAG9AJQgBACAAAEQAAAFADADIAAAAQADADAGAAQAFAAAEgDIAAAAQADgDABgFIgCgGQgCgDgCgBIgHgBIgHABIAAAAQgCABgCADgAHDgHIAFABQAFAAACgCIAAAAQADgCAAgFQAAgEgDgCIAAAAQgCgDgFAAIgFABIAAABIgEACIgBAFIABAGIAAgBIAEADgAFPAhIAAAAQgFgEgCgFIgBAAQgCgFAAgHIgBgLIABgLQAAgGACgFIABAAQACgGAFgDIAAAAQAFgEAIAAQAIAAAFAEIAAAAQAFADACAGIABAAQACAFAAAGIABALIgBALQAAAHgCAFIgBAAQgCAFgFAEIAAAAQgFADgIAAQgIAAgFgDgAFVgVIAAAAQgCACgCAEIgBAIIAAAAIAAAIIAAAIIABAJQACADACADIAAAAQADACAEAAQAEAAADgCIAAAAQACgDACgDIABgJIAAAAIAAgIIAAgIIgBgIQgCgEgCgCIAAAAQgDgDgEAAQgEAAgDADgAEZAhIAAAAQgFgEgCgFIgBAAQgCgFAAgHIgBgLIABgLQAAgGACgFIABAAQACgGAFgDIAAAAQAFgEAIAAQAIAAAFAEIAAAAQAFADACAGIABAAQACAFAAAGIABALIgBALQAAAHgCAFIgBAAQgCAFgFAEIAAAAQgFADgIAAQgIAAgFgDgAEfgVIAAAAQgCACgCAEIgBAIIAAAAIAAAIIAAAIIABAJQACADACADIAAAAQADACAEAAQAEAAADgCIAAAAQACgDACgDIABgJIAAAAIAAgIIAAgIIgBgIQgCgEgCgCIAAAAQgDgDgEAAQgEAAgDADgAmsAjIgIAAIAAAAIgBgBIgTgvIAAAvIAAABIgBAAIgJAAIgBAAIAAgBIAAhDIAAgBIABAAIANAAIABAAIAAABIAUA0IAUg0IAAgBIABAAIAMAAIABAAIABABIAABDIgBABIgBAAIgIAAIgBAAIgBgBIAAgvIgSAvIAAABIgBAAIAAAAgAHmAjIgBAAIgBAAIAAgBQABgJACgFQAEgFAEgEIAIgGIAKgFIAAAAQAEgDACgDQABgDAAgEIgBgFQgCgDgDgCQgCgBgEAAQgEAAgCADQgDACgBADIAAAAIgBAHIgBABIgBABIgIAAIgBgBIAAgBQAAgHACgFQADgGAFgDQAFgEAIAAQAGAAAFACIABAAQAEADAEAFQACAEAAAHQAAAGgCAFIAAAAIgGAHIgJAFIgIAGQgEABgCADIgDAFIAgAAIABABIABABIAAAHIgBABIgBAAgAGRAjIgBAAIAAgBIAAguIgQAAIgBAAIgBgBIAAgHIABgBIABAAIAJgBIAFgDIABgBQACgCABgFIAAgBIABAAIAGAAIABABIABABIAABCIgBABIgBAAgACyAjIAAAAIgBAAIAAgBQAAgJADgFQADgFAEgEIAJgGIAKgFIgBAAQAEgDACgDQABgDAAgEIgBgFQgCgDgDgCQgCgBgDAAQgEAAgDADQgCACgBADIAAAAIgCAHIAAABIgBABIgIAAIgBgBIgBgBQAAgHADgFQADgGAEgDQAGgEAHAAQAHAAAFACIAAAAQAFADADAFQADAEAAAHQAAAGgCAFIAAAAIgHAHIgIAFIgJAGQgDABgCADIgEAFIAhAAIABABIAAABIAAAHIAAABIgBAAgAB8AjIAAAAIgBAAIAAgBQAAgJADgFQADgFAEgEIAJgGIAJgFIAAAAQAEgDACgDQABgDAAgEIgBgFQgCgDgDgCQgCgBgDAAQgEAAgDADQgCACgBADIAAAAIgCAHIAAABIgBABIgIAAIgBgBIgBgBQAAgHADgFQADgGAEgDQAGgEAHAAQAHAAAFACIAAAAQAFADADAFQADAEAAAHQAAAGgCAFIAAAAIgHAHIgIAFIgJAGQgDABgCADIgEAFIAhAAIABABIAAABIAAAHIAAABIgBAAgAgHAjIgBAAIgBAAIgggxIAAAwIAAABIgBAAIgJAAIgBAAIAAgBIAAhDIAAgBIABAAIAKAAIABAAIAAAAIAhAyIAAgxIAAgBIABAAIAIAAIABAAIAAABIAABDIAAABIgBAAgAhuAjIgBAAIgBgBIAAhDIABgBIABAAIAuAAIABAAIABABIAAAIIgBABIgBAAIgkAAIAAATIAiAAIABAAIAAABIAAAHIAAABIgBAAIgiAAIAAAVIAkAAIABAAIABABIAAAIIgBABIgBAAgAjpAjIgBAAIAAAAIgCgFIgBgGIAAgHIgCgFIgCgEQgCgCgEAAIgUAAIAAAcIgBABIgBAAIgJAAIgBAAIAAgBIAAhDIAAgBIABAAIAgAAQAKAAAGAFIAAAAQAGAFAAAJQAAAHgDAFQgCADgEABIADACIADAFIABAHIABAHIABAGIAAAAIACAFIAAABIAAABIgBAAgAkLgDIARAAIAHgBQADgBACgCQACgCAAgFQAAgEgCgDQgDgDgGAAIgUAAgAlYAjIgBAAIAAgBIAAhDIAAgBIABAAIAZAAIAGAAIAAAAIAHABIAFABQAEADACADQADAEAAAGQAAAGgDAEQgCADgDACQAFABACADIAAAAQAEAFAAAGQAAAGgDAFIAAgBQgCAFgFADQgFADgHAAgAlNAZIAVAAQAFAAADgDIAAgBQADgCAAgFQAAgEgCgCQgCgCgDgBIgGgBIgTAAgAlNgFIAQAAQAHAAAEgDQACgCAAgEQAAgFgCgBIAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIAAAAIgHgBIgQAAgAoRAjIgBAAIAAgBIAAhDIAAgBIABAAIAeAAQAKAAAGAGQAGAFAAAKQAAAKgGAFQgGAGgKAAIgTAAIAAAaIgBABIgBAAgAoGgCIAQAAQAHAAADgDIAAAAQADgDAAgFQAAgFgDgCIAAgBQgDgDgHAAIgQAAgADqANIgBgBIAAgBIAAgHIAAgBIABgBIAcAAIABABIAAABIAAAHIAAABIgBABgABYANIgBgBIAAgBIAAgHIAAgBIABgBIAcAAIABABIAAABIAAAHIAAABIgBABgAjWANIgBgBIgBgBIAAgHIABgBIABgBIAbAAIABABIABABIAAAHIgBABIgBABgAmBANIgBgBIAAgBIAAgHIAAgBIABgBIAcAAIABABIAAABIAAAHIAAABIgBABg");
	this.shape_2.setTransform(88.575,109.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.codigo, new cjs.Rectangle(33.3,102,110.8,25.099999999999994), null);


(lib.bggris = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(0,0,0,0.098)","#FFFFFF"],[0,1],-8.5,632.6,-15.4,115.4).s().p("EgaZAyfMAAAhk9MA0zAAAMAAABk9g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bggris, new cjs.Rectangle(-169,-323,338.1,646.1), null);


(lib._6346436363 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Eg+CBR5MAAAijxMB8EAAAMAAACjxg");
	this.shape.setTransform(-2,-328.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._6346436363, new cjs.Rectangle(-399,-853,794.1,1048.2), null);


(lib._64564646 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.burbuja();
	this.instance.setTransform(-52.35,-52.35,3.2718,3.2718);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._64564646, new cjs.Rectangle(-52.3,-52.3,104.69999999999999,104.69999999999999), null);


(lib._6456464 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#01B9DD","#194492"],[0,1],-21,19,0,-21,19,41.8).s().p("Ag5HtQghABgXgVQgUgUAAghIAAjJQAAgmgbgXQgXgYgjAAIjKAAQggAAgUgXQgVgXAAgeIAAh0QAAgfAVgVQAUgXAgAAIDKAAQAjAAAXgYQAbgXAAgmIAAjHQAAggAUgXQAXgUAhAAIBxAAQAdAAAXAUQAXAXAAAgIAADHQAAAmAbAXQAXAYAjAAIDKAAQAgAAAXAXQAVAVAAAfIAAB0QAAAegVAXQgXAXggAAIjKAAQgjAAgXAYQgbAXAAAmIAADJQAAAhgXAUQgXAVgdgBg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._6456464, new cjs.Rectangle(-49.3,-49.3,98.69999999999999,98.69999999999999), null);


(lib._643636n = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2652B3","#10259B"],[0,1],0,0,0,0,0,149.7).s().p("A00KoIAA1PMAppAAAIAAVPg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._643636n, new cjs.Rectangle(-133.2,-68,266.5,136.1), null);


(lib._643636 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2652B3","#10259B"],[0,1],0,0,0,0,0,149.7).s().p("A00KoIAA1PMAppAAAIAAVPg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._643636, new cjs.Rectangle(-133.2,-68,266.5,136.1), null);


(lib.Symbol20Y2n = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sigomas();
	this.instance.setTransform(-77.2,51.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(1.675,64.8929);

	// degrade
	this.instance_1 = new lib._643636n();
	this.instance_1.setTransform(5.2,73.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20Y2n, new cjs.Rectangle(-131.7,26.1,269.79999999999995,81.30000000000001), null);


(lib.Symbol20Y = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap3E1QgggZAAgvQAAg0AugcQgjgZAAgsQAAgtAfgaQAggZAtAAQAuAAAfAZQAfAaAAAtQAAAtgjAYQAuAcAAA0QAAAvggAZQggAbg3AAQg3AAgggbgApHDDQgPAMAAAWQAAAWAPAMQAPAMAYgBQAYABAPgMQAPgMAAgWQAAgWgPgMQgPgMgYAAQgYAAgPAMgAo+A/QgMAKAAATQAAASAMALQALAKATAAQATAAAMgKQAMgLAAgSQAAgTgMgKQgMgLgTAAQgTAAgLALgAIjFJIAAkGIg/ARIgQg3IBXgeIA5AAIAAFKgAD5FJIAAjXIhdCaIgIAAIhdiZIAADWIhAAAIAAlKIBCAAIBfCcIBeicIBEAAIAAFKgAkEFJIAAlKIDLAAIAAA9IiKAAIAABHIB+AAIAAA9Ih+AAIAABLICMAAIAAA+gAPXhmQgfgeAAgsQAAgtAfgeQAegeAsgBQAsABAfAeQAeAeAAAtQAAAsgeAeQgfAfgsAAQgsAAgegfgAPzjgQgTATAAAdQAAAdATASQATATAbAAQAcAAATgTQASgSAAgdQAAgdgSgTQgTgSgcAAQgbAAgTASgAgxhmQgfgeAAgsQAAgtAfgeQAegeArgBQAsABAfAeQAeAeAAAtQAAAsgeAeQgfAfgsAAQgrAAgegfgAgVjgQgTATAAAdQAAAdATASQATATAaAAQAcAAATgTQASgSAAgdQAAgdgSgTQgTgSgcAAQgaAAgTASgAuahaQgWgTAAggIAAiIIAnAAIAACEQAAARAJAJQAKAJATAAQATAAAJgJQAKgJAAgRIAAiEIAnAAIAACIQAAAggVATQgWATgiAAQgiAAgVgTgAxrhlQgegeAAgtQAAgtAegeQAdgeAugBQAbABAYANQAXANANAWIgiATQgIgOgOgHQgOgIgRABQgdgBgSATQgTASAAAeQAAAdATASQASATAdAAQARAAAOgIQAOgHAIgOIAiAUQgNAWgXANQgXANgcAAQguAAgdgegAN0hLIAAjKIAoAAIAADKgAMyhLIgphHIgfAAIAABHIgnAAIAAjKIBQAAQAdgBATAVQAUATAAAbQAAAUgLAPQgLAQgRAJIAtBMgALqi0IApAAQAMAAAIgJQAIgJAAgNQAAgMgIgIQgIgJgMAAIgpAAgAKGhLIgMglIhUAAIgMAlIgrAAIBHjKIAyAAIBHDKgAIziVIA5AAIgdhSgAG0hLIAAjKIAoAAIAADKgADmhLIAAjKIBQAAQAqAAAcAdQAcAdAAArQAAArgcAdQgcAdgqAAgAEOhxIAoAAQAbAAAQgSQARgRAAgcQAAgcgRgRQgQgSgbAAIgoAAgAkVhLIAAjKIBQAAQAqAAAcAdQAcAdAAArQAAArgcAdQgcAdgqAAgAjthxIAoAAQAbAAAQgSQARgRAAgcQAAgcgRgRQgQgSgbAAIgoAAgAlRhLIgNglIhTAAIgMAlIgrAAIBHjKIAxAAIBHDKgAmkiVIA5AAIgdhSgAqkhLIAAjKIBQAAQApAAAcAdQAcAdAAArQAAArgcAdQgcAdgpAAgAp9hxIApAAQAaAAARgSQAQgRAAgcQAAgcgQgRQgRgSgaAAIgpAAgArxhLIAAjKIAnAAIAADKgAI4knIAXgoIAtAAIggAog");
	mask.setTransform(4.175,42.4);

	// degrade
	this.instance = new lib._643636();
	this.instance.setTransform(5.2,54.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20Y, new cjs.Rectangle(-117.2,2.2,242.9,92), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlKFLQiJiJAAjCQAAjBCJiJQCJiJDBAAQDCAACJCJQCJCJAADBQAADCiJCJQiJCJjCAAQjBAAiJiJg");
	mask.setTransform(0.15,-0.05);

	// Layer_2
	this.instance = new lib._64564646();
	this.instance.setTransform(0.35,-0.65);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.6,-46.8,93.6,93.6);


(lib.Symbol14yt = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol6yt();
	this.instance.setTransform(0,0,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14yt, new cjs.Rectangle(-114,-29.6,228,59.3), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol15("synched",0,false);
	this.instance.setTransform(326.3,-99.65,0.516,0.516,0,0,0,0.4,-0.1);

	this.burbuja = new lib.Symbol15();
	this.burbuja.name = "burbuja";
	this.burbuja.setTransform(385.25,-202.3,0.253,0.253,0,0,0,1.4,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.burbuja}]},79).to({state:[{t:this.instance}]},1).to({state:[{t:this.burbuja}]},79).to({state:[{t:this.instance}]},1).to({state:[{t:this.burbuja}]},79).to({state:[{t:this.instance}]},1).to({state:[{t:this.burbuja}]},79).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:1.4,regY:-1.2,scaleX:0.253,scaleY:0.253,guide:{path:[326.3,-99.7,322.8,-109.2,320,-119,310.7,-150.8,309.1,-182.3,307.4,-214.3,313.7,-241.8,320.4,-270.5,335,-290.9,350.7,-312.6,381.9,-334.2,413.1,-355.8,457.8,-352.3,502.4,-348.8,519.3,-339.3,536.2,-329.7,543.3,-310.5,550.4,-291.2,554.1,-267.1,557.7,-243.4,553.2,-224.2,548.4,-203.4,518,-177.5,487.6,-151.7,451,-159.3,416.7,-166.3,385.4,-202.3]},mode:"independent"},79).wait(1).to({_off:false,regX:0.4,regY:-0.1,scaleX:0.516,scaleY:0.516,x:326.3,y:-99.65,mode:"synched",startPosition:0,loop:false},0).to({_off:true,regX:1.4,regY:-1.2,scaleX:0.253,scaleY:0.253,guide:{path:[326.3,-99.7,322.8,-109.2,320,-119,310.7,-150.8,309.1,-182.3,307.4,-214.3,313.7,-241.8,320.4,-270.5,335,-290.9,350.7,-312.6,381.9,-334.2,413.1,-355.8,457.8,-352.3,502.4,-348.8,519.3,-339.3,536.2,-329.7,543.3,-310.5,550.4,-291.2,554.1,-267.1,557.7,-243.4,553.2,-224.2,548.4,-203.4,518,-177.5,487.6,-151.7,451,-159.3,416.7,-166.3,385.4,-202.3]},mode:"independent"},79).wait(1).to({_off:false,regX:0.4,regY:-0.1,scaleX:0.516,scaleY:0.516,x:326.3,y:-99.65,mode:"synched",startPosition:0,loop:false},0).to({_off:true,regX:1.4,regY:-1.2,scaleX:0.253,scaleY:0.253,guide:{path:[326.3,-99.7,322.8,-109.2,320,-119,310.7,-150.8,309.1,-182.3,307.4,-214.3,313.7,-241.8,320.4,-270.5,335,-290.9,350.7,-312.6,381.9,-334.2,413.1,-355.8,457.8,-352.3,502.4,-348.8,519.3,-339.3,536.2,-329.7,543.3,-310.5,550.4,-291.2,554.1,-267.1,557.7,-243.4,553.2,-224.2,548.4,-203.4,518,-177.5,487.6,-151.7,451,-159.3,416.7,-166.3,385.4,-202.3]},mode:"independent"},79).wait(1).to({_off:false,regX:0.4,regY:-0.1,scaleX:0.516,scaleY:0.516,x:326.3,y:-99.65,mode:"synched",startPosition:0,loop:false},0).to({_off:true,regX:1.4,regY:-1.2,scaleX:0.253,scaleY:0.253,guide:{path:[326.3,-99.7,322.8,-109.2,320,-119,310.7,-150.8,309.1,-182.3,307.4,-214.3,313.7,-241.8,320.4,-270.5,335,-290.9,350.7,-312.6,381.9,-334.2,413.1,-355.8,457.8,-352.3,502.4,-348.8,519.3,-339.3,536.2,-329.7,543.3,-310.5,550.4,-291.2,554.1,-267.1,557.7,-243.4,553.2,-224.2,548.4,-203.4,518,-177.5,487.6,-151.7,451,-159.3,416.7,-166.3,385.4,-202.3]},mode:"independent"},79).wait(41));

	// Layer_3
	this.instance_1 = new lib.Symbol16();
	this.instance_1.setTransform(431.9,-173.85);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(178.5,-371.6,506.79999999999995,394.6);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_38 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(8));

	// Layer_4
	this.instance = new lib.Symbol8();
	this.instance.setTransform(-444.1,36.2,1.2635,1.2635);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regX:-0.2,regY:-0.2,scaleX:2.8492,scaleY:2.8492,x:-485.35,y:9.5},10,cjs.Ease.get(1)).to({regY:-0.1,scaleX:2.1975,scaleY:2.1975,x:-471.45,y:19.8},9).wait(8));

	// Layer_1
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(-0.45,0.85,4.37,4.37,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ElXcD0LMAAAnoVMKu5AAAMAAAHoVg");
	this.shape.setTransform(17.325,-89.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(46));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2180.8,-1651.9,4396.3,3125.5);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol20();
	this.instance.setTransform(0.05,-0.55,1.1362,1.1362,0,0,0,-0.8,9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.6,-35.8,256.2,75.5);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {uno:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop ();
	}
	this.frame_71 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(1));

	// Layer_4
	this.instance = new lib.Symbol8();
	this.instance.setTransform(-483.05,-89.75,1.1404,1.1404);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({regX:-0.2,regY:-0.2,scaleX:2.5713,scaleY:2.5713,x:-520.25,y:-113.85},10,cjs.Ease.get(1)).to({regY:-0.1,scaleX:1.9832,scaleY:1.9832,x:-508.4,y:-104.2},9).wait(9));

	// Layer_1
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(-66,-114);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},29).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2282.3,-2067.4,4565.200000000001,3636.9);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(0,0,1.5538,1.5538,-21.6702);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-605.3,-605.3,1210.6999999999998,1210.6999999999998), null);


(lib.Symbol2Y2n = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol20Y2n();
	this.instance.setTransform(-2.95,57,1.2971,1.2971,0,0,0,3,66);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:-3,alpha:1},14,cjs.Ease.get(1)).to({regX:2.9,scaleX:0.7875,scaleY:0.7875,y:57.05},225).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.9,-21.8,345.70000000000005,176.5);


(lib.Symbol2Y = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol20Y();
	this.instance.setTransform(-2.95,63.6,1.2971,1.2971,0,0,0,3,66);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:-3,y:57,alpha:1},14,cjs.Ease.get(1)).to({regX:2.9,scaleX:0.7875,scaleY:0.7875,y:52.65},225).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.9,-39.5,345.70000000000005,176.5);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao8B6QgegeAAgsIAAAAQAAgsAegeIAAAAQAfgeAsAAIAAAAQArAAAfAeIAAAAQAfAeAAAsIAAAAQAAAsgfAeIAAAAQgfAfgrAAIAAAAQgsAAgfgfgAogAAQgTATAAAdIAAAAQAAAdATASIAAAAQATATAcAAIAAAAQAbAAATgTIAAAAQATgSAAgdIAAAAQAAgdgTgTIAAAAQgTgSgbAAIAAAAQgcAAgTASgAsQB7QgegfAAgsIAAAAQAAgtAegdIAAAAQAegeAtAAIAAAAQAcAAAXAMIAAAAQAXANANAWIAAAAIgiATQgIgMgNgIIAAAAQgOgIgSAAIAAAAQgdAAgSASIAAAAQgSASAAAeIAAAAQAAAdASATIAAAAQASATAdgBIAAAAQASAAAOgIIAAAAQAOgHAHgNIAAAAIAiATQgNAWgXANIAAAAQgXANgcAAIAAAAQgtAAgegegAJ0CVIgNgkIhTAAIgMAkIgrAAIBHjJIAxAAIBIDJgAIhBLIA5AAIgdhRgAGSCVIAAijIg2AAIAAgmICUAAIAAAmIg2AAIAACjgADHCVIAAjJIB7AAIAAAmIhTAAIAAAqIBMAAIAAAlIhMAAIAAAuIBVAAIAAAmgAA1CVIAAjJIAoAAIAACjIBNAAIAAAmgAh4CVIAAjJIBLAAQAeAAASATIAAAAQAUAUAAAcIAAAAQAAAcgUAUIAAAAQgSATgeAAIAAAAIgkAAIAABDgAhRAtIAkAAQANAAAIgJIAAAAQAIgIAAgNIAAAAQAAgOgIgHIAAAAQgIgJgNAAIAAAAIgkAAgAjMCVIAAiDIg5BeIgFAAIg4heIAACDIgoAAIAAjJIApAAIA6BeIA5heIAqAAIAADJgAMAiYIAvAAQgMACgMAAIAAAAQgMAAgLgCgAkqiYIAvAAQgMACgMAAIAAAAQgLAAgMgCg");
	mask.setTransform(2.7504,-0.8496);

	// Layer_2
	this.instance = new lib.degrade53();
	this.instance.setTransform(0,3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-78.7,-9.7,162.9,24.2), null);


(lib.promotioncode = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.codigo();
	this.instance.setTransform(-88,-109);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.8,-3.8,106.8,8);


(lib.ClipGroup656 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.ClipGroup_4656();
	this.instance.setTransform(176,66.5,1,1,0,0,0,176,22.5);

	this.instance_1 = new lib.ClipGroup_165();
	this.instance_1.setTransform(392.8,65.2,1,1,0,0,0,88.8,65.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00ACE9").s().p("AjYCgQg/g+AAhiQAAhaBChBQBChCBdAAQBgAABAA+QA/A+AABeQAABehBBBQhBBChdAAQhkAAg+g+gAiZhgQgqAoAAA4QAAA9AoAnQAmAmA/AAQA5AAApgoQAogpAAg6QAAg7gngnQgngmg8AAQg6AAgpApgAo/DXQgegGgSgIIgGgDIAJglQADgNAMgHQALgHANADQAuALAXAAQAqAAAZgPQAagPgBgZQAAgWgWgQQgPgJgogPQg5gWgXgSQgoghgBg2QAAg5AyghQAwghBXAAQAfAAAfAGQAaAEAPAHIAHADIgQApQgDAKgKAFQgJAGgMgDQgkgIgTAAQgqAAgYAMQgYANAAAWQABATAVAOQAOAJAlANQA7AVAYAUQApAggBA2QABA+g0AnQg0AohRAAQgiAAgjgHgA6pDXQgegGgSgIIgFgDIAIglQAEgNALgHQALgHAOADQAtALAXAAQApAAAagPQAagPAAgZQAAgWgYgQQgOgJgogPQg5gWgXgSQgoghAAg2QAAg6AwggQAyghBVAAQAgAAAeAGQAbAEAQAHIAGADIgPApQgEAKgKAFQgJAGgLgDQgmgIgRAAQgrAAgYAMQgXANAAAWQAAATAVAOQAOAIAmAOQA5AVAYAUQAqAgAAA2QAAA+g0AnQg0AohSAAQghAAgjgHgAXEDSIAAmjIEPAAIAAAZQAAAQgLAMQgMALgPAAIiJAAIAABnICdAAIAAAaQAAAQgMALQgLALgQAAIh2AAIAAB4IC7AAIAAAdQAAAQgMALQgLAMgQAAgAVJDSQgaAAgOgVIi2juIAAEDIhPAAIAAmjIA0AAQAZAAAQAUIC0DuIAAkCIBQAAIAAGjgAL9DSIAAirIiXj4IBTAAQAWAAALATIBZCTIBaiUQALgSAWAAIBEAAIiVD3IAACFQAAAQgMALQgLAMgQAAgADqDSIAAmjIB+AAQBFAAAqAKQArAJAgAXQAjAZAWAsQAVAsAAAvQAABohJA4QhIA5iIAAgAFLCPIAlAAQBLAAAognQAogoAAhKQABhAgighQghghg/AAIg/AAgArlDSQgZAAgQgVIi1juIAAEDIhPAAIAAmjIA0AAQAZAAAQAUIC0DuIAAkCIBPAAIAAGjgA1pDSIAAmjIEPAAIAAAZQABAQgMAMQgMALgPAAIiIAAIAABnICbAAIAAAaQAAAQgLALQgLALgQAAIh1AAIAAB4IC6AAIgBAdQAAAQgLALQgLAMgQAAg");
	this.shape.setTransform(175.9,66.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup656, new cjs.Rectangle(-9.5,0,491,130.4), null);


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

	// Layer_3
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(176,66.5,1,1,0,0,0,176,22.5);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(392.8,65.2,1,1,0,0,0,88.8,65.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00ACE9").s().p("AjYCgQg/g+AAhiQAAhaBChBQBChCBdAAQBgAABAA+QA/A+AABeQAABehBBBQhBBChdAAQhkAAg+g+gAiZhgQgqAoAAA4QAAA9AoAnQAmAmA/AAQA5AAApgoQAogpAAg6QAAg7gngnQgngmg8AAQg6AAgpApgAo/DXQgegGgSgIIgGgDIAJglQADgNAMgHQALgHANADQAuALAXAAQAqAAAZgPQAagPgBgZQAAgWgWgQQgPgJgogPQg5gWgXgSQgoghgBg2QAAg5AyghQAwghBXAAQAfAAAfAGQAaAEAPAHIAHADIgQApQgDAKgKAFQgJAGgMgDQgkgIgTAAQgqAAgYAMQgYANAAAWQABATAVAOQAOAJAlANQA7AVAYAUQApAggBA2QABA+g0AnQg0AohRAAQgiAAgjgHgA6pDXQgegGgSgIIgFgDIAIglQAEgNALgHQALgHAOADQAtALAXAAQApAAAagPQAagPAAgZQAAgWgYgQQgOgJgogPQg5gWgXgSQgoghAAg2QAAg6AwggQAyghBVAAQAgAAAeAGQAbAEAQAHIAGADIgPApQgEAKgKAFQgJAGgLgDQgmgIgRAAQgrAAgYAMQgXANAAAWQAAATAVAOQAOAIAmAOQA5AVAYAUQAqAgAAA2QAAA+g0AnQg0AohSAAQghAAgjgHgAXEDSIAAmjIEPAAIAAAZQAAAQgLAMQgMALgPAAIiJAAIAABnICdAAIAAAaQAAAQgMALQgLALgQAAIh2AAIAAB4IC7AAIAAAdQAAAQgMALQgLAMgQAAgAVJDSQgaAAgOgVIi2juIAAEDIhPAAIAAmjIA0AAQAZAAAQAUIC0DuIAAkCIBQAAIAAGjgAL9DSIAAirIiXj4IBTAAQAWAAALATIBZCTIBaiUQALgSAWAAIBEAAIiVD3IAACFQAAAQgMALQgLAMgQAAgADqDSIAAmjIB+AAQBFAAAqAKQArAJAgAXQAjAZAWAsQAVAsAAAvQAABohJA4QhIA5iIAAgAFLCPIAlAAQBLAAAognQAogoAAhKQABhAgighQghghg/AAIg/AAgArlDSQgZAAgQgVIi1juIAAEDIhPAAIAAmjIA0AAQAZAAAQAUIC0DuIAAkCIBPAAIAAGjgA1pDSIAAmjIEPAAIAAAZQABAQgMAMQgMALgPAAIiIAAIAABnICbAAIAAAaQAAAQgLALQgLALgQAAIh1AAIAAB4IC6AAIgBAdQAAAQgLALQgLAMgQAAg");
	this.shape_1.setTransform(175.9,66.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(-9.5,0,491,130.4), null);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {loop:47};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_115 = function() {
		this.stop ();
	}
	this.frame_116 = function() {
		root.btn.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(115).call(this.frame_115).wait(1).call(this.frame_116).wait(1));

	// txt
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0.7,-1,1,1,0,0,0,40.7,6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({alpha:1},11).wait(73));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_47 = new cjs.Graphics().p("AkQBRQgigBgXgXQgXgXAAgiQAAggAXgYQAXgYAiABIIfAAQAjgBAYAYQAXAYAAAgQAAAigXAXQgYAXgjABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_graphics_47,x:2.65,y:-0.7}).wait(70));

	// BRILLO
	this.instance_1 = new lib.Symbol14yt();
	this.instance_1.setTransform(-90.1,-4,1.0789,1);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({x:93.15},68,cjs.Ease.get(0.8)).to({_off:true},1).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AAAASQgIAAgFgEQgGgGAAgIQAAgGAGgGQAFgFAIgBIAAAAQAJABAFAFQAGAGgBAGQABAIgGAGQgFAEgJAAg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AAAAXQgKAAgHgGQgHgHABgKQgBgJAHgHQAHgGAKAAIAAAAQALAAAGAGQAIAHgBAJQABAKgIAHQgGAGgLAAg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AgBAcQgMAAgHgIQgJgIAAgMQAAgKAJgJQAHgIAMAAIACAAQAMAAAIAIQAJAJAAAKQAAAMgJAIQgIAIgMAAg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AgBAhQgNAAgKgKQgKgJAAgOQAAgNAKgJQAKgKANAAIACAAQAOAAAJAKQALAJgBANQABAOgLAJQgJAKgOAAg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AgBAlQgQAAgLgKQgKgLAAgQQAAgOAKgMQALgLAQAAIACAAQAQAAALALQALAMAAAOQAAAQgLALQgLAKgQAAg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AgBAqQgSAAgMgMQgMgMAAgSQAAgQAMgNQAMgMASAAIACAAQATAAAMAMQAMANAAAQQAAASgMAMQgMAMgTAAg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AgBAvQgUAAgOgNQgNgOAAgUQAAgSANgOQAOgOAUAAIACAAQAVAAANAOQAOAOAAASQAAAUgOAOQgNANgVAAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AgCA0QgVAAgPgPQgPgPAAgWQAAgUAPgQQAPgPAVAAIAEAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgPAPgWAAg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AgCA4QgXAAgRgPQgQgSAAgXQAAgWAQgQQARgRAXAAIAEAAQAYAAARARQAQAQAAAWQAAAXgQASQgRAPgYAAg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AgCA9QgZAAgTgRQgRgTAAgZQAAgYARgSQATgSAZAAIAFAAQAZAAASASQASASAAAYQAAAZgSATQgSARgZAAg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AgCBCQgbAAgUgTQgTgUAAgbQAAgaATgUQAUgTAbAAIAFAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AgCBHQgdAAgWgVQgUgVAAgdQAAgcAUgVQAWgVAdAAIAFAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AgCBMQgfgBgXgVQgVgWAAggQAAgeAVgWQAXgXAfABIAFAAQAfgBAXAXQAWAWgBAeQABAggWAWQgXAVgfABg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AgCBQQgiAAgXgXQgYgYAAghQAAggAYgYQAXgXAiAAIAFAAQAiAAAYAXQAXAYAAAgQAAAhgXAYQgYAXgiAAg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AgDBVQgjAAgZgYQgZgZAAgkQAAgiAZgYQAZgaAjAAIAHAAQAjAAAZAaQAZAYgBAiQABAkgZAZQgZAYgjAAg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AgDBaQglAAgagaQgagbAAglQAAgkAagaQAagbAlAAIAHAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AgVBaQglAAgbgaQgagbAAglQAAgkAagaQAbgbAlAAIArAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AgnBaQglAAgagaQgagbAAglQAAgkAagaQAagbAlAAIBOAAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ag4BaQglAAgbgaQgagbAAglQAAgkAagaQAbgbAlAAIBwAAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AhIBaQglAAgbgaQgagbAAglQAAgkAagaQAbgbAlAAICRAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AhYBaQglAAgbgaQgagbAAglQAAgkAagaQAbgbAlAAICwAAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AhnBaQglAAgbgaQgZgbAAglQAAgkAZgaQAbgbAlAAIDPAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Ah1BaQglAAgbgaQgagbAAglQAAgkAagaQAbgbAlAAIDrAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AiDBaQglAAgbgaQgagbAAglQAAgkAagaQAbgbAlAAIEHAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AiRBaQglAAgagaQgagbAAglQAAgkAagaQAagbAlAAIEiAAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AidBaQglAAgagaQgbgbAAglQAAgkAbgaQAagbAlAAIE6AAQAmAAAaAbQAbAagBAkQABAlgbAbQgaAagmAAg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AioBaQgmAAgagaQgagbAAglQAAgkAagaQAagbAmAAIFRAAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Ai0BaQglAAgagaQgagbAAglQAAgkAagaQAagbAlAAIFoAAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Ai/BaQgkAAgbgaQgagbAAglQAAgkAagaQAbgbAkAAIF+AAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AjIBaQgmAAgagaQgagbAAglQAAgkAagaQAagbAmAAIGRAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AjRBaQglAAgbgaQgagbAAglQAAgkAagaQAbgbAlAAIGjAAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AjaBaQglAAgbgaQgagbAAglQAAgkAagaQAbgbAlAAIG1AAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AjiBaQglAAgbgaQgagbAAglQAAgkAagaQAbgbAlAAIHFAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AjqBaQglAAgagaQgagbAAglQAAgkAagaQAagbAlAAIHUAAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AjwBaQgmAAgagaQgagbAAglQAAgkAagaQAagbAmAAIHhAAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Aj3BaQglAAgagaQgagbAAglQAAgkAagaQAagbAlAAIHuAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Aj8BaQglAAgbgaQgagbAAglQAAgkAagaQAbgbAlAAIH4AAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AkBBaQglAAgagaQgagbAAglQAAgkAagaQAagbAlAAIIDAAQAlAAAaAbQAbAaAAAkQAAAlgbAbQgaAaglAAg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AkFBaQglAAgagaQgagbAAglQAAgkAagaQAagbAlAAIILAAQAlAAAaAbQAbAaAAAkQAAAlgbAbQgaAaglAAg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AkIBaQgmAAgagaQgagbAAglQAAgkAagaQAagbAmAAIIRAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AkLBaQglAAgbgaQgagbAAglQAAgkAagaQAbgbAlAAIIXAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AkOBaQgkAAgbgaQgagbAAglQAAgkAagaQAbgbAkAAIIcAAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AkPBaQglAAgbgaQgagbAAglQAAgkAagaQAbgbAlAAIIfAAQAlAAAbAbQAaAaAAAkQAAAlgaAbQgbAaglAAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AkQBaQglAAgagaQgagbAAglQAAgkAagaQAagbAlAAIIgAAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AkQBaQgmAAgagaQgagbAAglQAAgkAagaQAagbAmAAIIhAAQAmAAAaAbQAaAaAAAkQAAAlgaAbQgaAagmAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-1.55,y:-0.75}).wait(1).to({graphics:mask_1_graphics_1,x:-1.55,y:-0.725}).wait(1).to({graphics:mask_1_graphics_2,x:-1.55,y:-0.75}).wait(1).to({graphics:mask_1_graphics_3,x:-1.55,y:-0.725}).wait(1).to({graphics:mask_1_graphics_4,x:-1.55,y:-0.75}).wait(1).to({graphics:mask_1_graphics_5,x:-1.55,y:-0.725}).wait(1).to({graphics:mask_1_graphics_6,x:-1.55,y:-0.75}).wait(1).to({graphics:mask_1_graphics_7,x:-1.55,y:-0.725}).wait(1).to({graphics:mask_1_graphics_8,x:-1.55,y:-0.75}).wait(1).to({graphics:mask_1_graphics_9,x:-1.55,y:-0.725}).wait(1).to({graphics:mask_1_graphics_10,x:-1.55,y:-0.75}).wait(1).to({graphics:mask_1_graphics_11,x:-1.55,y:-0.725}).wait(1).to({graphics:mask_1_graphics_12,x:-1.55,y:-0.75}).wait(1).to({graphics:mask_1_graphics_13,x:-1.55,y:-0.725}).wait(1).to({graphics:mask_1_graphics_14,x:-1.55,y:-0.75}).wait(1).to({graphics:mask_1_graphics_15,x:-1.55,y:-0.725}).wait(1).to({graphics:mask_1_graphics_16,x:-1.275,y:-0.725}).wait(1).to({graphics:mask_1_graphics_17,x:-0.975,y:-0.725}).wait(1).to({graphics:mask_1_graphics_18,x:-0.7,y:-0.725}).wait(1).to({graphics:mask_1_graphics_19,x:-0.425,y:-0.725}).wait(1).to({graphics:mask_1_graphics_20,x:-0.2,y:-0.725}).wait(1).to({graphics:mask_1_graphics_21,x:0.05,y:-0.725}).wait(1).to({graphics:mask_1_graphics_22,x:0.275,y:-0.725}).wait(1).to({graphics:mask_1_graphics_23,x:0.5,y:-0.725}).wait(1).to({graphics:mask_1_graphics_24,x:0.7,y:-0.725}).wait(1).to({graphics:mask_1_graphics_25,x:0.9,y:-0.725}).wait(1).to({graphics:mask_1_graphics_26,x:1.1,y:-0.725}).wait(1).to({graphics:mask_1_graphics_27,x:1.275,y:-0.725}).wait(1).to({graphics:mask_1_graphics_28,x:1.45,y:-0.725}).wait(1).to({graphics:mask_1_graphics_29,x:1.6,y:-0.725}).wait(1).to({graphics:mask_1_graphics_30,x:1.75,y:-0.725}).wait(1).to({graphics:mask_1_graphics_31,x:1.875,y:-0.725}).wait(1).to({graphics:mask_1_graphics_32,x:2.025,y:-0.725}).wait(1).to({graphics:mask_1_graphics_33,x:2.125,y:-0.725}).wait(1).to({graphics:mask_1_graphics_34,x:2.25,y:-0.725}).wait(1).to({graphics:mask_1_graphics_35,x:2.35,y:-0.725}).wait(1).to({graphics:mask_1_graphics_36,x:2.4,y:-0.725}).wait(1).to({graphics:mask_1_graphics_37,x:2.5,y:-0.725}).wait(1).to({graphics:mask_1_graphics_38,x:2.55,y:-0.725}).wait(1).to({graphics:mask_1_graphics_39,x:2.6,y:-0.725}).wait(1).to({graphics:mask_1_graphics_40,x:2.675,y:-0.725}).wait(1).to({graphics:mask_1_graphics_41,x:2.7,y:-0.725}).wait(1).to({graphics:mask_1_graphics_42,x:2.725,y:-0.725}).wait(1).to({graphics:mask_1_graphics_43,x:2.75,y:-0.725}).wait(1).to({graphics:mask_1_graphics_44,x:2.75,y:-0.725}).wait(73));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1F3B87","#00B0E9"],[0,1],-59.5,0.1,59.4,0.1).s().p("ApSBkIAAjHISlAAIAADHg");
	this.shape.setTransform(0.475,-0.675);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(117));

	// Layer_2
	this.instance_2 = new lib.Symbol18();
	this.instance_2.setTransform(1.55,-0.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(117));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-9.7,88.2,18);


(lib._4636363 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {reproducir:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop ();
	}
	this.frame_20 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(19).call(this.frame_20).wait(1));

	// Layer_1
	this.instance = new lib._6346436363();
	this.instance.setTransform(-176.1,-330.1,1,1,0,0,0,-176.1,-330.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:1},0).to({alpha:0},15).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399,-853,794.1,1048.2);


(lib.Symbol20ty = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sensodyne
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(-80.7,-21.45,0.5991,0.5991,0,0,0,6,90.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// MAS
	this.instance_1 = new lib._6456464();
	this.instance_1.setTransform(77.05,40.05,0.2256,0.2256,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Protecao
	this.instance_2 = new lib.protecao();
	this.instance_2.setTransform(2,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// COMPLETA
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(-6.25,36.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20ty, new cjs.Rectangle(-93.2,-75.9,297.4,127.9), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"uno":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop ();
	}
	this.frame_104 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(104).call(this.frame_104).wait(66));

	// Symbol 14
	this.instance = new lib.Symbol14();
	this.instance.setTransform(-378.3,90.85,0.8618,0.8618,0,0,0,-0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).wait(68));

	// Symbol 14
	this.instance_1 = new lib.Symbol14();
	this.instance_1.setTransform(-371.05,135.25,0.8956,0.8956,0,0,0,-0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).wait(73));

	// Symbol 14
	this.instance_2 = new lib.Symbol14();
	this.instance_2.setTransform(-355.85,127.6,0.9314,0.9314);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(92).to({_off:false},0).wait(78));

	// Symbol 14
	this.instance_3 = new lib.Symbol14();
	this.instance_3.setTransform(-378.2,121.1,0.9314,0.9314);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).wait(83));

	// Symbol 14
	this.instance_4 = new lib.Symbol14();
	this.instance_4.setTransform(-360.15,115.75,0.8618,0.8618,0,0,0,-0.1,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(83).to({_off:false},0).to({_off:true},79).wait(8));

	// Symbol 14
	this.instance_5 = new lib.Symbol14();
	this.instance_5.setTransform(-317,99.4,0.8956,0.8956,0,0,0,-0.1,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).to({_off:true},83).wait(8));

	// Symbol 14
	this.instance_6 = new lib.Symbol14();
	this.instance_6.setTransform(-378.2,121.1,0.9314,0.9314);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).to({_off:true},88).wait(8));

	// Symbol 14
	this.instance_7 = new lib.Symbol14();
	this.instance_7.setTransform(-380.5,115.65,0.9314,0.9314);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({_off:true},93).wait(8));

	// Symbol 14
	this.instance_8 = new lib.Symbol14();
	this.instance_8.setTransform(-346.15,108.5,0.8618,0.8618,0,0,0,-0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).to({_off:true},90).wait(16));

	// Symbol 14
	this.instance_9 = new lib.Symbol14();
	this.instance_9.setTransform(-326.3,104.85,0.8956,0.8956,0,0,0,-0.1,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({_off:true},95).wait(16));

	// Symbol 14
	this.instance_10 = new lib.Symbol14();
	this.instance_10.setTransform(-378.2,113.85,0.9314,0.9314);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(54).to({_off:false},0).to({_off:true},100).wait(16));

	// Symbol 14
	this.instance_11 = new lib.Symbol14();
	this.instance_11.setTransform(-387.25,110.2,0.9314,0.9314);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off:false},0).to({_off:true},105).wait(16));

	// Symbol 14
	this.instance_12 = new lib.Symbol14();
	this.instance_12.setTransform(-360.15,108.5,0.8618,0.8618,0,0,0,-0.1,0.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(45).to({_off:false},0).to({_off:true},101).wait(24));

	// Symbol 14
	this.instance_13 = new lib.Symbol14();
	this.instance_13.setTransform(-343.7,108.4,0.8956,0.8956);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(41).to({_off:false},0).to({_off:true},105).wait(24));

	// Symbol 14
	this.instance_14 = new lib.Symbol14();
	this.instance_14.setTransform(-394.55,117.45,0.9314,0.9314);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(37).to({_off:false},0).to({_off:true},109).wait(24));

	// Symbol 14
	this.instance_15 = new lib.Symbol14();
	this.instance_15.setTransform(-378.2,115.65,0.9314,0.9314);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(33).to({_off:false},0).to({_off:true},113).wait(24));

	// Symbol 14
	this.instance_16 = new lib.Symbol14();
	this.instance_16.setTransform(-363.5,107.15,0.8618,0.8618,0,0,0,-0.1,0.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(29).to({_off:false},0).to({_off:true},109).wait(32));

	// Symbol 14
	this.instance_17 = new lib.Symbol14();
	this.instance_17.setTransform(-371.05,106.65,0.8956,0.8956,0,0,0,-0.1,0.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(25).to({_off:false},0).to({_off:true},113).wait(32));

	// Symbol 14
	this.instance_18 = new lib.Symbol14();
	this.instance_18.setTransform(-400,122.9,0.9314,0.9314);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(21).to({_off:false},0).to({_off:true},117).wait(32));

	// Symbol 14
	this.instance_19 = new lib.Symbol14();
	this.instance_19.setTransform(-378.2,115.65,0.9314,0.9314);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(17).to({_off:false},0).to({_off:true},121).wait(32));

	// Symbol 14
	this.instance_20 = new lib.Symbol14();
	this.instance_20.setTransform(-360.15,110.3,0.8618,0.8618,0,0,0,-0.1,0.1);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(13).to({_off:false},0).to({_off:true},117).wait(40));

	// Symbol 14
	this.instance_21 = new lib.Symbol14();
	this.instance_21.setTransform(-334.7,106.65,0.8956,0.8956,0,0,0,-0.1,0.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(9).to({_off:false},0).to({_off:true},121).wait(40));

	// Symbol 14
	this.instance_22 = new lib.Symbol14();
	this.instance_22.setTransform(-369.1,110.2,0.9314,0.9314);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(6).to({_off:false},0).to({_off:true},124).wait(40));

	// Symbol 14
	this.instance_23 = new lib.Symbol14();
	this.instance_23.setTransform(-360.05,112,0.9314,0.9314);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(3).to({_off:false},0).to({_off:true},127).wait(40));

	// Symbol 14
	this.instance_24 = new lib.Symbol14();
	this.instance_24.setTransform(-437.8,118.05,0.9253,0.9253,0,0,0,-0.1,0.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(102).to({_off:false},0).wait(68));

	// Symbol 14
	this.instance_25 = new lib.Symbol14();
	this.instance_25.setTransform(-429.9,116.9,0.9616,0.9616);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(97).to({_off:false},0).wait(73));

	// Symbol 14
	this.instance_26 = new lib.Symbol14();
	this.instance_26.setTransform(-413.7,128.3);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(92).to({_off:false},0).wait(78));

	// Symbol 14
	this.instance_27 = new lib.Symbol14();
	this.instance_27.setTransform(-437.7,121.3);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(87).to({_off:false},0).wait(83));

	// Symbol 14
	this.instance_28 = new lib.Symbol14();
	this.instance_28.setTransform(-418.3,117.5,0.9253,0.9253,0,0,0,-0.1,0.1);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(83).to({_off:false},0).to({_off:true},79).wait(8));

	// Symbol 14
	this.instance_29 = new lib.Symbol14();
	this.instance_29.setTransform(-371.9,117.4,0.9616,0.9616);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(79).to({_off:false},0).to({_off:true},83).wait(8));

	// Symbol 14
	this.instance_30 = new lib.Symbol14();
	this.instance_30.setTransform(-437.7,121.3);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(74).to({_off:false},0).to({_off:true},88).wait(8));

	// Symbol 14
	this.instance_31 = new lib.Symbol14();
	this.instance_31.setTransform(-440.2,125.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(69).to({_off:false},0).to({_off:true},93).wait(8));

	// Symbol 14
	this.instance_32 = new lib.Symbol14();
	this.instance_32.setTransform(-403.3,117.5,0.9253,0.9253,0,0,0,-0.1,0.1);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(64).to({_off:false},0).to({_off:true},90).wait(16));

	// Symbol 14
	this.instance_33 = new lib.Symbol14();
	this.instance_33.setTransform(-372.15,123.25,0.9616,0.9616);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(59).to({_off:false},0).to({_off:true},95).wait(16));

	// Symbol 14
	this.instance_34 = new lib.Symbol14();
	this.instance_34.setTransform(-408.45,131.05);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(54).to({_off:false},0).to({_off:true},100).wait(16));

	// Symbol 14
	this.instance_35 = new lib.Symbol14();
	this.instance_35.setTransform(-355.8,121.3);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(49).to({_off:false},0).to({_off:true},105).wait(16));

	// Symbol 14
	this.instance_36 = new lib.Symbol14();
	this.instance_36.setTransform(-451.45,123.35,0.9253,0.9253,0,0,0,-0.1,0.1);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(45).to({_off:false},0).to({_off:true},101).wait(24));

	// Symbol 14
	this.instance_37 = new lib.Symbol14();
	this.instance_37.setTransform(-422.1,119.35,0.9616,0.9616);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(41).to({_off:false},0).to({_off:true},105).wait(24));

	// Symbol 14
	this.instance_38 = new lib.Symbol14();
	this.instance_38.setTransform(-385.05,117.4);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(37).to({_off:false},0).to({_off:true},109).wait(24));

	// Symbol 14
	this.instance_39 = new lib.Symbol14();
	this.instance_39.setTransform(-439.65,119.35);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(33).to({_off:false},0).to({_off:true},113).wait(24));

	// Symbol 14
	this.instance_40 = new lib.Symbol14();
	this.instance_40.setTransform(-455.05,118,0.9253,0.9253,0,0,0,-0.1,0.1);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(29).to({_off:false},0).to({_off:true},109).wait(32));

	// Symbol 14
	this.instance_41 = new lib.Symbol14();
	this.instance_41.setTransform(-437.7,144.7,0.9616,0.9616);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(25).to({_off:false},0).to({_off:true},113).wait(32));

	// Symbol 14
	this.instance_42 = new lib.Symbol14();
	this.instance_42.setTransform(-381.15,119.35);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(21).to({_off:false},0).to({_off:true},117).wait(32));

	// Symbol 14
	this.instance_43 = new lib.Symbol14();
	this.instance_43.setTransform(-468.9,117.4);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(17).to({_off:false},0).to({_off:true},121).wait(32));

	// Symbol 14
	this.instance_44 = new lib.Symbol14();
	this.instance_44.setTransform(-342.25,117.5,0.9253,0.9253,0,0,0,-0.1,0.1);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(13).to({_off:false},0).to({_off:true},117).wait(40));

	// Symbol 14
	this.instance_45 = new lib.Symbol14();
	this.instance_45.setTransform(-410.4,125.2,0.9616,0.9616);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(9).to({_off:false},0).to({_off:true},121).wait(40));

	// Symbol 14
	this.instance_46 = new lib.Symbol14();
	this.instance_46.setTransform(-445.5,117.4);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(6).to({_off:false},0).to({_off:true},124).wait(40));

	// Symbol 14
	this.instance_47 = new lib.Symbol14();
	this.instance_47.setTransform(-418.2,119.35);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(3).to({_off:false},0).to({_off:true},127).wait(40));

	// Layer_1
	this.instance_48 = new lib.Symbol26();
	this.instance_48.setTransform(16.85,-73.25);
	this.instance_48.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({_off:true},130).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.4,-284.7,619.9,451.6);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"uno":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop ();
	}
	this.frame_25 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(5));

	// Layer_1
	this.instance = new lib.Symbol9();
	this.instance.setTransform(-161.65,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},24).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2342.4,-1651.9,4396.200000000001,3125.5);


(lib.Symbol2ty = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_14 = function() {
		this.stop ();
	}
	this.frame_34 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(20).call(this.frame_34).wait(1));

	// Layer_1
	this.instance = new lib.Symbol20ty();
	this.instance.setTransform(-1.4,9.65,1.0502,1.0502,0,0,0,54.8,-9.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:54.9,regY:-9.9,scaleX:0.8501,scaleY:0.8501,x:-1.35,y:9.6,alpha:1},14,cjs.Ease.get(1)).to({alpha:0},20).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol20ty();
	this.instance_1.setTransform(-1.35,9.6,0.8501,0.8501,0,0,0,54.9,-9.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.8,-59.7,312.3,134.3);


(lib.hturytey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_19 = function() {
		this.stop ();
	}
	this.frame_39 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(1));

	// Layer_1
	this.instance = new lib.ClipGroup656();
	this.instance.setTransform(-209.7,23.2,0.8944,0.8944,0,0,0,5.9,90.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).to({alpha:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.5,-58,439.2,116.6);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpmAZXMAAAgytMBTNAAAMAAAAytgAlNyPQhqAmhDBbQhyCZALEFQADE3ACASQCBDRH5COQA8AQEtBLQCzArAqAcQAIhEBjuTQANhpgIhDQgNhfg4gyQhVhMi4AmQhcAVguAIQhRAMg6gNQgmgJg+ggQhCghgegJQg4gSg4AFIgXgBQg2AAg5AWg");
	mask.setTransform(5.975,-75.7);

	// Layer_6
	this.burbujas = new lib.Symbol17();
	this.burbujas.name = "burbujas";
	this.burbujas.setTransform(-105.65,20.95,1,1,0,0,0,-91.9,-0.2);

	var maskedShapeInstanceList = [this.burbujas];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.burbujas).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.3,-238,532.6,324.6);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"loop":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_479 = function() {
		root.rueda.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(479).call(this.frame_479).wait(1));

	// pack01
	this.pack01 = new lib.Symbol10();
	this.pack01.name = "pack01";
	this.pack01.setTransform(-201,-137.7);

	this.timeline.addTween(cjs.Tween.get(this.pack01).wait(480));

	// pack02
	this.pack02 = new lib.Symbol6();
	this.pack02.name = "pack02";
	this.pack02.setTransform(-236,14);

	this.timeline.addTween(cjs.Tween.get(this.pack02).wait(480));

	// burbujas
	this.burbujas = new lib.Symbol25();
	this.burbujas.name = "burbujas";
	this.burbujas.setTransform(-102.85,101.1,1,1,0,0,0,-89.2,0);

	this.timeline.addTween(cjs.Tween.get(this.burbujas).wait(480));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfKvQiyi4gWj7IuJAAIAAx9MA7hAAAIAAR9I3zAAQgWD7iyC4QjLDTkgAAQkeAAjMjTg");
	mask.setTransform(30.15,-20.175);

	// diente
	this.instance = new lib.diente();
	this.instance.setTransform(-1.25,9.8,1.2459,1.2459);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(480));

	// Layer_1
	this.instance_1 = new lib.Symbol3();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360},479).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2543.4,-2053.4,4590.3,3636.9);


// stage content:
(lib._320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fade:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,159,170,338,519,525,771,868,872,899];
	// timeline functions:
	this.frame_0 = function() {
		// ------------- Variables ------------------- //
		root = this;
		loopNum = 0;
		
		
		/* EVENTOS MOUSEOVER */
		document.eventoRollOver = function(){
			root.btn.play();
		
		}
	}
	this.frame_159 = function() {
		root.logosensodyne.play ();
	}
	this.frame_170 = function() {
		root.rueda.pack01.play ();
	}
	this.frame_338 = function() {
		root.rueda.burbujas.burbujas.play ();
	}
	this.frame_519 = function() {
		root.sensodynelogo.play ();
	}
	this.frame_525 = function() {
		root.rueda.pack02.play ();
	}
	this.frame_771 = function() {
		root.btn.play ();
	}
	this.frame_868 = function() {
		this.stop ();
	}
	this.frame_872 = function() {
		loopNum == 1 ? (root.stop()) : (loopNum++ , console.log(loopNum), root.gotoAndPlay());
		
		/*if(loopNum == 3){
			root.stop()
		}else{
			loopNum++
			console.log(loopNum)
			root.gotoAndPlay('fade')
		}*/
	}
	this.frame_899 = function() {
		root.rueda.pack01.gotoAndStop ('uno');
		root.rueda.pack02.gotoAndStop ('uno');
		root.rueda.burbujas.burbujas.gotoAndStop ('uno');
		
		root.opacidadintro.gotoAndPlay('reproducir');
		
		root.gotoAndPlay('fade');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(159).call(this.frame_159).wait(11).call(this.frame_170).wait(168).call(this.frame_338).wait(181).call(this.frame_519).wait(6).call(this.frame_525).wait(246).call(this.frame_771).wait(97).call(this.frame_868).wait(4).call(this.frame_872).wait(27).call(this.frame_899).wait(1));

	// borde
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#474747").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(900));

	// opacidadfinal
	this.instance = new lib._6346436363();
	this.instance.setTransform(63.3,133.85,0.5555,0.5555,0,0,0,-176.1,-330.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(873).to({_off:false},0).to({alpha:1},26).wait(1));

	// opacidadintro
	this.opacidadintro = new lib._4636363();
	this.opacidadintro.name = "opacidadintro";
	this.opacidadintro.setTransform(161.15,317.25,0.5555,0.5555);

	this.timeline.addTween(cjs.Tween.get(this.opacidadintro).wait(900));

	// promotion-code
	this.instance_1 = new lib.promotioncode("synched",0,false);
	this.instance_1.setTransform(293.15,32.8,0.4214,0.4151,-90,0,0,-17.9,-52.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(713).to({_off:false},0).wait(187));

	// CTA
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(236.55,26.1,1.1324,1.1324,0,0,0,0.5,0.1);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(713).to({_off:false},0).wait(187));

	// txtfinal
	this.instance_2 = new lib.Symbol7("synched",0,false);
	this.instance_2.setTransform(17.75,38.9,0.5242,0.5242,0,0,0,-124.5,26.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(556).to({_off:false},0).wait(136).to({startPosition:14},0).to({alpha:0},16).to({_off:true},1).wait(191));

	// txt03
	this.instance_3 = new lib.Symbol2Y2n();
	this.instance_3.setTransform(84.55,22.15,0.5783,0.5783,0,0,0,-0.8,57.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(346).to({_off:false},0).wait(173).to({alpha:0},19).to({_off:true},1).wait(361));

	// legal01
	this.instance_4 = new lib.legal02n();
	this.instance_4.setTransform(157,74.05,0.5555,0.5555,0,0,0,0,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(346).to({_off:false},0).to({alpha:1},27).wait(146).to({alpha:0},19).to({_off:true},1).wait(361));

	// txt02
	this.instance_5 = new lib.Symbol2Y();
	this.instance_5.setTransform(77.45,36.5,0.5096,0.5096,0,0,0,-1.1,57.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(192).to({_off:false},0).wait(146).to({alpha:0},16).to({_off:true},1).wait(545));

	// sensodyne
	this.sensodynelogo = new lib.hturytey();
	this.sensodynelogo.name = "sensodynelogo";
	this.sensodynelogo.setTransform(266.2,26.05,0.2193,0.2193,0,0,0,-3.6,0.2);
	this.sensodynelogo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sensodynelogo).wait(192).to({_off:false},0).to({_off:true},380).wait(328));

	// txt01
	this.logosensodyne = new lib.Symbol2ty();
	this.logosensodyne.name = "logosensodyne";
	this.logosensodyne.setTransform(246.05,21.55,0.3756,0.3758,0,0,0,0.1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.logosensodyne).to({_off:true},189).wait(711));

	// rueda colores - pack
	this.rueda = new lib.Symbol21();
	this.rueda.name = "rueda";
	this.rueda.setTransform(155.15,27.2,0.118,0.118,0,0,0,1.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.rueda).wait(159).to({regX:0.2,regY:0.5,scaleX:0.2319,scaleY:0.2319,x:175.05,y:26.1},43,cjs.Ease.quadInOut).wait(333).to({regX:1.5,regY:1.5,scaleX:0.1319,scaleY:0.132,x:275.2,y:26.2},33,cjs.Ease.quadInOut).wait(128).to({x:135.2},35,cjs.Ease.quadInOut).wait(169));

	// bg gris degradado
	this.instance_6 = new lib.bggris();
	this.instance_6.setTransform(162.8,-37.2,1.2358,0.2752,0,0,0,0,-0.2);
	this.instance_6.alpha = 0.3008;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(159).to({_off:false},0).wait(741));

	// bg
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(153.65,124.1,0.5555,0.5555);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},203).wait(697));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-254.8,-425.2,904.4000000000001,850.9);
// library properties:
lib.properties = {
	id: 'A4DAFDFBAF18B64E9CD2D6DEB02E1B51',
	width: 320,
	height: 50,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/brillo.png?1733843238884", id:"brillo"},
		{src:"images/burbuja.png?1733843238884", id:"burbuja"},
		{src:"images/Colour_Wheel.png?1733843238884", id:"Colour_Wheel"},
		{src:"images/degrade.jpg?1733843238884", id:"degrade"},
		{src:"images/logo.jpg?1733843238884", id:"logo"},
		{src:"images/novo.png?1733843238884", id:"novo"},
		{src:"images/pack.png?1733843238884", id:"pack"},
		{src:"images/Tooth.png?1733843238884", id:"Tooth"}
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