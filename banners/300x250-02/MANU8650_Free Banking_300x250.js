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



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.bg02 = function() {
	this.initialize(img.bg02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.colour = function() {
	this.initialize(img.colour);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.linea = function() {
	this.initialize(img.linea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.object01 = function() {
	this.initialize(img.object01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.object02 = function() {
	this.initialize(img.object02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.txt01 = function() {
	this.initialize(img.txt01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.txt02 = function() {
	this.initialize(img.txt02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.txt03 = function() {
	this.initialize(img.txt03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.txt04 = function() {
	this.initialize(img.txt04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.txt05 = function() {
	this.initialize(img.txt05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.txt05bis = function() {
	this.initialize(img.txt05bis);
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

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhcCAE2MBethgPMBZYBXhMheaBfRg");
	mask.setTransform(72.975,248.2);

	// Layer_4
	this.instance = new lib.colour();
	this.instance.setTransform(-299.75,-503.65,1.7687,1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-299.7,-336.7,961.8,1033.1), null);


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
	this.instance = new lib.txt02();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-150,-125,300,250), null);


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

	// Layer_1
	this.instance = new lib.arrow();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.instance = new lib.bg();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.instance = new lib.cta();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.instance = new lib.logo();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.instance = new lib.txt01();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.eyeyey = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.txt04();
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeyey, new cjs.Rectangle(-150,-300,300,250), null);


(lib._8786786 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.txt05bis();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._8786786, new cjs.Rectangle(-150,-125,300,250), null);


(lib._5474747 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.linea();
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._5474747, new cjs.Rectangle(-150,-300,300,250), null);


(lib._4564646 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg02();
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._4564646, new cjs.Rectangle(-150,-300,300,250), null);


(lib._868585 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.txt05();
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._868585, new cjs.Rectangle(-150,-300,300,250), null);


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
	this.instance = new lib.object02();
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._643636, new cjs.Rectangle(-150,-300,300,250), null);


(lib._346346 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.txt03();
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._346346, new cjs.Rectangle(-150,-300,300,250), null);


(lib._46363 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.object01();
	this.instance.setTransform(-200,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._46363, new cjs.Rectangle(-200,-300,300,250), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fade:0,loop:5};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_52 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(48).call(this.frame_52).wait(1));

	// Symbol_6
	this.instance = new lib.Symbol6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({x:3},22,cjs.Ease.get(0.8)).to({x:0},25,cjs.Ease.get(0.8)).wait(1));

	// Symbol_4
	this.instance_1 = new lib.Symbol4();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,303,250);


// stage content:
(lib.MANU8650_FreeBanking_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"fade":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,573,629,899];
	// timeline functions:
	this.frame_0 = function() {
		// ------------- Variables ------------------- //
		root = this;
	}
	this.frame_573 = function() {
		this.btn.gotoAndPlay ('fade');
	}
	this.frame_629 = function() {
		this.btn.play ();
	}
	this.frame_899 = function() {
		this.gotoAndPlay ('fade');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(573).call(this.frame_573).wait(56).call(this.frame_629).wait(270).call(this.frame_899).wait(1));

	// borde
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(900));

	// logo_png
	this.instance = new lib.Symbol2();
	this.instance.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(900));

	// Capa_1
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(362.2,-79.9,0.9999,2.3957,-46.232,0,0,0.1,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(869).to({_off:false},0).to({scaleX:1.4552,x:172.2,y:115.05},30,cjs.Ease.quadInOut).wait(1));

	// cta
	this.btn = new lib.Symbol8();
	this.btn.name = "btn";
	this.btn.setTransform(250,225);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(573).to({_off:false},0).to({x:150,y:125},41,cjs.Ease.quadInOut).wait(286));

	// Layer_13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_541 = new cjs.Graphics().p("EgUGAkOMAAAgzYMAs1AAAMAAAAzYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(541).to({graphics:mask_graphics_541,x:158.25,y:231.825}).wait(29).to({graphics:null,x:0,y:0}).wait(330));

	// txt05bis
	this.instance_2 = new lib._8786786();
	this.instance_2.setTransform(60,125);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(550).to({_off:false},0).to({x:150},20,cjs.Ease.quadOut).wait(330));

	// txt05
	this.instance_3 = new lib._868585();
	this.instance_3.setTransform(101,300);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(541).to({_off:false},0).to({x:150},16,cjs.Ease.quadInOut).wait(343));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_527 = new cjs.Graphics().p("Al/MBIAAgMIL/AAIAAAMg");
	var mask_1_graphics_528 = new cjs.Graphics().p("Al/MZIAAg6IL/AAIAAA6g");
	var mask_1_graphics_529 = new cjs.Graphics().p("Al/MwIAAhkIL/AAIAABkg");
	var mask_1_graphics_530 = new cjs.Graphics().p("Al/NFIAAiMIL/AAIAACMg");
	var mask_1_graphics_531 = new cjs.Graphics().p("Al/NXIAAiuIL/AAIAACug");
	var mask_1_graphics_532 = new cjs.Graphics().p("Al/NpIAAjPIL/AAIAADPg");
	var mask_1_graphics_533 = new cjs.Graphics().p("Al/N4IAAjsIL/AAIAADsg");
	var mask_1_graphics_534 = new cjs.Graphics().p("Al/OFIAAkEIL/AAIAAEEg");
	var mask_1_graphics_535 = new cjs.Graphics().p("Al/ORIAAkbIL/AAIAAEbg");
	var mask_1_graphics_536 = new cjs.Graphics().p("Al/ObIAAktIL/AAIAAEtg");
	var mask_1_graphics_537 = new cjs.Graphics().p("Al/OjIAAk8IL/AAIAAE8g");
	var mask_1_graphics_538 = new cjs.Graphics().p("Al/OpIAAlIIL/AAIAAFIg");
	var mask_1_graphics_539 = new cjs.Graphics().p("Al/OuIAAlRIL/AAIAAFRg");
	var mask_1_graphics_540 = new cjs.Graphics().p("Al/OwIAAlVIL/AAIAAFVg");
	var mask_1_graphics_541 = new cjs.Graphics().p("Al/OxIAAlXIL/AAIAAFXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(527).to({graphics:mask_1_graphics_527,x:33.425,y:76.925}).wait(1).to({graphics:mask_1_graphics_528,x:33.425,y:79.35}).wait(1).to({graphics:mask_1_graphics_529,x:33.425,y:81.5953}).wait(1).to({graphics:mask_1_graphics_530,x:33.425,y:83.661}).wait(1).to({graphics:mask_1_graphics_531,x:33.425,y:85.5471}).wait(1).to({graphics:mask_1_graphics_532,x:33.425,y:87.2536}).wait(1).to({graphics:mask_1_graphics_533,x:33.425,y:88.7804}).wait(1).to({graphics:mask_1_graphics_534,x:33.425,y:90.1276}).wait(1).to({graphics:mask_1_graphics_535,x:33.425,y:91.2952}).wait(1).to({graphics:mask_1_graphics_536,x:33.425,y:92.2831}).wait(1).to({graphics:mask_1_graphics_537,x:33.425,y:93.0915}).wait(1).to({graphics:mask_1_graphics_538,x:33.425,y:93.7201}).wait(1).to({graphics:mask_1_graphics_539,x:33.425,y:94.1692}).wait(1).to({graphics:mask_1_graphics_540,x:33.425,y:94.4387}).wait(1).to({graphics:mask_1_graphics_541,x:33.425,y:94.5285}).wait(1).to({graphics:null,x:0,y:0}).wait(358));

	// line
	this.instance_4 = new lib._5474747();
	this.instance_4.setTransform(150,300);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(527).to({_off:false},0).wait(373));

	// txt04
	this.instance_5 = new lib.eyeyey();
	this.instance_5.setTransform(150,300);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(503).to({_off:false},0).to({alpha:1},17).wait(380));

	// txt03
	this.instance_6 = new lib._346346();
	this.instance_6.setTransform(150,300);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(323).to({_off:false},0).to({alpha:1},16).wait(146).to({alpha:0},18).to({_off:true},1).wait(396));

	// txt02
	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(179).to({_off:false},0).to({alpha:1},20).wait(106).to({alpha:0},18).to({_off:true},1).wait(576));

	// txt01
	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(150,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22).to({_off:false},0).to({alpha:1},22).wait(117).to({alpha:0},18,cjs.Ease.quadInOut).to({_off:true},1).wait(720));

	// object02
	this.instance_9 = new lib._643636();
	this.instance_9.setTransform(150,490);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(316).to({_off:false},0).to({y:300},45,cjs.Ease.quadInOut).wait(124).to({y:490},34,cjs.Ease.quadInOut).to({_off:true},1).wait(380));

	// Layer_2
	this.instance_10 = new lib._4564646();
	this.instance_10.setTransform(150,300);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(323).to({_off:false},0).to({alpha:1},16).wait(561));

	// object01
	this.instance_11 = new lib._46363();
	this.instance_11.setTransform(-8.85,91.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:-50,regY:-175,x:-56,y:-81.05},0).wait(1).to({x:-52.8,y:-77.85},0).wait(1).to({x:-49.25,y:-74.25},0).wait(1).to({x:-45.35,y:-70.35},0).wait(1).to({x:-41.05,y:-66.05},0).wait(1).to({x:-36.35,y:-61.35},0).wait(1).to({x:-31.25,y:-56.25},0).wait(1).to({x:-25.8,y:-50.8},0).wait(1).to({x:-20,y:-45},0).wait(1).to({x:-13.85,y:-38.85},0).wait(1).to({x:-7.35,y:-32.35},0).wait(1).to({x:-0.5,y:-25.5},0).wait(1).to({x:6.55,y:-18.45},0).wait(1).to({x:13.85,y:-11.15},0).wait(1).to({x:21.3,y:-3.7},0).wait(1).to({x:28.9,y:3.9},0).wait(1).to({x:36.55,y:11.55},0).wait(1).to({x:44.2,y:19.2},0).wait(1).to({x:51.8,y:26.8},0).wait(1).to({x:59.25,y:34.25},0).wait(1).to({x:66.55,y:41.55},0).wait(1).to({x:73.65,y:48.65},0).wait(1).to({x:80.5,y:55.5},0).wait(1).to({x:87.05,y:62.05},0).wait(1).to({x:93.25,y:68.25},0).wait(1).to({x:99.15,y:74.15},0).wait(1).to({x:104.75,y:79.75},0).wait(1).to({x:109.95,y:84.95},0).wait(1).to({x:114.8,y:89.8},0).wait(1).to({x:119.3,y:94.3},0).wait(1).to({x:123.45,y:98.45},0).wait(1).to({x:127.3,y:102.3},0).wait(1).to({x:130.75,y:105.75},0).wait(1).to({x:133.9,y:108.9},0).wait(1).to({x:136.75,y:111.75},0).wait(1).to({x:139.3,y:114.3},0).wait(1).to({x:141.55,y:116.55},0).wait(1).to({x:143.5,y:118.5},0).wait(1).to({x:145.2,y:120.2},0).wait(1).to({x:146.65,y:121.65},0).wait(1).to({x:147.8,y:122.8},0).wait(1).to({x:148.75,y:123.75},0).wait(1).to({x:149.5,y:124.5},0).wait(1).to({regX:0,regY:0,x:200,y:300},0).wait(244).to({x:344,y:444},35,cjs.Ease.quadInOut).wait(577));

	// mask_idn (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EgnbgW5IQqwlMA+MA+YIwpQlg");
	mask_2.setTransform(132.6,33.175);

	// degrade_png
	this.instance_12 = new lib.Symbol10();
	this.instance_12.setTransform(-140.2,-350.7,1,1,91.023,0,0,0,0.1);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:181.2,regY:179.8,x:-320.1,y:-169.8},0).wait(1).to({x:-316.8,y:-166.55},0).wait(1).to({x:-313.05,y:-162.95},0).wait(1).to({x:-309,y:-158.95},0).wait(1).to({rotation:91.0231,x:-304.5,y:-154.55},0).wait(1).to({x:-299.6,y:-149.75},0).wait(1).to({x:-294.35,y:-144.6},0).wait(1).to({x:-288.65,y:-139.05},0).wait(1).to({x:-282.6,y:-133.1},0).wait(1).to({rotation:91.0232,x:-276.15,y:-126.85},0).wait(1).to({x:-269.4,y:-120.2},0).wait(1).to({x:-262.3,y:-113.25},0).wait(1).to({rotation:91.0233,x:-254.95,y:-106.05},0).wait(1).to({x:-247.35,y:-98.65},0).wait(1).to({x:-239.55,y:-91},0).wait(1).to({x:-231.65,y:-83.3},0).wait(1).to({rotation:91.0234,x:-223.7,y:-75.5},0).wait(1).to({x:-215.75,y:-67.7},0).wait(1).to({x:-207.85,y:-60},0).wait(1).to({rotation:91.0235,x:-200.05,y:-52.35},0).wait(1).to({x:-192.45,y:-44.9},0).wait(1).to({x:-185.05,y:-37.7},0).wait(1).to({rotation:91.0236,x:-178,y:-30.75},0).wait(1).to({x:-171.2,y:-24.05},0).wait(1).to({x:-164.7,y:-17.7},0).wait(1).to({x:-158.55,y:-11.7},0).wait(1).to({rotation:91.0237,x:-152.75,y:-6},0).wait(1).to({x:-147.3,y:-0.7},0).wait(1).to({x:-142.25,y:4.25},0).wait(1).to({x:-137.55,y:8.85},0).wait(1).to({x:-133.25,y:13.05},0).wait(1).to({x:-129.25,y:16.95},0).wait(1).to({rotation:91.0238,x:-125.65,y:20.5},0).wait(1).to({x:-122.35,y:23.7},0).wait(1).to({x:-119.4,y:26.6},0).wait(1).to({x:-116.75,y:29.2},0).wait(1).to({x:-114.4,y:31.5},0).wait(1).to({x:-112.35,y:33.5},0).wait(1).to({x:-110.6,y:35.2},0).wait(1).to({x:-109.1,y:36.65},0).wait(1).to({x:-107.85,y:37.9},0).wait(1).to({x:-106.9,y:38.85},0).wait(1).to({x:-106.15,y:39.55},0).wait(1).to({regX:0,regY:0,x:77.35,y:-137.95},0).wait(244).to({x:199.35,y:39.05},35,cjs.Ease.quadInOut).wait(577));

	// bg_png
	this.instance_13 = new lib.Symbol5();
	this.instance_13.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(900));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-58.8,-270.6,740.5999999999999,871.1);
// library properties:
lib.properties = {
	id: '1C941F75BB0BD14CB9F7876841F03A95',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow.png?1736462145754", id:"arrow"},
		{src:"images/bg.png?1736462145754", id:"bg"},
		{src:"images/bg02.jpg?1736462145754", id:"bg02"},
		{src:"images/colour.png?1736462145754", id:"colour"},
		{src:"images/cta.png?1736462145754", id:"cta"},
		{src:"images/linea.png?1736462145754", id:"linea"},
		{src:"images/logo.png?1736462145754", id:"logo"},
		{src:"images/object01.png?1736462145754", id:"object01"},
		{src:"images/object02.png?1736462145754", id:"object02"},
		{src:"images/txt01.png?1736462145754", id:"txt01"},
		{src:"images/txt02.png?1736462145754", id:"txt02"},
		{src:"images/txt03.png?1736462145754", id:"txt03"},
		{src:"images/txt04.png?1736462145754", id:"txt04"},
		{src:"images/txt05.png?1736462145754", id:"txt05"},
		{src:"images/txt05bis.png?1736462145754", id:"txt05bis"}
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
an.compositions['1C941F75BB0BD14CB9F7876841F03A95'] = {
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