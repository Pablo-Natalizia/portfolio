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



(lib.bordesojos = function() {
	this.initialize(img.bordesojos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.cara1 = function() {
	this.initialize(img.cara1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.ojos = function() {
	this.initialize(img.ojos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,278);


(lib.pack01 = function() {
	this.initialize(img.pack01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.pack02 = function() {
	this.initialize(img.pack02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.parpado = function() {
	this.initialize(img.parpado);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,239);


(lib.textos = function() {
	this.initialize(img.textos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);// helper functions:

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


(lib.Symbol24copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao/Q0Qixg9iHhYQiVhihpiHIgqg0QgYgfgPgXQgLgSgPgkQgPglgKgQQgvhOgbhgQgWhRgLhpQgNiFAYiPQAWh9AziNQAsh7Blh4QBDhQCGh6QCZiLDkg+IDDg0QBvgcBWgKQB1gOCMAXQBdAQCgAsQDLA3CWByQB8BdAmAfQBZBJA6BDQBcBrA2CaQAqB2AcCwQAEAZABBGQABA7AJAhQAQA5AfBRIA1CJIA7CkIgOAGIg7geQgjgSgXgPQhfg6g5BYQiLDYiUCGQjyDalEBJQg/AOhPAFQg6AEhWAAIgHAAQkZAAj6hXg");
	mask.setTransform(1.5716,0.8642);

	// Layer_1
	this.instance = new lib.parpado();
	this.instance.setTransform(-144,-130,1.0111,1.1339);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24copy, new cjs.Rectangle(-136.9,-115.4,277,232.60000000000002), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AkIRMQhOgEiLgLQg+gFhMgdQgTgHhxgyQhPgigsgYQhBgkgvgqQhMhFgug4Qg9hJgghMQgQgngrhcQgmhTgTgwQgjhWgMhoQgKhVADhuQADhaAdhmQAWhOArhnQBLi0C5iVIAYgSQAQgKAIgIQA8g3BQgqQBCgkBcggQERhiDmgaQHgg4FyC3QAZAMArAdQAtAeAWAMQBqA3BUBvQAyBABTCVQAZAtAQBJQAKApAPBVQAGAfACAwIAEBQIgEAAIgCBCQgBAlAFAaQAFAaARAmIAbBAQBCC2AjBoQAIAYgJAJQgKAJgZgIIhVgaQg0gQgigMQgggLgbANQgYALgMAZQhKCbiKB9QhuBkiwBkQkGCWliAKIg7ABQhKAAhUgEg");
	mask.setTransform(-2.5625,0.3557);

	// Layer_1
	this.instance = new lib.parpado();
	this.instance.setTransform(-140.1,-115.45,0.9662,0.9662);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-139.8,-110,274.5,220.8), null);


(lib.Symbol23copia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADCAiQgIgCgFgGQgGgFgCgHQgDgHAAgHQAAgGADgHQACgHAGgFQAFgFAIgDQAHgDAIAAQAIAAAHADQAHADAFAFQAGAFADAHQACAHAAAGQAAAHgCAHQgDAHgGAFQgFAGgHACQgHADgIAAQgIAAgHgDgADJgQQgEABgDADIgEAGQgBAEAAADIACAHIADAGQADACAEACQADABAFAAQAEAAAEgBIAGgEIAEgGQABgEAAgEQAAgDgBgDIgEgGQgDgDgEgBIgHgCQgEAAgEACgAipAiQgIgCgFgGQgGgFgCgHQgDgHAAgHQAAgGADgHQACgHAGgFQAFgFAIgDQAHgDAIAAQAIAAAHADQAHADAFAFQAGAFADAHQACAHAAAGQAAAHgCAHQgDAHgGAFQgFAGgHACQgHADgIAAQgIAAgHgDgAiigQQgEABgDADIgEAGQgBAEAAADIACAHIADAGQADACAEACQADABAFAAQAEAAAEgBIAGgEIAEgGQABgEAAgEQAAgDgBgDIgEgGQgDgDgEgBIgHgCQgEAAgEACgAltAkIgHgBIgEgCIgHgEIAIgPIAHAFQAEACAFAAIAEAAIADgCIABgCIABgCIgBgDIgBgCIgEgCIgFgBIgFgCIgFgCIgFgDIgEgGIAAgGQAAgGACgFQACgEACgCQADgDAEgCIALgCIALACIALAEIgHAOQgEgDgEgBIgEAAIgDAAIgDACIgCABIAAADIAAABIABACIABABIAFACIAFACIAHACIAGAEIAEAFIABAHIgCAJQgBAFgEAEQgEAEgGACIgLABIgGgBgAFXAjIgMgnIgOAnIgSAAIgVhFIATAAIAMAsIAPgsIAOAAIAOAsIANgsIATAAIgWBFgABxAjIghgqIAAAqIgSAAIAAhFIASAAIAhAqIAAgqIATAAIAABFgAhNAjIAAhFIAdAAQAEAAAFABQAEACAEADQAEAEACAFQABAEAAAEQAAAFgBAEQgBAEgEAEQgEAEgFABIgJABIgLAAIAAAXgAg7gCIAGAAIAEAAIAEgCIACgDIAAgDIAAgDIgCgEIgEgCIgEAAIgGAAgAj5AjIAAgcIgbAAIAAAcIgSAAIAAhFIASAAIAAAaIAbAAIAAgaIASAAIAABFg");
	this.shape.setTransform(-2.475,77.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23copia, new cjs.Rectangle(-43.9,68.4,85.4,18.799999999999997), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#06428B").s().p("ADCAiQgIgCgFgGQgGgFgCgHQgDgHAAgHQAAgGADgHQACgHAGgFQAFgFAIgDQAHgDAIAAQAIAAAHADQAHADAFAFQAGAFADAHQACAHAAAGQAAAHgCAHQgDAHgGAFQgFAGgHACQgHADgIAAQgIAAgHgDgADJgQQgEABgDADIgEAGQgBAEAAADIACAHIADAGQADACAEACQADABAFAAQAEAAAEgBIAGgEIAEgGQABgEAAgEQAAgDgBgDIgEgGQgDgDgEgBIgHgCQgEAAgEACgAipAiQgIgCgFgGQgGgFgCgHQgDgHAAgHQAAgGADgHQACgHAGgFQAFgFAIgDQAHgDAIAAQAIAAAHADQAHADAFAFQAGAFADAHQACAHAAAGQAAAHgCAHQgDAHgGAFQgFAGgHACQgHADgIAAQgIAAgHgDgAiigQQgEABgDADIgEAGQgBAEAAADIACAHIADAGQADACAEACQADABAFAAQAEAAAEgBIAGgEIAEgGQABgEAAgEQAAgDgBgDIgEgGQgDgDgEgBIgHgCQgEAAgEACgAltAkIgHgBIgEgCIgHgEIAIgPIAHAFQAEACAFAAIAEAAIADgCIABgCIABgCIgBgDIgBgCIgEgCIgFgBIgFgCIgFgCIgFgDIgEgGIAAgGQAAgGACgFQACgEACgCQADgDAEgCIALgCIALACIALAEIgHAOQgEgDgEgBIgEAAIgDAAIgDACIgCABIAAADIAAABIABACIABABIAFACIAFACIAHACIAGAEIAEAFIABAHIgCAJQgBAFgEAEQgEAEgGACIgLABIgGgBgAFXAjIgMgnIgOAnIgSAAIgVhFIATAAIAMAsIAPgsIAOAAIAOAsIANgsIATAAIgWBFgABxAjIghgqIAAAqIgSAAIAAhFIASAAIAhAqIAAgqIATAAIAABFgAhNAjIAAhFIAdAAQAEAAAFABQAEACAEADQAEAEACAFQABAEAAAEQAAAFgBAEQgBAEgEAEQgEAEgFABIgJABIgLAAIAAAXgAg7gCIAGAAIAEAAIAEgCIACgDIAAgDIAAgDIgCgEIgEgCIgEAAIgGAAgAj5AjIAAgcIgbAAIAAAcIgSAAIAAhFIASAAIAAAaIAbAAIAAgaIASAAIAABFg");
	this.shape.setTransform(-2.475,77.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-43.9,68.4,85.4,18.799999999999997), null);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ADCgeIAABXIgMAAIAAh2IBYBdIAAhYIANAAIAAB2gAGAA5QgDgDAAgDQAAgEADgCQACgDAEAAQADAAACADQADACAAAEQAAADgDADQgCACgDAAQgEAAgCgCgAgDA3QgKgFgJgIQgIgIgFgKQgEgLAAgMQAAgMAEgKQAFgLAIgIQAIgIALgFQAKgFAMAAQAKAAAIADQAJADAHAGIAAAPQgHgHgJgEQgJgEgKAAQgMAAgKAHQgKAGgGALQgGALgBALQABANAGALQAGAKAKAHQAKAGANAAQAJAAAJgEQAJgEAHgHIAAAQQgHAFgJADQgJADgJAAQgMAAgKgEgAk8A4QgHgDgGgFQgFgFgDgFQgCgFgBgGIgBgMIAAhHIANAAIAABDQAAAHABAGQAAAHAEAGQADADADACIAJAEIAIABQAGAAAGgCQAGgDAEgFQADgDACgFIABgJIAAgJIAAhDIANAAIAABHIgBALQAAAGgDAFQgCAFgEAEQgGAHgIADQgIADgJAAQgIAAgIgDgAFEA5IAAhlIgbAAIAAgMIBEAAIAAAMIgcAAIAABlgACaA5IgOggIgwAAIgOAgIgOAAIA1h2IAzB2gACIANIgUgsIgTAsIAnAAgAhEA5IAAhxIAMAAIAABxgAhkA5IgjgyIgDAAIAAAyIgNAAIAAhxIARAAQALAAAJADQAKACAFAHQAGAHAAANQAAANgHAIQgIAIgNABIAkAzgAiKgDIAEAAQAHAAAHgBQAGgCAEgEQAFgFAAgIQAAgKgEgEQgEgEgHgCQgHgBgHAAIgEAAgAjtA5IAAhxIATAAQAKAAAJADQAJADAFAHQAFAHAAALQAAAHgDAGQgCAFgGAEQAHACAFADQAEAFADAGQADAGAAAHQgBALgFAHQgFAHgKADQgJADgLAAgAjgAtIANAAQAHABAHgCQAGgCAEgEQAFgFAAgIQAAgHgDgEQgDgEgEgCIgKgDIgLgBIgLAAgAjggGIAFAAQAHABAGgCQAGgBAEgEQADgEAAgJQAAgIgDgEQgDgFgGgBQgGgBgIAAIgFAAgAmNA5IAAhxIANAAIAABlIAfAAIAAAMg");
	this.shape.setTransform(9.275,-0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-32.2,-10.3,83.4,20.700000000000003), null);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiBgeIAABXIgMAAIAAh2IBZBdIAAhYIAMAAIAAB2gADIA5IAAhxIA7AAIAAAMIgvAAIAAAiIAtAAIAAALIgtAAIAAAsIAvAAIAAAMgACJA5IAAgxIglhAIAPAAIAdAzIAdgzIAPAAIgmBAIAAAxgAAdA5IAAhxIA8AAIAAAMIgvAAIAAAiIAtAAIAAALIgtAAIAAAsIAvAAIAAAMgAioA5IgOggIgxAAIgNAgIgOAAIA1h2IAyB2gAi6ANIgUgsIgTAsIAnAAg");
	this.shape.setTransform(-36.7,-0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-63.2,-10.3,54.1,20.700000000000003), null);


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

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASgeIAABXIgNAAIAAh2IBYBdIAAhYIAOAAIAAB2gAh5A4QgHgDgGgGQgFgEgDgGQgCgEAAgHIgBgLIAAhHIAMAAIAABDQAAAGABAHQAAAHAFAFQACAEADACIAJAEIAIABQAHAAAGgDQAFgCAFgFQADgDABgFIABgJIAAgJIAAhDIANAAIAABHIAAALQgBAGgDAEQgCAFgEAFQgGAGgIADQgIAEgJAAQgIAAgIgDgAj1A2QgKgEgJgIQgIgIgFgLQgEgLAAgMQAAgLAEgLQAFgLAIgHQAJgJAKgFQALgEAMAAQAMAAALAEQALAFAIAJQAIAHAFALQAEALABALQgBAMgEALQgFALgIAIQgIAIgLAEQgLAFgMAAQgMAAgLgFgAj1gnQgLAFgGAMQgHAKAAAMQABANAGALQAGAKALAHQAKAGANAAQANAAALgGQAKgHAHgKQAFgLABgNQgBgMgFgKQgHgMgKgFQgKgHgOAAQgNAAgKAHgAEjA5IAAhxIAWAAIAQABQAIABAGADQAIADAHAGQAJAJAEALQAGAKAAAMQAAANgGALQgEAKgJAJQgHAFgHAEQgHADgIABIgQABgAEwAtIAKAAQAKABAJgDQAJgDAIgGQAGgIAEgIQAEgJgBgJQABgJgEgJQgEgJgHgGQgIgHgIgCQgJgCgKAAIgKAAgADTA5IAAhxIA7AAIAAAMIguAAIAAAiIAtAAIAAAKIgtAAIAAAtIAuAAIAAAMgACCA5IAAhxIA7AAIAAAMIguAAIAAAiIAtAAIAAAKIgtAAIAAAtIAuAAIAAAMgAlSA5IAAgxIgmhAIAQAAIAcAzIAdgzIAPAAIglBAIAAAxg");
	this.shape.setTransform(-16.7,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-55,-10.3,77.2,20.700000000000003), null);


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

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIA4QgKgEgJgIQgIgIgEgLQgFgLAAgMQAAgLAFgLQAEgLAIgIQAJgIAKgFQALgEAMAAQANAAAKAEQALAFAIAIQAIAIAFALQAFALAAALQAAAMgFALQgFALgIAIQgIAIgLAEQgKAFgNAAQgMAAgLgFgAiIgmQgLAGgGALQgGALAAAMQAAANAGAKQAGALALAGQAKAHANAAQANAAALgHQALgGAGgLQAGgKAAgNQAAgMgGgLQgGgLgLgGQgKgGgOAAQgNAAgKAGgADGA7IAAgxIglhAIAPAAIAdAzIAdgzIAOAAIglBAIAAAxgACRA7IgOghIgwAAIgOAhIgOAAIA1h3IAzB3gAB/APIgUgtIgTAtIAnAAgAgkA7IAAhxIAWAAIAPABQAHABAHADQAHADAHAGQAKAIAEALQAFALAAAMQAAAMgFALQgEALgKAIQgGAGgHAEQgHADgIABIgQABgAgXAvIAJAAQALAAAHgCQAJgDAIgHQAHgHAEgIQADgJAAgJQAAgJgDgJQgEgJgHgGQgIgHgJgCQgIgDgKABIgJAAgAjcA7IAAhlIgbAAIAAgMIBEAAIAAAMIgcAAIAABlg");
	this.shape.setTransform(6.225,-0.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-19.3,-10.3,55.7,20.700000000000003), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pack02();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.instance = new lib.pack01();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAzA1IgSAAQgEABgCgCIgBgFIAAgzIAAgJQgBgFgCgEQgFgNgMABQgGAAgCAEQgEADgCAGQgDAGABAIIAAA0QAAAGgBABQgCABgGAAIgHAAIgIAAQgEABgCgCQgBgCAAgEIAAgYIAAgWIAAgaQAAgIgCgCQgBgCgIgCIgDAAIgBgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIADgBIAEgBIAjgEIABAHIABAHQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAIACgDQAHgHAKgCQAIgBAMABQAQADAGAPQADAKAAAJIAAAeIAAAfQABAEgCABIgEABIgBAAg");
	this.shape.setTransform(-0.8521,-1.8187);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFEFE").s().p("AglACIgEgDIBTAAIgDADg");
	this.shape_1.setTransform(2.35,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-6.5,-7.1,13.1,14.3), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgeBJIgBgCQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBABAAIADgBIAEAAIAhAAIAjAAQAEAAADABQAEABADAEgAgSAlQgUgEgJgTQgPgbAMgdQAJgZAbgEQAPgCAOAFQAPAEAJAOQAJAOgCAQIgBADIgEABIgxAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIABgEQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAVAAQABgNgEgKQgEgLgIAAQgJgBgEALQgJAbAHAaQADAMALAGQAJAGANgDQAJgDAIgEQADgCACABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABIgBACQgCAKgKADQgPAFgNAAQgJAAgIgBg");
	this.shape.setTransform(-0.0043,-0.0058);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-5.6,-7.2,11.3,14.5), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgnBIIgGgGIAqAAIAnAAQADAAADACIAFAEIAAAAgAgnAYQgPgNgCgYQgCgWAOgRQAOgRAWgCQANgBALACQAWAFALAUQAMATgFAWQgFAUgPALQgOALgWAAQgYAAgPgOgAgJg6QgEADgCAFQgOAiAOAhIAEAGQAFAGAGgBQAHAAAFgFIAFgIIADgIQADgKgBgNQABgKgCgHQgBgJgEgIQgFgMgLAAQgFAAgEAEg");
	this.shape.setTransform(0.0133,-0.0281);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-5.7,-7.2,11.5,14.4), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag2BcIgGgGIAqAAIAnAAQAEAAACABIAFAFgAgPA4IgMAAIgLAAIgDgBIgBgEIAAhyIAAgEIAAgDQgBgGgCgCQgCgCgGgBIgEgCQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAIAEgBIBMABQAGAAAJADQALADAGAIQAFAIAAAMQABASgJALQgIAKgSAFQgJACgOAAIgEAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgFQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBABAAQAQgFAFgOQAGgPgJgOQgEgHgJgCQgIgEgGAEQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAAAIAAAEIAAA9IAAAeIAAAeQAAADgCACQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAIgBAAg");
	this.shape.setTransform(0.0264,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-6.1,-9.1,12.3,18.299999999999997), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.textos();
	this.instance.setTransform(-512.2,-481.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-512.2,-481.7,1000,1000), null);


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
	this.shape.graphics.f("#06428B").s().p("Ap4CBIAAkBITxAAIAAEBg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-63.2,-12.8,126.5,25.700000000000003), null);


(lib.bgrojo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#06428B").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgrojo, new cjs.Rectangle(-150,-125,300,250), null);


(lib._63473737 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#06428B").s().p("A70XIMAAAguPMA3pAAAMAAAAuPg");
	this.shape.setTransform(178.05,148.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._63473737, new cjs.Rectangle(0,0,356.1,296.1), null);


(lib._8684848 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AHBCuIAxhjIhGiHIAeAAIA1BrIAxhrIAcAAIhuDqgAAVCuIAwhjIhEiHIAdAAIA1BrIAwhrIAdAAIhuDqgAMSBTQgPgKgFgSIAWgJQAFALAGAHQAHAGANAAQAKAAAHgGQAGgHABgKQgBgKgGgGQgHgFgKgFIgUgIQgKgFgHgIQgGgHgBgOQAAgNAGgKQAGgJAKgGQAKgFANAAQANAAAKAJQALAHAGAMIgVALQgDgGgFgEQgGgFgHAAQgHAAgGAFQgFAEgBAHQABAIAFAEQAEAEAIADIARAHQAJADAIAFQAIAGAFAIQAFAJAAAMQAAAOgHALQgHALgMAHQgKAFgOAAQgUAAgNgKgAJ5BTQgQgKgJgSQgJgRAAgVQAAgWAIgTQAJgRAQgMQAQgLAXAAQAZAAAQAMQAQAMAIATQAIATgBAWIh2AAQAAAOAHALQAFAMAMAGQAKAHAPAAQAQgBAMgHQAKgKAIgNIAVANQgKATgSALQgRALgYAAQgWAAgRgKgALMgBQgCgLgGgIQgGgJgJgGQgKgFgLAAQgLAAgKAFQgJAGgHAJQgHAIgCALIBaAAIAAAAgAnHBSQgQgLgJgRQgIgSgBgVQABgVAIgSQAJgSAQgLQAQgLAWAAQAQABANAGQAOAHAJAMIAAAAIAAgWIAaAAIAACWIgaAAIAAgVIAAAAQgKAMgNAHQgNAFgQAAQgWAAgQgLgAm3ghQgLAIgGAMQgGAMgBAOQAAAPAHAMQAFAOALAIQALAIAQAAQAQAAAMgIQAKgHAGgNQAGgNAAgQQAAgOgGgNQgGgMgLgHQgLgHgQAAQgQAAgKAHgApsBTQgRgKgIgSQgKgRABgVQAAgWAIgTQAIgRAQgMQARgLAXAAQAYAAAQAMQARAMAIATQAIATgBAWIh2AAQAAAOAGALQAGAMALAGQALAHAOAAQARgBALgHQALgKAHgNIAWANQgKATgTALQgRALgXAAQgWAAgRgKgAoZgBQgDgLgFgIQgHgJgJgGQgJgFgLAAQgMAAgJAFQgKAGgGAJQgIAIgBALIBaAAIAAAAgAEbBaIAAjwIB9AAIAAAZIhiAAIAABHIBfAAIAAAZIhfAAIAABdIBiAAIAAAagAgwBaIAAhVQAAgMgBgKQgCgKgHgHQgHgGgOAAQgSAAgHAJQgJAJgCAOQgCAMABAPIAABHIgaAAIAAkHIAaAAIAACDIAAAAQAIgLALgFQAKgGANAAQAWAAALAKQALAIAEAPQAEAPAAAQIAABagAjaBaIAAh+IgPAAIAAgYIAPAAIAAg2IAZAAIAAA2IAbAAIAAAYIgbAAIAAB+gAkkBaIAAkHIAZAAIAAEHgArOBaIAAh1Ih7AAIAAB1IgbAAIAAjwIAbAAIAABhIB7AAIAAhhIAbAAIAADwg");
	this.shape.setTransform(90.55,24.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._8684848, new cjs.Rectangle(0,0,179.9,43.7), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_149 = new cjs.Graphics().p("EAo4A12QhSgDhEgMQlVhBkFjcQigiHiajdQg/hbhhBBQgYAQgkAUIg9AiIgOgGIA4iuIAyiRQAehXAOg8QAJgjgBg/QgBhIADgbQAWi6Aoh9QAzijBdhzQA6hIBbhQQAngiB+hmQCah8DShCQCngzBggUQCTgeB7ALQBaAIB2AZIDOAwQDxA5ClCMQCRB7BJBRQBuB6AzCAQA6CRAbCCQAeCWgICMQgIBvgUBVQgZBmgvBTQgJARgPAoQgOAmgLATQgPAZgYAhIgqA4QhpCRiZBsQiKBhi3BGQkGBmkrAJQg2ACgrAAIg3gBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(149).to({graphics:mask_graphics_149,x:413.9615,y:344.6657}).wait(9).to({graphics:null,x:0,y:0}).wait(3));

	// Layer_5
	this.instance = new lib.Symbol24copy();
	this.instance.setTransform(686.25,566.7,1.0723,1.0723,0,-2.9348,177.0653);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).to({scaleX:1.3844,scaleY:1,skewX:0,skewY:180,y:330.75},8,cjs.Ease.quadInOut).to({_off:true},1).wait(3));

	// Layer_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_149 = new cjs.Graphics().p("EAHOA1gQhRgGiQgOQhBgGhOggQgUgIh0g2QhRgmgugaQhDgngvgtQhOhKgwg8Qg9hOghhSQgQgpgqhiQgnhYgTgzQgihcgLhuQgJhaAFh1QAFhgAfhrQAZhSAvhsQBRi9DCiaIAagSQARgLAIgIQBAg5BUgrQBFglBfghQEehiDvgYQH2gzF+DIQAZANAsAfQAvAhAXANQBtA8BWB3QAyBFBUCeQAZAwAQBNQAJAsAOBaQAGAhACAzIACBVIgEAAIgEBFQgBAoAEAcQAGAbAQApIAbBEQBCDCAjBuQAIAZgKAJQgKAKgagJIhZgdQg1gSgjgNQghgMgdANQgZAMgNAaQhQCiiRCCQh1Boi5BnQkSCZlyAFIgWAAQhcAAhwgHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(149).to({graphics:mask_1_graphics_149,x:217.7192,y:343.1156}).wait(9).to({graphics:null,x:0,y:0}).wait(3));

	// parpado
	this.instance_1 = new lib.Symbol24();
	this.instance_1.setTransform(294.45,569.8,1.1103,1.095,2.9347);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).to({scaleX:1.379,scaleY:1,rotation:0,y:346.25},8,cjs.Ease.quadInOut).to({_off:true},1).wait(3));

	// Layer_6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_19 = new cjs.Graphics().p("EAHOA1gQhRgGiQgOQhBgGhOggQgUgIh0g2QhRgmgugaQhDgngvgtQhOhKgwg8Qg9hOghhSQgQgpgqhiQgnhYgTgzQgihcgLhuQgJhaAFh1QAFhgAfhrQAZhSAvhsQBRi9DCiaIAagSQARgLAIgIQBAg5BUgrQBFglBfghQEehiDvgYQH2gzF+DIQAZANAsAfQAvAhAXANQBtA8BWB3QAyBFBUCeQAZAwAQBNQAJAsAOBaQAGAhACAzIACBVIgEAAIgEBFQgBAoAEAcQAGAbAQApIAbBEQBCDCAjBuQAIAZgKAJQgKAKgagJIhZgdQg1gSgjgNQghgMgdANQgZAMgNAaQhQCiiRCCQh1Boi5BnQkSCZlyAFIgWAAQhcAAhwgHg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_2_graphics_19,x:217.7192,y:343.1156}).wait(17).to({graphics:null,x:0,y:0}).wait(125));

	// parpado
	this.instance_2 = new lib.Symbol24();
	this.instance_2.setTransform(294.45,343.15,1.379,1);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({scaleX:1.1103,scaleY:1.095,rotation:2.9347,y:569.8},8,cjs.Ease.quadInOut).to({scaleX:1.379,scaleY:1,rotation:0,y:337.75},8,cjs.Ease.quadInOut).to({_off:true},1).wait(125));

	// bordesojos.png
	this.instance_3 = new lib.bordesojos();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).wait(12));

	// maskojo02 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AAmSLQhWAAg6gEQhPgFg/gOQlEhJjyjaQiUiGiLjYQg5hYhfA6QgXAPgjASIg7AeIgOgGIA7ikQAjhbAcg0QAcgzAJg4QAJg4ABhBQABhCAEgZQAciwAqh2QA2iaBKhYQBLhXA6g9QA6g8CPheQCPhfDLg3QCggsBdgQQCMgXB1AOQBWAKBvAcIDDA0QDkA+CZCLQCGB6BDBQQBlB4AsB7QAzCNAWB9QAYCPgNCFQgLBpgWBRQgbBggvBOQgKAQgPAlQgPAkgLASQgPAXgYAfIgqA0QhpCHiVBiQiHBYixA9Qj6BXkZAAIgHAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AAmSLQhWAAg6gEQhPgFg/gOQlEhJjyjaQiUiGiLjYQg5hYhfA6QgXAPgjASIg7AeIgOgGIA7ikQAjhbAcg0QAcgzAJg4QAJg4ABhBQABhCAEgZQAciwAqh2QA2iaBKhYQBLhXA6g9QA6g8CPheQCPhfDLg3QCggsBdgQQCMgXB1AOQBWAKBvAcIDDA0QDkA+CZCLQCGB6BDBQQBlB4AsB7QAzCNAWB9QAYCPgNCFQgLBpgWBRQgbBggvBOQgKAQgPAlQgPAkgLASQgPAXgYAfIgqA0QhpCHiVBiQiHBYixA9Qj6BXkZAAIgHAAg");
	var mask_3_graphics_79 = new cjs.Graphics().p("AAmSLQhWAAg6gEQhPgFg/gOQlEhJjyjaQiUiGiLjYQg5hYhfA6QgXAPgjASIg7AeIgOgGIA7ikQAjhbAcg0QAcgzAJg4QAJg4ABhBQABhCAEgZQAciwAqh2QA2iaBKhYQBLhXA6g9QA6g8CPheQCPhfDLg3QCggsBdgQQCMgXB1AOQBWAKBvAcIDDA0QDkA+CZCLQCGB6BDBQQBlB4AsB7QAzCNAWB9QAYCPgNCFQgLBpgWBRQgbBggvBOQgKAQgPAlQgPAkgLASQgPAXgYAfIgqA0QhpCHiVBiQiHBYixA9Qj6BXkZAAIgHAAg");
	var mask_3_graphics_149 = new cjs.Graphics().p("AAmSLQhWAAg6gEQhPgFg/gOQlEhJjyjaQiUiGiLjYQg5hYhfA6QgXAPgjASIg7AeIgOgGIA7ikQAjhbAcg0QAcgzAJg4QAJg4ABhBQABhCAEgZQAciwAqh2QA2iaBKhYQBLhXA6g9QA6g8CPheQCPhfDLg3QCggsBdgQQCMgXB1AOQBWAKBvAcIDDA0QDkA+CZCLQCGB6BDBQQBlB4AsB7QAzCNAWB9QAYCPgNCFQgLBpgWBRQgbBggvBOQgKAQgPAlQgPAkgLASQgPAXgYAfIgqA0QhpCHiVBiQiHBYixA9Qj6BXkZAAIgHAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:684.0284,y:566.5642}).wait(39).to({graphics:mask_3_graphics_39,x:684.0284,y:566.5642}).wait(1).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_3_graphics_79,x:684.0284,y:566.5642}).wait(1).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_3_graphics_149,x:684.0284,y:566.5642}).wait(12));

	// ojo
	this.instance_4 = new lib.ojos();
	this.instance_4.setTransform(-17.55,420,1.0289,1.0289);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(11));

	// txt02
	this.instance_5 = new lib.Symbol9();
	this.instance_5.setTransform(501.7,500.85);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).wait(12));

	// maskojo01 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AkIRQQhOgEiLgLQg+gFhMgdQgTgHhxgxQhPgigsgZQhBgjgvgqQhMhFgug4Qg9hJgghNQgQgmgrhcQgmhTgTgwQgjhXgMhnQgKhVADhvQADhaAdhmQAWhOArhnQBLi0C5iVIAYgRQAQgLAIgHQA8g3BQgrQBCgjBcghQERhhDmgbQHgg4C+BZQC+BZAaAIQAaAHBZBAQBaBBBUBvQAyBAA2BhQA2BhANA/QANA/AJA0QAJA0gCAlQgBAlAMA2IgEAAQAAAVgDApQgDApgSAZQgSAaAtAuQAsAuAEAKQBCC3AjBnQAIAYgJAJQgKAJgZgIIhVgaQg0gQgigMQgggLgbANQgYAMgMAZQhKCbiKB8QhuBliwBkQkGCVliALIg7AAQhKAAhUgEg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AkIRQQhOgEiLgLQg+gFhMgdQgTgHhxgxQhPgigsgZQhBgjgvgqQhMhFgug4Qg9hJgghNQgQgmgrhcQgmhTgTgwQgjhXgMhnQgKhVADhvQADhaAdhmQAWhOArhnQBLi0C5iVIAYgRQAQgLAIgHQA8g3BQgrQBCgjBcghQERhhDmgbQHgg4C+BZQC+BZAaAIQAaAHBZBAQBaBBBUBvQAyBAA2BhQA2BhANA/QANA/AJA0QAJA0gCAlQgBAlAMA2IgEAAQAAAVgDApQgDApgSAZQgSAaAtAuQAsAuAEAKQBCC3AjBnQAIAYgJAJQgKAJgZgIIhVgaQg0gQgigMQgggLgbANQgYAMgMAZQhKCbiKB8QhuBliwBkQkGCVliALIg7AAQhKAAhUgEg");
	var mask_4_graphics_79 = new cjs.Graphics().p("AkIRQQhOgEiLgLQg+gFhMgdQgTgHhxgxQhPgigsgZQhBgjgvgqQhMhFgug4Qg9hJgghNQgQgmgrhcQgmhTgTgwQgjhXgMhnQgKhVADhvQADhaAdhmQAWhOArhnQBLi0C5iVIAYgRQAQgLAIgHQA8g3BQgrQBCgjBcghQERhhDmgbQHgg4C+BZQC+BZAaAIQAaAHBZBAQBaBBBUBvQAyBAA2BhQA2BhANA/QANA/AJA0QAJA0gCAlQgBAlAMA2IgEAAQAAAVgDApQgDApgSAZQgSAaAtAuQAsAuAEAKQBCC3AjBnQAIAYgJAJQgKAJgZgIIhVgaQg0gQgigMQgggLgbANQgYAMgMAZQhKCbiKB8QhuBliwBkQkGCVliALIg7AAQhKAAhUgEg");
	var mask_4_graphics_149 = new cjs.Graphics().p("AkIRQQhOgEiLgLQg+gFhMgdQgTgHhxgxQhPgigsgZQhBgjgvgqQhMhFgug4Qg9hJgghNQgQgmgrhcQgmhTgTgwQgjhXgMhnQgKhVADhvQADhaAdhmQAWhOArhnQBLi0C5iVIAYgRQAQgLAIgHQA8g3BQgrQBCgjBcghQERhhDmgbQHgg4C+BZQC+BZAaAIQAaAHBZBAQBaBBBUBvQAyBAA2BhQA2BhANA/QANA/AJA0QAJA0gCAlQgBAlAMA2IgEAAQAAAVgDApQgDApgSAZQgSAaAtAuQAsAuAEAKQBCC3AjBnQAIAYgJAJQgKAJgZgIIhVgaQg0gQgigMQgggLgbANQgYAMgMAZQhKCbiKB8QhuBliwBkQkGCVliALIg7AAQhKAAhUgEg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:293.4375,y:569.231}).wait(39).to({graphics:mask_4_graphics_39,x:293.4375,y:569.231}).wait(1).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_4_graphics_79,x:293.4375,y:569.231}).wait(1).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_4_graphics_149,x:293.4375,y:569.231}).wait(12));

	// ojo
	this.instance_6 = new lib.ojos();
	this.instance_6.setTransform(-9.45,420.35,1.0263,1.0263);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},27).wait(134));

	// txt01
	this.instance_7 = new lib.Symbol9();
	this.instance_7.setTransform(501.7,501.7);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).wait(12));

	// cara1.jpg
	this.instance_8 = new lib.cara1();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("AprDwIAAnfIBBAAIAAHfg");
	var mask_graphics_1 = new cjs.Graphics().p("Ap6DwIAAnfID+AAIAAHfg");
	var mask_graphics_2 = new cjs.Graphics().p("AqJDwIAAnfIGzAAIAAHfg");
	var mask_graphics_3 = new cjs.Graphics().p("AqXDwIAAnfIJfAAIAAHfg");
	var mask_graphics_4 = new cjs.Graphics().p("AqkDwIAAnfIMBAAIAAHfg");
	var mask_graphics_5 = new cjs.Graphics().p("AqxDwIAAnfIOdAAIAAHfg");
	var mask_graphics_6 = new cjs.Graphics().p("Aq9DwIAAnfIQvAAIAAHfg");
	var mask_graphics_7 = new cjs.Graphics().p("ArIDwIAAnfIS5AAIAAHfg");
	var mask_graphics_8 = new cjs.Graphics().p("ArSDwIAAnfIU6AAIAAHfg");
	var mask_graphics_9 = new cjs.Graphics().p("ArcDwIAAnfIWzAAIAAHfg");
	var mask_graphics_10 = new cjs.Graphics().p("AsRDwIAAnfIYjAAIAAHfg");
	var mask_graphics_11 = new cjs.Graphics().p("AtFDwIAAnfIaLAAIAAHfg");
	var mask_graphics_12 = new cjs.Graphics().p("At0DwIAAnfIbpAAIAAHfg");
	var mask_graphics_13 = new cjs.Graphics().p("AufDwIAAnfIc/AAIAAHfg");
	var mask_graphics_14 = new cjs.Graphics().p("AvGDwIAAnfIeNAAIAAHfg");
	var mask_graphics_15 = new cjs.Graphics().p("AvpDwIAAnfIfTAAIAAHfg");
	var mask_graphics_16 = new cjs.Graphics().p("AwHDwIAAnfMAgPAAAIAAHfg");
	var mask_graphics_17 = new cjs.Graphics().p("AwhDwIAAnfMAhDAAAIAAHfg");
	var mask_graphics_18 = new cjs.Graphics().p("Aw3DwIAAnfMAhvAAAIAAHfg");
	var mask_graphics_19 = new cjs.Graphics().p("AxIDwIAAnfMAiRAAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-62,y:-7.25}).wait(1).to({graphics:mask_graphics_1,x:-63.5327,y:-7.25}).wait(1).to({graphics:mask_graphics_2,x:-64.9959,y:-7.25}).wait(1).to({graphics:mask_graphics_3,x:-66.3897,y:-7.25}).wait(1).to({graphics:mask_graphics_4,x:-67.714,y:-7.25}).wait(1).to({graphics:mask_graphics_5,x:-68.9688,y:-7.25}).wait(1).to({graphics:mask_graphics_6,x:-70.1542,y:-7.25}).wait(1).to({graphics:mask_graphics_7,x:-71.2701,y:-7.25}).wait(1).to({graphics:mask_graphics_8,x:-72.3165,y:-7.25}).wait(1).to({graphics:mask_graphics_9,x:-73.2934,y:-7.25}).wait(1).to({graphics:mask_graphics_10,x:-69.8188,y:-7.25}).wait(1).to({graphics:mask_graphics_11,x:-66.3206,y:-7.25}).wait(1).to({graphics:mask_graphics_12,x:-63.1125,y:-7.25}).wait(1).to({graphics:mask_graphics_13,x:-60.1944,y:-7.25}).wait(1).to({graphics:mask_graphics_14,x:-57.5663,y:-7.25}).wait(1).to({graphics:mask_graphics_15,x:-55.2281,y:-7.25}).wait(1).to({graphics:mask_graphics_16,x:-53.18,y:-7.25}).wait(1).to({graphics:mask_graphics_17,x:-51.4219,y:-7.25}).wait(1).to({graphics:mask_graphics_18,x:-49.9538,y:-7.25}).wait(1).to({graphics:mask_graphics_19,x:-45.4,y:-7.25}).wait(38));

	// Capa_2
	this.instance = new lib._8684848();
	this.instance.setTransform(-32,-7.1,1,1,0,0,0,90,21.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57));

	// Symbol 14
	this.instance_1 = new lib.Symbol14();
	this.instance_1.setTransform(102.3,-10.15);
	this.instance_1.alpha = 0.5;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({x:108.05,alpha:1},7,cjs.Ease.get(0.8)).wait(19));

	// Symbol 13
	this.instance_2 = new lib.Symbol13();
	this.instance_2.setTransform(91.95,-10.25);
	this.instance_2.alpha = 0.5;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({x:96.7,alpha:1},7,cjs.Ease.get(0.8)).wait(23));

	// Symbol 12
	this.instance_3 = new lib.Symbol12();
	this.instance_3.setTransform(78.9,-10.2);
	this.instance_3.alpha = 0.5;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({x:84.4,alpha:1},7,cjs.Ease.get(0.8)).wait(28));

	// Symbol 11
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(70.45,-12.15);
	this.instance_4.alpha = 0.5;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({x:72.95,alpha:1},8,cjs.Ease.get(0.8)).wait(32));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_39 = new cjs.Graphics().p("AhUDCIAAm1IK4AAIAAG1g");
	var mask_1_graphics_40 = new cjs.Graphics().p("Ah1i+IK3g3IAiG0Iq2A3g");
	var mask_1_graphics_41 = new cjs.Graphics().p("AiPijIKxhpIBCGwIqxBpg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AikiIIKoiZIBgGqIqoCZg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Ai0hvIKdjFIB7GkIqdDFg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AjAhXIKPjsICVGbIqQDsg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AjJhAIKBkRICsGSIqBERg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AjOgrIJykyIDAGJIpzEyg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AjSgYIJklPIDSGAIpkFPg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AjTgGIJUlpIDjF2IpWFpg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AjTAIIJGl+IDxFvIpIF+g");
	var mask_1_graphics_50 = new cjs.Graphics().p("AjSAWII5mRID9FmIo7GRg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AjRAiIIumiIEHFfIovGig");
	var mask_1_graphics_52 = new cjs.Graphics().p("AjPAsIIjmvIEQFYIokGvg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AjNA0IIam6IEXFTIocG6g");
	var mask_1_graphics_54 = new cjs.Graphics().p("AjLA7IITnDIEcFOIoVHDg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AjKA/IIOnIIEfFLIoPHIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_1_graphics_39,x:61.25,y:-24.375}).wait(1).to({graphics:mask_1_graphics_40,x:61.2376,y:-24.044}).wait(1).to({graphics:mask_1_graphics_41,x:61.2264,y:-21.2893}).wait(1).to({graphics:mask_1_graphics_42,x:61.2164,y:-18.6186}).wait(1).to({graphics:mask_1_graphics_43,x:61.2075,y:-16.0591}).wait(1).to({graphics:mask_1_graphics_44,x:61.1997,y:-13.6327}).wait(1).to({graphics:mask_1_graphics_45,x:61.1928,y:-11.3565}).wait(1).to({graphics:mask_1_graphics_46,x:61.1869,y:-9.2437}).wait(1).to({graphics:mask_1_graphics_47,x:61.1819,y:-7.3037}).wait(1).to({graphics:mask_1_graphics_48,x:61.1776,y:-5.5433}).wait(1).to({graphics:mask_1_graphics_49,x:61.174,y:-3.9666}).wait(1).to({graphics:mask_1_graphics_50,x:61.171,y:-2.5761}).wait(1).to({graphics:mask_1_graphics_51,x:61.1686,y:-1.3728}).wait(1).to({graphics:mask_1_graphics_52,x:61.1666,y:-0.3567}).wait(1).to({graphics:mask_1_graphics_53,x:61.1651,y:0.4728}).wait(1).to({graphics:mask_1_graphics_54,x:61.164,y:1.1165}).wait(1).to({graphics:mask_1_graphics_55,x:61.1304,y:1.5}).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFEFE").s().p("AgcC4IgkgjIlLlZIMXAAQgWAiglAkQgqAmgTAUIj4DzQgSASgJADIgGABQgLAAgMgNg");
	this.shape.setTransform(110.3972,-1.3902,0.1077,0.1077);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AD7HvIuhvNQgNgOAFgOQALgLAUAAQALAAAWADIE/gBIE/gBQApgBAeAMQAfANAcAeQBxB6CcClIEREdQkBEPhmBuQgWAYgPACIgDABQgRAAgVgXg");
	this.shape_1.setTransform(100.7587,1.9859,0.1077,0.1077);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvttIIGEABQDaAACWgCQAfAAAaAPQASALAaAaINpOIIECEJQAUAVADAOQADASgVAVIlxGEg");
	this.shape_2.setTransform(90.7101,5.4539,0.1077,0.1077);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A0ayEIGIABQDcAACYgCQAgAAAZASQAJAGAgAhIatbwQApArABAPQAAAPgoAqIlaFvg");
	this.shape_3.setTransform(80.942,8.8554,0.1077,0.1077);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},39).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-22.1,233,43.5);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {rollOver:10,rollOut:15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(8));

	// opacidad
	this.instance = new lib.Symbol2();
	this.instance.setTransform(208.5,300.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},8).to({_off:true},1).wait(18));

	// btn02.png
	this.instance_1 = new lib.Symbol23();
	this.instance_1.setTransform(209,222);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:1},5).to({alpha:0},5).to({_off:true},1).wait(7));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("ApWBgIAAi/IStAAIAAC/g");
	this.shape.setTransform(208.375,300.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("ApWBgIAAi/IStAAIAAC/g");
	this.shape_1.setTransform(208.375,300.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.4)").s().p("ApWBgIAAi/IStAAIAAC/g");
	this.shape_2.setTransform(208.375,300.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.6)").s().p("ApWBgIAAi/IStAAIAAC/g");
	this.shape_3.setTransform(208.375,300.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.8)").s().p("ApWBgIAAi/IStAAIAAC/g");
	this.shape_4.setTransform(208.375,300.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ApWBgIAAi/IStAAIAAC/g");
	this.shape_5.setTransform(208.375,300.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(7));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("ApWhfIStAAIAAC/IytAAg");
	this.shape_6.setTransform(208.375,300.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(27));

	// btn01.png
	this.instance_2 = new lib.Symbol23copia();
	this.instance_2.setTransform(209,222);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145.3,287.5,126.5,25.80000000000001);


(lib._73573737 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fade:9};
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

	// Capa_1
	this.instance = new lib._63473737();
	this.instance.setTransform(178.1,148,1,1,0,0,0,178.1,148);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(8).to({_off:false,alpha:1},0).to({alpha:0},15).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356.1,296.1);


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"fade":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,899];
	// timeline functions:
	this.frame_0 = function() {
		// ------------- Variables ------------------- //
		root = this;
		loopNum = 0;
		
		
		/* EVENTOS MOUSEOVER */
		document.eventoRollOver = function(){
			root.btn.gotoAndPlay("rollOver");
			root.btn2.gotoAndPlay("rollOver");
		}
		
		/* EVENTOS MOUSEOUT*/
		document.eventoRollOut = function(){
			root.btn.gotoAndPlay("rollOut");
			root.btn2.gotoAndPlay("rollOut");
		}
	}
	this.frame_899 = function() {
		root.opacidadintro.gotoAndPlay('fade');
		root.gotoAndPlay('fade');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(899).call(this.frame_899).wait(1));

	// borde
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(900));

	// opacidad
	this.instance = new lib.bgrojo();
	this.instance.setTransform(150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(874).to({_off:false},0).to({alpha:1},25).wait(1));

	// opacidadintro
	this.opacidadintro = new lib._73573737();
	this.opacidadintro.name = "opacidadintro";
	this.opacidadintro.setTransform(148.1,129.05,1,1,0,0,0,178.1,148);

	this.timeline.addTween(cjs.Tween.get(this.opacidadintro).wait(900));

	// logo final
	this.instance_1 = new lib.Symbol3("synched",0,false);
	this.instance_1.setTransform(151.8,129.7,1,1,0,0,0,-0.2,0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(594).to({_off:false},0).wait(306));

	// Layer_20
	this.instance_2 = new lib.bgrojo();
	this.instance_2.setTransform(149.5,100.7,1.1,0.664,0,0,0,0,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(584).to({_off:false},0).to({alpha:1},10).wait(306));

	// pack02.png
	this.instance_3 = new lib.Symbol17();
	this.instance_3.setTransform(-40,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(337).to({_off:false},0).to({x:150},22,cjs.Ease.get(0.8)).wait(541));

	// pack01.png
	this.instance_4 = new lib.Symbol16();
	this.instance_4.setTransform(40,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(337).to({_off:false},0).to({x:150},22,cjs.Ease.get(0.8)).wait(541));

	// CTA
	this.btn = new lib.cta();
	this.btn.name = "btn";
	this.btn.setTransform(-57,-92);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(385).to({_off:false},0).wait(515));

	// OCULAR.
	this.instance_5 = new lib.Symbol21();
	this.instance_5.setTransform(184,161,1.0534,1.0534);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(372).to({_off:false},0).to({x:194,alpha:1},11,cjs.Ease.get(1)).to({_off:true},487).wait(30));

	// DESCONGESTIVO
	this.instance_6 = new lib.Symbol20();
	this.instance_6.setTransform(217,142,1.0534,1.0534);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(366).to({_off:false},0).to({x:227,alpha:1},11,cjs.Ease.get(1)).to({_off:true},493).wait(30));

	// NECESITÁS UN 
	this.instance_7 = new lib.Symbol19();
	this.instance_7.setTransform(208,122,1.0534,1.0534);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(360).to({_off:false},0).to({x:218,alpha:1},12,cjs.Ease.get(1)).to({_off:true},498).wait(30));

	// HOY 
	this.instance_8 = new lib.Symbol18();
	this.instance_8.setTransform(170,102,1.0534,1.0534);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(355).to({_off:false},0).to({x:180,alpha:1},11,cjs.Ease.get(1)).to({_off:true},504).wait(30));

	// opacidad01
	this.instance_9 = new lib.bgrojo();
	this.instance_9.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:452},25,cjs.Ease.get(0.8)).to({_off:true},1).wait(304).to({_off:false,x:-152},0).to({x:150},17,cjs.Ease.get(0.8)).wait(553));

	// opacidad02
	this.instance_10 = new lib.bgrojo();
	this.instance_10.setTransform(150,125);
	this.instance_10.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:452},31,cjs.Ease.get(0.8)).to({_off:true},1).wait(298).to({_off:false,x:-151},0).to({x:151},12,cjs.Ease.get(0.8)).wait(558));

	// cara
	this.instance_11 = new lib.Symbol8("synched",0);
	this.instance_11.setTransform(156.15,105.7,0.3062,0.3062,0,0,0,520.1,499.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({loop:false},0).to({regY:499.9,scaleX:0.791,scaleY:0.791,x:334.4,y:69.4,mode:"single",startPosition:79},40,cjs.Ease.quadInOut).wait(112).to({startPosition:79},0).to({x:20.4,y:77.4,mode:"synched",startPosition:149,loop:false},16,cjs.Ease.quadInOut).wait(719));

	// bgrojo
	this.instance_12 = new lib.bgrojo();
	this.instance_12.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(900));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-241,-201,955,674);
// library properties:
lib.properties = {
	id: 'E7F8FFA30680744D9C644F57AD1AD8B3',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bordesojos.png?1736392095077", id:"bordesojos"},
		{src:"images/cara1.jpg?1736392095077", id:"cara1"},
		{src:"images/ojos.jpg?1736392095077", id:"ojos"},
		{src:"images/pack01.png?1736392095077", id:"pack01"},
		{src:"images/pack02.png?1736392095077", id:"pack02"},
		{src:"images/parpado.jpg?1736392095077", id:"parpado"},
		{src:"images/textos.png?1736392095077", id:"textos"}
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
an.compositions['E7F8FFA30680744D9C644F57AD1AD8B3'] = {
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