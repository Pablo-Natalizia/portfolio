(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[397,0,79,50],[0,0,157,100],[159,0,117,100],[278,0,117,100],[0,102,117,100],[0,204,117,100],[0,306,117,100],[0,408,117,100],[119,102,117,100],[238,102,117,100],[357,102,117,100],[119,204,117,100],[119,306,117,100],[119,408,117,100],[238,204,117,100],[357,204,117,100],[238,306,117,100],[238,408,117,100]]},
		{name:"index_atlas_NP_1", frames: [[0,0,2294,496]]}
];


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



(lib.cielo = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.tarjeta01 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.tarjeta01alta = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tw_00000 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.tw_00001 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.tw_00002 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.tw_00003 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.tw_00004 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.tw_00005 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.tw_00006 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.tw_00007 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.tw_00008 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.tw_00009 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.tw_00010 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.tw_00011 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.tw_00012 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.tw_00013 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.tw_00014 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.tw_00015 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.tarjeta01copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tarjeta01alta();
	this.instance.setTransform(-48,-30,0.6137,0.6137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tarjeta01copy, new cjs.Rectangle(-48,-30,96.4,61.4), null);


(lib.tarjeta01_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tarjeta plat
	this.instance = new lib.tarjeta01();
	this.instance.setTransform(-49,-31,1.2323,1.2332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tarjeta01_1, new cjs.Rectangle(-49,-31,97.4,61.7), null);


(lib.Symbol39 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00008();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol38 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00007();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol37 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00006();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol36 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00005();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol35 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00004();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00003();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00002();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00001();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00000();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00015();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00014();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00013();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00012();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-58.5,-50,117,100), null);


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
	this.instance = new lib.tw_00011();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tw_00010();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-58.5,-50,117,100), null);


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

	// Layer_1
	this.instance = new lib.tw_00009();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-58.5,-50,117,100), null);


(lib.Symbol13s = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACFAmQgGgBgDgEQgEgEgCgFQgCgFAAgIQAAgGACgFQACgEAEgEQAEgEAFgBQAGgDAGAAQAHAAAFADQAGABAEAEQADAEADAEQACAFAAAGQAAAIgDAFQgCAFgEAEQgDAEgGABQgFADgHAAQgHAAgFgDgACLgEIgEAEIgCAFIgBAHIABAGIACAHQABADADABQACACAEAAQAEAAACgCQADgBACgDIACgHIAAgGIAAgHIgCgFIgFgEQgCgCgEAAQgEAAgCACgAj9AlQgHgCgFgFQgGgFgCgIQgDgHAAgKQAAgIADgIQACgHAFgFQAFgGAIgDQAHgCAJAAQAGAAAGABQAFABAEADQAEADADAEQADAFAAAHIgRAAQgBgHgEgCQgEgDgGAAQgFAAgEACQgEADgDAEQgCAEgBAFIgBAJIABAKQABAGADAEQADADAEADQAFACAGAAIAHAAIAGgBIAAgTIgQAAIAAgKIAgAAIAAAmIgPAEIgPABQgJAAgIgEgAi8AhQgHgHAAgNQAAgNAHgIQAHgHAOgBIAIABIAHADIAFAEQADADABAEIACAHIABAJIgoAAIABAGIACAFIAEADQADACADAAQAJAAACgJIAPAAQgBAFgCADQgDAEgDACQgEADgEAAIgJABQgOAAgHgHgAiwgCQgDACAAAGIAXAAQAAgGgCgDQgDgEgGAAQgGAAgDAFgAgCAoIgHgBIgFgCQgDgBgBgDIgBgIIAAgdIgKAAIAAgKIAKAAIAAgJIAPgGIAAAPIAMAAIAAAKIgMAAIAAAYIABAEIABADIACABIADABIADAAIACgBIAAALIgFABIgFAAgAhsAoIgHgBIgFgCQgDgBgBgDIgBgIIAAgdIgKAAIAAgKIAKAAIAAgJIAPgGIAAAPIANAAIAAAKIgNAAIAAAYIABAEIABADIACABIAEABIADAAIACgBIAAALIgFABIgGAAgADyAnIgNgoIgOAoIgRAAIgTg1IARAAIALAoIAOgoIARAAIANAoIALgoIAPAAIgTA1gABZAnIAAgdIgBgFIgBgFIgDgDQgCgBgEAAQgDAAgDACQgCABgBACIgCAGIAAAEIAAAcIgQAAIAAgqIAAgGIAAgFIAQAAIAAAIQADgEAEgDQAFgCAGAAQAKAAAEAFQAFAFAAAJIAAAjgAg2AnIAAg1IAQAAIAAA1gAg2gZIAAgMIAQAAIAAAMg");
	this.shape.setTransform(2.475,-0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13s, new cjs.Rectangle(-27.9,-9.2,60.5,17.2), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cielo();
	this.instance.setTransform(-375,-125,0.4167,0.4167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-375,-125,955.9,206.7), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EhDEAPzIAA/lMCGKAAAIAAflg");
	this.shape.setTransform(214.5,-74.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-214.8,-175.2,858.7,202.2), null);


(lib.Symbol6yt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.525,1],-105.9,0,106,0).s().p("AwjGcIAAs3MAhHAAAIAAM3g");
	this.shape.setTransform(11.125,0.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6yt, new cjs.Rectangle(-94.8,-41.1,211.89999999999998,82.4), null);


(lib.Symbol3copyHSBC = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgbCEIAAhDIAAgHIAAgHIAQAAIABAJQAEgGAEgCQAEgDAGAAQAHAAAFADQAFACADAEQADAEABAGQACAFAAAGIgCAMIgEAKQgEAFgEACQgGADgHAAQgGAAgDgCQgEgCgEgFIAAAegAgDA+QgDACgBADIgDAGIAAAHIAAAHIADAGQABADADACQADACACAAQAEAAADgCIAEgFIADgGIAAgHIAAgHIgDgGQgBgDgCgCQgDgCgEAAQgDAAgDACgAHQBnQgHgIgBgOQAAgOAIgJQAIgJAPAAIAJABIAGADIAGAFQADADACAEIADAIIAAAKIgrAAIAAAHIADAFQACADADABQACACAEAAQAKAAACgKIAQAAQAAAFgEAEQgCAEgEACQgEADgFABQgEABgFAAQgOAAgJgIgAHdA/QgDAFgBAFIAaAAQAAgGgDgEQgCgEgHAAQgGAAgEAEgAAyBnQgIgIAAgOQAAgOAHgJQAIgJAQAAIAIABIAHADIAGAFQADADABAEIADAIIABAKIgrAAIAAAHIADAFQACADADABQACACADAAQALAAACgKIAQAAQgBAFgDAEQgCAEgEACQgEADgFABIgKABQgOAAgIgIgAA/A/QgEAFAAAFIAaAAQAAgGgDgEQgDgEgGAAQgHAAgDAEgAiXBuQgGgBgCgCQgFgCgBgEQgDgEAAgGIARAAQAAAFADADQACACAGAAIADAAIACgCIADgCIABgEQAAgDgDgCIgIgDIgGgBIgHgCIgFgDIgFgFQgBgDAAgEQAAgFACgEQADgDAEgCIAHgDIAJgBIAJABQAFABAEACQADACACAEQADAEAAAFIgRAAQAAgEgDgDQgBgCgFAAIgEAAIgCABIgCACIgBAEQAAADADABIAIADIAHACIAGACIAGADIAFAFQABADABAEQgBAFgCAEIgHAGQgEADgFAAIgJABIgKgBgAIfBuQgDgBgDgCQgDgBAAgDIgBgJIAAggIgNAAIAAgMIANAAIAAgJIAPgHIAAAQIAPAAIAAAMIgPAAIAAAbIABAEIABADIADACIAEABIADAAIADgBIAAAMIgHAAIgFABIgIgBgAEaBuIgHgDQgDgDgBgDIgBgIQAAgHADgEQAEgEAFgCQAFgCAGgBIALAAIAFAAIAAgDIAAgEIgBgEIgDgDIgFgBQgFAAgCADQgCADABAEIgSAAQ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");
	this.shape.setTransform(27.45,0.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3copyHSBC, new cjs.Rectangle(-94.2,-19.7,243.5,36.8), null);


(lib.Symbol3copy3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D7282F").s().p("AhLCAQgWgHgOgQQgNgQAAgdIA2AAQABASAKAIQALAJARAAQAPAAAJgIQAJgHAEgNQAFgMAAgOQAAgOgEgMQgFgMgIgFQgJgIgOAAQgOAAgKAIQgLAGgDAPIg1AAIAFiYICmAAIAAAmIh1AAIgEBPQAKgQAPgIQAOgHASAAQAYAAASALQASAMAJATQAJATABAZQgBAfgLAVQgMAWgWAKQgUALgdAAQgZAAgVgGgAjkCBIAAjSQgNALgPAJQgPAJgQAGIAAgtQAOgFALgGIAVgNIAWgSIAuAAIAAEGgABtB6QgIgFgEgIQgEgJAAgMQAAgLAEgJQAEgJAIgFQAIgFAMAAQAMAAAIAFQAIAFAEAJQAEAJAAALQAAALgEAJQgEAJgIAFQgIAFgMAAQgMAAgIgFgAB3A/QgDACgDAFIgDAIIgBAKIABAJQABAGACADQACAEAEADQAEACAGAAQAFAAAEgCQAEgDACgEQACgDABgGIABgJIgBgKIgDgIQgCgFgEgCQgEgCgFAAQgGAAgEACgADvB+IAAhLIAxAAIAAALIghAAIAAAUIAfAAIAAAMIgfAAIAAAggACyB+IAAhLIAxAAIAAALIghAAIAAAUIAgAAIAAAMIggAAIAAAggACJAcIBVihIASAAIhUChgADhARQgIgFgDgJQgEgJABgLQAAgMADgJQAEgJAIgGQAHgFAMgBQANABAHAGQAIAFADAJQAEAJAAALQAAAMgEAIQgDAKgIAFQgHAGgNAAQgNAAgHgGgADsgmQgDAFgBAGIAAAMIAAAKQABAFADAEQADAEAGAAQAGAAADgFQADgDABgGIAAgKIAAgLQgBgHgCgEQgDgFgHAAQgGAAgDAFgABxg1QgHgGgEgJQgDgJAAgMQAAgLADgJQAEgKAHgFQAIgGANAAQAMAAAIAGQAHAFADAKQAEAIAAAMQAAALgEAKQgDAJgHAGQgIAGgNAAQgMAAgIgGgAB8htQgDAEgBAHIAAALIAAAKQABAGADAEQADAEAGABQAGgBADgEQADgEABgGIABgLIgBgLQgBgGgCgFQgDgFgHAAQgGAAgDAGg");
	this.shape.setTransform(8.725,9.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3copy3, new cjs.Rectangle(-29.3,-20.7,70.6,55.2), null);


(lib.Symbol3copy2h = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ah9B1IAJgVIgZg3IASAAIAPApIAOgpIAQAAIggBMgAHnBeQgHgDgFgFQgFgFgCgIQgCgHAAgJQAAgJACgIQADgHAFgGQAFgGAGgDQAIgDAJAAIAMABQAFACAFADQAEADADAFQACAEABAHIgSAAQAAgGgFgDQgDgDgGAAQgFAAgFADQgDADgCAEQgDAEgBAFIgBAKIABAKQABAFADAEQACAEADACQAEADAFAAQAHAAADgDQAFgEABgGIARAAQAAAHgEAFQgDAFgEADQgFADgFABQgFABgHAAQgJAAgHgDgAg4BfQgGgCgEgEQgEgDgCgGQgCgFAAgHQAAgHACgFQADgGAEgDQADgEAGgCQAGgCAGAAQAHAAAGACQAFACAEAEQAEADACAGQACAFAAAHQAAAHgCAFQgCAGgEADQgEAEgFACQgHACgGAAQgHAAgFgCgAgyAyQgEACgBADIgCAGIAAAHIAAAHIACAGQABADAEACQACACAEAAQAEAAACgCIAEgFIADgGIABgHIgBgHIgDgGIgEgFQgCgBgEAAQgEAAgCABgAkXBgIgHgDQgDgCgCgEQgCgDAAgGIAPAAQAAAFADACQACADAFAAIADgBIADgBIACgCIABgDQAAgEgDgBIgIgDIgFgCIgGgBIgGgDQgDgCgBgDIgBgGQAAgFACgDQACgDAEgCIAHgDIAIgBIAJABQAEABADACIAGAFQACAEAAAFIgQAAQAAgEgCgCQgCgDgEAAIgDAAIgCACIgDABIAAADQAAADADACQACACAGABIAGABIAGACIAGADIADAEQACADAAAEQAAAFgCAEQgDADgEACQgEADgEAAIgJABIgKgBgAlYBfQgGgCgEgEQgEgDgCgGQgCgFAAgHQAAgHACgFQADgGAEgDQADgEAGgCQAGgCAGAAQAHAAAGACQAFACAEAEQAEADACAGQACAFAAAHQAAAHgCAFQgCAGgEADQgEAEgFACQgHACgGAAQgHAAgFgCgAlSAyQgEACgBADIgCAGIAAAHIAAAHIACAGQABADAEACQACACAEAAQAEAAACgCIAEgFIADgGIABgHIgBgHIgDgGIgEgFQgCgBgEAAQgEAAgCABgAmcBfQgGgCgEgEQgDgDgCgGQgCgFgBgHQAAgHADgFQACgGAEgDQAEgEAFgCQAGgCAHAAQAGAAAGACQAFACAEAEQAFADACAGQABAFAAAHQAAAHgBAFQgCAGgFADQgEAEgFACQgGACgGAAQgIAAgFgCgAmWAyQgDACgBADIgDAGIAAAHIAAAHIADAGQABADADACQACACAFAAQAEAAACgCIAEgFIACgGIABgHIgBgHIgCgGIgEgFQgCgBgEAAQgFAAgCABgAopBaQgHgIAAgNQAAgHABgGQACgFAFgEQADgEAGgCQAFgCAHAAQAFAAAEABQAFABADADQAEACACAEQACAEAAAGIgQAAQABgFgDgDQgDgEgFAAQgDAAgDACIgEAFIgBAGIgBAHIABAGIABAHQACADACACQADABADAAQAGAAACgDQADgDgBgGIARAAIAAABQAAAGgCAEIgHAGQgDADgFABQgFABgFAAQgNAAgIgHgAqGBfQgFgCgEgEQgEgDgCgGQgCgFAAgHQAAgHADgFQABgGAEgDQAFgEAFgCQAFgCAIAAQAGAAAFACQAGACAEAEQAEADACAGQACAFAAAHQAAAHgCAFQgCAGgEADQgEAEgGACQgFACgHAAQgHAAgGgCgAqAAyQgCACgBADIgDAGIgBAHIABAHIADAGQABADACACQADACAEAAQAEAAADgCIADgFIADgGIAAgHIAAgHIgDgGIgDgFQgDgBgEAAQgEAAgDABgAKYBfQgEgDgDgEQgDgEgBgFQgCgFAAgGIACgKQABgFACgEQADgFAFgCQAEgDAHAAQAGAAAEACQAFACADAFIAAgfIAQAAIAABAIAAAHIAAAIIgQAAIgBgIQgDAFgEACQgDACgHAAQgGAAgFgCgAKhAzIgDAEIgCAGIgBAHIABAGIACAGQABADADACQADACAEAAQADAAADgCIADgFIACgGIABgGIgBgHIgCgGIgEgEQgCgCgEAAQgEAAgDACgAIrBgIgGgDIgEgFQgBgEAAgEQgBgGAEgEQADgEAFgCQAFgCAFAAIALgBIAFAAIAAgCIgBgEIgBgEIgDgCIgEgBQgFAAgCACQgBADAAADIgRAAQAAgFACgDIAGgFIAJgDIAIgBIAKABQAFABADACQACACACAEQACAFAAAGIAAARIAAAJIABAKIgPAAIgBgEIAAgEQgEAFgEACQgEACgGAAIgIgBgAI7BFIgGACIgEADQgCACAAADQAAAEADACQACACAEAAQAEAAACgBIAFgEIABgGIABgGIAAgBIgCAAIgDAAIgFAAgAF9BfQgFgCgDgEQgDgEgCgFQgBgFAAgGQAAgGABgGQACgFADgEQADgEAFgCQAFgDAHAAQAGAAAFADQAFADADAEQACAEABAFIACAMIgpAAIAAABIABAHIADAHIAFAEQAEACAEAAQAFAAAEgEQAEgDABgGIAJAAQgBAKgHAEQgGAFgKAAQgGAAgFgCgAGBAvIgEAEIgEAGIgBAHIAfAAIgBgHQgBgDgCgDIgEgDQgDgCgDAAIgIABgADhBfQgFgCgEgEQgDgEgCgGQgBgFAAgGQAAgGACgGQABgFADgEQAEgDAFgDQAGgCAGAAQAHAAAFACQAEACAEAEQAEAEABAFQACAFAAAHQAAAGgCAFQgCAGgDAEQgEADgFADQgFACgGAAQgHAAgFgCgADlAwQgEACgCADIgCAHIgBAIIABAIIACAHQACADAEACQADACAFAAQAEAAADgCIAGgFIADgHIABgIIgBgIIgDgHQgCgDgEgCQgDgCgEAAQgFAAgDACgAABBbQgDgFAAgKIAAgjIAPAAIAAAdIAAAGIABAFIADAEQACABAEAAQADAAACgCIAFgDIABgGIAAgGIAAgcIARAAIAAAiIAAALIAAAKIgQAAIgBgJQgDAFgEACQgFADgGAAQgJAAgGgGgAjjBaQgIgIAAgNQAAgOAHgIQAIgIANAAIAIABIAIADIAFAEQACADACAEQACAEAAAEIAAAJIgnAAIABAGIABAFIAFAEIAFABQAKAAABgJIAQAAQgBAFgCAEQgDAEgEACQgDACgFABIgJABQgOAAgGgHgAjYA0QgDAEAAAGIAYAAQAAgGgDgEQgDgEgGAAQgGAAgDAEgAqoBgIgHAAIgGgCQgCgCgBgDQgBgDAAgEIAAgfIgLAAIAAgLIALAAIAAgJIAPgGIAAAPIAOAAIAAALIgOAAIAAAZIAAAEIACADIACACIAEABIADAAIACgBIAAALIgGAAIgFAAgAJjBgIAAgqIgBgHIAAgGIAQAAIAAAKQADgGAEgCQAEgDAHAAIABAAIABAAIAAAOIgFAAQgIAAgDAEQgDAEAAAIIAAAagAGuBgIAAgnIAAgRIAJAAIABAJQADgFAEgCQAEgCAGAAIABAAIACAAIAAAJIgDAAIgCAAQgIAAgDAFQgEAEAAAIIAAAegAFKBgIgPguIgQAuIgKAAIgTg4IAKAAIAPAuIAPguIALAAIAPAtIAOgtIAJAAIgTA4gACUBgIAAhPIAYAAIALAAQAFABAEADQAFADACAFQADAFAAAFQAAAIgFAFQgDAFgHADQgDABgEAAIgIABIgOAAIAAAigACeA2IALAAIAIgBIAHgCQADgBACgDQABgDAAgFQAAgFgBgDIgEgEIgGgCIgHgBIgOAAgABDBgIAAgqIgBgHIAAgGIAPAAIAAAKQAEgGADgCQAFgDAGAAIABAAIACAAIAAAOIgGAAQgHAAgDAEQgEAEAAAIIAAAagAnJBgIAAgeIAAgFIgBgFQgBgDgCgBQgCgCgEAAQgEAAgCACIgEAFIgCAFIAAAFIAAAdIgQAAIAAhPIAQAAIAAAgQAEgFAEgCQAFgCAFAAQAKAAAFAFQAFAFAAAKIAAAkgABFgOIAIgVIgZg3IASAAIAPApIAOgpIAQAAIgfBMgAgMgWIAHgbIAPAAIgLAbgACIgkQgFgCgEgEQgEgDgCgGQgCgFAAgHQAAgHADgFQABgGAEgDQAFgEAFgCQAFgCAIAAQAGAAAFACQAGACAEAEQAEADACAGQACAFAAAHQAAAHgCAFQgCAGgEADQgEAEgGACQgFACgHAAQgHAAgGgCgACOhRQgCACgBADIgDAGIgBAHIABAHIADAGQABADACACQADACAEAAQAEAAADgCIAEgFIACgGIAAgHIAAgHIgCgGIgEgFQgDgBgEAAQgEAAgDABgAhGglQgHgDgFgFQgEgFgCgIQgCgHAAgJQAAgJACgIQADgHAEgGQAFgGAHgDQAIgDAIAAIAMABQAGACAEADQAFADADAFQACAEAAAHIgRAAQgBgGgEgDQgDgDgHAAQgFAAgEADQgEADgCAEQgDAEgBAFIgBAKIABAKQABAFADAEQACAEAEACQADADAGAAQAGAAAEgDQAEgEABgGIASAAQgBAHgDAFQgDAFgEADQgFADgFABQgGABgGAAQgJAAgIgDgAjdgjQgGgCgFgDQgEgDgCgEQgDgFAAgIIARAAQABAHADADQADAEAIAAIAFgBIAEgCIAEgDQACgCAAgDIgCgEIgCgDIgEgCIgHgCIgGgCIgJgDIgIgEQgDgDgCgDQgCgEAAgFQAAgHADgFQADgEAEgDQAFgDAFgBIALgBIALABQAFABAEADQAFADABAEQADAEAAAHIgRAAQAAgGgEgCQgDgDgGAAIgFAAIgEACIgCADQgBABAAAAQAAABgBAAQAAABAAABQAAAAAAABIABAEIADACIAGADIAGACIAHACIAJAEIAIAEIAEAGQACADAAAFQgBAHgDAFQgCAFgGACQgEADgGACIgLABQgHAAgFgBgAJMgpQgIgIAAgNQAAgOAHgIQAIgIAOAAIAIABIAHADIAFAEQADADABAEQACAEAAAEIABAJIgpAAIACAGIACAFIADAEIAHABQAJAAABgJIAQAAQgBAFgDAEQgCAEgDACQgEACgEABIgKABQgOAAgGgHgAJYhPQgEAEAAAGIAYAAQAAgGgDgEQgDgEgFAAQgHAAgCAEgAIMgpQgIgIABgNQAAgOAGgIQAIgIAOAAIAIABIAHADIAFAEQADADACAEQACAEAAAEIAAAJIgoAAIABAGIACAFIAEAEIAGABQAJAAACgJIAQAAQgBAFgDAEQgDAEgDACQgDACgFABIgJABQgOAAgHgHgAIYhPQgEAEAAAGIAYAAQAAgGgCgEQgDgEgGAAQgGAAgDAEgAFUgpQgIgIAAgNQAAgOAHgIQAHgIAOAAIAIABIAHADIAGAEQACADACAEQACAEAAAEIAAAJIgnAAIAAAGIACAFIAFAEIAFABQAKAAACgJIAPAAQgBAFgCAEQgDAEgEACQgDACgFABIgJABQgNAAgHgHgAFfhPQgDAEAAAGIAYAAQAAgGgDgEQgCgEgHAAQgFAAgEAEgADDgoQgFgFAAgKIAAgjIAQAAIAAAdIAAAGIABAFIAEAEQACABADAAQAEAAACgCIAEgDIACgGIAAgGIAAgcIAQAAIAAAiIAAALIAAAKIgPAAIgBgJQgDAFgEACQgFADgGAAQgKAAgFgGgAnCgjIgHAAIgFgCQgCgCgCgDQgBgDAAgEIAAgfIgLAAIAAgLIALAAIAAgJIAQgGIAAAPIANAAIAAALIgNAAIAAAZIAAAEIABADIACACIAFABIACAAIACgBIAAALIgFAAIgGAAgAHcgjIAAgqIAAgHIAAgGIAQAAIAAAKQACgGAFgCQAEgDAGAAIABAAIABAAIAAAOIgEAAQgIAAgEAEQgDAEAAAIIAAAagAG2gjIAAgtIgKAAIAAgLIAKAAIAAgEQAAgKAEgFQAFgFAKAAIAGAAIAEABIAAAKIgCAAIgCAAIgFABIgCABIgBADIgBAEIAAAEIANAAIAAALIgNAAIAAAtgAEkgjIAAgqIAAgHIAAgGIAPAAIAAAKQADgGAEgCQAFgDAFAAIABAAIACAAIAAAOIgFAAQgHAAgEAEQgEAEAAAIIAAAagAijgjIAAhPIAcAAIAIAAIAIABQAHABAEAFQAGAFAAAIQgBAHgEAEQgFAFgHABIAIADIAGADIAEAGQACADgBAFQAAAGgCAFQgDAEgFACQgFADgFABIgLABgAiSgvIANAAIAFAAIAGgCIADgEIABgGIgBgFQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAAAgBIgGgCIgFAAIgOAAgAiShRIALAAIAGgBIAEgBIAEgEQABgCABgDQgBgDgBgCIgDgDIgEgCIgGgBIgMAAgAkQgjIAAgiIgjAAIAAAiIgRAAIAAhPIARAAIAAAgIAjAAIAAggIARAAIAABPgAmGgjIAAgeIgBgFIgBgFQgBgDgDgBQgCgCgDAAQgEAAgCACIgDAFIgDAFIAAAFIAAAdIgPAAIAAhPIAPAAIAAAgQAEgFAEgCQAEgCAGAAQAKAAAFAFQAFAFAAAKIAAAkgAn3gjIAAg4IAQAAIAAA4gAopgjIgShBIgSBBIgVAAIgWhPIASAAIAQBAIAShAIAUAAIARBAIAPhAIARAAIgWBPgAEIhYIgCgaIAOAAIgDAagAn3hmIAAgMIAQAAIAAAMg");
	this.shape.setTransform(8.8,16.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3copy2h, new cjs.Rectangle(-100.3,0.7,218.89999999999998,30.7), null);


(lib.Symbol3copy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AlzB/IAAhDIAAgIIAAgIIARAAIAAAKQADgGAGgCQAFgCAGgBQAHABAEACQAFADADAEQAEADACAGQABAGAAAFQAAAHgBAGQgCAGgEAEQgDAFgFADQgFACgHAAQgGAAgEgCQgFgCgDgFIAAAegAlbA4QgCACgCADIgCAHIgBAHIABAHIACAHIAEAFQADACADAAQAEAAAEgCQADgDABgCQACgDABgFIAAgHIAAgGQgBgEgCgDIgEgFQgCgBgFgBQgEABgDABgAqaB/IAJgVIgbg+IAUAAIAQAuIAQguIARAAIgiBTgAJmBqIgIgDQgEgDgCgEQgDgEAAgGIASAAQAAAFADADQACADAGAAIADgBIADgBIADgDIABgDQAAgEgEgCIgIgDIgGgBIgHgCIgGgEIgEgEQgBgDAAgFQAAgFACgDQACgEAEgCIAJgDIAIgBIAKABQAEABAEACQADADACADQADAEAAAFIgRAAQAAgDgDgEQgCgCgEAAIgDAAIgDABIgCACIgBAEQAAADADACIAJADIAHACIAGABIAGADQADADABACQACADAAAFQAAAGgDAEQgCADgEADQgFACgEABIgLAAIgKAAgAIYBiQgIgHAAgPQAAgPAIgJQAIgJAPAAIAIABIAIADQADABAEAEIAEAHQACAFAAAEIAAAKIgrAAIABAHIACAFQACADACACQADABAEAAQAKAAACgKIARAAQgBAFgDAEQgCAFgFABQgDADgFABQgFABgGAAQgOABgIgJgAIlA6QgEAEABAGIAaAAQgBgGgDgEQgDgFgGAAQgHAAgDAFgAhCBiQgIgHAAgPQAAgPAIgJQAIgJAPAAIAIABIAIADQADABAEAEIAEAHQACAFAAAEIAAAKIgrAAIABAHIACAFQACADACACQADABAEAAQAKAAACgKIARAAQgBAFgCAEQgDAFgFABQgDADgFABQgFABgGAAQgOABgIgJgAg1A6QgEAEABAGIAaAAQgBgGgDgEQgDgFgGAAQgHAAgDAFgAjNBpQgFgCgFgFQgEgEgDgGQgCgFAAgJQABgHACgGQACgFAEgFQAFgEAGgCQAGgCAIAAQAHAAAGACQAGACAEAEQAEAFACAFQADAGAAAHQAAAIgDAGQgCAGgEAEQgEAEgHADQgFABgIAAQgHAAgHgBgAjGA3QgDACgCAEIgCAHIgBAGIABAIIACAHQACADADACQADACAEAAQAFAAADgCIAEgFIACgHIABgIIgBgGIgCgHIgEgGQgDgCgFAAQgEAAgDACgApQBpQgGgCgFgFQgDgEgDgGQgCgFAAgJQAAgHACgGQACgFAFgFQAFgEAFgCQAHgCAHAAQAIAAAFACQAHACADAEQAFAFACAFQACAGAAAHQAAAIgCAGQgCAGgFAEQgEAEgGADQgGABgHAAQgIAAgGgBgApJA3QgDACgCAEIgDAHIAAAGIAAAIIADAHQACADADACQACACAFAAQAEAAADgCIAEgFIACgHIABgIIgBgGIgCgHIgEgGQgDgCgEAAQgFAAgCACgAH1BpQgDgBgDgBQgDgCAAgDIgBgJIAAghIgNAAIAAgMIANAAIAAgKIAQgHIAAARIAPAAIAAAMIgPAAIAAAbIAAAFIACADIACADIAFAAIADAAIADAAIAAALIgHABIgGAAIgIgBgAGfBkQgGgFABgMIAAgnIARAAIAAAhIABAGIABAGQAAACADACQACACAFAAQAEAAACgDIAEgDIACgHIAAgGIAAggIASAAIAAAmIAAAMIAAALIgSAAIAAgJQgEAFgEADQgFACgGAAQgMAAgFgGgAoQBkQgFgFAAgMIAAgnIASAAIAAAhIAAAGIABAGIADAEQADACAEAAQAEAAADgDIADgDIACgHIABgGIAAggIARAAIAAAmIAAAMIAAALIgRAAIAAgJQgEAFgFADQgEACgHAAQgLAAgGgGgAKbBpIAAgQIASAAIAAAQgAF4BpIAAggIAAgGIgBgGQgBgDgDgBQgCgCgEAAQgEAAgDADIgEAEIgCAHIAAAFIAAAfIgSAAIAAgxIAAgFIAAgHIARAAIAAAKQAEgGAFgCQAFgCAGgBQALAAAGAHQAFAFABALIAAAngAEsBpIAAg9IARAAIAAA9gAEKBpIAAgiIAAgGIgCgEIgDgEQgDgCgEAAQgDAAgCACQgBAAgBABQAAAAgBAAQAAABAAAAQgBABAAABIgCAFIAAAGIAAAhIgSAAIAAgiIgBgGIgBgEQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAQgBgCgEAAQgDAAgDACQgDABgBADIgCAEIgBAGIAAAiIgRAAIAAgoIAAgKIgBgLIARAAIABAKQADgGAFgCQAGgCAHgBQAGAAAFADQAFADADAGQADgFAGgEQAFgDAHAAQAFAAAFACQAEACADAEQACADABAEIACAKIAAAlgABwBpIAAggIAAgGIgCgGQAAgDgDgBQgCgCgFAAQgEAAgCADIgEAEIgBAHIgBAFIAAAfIgRAAIAAgxIAAgFIgBgHIASAAIAAAKQAEgGAEgCQAFgCAGgBQAMAAAFAHQAGAFgBALIAAAngAAkBpIAAg9IARAAIAAA9gAhoBpIAAggIAAgGIgCgGQAAgDgDgBQgDgCgEAAQgDAAgDADIgEAEIgBAHIgBAFIAAAfIgRAAIAAgxIAAgFIgBgHIASAAIAAAKQAEgGAEgCQAFgCAHgBQALAAAFAHQAGAFgBALIAAAngAj9BpIAAggIAAgGIgCgGQgBgDgDgBQgCgCgEAAQgEAAgCADIgFAEIgBAHIgBAEIAAAgIgRAAIAAhXIARAAIAAAjQAEgEAFgDQAEgCAHgBQALAAAFAHQAGAFAAALIAAAngAnJBpIAAgtIAAgIIAAgIIARAAIAAAMQADgGAFgDQAFgCAGgBIABAAIACAAIAAAQIgFAAQgJgBgDAFQgEAEAAAJIAAAcgAErAhIAAgPIATAAIAAAPgAAkAhIAAgPIASAAIAAAPgAp5gnQgJgEgFgGQgEgGgDgIQgCgIgBgKQABgKACgIQADgJAEgGQAGgGAIgEQAHgDALAAQAKAAAIADQAIAEAFAGQAFAGADAJQACAIAAAJQAAAKgCAIQgEAJgFAGQgEAGgIAEQgJADgJAAQgLAAgHgDgApzhuQgEADgCAFIgEAKIgBAKIABALQABAGADAEQACAFAEADQAFADAHAAQAGAAAFgDQAEgDADgFQACgEABgGIABgLIgBgLQgBgGgCgEQgEgEgDgDQgFgDgGAAQgHAAgFADgAIjgmQgGgCgEgFQgEgEgDgGQgCgFAAgJQAAgHACgGQADgFAEgFQAFgEAGgCQAFgCAIAAQAHAAAHACQAFACAEAEQAFAFACAFQACAGABAHQgBAIgCAGQgCAGgFAEQgEAEgGADQgGABgIABQgHgBgGgBgAIqhYQgEACgBAEIgCAHIgBAGIABAIIACAHQABADAEACQACACAEAAQAFAAADgCIAFgFIACgHIAAgIIAAgGIgCgHIgFgGQgDgCgFAAQgEAAgCACgAE3gtQgIgHAAgPQAAgPAIgJQAHgJAPAAIAJABIAIADQADABADAEIAEAHQACAFAAAEIABAKIgrAAIAAAHIADAFQABADADACQADABADAAQALAAABgKIARAAQAAAFgDAEQgDAFgEABQgEADgFABQgEABgGABQgPAAgHgJgAFEhVQgEAEAAAGIAaAAQAAgGgDgEQgDgFgHAAQgGAAgDAFgAmwgtQgJgHAAgPQAAgPAJgJQAHgJAPAAIAJABIAHADQAEABADAEIAEAHQADAFAAAEIAAAKIgrAAIAAAHIACAFQACADADACQACABAEAAQALAAACgKIARAAQgBAFgDAEQgDAFgEABQgDADgFABQgGABgFABQgPAAgHgJgAmkhVQgDAEAAAGIAaAAQAAgGgDgEQgDgFgHAAQgGAAgEAFgAHQgmQgEgBgCgBQgDgCgBgDIgBgJIAAghIgMAAIAAgMIAMAAIAAgKIARgHIAAARIAOAAIAAAMIgOAAIAAAbIAAAFIABADIADADIAEAAIADAAIADAAIAAALIgHABIgGAAIgHgBgACygmIgHgDQgDgCgBgEQgCgDAAgFQAAgHAEgEQADgFAGgCQAFgCAGAAIALAAIAGAAIAAgDIgBgEIgBgFIgDgDIgFgBQgFABgCACQgCACAAAFIgSAAQAAgGACgEQADgDAEgCQAEgCAFgBIAJgBIALABQAEABAEACQADADADAEQACAFAAAIIAAASIAAAKIAAAKIgQAAIgBgEIAAgEQgEAFgFACQgEACgHAAIgIgBgADDhDIgHACIgEADQgCACAAAEQAAAEADADQADACAEAAQAEAAADgCQADgCABgDIACgGIABgGIAAgBIgDAAIgDAAIgFAAgAgIgnQgFgDgDgEQgEgEgBgGQgCgGAAgGQAAgGACgGQABgFADgFQAEgEAEgDQAFgDAGAAQAHAAAFACQAEADAEAEIAAgiIARAAIAABHIAAAIIABAIIgRAAIgBgIQgEAFgEACQgFACgGAAQgGAAgFgCgAABhXIgDAFIgCAHIgBAGIABAHIACAHQABADACACQADACAEAAQAEAAADgCQADgCABgDIACgHIACgHIgCgGQAAgEgCgDQgBgDgDgCQgEgBgDgBQgEABgDABgAiagmIgIgDQgCgCgCgEQgCgDAAgFQAAgHAEgEQADgFAGgCQAGgCAFAAIAMAAIAFAAIAAgDIAAgEIgCgFIgDgDIgEgBQgGABgCACQgBACAAAFIgSAAQgBgGADgEQACgDAFgCQADgCAFgBIAKgBIAKABQAFABAEACQADADACAEQACAFAAAIIAAASIAAAKIABAKIgRAAIgBgEIAAgEQgEAFgEACQgFACgGAAIgIgBgAiKhDIgGACIgFADQgCACAAAEQAAAEAEADQADACADAAQAFAAACgCQADgCACgDIACgGIAAgGIAAgBIgCAAIgDAAIgGAAgAjogmQgDgBgCgBQgDgCgBgDIgBgJIAAghIgMAAIAAgMIAMAAIAAgKIARgHIAAARIAOAAIAAAMIgOAAIAAAbIAAAFIABADIACADIAGAAIACAAIADAAIAAALIgGABIgHAAIgIgBgAn2gnQgFgDgDgEQgDgEgCgGQgBgGAAgGQAAgGABgGQABgFADgFQADgEAFgDQAFgDAHAAQAHAAAFACQAEADAEAEIAAgiIASAAIAABHIAAAIIAAAIIgRAAIgBgIQgEAFgEACQgFACgGAAQgHAAgFgCgAnshXIgEAFIgCAHIAAAGIAAAHIACAHQABADADACQADACAEAAQAEAAADgCQADgCABgDIADgHIABgHIgBgGQgBgEgCgDQgBgDgDgCQgDgBgFgBQgDABgDABgAKIgmIAAggIAAgGIgBgGQgCgDgCgBQgCgCgEAAQgFAAgCADIgEAEIgCAHIAAAFIAAAfIgSAAIAAgxIAAgFIAAgHIARAAIAAAKQAEgGAFgCQAFgCAHAAQAKgBAGAHQAFAFABALIAAAngAGegmIAAg9IARAAIAAA9gAD+gmIgYg9IATAAIAPAvIAQgvIARAAIgYA9gACHgmIAAggIAAgGIgBgGQgBgDgCgBQgDgCgEAAQgEAAgDADIgDAEIgCAHIgBAEIAAAgIgRAAIAAhXIARAAIAAAjQAFgEAEgDQAFgCAGAAQALgBAFAHQAGAFAAALIAAAngAg1gmIAAggIAAgGIgBgGQgBgDgCgBQgDgCgEAAQgEAAgDADIgDAEIgCAHIgBAFIAAAfIgRAAIAAgxIAAgFIgBgHIASAAIAAAKQAEgGAEgCQAGgCAGAAQALgBAFAHQAGAFAAALIAAAngAkZgmIAAg9IARAAIAAA9gAlvgmIAAgtIgBgIIAAgIIARAAIABAMQADgGAFgDQAEgCAGgBIACAAIABAAIAAAQIgFAAQgIgBgEAFQgDAEgBAJIAAAcgAowgmIAAgtIAAgIIAAgIIARAAIAAAMQADgGAEgDQAFgCAHgBIABAAIABAAIAAAQIgFAAQgJgBgDAFQgEAEABAJIAAAcgAGdhuIAAgPIATAAIAAAPgAkahuIAAgPIATAAIAAAPg");
	this.shape.setTransform(4.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3copy2, new cjs.Rectangle(-115,5.4,239.3,33.7), null);


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

	// opcion01
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2A").s().p("ACFAvQgNgQAAgdQAAgdAOgRQAQgUAdABQAUAAAOAJQAPAKABAUIgcAAQgCgJgGgFQgFgEgJAAQgRgBgIAQQgHANAAAQQAAARAHALQAIAPAQAAQAKAAAFgFQAHgGABgIIAcAAQgCATgPALQgNAJgWAAQgcgBgQgRgAhbA4QgOgLgBgVIAbAAQABAKAGAFQAFAGALAAQAJAAAHgEQAHgFAAgIQAAgIgGgDQgEgDgMgDIgJgCQgSgGgIgGQgNgIAAgPQAAgUARgJQAMgJAUABQAtAAAAAkIgaAAQgCgSgSAAQgJAAgFAEQgGAEAAAIQAAAGAGADQAEAEAPAEIAKADQASAGAHAGQAKAIAAAPQAAASgRAMQgOAJgVAAQgVAAgNgJgAAKA+IAAh6IAqAAQASgBAHACQAMADAGAGQAIAJAAAMQAAAVgZAHQAdAEAAAZQAAASgQAKQgNAGgUAAgAAkAsIATAAQAZAAAAgSQAAgKgHgFQgGgEgKAAIgVAAgAAkgJIAQAAQALgBAGgDQAHgDAAgJQAAgKgHgEQgFgDgKAAIgSAAgAiUA+IAAg0Ig1AAIAAA0IgbAAIAAh6IAbAAIAAAyIA1AAIAAgyIAbAAIAAB6g");
	this.shape.setTransform(-36.825,-92.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAAICUiTIAAEngAiTiTICTCTIiTCUg");
	this.shape_1.setTransform(-94.25,-92.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7282F").s().p("ACUiTIiUCTICUCUIknAAICTiUIiTiTIEnAAICTCTIiTCUgAknAAICUiTIAAEng");
	this.shape_2.setTransform(-94.25,-92.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-123.8,-107.3,109.89999999999999,47.3), null);


(lib._65757hs = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D7282F").s().p("Am8CFIAAkJIN5AAIAAEJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._65757hs, new cjs.Rectangle(-44.4,-13.3,88.9,26.700000000000003), null);


(lib.Symbol23copy10 = function(mode,startPosition,loop,reversed) {
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
	this.frame_63 = function() {
		root.tarjeta05.tarjeta01.alas02.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(29));

	// Layer_2
	this.instance = new lib.Symbol38();
	this.instance.setTransform(470,70);

	this.instance_1 = new lib.Symbol39();
	this.instance_1.setTransform(470,70);

	this.instance_2 = new lib.Symbol24();
	this.instance_2.setTransform(470.5,70);

	this.instance_3 = new lib.Symbol25();
	this.instance_3.setTransform(470,70);

	this.instance_4 = new lib.Symbol26();
	this.instance_4.setTransform(470,70);

	this.instance_5 = new lib.Symbol27();
	this.instance_5.setTransform(470,70);

	this.instance_6 = new lib.Symbol28();
	this.instance_6.setTransform(470,70);

	this.instance_7 = new lib.Symbol29();
	this.instance_7.setTransform(470,70);

	this.instance_8 = new lib.Symbol30();
	this.instance_8.setTransform(470,70);

	this.instance_9 = new lib.Symbol31();
	this.instance_9.setTransform(470,70);

	this.instance_10 = new lib.Symbol32();
	this.instance_10.setTransform(470,70);

	this.instance_11 = new lib.Symbol33();
	this.instance_11.setTransform(470,70);

	this.instance_12 = new lib.Symbol34();
	this.instance_12.setTransform(470,70);

	this.instance_13 = new lib.Symbol35();
	this.instance_13.setTransform(470,70);

	this.instance_14 = new lib.Symbol36();
	this.instance_14.setTransform(470,70);

	this.instance_15 = new lib.Symbol37();
	this.instance_15.setTransform(470,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,20,117.5,100);


(lib.Symbol23copy9 = function(mode,startPosition,loop,reversed) {
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
	this.frame_63 = function() {
		root.tarjeta05.tarjeta01.alas01.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(29));

	// Layer_2
	this.instance = new lib.Symbol38();
	this.instance.setTransform(470,70);

	this.instance_1 = new lib.Symbol39();
	this.instance_1.setTransform(470,70);

	this.instance_2 = new lib.Symbol24();
	this.instance_2.setTransform(470.5,70);

	this.instance_3 = new lib.Symbol25();
	this.instance_3.setTransform(470,70);

	this.instance_4 = new lib.Symbol26();
	this.instance_4.setTransform(470,70);

	this.instance_5 = new lib.Symbol27();
	this.instance_5.setTransform(470,70);

	this.instance_6 = new lib.Symbol28();
	this.instance_6.setTransform(470,70);

	this.instance_7 = new lib.Symbol29();
	this.instance_7.setTransform(470,70);

	this.instance_8 = new lib.Symbol30();
	this.instance_8.setTransform(470,70);

	this.instance_9 = new lib.Symbol31();
	this.instance_9.setTransform(470,70);

	this.instance_10 = new lib.Symbol32();
	this.instance_10.setTransform(470,70);

	this.instance_11 = new lib.Symbol33();
	this.instance_11.setTransform(470,70);

	this.instance_12 = new lib.Symbol34();
	this.instance_12.setTransform(470,70);

	this.instance_13 = new lib.Symbol35();
	this.instance_13.setTransform(470,70);

	this.instance_14 = new lib.Symbol36();
	this.instance_14.setTransform(470,70);

	this.instance_15 = new lib.Symbol37();
	this.instance_15.setTransform(470,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,20,117.5,100);


(lib.Symbol23copy8 = function(mode,startPosition,loop,reversed) {
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
	this.frame_63 = function() {
		root.tarjeta04.tarjeta01.alas02.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Layer_2
	this.instance = new lib.Symbol36();
	this.instance.setTransform(470,70);

	this.instance_1 = new lib.Symbol37();
	this.instance_1.setTransform(470,70);

	this.instance_2 = new lib.Symbol38();
	this.instance_2.setTransform(470,70);

	this.instance_3 = new lib.Symbol39();
	this.instance_3.setTransform(470,70);

	this.instance_4 = new lib.Symbol24();
	this.instance_4.setTransform(470.5,70);

	this.instance_5 = new lib.Symbol25();
	this.instance_5.setTransform(470,70);

	this.instance_6 = new lib.Symbol26();
	this.instance_6.setTransform(470,70);

	this.instance_7 = new lib.Symbol27();
	this.instance_7.setTransform(470,70);

	this.instance_8 = new lib.Symbol28();
	this.instance_8.setTransform(470,70);

	this.instance_9 = new lib.Symbol29();
	this.instance_9.setTransform(470,70);

	this.instance_10 = new lib.Symbol30();
	this.instance_10.setTransform(470,70);

	this.instance_11 = new lib.Symbol31();
	this.instance_11.setTransform(470,70);

	this.instance_12 = new lib.Symbol32();
	this.instance_12.setTransform(470,70);

	this.instance_13 = new lib.Symbol33();
	this.instance_13.setTransform(470,70);

	this.instance_14 = new lib.Symbol34();
	this.instance_14.setTransform(470,70);

	this.instance_15 = new lib.Symbol35();
	this.instance_15.setTransform(470,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,20,117.5,100);


(lib.Symbol23copy7 = function(mode,startPosition,loop,reversed) {
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
	this.frame_63 = function() {
		root.tarjeta04.tarjeta01.alas01.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Layer_2
	this.instance = new lib.Symbol36();
	this.instance.setTransform(470,70);

	this.instance_1 = new lib.Symbol37();
	this.instance_1.setTransform(470,70);

	this.instance_2 = new lib.Symbol38();
	this.instance_2.setTransform(470,70);

	this.instance_3 = new lib.Symbol39();
	this.instance_3.setTransform(470,70);

	this.instance_4 = new lib.Symbol24();
	this.instance_4.setTransform(470.5,70);

	this.instance_5 = new lib.Symbol25();
	this.instance_5.setTransform(470,70);

	this.instance_6 = new lib.Symbol26();
	this.instance_6.setTransform(470,70);

	this.instance_7 = new lib.Symbol27();
	this.instance_7.setTransform(470,70);

	this.instance_8 = new lib.Symbol28();
	this.instance_8.setTransform(470,70);

	this.instance_9 = new lib.Symbol29();
	this.instance_9.setTransform(470,70);

	this.instance_10 = new lib.Symbol30();
	this.instance_10.setTransform(470,70);

	this.instance_11 = new lib.Symbol31();
	this.instance_11.setTransform(470,70);

	this.instance_12 = new lib.Symbol32();
	this.instance_12.setTransform(470,70);

	this.instance_13 = new lib.Symbol33();
	this.instance_13.setTransform(470,70);

	this.instance_14 = new lib.Symbol34();
	this.instance_14.setTransform(470,70);

	this.instance_15 = new lib.Symbol35();
	this.instance_15.setTransform(470,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,20,117.5,100);


(lib.Symbol23copy6 = function(mode,startPosition,loop,reversed) {
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
	this.frame_63 = function() {
		root.tarjeta03.tarjeta01.alas02.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(9));

	// Layer_2
	this.instance = new lib.Symbol33();
	this.instance.setTransform(470,70);

	this.instance_1 = new lib.Symbol34();
	this.instance_1.setTransform(470,70);

	this.instance_2 = new lib.Symbol35();
	this.instance_2.setTransform(470,70);

	this.instance_3 = new lib.Symbol36();
	this.instance_3.setTransform(470,70);

	this.instance_4 = new lib.Symbol37();
	this.instance_4.setTransform(470,70);

	this.instance_5 = new lib.Symbol38();
	this.instance_5.setTransform(470,70);

	this.instance_6 = new lib.Symbol39();
	this.instance_6.setTransform(470,70);

	this.instance_7 = new lib.Symbol24();
	this.instance_7.setTransform(470.5,70);

	this.instance_8 = new lib.Symbol25();
	this.instance_8.setTransform(470,70);

	this.instance_9 = new lib.Symbol26();
	this.instance_9.setTransform(470,70);

	this.instance_10 = new lib.Symbol27();
	this.instance_10.setTransform(470,70);

	this.instance_11 = new lib.Symbol28();
	this.instance_11.setTransform(470,70);

	this.instance_12 = new lib.Symbol29();
	this.instance_12.setTransform(470,70);

	this.instance_13 = new lib.Symbol30();
	this.instance_13.setTransform(470,70);

	this.instance_14 = new lib.Symbol31();
	this.instance_14.setTransform(470,70);

	this.instance_15 = new lib.Symbol32();
	this.instance_15.setTransform(470,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,20,117.5,100);


(lib.Symbol23copy5 = function(mode,startPosition,loop,reversed) {
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
	this.frame_63 = function() {
		root.tarjeta03.tarjeta01.alas01.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(9));

	// Layer_2
	this.instance = new lib.Symbol33();
	this.instance.setTransform(470,70);

	this.instance_1 = new lib.Symbol34();
	this.instance_1.setTransform(470,70);

	this.instance_2 = new lib.Symbol35();
	this.instance_2.setTransform(470,70);

	this.instance_3 = new lib.Symbol36();
	this.instance_3.setTransform(470,70);

	this.instance_4 = new lib.Symbol37();
	this.instance_4.setTransform(470,70);

	this.instance_5 = new lib.Symbol38();
	this.instance_5.setTransform(470,70);

	this.instance_6 = new lib.Symbol39();
	this.instance_6.setTransform(470,70);

	this.instance_7 = new lib.Symbol24();
	this.instance_7.setTransform(470.5,70);

	this.instance_8 = new lib.Symbol25();
	this.instance_8.setTransform(470,70);

	this.instance_9 = new lib.Symbol26();
	this.instance_9.setTransform(470,70);

	this.instance_10 = new lib.Symbol27();
	this.instance_10.setTransform(470,70);

	this.instance_11 = new lib.Symbol28();
	this.instance_11.setTransform(470,70);

	this.instance_12 = new lib.Symbol29();
	this.instance_12.setTransform(470,70);

	this.instance_13 = new lib.Symbol30();
	this.instance_13.setTransform(470,70);

	this.instance_14 = new lib.Symbol31();
	this.instance_14.setTransform(470,70);

	this.instance_15 = new lib.Symbol32();
	this.instance_15.setTransform(470,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,20,117.5,100);


(lib.Symbol23copy4 = function(mode,startPosition,loop,reversed) {
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
	this.frame_63 = function() {
		root.tarjeta02.tarjeta01.alas02.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Layer_2
	this.instance = new lib.Symbol36();
	this.instance.setTransform(470,70);

	this.instance_1 = new lib.Symbol37();
	this.instance_1.setTransform(470,70);

	this.instance_2 = new lib.Symbol38();
	this.instance_2.setTransform(470,70);

	this.instance_3 = new lib.Symbol39();
	this.instance_3.setTransform(470,70);

	this.instance_4 = new lib.Symbol24();
	this.instance_4.setTransform(470.5,70);

	this.instance_5 = new lib.Symbol25();
	this.instance_5.setTransform(470,70);

	this.instance_6 = new lib.Symbol26();
	this.instance_6.setTransform(470,70);

	this.instance_7 = new lib.Symbol27();
	this.instance_7.setTransform(470,70);

	this.instance_8 = new lib.Symbol28();
	this.instance_8.setTransform(470,70);

	this.instance_9 = new lib.Symbol29();
	this.instance_9.setTransform(470,70);

	this.instance_10 = new lib.Symbol30();
	this.instance_10.setTransform(470,70);

	this.instance_11 = new lib.Symbol31();
	this.instance_11.setTransform(470,70);

	this.instance_12 = new lib.Symbol32();
	this.instance_12.setTransform(470,70);

	this.instance_13 = new lib.Symbol33();
	this.instance_13.setTransform(470,70);

	this.instance_14 = new lib.Symbol34();
	this.instance_14.setTransform(470,70);

	this.instance_15 = new lib.Symbol35();
	this.instance_15.setTransform(470,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,20,117.5,100);


(lib.Symbol23copy2 = function(mode,startPosition,loop,reversed) {
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
	this.frame_63 = function() {
		root.tarjeta02.tarjeta01.alas01.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Layer_2
	this.instance = new lib.Symbol36();
	this.instance.setTransform(470,70);

	this.instance_1 = new lib.Symbol37();
	this.instance_1.setTransform(470,70);

	this.instance_2 = new lib.Symbol38();
	this.instance_2.setTransform(470,70);

	this.instance_3 = new lib.Symbol39();
	this.instance_3.setTransform(470,70);

	this.instance_4 = new lib.Symbol24();
	this.instance_4.setTransform(470.5,70);

	this.instance_5 = new lib.Symbol25();
	this.instance_5.setTransform(470,70);

	this.instance_6 = new lib.Symbol26();
	this.instance_6.setTransform(470,70);

	this.instance_7 = new lib.Symbol27();
	this.instance_7.setTransform(470,70);

	this.instance_8 = new lib.Symbol28();
	this.instance_8.setTransform(470,70);

	this.instance_9 = new lib.Symbol29();
	this.instance_9.setTransform(470,70);

	this.instance_10 = new lib.Symbol30();
	this.instance_10.setTransform(470,70);

	this.instance_11 = new lib.Symbol31();
	this.instance_11.setTransform(470,70);

	this.instance_12 = new lib.Symbol32();
	this.instance_12.setTransform(470,70);

	this.instance_13 = new lib.Symbol33();
	this.instance_13.setTransform(470,70);

	this.instance_14 = new lib.Symbol34();
	this.instance_14.setTransform(470,70);

	this.instance_15 = new lib.Symbol35();
	this.instance_15.setTransform(470,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,20,117.5,100);


(lib.Symbol23copy = function(mode,startPosition,loop,reversed) {
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
	this.frame_63 = function() {
		root.tarjeta01.tarjeta01.alas01.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Layer_2
	this.instance = new lib.Symbol31();
	this.instance.setTransform(470,70);

	this.instance_1 = new lib.Symbol32();
	this.instance_1.setTransform(470,70);

	this.instance_2 = new lib.Symbol33();
	this.instance_2.setTransform(470,70);

	this.instance_3 = new lib.Symbol34();
	this.instance_3.setTransform(470,70);

	this.instance_4 = new lib.Symbol35();
	this.instance_4.setTransform(470,70);

	this.instance_5 = new lib.Symbol36();
	this.instance_5.setTransform(470,70);

	this.instance_6 = new lib.Symbol37();
	this.instance_6.setTransform(470,70);

	this.instance_7 = new lib.Symbol38();
	this.instance_7.setTransform(470,70);

	this.instance_8 = new lib.Symbol39();
	this.instance_8.setTransform(470,70);

	this.instance_9 = new lib.Symbol24();
	this.instance_9.setTransform(470.5,70);

	this.instance_10 = new lib.Symbol25();
	this.instance_10.setTransform(470,70);

	this.instance_11 = new lib.Symbol26();
	this.instance_11.setTransform(470,70);

	this.instance_12 = new lib.Symbol27();
	this.instance_12.setTransform(470,70);

	this.instance_13 = new lib.Symbol28();
	this.instance_13.setTransform(470,70);

	this.instance_14 = new lib.Symbol29();
	this.instance_14.setTransform(470,70);

	this.instance_15 = new lib.Symbol30();
	this.instance_15.setTransform(470,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,20,117.5,100);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
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
	this.frame_63 = function() {
		root.tarjeta01.tarjeta01.alas02.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Layer_2
	this.instance = new lib.Symbol31();
	this.instance.setTransform(470,70);

	this.instance_1 = new lib.Symbol32();
	this.instance_1.setTransform(470,70);

	this.instance_2 = new lib.Symbol33();
	this.instance_2.setTransform(470,70);

	this.instance_3 = new lib.Symbol34();
	this.instance_3.setTransform(470,70);

	this.instance_4 = new lib.Symbol35();
	this.instance_4.setTransform(470,70);

	this.instance_5 = new lib.Symbol36();
	this.instance_5.setTransform(470,70);

	this.instance_6 = new lib.Symbol37();
	this.instance_6.setTransform(470,70);

	this.instance_7 = new lib.Symbol38();
	this.instance_7.setTransform(470,70);

	this.instance_8 = new lib.Symbol39();
	this.instance_8.setTransform(470,70);

	this.instance_9 = new lib.Symbol24();
	this.instance_9.setTransform(470.5,70);

	this.instance_10 = new lib.Symbol25();
	this.instance_10.setTransform(470,70);

	this.instance_11 = new lib.Symbol26();
	this.instance_11.setTransform(470,70);

	this.instance_12 = new lib.Symbol27();
	this.instance_12.setTransform(470,70);

	this.instance_13 = new lib.Symbol28();
	this.instance_13.setTransform(470,70);

	this.instance_14 = new lib.Symbol29();
	this.instance_14.setTransform(470,70);

	this.instance_15 = new lib.Symbol30();
	this.instance_15.setTransform(470,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,20,117.5,100);


(lib.Symbol14yt = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol6yt();
	this.instance.setTransform(0,0,0.7054,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14yt, new cjs.Rectangle(-66.9,-31.2,149.5,62.599999999999994), null);


(lib.Symbol12hs = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._65757hs();
	this.instance.setTransform(0.65,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12hs, new cjs.Rectangle(-43.8,-13.1,88.9,26.7), null);


(lib.Symbol8hs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {rollOver:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop ();
	}
	this.frame_90 = function() {
		this.stop ();
	}
	this.frame_91 = function() {
		root.btn1.btn2.gotoAndPlay ('rollOver');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(89).call(this.frame_90).wait(1).call(this.frame_91).wait(1));

	// BRILLO
	this.instance = new lib.Symbol14yt();
	this.instance.setTransform(-118.6,1.5,0.8116,1,0,0,0,-0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({x:105.2,y:-0.55},87,cjs.Ease.get(0.5)).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.8,-31.8,345.20000000000005,64.7);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"loop":4};
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
	this.instance = new lib.Symbol7();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:1},0).to({alpha:0},20).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214.8,-175.2,858.7,202.2);


(lib.Symbol4HBSC = function(mode,startPosition,loop,reversed) {
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
	this.frame_24 = function() {
		this.stop ();
	}
	this.frame_45 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(21).call(this.frame_45).wait(1));

	// Layer_3
	this.instance = new lib.Symbol3copy3();
	this.instance.setTransform(-67.35,-2.25,0.1548,0.1548,0,0,0,8.4,7.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:7.5,scaleX:0.9196,scaleY:0.9196,x:-67.45,y:-2.05},23,cjs.Ease.get(1)).to({regY:7.8,scaleX:0.1548,scaleY:0.1548,x:-67.35,y:-2.25},20).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol3copyHSBC();
	this.instance_1.setTransform(0,5.05);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:0,alpha:1},23,cjs.Ease.get(0.5)).to({y:-4.95,alpha:0},20,cjs.Ease.get(-0.5)).to({_off:true},1).wait(1));

	// guia
	this.instance_2 = new lib.Symbol3copy3();
	this.instance_2.setTransform(-69.7,-2.25,0.9454,0.9454,0,0,0,8.6,7.7);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Symbol3copyHSBC();
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},45).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.8,-17.2,183.39999999999998,36.3);


(lib.Symbol4copyh = function(mode,startPosition,loop,reversed) {
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
	this.frame_24 = function() {
		this.stop ();
	}
	this.frame_49 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(1));

	// Layer_1
	this.instance = new lib.Symbol3copy2h();
	this.instance.setTransform(0.15,5.05);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:0.05,alpha:1},23,cjs.Ease.get(0.5)).to({y:-4.95,alpha:0},25,cjs.Ease.get(-0.5)).wait(1));

	// guia
	this.instance_1 = new lib.Symbol3copy2h();
	this.instance_1.setTransform(0.15,0.05);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.9,0.3,141.8,33.400000000000006);


(lib.Symbol4copy = function(mode,startPosition,loop,reversed) {
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
	this.frame_24 = function() {
		this.stop ();
	}
	this.frame_49 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(1));

	// Layer_1
	this.instance = new lib.Symbol3copy2();
	this.instance.setTransform(0.15,5.05);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:0.05,alpha:1},23,cjs.Ease.get(0.5)).to({y:-4.95,alpha:0},25,cjs.Ease.get(-0.5)).wait(1));

	// guia
	this.instance_1 = new lib.Symbol3copy2();
	this.instance_1.setTransform(0.15,0.05);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.2,5.4,137,35.5);


(lib._897979hs = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol12hs();
	this.instance.setTransform(-0.65,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._897979hs, new cjs.Rectangle(-44.4,-13.3,88.9,26.700000000000003), null);


(lib.Symbol40copy6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
	mask.graphics.p("Aj0F0IAArnIHpAAIAALng");
	mask.setTransform(90.5,-31);

	// tarjetamascara
	this.instance = new lib.tarjeta01copy();
	this.instance.setTransform(57,-34);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// alas
	this.alas02 = new lib.Symbol23copy10();
	this.alas02.name = "alas02";
	this.alas02.setTransform(147.1,-44,1,1,0,0,180,468.9,72);

	this.alas01 = new lib.Symbol23copy9();
	this.alas01.name = "alas01";
	this.alas01.setTransform(-502.25,-113.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.alas01},{t:this.alas02}]}).wait(1));

	// tarjeta
	this.instance_1 = new lib.tarjeta01copy();
	this.instance_1.setTransform(57,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40copy6, new cjs.Rectangle(-104,-127,322.2,181.2), null);


(lib.Symbol40copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
	mask.graphics.p("Aj0F0IAArnIHpAAIAALng");
	mask.setTransform(90.5,-31);

	// tarjetamascara
	this.instance = new lib.tarjeta01_1();
	this.instance.setTransform(57.65,-34);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// alas
	this.alas02 = new lib.Symbol23copy8();
	this.alas02.name = "alas02";
	this.alas02.setTransform(147.1,-44,1,1,0,0,180,468.9,72);

	this.alas01 = new lib.Symbol23copy7();
	this.alas01.name = "alas01";
	this.alas01.setTransform(-502.25,-113.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.alas01},{t:this.alas02}]}).wait(1));

	// tarjeta
	this.instance_1 = new lib.tarjeta01_1();
	this.instance_1.setTransform(57.65,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40copy3, new cjs.Rectangle(-104,-127,322.2,181.2), null);


(lib.Symbol40copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
	mask.graphics.p("Aj0F0IAArnIHpAAIAALng");
	mask.setTransform(90.5,-31);

	// tarjetamascara
	this.instance = new lib.tarjeta01_1();
	this.instance.setTransform(57.65,-34);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// alas
	this.alas02 = new lib.Symbol23copy6();
	this.alas02.name = "alas02";
	this.alas02.setTransform(147.1,-44,1,1,0,0,180,468.9,72);

	this.alas01 = new lib.Symbol23copy5();
	this.alas01.name = "alas01";
	this.alas01.setTransform(-502.25,-113.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.alas01},{t:this.alas02}]}).wait(1));

	// tarjeta
	this.instance_1 = new lib.tarjeta01_1();
	this.instance_1.setTransform(57.65,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40copy2, new cjs.Rectangle(-104,-127,322.2,181.2), null);


(lib.Symbol40copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
	mask.graphics.p("Aj0F0IAArnIHpAAIAALng");
	mask.setTransform(90.5,-31);

	// tarjetamascara
	this.instance = new lib.tarjeta01_1();
	this.instance.setTransform(57.65,-34);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// alas
	this.alas02 = new lib.Symbol23copy4();
	this.alas02.name = "alas02";
	this.alas02.setTransform(147.1,-44,1,1,0,0,180,468.9,72);

	this.alas01 = new lib.Symbol23copy2();
	this.alas01.name = "alas01";
	this.alas01.setTransform(-502.25,-113.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.alas01},{t:this.alas02}]}).wait(1));

	// tarjeta
	this.instance_1 = new lib.tarjeta01_1();
	this.instance_1.setTransform(57.65,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40copy, new cjs.Rectangle(-104,-127,322.2,181.2), null);


(lib.Symbol40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
	mask.graphics.p("Aj0F0IAArnIHpAAIAALng");
	mask.setTransform(90.5,-31);

	// tarjetamascara
	this.instance = new lib.tarjeta01_1();
	this.instance.setTransform(57,-34);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// alas
	this.alas02 = new lib.Symbol23();
	this.alas02.name = "alas02";
	this.alas02.setTransform(147.1,-44,1,1,0,0,180,468.9,72);

	this.alas01 = new lib.Symbol23copy();
	this.alas01.name = "alas01";
	this.alas01.setTransform(-502.25,-113.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.alas01},{t:this.alas02}]}).wait(1));

	// tarjeta
	this.instance_1 = new lib.tarjeta01_1();
	this.instance_1.setTransform(57.65,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(-104,-127,322.2,181.2), null);


(lib.ctahs = function(mode,startPosition,loop,reversed) {
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
	this.frame_77 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(77).call(this.frame_77).wait(35));

	// txt
	this.instance = new lib.Symbol13s();
	this.instance.setTransform(-2,-1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).to({alpha:1},17).wait(59));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_19 = new cjs.Graphics().p("AB0CAQgogmAAg4QAAg3AognQAognA5AAQA5AAAoAnQAoAnAAA3QAAA4goAmQgoAog5AAQg5AAgogog");
	var mask_graphics_20 = new cjs.Graphics().p("AhvBtQgvgsAAhBQAAg/AvguQAuguBBABQBCgBAuAuQAvAuAAA/QAABBgvAsQguAvhCgBQhBABgugvg");
	var mask_graphics_21 = new cjs.Graphics().p("Ah/B9Qg1g0AAhJQAAhIA1g1QA2gzBJAAQBLAAA0AzQA2A1AABIQAABJg2A0Qg0A0hLAAQhJAAg2g0g");
	var mask_graphics_22 = new cjs.Graphics().p("AiPCMQg6g6AAhSQAAhRA6g7QA9g5BSAAQBUAAA6A5QA9A7AABRQAABSg9A6Qg6A6hUAAQhSAAg9g6g");
	var mask_graphics_23 = new cjs.Graphics().p("AieCbQhChAABhbQgBhaBChBQBChABcAAQBdAABBBAQBCBBAABaQAABbhCBAQhBBBhdAAQhcAAhChBg");
	var mask_graphics_24 = new cjs.Graphics().p("AitCqQhIhGAAhkQAAhjBIhHQBIhGBlAAQBmAABIBGQBIBHAABjQAABkhIBGQhIBHhmAAQhlAAhIhHg");
	var mask_graphics_25 = new cjs.Graphics().p("Ai9C5QhOhMAAhtQAAhrBOhOQBPhNBuAAQBvAABOBNQBPBOAABrQAABthPBMQhOBOhvAAQhuAAhPhOg");
	var mask_graphics_26 = new cjs.Graphics().p("AjMDJQhVhTAAh2QAAh1BVhUQBVhSB3AAQB4AABUBSQBWBUAAB1QAAB2hWBTQhUBTh4AAQh3AAhVhTg");
	var mask_graphics_27 = new cjs.Graphics().p("AjbDYQhchZAAh/QAAh+BchaQBbhZCAAAQCBAABbBZQBcBaAAB+QAAB/hcBZQhbBaiBAAQiAAAhbhag");
	var mask_graphics_28 = new cjs.Graphics().p("AjrDnQhihfAAiIQAAiGBihhQBihfCJAAQCKAABhBfQBjBhAACGQAACIhjBfQhhBgiKAAQiJAAhihgg");
	var mask_graphics_29 = new cjs.Graphics().p("Aj7D2QhohlAAiRQAAiPBohnQBphmCSAAQCTAABnBmQBqBnAACPQAACRhqBlQhnBniTAAQiSAAhphng");
	var mask_graphics_30 = new cjs.Graphics().p("AkKEFQhvhrABiaQgBiYBvhtQBwhsCaAAQCcAABuBsQBwBtAACYQAACahwBrQhuBticAAQiaAAhwhtg");
	var mask_graphics_31 = new cjs.Graphics().p("AkaEVQh1hzAAiiQAAihB1h0QB2hyCkAAQClAAB0ByQB3B0gBChQABCih3BzQh0BzilAAQikAAh2hzg");
	var mask_graphics_32 = new cjs.Graphics().p("AkpEkQh7h5AAirQAAiqB7h6QB8h4CtAAQCuAAB7B4QB8B6AACqQAACrh8B5Qh7B5iuAAQitAAh8h5g");
	var mask_graphics_33 = new cjs.Graphics().p("Ak5EzQiBh/AAi0QAAizCBiAQCDh/C2AAQC3AACBB/QCDCAAACzQAAC0iDB/QiBCAi3AAQi2AAiDiAg");
	var mask_graphics_34 = new cjs.Graphics().p("AlIFCQiIiFAAi9QAAi8CIiGQCJiFC/AAQDAAACICFQCJCGAAC8QAAC9iJCFQiICGjAAAQi/AAiJiGg");
	var mask_graphics_35 = new cjs.Graphics().p("AlYFRQiOiLAAjGQAAjECOiOQCQiKDIAAQDJAACOCKQCQCOAADEQAADGiQCLQiOCMjJABQjIgBiQiMg");
	var mask_graphics_36 = new cjs.Graphics().p("AlnFgQiViRAAjPQAAjNCViUQCWiRDRAAQDSAACVCRQCWCUAADNQAADPiWCRQiVCTjSAAQjRAAiWiTg");
	var mask_graphics_37 = new cjs.Graphics().p("Al3FwQibiYAAjYQAAjWCbiaQCdiYDaAAQDbAACbCYQCdCaAADWQAADYidCYQibCZjbAAQjaAAidiZg");
	var mask_graphics_38 = new cjs.Graphics().p("AmGF/QihieAAjhQAAjfChigQCjieDjAAQDkAAChCeQCjCgAADfQAADhijCeQihCfjkAAQjjAAijifg");
	var mask_graphics_39 = new cjs.Graphics().p("AmWGOQinikgBjqQABjoCnimQCqilDsAAQDtAACoClQCpCmABDoQgBDqipCkQioCmjtAAQjsAAiqimg");
	var mask_graphics_40 = new cjs.Graphics().p("AmlGdQiuiqAAjzQAAjwCuiuQCwiqD1AAQD2AACuCqQCwCuAADwQAADziwCqQiuCsj2AAQj1AAiwisg");
	var mask_graphics_41 = new cjs.Graphics().p("Am0GtQi1iyAAj7QAAj6C1iyQC2iyD+ABQD/gBC1CyQC2CyAAD6QAAD7i2CyQi1Cyj/AAQj+AAi2iyg");
	var mask_graphics_42 = new cjs.Graphics().p("AnEG8Qi7i4AAkEQAAkCC7i6QC9i3EHAAQEJAAC6C3QC9C6AAECQAAEEi9C4Qi6C4kJAAQkHAAi9i4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:35,y:16.8}).wait(1).to({graphics:mask_graphics_20,x:54.6,y:19.3}).wait(1).to({graphics:mask_graphics_21,x:52.875,y:18.4}).wait(1).to({graphics:mask_graphics_22,x:51.2,y:17.475}).wait(1).to({graphics:mask_graphics_23,x:49.5,y:16.575}).wait(1).to({graphics:mask_graphics_24,x:47.775,y:15.675}).wait(1).to({graphics:mask_graphics_25,x:46.075,y:14.75}).wait(1).to({graphics:mask_graphics_26,x:44.375,y:13.85}).wait(1).to({graphics:mask_graphics_27,x:42.65,y:12.95}).wait(1).to({graphics:mask_graphics_28,x:40.975,y:12.025}).wait(1).to({graphics:mask_graphics_29,x:39.275,y:11.125}).wait(1).to({graphics:mask_graphics_30,x:37.55,y:10.225}).wait(1).to({graphics:mask_graphics_31,x:35.85,y:9.325}).wait(1).to({graphics:mask_graphics_32,x:34.125,y:8.425}).wait(1).to({graphics:mask_graphics_33,x:32.425,y:7.525}).wait(1).to({graphics:mask_graphics_34,x:30.75,y:6.6}).wait(1).to({graphics:mask_graphics_35,x:29.025,y:5.7}).wait(1).to({graphics:mask_graphics_36,x:27.325,y:4.8}).wait(1).to({graphics:mask_graphics_37,x:25.625,y:3.875}).wait(1).to({graphics:mask_graphics_38,x:23.9,y:2.975}).wait(1).to({graphics:mask_graphics_39,x:22.2,y:2.075}).wait(1).to({graphics:mask_graphics_40,x:20.525,y:1.15}).wait(1).to({graphics:mask_graphics_41,x:18.8,y:0.25}).wait(1).to({graphics:mask_graphics_42,x:17.1,y:-0.65}).wait(70));

	// linea02
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D7282F").ss(1.5).p("AGzCAIAAj3ItsAA");
	this.shape.setTransform(0.475,-1.4);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(19).to({_off:false},0).wait(93));

	// Layer_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Aj+BWQhGgSgmg1Qgmg0APg5QAPg5A7gcQA8gbBFASQBFASAmA1QAnA1gPA5QgPA5g8AbQgkARgnAAQgaAAgbgIg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AjsCBQhPgTgsg9Qgsg8ARhCQAQhDBDghQBEghBOATQBPAUAsA8QArA9gPBCQgRBDhDAgQgrAVgvAAQgbAAgdgHg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AjZCsQhYgVgyhEQgyhEAShLQARhMBLgnQBLgnBZAVQBYAUAxBEQAyBFgSBLQgSBMhKAmQgxAag3AAQgcAAgfgHg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AjFDOQhigWg4hLQg4hLAThVQAThVBSguQBSgsBiAVQBjAWA3BLQA4BLgTBVQgTBVhRAtQg4Afg/AAQgeAAgggHg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AiwDlQhrgWg/hTQg+hSATheQAUhfBag0QBZgzBsAWQBrAWA+BTQA/BSgUBeQgTBfhaAzQg+AkhIAAQgeAAghgGg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AiaD8Qh1gXhFhZQhFhaAUhnQAUhpBhg6QBhg5B2AWQB0AXBFBZQBFBagUBnQgUBphhA5QhFAqhRAAQgfAAghgGg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AiDETQh/gXhMhgQhLhgAUhxQAUhyBohBQBohACAAWQB+AXBMBgQBLBggUBxQgUBzhoBAQhOAwhZAAQgfAAghgGg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AhrEqQiJgWhShoQhThmAUh7QAVh8BvhHQBvhHCJAWQCIAXBSBmQBTBngVB7QgUB8hvBHQhUA2hjAAQgfAAghgFg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AhSFBQiTgWhZhuQhahtAUiEQAUiFB2hPQB1hOCSAWQCTAWBaBtQBZBugUCEQgUCFh1BOQhcA+htAAQgfAAgggFg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Ag4FYQidgVhhh0QhhhzAUiOQATiPB8hWQB9hVCbAVQCdAVBhBzQBhB0gUCOQgTCPh8BVQhkBFh4AAQgdAAgfgEg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AgsFvQimgUhph6Qhoh5ASiYQATiZCDhdQCChdCmAVQCmAUBpB5QBoB6gSCYQgTCZiDBcQhrBNiEAAQgbAAgegEg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AgpGHQixgUhwiAQhwh/ASihQARiiCJhlQCJhlCvATQCxAUBwB/QBwCAgSChQgRCiiJBlQhzBViPAAQgaAAgcgDg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AgmGeQi6gSh4iGQh4iFAQirQAQirCPhtQCPhsC5ARQC6ASB4CFQB4CGgQCrQgQCriPBsQh7BeibAAQgYAAgagCg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AgiG1QjEgQiAiLQiAiLAOi0QAPi2CVh1QCVh0DCAQQDEAQCACKQCACMgOC0QgPC2iVB0QiDBninAAQgWAAgXgCg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AgeHMQjOgOiIiRQiIiQANi+QANi/Cah9QCah8DNAOQDOAOCICQQCICRgNC+QgNC/iaB8QiLBwi1AAIgngBg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AgZHjQjYgLiQiWQiRiVALjIQALjJCgiFQCgiFDWAMQDYALCQCVQCRCWgLDIQgLDJigCEQiTB7jCAAIghgBg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AgUH6QjhgJiZibQiZiaAJjRQAIjSCliOQCliNDhAJQDhAJCZCaQCZCbgJDRQgIDSilCNQibCGjRAAIgagBg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AgNIRQjrgGiiigQiiifAGjaQAGjcCqiXQCqiWDqAHQDrAGCiCfQCiCggGDaQgGDciqCWQikCQjeAAIgSAAg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AgGIoQj1gDirilQiqijADjkQADjlCvigQCvieDzADQD1ADCrCjQCqClgDDkQgDDlivCfQirCcjvAAIgIAAg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AmxGWQizinAAjvQAAjuCzioQC0ioD9AAQD+AAC0CoQCzCoAADuQAADvizCnQi0Cpj+AAQj9AAi0ipg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-39.0289,y:-19.6547}).wait(1).to({graphics:mask_1_graphics_1,x:-39.1838,y:-19.8835}).wait(1).to({graphics:mask_1_graphics_2,x:-39.3023,y:-20.1383}).wait(1).to({graphics:mask_1_graphics_3,x:-39.3851,y:-19.5544}).wait(1).to({graphics:mask_1_graphics_4,x:-39.4324,y:-17.9122}).wait(1).to({graphics:mask_1_graphics_5,x:-39.4447,y:-16.326}).wait(1).to({graphics:mask_1_graphics_6,x:-39.4227,y:-14.7973}).wait(1).to({graphics:mask_1_graphics_7,x:-39.3667,y:-13.3273}).wait(1).to({graphics:mask_1_graphics_8,x:-39.2775,y:-11.9174}).wait(1).to({graphics:mask_1_graphics_9,x:-39.1554,y:-10.5691}).wait(1).to({graphics:mask_1_graphics_10,x:-37.5659,y:-9.2835}).wait(1).to({graphics:mask_1_graphics_11,x:-34.8688,y:-8.0622}).wait(1).to({graphics:mask_1_graphics_12,x:-32.1113,y:-6.9062}).wait(1).to({graphics:mask_1_graphics_13,x:-29.2946,y:-5.817}).wait(1).to({graphics:mask_1_graphics_14,x:-26.4202,y:-4.7957}).wait(1).to({graphics:mask_1_graphics_15,x:-23.4892,y:-3.8435}).wait(1).to({graphics:mask_1_graphics_16,x:-20.5031,y:-2.9617}).wait(1).to({graphics:mask_1_graphics_17,x:-17.4632,y:-2.1515}).wait(1).to({graphics:mask_1_graphics_18,x:-14.371,y:-1.4139}).wait(1).to({graphics:mask_1_graphics_19,x:-11.05,y:-1.25}).wait(1).to({graphics:null,x:0,y:0}).wait(92));

	// linea01
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D7282F").ss(1.5).p("Amwh9IAADzINpAA");
	this.shape_1.setTransform(0.05,-0.3);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(112));

	// Layer_9
	this.instance_1 = new lib._897979hs();
	this.instance_1.setTransform(1.05,-1.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(112));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_53 = new cjs.Graphics().p("Am8CFIAAkJIN5AAIAAEJg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_2_graphics_53,x:0,y:-1}).wait(59));

	// btn2
	this.btn2 = new lib.Symbol8hs();
	this.btn2.name = "btn2";
	this.btn2.setTransform(0,-1);
	this.btn2._off = true;

	var maskedShapeInstanceList = [this.btn2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(53).to({_off:false},0).wait(59));

	// Layer_3
	this.instance_2 = new lib._65757hs();
	this.instance_2.setTransform(0,-1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({alpha:1},17).wait(59));

	// guia
	this.instance_3 = new lib._65757hs();
	this.instance_3.setTransform(0,-1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(112));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.7,-14.7,90.2,27.2);


(lib.Symbol41copy4 = function(mode,startPosition,loop,reversed) {
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
	this.frame_127 = function() {
		root.tarjeta05.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(127).call(this.frame_127).wait(1));

	// tarjeta01
	this.tarjeta01 = new lib.Symbol40copy6();
	this.tarjeta01.name = "tarjeta01";
	this.tarjeta01.setTransform(-16.4,-32.55,1,1,-7.4752,0,0,58.6,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.tarjeta01).to({regY:-35.6,rotation:6.2371,y:-33.15},63,cjs.Ease.quadInOut).to({regY:-35.5,rotation:-7.4752,y:-32.55},64,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.1,-121.6,316.29999999999995,178);


(lib.Symbol41copy3 = function(mode,startPosition,loop,reversed) {
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
	this.frame_127 = function() {
		root.tarjeta04.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(127).call(this.frame_127).wait(1));

	// tarjeta01
	this.tarjeta01 = new lib.Symbol40copy3();
	this.tarjeta01.name = "tarjeta01";
	this.tarjeta01.setTransform(-16.4,-32.55,1,1,-7.4752,0,0,58.6,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.tarjeta01).to({regY:-35.6,rotation:6.2371,y:-33.15},63,cjs.Ease.quadInOut).to({regY:-35.5,rotation:-7.4752,y:-32.55},64,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.1,-121.6,316.29999999999995,178);


(lib.Symbol41copy2 = function(mode,startPosition,loop,reversed) {
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
	this.frame_127 = function() {
		root.tarjeta03.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(127).call(this.frame_127).wait(1));

	// tarjeta01
	this.tarjeta01 = new lib.Symbol40copy2();
	this.tarjeta01.name = "tarjeta01";
	this.tarjeta01.setTransform(-16.4,-32.55,1,1,-7.4752,0,0,58.6,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.tarjeta01).to({regY:-35.6,rotation:6.2371,y:-33.15},63,cjs.Ease.quadInOut).to({regY:-35.5,rotation:-7.4752,y:-32.55},64,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.1,-121.6,316.29999999999995,178);


(lib.Symbol41copy = function(mode,startPosition,loop,reversed) {
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
	this.frame_127 = function() {
		root.tarjeta02.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(127).call(this.frame_127).wait(1));

	// tarjeta01
	this.tarjeta01 = new lib.Symbol40copy();
	this.tarjeta01.name = "tarjeta01";
	this.tarjeta01.setTransform(-16.4,-32.55,1,1,-7.4752,0,0,58.6,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.tarjeta01).to({regY:-35.6,rotation:6.2371,y:-33.15},63,cjs.Ease.quadInOut).to({regY:-35.5,rotation:-7.4752,y:-32.55},64,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.1,-121.6,316.29999999999995,178);


(lib.Symbol41 = function(mode,startPosition,loop,reversed) {
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
	this.frame_127 = function() {
		root.tarjeta01.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(127).call(this.frame_127).wait(1));

	// tarjeta01
	this.tarjeta01 = new lib.Symbol40();
	this.tarjeta01.name = "tarjeta01";
	this.tarjeta01.setTransform(-16.4,-32.55,1,1,-7.4752,0,0,58.6,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.tarjeta01).to({regY:-35.6,rotation:6.2371,y:-33.15},63,cjs.Ease.quadInOut).to({regY:-35.5,rotation:-7.4752,y:-32.55},64,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.1,-121.6,316.29999999999995,178);


// stage content:
(lib._728x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fade:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4,171,194,441,459,565,899];
	// timeline functions:
	this.frame_0 = function() {
		// ------------- Variables ------------------- //
		root = this;
		loopNum = 0;
		
		
		/* EVENTOS MOUSEOVER */
		document.eventoRollOver = function(){
			root.btn1.btn2.play();
		
		}
	}
	this.frame_4 = function() {
		root.txt01.gotoAndPlay ('loop');
	}
	this.frame_171 = function() {
		root.txt01.play ();
	}
	this.frame_194 = function() {
		root.txt02.gotoAndPlay ('loop');
	}
	this.frame_441 = function() {
		root.txt02.play ();
	}
	this.frame_459 = function() {
		root.txt03.gotoAndPlay ('loop');
	}
	this.frame_565 = function() {
		root.btn1.btn2.play();
	}
	this.frame_899 = function() {
		root.opacidadintro.gotoAndPlay('loop');
		root.gotoAndPlay('fade');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(167).call(this.frame_171).wait(23).call(this.frame_194).wait(247).call(this.frame_441).wait(18).call(this.frame_459).wait(106).call(this.frame_565).wait(334).call(this.frame_899).wait(1));

	// borde
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(900));

	// opacidadfinal
	this.instance = new lib.Symbol7();
	this.instance.setTransform(151.95,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(867).to({_off:false},0).to({y:123.05,alpha:1},32).wait(1));

	// opacidadintro
	this.opacidadintro = new lib.Symbol8();
	this.opacidadintro.name = "opacidadintro";
	this.opacidadintro.setTransform(152,126.15);

	this.timeline.addTween(cjs.Tween.get(this.opacidadintro).wait(900));

	// logo
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(79.8,43.6,0.9595,0.9595,0,0,0,-69,-93.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(900));

	// cta
	this.btn1 = new lib.ctahs();
	this.btn1.name = "btn1";
	this.btn1.setTransform(642.4,46.7,1.1801,1.1802,0,0,0,0.4,0.6);
	this.btn1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(505).to({_off:false},0).wait(395));

	// txt03
	this.txt03 = new lib.Symbol4copy();
	this.txt03.name = "txt03";
	this.txt03.setTransform(310.8,45.65,2.0454,2.0454,0,0,0,4.8,22.8);
	this.txt03._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt03).wait(459).to({_off:false},0).wait(441));

	// txt02
	this.txt02 = new lib.Symbol4HBSC();
	this.txt02.name = "txt02";
	this.txt02.setTransform(411.8,47.4,2.0441,2.0441,0,0,0,0.4,0.2);
	this.txt02._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt02).wait(194).to({_off:false},0).to({_off:true},278).wait(428));

	// txt01
	this.txt01 = new lib.Symbol4copyh();
	this.txt01.name = "txt01";
	this.txt01.setTransform(404.45,45.8,2.1562,2.1562,0,0,0,6.7,16.6);

	this.timeline.addTween(cjs.Tween.get(this.txt01).to({_off:true},210).wait(690));

	// tarjeta05
	this.tarjeta05 = new lib.Symbol41copy4();
	this.tarjeta05.name = "tarjeta05";
	this.tarjeta05.setTransform(394,176.85,0.5063,0.5063,3.3778,0,0,-11.5,-30.7);
	this.tarjeta05._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tarjeta05).wait(439).to({_off:false},0).to({regX:-11.1,regY:-30.5,scaleX:0.8497,scaleY:0.8497,rotation:2.3568,x:526.45,y:46.15},71,cjs.Ease.get(1)).wait(390));

	// tarjeta04
	this.tarjeta04 = new lib.Symbol41copy3();
	this.tarjeta04.name = "tarjeta04";
	this.tarjeta04.setTransform(619,142.95,0.2735,0.2735,-6.3222,0,0,-11,-32.1);

	this.timeline.addTween(cjs.Tween.get(this.tarjeta04).to({regY:-32.2,scaleX:0.3379,scaleY:0.3379,rotation:-6.323,x:619.3,y:66.8},45,cjs.Ease.get(1)).wait(115).to({x:651.3,y:76.8},50,cjs.Ease.quadInOut).wait(214).to({x:659.3,y:-23.2},76,cjs.Ease.quadInOut).to({_off:true},1).wait(399));

	// tarjeta03
	this.tarjeta03 = new lib.Symbol41copy2();
	this.tarjeta03.name = "tarjeta03";
	this.tarjeta03.setTransform(260.1,146.65,0.2965,0.2965,22.0774,0,0,-12.1,-31.7);

	this.timeline.addTween(cjs.Tween.get(this.tarjeta03).to({regY:-31.8,scaleX:0.3663,scaleY:0.3663,rotation:10.3428,x:205.9,y:71.35},45,cjs.Ease.get(1)).wait(115).to({rotation:9.3886,x:185.95,y:76.35},50,cjs.Ease.quadInOut).wait(214).to({regY:-31.9,rotation:5.8697,x:195.95,y:-22.65},76,cjs.Ease.quadInOut).to({_off:true},1).wait(399));

	// tarjeta02
	this.tarjeta02 = new lib.Symbol41copy();
	this.tarjeta02.name = "tarjeta02";
	this.tarjeta02.setTransform(578.75,112.05,0.319,0.319,15.5837,0,0,-11.8,-31.9);

	this.timeline.addTween(cjs.Tween.get(this.tarjeta02).to({regX:-12,scaleX:0.3942,scaleY:0.3942,rotation:15.5874,x:639.55,y:28.65},45,cjs.Ease.get(1)).wait(115).to({x:652.55,y:16.65},50,cjs.Ease.quadInOut).wait(214).to({x:669.55,y:-81.35},70,cjs.Ease.quadInOut).wait(406));

	// tarjeta01
	this.tarjeta01 = new lib.Symbol41();
	this.tarjeta01.name = "tarjeta01";
	this.tarjeta01.setTransform(226.8,108.75,0.313,0.313,3.4345,0,0,-12.8,-32.2);

	this.timeline.addTween(cjs.Tween.get(this.tarjeta01).to({regX:-12.9,regY:-32.1,scaleX:0.3242,scaleY:0.3242,rotation:3.4355,x:181.75,y:17.5},45,cjs.Ease.get(1)).wait(115).to({regX:-12.8,regY:-32.2,scaleX:0.3867,scaleY:0.3867,rotation:3.4362,x:173.8,y:14.5},50,cjs.Ease.quadInOut).wait(214).to({x:184.8,y:-85.5},65,cjs.Ease.quadInOut).wait(411));

	// cielo
	this.instance_2 = new lib.Symbol10();
	this.instance_2.setTransform(375,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:247},899).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(236,-68.1,719.9,274.79999999999995);
// library properties:
lib.properties = {
	id: 'A4DAFDFBAF18B64E9CD2D6DEB02E1B51',
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_P_1.png?1736543231169", id:"index_atlas_P_1"},
		{src:"images/index_atlas_NP_1.jpg?1736543231169", id:"index_atlas_NP_1"}
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