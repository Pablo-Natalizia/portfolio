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



(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo);
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


(lib.Símbolo17 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#4E135F").s().p("AJlBEIgFgBIAAgPIAGABIAEgBIAEgEIADgJIAAgEIgVhJIATAAIALAxIABAAIAKgxIATAAIgWBRQgDAKgEAFQgCAFgFADQgFADgGAAgACqBFIAAhrIAOAAIADAJIABAAIAFgGQABgDADgBIAHgBQAKAAAGAKQAGALAAASQAAALgDAJQgCAJgFAEQgFAFgHAAIgGgBIgGgEIgEgGIgBAAIAAArgADAgWQgCACgBAFQgCAEAAAIIAAADQAAAIACAEQABAFACACQAEADACAAQADAAACgDQADgCAAgGIACgMQgBgMgCgGQgCgGgFAAQgDAAgDADgABmBFIAAhrIANAAIAEAJIAAAAIAFgGQACgDADgBIAGgBQALAAAFAKQAGAKAAATQAAANgCAHQgDAJgFAEQgFAFgGAAIgHgBIgGgEIgEgGIAAAAIAAArgAB7gWIgDAHIgBAPIABAMIADAHQADADAEAAQADAAACgDQACgCABgGIABgMQAAgMgCgGQgCgGgFAAQgEAAgDADgAJBAiQgEgCgCgFQgCgFAAgJIAAglIgHAAIAAgJIAJgFIADgQIANAAIAAAQIANAAIAAAOIgNAAIAAAlQAAAEABACQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIAFAAQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAgBIAAAPIgGACIgIABQgGAAgEgDgAGWAiQgGgEgBgGQgCgGAAgIIAAgwIASAAIAAAqQAAAJABAEQABAEAEAAQAEAAADgCQADgDAAgFIABgxIASAAIAABKIgOAAIgCgKIgBAAIgEAGIgFAEIgHABQgHAAgEgDgAFqAiQgDgCgDgFQgCgFABgJIAAglIgIAAIAAgJIAJgFIAEgQIAMAAIAAAQIANAAIAAAOIgNAAIAAAlQAAAEABACQABABAAAAQABABAAAAQABAAABAAQAAAAABAAIAEAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBIAAAPIgGACIgHABQgHAAgEgDgAD7AiQgFgEgEgFQgDgGgBgGIgCgOQAAgLADgJQACgJAHgFQAFgFAMAAQAIAAAHAFQAFAEAFAJQADAKAAALQAAAIgCAGQgCAHgDAFQgDAGgGADQgEADgJAAQgHAAgGgDgAEAgTQgCAFAAANIABAMQAAAEADAEQADADAEAAQADAAACgDQADgCABgGIAAgMIAAgNQgBgEgDgEQgCgDgDAAQgGAAgDAGgAAwAiQgGgDgDgGQgDgEgDgIQgBgHgBgHQAAgLADgJQAEgKAGgEQAFgFALAAQAJAAAGAFQAHAEADAJQAEAIgBANQAAAHgBAHQgCAHgDAFQgDAGgGADQgFADgIAAQgHAAgFgDgAA0gTQgCAHgBALIABAMQACAGACACQACADAEAAQAEAAACgDQABgBACgHIABgMIgBgNQgBgGgCgCQgDgDgDAAQgFAAgDAGgAgqAgQgHgFgDgIQgDgJAAgKQAAgNADgJQAEgJAGgEQAGgFAIAAQAIAAAHAFQAFADAEAIQACAIAAAKIAAAJIgkAAQABALAEAEQADAEAHAAIAJgBIAJgEIAAAPQgEACgFACIgLABQgLAAgGgFgAgigWQgDAFAAAIIATAAIgBgJIgDgGQgCgCgEAAQgDAAgDAEgAicAiQgDgCgDgFQgBgFAAgJIAAglIgIAAIAAgJIAJgFIAFgQIALAAIAAAQIAOAAIAAAOIgOAAIAAAlQABAEABACQAAABABAAQAAABABAAQAAAAABAAQABAAABAAIADAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIAAAPIgHACIgHABQgHAAgEgDgAk3AiQgGgDgDgGQgDgEgDgIQgBgHgBgHQAAgLADgJQAEgKAGgEQAFgFALAAQAJAAAGAFQAHAEADAJQAEAIgBANQAAAHgBAHQgCAHgDAFQgDAGgGADQgFADgIAAQgHAAgFgDgAkzgTQgCAHgBALIABAMQACAGACACQACADAEAAQAEAAACgDQABgBACgHIABgMIgBgNQgBgGgCgCQgDgDgDAAQgFAAgDAGgAn/AiQgEgCgCgFQgBgFAAgJIAAglIgIAAIAAgJIAJgFIAEgQIAMAAIAAAQIANAAIAAAOIgNAAIAAAlQAAAEACACQABACADAAIAEAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBIAAAPIgGACIgHABQgHAAgEgDgAo8AgQgHgEgDgJQgDgJAAgKQAAgNADgJQADgJAGgEQAGgFAJAAQAJAAAFAFQAGADADAIQADAIAAAKIAAAJIgkAAQAAALAEAEQAEAEAHAAIAJgBIAJgEIAAAPQgEACgGACIgLABQgLAAgFgFgAo0gWQgEAFAAAIIATAAIgBgJIgDgGIgFgCQgEAAgCAEgAqGAfQgIgGgFgMQgEgMAAgOQAAgPAEgLQAFgLAJgHQAJgGANAAQAIAAAGACIALAEIgGAQIgJgEIgJgBQgIAAgEAEQgEAEgDAHQgDAHABAMQAAALABAGQACAHAFAFQAEAEAGAAIAFgBIAEgBIAAgWIgMAAIAAgPIAfAAIAAAyIgPAEIgOABQgNAAgHgGgAIXAkIAAhKIARAAIAABKgAH1AkIAAgsQAAgIgBgEQgCgEgFAAQgFAAgDAGQgCAGAAAMIAAAkIgSAAIAAhKIAPAAIABAJIABAAIAFgGIAFgEIAHgBQAKAAAFAHQAFAHAAANIAAAxgAExAkIAAhKIAPAAIACAMIAAAAIAFgHIAEgFQADgCAEAAIADAAIADABIgBATIgGgBQgDAAgDACQgCABgCADIgDAGIgBAtgAhVAkIAAgsQAAgIgCgEQgCgEgEAAQgDAAgDADQgCADgBAFIgBAxIgSAAIAAhoIASAAIgBAnIABAAQAAgDADgDIAGgEIAHgBQAHAAAEADQAFADACAGQACAGAAAJIAAAxgAjeAkIAAgsQAAgIgBgEQgDgEgEAAQgFAAgDAGQgCAGAAAMIAAAkIgRAAIAAhKIANAAIADAJIABAAIADgGIAGgEIAHgBQAJAAAFAHQAFAHABANIAAAxgAl+AkIAAgsQgBgIgBgEQgCgEgEAAQgGAAgCAGQgDAGABAMIAAAkIgSAAIAAhKIAOAAIACAJIABAAIAEgGIAGgEIAHgBQAJAAAFAHQAFAHABANIAAAxgAnEAkIAAhKIASAAIAABKgAIYgyQgDgDABgFQgBgFADgCQACgDAFAAQAGAAACADQACADAAAEQAAAFgCADQgCACgGAAQgFAAgCgCgAnCgyQgCgDgBgFQABgFACgCQACgDAFAAQAGAAACADQACACAAAFQAAAGgDACQgBACgGAAQgEAAgDgCg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo17, new cjs.Rectangle(-66.4,-6.8,132.8,13.7), null);


(lib.Símbolo13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhACJQgJgHgEgOQgGgNAAgSQABgLACgMQADgLAEgIQAHgJAGgDQAIgFAKAAQAGAAAFACIALAEIgFAPQgEgDgEgBQgEgBgEgBQgHAAgEADQgEAEgDAGQgDAGgBAIIgCARQAAAOAEAKQACAIAFAGQAGAGAHAAQAGgBAEgBIAJgEIAAAQIgKADIgLACQgNAAgIgHgAkGCGQgJgJAAgTIAAhOIARAAIAABNQABANAEAFQAEAFAHABQAFgBAEgCQAEgCACgFQACgEAAgKIAAhNIARAAIAABNQAAAPgEAHQgDAJgJADQgGAFgMAAQgQAAgIgKgAAOCOIAAgsIgZhGIARAAIARAyIAQgyIASAAIgaBGIAAAsgAh+COIglhXIgBAAIACBXIgQAAIAAhyIAUAAIAlBVIAAAAIgBhVIARAAIAABygADPAAIgOgZIgCAAQgKAAgHgFQgIgFgDgHQgGgJgBgKIgCgXQgBgUAFgNQAEgMAIgIQAKgGAMAAQALAAAJAGQAJAHAFANQAEANAAAUQAAANgCAMQgDAKgFAJQgEAHgHADIASAegAC1h6QgFAEgCAKQgCAIAAAQQAAAQACAIQACAKAFAEQAEAGAHAAQAGAAAFgGQAEgDADgLQACgKAAgOQAAgVgFgMQgFgLgKAAQgHAAgEAGgAD+gcQgDgDAAgGQAAgFADgDQACgDAGAAQAEAAADACQADAEAAAFQAAAGgDADQgDADgEAAQgGAAgCgDgAhNgZIgQgGIAAgSIAMAGIAMACQAFAAAEgCQADgDABgDQACgFAAgEQAAgEgBgEIgFgGIgTgNIgHgGIgFgJIgBgMQgBgJAFgHQAEgHAGgEQAIgEAJAAQAEAAAIACQAHABAFADIgFAQQgGgDgEgCIgJgBQgDAAgEACQgEABgCAEQgBADAAAFQAAAEABAEQACAEAEACIAKAGQAJAGADADQAEADADAHQADAHAAAHQAAAJgEAJQgEAHgHAEQgHAFgKAAgAB7gbIgIggIgaAAIgHAgIgSAAIAchyIAVAAIAcBygABchKIAVAAIgKgvIAAgGgAgPgbIAAhyIAZAAQANAAAJAGQAKAGAFANQAEALAAAUQAAAUgEALQgFANgKAIQgKAGgNAAgAACgqIAGAAQANAAAHgKQAFgLAAgWQABgQgDgHQgDgKgFgDQgFgFgIAAIgIAAgAh6gbIgHggIgbAAIgHAgIgSAAIAbhyIAXAAIAcBygAiZhKIAVAAIgKg1gAjagbIgkhXIgBAAIABBXIgQAAIAAhyIAVAAIAlBVIAAAAIgBhVIAQAAIAABygAD+heQgDgDAAgGQAAgFADgEQACgCAGAAQAFAAACACQADAEAAAFQAAAGgDADQgDADgEAAQgGAAgCgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo13, new cjs.Rectangle(-27.1,-14.4,54.3,28.8), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#662A77").s().p("Ao9VPQkJhwjMjMQjMjMhwkJQh0kSAAksQAAkrB0kSQBwkJDMjMQDMjMEJhwQESh0ErAAQEsAAESB0QEJBwDMDMQDMDMBwEJQB0ESAAErQAAEsh0ESQhwEJjMDMQjMDMkJBwQkSB0ksAAQkrAAkSh0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo10, new cjs.Rectangle(-147.5,-147.5,295,295), null);


(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(-0.025,-2.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(-85.9,-17.9,171.8,30.2), null);


(lib.Símbolo7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(0,-0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(-86.5,-16,173,30.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AIMBvQgLgHgHgLQgHgLgEgQQgDgOAAgUQAAgaAGgSQAGgTANgKQANgLAUAAQARAAAOAKQAOALAGASQAHASAAAbQAAAPgDATQgEAPgHAMQgGALgMAHQgLAGgPAAQgPAAgLgGgAIRgKQgGANAAAdQAAASADAOQADAOAGAGQAGAGAJAAQAJAAAGgGQAGgGADgOQACgOAAgSQAAgSgCgOQgDgNgGgFQgGgHgJAAQgOAAgHAPgAFLBqQgOgKgGgTQgGgTAAgZQAAgbAGgSQAHgUAMgJQANgKASAAQASAAALAJQAMAKAGAQQAGAQAAAVIAAATIhOAAQAAAaAIANQAIAMASAAQAIAAAKgCQAJgDAKgGIAAAaQgKAGgJACQgJADgNAAQgWAAgNgLgAFXgQQgGAKgBAXIAxAAQAAgMgDgKQgDgKgFgGQgFgFgIAAQgLAAgHAKgABXBuQgJgHgEgOQgFgNAAgSIAAhqIAfAAIAABhQAAAUAFALQAEAJAKAAQAKAAAGgGQAGgFACgNQADgNAAgQIAAhUIAfAAIAACiIgZAAIgDgWIgCAAQgDAIgGAFQgFAHgHACQgGADgJAAQgPAAgJgHgAABBwQgIgGgDgKQgDgKAAgQIAAhdIgQAAIAAgQIASgJIAHgkIAUAAIAAAkIAdAAIAAAZIgdAAIAABbQAAALADAFQADAGAIAAIAIgBIAJgDIAAAZQgFADgHABQgHACgHAAQgNAAgHgFgAiOBuQgJgHgEgOQgEgOAAgRIAAhqIAfAAIAABhQAAAVAEAKQAEAJAKAAQAKAAAGgGQAGgFACgNQADgKAAgTIAAhUIAfAAIAACiIgZAAIgDgWIgCAAQgDAIgGAFQgFAHgHACQgGADgJAAQgPAAgJgHgAmZBqQgNgKgGgTQgGgTAAgZQAAgbAGgSQAGgTAMgKQANgKASAAQASAAALAJQAMAJAGARQAGAQAAAVIAAATIhOAAQAAAaAJANQAIAMARAAQAJAAAKgCQAJgEAJgFIAAAaQgKAGgJACQgIADgOAAQgVAAgOgLgAmMgQQgHALgBAWIAxAAQAAgMgCgKQgDgKgFgGQgFgFgJAAQgLAAgGAKgAKCByIAAiJIgTAAIAAgQIATgKIAAgIQAAgUAEgNQAEgNAIgGQAJgHAOAAIAOABIAOAFIgHAYIgIgDIgHAAQgIAAgDAGQgCAGgBASIAAALIAaAAIAAAZIgaAAIAACJgADWByIAAiiIAYAAIAEAbIACAAIAIgPQAFgHAGgEQAGgEAIAAIAGAAIAHACIgDAgIgGgBIgHgBQgHAAgFAEQgFADgEAHQgEAFgCAKQgCAIAAAMIAABUgAjuByIAAiJIgTAAIAAgQIATgKIAAgIQAAgUAEgNQAEgNAIgGQAJgHAPAAIANABIAOAFIgHAYIgIgDIgHAAQgIAAgDAGQgDAHAAARIAAALIAaAAIAAAZIgaAAIAACJgAnwByIAAhmQAAgTgEgIQgEgJgKAAQgKAAgGAGQgFAGgDAMQgDAKAAAWIAABSIgfAAIAAjkIAfAAIgBBKQAAAHgBAHIACAAQADgIAFgGQAEgEAIgEQAIgEAHAAQAOAAAJAHQAJAGAFANQAEANAAASIAABtgAqbByIAAi6IgpAAIAAgcIByAAIAAAcIgpAAIAAC6g");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(-70.9,-11.7,141.8,23.4), null);


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

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E135F").s().p("EgYmAwFMAAAhgJMAxNAAAMAAABgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-157.5,-307.7,315,615.5), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#4FBC89").s().p("Ai7AsIFeiDIAZAmIliCJg");
	this.shape.setTransform(30.325,-4.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4FBC89").s().p("AgeC7IAAl1IA9AAIgcF1g");
	this.shape_1.setTransform(3.475,-29.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4FBC89").s().p("AixhhIAugbIE1DYIgOAhg");
	this.shape_2.setTransform(-31.325,-13.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4FBC89").s().p("AiwCOIE9kwIAkArIkxEZg");
	this.shape_3.setTransform(-27.025,30.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4FBC89").s().p("AisiRIAigeIE3E9IgYAig");
	this.shape_4.setTransform(24.025,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-49.1,-48.4,98.30000000000001,96.8), null);


(lib.Símbolo14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fade:0,rollOver:5,rollOut:8};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop ();
	}
	this.frame_7 = function() {
		this.stop ();
	}
	this.frame_10 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(3).call(this.frame_7).wait(3).call(this.frame_10).wait(1));

	// txt purple
	this.instance = new lib.Símbolo17();
	this.instance.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqbCqQhGAAgygyQgygxAAhHQAAhFAygyQAygyBGAAIU3AAQBGAAAzAyQAxAyAABFQAABHgxAxQgzAyhGAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4E9D8").s().p("AqbCqQhGAAgygxQgygzAAhGQAAhFAygyQAygyBGAAIU3AAQBGAAAyAyQAyAyAABFQAABGgyAzQgyAxhGAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AD2B0").s().p("AqbCqQhGAAgygxQgygzAAhGQAAhFAygyQAygyBGAAIU3AAQBGAAAyAyQAyAyAABFQAABGgyAzQgyAxhGAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4FBC89").s().p("AqbCqQhGAAgygyQgygxAAhHQAAhFAygyQAygyBGAAIU3AAQBGAAAzAyQAxAyAABFQAABHgxAxQgzAyhGAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.8,-17,167.6,34);


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

	// Capa_1
	this.instance = new lib.Símbolo13();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).wait(10).to({alpha:0.5},8).to({alpha:1},8).wait(10).to({alpha:0.5},8).to({alpha:1},8).wait(10).to({alpha:0.5},8).to({alpha:1},8).wait(10).to({alpha:0.5},8).to({alpha:1},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.1,-14.4,54.3,28.8);


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
	this.instance = new lib.Símbolo10();
	this.instance.setTransform(0,0,0.0573,0.0573);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1},22,cjs.Ease.backOut).wait(1));

	// Capa_2
	this.instance_1 = new lib.Símbolo10();
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.3,-161.3,322.70000000000005,322.70000000000005);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
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
	this.frame_288 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(288).call(this.frame_288).wait(1));

	// Capa_1
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(-2.5,3,1,1,0,0,0,-0.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},288).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.6,-58.1,122.30000000000001,122.19999999999999);


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

	// txt13
	this.instance = new lib.Símbolo8();
	this.instance.setTransform(-1,45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({y:35,alpha:1},11,cjs.Ease.quadOut).wait(16));

	// txt12
	this.instance_1 = new lib.Símbolo7();
	this.instance_1.setTransform(0,10);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:0,alpha:1},11,cjs.Ease.quadOut).wait(24));

	// txt11
	this.instance_2 = new lib.Símbolo6();
	this.instance_2.setTransform(-16,-28);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:-38,alpha:1},11,cjs.Ease.quadOut).wait(32));

	// Capa_5
	this.instance_3 = new lib.Símbolo8();
	this.instance_3.setTransform(-1,35);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Símbolo7();
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Símbolo6();
	this.instance_5.setTransform(-16,-38);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},1).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.9,-49.7,173.4,107);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"fade":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		this.stop ();
	}
	this.frame_23 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(21).call(this.frame_23).wait(1));

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5A6QgZgYAAgiQAAghAZgZQAYgYAhABQAigBAYAYQAZAZAAAhQAAAigZAYQgYAYgiABQghgBgYgYg");
	this.shape.setTransform(60.3,62.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	// Capa_2
	this.lines = new lib.Símbolo5();
	this.lines.name = "lines";
	this.lines.setTransform(61.05,62,0.1658,0.1658);
	this.lines._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lines).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,x:63.55,y:59},20,cjs.Ease.backOut).wait(1));

	// Capa_1
	this.instance = new lib.hand();
	this.instance.setTransform(-271,-26,0.7255,0.7255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271,-26,435.3,362.8);


(lib.Símbolo16 = function(mode,startPosition,loop,reversed) {
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
	this.frame_12 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AqbCqQhGAAgygxIAAAAQgygzAAhGIAAAAQAAhFAygyIAAAAQAygyBGAAIAAAAIU3AAQBGAAAyAyIAAAAQAyAyAABFIAAAAQAABGgyAzIAAAAQgyAxhGAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:0,y:0}).wait(12));

	// Capa_1
	this.btn = new lib.Símbolo14();
	this.btn.name = "btn";
	this.btn.setTransform(-170,0);
	this.btn._off = true;

	var maskedShapeInstanceList = [this.btn];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1).to({_off:false},0).to({x:0},11,cjs.Ease.quadOut).wait(1));

	// Capa_4
	this.instance = new lib.Símbolo14();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.8,-17,167.6,34);


(lib.Símbolo12 = function(mode,startPosition,loop,reversed) {
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
	this.frame_79 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Capa_1
	this.hand = new lib.Símbolo3();
	this.hand.name = "hand";

	this.timeline.addTween(cjs.Tween.get(this.hand).to({y:10},39,cjs.Ease.quadInOut).to({y:0},40,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271,-26,435.3,372.8);


(lib.Símbolo15 = function(mode,startPosition,loop,reversed) {
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
	this.frame_95 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(1));

	// Capa_1
	this.hand = new lib.Símbolo12();
	this.hand.name = "hand";

	this.timeline.addTween(cjs.Tween.get(this.hand).to({x:-10},47,cjs.Ease.quadInOut).to({x:0},48,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281,-26,445.3,362.8);


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

	this.actionFrames = [0,1,19,47,359];
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
		root.hand.hand.hand.gotoAndPlay ('fade');
	}
	this.frame_19 = function() {
		root.hand.hand.hand.play ();
	}
	this.frame_47 = function() {
		root.btn.gotoAndPlay ('fade');
		root.btn.btn.gotoAndPlay ('fade');
	}
	this.frame_359 = function() {
		this.stop();
		this.hand.stop();
		this.hand.hand.stop();
		this.hand.hand.hand.stop();
		this.hand.hand.hand.lines.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(18).call(this.frame_19).wait(28).call(this.frame_47).wait(312).call(this.frame_359).wait(1));

	// logos
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// btn
	this.btn = new lib.Símbolo16();
	this.btn.name = "btn";
	this.btn.setTransform(91.5,210,0.7971,0.7971);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(47).to({_off:false},0).wait(313));

	// NASDAQ
	this.instance_1 = new lib.Símbolo11("synched",0,false);
	this.instance_1.setTransform(255.3,213,0.701,0.701,0,0,0,-23.8,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(313));

	// txt01
	this.instance_2 = new lib.Símbolo4("synched",0,false);
	this.instance_2.setTransform(29.45,123.6,0.7405,0.7405,0,0,0,-84.5,-28.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(341));

	// hand
	this.hand = new lib.Símbolo15();
	this.hand.name = "hand";
	this.hand.setTransform(229.05,271.2,0.6999,0.6999,0,0,0,60.8,63.8);

	this.timeline.addTween(cjs.Tween.get(this.hand).to({y:61.2},19,cjs.Ease.quadOut).wait(341));

	// circle
	this.instance_3 = new lib.Símbolo9("synched",0,false);
	this.instance_3.setTransform(231.55,62.95,0.5457,0.5457,0,0,0,0.1,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(351));

	// bg
	this.instance_4 = new lib.Símbolo2();
	this.instance_4.setTransform(152.5,300.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(360));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(145,99.9,174.60000000000002,508.6);
// library properties:
lib.properties = {
	id: 'A4DAFDFBAF18B64E9CD2D6DEB02E1B51',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/hand.png?1757527201134", id:"hand"},
		{src:"images/logo.png?1757527201134", id:"logo"}
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