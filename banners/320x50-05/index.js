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
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.btntxt = function() {
	this.initialize(img.btntxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,809,100);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,809,100);


(lib.sombra = function() {
	this.initialize(img.sombra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,809,100);// helper functions:

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
	this.instance = new lib.bg();
	this.instance.setTransform(-481,-14,0.661,0.661);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-481,-14,962.4,119), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDC4C").s().p("AiCBMQg2gfgBgsIAAgBQAAgsA2gfQA3gfBMgBQBMABA3AfQA2AfABAsIAAABIAAABQgBArg1AfQg2AfhNABQhMgBg3gfgAhQgJIgPAJQgBAAgBAAQgBAAAAABQAAAAAAABQAAAAABABQAIANARAKIgMAIQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAIANAHIAFABIAFgBIANgHQAUAIAVgBQAUgBAQgJQAMgHACgHQADgHgEgHQgDgHgJgJIgKgLQgEgEABgEQAAgEAFgDQAGgDAJABQAJABAJAFQAJAFAGAIIAEAIIADACQACACAEgBQAEABADgCIAPgJQAEgCgCgDIgHgIQgFgGgHgFIAKgFQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgOgIQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgLAHQgWgKgVABQgVACgOAIQgQAKAAAJQAAAKAKALIAFAGQAJAJACAFQADAGgGAEQgOAIgTgLQgLgGgIgJIgGgIIgCgCQgDgCgEAAQgEAAgCACgAiZAqQgMgQAAgSQAAgRAMgRQAMgRAXgNQAZgPAggHQAhgIAiAAQAkAAAgAIQAhAHAZAPQAQAKALALQgMgQgWgNQgZgOghgJQgggHgjAAQgjAAghAHQggAJgZAOQgXANgMARQgMARAAARQAAASAMARIAHAHIAAAAg");
	this.shape.setTransform(-0.0249,10.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9D08").s().p("AABB7QhMAAg3ggQgbgPgOgUQgNgTgBgVIAAgqQABArA2AfQA3AgBMAAQBNAAA2ggQA1geABgrIAAApQgBAVgNATIgIAJIAAABQgMAOgVANQgZAOggAIQgQAEgRACQgRACgSAAIgFAAgAhHATIgNgIQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAMgHQgRgKgIgNQgBAAAAgBQAAgBAAAAQAAgBABAAQABgBABAAIAPgJQACgCAEAAQAEAAADACIACACIAGAJQAIAJALAGQATALAOgIQAGgDgDgGQgCgGgJgKIgFgGQgKgLAAgJQAAgKAQgJQAOgJAVgBQAVgBAWAJIALgGQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIAOAHQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAIgKAGQAHAEAFAGIAHAIQACADgEACIgPAJQgDACgEAAQgEAAgCgCIgDgCIgEgHQgGgJgJgFQgJgFgJgBQgJgBgGAEQgFACAAAEQgBAEAEAEIAKAMQAJAJADAHQAEAHgDAHQgCAGgMAHQgQAJgUABQgVACgUgJIgNAIIgFABIgFgBgAigAHQgMgQAAgSQAAgSAMgRQAMgRAXgNQAZgOAggIQAhgIAjAAQAjAAAgAIQAhAIAZAOQAWANAMAQQgLgLgQgKQgZgOghgIQgggIgkAAQgiAAghAIQggAIgZAOQgXAOgMAQQgMARAAASQAAASAMAQIgHgIg");
	this.shape_1.setTransform(-0.025,13.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-18.6,0,37.2,25.8), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAD1").s().p("AkSIKIAngVIAHAMIgnAVgAjEHgIAngVIAGALIgnAWgAh3G2IAngWIAHAMIgnAWgAgpGLIAngWIAFANIgmAVgAAjFgIAngVIAHAMIgnAVgABxE2IAngWIAGAMIgmAWgAC/EMIAmgWIAHAMIgnAWgAEMDhIAngVIAGAMIgmAVgAFaC2IAmgVIAHAMIgnAWgAGnCMIAngWIAGAMIgmAWgAH1BiIAdgRIAHgFIAKAJQgFAFgFADIgeAQgAIIAEIAMgFIAVAlIgMAHgAooAdIAmgUIAGALIglAUgAndgLIAlgVIAHAMIglAUgAoMgVQgNgXAHgbQAIgZAYgNIMFmoIAAAAIAfA5Ig9AhIgCABIr/GmgAHpgzIAMgGIAKAUIgLAGgAmSg0IAlgUIAGALIglAUgAlIhdIAmgVIAGAMIglAVgAGBhsQgSgFgIgQQgJgQAGgQQAFgSAPgIQAQgJARAGQARAEAIAQQAJAQgFARQgFARgPAIQgKAGgLAAQgGAAgGgCgAj9iGIAlgUIAHALIglAUgAiyivIAlgUIAGALIglAVgAhojXIAmgVIAGAMIglAUgAgdkBIAkgUIAHALIgkAVgAFhkrIALgHIALATIgMAHgAAtkpIAlgVIAGAMIglAUgAB3lTIAmgUIAGALIglAVgAE7lwIAMgHIASAiIgLAHgADCl7IAlgVIAHAMIglAUgAEhmgIgOAHIgGgLIAZgOIAOAZIgMAGg");
	this.shape.setTransform(0.475,62.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9A5F3B").s().p("AogEcQgUgGgNgPIgGgHIgEgGQgOgaAIgdQAIgcAagPIMQmtQAagOAcAIQAdAJAOAaIADAFIsEGoQgYANgIAZQgHAaANAYIgRAJQgQAJgSAAQgKAAgKgDgAGkDqQgggJgQgeIgMgUQgQgeAJghQAKggAdgQIBOgsIARgJQAOgHAOAEQAPAFAIANIA2BkQAHANgEAPQgEAOgOAHIgRAKIhOArQgSAKgUAAQgMAAgMgEgAGrBnQgQAIgFARQgFARAIAQQAJAQARAFQARAFAQgJQAQgIAEgRQAFgSgIgQQgJgPgRgFQgGgCgGAAQgKAAgKAGg");
	this.shape_1.setTransform(-4.5843,33.8968);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B06C45").s().p("AkGIDQgdgIgOgaIkzowIADAFIAFAHQANAOAVAHQAcAIAagPIAQgJIAAABIL/mmIACgBIA9ghIByDPIhOArQgeAQgJAhQgKAgARAeIALAVQAQAeAhAJQAgAJAegQIBOgrIBGCBQAPAZgJAcQgIAdgaAOIsQGuQgQAJgRAAQgLAAgKgDgAj6HiIAHAMIAngWIgHgMgAisG3IAGAMIAngVIgGgMgAhfGNIAHAMIAngWIgHgMgAgRFiIAGAMIAmgVIgGgMgAA7E4IAHAMIAngWIgHgMgACJENIAHAMIAmgVIgGgMgADXDjIAGAMIAngWIgHgMgAEkC4IAHAMIAmgVIgGgMgAFyCOIAGAMIAngWIgHgMgAG/BjIAHAMIAmgVIgGgMgAIqAoIgdARIAGAMIAegRQAFgDAFgEIgKgKIgHAFgAIggjIAVAlIAMgFIgVgngAoQgLIAHALIAlgUIgGgLgAnFg0IAHAMIAlgVIgHgLgAIBhbIALATIALgGIgKgUgAl6hdIAGAMIAlgVIgGgLgAkwiGIAHAMIAlgVIgGgLgAjlivIAHAMIAlgVIgHgLgAiajXIAGALIAlgUIgGgMgAhQkAIAHALIAlgUIgGgMgAgFkpIAGALIAlgUIgHgMgAF5lUIAKATIAMgHIgLgTgABFlSIAGALIAlgUIgGgMgACPl7IAHALIAlgUIgGgMgAFTmZIATAiIALgGIgSgigADamkIAHALIAlgUIgHgMgAFAm7IAMgHIgOgZIgZAOIAGAMIAOgIg");
	this.shape_2.setTransform(-1.9277,67.0321);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-64.2,5.2,123.6,113.7), null);


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
	this.instance = new lib.logo();
	this.instance.setTransform(-364,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-364,0,728.1,90), null);


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

	// shadow
	this.instance = new lib.sombra();
	this.instance.setTransform(-365,0,0.8997,0.8998);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-365,-3.8,727.9,123.3), null);


(lib.billete = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#4B964B").s().p("AmBieIAAiDIMCG/IAACEg");
	this.shape.setTransform(-20.1,52.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C7F3C").s().p("AjIAyIBug+IgBAAIEkipIAACEImRDng");
	this.shape_1.setTransform(38.55,62.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#77C677").s().p("ADKD9IgOAAIgSAAQgPABgPADIo+lNQAKgPAAgRQAAgPgKgOIDOh3QAWAEAYAAQAZAAAXgEIABAAII0FIQgMAQAAARQAAATAQARIAAABIjIBzQgQgDgRgBgACTBOQgDAAgCADQgBAEABADQAAADADACIBwBBIAEABQAFAAACgFQACgDgBgCQgBgEgDgCIhwhBIgDgBIgDABgAgrg8QgXAFgRAKQgLAHgHAHIgHAIQgJAMAAALIABAFQABAKAHAKQAIALAQAJQAkAWAyAAQAZAAAXgGQAWgGARgKQARgJAJgLQAIgMAAgNQAAgMgIgLQgJgMgQgKQgRgKgXgFQgWgFgZAAQgYAAgWAFgAkBidQgDABgCACQgCAEABADQABADADABIBwBCIAEABQAEAAADgEQACgDgBgDQgBgEgDgBIhwhBIgEgBIgCAAgAg4AqIgKgHIgCgCQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAABAAIAKgHQgOgIgGgKQgBAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAMgGQAFgDAFADIACACIAFAGQAFAGAJAGQAPAIALgGQAFgDgCgEQgCgFgHgIIgEgDQgHgIgBgIQAAgIANgHQALgHAQAAQAQgCARAHIAJgEIADgBIAEABIAKAGIACACIgCACIgHAEIAJAIIAFAHQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgMAHQgFACgFgCIgCgCIgDgGQgEgFgIgFQgHgEgHgBQgGAAgGADQgEABAAADQAAAEACACIAIAJQAHAHADAFQADAGgCAGQgCAEgJAGQgMAHgQABQgRABgPgHIgKAHIgEABIgEgBg");
	this.shape_2.setTransform(-0.2875,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#55A555").s().p("ApKhrIElipIAAAAIBtg/IMDG/IklCpIAAAAIhuA/gADID9QAQABAQADIDIhzIAAgBQgPgRAAgTQgBgRAMgQIo0lIIgBAAQgWAEgZAAQgZAAgWgEIjOB3QAKAOAAAPQAAARgKAPII+FNQAPgDAPgBIASAAIAPAAgAD/CeIhxhBQgDgCAAgDQgBgDABgEQACgDAEAAQADgBACABIBxBBQACACABAEQABACgCADQgCAFgFAAIgDgBgAhWAtQgRgJgIgLQgHgKgBgKIgBgFQAAgLAJgMIAHgIQAHgHALgHQASgKAWgFQAWgFAZAAQAYAAAXAFQAWAFARAKQARAKAIAMQAJALAAAMQAAANgJAMQgJALgRAJQgQAKgXAGQgWAGgZAAQgzAAgjgWgAhCgCIgLAGQgBAAgBABQAAAAAAABQgBAAABABQAAAAAAAAQAHAKANAIIgKAHQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABACIALAHQADABAEgBIAKgHQAPAHARgBQAQgBANgHQAIgGACgEQACgGgCgGQgDgFgHgHIgIgJQgDgCABgEQAAgDAEgBQAFgDAGAAQAHABAIAEQAHAFAEAFIAEAGIABACQAGACAFgCIALgHQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAgBgBIgEgHIgKgIIAIgEIABgCIgBgCIgLgGIgEgBIgDABIgIAEQgSgHgQACQgQAAgLAHQgNAHAAAIQABAIAHAIIAEADQAHAIACAFQACAEgFADQgLAGgOgIQgKgGgFgGIgFgGIgCgCIgFgBIgFABgAiWhNIhwhCQgDgBAAgDQgCgDACgEQACgCADgBQADgBADACIBwBBQADABABAEQABADgCADQgDAEgEAAIgEgBg");
	this.shape_3.setTransform(0,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.billete, new cjs.Rectangle(-58.6,0,117.30000000000001,81.2), null);


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


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
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
	this.frame_89 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-142.05,44.2,0.9466,0.9466,0,0,0,-142,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:44,scaleX:1,scaleY:1,x:-142,y:44},44,cjs.Ease.quadInOut).to({regY:44.1,scaleX:0.9466,scaleY:0.9466,x:-142.05,y:44.2},45,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365,0,727.9,90);


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

	// billete
	this.instance = new lib.billete();
	this.instance.setTransform(-7.5,45.1,1,1,0,0,0,0,40.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(41));

	// billete
	this.instance_1 = new lib.billete();
	this.instance_1.setTransform(-8,61.1,1,1,0,0,0,0,40.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(62));

	// billete
	this.instance_2 = new lib.billete();
	this.instance_2.setTransform(-3.95,76.6,1,1,0,0,0,0,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,4.5,121.3,112.7);


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

	// Layer_13
	this.instance = new lib.Symbol9();
	this.instance.setTransform(-0.6,-22.1,1,1,0,0,0,-0.1,12.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).wait(4));

	// Layer_12
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(-1.1,-16.1,1,1,0,0,0,-0.1,12.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(83).to({_off:false},0).wait(11));

	// Layer_11
	this.instance_2 = new lib.Symbol9();
	this.instance_2.setTransform(-1.6,-10.35,1,1,0,0,0,-0.1,12.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76).to({_off:false},0).wait(18));

	// Layer_10
	this.instance_3 = new lib.Symbol9();
	this.instance_3.setTransform(-2.35,-4.35,1,1,0,0,0,-0.1,12.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).wait(25));

	// Layer_9
	this.instance_4 = new lib.Symbol9();
	this.instance_4.setTransform(-3.1,1.4,1,1,0,0,0,-0.1,12.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).wait(32));

	// Layer_8
	this.instance_5 = new lib.Symbol9();
	this.instance_5.setTransform(-1.6,7.15,1,1,0,0,0,-0.1,12.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({_off:false},0).wait(39));

	// Symbol 9
	this.instance_6 = new lib.Symbol9();
	this.instance_6.setTransform(0.15,12.9,1,1,0,0,0,-0.1,12.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48).to({_off:false},0).wait(46));

	// Symbol 9
	this.instance_7 = new lib.Symbol9();
	this.instance_7.setTransform(-0.6,18.9,1,1,0,0,0,-0.1,12.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(41).to({_off:false},0).wait(53));

	// Symbol 9
	this.instance_8 = new lib.Symbol9();
	this.instance_8.setTransform(0.9,25.65,1,1,0,0,0,-0.1,12.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(34).to({_off:false},0).wait(60));

	// Symbol 9
	this.instance_9 = new lib.Symbol9();
	this.instance_9.setTransform(-0.85,31.9,1,1,0,0,0,-0.1,12.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).wait(67));

	// Symbol 9
	this.instance_10 = new lib.Symbol9();
	this.instance_10.setTransform(-0.1,38.15,1,1,0,0,0,-0.1,12.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({_off:false},0).wait(74));

	// Symbol 9
	this.instance_11 = new lib.Symbol9();
	this.instance_11.setTransform(-1.1,43.9,1,1,0,0,0,-0.1,12.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).wait(80));

	// Layer_14
	this.instance_12 = new lib.Symbol9();
	this.instance_12.setTransform(0.15,50.15,1,1,0,0,0,-0.1,12.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).wait(85));

	// Layer_15
	this.instance_13 = new lib.Symbol9();
	this.instance_13.setTransform(-1.35,56.65,1,1,0,0,0,-0.1,12.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-35,41.2,104.6);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.frame_89 = function() {
		root.btn01.btn02.play ();
		
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Layer_1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(2.45,55.5,1,1,0,0,0,0,60.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:7.95,y:53.5},44,cjs.Ease.quadInOut).to({x:2.45,y:55.5},45,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-2,129.2,115.7);


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

	// Layer_10
	this.instance = new lib.Symbol10("synched",29,false);
	this.instance.setTransform(-60.6,101.9,1,1,0,0,0,-0.1,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Layer_11
	this.instance_1 = new lib.Symbol10("synched",0,false);
	this.instance_1.setTransform(-13.85,99.15,1,1,0,0,0,-0.1,28.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(106));

	// Layer_9
	this.instance_2 = new lib.Symbol10("synched",0,false);
	this.instance_2.setTransform(-32.35,70.65,1,1,0,0,0,-0.1,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// Layer_1
	this.instance_3 = new lib.Symbol11("synched",0,false);
	this.instance_3.setTransform(9,39.6,1,1,0,0,0,0,40.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.1,3.5,263.7,205);


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
	this.instance.setTransform(251.85,7.1,2.3516,1);
	this.instance.alpha = 0.9492;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._543trdgdg, new cjs.Rectangle(-153.1,-82.9,809.9,180), null);


(lib.degradecta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"loop":98};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_188 = function() {
		this.stop ();
	}
	this.frame_189 = function() {
		this.gotoAndPlay ('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(188).call(this.frame_188).wait(1).call(this.frame_189).wait(1));

	// Layer_5
	this.instance = new lib._543trdgdg();
	this.instance.setTransform(-74.8,47.75,0.2246,0.548,-19.4783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({x:293.55,y:-7.05},89).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.3,-99,572.6999999999999,208.4);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.frame_3 = function() {
		this.stop ();
	}
	this.frame_94 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(91).call(this.frame_94).wait(1));

	// Layer_3
	this.instance = new lib.btntxt();
	this.instance.setTransform(-364,0,0.9,0.8999);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ar8CbQgKAAgGgGIgBgBQgGgGAAgJIAAkJQAAgJAHgHQAGgGAKAAIX5AAQAKAAAGAGQAHAHAAAJIAAEJQAAAJgHAHQgGAGgKAAg");
	mask.setTransform(242.4998,60.6);

	// Layer_2
	this.btn02 = new lib.degradecta();
	this.btn02.name = "btn02";
	this.btn02.setTransform(72.75,53.1);

	var maskedShapeInstanceList = [this.btn02];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.btn02).wait(95));

	// Layer_1
	this.instance_1 = new lib.btn();
	this.instance_1.setTransform(-364,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,0,728.1,90);


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

	this.actionFrames = [0,1,359];
	// timeline functions:
	this.frame_0 = function() {
		// ------------- Variables ------------------- //
		root = this;
		loopNum = 0;
		
		
		/* EVENTOS MOUSEOVER */
		document.eventoRollOver = function(){
			root.btn01.btn02.play();
		
		}
	}
	this.frame_1 = function() {
		root.btn01.gotoAndPlay ('loop');
	}
	this.frame_359 = function() {
		root.gotoAndPlay('fade');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(358).call(this.frame_359).wait(1));

	// borde
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// logo.png
	this.instance = new lib.Symbol6();
	this.instance.setTransform(146.05,24.7,0.4825,0.4825,0,0,0,0.1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// btn.png
	this.btn01 = new lib.Symbol5();
	this.btn01.name = "btn01";
	this.btn01.setTransform(146.05,24.7,0.4825,0.4825,0,0,0,0.1,45);

	this.timeline.addTween(cjs.Tween.get(this.btn01).wait(360));

	// txt
	this.txt01 = new lib.Symbol13();
	this.txt01.name = "txt01";
	this.txt01.setTransform(90.15,25.7,0.4799,0.4799,0,0,0,-145.5,47.3);

	this.timeline.addTween(cjs.Tween.get(this.txt01).wait(360));

	// wallet
	this.wallet = new lib.Symbol8();
	this.wallet.name = "wallet";
	this.wallet.setTransform(8.55,35.4,0.4394,0.4394,0,0,0,0.1,56.9);

	this.timeline.addTween(cjs.Tween.get(this.wallet).wait(360));

	// opacidadfinal
	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(159.95,24.95,0.4394,0.4394,0,0,0,0,45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(334).to({_off:false},0).to({alpha:1},25).wait(1));

	// money
	this.instance_2 = new lib.Symbol3("synched",0,false);
	this.instance_2.setTransform(183.75,32.05,0.4394,0.4394,0,0,0,0,59.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(341));

	// bg.jpg
	this.instance_3 = new lib.Symbol12();
	this.instance_3.setTransform(159.95,24.95,0.4394,0.4394,0,0,0,0,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(360));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(108.6,24,262.9,57.400000000000006);
// library properties:
lib.properties = {
	id: 'A4DAFDFBAF18B64E9CD2D6DEB02E1B51',
	width: 320,
	height: 50,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1772937483710", id:"bg"},
		{src:"images/btn.png?1772937483710", id:"btn"},
		{src:"images/btntxt.png?1772937483710", id:"btntxt"},
		{src:"images/logo.png?1772937483710", id:"logo"},
		{src:"images/sombra.png?1772937483710", id:"sombra"}
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