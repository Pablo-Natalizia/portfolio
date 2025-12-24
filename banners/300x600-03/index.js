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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,900);


(lib.person01 = function() {
	this.initialize(img.person01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,900);


(lib.person02 = function() {
	this.initialize(img.person02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,900);


(lib.person03 = function() {
	this.initialize(img.person03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,900);


(lib.person04 = function() {
	this.initialize(img.person04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,900);// helper functions:

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


(lib.Símbolo39 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AyMFyIAArjMAkZAAAIAALjg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo39, new cjs.Rectangle(-116.4,-37,232.9,74), null);


(lib.Símbolo37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjwBCIgGgBIAAgOIAEABIAEAAQAGAAACgDQADgCAAgJIAAhJIASAAIAABLQAAANgGAHQgGAHgNAAgAB3BCIgBhlIARAAIABAMQACgFAFgEQAIgFAIABQAJgBAIAFQAGAEAFAJQAEAKAAAJQAAAKgEAKQgEAIgHAFQgHAEgKAAQgJAAgHgEQgEgDgDgFIAAApgACNgRQgFAHAAAKQAAALAFAHQAFAFAJAAQAIAAAFgFQAFgHAAgLQAAgKgFgHQgFgGgIAAQgJAAgFAGgAG0AbQgKgKAAgRQAAgKAEgJQAFgJAIgEQAIgFAKABQAKgBAIAFQAGAEAEAIQAEAIAAALIAAADIgyAAQABAKAFAGQAGAFAKAAQAGAAAFgCQAGgBAEgEIAGAMQgGAFgHACQgGACgIAAQgSAAgLgKgAHAgSQgDAEgBAIIAiAAQgBgJgEgEQgEgFgHAAQgKAAgEAGgAEwAbQgKgKAAgRQAAgJAFgKQADgIAJgFQAIgFAKABQAKgBAIAFQAFAEAFAIQAEAJAAAKIAAADIgyAAQABAKAEAGQAGAFALAAQAGAAAFgCQAGgBAEgEIAGAMQgGAGgGABQgHACgJAAQgRAAgLgKgAE8gSQgEAEAAAIIAhAAQAAgJgEgEQgEgFgIAAQgJAAgEAGgAA4AjQgGgCgHgFIAFgLQAHAEAFABQAGADAHAAQAGAAAFgDQADgCAAgEQAAgEgCgCQgDgCgEAAIgOgEQgJgCgFgDQgEgFAAgIQAAgHADgEQAEgFAGgEQAIgCAIAAQAIAAAHACQAGACAGAEIgFAMQgEgEgGgCQgFgCgGAAQgHAAgEADQgEADAAADQAAAEACACQAEACADAAIAOADQAKACAFADQAEAGAAAHQAAAIgDAFQgEADgHAFQgGACgKAAQgKAAgHgCgAi4AbQgKgJAAgSQAAgJAEgKQAFgJAIgEQAHgFALABQAKgBAHAFQAHAEAEAIQADAJAAAKIAAADIgxAAQAAAKAGAGQAFAFALAAQAGAAAFgCIAKgFIAFAMQgFAFgHACQgGACgJAAQgSAAgKgKgAisgSQgEAFgBAHIAiAAQgBgJgDgEQgEgFgIAAQgJAAgEAGgAk0AeQgHgGAAgOIAAggIgOAAIAAgNIAOAAIAAgSIASgFIAAAXIATAAIAAANIgTAAIAAAfQAAAIACADQAEACAFAAIAIgBIAAAOIgFACIgGAAQgNAAgGgHgAmMAhQgIgGgDgHQgFgIAAgMQAAgLAFgIQADgIAIgFQAHgFAJABQAJgBAHAFQAFAEADAFIABgMIARAAIgBAJIAAA+IgSAAIAAgLQgDAFgEADQgHAEgJAAQgKAAgGgEgAmFgRQgFAHAAAKQAAALAFAHQAGAFAIAAQAIAAAGgFQAEgHAAgLQAAgKgEgHQgGgGgIAAQgIAAgGAGgAnkAhQgHgFgEgIQgEgKAAgKQAAgJAEgKQAEgJAHgEQAIgFAIABQAJgBAHAFQAGAEADAFIAAgMIARAAIgBBHIgSAAIAAgLQgDAFgEADQgHAEgJAAQgKAAgGgEgAncgRQgFAHAAAKQAAAMAFAGQAFAFAIAAQAIAAAGgFQAFgHAAgLQAAgKgFgHQgGgGgIAAQgIAAgFAGgAItAkIAAgrQAAgIgEgEQgDgDgHgBQgIAAgFAGQgFAFAAAIIAAAoIgRAAIAAg+IgCgJIASAAIABALQADgGAGgDQAGgDAJAAQANAAAGAGQAGAIAAAPIAAArgAF3AkIgBhHIARAAIACAMQABgDACgBQADgFAFgCQAEgCAGAAIAEAAIADABIAAAPIgEgBIgFgBQgGAAgFADQgEACgBAFQgDAFAAAGIAAAlgADzAkIAAg+IgBgJIARAAIACAMIACgEQAEgFAFgCQAEgCAGAAIAEAAIADABIAAAPIgEgBIgFgBQgGAAgFADQgEACgCAFQgCAFAAAGIAAAlgADPAkIAAhHIARAAIAABHgAALAkIAAgrQAAgIgDgEQgEgDgFgBQgJAAgEAGQgFAEAAAJIAAAoIgSAAIgBhHIARAAIABALQAEgFAFgEQAGgDAJAAQANAAAFAGQAHAIAAAPIAAArgAhKAkIAAhHIASAAIAABHgAo9AkIAAhjIASAAIAABTIAvAAIAAAQgADNgxIAAgRIAUAAIAAARgAhLgxIAAgRIAUAAIAAARgAjkgxIAAgRIAUAAIAAARg");
	this.shape.setTransform(1.575,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo37, new cjs.Rectangle(-55.8,-5.9,114.8,13.4), null);


(lib.Símbolo35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(-0.225,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo35, new cjs.Rectangle(-81.7,-9.4,163,19.9), null);


(lib.Símbolo34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AOuA/QgPgOgBgaQABgRAGgLQAHgMALgHQALgHARAAQAPAAAKAGQAKAHAGAMQAFALAAAPIAAAHIhKAAQACAPAHAHQAJAJAPAAQAJAAAJgDQAGgBAIgGIAIARQgGAFgMAFQgKADgMAAQgbAAgPgPgAO/gEQgFAGgCALIAzAAQgBgLgFgIQgGgHgMAAQgNAAgHAJgANmBEQgJgLAAgSIAAgwIgUAAIAAgUIAUAAIAAgbIAagGIAAAhIAdAAIAAAUIgdAAIAAAuQAAALAFAEQADAEAIAAIAHAAIAGgBIAAAUIgIACIgJABQgRAAgMgKgAJnBHQgMgHgFgLQgGgMAAgSQAAgSAGgLQAFgMAMgHQAJgGAOAAQAPAAAIAGQAJAFAEAJIACgSIAZAAIgCANIAABbIgaAAIAAgPQgDAHgJAEQgLAHgMAAQgMAAgLgHgAJygCQgIAHAAASQAAASAIAIQAIAJAMAAQALAAAJgJQAHgJAAgRQAAgRgHgIQgIgJgMAAQgMAAgIAJgAEJA/QgPgPgBgZQAAgRAHgLQAGgMAMgHQAKgHARAAQARAAAJAGQAKAHAFAMQAFALAAAPIAAAHIhJAAQABAOAIAIQAJAJAPAAQAJAAAHgDQAKgCAFgFIAJARQgGAFgNAFQgJADgNAAQgZAAgQgPgAEZgEQgFAGgBALIAzAAQgCgNgEgGQgHgHgMAAQgMAAgIAJgAhTBHQgMgHgHgMQgGgMgBgRQABgQAGgNQAHgLAMgIQALgGAQAAQASAAALAGQANAIAGALQAHANAAAQQAAARgHAMQgGAMgNAHQgLAHgSAAQgPAAgMgHgAhLgCQgHAHgBASQABASAHAIQAIAJALAAQAMAAAJgJQAHgIAAgSQAAgTgHgGQgIgJgNAAQgMAAgHAJgAmIA/QgPgPgBgZQAAgRAIgLQAGgMALgHQAKgHARAAQARAAAKAGQAKAHAFAMQAFALAAAPIAAAHIhJAAQABAPAHAHQAIAJARAAQAIAAAIgDQAJgCAGgFIAIARQgFAFgNAFQgJADgOAAQgZAAgQgPgAl3gEQgFAFgBAMIAyAAQgBgNgFgGQgHgHgLAAQgNAAgHAJgAp0BHQgKgGgHgMQgGgPAAgPQAAgQAGgNQAIgNAJgGQAJgGAPAAQAOAAAKAGQAHAGAEAHIACgRIAZAAIgCBoIgaAAIAAgPQgDAHgIAEQgMAHgLAAQgNAAgLgHgAppgCQgHAGAAATQAAASAHAIQAJAJALAAQALAAAJgJQAHgIAAgSQAAgTgHgGQgIgJgMAAQgMAAgIAJgAvjBHQgNgGgGgNQgHgLAAgSQAAgRAHgMQAGgLANgIQALgGARAAQARAAALAGQANAIAGALQAGAMAAARQAAASgGALQgGANgNAGQgMAHgQAAQgQAAgMgHgAvbgCQgIAIABARQgBARAIAJQAJAJALAAQAMAAAHgJQAIgIAAgSQAAgSgIgHQgGgJgNAAQgMAAgIAJgARgBLIAAg+QgBgNgEgFQgFgGgKAAQgMAAgHAIQgIAHAAAMIAAA7IgaAAIgBhoIAaAAIABARQAGgIAGgFQAKgGANAAQAUAAAIALQAKAJAAAWIAABAgAMfBLIAAg+QAAgNgDgFQgGgGgKAAQgLAAgIAIQgHAHgBAMIAAA7IgaAAIgBhoIAZAAIACARQAGgIAHgFQAJgGANAAQAUAAAIALQAKAJAAAWIAABAgAIfBLIAAiYIAaAAIAACYgAH0BLIgugvIAAAvIgbAAIAAiYIAbAAIAABcIArgsIAfAAIgwAxIA1A3gACPBLIAAgQIA8hEIg8AAIAAgUIBaAAIAAARIg9BEIA/AAIAAATgABdBLIAAg+QAAgNgFgFQgGgGgJAAQgMAAgHAIQgHAGAAANIAAA7IgaAAIgChoIAZAAIACARQAFgIAHgFQAKgGAOAAQATAAAJALQAJALABAUIAABAgAjWBLIAAg+QgBgNgFgFQgDgGgMAAQgKAAgJAIQgGAIgBALIAAA7IgZAAIAAhbIgDgNIAaAAIACARQAFgJAIgEQAIgGAOAAQAUAAAIALQAKALAAAUIAABAgAm6BLIgvgvIAAAvIgaAAIAAiYIAaAAIAABcIAsgsIAfAAIgxAxIA1A3gAq7BLIAAg/QAAgMgFgFQgDgGgJAAQgLAAgHAIQgGAGAAAOIAAA6IgbAAIAAg/QAAgMgDgFQgEgGgKAAQgKAAgHAIQgHAGABAOIAAA6IgaAAIAAhbIgCgNIAZAAIADAQQADgHAHgFQAJgGANAAQAOAAAHAGQAHAFAEAJQAEgJAHgFQALgGANAAQARAAAKALQAIAJAAAWIAABAgAx5BLIAAgTIBOhoIhOAAIAAgXIBtAAIAAAUIhMBpIBQAAIAAAVg");
	this.shape.setTransform(-0.45,-1.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo34, new cjs.Rectangle(-115,-9.5,229.1,15.6), null);


(lib.Símbolo30 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F4F6F7").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo30, new cjs.Rectangle(-150,-300,300,600), null);


(lib.Símbolo14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgZJAxBQhQAAAAiwMAAAhciQAAivBQAAMAyUAAAQBPAAAACvMAAABciQAACwhPAAg");
	this.shape.setTransform(-8,171.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo14, new cjs.Rectangle(-177,-142.3,338.1,627.4000000000001), null);


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

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(70.9996,149.5058);

	// Capa_1
	this.instance = new lib.person04();
	this.instance.setTransform(-450,-450);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(-115,-151,372,601), null);


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

	// Modo de aislamiento (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAW4AvhIhNAAQgNgwARgWQAZgTAIgOQADgFAAgNQAAgNACgEQADgDAHABIAIAAQASgZAMgPIATgeQARgbAEgDIAAgJQARg3AGgXQAKgngDgrQgIiBgqjJIgThdQgQhIgFgIQgDgFgTgHQgVgIgHgHQgKgKgGgUQgEgQgKgEIAKBuQAHBPgBBgIgGCvQgBAaABA3QgEAwgaAaQgHAIgLADIgMAEIgKAKIgKAKQABAKgCAbQgBAYACAMQABACAJAEQAJAEACALQAFAlgFBUQgFBXAEAlMglVAAAQgVhtAfhRQAAg0AWg3QAZhCADgaQABgKgCg9QgBgtAMgYQgPgJgIgHIgRgOQgYgOgLgJQgTgPgGgcQgEgYAAhLQAAhJADgcQACgKAJgEQAKgFABgKQADgYgEg4QgEg4ADgZQACgJAJgFQAKgFABgKQADgYgEg4QgEg4ADgZQACgKAJgEQAJgFABgCQAEgSgEgtQgEguAEgRQAPg+AFiOQAFiOAPhAQABgDAJgEQAJgEACgLQADgYgEg4QgEg5ADgYQACgJAJgFQAKgFABgKQAKhNADh8QAEilACgnQgDggAEhIQAEhGgEggQgBgHgTg2IgVg8QgCgMgFg0QgEgugJgXQgEABgLgBIgPAAQgBAbgKBJQgLBQgHANQgFAHgnAXQghATgTAIQgsAVg2ALIhkAUIhgAjQg/AXgiAAQgbABg0gXQgngRgkgVQgZgPgKgIQgQgPgJgWQgpgUgrg5Qg0hFgVgRQggitgEgfQgMhtAZhgQAnhFABgFQACgIgCgQQgCgQACgHQABgGAKgBIAJABIAqgtQAfggAEgGQAFgJAPgqQAIgVAjgZIgBgIQAAgHADgDQADgCAXgEQAXgFAGgOQACgZADgIQAFgNAhAJQAWgpAtggQAbgTA5gdQADgCAKgLQAGgHAKABQAFgSANgKQARgMACgDQAfgxAQgWQAegqAagYQgGggAhgdQAggdAfAKQAKgOAegaQAfgcAJgMQACgDADgRQACgQADgEQAEgGAOgLQAOgLAHgJIAcgxQAQgbARgHQARgtAdglQAlgvALgWQAQgdAVhQQAQg/AKg3QAEgTAHhhQAGhRALgZQAIgRBJg5QBLg6ATgmQAshLBLgMQAlghAgADQgQhkgMhxQgFgFgQgiQgQgggDgJQglgCgHhMQgEgxAHg7QACgLAJgQQAIgPABgIQADgQgDgtQgDgpAEgPQACgHAJAAIAJAAIABgWQABgUAMgJQALgJATAAQAYABAFgCQAEgBADgHIADgIIAdgJQAWgHAGgHIAKgKQAFgIADgRQACgQAEgGQABgDAcgcQAbgcADgBQAMgFAYACQAZADAJgDQAHgCAAgJIAAgJQALgOgSgVQgRgVAEgEQACgCAeACQAgACAJgCQADgBAEgJQAEgJAKgCQAUgDAqACQAwADAQgBQAhgBATgJIAVgLQAugGApAGQAeAFAxAQQAWAHAZANQAKACAYgCQAXgDAJADQAHABABAJIgBAKQAMAKAcAUQAcAUAMAKIAUAAQAQAKAeALQAiANAMAGQATALAEAPQACAKADAYIANAAQAFATATABQAKABANgBQABABAAAQIgBAXQAkAMAEAZQADAQgDAvQACAsAJALQAFAGAEgBIAACbQAAADgRAuIgXA4QAAAOABAbQgCAVgTAIQAhAPAHAFQANAJADAJIAEAMIAJgBQAJABACAGQAEAPgCAsIgCBBQADBagDAWQgGAugiA+QgIAPgHAGQgKAIgPABQAFApgPA3QgJAggVA+QgDAKgCAbQgCAagDAHIAeFAQAqgDAdAuQApBBALAJQAEADArAUQAqAUAFADQAEADAVAaQATAYACABQAMAFAyAHIBEALQAEABADAJQADAJAEABIA2AGQAiADAWAOQAEADAUAZQATAZADABQAHADAOAAQAOgBACABQACACgBAHQgCAJABACQAKABAbgCQAYgBAMACQAEABANATQANATAEAAQA7ANAaAPQATALA0AnQAEACANABQANAAAEADIAfAdQAcAcABADQADAIAAAKIAAATIAXAlQACADAPAKQAOAJADAEQASAbAFBGQAWAEgBAGQgEAPADAHQAXAuAOA+QAIAkAPBNQAcB6ALBaQABAKAoBlQAEARgCAhIgDA5IABAaQAHAPANAWQAFAVAEA8QAEA6AHAcQAFAUAGAhIAJAuQABAHAKAAIAJAAIAACqIAJgBQAJABACAGQAEAPAGAtIAKBAIAJAtQAFAYAHAXIAVAhQANAfgjAEIAAAUQgBAJgJASQgIARgCAQQAIAQAfAfQAVAVAAAgIABAWQAAAQgBACQgBABgIgBQgJgBgCABQADAQgDAkQgDAmACAPQABAJAOAOQAMATgFAmQgCAMgTANQgTANgBAEQgCAMAAAbQAAAaACANQADAYATAmQAQAjACAmQAEBQgEANQgCAHgJAAIgJAAIAAFAIgJgBQgLABgBAGQgBAIAFAQQAGARgBAHQgBAGgJAFIgIAFQgIAagCAYQgDAYACArQACA3gBANQAAAKABARQgCALgTgDIAAAeIAGDYQAECLgJBGQgBAJgKAFQgJAFgCAKQgEAjAEBNQAFBPgEAiIlyAAIgHABIgGgBgAqMxnQgFAXgLARQgOATgUABQAEAEAAAJQABAJgDAIQBcAXBqg0IAKAJIAAgUQAmgFAGgIQANgTAGgFIBHgmQA0gdALgTQADgFAAgOQAAgMACgEQADgDAIAAIAHABIABgOQADgLAQAFIgVgWQABhpgOhhIAOgaQgTAFgDgGQgIgPgfhRQgfhSgCgLIAOgUIgEAAIgGAAIgQgBQgLgBgDACQAKATgGAFQgFAGgTgKIABAKQAAAFgVAFQAJAKgEAKQgCAHgIAMQgjBXgoBKQAcgHATA0QAOApABAqQABAwgNAqQgSA2ggggQgNARgMATQgMAKgrgGQAVAMggAmQghAlgNgTgAlE7dIAHAAQAEgBACgCQgHAAgGADgEgI8gn9QgBABgBAJIAIgPQgDABgDAEg");
	mask.setTransform(21.0168,145.825);

	// Capa_1
	this.instance = new lib.person03();
	this.instance.setTransform(-450,-450);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(-173.9,-158.3,389.9,608.3), null);


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

	// Modo de aislamiento (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgWwAvgIAAi0QAKgCABALIgBAVIAekSQgCgKAKgRQALgQABgDIATh0QAMhFALgvQBfl7CPkXIAAgNQAAgMACgGQADgNAYgnQAUgjABgWIgvgRQgbgLgQgMQgagBhMADQhCACgggEQgRAWgWgEIgpgSQgRgGgXgOQgTgIgGgEQgHgFgIgXQgQgpgMg5QgLg6gBgsQgwjRARlQQACgqAOhUQANhVACgmQACghgIhFQgIhBADgiQAGgzAqh2QAwiGAKgpIAbh9QAQhNAMgwQAXheARgsQAahHApg6QA0hJB5hHQB7hIBXgHICqgeQgQgfANgTQAWgWALgSQgLgXAOgYQARgVAAgGQgDgwABgSQABgcApAIQgJgLAEgRIAFgZIgOgLQgNgMgBgVQAAgIAHg5QAHgxgGgJIgcgYQgagagGgRQgCgIgDgZQgDgaABgIQABgPAKgGQALgEACgDQAFgKAQgiQANgfAJgNQgKgdANgOQARgLAEgGIAPgmQAJgXAMgNQgDgPgFgBQgDABgJAHQgXAWgRgKIAJgdIAAgCQgCgDAEgJQADgIAGgJQAAgGgFgSIgFgaQgJgHgBgJQgHg1ASgCQAWAHAHgGQABgBgBgtQgCgvACgLQADgRAag2QAEgJARgPQANgJgDgMQgtgUgJgJQgTgRgHgoQgKg/APgHQADgCAPgCQAOgBAJgIQAJgHACgOQACgTACgDQACgEAHgEQAIgEABgDQAPgpgBgfQgBgWgMgxIgGgLQgEgIAAgHQgBgKAEgJIAHgPIgBgQQgBgMACgBQADgDA6ACQA4ADADgCQABgCgCgTQgCgUAFgIIAdgXQAbgVABgFQAFgYABgdQABgXADgHQAIgRBTgXQAEgDABgDQAEgIgJgGIgKAAQgIABgBgCQgQgWAggMQAbgJAaAEQAQgUATgOIAjgaQAJgIAMgNQAMgOAHgFIhGgyQAoABA+AHQA0ACAwgVQAEgCADgJQADgIACAAQASAAAgAeIAgAeQAJADAhAAQAWgBAdASQAUANAUAbQASADAygEQAugDATAEQADACAEAIQACAKAEAAQARAEA5gCQAyAEAKAiQAPAHAGAEQALAHAIAMQAtAGAOAsQAIAYANA4QAKAYAoApQAiAjAQA8QAVAWAPAfQAJASAQApQAQAmAXBGQAZBLANAiQAOAiADAqQADAvAEALQADAJAPANQAPANACAKQAFAQgCAkQgDAnADAOIATAWQATAVABACQAKAjAJBVQAJBYgHAcQgCAFgIABIgJABQgHAKAeAYQAiAbABAGQAEARgNA6QgLA3ABABIAPAGQAPAHAKAIIAKAKIAeAeQAogIABAZIgCAbQgCASADALQABAFAJACQAKADAAADQABAJgOAaQgNAYAGAPQAZAGAjgTQAkgVAXAFQAGAcgTAQQgLAIgiAKQgiAKgMAKQgUAQAFAfQABAIgBARIAAAZQAGB6gbBlQAAADgNAGQgKAHAEALQACAEAIAGQAcgDAkAHQASACAuALQDwA4BKCDQAjA+ANBgQAKBLAACKQAABigNCZQgPC8gDA8QgCAoAHBOQAHBOgBAiQgDA8gvCNIhGDMQgMAngQBEQgOBCgKAeQggBkhWBDQgQAMgVAJIgXAJIgvAnQgiAdgbAMQgbALhBAJQgBABABAIQABAJgCABQgEADgTgBQgXgCgHABQgCABghAcQglAYgYgNQAOAOA5BjQAdAzAoBgQBeDpAZGeIATFMQAOC9AcCEIAFAJQAFAGAAAFg");
	mask.setTransform(12.9921,144);

	// Capa_1
	this.instance = new lib.person02();
	this.instance.setTransform(-450,-450);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(-146.2,-160,318.5,608), null);


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

	// Modo de aislamiento (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(0.1711,145.5827);

	// Capa_1
	this.instance = new lib.person01();
	this.instance.setTransform(-450,-450);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(-223.4,-158.8,447.20000000000005,608.8), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#35B763").s().p("ABdBWQgUgVAAglQgBglAWgVQATgVAiAAQAiAAAUAVQAVAVAAAlQAAAlgUAVQgVAVgiAAQgiAAgUgVgAB3gLQgLANABAaQgBAZALAOQAKAOASAAQASAAAKgOQALgOAAgZQAAgagLgNQgJgNgTAAQgSAAgKANgAgMBoIAAinQAAgoAlAAIApAAIAAAcIgcAAQgPAAgBAOIAAAMIAsAAIAAAcIgsAAIAAB9gAg+BoIABhXQgBgOgEgHQgCgFgFgGQgFgFgGgCQgGgCgHAAQgJAAgFACQgGACgFAFQgFAGgDAFQgDAHAAAOIAABXIgjAAIAAhSQgBgUAGgLQAGgNAJgJQAKgJAMgGQANgFAQAAQAPAAAMAFQANAGAKAJQAJAJAGANQAGANAAASIgBBSgAjbBoIAAiZIAkAAIAACZgAjXhIQgGgFAAgIQAAgJAGgGQAFgGAJAAQAIAAAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgIABgGgHg");
	this.shape.setTransform(-38.7,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3135").s().p("Ah6CGIAAiGQgBgkAVgVQAUgVAiAAQAhAAAUAVQAUAVAAAkQAAAlgUAWQgTAVgiAAQgZAAgSgMIAABCgAhMgnQgLAOAAAZQAAAaALAOQAKANASAAQASAAAKgNQALgOAAgaQAAgYgLgPQgKgNgSAAQgSAAgKANgAD3AXIAhAAQAGAgAeAAQAeAAAAgTQAAgJgLgGQgHgEgRgEQgggIgLgFQgVgLAAgWQAAgUAQgMQAQgNAdAAQAeAAASANQAUANAEAZIghAAQgGgbghAAQgMAAgIAFQgHAFAAAHQAAAJAMAGQAHADATAFQAeAHAMAHQATAKAAAWQAAAVgRANQgSAOgcAAQg/AAgHg5gABvA7QgUgVAAgmQAAgkAUgVQAUgVAiAAQAaAAAUANQASAOAHAYIgkAAQgKgZgZAAQgSAAgKANQgLAOAAAZQAAAaALAOQAKANASAAQAcAAAIgeIAlAAQgGAbgUAPQgTAPgcAAQgiAAgUgVgAkJA7QgUgWAAglQAAgkAUgVQAUgVAiAAQAiAAAUAVQAVAVgBAkQABAmgVAVQgUAVgiAAQgiAAgUgVgAjvgnQgLAOAAAZQAAAaALAOQAKANASAAQASAAAKgNQALgOAAgaQAAgYgLgPQgKgNgSAAQgSAAgKANgAAoBOIAAiaIAkAAIAACagAlWBOQglAAAAgiIAAiuIAjAAIAAA2IAzAAIAAAcIgzAAIAABVQAAAOASAAIAhAAIAAAbgAArhjQgFgFAAgJQAAgIAFgGQAHgGAIAAQAJAAAFAGQAGAGAAAIQAAAJgGAFQgFAGgJAAQgIAAgHgGg");
	this.shape_1.setTransform(22.95,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-60.9,-13.4,121.9,26.9), null);


(lib.lines = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(255,255,255,0.2)").ss(2,0,0,4).p("Aa1ttQAKgJAJgJQGnmdEplZAa1ttQANgCANgCQJGhlHHgnA6ZNgQANgCAOgDQTjjrKiloQJslKNCsrA6ZNgQAJgJALgKQObtrKvlRQJ3k1R5jJEgraAP+QHfgtJihxEgmXAZ2QE9lrHBmr");
	this.shape.setTransform(-0.004,0.0026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lines, new cjs.Rectangle(-278.9,-166.4,557.9,332.8), null);


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
	mask.graphics.p("Ah3B4IAAjvIDvAAIAADvg");
	mask.setTransform(12,12);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABlAzQAAgqgdgdQgegdgqAAQgpAAgeAdQgdAdAAAq");
	this.shape.setTransform(11.975,20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAA8QAZAAARgSQARgRAAgZQAAgYgRgRQgRgSgZAAQgXAAgSASQgRARAAAYQAAAZARARQASASAXAAg");
	this.shape_1.setTransform(11.975,6.95);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.9,0,22.200000000000003,24), null);


(lib._85684684848hj = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#867DFD").s().p("AhtDmQgyAAgjgjQgjgjAAgyIAAjbQAAgyAjgiQAjgkAyAAIDbAAQAyAAAjAkQAjAiAAAyIAADbQAAAygjAjQgjAjgyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._85684684848hj, new cjs.Rectangle(-23,-23,46,46), null);


(lib._7474747 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#35B763").s().p("ApDC+QhPAAg4g4Qg3g3AAhPQAAhOA3g3QA4g4BPAAISHAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._7474747, new cjs.Rectangle(-77,-19,154,38), null);


(lib.Símbolo38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {rollOut:7,rollOver:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop ();
	}
	this.frame_6 = function() {
		this.stop ();
	}
	this.frame_12 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(5).call(this.frame_6).wait(6).call(this.frame_12).wait(1));

	// Capa_1
	this.instance = new lib.Símbolo39();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.25},5).to({alpha:0},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.4,-37,232.9,74);


(lib.Símbolo36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fade:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_19 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(4));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AvLC+QhPAAg4g4Qg3g3AAhPQAAhOA3g3QA4g4BPAAISHAAQBPAAA3A4QA3A3ABBOQgBBPg3A3Qg3A4hPAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AtgC+QhPAAg4g4Qg3g3AAhPQAAhOA3g3QA4g4BPAAISHAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAg");
	var mask_graphics_3 = new cjs.Graphics().p("Ar9C+QhPAAg4g4Qg3g3AAhPQAAhOA3g3QA4g4BPAAISHAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AqiC+QhOAAg4g4Qg4g3AAhPQAAhOA4g3QA4g4BOAAISHAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAg");
	var mask_graphics_5 = new cjs.Graphics().p("ApPC+QhOAAg4g4Qg4g3AAhPQAAhOA4g3QA4g4BOAAISHAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAg");
	var mask_graphics_6 = new cjs.Graphics().p("ApDC+QhOAAg5g4Qg3g3AAhPQAAhOA3g3QA5g4BOAAISHAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAg");
	var mask_graphics_7 = new cjs.Graphics().p("ApDC+QhOAAg4g4Qg4g3AAhPQAAhOA4g3QA4g4BOAAISHAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAg");
	var mask_graphics_8 = new cjs.Graphics().p("ApDC+QhPAAg3g4Qg4g3AAhPQAAhOA4g3QA3g4BPAAISHAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAg");
	var mask_graphics_9 = new cjs.Graphics().p("ApDC+QhOAAg5g4Qg3g3AAhPQAAhOA3g3QA5g4BOAAISHAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAg");
	var mask_graphics_10 = new cjs.Graphics().p("ApDC+QhPAAg4g4Qg3g3AAhPQAAhOA3g3QA4g4BPAAISHAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAg");
	var mask_graphics_11 = new cjs.Graphics().p("ApDC+QhPAAg3g4Qg4g3AAhPQAAhOA4g3QA3g4BPAAISHAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAg");
	var mask_graphics_12 = new cjs.Graphics().p("ApDC+QhOAAg5g4Qg3g3AAhPQAAhOA3g3QA5g4BOAAISHAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAg");
	var mask_graphics_13 = new cjs.Graphics().p("ApDC+QhOAAg5g4Qg3g3AAhPQAAhOA3g3QA5g4BOAAISHAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAg");
	var mask_graphics_14 = new cjs.Graphics().p("ApDC+QhPAAg3g4Qg4g3AAhPQAAhOA4g3QA3g4BPAAISHAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAg");
	var mask_graphics_15 = new cjs.Graphics().p("ApDC+QhPAAg4g4Qg3g3AAhPQAAhOA3g3QA4g4BPAAISHAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-116.25,y:0}).wait(1).to({graphics:mask_graphics_2,x:-105.5395,y:0}).wait(1).to({graphics:mask_graphics_3,x:-95.6224,y:0}).wait(1).to({graphics:mask_graphics_4,x:-86.4987,y:0}).wait(1).to({graphics:mask_graphics_5,x:-78.1684,y:0}).wait(1).to({graphics:mask_graphics_6,x:-64.2628,y:0}).wait(1).to({graphics:mask_graphics_7,x:-50.7755,y:0}).wait(1).to({graphics:mask_graphics_8,x:-38.875,y:0}).wait(1).to({graphics:mask_graphics_9,x:-28.5612,y:0}).wait(1).to({graphics:mask_graphics_10,x:-19.8342,y:0}).wait(1).to({graphics:mask_graphics_11,x:-12.6939,y:0}).wait(1).to({graphics:mask_graphics_12,x:-7.1403,y:0}).wait(1).to({graphics:mask_graphics_13,x:-3.1735,y:0}).wait(1).to({graphics:mask_graphics_14,x:-0.7934,y:0}).wait(1).to({graphics:mask_graphics_15,x:0,y:0}).wait(8));

	// Capa_2
	this.instance = new lib.Símbolo37();
	this.instance.setTransform(0,1);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},7).wait(8));

	// shine
	this.btn = new lib.Símbolo38();
	this.btn.name = "btn";
	this.btn.setTransform(4.5,-2.95);
	this.btn._off = true;

	var maskedShapeInstanceList = [this.btn];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1).to({_off:false},0).wait(22));

	// Capa_3
	this.instance_1 = new lib._7474747();
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(22));

	// Símbolo 37
	this.instance_2 = new lib.Símbolo37();
	this.instance_2.setTransform(0,1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(22));

	// 7474747
	this.instance_3 = new lib._7474747();
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.9,-19,188.9,38);


(lib.Símbolo31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Símbolo 35
	this.instance = new lib.Símbolo35();
	this.instance.setTransform(9,23);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({y:13,alpha:1},15,cjs.Ease.quadOut).wait(1));

	// Símbolo 34
	this.instance_1 = new lib.Símbolo34();
	this.instance_1.setTransform(9,-4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-14,alpha:1},14,cjs.Ease.quadOut).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-23.5,229.1,57);


(lib.Símbolo16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"fade":4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_3 = function() {
		this.stop ();
	}
	this.frame_15 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(12).call(this.frame_15).wait(1));

	// Capa_1
	this.instance = new lib.Símbolo14();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:1},0).to({alpha:0},10).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177,-142.3,338.1,627.4000000000001);


(lib.Símbolo3copia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa 1
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(-163.9,567.1,1.4202,1.4202,0,0,0,12,13.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#623CEA").s().p("AiLDcQgiAAgXgXQgXgYAAghIAAkXQAAghAXgYQAXgXAiAAIEXAAQAhAAAYAXQAXAYAAAhIAAEXQAAAhgXAYQgYAXghAAg");
	this.shape.setTransform(-163.9446,565.0054,1.4202,1.4202);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.329)").s().p("ABZDZQgOABgIgJIAAAAQgIgJAAgQIAAgsIgMAAIgEgBIgBgDIAAgLIABgDIAEgBIAMAAIAAgTIABgDIACgBIAOgEIADAAIACACIABACIAAAXIAUAAIAEABIABADIAAALIgBADIgEABIgUAAIAAApQAAAJADAEQACACAEAAIAGgBIADgBIADAAIADACIAAACIAAANIgBADIgCABIgNACIAAABIgBgBgAAtB7IgBACIAAALIABACIACABIAOAAIAAAtQAAAQAHAIIAAAAQAIAIANAAIABAAIAMgCIACgBIABgCIAAgNIgBgBIgBgBIgCAAIgFABIABAAIgGABQgFAAgDgDIAAAAQgDgFAAgJIAAgqIAWAAIACgBIABgCIAAgLIgBgCIgCgBIgWAAIAAgYIAAgBIgCgBIgBgBIgOAEIgCABIAAACIAAAUIgOAAIgCABgAB5DMQgNgMAAgYQAAgPAGgKQAGgLAKgGIAAAAQAJgHAOAAQAOABAJAFIAAAAQAJAFAEAMIAAgBQAFAKAAANIAAAFIgBAEIgDABIg7AAQABAKAGAGIAAAAQAGAHAMAAQAHAAAGgCIAAAAQAHgDAFgEIACgBIADAAIACADIAEAKIABACIgBADQgGAFgLAEIAAAAQgMADgHAAIAAAAQgWABgNgOgACDB/IAAAAQgJAGgHALQgFAKAAAOQAAAXAMAMQANANAVAAQAHAAAMgDIAAAAQAKgEAFgGIABgBIAAgCIgEgKIgCgBIgBgBIgCABQgFAEgIAEIAAAAQgFACgIgBQgMABgIgIIAAAAQgGgHgBgMIA9AAIACgBIABgCIAAgFQAAgNgFgJIAAAAQgEgLgJgFQgJgFgNAAIAAAAQgNAAgJAGgAiDDTIAAAAQgLgGgEgLIAAAAQgGgNAAgNQAAgNAGgMQADgKAMgIQAIgGAOAAQAMAAAKAHIABAAIADADIAAgEIABgDIADgBIAOAAIADABIABADIgBBWIgBADIgDABIgOAAIgDgBIgBgDIAAgCIgDACQgKAGgMAAQgMABgKgHgAhtDYQAMAAAJgHIAFgEIAAAGIABACIACABIAOAAIACgBIABgCIABhWIgBgCIgCgBIgOAAIgCABIgBACIAAAHIgGgFQgJgGgMAAQgNAAgIAFQgLAIgEAJIAAAAQgFAMAAANQAAAMAFANIAAABQAEAKALAFIAAAAQAJAHAMAAgAEcDXIgNAAIgDgBIgCgDIAAg1QAAgJgEgFIAAAAQgEgEgHAAQgKAAgHAGIAAAAQgFAGAAAKIAAAxIgBADIgEABIgNAAIgEgBIgBgDIgBhWIABgDIADgBIANAAIADABIACADIAAAEIAFgEQAJgFAMgBQARAAAJAKIAAAAQAKAKAAASIAAA2IgCADIgDABIAAAAgADQB7IgBABIgBABIACBWIABACIACABIANAAIACgBIABgCIAAgxQAAgLAGgHIAAABQAHgGALgBQAIAAAEAFIABAAQAEAGAAAJIAAA1IABACIACABIANAAIACgBIABgCIAAg2QAAgRgJgKIAAAAQgIgJgRAAQgMAAgIAFIgBAAIgGAGIgBgHIgBgCIgCgBIgNAAIgBABgAAhDXIgOAAIgDgBIgBgDIAAg1QAAgJgEgFIAAAAQgEgEgHAAQgKAAgGAGIABgBQgGAIAAAJIAAAxIgBADIgEABIgNAAIgEgBIgBgDIgBhWIABgDIADgBIAOAAIADABIABADIABADIADgDIAAAAQAJgFAMgBQARABAJAJIAAAAQAJAJAAATIAAA2IgBADIgDABIAAAAgAgqB7IgBABIgBABIACBWIABACIACABIANAAIACgBIABgCIAAgxQAAgKAGgIIAAAAQAHgGAKAAQAHAAAFAFIAAAAQAEAGAAAJIAAA1IABACIACABIAOAAIACgBIABgCIAAg2QAAgSgJgJIAAAAQgIgJgRAAQgLAAgJAFIAAAAIgFAGIgBgHIgBgCIgCgBIgOAAIgBABgAipDXIgNAAIgDgBIgCgDIAAh9IACgDIADgCIANAAIAEACIABADIAAB9IgBADIgEABIAAAAgAi4BUIgBACIAAB9IABACIACABIANAAIACgBIABgCIAAh9IgBgCIgCgBIgNAAIgCABgAkTDXIgOAAIgDgBIgBgDIAAh4IABgDIADgCIAOAAIAEACIABADIAAAsIAygvIADgCIASAAIADABIACACIAAADIgCACIg7A3IBAA7IABACIAAADIgCACIgCAAIgTAAIgDgBIg2gyIAAAvIgBADIgEABIAAAAgAjCDWIACgBIABgBIAAgCIgBgBIhBg8IA8g4IABgBIAAgCIgBgCIgCAAIgSAAIgCABIg1AxIAAgvIgBgCIgCgBIgOAAIgCABIgBACIAAB4IABACIACABIAOAAIACgBIABgCIAAgyIA5A0IACABgAh8C/QgGgHAAgQQAAgQAGgHQAHgHALAAQAKAAAGAHIABAAQAGAHAAAQQAAAQgHAHQgGAHgKAAIAAAAQgLAAgHgHgAhqDFQAKAAAFgHIAAAAQAHgHAAgPQAAgPgHgGIAAgBQgFgHgKAAQgKAAgHAHQgGAHAAAPQAAAPAGAHIAAAAQAHAHAKAAgACDCeQABgIADgFIABAAQAFgIAMAAQALAAAFAHQAEAFACAJgACJCSIgBAAQgDAEgBAGIApAAQgCgHgDgFQgFgGgKAAIAAAAQgLAAgFAIgAAagxIAAABQgSgZAAgvQAAgwASgXIAAAAQASgZAigBQAjAAASAaIAAAAQASAYAAAvQAAAvgSAYQgSAagjAAQgiAAgSgagAAbi+IAAAAQgSAXAAAvQAAAuASAZQASAZAhAAQAiAAASgZQARgZAAguQAAgvgRgXQgSgZgiAAQghAAgSAZgAh/gxQgRgYAAgvQAAgvASgYIgBAAQATgZAigBQAiAAATAaIgBAAQASAYAAAvQAAAvgRAYQgTAagiAAQgiAAgTgagAh9i+QgSAXAAAvQAAAuASAZQASAZAhAAQAhAAASgZQASgZAAguQAAgvgSgXQgSgZghAAQghAAgSAZgAi2gZIgfAAIgDgBIgBgEIAAgeIhNAAIgDgBIgBgEIAAgXIAAgDIBXh5IABgCIACAAIAaAAIADABIACADIAAB0IAWAAIADABIABADIAAAZIgBAEIgDABIgWAAIAAAeIgCAEIgDABIAAAAgAjRjUIgBABIhWB5IgBACIAAAXIABACIACABIBOAAIAAAgIABACIACABIAfAAIACgBIABgCIAAggIAYAAIACgBIABgCIAAgZIgBgCIgCgBIgYAAIAAh1IgBgCIgCgBIgaAAIAAAAIgBABgAD0gjIgYAAIgDgBIgBgEIAAgvIgvAAIgDgBIgCgEIAAgWIACgDIADgCIAvAAIAAguIABgDIADgBIAYAAIADABIABADIAAAuIAvAAIADACIABADIAAAWIgBAEIgDABIgvAAIAAAvIgBAEIgDABIAAAAgACnh0IgBACIAAAWIABACIACABIAwAAIAAAxIABACIACABIAYAAIACgBIABgCIAAgxIAwAAIACgBIABgCIAAgWIgBgCIgCgBIgwAAIAAgwIgBgCIgCgBIgYAAIgCABIgBACIAAAwIgwAAIgCABgAA3hHIAAAAQgIgQAAghQAAghAIgPIAAAAQAIgOAPAAQAQAAAIAOIAAAAQAIAPAAAhQAAAhgIAQIAAAAQgIAOgQAAQgPAAgIgOgABOg7QAPAAAHgNIAAAAQAIgQAAggQAAghgIgOQgHgNgPgBQgOABgHANQgIAOAAAhQAAAgAIAQIAAAAQAHANAOAAgAhhhHIAAAAQgIgQAAghQAAghAIgPIAAAAQAIgOAPAAQAPAAAIAOIAAAAQAJAPAAAhQAAAggJARIAAAAQgIAOgPAAQgPAAgIgOgAhKg7QAOAAAIgNIAAAAQAIgQAAggQAAghgIgOIAAAAQgHgNgPgBQgPABgHANQgIAOAAAhQAAAgAIAQIAAAAQAIANAOAAgAkChdIAqg8IAAA8gAj/heIAmAAIAAg2g");
	this.shape_1.setTransform(-90.8751,566.6507);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.663)").s().p("ACcDYQgVAAgNgNQgMgMAAgXQAAgOAFgKQAHgLAJgFIAAAAQAJgHANAAQANAAAJAGQAJAEAEALIAAAAQAFAJAAANIAAAFIgBADIgCABIg9AAQABALAGAHIAAAAQAIAIAMAAQAIAAAFgCIAAAAQAIgEAFgEIACAAIABAAIACABIAEAKIAAACIgBABQgFAGgKAEIAAAAQgMADgGAAIgBAAgACECBQgJAFgHALQgFAJAAAOQAAAWAMAMQANAMAUAAQAHABALgEQAKgDAFgGIABAAIgBgBIgEgKIAAgBIgBAAIgBABQgFAEgIADQgGACgIAAQgNAAgIgIQgHgHAAgOIA+AAIABAAIAAgCIAAgFQAAgMgEgJIAAAAQgFgLgIgEQgIgFgNgBIAAAAQgNAAgIAHgABZDYQgNAAgIgIIAAAAQgHgIAAgQIAAgtIgOAAIgCgBIgBgCIAAgKIABgDIACgBIAOAAIAAgUIAAgCIACgBIAOgEIABABIACABIAAACIAAAXIAWAAIACABIABADIAAAKIgBACIgCABIgWAAIAAArQAAAIADAFIAAAAQADADAFAAIAGgBIgBAAIAFgBIACAAIABABIABACIAAAMIgBACIgCABIgMACgAAuB8IgBACIAAAKIABABIABAAIAPAAIAAAvQAAAPAHAIIAAAAQAIAHAMAAIAAAAIANgCIABAAIAAgBIAAgMIAAgBIgBgBIgBAAIgEACIgGABQgGgBgDgEIAAABQgDgFAAgJIAAgtIAXAAIABAAIABgBIAAgKIgBgCIgBAAIgXAAIAAgZIAAgBIgBgBIgBAAIgOAEIgBAAIAAABIAAAWIgPAAIgBAAgAiCDRIAAAAQgLgFgEgKIAAgBQgFgNAAgMQAAgNAFgMIAAABQAEgKALgHQAIgGANAAQAMAAAJAHIAGAEIAAgGIABgDIACgBIAOAAIACABIABADIgBBVIgBACIgCABIgOAAIgCgBIgBgCIAAgGIgFAEQgJAHgMAAQgMAAgJgHgAiBCAQgLAHgEAJIAAAAQgFAMAAAMQAAAMAFANIAAAAQAFAJAKAGQAJAHALgBQALAAAJgGQAFgDADgEIAAAKIAAABIABAAIAOAAIABAAIAAgBIABhVIAAgCIgBAAIgOAAIgBAAIAAACIgBAKIgHgHIgBAAQgJgHgLAAQgNAAgHAGgADRDVIgBgCIgChVIABgCIABgBIABgBIANAAIACABIABACIABAHIAGgFIABAAQAIgGAMAAQARAAAIAJIAAAAQAJAKAAARIAAA2IgBACIgCABIgNAAIgCgBIgBgCIAAg1QAAgJgEgGIgBAAQgEgFgIAAQgLABgHAGIAAAAQgGAGAAAMIAAAwIgBACIgCABIgNAAIAAAAIgCgBgAENCeIAAA1IABABIABAAIANAAIABAAIABgBIAAg2QAAgRgJgJQgIgIgQgBQgLABgJAFQgFADgDAFIgBgLIgBgBIgBAAIgNAAIgBAAIAAACIABBVIABABIABAAIANAAIABAAIABgBIAAgwQAAgNAGgGQAHgHAMAAQAJAAAFAFIAAAAQAEAGAAAKgAgpDVIgBgCIgChVIABgCIABgBIABgBIAOAAIACABIABACIABAHIAFgFIAAAAQAJgGALAAQARAAAIAJIAAAAQAJAJAAASIAAA2IgBACIgCABIgOAAIgCgBIgBgCIAAg1QAAgJgEgGIAAAAQgFgFgHAAQgKAAgHAHIAAAAQgGAHAAALIAAAwIgBACIgCABIgNAAIAAAAIgCgBgAASCeIAAA1IAAABIABAAIAOAAIABAAIAAgBIAAg2QAAgSgIgIQgIgIgQgBQgLABgIAFIAAAAQgFADgDAFIgBgLIAAgBIgBAAIgOAAIgBAAIAAACIABBVIABABIABAAIANAAIABAAIABgBIAAgwQAAgLAGgIIAAAAQAHgHALAAQAJAAAEAFIAAAAQAFAGAAAKgAjCDWIgTAAIgCgBIg5g0IAAAyIgBACIgCABIgOAAIgCgBIgBgCIAAh4IABgCIACgBIAOAAIACABIABACIAAAvIA1gxIACgBIASAAIACAAIABACIAAACIgBABIg8A4IBBA8IABABIAAACIgBABIgCABIAAAAgAjWDUIABAAIATAAIABAAIAAgBIAAAAIAAgBIhCg9IA9g5IABgBIAAAAIgBgBIgBAAIgSAAIgBAAIg3A0IAAgzIgBgBIgBAAIgOAAIgBAAIAAABIAAB4IAAABIABAAIAOAAIABAAIABgBIAAg1gAi2DWIgCgBIgBgCIAAh9IABgCIACgBIANAAIACABIABACIAAB9IgBACIgCABgAi3BVIgBABIAAB9IABABIABAAIANAAIABAAIABgBIAAh9IgBgBIgBgBIgNAAIgBABgAh9DAIAAAAQgHgIAAgQQAAgQAHgHQAHgJAMABQALgBAGAJIABAAQAHAHAAAQQAAAQgHAIIgBAAQgGAIgLAAIAAAAQgMAAgHgIgAh8CSQgGAGAAAQQAAAQAGAHQAHAIALAAQAKgBAGgHQAHgHAAgQQAAgQgGgGIgBAAQgGgIgKAAIAAAAQgLAAgHAIgACBCfQABgJAEgFIAAgBQAHgJAMABQALAAAGAHIAAAAQAFAGABAKgACICRIgBABQgDAEgBAIIAsAAQgCgJgEgFQgFgHgLAAQgMAAgFAIgAAbgxQgSgZAAguQAAgvASgXIAAAAQASgZAhAAQAiAAASAZQARAXAAAvQAAAugRAZQgSAZgiAAQghAAgSgZgABOgZQAhgBASgYQARgYAAguQAAgugRgYQgSgYghABQgggBgSAYQgRAXAAAvQAAAuARAYIAAAAQASAYAgABgAh9gxQgSgZAAguQAAgvASgXQASgZAhAAQAhAAASAZQASAXAAAvQAAAugSAZQgSAZghAAQghAAgSgZgAh8i+QgRAYAAAuQAAAuARAYQARAYAhABQAhgBARgYQARgYAAguQAAgugRgYQgRgYghABIAAAAQghAAgRAXgAjVgaIgCgCIgBgCIAAgfIhOAAIgCgBIgBgDIAAgXIABgCIBWh5IABgBIABAAIAaAAIACAAIABACIAAB1IAYAAIACABIABADIAAAYIgBADIgCABIgYAAIAAAfIgBACIgCACgAjQjTIgBABIhWB5IAAABIAAAXIAAABIABABIBQAAIAAAhIAAABIABABIAfAAIABgBIABgBIAAghIAZAAIABgBIAAgBIAAgYIAAgCIgBAAIgZAAIAAh3IgBgBIgBAAIgaAAIAAAAgADcglIgCgBIgBgCIAAgwIgwAAIgCgBIgBgDIAAgWIABgCIACgBIAwAAIAAgwIABgCIACAAIAYAAIACAAIABACIAAAwIAwAAIACABIABACIAAAWIgBADIgCABIgwAAIAAAwIgBACIgCABgACohzIgBABIAAAWIABABIABABIAyAAIAAAyIAAABIABABIAYAAIABgBIAAgBIAAgyIAyAAIABgBIAAgBIAAgWIAAgBIgBAAIgyAAIAAgyIAAgBIgBAAIgYAAIgBAAIAAABIAAAyIgyAAIgBAAgAA2hGQgIgRAAghQAAgiAIgPQAIgOAQgBQARABAIAOQAIAPAAAiQAAAhgIARQgJAOgQAAQgPAAgJgOgABOg5QAQAAAIgOIAAAAQAIgQAAghQAAghgIgPIAAAAQgIgOgQAAQgPAAgIAOIAAAAQgIAPAAAhQAAAhAIAQIAAAAQAIAOAPAAgAhjhGQgIgRAAghQAAgiAIgPQAJgOAQgBQAQABAJAOQAIAPAAAiQAAAhgIARQgJAOgQAAQgQAAgJgOgAhKg5QAPAAAIgOIAAAAQAJgQAAghQAAghgJgPIAAAAQgIgOgPAAQgPAAgIAOIAAAAQgIAPAAAhQAAAhAIAQIAAAAQAIAOAPAAgAkFhbIAvhDIAABDgAkChdIAqAAIAAg8g");
	this.shape_2.setTransform(-90.8751,566.6501);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACcDWQgUAAgNgMQgMgMAAgWQAAgOAFgJQAHgLAJgFQAIgHANAAQANABAIAFQAIAEAFALIAAAAQAEAJAAANIAAAEIAAACIgBAAIg+AAQAAAOAHAHQAIAIANAAQAIAAAGgCQAIgDAFgEIABgBIABAAIAAABIAEAKIABABIgBAAQgFAGgKADQgLADgHAAIAAAAgACwCfQgBgKgFgGIAAAAQgGgHgLAAQgMgBgHAJIAAABQgEAFgBAJIAvAAIAAAAgABZDWQgMAAgIgHIAAAAQgHgIAAgPIAAguIgPAAIgBgBIgBgBIAAgKIABgCIABAAIAPAAIAAgWIAAgBIABAAIAOgEIABAAIABABIAAABIAAAZIAXAAIABAAIABACIAAAKIgBABIgBABIgXAAIAAAsQAAAJADAFIAAgBQADAEAGABIAGgBIAEgCIABAAIABABIAAABIAAAMIAAABIgBAAIgNACgAiBDQQgKgGgFgJIAAAAQgFgNAAgMQAAgMAFgMIAAAAQAEgJALgHQAHgGANAAQALAAAJAHIABAAIAHAHIABgKIAAgCIABAAIAOAAIABAAIAAACIgBBVIAAABIgBAAIgOAAIgBAAIAAgBIAAgKQgDAEgFADQgJAGgLAAQgLABgJgHgAhqDIQALAAAGgIIABAAQAHgIAAgQQAAgQgHgHIgBAAQgGgJgLABQgMgBgHAJQgHAHAAAQQAAAQAHAIIAAAAQAHAIAMAAgAjCDUIgTAAIgBAAIg7g2IAAA1IgBABIgBAAIgOAAIgBAAIAAgBIAAh4IAAgBIABAAIAOAAIABAAIABABIAAAzIA3g0IABAAIASAAIABAAIABABIAAAAIgBABIg9A5IBCA9IAAABIAAAAIAAABIgBAAIAAAAgAEPDUIgBAAIgBgBIAAg1QAAgKgEgGIAAAAQgFgFgJAAQgMAAgHAHQgGAGAAANIAAAwIgBABIgBAAIgNAAIgBAAIgBgBIgBhVIAAgCIABAAIANAAIABAAIABABIABALQADgFAFgDQAJgFALgBQAQABAIAIQAJAJAAARIAAA2IgBABIgBAAgAATDUIgBAAIAAgBIAAg1QAAgKgFgGIAAAAQgEgFgJAAQgLAAgHAHIAAAAQgGAIAAALIAAAwIgBABIgBAAIgNAAIgBAAIgBgBIgBhVIAAgCIABAAIAOAAIABAAIAAABIABALQADgFAFgDIAAAAQAIgFALgBQAQABAIAIQAIAIAAASIAAA2IAAABIgBAAgAi2DUIgBAAIgBgBIAAh9IABgBIABgBIANAAIABABIABABIAAB9IgBABIgBAAgAAcgyIAAAAQgRgYAAguQAAgvARgXQASgYAgABQAhgBASAYQARAYAAAuQAAAugRAYQgSAYghABQgggBgSgYgAA2ipQgIAPAAAiQAAAhAIARQAJAOAPAAQAQAAAJgOQAIgRAAghQAAgigIgPQgIgOgRgBQgQABgIAOgAh8gyQgRgYAAguQAAguARgYQARgYAhABQAhgBARAYQARAYAAAuQAAAugRAYQgRAYghABQghgBgRgYgAhjipQgIAPAAAiQAAAhAIARQAJAOAQAAQAQAAAJgOQAIgRAAghQAAgigIgPQgJgOgQgBQgQABgJAOgAjVgcIgBgBIAAgBIAAghIhQAAIgBgBIAAgBIAAgXIAAgBIBWh5IABgBIAAAAIAaAAIABAAIABABIAAB3IAZAAIABAAIAAACIAAAYIAAABIgBABIgZAAIAAAhIgBABIgBABgAkFhbIAvAAIAAhDgADcgmIgBgBIAAgBIAAgyIgyAAIgBgBIgBgBIAAgWIABgBIABAAIAyAAIAAgyIAAgBIABAAIAYAAIABAAIAAABIAAAyIAyAAIABAAIAAABIAAAWIAAABIgBABIgyAAIAAAyIAAABIgBABg");
	this.shape_3.setTransform(-90.875,566.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Capa 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#867DFD").s().p("ApeGlQhTAAg7g6Qg7g7AAhUIAAm3QAAhUA7g7QA7g6BTgBIS9AAQBTABA7A6QA7A7AABUIAAG3QAABTg7A8Qg7A6hTAAg");
	this.shape_4.setTransform(-127.425,565);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3copia, new cjs.Rectangle(-208.2,522.9,161.6,84.30000000000007), null);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_6
	this.instance = new lib.Símbolo6();
	this.instance.setTransform(1340.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// person04.jpg
	this.instance_1 = new lib.Símbolo9();
	this.instance_1.setTransform(817.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// person03.jpg
	this.instance_2 = new lib.Símbolo8();
	this.instance_2.setTransform(390.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// person02.jpg
	this.instance_3 = new lib.Símbolo7();
	this.instance_3.setTransform(-36.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// person01.jpg
	this.instance_4 = new lib.Símbolo6();
	this.instance_4.setTransform(-496.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(-946.5,-450,2737.4,900), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
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
	this.frame_4 = function() {
		this.stop ();
	}
	this.frame_24 = function() {
		this.stop ();
	}
	this.frame_44 = function() {
		this.stop ();
	}
	this.frame_64 = function() {
		this.stop ();
	}
	this.frame_84 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(20).call(this.frame_24).wait(20).call(this.frame_44).wait(20).call(this.frame_64).wait(20).call(this.frame_84).wait(1));

	// Capa_1
	this.persons = new lib.Símbolo3();
	this.persons.name = "persons";
	this.persons.setTransform(-117.65,-97.7,0.675,0.675,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.persons).wait(4).to({x:-407.25},20,cjs.Ease.quadInOut).to({x:-704.85},20,cjs.Ease.quadInOut).to({x:-1012.05},20,cjs.Ease.quadInOut).to({x:-1356.05},20,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1994.9,-401.6,3086,607.6);


(lib._636363j = function(mode,startPosition,loop,reversed) {
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
	this.frame_10 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AgHASQgEgBgDgCQgDgDABgEIAAgPQgBgEADgDQADgDAEAAIAPAAQAEAAADADQADADgBAEIAAAPQABAEgDADQgDACgEABg");
	var mask_graphics_2 = new cjs.Graphics().p("AgdA+QgNAAgKgJQgJgKAAgNIAAg7QAAgNAJgKQAKgJANAAIA7AAQANAAAKAJQAJAKAAANIAAA7QAAANgJAKQgKAJgNAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AgwBlQgWAAgPgPQgPgPAAgWIAAhhQAAgVAPgQQAPgPAWAAIBhAAQAVAAAQAPQAPAQAAAVIAABhQAAAWgPAPQgQAPgVAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AhACIQgdAAgVgVQgVgVAAgdIAAiBQAAgdAVgVQAVgVAdAAICBAAQAdAAAVAVQAVAVAAAdIAACBQAAAdgVAVQgVAVgdAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AhOCkQgjAAgZgZQgZgZAAgjIAAidQAAgjAZgZQAZgZAjAAICdAAQAjAAAZAZQAZAZAAAjIAACdQAAAjgZAZQgZAZgjAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AhZC8QgpAAgcgdQgdgcAAgpIAAizQAAgoAdgdQAcgdApAAICzAAQAoAAAdAdQAdAdAAAoIAACzQAAApgdAcQgdAdgoAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AhiDOQgtAAgfgfQgfgfAAgtIAAjFQAAgsAfggQAfgfAtAAIDFAAQAsAAAgAfQAfAgAAAsIAADFQAAAtgfAfQggAfgsAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AhoDcQgwAAghgiQgighAAgwIAAjRQAAgvAigiQAhgiAwAAIDRAAQAvAAAiAiQAiAiAAAvIAADRQAAAwgiAhQgiAigvAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AhsDjQgxAAgjgiQgigjAAgxIAAjZQAAgxAigiQAjgjAxAAIDZAAQAxAAAjAjQAiAiAAAxIAADZQAAAxgiAjQgjAigxAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AhtDmQgyAAgjgjQgjgjAAgyIAAjbQAAgxAjgkQAjgjAyAAIDbAAQAyAAAjAjQAjAkAAAxIAADbQAAAygjAjQgjAjgyAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:0,y:0.5}).wait(1).to({graphics:mask_graphics_2,x:0,y:0.5}).wait(1).to({graphics:mask_graphics_3,x:0,y:0.5}).wait(1).to({graphics:mask_graphics_4,x:0,y:0.5}).wait(1).to({graphics:mask_graphics_5,x:0,y:0.5}).wait(1).to({graphics:mask_graphics_6,x:0,y:0.5}).wait(1).to({graphics:mask_graphics_7,x:0,y:0.5}).wait(1).to({graphics:mask_graphics_8,x:0,y:0.5}).wait(1).to({graphics:mask_graphics_9,x:0,y:0.5}).wait(1).to({graphics:mask_graphics_10,x:0,y:0.5}).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeCIIAAgVIA+AAIAAAVgAgpBoIAAgVIAKAAQgCgMgGgJQgFgHgIgIQgKgNgEgHQgGgMgBgPQAAgeAWgWQAWgWAdAAQAeAAAWAWQAWAWAAAeQAAAPgHAMQgEAHgLAOIgLAOQgGAJgCAMIAJAAIAAAVgAgkglQgPAPgBAWQAAAKAFAIIALAPIAPASQAIANACATIAXAAQADgSAIgOIANgSIANgPQAEgIAAgKQAAgWgQgPQgPgPgWgBQgVABgPAPgABQgzIAmgZIAOAUIgmAZgAiCg4IANgUIAlAZIgNAUgAAohVIAYgmIAVANIgZAmgAhUhuIAUgNIAaAmIgVANgAgLhbIAAgsIAYAAIAAAsg");
	this.shape.setTransform(0.7,-1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11));

	// Capa_1
	this.instance = new lib._85684684848hj();
	this.instance.setTransform(0,0.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(10));

	// guide
	this.instance_1 = new lib._85684684848hj();
	this.instance_1.setTransform(0,0.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-22.5,46,46);


(lib.Símbolo12copia = function(mode,startPosition,loop,reversed) {
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
	this.frame_79 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Capa_1
	this.icon02 = new lib.Símbolo3copia();
	this.icon02.name = "icon02";

	this.timeline.addTween(cjs.Tween.get(this.icon02).to({y:8.2},39,cjs.Ease.quadInOut).to({y:0},40,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.2,522.9,161.6,92.5);


(lib.Símbolo3copiahj = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.icon = new lib._636363j();
	this.icon.name = "icon";
	this.icon.setTransform(-175.75,280.4,1.3822,1.3822);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3copiahj, new cjs.Rectangle(-207.5,249.3,63.599999999999994,63.599999999999966), null);


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
	this.icon02 = new lib.Símbolo12copia();
	this.icon02.name = "icon02";

	this.timeline.addTween(cjs.Tween.get(this.icon02).to({x:-11.1},47,cjs.Ease.quadInOut).to({x:0},48,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.3,522.9,172.70000000000002,84.30000000000007);


(lib.Símbolo12copiahj = function(mode,startPosition,loop,reversed) {
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
	this.icon01 = new lib.Símbolo3copiahj();
	this.icon01.name = "icon01";
	this.icon01.setTransform(0,4.1);

	this.timeline.addTween(cjs.Tween.get(this.icon01).to({y:-6.15},39,cjs.Ease.quadInOut).to({y:4.1},40,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.5,243.1,63.599999999999994,73.9);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_14 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Capa_1
	this.icon02 = new lib.Símbolo15();
	this.icon02.name = "icon02";
	this.icon02.setTransform(101.9,-366.85,0.6999,0.6999,0,0,0,60.8,63.8);
	this.icon02.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.icon02).to({alpha:1},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.4,-45.5,113.2,59);


(lib.Símbolo15hj = function(mode,startPosition,loop,reversed) {
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
	this.icon01 = new lib.Símbolo12copiahj();
	this.icon01.name = "icon01";

	this.timeline.addTween(cjs.Tween.get(this.icon01).to({x:9.4},47,cjs.Ease.quadInOut).to({x:0},48,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.5,253.4,73,63.599999999999994);


// stage content:
(lib._300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"loop":1,end:223};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,19,39,56,108,160,212,222,223,238];
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
		this.persons.gotoAndPlay ('fade');
	}
	this.frame_19 = function() {
		this.icon02.gotoAndPlay ('fade');
		
		this.icon01.icon01.icon01.icon.gotoAndPlay ('fade');
	}
	this.frame_39 = function() {
		root.btn.gotoAndPlay ('fade');
	}
	this.frame_56 = function() {
		this.persons.play ();
	}
	this.frame_108 = function() {
		this.persons.play ();
	}
	this.frame_160 = function() {
		this.persons.play ();
	}
	this.frame_212 = function() {
		loopNum == 2 ? (root.gotoAndPlay('end')) : (loopNum++ , console.log(loopNum), root.gotoAndPlay());
		
		/*if(loopNum == 3){
			root.stop()
		}else{
			loopNum++
			console.log(loopNum)
			root.gotoAndPlay('fade')
		}*/
	}
	this.frame_222 = function() {
		this.gotoAndPlay ('loop');
		this.opacidad01.gotoAndPlay ('fade');
	}
	this.frame_223 = function() {
		this.persons.play ();
	}
	this.frame_238 = function() {
		this.stop ();
		
		this.icon02.icon02.stop();
		this.icon02.icon02.icon02.stop();
		this.icon01.stop();
		this.icon01.icon01.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(18).call(this.frame_19).wait(20).call(this.frame_39).wait(17).call(this.frame_56).wait(52).call(this.frame_108).wait(52).call(this.frame_160).wait(52).call(this.frame_212).wait(10).call(this.frame_222).wait(1).call(this.frame_223).wait(15).call(this.frame_238).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(239));

	// opacity02
	this.instance = new lib.Símbolo14();
	this.instance.setTransform(153.05,129.05);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(212).to({_off:false},0).to({alpha:1},10).to({_off:true},1).wait(16));

	// opacidad01
	this.opacidad01 = new lib.Símbolo16();
	this.opacidad01.name = "opacidad01";
	this.opacidad01.setTransform(153.05,129.05);

	this.timeline.addTween(cjs.Tween.get(this.opacidad01).wait(239));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(151,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(239));

	// btn
	this.btn = new lib.Símbolo36();
	this.btn.name = "btn";
	this.btn.setTransform(151,541);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(39).to({_off:false},0).wait(200));

	// icon01
	this.icon01 = new lib.Símbolo15hj();
	this.icon01.name = "icon01";
	this.icon01.setTransform(228.55,60.65,0.6999,0.6999,0,0,0,60.8,63.8);
	this.icon01._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon01).wait(19).to({_off:false},0).wait(220));

	// icon02
	this.icon02 = new lib.Símbolo1();
	this.icon02.name = "icon02";
	this.icon02.setTransform(134.9,255,1,1,0,0,0,7.9,-189);
	this.icon02._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon02).wait(19).to({_off:false},0).wait(220));

	// txt01
	this.instance_2 = new lib.Símbolo31("synched",0,false);
	this.instance_2.setTransform(141.7,115.55);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(235));

	// maskperson (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgIbBaAQhkAAAAhkMAAAhTIQAAhkBkAAMA/vAAAQBkAAAABkMAAABTIQAABkhkAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgKqBWkQhkAAAAhkMAAAhTJQAAhkBkAAMA/vAAAQBkAAAABkMAAABTJQAABkhkAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EgMxBTTQhkAAAAhkMAAAhTHQAAhkBkAAMA/vAAAQBkAAAABkMAAABTHQAABkhkAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EgOxBQPQhkAAAAhkMAAAhTIQAAhkBkAAMA/wAAAQBkAAAABkMAAABTIQAABkhkAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EgQpBNWQhkAAAAhkMAAAhTHQAAhkBkAAMA/wAAAQBkAAAABkMAAABTHQAABkhkAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgSZBKqQhkAAAAhkMAAAhTIQAAhkBkAAMA/wAAAQBkAAAABkMAAABTIQAABkhkAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EgUBBIJQhkAAAAhkMAAAhTIQAAhkBkAAMA/vAAAQBkAAAABkMAAABTIQAABkhkAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EgViBF0QhkAAAAhkMAAAhTHQAAhkBkAAMA/wAAAQBkAAAABkMAAABTHQAABkhkAAg");
	var mask_graphics_8 = new cjs.Graphics().p("EgW7BDrQhkAAAAhkMAAAhTHQAAhkBkAAMA/wAAAQBkAAAABkMAAABTHQAABkhkAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EgYMBBuQhkAAAAhkMAAAhTHQAAhlBkAAMA/wAAAQBkAAAABlMAAABTHQAABkhkAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EgZVA/9QhkAAAAhkMAAAhTIQAAhkBkAAMA/vAAAQBkAAAABkMAAABTIQAABkhkAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EgaXA+YQhkAAAAhkMAAAhTIQAAhkBkAAMA/wAAAQBkAAAABkMAAABTIQAABkhkAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EgbRA8+QhkAAAAhkMAAAhTHQAAhkBkAAMA/wAAAQBkAAAABkMAAABTHQAABkhkAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EgcDA7xQhkAAAAhkMAAAhTIQAAhkBkAAMA/wAAAQBkAAAABkMAAABTIQAABkhkAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EgctA6vQhkAAAAhkMAAAhTHQAAhkBkAAMA/vAAAQBkAAAABkMAAABTHQAABkhkAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EgdQA56QhkAAAAhkMAAAhTIQAAhkBkAAMA/vAAAQBkAAAABkMAAABTIQAABkhkAAg");
	var mask_graphics_16 = new cjs.Graphics().p("EgdrA5QQhkAAAAhkMAAAhTHQAAhkBkAAMA/vAAAQBkAAAABkMAAABTHQAABkhkAAg");
	var mask_graphics_17 = new cjs.Graphics().p("Egd/A4yQhkAAAAhkMAAAhTHQAAhkBkAAMA/wAAAQBkAAAABkMAAABTHQAABkhkAAg");
	var mask_graphics_18 = new cjs.Graphics().p("EgeKA4gQhkAAAAhkMAAAhTHQAAhkBkAAMA/vAAAQBkAAAABkMAAABTHQAABkhkAAg");
	var mask_graphics_19 = new cjs.Graphics().p("EgeOA4aQhkABAAhlMAAAhTHQAAhkBkAAMA/wAAAQBjAAABBkMAAABTHQgBBlhjgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:364.025,y:576.025}).wait(1).to({graphics:mask_graphics_1,x:349.7298,y:553.9916}).wait(1).to({graphics:mask_graphics_2,x:336.2073,y:533.1491}).wait(1).to({graphics:mask_graphics_3,x:323.4575,y:513.4976}).wait(1).to({graphics:mask_graphics_4,x:311.4804,y:495.0372}).wait(1).to({graphics:mask_graphics_5,x:300.276,y:477.7677}).wait(1).to({graphics:mask_graphics_6,x:289.8444,y:461.6893}).wait(1).to({graphics:mask_graphics_7,x:280.1855,y:446.8018}).wait(1).to({graphics:mask_graphics_8,x:271.2992,y:433.1053}).wait(1).to({graphics:mask_graphics_9,x:263.1857,y:420.5999}).wait(1).to({graphics:mask_graphics_10,x:255.8449,y:409.2854}).wait(1).to({graphics:mask_graphics_11,x:249.2769,y:399.1619}).wait(1).to({graphics:mask_graphics_12,x:243.4815,y:390.2294}).wait(1).to({graphics:mask_graphics_13,x:238.4589,y:382.488}).wait(1).to({graphics:mask_graphics_14,x:234.2089,y:375.9375}).wait(1).to({graphics:mask_graphics_15,x:230.7317,y:370.578}).wait(1).to({graphics:mask_graphics_16,x:228.0272,y:366.4095}).wait(1).to({graphics:mask_graphics_17,x:226.0954,y:363.432}).wait(1).to({graphics:mask_graphics_18,x:224.9364,y:361.6455}).wait(1).to({graphics:mask_graphics_19,x:224.55,y:361.05}).wait(220));

	// persons
	this.persons = new lib.Símbolo2();
	this.persons.name = "persons";
	this.persons.setTransform(579.95,312.8,0.9621,0.9621,0,0,0,-9.4,-97.9);

	var maskedShapeInstanceList = [this.persons];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.persons).wait(239));

	// lines
	this.instance_3 = new lib.lines();
	this.instance_3.setTransform(100,396);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(239));

	// violet
	this.instance_4 = new lib.bg();
	this.instance_4.setTransform(-142,-14,0.7049,0.7049);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(239));

	// bg
	this.instance_5 = new lib.Símbolo30();
	this.instance_5.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(239));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(126,286.7,602.1,333.7);
// library properties:
lib.properties = {
	id: 'A4DAFDFBAF18B64E9CD2D6DEB02E1B51',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bg.png", id:"bg"},
		{src:"person01.jpg", id:"person01"},
		{src:"person02.jpg", id:"person02"},
		{src:"person03.jpg", id:"person03"},
		{src:"person04.jpg", id:"person04"}
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