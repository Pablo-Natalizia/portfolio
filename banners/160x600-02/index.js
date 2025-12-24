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
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.burbuja = function() {
	this.initialize(img.burbuja);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,149);


(lib.degrade = function() {
	this.initialize(img.degrade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,78);


(lib.flor01 = function() {
	this.initialize(img.flor01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,108);


(lib.flor02 = function() {
	this.initialize(img.flor02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,108);


(lib.logoace = function() {
	this.initialize(img.logoace);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,85);


(lib.ola01 = function() {
	this.initialize(img.ola01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1220,482);


(lib.ola02 = function() {
	this.initialize(img.ola02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1220,482);


(lib.pack = function() {
	this.initialize(img.pack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,429);// helper functions:

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


(lib.Symbol2764 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.degrade();
	this.instance.setTransform(224.65,85.8,1.2426,3.8961,161.7115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2764, new cjs.Rectangle(-224.6,-202.7,449.29999999999995,405.5), null);


(lib.Symbol1564 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-124,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1564, new cjs.Rectangle(-124,-124,160,600), null);


(lib.Symbol664 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logoace();
	this.instance.setTransform(-43,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol664, new cjs.Rectangle(-43,-42.5,86,85), null);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
	this.shape.graphics.f("#FFFFFF").s().p("AEmCDQgKgDgIgHIAMgPQAGAFAHADQAGADAIABQAGAAAEgDQADgCABgEQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgFgEIgMgEQgJgCgHgDQgHgDgEgFQgEgGAAgJIAAAAQAAgIAEgHQAFgGAHgEQAHgDAKAAQAKAAAIADQAJADAHAGIgLAPIgMgHQgGgCgGAAQgGAAgDACQgDACAAAEIAAABQAAACACACQACADAEABIAMADQAKADAGAEQAHADADAFQAEAGAAAHQAAAKgFAGQgEAGgIAEQgHAEgKAAQgLgBgKgEgAClCDQgLgDgIgHIAMgPQAGAFAHADQAHADAIABQAGAAADgDQAEgCAAgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgGgEIgMgEQgJgCgHgDQgHgDgDgFQgEgGAAgJIAAAAQAAgIAEgHQAEgGAHgEQAIgDAJAAQAKAAAJADQAIADAHAGIgKAPIgMgHQgGgCgGAAQgGAAgDACQgDACAAAEIAAABQAAACACACQABADAFABIAMADQAJADAHAEQAGADAEAFQADAGAAAHQAAAKgEAGQgEAGgIAEQgIAEgKAAQgKgBgKgEgAoLCBQgLgGgGgLQgGgKAAgOIAAgBQAAgNAGgKQAHgLALgGQALgHAOAAQAOAAALAHQALAFAHAMQAGAKAAANQAAAOgGALQgHALgLAGQgLAHgOAAQgPAAgLgHgAoAA+QgGAFgDAGQgEAHAAAHQAAAJAEAHQADAGAHAEQAGAEAIAAQAIAAAHgEQAGgEADgGQAEgHAAgIIAAgBQAAgHgEgHQgDgGgHgFQgGgEgIAAQgIAAgHAEgAKiCGIAAhdIBGAAIAAASIgxAAIAAATIArAAIAAASIgrAAIAAAUIAyAAIAAASgAJQCGIAAhdIAVAAIAABKIAuAAIAAATgAHxCGIAAhdIArAAQAPABAIAGQAIAHAAALQAAAHgEAFQgDAFgFACQAIADAEAGQAFAFAAAKQAAAIgEAFQgFAGgHADQgIADgLAAgAIFB0IAYAAQAHAAAEgDQAEgCAAgFQAAgFgEgDQgEgCgHAAIgYAAgAIFBPIATAAQAHAAAEgDQAEgCAAgFQAAgFgEgDQgDgCgHAAIgUAAgAHFCGIAAhdIAVAAIAABdgAGECGIAAhKIgcAAIAAgTIBMAAIAAATIgcAAIAABKgADuCGIAAhdIAUAAIAABdgABACGIAAhdIBGAAIAAASIgyAAIAAATIAsAAIAAASIgsAAIAAAUIAyAAIAAASgAAZCGIgUgeIgPAAIAAAeIgVAAIAAhdIAqAAQAQAAAJAIQAJAJABAOQgBALgFAIQgFAGgJAEIAWAhgAgKBWIATAAQAIAAAEgDQAEgEAAgFIAAgBQAAgGgEgEQgFgDgHAAIgTAAgAhFCGIgUgeIgQAAIAAAeIgVAAIAAhdIArAAQAQAAAJAIQAJAJABAOQgBALgFAIQgFAGgJAEIAWAhgAhpBWIAUAAQAIAAAEgDQAEgEAAgFIAAgBQAAgGgEgEQgFgDgHAAIgUAAgAiqCGIAAhdIAVAAIAABdgAj2CGIgIgVIgnAAIgJAVIgVAAIAohdIATAAIAoBdgAkGBfIgMgeIgMAeIAYAAgAlmCGIAAg8IgaAnIAAAAIgagnIAAA8IgUAAIAAhdIAWAAIAYAnIAYgnIAWAAIAABdgApFCGIgUgeIgQAAIAAAeIgVAAIAAhdIArAAQAQAAAJAIQAJAJABAOQgBALgFAIQgFAGgJAEIAWAhgAppBWIAUAAQAIAAAEgDQAEgEAAgFIAAgBQAAgGgEgEQgFgDgHAAIgUAAgAqhCGIgJgVIgnAAIgIAVIgVAAIAohdIASAAIAoBdgAqxBfIgMgeIgNAeIAZAAgALVABQAHgBADgDQAEgDgBgGIgIAAIAAgUIAVAAIAAARQAAANgGAFQgGAGgMAAgACfgQQgKgHgHgKQgGgLAAgOIAAAAQAAgNAGgLQAGgLALgGQALgHAPABQAMAAAJADQAJAEAGAGIgNAQQgFgFgGgDQgGgDgHAAQgHAAgHAEQgGAEgDAGQgDAHAAAIQAAAJADAGQADAGAGAFQAGADAIAAQAIAAAGgCQAFgEAGgFIANANIgKAJQgGAEgHACQgGACgJAAQgOAAgLgGgAKEgMIAAhcIBGAAIAAASIgxAAIAAATIArAAIAAASIgrAAIAAATIAyAAIAAASgAIygMIAAhcIAVAAIAABKIAuAAIAAASgAHTgMIAAhcIArAAQAOAAAIAHQAIAGAAALQAAAIgDAFQgEAEgFADQAIADAFAGQAEAEAAAKQAAAIgEAGQgEAGgIADQgIACgKAAgAHngeIAYAAQAHABADgDQAEgCAAgGQAAgEgDgDQgEgDgIABIgXAAgAHnhDIASAAQAHAAAEgCQAEgDAAgEQAAgFgDgDQgEgDgGABIgUAAgAGngMIAAhcIAUAAIAABcgAFNgMIAAhcIBGAAIAAASIgxAAIAAATIArAAIAAASIgrAAIAAATIAyAAIAAASgAEngMIgUgdIgQAAIAAAdIgVAAIAAhcIArAAQAQAAAJAIQAJAIABAOQgBAMgFAHQgFAHgJADIAWAhgAEDg7IAUAAQAIAAAEgEQAEgEAAgFIAAgBQAAgGgEgEQgFgCgHAAIgUAAgABlgMIgtg6IAAA6IgUAAIAAhcIATAAIArA5IAAg5IAUAAIAABcgAgHgMIAAhcIATAAIAABcgAhTgMIgJgUIgnAAIgIAUIgVAAIAohcIASAAIAoBcgAhjgyIgMgfIgNAfIAZAAgAj5gMIAAgPIAzg7IgxAAIAAgSIBLAAIAAAQIgzA6IAzAAIAAASgAlPgMIAAhcIBGAAIAAASIgxAAIAAATIArAAIAAASIgrAAIAAATIAyAAIAAASgAl7gMIAAhcIAVAAIAABcgAnUgMIAAhcIAmAAQALAAAIAEQAIAEAEAHQAEAIAAAJQAAALgFAHQgFAHgIAEQgJADgKAAIgQAAIAAAcgAnAg6IAQAAQAIAAAEgDQAEgFAAgGQAAgGgEgEQgEgDgIAAIgQAAgAn/gMIAAg8IgaAoIAAAAIgagoIAAA8IgUAAIAAhcIAWAAIAYAnIAYgnIAWAAIAABcgApzgMIAAhcIAUAAIAABcgArGgMIAAhcIAUAAIAABKIAuAAIAAASgAGphwIAOgXIASAIIgRAPg");
	this.shape.setTransform(49.575,-14.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-34.2,-33.8,165.3,39.9), null);


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
	this.instance = new lib.burbuja();
	this.instance.setTransform(-20.35,-20.3,0.2727,0.2727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-20.3,40.6,40.7);


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
	this.instance = new lib.flor02();
	this.instance.setTransform(-44.85,-21.4,0.6505,0.6505,-19.4681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-44.8,89.6,89.69999999999999);


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
	this.instance = new lib.ola02();
	this.instance.setTransform(-610,-241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-610,-241,1220,482), null);


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
	this.instance = new lib.ola01();
	this.instance.setTransform(-610,-241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-610,-241,1220,482), null);


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

	// Layer_1
	this.instance = new lib.flor01();
	this.instance.setTransform(-54,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-54,-54,108,108), null);


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
	this.instance = new lib.flor01();
	this.instance.setTransform(-47.1,-47.1,0.8728,0.8728);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-47.1,-47.1,94.30000000000001,94.30000000000001), null);


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
	this.instance = new lib.flor02();
	this.instance.setTransform(-54,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-54,-54,108,108), null);


(lib.nuevo654 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhMBOQggggAAgtIAAgBQAAgtAggfQAfgfAtAAQAtAAAgAfQAgAfAAAtIAAABQAAAtggAgQggAegtAAQgsAAgggeg");
	this.shape.setTransform(92.8002,1.2176,0.3248,0.3248);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlPFCQiDiBAAi+IAAgDQAAi9CEiDQCHiFDIgBQDJABCGCEQCDCCAAC9IAAACQAAC+iECDQiHCGjIgBQjJAAiGiEgAi/jDQhJBPAAByIAAACQAABzBLBPQBMBSByAAQBzAABLhRQBKhNAAhzIAAgDQAAhyhLhQQhMhShyABQhzgBhMBRg");
	this.shape_1.setTransform(64.7389,-0.4063,0.3248,0.3248);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGHCQhNAAgghNIkdqpQgLgaAAgUQAAgoAcgcQAbgbApAAQAlAAAaATQAXARAMAfIDbI4IDfo+QAJgZAYgRQAagTAhAAQAoAAAbAaQAcAbABAnQAAAUgLAXIkfKvQggBNhOAAg");
	this.shape_2.setTransform(33.6328,-0.3008,0.3248,0.3248);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjwG3QgpAAgcgcQgcgcgBgoIAAqtQABgpAcgbQAcgcApAAIHlAAQAlgBAZAaQAZAZABAkQgBAkgZAYQgZAaglAAImGAAIAACyIFOAAQAkAAAaAZQAZAaAAAjQAAAjgZAZQgaAZgkAAIlOAAIAAC4IGNAAQAjAAAaAaQAZAaAAAjQAAAkgZAZQgZAYgkAAg");
	this.shape_3.setTransform(5.8963,-0.4063,0.3248,0.3248);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkYFgQhmhlAAjAIAAmcQAAgoAcgcQAcgcAoAAQApAAAcAcQAcAcAAAoIAAGXQABBqAyA5QAxA3BZAAQBaAAAxg1QAyg3AAhnIAAmeQAAgoAdgcQAcgcAoAAQApAAAcAcQAcAcAAAoIAAGWQAADEhoBnQhlBii0AAQizAAhjhig");
	this.shape_4.setTransform(-23.9351,-0.3008,0.3248,0.3248);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlqGjQgcgbAAgoIAAq7QAAgpAcgcQAcgcApAAIAUAAQAhAAAZAQQAVANAWAcIF0HpIAAnEQAAgoAcgcQAcgcAnAAQAoAAAcAcQAcAcAAAoIAAK6QAAApgcAcQgcAbgpAAIgHAAQggAAgZgPQgVgNgWgcImCn7IAAHXQAAAngcAcQgbAcgoAAQgoAAgcgcg");
	this.shape_5.setTransform(-55.4715,-0.4063,0.3248,0.3248);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhMBOQggggAAgtIAAgBQAAgtAggfQAggfAsAAQAuAAAfAfQAgAfAAAtIAAABQAAAtggAgQgfAeguAAQgsAAgggeg");
	this.shape_6.setTransform(-81.4948,1.2176,0.3248,0.3248);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D316F").s().p("Eg5hASSMAAAgkjMBqtAAAIAyAxQA9BAA6BMQC8DzBeELQCDF2hLFyQheHQmdGwg");
	this.shape_7.setTransform(-0.0028,-0.0004,0.3248,0.3248);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nuevo654, new cjs.Rectangle(-119.6,-38,239.2,76), null);


(lib.flor01copytrtr = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(25,-80,0.7577,0.7577);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flor01copytrtr, new cjs.Rectangle(25,-80,112.9,112.9), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol11("synched",0);
	this.instance.setTransform(-0.05,8.9,0.3612,0.3612);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:-4.45},24).to({scaleX:0.4595,scaleY:0.4595,x:-0.05,y:-7.8,alpha:0},25).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-24.7,40.6,41);


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
	this.instance = new lib.Symbol9("synched",0);
	this.instance.setTransform(24,21.05,0.283,0.283,0,0,0,24.1,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:23.9,regY:20.9,scaleX:1,scaleY:1,rotation:14.7,x:23.95,y:21},27).to({scaleX:0.4913,scaleY:0.4913,rotation:0,y:20.95,alpha:0.5},32).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.8,-43.1,75.9,77.6);


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
	this.instance = new lib.Symbol3();
	this.instance.setTransform(0,0,0.3828,0.3828);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4076,scaleY:0.4076,rotation:1.6551,alpha:0.0283},0).wait(1).to({scaleX:0.4322,scaleY:0.4322,rotation:3.2939,alpha:0.0564},0).wait(1).to({scaleX:0.4565,scaleY:0.4565,rotation:4.9165,alpha:0.0842},0).wait(1).to({scaleX:0.4806,scaleY:0.4806,rotation:6.5229,alpha:0.1117},0).wait(1).to({scaleX:0.5045,scaleY:0.5045,rotation:8.113,alpha:0.1389},0).wait(1).to({scaleX:0.5281,scaleY:0.5281,rotation:9.6868,alpha:0.1659},0).wait(1).to({scaleX:0.5514,scaleY:0.5514,rotation:11.2444,alpha:0.1926},0).wait(1).to({scaleX:0.5745,scaleY:0.5745,rotation:12.7858,alpha:0.219},0).wait(1).to({scaleX:0.5974,scaleY:0.5974,rotation:14.3109,alpha:0.2451},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:15.8198,alpha:0.2709},0).wait(1).to({scaleX:0.6424,scaleY:0.6424,rotation:17.3124,alpha:0.2965},0).wait(1).to({scaleX:0.6645,scaleY:0.6645,rotation:18.7888,alpha:0.3218},0).wait(1).to({scaleX:0.6864,scaleY:0.6864,rotation:20.2489,alpha:0.3468},0).wait(1).to({scaleX:0.7081,scaleY:0.7081,rotation:21.6928,alpha:0.3715},0).wait(1).to({scaleX:0.7295,scaleY:0.7295,rotation:23.1205,alpha:0.3959},0).wait(1).to({scaleX:0.7506,scaleY:0.7506,rotation:24.5319,alpha:0.4201},0).wait(1).to({scaleX:0.7715,scaleY:0.7715,rotation:25.927,alpha:0.444},0).wait(1).to({scaleX:0.7922,scaleY:0.7922,rotation:27.3059,alpha:0.4676},0).wait(1).to({scaleX:0.8126,scaleY:0.8126,rotation:28.6686,alpha:0.4909},0).wait(1).to({scaleX:0.8328,scaleY:0.8328,rotation:30.015,alpha:0.514},0).wait(1).to({scaleX:0.8528,scaleY:0.8528,rotation:31.3451,alpha:0.5368},0).wait(1).to({scaleX:0.8725,scaleY:0.8725,rotation:32.6591,alpha:0.5593},0).wait(1).to({scaleX:0.8919,scaleY:0.8919,rotation:33.9567,alpha:0.5815},0).wait(1).to({scaleX:0.9111,scaleY:0.9111,rotation:35.2382,alpha:0.6034},0).wait(1).to({scaleX:0.9301,scaleY:0.9301,rotation:36.5033,alpha:0.6251},0).wait(1).to({scaleX:0.9488,scaleY:0.9488,rotation:37.7523,alpha:0.6465},0).wait(1).to({scaleX:0.9673,scaleY:0.9673,rotation:38.985,alpha:0.6676},0).wait(1).to({scaleX:0.9856,scaleY:0.9856,rotation:40.2014,alpha:0.6884},0).wait(1).to({scaleX:1.0035,scaleY:1.0035,rotation:41.4016,alpha:0.709},0).wait(1).to({scaleX:1.0213,scaleY:1.0213,rotation:42.5855,alpha:0.7293},0).wait(1).to({scaleX:1.0388,scaleY:1.0388,rotation:43.7532,alpha:0.7493},0).wait(1).to({scaleX:1.0561,scaleY:1.0561,rotation:44.9047,alpha:0.769},0).wait(1).to({scaleX:1.0731,scaleY:1.0731,rotation:46.0399,alpha:0.7884},0).wait(1).to({scaleX:1.0899,scaleY:1.0899,rotation:47.1589,alpha:0.8076},0).wait(1).to({scaleX:1.1064,scaleY:1.1064,rotation:48.2616,alpha:0.8265},0).wait(1).to({scaleX:1.1227,scaleY:1.1227,rotation:49.348,alpha:0.8451},0).wait(1).to({scaleX:1.1387,scaleY:1.1387,rotation:50.4183,alpha:0.8634},0).wait(1).to({scaleX:1.1545,scaleY:1.1545,rotation:51.4722,alpha:0.8814},0).wait(1).to({scaleX:1.1701,scaleY:1.1701,rotation:52.51,alpha:0.8992},0).wait(1).to({scaleX:1.1854,scaleY:1.1854,rotation:53.5315,alpha:0.9167},0).wait(1).to({scaleX:1.2005,scaleY:1.2005,rotation:54.5367,alpha:0.9339},0).wait(1).to({scaleX:1.2153,scaleY:1.2153,rotation:55.5257,alpha:0.9509},0).wait(1).to({scaleX:1.2299,scaleY:1.2299,rotation:56.4984,alpha:0.9675},0).wait(1).to({scaleX:1.2442,scaleY:1.2442,rotation:57.4549,alpha:0.9839},0).wait(1).to({scaleX:1.2583,scaleY:1.2583,rotation:58.3952,alpha:1},0).wait(1).to({scaleX:1.2363,scaleY:1.2363,rotation:59.3134,alpha:0.964},0).wait(1).to({scaleX:1.2147,scaleY:1.2147,rotation:60.2156,alpha:0.9285},0).wait(1).to({scaleX:1.1935,scaleY:1.1935,rotation:61.1015,alpha:0.8938},0).wait(1).to({scaleX:1.1726,scaleY:1.1726,rotation:61.9714,alpha:0.8596},0).wait(1).to({scaleX:1.1522,scaleY:1.1522,rotation:62.825,alpha:0.8261},0).wait(1).to({scaleX:1.1321,scaleY:1.1321,rotation:63.6626,alpha:0.7933},0).wait(1).to({scaleX:1.1124,scaleY:1.1124,rotation:64.484,alpha:0.761},0).wait(1).to({scaleX:1.0931,scaleY:1.0931,rotation:65.2892,alpha:0.7294},0).wait(1).to({scaleX:1.0742,scaleY:1.0742,rotation:66.0783,alpha:0.6984},0).wait(1).to({scaleX:1.0557,scaleY:1.0557,rotation:66.8513,alpha:0.6681},0).wait(1).to({scaleX:1.0375,scaleY:1.0375,rotation:67.6081,alpha:0.6384},0).wait(1).to({scaleX:1.0198,scaleY:1.0198,rotation:68.3487,alpha:0.6093},0).wait(1).to({scaleX:1.0024,scaleY:1.0024,rotation:69.0733,alpha:0.5809},0).wait(1).to({scaleX:0.9854,scaleY:0.9854,rotation:69.7816,alpha:0.5531},0).wait(1).to({scaleX:0.9689,scaleY:0.9689,rotation:70.4739,alpha:0.5259},0).wait(1).to({scaleX:0.9526,scaleY:0.9526,rotation:71.1499,alpha:0.4994},0).wait(1).to({scaleX:0.9368,scaleY:0.9368,rotation:71.8099,alpha:0.4735},0).wait(1).to({scaleX:0.9214,scaleY:0.9214,rotation:72.4537,alpha:0.4482},0).wait(1).to({scaleX:0.9064,scaleY:0.9064,rotation:73.0813,alpha:0.4236},0).wait(1).to({scaleX:0.8917,scaleY:0.8917,rotation:73.6928,alpha:0.3996},0).wait(1).to({scaleX:0.8774,scaleY:0.8774,rotation:74.2882,alpha:0.3762},0).wait(1).to({scaleX:0.8635,scaleY:0.8635,rotation:74.8674,alpha:0.3535},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:75.4304,alpha:0.3314},0).wait(1).to({scaleX:0.8369,scaleY:0.8369,rotation:75.9774,alpha:0.3099},0).wait(1).to({scaleX:0.8242,scaleY:0.8242,rotation:76.5081,alpha:0.2891},0).to({_off:true},1).wait(290));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.6,-81.5,163.2,163.2);


(lib.flor01copytrtr646 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(20.5,-32.9,1,1,19.4994,0,0,2.5,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flor01copytrtr646, new cjs.Rectangle(-36.8,-141.8,137.8,137.8), null);


(lib.flor01copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flor01copy, new cjs.Rectangle(-54,-54,108,108), null);


(lib.cta64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {rollOver:94,loop:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_141 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(140).call(this.frame_141).wait(1));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALmBYQgXgOgNgWQgOgXAAgdIAAAAQAAgbAOgXQANgXAYgOQAXgOAfAAQAfAAAXAOQAXANAOAXQANAXAAAcIAAAAQAAAcgOAXQgNAXgXAOQgYANgfABQgegBgYgNgAL+g1QgOAJgHANQgIAOAAARIAAAAQAAARAIAOQAIAOANAIQANAJASAAQARAAAOgJQANgIAHgOQAIgNAAgSIAAAAQAAgQgIgOQgHgOgOgJQgNgIgSAAQgRAAgNAIgAwzBYQgYgOgNgWQgNgXAAgdIAAAAQAAgbANgXQAOgXAXgOQAYgOAeAAQAfAAAXAOQAYANANAXQANAXABAcIAAAAQgBAcgNAXQgNAXgYAOQgYANgeABQgfgBgXgNgAwcg1QgNAJgIANQgHAOAAARIAAAAQAAARAIAOQAHAOAOAIQANAJARAAQASAAANgJQANgIAIgOQAHgNAAgSIAAAAQAAgQgHgOQgIgOgNgJQgOgIgRAAQgSAAgNAIgA0EBYQgXgNgNgXQgNgXAAgdIAAAAQAAgbANgXQANgXAXgOQAXgOAeAAQAcAAASAJQASAIAOANIgcAgQgLgKgMgGQgNgGgOAAQgRAAgNAIQgMAJgIANQgHAOAAARIAAAAQAAARAHAOQAHAOANAIQANAJARAAQAQAAAMgHQAMgGAMgKIAbAcQgKAKgLAIQgMAIgOAEQgPAFgTAAQgdgBgWgNgAUJBiIgSgsIhTAAIgSAsIgtAAIBVjFIAoAAIBUDFgATnAQIgag/IgaA/IA0AAgAQjBiIgqg/IgiAAIAAA/IgrAAIAAjEIBaAAQAjABATARQAUARAAAeIAAABQAAAYgMAOQgLAPgTAHIAwBGgAPXgCIAsAAQAQAAAJgIQAIgHAAgNIAAAAQAAgOgJgHQgJgHgQAAIgrAAgAJiBiIAAhPIhPAAIAABPIgsAAIAAjEIAsAAIAABOIBPAAIAAhOIAsAAIAADEgAGcBiIgSgsIhTAAIgSAsIgtAAIBVjFIAoAAIBUDFgAF6AQIgag/IgaA/IA0AAgABiBiIgqg/IgiAAIAAA/IgrAAIAAjEIBZAAQAjABAUARQATARAAAeIAAABQAAAYgLAOQgMAPgTAHIAwBGgAAWgCIAsAAQAPAAAJgIQAJgHAAgNIAAAAQAAgOgJgHQgJgHgQAAIgrAAgAhgBiIgSgsIhTAAIgSAsIgtAAIBVjFIAoAAIBUDFgAiCAQIgag/IgaA/IA0AAgAlFBiIgqg/IgiAAIAAA/IgsAAIAAjEIBaAAQAjABAUARQATARAAAeIAAABQAAAYgLAOQgMAPgTAHIAwBGgAmRgCIAsAAQAPAAAJgIQAJgHAAgNIAAAAQAAgOgJgHQgJgHgQAAIgrAAgAp5BiIAAjEIBQAAQAYABARAIQAQAJAJAPQAJAPAAAVIAAAAQAAAXgKAOQgLAQgSAHQgSAIgWAAIghAAIAAA7gApOABIAiAAQARgBAJgHQAJgIAAgNIAAgBQAAgOgKgIQgJgHgQAAIgiAAgArUBiIAAh/Ig3BTIgBAAIg3hSIAAB+IgrAAIAAjEIAvAAIA0BUIAzhUIAvAAIAADEg");
	this.shape.setTransform(853.325,-166.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(142));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A52D9QgwAAAAgwIAAmZQAAgwAwAAMAztAAAQAwAAAAAwIAAGZQAAAwgwAAg");
	mask.setTransform(854.225,-166.775);

	// degrade.png
	this.instance = new lib.Symbol2764();
	this.instance.setTransform(593.3,-143.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96).to({_off:false},0).to({x:1099.85,y:-196.95},44,cjs.Ease.get(0.8)).to({_off:true},1).wait(1));

	// degrade.png
	this.instance_1 = new lib.Symbol2764();
	this.instance_1.setTransform(593.3,-143.9);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).to({x:1099.85,y:-196.95},44,cjs.Ease.get(0.8)).to({_off:true},1).wait(2));

	// degrade.png
	this.instance_2 = new lib.Symbol2764();
	this.instance_2.setTransform(593.3,-143.9);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({x:1099.85,y:-196.95},44,cjs.Ease.get(0.8)).to({_off:true},1).wait(3));

	// degrade.png
	this.instance_3 = new lib.Symbol2764();
	this.instance_3.setTransform(593.3,-143.9);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({_off:false},0).to({x:1099.85,y:-196.95},44,cjs.Ease.get(0.8)).to({_off:true},1).wait(47));

	// degrade.png
	this.instance_4 = new lib.Symbol2764();
	this.instance_4.setTransform(593.3,-143.9);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({x:1099.85,y:-196.95},44,cjs.Ease.get(0.8)).to({_off:true},1).wait(48));

	// degrade.png
	this.instance_5 = new lib.Symbol2764();
	this.instance_5.setTransform(593.3,-143.9);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48).to({_off:false},0).to({x:1099.85,y:-196.95},44,cjs.Ease.get(0.8)).to({_off:true},1).wait(49));

	// degrade.png
	this.instance_6 = new lib.Symbol2764();
	this.instance_6.setTransform(593.3,-143.9);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({x:1099.85,y:-196.95},44,cjs.Ease.get(0.8)).to({_off:true},1).wait(93));

	// degrade.png
	this.instance_7 = new lib.Symbol2764();
	this.instance_7.setTransform(593.3,-143.9);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({x:1099.85,y:-196.95},44,cjs.Ease.get(0.8)).to({_off:true},1).wait(94));

	// degrade.png
	this.instance_8 = new lib.Symbol2764();
	this.instance_8.setTransform(593.3,-143.9);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({x:1099.85,y:-196.95},44,cjs.Ease.get(0.8)).to({_off:true},1).wait(95));

	// btn
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D316F").s().p("A6JEPQgzAAAAg0IAAm2QAAgyAzAAMA0TAAAQAzAAAAAyIAAG2QAAA0gzAAg");
	this.shape_1.setTransform(854.175,-166.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(142));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(681.7,-194.7,345,55);


(lib.rwerwrw = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flor02
	this.instance = new lib.flor01copytrtr646("synched",0);
	this.instance.setTransform(-15.2,219.85,0.3891,0.3891,0,0,180,0.2,-0.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:0.2611,scaleY:0.2611,skewX:33.9798,skewY:213.9798,x:126.75,y:172.9,alpha:1},28).to({regX:0.4,regY:-0.4,scaleX:0.3891,scaleY:0.3891,skewX:-27.4967,skewY:152.5033,x:-80.2,y:49.9},26).to({regX:0,regY:-0.5,scaleX:0.4763,scaleY:0.4763,skewX:23.7049,skewY:203.7049,x:133.8,y:-53.05},24).to({regX:0.2,regY:-0.4,scaleX:0.3891,scaleY:0.3891,skewX:0,skewY:180,x:-36.45,y:-135.65},31).to({x:86.45,y:-183.8,alpha:0},15).to({_off:true},1).wait(991));

	// burbuja
	this.instance_1 = new lib.flor01copytrtr("synched",0);
	this.instance_1.setTransform(-15.2,219.85,0.3891,0.3891,0,0,180,0.2,-0.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:126.75,y:172.85,alpha:1},23).to({x:-80.2,y:49.9},27).to({x:133.75,y:-53.1},31).to({regX:0.4,regY:-0.6,scaleX:0.2507,scaleY:0.2507,x:-72.2,y:-157.15},25).to({regX:0,regY:-0.5,scaleX:0.2041,scaleY:0.2041,x:92.15,y:-196.35,alpha:0},21).to({_off:true},1).wait(988));

	// flor01
	this.instance_2 = new lib.flor01copy("synched",0);
	this.instance_2.setTransform(-15.2,219.85,0.3891,0.3891,0,0,180,0.2,-0.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,regY:-0.5,scaleX:0.2451,scaleY:0.2451,skewX:26.9861,skewY:206.9861,x:126.75,y:172.85,alpha:1},19).to({regX:0.4,regY:-0.2,scaleX:0.5513,scaleY:0.5513,skewX:-45.7042,skewY:134.2958,x:-80.25,y:49.9},27).to({regY:-0.8,scaleX:0.2571,scaleY:0.2571,skewX:53.9409,skewY:233.9409,x:133.8,y:-53.15},39).to({regY:-0.7,scaleX:0.2128,scaleY:0.2128,skewX:-42.248,skewY:137.752,x:-72.25,y:-157.15},18).to({regX:0.3,regY:-0.6,scaleX:0.1706,scaleY:0.1706,skewX:0,skewY:180,x:75.9,y:-204.55,alpha:0},27).to({_off:true},1).wait(985));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.8,-238.8,295,479.8);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_90
	this.instance = new lib.Symbol5("synched",0,false);
	this.instance.setTransform(-27.9,-84.7,1.2244,1.2244,-20.7101,0,0,18.4,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106).to({_off:false},0).wait(354).to({startPosition:60},0).to({_off:true},1).wait(794).to({_off:false},0).wait(182));

	// flor01.png
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(40.8,-198.9,0.3012,0.3012,0,0,0,0.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).to({_off:true},70).wait(1268));

	// flor01.png
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(6.5,-193.05,0.3012,0.3012,0,0,0,0,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({_off:true},65).wait(1278));

	// Layer_2
	this.instance_3 = new lib.Symbol5("synched",0,false);
	this.instance_3.setTransform(110.75,-87.25,1.1761,1.1761,62.2021,0,0,-0.1,-0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(93).to({_off:false},0).wait(367).to({startPosition:60},0).to({_off:true},1).wait(794).to({_off:false},0).wait(182));

	// flor01.png
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(-42.75,-164.7,0.4113,0.4113,0,0,0,-0.2,-0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(87).to({_off:false},0).to({_off:true},65).wait(1285));

	// flor01.png
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.setTransform(-54.25,-123.15,0.3327,0.3327,0,0,0,0,-0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(81).to({_off:false},0).to({_off:true},65).wait(1291));

	// flor01.png
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.setTransform(-5.35,-123.15,0.2698,0.2698,0,0,0,0,-0.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({_off:false},0).to({_off:true},65).wait(1297));

	// flor01.png
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(34,-132.75,0.3799,0.3799,0,0,0,0.1,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(68).to({_off:false},0).to({_off:true},65).wait(1304));

	// Layer_92
	this.instance_8 = new lib.Symbol10("synched",0,false);
	this.instance_8.setTransform(107.05,-64.95);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65).to({_off:false},0).wait(395).to({startPosition:50},0).to({_off:true},1).wait(794).to({_off:false},0).wait(182));

	// flor01.png
	this.instance_9 = new lib.Symbol1("synched",0);
	this.instance_9.setTransform(59.95,-109,0.3799,0.3799,0,0,0,0.1,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(62).to({_off:false},0).to({_off:true},65).wait(1310));

	// flor01.png
	this.instance_10 = new lib.Symbol1("synched",0);
	this.instance_10.setTransform(84.15,-52.8,0.5334,0.5334,0,0,0,0.1,-0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(56).to({_off:false},0).to({_off:true},65).wait(1316));

	// flor01.png
	this.instance_11 = new lib.Symbol1("synched",0);
	this.instance_11.setTransform(138.1,-16.85,0.6797,0.6797,0,0,180);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50).to({_off:false},0).to({_off:true},65).wait(1322));

	// Layer_89
	this.instance_12 = new lib.Symbol5("synched",0,false);
	this.instance_12.setTransform(-90.4,109.85,1.1761,1.1761,-38.4796);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(42).to({_off:false},0).wait(418).to({startPosition:60},0).to({_off:true},1).wait(794).to({_off:false},0).wait(182));

	// Layer_91
	this.instance_13 = new lib.Symbol10("synched",0,false);
	this.instance_13.setTransform(-76.05,95.45);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(39).to({_off:false},0).wait(421).to({startPosition:50},0).to({_off:true},1).wait(794).to({_off:false},0).wait(182));

	// flor01.png
	this.instance_14 = new lib.Symbol1("synched",0);
	this.instance_14.setTransform(-70.9,69.15,0.5847,0.5847,0,0,180,-0.1,0);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(36).to({_off:false},0).to({_off:true},71).wait(1330));

	// flor01.png
	this.instance_15 = new lib.Symbol1("synched",0);
	this.instance_15.setTransform(-57.85,134.2,0.82,0.82,0,0,0,0,0.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({_off:false},0).to({_off:true},71).wait(1336));

	// burbuja.png
	this.instance_16 = new lib.Symbol10("synched",0,false);
	this.instance_16.setTransform(-22.65,152.3);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(25).to({_off:false},0).to({_off:true},71).wait(1341));

	// flor02.png
	this.instance_17 = new lib.Symbol5("synched",0,false);
	this.instance_17.setTransform(-34.8,189.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(20).to({_off:false},0).to({_off:true},71).wait(1346));

	// flor01.png
	this.instance_18 = new lib.Symbol1("synched",0);
	this.instance_18.setTransform(20.1,189.1,0.9751,0.9751,0,0,180);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(16).to({_off:false},0).to({_off:true},71).wait(1350));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgJWA0gQisgPiHg3QhLgfh9hJQiKhRg8gcQhIgjiIguQiUg0g9gaQiuhLiPh6QiTh9hgifQhChtgchqQggh6AUhsQAShkA8hVQA9hVBYgyQBDgmBMgPQgcgwgdg9IhLikQgthhgng/QgTgfhKhnQg6hSgcg3Qhdi1AgjWQAhjVCOiRQhihrgSidQgRiZBBiJQA+iCB8heQB3haCUglQBngaBbAJQBpAKBHA4QAqAhAbAtQBZgvBtAfQBzAhA5BgQAIAOAHAQQAZAbAQAfQgNArgEAyQgNCHAuBvQgHArgFA1QgKB/APBTQAUB0BABKQAqAwA8AcQA8AcBAgBQBAAAA7gbQA5AjBCAGQAQACA1gBQAsAAAaAFQAqAJA/AkQBMAsAZAKQAyAUBIAGIB8AFICHAIQBSAFA1gBQCdgFBlg9QBCgnAqhBQAshDAFhKQAEgwgNgvQAggkAmgXQBQgxB0AHQBVAFB6AmQBdAdA7AdQBRAmA0A0QAgAhArBAQAzBMAVAZQAcAiBAA7QBCA8AcAhQAuA3AkBLQAeA9AbBTQAYBMAIA5QAKBKgPA9QgRBIg0A5Qg0A5hGAXQhGAYhLgOQhMgNg5gvQgxB5ghA9IgXAmQBdAHBFAeQCEA4BKCKQBJCGgQCUQgTC7iXCsQh3CIjOCBQl6DumsCMQmsCMm8AfQhbAHhPAAQhQAAhEgHgAYFB7QjDgii5hCQhWgeg0ghQhHgtggg9QgZgvgDg6QgmgLgjgWQg5glgjg4QgZgqgRg+IgYhuQgqjFhTi5QhRA8hpAMQgygnhAgOIgNgSQgjgvgwgdQgxgdg5gJQgYgDgWAAIgIgBQhQgNhOAhQhOAhguBCQgcApgNAwIhJgTQgygMhmgWQhZgVg8gWQgfgLg7gaQg8gagegLQgYgJhIgXQg8gTgigPQiMg8hDhtQgbgqgLgvQgzgsgrg7QhDA/hsANQhcAMhtgZQi4gribhzQibhzhfiiQg8hngShmQgVh1AnhfQASgsA2hMQA3hNASgpQAZg5AViNQAUiDAjg/QAohFBIgoQBKgpBPAEQArACAoAPQAvgbAngVQBrg5BfgiQCthADWgTQCvgQDfAMQBqAHEiAcQDEATCEAHIAVggQAmguBDgaQA0gUBPgKQBNgKA4ADQBJAEA3AYQA6AaArAyQAqAyAQA+QAHAaABAbQAVgOAVgKQBKgiBVALQBWAMA/A0IATARQAMAIAKAEQAOAFAUgCQALgBAXgFQAtgHAsAHQAMgPAGgLQAQgYANgrQASg9AEgKQAhhUBQg0QBSg0BZAIQBgAIBcBMQBEA4BNBoQFiHeBAHBQALBRANDkQAKDDAYBwQAPBFA7C1QAyCcAOBfQAcDIhDDnQg0C0h4DjQg8BygyBCQhHBchSAuQhdA2iBAHIgoABQhXAAhtgSg");
	var mask_graphics_460 = new cjs.Graphics().p("EgJWA0gQisgPiHg3QhLgfh9hJQiKhRg8gcQhIgjiIguQiUg0g9gaQiuhLiPh6QiTh9hgifQhChtgchqQggh6AUhsQAShkA8hVQA9hVBYgyQBDgmBMgPQgcgwgdg9IhLikQgthhgng/QgTgfhKhnQg6hSgcg3Qhdi1AgjWQAhjVCOiRQhihrgSidQgRiZBBiJQA+iCB8heQB3haCUglQBngaBbAJQBpAKBHA4QAqAhAbAtQBZgvBtAfQBzAhA5BgQAIAOAHAQQAZAbAQAfQgNArgEAyQgNCHAuBvQgHArgFA1QgKB/APBTQAUB0BABKQAqAwA8AcQA8AcBAgBQBAAAA7gbQA5AjBCAGQAQACA1gBQAsAAAaAFQAqAJA/AkQBMAsAZAKQAyAUBIAGIB8AFICHAIQBSAFA1gBQCdgFBlg9QBCgnAqhBQAshDAFhKQAEgwgNgvQAggkAmgXQBQgxB0AHQBVAFB6AmQBdAdA7AdQBRAmA0A0QAgAhArBAQAzBMAVAZQAcAiBAA7QBCA8AcAhQAuA3AkBLQAeA9AbBTQAYBMAIA5QAKBKgPA9QgRBIg0A5Qg0A5hGAXQhGAYhLgOQhMgNg5gvQgxB5ghA9IgXAmQBdAHBFAeQCEA4BKCKQBJCGgQCUQgTC7iXCsQh3CIjOCBQl6DumsCMQmsCMm8AfQhbAHhPAAQhQAAhEgHgAYFB7QjDgii5hCQhWgeg0ghQhHgtggg9QgZgvgDg6QgmgLgjgWQg5glgjg4QgZgqgRg+IgYhuQgqjFhTi5QhRA8hpAMQgygnhAgOIgNgSQgjgvgwgdQgxgdg5gJQgYgDgWAAIgIgBQhQgNhOAhQhOAhguBCQgcApgNAwIhJgTQgygMhmgWQhZgVg8gWQgfgLg7gaQg8gagegLQgYgJhIgXQg8gTgigPQiMg8hDhtQgbgqgLgvQgzgsgrg7QhDA/hsANQhcAMhtgZQi4gribhzQibhzhfiiQg8hngShmQgVh1AnhfQASgsA2hMQA3hNASgpQAZg5AViNQAUiDAjg/QAohFBIgoQBKgpBPAEQArACAoAPQAvgbAngVQBrg5BfgiQCthADWgTQCvgQDfAMQBqAHEiAcQDEATCEAHIAVggQAmguBDgaQA0gUBPgKQBNgKA4ADQBJAEA3AYQA6AaArAyQAqAyAQA+QAHAaABAbQAVgOAVgKQBKgiBVALQBWAMA/A0IATARQAMAIAKAEQAOAFAUgCQALgBAXgFQAtgHAsAHQAMgPAGgLQAQgYANgrQASg9AEgKQAhhUBQg0QBSg0BZAIQBgAIBcBMQBEA4BNBoQFiHeBAHBQALBRANDkQAKDDAYBwQAPBFA7C1QAyCcAOBfQAcDIhDDnQg0C0h4DjQg8BygyBCQhHBchSAuQhdA2iBAHIgoABQhXAAhtgSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:44.6668,y:41.0592}).wait(460).to({graphics:mask_graphics_460,x:44.6668,y:41.0592}).wait(1).to({graphics:null,x:0,y:0}).wait(976));

	// Layer_38
	this.instance_19 = new lib.rwerwrw("synched",0,false);
	this.instance_19.setTransform(-22.7,225.35,1.0161,1.0161,0.0103,0,0,-28.4,200.8);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(72).to({_off:false},0).wait(388).to({startPosition:388},0).to({_off:true},1).wait(164).to({_off:false,startPosition:553},0).to({_off:true},514).wait(298));

	// Layer_36
	this.instance_20 = new lib.rwerwrw("synched",0,false);
	this.instance_20.setTransform(-38.55,245.35,1.1379,1.1379,0.01,0,0,-28.2,200.8);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(58).to({_off:false},0).wait(402).to({startPosition:402},0).to({_off:true},1).wait(164).to({_off:false,startPosition:567},0).to({_off:true},514).wait(298));

	// Layer_37
	this.instance_21 = new lib.rwerwrw("synched",0,false);
	this.instance_21.setTransform(-26.85,233.5,1.1379,1.1379,0.01,0,0,-28.3,200.7);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(43).to({_off:false},0).wait(417).to({startPosition:417},0).to({_off:true},1).wait(164).to({_off:false,startPosition:582},0).to({_off:true},514).wait(298));

	// Layer_38
	this.instance_22 = new lib.rwerwrw("synched",0,false);
	this.instance_22.setTransform(-26.85,257.2,1.1379,1.1379,0.01,0,0,-28.3,200.8);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(29).to({_off:false},0).wait(431).to({startPosition:431},0).to({_off:true},1).wait(164).to({_off:false,startPosition:596},0).to({_off:true},514).wait(298));

	// Layer_27
	this.instance_23 = new lib.rwerwrw("synched",0,false);
	this.instance_23.setTransform(-30.35,282.1,1.2591,1.2591,0.0104,0,0,-28.3,200.8);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(14).to({_off:false},0).wait(446).to({startPosition:446},0).to({_off:true},1).wait(164).to({_off:false,startPosition:611},0).to({_off:true},514).wait(298));

	// Layer_1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_36 = new cjs.Graphics().p("AjFEpQhSh7AAiuQAAitBSh7QBSh7BzAAQB0AABSB7QBSB7AACtQAACuhSB7QhSB7h0AAQhzAAhSh7g");
	var mask_1_graphics_37 = new cjs.Graphics().p("AjiEpQheh7AAiuQAAitBeh7QBeh7CEAAQCFAABeB7QBeB7AACtQAACuheB7QheB7iFAAQiEAAheh7g");
	var mask_1_graphics_38 = new cjs.Graphics().p("Aj/EpQhqh7AAiuQAAitBqh7QBqh7CVAAQCWAABqB7QBqB7AACtQAACuhqB7QhqB7iWAAQiVAAhqh7g");
	var mask_1_graphics_39 = new cjs.Graphics().p("AkbEpQh3h7AAiuQAAitB3h7QB1h7CmAAQCnAAB2B7QB2B7AACtQAACuh2B7Qh2B7inAAQimAAh1h7g");
	var mask_1_graphics_40 = new cjs.Graphics().p("Ak4EpQiCh7AAiuQAAitCCh7QCBh7C3AAQC4AACCB7QCBB7AACtQAACuiBB7QiCB7i4AAQi3AAiBh7g");
	var mask_1_graphics_41 = new cjs.Graphics().p("AlVEpQiOh7AAiuQAAitCOh7QCNh7DIAAQDJAACNB7QCOB7AACtQAACuiOB7QiNB7jJAAQjIAAiNh7g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AlyEpQiah7AAiuQAAitCah7QCZh7DZAAQDZAACbB7QCZB7AACtQAACuiZB7QibB7jZAAQjZAAiZh7g");
	var mask_1_graphics_43 = new cjs.Graphics().p("AmPEpQimh7AAiuQAAitCmh7QCmh7DpAAQDqAACmB7QCmB7AACtQAACuimB7QimB7jqAAQjpAAimh7g");
	var mask_1_graphics_44 = new cjs.Graphics().p("AmsEpQiyh7AAiuQAAitCyh7QCyh7D6AAQD7AACyB7QCyB7AACtQAACuiyB7QiyB7j7AAQj6AAiyh7g");
	var mask_1_graphics_45 = new cjs.Graphics().p("AnJEpQi9h7gBiuQABitC9h7QC+h7ELAAQEMAAC+B7QC9B7ABCtQgBCui9B7Qi+B7kMAAQkLAAi+h7g");
	var mask_1_graphics_46 = new cjs.Graphics().p("AnmEpQjJh7AAiuQAAitDJh7QDKh7EcAAQEdAADKB7QDJB7AACtQAACujJB7QjKB7kdAAQkcAAjKh7g");
	var mask_1_graphics_47 = new cjs.Graphics().p("AoDEpQjVh7AAiuQAAitDVh7QDWh7EtAAQEuAADWB7QDVB7AACtQAACujVB7QjWB7kuAAQktAAjWh7g");
	var mask_1_graphics_48 = new cjs.Graphics().p("AogEpQjhh7AAiuQAAitDhh7QDih7E+AAQE/AADhB7QDiB7AACtQAACujiB7QjhB7k/AAQk+AAjih7g");
	var mask_1_graphics_49 = new cjs.Graphics().p("AgTHDQlQgMjoiNQjoiNAJi6QAIi7Dzh8QD0h7FPANQFQAMDoCNQDoCNgIC6QgJC7jzB8QjeBvkpAAIg8gBg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AgnHjQlhgZjuifQjuigAQjHQAQjIEGh7QEFh8FgAZQFiAaDuCfQDuCfgQDHQgRDIkFB8QjYBmkYAAQg6AAg8gEg");
	var mask_1_graphics_51 = new cjs.Graphics().p("Ag7ICQlygmj0ixQj1ixAZjUQAYjVEXh8QEXh8FyAmQFyAlD2CyQD0CxgZDUQgYDVkXB8QjWBfkLAAQhSAAhXgJg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AhOIhQmEgyj7jDQj7jEAhjhQAhjiEph8QEph8GDAyQGEAzD7DDQD7DEghDhQghDikpB8QjTBYkBAAQhpAAhvgPg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AhhJBQmVg/kCjVQkBjWAojuQApjvE8h9QE7h8GUA/QGVA/EBDVQEBDWgpDuQgpDvk6B9QjSBSj5AAQh+AAiGgVg");
	var mask_1_graphics_54 = new cjs.Graphics().p("Ah1JgQmnhLkHjoQkIjoAxj7QAxj8FNh8QFNh9GmBMQGmBLEHDoQEIDogxD7QgxD8lNB8QjQBOjxAAQiTAAiegdg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AiJKAQm4hYkOj6QkOj6A5kIQA6kJFfh9QFfh9G2BYQG3BZEPD5QEOD6g6EIQg5EJlfB9QjOBJjsAAQimAAi1gkg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AidKfQnIhlkVkMQkUkMBBkVQBCkWFxh9QFxh9HHBlQHJBlEUELQEVEMhCEVQhBEWlxB+QjMBFjnAAQi7AAjLgtg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AixK+QnZhxkbkeQkbkeBKkiQBJkjGDh9QGDh+HZByQHZBxEbEeQEbEehKEiQhJEjmDB+QjLBBjjAAQjNAAjhg2g");
	var mask_1_graphics_58 = new cjs.Graphics().p("AjELeQnrh+kikwQkgkwBRkvQBSkwGVh+QGVh+HqB+QHqB+EiExQEhEvhSEwQhSEwmVB9QjKA/jfAAQjhAAj0g/g");
	var mask_1_graphics_59 = new cjs.Graphics().p("AjYL9Qn8iLkolBQknlCBak9QBak9Gmh+QGnh+H7CLQH8CKEoFDQEnFBhaE9QhaE9mmB+QjJA8jdAAQjzAAkJhJg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AjsMcQoNiXkvlUQktlTBilKQBjlKG4h+QG5h/IMCXQINCYEvFUQEtFThiFKQhiFKm5B/QjIA5jaAAQkFAAkehTg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AkAM7Qoeijk1lmQkzlmBqlXQBqlXHLh+QHKh/IeCkQIeCkE1FmQE0FmhrFXQhqFXnLB+QjHA3jXAAQkYAAkyhdg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AkTNbQowiwk7l4Qk6l4BylkQBzlkHch/QHdh/IvCxQIvCwE7F5QE6F3hyFkQhzFkncB/QjHA1jWAAQkqAAlEhng");
	var mask_1_graphics_63 = new cjs.Graphics().p("AknN7QpBi9lBmKQlBmKB7lxQB7lxHuh/QHvh/JAC8QJAC+FBGKQFBGKh7FxQh6FxnvB/QjHAzjUAAQk7AAlYhxg");
	var mask_1_graphics_64 = new cjs.Graphics().p("Ak7OaQpSjKlImcQlHmcCDl+QCDl+IAh/QIBiAJRDKQJSDJFIGdQFHGciDF+QiDF+oBB/QjGAyjSAAQlOAAlrh8g");
	var mask_1_graphics_65 = new cjs.Graphics().p("AlOO5QpkjWlOmuQlNmuCLmLQCLmLISiAQITh/JiDVQJjDXFOGvQFOGuiMGLQiKGLoTB/QjGAwjRAAQlfAAl+iHg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AliPYQp1jilUnBQlUnACTmYQCUmYIkiAQIkiAJ0DjQJ0DjFUHBQFUHAiTGYQiTGYolCAQjFAujQAAQlxAAmRiSg");
	var mask_1_graphics_460 = new cjs.Graphics().p("AliPYQp1jilUnBQlUnACTmYQCUmYIkiAQIkiAJ0DjQJ0DjFUHBQFUHAiTGYQiTGYolCAQjFAujQAAQlxAAmRiSg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_1_graphics_36,x:83,y:-8.95}).wait(1).to({graphics:mask_1_graphics_37,x:88.075,y:-10.05}).wait(1).to({graphics:mask_1_graphics_38,x:93.175,y:-11.1}).wait(1).to({graphics:mask_1_graphics_39,x:98.25,y:-12.2}).wait(1).to({graphics:mask_1_graphics_40,x:103.325,y:-13.3}).wait(1).to({graphics:mask_1_graphics_41,x:108.425,y:-14.35}).wait(1).to({graphics:mask_1_graphics_42,x:113.5,y:-15.45}).wait(1).to({graphics:mask_1_graphics_43,x:118.575,y:-16.55}).wait(1).to({graphics:mask_1_graphics_44,x:123.675,y:-17.6}).wait(1).to({graphics:mask_1_graphics_45,x:128.75,y:-18.7}).wait(1).to({graphics:mask_1_graphics_46,x:133.825,y:-19.8}).wait(1).to({graphics:mask_1_graphics_47,x:138.925,y:-20.85}).wait(1).to({graphics:mask_1_graphics_48,x:144,y:-21.95}).wait(1).to({graphics:mask_1_graphics_49,x:137.3983,y:-26.1292}).wait(1).to({graphics:mask_1_graphics_50,x:130.753,y:-30.3172}).wait(1).to({graphics:mask_1_graphics_51,x:124.15,y:-34.4986}).wait(1).to({graphics:mask_1_graphics_52,x:117.5054,y:-38.6877}).wait(1).to({graphics:mask_1_graphics_53,x:110.9,y:-42.85}).wait(1).to({graphics:mask_1_graphics_54,x:104.2816,y:-47.025}).wait(1).to({graphics:mask_1_graphics_55,x:97.658,y:-51.2207}).wait(1).to({graphics:mask_1_graphics_56,x:91.0337,y:-55.3827}).wait(1).to({graphics:mask_1_graphics_57,x:84.4332,y:-59.5694}).wait(1).to({graphics:mask_1_graphics_58,x:77.7988,y:-63.7687}).wait(1).to({graphics:mask_1_graphics_59,x:71.1736,y:-67.9307}).wait(1).to({graphics:mask_1_graphics_60,x:64.55,y:-72.1227}).wait(1).to({graphics:mask_1_graphics_61,x:57.9345,y:-76.2968}).wait(1).to({graphics:mask_1_graphics_62,x:51.3232,y:-80.4665}).wait(1).to({graphics:mask_1_graphics_63,x:44.685,y:-84.654}).wait(1).to({graphics:mask_1_graphics_64,x:38.075,y:-88.8406}).wait(1).to({graphics:mask_1_graphics_65,x:31.4479,y:-93.007}).wait(1).to({graphics:mask_1_graphics_66,x:24.8355,y:-97.193}).wait(394).to({graphics:mask_1_graphics_460,x:24.8355,y:-97.193}).wait(1).to({graphics:null,x:0,y:0}).wait(976));

	// ola02.png
	this.instance_24 = new lib.Symbol8();
	this.instance_24.alpha = 0.5;
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(36).to({_off:false},0).wait(424).to({_off:true},1).wait(976));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AjlD+QhfhpAAiVQAAiUBfhqQBghpCFAAQCHAABfBpQBfBqAACUQAACVhfBpQhfBqiHAAQiFAAhghqg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AlIEWQiKhggCiVQgDiTCIh0QCJhzDCgNQDBgOCLBfQCMBgACCVQACCUiJBzQiIBzjCAOQgXABgXAAQilAAh6hTg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AmrEtQi2hWgEiUQgEiUCwh9QCyh9D+gbQD9gcC3BWQC3BWAECUQAECUixB9QixB8j+AcQg+AHg6AAQiyAAiLhBg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AoNFEQjjhLgFiVQgHiUDZiGQDbiGE6gqQE5gpDiBMQDkBMAFCUQAHCUjaCGQjaCGk6AqQhuAOhkAAQi3AAiTgxg");
	var mask_2_graphics_4 = new cjs.Graphics().p("ApwFcQkOhCgIiVQgIiTECiQQEDiQF2g3QF1g3EOBCQEPBBAICVQAJCTkECQQkCCQl2A3QipAZiWAAQixAAiUgjg");
	var mask_2_graphics_5 = new cjs.Graphics().p("ArTFzQk5g4gLiVQgKiTEriZQEsiaGyhFQGwhFE6A4QE7A4ALCUQAKCUksCZQksCZmxBFQjvAnjMAAQikAAiNgZg");
	var mask_2_graphics_6 = new cjs.Graphics().p("As2GKQllgugNiUQgMiUFUiiQFVijHuhTQHshTFmAuQFnAuAMCUQANCUlWCiQlUCjntBTQk9A1kFAAQiSAAiAgQg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AuYGhQmSgkgOiUQgOiTF9isQF+itIphhQIohgGSAkQGTAkAOCUQAOCTl+CsQl9CtopBhQmSBGlDAAQh5AAhtgKg");
	var mask_2_graphics_8 = new cjs.Graphics().p("Av7G4Qm9gagQiUQgRiTGmi1QGni3JlhuQJkhvG9AbQG/AaAQCTQARCUmoC1QmlC3plBuQnvBZmDAAQhcAAhVgFg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AxeHQQnogRgTiTQgTiTHPi/QHQjBKhh8QKgh8HpARQHqAQATCTQATCTnRC/QnODBqhB8QpRBtnEAAQg8AAg6gBg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AzAHnQoVgHgUiTQgViTH3jIQH6jKLciKQLciKIUAGQIXAHAVCSQAUCUn5DJQn3DJrdCKQq7CEoHAAIgwAAg");
	var mask_2_graphics_11 = new cjs.Graphics().p("A96FuQgXiSIgjTQIjjTMYiYQMXiYJBgDQJCgEAXCTQAXCTojDTQogDTsYCXQsXCYpDAEIgXAAQoqAAgWiQg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EggLAGPQgYiSJJjdQJLjcNVimQNSilJsgNQJvgOAZCSQAZCTpMDdQpJDctTCmQtUClpuAOIhhABQoOAAgXiHg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EgibAGxQgbiSJyjmQJ0jmOQi0QOPizKYgXQKagYAbCSQAbCTp0DnQpyDluQCzQuPC0qaAYQhaADhPAAQnzAAgXh/g");
	var mask_2_graphics_14 = new cjs.Graphics().p("EgksAHSQgdiSKbjwQKdjvPMjCQPLjBLDghQLHghAdCSQAdCSqeDxQqaDvvMDBQvLDBrGAiQiCAGhrAAQncAAgYh4g");
	var mask_2_graphics_15 = new cjs.Graphics().p("EglTAJIQgei3KmksQKpksPcjzQPbjxLPgqQLTgqAdC3QAeC4qpEtQqmErvcDyQvbDyrSAqQiFAIhtAAQnjAAgYiWg");
	var mask_2_graphics_16 = new cjs.Graphics().p("Egl7AK9QgejbKxlpQK0lpPtkjQPrkiLbgyQLfgyAeDbQAeDdq0FpQqxFovsEjQvsEjreAyQiGAJhvAAQnsAAgZi0g");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgmiAMzQgfkBK8mlQLAmmP9lTQP7lTLog6QLqg7AeEAQAfEBq/GnQq9Gkv8FTQv8FUrrA7QiIALhxAAQnzAAgZjSg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EgnKAOoQgfklLIniQLKniQOmEQQMmELzhCQL2hDAfElQAfEmrLHjQrHHhwNGDQwMGFr3BDQiLANhyAAQn7AAgajxg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EgnxAQeQgglKLTofQLWoeQem2QQcm0L/hKQMChMAfFKQAgFLrWIfQrSIeweG0QwcG2sDBLQiNAOh1AAQoDAAgZkOg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EgoZASUQgglvLepbQLhpbQunnQQtnkMLhTQMOhUAgFuQAgFwriJdQrdJZwuHlQwtHnsOBUQiPAPh2AAQoMAAgaksg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EgpAAUJQghmTLpqYQLsqYQ/oXQQ9oVMXhbQMahdAhGUQAgGVrsKZQrpKWw+IWQw+IXsaBcQiSARh3AAQoUAAgalLg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EgpoAV/Qghm5L0rUQL4rURPpIQRNpGMjhjQMmhmAhG5QAhG6r4LVQr0LTxOJGQxOJIsmBlQiUASh5AAQocAAgblog");
	var mask_2_graphics_23 = new cjs.Graphics().p("EgqPAX0QgindMAsRQMDsRRfp4QRep3MuhsQMyhtAiHdQAhHesDMTQr/MPxfJ3QxeJ5syBtQiWAUh7AAQokAAgbmHg");
	var mask_2_graphics_24 = new cjs.Graphics().p("Egq3AZqQgioCMLtNQMOtORwqpQRuqnM6h1QM+h2AiICQAiIEsONPQsLNLxvKoQxuKqs+B2QiYAVh9AAQosAAgcmlg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EgrfAbfQgionMWuJQMZuKSArbQR/rXNGh9QNKh+AiImQAjIpsaOLQsVOJyALYQx/LatKB/QiaAXh/AAQozAAgdnEg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EgsGAdVQgjpMMhvGQMlvHSQsLQSPsINSiFQNWiHAjJMQAjJNslPIQshPFyQMJQyPMLtWCHQicAYiBAAQo7AAgdnhg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EgsuAfKQgjpwMswDQMwwDShs8QSfs5NeiNQNiiQAjJxQAkJyswQFQssQByhM6QyfM7tiCQQifAaiCAAQpEAAgdoAg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EgtVAhAQgkqVM3w/QM8xASxttQSvtqNqiVQNuiYAkKVQAkKXs7RCQs4Q+ywNqQywNstuCYQihAciEAAQpMAAgdoeg");
	var mask_2_graphics_29 = new cjs.Graphics().p("Egt9Ai1Qgkq6NDx7QNGx9TCudQS/ubN2idQN6ihAkK6QAlK8tHR+QtCR7zBOaQzAOet6CgQijAdiGAAQpUAAgeo8g");
	var mask_2_graphics_30 = new cjs.Graphics().p("EgukAkrQglrfNOy4QNSy5TSvOQTQvLOCimQOFipAlLfQAlLhtSS6QtOS3zRPMQzQPOuHCpQikAeiIAAQpcAAgepag");
	var mask_2_graphics_31 = new cjs.Graphics().p("EgvMAmgQglsDNZz1QNdz2Tiv/QThv7OOivQORixAmMEQAlMGtdT3QtZTzziP8QzhP/uSCyQinAgiJAAQpkAAgfp5g");
	var mask_2_graphics_32 = new cjs.Graphics().p("EgvzAoWQgmspNk0xQNp0yTywwQTxwsOai3QOdi6AmMpQAmMrtoU0QtlUvzyQtQzxQwueC6QipAhiLAAQpsAAgfqWg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EgwbAqLQgmtNNw1tQNz1vUDxhQUBxdOmi/QOqjCAmNNQAmNQt0VxQtvVs0CRdQ0CRhuqDCQirAjiOAAQpzAAggq1g");
	var mask_2_graphics_34 = new cjs.Graphics().p("EgxCAsBQgntyN72qQN/2sUTyRQURyNOyjIQO2jKAmNyQAnN0t/WuQt6Wo0TSOQ0SSSu2DKQiuAliPAAQp7AAggrTg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EgxqAt2QgnuWOG3nQOK3oUkzCQUiy+O9jQQPCjTAnOXQAnOZuKXqQuGXl0jS/Q0iTCvCDTQiwAmiRAAQqEAAggrxg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EgyRAvsQgou8OR4jQOW4lU0zzQUyzuPJjYQPOjcAnO8QAoO+uVYnQuRYh00TwQ0yTzvODbQiyAoiTAAQqMAAggsPg");
	var mask_2_graphics_460 = new cjs.Graphics().p("EgyRAvsQgou8OR4jQOW4lU0zzQUyzuPJjYQPOjcAnO8QAoO+uVYnQuRYh00TwQ0yTzvODbQiyAoiTAAQqMAAggsPg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-66.45,y:236}).wait(1).to({graphics:mask_2_graphics_1,x:-62.3008,y:235.4441}).wait(1).to({graphics:mask_2_graphics_2,x:-58.175,y:234.8592}).wait(1).to({graphics:mask_2_graphics_3,x:-54.05,y:234.3}).wait(1).to({graphics:mask_2_graphics_4,x:-49.9236,y:233.7302}).wait(1).to({graphics:mask_2_graphics_5,x:-45.7751,y:233.1576}).wait(1).to({graphics:mask_2_graphics_6,x:-41.6484,y:232.5968}).wait(1).to({graphics:mask_2_graphics_7,x:-37.5001,y:232.0382}).wait(1).to({graphics:mask_2_graphics_8,x:-33.377,y:231.4663}).wait(1).to({graphics:mask_2_graphics_9,x:-29.2501,y:230.8997}).wait(1).to({graphics:mask_2_graphics_10,x:-25.1021,y:230.3249}).wait(1).to({graphics:mask_2_graphics_11,x:-20.9752,y:229.7739}).wait(1).to({graphics:mask_2_graphics_12,x:-16.8502,y:229.2168}).wait(1).to({graphics:mask_2_graphics_13,x:-12.7232,y:228.6431}).wait(1).to({graphics:mask_2_graphics_14,x:-8.5753,y:228.0657}).wait(1).to({graphics:mask_2_graphics_15,x:-9.6253,y:227.3907}).wait(1).to({graphics:mask_2_graphics_16,x:-10.6753,y:226.7315}).wait(1).to({graphics:mask_2_graphics_17,x:-11.7253,y:226.0565}).wait(1).to({graphics:mask_2_graphics_18,x:-12.7753,y:225.364}).wait(1).to({graphics:mask_2_graphics_19,x:-13.8253,y:224.7056}).wait(1).to({graphics:mask_2_graphics_20,x:-14.8503,y:224.0306}).wait(1).to({graphics:mask_2_graphics_21,x:-15.9003,y:223.3473}).wait(1).to({graphics:mask_2_graphics_22,x:-16.9503,y:222.6888}).wait(1).to({graphics:mask_2_graphics_23,x:-18.0003,y:222.013}).wait(1).to({graphics:mask_2_graphics_24,x:-19.0503,y:221.338}).wait(1).to({graphics:mask_2_graphics_25,x:-20.0983,y:220.6871}).wait(1).to({graphics:mask_2_graphics_26,x:-21.1483,y:219.9871}).wait(1).to({graphics:mask_2_graphics_27,x:-22.1983,y:219.312}).wait(1).to({graphics:mask_2_graphics_28,x:-23.2483,y:218.6363}).wait(1).to({graphics:mask_2_graphics_29,x:-24.2983,y:217.9778}).wait(1).to({graphics:mask_2_graphics_30,x:-25.3483,y:217.2944}).wait(1).to({graphics:mask_2_graphics_31,x:-26.3734,y:216.6195}).wait(1).to({graphics:mask_2_graphics_32,x:-27.4234,y:215.961}).wait(1).to({graphics:mask_2_graphics_33,x:-28.4734,y:215.2686}).wait(1).to({graphics:mask_2_graphics_34,x:-29.5234,y:214.5936}).wait(1).to({graphics:mask_2_graphics_35,x:-30.5734,y:213.9343}).wait(1).to({graphics:mask_2_graphics_36,x:-31.6234,y:213.2593}).wait(424).to({graphics:mask_2_graphics_460,x:-31.6234,y:213.2593}).wait(1).to({graphics:null,x:0,y:0}).wait(976));

	// ola01.png
	this.instance_25 = new lib.Symbol7();
	this.instance_25.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(460).to({_off:true},1).wait(976));

	// pack
	this.instance_26 = new lib.pack();
	this.instance_26.setTransform(-59,-184,0.8271,0.8271);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(460).to({_off:true},1).wait(164).to({_off:false},0).wait(812));

	// Layer_95
	this.instance_27 = new lib.Symbol10("synched",0,false);
	this.instance_27.setTransform(60.9,-131.5,1.8209,1.8209,0,0,0,-0.1,0);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(107).to({_off:false},0).wait(353).to({startPosition:50},0).to({_off:true},1).wait(164).to({_off:false},0).to({_off:true},772).wait(40));

	// Layer_93
	this.instance_28 = new lib.Symbol10("synched",0,false);
	this.instance_28.setTransform(-39,-51.4,2.6959,2.6959,0,0,0,-0.1,0);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(86).to({_off:false},0).wait(374).to({startPosition:50},0).to({_off:true},1).wait(164).to({_off:false},0).to({_off:true},772).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.6,-271.4,644,604.0999999999999);


// stage content:
(lib._160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fade:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,207,479];
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
	this.frame_207 = function() {
		root.btn.gotoAndPlay("loop");
	}
	this.frame_479 = function() {
		root.gotoAndPlay('fade');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(207).call(this.frame_207).wait(272).call(this.frame_479).wait(1));

	// borde
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgMaAuzMAAAhdlIY1AAMAAABdlg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(480));

	// opacidad
	this.instance = new lib.Symbol1564();
	this.instance.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({_off:true},1).wait(438).to({_off:false},0).to({alpha:1},26).wait(1));

	// CTA
	this.btn = new lib.cta64();
	this.btn.name = "btn";
	this.btn.setTransform(80.35,531.45,0.1705,0.1705,0,0,0,854.4,-168);
	this.btn.alpha = 0;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(174).to({_off:false},0).to({regX:854.6,regY:-168.2,scaleX:0.4088,scaleY:0.4088,x:81.3,y:531.25,alpha:1},33,cjs.Ease.get(0.8)).wait(273));

	// LIMPIEZA INCREÍBLE, AROMA IRRESISTIBLE
	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(-46.65,201.1,0.9456,0.9456,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:33.1,alpha:1},30,cjs.Ease.get(0.8)).wait(421));

	// NUEVO
	this.instance_2 = new lib.nuevo654();
	this.instance_2.setTransform(-46.75,32.05,0.4044,0.4044,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.1,x:41.7},29,cjs.Ease.get(0.8)).wait(451));

	// logoACE
	this.instance_3 = new lib.Symbol664();
	this.instance_3.setTransform(75,113.5,0.2791,0.2791);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1},29,cjs.Ease.get(0.8)).wait(451));

	// pacK
	this.instance_4 = new lib.Symbol6("single",0);
	this.instance_4.setTransform(65.45,366.2,0.5391,0.5391,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({mode:"synched",loop:false},0).wait(461));

	// bg.jpg
	this.instance_5 = new lib.Symbol1564();
	this.instance_5.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(480));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,299.5,267.2,301.5);
// library properties:
lib.properties = {
	id: 'E7F8FFA30680744D9C644F57AD1AD8B3',
	width: 160,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1730508012127", id:"bg"},
		{src:"images/burbuja.png?1730508012127", id:"burbuja"},
		{src:"images/degrade.png?1730508012127", id:"degrade"},
		{src:"images/flor01.png?1730508012127", id:"flor01"},
		{src:"images/flor02.png?1730508012127", id:"flor02"},
		{src:"images/logoace.png?1730508012127", id:"logoace"},
		{src:"images/ola01.png?1730508012127", id:"ola01"},
		{src:"images/ola02.png?1730508012127", id:"ola02"},
		{src:"images/pack.png?1730508012127", id:"pack"}
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