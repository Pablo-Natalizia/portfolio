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
p.nominalBounds = new cjs.Rectangle(0,0,1456,440);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.degrade = function() {
	this.initialize(img.degrade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.lata = function() {
	this.initialize(img.lata);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.txt11 = function() {
	this.initialize(img.txt11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.txt12 = function() {
	this.initialize(img.txt12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.txt21 = function() {
	this.initialize(img.txt21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.txt22 = function() {
	this.initialize(img.txt22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);// helper functions:

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
	this.instance = new lib.bg();
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-150,-300,728,220), null);


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
	this.instance = new lib.txt22();
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-150,-300,728,90), null);


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
	this.instance = new lib.txt21();
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-150,-300,728,90), null);


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
	this.instance = new lib.txt12();
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-150,-300,728,90), null);


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
	this.instance = new lib.txt11();
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-150,-300,728,90), null);


(lib.logotada = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AGAAhQgHgDgDgDIAEgKQAJAHANAAQAOAAAAgIQABgGgVgGQgTgEAAgNQAAgJAHgFQAGgHAOABQANgBAJAHIgEAJQgJgFgJAAQgPAAAAAKQAAAFAVAFQATAFAAANQAAAIgHAGQgHAGgNgBIgQgBgAFmAhIgHgOIgiAAIgGAOIgNAAIAehBIAMAAIAeBBgAFCAJIAZAAIgNgdgADlAhIAAhBIAeAAQAQAAAKAJQAKAKAAAOQAAAOgKAKQgKAIgQAAgADxAXIARAAQAKAAAIgGQAGgHABgJQgBgKgGgGQgIgHgKAAIgRAAgADGAhIAAhBIANAAIAABBgAB+AhIAAhBIAgAAQALAAAHAEQAGAFAAAJQAAAKgJAEQANADAAANQAAAIgIAGQgGADgNAAgACKAYIAVAAQANAAAAgKQAAgKgNAAIgVAAgACKgEIASAAQANAAAAgJQAAgJgNAAIgSAAgAA9AhIAAhBIAyAAIAAAKIgmAAIAAASIAhAAIAAAJIghAAIAAASIAnAAIAAAKgAgLAhIAAhBIAfAAQAMAAAHAEQAFAFAAAJQABAKgKAEQAOADAAANQgBAIgGAGQgIADgMAAgAABAYIAUAAQAOAAAAgKQAAgKgOAAIgUAAgAABgEIARAAQAOAAAAgJQAAgJgOAAIgRAAgAhlAhIAAhBIAwAAIAAAKIgkAAIAAASIAhAAIAAAJIghAAIAAASIAmAAIAAAKgAi1AhIAAhBIAeAAQAQAAAKAJQAKAKAAAOQAAAOgKAKQgKAIgQAAgAioAXIAQAAQAMAAAGgGQAHgHgBgJQABgKgHgGQgGgHgMAAIgQAAgAkVAhIAAhBIAcAAQANAAAIAGQAIAHAAALQAAAKgIAGQgIAHgNgBIgPAAIAAATgAkIAEIAOAAQASAAgBgMQABgOgSAAIgOAAgAlZAhIAAhBIAcAAQANAAAHAGQAIAHAAALQAAAKgIAGQgHAHgNgBIgQAAIAAATgAlNAEIAPAAQARAAAAgMQAAgOgRAAIgPAAgAlvAhIgGgOIgiAAIgHAOIgMAAIAehBIAMAAIAfBBgAmTAJIAaAAIgNgdg");
	this.shape.setTransform(77.4,-64.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// flash0_ai
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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ABgTIABAAQABATAOANQAOAOASACIAAAAQgSACgOANQgOAOgBASIAAABIgBgBgAmvhUIgCgCIgBgCIgBgCIgDgLIgIgRIgFgIIgEgIIgBgCQgDgFAAgHIAAgxIAAgMIABgEIAAgBIACgPIABgFIACgKIABgIIgBgGIgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQABgBAAAAIACgEIABgCIAAAAIAAgBIgCgBIgBgBIAAAAIAAgDQABgDAHgCIAQgBQAOAAAEAEIACADIgBACIgCACIgBABIAAAAIABACIACADIABABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIAAAAQgCAEACALIABAFIAAACIABACIAAAEIAFAmIACAjIAAAWQAAALAEAKIAGAJIAFAJIADAHIABADIAAACIAAACIgEABgAqHhSIgBgBIAAgDIAEgKIAFgJIAGgKIADgFIABgOIAAgBIAAgXIAGhGIABgGQAFgTgDgFIgBgDIAAgBIAAAAIADgEIABgCIAAAAIAAgBIgDgBIgBgBIAAgCIAAgBQABgEALgCIAMAAIAIAAIAFABQAHACAAADIAAACIAAABIgDACIAAABIAAAAIABADIACADIAAABIAAADQgCAEACAKIAAAAIAAABIAAACIAAABIABAHIADAUQABAHAAAJIgBA5IgDAGIgEAIIgIAOQgGALgCALIgBACQAAABAAABQgBAAAAABQAAAAgBAAQgBAAAAABIgsADIgDgBgAnNhXIg0gBIgBAAIgBAAIg3ABIgCgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAFgMIAGgLIAHgKQAEgLAAgNIAAgbQAAgWADgWIAGgsIAAgCIADgOQABgJgCgCQgCgDABgDIAAgBIADgEIABgCIAAgBIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIAAgDQACgIAVABIADAAIACAAQAWgBABAIIAAADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBABIAAABIABACIADAEQABADgCAEQgCACACAOIACALQAIAsAAAsIAAAbQAAANAFALQACAEAFAGIAFAJIACACIAEAMIgBADIgCABg");
	this.shape_1.setTransform(46.9361,-79.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logotada, new cjs.Rectangle(-103.6,-110.9,228.2,114.10000000000001), null);


(lib.logo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-150,-125,728,90), null);


(lib.degrade_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.degrade_1, new cjs.Rectangle(-150,-125,728,90), null);


(lib._75474747 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.lata();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._75474747, new cjs.Rectangle(-150,-125,728,90), null);


(lib._6463636 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Eg69AI1IAAxpMB17AAAIAARpg");
	this.shape.setTransform(212.45,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._6463636, new cjs.Rectangle(-165,-140,754.9,113), null);


(lib._6363737 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.514,1],-172.2,0,172.2,0).s().p("A65OEIAA8HMA1zAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._6363737, new cjs.Rectangle(-172.2,-90,344.4,180), null);


(lib.opacidadinicial = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fade:4};
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
	this.instance = new lib._6463636();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:1},0).to({alpha:0},15).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,-140,754.9,113);


(lib._543trdgdg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._6363737();
	this.instance.setTransform(-0.05,0,2.0983,2.0983);
	this.instance.alpha = 0.9492;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._543trdgdg, new cjs.Rectangle(-361.4,-188.8,722.7,377.70000000000005), null);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {loop:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop ();
	}
	this.frame_100 = function() {
		this.stop ();
	}
	this.frame_101 = function() {
		root.btn.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(99).call(this.frame_100).wait(1).call(this.frame_101).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("Ap4CWQg2AAgmgnQgngmAAg2IAAgmQAAg2AngmQAmgmA2AAITxAAQA2AAAmAmQAnAmAAA2IAAAmQAAA3gnAlQglAng3AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:351.975,y:-79.925}).wait(100));

	// BRILLO
	this.instance = new lib._543trdgdg();
	this.instance.setTransform(215.85,-82.6,0.1506,0.3676,0.509,0,0,0.4,0);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({x:486.3,y:-84.1},98,cjs.Ease.get(0.8)).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,728,90);


// stage content:
(lib._728x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"fade":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,424,599];
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
	this.frame_424 = function() {
		root.btn.play ();
	}
	this.frame_599 = function() {
		root.opacidadinicial.gotoAndPlay('fade');
		root.gotoAndPlay('fade');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(424).call(this.frame_424).wait(175).call(this.frame_599).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg4yAG9IAAt5MBxlAAAIAAN5g");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

	// opacidadfinal
	this.instance = new lib._6463636();
	this.instance.setTransform(152,129);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(572).to({_off:false},0).to({alpha:1},27).wait(1));

	// opacidadinicial
	this.opacidadinicial = new lib.opacidadinicial();
	this.opacidadinicial.name = "opacidadinicial";
	this.opacidadinicial.setTransform(152,129);

	this.timeline.addTween(cjs.Tween.get(this.opacidadinicial).wait(600));

	// legal_png
	this.instance_1 = new lib.legal();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(600));

	// btn
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(150,125);
	this.btn.alpha = 0;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(319).to({_off:false},0).to({alpha:1},15).wait(266));

	// logo_tada
	this.instance_2 = new lib.logotada();
	this.instance_2.setTransform(172,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(402).to({_off:false},0).to({alpha:1},13).wait(185));

	// logo_png
	this.instance_3 = new lib.logo_1();
	this.instance_3.setTransform(150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(295).to({_off:false},0).to({alpha:1},15).wait(79).to({alpha:0},13).to({_off:true},1).wait(197));

	// txt22_png
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(150,300);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(190).to({_off:false},0).to({alpha:1},15).wait(79).to({alpha:0},11).to({_off:true},1).wait(304));

	// txt21_png
	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(150,300);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(164).to({_off:false},0).to({alpha:1},15).wait(105).to({alpha:0},11).to({_off:true},1).wait(304));

	// txt12_png
	this.instance_6 = new lib.Symbol3();
	this.instance_6.setTransform(150,300);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({alpha:1},15).wait(100).to({alpha:0},10).to({_off:true},1).wait(435));

	// txt11_png
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(150,300);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({alpha:1},14).wait(125).to({alpha:0},10).to({_off:true},1).wait(435));

	// lata
	this.instance_8 = new lib._75474747();
	this.instance_8.setTransform(660.05,129,1.1177,1.1177,0,0,0,510,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,x:660,y:46},29,cjs.Ease.get(1)).wait(571));

	// degrade
	this.instance_9 = new lib.degrade_1();
	this.instance_9.setTransform(150,125);
	this.instance_9.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(600));

	// bg_jpg
	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(244,105.9,1,1,0,0,0,94,-191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-18.1},599).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(286.4,-82,455.5,299);
// library properties:
lib.properties = {
	id: '6BFB19B7E533459388E69065CC787BB7',
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1733842584686", id:"bg"},
		{src:"images/cta.png?1733842584686", id:"cta"},
		{src:"images/degrade.png?1733842584686", id:"degrade"},
		{src:"images/lata.png?1733842584686", id:"lata"},
		{src:"images/legal.png?1733842584686", id:"legal"},
		{src:"images/logo.png?1733842584686", id:"logo"},
		{src:"images/txt11.png?1733842584686", id:"txt11"},
		{src:"images/txt12.png?1733842584686", id:"txt12"},
		{src:"images/txt21.png?1733842584686", id:"txt21"},
		{src:"images/txt22.png?1733842584686", id:"txt22"}
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
an.compositions['6BFB19B7E533459388E69065CC787BB7'] = {
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