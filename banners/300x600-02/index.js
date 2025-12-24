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



(lib.card01 = function() {
	this.initialize(img.card01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.card02 = function() {
	this.initialize(img.card02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);// helper functions:

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


(lib.Symbol17copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0028E2").s().p("AhCA5IAAhVIASAAIAAAHQAGgHANAAQAOAAAIAJQAIAIAAANIAAABQAAAPgIAJQgIAIgOAAQgLAAgDgCIgEgFIAAAdgAgrgIQgEAFAAAGQAAAJAEAEQAEAFAHAAQAHAAAEgFQAFgEAAgJQAAgGgFgFQgEgFgHAAQgHAAgEAFgAlLA4IgDgDIgBACIAFgNIAHABQAIAAAAgJIAAg+IATAAIAAA+QAAAXgYAAIgLgBgADBAkIAAg+IATAAIAAA+gAEZAbQgKgJAAgOQAAgNAKgJQAJgJANAAQAOAAAKAJQAJAJAAANIAAAFIguAAQADAMAOAAQALAAAFgGIAJALQgHAJgTAAQgPAAgKgIgAEigBIAfAAQgCgNgOAAQgOAAgBANgADnANIAAgZIgKAAIAAgNIAKAAIAAgQIASAAIAAAQIAQAAIAAANIgQAAIAAAYQAAAJAIAAQAGAAACgCIAFANIgCAAQgDADgLAAQgXAAAAgWgABEAaQgKgJAAgOQAAgMAKgJQAKgKAOAAQAPAAAJAKQAKAJAAAMQAAAOgKAJQgJAJgPAAQgOAAgKgJgABRgIQgEAFAAAGQAAAJAEAEQAFAFAHAAQAQAAAAgSQAAgGgFgFQgEgFgHAAQgHAAgFAFgAj4AbQgLgJAAgOQAAgNAKgJQAJgJAOAAQAOAAAKAJQAJAJAAANIAAAFIguAAQADAMAOAAQAKAAAGgGIAJALQgHAJgTAAQgQAAgJgIgAjvgBIAfAAQgCgNgOAAQgOAAgBANgACNAiIAAguIgJAAIAAgNIAJAAIAAgEQAAgXAZAAQAKAAACABIABACIgFAOQgDgCgEAAQgJAAAAAIIABAAIAAAEIAQAAIAAANIgPAAIAAAugAAOAiIAAg+IARAAIAAAKQAIgKAOAAIAAARIgFAAQgQAAAAAQIAAAdgAiFAiIAAghQAAgNgNAAQgGAAgEAEQgEAFAAAGIAAAfIgTAAIAAg+IASAAIAAAIQAHgIANAAQAMAAAHAHQAHAGAAAOIAAAjgAkbgMIAFgSQgGgDAAgHQAAgEAEgEQADgDAFAAQAFAAADADQADADAAAFQAAAFgDAHIgHAQgADDgmQgEgDAAgEIAAgBQAAgJAMAAQALAAAAAJQAAAFgDADQgDADgFAAQgFAAgDgDgAk5gmQgEgDAAgEIAAgBQAAgKAMAAQAMAAAAAKQAAAFgEADQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(-0.025,5.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17copy, new cjs.Rectangle(-33.6,0,67.2,11.4), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCA5IAAhVIASAAIAAAHQAGgHANAAQAOAAAIAJQAIAIAAANIAAABQAAAPgIAJQgIAIgOAAQgLAAgDgCIgEgFIAAAdgAgrgIQgEAFAAAGQAAAJAEAEQAEAFAHAAQAHAAAEgFQAFgEAAgJQAAgGgFgFQgEgFgHAAQgHAAgEAFgAlLA4IgDgDIgBACIAFgNIAHABQAIAAAAgJIAAg+IATAAIAAA+QAAAXgYAAIgLgBgADBAkIAAg+IATAAIAAA+gAEZAbQgKgJAAgOQAAgNAKgJQAJgJANAAQAOAAAKAJQAJAJAAANIAAAFIguAAQADAMAOAAQALAAAFgGIAJALQgHAJgTAAQgPAAgKgIgAEigBIAfAAQgCgNgOAAQgOAAgBANgADnANIAAgZIgKAAIAAgNIAKAAIAAgQIASAAIAAAQIAQAAIAAANIgQAAIAAAYQAAAJAIAAQAGAAACgCIAFANIgCAAQgDADgLAAQgXAAAAgWgABEAaQgKgJAAgOQAAgMAKgJQAKgKAOAAQAPAAAJAKQAKAJAAAMQAAAOgKAJQgJAJgPAAQgOAAgKgJgABRgIQgEAFAAAGQAAAJAEAEQAFAFAHAAQAQAAAAgSQAAgGgFgFQgEgFgHAAQgHAAgFAFgAj4AbQgLgJAAgOQAAgNAKgJQAJgJAOAAQAOAAAKAJQAJAJAAANIAAAFIguAAQADAMAOAAQAKAAAGgGIAJALQgHAJgTAAQgQAAgJgIgAjvgBIAfAAQgCgNgOAAQgOAAgBANgACNAiIAAguIgJAAIAAgNIAJAAIAAgEQAAgXAZAAQAKAAACABIABACIgFAOQgDgCgEAAQgJAAAAAIIABAAIAAAEIAQAAIAAANIgPAAIAAAugAAOAiIAAg+IARAAIAAAKQAIgKAOAAIAAARIgFAAQgQAAAAAQIAAAdgAiFAiIAAghQAAgNgNAAQgGAAgEAEQgEAFAAAGIAAAfIgTAAIAAg+IASAAIAAAIQAHgIANAAQAMAAAHAHQAHAGAAAOIAAAjgAkbgMIAFgSQgGgDAAgHQAAgEAEgEQADgDAFAAQAFAAADADQADADAAAFQAAAFgDAHIgHAQgADDgmQgEgDAAgEIAAgBQAAgJAMAAQALAAAAAJQAAAFgDADQgDADgFAAQgFAAgDgDgAk5gmQgEgDAAgEIAAgBQAAgKAMAAQAMAAAAAKQAAAFgEADQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(-0.025,5.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-33.6,0,67.2,11.4), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCA5IAAhVIASAAIAAAHQAGgHANAAQAOAAAIAJQAIAIAAANIAAABQAAAPgIAJQgIAIgOAAQgLAAgDgCIgEgFIAAAdgAgrgIQgEAFAAAGQAAAJAEAEQAEAFAHAAQAHAAAEgFQAFgEAAgJQAAgGgFgFQgEgFgHAAQgHAAgEAFgAlLA4IgDgDIgBACIAFgNIAHABQAIAAAAgJIAAg+IATAAIAAA+QAAAXgYAAIgLgBgADBAkIAAg+IATAAIAAA+gAEZAbQgKgJAAgOQAAgNAKgJQAJgJANAAQAOAAAKAJQAJAJAAANIAAAFIguAAQADAMAOAAQALAAAFgGIAJALQgHAJgTAAQgPAAgKgIgAEigBIAfAAQgCgNgOAAQgOAAgBANgADnANIAAgZIgKAAIAAgNIAKAAIAAgQIASAAIAAAQIAQAAIAAANIgQAAIAAAYQAAAJAIAAQAGAAACgCIAFANIgCAAQgDADgLAAQgXAAAAgWgABEAaQgKgJAAgOQAAgMAKgJQAKgKAOAAQAPAAAJAKQAKAJAAAMQAAAOgKAJQgJAJgPAAQgOAAgKgJgABRgIQgEAFAAAGQAAAJAEAEQAFAFAHAAQAQAAAAgSQAAgGgFgFQgEgFgHAAQgHAAgFAFgAj4AbQgLgJAAgOQAAgNAKgJQAJgJAOAAQAOAAAKAJQAJAJAAANIAAAFIguAAQADAMAOAAQAKAAAGgGIAJALQgHAJgTAAQgQAAgJgIgAjvgBIAfAAQgCgNgOAAQgOAAgBANgACNAiIAAguIgJAAIAAgNIAJAAIAAgEQAAgXAZAAQAKAAACABIABACIgFAOQgDgCgEAAQgJAAAAAIIABAAIAAAEIAQAAIAAANIgPAAIAAAugAAOAiIAAg+IARAAIAAAKQAIgKAOAAIAAARIgFAAQgQAAAAAQIAAAdgAiFAiIAAghQAAgNgNAAQgGAAgEAEQgEAFAAAGIAAAfIgTAAIAAg+IASAAIAAAIQAHgIANAAQAMAAAHAHQAHAGAAAOIAAAjgAkbgMIAFgSQgGgDAAgHQAAgEAEgEQADgDAFAAQAFAAADADQADADAAAFQAAAFgDAHIgHAQgADDgmQgEgDAAgEIAAgBQAAgJAMAAQALAAAAAJQAAAFgDADQgDADgFAAQgFAAgDgDgAk5gmQgEgDAAgEIAAgBQAAgKAMAAQAMAAAAAKQAAAFgEADQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(0.975,20.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0028E2").s().p("AoxDVQhYAAg/g+Qg+g+AAhZQAAhXA+g/QA/g+BYAAIRjAAQBYAAA/A+QA+A/AABXQAABZg+A+Qg/A+hYAAgAg4AyIASAAIAAgdIAFAGQACACAMAAQAOAAAHgJQAJgJAAgNIAAgBQAAgOgJgJQgHgJgOAAQgNAAgHAIIAAgHIgRAAgAlBAyIALAAQAYAAAAgXIAAg9IgTAAIAAA+QAAAJgIAAIgHgCIgGANIABgBIAEADgADLAdIASAAIAAg+IgSAAgAEjgYQgKAJAAANQAAANAKAJQAKAJAPAAQASAAAIgKIgKgKQgEAFgLAAQgOAAgDgMIAuAAIAAgEQAAgOgJgJQgKgJgOAAQgOAAgIAKgADngTIAKAAIAAAaQAAAWAXAAQALAAADgEIACAAIgFgMQgDABgGAAQgHAAAAgIIAAgZIAQAAIAAgNIgQAAIAAgQIgSAAIAAAQIgKAAgABNgZQgJAJAAAOQAAAMAJAKQALAJAOAAQAOAAAKgJQAKgKAAgMQAAgOgKgJQgKgJgOAAQgOAAgLAJgAjvgYQgKAJAAANQAAANALAJQAJAJAQAAQATAAAHgKIgJgKQgGAFgKAAQgOAAgDgMIAuAAIAAgEQAAgOgKgJQgJgJgOAAQgOAAgJAKgACNgSIAKAAIAAAuIASAAIAAguIAQAAIAAgOIgQAAIAAgDIgBAAQAAgJAJAAQAEAAADADIAFgOIgCgCQgBgBgLAAQgYAAAAAXIAAADIgKAAgAAYAcIASAAIAAgcQAAgRAQAAIAEAAIAAgRQgOAAgHAJIAAgJIgRAAgAh7gEIAAAgIASAAIAAgjQAAgOgHgHQgIgHgLAAQgOAAgGAJIAAgIIgSAAIAAA+IATAAIAAgeQgBgIAFgEQADgFAHAAQANAAAAAPgAkPg2QgDAEAAAEQAAAGAGADIgFASIAMAAIAGgQQAEgGAAgFQAAgFgDgEQgDgDgGAAQgEAAgEAEgADJg0IAAABQAAAEADADQAEADAFAAQAFAAACgDQAEgEAAgEQAAgKgLAAQgMAAAAAKgAkzg1IAAACQAAAEAEADQADADAFAAQAFAAADgEQADgDABgFQgBgJgLAAQgMAAAAAJgABbAKQgEgFgBgHQABgIAEgFQAFgFAHAAQAGAAAFAFQAFAFAAAIQAAAQgQAAQgIAAgEgEgAghAKQgFgFAAgHQAAgIAFgFQAEgFAHAAQAGAAAFAFQAFAFAAAIQAAAHgFAFQgFAEgGAAQgHAAgEgEgAEsgIQABgMAOAAQAOAAABAMgAjlgIQABgMAOAAQAOAAABAMg");
	this.shape_1.setTransform(0,21.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-77.5,0,155,42.7), null);


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
	this.instance = new lib.card01();
	this.instance.setTransform(-300,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-300,0,600,1200), null);


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
	this.instance = new lib.card02();
	this.instance.setTransform(-300,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-300,0,600,1200), null);


(lib.Symbol8copy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AHuDRQgqgSgcgiQgcgggNguIgrAAIAAg5IAiAAIAAgGIAAgGIAAgHIAAgFIgiAAIAAg6IArAAQANgtAdggQAcghApgSQAqgSAzAAQA2AAArATQAqAUAcAjQAcAkALAxIiBAAQgLgYgVgMQgUgNgbgBQgXAAgSAKQgSAJgLASIBYAAIAAA6IhrAAIAAAFIAAAHIAAAGIAAAGIBrAAIAAA5IhaAAQAMATASAKQATAKAXAAQAbAAAUgMQAVgNALgYICBAAQgLAxgcAjQgcAkgqATQgrAUg2AAQg0AAgpgTgAAdDBQgngcgRgyQgRgzAAhCQAAhCARgzQARgzAngcQAngdA/AAQA/AAAnAdQAnAcASAzQASAzAABCQAABCgSAzQgSAygnAcQgnAdg/ABQg/gBgngdgABchjQgMAPgFAZQgDAZAAAgQAAAfADAZQAFAZAMAQQANAPAaAAQAaAAANgPQAMgQAEgZQAEgZAAgfQAAgggEgZQgEgZgMgPQgNgPgagBQgaABgNAPgAlxDBQgngcgSgyQgRgzAAhCQAAhCARgzQASgzAngcQAngdA/AAQBAAAAmAdQAoAcASAzQARAzAABCQAABCgRAzQgSAygoAcQgmAdhAABQg/gBgngdgAkxhjQgNAPgEAZQgEAZAAAgQAAAfAEAZQAEAZANAQQANAPAZAAQAbAAAMgPQAMgQAFgZQADgZAAgfQAAgggDgZQgFgZgMgPQgMgPgbgBQgZABgNAPgAsWDbIAAhaQAigaAggcQAigbAagbQAagaARgcQAPgbAAgaQABgTgJgLQgJgKgRgBQgRAAgKAOQgKAPABAdIh0AAQADg4AWgjQAXgjAjgQQAjgQApAAQA1ABAhARQAgASAPAeQAPAeAAAlQAAAigNAgQgMAfgWAbQgWAbgaAYQgaAXgbATICYAAIAABgg");
	this.shape.setTransform(-0.7,59.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8copy2, new cjs.Rectangle(-95.3,0,190.6,134), null);


(lib.Symbol8copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AlTBnIgGgBIACgSIAEAAIAEABQAIAAADgFQADgFAAgKIAAh0IAUAAIAAB1IgBAKQAAAGgDAGQgDAHgHAEQgGAEgMAAIgGAAgAAeBlIAAhBQgFAIgKAFQgKAFgKAAQgMgBgKgEQgJgDgHgIQgHgHgEgKQgDgKAAgLQAAgLADgKQAEgKAHgHQAHgIAJgEQAKgEAMAAQAKAAAJAEQAKAFAGAIIAAgOIAUAAIAACYgAgRghQgGADgEAFQgFAEgCAHQgDAHAAAHQAAAHADAHQACAGAFAFQAEAFAGACQAHADAIABQAGgBAHgDQAGgCAEgFQAFgFACgGQACgHAAgHQAAgHgCgHQgCgHgFgEQgEgFgGgDQgHgCgGAAQgIAAgHACgAEWAzQgHgCgEgDQgFgEgDgGQgDgFAAgJQAAgKAFgGQAEgGAIgEQAHgFALgBQAKgCAMAAIAOAAIAAgEIgBgIIgFgHQgDgDgEgDQgFgBgGAAIgKABIgIADIgGADIgGAFIgMgNQAJgHALgEQALgEAKAAQAMAAAIADQAIADAFAFQAGAEACAHQADAGAAAGIAAA0IAAAKIAAAJIgRAAIgBgPIAAAAQgHAJgIAEQgJAEgMABQgHgBgHgCgAEvACIgOADQgGACgEAEQgDAEAAAGQAAAJAGAEQAGAEAKAAQAIAAAGgCQAFgDAEgFQADgEACgFIABgLIAAgGIgKAAIgOAAgABnAzQgHgCgFgEQgFgGgDgHQgDgIAAgKIAAhBIATAAIAAA8QAAAHACAFQACAFADAEQAEADAEABIAJACQAGgBAFgCQAFgCAEgEQAEgEACgHQACgGAAgJIAAg0IAUAAIAABmIgUAAIAAgQQgEAJgJAEQgJAFgMABQgIgBgGgCgAiNAxQgKgDgHgKIAPgNQAEAFAGADQAGAEAJABIAHgCQAEAAADgCIAFgEQACgDAAgDQAAgEgDgDIgHgEIgIgDIgHgCIgMgDQgGgCgEgDQgFgCgCgGQgDgFAAgHQAAgIAEgGQADgGAGgEQAFgEAHgCQAHgCAHAAQALAAAJAEQAKAEAGAJIgQAMQgDgFgFgCQgFgDgIAAQgHAAgFADQgFADAAAFQAAAEADAEQADACAEACIAJACIAIACIALAEQAGACAEADQAEADACAFQADAFAAAHQAAAJgEAGQgEAHgGADQgGAEgHACIgPACQgNgBgKgEgAj3AzQgHgCgFgEQgFgGgDgHQgDgIAAgKIAAhBIATAAIAAA8QAAAHACAFQACAFADAEQAEADAEABIAJACQAGgBAFgCQAFgCAEgEQAEgEACgHQACgGAAgJIAAg0IAUAAIAABmIgUAAIAAgQQgEAJgJAEQgJAFgMABQgIgBgGgCgADQgxIAAg2IARAAIAAA2gAErhHIggggIAcAAIAWAggAlBhOQgEgFAAgFQAAgGAEgEQAEgFAGAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgGAAgEgEg");
	this.shape.setTransform(-45.375,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8copy, new cjs.Rectangle(-84,1.1,79.9,38.5), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al7BXQgQgHgLgMQgMgMgHgQQgGgQAAgTQAAgSAGgQQAHgQAMgMQALgMAQgHQARgHATAAQATAAAQAHQARAHALAMQAMAMAGAQQAHAQAAASQAAATgHAQQgGAQgMAMQgLAMgRAHQgQAHgTAAQgTAAgRgHgAlxg4QgMAFgIAJQgJAJgEANQgFAMAAANQAAAOAFAMQAEAMAJAJQAIAJAMAGQALAFAPAAQAOAAAMgFQAMgGAIgJQAIgJAFgMQAFgMAAgOQAAgNgFgMQgFgNgIgJQgIgJgMgFQgMgFgOAAQgPAAgLAFgAD6BYQgLgEgIgMIAQgNQAFAFAHAEQAGAEAKAAIAIgBQAEAAADgCIAFgFQACgDAAgDQAAgFgDgDQgDgDgEgCIgJgDIgIgCIgNgDQgGgDgFgDQgFgEgCgFQgDgGAAgIQAAgIADgGQAEgHAGgEQAGgEAIgCQAIgDAHAAQAMAAAKAFQALAEAGAKIgRAMQgDgFgGgCQgGgEgIAAQgHAAgGAEQgFACAAAGQAAAFADADQADADAEACIAKADIAIACIANAEQAGACAFAEQAEAEADAFQACAGAAAIQAAAJgEAHQgEAHgGAEQgHAEgIACQgIACgIAAQgPAAgKgEgACuBZQgHgEgDgFQgDgGgBgHIAAgNIAAg6IgZAAIAAgTIAZAAIAAgfIAVAAIAAAfIAfAAIAAATIgfAAIAAAyIAAAKIACAIQACAEADACQADACAGAAIAIgBQAEAAAEgCIAAATQgEADgGAAIgKABQgMAAgHgDgAgpBYQgLgFgIgIQgHgIgEgLQgEgKAAgNQAAgNAEgLQAFgKAHgIQAIgHALgFQALgFAMAAQAPAAAKAGQAKAFAHAIQAGAIADALQADAKAAALIAAAIIhZAAQAAAHADAGQADAGAFAEQAGAFAHACQAGADAIAAQAKAAAGgFQAIgFAGgHIAQAMQgSAXgfAAQgNAAgLgEgAgggFQgGADgFADQgEAFgDAGQgCAGAAAGIBCAAQAAgIgCgGQgCgGgEgEQgEgDgFgDQgGgCgIAAQgIAAgHADgAA/BZIAAhwIAVAAIAAASIABAAIAFgJIAJgGIAJgEQAFgCAGAAQAFAAAEACIgBAXIgFgBIgFgBQgQAAgIAIQgJAJAAATIAAA4gAiMBZIAAhdIgYAAIAAgTIAYAAIAAgZQAAgXAJgLQAJgLAVAAIAHAAIAJACIgCATIgHgCIgGAAQgGAAgDACQgEABgCAEQgCADAAAFIgBAKIAAAaIAZAAIAAATIgZAAIAABdgAjbBZIAAhdIgZAAIAAgTIAZAAIAAgZQAAgXAJgLQAIgLAVAAIAIAAIAIACIgCATIgGgCIgGAAQgGAAgEACQgDABgCAEQgCADgBAFIgBAKIAAAaIAaAAIAAATIgaAAIAABdgAGBgTIgVAcIgNgJIAVgcIgigLIAFgQIAiAMIAAgjIARAAIAAAjIAhgMIAFAQIghALIAVAcIgNAJg");
	this.shape.setTransform(38.125,95.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-11.5,75.2,99.6,42.099999999999994), null);


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
	this.instance = new lib.logo();
	this.instance.setTransform(-150,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-150,0,300,600), null);


(lib.Symbol5copy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0028E2").s().p("AOKChQgYgIgQgPQgQgQgLgWQgJgVAAgbQAAgaAJgWQALgUAQgQQARgPAXgIQAWgJAaAAQAYAAAUAJQATAIAOAPQANAQAIAUQAHAWAAAaIAAAWIigAAQAEAUAOAMQANALAVAAQARAAAMgIQAMgHAIgMIAxAjQgSAVgYAMQgaALgbAAQgaABgWgJgAOfgLQgJAEgGAGQgFAEgFAIQgDAIAAAIIBbAAQABgSgMgLQgMgMgUAAQgLAAgJADgAJwChQgQgHgJgOQgJgPgDgTQgDgTAAgXIAAh6IBFAAIAABsIABAUQAAALAEAIQADAJAHAGQAIAFANAAQANAAAIgFQAJgEAEgJQAEgIABgKQACgKAAgLIAAhuIBFAAIAADeIhDAAIAAgfIAAAAIgKAOQgGAGgHAFQgJAFgKAEQgLACgNAAQgaABgQgJgACTChQgWgIgRgPQgRgQgKgWQgJgVAAgbQAAgaAJgWQAKgUARgQQARgPAWgIQAXgJAaAAQAYAAAUAJQATAIANAPQAOAQAIAUQAHAWAAAaIAAAWIigAAQAEAUAOAMQAOALATAAQASAAAMgIQAMgHAIgMIAwAjQgQAVgZAMQgaALgbAAQgaABgXgJgACqgLQgJAEgHAGQgGAEgEAIQgDAIAAAIIBbAAQAAgSgLgLQgMgMgUAAQgLAAgIADgApbChQgXgIgQgPQgRgQgJgWQgKgVAAgbQAAgaAKgWQAJgUARgQQARgPAWgIQAYgJAZAAQAYAAATAJQAUAIAOAPQANAQAHAUQAIAWAAAaIAAAWIigAAQAEAUAOAMQAOALATAAQASAAALgIQAMgHAJgMIAxAjQgRAVgaAMQgZALgbAAQgZABgYgJgApFgLQgIAEgGAGQgHAEgDAIQgEAIAAAIIBbAAQABgSgNgLQgMgMgSAAQgMAAgJADgAHdCkIAAhuIAAgTQgBgKgDgJQgEgJgHgGQgHgEgOAAQgMAAgJADQgIAGgFAIQgEAIgBAKIgBAVIAABvIhFAAIAAjeIBBAAIAAAeIABAAQAEgGAFgGQAHgHAIgGQAIgEAKgEQAMgDAMAAQAaAAAQAIQAQAIAJAOQAJAPADATQAEATAAAWIAAB7gAhhCkIhcjeIBKAAIA5CXIABAAIA0iXIBEAAIhXDegAkQCkIAAhuIAAgTQgCgKgDgJQgDgJgIgGQgGgEgOAAQgNAAgJADQgHAGgFAIQgEAIgCAKIgBAVIAABvIhFAAIAAjeIBCAAIAAAeIABAAQADgGAGgGQAHgHAIgGQAHgEALgEQALgDAMAAQAbAAAQAIQAPAIAKAOQAIAPAEATQADATAAAWIAAB7gAsMCkIAAjeIBFAAIAADegAwiCkIAAlFIB6AAQAVAAAVAEQAWACARAKQARAJAKAQQAKAQAAAbQAAAbgPASQgPASgZAIIAAABQAPADANAFQANAHAKAKQAKALAEANQAGAOAAAPQgBAagKARQgMASgRAKQgRALgWAEQgWAFgWAAgAvaBoIBAAAQAJAAAIgCQAJgCAGgFQAHgEAEgIQAFgHAAgKQAAgMgGgIQgGgGgIgEQgJgEgKgBIgTgBIg2AAgAvageIA0AAQAIAAAIgCQAIgCAHgEQAGgEAEgHQAEgHAAgJQAAgLgEgGQgFgHgHgEQgHgDgIgCQgJgCgIAAIgxAAgAsGhkQgLgMAAgQQAAgRALgMQAMgMAQAAQARAAAMAMQAMAMAAARQAAAQgMAMQgMALgRAAQgQAAgMgLg");
	this.shape.setTransform(-243.85,66.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-363.2,27.1,237.1,83.19999999999999);


(lib.Symbol5copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0028E2").s().p("ALhBeQgMgFgIgJQgIgJgEgLQgEgMAAgOQAAgNAEgMQAFgKAIgJQAJgIALgGQAMgEANAAQARAAALAGQALAFAHAJQAHAJADALQAEALAAAMIAAAIIhiAAQAAAIAEAHQADAGAGAFQAFAFAIACQAHACAIABQALAAAIgGQAIgFAHgHIARAMQgTAZgjAAQgOAAgMgEgALrgHQgHAEgFAEQgEAFgDAHQgDAGAAAGIBJAAQAAgIgCgHQgDgGgEgEQgEgEgHgDQgGgCgJgBQgJAAgHADgAGpBeQgMgFgIgJQgIgJgEgLQgFgMAAgOQAAgNAFgMQAEgKAIgJQAIgIAMgGQALgEAOAAQANAAAMAGQALAFAHAJIAAAAIAAhaIAXAAIAADCIgXAAIAAgSIAAAAQgHAKgMAFQgMAFgMAAQgOAAgLgEgAG0gDQgHADgFAFQgFAFgDAHQgDAIAAAJQAAAKADAIQADAHAFAGQAFAFAHAEQAIADAJAAQAJAAAIgDQAHgEAFgFQAFgGADgHQADgIAAgKQAAgJgDgIQgDgHgFgFQgFgFgHgDQgIgEgJAAQgJAAgIAEgADbBeQgLgEgJgNIARgPQAGAHAHADQAHAFAKAAIAJgBQAEgBAEgCQADgCACgCQACgDAAgFQAAgEgDgEQgDgDgEgCIgKgDIgJgCIgOgEQgHgCgFgEQgFgEgDgGQgDgGAAgJQAAgIAEgHQAEgHAHgFQAGgEAIgDQAJgCAIAAQANAAALAEQALAFAHALIgSANQgEgFgGgDQgGgEgJAAQgIAAgGAEQgGADAAAGQAAAGADADQAEADAEACIALADIAJACQAHACAHACQAGADAFAEQAFAEACAGQADAGAAAJQAAAKgEAHQgFAHgHAFQgGAFgJACQgJABgJAAQgPAAgMgEgABdBgQgIgDgGgFQgGgGgDgJQgEgJAAgMIAAhNIAXAAIAABHQAAAIACAHQADAFAEAEQADADAGADIAKABQAHAAAGgCQAGgCAFgFQAFgGACgHQADgIAAgLIAAg9IAXAAIAAB5IgXAAIAAgTIgBAAQgEAKgLAFQgLAHgOgBQgJABgIgDgAg0BeQgMgGgIgIQgJgJgFgLQgFgMAAgOQAAgMAFgMQAFgKAJgKQAIgIAMgFQAMgFAOAAQANAAAMAFQALAFAIAIQAJAKAFAKQAFAMAAAMQAAAOgFAMQgFALgJAJQgIAIgLAGQgMAEgNAAQgOAAgMgEgAgrgDQgIADgFAFQgFAFgDAHQgDAIAAAJQAAAKADAIQADAHAFAGQAFAFAIAEQAHADAKAAQAJAAAHgDQAIgEAEgFQAFgGADgHQADgIAAgKQAAgJgDgIQgDgHgFgFQgEgFgIgDQgHgEgJAAQgKAAgHAEgAnwBgQgIgDgGgFQgGgGgDgJQgEgJAAgMIAAhNIAXAAIAABHQAAAIACAHQADAFAEAEQADADAGADIAKABQAHAAAGgCQAGgCAFgFQAFgGACgHQADgIAAgLIAAg9IAXAAIAAB5IgXAAIAAgTIgBAAQgEAKgLAFQgLAHgOgBQgJABgIgDgAqCBeQgMgGgIgIQgJgJgFgLQgFgMAAgOQAAgMAFgMQAFgKAJgKQAIgIAMgFQAMgFAOAAQANAAAMAFQAMAFAIAIQAJAKAFAKQAFAMAAAMQAAAOgFAMQgFALgJAJQgIAIgMAGQgMAEgNAAQgOAAgMgEgAp5gDQgIADgFAFQgFAFgDAHQgDAIAAAJQAAAKADAIQADAHAFAGQAFAFAIAEQAHADAKAAQAJAAAHgDQAIgEAFgFQAFgGADgHQADgIAAgKQAAgJgDgIQgDgHgFgFQgFgFgIgDQgHgEgJAAQgKAAgHAEgAJkBgIAAh5IAXAAIAAASIABAAIAGgJIAJgGQAEgDAGgCIALgBQAGAAAEABIgBAaIgFgCIgGAAQgRAAgJAIQgJAKAAATIAAA+gAIpBgIAAh5IAXAAIAAB5gAiyBgIgyh5IAbAAIAkBcIAjhcIAZAAIgwB5gAl8BgIAAh5IAXAAIAAASIAAAAIAGgJIAJgGQAFgDAFgCIAMgBQAFAAAFABIgBAaIgGgCIgFAAQgRAAgJAIQgJAKAAATIAAA+gAs2BgIAAi1IBAAAQARAAAMAEQALAFAHAHQAGAIADAJQACAJAAAIQAAAJgCAJQgDAJgGAHQgHAHgLAEQgMAGgRAAIgnAAIAABQgAsdgFIAgAAIAOgBQAHgBAGgDQAFgEAEgFQADgGAAgKQAAgIgDgGQgEgGgFgDQgGgDgHgCIgOgBIggAAgAIpg5QgFgFAAgHQAAgHAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAHQAAAHgFAFQgFAFgGAAQgHAAgFgFg");
	this.shape.setTransform(-266.975,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357.3,13.9,179.9,45.4);


(lib.Symbol3copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AoxDVQhYAAg/g+Qg+g+AAhZQAAhXA+g/QA/g+BYAAIRjAAQBYAAA/A+QA+A/AABXQAABZg+A+Qg/A+hYAAg");
	this.shape.setTransform(0,21.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(-77.5,0,155,42.7), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0028E2").s().p("AoxDVQhYAAg/g+Qg+g+AAhZQAAhXA+g/QA/g+BYAAIRjAAQBYAAA/A+QA+A/AABXQAABZg+A+Qg/A+hYAAg");
	this.shape.setTransform(0,21.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-77.5,0,155,42.7), null);


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
	this.shape.graphics.f("#A0E1D9").s().p("Egh5AZoMAAAgzPMBDzAAAMAAAAzPg");
	this.shape.setTransform(0,163.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-217,0,434,328), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#002EE8").s().p("EgtIAavQytrFAAvqQAAvpStrFQStrEabgBQacABStLEQStLFAAPpQAAPqytLFQytLE6cABQ6bgBytrEg");
	this.shape.setTransform(0.025,241.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-408.5,0,817.1,483.9), null);


(lib.legal = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0028E2").s().p("AgXAcIAAgBIADgGQAFAEALAAQAKABAAgHQAAgFgNgCQgOgDAAgJQAAgKANgDQAMgCAJAGIgEAHQgFgFgIABQgKAAAAAGQAAAEAOADQAOACAAALQABALgQACIgGAAQgKAAgGgFgAhZAcIAAgBIADgGQAFAEALAAQALABAAgHQAAgFgOgCQgOgDAAgJQAAgKANgDQANgCAJAGIgEAHQgFgFgJABQgKAAAAAGQAAAEAPADQAOACAAALQABALgRACIgGAAQgKAAgGgFgAGEAgQgOgCABgKQAAgKALgDQAEgBARAAIAAgCQAAgEgDgDQgEgDgGAAQgFAAgEABIgFAEIgEgGQALgIAOACQAPAEgCANIAAAcIgHAAIAAgGQgEAHgJAAIgGgBgAGAASQAAAHAKAAQALgBACgGIAAgHIgNAAQgKAAAAAHgAI+AfQgSgFABgRQgBgQASgFQASgGAIAPIgHADQgGgJgLAEQgLAEABAKQAAALALAEQALAEAFgJIAHADQgGALgLAAIgJgCgAnpAfQgSgFABgRQgBgQASgFQASgGAIAPIgGADQgHgJgLAEQgLAEABAKQAAALALAEQALAEAGgJIAGADQgGALgLAAIgJgCgAKYAhIAAgtIAIAAIAAAHQAFgIALABQALAAAFAIQAHgMAPAEQAPADgBAPIAAAZIgJAAIAAgZQAAgGgDgDQgDgDgFAAQgGAAgDADQgFAEAAAHIAAAYIgIAAIAAgZQAAgGgDgDQgEgDgFAAQgFAAgEADQgEAEAAAHIAAAYgAAeAcQgFgGAAgJIAAgZIAIAAIAAAYQgBAOAPgBQAOgBgBgOIAAgXIAIAAIAAAtIgIAAIAAgHQgGAIgJAAQgJAAgGgFgAFIAYIAAAIIgHAAIAAg/IAIAAIAAAZQAJgMAQAGQAPAGgBAPIAAAAQAAAQgPAGQgFABgEAAQgJAAgHgIgAFIAJQAAAQAQAAQAQAAgBgQQAAgPgQAAQgQAAABAPgACWAYIAAAIIgIAAIAAg/IAJAAIAAAZQAJgMAQAGQAPAGgBAPIgBAAQABAQgPAGQgFABgEAAQgJAAgHgIgACWAJQAAAQAQAAQAPAAAAgQQAAgPgQAAQgQAAABAPgAlJAfQgPgGABgQQgBgPAQgGQAPgGAJAMIAAgZIAIAAIAAA/IgIAAIAAgIQgGAIgJAAQgFAAgFgBgAlPAJQAAAQAPAAQAQAAgBgQQAAgPgPAAQgQAAABAPgAILAgIgRgUIgJAIIAAAMIgJAAIAAg/IAJAAIAAAoIAZgWIAJAAIgTASIAVAbgAGtAgIAAgtIAHAAIAAAHQAJgLAOAEQAOAEgBAOIABAAIAAAaIgJAAIAAgZQABgNgOABQgPABABANIAAAYgAEdAgIAAgtIAIAAIAAAIQAEgIAMAAIABAAIAAAIQgIAAgEADQgEADAAAIIAAAXgADKAgIAAgmIgIAAIAAgHIAIAAIAAgEQgBgJAJgEQAIgEAIAFIgDAGQgEgDgFACQgFABAAAGIABAAIAAAEIAOAAIAAAHIgOAAIAAAmgABTAgIAAgtIAIAAIAAAIQAEgIAMAAIABAAIAAAIQgIAAgEADQgEADAAAIIAAAXgAiPAgIAAgtIAIAAIAAAHQAIgLAOAEQAPAEgCAOIABAAIAAAaIgJAAIAAgZQABgNgOABQgPABACANIAAAYgAjdAgIAAgtIAJAAIAAAtgAkZAgIAAgtIAJAAIAAAtgAmPAgIAAgtIAIAAIAAAHQAIgLAOAEQAPAEgCAOIABAAIAAAaIgIAAIAAgZQAAgNgOABQgPABACANIAAAYgAowAgIAAgtIAHAAIAAAIQAEgIANAAIAAAAIAAAIQgHAAgEADQgFADAAAIIAAAXgApIAgIAAgtIAIAAIAAAtgAqlAgIgbg7IAKAAIAWAwIAWgwIAIAAIgbA7gAj3AfQgKgEABgJIAAgYIgIAAIAAgHIAIAAIAAgKIAJAAIAAAKIANAAIAAAHIgNAAIAAAYQAAAFAFACQAEABAEgDIADAGQgEADgFAAIgHgBgAJkAaQgHgGAAgLQAAgKAHgGQAHgGAKAAQAKAAAGAGQAIAGAAAKQAAALgIAGQgGAGgKAAQgKAAgHgGgAJmAJQAAAQAPAAQAQAAgBgQQAAgPgPAAQgQAAABAPgAIbAaQAAgFAGAAQAFAAAAAFQAAAGgFAAQgGAAAAgGgADqAaQgHgGAAgLQAAgKAHgGQAHgGAKAAQAJAAAHAGQAIAGAAAKQAAALgIAGQgHAGgJAAQgKAAgHgGgADqAJQAAAQAQAAQAQAAgBgQQAAgPgQAAQgPAAAAAPgAjCAaQgHgGAAgLQAAgKAHgGQAHgGAKAAQAJAAAHAGQAHAGAAAKQAAALgHAGQgHAGgJAAQgKAAgHgGgAjBAJQAAAQAQAAQAQAAgBgQQAAgPgQAAQgPAAAAAPgAnCAaQgHgGAAgLQAAgKAHgGQAHgGAKAAQAKAAAHAGQAHAGAAAKQAAALgHAGQgHAGgKAAQgKAAgHgGgAnAAJQAAAQAPAAQAQAAgBgQQAAgPgPAAQgQAAABAPgAp7AaQgIgGAAgLQAAgKAIgGQAGgGAKAAQAKAAAHAGQAHAGAAAKQAAALgHAGQgHAGgKAAQgKAAgGgGgAp6AJQAAAQAQAAQAPAAgBgQQAAgPgPAAQgQAAABAPgArWAAIAAgKIgLAGIgCgFIAKgGIgKgGIACgEIALAFIAAgLIAFAAIAAALIAKgFIADAEIgKAGIAKAGIgDAFIgKgGIAAAKgAjegbQAAgFAFAAQAGAAAAAFQAAAFgGAAIAAAAQgFAAAAgFgAkagbQAAgFAGAAQAGAAAAAFQAAAFgGAAIgBAAQgFAAAAgFgApJgbQAAgFAFAAQAGAAAAAFQAAAFgGAAIAAAAQgFAAAAgFg");
	this.shape.setTransform(-9.4932,-0.4765);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(-83.5,-3.8,148,6.699999999999999), null);


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

	// Layer_2
	this.instance = new lib.Symbol5copy2("synched",0);
	this.instance.setTransform(243.85,3.35,1,1,0,0,0,0,19.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({y:-6.65,alpha:1},29,cjs.Ease.get(1)).wait(26));

	// Layer_1
	this.instance_1 = new lib.Symbol5copy("synched",0);
	this.instance_1.setTransform(243.85,3.35,1,1,0,0,0,0,19.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-6.65,alpha:1},29,cjs.Ease.get(1)).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.9,0,211.8,68);


(lib.Symbol15copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {rollOver:15,rollOut:22};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_9 = function() {
		this.stop ();
	}
	this.frame_21 = function() {
		this.stop ();
	}
	this.frame_34 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(12).call(this.frame_21).wait(13).call(this.frame_34).wait(5));

	// Layer_1
	this.instance = new lib.Symbol17();
	this.instance.setTransform(0.9,20.7,1,1,0,0,0,-0.1,5.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:1},7).to({alpha:0},7).to({_off:true},1).wait(10));

	// Layer_2
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(0,21.3,1,1,0,0,0,0,21.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({alpha:1},7).to({alpha:0},7).to({_off:true},1).wait(10));

	// Layer_1
	this.instance_2 = new lib.Symbol17copy();
	this.instance_2.setTransform(0.9,20.7,1,1,0,0,0,-0.1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39));

	// Layer_2
	this.instance_3 = new lib.Symbol3copy();
	this.instance_3.setTransform(0,21.3,1,1,0,0,0,0,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,0,155,42.7);


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
	this.instance = new lib.legal();
	this.instance.setTransform(9,11.4,1,1,0,0,0,0,8.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-0.8,148,6.7);


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
	this.instance = new lib.Symbol12();
	this.instance.setTransform(0,600,1,1,0,0,0,0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-300,0,600,1200), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {loop:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_479 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(479).call(this.frame_479).wait(1));

	// Layer_1
	this.instance = new lib.Symbol11();
	this.instance.setTransform(0,600,1,1,0,0,0,0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:588},239,cjs.Ease.quadInOut).to({y:600},240,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-12,600,1212);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"loop":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_479 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(479).call(this.frame_479).wait(1));

	// Layer_1
	this.instance = new lib.Symbol13();
	this.instance.setTransform(0,600,1,1,0,0,0,0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:20},239,cjs.Ease.quadInOut).to({x:0},240,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,0,620,1200);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.frame_239 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// Layer_1
	this.card02 = new lib.Symbol10();
	this.card02.name = "card02";
	this.card02.setTransform(0,600,1,1,0,0,0,0,600);

	this.timeline.addTween(cjs.Tween.get(this.card02).to({x:-16},119,cjs.Ease.quadInOut).to({x:0},120,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,0,616,1200);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol8();
	this.instance.setTransform(-12.1,71,1,1,0,0,0,-0.1,67);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({y:66,alpha:1},19,cjs.Ease.get(1)).wait(17));

	// Layer_4
	this.instance_1 = new lib.Symbol8copy2();
	this.instance_1.setTransform(-12.1,71,1,1,0,0,0,-0.1,67);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({y:66,alpha:1},19,cjs.Ease.get(1)).wait(32));

	// Layer_5
	this.instance_2 = new lib.Symbol8copy();
	this.instance_2.setTransform(-12.1,71,1,1,0,0,0,-0.1,67);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:66,alpha:1},19,cjs.Ease.get(1)).wait(46));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,11.3,161.4,97.5);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"loop":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_239 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// Layer_1
	this.card01 = new lib.Symbol9();
	this.card01.name = "card01";
	this.card01.setTransform(0,600,1,1,0,0,0,0,600);

	this.timeline.addTween(cjs.Tween.get(this.card01).to({y:588},119,cjs.Ease.quadInOut).to({y:600},120,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-12,600,1212);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"loop":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_259 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(259).call(this.frame_259).wait(1));

	// Layer_1
	this.instance = new lib.Symbol15();
	this.instance.setTransform(0,21.3,1,1,0,0,0,0,21.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(222).to({_off:false},0).to({alpha:1},18).to({alpha:0},18).to({_off:true},1).wait(1));

	// Layer_2
	this.btn = new lib.Symbol15copy();
	this.btn.name = "btn";
	this.btn.setTransform(0,21.3,1,1,0,0,0,0,21.3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(260));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,0,155,42.7);


(lib.tarjetas = function(mode,startPosition,loop,reversed) {
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
	this.frame_39 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// card01
	this.card01 = new lib.Symbol4();
	this.card01.name = "card01";
	this.card01.setTransform(300,600,1,1,0,0,0,0,600);
	this.card01.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.card01).to({alpha:1},19).wait(21));

	// Layer_1
	this.card02 = new lib.Symbol6();
	this.card02.name = "card02";
	this.card02.setTransform(300,600,1,1,0,0,0,0,600);
	this.card02.alpha = 0;
	this.card02._off = true;

	this.timeline.addTween(cjs.Tween.get(this.card02).wait(19).to({_off:false},0).to({alpha:1},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


// stage content:
(lib._300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fade:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,29,99,599];
	// timeline functions:
	this.frame_0 = function() {
		// ------------- Variables ------------------- //
		root = this;
		loopNum = 0;
		
		
		/* EVENTOS MOUSEOVER */
		document.eventoRollOver = function(){
			root.btn.btn.gotoAndPlay("rollOver");
		
		}
		
		
		document.eventoRollOut = function(){
			root.btn.btn.gotoAndPlay("rollOut");
		
		}
	}
	this.frame_29 = function() {
		root.cards.gotoAndPlay ('loop');
	}
	this.frame_99 = function() {
		root.btn.gotoAndPlay ('loop');
	}
	this.frame_599 = function() {
		root.gotoAndPlay('fade');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(70).call(this.frame_99).wait(500).call(this.frame_599).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

	// legal
	this.instance = new lib.Symbol14("synched",0,false);
	this.instance.setTransform(188.5,581.3,1,1,0,0,0,0,6.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).wait(462).to({startPosition:19},0).to({alpha:0},18).wait(1));

	// btn
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(150,533.35,0.251,0.251,0,0,0,0,21.3);
	this.btn.alpha = 0;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(99).to({_off:false},0).to({scaleX:1.0452,scaleY:1.0452,y:533.3,alpha:1},20,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(-1)).wait(452).to({regX:0.1,regY:21.4,scaleX:1.2581,scaleY:1.2581,x:150.15,y:533.45,alpha:0},18,cjs.Ease.get(-1)).wait(1));

	// txt02
	this.instance_1 = new lib.Symbol16("synched",0,false);
	this.instance_1.setTransform(220,459.7,1,1,0,0,0,69,25.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).wait(517).to({startPosition:68},0).to({y:439.7,alpha:0},18,cjs.Ease.get(-1)).wait(1));

	// cards
	this.cards = new lib.tarjetas();
	this.cards.name = "cards";
	this.cards.setTransform(0,315,0.5,0.5,0,0,0,0,600);
	this.cards._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cards).wait(29).to({_off:false},0).to({y:305},40,cjs.Ease.get(1)).wait(507).to({y:285,alpha:0},15,cjs.Ease.get(-1)).wait(9));

	// txt01
	this.instance_2 = new lib.Symbol5("synched",0,false);
	this.instance_2.setTransform(124,129.2,1,1,0,0,0,0,19.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(557).to({startPosition:64},0).to({y:109.2,alpha:0},14,cjs.Ease.get(-1)).wait(15));

	// logo
	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(150,300,1,1,0,0,0,0,300);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},19).wait(547).to({y:290,alpha:0},13,cjs.Ease.get(-1)).wait(21));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgQtAtjQiRAAhmhnQhnhmAAiRIAAm4MAAAhJRQAAiRBnhmQBmhnCRAAMAhbAAAQCRAABnBnQBmBmAACRMAAABJRIAAG4QAACRhmBmQhnBniRAAg");
	mask.setTransform(150,299.425);

	// azul
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(54.55,-241.95,1,1,0,0,0,0,242);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:120.05},44,cjs.Ease.quadInOut).wait(522).to({y:-241.95},33,cjs.Ease.quadInOut).wait(1));

	// celeste
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(149.05,618.15,0.7302,1.9417,0,0,0,-1.9,326.6);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(600));

	// bg white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgexA1/MAAAhr9MA9jAAAMAAABr9g");
	this.shape_1.setTransform(150,288.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(600));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(103,243,244,390.9);
// library properties:
lib.properties = {
	id: 'A4DAFDFBAF18B64E9CD2D6DEB02E1B51',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/card01.png?1727418795393", id:"card01"},
		{src:"images/card02.png?1727418795393", id:"card02"},
		{src:"images/logo.png?1727418795393", id:"logo"}
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