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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

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


(lib.Symbol9u = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ADyCzIAAkWIA5AAIAAAWQAagaAkAAQAkAAAcAeQAcAeAAAsQAAAugcAeQgcAegmAAQglAAgXgdIAABlgAE4gmQgOAQAAAYQAAAZAOAQQAOAPAUABQAUgBAPgPQAPgQAAgZQAAgYgPgQQgOgRgVAAQgUAAgOARgAH0BiQgKgKAAgOQAAgOAKgKQAKgKAOABQAOgBAKAKQAJAKAAAOQAAAOgJAKQgKAJgOAAQgOAAgKgJgAAZBPQgegdAAgxQAAgvAegcQAggdAqAAQAqAAAeAZQAdAaAAAsIAAAeIiVAAQACARAPALQAPAKATAAQAeAAAUgUIAgAiQgjAigvgBQgvAAgegcgABFgtQgOAKgDASIBaAAQgCgTgLgKQgMgKgRAAQgRAAgOALgAjSBPQgfgdAAgxQAAgvAfgcQAggdAqAAQAqAAAeAZQAdAaAAAsIAAAeIiVAAQACARAPALQAPAKATAAQAeAAAUgUIAgAiQgjAigvgBQgvAAgegcgAimgtQgOAKgDASIBaAAQgCgTgLgKQgMgKgRAAQgRAAgOALgAn/BjQgZgIgUgQIAZgkQAgAZAkAAQALAAAHgEQAHgFAAgHQAAgHgJgGQgJgHgRgEIgagKQgJgEgMgHQgXgOAAgcQAAgdAXgRQAXgSAkAAQAkAAAkAYIgVAmQgbgSgaAAQgbAAAAAOQAAAJAJAEQAIAFAUAGIAbAJQAJADALAIQAVALAAAfQAAAegWASQgWATgjgBQgXABgYgJgAlVBpIAAkbIA6AAIAAEbg");
	this.shape.setTransform(-0.575,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANABQAOgBAKAKQAKAKAAANQAAAOgKAKQgKAJgOAAQgNAAgKgJg");
	this.shape_1.setTransform(51.8,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhpCNIAAkWIA6AAIAAAXQAagaAjAAQAkAAAcAeQAcAdAAAuQAAAsgcAfQgcAegmAAQglAAgWgeIAABlgAgihMQgOARAAAZQAAAZAOAPQAOAPAUAAQASAAAPgPQAPgPAAgZQAAgZgOgRQgPgQgTAAQgUAAgOAQg");
	this.shape_2.setTransform(34.175,6.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhIBNQgegdAAgwQAAgwAfgcQAfgdApAAQArAAAdAaQAeAZAAAtIAAAdIiVAAQADARAPALQAPAKASAAQAeAAATgUIAhAjQgjAhgvAAQguAAgfgdgAgcgvQgNAKgDASIBZAAQgCgTgLgKQgMgKgSAAQgQAAgOALg");
	this.shape_3.setTransform(9.15,3.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhHBNQgfgdAAgwQAAgwAfgcQAggdAoAAQArAAAdAaQAeAZAAAtIAAAdIiUAAQACARAPALQAPAKASAAQAeAAATgUIAhAjQgkAhguAAQguAAgegdgAgbgvQgOAKgDASIBZAAQgCgTgMgKQgLgKgSAAQgPAAgOALg");
	this.shape_4.setTransform(-14.45,3.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcCOIAAkbIA5AAIAAEbg");
	this.shape_5.setTransform(-31.875,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoBiQgZgJgUgQIAagjQAgAYAjAAQALAAAGgEQAHgEAAgIQAAgHgJgGQgJgGgQgFIgagKQgJgDgLgIQgXgNAAgdQAAgcAWgSQAXgSAjAAQAlAAAkAZIgVAmQgbgTgbAAQgZAAAAAPQAAAIAIAEQAJAFASAGIAcAJQAIAEALAHQAWAMAAAeQAAAegXASQgWATgiAAQgWAAgZgIg");
	this.shape_6.setTransform(-47.725,3.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9u, new cjs.Rectangle(-60.2,-26.1,120.5,52.2), null);


(lib.Symbol8u = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AFCB0QgWgTAAgfQAAggAXgPQAXgQAnAAIArAAIAAgBQAAgggjAAQgPAAgQAGQgRAGgLAIIgaglQApgdA0AAQAlAAAXATQAYASAAAoIAACDIg2AAIAAgZQgWAcggAAQghAAgWgTgAFlBBQAAALAJAGQAIAGAPAAQAPAAAMgKQAMgJAAgPIAAgKIgkAAQgjAAAAAVgAARBzQgTgTAAgiIAAhdIgYAAIAAgpIAYAAIAAg+IA4AAIAAA+IAyAAIAAApIgyAAIAABbQAAALAGAHQAGAHAJAAQAQAAALgPIAVAoQgbAZgdAAQgeAAgUgUgAnGBqQgegdAAgwQAAgwAfgcQAfgdAqAAQArAAAdAaQAeAZAAAsIAAAeIiWAAQADARAPALQAPAKATAAQAeAAATgUIAgAjQgjAhguAAQgvAAgfgdgAmagSQgOAKgCARIBaAAQgCgSgMgKQgMgKgRAAQgRAAgOALgACaCEIAAjMIA5AAIAAAbQALgNARgJQAQgIARgBIABA2IgLAAQgaAAgMASQgNARAAAeIAABZgAhyCEIgog5IgnA5IhCAAIBIhpIhEhjIBEAAIAjA2IAlg2IBDAAIhHBjIBJBpg");
	this.shape.setTransform(-0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8u, new cjs.Rectangle(-53.4,-26.1,106.9,52.2), null);


(lib.Symbol7u = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AGrB1QgfgdAAgwQAAgwAfgcQAggdAqAAQAqAAAeAaQAdAZAAAsIAAAeIiVAAQACARAPALQAPAKATAAQAeAAAUgUIAgAjQgjAhgvAAQgvAAgegdgAHXgHQgOAJgDASIBaAAQgCgTgLgJQgMgKgRAAQgRAAgOALgACfB+QgUgTAAgiIAAhdIgYAAIAAgpIAYAAIAAg+IA5AAIAAA+IAyAAIAAApIgyAAIAABbQAAALAGAHQAGAHAJAAQAQAAALgPIAVAoQgbAZgdAAQgeAAgUgUgAgIB+QgUgTAAgiIAAhdIgYAAIAAgpIAYAAIAAg+IA4AAIAAA+IAyAAIAAApIgyAAIAABbQAAALAGAHQAGAHAJAAQAQAAALgPIAVAoQgbAZgdAAQgeAAgTgUgApDB/QgWgTAAgfQAAggAXgPQAXgQAnAAIArAAIAAgBQAAgggjAAQgPAAgQAGQgRAGgLAHIgagkQApgdA0AAQAlAAAXATQAYASAAAoIAACDIg2AAIAAgZQgWAcggAAQghAAgWgTgAogBMQAAALAJAGQAIAGAPAAQAPAAAMgKQAMgJAAgPIAAgKIgkAAQgjAAAAAVgAEoCPIAAkaIA6AAIAAEagAiXCPIAAjMIA6AAIAADMgAkGCPIAAkaIA5AAIAAEagAiShYQgKgJAAgOQAAgPAKgJQAKgKAOAAQAOAAAKAKQAJAJAAAPQAAAOgJAJQgKAKgOAAQgOAAgKgKg");
	this.shape.setTransform(0.075,-0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7u, new cjs.Rectangle(-64.7,-26.1,129.4,52.2), null);


(lib.Symbol6u = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AFoCHQgagJgTgPIAZgkQAgAZAkAAQALAAAGgFQAIgEgBgHQABgIgKgGQgJgGgRgFIgagKQgJgDgLgHQgXgPAAgcQAAgcAWgSQAYgRAkgBQAkAAAkAZIgVAmQgbgSgbAAQgaAAAAAOQAAAIAIAEQAJAEATAGIAcAJQAJAEALAHQAVANAAAeQAAAfgWARQgXATgiAAQgXAAgYgIgABzByQgfgcAAgxQAAgvAfgdQAggcAqgBQAqAAAdAaQAeAaAAArIAAAfIiVAAQACAQAPALQAPAKATAAQAeAAAUgUIAfAjQgjAhguAAQgvAAgegdgACfgKQgOAKgDARIBaAAQgCgRgMgLQgMgJgRgBQgQAAgOALgAliBwQgfgeAAgsQAAgtAfgeQAfgeAugBQAvABAfAeQAfAegBAtQABAsgfAeQgfAfgvAAQguAAgfgfgAk6gDQgNAPAAAaQAAAZANAPQAPAQAWAAQAXAAAOgQQAOgPAAgZQAAgagOgPQgOgQgXAAQgWAAgPAQgAhICMIhRjNIA8AAIAyCBIAziBIA8AAIhRDNgAnlCMIAAkaIA5AAIAAEag");
	this.shape.setTransform(0.5,-0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6u, new cjs.Rectangle(-53.7,-26.1,107.5,52.2), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AHZCIIAAinIhICRIgkAAIhIiRIAACnIg7AAIAAkJIBQAAIBFCRIBFiRIBQAAIAAEJgAgXCIIAAkJIBcAAQA+AAAcAXQAcAYAAAyQAAAwgdAXQgdAXg7AAIgjAAIAABKgAAjAKIAoAAQAeAAAKgLQALgMAAgXQAAgXgOgKQgOgJgdAAIgiAAgAluCIIAAgsIBOhQQAXgXAKgOQALgPgBgNQAAgNgIgJQgJgJgNAAQgaAAgXAkIgvgdQATgdAWgPQAXgOAiAAQAiAAAbAVQAaAWAAAmQAAAVgLATQgLARgcAeIgvAyIBpAAIAAA1gAngCIIAAjXIgzAAIAAgyIBsAAIAAEJg");
	this.shape.setTransform(0.45,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-56.8,-26.1,116.69999999999999,52.2), null);


(lib.Symbol5u = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgrB4IAZgqQAPAOAOAAQAIAAAGgIQAGgIAAgJQAAgIhPjHIA8AAIAyB/IAyh/IA9AAIhfDwQgIAVgSAMQgSAMgWAAQgdAAgagZgALHAmQgegdAAgvQAAgxAfgcQAfgdAqAAQArAAAdAaQAeAZAAAtIAAAeIiWAAQADARAPAKQAPAKATAAQAeAAATgTIAgAiQgjAhguAAQgvAAgfgdgALzhWQgOAKgCASIBaAAQgCgTgMgKQgMgKgRAAQgRAAgOALgADdAkQgfgeAAgsQAAgtAfgeQAfgfAvAAQAuAAAfAfQAfAeAAAtQAAAsgfAeQgfAfguAAQgvAAgfgfgAEGhPQgOAQAAAZQAAAZAOAPQAOAQAXAAQAWAAAOgQQAOgPAAgZQAAgZgOgQQgOgQgWAAQgXAAgOAQgAmMAmQgfgdAAgvQAAgxAfgcQAggdAqAAQAqAAAeAaQAdAZAAAtIAAAeIiVAAQACARAPAKQAPAKATAAQAeAAAUgTIAgAiQgjAhgvAAQgvAAgegdgAlghWQgOAKgDASIBaAAQgCgTgLgKQgMgKgRAAQgRAAgOALgAtXAmQgfgdAAgvQAAgxAfgcQAggdAqAAQAqAAAeAaQAdAZAAAtIAAAeIiVAAQACARAPAKQAPAKATAAQAeAAAUgTIAgAiQgjAhgvAAQgvAAgegdgAsrhWQgOAKgDASIBaAAQgCgTgLgKQgMgKgRAAQgRAAgOALgAJHBAIAAhzQAAgwgjAAQgRAAgNANQgMAMAAAYIAAByIg6AAIAAjMIA6AAIAAAWQAagaAgAAQAgAAAWAXQAWAXAAAmIAAB8gAizBAIAAjMIA5AAIAAAbQALgNARgJQAQgIARgBIABA2IgLAAQgaAAgMASQgNASAAAeIAABYgApHBAIhRjNIA7AAIAzCBIA0iBIA7AAIhRDNg");
	this.shape.setTransform(0.025,5.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5u, new cjs.Rectangle(-93.1,-27.5,186.2,52.2), null);


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

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrB+QgTgTgBgiIAAhdIgYAAIAAgpIAYAAIAAg+IA6AAIAAA+IAyAAIAAApIgyAAIAABbQAAALAGAHQAGAHAJAAQAQAAALgPIAVAoQgbAZgdAAQgeAAgVgUgAmGB9QgWgWgBgpIAAh7IA6AAIAABuQAAAwAjAAQARAAANgNQAMgMAAgYIAAhtIA6AAIAADMIg6AAIAAgbQgWAeghAAQgiAAgXgVgAFkCPIAAkaIA5AAIAAEagAD0CPIAAjMIA6AAIAADMgAgfCPIAAh0QAAgvgjAAQgRAAgNANQgNALAAAYIAABzIg5AAIAAjMIA5AAIAAAWQAagaAhAAQAgAAAVAXQAWAXAAAlIAAB9gAD5hYQgKgJABgOQgBgPAKgJQAKgKAOAAQAOAAAKAKQAJAJAAAPQAAAOgJAJQgKAKgOAAQgOAAgKgKg");
	this.shape.setTransform(2.95,-2.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-43.8,-27.5,93.8,52.2), null);


(lib.Symbol4u = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AJmBqQgfgdAAgwQAAgwAfgcQAggdAqAAQAqAAAeAaQAdAZAAAsIAAAeIiVAAQACARAPALQAPAKATAAQAeAAAUgUIAgAjQgjAhgvAAQgvAAgegdgAKSgSQgOAKgDARIBaAAQgCgSgLgKQgMgKgRAAQgRAAgOALgAGoB/QgZgJgUgQIAagjQAgAYAkAAQALAAAGgEQAHgEAAgIQAAgHgJgGQgJgGgRgFIgagKQgJgDgLgIQgXgOAAgcQAAgcAWgSQAXgSAkAAQAlAAAkAZIgVAmQgbgTgbAAQgaAAAAAPQAAAIAIAEQAJAFATAFIAcAJQAIAEALAHQAWANAAAeQAAAegXASQgWATgiAAQgXAAgZgIgACsByQgWgWAAgpIAAh7IA5AAIAABuQAAAwAjAAQARAAANgNQAMgMAAgYIAAhtIA6AAIAADMIg6AAIAAgbQgVAegiAAQgiAAgXgVgAg/B0QgWgTAAgfQAAggAXgPQAXgQAnAAIAqAAIAAgBQAAgggiAAQgOAAgRAGQgQAGgMAIIgZglQAogdAzAAQAlAAAYATQAYASAAAoIAACDIg2AAIAAgZQgWAcggAAQggAAgXgTgAgbBBQAAALAIAGQAIAGAOAAQAQAAALgKQAMgJAAgPIAAgKIgkAAQghAAAAAVgAkUBqQgfgeAAgvQAAguAggdQAggeAsAAQAWAAAXAJQAXAJARASIgeAnQgKgMgOgGQgOgHgOAAQgXAAgQAPQgQAOAAAaQAAAaAQAPQAQAOAWAAQAcAAAXgdIAiAnQgnApgvAAQguAAgggdgAoBBqQgegdAAgwQAAgwAfgcQAfgdAqAAQArAAAdAaQAeAZAAAsIAAAeIiWAAQADARAPALQAPAKATAAQAeAAATgUIAgAjQgjAhguAAQgvAAgfgdgAnVgSQgOAKgCARIBaAAQgCgSgMgKQgMgKgRAAQgRAAgOALgAsUCEIAAkKIBnAAQAbAAAUAHQAUAGAKALQASAVAAAaQAAAfgVAPIgJAHIgKAEQAZAGAPAQQAOARAAAZQAAAcgTAVQgWAZg3AAgArZBRIApAAQAZAAANgGQANgGAAgTQAAgSgOgGQgNgGgeAAIgjAAgArZgaIAcAAQAZAAAMgFQAMgGAAgRQAAgSgLgGQgLgFgaAAIgdAAg");
	this.shape.setTransform(0.925,-2.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4u, new cjs.Rectangle(-84.2,-29,168.5,52.2), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AMjB+QgUgTAAgiIAAhdIgYAAIAAgpIAYAAIAAg+IA5AAIAAA+IAyAAIAAApIgyAAIAABbQAAALAHAHQAFAHAJAAQAQAAALgPIAWAoQgcAZgdAAQgeAAgUgUgAJaCKQgagJgTgQIAZgjQAgAYAkAAQALAAAHgEQAHgEAAgIQgBgHgIgGQgKgGgQgFIgbgKQgJgDgLgIQgXgOAAgcQAAgcAXgSQAXgSAjAAQAlAAAkAZIgVAmQgbgTgbAAQgaAAAAAPQAAAHAJAEQAIAFATAGIAcAJQAJAEAKAHQAWANAAAeQAAAegXASQgVATgjAAQgXAAgYgIgAFmB/QgXgTAAgfQAAggAYgPQAWgQAoAAIAqAAIAAgBQABgggjAAQgPAAgQAGQgRAGgLAHIgagkQAogdA0AAQAmAAAXATQAYASAAAoIAACDIg2AAIAAgZQgWAcggAAQghAAgWgTgAGJBMQAAALAIAGQAJAGAPAAQAPAAALgKQAMgJAAgPIAAgKIgkAAQgiAAAAAVgAj4B/QgWgTAAgfQAAggAXgPQAXgQAnAAIArAAIAAgBQAAgggjAAQgPAAgQAGQgQAGgMAHIgZgkQAogdA0AAQAlAAAYATQAXASAAAoIAACDIg2AAIAAgZQgVAcghAAQghAAgWgTgAjVBMQAAALAJAGQAIAGAPAAQAPAAAMgKQAMgJAAgPIAAgKIgkAAQgiAAgBAVgAncB1QgfgdAAgwQABgwAfgcQAfgdAqAAQAqAAAeAaQAdAZAAAsIAAAeIiVAAQACARAQALQAPAKASAAQAfAAATgUIAgAjQgjAhgvAAQguAAgfgdgAmwgHQgOAJgCASIBaAAQgCgTgMgJQgMgKgRAAQgRAAgOALgADNCPIAAihIgYAAIAAgqIAYAAIAAgMQgBgiAVgTQAUgUAeAAQAfAAAZAXIgVAmQgNgOgPAAQgJAAgFAGQgGAGAAANIAAANIAxAAIAAAqIgxAAIAAChgABfCPIg0hPIgTAUIAAA7Ig5AAIAAkaIA5AAIAACQIBAhDIBIAAIhOBSIBRB7gAqMCPIAAjMIA6AAIAAAbQAKgNARgJQAQgIARgBIABA2IgLAAQgaAAgMARQgMASAAAeIAABZgAuMCPIAAkKIBnAAQAbAAAUAHQATAGALALQARAVABAaQAAAfgVAPIgKAGIgJAEQAZAGAPARQAOARAAAZQAAAcgTAVQgWAZg3AAgAtRBcIApAAQAZAAANgGQANgGAAgTQAAgSgOgGQgNgGgeAAIgjAAgAtRgPIAcAAQAZAAAMgFQAMgGAAgRQAAgSgLgGQgLgFgaAAIgdAAg");
	this.shape.setTransform(3,-3.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-94.1,-29,191.39999999999998,52.2), null);


(lib.Symbol4_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FCB813").s().p("AgSATQgIgHAAgMQAAgLAIgHQAIgIAKAAQAMAAAHAIQAIAHAAALQAAAMgIAHQgHAIgMAAQgKAAgIgIg");
	this.shape.setTransform(62.325,-39.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB813").s().p("Ag4A8QgTgSABgiIAAhSIArAAIAABMQAAAkAeAAQAOAAAKgKQAKgKAAgTIAAhJIAqAAIAACTIgoAAIAAgSQgSAVgbAAQgeAAgQgQg");
	this.shape_1.setTransform(49.15,-44.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB813").s().p("Ag6A3QgXgWAAghQAAghAXgVQAXgWAjAAQAjAAAYAWQAXAVAAAhQAAAhgXAWQgYAWgjAAQgjAAgXgWgAgagdQgLALAAASQAAATALALQAKALAQAAQARAAAKgLQALgLAAgTQAAgSgLgLQgKgLgRAAQgQAAgKALg");
	this.shape_2.setTransform(30.675,-44.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB813").s().p("AhLBSIARgfQAUAQAeAAQApAAAAgoIAAgFQgRARgaAAQgdAAgRgQQgSgRAAghIAAhKIAsAAIAABEQAAAjAeAAQAOAAAJgJQAKgKAAgUIAAhAIArAAIAAB6QAABRhQAAQgtAAgagUg");
	this.shape_3.setTransform(11.975,-42.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB813").s().p("Ag2A3QgXgVAAgiQAAghAXgVQAWgWAiAAQAgAAAWAUQAWAVAAAjIhtAUQAKAWAdAAQAWAAAPgOIAXAZQgVAYgoAAQglAAgYgWgAgYghQgKALgBATIBIgPQgDgLgJgHQgKgHgNAAQgQAAgKAKg");
	this.shape_4.setTransform(-13.975,-44.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCB813").s().p("AAdBnIgug7IgUAVIAAAmIgrAAIAAjNIArAAIAAB0IA+g7IAzAAIg+A+IBEBWg");
	this.shape_5.setTransform(-30.15,-47.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCB813").s().p("AgUBtIAAiUIAqAAIAACUgAgShDQgIgGAAgLQAAgKAIgHQAHgHALAAQAMAAAIAHQAHAGAAAKQAAALgHAHQgIAHgMAAQgLAAgHgHg");
	this.shape_6.setTransform(-44.475,-48.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCB813").s().p("AgXBaQgOgNAAgZIAAibIAqAAIAACZQAAATATAAQAGAAAGgCIACAhQgMAEgLAAQgYAAgOgOg");
	this.shape_7.setTransform(-52.525,-47.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCB813").s().p("AhJBTIARgfQAUARAhAAQAqAAAAgpIAAgGQgRATgdAAQgfAAgVgUQgXgUAAgfQAAghAXgUQAVgTAfAAQAfgBASAWIAAgTIAoAAIAAB7QAABRhSAAQgvAAgagVgAgbg5QgLAKAAARQAAAQALAKQAMAJAPAAQASAAAKgJQAMgKAAgQQAAgRgMgKQgKgKgSAAQgPAAgMAKg");
	this.shape_8.setTransform(54.3,-72.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCB813").s().p("AAhBMIAAhOQAAgjgeAAQgPAAgKAJQgKALAAATIAABKIgrAAIAAiUIAqAAIAAASQARgUAeAAQAcgBARARQARARAAAgIAABVg");
	this.shape_9.setTransform(35.5,-75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCB813").s().p("AgUBtIAAiUIAqAAIAACUgAgShDQgIgGAAgLQAAgKAIgHQAHgHALAAQAMAAAIAHQAHAGAAAKQAAALgHAHQgIAHgMAAQgLAAgHgHg");
	this.shape_10.setTransform(21.725,-78.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCB813").s().p("AAeBnIgug7IgWAUIAAAnIgqAAIAAjMIAqAAIAABzIA+g7IA0AAIg+A+IBEBWg");
	this.shape_11.setTransform(9.6,-77.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCB813").s().p("AAhBMIAAhOQAAgjgeAAQgQAAgJAJQgKALAAATIAABKIgrAAIAAiUIApAAIAAASQASgUAfAAQAbgBARARQARARAAAgIAABVg");
	this.shape_12.setTransform(-10.05,-75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FCB813").s().p("AgVBtIAAiUIArAAIAACUgAgShDQgIgGAAgLQAAgKAIgHQAHgHALAAQAMAAAHAHQAIAGAAAKQAAALgIAHQgHAHgMAAQgLAAgHgHg");
	this.shape_13.setTransform(-23.825,-78.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCB813").s().p("AAhBnIAAhPQAAgigeAAQgPAAgKAJQgKAKAAAUIAABKIgrAAIAAjMIArAAIAABIQASgTAdABQAbgBARARQARARAAAfIAABWg");
	this.shape_14.setTransform(-37.5,-77.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCB813").s().p("AgVBiIAAicQgdAEgZAOIgPghQAogYAyAAQA0AAAnAYIgPAhQgZgOgcgEIAACcg");
	this.shape_15.setTransform(-55.925,-77.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AwyK8IAA13MAhlAAAIAAV3g");
	this.shape_16.setTransform(0,-60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-130.5,215,140);


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
	this.shape.graphics.f("#FFB812").s().p("AnLAyIAAhjIOXAAIAABjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-46,-5,92,10), null);


(lib.Symbol3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
	this.shape.graphics.f("#FFFFFF").s().p("AhOBTIBpiNIhbAAIAAgYICPAAIhpCNIBlAAIAAAYg");
	this.shape.setTransform(1.8,63.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHALIAAgVICPAAIAAAVg");
	this.shape_1.setTransform(2.15,77.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHALIAAgVICPAAIAAAVg");
	this.shape_2.setTransform(-19.525,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBTIgiguIgpAAIAAAuIgdAAIAAilIBHAAQAhAAAQASQAOAPAAAZQAAAqgjANIAoA0gAgoAOIAhAAQAUAAALgKQALgJAAgRQAAgPgIgKQgKgLgTAAIgmAAg");
	this.shape_3.setTransform(65.025,63.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+BTIAAilIB4AAIAAAYIhbAAIAAAyIBMAAIAAAWIhMAAIAAAtIBgAAIAAAYg");
	this.shape_4.setTransform(43.575,63.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BTIAAilIAeAAIAACOIBXAAIAAAXg");
	this.shape_5.setTransform(23.875,63.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhNBTIBoiNIhbAAIAAgYICOAAIhpCNIBnAAIAAAYg");
	this.shape_6.setTransform(-20.2,63.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA4BTIgRgkIhNAAIgQAkIgfAAIBGiTIgJgSIAgAAIBOClgAgcAXIA5AAIgdhAg");
	this.shape_7.setTransform(-42.625,63.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhJBTIAAilIBAAAQAiAAAYAYQAZAZAAAhQAAAigXAYQgXAZggAAgAgsA5IAmAAQAUAAAPgRQAQgRAAgXQAAgXgQgQQgQgRgWAAIgjAAg");
	this.shape_8.setTransform(-64.725,63.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAhAqIAAhAIgdA5IgHAAIgdg5IAABAIgOAAIAAhTIAWAAIAYA0IAZg0IAWAAIAABTg");
	this.shape_9.setTransform(52.825,89.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdAqIgIgTIgpAAIgIATIgPAAIAlhTIAOAAIAkBTgAgOAKIAdAAIgPghg");
	this.shape_10.setTransform(39.225,89.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUAqIAAgiIgoAAIAAAiIgOAAIAAhTIAOAAIAAAlIAoAAIAAglIAPAAIAABTg");
	this.shape_11.setTransform(26.65,89.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglAqIAAhTIAdAAQAVAAANALQAMAMAAASQAAAUgMALQgLALgYAAgAgXAdIAQAAQAOAAAIgIQAIgGAAgPQAAgcgfAAIgPAAg");
	this.shape_12.setTransform(14.325,89.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXAqIgug8IAAA8IgPAAIAAhTIAPAAIAvA+IAAg+IAOAAIAABTg");
	this.shape_13.setTransform(1.6,89.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAqIAAghIgfgyIAPAAIAWAmIAXgmIAPAAIgfAyIAAAhg");
	this.shape_14.setTransform(-10.775,89.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASAqIgSg4IAAAAIgRA4IgOAAIgdhTIAPAAIAVA8IATg8IALAAIATA8IAVg8IAPAAIgdBTg");
	this.shape_15.setTransform(-24.125,89.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAqIAAghIgfgyIAPAAIAWAmIAXgmIAPAAIgfAyIAAAhg");
	this.shape_16.setTransform(-44.225,89.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAgAAQAGAAAIACQAGACADAEQAGAHAAAIQAAAJgGAFIgGAEQAHAAAFAGQAEAFAAAIQAAAIgFAHQgIAIgRAAgAgSAdIAVAAQAJAAADgDQAEgCAAgHQAAgLgSAAIgTAAgAgSgGIASAAQAOAAAAgKQAAgGgEgDQgDgDgHAAIgSAAg");
	this.shape_17.setTransform(-54.425,89.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AwyI/IAAx9MAhlAAAIAAR9g");
	this.shape_18.setTransform(0,71.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,14.1,215,114.9);


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
	this.shape.graphics.f("#FFFFFF").s().p("EgXqAvCMAAAheDMAvVAAAMAAABeDg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-151.5,-300.9,303,601.9), null);


(lib.Symbol2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB812").s().p("AnLAyIAAhjIOXAAIAABjg");
	this.shape.setTransform(0,-49);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-54,92,10);


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
	this.instance = new lib.bg();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-150,-300,300,600), null);


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
	this.instance = new lib.Symbol3();
	this.instance.setTransform(0,-58.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-46,-63.9,92,10), null);


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

	this.actionFrames = [0,754];
	// timeline functions:
	this.frame_0 = function() {
		// ------------- Variables ------------------- //
		root = this;
		loopNum = 0;
		
		
		/* EVENTOS MOUSEOVER */
		document.eventoRollOver = function(){
			root.btn.gotoAndPlay("rollOver");
		}
		
		/* EVENTOS MOUSEOUT*/
		document.eventoRollOut = function(){
			root.btn.gotoAndPlay("rollOut");
		}
		
		root.btn.addEventListener("click", salida);
	}
	this.frame_754 = function() {
		root.gotoAndPlay('fade');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(754).call(this.frame_754).wait(1));

	// borde
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(755));

	// opacidad
	this.instance = new lib.Symbol2();
	this.instance.setTransform(150.5,301);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},26).to({_off:true},1).wait(696).to({_off:false},0).to({alpha:1},31).wait(1));

	// dazzler.png
	this.instance_1 = new lib.Symbol3_1("synched",0);
	this.instance_1.setTransform(147.95,473,0.7895,0.1883,0,0,0,-2,73);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(536).to({_off:false},0).to({scaleX:1,scaleY:1,x:148,y:373,alpha:1},44,cjs.Ease.quadInOut).wait(175));

	// makessense.png
	this.instance_2 = new lib.Symbol4_1("synched",0);
	this.instance_2.setTransform(146,358.95,0.6039,0.1339,0,0,0,-3.9,-60.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(572).to({_off:false},0).to({regX:-4,regY:-61,scaleX:1,scaleY:1,y:239,alpha:1},35,cjs.Ease.quadInOut).wait(148));

	// linea-amarilla
	this.instance_3 = new lib.Symbol2_1("synched",0);
	this.instance_3.setTransform(148,476,0.087,1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(333).to({_off:false},0).to({scaleX:1},42,cjs.Ease.get(0.8)).wait(154).to({startPosition:0},0).to({scaleX:0.1087,alpha:0},11).to({_off:true},1).wait(214));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_333 = new cjs.Graphics().p("EgQZApAMAAAhR/MAgzAAAMAAABR/g");
	var mask_graphics_540 = new cjs.Graphics().p("EgQZApAMAAAhR/MAgzAAAMAAABR/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(333).to({graphics:mask_graphics_333,x:150,y:301.475}).wait(207).to({graphics:mask_graphics_540,x:150,y:301.475}).wait(1).to({graphics:null,x:0,y:0}).wait(214));

	// txt26
	this.instance_4 = new lib.Symbol9u();
	this.instance_4.setTransform(89.35,379.35,0.871,0.871,0,0,0,0.1,0.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(353).to({_off:false},0).to({regX:0.4,x:150.4,alpha:1},22,cjs.Ease.quadOut).wait(154).to({regX:1,scaleX:0.0983,x:152,alpha:0},11).to({_off:true},1).wait(214));

	// txt25
	this.instance_5 = new lib.Symbol8u();
	this.instance_5.setTransform(88.35,340.1,0.871,0.871,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(349).to({_off:false},0).to({regX:0.4,x:149.35,alpha:1},22,cjs.Ease.quadOut).wait(158).to({regX:1.6,scaleX:0.0983,x:151.95,alpha:0},11).to({_off:true},1).wait(214));

	// txt24
	this.instance_6 = new lib.Symbol7u();
	this.instance_6.setTransform(91.5,300.05,0.871,0.871,0,0,0,0.1,0.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(345).to({_off:false},0).to({x:152.35,alpha:1},22,cjs.Ease.quadOut).wait(162).to({regX:1,scaleX:0.0983,x:152.3,alpha:0},11).to({_off:true},1).wait(214));

	// txt23
	this.instance_7 = new lib.Symbol6u();
	this.instance_7.setTransform(89.4,260.15,0.871,0.871,0,0,0,0.2,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(341).to({_off:false},0).to({regX:0.4,x:150.45,alpha:1},22,cjs.Ease.quadOut).wait(166).to({regX:1,scaleX:0.0983,x:152,alpha:0},11).to({_off:true},1).wait(214));

	// txt22
	this.instance_8 = new lib.Symbol5u();
	this.instance_8.setTransform(89.4,221.85,0.871,0.871,0,0,0,0.2,0.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(337).to({_off:false},0).to({regX:0.4,x:150.45,alpha:1},22,cjs.Ease.quadOut).wait(170).to({regX:1,scaleX:0.0983,x:152,alpha:0},11).to({_off:true},1).wait(214));

	// txt21
	this.instance_9 = new lib.Symbol4u();
	this.instance_9.setTransform(89.4,184.4,0.871,0.871,0,0,0,0.2,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(333).to({_off:false},0).to({regX:0.4,x:150.45,alpha:1},22,cjs.Ease.quadOut).wait(174).to({regX:1,scaleX:0.0983,x:152,alpha:0},11).to({_off:true},1).wait(214));

	// cuadro_blanco
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgAnAqMMAAAhDVIBP4OMAAABivg");
	this.shape_1.setTransform(147.5,268.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgCAAqAMAAAhEdIEB2GMAAABhHg");
	this.shape_2.setTransform(147.675,270.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgDWAp1MAAAhFjIGs0DMAAABfjg");
	this.shape_3.setTransform(147.85,273.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgEnAprMAAAhGmIJPyHMAAABeFg");
	this.shape_4.setTransform(148.025,276.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgF0AphMAAAhHlILpwSMAAABctg");
	this.shape_5.setTransform(148.15,278.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgG9ApYMAAAhIhIN7uiMAAABbXg");
	this.shape_6.setTransform(148.3,280.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgICApPMAAAhJZIQFs5MAAABaHg");
	this.shape_7.setTransform(148.45,282.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgJDApHMAAAhKPISHrVMAAABY7g");
	this.shape_8.setTransform(148.55,285.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgKAAo/MAAAhLAIUBp5MAAABX1g");
	this.shape_9.setTransform(148.675,286.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EgK5Ao4MAAAhLvIVzoiMAAABWzg");
	this.shape_10.setTransform(148.775,288.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgLtAoxMAAAhMaIXbnRMAAABV1g");
	this.shape_11.setTransform(148.9,290.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EgMeAorMAAAhNCIY9mHMAAABU9g");
	this.shape_12.setTransform(148.975,291.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EgNLAolMAAAhNmIaXlDMAAABUJg");
	this.shape_13.setTransform(149.075,293.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgN0AogMAAAhOIIbokEMAAABTZg");
	this.shape_14.setTransform(149.15,294.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgOYAobMAAAhOmIcxjMMAAABSvg");
	this.shape_15.setTransform(149.25,295.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("EgO5AoXMAAAhPAIdyibMAAABSJg");
	this.shape_16.setTransform(149.3,296.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EgPVAoUMAAAhPYIerhwMAAABRpg");
	this.shape_17.setTransform(149.35,297.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EgPtAoRMAAAhPsIfbhKMAAABRLg");
	this.shape_18.setTransform(149.4,298.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EgQCAoOMAAAhP8MAgEgAsMAAABQ1g");
	this.shape_19.setTransform(149.45,299.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("EgQSAoMMAAAhQKMAglgASMAAABQhg");
	this.shape_20.setTransform(149.475,299.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EgQeAoKMAAAhQTMAg9AAAMAAABQTg");
	this.shape_21.setTransform(149.5,299.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("EgQeAoKMAAAhQMMAg9gAKMAAABQZg");
	this.shape_22.setTransform(149.5,299.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("EgQeAoLMAAAhQEMAg9gAYMAAABQig");
	this.shape_23.setTransform(149.5,299.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("EgQeAoMMAAAhP3MAg9gArMAAABQtg");
	this.shape_24.setTransform(149.5,299.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("EgQeAoMMAAAhPlMAg9gBFMAAABQ9g");
	this.shape_25.setTransform(149.5,298.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("EgQeAoNMAAAhPRMAg9gBjMAAABRPg");
	this.shape_26.setTransform(149.5,298.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("EgQeAoOMAAAhO5MAg9gCHMAAABRlg");
	this.shape_27.setTransform(149.5,297.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("EgQeAoPMAAAhOeMAg9gCvMAAABR+g");
	this.shape_28.setTransform(149.5,296.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("EgQeAoRMAAAhOAMAg9gDdMAAABSag");
	this.shape_29.setTransform(149.5,295.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("EgQeAoTMAAAhNdMAg9gESMAAABS5g");
	this.shape_30.setTransform(149.5,295);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("EgQeAoUMAAAhM3MAg9gFKMAAABTbg");
	this.shape_31.setTransform(149.5,293.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("EgQeAoPMAAAhN8MAg9gDbMAAABSQg");
	this.shape_32.setTransform(149.5,296.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("EgQeAoKMAAAhO6MAg9gB1MAAABRLg");
	this.shape_33.setTransform(149.5,298.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("EgQeAoGMAAAhPzMAg9gAZMAAABQNg");
	this.shape_34.setTransform(149.5,300.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("EgQegoRMAg9AA2MAAABPXMgg9AAXg");
	this.shape_35.setTransform(149.5,300.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("EgQegonMAg9AB9MAAABOnMgg9AArg");
	this.shape_36.setTransform(149.5,298.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("EgQego6MAg9AC5MAAABN/Mgg9AA8g");
	this.shape_37.setTransform(149.5,298.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("EgQegpJMAg9ADqMAAABNeMgg9ABLg");
	this.shape_38.setTransform(149.5,297.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("EgQegpVMAg9AESMAAABNDMgg9ABWg");
	this.shape_39.setTransform(149.5,296.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("EgQegpeMAg9AEuMAAABMwMgg9ABeg");
	this.shape_40.setTransform(149.5,296.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("EgQegpjMAg9AFAMAAABMjMgg9ABkg");
	this.shape_41.setTransform(149.5,295.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("EgQegphMAg9AE3MAAABMrMgg9ABhg");
	this.shape_42.setTransform(149.5,296.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("EgQegpdMAg9AEpMAAABM1Mgg9ABdg");
	this.shape_43.setTransform(149.5,296.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("EgQegpXMAg9AEWMAAABNDMgg9ABWg");
	this.shape_44.setTransform(149.5,296.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("EgQegpQMAg9AD9MAAABNVMgg9ABQg");
	this.shape_45.setTransform(149.5,296.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("EgQegpIMAg9ADgMAAABNrMgg9ABGg");
	this.shape_46.setTransform(149.5,297.175);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("EgQego+MAg9AC9MAAABOFMgg9AA8g");
	this.shape_47.setTransform(149.5,297.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("EgQego0MAg9ACWMAAABOkMgg9AAug");
	this.shape_48.setTransform(149.5,298.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("EgQegonMAg9ABpMAAABPFMgg9AAhg");
	this.shape_49.setTransform(149.5,298.675);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("EgQegoZMAg9AA3MAAABPrMgg9AARg");
	this.shape_50.setTransform(149.5,299.275);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("EgPKgo6IeVCBMAAABPOI+VAmg");
	this.shape_51.setTransform(149.35,297.325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("EgN1gprIbrECMAAABOJI7rBNg");
	this.shape_52.setTransform(149.175,294.65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("EgMggqdIZBGEMAAABNDI5BB0g");
	this.shape_53.setTransform(149.025,292);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("EgLMgrOIWZIFMAAABL+I2ZCag");
	this.shape_54.setTransform(148.825,289.325);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("EgJ3gr/ITvKGMAAABK5IzvDAg");
	this.shape_55.setTransform(148.65,286.65);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("EgIigswIRFMHMAAABJ0IxFDmg");
	this.shape_56.setTransform(148.5,284);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("EgHOgthIOdOIMAAABIvIudEMg");
	this.shape_57.setTransform(148.35,281.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("EgF5guSILzQJMAAABHqIrzEyg");
	this.shape_58.setTransform(148.175,278.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("EgElgvDIJLSKMAAABGkIpLFZg");
	this.shape_59.setTransform(148.025,276.025);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("EgDQgv0IGhULMAAABFfImhGAg");
	this.shape_60.setTransform(147.825,273.35);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("EgB8gwmID5WNMAAABEaIj5Gmg");
	this.shape_61.setTransform(147.65,270.675);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("EgAngxXIBPYOMAAABDVIhPHMg");
	this.shape_62.setTransform(147.5,268.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},313).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},166).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[]},1).wait(213));

	// linea-amarilla
	this.instance_10 = new lib.Symbol12();
	this.instance_10.setTransform(147.45,421.15,0.0723,0.8313,0,0,0,1.4,0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(118).to({_off:false},0).to({regX:0.1,scaleX:0.9627,x:149.45},54,cjs.Ease.get(0.8)).wait(127).to({x:147.45},0).to({regX:0.5,scaleX:0.1087,x:149.55,alpha:0},13).to({_off:true},1).wait(442));

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_118 = new cjs.Graphics().p("EgQZApAMAAAhR/MAgzAAAMAAABR/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(118).to({graphics:mask_1_graphics_118,x:150,y:301.475}).wait(54).to({graphics:null,x:0,y:0}).wait(583));

	// txt13
	this.instance_11 = new lib.Symbol6();
	this.instance_11.setTransform(86.9,316.6,0.8836,0.8836,0,0,0,0.2,0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(126).to({_off:false},0).to({regX:0.4,x:148.8,alpha:1},22,cjs.Ease.quadOut).wait(151).to({regX:1.5,scaleX:0.0997,x:150.4,alpha:0},13).to({_off:true},1).wait(442));

	// txt12
	this.instance_12 = new lib.Symbol5();
	this.instance_12.setTransform(86.9,277.7,0.8836,0.8836,0,0,0,0.2,0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(122).to({_off:false},0).to({regX:0.4,x:148.8,alpha:1},22,cjs.Ease.quadOut).wait(155).to({regX:1.5,scaleX:0.0997,x:150.4,alpha:0},13).to({_off:true},1).wait(442));

	// txt11
	this.instance_13 = new lib.Symbol4();
	this.instance_13.setTransform(86.9,239.75,0.8836,0.8836,0,0,0,0.2,0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(118).to({_off:false},0).to({regX:0.4,x:148.8,alpha:1},22,cjs.Ease.quadOut).wait(159).to({regX:1.5,scaleX:0.0997,x:150.4,alpha:0},13).to({_off:true},1).wait(442));

	// cuadro_negro
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("EgAngxXIBPYOMAAABDVIhPHMg");
	this.shape_63.setTransform(147.5,268.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("EgCAgwjIEBWGMAAABEdIkBGkg");
	this.shape_64.setTransform(147.675,270.825);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("EgDWgvxIGsUDMAAABFjImsF9g");
	this.shape_65.setTransform(147.85,273.525);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("EgEngvCIJPSHMAAABGmIpPFYg");
	this.shape_66.setTransform(148.025,276.075);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("EgF0guWILpQSMAAABHlIrpE2g");
	this.shape_67.setTransform(148.15,278.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("EgG9gtrIN7OiMAAABIhIt7EUg");
	this.shape_68.setTransform(148.3,280.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("EgICgtDIQFM5MAAABJZIwFD1g");
	this.shape_69.setTransform(148.45,282.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("EgJDgsdISHLVMAAABKPIyHDXg");
	this.shape_70.setTransform(148.55,285.025);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("EgKAgr6IUBJ5MAAABLAI0BC8g");
	this.shape_71.setTransform(148.675,286.925);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("EgK5grZIVzIiMAAABLvI1zCig");
	this.shape_72.setTransform(148.775,288.725);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("EgLtgq6IXbHRMAAABMaI3bCKg");
	this.shape_73.setTransform(148.9,290.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("EgMegqeIY9GHMAAABNCI49B0g");
	this.shape_74.setTransform(148.975,291.925);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("EgNLgqEIaXFDMAAABNmI6XBgg");
	this.shape_75.setTransform(149.075,293.325);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("EgN0gpsIboEEMAAABOII7oBNg");
	this.shape_76.setTransform(149.15,294.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("EgOYgpXIcxDMMAAABOmI8xA9g");
	this.shape_77.setTransform(149.25,295.75);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("EgO5gpEIdyCbMAAABPAI9yAug");
	this.shape_78.setTransform(149.3,296.775);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("EgPVgo0IerBwMAAABPYI+rAhg");
	this.shape_79.setTransform(149.35,297.675);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("EgPtgolIfbBKMAAABPsI/bAVg");
	this.shape_80.setTransform(149.4,298.45);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("EgQCgoaMAgEAAsMAAABP8MggEAANg");
	this.shape_81.setTransform(149.45,299.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("EgQSgoQMAglAASMAAABQKMgglAAFg");
	this.shape_82.setTransform(149.475,299.575);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("EgQeAoKMAAAhQTMAg9AAAMAAABQTg");
	this.shape_83.setTransform(149.5,299.975);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("EgQeAoKMAAAhQMMAg9gAKMAAABQZg");
	this.shape_84.setTransform(149.5,299.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("EgQeAoLMAAAhQEMAg9gAYMAAABQig");
	this.shape_85.setTransform(149.5,299.55);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("EgQeAoMMAAAhP3MAg9gArMAAABQtg");
	this.shape_86.setTransform(149.5,299.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("EgQeAoMMAAAhPlMAg9gBFMAAABQ9g");
	this.shape_87.setTransform(149.5,298.725);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("EgQeAoNMAAAhPRMAg9gBjMAAABRPg");
	this.shape_88.setTransform(149.5,298.175);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("EgQeAoOMAAAhO5MAg9gCHMAAABRlg");
	this.shape_89.setTransform(149.5,297.525);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("EgQeAoPMAAAhOeMAg9gCvMAAABR+g");
	this.shape_90.setTransform(149.5,296.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("EgQeAoRMAAAhOAMAg9gDdMAAABSag");
	this.shape_91.setTransform(149.5,295.95);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("EgQeAoTMAAAhNdMAg9gESMAAABS5g");
	this.shape_92.setTransform(149.5,295);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("EgQeAoUMAAAhM3MAg9gFKMAAABTbg");
	this.shape_93.setTransform(149.5,293.975);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("EgQeAoPMAAAhN8MAg9gDbMAAABSQg");
	this.shape_94.setTransform(149.5,296.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("EgQeAoKMAAAhO6MAg9gB1MAAABRLg");
	this.shape_95.setTransform(149.5,298.25);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("EgQeAoGMAAAhPzMAg9gAZMAAABQNg");
	this.shape_96.setTransform(149.5,300.075);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("EgQegoRMAg9AA2MAAABPXMgg9AAXg");
	this.shape_97.setTransform(149.5,300.05);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("EgQegonMAg9AB9MAAABOnMgg9AArg");
	this.shape_98.setTransform(149.5,298.975);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("EgQego6MAg9AC5MAAABN/Mgg9AA8g");
	this.shape_99.setTransform(149.5,298.05);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("EgQegpJMAg9ADqMAAABNeMgg9ABLg");
	this.shape_100.setTransform(149.5,297.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("EgQegpVMAg9AESMAAABNDMgg9ABWg");
	this.shape_101.setTransform(149.5,296.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("EgQegpeMAg9AEuMAAABMwMgg9ABeg");
	this.shape_102.setTransform(149.5,296.25);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("EgQegpjMAg9AFAMAAABMjMgg9ABkg");
	this.shape_103.setTransform(149.5,295.975);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("EgQegphMAg9AE3MAAABMrMgg9ABhg");
	this.shape_104.setTransform(149.5,296.075);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("EgQegpdMAg9AEpMAAABM1Mgg9ABdg");
	this.shape_105.setTransform(149.5,296.275);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("EgQegpXMAg9AEWMAAABNDMgg9ABWg");
	this.shape_106.setTransform(149.5,296.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("EgQegpQMAg9AD9MAAABNVMgg9ABQg");
	this.shape_107.setTransform(149.5,296.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("EgQegpIMAg9ADgMAAABNrMgg9ABGg");
	this.shape_108.setTransform(149.5,297.175);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("EgQego+MAg9AC9MAAABOFMgg9AA8g");
	this.shape_109.setTransform(149.5,297.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("EgQego0MAg9ACWMAAABOkMgg9AAug");
	this.shape_110.setTransform(149.5,298.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("EgQegonMAg9ABpMAAABPFMgg9AAhg");
	this.shape_111.setTransform(149.5,298.675);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("EgQegoZMAg9AA3MAAABPrMgg9AARg");
	this.shape_112.setTransform(149.5,299.275);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("EgPKgo6IeVCBMAAABPOI+VAmg");
	this.shape_113.setTransform(149.35,297.325);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("EgN1gprIbrECMAAABOJI7rBNg");
	this.shape_114.setTransform(149.175,294.65);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("EgMggqdIZBGEMAAABNDI5BB0g");
	this.shape_115.setTransform(149.025,292);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("EgLMgrOIWZIFMAAABL+I2ZCag");
	this.shape_116.setTransform(148.825,289.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("EgJ3gr/ITvKGMAAABK5IzvDAg");
	this.shape_117.setTransform(148.65,286.65);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("EgIigswIRFMHMAAABJ0IxFDmg");
	this.shape_118.setTransform(148.5,284);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("EgHOgthIOdOIMAAABIvIudEMg");
	this.shape_119.setTransform(148.35,281.35);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("EgF5guSILzQJMAAABHqIrzEyg");
	this.shape_120.setTransform(148.175,278.675);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("EgElgvDIJLSKMAAABGkIpLFZg");
	this.shape_121.setTransform(148.025,276.025);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("EgDQgv0IGhULMAAABFfImhGAg");
	this.shape_122.setTransform(147.825,273.35);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("EgB8gwmID5WNMAAABEaIj5Gmg");
	this.shape_123.setTransform(147.65,270.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_63}]},89).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},161).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_63}]},1).to({state:[]},1).wait(442));

	// bg
	this.instance_14 = new lib.Symbol1();
	this.instance_14.setTransform(150,300,1.0733,1.0733);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1,scaleY:1},139,cjs.Ease.get(0.8)).wait(616));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(139,252.1,172,369.9);
// library properties:
lib.properties = {
	id: 'E7F8FFA30680744D9C644F57AD1AD8B3',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1773350060282", id:"bg"}
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