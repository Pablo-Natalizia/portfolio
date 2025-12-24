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



(lib.amexlogo = function() {
	this.initialize(img.amexlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,91);


(lib.bg = function() {
	this.initialize(img.bg);
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
	this.instance = new lib.bg();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_33 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_115 = new cjs.Graphics().p("AxcReQnQnQAAqOQAAqNHQnQQHPnOKNAAQKPAAHPHOQHOHQAAKNQAAKOnOHQQnPHOqPAAQqNAAnPnOg");
	var mask_graphics_116 = new cjs.Graphics().p("Az1SnQoPntAAq6QAAq5IPntQIOnuLnAAQLoAAIPHuQIOHtAAK5QAAK6oOHtQoPHuroAAQrnAAoOnug");
	var mask_graphics_117 = new cjs.Graphics().p("A2OTxQpOoMAArlQAArkJOoMQJNoMNBAAQNBAAJPIMQJNIMAALkQAALlpNIMQpPIMtBAAQtBAApNoMg");
	var mask_graphics_118 = new cjs.Graphics().p("A4nU6QqNoqAAsQQAAsPKNoqQKNorOaAAQObAAKNIrQKNIqAAMPQAAMQqNIqQqNIrubAAQuaAAqNorg");
	var mask_graphics_119 = new cjs.Graphics().p("A7AWEQrNpJAAs7QAAs6LNpJQLMpKP0ABQP0gBLNJKQLMJJAAM6QAAM7rMJJQrNJKv0gBQv0ABrMpKg");
	var mask_graphics_120 = new cjs.Graphics().p("A9ZXOQsMpnAAtnQAAtmMMpnQMMpoRNAAQROAAMMJoQMLJnAANmQAANnsLJnQsMJoxOgBQxNABsMpog");
	var mask_graphics_121 = new cjs.Graphics().p("A/yYYQtLqGAAuSQAAuRNLqGQNLqGSnAAQSoAANLKGQNLKGAAORQAAOStLKGQtLKGyoAAQynAAtLqGg");
	var mask_graphics_122 = new cjs.Graphics().p("EgiKAZhQuLqkAAu9QAAu8OLqlQOJqkUBAAQUBAAOLKkQOKKlAAO8QAAO9uKKkQuLKl0BAAQ0BAAuJqlg");
	var mask_graphics_123 = new cjs.Graphics().p("EgkjAarQvKrDAAvoQAAvnPKrDQPJrDVagBQVbABPKLDQPJLDAAPnQAAPovJLDQvKLD1bABQ1agBvJrDg");
	var mask_graphics_124 = new cjs.Graphics().p("Egm8Ab1QwKriAAwTQAAwSQKriQQIriW0ABQW0gBQKLiQQILiABQSQgBQTwILiQwKLi20gBQ20ABwIrig");
	var mask_graphics_125 = new cjs.Graphics().p("EgpVAc/QxIsBAAw+QAAw9RIsBQRIsAYNAAQYOAARIMAQRIMBABQ9QgBQ+xIMBQxIMA4OAAQ4NAAxIsAg");
	var mask_graphics_126 = new cjs.Graphics().p("EgruAeIQyIseAAxqQAAxoSIsfQSIsfZmAAQZoAASHMfQSIMfAARoQAARqyIMeQyHMf5oAAQ5mAAyIsfg");
	var mask_graphics_127 = new cjs.Graphics().p("EguHAfSQzHs+AAyUQAAyUTHs9QTHs9bAAAQbBAATHM9QTHM9AASUQAASUzHM+QzHM97BAAQ7AAAzHs9g");
	var mask_graphics_128 = new cjs.Graphics().p("EgwgAgbQ0GtcAAy/QAAy+UGtcQUHtdcZAAQcbAAUGNdQUGNcAAS+QAAS/0GNcQ0GNd8bAAQ8ZAA0Htdg");
	var mask_graphics_129 = new cjs.Graphics().p("Egy5AhlQ1Gt6ABzrQgBzqVGt6QVGt7dzAAQd0AAVGN7QVGN6AATqQAATr1GN6Q1GN790AAQ9zAA1Gt7g");
	var mask_graphics_130 = new cjs.Graphics().p("Eg1RAivQ2GuZAB0WQgB0VWGuZQWEuZfNAAQfNAAWGOZQWEOZABUVQgBUW2EOZQ2GOZ/NAAQ/NAA2EuZg");
	var mask_graphics_131 = new cjs.Graphics().p("Eg3qAj4Q3Fu3AA1BQAA1AXFu4UAXEgO3AgmAAAUAgnAAAAXEAO3QXFO4AAVAQAAVB3FO3UgXEAO4ggnAAAUggmAAAgXEgO4g");
	var mask_graphics_132 = new cjs.Graphics().p("Eg6DAlDQ4EvXAA1sQAA1rYEvXUAYDgPWAiAAAAUAiAAAAAYEAPWQYEPXAAVrQAAVs4EPXUgYEAPWgiAgABUgiAAABgYDgPWg");
	var mask_graphics_133 = new cjs.Graphics().p("Eg8cAmMQ5Dv1AA2XQAA2XZDv0UAZDgP1AjZAAAUAjaAAAAZDAP1QZDP0AAWXQAAWX5DP1UgZDAP1gjaAAAUgjZAAAgZDgP1g");
	var mask_graphics_134 = new cjs.Graphics().p("Eg+1AnWQ6CwUAA3CQAA3BaCwTUAaCgQUAkzAAAUAk0AAAAaCAQUQaCQTAAXBQAAXC6CQUUgaCAQTgk0AAAUgkzAAAgaCgQTg");
	var mask_graphics_135 = new cjs.Graphics().p("EhBOAofQ7CwxAB3uQgB3sbCwyUAbBgQyAmNAAAUAmNAAAAbCAQyQbCQyAAXsQAAXu7CQxUgbCAQygmNAAAUgmNAAAgbBgQyg");
	var mask_graphics_136 = new cjs.Graphics().p("EhDnAppQ8BxQAA4ZQAA4YcBxQUAcBgRQAnmAAAUAnnAAAAcBARQQcBRQAAYYQAAYZ8BRQUgcBARQgnnAAAUgnmAAAgcBgRQg");
	var mask_graphics_137 = new cjs.Graphics().p("EhGAAqzQ9AxvAA5EQAA5DdAxvUAdBgRuAo/gABUApAAABAdBARuQdARvAAZDQAAZE9ARvUgdBARugpAAABUgo/gABgdBgRug");
	var mask_graphics_138 = new cjs.Graphics().p("EhIYAr8Q+AyNAA5vQAA5ueAyOUAd/gSNAqZAAAUAqaAAAAd/ASNQeASOAAZuQAAZv+ASNUgd/ASOgqaAAAUgqZAAAgd/gSOg");
	var mask_graphics_139 = new cjs.Graphics().p("EhKxAtGQ+/yrAA6bQAA6Ze/ysUAe/gSsAryAAAUArzAAAAe/ASsQe/SsAAaZQAAab+/SrUge/ASsgrzAAAUgryAAAge/gSsg");
	var mask_graphics_140 = new cjs.Graphics().p("EhNKAuQQ//zLAA7FQAA7Ff/zKUAf+gTKAtMAAAUAtNAAAAf+ATKQf/TKAAbFQAAbF//TLUgf+ATKgtNAAAUgtMAAAgf+gTKg");
	var mask_graphics_141 = new cjs.Graphics().p("EhPjAvaUgg+gTpAAAgbxUAAAgbvAg+gTqUAg+gTpAulAABUAumgABAg+ATpUAg+ATqAAAAbvUAAAAbxgg+ATpUgg+ATogumAAAUgulAAAgg+gTog");
	var mask_graphics_142 = new cjs.Graphics().p("EhR8AwjUgh9gUHAAAgccUAAAgcbAh9gUHUAh9gUIAv/AAAUAwAAAAAh9AUIUAh9AUHAAAAcbUAAAAccgh9AUHUgh9AUIgwAAAAUgv/AAAgh9gUIg");
	var mask_graphics_143 = new cjs.Graphics().p("EhUVAxtUgi8gUmAAAgdHUAAAgdGAi8gUmUAi9gUmAxYAAAUAxZAAAAi9AUmUAi8AUmAAAAdGUAAAAdHgi8AUmUgi9AUmgxZAAAUgxYAAAgi9gUmg");
	var mask_graphics_144 = new cjs.Graphics().p("EhWuAy3Ugj7gVFAAAgdyUAAAgdxAj7gVFUAj8gVEAyyAAAUAyzAAAAj8AVEUAj7AVFAAAAdxUAAAAdygj7AVFUgj8AVEgyzAAAUgyyAAAgj8gVEg");
	var mask_graphics_145 = new cjs.Graphics().p("EhZHA0AUgk7gVjAAAgedUAAAgecAk7gVjUAk7gVjA0MgABUA0NAABAk7AVjUAk7AVjAAAAecUAAAAedgk7AVjUgk7AVjg0NAABUg0MgABgk7gVjg");
	var mask_graphics_146 = new cjs.Graphics().p("EhbfA1KUgl7gWCAAAgfIUAAAgfIAl7gWBUAl6gWCA1lAAAUA1mAAAAl6AWCUAl7AWBAAAAfIUAAAAfIgl7AWCUgl6AWCg1mAAAUg1lAAAgl6gWCg");
	var mask_graphics_147 = new cjs.Graphics().p("Ehd4A2UUgm6gWgAAAgf0UAAAgfzAm6gWgUAm5gWgA2/AAAUA3AAAAAm5AWgUAm6AWgAAAAfzUAAAAf0gm6AWgUgm5AWgg3AAAAUg2/AAAgm5gWgg");
	var mask_graphics_148 = new cjs.Graphics().p("EhgRA3dUgn5gW+AAAggfUAAAggeAn5gW/UAn5gW+A4YAAAUA4ZAAAAn5AW+UAn5AW/AAAAgeUAAAAgfgn5AW+Ugn5AW/g4ZAAAUg4YAAAgn5gW/g");
	var mask_graphics_149 = new cjs.Graphics().p("EhiqA4nUgo4gXdAAAghKUAAAghJAo4gXdUAo4gXeA5yAAAUA5zAAAAo4AXeUAo4AXdAAAAhJUAAAAhKgo4AXdUgo4AXdg5zAABUg5ygABgo4gXdg");
	var mask_graphics_150 = new cjs.Graphics().p("EhlCA5xUgp5gX8AABgh1UgABgh0Ap5gX8UAp3gX8A7LAAAUA7MAAAAp4AX8UAp4AX8AAAAh0UAAAAh1gp4AX8Ugp4AX8g7MAAAUg7LAAAgp3gX8g");
	var mask_graphics_151 = new cjs.Graphics().p("EhncA67Ugq3gYbAAAgigUAAAgifAq3gYbUAq3gYaA8lAAAUA8mAAAAq3AYaUAq3AYbAAAAifUAAAAiggq3AYbUgq3AYag8mAAAUg8lAAAgq3gYag");
	var mask_graphics_152 = new cjs.Graphics().p("Ehp0A8EUgr3gY5AAAgjLUAAAgjLAr3gY4UAr2gY5A9+AAAUA9/AAAAr3AY5UAr2AY4AAAAjLUAAAAjLgr2AY5Ugr3AY5g9/AAAUg9+AAAgr2gY5g");
	var mask_graphics_153 = new cjs.Graphics().p("EhsOA9OUgs1gZXAAAgj3UAAAgj2As1gZXUAs2gZXA/YAAAUA/ZAAAAs1AZXUAs2AZXAAAAj2UAAAAj3gs2AZXUgs1AZXg/ZAAAUg/YAAAgs2gZXg");
	var mask_graphics_154 = new cjs.Graphics().p("EhumA+YUgt1gZ2AAAgkiUAAAgkgAt1gZ3UAt1gZ2BAxAAAUBAyAAAAt1AZ2UAt1AZ3AAAAkgUAAAAkigt1AZ2Ugt1AZ1hAyAABUhAxgABgt1gZ1g");
	var mask_graphics_155 = new cjs.Graphics().p("Ehw/A/hUgu1gaUAABglNUgABglMAu1gaUUAu0gaVBCLAAAUBCMAAAAu1AaVUAu0AaUAAAAlMUAAAAlNgu0AaUUgu1AaVhCMAAAUhCLAAAgu0gaVg");
	var mask_graphics_156 = new cjs.Graphics().p("EhzYBArUgv0gayAAAgl5UAAAgl3Av0gazUAvzgazBDlAAAUBDlAAAAv0AazUAv0AazAAAAl3UAAAAl5gv0AayUgv0AazhDlAAAUhDlAAAgvzgazg");
	var mask_graphics_157 = new cjs.Graphics().p("Eh1xBB1UgwzgbSAAAgmjUAAAgmiAwzgbSUAwzgbRBE+AAAUBE/AAAAwzAbRUAwzAbSAAAAmiUAAAAmjgwzAbSUgwzAbRhE/AAAUhE+AAAgwzgbRg");
	var mask_graphics_158 = new cjs.Graphics().p("Eh4JBC/UgxzgbxAAAgnOUAAAgnNAxzgbxUAxxgbvBGYAAAUBGYAAAAxzAbvUAxyAbxAAAAnNUAAAAnOgxyAbxUgxzAbvhGYAAAUhGYAAAgxxgbvg");
	var mask_graphics_159 = new cjs.Graphics().p("Eh6jBEIUgyxgcOAAAgn6UAAAgn5AyxgcOUAyygcPBHxAAAUBHyAAAAyyAcPUAyxAcOAAAAn5UAAAAn6gyxAcOUgyyAcPhHyAAAUhHxAAAgyygcPg");
	var mask_graphics_160 = new cjs.Graphics().p("Eh87BFSUgzygctAABgolUgABgojAzygctUAzwgcuBJLAAAUBJLAAAAzyAcuUAzwActAABAojUgABAolgzwActUgzyActhJLAAAUhJLAAAgzwgctg");
	var mask_graphics_161 = new cjs.Graphics().p("Eh/VBGcUg0wgdMAAAgpQUAAAgpPA0wgdMUA0xgdLBKkAAAUBKlAAAA0wAdLUA0xAdMAAAApPUAAAApQg0xAdMUg0wAdLhKlAAAUhKkAAAg0xgdLg");
	var mask_graphics_162 = new cjs.Graphics().p("EiBtBHlUg1wgdqAAAgp7UAAAgp6A1wgdqUA1wgdqBL9AAAUBL/AAAA1wAdqUA1vAdqAAAAp6UAAAAp7g1vAdqUg1wAdqhL/AAAUhL9AAAg1wgdqg");
	var mask_graphics_163 = new cjs.Graphics().p("EiEGBIvUg2vgeJAAAgqmUAAAgqlA2vgeJUA2vgeJBNXAAAUBNYAAAA2vAeJUA2vAeJAAAAqlUAAAAqmg2vAeJUg2vAeJhNYAAAUhNXAAAg2vgeJg");
	var mask_graphics_164 = new cjs.Graphics().p("EiGfBJ5Ug3ugeoAAAgrRUAAAgrQA3ugeoUA3ugenBOxAAAUBOyAAAA3uAenUA3uAeoAABArQUgABArRg3uAeoUg3uAenhOyAAAUhOxAAAg3ugeng");
	var mask_graphics_165 = new cjs.Graphics().p("EiI4BLCUg4ugfFAABgr9UgABgr8A4ugfFUA4ugfGBQKAAAUBQLAAAA4uAfGUA4uAfFAAAAr8UAAAAr9g4uAfFUg4uAfGhQLAAAUhQKAAAg4ugfGg");
	var mask_graphics_166 = new cjs.Graphics().p("EiLRBMMUg5tgfkAAAgsoUAAAgsnA5tgfkUA5tgfkBRkAAAUBRlAAAA5tAfkUA5tAfkAAAAsnUAAAAsog5tAfkUg5tAfkhRlAAAUhRkAAAg5tgfkg");
	var mask_graphics_167 = new cjs.Graphics().p("EiNpBNWUg6tggDAAAgtTUAAAgtSA6tggDUA6rggDBS+AAAUBS+AAAA6tAgDUA6sAgDAAAAtSUAAAAtTg6sAgDUg6tAgDhS+AAAUhS+AAAg6rggDg");
	var mask_graphics_168 = new cjs.Graphics().p("EiQCBOfUg7sgghAAAgt+UAAAgt9A7sgghUA7rggiBUXAAAUBUYAAAA7sAgiUA7rAghAAAAt9UAAAAt+g7rAghUg7sAgihUYAAAUhUXAAAg7rggig");
	var mask_graphics_169 = new cjs.Graphics().p("EiSbBPpUg8sghAAAAgupUAAAguoA8sghAUA8qghABVxAAAUBVxAAAA8sAhAUA8qAhAAAAAuoUAAAAupg8qAhAUg8sAhAhVxAAAUhVxAAAg8qghAg");
	var mask_graphics_170 = new cjs.Graphics().p("EiU0BQzUg9rghfAAAgvUUAAAgvTA9rghfUA9qgheBXKAAAUBXLAAAA9qAheUA9qAhfAABAvTUgABAvUg9qAhfUg9qAhehXLAAAUhXKAAAg9qgheg");
	var mask_graphics_171 = new cjs.Graphics().p("EiXNBR9Ug+qgh9AAAgwAUAAAgv/A+qgh9UA+pgh8BYkAAAUBYkAAAA+qAh8UA+qAh9AAAAv/UAAAAwAg+qAh9Ug+qAh8hYkAAAUhYkAAAg+pgh8g");
	var mask_graphics_172 = new cjs.Graphics().p("EiZmBTGUg/pgibAAAgwrUAAAgwqA/pgibUA/pgicBZ9AAAUBZ+AAAA/pAicUA/pAibAAAAwqUAAAAwrg/pAibUg/pAichZ+AAAUhZ9AAAg/pgicg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(115).to({graphics:mask_graphics_115,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_116,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_117,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_118,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_119,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_120,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_121,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_122,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_123,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_124,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_125,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_126,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_127,x:-672.1,y:4.075}).wait(1).to({graphics:mask_graphics_128,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_129,x:-672.1,y:4.075}).wait(1).to({graphics:mask_graphics_130,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_131,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_132,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_133,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_134,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_135,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_136,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_137,x:-672.1,y:4.05}).wait(1).to({graphics:mask_graphics_138,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_139,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_140,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_141,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_142,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_143,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_144,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_145,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_146,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_147,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_148,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_149,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_150,x:-672.15,y:4.075}).wait(1).to({graphics:mask_graphics_151,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_152,x:-672.15,y:4.075}).wait(1).to({graphics:mask_graphics_153,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_154,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_155,x:-672.15,y:4.075}).wait(1).to({graphics:mask_graphics_156,x:-672.125,y:4.05}).wait(1).to({graphics:mask_graphics_157,x:-672.15,y:4.075}).wait(1).to({graphics:mask_graphics_158,x:-672.15,y:4.05}).wait(1).to({graphics:mask_graphics_159,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_160,x:-672.15,y:4.05}).wait(1).to({graphics:mask_graphics_161,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_162,x:-672.15,y:4.075}).wait(1).to({graphics:mask_graphics_163,x:-672.15,y:4.075}).wait(1).to({graphics:mask_graphics_164,x:-672.15,y:4.075}).wait(1).to({graphics:mask_graphics_165,x:-672.15,y:4.075}).wait(1).to({graphics:mask_graphics_166,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_167,x:-672.15,y:4.075}).wait(1).to({graphics:mask_graphics_168,x:-672.15,y:4.075}).wait(1).to({graphics:mask_graphics_169,x:-672.15,y:4.075}).wait(1).to({graphics:mask_graphics_170,x:-672.15,y:4.075}).wait(1).to({graphics:mask_graphics_171,x:-672.125,y:4.075}).wait(1).to({graphics:mask_graphics_172,x:-672.15,y:4.075}).wait(23));

	// Layer_32
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#074E70").s().p("AAIgIQABgIABgCQADgFAHACQAEACAAAFQAAAEgDAFIgNgCQAAAcgfABg");
	this.shape.setTransform(-39.8714,71.4083);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("Eg80AKWQivgKkDgnQkCgokkhcQjthLjhhoQhzg1iRhPQhAgjhFgoQgSgKgJABQgLACgKAWIghBMIh7hMIBYjFQAPgjAPgDQAOgDAfAUQBqBEBsA7QKkF6LcBeQGpA2IaglQMcg1MJkuQB2gtAlgQQBXgmA+gnQAWgOArgFQAxgHATgIQFUiQDLhOQEth1D9hLQHHiIH0g4QHNg0ICANQRJAcRUHPQIsDnB2AuQGACXEyBSQEJBIDYAjQATADAHAJQAHAIgBATIADA0QACAfgIAPQgMAUgdgHQgigMgPgBQhJgGhagTQg3gLhqgbQkuhLlMh4Qiug/k+iGQiCg3i0hHIk5h7Qj3hjk2hYQhJgVhpgZIi0gqQg2gNhmgPQhsgRgxgLQhJgQhygHIiLgJQhPgHg7gMQgOgDgcACQgeADgMgCQhggKh9gEIjegEQhSgBhrAHIi7AOQiXAMhBAGQh5AMheAQIjtAlQiNAXhfAWQlzBZl2CNQltCKlNCRQgNAGgHAAQgLAAgIgJQADgFgBgEQAAgFgEgCQgHgCgCAFQgCACgBAIIgfAfQhIAjhcAmQg5AYhuAqQhlAmiLAtIjxBMQioA2inAiIi6AmQhrAUhSAGQgxAEhYAPQhfAQgpAEQheAIhZACQjaAEhtABIhOABQiNAAhsgGg");
	this.shape_1.setTransform(83.8815,57.3319);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},115).wait(80));

	// Layer_34 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_90 = new cjs.Graphics().p("ArmLnQk0k0AAmzQAAmyE0k0QE0k0GyAAQGzAAE0E0QEzE0ABGyQgBGzkzE0Qk0EzmzABQmygBk0kzg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AsUMVQlHlHAAnOQAAnNFHlHQFHlHHNAAQHOAAFHFHQFHFHAAHNQAAHOlHFHQlHFHnOAAQnNAAlHlHg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AtDNDQlZlaAAnpQAAnoFZlbQFblZHoAAQHpAAFaFZQFaFbAAHoQAAHplaFaQlaFanpAAQnoAAlblag");
	var mask_1_graphics_93 = new cjs.Graphics().p("AtxNxQlslsAAoFQAAoDFsluQFulsIDAAQIEAAFtFsQFuFuAAIDQAAIFluFsQltFuoEAAQoDAAlulug");
	var mask_1_graphics_94 = new cjs.Graphics().p("AufOfQmAl/AAogQAAoeGAmBQGAmAIfAAQIfAAGAGAQGBGBAAIeQAAIgmBF/QmAGBofAAQofAAmAmBg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AvNPNQmTmTAAo6QAAo6GTmTQGUmTI5AAQI7AAGTGTQGTGTAAI6QAAI6mTGTQmTGUo7AAQo5AAmUmUg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Av7P7QmnmmABpVQgBpVGnmmQGmmmJVAAQJWAAGlGmQGoGmgBJVQABJVmoGmQmlGopWgBQpVABmmmog");
	var mask_1_graphics_97 = new cjs.Graphics().p("AwpQqQm6m6AApwQAApwG6m5QG5m6JwAAQJwAAG6G6QG6G5AAJwQAAJwm6G6Qm6G6pwAAQpwAAm5m6g");
	var mask_1_graphics_98 = new cjs.Graphics().p("AxYRYQnMnNAAqLQAAqLHMnNQHOnMKKAAQKMAAHMHMQHNHNAAKLQAAKLnNHNQnMHNqMAAQqKAAnOnNg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AyGSGQngnfAAqnQAAqmHgngQHhngKlAAQKnAAHfHgQHhHgAAKmQAAKnnhHfQnfHhqnAAQqlAAnhnhg");
	var mask_1_graphics_100 = new cjs.Graphics().p("Ay1S0QnynyAArCQAArBHynzQH0nzLBAAQLCAAHzHzQHzHzAALBQAALCnzHyQnzH0rCAAQrBAAn0n0g");
	var mask_1_graphics_101 = new cjs.Graphics().p("AziTiQoGoFAArdQAArcIGoGQIHoGLbAAQLdAAIGIGQIGIGAALcQAALdoGIFQoGIHrdAAQrbAAoHoHg");
	var mask_1_graphics_102 = new cjs.Graphics().p("A0RURQoZoZAAr4QAAr3IZoaQIaoZL3AAQL4AAIZIZQIaIaAAL3QAAL4oaIZQoZIar4AAQr3AAoaoag");
	var mask_1_graphics_103 = new cjs.Graphics().p("A0/U/QososAAsTQAAsSIsotQItosMSAAQMTAAIsIsQItItAAMSQAAMTotIsQosItsTAAQsSAAototg");
	var mask_1_graphics_104 = new cjs.Graphics().p("A1tVtQo/o/AAsuQAAstI/pAQJAo/MtAAQMuAAI/I/QJAJAAAMtQAAMupAI/Qo/JAsuAAQstAApApAg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A2bWbQpTpSAAtJQAAtIJTpTQJTpTNIAAQNJAAJTJTQJTJTAANIQAANJpTJSQpTJUtJAAQtIAApTpUg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A3JXJQpmplAAtkQAAtjJmpmQJmpmNjAAQNkAAJmJmQJmJmAANjQAANkpmJlQpmJntkAAQtjAApmpng");
	var mask_1_graphics_107 = new cjs.Graphics().p("A34X4Qp4p5AAt/QAAt+J4p6QJ6p4N+AAQN/AAJ5J4QJ5J6AAN+QAAN/p5J5Qp5J5t/AAQt+AAp6p5g");
	var mask_1_graphics_108 = new cjs.Graphics().p("A4mYmQqMqMAAuaQAAuZKMqNQKNqMOZAAQOaAAKMKMQKNKNAAOZQAAOaqNKMQqMKNuaAAQuZAAqNqNg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A5UZUQqfqfAAu1QAAu0KfqgQKgqfO0AAQO1AAKfKfQKgKgAAO0QAAO1qgKfQqfKgu1AAQu0AAqgqgg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A6CaCQqyqyAAvQQAAvPKyq0QKzqyPPABQPQgBKzKyQKyK0AAPPQAAPQqyKyQqzK0vQAAQvPAAqzq0g");
	var mask_1_graphics_111 = new cjs.Graphics().p("A6xawQrFrFAAvrQAAvqLFrGQLHrGPqAAQPrAALGLGQLGLGAAPqQAAPrrGLFQrGLHvrAAQvqAArHrHg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A7fbfQrYrYAAwHQAAwFLYraQLarYQFAAQQGAALZLYQLZLaAAQFQAAQHrZLYQrZLZwGAAQwFAArarZg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A8NcMQrrrqAAwiQAAwgLrrtQLtrsQgAAQQhAALsLsQLsLtAAQgQAAQirsLqQrsLuwhgBQwgABrtrug");
	var mask_1_graphics_114 = new cjs.Graphics().p("A87c7Qr/r+AAw9QAAw7L/sAQMAr/Q7AAQQ8AAL/L/QMAMAAAQ7QAAQ9sAL+Qr/MAw8AAQw7AAsAsAg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A9qdpQsRsRAAxYQAAxWMRsTQMUsSRWAAQRXAAMSMSQMTMTAARWQAARYsTMRQsSMTxXAAQxWAAsUsTg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A+YeXQskskgBxzQABxyMkslQMnsmRxAAQRzAAMlMmQMmMlgBRyQABRzsmMkQslMnxzgBQxxABsnsng");
	var mask_1_graphics_117 = new cjs.Graphics().p("A/GfGQs4s4AAyOQAAyNM4s5QM6s4SMAAQSOAAM4M4QM5M5AASNQAASOs5M4Qs4M5yOAAQyMAAs6s5g");
	var mask_1_graphics_118 = new cjs.Graphics().p("A/0f0QtMtLAAypQAAyoNMtMQNMtMSoABQSpgBNLNMQNNNMAASoQAASptNNLQtLNMypABQyogBtMtMg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EggjAgiQteteAAzEQAAzDNetgQNhteTCAAQTEAANfNeQNfNgAATDQAATEtfNeQtfNgzEAAQzCAAthtgg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EghQAhQQtytxAAzfQAAzeNytzQNytxTeAAQTfAANxNxQNzNzAATeQAATftzNxQtxNzzfAAQzeAAtytzg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_1_graphics_90,x:-633.1,y:293.1}).wait(1).to({graphics:mask_1_graphics_91,x:-633.1,y:293.1}).wait(1).to({graphics:mask_1_graphics_92,x:-633.1,y:293.1}).wait(1).to({graphics:mask_1_graphics_93,x:-633.1,y:293.1}).wait(1).to({graphics:mask_1_graphics_94,x:-633.1,y:293.1}).wait(1).to({graphics:mask_1_graphics_95,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_96,x:-633.1,y:293.1}).wait(1).to({graphics:mask_1_graphics_97,x:-633.1,y:293.1}).wait(1).to({graphics:mask_1_graphics_98,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_99,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_100,x:-633.1,y:293.1}).wait(1).to({graphics:mask_1_graphics_101,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_102,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_103,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_104,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_105,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_106,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_107,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_108,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_109,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_110,x:-633.15,y:293.15}).wait(1).to({graphics:mask_1_graphics_111,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_112,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_113,x:-633.15,y:293.15}).wait(1).to({graphics:mask_1_graphics_114,x:-633.15,y:293.15}).wait(1).to({graphics:mask_1_graphics_115,x:-633.125,y:293.125}).wait(1).to({graphics:mask_1_graphics_116,x:-633.15,y:293.15}).wait(1).to({graphics:mask_1_graphics_117,x:-633.15,y:293.15}).wait(1).to({graphics:mask_1_graphics_118,x:-633.15,y:293.15}).wait(1).to({graphics:mask_1_graphics_119,x:-633.15,y:293.15}).wait(1).to({graphics:mask_1_graphics_120,x:-633.15,y:293.15}).wait(75));

	// Layer_31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AkNNFQhbgwhZg0QgVgMgDgMQgEgLAKgWIA/iOQFPrxD/pHQAQgiAPgEQAOgDAfAVQBqBDBsA8QgPBPgZBJQhAgjhGgoQgSgLgIACQgMACgJAVQjxIlkRJlIgWA0QgMAZAEANQADAOAZANIBNAqIAAAQIhQBkg");
	this.shape_2.setTransform(-519.5571,128.3809);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(90).to({_off:false},0).wait(105));

	// Layer_35 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("A5LZNQqdqdAAuwQAAuvKdqdQKbqbOwgBQOwABKdKbQKbKdAAOvQAAOwqbKdQqdKbuwAAQuwAAqbqbg");
	var mask_2_graphics_1 = new cjs.Graphics().p("A6BaCQqyqyAAvQQAAvPKyqyQKyqyPPAAQPQAAKyKyQKyKyAAPPQAAPQqyKyQqyKyvQAAQvPAAqyqyg");
	var mask_2_graphics_2 = new cjs.Graphics().p("A63a4QrIrJAAvvQAAvuLIrJQLJrIPuAAQPvAALILIQLJLJAAPuQAAPvrJLJQrILIvvAAQvuAArJrIg");
	var mask_2_graphics_3 = new cjs.Graphics().p("A7sbtQrfreAAwPQAAwOLfrfQLereQOAAQQPAALeLeQLfLfAAQOQAAQPrfLeQreLfwPAAQwOAArerfg");
	var mask_2_graphics_4 = new cjs.Graphics().p("A8icjQr1r1AAwuQAAwtL1r1QL1r1QtABQQugBL1L1QL1L1AAQtQAAQur1L1Qr1L0wuABQwtgBr1r0g");
	var mask_2_graphics_5 = new cjs.Graphics().p("A9YdYQsLsLAAxNQAAxNMLsLQMMsKRMAAQRNAAMMMKQMLMLgBRNQABRNsLMLQsMMMxNAAQxMAAsMsMg");
	var mask_2_graphics_6 = new cjs.Graphics().p("A+NeOQshshAAxtQAAxsMhshQMhshRsAAQRtAAMhMhQMhMhAARsQAARtshMhQshMhxtAAQxsAAshshg");
	var mask_2_graphics_7 = new cjs.Graphics().p("A/DfEQs3s4AAyMQAAyMM3s3QM3s3SMAAQSMAAM3M3QM4M3AASMQAASMs4M4Qs3M3yMAAQyMAAs3s3g");
	var mask_2_graphics_8 = new cjs.Graphics().p("A/4f5QtOtNAAysQAAyqNOtOQNNtOSrAAQSsAANNNOQNONOAASqQAASstONNQtNNOysAAQyrAAtNtOg");
	var mask_2_graphics_9 = new cjs.Graphics().p("EgguAgvQtktkAAzLQAAzKNktkQNktjTKAAQTLAANkNjQNkNkAATKQAATLtkNkQtkNjzLABQzKgBtktjg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EghjAhlQt6t7AAzqQAAzqN6t6QN6t5TpAAQTqAAN6N5QN6N6AATqQAATqt6N7Qt6N6zqAAQzpAAt6t6g");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgiZAiaQuQuQAA0KQAA0JOQuQQOQuQUJAAQUKAAOQOQQOQOQAAUJQAAUKuQOQQuQOQ0KAAQ0JAAuQuQg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EgjPAjPQumumAA0pQAA0pOmumQOnumUoAAQUqAAOmOmQOmOmAAUpQAAUpumOmQumOn0qAAQ0oAAunung");
	var mask_2_graphics_13 = new cjs.Graphics().p("EgkEAkFQu9u9AA1IQAA1IO9u8QO9u9VHAAQVJAAO8O9QO9O8AAVIQAAVIu9O9Qu8O91JAAQ1HAAu9u9g");
	var mask_2_graphics_14 = new cjs.Graphics().p("Egk6Ak7QvTvTAA1oQAA1nPTvTQPTvTVnAAQVoAAPTPTQPTPTAAVnQAAVovTPTQvTPS1oABQ1ngBvTvSg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EglwAlwQvovpAA2HQAA2GPovpQPpvpWHAAQWIAAPoPpQPpPpAAWGQAAWHvpPpQvoPp2IAAQ2HAAvpvpg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EgmlAmmQv/v/AA2nQAA2mP/v/QP/v/WmAAQWnAAP/P/QP/P/AAWmQAAWnv/P/Qv/P/2nAAQ2mAAv/v/g");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgnaAncQwWwWAA3GQAA3FQWwWQQVwVXFAAQXGAAQVQVQQWQWAAXFQAAXGwWQWQwVQV3GAAQ3FAAwVwVg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EgoQAoRQwswsAA3lQAA3lQswrQQrwsXlAAQXmAAQrQsQQsQrAAXlQAAXlwsQsQwrQs3mAAQ3lAAwrwsg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EgpGApHQxCxCAB4FQgB4ERCxCQRCxCYEAAQYFAARCRCQRCRCAAYEQAAYFxCRCQxCRC4FAAQ4EAAxCxCg");
	var mask_2_graphics_20 = new cjs.Graphics().p("Egp7Ap8QxZxYAA4kQAA4kRZxYQRYxXYjgBQYkABRYRXQRZRYAAYkQAAYkxZRYQxYRY4kAAQ4jAAxYxYg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EgqxAqyQxuxuAA5EQAA5DRuxuQRvxuZCAAQZEAARuRuQRuRuAAZDQAAZExuRuQxuRu5EAAQ5CAAxvxug");
	var mask_2_graphics_22 = new cjs.Graphics().p("EgrmArnQyFyEAA5jQAA5iSFyFQSEyEZiAAQZkAASESEQSESFAAZiQAAZjyESEQyESF5kAAQ5iAAyEyFg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EgscAsdQybybAA6CQAA6CSbyaQSaybaCAAQaCAASbSbQSbSaAAaCQAAaCybSbQybSb6CAAQ6CAAyaybg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EgtSAtTQywyxAA6iQAA6hSwyxQSxyxahAAQaiAASwSxQSxSxABahQgBaiyxSxQywSx6igBQ6hAByxyxg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EguHAuIQzHzHAA7BQAA7ATHzHQTHzHbAAAQbBAATHTHQTHTHAAbAQAAbBzHTHQzHTH7BAAQ7AAAzHzHg");
	var mask_2_graphics_26 = new cjs.Graphics().p("Egu9Au+QzdzeAA7gQAA7fTdzeQTdzdbgAAQbhAATdTdQTdTeAAbfQAAbgzdTeQzdTd7hAAQ7gAAzdzdg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EgvyAv0Qz0z0AA8AQAA7/T0z0QTzzzb/AAQcAAATzTzQT0T0AAb/QAAcAz0T0QzzTz8AAAQ7/AAzzzzg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EgwoAwpQ0K0KAA8fQAA8fUK0JQUK0KceAAQcgAAUJUKQUKUJAAcfQAAcf0KUKQ0JUK8gAAQ8eAA0K0Kg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EgxeAxeQ0g0gAA8+QAA8+Ug0gQUg0fc+AAQc/AAUgUfQUgUggBc+QAAc+0fUgQ0gUg8/AAQ8+AA0g0gg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EgyTAyUQ0202AA9eQAA9dU203QU202ddABQdegBU2U2QU2U3AAddQAAde02U2Q02U39eAAQ9dAA0203g");
	var mask_2_graphics_31 = new cjs.Graphics().p("EgzIAzKQ1N1NAA99QAA99VN1MQVM1Md8AAQd+AAVMVMQVMVMAAd9QAAd91MVNQ1MVM9+AAQ98AA1M1Mg");
	var mask_2_graphics_32 = new cjs.Graphics().p("Egz/Az/Q1i1iAA+dQAA+cVi1jQVj1iecAAQedAAViViQVjVjAAecQAAed1jViQ1iVj+dAAQ+cAA1j1jg");
	var mask_2_graphics_33 = new cjs.Graphics().p("Eg00A01Q1515AA+8QAA+7V515QV515e7AAQe8AAV5V5QV5V5AAe7QAAe815V5Q15V5+8AAQ+7AA1515g");
	var mask_2_graphics_34 = new cjs.Graphics().p("Eg1qA1rQ2P2QAA/bQAA/bWP2OQWP2QfbAAQfcAAWPWQQWOWOABfbQgBfb2OWQQ2PWO/cABQ/bgB2P2Og");
	var mask_2_graphics_35 = new cjs.Graphics().p("Eg2fA2gQ2l2lAA/7QAA/6Wl2lQWl2lf6AAQf7AAWlWlQWlWlAAf6QAAf72lWlQ2lWl/7AAQ/6AA2l2lg");
	var mask_2_graphics_36 = new cjs.Graphics().p("Eg3UA3WUgW8gW8AAAggaUAAAggaAW8gW7UAW7gW7AgZAAAUAgaAAAAW8AW7UAW7AW7AAAAgaUAAAAgagW7AW8UgW7AW7ggbAAAUggZAAAgW7gW7g");
	var mask_2_graphics_37 = new cjs.Graphics().p("Eg4KA4LUgXSgXSAAAgg5UAAAgg5AXSgXRUAXRgXSAg5AAAUAg6AAAAXSAXSUAXRAXRAAAAg5UAAAAg5gXRAXSUgXSAXSgg6AAAUgg5AAAgXRgXSg");
	var mask_2_graphics_38 = new cjs.Graphics().p("Eg5AA5BUgXogXoAAAghZUAAAghYAXogXoUAXogXoAhYAAAUAhaAAAAXnAXoUAXoAXoAAAAhYUAAAAhZgXoAXoUgXnAXoghaAAAUghYAAAgXogXog");
	var mask_2_graphics_39 = new cjs.Graphics().p("Eg52A52UgX9gX9AAAgh5UAAAgh4AX9gX9UAX+gX/Ah4AAAUAh5AAAAX+AX/UAX9AX9AAAAh4UAAAAh5gX9AX9UgX+AX/gh5AAAUgh4AAAgX+gX/g");
	var mask_2_graphics_40 = new cjs.Graphics().p("Eg6rA6sUgYUgYUAAAgiYUAAAgiXAYUgYUUAYUgYUAiXAAAUAiYAAAAYUAYUUAYUAYUAAAAiXUAAAAiYgYUAYUUgYUAYUgiYAAAUgiXAAAgYUgYUg");
	var mask_2_graphics_41 = new cjs.Graphics().p("Eg7hA7iUgYqgYrAAAgi3UAAAgi3AYqgYqUAYrgYqAi2AAAUAi4AAAAYqAYqUAYqAYqAAAAi3UAAAAi3gYqAYrUgYqAYqgi4AAAUgi2AAAgYrgYqg");
	var mask_2_graphics_42 = new cjs.Graphics().p("Eg8WA8XUgZBgZAAAAgjXUAAAgjWAZBgZAUAZAgZBAjWAAAUAjXAAAAZBAZBUAZAAZAAAAAjWUAAAAjXgZAAZAUgZBAZBgjXAAAUgjWAAAgZAgZBg");
	var mask_2_graphics_43 = new cjs.Graphics().p("Eg9MA9NUgZXgZWAAAgj3UAAAgj1AZXgZXUAZXgZXAj1AABUAj2gABAZXAZXUAZXAZXAAAAj1UAAAAj3gZXAZWUgZXAZWgj2AABUgj1gABgZXgZWg");
	var mask_2_graphics_44 = new cjs.Graphics().p("Eg+BA+DUgZtgZtAAAgkWUAAAgkVAZtgZsUAZsgZtAkVAAAUAkWAAAAZtAZtUAZtAZsAAAAkVUAAAAkWgZtAZtUgZtAZtgkWAAAUgkVAAAgZsgZtg");
	var mask_2_graphics_45 = new cjs.Graphics().p("Eg+3A+4UgaDgaDAAAgk1UAAAgk0AaDgaDUAaDgaDAk0AAAUAk1AAAAaDAaDUAaDAaDAAAAk0UAAAAk1gaDAaDUgaDAaDgk1AAAUgk0AAAgaDgaDg");
	var mask_2_graphics_46 = new cjs.Graphics().p("Eg/tA/tUgaZgaZAAAglUUAAAglUAaZgaZUAaagaZAlTAAAUAlUAAAAaaAaZUAaZAaZAAAAlUUAAAAlUgaZAaZUgaaAaaglUAAAUglTAAAgaagaag");
	var mask_2_graphics_47 = new cjs.Graphics().p("EhAiBAjUgawgawAAAglzUAAAglzAawgavUAavgawAlzAAAUAl0AAAAavAawUAawAavAAAAlzUAAAAlzgawAawUgavAawgl0AAAUglzAAAgavgawg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EhBYBBZUgbGgbGAABgmTUgABgmTAbGgbFUAbGgbGAmSAAAUAmTAAAAbGAbGUAbFAbFAAAAmTUAAAAmTgbFAbGUgbGAbGgmTAAAUgmSAAAgbGgbGg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EhCNBCOUgbcgbbAAAgmzUAAAgmyAbcgbcUAbbgbbAmyAAAUAmzAAAAbcAbbUAbbAbcAAAAmyUAAAAmzgbbAbbUgbcAbcgmzAAAUgmyAAAgbbgbcg");
	var mask_2_graphics_50 = new cjs.Graphics().p("EhDDBDEUgbygbyAAAgnSUAAAgnRAbygbyUAbygbyAnRAAAUAnSAAAAbyAbyUAbyAbyAAAAnRUAAAAnSgbyAbyUgbyAbygnSAAAUgnRAAAgbygbyg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EhD5BD6UgcIgcJAAAgnxUAAAgnwAcIgcJUAcJgcIAnwAAAUAnxAAAAcIAcIUAcJAcJAAAAnwUAAAAnxgcJAcJUgcIAcIgnxAAAUgnwAAAgcJgcIg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EhEuBEvUgcfgceAAAgoRUAAAgoQAcfgcfUAcegceAoQAAAUAoRAAAAceAceUAcfAcfAAAAoQUAAAAoRgcfAceUgceAcfgoRAAAUgoQAAAgcegcfg");
	var mask_2_graphics_53 = new cjs.Graphics().p("EhFkBFlUgc0gc0AAAgoxUAAAgovAc0gc1UAc1gc1AovAAAUAowAAAAc1Ac1UAc0Ac1AAAAovUAAAAoxgc0Ac0Ugc1Ac1gowAAAUgovAAAgc1gc1g");
	var mask_2_graphics_54 = new cjs.Graphics().p("EhGZBGaUgdMgdKAAAgpQUAAAgpPAdMgdLUAdKgdKApPAAAUApQAAAAdKAdKUAdLAdLAAAApPUAAAApQgdLAdKUgdKAdLgpQAAAUgpPAAAgdKgdLg");
	var mask_2_graphics_55 = new cjs.Graphics().p("EhHPBHQUgdhgdhAAAgpvUAAAgpuAdhgdhUAdhgdhApuAAAUApvAAAAdhAdhUAdhAdhAAAApuUAAAApvgdhAdhUgdhAdhgpvAAAUgpuAAAgdhgdhg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EhIFBIFUgd3gd3AAAgqOUAAAgqOAd3gd3UAd4gd3AqNAAAUAqOAAAAd4Ad3UAd3Ad3AAAAqOUAAAAqOgd3Ad3Ugd4Ad4gqOAAAUgqNAAAgd4gd4g");
	var mask_2_graphics_57 = new cjs.Graphics().p("EhI6BI7UgeOgeNAAAgquUAAAgqtAeOgeNUAeNgeOAqtAAAUAquAAAAeOAeOUAeNAeNAAAAqtUAAAAqugeNAeNUgeOAeOgquAAAUgqtAAAgeNgeOg");
	var mask_2_graphics_58 = new cjs.Graphics().p("EhJvBJxUgekgekgABgrNUAABgrMAekgekUAejgekArMAAAUArNAAAAekAekUAekAekAAAArMUAAAArNgekAekUgekAekgrNAAAUgrMAAAgejgekg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EhKlBKmUge7ge5AAAgrtUAAAgrsAe7ge5UAe6ge6ArrAAAUArsAAAAe6Ae6UAe6Ae5AABArsUgABArtge6Ae5Uge6Ae6grsAAAUgrrAAAge6ge6g");
	var mask_2_graphics_60 = new cjs.Graphics().p("EhLbBLcUgfQgfQAAAgsMUAAAgsLAfQgfQUAfQgfQAsLAAAUAsMAAAAfQAfQUAfQAfQAAAAsLUAAAAsMgfQAfQUgfQAfQgsMAAAUgsLAAAgfQgfQg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EhMRBMSUgfmgfmAAAgssUAAAgsrAfmgfmUAfngfmAsqAAAUAsrAAAAfmAfmUAfnAfmAAAAsrUAAAAssgfnAfmUgfmAfmgsrAAAUgsqAAAgfngfmg");
	var mask_2_graphics_62 = new cjs.Graphics().p("EhNGBNHUgf9gf8AAAgtLUAAAgtKAf9gf8UAf8gf9AtKAAAUAtLAAAAf8Af9UAf9Af8AAAAtKUAAAAtLgf9Af8Ugf8Af9gtLAAAUgtKAAAgf8gf9g");
	var mask_2_graphics_63 = new cjs.Graphics().p("EhN7BN8UggTggSgABgtqUAABgtpAgTggTUAgSggTAtpAAAUAtqAAAAgTAgTUAgSAgTAAAAtpUAAAAtqggSAgSUggTAgTgtqAABUgtpgABggSggTg");
	var mask_2_graphics_64 = new cjs.Graphics().p("EhOxBOyUggpggpAAAguJUAAAguJAgpggpUAgpggpAuIAAAUAuKAAAAgpAgpUAgoAgpAAAAuJUAAAAuJggoAgpUggpAgqguKAAAUguIAAAggpggqg");
	var mask_2_graphics_65 = new cjs.Graphics().p("EhPnBPoUgg/gg/AAAgupUAAAguoAg/gg/UAg/gg/AuoAAAUAupAAAAg/Ag/UAg/Ag/AAAAuoUAAAAupgg/Ag/Ugg/Ag/gupAAAUguoAAAgg/gg/g");
	var mask_2_graphics_66 = new cjs.Graphics().p("EhQcBQdUghWghVAAAgvIUAAAgvIAhWghVUAhVghVAvHAAAUAvJAAAAhVAhVUAhVAhVAAAAvIUAAAAvIghVAhVUghVAhWgvJAAAUgvHAAAghVghWg");
	var mask_2_graphics_67 = new cjs.Graphics().p("EhRSBRTUghsghrAAAgvoUAAAgvnAhsghrUAhsghsAvmAAAUAvoAAAAhsAhsUAhrAhrAAAAvnUAAAAvoghrAhrUghsAhsgvoAAAUgvmAAAghsghsg");
	var mask_2_graphics_68 = new cjs.Graphics().p("EhSIBSJUgiCgiCAAAgwHUAAAgwHAiCgiBUAiCgiBAwGAAAUAwHAAAAiBAiBUAiDAiBgABAwHUAABAwHgiDAiCUgiBAiBgwHAABUgwGgABgiCgiBg");
	var mask_2_graphics_69 = new cjs.Graphics().p("EhS9BS+UgiYgiYAAAgwmUAAAgwmAiYgiYUAiXgiXAwmAAAUAwmAAAAiYAiXUAiYAiYAAAAwmUAAAAwmgiYAiYUgiYAiYgwmAAAUgwmAAAgiXgiYg");
	var mask_2_graphics_70 = new cjs.Graphics().p("EhTzBT0UgiugiuAAAgxGUAAAgxFAiugiuUAiugiuAxFAAAUAxGAAAAiuAiuUAiuAiuAAAAxFUAAAAxGgiuAiuUgiuAiugxGAAAUgxFAAAgiugiug");
	var mask_2_graphics_71 = new cjs.Graphics().p("EhUoBUpUgjFgjEAAAgxlUAAAgxkAjFgjFUAjEgjEAxkAAAUAxlAAAAjEAjEUAjFAjFAAAAxkUAAAAxlgjFAjEUgjEAjFgxlAAAUgxkAAAgjEgjFg");
	var mask_2_graphics_72 = new cjs.Graphics().p("EhVeBVfUgjbgjaAAAgyFUAAAgyEAjbgjaUAjbgjbAyDAAAUAyFAAAAjaAjbUAjbAjaAAAAyEUAAAAyFgjbAjaUgjaAjbgyFAAAUgyDAAAgjbgjbg");
	var mask_2_graphics_73 = new cjs.Graphics().p("EhWUBWUUgjxgjwAABgykUgABgyjAjxgjxUAjxgjwAyjgABUAylAABAjwAjwUAjxAjxgABAyjUAABAykgjxAjwUgjwAjygylAAAUgyjAAAgjxgjyg");
	var mask_2_graphics_74 = new cjs.Graphics().p("EhXJBXKUgkHgkHAAAgzDUAAAgzDAkHgkHUAkHgkGAzCAAAUAzEAAAAkHAkGUAkGAkHAAAAzDUAAAAzDgkGAkHUgkHAkHgzEAAAUgzCAAAgkHgkHg");
	var mask_2_graphics_75 = new cjs.Graphics().p("EhX/BYAUgkdgkdAAAgzjUAAAgziAkdgkdUAkdgkdAziAAAUAzjAAAAkdAkdUAkdAkdAAAAziUAAAAzjgkdAkdUgkdAkdgzjAAAUgziAAAgkdgkdg");
	var mask_2_graphics_76 = new cjs.Graphics().p("EhY0BY1Ugk0gkzAAAg0CUAAAg0BAk0gk0UAkzgkzA0BAAAUA0DAAAAkzAkzUAkzAk0AAAA0BUAAAA0CgkzAkzUgkzAk0g0DAAAUg0BAAAgkzgk0g");
	var mask_2_graphics_77 = new cjs.Graphics().p("EhZqBZrUglKglKAAAg0hUAAAg0hAlKglKUAlJglJA0hAAAUA0iAAAAlJAlJUAlKAlKAAAA0hUAAAA0hglKAlKUglJAlKg0iAAAUg0hAAAglJglKg");
	var mask_2_graphics_78 = new cjs.Graphics().p("EhagBahUglfglgAAAg1BUAAAg1AAlfglgUAlgglgA1AAAAUA1BAAAAlgAlgUAlfAlgAAAA1AUAAAA1BglfAlgUglgAlgg1BAAAUg1AAAAglgglgg");
	var mask_2_graphics_79 = new cjs.Graphics().p("EhbVBbWUgl2gl2AAAg1gUAAAg1gAl2gl1UAl2gl2A1fAAAUA1hAAAAl1Al2UAl2Al1AAAA1gUAAAA1ggl2Al2Ugl1Al2g1hAAAUg1fAAAgl2gl2g");
	var mask_2_graphics_80 = new cjs.Graphics().p("EhcKBcLUgmNgmMAAAg1/UAAAg1/AmNgmMUAmMgmMA1+AAAUA2AAAAAmMAmMUAmMAmMAAAA1/UAAAA1/gmMAmMUgmMAmNg2AAAAUg1+AAAgmMgmNg");
	var mask_2_graphics_81 = new cjs.Graphics().p("EhdABdBUgmjgmiAAAg2fUAAAg2fAmjgmhUAmigmjA2eAAAUA2fAAAAmjAmjUAmiAmhAAAA2fUAAAA2fgmiAmiUgmjAmjg2fAAAUg2eAAAgmigmjg");
	var mask_2_graphics_82 = new cjs.Graphics().p("Ehd2Bd3Ugm5gm5AAAg2+UAAAg2+Am5gm4UAm5gm5A29AAAUA2/AAAAm4Am5UAm5Am4AAAA2+UAAAA2+gm5Am5Ugm4Am5g2/AAAUg29AAAgm5gm5g");
	var mask_2_graphics_83 = new cjs.Graphics().p("EherBesUgnPgnOgABg3eUAABg3dAnPgnOUAnPgnPA3cAAAUA3eAAAAnPAnPUAnOAnOAABA3dUgABA3egnOAnOUgnPAnPg3eAAAUg3cAAAgnPgnPg");
	var mask_2_graphics_84 = new cjs.Graphics().p("EhfhBfiUgnlgnlAAAg39UAAAg39AnlgnkUAnlgnlA38AAAUA3+AAAAnlAnlUAnkAnkAAAA39UAAAA39gnkAnlUgnlAnlg3+AAAUg38AAAgnlgnlg");
	var mask_2_graphics_85 = new cjs.Graphics().p("EhgWBgYUgn8gn8AAAg4cUAAAg4cAn8gn7UAn7gn7A4bAAAUA4dAAAAn7An7UAn7An7AAAA4cUAAAA4cgn7An8Ugn7An7g4dAAAUg4bAAAgn7gn7g");
	var mask_2_graphics_86 = new cjs.Graphics().p("EhhMBhNUgoSgoRAAAg48UAAAg48AoSgoQUAoRgoSA47AAAUA49AAAAoRAoSUAoRAoQAAAA48UAAAA48goRAoRUgoRAoSg49AAAUg47AAAgoRgoSg");
	var mask_2_graphics_87 = new cjs.Graphics().p("EhiCBiDUgoogonAAAg5cUAAAg5bAoogonUAoogooA5aAAAUA5cAAAAonAooUAooAonAAAA5bUAAAA5cgooAonUgonAoog5cgABUg5aAABgoogoog");
	var mask_2_graphics_88 = new cjs.Graphics().p("Ehi4Bi4Ugo+go9AAAg57UAAAg56Ao+go+UAo+go9A56AAAUA57AAAAo+Ao9UAo9Ao+AAAA56UAAAA57go9Ao9Ugo+Ao+g57AAAUg56AAAgo+go+g");
	var mask_2_graphics_89 = new cjs.Graphics().p("EhjtBjuUgpUgpUAAAg6aUAAAg6ZApUgpUUApUgpUA6ZAAAUA6bAAAApTApUUApUApUAAAA6ZUAAAA6agpUApUUgpTApUg6bAAAUg6ZAAAgpUgpUg");
	var mask_2_graphics_90 = new cjs.Graphics().p("EhkiBkjUgprgppAAAg66UAAAg65AprgpqUAppgpqA65AAAUA66AAAApqApqUApqApqAAAA65UAAAA66gpqAppUgpqAprg66AAAUg65AAAgppgprg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:932.25,y:252.1}).wait(1).to({graphics:mask_2_graphics_1,x:925.425,y:251.625}).wait(1).to({graphics:mask_2_graphics_2,x:918.6,y:251.125}).wait(1).to({graphics:mask_2_graphics_3,x:911.775,y:250.65}).wait(1).to({graphics:mask_2_graphics_4,x:904.95,y:250.15}).wait(1).to({graphics:mask_2_graphics_5,x:898.15,y:249.65}).wait(1).to({graphics:mask_2_graphics_6,x:891.325,y:249.175}).wait(1).to({graphics:mask_2_graphics_7,x:884.5,y:248.7}).wait(1).to({graphics:mask_2_graphics_8,x:877.675,y:248.175}).wait(1).to({graphics:mask_2_graphics_9,x:870.825,y:247.7}).wait(1).to({graphics:mask_2_graphics_10,x:864,y:247.2}).wait(1).to({graphics:mask_2_graphics_11,x:857.175,y:246.725}).wait(1).to({graphics:mask_2_graphics_12,x:850.35,y:246.25}).wait(1).to({graphics:mask_2_graphics_13,x:843.525,y:245.75}).wait(1).to({graphics:mask_2_graphics_14,x:836.725,y:245.25}).wait(1).to({graphics:mask_2_graphics_15,x:829.9,y:244.775}).wait(1).to({graphics:mask_2_graphics_16,x:823.075,y:244.275}).wait(1).to({graphics:mask_2_graphics_17,x:816.25,y:243.8}).wait(1).to({graphics:mask_2_graphics_18,x:809.425,y:243.325}).wait(1).to({graphics:mask_2_graphics_19,x:802.6,y:242.825}).wait(1).to({graphics:mask_2_graphics_20,x:795.75,y:242.35}).wait(1).to({graphics:mask_2_graphics_21,x:788.925,y:241.825}).wait(1).to({graphics:mask_2_graphics_22,x:782.1,y:241.35}).wait(1).to({graphics:mask_2_graphics_23,x:775.325,y:240.875}).wait(1).to({graphics:mask_2_graphics_24,x:768.5,y:240.4}).wait(1).to({graphics:mask_2_graphics_25,x:761.675,y:239.875}).wait(1).to({graphics:mask_2_graphics_26,x:754.825,y:239.4}).wait(1).to({graphics:mask_2_graphics_27,x:748,y:238.9}).wait(1).to({graphics:mask_2_graphics_28,x:741.175,y:238.425}).wait(1).to({graphics:mask_2_graphics_29,x:734.35,y:237.95}).wait(1).to({graphics:mask_2_graphics_30,x:727.525,y:237.45}).wait(1).to({graphics:mask_2_graphics_31,x:720.7,y:236.975}).wait(1).to({graphics:mask_2_graphics_32,x:713.9,y:236.475}).wait(1).to({graphics:mask_2_graphics_33,x:707.075,y:235.975}).wait(1).to({graphics:mask_2_graphics_34,x:700.25,y:235.5}).wait(1).to({graphics:mask_2_graphics_35,x:693.425,y:235.025}).wait(1).to({graphics:mask_2_graphics_36,x:686.6,y:234.525}).wait(1).to({graphics:mask_2_graphics_37,x:679.75,y:234.05}).wait(1).to({graphics:mask_2_graphics_38,x:672.925,y:233.525}).wait(1).to({graphics:mask_2_graphics_39,x:666.1,y:233.05}).wait(1).to({graphics:mask_2_graphics_40,x:659.275,y:232.575}).wait(1).to({graphics:mask_2_graphics_41,x:652.475,y:232.075}).wait(1).to({graphics:mask_2_graphics_42,x:645.65,y:231.575}).wait(1).to({graphics:mask_2_graphics_43,x:638.825,y:231.1}).wait(1).to({graphics:mask_2_graphics_44,x:632,y:230.6}).wait(1).to({graphics:mask_2_graphics_45,x:625.175,y:230.125}).wait(1).to({graphics:mask_2_graphics_46,x:618.35,y:229.65}).wait(1).to({graphics:mask_2_graphics_47,x:611.525,y:229.15}).wait(1).to({graphics:mask_2_graphics_48,x:604.7,y:228.675}).wait(1).to({graphics:mask_2_graphics_49,x:597.875,y:228.175}).wait(1).to({graphics:mask_2_graphics_50,x:591.075,y:227.675}).wait(1).to({graphics:mask_2_graphics_51,x:584.25,y:227.2}).wait(1).to({graphics:mask_2_graphics_52,x:577.425,y:226.725}).wait(1).to({graphics:mask_2_graphics_53,x:570.6,y:226.2}).wait(1).to({graphics:mask_2_graphics_54,x:563.75,y:225.725}).wait(1).to({graphics:mask_2_graphics_55,x:556.925,y:225.225}).wait(1).to({graphics:mask_2_graphics_56,x:550.1,y:224.75}).wait(1).to({graphics:mask_2_graphics_57,x:543.275,y:224.275}).wait(1).to({graphics:mask_2_graphics_58,x:536.45,y:223.775}).wait(1).to({graphics:mask_2_graphics_59,x:529.65,y:223.275}).wait(1).to({graphics:mask_2_graphics_60,x:522.825,y:222.8}).wait(1).to({graphics:mask_2_graphics_61,x:516,y:222.3}).wait(1).to({graphics:mask_2_graphics_62,x:509.175,y:221.825}).wait(1).to({graphics:mask_2_graphics_63,x:502.35,y:221.35}).wait(1).to({graphics:mask_2_graphics_64,x:495.525,y:220.85}).wait(1).to({graphics:mask_2_graphics_65,x:488.675,y:220.375}).wait(1).to({graphics:mask_2_graphics_66,x:481.85,y:219.85}).wait(1).to({graphics:mask_2_graphics_67,x:475.025,y:219.375}).wait(1).to({graphics:mask_2_graphics_68,x:468.25,y:218.9}).wait(1).to({graphics:mask_2_graphics_69,x:461.425,y:218.425}).wait(1).to({graphics:mask_2_graphics_70,x:454.6,y:217.9}).wait(1).to({graphics:mask_2_graphics_71,x:447.75,y:217.425}).wait(1).to({graphics:mask_2_graphics_72,x:440.925,y:216.925}).wait(1).to({graphics:mask_2_graphics_73,x:434.1,y:216.45}).wait(1).to({graphics:mask_2_graphics_74,x:427.275,y:215.975}).wait(1).to({graphics:mask_2_graphics_75,x:420.45,y:215.475}).wait(1).to({graphics:mask_2_graphics_76,x:413.625,y:215}).wait(1).to({graphics:mask_2_graphics_77,x:406.825,y:214.5}).wait(1).to({graphics:mask_2_graphics_78,x:400,y:214}).wait(1).to({graphics:mask_2_graphics_79,x:393.175,y:213.525}).wait(1).to({graphics:mask_2_graphics_80,x:386.35,y:213.05}).wait(1).to({graphics:mask_2_graphics_81,x:379.525,y:212.55}).wait(1).to({graphics:mask_2_graphics_82,x:372.675,y:212.075}).wait(1).to({graphics:mask_2_graphics_83,x:365.85,y:211.55}).wait(1).to({graphics:mask_2_graphics_84,x:359.025,y:211.075}).wait(1).to({graphics:mask_2_graphics_85,x:352.2,y:210.6}).wait(1).to({graphics:mask_2_graphics_86,x:345.4,y:210.1}).wait(1).to({graphics:mask_2_graphics_87,x:338.575,y:209.6}).wait(1).to({graphics:mask_2_graphics_88,x:331.75,y:209.125}).wait(1).to({graphics:mask_2_graphics_89,x:324.925,y:208.625}).wait(1).to({graphics:mask_2_graphics_90,x:318.1,y:208.15}).wait(105));

	// Layer_30
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("Eg6WAKOQpbgpohifQqpjGp4ltQgVgMgDgLQgEgMAKgWIA/iNIACAAQBMAKBDAOIgWAzQgMAZAEANQADAOAZAOQJCFBJ0CtQGDBpGOAzQEGAiElAGQD/AFEugPQLjgmKei7QCfgtDshQQEEhYGIieIFaiMQDDhPCXg4QHdixHDhKQH6hTH4AgQKIAnKCDkQC6BCDtBeQBlApE9CCQFBCDEPBdQE9BtEiBGQFaBUFKAnQAUACAGAHQAHAHAAATQADBYgOAMQgNAMhagMQnhhAoOihQm1iGoVjfQloiVjShOQk+h1kMhCQz+k5zyG1QjkBPlLCGQlyCXi6BJQu/F6udBWQl4AkldAAQjhAAjXgPg");
	this.shape_3.setTransform(55.0374,213.0011);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(195));

	// Layer_22 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_131 = new cjs.Graphics().p("AszM1QlUlVgBngQABnfFUlVQFTlTHgAAQHgAAFUFTQFUFVABHfQgBHglUFVQlUFTngAAQngAAlTlTg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AteNeQllllAAn5QAAn4FlllQFmlmH4AAQH5AAFmFmQFlFlAAH4QAAH5llFlQlmFmn5AAQn4AAlmlmg");
	var mask_3_graphics_133 = new cjs.Graphics().p("AuHOJQl3l3AAoSQAAoRF3l3QF2l3IRAAQISAAF3F3QF2F3AAIRQAAISl2F3Ql3F3oSAAQoRAAl2l3g");
	var mask_3_graphics_134 = new cjs.Graphics().p("AuxOzQmJmJAAoqQAAoqGJmIQGHmIIqAAQIrAAGHGIQGJGIAAIqQAAIqmJGJQmHGIorAAQoqAAmHmIg");
	var mask_3_graphics_135 = new cjs.Graphics().p("AvcPdQmamaABpDQgBpCGamaQGamZJCgBQJDABGaGZQGaGagBJCQABJDmaGaQmaGZpDABQpCgBmamZg");
	var mask_3_graphics_136 = new cjs.Graphics().p("AwGQHQmrmrAApcQAApbGrmrQGsmrJaAAQJbAAGsGrQGrGrAAJbQAAJcmrGrQmsGrpbAAQpaAAmsmrg");
	var mask_3_graphics_137 = new cjs.Graphics().p("AwwQxQm9m8AAp1QAAp0G9m8QG8m8J0AAQJ0AAG9G8QG9G8AAJ0QAAJ1m9G8Qm9G8p0AAQp0AAm8m8g");
	var mask_3_graphics_138 = new cjs.Graphics().p("AxaRbQnOnOAAqNQAAqMHOnOQHOnOKMAAQKNAAHOHOQHOHOAAKMQAAKNnOHOQnOHOqNAAQqMAAnOnOg");
	var mask_3_graphics_139 = new cjs.Graphics().p("AyESFQngnfAAqmQAAqlHgnfQHfngKlAAQKmAAHfHgQHgHfAAKlQAAKmngHfQnfHgqmAAQqlAAnfngg");
	var mask_3_graphics_140 = new cjs.Graphics().p("AyuSvQnxnxAAq+QAAq9HxnxQHxnxK9AAQK/AAHwHxQHxHxAAK9QAAK+nxHxQnwHxq/AAQq+AAnwnxg");
	var mask_3_graphics_141 = new cjs.Graphics().p("AzZTZQoCoCAArXQAArWICoCQIDoDLWAAQLXAAICIDQICICAALWQAALXoCICQoCIDrXAAQrWAAoDoDg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A0DUDQoUoUAArvQAArvIUoUQIVoTLuAAQLvAAIVITQITIUABLvQgBLvoTIUQoVIUrvAAQruAAoVoUg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A0sUtQomolAAsIQAAsHImomQIkolMIAAQMJAAIkIlQImImAAMHQAAMIomIlQokImsJAAQsIAAokomg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A1XVYQo3o3AAshQAAsgI3o3QI3o2MgAAQMhAAI2I2QI4I3gBMgQABMho4I3Qo2I2shAAQsgAAo3o2g");
	var mask_3_graphics_145 = new cjs.Graphics().p("A2BWCQpIpJAAs5QAAs5JIpIQJIpIM5AAQM5AAJJJIQJIJIAAM5QAAM5pIJJQpJJIs5AAQs5AApIpIg");
	var mask_3_graphics_146 = new cjs.Graphics().p("A2rWsQpZpaAAtSQAAtRJZpaQJapZNRAAQNSAAJaJZQJZJaAANRQAANSpZJaQpaJZtSAAQtRAApapZg");
	var mask_3_graphics_147 = new cjs.Graphics().p("A3VXWQprprAAtrQAAtqJrprQJrprNqAAQNrAAJrJrQJrJrAANqQAANrprJrQprJrtrAAQtqAAprprg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A3/YAQp8p9AAuDQAAuDJ8p8QJ8p8ODAAQODAAJ9J8QJ8J8AAODQAAODp8J9Qp9J8uDAAQuDAAp8p8g");
	var mask_3_graphics_149 = new cjs.Graphics().p("A4pYqQqOqOAAucQAAubKOqOQKOqOObAAQOcAAKOKOQKOKOAAObQAAOcqOKOQqOKOucAAQubAAqOqOg");
	var mask_3_graphics_150 = new cjs.Graphics().p("A5TZUQqgqfAAu1QAAu0KgqfQKfqfO0AAQO1AAKfKfQKfKfABO0QgBO1qfKfQqfKfu1AAQu0AAqfqfg");
	var mask_3_graphics_151 = new cjs.Graphics().p("A59Z+QqxqxAAvNQAAvMKxqxQKwqxPNAAQPOAAKwKxQKxKxAAPMQAAPNqxKxQqwKxvOAAQvNAAqwqxg");
	var mask_3_graphics_152 = new cjs.Graphics().p("A6naoQrDrCAAvmQAAvlLDrCQLCrDPlAAQPmAALCLDQLDLCAAPlQAAPmrDLCQrCLCvmABQvlgBrCrCg");
	var mask_3_graphics_153 = new cjs.Graphics().p("A7RbSQrUrTAAv/QAAv+LUrTQLUrUP9AAQP+AALULUQLULTAAP+QAAP/rULTQrULUv+AAQv9AArUrUg");
	var mask_3_graphics_154 = new cjs.Graphics().p("A78b8QrlrlAAwXQAAwWLlrlQLlrmQXAAQQXAALmLmQLlLlgBQWQABQXrlLlQrmLmwXAAQwXAArlrmg");
	var mask_3_graphics_155 = new cjs.Graphics().p("A8lcnQr3r3AAwwQAAwvL3r3QL2r2QvAAQQwAAL2L2QL3L3AAQvQAAQwr3L3Qr2L2wwAAQwvAAr2r2g");
	var mask_3_graphics_156 = new cjs.Graphics().p("A9QdRQsHsIAAxJQAAxIMHsIQMIsIRIAAQRJAAMHMIQMJMIgBRIQABRJsJMIQsHMIxJAAQxIAAsIsIg");
	var mask_3_graphics_157 = new cjs.Graphics().p("A96d7QsZsaAAxhQAAxgMZsaQMZsZRhAAQRiAAMZMZQMZMaAARgQAARhsZMaQsZMZxiAAQxhAAsZsZg");
	var mask_3_graphics_158 = new cjs.Graphics().p("A+kelQsqsrAAx6QAAx5MqsrQMrsrR5AAQR6AAMrMrQMrMrAAR5QAAR6srMrQsrMrx6AAQx5AAsrsrg");
	var mask_3_graphics_159 = new cjs.Graphics().p("A/OfPQs8s8AAyTQAAySM8s8QM9s8SRAAQSSAAM9M8QM8M8AASSQAASTs8M8Qs9M8ySAAQyRAAs9s8g");
	var mask_3_graphics_160 = new cjs.Graphics().p("A/4f5QtOtOAAyrQAAyqNOtOQNOtOSqAAQSrAANONOQNONOAASqQAASrtONOQtONOyrAAQyqAAtOtOg");
	var mask_3_graphics_161 = new cjs.Graphics().p("EggiAgjQtftfAAzEQAAzDNftfQNftfTDAAQTEAANfNfQNfNfAATDQAATEtfNfQtfNfzEAAQzDAAtftfg");
	var mask_3_graphics_162 = new cjs.Graphics().p("EghMAhNQtxtwAAzdQAAzbNxtxQNwtxTcAAQTcAANxNxQNxNxAATbQAATdtxNwQtxNxzcAAQzcAAtwtxg");
	var mask_3_graphics_163 = new cjs.Graphics().p("Egh2Ah3QuDuCAAz1QAAz0ODuCQOCuCT0AAQT1AAOCOCQODOCAAT0QAAT1uDOCQuCOCz1AAQz0AAuCuCg");
	var mask_3_graphics_164 = new cjs.Graphics().p("EgigAihQuUuTAA0OQAA0NOUuTQOTuUUNAAQUOAAOUOUQOTOTAAUNQAAUOuTOTQuUOU0OAAQ0NAAuTuUg");
	var mask_3_graphics_165 = new cjs.Graphics().p("EgjKAjMQululgB0nQAB0lOlulQOkulUmAAQUmAAOlOlQOlOlABUlQgBUnulOlQulOk0mAAQ0mAAukukg");
	var mask_3_graphics_166 = new cjs.Graphics().p("Egj1Aj2Qu2u3AA0/QAA0+O2u3QO3u2U+AAQU/AAO3O2QO2O3AAU+QAAU/u2O3Qu3O20/AAQ0+AAu3u2g");
	var mask_3_graphics_167 = new cjs.Graphics().p("EgkeAkgQvJvJAA1XQAA1XPJvHQPHvJVXAAQVYAAPIPJQPHPHAAVXQAAVXvHPJQvIPH1YAAQ1XAAvHvHg");
	var mask_3_graphics_168 = new cjs.Graphics().p("EglIAlJQvavZAA1wQAA1wPavYQPYvaVwAAQVwAAPZPaQPaPYAAVwQAAVwvaPZQvZPa1wAAQ1wAAvYvag");
	var mask_3_graphics_169 = new cjs.Graphics().p("EglzAl0QvrvrAB2JQgB2IPrvrQPrvrWIABQWJgBPrPrQPrPrgBWIQABWJvrPrQvrPq2JAAQ2IAAvrvqg");
	var mask_3_graphics_170 = new cjs.Graphics().p("EgmdAmeQv8v8AA2iQAA2gP8v9QP9v8WgAAQWhAAP9P8QP8P9AAWgQAAWiv8P8Qv9P82hAAQ2gAAv9v8g");
	var mask_3_graphics_171 = new cjs.Graphics().p("EgnHAnIQwOwOAB26QgB26QOwNQQNwOW6ABQW6gBQOQOQQOQNAAW6QAAW6wOQOQwOQO26AAQ26AAwNwOg");
	var mask_3_graphics_172 = new cjs.Graphics().p("EgnxAnyQwfwfAA3TQAA3SQfwfQQfwfXSAAQXTAAQfQfQQfQfAAXSQAAXTwfQfQwfQf3TAAQ3SAAwfwfg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(131).to({graphics:mask_3_graphics_131,x:386.15,y:76.05}).wait(1).to({graphics:mask_3_graphics_132,x:386.15,y:76.05}).wait(1).to({graphics:mask_3_graphics_133,x:386.15,y:76.05}).wait(1).to({graphics:mask_3_graphics_134,x:386.15,y:76.05}).wait(1).to({graphics:mask_3_graphics_135,x:386.15,y:76.05}).wait(1).to({graphics:mask_3_graphics_136,x:386.15,y:76.05}).wait(1).to({graphics:mask_3_graphics_137,x:386.15,y:76.05}).wait(1).to({graphics:mask_3_graphics_138,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_139,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_140,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_141,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_142,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_143,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_144,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_145,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_146,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_147,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_148,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_149,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_150,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_151,x:386.15,y:76.05}).wait(1).to({graphics:mask_3_graphics_152,x:386.15,y:76.1}).wait(1).to({graphics:mask_3_graphics_153,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_154,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_155,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_156,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_157,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_158,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_159,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_160,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_161,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_162,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_163,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_164,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_165,x:386.15,y:76.075}).wait(1).to({graphics:mask_3_graphics_166,x:386.15,y:76.1}).wait(1).to({graphics:mask_3_graphics_167,x:386.15,y:76.1}).wait(1).to({graphics:mask_3_graphics_168,x:386.15,y:76.1}).wait(1).to({graphics:mask_3_graphics_169,x:386.15,y:76.1}).wait(1).to({graphics:mask_3_graphics_170,x:386.15,y:76.1}).wait(1).to({graphics:mask_3_graphics_171,x:386.15,y:76.1}).wait(1).to({graphics:mask_3_graphics_172,x:386.15,y:76.1}).wait(23));

	// Layer_21
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("AQJLhQgvgVhTgbQhkgggfgMQjPhPi8iQQikh9imi6IjDjlQh2iIhZhUQhohjhqg8Qh3hDiCgWQgjgGgMAJQgNAKABAkQAGB5AFBFQAJBoARBTQA3ESDGCqQBcBOB5A4QCPBCCxBHQB7AyDHBMQBHAaBIAZQi2gUi2AKQjWhliZhWQhlg6hIhLQgUAAgTgEQgsgLg3gMQgMgDgKgKIgUgUQiugNh5hVQg9gsg3gzQB1AoBlAmIAMADQAHABAHgFQgKgYgcgvQgagvgLgaIgFgLQg0iCgfi5QgPhcgBiHQABiXgDhMQgBgYAIgJQAIgKAaAAQF9gKEwEWQBlBbCGCbIDfEAQBjBrBQBJQBkBcBjBAQAIgFAAgGIgDgLQgxiGgPiuQgJhhgBjYQAAgSAJgGQAGgFATAAQElgDDsBCQAYAHAJALQALAMgDAYQgEAfAEAxQAEAwgugVQhRgjhlgSQhLgOhygJQgdgCgJAIQgMAIACAeIAMCPQAHBRALA/QA4FNFHBKQAdAHALANQAMAOgEAcQgEAgAEAgQADAdgRAHQgFACgGAAQgKAAgMgGg");
	this.shape_4.setTransform(569.1071,-64.1731);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(131).to({_off:false},0).wait(64));

	// Layer_23
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("ABuCPIgegjQhyhhhjiBQgJgKgEgGQgGgKACgNQAvALBcASQBNAWAvAyQAbAbAFAkQACAMAAA3QAAAPAFAhQABAbgOAIIgGABQgJAAgOgPg");
	this.shape_5.setTransform(662.2973,-48.6571);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(158).to({_off:false},0).wait(37));

	// Layer_5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AF2GdQgRgKgJgDIh4gzQhJgfgwgQQg6gUgxgkQgsghgqgzQi+jjhrj0QgQglgEgTQgIghAOgNQAOgOAcAQQAQAJAgAVQA+AeAmBLQDDGDFyEEQASANAVARIAKANQgGACgGAAQgLAAgKgFg");
	this.shape_6.setTransform(537.1942,-63.0495);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(145).to({_off:false},0).wait(50));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AhiBjQgpgpAAg6QAAg5ApgpIABgBQApgoA4AAQA6AAApApQApApAAA5QAAA6gpApQgmAmg1ADIgIAAQg5AAgpgpg");
	var mask_4_graphics_1 = new cjs.Graphics().p("AAACdQhAAAguguQguguAAhBQAAhAAuguIABAAQAuguA/AAQBBAAAuAuQAuAuAABAQAABBguAuQgrAqg6AEIgKAAg");
	var mask_4_graphics_2 = new cjs.Graphics().p("AAACtQhHAAgzgyQgygzAAhIQAAhHAygzIACAAQAygyBGAAQBIAAAyAyQAzAzAABHQAABIgzAzQgvAvhBADIgKAAg");
	var mask_4_graphics_3 = new cjs.Graphics().p("AAAC+QhOAAg4g3Qg3g5AAhOQAAhOA3g3IACgBQA3g3BNAAQBPAAA4A4QA3A3AABOQAABOg3A5Qg0AzhIAEIgLAAg");
	var mask_4_graphics_4 = new cjs.Graphics().p("AAADOQhVABg8g9Qg9g9AAhVQAAhVA9g8IABgBQA8g8BUABQBWgBA8A9QA9A8AABVQAABVg9A9Qg4A4hNAEIgNAAg");
	var mask_4_graphics_5 = new cjs.Graphics().p("AAADfQhcAAhBhBQhBhBAAhdQAAhcBBhBIACAAQBAhBBbAAQBcAABCBBQBBBBAABcQAABdhBBBQg9A9hUAEIgNAAg");
	var mask_4_graphics_6 = new cjs.Graphics().p("AAADwQhjAAhGhGQhGhHAAhjQAAhiBGhHIACgBQBFhFBiAAQBkAABGBGQBGBHAABiQAABjhGBHQhCBBhZAFIgPAAg");
	var mask_4_graphics_7 = new cjs.Graphics().p("AAAEBQhpAAhMhLQhLhMAAhqQAAhpBLhLIACgBQBLhLBoAAQBqAABMBMQBLBLAABpQAABqhLBMQhGBFhgAGIgQAAg");
	var mask_4_graphics_8 = new cjs.Graphics().p("AAAERQhwAAhRhPQhPhRAAhxQAAhwBPhQIADgBQBPhPBvAAQBxAABQBQQBQBQAABwQAABxhQBRQhKBKhnAFIgQAAg");
	var mask_4_graphics_9 = new cjs.Graphics().p("AAAEiQh3AAhVhVQhVhUAAh5QAAh3BVhVIACgBQBUhUB2AAQB4AABVBVQBVBVAAB3QAAB5hVBUQhOBPhuAGIgRAAg");
	var mask_4_graphics_10 = new cjs.Graphics().p("AAAEzQh+AAhahaQhahaAAh/QAAh+BahaIACgBQBZhZB9AAQB/AABaBaQBaBaAAB+QAAB/haBaQhTBThzAHIgTAAg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AAAFDQiFAAhfheQhehfAAiGQAAiFBehfIADgBQBdhdCEAAQCGAABeBeQBfBfAACFQAACGhfBfQhXBYh6AGIgTAAg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AAAFUQiMAAhjhkQhkhjAAiNQAAiMBkhkIACAAQBihjCLAAQCNAABjBjQBkBkAACMQAACNhkBjQhcBdh/AHIgVAAg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AAAFkQiTAAhohnQhphpAAiUQAAiSBphpIACgCQBnhmCSgBQCUAABoBpQBpBpAACSQAACUhpBpQhhBhiFAGIgWAAg");
	var mask_4_graphics_14 = new cjs.Graphics().p("AAAF1QiaAAhthsQhthuAAibQAAiZBthuIADgBQBrhsCZgBQCaABBuBtQBtBuAACZQAACbhtBuQhmBkiMAIIgWAAg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AAAGGQigAAhzhyQhyhyAAiiQAAigByhyIADgCQBwhxCgAAQCiAABxBzQBzByAACgQAACihzByQhqBqiSAIIgXAAg");
	var mask_4_graphics_16 = new cjs.Graphics().p("AAAGXQioAAh3h3Qh3h3AAipQAAinB3h3IADgCQB2h2CmAAQCoAAB4B4QB3B3AACnQAACph3B3QhvBuiYAJIgZAAg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AAAGnQivAAh8h7Qh7h8AAiwQAAiuB7h8IAEgCQB6h6CtAAQCvAAB8B8QB8B8AACuQAACwh8B8QhzBzifAIIgZAAg");
	var mask_4_graphics_18 = new cjs.Graphics().p("AAAG4Qi2AAiAiBQiBiAAAi3QAAi1CBiBIADgBQB/iAC0AAQC2AACBCBQCBCBAAC1QAAC3iBCAQh3B4imAJIgaAAg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AgIHAQi5gJiBiJQh/iKAEi6QAAipB4h4QAFgTAPgGQCDh8C4AIQC4AJCACKQCACKgEC5QgDC6iFB+QhwBwiZAIQgMADgMAAQgPAAgOgFg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AgSHJQi7gRiAiTQh+iTAIi+QAAidBuhuQAJgkAdgMQCIh6C6ARQC7ASB/CTQB/CTgIC+QgHC8iGB8QhpBniQAJQgQAFgRAAQgXAAgYgKg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AgbHSQi+gah/icQh9icAMjDQAAiPBlhmQANg0AqgTQCNh2C8AZQC+AaB+CcQB+CdgMDCQgKC/iKB6QhhBfiFAIQgVAIgXAAQgfAAgggPg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AgkHcQjBgjh+ilQh8ilAQjHQAAiDBchcQARhGA3gYQCSh0C/AiQDAAiB9CmQB+ClgRDHQgODDiMB2QhZBXh6AIQgcALgcAAQgnAAgogUg");
	var mask_4_graphics_23 = new cjs.Graphics().p("AguHmQjDgrh8iuQh8ivAUjLQAAh2BThTQAUhXBFgfQCXhxDBArQDDArB8CvQB9CvgUDKQgSDGiPB0QhSBPhvAIQghANgjAAQguAAgxgZg");
	var mask_4_graphics_24 = new cjs.Graphics().p("Ag3HwQjGg0h7i3Qh7i4AXjPQABhqBKhKQAYhnBSglQCchuDEAzQDFA0B7C4QB8C3gYDPQgVDJiSBxQhLBHhkAIQgmAQgoAAQg3AAg5geg");
	var mask_4_graphics_25 = new cjs.Graphics().p("AhBH7QjIg9h6jAQh7jBAcjUQAAhcBBhBQAch5BggrQCghrDHA8QDIA8B6DBQB6DBgbDUQgZDLiVBvQhDA/hZAHQgsASgtAAQg/AAhCgig");
	var mask_4_graphics_26 = new cjs.Graphics().p("AhKIGQjLhGh5jJQh6jKAgjYQAAhQA4g4QAfiKBugxQCkhoDKBFQDKBFB6DKQB5DKgfDYQgdDOiXBsQg8A3hOAHQgxAVgzAAQhHAAhKgng");
	var mask_4_graphics_27 = new cjs.Graphics().p("AhUIRQjNhOh4jTQh5jTAjjcQABhDAvgvQAjibB7g3QCphlDMBNQDNBOB5DTQB4DTgjDcQggDSibBpQg0AvhDAHQg2AXg5AAQhOAAhUgsg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AhdIcQjQhWh3jcQh4jdAnjgQABg3AlglQAnisCJg9QCuhiDPBVQDPBXB4DcQB3DcgnDhQgkDUidBnQgtAng4AHQg7Aag/AAQhWAAhcgyg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AhnInQjShfh2jlQh3jkArjmQABgqAcgcQAri9CWhDQCzhgDRBfQDSBeB3DmQB3DlgsDlQgnDYigBkQglAfguAGQhBAdhEAAQheAAhlg3g");
	var mask_4_graphics_30 = new cjs.Graphics().p("AhwIzQjVhoh1juQh2jtAvjqQAAgdAUgUQAujNCkhKQC3hcDUBnQDVBnB2DvQB2DtgwDqQgqDbijBhQgeAXgjAGQhGAghLAAQhkAAhug8g");
	var mask_4_graphics_31 = new cjs.Graphics().p("Ah5I/QjYhwh0j4Qh1j3AzjuQAAgQALgKQAyjfCxhQQC8hZDXBvQDXBwB1D4QB1D3gzDuQgvDeilBfQgXAOgYAHQhLAihQAAQhtAAh2hBg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AiDJLQjah5hzkBQh0kAA3jyQAAgBAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQA1jvC/hWQDBhXDZB4QDaB5B0EBQB0D/g3DzQgyDhipBcIgcANQhRAkhVAAQh1AAh/hFg");
	var mask_4_graphics_33 = new cjs.Graphics().p("AiIJdQjjh9h4kIQh5kIA5j6QABgEABgBQA4j2DHhZQDIhZDjB7QDjB9B5EIQB4EIg5D6Qg0DoiwBfIgeANQhUAlhZAAQh5AAiEhHg");
	var mask_4_graphics_34 = new cjs.Graphics().p("AiOJvQjsiBh9kQQh9kPA7kCQABgDACgBQA5j/DPhbQDRhcDrCAQDsCAB+EQQB9EPg8ECQg2Dvi2BiIgfANQhYAmhcAAQh/AAiJhJg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AiTKBQj1iEiCkYQiCkYA+kIQAAgEACgBQA8kGDXheQDYheD1CDQD1CDCCEZQCCEXg+EJQg4D2i+BkIggAOQhaAohgAAQiEAAiOhMg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AiYKSQj+iHiGkgQiIkgBAkQQABgEACgBQA+kMDfhhQDghhD9CHQD+CHCHEgQCHEfhAERQg6D8jFBnIghAOQheAphkAAQiIAAiThOg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AieKkQkHiLiLkoQiMknBCkXIADgGQBAkUDnhjQDohjEGCKQEHCLCMEoQCMEnhDEYQg8EDjLBqIgjAOQhhAqhnAAQiNAAiZhQg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AijK2QkQiPiQkwQiRkuBFkfQABgFACgBQBCkbDvhmQDwhmEPCOQEQCPCREvQCQEvhFEfQg+ELjSBtIgkAOQhlArhqAAQiSAAiehSg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AipLIQkYiTiVk3QiWk3BHkmQABgFACgBQBFkiD2hpQD4hpEYCSQEZCSCWE4QCUE2hGEnQhBERjZBwIglAPQhoAthuAAQiXAAijhVg");
	var mask_4_graphics_40 = new cjs.Graphics().p("AiuLaQkiiXiZk/Qiak+BJkuQAAgEACgCQBHkqD+hrQEAhrEiCVQEiCWCaFAQCaE+hKEuQhCEYjgBzIgmAPQhsAuhxAAQicAAiohXg");
	var mask_4_graphics_41 = new cjs.Graphics().p("AizLsQkriaiflHQiflHBMk1QAAgEADgBQBJkyEGhtQEIhvEqCZQErCaCfFHQCeFGhLE2QhFEfjnB1IgnAQQhuAvh1AAQihAAithZg");
	var mask_4_graphics_42 = new cjs.Graphics().p("Ai5L+QkzieiklPQijlOBNk8QABgFACgBQBMk5ENhwQEQhxE0CdQEzCdCkFPQCjFOhNE9QhHEmjuB4IgoAQQhyAwh5AAQilAAizhbg");
	var mask_4_graphics_43 = new cjs.Graphics().p("Ai+MQQk9iiiolWQiplXBQlEQABgEACgCQBOlAEWhyQEXh0E9CgQE9ChCoFXQCoFWhQFEQhJEtj0B7IgqARQh1Axh8AAQirAAi3hdg");
	var mask_4_graphics_44 = new cjs.Graphics().p("AjEMiQlFimitleQitleBSlLQABgFACgCQBQlHEdh1QEgh2FFCkQFGCkCuFfQCsFehSFLQhLE0j7B+IgrARQh5AyiAAAQivAAi9hfg");
	var mask_4_graphics_45 = new cjs.Graphics().p("AjJM0QlOipiylmQiylnBUlSQABgFADgBQBSlPElh4QEoh5FOCoQFPCoCyFnQCxFlhUFTQhNE7kCCAIgsASQh9AziDAAQi0AAjChhg");
	var mask_4_graphics_46 = new cjs.Graphics().p("AjONGQlYiti2luQi3luBWlaQABgFADgBQBUlWEth7QEwh7FXCrQFYCsC3FvQC2FthXFaQhPFCkJCDIgtASQiAA0iGAAQi5AAjHhjg");
	var mask_4_graphics_47 = new cjs.Graphics().p("AjUNXQlgiwi7l2Qi8l2BZlhQABgFACgCQBXldE1h9QE3h+FhCvQFhCvC7F3QC7F1hZFiQhRFIkQCGIgvASQiDA2iKAAQi9AAjNhmg");
	var mask_4_graphics_48 = new cjs.Graphics().p("AjZNpQlqi0jAl9QjAl+BblpQABgFADgBQBYllE9iAQFAiBFpCzQFqCzDAF/QDAF8hbFqQhTFPkYCJIgvATQiGA2iOAAQjCAAjShog");
	var mask_4_graphics_49 = new cjs.Graphics().p("AjfN7Qlzi4jEmFQjFmFBdlwQABgGADgBQBalsFFiDQFIiDFyC2QFzC3DFGGQDFGFheFxQhVFWkeCMIgxATQiJA3iRAAQjHAAjYhqg");
	var mask_4_graphics_50 = new cjs.Graphics().p("AjkONQl8i8jJmNQjKmNBgl4QABgFACgCQBdlzFNiFQFPiGF8C6QF7C7DLGOQDJGMhgF4QhXFdklCPIgyATQiNA5iVAAQjMAAjchsg");
	var mask_4_graphics_51 = new cjs.Graphics().p("AjpOfQmFi/jOmVQjPmWBil+QABgGADgCQBfl6FViIQFXiIGEC9QGFC+DPGWQDOGVhiF/QhZFkktCRIgzAUQiQA6iYAAQjRAAjhhug");
	var mask_4_graphics_52 = new cjs.Graphics().p("AjvOxQmOjDjSmdQjUmdBkmGQABgGADgBQBhmCFdiKQFfiMGODCQGNDBDUGeQDTGchlGHQhbFrkzCUIg0AUQiUA7ibAAQjWAAjnhwg");
	var mask_4_graphics_53 = new cjs.Graphics().p("Aj0PDQmXjHjXmkQjZmlBnmOQABgGADgBQBjmJFliNQFniOGWDFQGXDFDYGmQDYGkhnGOQhdFyk6CXIg2AUQiWA8igAAQjaAAjshyg");
	var mask_4_graphics_54 = new cjs.Graphics().p("Aj/PsQmojPjgm3Qjim3BrmeQABgGADgCQBomaFziTQF3iUGoDOQGoDODhG3QDhG2hrGgQhhGBlICdIg4AWQidA+ilAAQjlAAj2h3g");
	var mask_4_graphics_55 = new cjs.Graphics().p("AkJQVQm5jXjqnJQjrnJBvmvQABgHADgCQBsmqGDiZQGGiaG5DVQG5DXDrHJQDqHIhvGxQhlGRlVCkIg6AWQikBBitAAQjtAAkAh8g");
	var mask_4_graphics_56 = new cjs.Graphics().p("AkUQ+QnKjgjznaQj1nbB0nBQABgHAEgBQBwm8GSifQGVigHLDeQHKDfD1HcQDzHah0HBQhpGhljCqIg8AYQiqBDi0AAQj3AAkKiBg");
	var mask_4_graphics_57 = new cjs.Graphics().p("AkeRnQncjoj8ntQj+ntB4nRQABgHAEgCQB0nMGiilQGkimHcDmQHcDoD+HtQD8Hsh4HTQhuGwlvCxIg/AYQiwBGi6AAQkBAAkUiGg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AkpSQQntjxkGn+QkGn/B8niQABgIAEgCQB5ncGwisQG0isHuDvQHtDwEHH/QEFH+h8HkQhyHAl9C4IhBAZQi2BIjBAAQkKAAkfiLg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AkzS5Qn/j5kPoQQkQoRCBn0QACgHADgCQB9nuHAixQHDiyH/D3QH/D4EQISQEPIQiBH0Qh2HRmKC9IhDAaQi+BLjIAAQkTAAkoiQg");
	var mask_4_graphics_60 = new cjs.Graphics().p("Ak+TjQoQkCkYojQkZojCFoEQACgIAEgCQCBn+HPi4QHSi4IREAQIQEAEZIkQEYIiiFIGQh6HgmYDEIhFAaQjEBOjPAAQkdAAkyiUg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AlIUMQoikLkho0Qkio1CJoVQACgJAEgCQCFoPHfi9QHhi/IiEJQIiEJEiI1QEhI0iJIXQh+HwmlDKIhIAcQjKBQjWAAQkmAAk8iZg");
	var mask_4_graphics_62 = new cjs.Graphics().p("AlTU1QoykTkrpGQkrpHCNonQACgIAEgCQCKogHtjDQHxjFI0ERQIyEREsJIQEqJGiNInQiCIAmzDRIhKAcQjQBTjdAAQkvAAlHieg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AldVeQpEkbk0pYQk1paCSo3QACgJAEgCQCOoxH9jJQIAjLJFEaQJEEZE1JaQE0JYiSI5QiGIPnADXIhMAeQjXBVjjAAQk5AAlRijg");
	var mask_4_graphics_64 = new cjs.Graphics().p("AloWHQpVkkk9pqQk+prCXpIQABgJAEgCQCTpCIMjPQIQjRJWEhQJVEjE+JrQE9JqiXJKQiJIfnODeIhOAeQjeBYjqAAQlCAAlbiog");
	var mask_4_graphics_65 = new cjs.Graphics().p("AlyWwQpnkslGp8QlHp9CbpaQABgJAFgCQCWpTIcjVQIfjXJnEqQJnErFHJ+QFGJ8ibJaQiNIvnbDlIhRAfQjkBajxAAQlLAAllitg");
	var mask_4_graphics_66 = new cjs.Graphics().p("Al8XZQp5k0lPqOQlRqQCgpqQABgJAFgDQCbpjIqjbQIvjdJ4EyQJ5EzFQKQQFQKOigJsQiRI+npDrIhTAgQjqBdj3AAQlVAAlviyg");
	var mask_4_graphics_67 = new cjs.Graphics().p("AmHYDQqKk+lYqgQlaqhCkp7QABgKAFgCQCfp1I6jhQI+jjKKE7QKKE8FaKhQFYKgikJ9QiVJPn2DxIhWAhQjxBfj+AAQleAAl5i2g");
	var mask_4_graphics_68 = new cjs.Graphics().p("AmRYsQqblGliqyQljq0CoqMQACgKAFgCQCjqFJJjnQJNjpKbFDQKbFEFkK0QFhKxioKOQiZJfoED3IhXAiQj4BikFAAQloAAmCi7g");
	var mask_4_graphics_69 = new cjs.Graphics().p("AmcZVQqslPlrrDQltrGCtqdQACgKAFgDQCnqVJYjuQJdjvKtFMQKsFMFtLGQFrLEitKfQidJuoRD+IhaAiQj+BlkMAAQlxAAmNjAg");
	var mask_4_graphics_70 = new cjs.Graphics().p("AmmZ+Qq+lXl0rWQl2rXCxquQACgLAFgCQCsqnJnjzQJsj1K+FUQK+FVF2LXQF0LWixKwQihJ+ofEEIhcAkQkEBnkTAAQl6AAmXjFg");
	var mask_4_graphics_71 = new cjs.Graphics().p("AmxanQrPlfl9roQl/rqC1q/QACgLAFgCQCwq3J3j6QJ7j7LQFdQLPFdF/LqQF9Lni1LBQimKOorELIhfAkQkLBqkZAAQmEAAmhjKg");
	var mask_4_graphics_72 = new cjs.Graphics().p("Am7bQQrhlomGr5QmIr8C5rQQACgLAGgDQC0rIKGj/QKKkCLhFlQLhFmGIL8QGGL6i5LSQiqKdo5ESIhgAlQkSBskgAAQmNAAmrjPg");
	var mask_4_graphics_73 = new cjs.Graphics().p("AnGb5QrylwmPsMQmSsNC+rhQACgMAGgCQC4rZKVkGQKakHLzFtQLyFuGRMOQGQMMi+LjQiuKtpGEYIhjAmQkYBvknAAQmXAAm1jUg");
	var mask_4_graphics_74 = new cjs.Graphics().p("AnQciQsDl4mZseQmbsgDCryQACgLAGgDQC9rqKkkLQKpkOMEF2QMDF3GbMgQGZMdjCL0QiyK9pUEfIhlAnQkeBxkuAAQmgAAm/jZg");
	var mask_4_graphics_75 = new cjs.Graphics().p("AnbdLQsUmBmisvQmksyDGsDQADgMAFgDQDBr6K0kSQK4kTMWF+QMUF/GkMyQGiMwjGMFQi2LMphElIhoAoQkkB0k1AAQmpAAnKjeg");
	var mask_4_graphics_76 = new cjs.Graphics().p("Anld1QsmmKmrtCQmutDDLsUQADgMAFgDQDGsMLDkXQLHkaMnGHQMmGHGtNEQGsNCjLMWQi6LdpvErIhpApQkrB2k8AAQmzAAnTjig");
	var mask_4_graphics_77 = new cjs.Graphics().p("AnweeQs3mSm1tUQm2tWDPslQACgMAGgDQDKscLSkdQLXkgM4GPQM4GQG2NWQG1NTjQMnQi9Ltp8EyIhtApQkxB5lCAAQm8AAnejng");
	var mask_4_graphics_78 = new cjs.Graphics().p("An6fHQtJmbm+tlQm/toDUs2QACgNAGgDQDOssLhkkQLnkmNJGYQNJGYHANoQG9NmjUM4QjBL8qJE4IhvAqQk4B8lJAAQnGAAnnjsg");
	var mask_4_graphics_79 = new cjs.Graphics().p("AoFfwQtamjnHt4QnJt5DZtHQACgNAGgDQDSs+LxkpQL2ksNbGfQNaGhHJN6QHHN4jZNJQjFMMqXE/IhxArQk+B+lQAAQnPAAnyjxg");
	var mask_4_graphics_80 = new cjs.Graphics().p("EgIPAgZQtsmsnQuJQnSuMDdtYQACgNAHgDQDWtOL/kwQMGkyNsGoQNsGqHSOLQHQOKjdNaQjJMcqkFFIh0AsQlECBlXAAQnZAAn7j2g");
	var mask_4_graphics_81 = new cjs.Graphics().p("EgIaAhCQt8m0naubQnbueDhtpQACgNAHgEQDatfMPk1QMVk4N+GwQN8GyHcOeQHZObjhNsQjNMrqyFMIh1AtQlLCDleAAQniAAoGj7g");
	var mask_4_graphics_82 = new cjs.Graphics().p("EgIkAhrQuOm8njuuQnluwDmt5QACgOAHgDQDftwMek8QMkk+OPG5QOOG6HlOwQHjOujmN8QjRM7q/FSIh4AuQlSCGlkAAQnrAAoQkAg");
	var mask_4_graphics_83 = new cjs.Graphics().p("EgIvAiVQufnGnsu/QnuvCDquLQADgOAGgDQDjuBMulBQMzlFOhHCQOfHDHuPBQHsPAjqONQjVNMrNFYIh6AvQlYCIlrAAQn1AAoakEg");
	var mask_4_graphics_84 = new cjs.Graphics().p("EgI5Ai+QuxnOn1vRQn3vUDuucQADgOAHgEQDnuRM8lIQNDlKOyHKQOxHLH3PUQH1PRjuOfQjaNbrZFfQhCAYg7AXQleCLlyAAQn+AAokkJg");
	var mask_4_graphics_85 = new cjs.Graphics().p("EgJEAjnQvCnWn+vkQoAvmDyusQADgPAHgDQDrujNMlNQNSlRPEHTQPCHTIAPmQH+PkjyOvQjeNrrnFlQhCAZg8AYQllCNl5AAQoHAAovkOg");
	var mask_4_graphics_86 = new cjs.Graphics().p("EgJOAkQQvUnfoHv1QoKv4D3u+QADgOAHgEQDwuzNblUQNhlWPVHbQPUHcIJP3QIIP2j3PAQjiN7r0FsQhEAZg9AYQlsCQl/AAQoRAAo4kTg");
	var mask_4_graphics_87 = new cjs.Graphics().p("EgJZAk5QvknnoRwHQoTwKD7vPQADgPAHgEQD0vDNrlaQNwldPnHkQPkHkITQKQIRQHj7PSQjmOKsCFyQhFAag+AYQlyCTmGAAQobAApCkYg");
	var mask_4_graphics_88 = new cjs.Graphics().p("EgJjAliQv2nwoawZQocwcD/vfQADgQAHgDQD5vVN5lgQOAliP4HrQP2HtIdQcQIZQaj/PiQjqOasPF5IiGAzQl4CVmOAAQojAApMkdg");
	var mask_4_graphics_89 = new cjs.Graphics().p("EgJtAmLQwIn4ojwrQomwuEEvxQADgPAIgEQD8vlOJlmQOPlpQKH0QQHH2ImQtQIjQskEPzQjuOqsdF/IiHA0Ql/CYmUAAQotAApWkig");
	var mask_4_graphics_90 = new cjs.Graphics().p("EgJ4Am0QwZoAosw9QovxAEIwCQADgQAIgEQEBv2OYlsQOeluQbH8QQZH+IvRAQIsQ9kIQFQjyO5sqGGIiKA1QmFCambAAQo2AAphkng");
	var mask_4_graphics_91 = new cjs.Graphics().p("EgKCAneQwroKo1xPQo4xSENwSQACgQAIgEQEFwHOnlyQOvl1QrIFQQrIGI4RSQI1RQkNQVQj1PKs4GMIiMA1QmMCdmiAAQo/AApqkrg");
	var mask_4_graphics_92 = new cjs.Graphics().p("EgKNAoHQw8oSo+xhQpCxkESwkQADgQAIgEQEJwYO2l4QO+l6Q9INQQ8IOJBRkQI/RikSQmQj5PatFGSIiPA3QmSCfmoAAQpJAAp1kwg");
	var mask_4_graphics_93 = new cjs.Graphics().p("EgKXAowQxNoapIxzQpLx2EWw1QADgQAIgEQENwpPGl+QPNmBROIWQRNIXJLR2QJIRzkWQ4Qj9PptTGZIiRA3QmYCimvAAQpTAAp+k1g");
	var mask_4_graphics_94 = new cjs.Graphics().p("EgKiApZQxeojpRyEQpUyJEaxFQADgRAIgEQESw6PVmDQPcmHRgIeQReIfJUSIQJRSGkaRIQkBP5tgGfIiTA5QmfCkm2AAQpcAAqJk6g");
	var mask_4_graphics_95 = new cjs.Graphics().p("EgKsAqCQxworpayXQpdyaEexXQADgRAIgEQEWxKPkmKQPsmNRxInQRwInJdSaQJaSYkeRZQkFQJtuGlIiVA6QmmCnm8AAQpmAAqSk/g");
	var mask_4_graphics_96 = new cjs.Graphics().p("EgK3AqrQyBozpjypQpnysEjxoQADgRAJgEQEaxcPzmPQP7mUSDIvQSBIxJmSsQJkSpkjRrQkJQYt7GsIiYA6QmsCqnEAAQpuAAqdlEg");
	var mask_4_graphics_97 = new cjs.Graphics().p("EgLBArUQyTo8pty6Qpvy/Enx4QADgSAJgEQEexsQDmWQQKmZSUI3QSTI5JvS+QJtS8knR7QkNQouJGzIiaA7QmyCsnLAAQp4AAqmlJg");
	var mask_4_graphics_98 = new cjs.Graphics().p("EgLMAr9QykpEp2zNQp4zQEryKQADgRAJgFQEjx8QSmcQQZmgSmJAQSkJBJ4TQQJ2TOkrSMQkSQ4uVG6IicA7Qm5CvnRAAQqCAAqxlOg");
	var mask_4_graphics_99 = new cjs.Graphics().p("EgLWAsmQy2pNp/zeQqCzjEwyaQAEgSAIgEQEnyOQhmiQQpmlS3JIQS2JKKCTiQJ/TfkwSeQkWRHujHAIieA9QnACxnXAAQqLAAq7lTg");
	var mask_4_graphics_100 = new cjs.Graphics().p("EgLhAtQQzGpWqJzwQqLz1E0yrQAEgTAIgEQEsyeQwmoQQ4msTJJRQTGJSKMT0QKITxk0SvQkaRYuwHGQhVAfhMAeQnGC0nfAAQqUAArFlXg");
	var mask_4_graphics_101 = new cjs.Graphics().p("EgLrAt5QzYpeqS0DQqU0GE4y9QAEgSAJgFQEvyvRAmuQRHmxTaJZQTYJaKVUGQKRUEk4S/QkeRou+HMIijA/QnMC2nlAAQqeAArPlcg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:-482.1,y:-266.05}).wait(1).to({graphics:mask_4_graphics_1,x:-481.475,y:-264.775}).wait(1).to({graphics:mask_4_graphics_2,x:-480.825,y:-263.525}).wait(1).to({graphics:mask_4_graphics_3,x:-480.2,y:-262.25}).wait(1).to({graphics:mask_4_graphics_4,x:-479.575,y:-261}).wait(1).to({graphics:mask_4_graphics_5,x:-478.925,y:-259.75}).wait(1).to({graphics:mask_4_graphics_6,x:-478.3,y:-258.5}).wait(1).to({graphics:mask_4_graphics_7,x:-477.675,y:-257.225}).wait(1).to({graphics:mask_4_graphics_8,x:-477.025,y:-255.975}).wait(1).to({graphics:mask_4_graphics_9,x:-476.4,y:-254.7}).wait(1).to({graphics:mask_4_graphics_10,x:-475.775,y:-253.425}).wait(1).to({graphics:mask_4_graphics_11,x:-475.125,y:-252.175}).wait(1).to({graphics:mask_4_graphics_12,x:-474.5,y:-250.9}).wait(1).to({graphics:mask_4_graphics_13,x:-473.875,y:-249.65}).wait(1).to({graphics:mask_4_graphics_14,x:-473.225,y:-248.4}).wait(1).to({graphics:mask_4_graphics_15,x:-472.6,y:-247.15}).wait(1).to({graphics:mask_4_graphics_16,x:-471.975,y:-245.875}).wait(1).to({graphics:mask_4_graphics_17,x:-471.325,y:-244.625}).wait(1).to({graphics:mask_4_graphics_18,x:-470.7,y:-243.35}).wait(1).to({graphics:mask_4_graphics_19,x:-469.95,y:-241.8863}).wait(1).to({graphics:mask_4_graphics_20,x:-469.2001,y:-240.5061}).wait(1).to({graphics:mask_4_graphics_21,x:-468.4502,y:-239.1369}).wait(1).to({graphics:mask_4_graphics_22,x:-467.7003,y:-237.8202}).wait(1).to({graphics:mask_4_graphics_23,x:-466.9505,y:-236.5517}).wait(1).to({graphics:mask_4_graphics_24,x:-466.2006,y:-235.2977}).wait(1).to({graphics:mask_4_graphics_25,x:-465.4492,y:-234.0637}).wait(1).to({graphics:mask_4_graphics_26,x:-464.6989,y:-232.8802}).wait(1).to({graphics:mask_4_graphics_27,x:-463.9487,y:-231.7031}).wait(1).to({graphics:mask_4_graphics_28,x:-463.1985,y:-230.5638}).wait(1).to({graphics:mask_4_graphics_29,x:-462.4482,y:-229.4357}).wait(1).to({graphics:mask_4_graphics_30,x:-461.6979,y:-228.3082}).wait(1).to({graphics:mask_4_graphics_31,x:-460.9477,y:-227.23}).wait(1).to({graphics:mask_4_graphics_32,x:-460.1974,y:-226.1334}).wait(1).to({graphics:mask_4_graphics_33,x:-458.7724,y:-227.4834}).wait(1).to({graphics:mask_4_graphics_34,x:-457.3474,y:-228.8084}).wait(1).to({graphics:mask_4_graphics_35,x:-455.9365,y:-230.1584}).wait(1).to({graphics:mask_4_graphics_36,x:-454.5198,y:-231.4712}).wait(1).to({graphics:mask_4_graphics_37,x:-453.0839,y:-232.8212}).wait(1).to({graphics:mask_4_graphics_38,x:-451.6583,y:-234.15}).wait(1).to({graphics:mask_4_graphics_39,x:-450.2333,y:-235.4878}).wait(1).to({graphics:mask_4_graphics_40,x:-448.8115,y:-236.8334}).wait(1).to({graphics:mask_4_graphics_41,x:-447.3974,y:-238.175}).wait(1).to({graphics:mask_4_graphics_42,x:-445.9724,y:-239.5084}).wait(1).to({graphics:mask_4_graphics_43,x:-444.5448,y:-240.8334}).wait(1).to({graphics:mask_4_graphics_44,x:-443.1198,y:-242.1669}).wait(1).to({graphics:mask_4_graphics_45,x:-441.7057,y:-243.5084}).wait(1).to({graphics:mask_4_graphics_46,x:-440.2839,y:-244.854}).wait(1).to({graphics:mask_4_graphics_47,x:-438.8589,y:-246.1918}).wait(1).to({graphics:mask_4_graphics_48,x:-437.4333,y:-247.5206}).wait(1).to({graphics:mask_4_graphics_49,x:-435.9974,y:-248.8706}).wait(1).to({graphics:mask_4_graphics_50,x:-434.5807,y:-250.1834}).wait(1).to({graphics:mask_4_graphics_51,x:-433.1698,y:-251.5334}).wait(1).to({graphics:mask_4_graphics_52,x:-431.7448,y:-252.8584}).wait(1).to({graphics:mask_4_graphics_53,x:-430.3198,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_54,x:-430.3198,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_55,x:-430.3198,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_56,x:-430.3172,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_57,x:-430.3172,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_58,x:-430.3198,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_59,x:-430.3198,y:-254.2003}).wait(1).to({graphics:mask_4_graphics_60,x:-430.3198,y:-254.2168}).wait(1).to({graphics:mask_4_graphics_61,x:-430.3172,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_62,x:-430.3173,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_63,x:-430.3173,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_64,x:-430.3172,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_65,x:-430.3172,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_66,x:-430.3172,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_67,x:-430.3147,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_68,x:-430.3172,y:-254.2168}).wait(1).to({graphics:mask_4_graphics_69,x:-430.3172,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_70,x:-430.3173,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_71,x:-430.3172,y:-254.2003}).wait(1).to({graphics:mask_4_graphics_72,x:-430.3146,y:-254.2168}).wait(1).to({graphics:mask_4_graphics_73,x:-430.3146,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_74,x:-430.3146,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_75,x:-430.3147,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_76,x:-430.3147,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_77,x:-430.2897,y:-254.2084}).wait(1).to({graphics:mask_4_graphics_78,x:-430.3146,y:-254.2168}).wait(1).to({graphics:mask_4_graphics_79,x:-430.3146,y:-254.2168}).wait(1).to({graphics:mask_4_graphics_80,x:-430.3147,y:-254.2168}).wait(1).to({graphics:mask_4_graphics_81,x:-430.3147,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_82,x:-430.3147,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_83,x:-430.3121,y:-254.2003}).wait(1).to({graphics:mask_4_graphics_84,x:-430.312,y:-254.2168}).wait(1).to({graphics:mask_4_graphics_85,x:-430.3121,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_86,x:-430.3121,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_87,x:-430.3146,y:-254.2253}).wait(1).to({graphics:mask_4_graphics_88,x:-430.3121,y:-254.2253}).wait(1).to({graphics:mask_4_graphics_89,x:-430.3121,y:-254.2253}).wait(1).to({graphics:mask_4_graphics_90,x:-430.3121,y:-254.2253}).wait(1).to({graphics:mask_4_graphics_91,x:-430.3121,y:-254.2253}).wait(1).to({graphics:mask_4_graphics_92,x:-430.3121,y:-254.2253}).wait(1).to({graphics:mask_4_graphics_93,x:-430.3121,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_94,x:-430.3095,y:-254.2169}).wait(1).to({graphics:mask_4_graphics_95,x:-430.3095,y:-254.2003}).wait(1).to({graphics:mask_4_graphics_96,x:-430.3095,y:-254.2253}).wait(1).to({graphics:mask_4_graphics_97,x:-430.3121,y:-254.2253}).wait(1).to({graphics:mask_4_graphics_98,x:-430.3121,y:-254.2253}).wait(1).to({graphics:mask_4_graphics_99,x:-430.3095,y:-254.2253}).wait(1).to({graphics:mask_4_graphics_100,x:-430.3095,y:-254.2253}).wait(1).to({graphics:mask_4_graphics_101,x:-430.3095,y:-254.2253}).wait(1).to({graphics:null,x:0,y:0}).wait(93));

	// Layer_8
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AiUYMQtdj4opr2Qg4hNgdgsQgthDgeg7QhpjRhAi3QhKjVgbjLQgWilgChfQgFiQAch1QBEkZDrisQDritEgATQEeASDSDNQDTDMAeEfQAhE7jwCVQhoBBhvACQhtABhsg8QjYh6gHkEQgBg3AJgKQAJgJA4AAQAzAAAIAJQAJAIABAzQACCBBXBWQBVBXB7gDQB6gDBShXQBRhYgCiAQgDjriZi1QiFiejDg1QjEg1i/BGQjEBIh2CsQh4CsACDVQADJ9FgIdQErHLGZEXQGjEeIQBeQHYBTGZiBQGaiBFXlSQAPgPAWgKQANgFAcgIQBegaBLgGQh/CvijCEQo1HHqhAAQk0AAlKhgg");
	this.shape_7.setTransform(-355.65,-152.5386);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(195));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("AhYBZQgkglAAg0QAAgzAkglQAlgkAzAAQA0AAAlAkQAkAlAAAzQAAA0gkAlQglAkg0AAQgzAAglgkg");
	var mask_5_graphics_1 = new cjs.Graphics().p("AhtBvQguguAAhBQAAhAAuguQAtgtBAAAQBBAAAtAtQAuAuAABAQAABBguAuQgtAthBAAQhAAAgtgtg");
	var mask_5_graphics_2 = new cjs.Graphics().p("AiECEQg2g2AAhOQAAhNA2g3QA3g2BNAAQBOAAA2A2QA3A3AABNQAABOg3A2Qg2A3hOAAQhNAAg3g3g");
	var mask_5_graphics_3 = new cjs.Graphics().p("AiaCaQg/g/AAhbQAAhaA/hAQBAg/BaAAQBbAAA/A/QBABAAABaQAABbhAA/Qg/BAhbAAQhaAAhAhAg");
	var mask_5_graphics_4 = new cjs.Graphics().p("AiwCxQhJhJAAhoQAAhnBJhJQBJhIBnAAQBnAABKBIQBIBJABBnQgBBohIBJQhKBIhnAAQhnAAhJhIg");
	var mask_5_graphics_5 = new cjs.Graphics().p("AjFDHQhShSAAh1QAAh0BShRQBRhSB0AAQB1AABSBSQBRBRAAB0QAAB1hRBSQhSBSh1AAQh0AAhRhSg");
	var mask_5_graphics_6 = new cjs.Graphics().p("AjbDdQhbhcAAiBQAAiBBbhaQBbhbCAAAQCBAABcBbQBbBaAACBQAACBhbBcQhcBaiBABQiAgBhbhag");
	var mask_5_graphics_7 = new cjs.Graphics().p("AjyDzQhjhkgBiPQABiNBjhkQBlhlCNABQCOgBBkBlQBlBkgBCNQABCPhlBkQhkBkiOAAQiNAAhlhkg");
	var mask_5_graphics_8 = new cjs.Graphics().p("AkHEIQhuhtAAibQAAibBuhtQBthtCaAAQCbAABuBtQBtBtAACbQAACbhtBtQhuBuibAAQiaAAhthug");
	var mask_5_graphics_9 = new cjs.Graphics().p("AkdEfQh3h3AAioQAAinB3h3QB2h2CnAAQCoAAB3B2QB2B3AACnQAACoh2B3Qh3B2ioAAQinAAh2h2g");
	var mask_5_graphics_10 = new cjs.Graphics().p("Ak0E1Qh/iAAAi1QAAi0B/h/QB/iAC1AAQC1AAB/CAQCAB/AAC0QAAC1iACAQh/B/i1AAQi1AAh/h/g");
	var mask_5_graphics_11 = new cjs.Graphics().p("AlKFLQiIiJAAjCQAAjBCIiJQCJiIDBAAQDCAACJCIQCICJAADBQAADCiICJQiJCIjCAAQjBAAiJiIg");
	var mask_5_graphics_12 = new cjs.Graphics().p("AlfFhQiSiSAAjPQAAjOCSiSQCQiRDPAAQDPAACRCRQCSCSAADOQAADPiSCSQiRCRjPAAQjPAAiQiRg");
	var mask_5_graphics_13 = new cjs.Graphics().p("Al2F3QiaibAAjcQAAjbCaibQCbiaDbAAQDcAACaCaQCbCbAADbQAADcibCbQiaCajcAAQjbAAibiag");
	var mask_5_graphics_14 = new cjs.Graphics().p("AmMGMQijijAAjpQAAjoCjikQCkikDoAAQDpAACjCkQCkCkAADoQAADpikCjQijCkjpABQjogBikikg");
	var mask_5_graphics_15 = new cjs.Graphics().p("AmhGjQititAAj2QAAj1CtitQCsitD1AAQD2AACtCtQCsCtAAD1QAAD2isCtQitCtj2gBQj1ABisitg");
	var mask_5_graphics_16 = new cjs.Graphics().p("Am3G5Qi2i2AAkDQAAkCC2i2QC1i1ECgBQEDABC2C1QC1C2AAECQAAEDi1C2Qi2C1kDAAQkCAAi1i1g");
	var mask_5_graphics_17 = new cjs.Graphics().p("AnOHPQi+i/AAkQQAAkPC+i/QC/i/EPAAQEQAAC/C/QC+C/AAEPQAAEQi+C/Qi/C/kQAAQkPAAi/i/g");
	var mask_5_graphics_18 = new cjs.Graphics().p("AnkHlQjHjIgBkdQABkcDHjIQDIjIEcAAQEcAADIDIQDIDIAAEcQAAEdjIDIQjIDIkcAAQkcAAjIjIg");
	var mask_5_graphics_19 = new cjs.Graphics().p("An2H4QjPjQgBkoQABknDPjQQDPjQEnAAQEnAADQDQQDPDQAAEnQAAEojPDQQjQDQknAAQknAAjPjQg");
	var mask_5_graphics_20 = new cjs.Graphics().p("AoJIMQjXjYAAk0QAAkzDXjYQDXjYEyAAQEyAADXDYQDYDYgBEzQABE0jYDYQjXDYkyAAQkyAAjXjYg");
	var mask_5_graphics_21 = new cjs.Graphics().p("AobIfQjfjgABk/QgBk+DfjgQDejhE9AAQE9AADeDhQDgDggBE+QABE/jgDgQjeDhk9AAQk9AAjejhg");
	var mask_5_graphics_22 = new cjs.Graphics().p("AotIzQjmjoAAlLQAAlKDmjoQDmjoFHAAQFIAADmDoQDmDoAAFKQAAFLjmDoQjmDolIAAQlHAAjmjog");
	var mask_5_graphics_23 = new cjs.Graphics().p("Ao/JGQjujwAAlWQAAlVDujxQDtjwFSAAQFSAADuDwQDuDxAAFVQAAFWjuDwQjuDxlSAAQlSAAjtjxg");
	var mask_5_graphics_24 = new cjs.Graphics().p("ApSJaQj1j4AAliQAAlhD1j4QD1j4FdAAQFdAAD2D4QD1D4AAFhQAAFij1D4Qj2D4ldAAQldAAj1j4g");
	var mask_5_graphics_25 = new cjs.Graphics().p("ApkJtQj9j/AAluQAAlsD9kBQD8kAFoAAQFoAAD9EAQD9EBAAFsQAAFuj9D/Qj9EBloAAQloAAj8kBg");
	var mask_5_graphics_26 = new cjs.Graphics().p("Ap3KBQkEkJAAl4QAAl3EEkJQEEkIFzgBQFzABEEEIQEFEJAAF3QAAF4kFEJQkEEIlzABQlzgBkEkIg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AqJKUQkMkQAAmEQAAmDEMkRQELkQF+AAQF9AAENEQQEMERAAGDQAAGEkMEQQkNERl9AAQl+AAkLkRg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AqcKoQkTkZAAmPQAAmPETkYQEUkZGIAAQGIAAEUEZQEUEYAAGPQAAGPkUEZQkUEZmIAAQmIAAkUkZg");
	var mask_5_graphics_29 = new cjs.Graphics().p("AquK8QkbkhAAmbQAAmaEbkhQEbkgGTAAQGTAAEbEgQEcEhAAGaQAAGbkcEhQkbEgmTAAQmTAAkbkgg");
	var mask_5_graphics_30 = new cjs.Graphics().p("ArALPQkjkpAAmmQAAmlEjkpQEikpGeAAQGeAAEjEpQEjEpAAGlQAAGmkjEpQkjEpmeAAQmeAAkikpg");
	var mask_5_graphics_31 = new cjs.Graphics().p("ArTLjQkqkxAAmyQAAmxEqkxQErkxGoAAQGpAAEqExQErExAAGxQAAGykrExQkqEwmpAAQmoAAkrkwg");
	var mask_5_graphics_32 = new cjs.Graphics().p("ArlL2Qkyk5AAm9QAAm9Eyk4QExk5G0AAQGzAAEyE5QEzE4AAG9QAAG9kzE5QkyE5mzAAQm0AAkxk5g");
	var mask_5_graphics_33 = new cjs.Graphics().p("Ar4MKQk5lBAAnJQAAnIE5lBQE5lBG/AAQG+AAE6FBQE6FBAAHIQAAHJk6FBQk6FBm+AAQm/AAk5lBg");
	var mask_5_graphics_34 = new cjs.Graphics().p("AsKMeQlBlKAAnUQAAnUFBlJQFBlIHJAAQHJAAFCFIQFBFJAAHUQAAHUlBFKQlCFInJAAQnJAAlBlIg");
	var mask_5_graphics_35 = new cjs.Graphics().p("AscMxQlJlRAAngQAAnfFJlRQFIlRHUAAQHUAAFJFRQFJFRAAHfQAAHglJFRQlJFRnUAAQnUAAlIlRg");
	var mask_5_graphics_36 = new cjs.Graphics().p("AsuNEQlRlZAAnrQAAnqFRlaQFPlYHfAAQHfAAFRFYQFQFaAAHqQAAHrlQFZQlRFanfgBQnfABlPlag");
	var mask_5_graphics_37 = new cjs.Graphics().p("AtANYQlZlhAAn3QAAn2FZlhQFWlhHqAAQHqAAFYFhQFYFhAAH2QAAH3lYFhQlYFhnqAAQnqAAlWlhg");
	var mask_5_graphics_38 = new cjs.Graphics().p("AtTNrQlgloAAoDQAAoBFglpQFflqH0AAQH1AAFgFqQFfFpAAIBQAAIDlfFoQlgFqn1AAQn0AAlflqg");
	var mask_5_graphics_39 = new cjs.Graphics().p("AtmN/QlnlxAAoOQAAoNFnlxQFnlxH/AAQH/AAFoFxQFnFxAAINQAAIOlnFxQloFxn/ABQn/gBlnlxg");
	var mask_5_graphics_40 = new cjs.Graphics().p("At4OTQlvl5AAoaQAAoZFvl5QFul5IKAAQIKAAFvF5QFvF5AAIZQAAIalvF5QlvF5oKAAQoKAAlul5g");
	var mask_5_graphics_41 = new cjs.Graphics().p("AuLOmQl2mBAAolQAAokF2mCQF2mAIVgBQIVABF2GAQF3GCAAIkQAAIll3GBQl2GCoVAAQoVAAl2mCg");
	var mask_5_graphics_42 = new cjs.Graphics().p("AudO5Ql+mJAAowQAAovF+mKQF9mJIgAAQIgAAF9GJQF/GKAAIvQAAIwl/GJQl9GKogAAQogAAl9mKg");
	var mask_5_graphics_43 = new cjs.Graphics().p("AuvPNQmGmRAAo8QAAo7GGmRQGFmSIqAAQIrAAGFGSQGGGRAAI7QAAI8mGGRQmFGSorAAQoqAAmFmSg");
	var mask_5_graphics_44 = new cjs.Graphics().p("AvBPgQmOmZAApHQAApGGOmaQGMmZI1gBQI1ABGOGZQGNGaAAJGQAAJHmNGZQmOGbo1AAQo1AAmMmbg");
	var mask_5_graphics_45 = new cjs.Graphics().p("AvUP0QmVmiAApSQAApSGVmhQGUmiJAAAQJAAAGVGiQGVGhAAJSQAAJSmVGiQmVGipAAAQpAAAmUmig");
	var mask_5_graphics_46 = new cjs.Graphics().p("AvmQIQmdmqAApeQAApeGdmpQGbmqJLAAQJLAAGcGqQGdGpAAJeQAAJemdGqQmcGppLAAQpLAAmbmpg");
	var mask_5_graphics_47 = new cjs.Graphics().p("Av5QbQmkmxAApqQAAppGkmxQGjmyJWAAQJWAAGkGyQGkGxAAJpQAAJqmkGxQmkGypWAAQpWAAmjmyg");
	var mask_5_graphics_48 = new cjs.Graphics().p("AwLQvQmsm6AAp1QAAp0Gsm6QGqm6JhAAQJgAAGsG6QGsG6AAJ0QAAJ1msG6QmsG6pgAAQphAAmqm6g");
	var mask_5_graphics_49 = new cjs.Graphics().p("AwdRCQm0nCAAqAQAAp/G0nCQGynCJrAAQJrAAGzHCQG0HCAAJ/QAAKAm0HCQmzHDprgBQprABmynDg");
	var mask_5_graphics_50 = new cjs.Graphics().p("AwwRWQm6nKgBqMQABqLG6nKQG6nKJ2AAQJ2AAG7HKQG6HKAAKLQAAKMm6HKQm7HKp2AAQp2AAm6nKg");
	var mask_5_graphics_51 = new cjs.Graphics().p("AxCRqQnCnSgBqYQABqWHCnTQHBnRKBAAQKBAAHCHRQHDHTAAKWQAAKYnDHSQnCHRqBAAQqBAAnBnRg");
	var mask_5_graphics_52 = new cjs.Graphics().p("AxVR9QnKnaAAqjQAAqiHKnaQHJnaKMAAQKLAAHLHaQHKHaAAKiQAAKjnKHaQnLHaqLAAQqMAAnJnag");
	var mask_5_graphics_53 = new cjs.Graphics().p("AxnSRQnSniABqvQgBqtHSnjQHQniKXAAQKWAAHSHiQHSHjAAKtQAAKvnSHiQnSHiqWAAQqXAAnQnig");
	var mask_5_graphics_54 = new cjs.Graphics().p("Ax6SkQnYnqAAq6QAAq5HYnqQHYnqKiAAQKhAAHZHqQHaHqAAK5QAAK6naHqQnZHqqhAAQqiAAnYnqg");
	var mask_5_graphics_55 = new cjs.Graphics().p("AyMS3QnhnyABrFQgBrFHhnyQHfnyKtAAQKrAAHhHyQHiHygBLFQABLFniHyQnhHzqrAAQqtAAnfnzg");
	var mask_5_graphics_56 = new cjs.Graphics().p("AyeTLQnon6AArRQAArQHon6QHnn7K3AAQK3AAHoH7QHoH6AALQQAALRnoH6QnoH7q3AAQq3AAnnn7g");
	var mask_5_graphics_57 = new cjs.Graphics().p("AywTfQnwoDAArcQAArbHwoDQHuoCLCAAQLBAAHwICQHwIDAALbQAALcnwIDQnwICrBAAQrCAAnuoCg");
	var mask_5_graphics_58 = new cjs.Graphics().p("AzDTyQn3oKAAroQAArnH3oLQH2oKLNAAQLMAAH4IKQH3ILAALnQAALon3IKQn4ILrMAAQrNAAn2oLg");
	var mask_5_graphics_59 = new cjs.Graphics().p("AzVUGQn/oTAArzQAAryH/oTQH9oSLYAAQLXAAH/ISQH/ITAALyQAALzn/ITQn/ISrXAAQrYAAn9oSg");
	var mask_5_graphics_60 = new cjs.Graphics().p("AzoUZQoGoaAAr/QAAr+IGobQIGoaLiAAQLiAAIGIaQIHIbAAL+QAAL/oHIaQoGIbriAAQriAAoGobg");
	var mask_5_graphics_61 = new cjs.Graphics().p("Az6UtQoOojAAsKQAAsJIOojQINojLtAAQLsAAIPIjQIOIjAAMJQAAMKoOIjQoPIjrsAAQrtAAoNojg");
	var mask_5_graphics_62 = new cjs.Graphics().p("A0NVAQoVoqAAsWQAAsVIVorQIVoqL4AAQL3AAIWIqQIWIrAAMVQAAMWoWIqQoWIrr3AAQr4AAoVorg");
	var mask_5_graphics_63 = new cjs.Graphics().p("A0fVUQodozAAshQAAsgIdozQIcozMDAAQMCAAIeIzQIdIzAAMgQAAMhodIzQoeIzsCAAQsDAAocozg");
	var mask_5_graphics_64 = new cjs.Graphics().p("A0xVnQolo6AAstQAAssIlo7QIjo6MOAAQMNAAIlI6QIlI7AAMsQAAMtolI6QolI7sNAAQsOAAojo7g");
	var mask_5_graphics_65 = new cjs.Graphics().p("A1DV7QotpCAAs5QAAs3ItpDQIrpDMYAAQMYAAItJDQIsJDAAM3QAAM5osJCQotJDsYAAQsYAAorpDg");
	var mask_5_graphics_66 = new cjs.Graphics().p("A1WWOQo0pKAAtEQAAtDI0pLQIzpLMjAAQMjAAI0JLQI0JLAANDQAANEo0JKQo0JMsjAAQsjAAozpMg");
	var mask_5_graphics_67 = new cjs.Graphics().p("A1oWiQo8pTAAtPQAAtOI8pUQI6pSMuAAQMuAAI7JSQI8JUAANOQAANPo8JTQo7JTsuAAQsuAAo6pTg");
	var mask_5_graphics_68 = new cjs.Graphics().p("A17W1QpDpaAAtbQAAtaJDpbQJCpbM5AAQM4AAJEJbQJDJbAANaQAANbpDJaQpEJcs4AAQs5AApCpcg");
	var mask_5_graphics_69 = new cjs.Graphics().p("A2NXJQpLpjAAtmQAAtlJLpjQJJpjNEgBQNDABJLJjQJLJjAANlQAANmpLJjQpLJjtDAAQtEAApJpjg");
	var mask_5_graphics_70 = new cjs.Graphics().p("A2fXdQpTprAAtyQAAtwJTpsQJQprNPAAQNOAAJTJrQJSJsAANwQAANypSJrQpTJrtOAAQtPAApQprg");
	var mask_5_graphics_71 = new cjs.Graphics().p("A2yXwQpapzAAt9QAAt8JapzQJZp0NZABQNZgBJaJ0QJaJzAAN8QAAN9paJzQpaJ0tZgBQtZABpZp0g");
	var mask_5_graphics_72 = new cjs.Graphics().p("A3EYEQpip7AAuJQAAuIJip7QJgp7NkAAQNkAAJiJ7QJhJ7AAOIQAAOJphJ7QpiJ7tkAAQtkAApgp7g");
	var mask_5_graphics_73 = new cjs.Graphics().p("A3XYXQppqDAAuUQAAuTJpqEQJoqDNvAAQNuAAJqKDQJpKEAAOTQAAOUppKDQpqKEtuAAQtvAApoqEg");
	var mask_5_graphics_74 = new cjs.Graphics().p("A3pYrQpxqLAAugQAAufJxqLQJvqMN6ABQN5gBJxKMQJxKLAAOfQAAOgpxKLQpxKMt5gBQt6ABpvqMg");
	var mask_5_graphics_75 = new cjs.Graphics().p("A38Y+Qp4qTAAurQAAuqJ4qTQJ4qUOEAAQOEAAJ5KUQJ4KTAAOqQAAOrp4KTQp5KUuEAAQuEAAp4qUg");
	var mask_5_graphics_76 = new cjs.Graphics().p("A4OZSQqAqcAAu2QAAu1KAqcQJ/qcOPABQOOgBKBKcQKAKcAAO1QAAO2qAKcQqBKbuOAAQuPAAp/qbg");
	var mask_5_graphics_77 = new cjs.Graphics().p("A4gZlQqIqjAAvCQAAvBKIqkQKGqjOaAAQOaAAKHKjQKIKkAAPBQAAPCqIKjQqHKkuaAAQuaAAqGqkg");
	var mask_5_graphics_78 = new cjs.Graphics().p("A4yZ5QqQqsAAvNQAAvMKQqtQKNqrOlAAQOkAAKQKrQKPKtAAPMQAAPNqPKsQqQKsukAAQulAAqNqsg");
	var mask_5_graphics_79 = new cjs.Graphics().p("A5FaNQqXq0AAvZQAAvYKXq0QKVq0OwAAQOvAAKXK0QKXK0AAPYQAAPZqXK0QqXK0uvAAQuwAAqVq0g");
	var mask_5_graphics_80 = new cjs.Graphics().p("A5XagQqfq7AAvlQAAvkKfq8QKcq7O7AAQO6AAKeK7QKfK8AAPkQAAPlqfK7QqeK8u6AAQu7AAqcq8g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:-439.6,y:-211.55}).wait(1).to({graphics:mask_5_graphics_1,x:-440.15,y:-213.85}).wait(1).to({graphics:mask_5_graphics_2,x:-440.725,y:-216.125}).wait(1).to({graphics:mask_5_graphics_3,x:-441.275,y:-218.425}).wait(1).to({graphics:mask_5_graphics_4,x:-441.85,y:-220.725}).wait(1).to({graphics:mask_5_graphics_5,x:-442.425,y:-223}).wait(1).to({graphics:mask_5_graphics_6,x:-443,y:-225.3}).wait(1).to({graphics:mask_5_graphics_7,x:-443.55,y:-227.6}).wait(1).to({graphics:mask_5_graphics_8,x:-444.125,y:-229.875}).wait(1).to({graphics:mask_5_graphics_9,x:-444.675,y:-232.175}).wait(1).to({graphics:mask_5_graphics_10,x:-445.225,y:-234.5}).wait(1).to({graphics:mask_5_graphics_11,x:-445.8,y:-236.775}).wait(1).to({graphics:mask_5_graphics_12,x:-446.35,y:-239.075}).wait(1).to({graphics:mask_5_graphics_13,x:-446.925,y:-241.375}).wait(1).to({graphics:mask_5_graphics_14,x:-447.5,y:-243.65}).wait(1).to({graphics:mask_5_graphics_15,x:-448.075,y:-245.95}).wait(1).to({graphics:mask_5_graphics_16,x:-448.625,y:-248.25}).wait(1).to({graphics:mask_5_graphics_17,x:-449.2,y:-250.525}).wait(1).to({graphics:mask_5_graphics_18,x:-449.75,y:-252.825}).wait(1).to({graphics:mask_5_graphics_19,x:-449.75,y:-252.825}).wait(1).to({graphics:mask_5_graphics_20,x:-449.75,y:-252.825}).wait(1).to({graphics:mask_5_graphics_21,x:-449.75,y:-252.825}).wait(1).to({graphics:mask_5_graphics_22,x:-449.775,y:-252.825}).wait(1).to({graphics:mask_5_graphics_23,x:-449.775,y:-252.825}).wait(1).to({graphics:mask_5_graphics_24,x:-449.775,y:-252.825}).wait(1).to({graphics:mask_5_graphics_25,x:-449.775,y:-252.85}).wait(1).to({graphics:mask_5_graphics_26,x:-449.775,y:-252.85}).wait(1).to({graphics:mask_5_graphics_27,x:-449.775,y:-252.825}).wait(1).to({graphics:mask_5_graphics_28,x:-449.775,y:-252.825}).wait(1).to({graphics:mask_5_graphics_29,x:-449.8,y:-252.825}).wait(1).to({graphics:mask_5_graphics_30,x:-449.8,y:-252.85}).wait(1).to({graphics:mask_5_graphics_31,x:-449.8,y:-252.85}).wait(1).to({graphics:mask_5_graphics_32,x:-449.8,y:-252.85}).wait(1).to({graphics:mask_5_graphics_33,x:-449.8,y:-252.825}).wait(1).to({graphics:mask_5_graphics_34,x:-449.825,y:-252.85}).wait(1).to({graphics:mask_5_graphics_35,x:-449.825,y:-252.85}).wait(1).to({graphics:mask_5_graphics_36,x:-449.85,y:-252.85}).wait(1).to({graphics:mask_5_graphics_37,x:-449.85,y:-252.85}).wait(1).to({graphics:mask_5_graphics_38,x:-449.85,y:-252.85}).wait(1).to({graphics:mask_5_graphics_39,x:-449.85,y:-252.85}).wait(1).to({graphics:mask_5_graphics_40,x:-449.85,y:-252.85}).wait(1).to({graphics:mask_5_graphics_41,x:-449.85,y:-252.85}).wait(1).to({graphics:mask_5_graphics_42,x:-449.85,y:-252.85}).wait(1).to({graphics:mask_5_graphics_43,x:-449.875,y:-252.875}).wait(1).to({graphics:mask_5_graphics_44,x:-449.875,y:-252.85}).wait(1).to({graphics:mask_5_graphics_45,x:-449.875,y:-252.85}).wait(1).to({graphics:mask_5_graphics_46,x:-449.875,y:-252.85}).wait(1).to({graphics:mask_5_graphics_47,x:-449.875,y:-252.875}).wait(1).to({graphics:mask_5_graphics_48,x:-449.875,y:-252.875}).wait(1).to({graphics:mask_5_graphics_49,x:-449.875,y:-252.85}).wait(1).to({graphics:mask_5_graphics_50,x:-449.9,y:-252.85}).wait(1).to({graphics:mask_5_graphics_51,x:-449.9,y:-252.85}).wait(1).to({graphics:mask_5_graphics_52,x:-449.9,y:-252.875}).wait(1).to({graphics:mask_5_graphics_53,x:-449.9,y:-252.875}).wait(1).to({graphics:mask_5_graphics_54,x:-449.9,y:-252.875}).wait(1).to({graphics:mask_5_graphics_55,x:-449.9,y:-252.85}).wait(1).to({graphics:mask_5_graphics_56,x:-449.925,y:-252.875}).wait(1).to({graphics:mask_5_graphics_57,x:-449.925,y:-252.875}).wait(1).to({graphics:mask_5_graphics_58,x:-449.925,y:-252.875}).wait(1).to({graphics:mask_5_graphics_59,x:-449.925,y:-252.875}).wait(1).to({graphics:mask_5_graphics_60,x:-449.925,y:-252.875}).wait(1).to({graphics:mask_5_graphics_61,x:-449.925,y:-252.875}).wait(1).to({graphics:mask_5_graphics_62,x:-449.925,y:-252.875}).wait(1).to({graphics:mask_5_graphics_63,x:-449.95,y:-252.875}).wait(1).to({graphics:mask_5_graphics_64,x:-449.95,y:-252.875}).wait(1).to({graphics:mask_5_graphics_65,x:-449.975,y:-252.9}).wait(1).to({graphics:mask_5_graphics_66,x:-449.975,y:-252.875}).wait(1).to({graphics:mask_5_graphics_67,x:-449.975,y:-252.875}).wait(1).to({graphics:mask_5_graphics_68,x:-449.975,y:-252.875}).wait(1).to({graphics:mask_5_graphics_69,x:-449.975,y:-252.9}).wait(1).to({graphics:mask_5_graphics_70,x:-450,y:-252.9}).wait(1).to({graphics:mask_5_graphics_71,x:-450,y:-252.9}).wait(1).to({graphics:mask_5_graphics_72,x:-450,y:-252.875}).wait(1).to({graphics:mask_5_graphics_73,x:-450,y:-252.875}).wait(1).to({graphics:mask_5_graphics_74,x:-450,y:-252.9}).wait(1).to({graphics:mask_5_graphics_75,x:-450,y:-252.9}).wait(1).to({graphics:mask_5_graphics_76,x:-450,y:-252.9}).wait(1).to({graphics:mask_5_graphics_77,x:-450.025,y:-252.9}).wait(1).to({graphics:mask_5_graphics_78,x:-450.025,y:-252.9}).wait(1).to({graphics:mask_5_graphics_79,x:-450.025,y:-252.9}).wait(1).to({graphics:mask_5_graphics_80,x:-450.025,y:-252.9}).wait(115));

	// Layer_9
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("AmQNlQkzjLjPl6QjkmfACoHQABi3CAh/QB/h/CzACQC1ABB8B/QB8CAABC4IAAAoQACARgIAHQgGAGgTABQhPAEgNgMQgOgMgGhNQgHhvhThOQhShPhvgBQh2gChXBNQhYBOgBBzQgCGgCEFCQCQFgExD4QHtGRKzjDQCUgqCRhTIAfgQQAegLANAKQAIAGgDALIgGATQgFBDghArQghAqhCAbQikBCidAfQixAkjQAAQl+gJk1jMg");
	this.shape_8.setTransform(-407.0354,-172.0259);

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(195));

	// Layer_12 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("ApZKRQj4kQAAmBQAAmAD4kQQD6kRFfAAQFhAAD4ERQD6EQAAGAQAAGBj6EQQj4ERlhAAQlfAAj6kRg");
	var mask_6_graphics_1 = new cjs.Graphics().p("AsFNOQlBlfAAnvQAAnvFBleQFAlfHFAAQHGAAFAFfQFBFeAAHvQAAHvlBFfQlAFfnGAAQnFAAlAlfg");
	var mask_6_graphics_2 = new cjs.Graphics().p("AuyQLQmImtAApeQAApdGImtQGImtIqAAQIrAAGIGtQGIGtAAJdQAAJemIGtQmIGtorAAQoqAAmImtg");
	var mask_6_graphics_3 = new cjs.Graphics().p("AxfTIQnPn7AArNQAArMHPn7QHQn7KPAAQKQAAHQH7QHPH7AALMQAALNnPH7QnQH7qQAAQqPAAnQn7g");
	var mask_6_graphics_4 = new cjs.Graphics().p("A0MWFQoWpJgBs8QABs7IWpJQIXpJL1gBQL1ABIYJJQIWJJAAM7QAAM8oWJJQoYJJr1ABQr1gBoXpJg");
	var mask_6_graphics_5 = new cjs.Graphics().p("A24ZCQpfqYAAuqQAAupJfqYQJeqYNaAAQNaAAJfKYQJfKYAAOpQAAOqpfKYQpfKYtaAAQtaAApeqYg");
	var mask_6_graphics_6 = new cjs.Graphics().p("A5lb/QqmrmAAwZQAAwXKmrnQKmrmO/AAQPAAAKmLmQKmLnAAQXQAAQZqmLmQqmLmvAAAQu/AAqmrmg");
	var mask_6_graphics_7 = new cjs.Graphics().p("A8Se7Qrts0gByHQAByGLts1QLus0QkAAQQmAALtM0QLuM1gBSGQABSHruM0QrtM1wmAAQwkAArus1g");
	var mask_6_graphics_8 = new cjs.Graphics().p("Ege/Ah5Qs1uEAAz1QAAz1M1uCQM1uDSKAAQSKAAM1ODQM2OCAAT1QAAT1s2OEQs1OCyKAAQyKAAs1uCg");
	var mask_6_graphics_9 = new cjs.Graphics().p("EghrAk1Qt9vQAA1lQAA1kN9vRQN8vQTvAAQTvAAN+PQQN8PRAAVkQAAVlt8PQQt+PRzvAAQzvAAt8vRg");
	var mask_6_graphics_10 = new cjs.Graphics().p("EgkYAnyQvEwfAA3TQAA3SPEwfQPEwfVUAAQVVAAPEQfQPEQfAAXSQAAXTvEQfQvEQf1VAAQ1UAAvEwfg");
	var mask_6_graphics_11 = new cjs.Graphics().p("EgnFAqvQwMxuAA5BQAA5AQMxuQQMxtW5AAQW6AAQMRtQQMRuAAZAQAAZBwMRuQwMRt26AAQ25AAwMxtg");
	var mask_6_graphics_12 = new cjs.Graphics().p("EgpyAtsQxTy8AA6wQAA6vRTy7QRTy8YfAAQYfAARUS8QRTS7AAavQAAawxTS8QxUS84fAAQ4fAAxTy8g");
	var mask_6_graphics_13 = new cjs.Graphics().p("EgsfAwoQya0JAA8fQAA8eSa0JQSb0LaEAAQaFAASaULQSbUJAAceQAAcfybUJQyaUL6FAAQ6EAAyb0Lg");
	var mask_6_graphics_14 = new cjs.Graphics().p("EgvLAzmQzj1ZAB+NQgB+MTj1YQTi1ZbpAAQbqAATiVZQTjVYAAeMQAAeNzjVZQziVY7qAAQ7pAAzi1Yg");
	var mask_6_graphics_15 = new cjs.Graphics().p("Egx4A2iQ0q2mAA/8QAA/7Uq2mQUq2ndOAAQdPAAUqWnQUqWmAAf7QAAf80qWmQ0qWn9PAAQ9OAA0q2ng");
	var mask_6_graphics_16 = new cjs.Graphics().p("Eg0lA5gUgVxgX1AAAghrUAAAghpAVxgX1QVx31e0AAQe0AAVyX1UAVxAX1AAAAhpUAAAAhrgVxAX1Q1yX0+0AAQ+0AA1x30g");
	var mask_6_graphics_17 = new cjs.Graphics().p("Eg3RA8cUgW6gZDAABgjZUgABgjYAW6gZDUAW5gZDAgYAAAUAgaAAAAW5AZDUAW4AZDAABAjYUgABAjZgW4AZDUgW5AZDggaAAAUggYAAAgW5gZDg");
	var mask_6_graphics_18 = new cjs.Graphics().p("Eg5+A/ZUgYBgaRAAAglIUAAAglHAYBgaRUAYAgaSAh+AAAUAh/AAAAYBAaSUAYAAaRAAAAlHUAAAAlIgYAAaRUgYBAaSgh/gABUgh+AABgYAgaSg");
	var mask_6_graphics_19 = new cjs.Graphics().p("Eg8rBCWUgZIgbgAAAgm2UAAAgm1AZIgbgUAZHgbfAjkAAAUAjkAAAAZIAbfUAZIAbgAAAAm1UAAAAm2gZIAbgUgZIAbfgjkAAAUgjkAAAgZHgbfg");
	var mask_6_graphics_20 = new cjs.Graphics().p("Eg/YBFTUgaPgcuAAAgolUAAAgokAaPgctUAaPgcvAlJAAAUAlJAAAAaQAcvUAaPActAAAAokUAAAAolgaPAcuUgaQAcuglJgABUglJAABgaPgcug");
	var mask_6_graphics_21 = new cjs.Graphics().p("EhCEBIQUgbYgd9AAAgqTUAAAgqSAbYgd8UAbWgd8AmuAAAUAmvAAAAbWAd8UAbXAd8AAAAqSUAAAAqTgbXAd9UgbWAd8gmvAAAUgmuAAAgbWgd8g");
	var mask_6_graphics_22 = new cjs.Graphics().p("EhExBLNUgcfgfLAAAgsCUAAAgsBAcfgfKUAcegfLAoTAAAUAoUAAAAceAfLUAcfAfKAAAAsBUAAAAsCgcfAfLUgceAfKgoUAAAUgoTAAAgcegfKg");
	var mask_6_graphics_23 = new cjs.Graphics().p("EhHeBOJUgdmggYAAAgtxUAAAgtvAdmggZUAdmggZAp4AAAUAp5AAAAdmAgZUAdmAgZAAAAtvUAAAAtxgdmAgYUgdmAgZgp5AAAUgp4AAAgdmggZg");
	var mask_6_graphics_24 = new cjs.Graphics().p("EhKLBRGUgetghnAAAgvfUAAAgveAetghnUAeughnArdAAAUAreAAAAeuAhnUAetAhnAAAAveUAAAAvfgetAhnUgeuAhngreAAAUgrdAAAgeughng");
	var mask_6_graphics_25 = new cjs.Graphics().p("EhM4BUDUgf1gi1AAAgxOUAAAgxNAf1gi1UAf1gi1AtDAAAUAtEAAAAf1Ai1UAf1Ai1AAAAxNUAAAAxOgf1Ai1Ugf1Ai1gtEAAAUgtDAAAgf1gi1g");
	var mask_6_graphics_26 = new cjs.Graphics().p("EhPkBXAUgg9gkEAAAgy8UAAAgy7Ag9gkEUAg8gkDAuoAAAUAupAAAAg8AkDUAg9AkEAAAAy7UAAAAy8gg9AkEUgg8AkDgupAAAUguoAAAgg8gkDg");
	var mask_6_graphics_27 = new cjs.Graphics().p("EhSRBZ9UgiEglSAAAg0rUAAAg0qAiEglRUAiEglSAwNAAAUAwOAAAAiEAlSUAiEAlRAAAA0qUAAAA0rgiEAlSUgiEAlRgwOAAAUgwNAAAgiEglRg");
	var mask_6_graphics_28 = new cjs.Graphics().p("EhU+Bc6UgjMgmhAAAg2ZUAAAg2YAjMgmhUAjLgmgAxzAAAUAx0AAAAjLAmgUAjMAmhAAAA2YUAAAA2ZgjMAmhUgjLAmggx0AAAUgxzAAAgjLgmgg");
	var mask_6_graphics_29 = new cjs.Graphics().p("EhXrBf2UgkTgnuAAAg4IUAAAg4HAkTgnuUAkTgnvAzYAAAUAzZAAAAkTAnvUAkTAnuAAAA4HUAAAA4IgkTAnuUgkTAnvgzZAAAUgzYAAAgkTgnvg");
	var mask_6_graphics_30 = new cjs.Graphics().p("EhaXBizUglbgo9AAAg52UAAAg52Albgo8UAlago9A09AAAUA0+AAAAlaAo9UAlbAo8AAAA52UAAAA52glbAo9UglaAo8g0+AABUg09gABglago8g");
	var mask_6_graphics_31 = new cjs.Graphics().p("EhdEBlwUgmjgqLAABg7lUgABg7lAmjgqKUAmhgqLA2jAAAUA2jAAAAmjAqLUAmhAqKAABA7lUgABA7lgmhAqLUgmjAqLg2jAAAUg2jAAAgmhgqLg");
	var mask_6_graphics_32 = new cjs.Graphics().p("EhfxBotUgnqgraAAAg9TUAAAg9TAnqgrZUAnqgrZA4HAAAUA4JAAAAnpArZUAnqArZAAAA9TUAAAA9TgnqAraUgnpArZg4JAAAUg4HAAAgnqgrZg");
	var mask_6_graphics_33 = new cjs.Graphics().p("EhidBrqUgoygsoAAAg/CUAAAg/BAoygsoUAoxgsnA5sAAAUA5uAAAAoxAsnUAoxAsoAAAA/BUAAAA/CgoxAsoUgoxAsng5uAAAUg5sAAAgoxgsng");
	var mask_6_graphics_34 = new cjs.Graphics().p("EhlLBumUgp4gt1AAAhAxUAAAhAwAp4gt2UAp5gt1A7SAAAUA7TAAAAp4At1UAp5At2AAABAwUAAABAxgp5At1Ugp4At2g7TAAAUg7SAAAgp5gt2g");
	var mask_6_graphics_35 = new cjs.Graphics().p("Ehn3BxjUgrBgvEAAAhCfUAAAhCfArBgvEUAq/gvEA84AAAUA84AAAArAAvEUArBAvEAAABCfUAAABCfgrBAvEUgrAAvEg84AABUg84gABgq/gvEg");
	var mask_6_graphics_36 = new cjs.Graphics().p("EhqkB0gUgsIgwSAAAhEOUAAAhENAsIgwTUAsIgwSA+cAABUA+egABAsHAwSUAsIAwTAAABENUAAABEOgsIAwSUgsHAwSg+eAAAUg+cAAAgsIgwSg");
	var mask_6_graphics_37 = new cjs.Graphics().p("EhtRB3dUgtPgxgAAAhF9UAAAhF8AtPgxgUAtPgxhBACAAAUBADAAAAtPAxhUAtPAxgAAABF8UAAABF9gtPAxgUgtPAxhhADAAAUhACAAAgtPgxhg");
	var mask_6_graphics_38 = new cjs.Graphics().p("Ehv9B6aUguYgyvAAAhHrUAAAhHqAuYgyvUAuWgyvBBnAAAUBBoAAAAuXAyvUAuWAyvAABBHqUgABBHrguWAyvUguXAyvhBoAAAUhBnAAAguWgyvg");
	var mask_6_graphics_39 = new cjs.Graphics().p("EhyrB9XUgvegz9AAAhJaUAAAhJZAvegz9UAvfgz9BDMAAAUBDNAAAAveAz9UAvfAz9AAABJZUAAABJagvfAz9UgveAz9hDNAAAUhDMAAAgvfgz9g");
	var mask_6_graphics_40 = new cjs.Graphics().p("Eh1XCATUgwmg1LAAAhLIUAAAhLIAwmg1LUAwlg1LBEyAAAUBEyAAAAwmA1LUAwmA1LAAABLIUAAABLIgwmA1LUgwmA1MhEyAAAUhEyAAAgwlg1Mg");
	var mask_6_graphics_41 = new cjs.Graphics().p("Eh4ECDRUgxtg2aAAAhM3UAAAhM2Axtg2aUAxtg2ZBGXAAAUBGYAAAAxtA2ZUAxtA2aAAABM2UAAABM3gxtA2aUgxtA2ZhGYAAAUhGXAAAgxtg2Zg");
	var mask_6_graphics_42 = new cjs.Graphics().p("Eh6xCGNUgy1g3nAAAhOmUAAAhOlAy1g3oUAy1g3nBH8AAAUBH9AAAAy1A3nUAy1A3oAAABOlUAAABOmgy1A3nUgy1A3ohH9AAAUhH8AAAgy1g3og");
	var mask_6_graphics_43 = new cjs.Graphics().p("Eh9dCJLUgz9g43AAAhQUUAAAhQTAz9g42UAz8g43BJhAABUBJigABAz8A43UAz9A42AAABQTUAAABQUgz9A43Ugz8A41hJiAAAUhJhAAAgz8g41g");
	var mask_6_graphics_44 = new cjs.Graphics().p("EiAKCMHUg1Eg6EAAAhSDUAAAhSCA1Eg6FUA1Eg6EBLGAAAUBLIAAAA1EA6EUA1DA6FAAABSCUAAABSDg1DA6EUg1EA6FhLIAAAUhLGAAAg1Eg6Fg");
	var mask_6_graphics_45 = new cjs.Graphics().p("EiC4CPEUg2Lg7TAABhTxUgABhTwA2Lg7TUA2Mg7TBMsAAAUBMtAAAA2LA7TUA2MA7TAAABTwUAAABTxg2MA7TUg2LA7ThMtAAAUhMsAAAg2Mg7Tg");
	var mask_6_graphics_46 = new cjs.Graphics().p("EiFkCSBUg3Tg8hAAAhVgUAAAhVfA3Tg8hUA3Tg8hBORAAAUBOSAAAA3TA8hUA3TA8hAAABVfUAAABVgg3TA8hUg3TA8hhOSAAAUhORAAAg3Tg8hg");
	var mask_6_graphics_47 = new cjs.Graphics().p("EiIQCU9Ug4bg9vAAAhXOUAAAhXOA4bg9vUA4ag9vBP2AAAUBP3AAAA4bA9vUA4aA9vAAABXOUAAABXOg4aA9vUg4bA9whP3AAAUhP2AAAg4ag9wg");
	var mask_6_graphics_48 = new cjs.Graphics().p("EiK9CX6Ug5jg+9AABhY9UgABhY8A5jg+9UA5ig++BRbAAAUBRdAAAA5hA++UA5jA+9AAABY8UAAABY9g5jA+9Ug5hA++hRdAAAUhRbAAAg5ig++g");
	var mask_6_graphics_49 = new cjs.Graphics().p("EiNqCa4Ug6qhAMAAAhasUAAAharA6qhALUA6phAMBTBAAAUBTCAAAA6pBAMUA6qBALAAABarUAAABasg6qBAMUg6pBALhTCAAAUhTBAAAg6phALg");
	var mask_6_graphics_50 = new cjs.Graphics().p("EiQXCd0Ug7xhBaAAAhcaUAAAhcZA7xhBaUA7xhBaBUmAAAUBUnAAAA7xBBaUA7xBBaAAABcZUAAABcag7xBBaUg7xBBahUnAAAUhUmAAAg7xhBag");
	var mask_6_graphics_51 = new cjs.Graphics().p("EiTECgyUg84hCpAAAheJUAAAheIA84hCoUA85hCpBWLAAAUBWMAAAA85BCpUA84BCoAAABeIUAAABeJg84BCpUg85BCohWMgABUhWLAABg85hCog");
	var mask_6_graphics_52 = new cjs.Graphics().p("EiVwCjuUg+BhD3AAAhf3UAAAhf3A+BhD2UA9/hD3BXxAABUBXygABA9/BD3UA+BBD2AAABf3UAAABf3g+BBD3Ug9/BD3hXygABUhXxAABg9/hD3g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:765.25,y:319.1}).wait(1).to({graphics:mask_6_graphics_1,x:763.275,y:318.65}).wait(1).to({graphics:mask_6_graphics_2,x:761.325,y:318.175}).wait(1).to({graphics:mask_6_graphics_3,x:759.375,y:317.725}).wait(1).to({graphics:mask_6_graphics_4,x:757.4,y:317.25}).wait(1).to({graphics:mask_6_graphics_5,x:755.45,y:316.775}).wait(1).to({graphics:mask_6_graphics_6,x:753.475,y:316.325}).wait(1).to({graphics:mask_6_graphics_7,x:751.5,y:315.875}).wait(1).to({graphics:mask_6_graphics_8,x:749.575,y:315.4}).wait(1).to({graphics:mask_6_graphics_9,x:747.6,y:314.95}).wait(1).to({graphics:mask_6_graphics_10,x:745.625,y:314.475}).wait(1).to({graphics:mask_6_graphics_11,x:743.675,y:314.025}).wait(1).to({graphics:mask_6_graphics_12,x:741.7,y:313.55}).wait(1).to({graphics:mask_6_graphics_13,x:739.775,y:313.1}).wait(1).to({graphics:mask_6_graphics_14,x:737.8,y:312.625}).wait(1).to({graphics:mask_6_graphics_15,x:735.825,y:312.175}).wait(1).to({graphics:mask_6_graphics_16,x:733.875,y:311.7}).wait(1).to({graphics:mask_6_graphics_17,x:731.9,y:311.25}).wait(1).to({graphics:mask_6_graphics_18,x:729.925,y:310.8}).wait(1).to({graphics:mask_6_graphics_19,x:728,y:310.325}).wait(1).to({graphics:mask_6_graphics_20,x:726.025,y:309.85}).wait(1).to({graphics:mask_6_graphics_21,x:724.05,y:309.4}).wait(1).to({graphics:mask_6_graphics_22,x:722.1,y:308.95}).wait(1).to({graphics:mask_6_graphics_23,x:720.125,y:308.475}).wait(1).to({graphics:mask_6_graphics_24,x:718.175,y:308.025}).wait(1).to({graphics:mask_6_graphics_25,x:716.225,y:307.575}).wait(1).to({graphics:mask_6_graphics_26,x:714.25,y:307.125}).wait(1).to({graphics:mask_6_graphics_27,x:712.275,y:306.625}).wait(1).to({graphics:mask_6_graphics_28,x:710.325,y:306.175}).wait(1).to({graphics:mask_6_graphics_29,x:708.375,y:305.725}).wait(1).to({graphics:mask_6_graphics_30,x:706.4,y:305.25}).wait(1).to({graphics:mask_6_graphics_31,x:704.45,y:304.8}).wait(1).to({graphics:mask_6_graphics_32,x:702.475,y:304.35}).wait(1).to({graphics:mask_6_graphics_33,x:700.5,y:303.875}).wait(1).to({graphics:mask_6_graphics_34,x:698.575,y:303.4}).wait(1).to({graphics:mask_6_graphics_35,x:696.6,y:302.95}).wait(1).to({graphics:mask_6_graphics_36,x:694.625,y:302.5}).wait(1).to({graphics:mask_6_graphics_37,x:692.675,y:302.025}).wait(1).to({graphics:mask_6_graphics_38,x:690.7,y:301.575}).wait(1).to({graphics:mask_6_graphics_39,x:688.775,y:301.1}).wait(1).to({graphics:mask_6_graphics_40,x:686.8,y:300.65}).wait(1).to({graphics:mask_6_graphics_41,x:684.825,y:300.175}).wait(1).to({graphics:mask_6_graphics_42,x:682.875,y:299.725}).wait(1).to({graphics:mask_6_graphics_43,x:680.9,y:299.25}).wait(1).to({graphics:mask_6_graphics_44,x:678.925,y:298.8}).wait(1).to({graphics:mask_6_graphics_45,x:677,y:298.325}).wait(1).to({graphics:mask_6_graphics_46,x:675.025,y:297.875}).wait(1).to({graphics:mask_6_graphics_47,x:673.05,y:297.425}).wait(1).to({graphics:mask_6_graphics_48,x:671.1,y:296.95}).wait(1).to({graphics:mask_6_graphics_49,x:669.125,y:296.475}).wait(1).to({graphics:mask_6_graphics_50,x:667.175,y:296.025}).wait(1).to({graphics:mask_6_graphics_51,x:665.225,y:295.55}).wait(1).to({graphics:mask_6_graphics_52,x:663.25,y:295.1}).wait(143));

	// Layer_11
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("Eg4CAL6Q7Vjh17xVQgagWgGgVQgGgUALghQASg1AihcIAPAPQAKAKAMAGQAIAEAKAAIAUAAIAUAAQARAPATAPIgNAjQgLAfAFATQAFAUAaAUQRoNrWXElQGpBXHTAZQGmAWHdgdQJ4gmKMiiQJWiVJ7kEQFwiVC8hHQE3h2EBhKQRzlMSWGSQDgBNE7B8IIVDSQG2CqGSByQG7B9GnA+IB0ASQBDAKAxAFQASACAHAIQAFAIgBAQIgBAPQABBMgNALQgLAJhOgJQoGg9opieQniiJomjeQmYikiAgwQkvhzjzhHQp0i3pjAmQkZARkrBFQkJA9kpBqQjNBKliCMQmNCfigA8QuHFRtPBkQneA5myAEIhOABQmwAAmTg0g");
	this.shape_9.setTransform(-0.1756,271.908);

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(195));

	// Layer_14 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_52 = new cjs.Graphics().p("AkzEXQh/hzAAikQAAijB/h0QB/hzC0gBQC0ABCABzQB/B0AACjQAACkh/BzQiAB1i0AAQi0AAh/h1g");
	var mask_7_graphics_53 = new cjs.Graphics().p("AlgFBQiTiFAAi8QAAi7CTiFQCSiFDOAAQDPAACSCFQCTCFAAC7QAAC8iTCFQiSCFjPAAQjOAAiSiFg");
	var mask_7_graphics_54 = new cjs.Graphics().p("AmOFqQiliWAAjUQAAjUCliVQCliWDpAAQDpAACmCWQClCVAADUQAADUilCWQimCWjpAAQjpAAiliWg");
	var mask_7_graphics_55 = new cjs.Graphics().p("Am7GTQi4imAAjtQAAjsC4inQC4imEDAAQEEAAC4CmQC4CnAADsQAADti4CmQi4CokEgBQkDABi4iog");
	var mask_7_graphics_56 = new cjs.Graphics().p("AnpG8QjKi3AAkFQAAkEDKi4QDLi4EeAAQEfAADLC4QDKC4AAEEQAAEFjKC3QjLC5kfAAQkeAAjLi5g");
	var mask_7_graphics_57 = new cjs.Graphics().p("AoWHlQjejIAAkdQAAkcDejKQDejIE4AAQE5AADeDIQDdDKAAEcQAAEdjdDIQjeDKk5AAQk4AAjejKg");
	var mask_7_graphics_58 = new cjs.Graphics().p("ApDIPQjxjaAAk1QAAk0DxjbQDwjZFTAAQFUAADxDZQDwDbAAE0QAAE1jwDaQjxDalUAAQlTAAjwjag");
	var mask_7_graphics_59 = new cjs.Graphics().p("ApxI4QkDjrAAlNQAAlMEDjsQEDjrFuAAQFuAAEEDrQEDDsAAFMQAAFNkDDrQkEDsluAAQluAAkDjsg");
	var mask_7_graphics_60 = new cjs.Graphics().p("AqeJhQkWj8AAllQAAllEWj8QEWj8GIAAQGJAAEWD8QEWD8AAFlQAAFlkWD8QkWD9mJAAQmIAAkWj9g");
	var mask_7_graphics_61 = new cjs.Graphics().p("ArLKKQkpkMAAl+QAAl9EpkNQEokNGjAAQGkAAEpENQEpENAAF9QAAF+kpEMQkpEOmkAAQmjAAkokOg");
	var mask_7_graphics_62 = new cjs.Graphics().p("Ar5K0Qk8keAAmWQAAmVE8kfQE7keG+AAQG+AAE8EeQE8EfgBGVQABGWk8EeQk8Eem+ABQm+gBk7keg");
	var mask_7_graphics_63 = new cjs.Graphics().p("AsmLdQlPkvAAmuQAAmtFPkwQFOkvHYAAQHZAAFPEvQFOEwAAGtQAAGulOEvQlPEwnZAAQnYAAlOkwg");
	var mask_7_graphics_64 = new cjs.Graphics().p("AtUMGQlhlAAAnGQAAnFFhlBQFhlAHzAAQH0AAFhFAQFhFBAAHFQAAHGlhFAQlhFBn0AAQnzAAlhlBg");
	var mask_7_graphics_65 = new cjs.Graphics().p("AuBMvQl0lQAAnfQAAneF0lSQF0lRINABQIOgBF0FRQF0FSAAHeQAAHfl0FQQl0FSoOAAQoNAAl0lSg");
	var mask_7_graphics_66 = new cjs.Graphics().p("AuuNYQmIliAAn2QAAn2GIljQGGliIoAAQIpAAGHFiQGHFjAAH2QAAH2mHFiQmHFkopAAQooAAmGlkg");
	var mask_7_graphics_67 = new cjs.Graphics().p("AvcOCQmal0AAoOQAAoOGal0QGZlzJDAAQJEAAGZFzQGaF0AAIOQAAIOmaF0QmZF0pEAAQpDAAmZl0g");
	var mask_7_graphics_68 = new cjs.Graphics().p("AwJOrQmtmEAAonQAAolGtmHQGsmDJdgBQJeABGtGDQGsGHAAIlQAAInmsGEQmtGGpegBQpdABmsmGg");
	var mask_7_graphics_69 = new cjs.Graphics().p("Aw3PUQm/mVAAo/QAAo+G/mXQG/mVJ4AAQJ5AAG/GVQG/GXAAI+QAAI/m/GVQm/GXp5AAQp4AAm/mXg");
	var mask_7_graphics_70 = new cjs.Graphics().p("AxkP9QnSmmAApXQAApWHSmoQHRmmKTAAQKUAAHSGmQHRGoAAJWQAAJXnRGmQnSGoqUAAQqTAAnRmog");
	var mask_7_graphics_71 = new cjs.Graphics().p("AyRQmQnmm3AApvQAApuHmm5QHkm3KtAAQKuAAHlG3QHkG5ABJuQgBJvnkG3QnlG5quAAQqtAAnkm5g");
	var mask_7_graphics_72 = new cjs.Graphics().p("Ay/RQQn4nIAAqIQAAqGH4nLQH3nILIABQLJgBH3HIQH4HLAAKGQAAKIn4HIQn3HKrJAAQrIAAn3nKg");
	var mask_7_graphics_73 = new cjs.Graphics().p("AztR5QoKnZAAqgQAAqeIKncQIKnZLjAAQLkAAIKHZQIKHcAAKeQAAKgoKHZQoKHbrkAAQrjAAoKnbg");
	var mask_7_graphics_74 = new cjs.Graphics().p("A0aSiQodnqAAq4QAAq3IdnsQIdnqL9AAQL+AAIdHqQIdHsAAK3QAAK4odHqQodHsr+AAQr9AAodnsg");
	var mask_7_graphics_75 = new cjs.Graphics().p("A1HTLQown7AArQQAArPIwn+QIvn6MYgBQMZABIwH6QIvH+AALPQAALQovH7QowH+sZAAQsYAAovn+g");
	var mask_7_graphics_76 = new cjs.Graphics().p("A11T0QpCoMAAroQAArnJCoPQJDoMMyAAQM0AAJCIMQJDIPAALnQAALopDIMQpCIPs0AAQsyAApDoPg");
	var mask_7_graphics_77 = new cjs.Graphics().p("A2iUeQpWodAAsBQAAr/JWogQJVodNNAAQNOAAJVIdQJWIgAAL/QAAMBpWIdQpVIftOAAQtNAApVofg");
	var mask_7_graphics_78 = new cjs.Graphics().p("A3QVHQpoouAAsZQAAsXJooxQJpouNngBQNpABJoIuQJoIxAAMXQAAMZpoIuQpoIxtpgBQtnABppoxg");
	var mask_7_graphics_79 = new cjs.Graphics().p("A39VwQp7o/AAsxQAAswJ7pBQJ7pAOCAAQODAAJ7JAQJ7JBAAMwQAAMxp7I/Qp7JCuDAAQuCAAp7pCg");
	var mask_7_graphics_80 = new cjs.Graphics().p("A4qWZQqOpQAAtJQAAtIKOpTQKNpQOdAAQOeAAKOJQQKNJTAANIQAANJqNJQQqOJTueAAQudAAqNpTg");
	var mask_7_graphics_81 = new cjs.Graphics().p("A5YXDQqhpiAAthQAAtgKhpkQKhphO3AAQO5AAKgJhQKgJkABNgQgBNhqgJiQqgJku5AAQu3AAqhpkg");
	var mask_7_graphics_82 = new cjs.Graphics().p("A6FXsQq0pzAAt5QAAt4K0p1QKzpzPSAAQPTAAK0JzQKzJ1AAN4QAAN5qzJzQq0J1vTAAQvSAAqzp1g");
	var mask_7_graphics_83 = new cjs.Graphics().p("A6zYVQrGqDAAuSQAAuRLGqFQLGqEPtAAQPuAALGKEQLGKFAAORQAAOSrGKDQrGKGvuAAQvtAArGqGg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(52).to({graphics:mask_7_graphics_52,x:-691.6,y:247.55}).wait(1).to({graphics:mask_7_graphics_53,x:-690.275,y:242.425}).wait(1).to({graphics:mask_7_graphics_54,x:-688.95,y:237.3}).wait(1).to({graphics:mask_7_graphics_55,x:-687.625,y:232.15}).wait(1).to({graphics:mask_7_graphics_56,x:-686.325,y:227.025}).wait(1).to({graphics:mask_7_graphics_57,x:-685,y:221.9}).wait(1).to({graphics:mask_7_graphics_58,x:-683.675,y:216.775}).wait(1).to({graphics:mask_7_graphics_59,x:-682.35,y:211.625}).wait(1).to({graphics:mask_7_graphics_60,x:-681.025,y:206.5}).wait(1).to({graphics:mask_7_graphics_61,x:-679.7,y:201.375}).wait(1).to({graphics:mask_7_graphics_62,x:-678.4,y:196.25}).wait(1).to({graphics:mask_7_graphics_63,x:-677.075,y:191.1}).wait(1).to({graphics:mask_7_graphics_64,x:-675.75,y:185.975}).wait(1).to({graphics:mask_7_graphics_65,x:-674.425,y:180.85}).wait(1).to({graphics:mask_7_graphics_66,x:-673.1,y:175.725}).wait(1).to({graphics:mask_7_graphics_67,x:-671.775,y:170.6}).wait(1).to({graphics:mask_7_graphics_68,x:-670.475,y:165.45}).wait(1).to({graphics:mask_7_graphics_69,x:-669.15,y:160.325}).wait(1).to({graphics:mask_7_graphics_70,x:-667.825,y:155.2}).wait(1).to({graphics:mask_7_graphics_71,x:-666.5,y:150.075}).wait(1).to({graphics:mask_7_graphics_72,x:-665.175,y:144.95}).wait(1).to({graphics:mask_7_graphics_73,x:-663.85,y:139.8}).wait(1).to({graphics:mask_7_graphics_74,x:-662.55,y:134.675}).wait(1).to({graphics:mask_7_graphics_75,x:-661.225,y:129.55}).wait(1).to({graphics:mask_7_graphics_76,x:-659.9,y:124.425}).wait(1).to({graphics:mask_7_graphics_77,x:-658.575,y:119.275}).wait(1).to({graphics:mask_7_graphics_78,x:-657.25,y:114.15}).wait(1).to({graphics:mask_7_graphics_79,x:-655.925,y:109.025}).wait(1).to({graphics:mask_7_graphics_80,x:-654.625,y:103.9}).wait(1).to({graphics:mask_7_graphics_81,x:-653.3,y:98.75}).wait(1).to({graphics:mask_7_graphics_82,x:-651.975,y:93.625}).wait(1).to({graphics:mask_7_graphics_83,x:-650.65,y:88.5}).wait(112));

	// Layer_13
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("ApxZ8IgGgEQgagWgGgVQgGgUALghQASg1AihcQArh2BFi4QAvh9BMjSIB7lQIB0k2QBIjBAqh0IB8lXQBSjeArh5QBxk7CDlJQARgqgJgpQgFgVgQgiIAOgIIAEgEQADgCAFAAQCyBxAADsIgHgKIg/hhIh8FQQrdfAjWJBIgNAjQgLAfAFATQAFAUAaAUIADACIgBADIhvAyg");
	this.shape_10.setTransform(-610.8791,49.025);
	this.shape_10._off = true;

	var maskedShapeInstanceList = [this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(52).to({_off:false},0).wait(143));

	// Layer_16 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_83 = new cjs.Graphics().p("ApLKSQjzkRAAmBQAAmBDzkQQD0kRFXABQFYgBDzERQDzEQABGBQgBGBjzERQjzERlYAAQlXAAj0kRg");
	var mask_8_graphics_84 = new cjs.Graphics().p("AqxLFQkeklAAmgQAAmeEekmQEekmGTABQGVgBEdEmQEeEmAAGeQAAGgkeElQkdElmVABQmTgBkeklg");
	var mask_8_graphics_85 = new cjs.Graphics().p("AsZL4QlIk7AAm9QAAm8FIk6QFJk7HQAAQHRAAFIE7QFJE6AAG8QAAG9lJE7QlIE7nRAAQnQAAlJk7g");
	var mask_8_graphics_86 = new cjs.Graphics().p("AuAMqQlzlPAAnbQAAnaFzlQQF0lQIMABQINgBFzFQQF0FQAAHaQAAHbl0FPQlzFRoNAAQoMAAl0lRg");
	var mask_8_graphics_87 = new cjs.Graphics().p("AvnNdQmelkAAn5QAAn4GelkQGfllJIAAQJKAAGdFlQGfFkAAH4QAAH5mfFkQmdFlpKAAQpIAAmfllg");
	var mask_8_graphics_88 = new cjs.Graphics().p("AxOORQnIl7AAoWQAAoWHIl5QHJl6KFAAQKGAAHIF6QHJF5AAIWQAAIWnJF7QnIF5qGAAQqFAAnJl5g");
	var mask_8_graphics_89 = new cjs.Graphics().p("Ay1PDQnzmPAAo0QAAo0HzmOQH0mPLBAAQLCAAHzGPQH0GOAAI0QAAI0n0GPQnzGPrCAAQrBAAn0mPg");
	var mask_8_graphics_90 = new cjs.Graphics().p("A0cP2QoemkAApSQAApRIemkQIfmkL9AAQL/AAIdGkQIfGkAAJRQAAJSofGkQodGkr/AAQr9AAofmkg");
	var mask_8_graphics_91 = new cjs.Graphics().p("A2EQpQpIm5AApwQAApvJIm5QJKm5M6AAQM7AAJIG5QJKG5AAJvQAAJwpKG5QpIG5s7AAQs6AApKm5g");
	var mask_8_graphics_92 = new cjs.Graphics().p("A3qRbQp0nOAAqNQAAqNJ0nOQJznON3AAQN3AAJzHOQJ1HOgBKNQABKNp1HOQpzHPt3AAQt3AApznPg");
	var mask_8_graphics_93 = new cjs.Graphics().p("A5SSPQqenkABqrQgBqrKeniQKfnkOzAAQO0AAKeHkQKfHigBKrQABKrqfHkQqeHju0AAQuzAAqfnjg");
	var mask_8_graphics_94 = new cjs.Graphics().p("A65TCQrIn5AArJQAArILIn4QLJn5PwAAQPwAALIH5QLKH4AALIQAALJrKH5QrIH4vwAAQvwAArJn4g");
	var mask_8_graphics_95 = new cjs.Graphics().p("A8gT0QrzoNAArnQAArmLzoOQL1oNQrAAQQtAALzINQL0IOAALmQAALnr0INQrzIOwtAAQwrAAr1oOg");
	var mask_8_graphics_96 = new cjs.Graphics().p("A+HUnQseoiAAsFQAAsEMeoiQMfojRoAAQRpAAMeIjQMfIiAAMEQAAMFsfIiQseIjxpAAQxoAAsfojg");
	var mask_8_graphics_97 = new cjs.Graphics().p("A/uVaQtIo4AAsiQAAsiNIo3QNKo3SkgBQSlABNJI3QNJI3AAMiQAAMitJI4QtJI4ylAAQykAAtKo4g");
	var mask_8_graphics_98 = new cjs.Graphics().p("EghVAWNQtzpNAAtAQAAs/NzpNQN0pNThAAQTiAANyJNQN1JNAAM/QAANAt1JNQtyJMziABQzhgBt0pMg");
	var mask_8_graphics_99 = new cjs.Graphics().p("Egi8AXAQuepiAAteQAAteOephQOfpiUdAAQUeAAOeJiQOfJhAANeQAANeufJiQueJh0eABQ0dgBufphg");
	var mask_8_graphics_100 = new cjs.Graphics().p("EgkkAXzQvIp3AAt8QAAt7PIp2QPKp3VaAAQVaAAPIJ3QPLJ2AAN7QAAN8vLJ3QvIJ21aAAQ1aAAvKp2g");
	var mask_8_graphics_101 = new cjs.Graphics().p("EgmLAYlQvyqLAAuaQAAuZPyqMQP1qLWWAAQWXAAPzKLQP0KMAAOZQAAOav0KLQvzKM2XAAQ2WAAv1qMg");
	var mask_8_graphics_102 = new cjs.Graphics().p("EgnyAZZQweqiAAu3QAAu3QeqgQQgqhXSAAQXTAAQdKhQQgKgABO3QgBO3wgKiQwdKg3TAAQ3SAAwgqgg");
	var mask_8_graphics_103 = new cjs.Graphics().p("EgpZAaLQxIq2AAvVQAAvURIq3QRKq1YPAAQYPAARJK1QRKK3AAPUQAAPVxKK2QxJK24PAAQ4PAAxKq2g");
	var mask_8_graphics_104 = new cjs.Graphics().p("EgrAAa+QxzrLAAvzQAAvyRzrLQR1rLZLAAQZMAARyLLQR2LLAAPyQAAPzx2LLQxyLL5MAAQ5LAAx1rLg");
	var mask_8_graphics_105 = new cjs.Graphics().p("EgsnAbxQyergAAwRQAAwQSergQSgrgaHAAQaIAASeLgQSgLgAAQQQAAQRygLgQyeLg6IAAQ6HAAygrgg");
	var mask_8_graphics_106 = new cjs.Graphics().p("EguOAckQzIr1AAwvQAAwuTIr1QTKr1bEAAQbFAATIL1QTKL1AAQuQAAQvzKL1QzIL17FAAQ7EAAzKr1g");
	var mask_8_graphics_107 = new cjs.Graphics().p("Egv2AdXQzysKAAxNQAAxMTysKQT2sKcAAAQcBAATzMKQT1MKAARMQAARNz1MKQzzMK8BAAQ8AAAz2sKg");
	var mask_8_graphics_108 = new cjs.Graphics().p("EgxdAeKQ0dsfAAxrQAAxpUdsfQUgsgc9AAQc+AAUdMgQUgMfAARpQAARr0gMfQ0dMf8+AAQ89AA0gsfg");
	var mask_8_graphics_109 = new cjs.Graphics().p("EgzEAe8Q1Is0AAyIQAAyHVIs1QVLs0d5AAQd6AAVIM0QVLM1AASHQAASI1LM0Q1IM096AAQ95AA1Ls0g");
	var mask_8_graphics_110 = new cjs.Graphics().p("Eg0rAfvQ1ytJgBymQABylVytJQV1tKe2AAQe2AAVzNKQV1NJABSlQgBSm11NJQ1zNK+2gBQ+2AB11tKg");
	var mask_8_graphics_111 = new cjs.Graphics().p("Eg2SAgiQ2dtfgBzDQABzDWdteQWgtefygBQfzABWdNeQWhNeAATDQAATD2hNfQ2dNe/zAAQ/yAA2gteg");
	var mask_8_graphics_112 = new cjs.Graphics().p("Eg36AhVQ3HtzAAziQAAzhXHtzUAXMgNzAguAAAUAgvAAAAXIANzQXLNzAAThQAATi3LNzUgXIANzggvAAAUgguAAAgXMgNzg");
	var mask_8_graphics_113 = new cjs.Graphics().p("Eg5gAiIQ3zuIAA0AQAAz+XzuJUAX2gOIAhqAAAUAhrAAAAXzAOIQX2OJAAT+QAAUA32OIUgXzAOIghrAAAUghqAAAgX2gOIg");
	var mask_8_graphics_114 = new cjs.Graphics().p("Eg7HAi7Q4eueAA0dQAA0cYeueUAYggOdAinAAAUAioAAAAYdAOdQYhOeAAUcQAAUd4hOeUgYdAOdgioAAAUginAAAgYggOdg");
	var mask_8_graphics_115 = new cjs.Graphics().p("Eg8vAjuQ5IuzAA07QAA06ZIuyUAZMgOzAjjAAAUAjkAAAAZIAOzQZMOyAAU6QAAU75MOzUgZIAOygjkAAAUgjjAAAgZMgOyg");
	var mask_8_graphics_116 = new cjs.Graphics().p("Eg+WAkhQ5yvIAA1ZQAA1YZyvHUAZ2gPIAkgAAAUAkhAAAAZyAPIQZ2PHAAVYQAAVZ52PIUgZyAPHgkhAAAUgkgAAAgZ2gPHg");
	var mask_8_graphics_117 = new cjs.Graphics().p("Eg/9AlTQ6dvdAA12QAA12advdUAahgPcAlcAAAUAldAAAAaeAPcQagPdAAV2QAAV26gPdUgaeAPdgldAAAUglcAAAgahgPdg");
	var mask_8_graphics_118 = new cjs.Graphics().p("EhBkAmGQ7IvyAA2UQAA2UbIvyUAbLgPxAmZAAAUAmaAAAAbHAPxQbMPyAAWUQAAWU7MPyUgbHAPygmaAAAUgmZAAAgbLgPyg");
	var mask_8_graphics_119 = new cjs.Graphics().p("EhDLAm5Q7zwHAA2yQAA2xbzwHUAb2gQHAnVAAAUAnVAAAAb0AQHQb2QHAAWxQAAWy72QHUgb0AQHgnVAAAUgnVAAAgb2gQHg");
	var mask_8_graphics_120 = new cjs.Graphics().p("EhEzAnsQ8dwcAB3QQgB3PcdwcUAcigQcAoRAAAUAoSAAAAcdAQcQchQcAAXPQAAXQ8hQcUgcdAQcgoSAAAUgoRAAAgcigQcg");
	var mask_8_graphics_121 = new cjs.Graphics().p("EhGZAofQ9IwxAA3uQAA3tdIwxUAdMgQxApNAAAUApPAAAAdIAQxQdLQxAAXtQAAXu9LQxUgdIAQxgpPAAAUgpNAAAgdMgQxg");
	var mask_8_graphics_122 = new cjs.Graphics().p("EhIBApSQ9yxGAA4MQAA4LdyxFUAd3gRHAqKAAAUAqLAAAAdyARHQd3RFAAYLQAAYM93RGUgdyARGgqLAAAUgqKAAAgd3gRGg");
	var mask_8_graphics_123 = new cjs.Graphics().p("EhJoAqFQ+dxcAA4pQAA4oedxbUAeigRcArGAAAUArHAAAAeeARcQehRbAAYoQAAYp+hRcUgeeARbgrHAAAUgrGAAAgeigRbg");
	var mask_8_graphics_124 = new cjs.Graphics().p("EhLPAq4Q/IxxAA5HQAA5GfIxwUAfMgRxAsDAAAUAsEAAAAfIARxQfMRwAAZGQAAZH/MRxUgfIARwgsEAAAUgsDAAAgfMgRwg");
	var mask_8_graphics_125 = new cjs.Graphics().p("EhM2ArqQ/yyFAA5lQAA5kfyyFUAf3gSFAs/AAAUAtAAAAAfzASFQf2SFAAZkQAAZl/2SFUgfzASFgtAAAAUgs/AAAgf3gSFg");
	var mask_8_graphics_126 = new cjs.Graphics().p("EhOdAsdUggdgSaAAAgaDUAAAgaCAgdgSaUAgigSaAt7AAAUAt8AAAAgdASaUAgiASaAAAAaCUAAAAaDggiASaUggdASagt8AAAUgt7AAAggigSag");
	var mask_8_graphics_127 = new cjs.Graphics().p("EhQEAtQUghIgSvAAAgahUAAAgagAhIgSvUAhMgSvAu4AAAUAu5AAAAhIASvUAhMASvAAAAagUAAAAahghMASvUghIASvgu5AAAUgu4AAAghMgSvg");
	var mask_8_graphics_128 = new cjs.Graphics().p("EhRrAuDUghygTFAAAga+UAAAga9AhygTFUAh3gTEAv0AAAUAv1AAAAhyATEUAh4ATFgABAa9UAABAa+gh4ATFUghyATEgv1AAAUgv0AAAgh3gTEg");
	var mask_8_graphics_129 = new cjs.Graphics().p("EhTTAu2UgidgTaAAAgbcUAAAgbbAidgTaUAiigTZAwxAAAUAwyAAAAidATZUAiiATagABAbbUAABAbcgiiATaUgidATZgwyAAAUgwxAAAgiigTZg");
	var mask_8_graphics_130 = new cjs.Graphics().p("EhU5AvpUgjIgTvAAAgb6UAAAgb5AjIgTuUAjMgTvAxtAAAUAxuAAAAjIATvUAjMATuAAAAb5UAAAAb6gjMATvUgjIATugxuAAAUgxtAAAgjMgTug");
	var mask_8_graphics_131 = new cjs.Graphics().p("EhWhAwbUgjygUDAAAgcYUAAAgcXAjygUDUAj4gUEAypAAAUAyqAAAAjzAUEUAj3AUDAAAAcXUAAAAcYgj3AUDUgjzAUEgyqAAAUgypAAAgj4gUEg");
	var mask_8_graphics_132 = new cjs.Graphics().p("EhYIAxOUgkdgUYAAAgc2UAAAgc1AkdgUYUAkigUZAzmAAAUAznAAAAkdAUZUAkiAUYAAAAc1UAAAAc2gkiAUYUgkdAUZgznAAAUgzmAAAgkigUZg");
	var mask_8_graphics_133 = new cjs.Graphics().p("EhZvAyBUglHgUugABgdTUAABgdSAlHgUuUAlNgUuA0iAAAUA0jAAAAlIAUuUAlNAUugABAdSUAABAdTglNAUuUglIAUug0jAAAUg0iAAAglNgUug");
	var mask_8_graphics_134 = new cjs.Graphics().p("EhbWAy0UglygVDAAAgdxUAAAgdwAlygVDUAl3gVDA1fAAAUA1fAAAAlzAVDUAl3AVDAAAAdwUAAAAdxgl3AVDUglzAVDg1fAAAUg1fAAAgl3gVDg");
	var mask_8_graphics_135 = new cjs.Graphics().p("Ehc9AznUgmdgVYAAAgePUAAAgeOAmdgVYUAmigVYA2bAAAUA2cAAAAmdAVYUAmiAVYAAAAeOUAAAAePgmiAVYUgmdAVYg2cAAAUg2bAAAgmigVYg");
	var mask_8_graphics_136 = new cjs.Graphics().p("EhekA0aUgnIgVtAAAgetUAAAgesAnIgVtUAnNgVtA3XAAAUA3YAAAAnIAVtUAnNAVtAAAAesUAAAAetgnNAVtUgnIAVtg3YAAAUg3XAAAgnNgVtg");
	var mask_8_graphics_137 = new cjs.Graphics().p("EhgMA1NUgnxgWCgABgfLUAABgfKAnxgWBUAn4gWCA4UAAAUA4VAAAAnyAWCUAn3AWBAAAAfKUAAAAfLgn3AWCUgnyAWCg4VAAAUg4UAAAgn4gWCg");
	var mask_8_graphics_138 = new cjs.Graphics().p("EhhyA2AUgoegWYAAAgfoUAAAgfnAoegWXUAoigWYA5QAABUA5RgABAodAWYUAoiAWXAAAAfnUAAAAfogoiAWYUgodAWXg5RAAAUg5QAAAgoigWXg");
	var mask_8_graphics_139 = new cjs.Graphics().p("EhjaA2yUgpHgWsAAAggGUAAAggFApHgWsUApOgWsA6MAAAUA6NAAAApIAWsUApNAWsAAAAgFUAAAAgGgpNAWsUgpIAWsg6NAAAUg6MAAAgpOgWsg");
	var mask_8_graphics_140 = new cjs.Graphics().p("EhlBA3lUgpygXBAAAggkUAAAggjApygXBUAp4gXBA7JAAAUA7KAAAApyAXBUAp4AXBAAAAgjUAAAAgkgp4AXBUgpyAXBg7KAAAUg7JAAAgp4gXBg");
	var mask_8_graphics_141 = new cjs.Graphics().p("EhmoA4YUgqdgXWAAAghCUAAAghBAqdgXWUAqjgXWA8FAAAUA8GAAAAqdAXWUAqjAXWAAAAhBUAAAAhCgqjAXWUgqdAXWg8GAAAUg8FAAAgqjgXWg");
	var mask_8_graphics_142 = new cjs.Graphics().p("EhoPA5LUgrIgXsAABghfUgABghfArIgXrUArOgXrA9BAAAUA9DAAAArHAXrUArOAXrAAAAhfUAAAAhfgrOAXsUgrHAXrg9DAAAUg9BAAAgrOgXrg");
	var mask_8_graphics_143 = new cjs.Graphics().p("Ehp2A5+UgrygYBAAAgh9UAAAgh8ArygYBUAr4gYAA9+AAAUA9/AAAArzAYAUAr4AYBAAAAh8UAAAAh9gr4AYBUgrzAYAg9/AAAUg9+AAAgr4gYAg");
	var mask_8_graphics_144 = new cjs.Graphics().p("EhreA6xUgscgYWAAAgibUAAAgiaAscgYVUAskgYWA+6AAAUA+8AAAAscAYWUAsjAYVAAAAiaUAAAAibgsjAYWUgscAYVg+8AAAUg+6AAAgskgYVg");
	var mask_8_graphics_145 = new cjs.Graphics().p("EhtFA7kUgtHgYrAAAgi5UAAAgi4AtHgYqUAtOgYrA/3AAAUA/4AAAAtIAYrUAtNAYqAAAAi4UAAAAi5gtNAYrUgtIAYqg/4AAAUg/3AAAgtOgYqg");
	var mask_8_graphics_146 = new cjs.Graphics().p("EhurA8XUgtzgZAAAAgjXUAAAgjVAtzgZAUAt4gZABAzAAAUBA0AAAAtzAZAUAt4AZAAAAAjVUAAAAjXgt4AZAUgtzAY/hA0AAAUhAzAAAgt4gY/g");
	var mask_8_graphics_147 = new cjs.Graphics().p("EhwTA9JUgudgZVAABgj0UgABgj0AudgZUUAukgZVBBvAAAUBBwAAAAueAZVUAuiAZUAABAj0UgABAj0guiAZVUgueAZVhBwAAAUhBvAAAgukgZVg");
	var mask_8_graphics_148 = new cjs.Graphics().p("Ehx6A98UgvHgZqAAAgkSUAAAgkRAvHgZqUAvOgZqBCsAAAUBCtAAAAvIAZqUAvNAZqAAAAkRUAAAAkSgvNAZqUgvIAZqhCtAAAUhCsAAAgvOgZqg");
	var mask_8_graphics_149 = new cjs.Graphics().p("EhzhA+vUgvygZ/AAAgkwUAAAgkvAvygZ/UAv5gZ/BDoAAAUBDpAAAAvzAZ/UAv4AZ/AAAAkvUAAAAkwgv4AZ/UgvzAZ/hDpAAAUhDoAAAgv5gZ/g");
	var mask_8_graphics_150 = new cjs.Graphics().p("Eh1IA/iUgwdgaUAAAglOUAAAglNAwdgaUUAwjgaUBElAABUBEmgABAwdAaUUAwjAaUAAAAlNUAAAAlOgwjAaUUgwdAaUhEmAAAUhElAAAgwjgaUg");
	var mask_8_graphics_151 = new cjs.Graphics().p("Eh2vBAVUgxIgapAABglsUgABglqAxIgaqUAxOgaoBFhAAAUBFiAAAAxIAaoUAxOAaqAAAAlqUAAAAlsgxOAapUgxIAaphFiAAAUhFhAAAgxOgapg");
	var mask_8_graphics_152 = new cjs.Graphics().p("Eh4XBBIUgxyga/AAAgmJUAAAgmJAxyga9UAx6ga/BGdAABUBGfgABAxyAa/UAx4Aa9AAAAmJUAAAAmJgx4Aa/UgxyAa+hGfAAAUhGdAAAgx6ga+g");
	var mask_8_graphics_153 = new cjs.Graphics().p("Eh59BB6UgydgbTAAAgmnUAAAgmmAydgbTUAykgbUBHZAABUBHbgABAydAbUUAyjAbTAAAAmmUAAAAmngyjAbTUgydAbUhHbAAAUhHZAAAgykgbUg");
	var mask_8_graphics_154 = new cjs.Graphics().p("Eh7lBCtUgzHgbnAAAgnGUAAAgnEAzHgboUAzPgboBIWAAAUBIXAAAAzIAboUAzOAboAAAAnEUAAAAnGgzOAbnUgzIAbphIXAAAUhIWAAAgzPgbpg");
	var mask_8_graphics_155 = new cjs.Graphics().p("Eh9MBDgUgzygb9AAAgnjUAAAgniAzygb9UAz6gb9BJSAAAUBJUAAAAzyAb9UAz5Ab9AAAAniUAAAAnjgz5Ab9UgzyAb9hJUAAAUhJSAAAgz6gb9g");
	var mask_8_graphics_156 = new cjs.Graphics().p("Eh+zBETUg0dgcSAAAgoBUAAAgn/A0dgcTUA0kgcSBKPAAAUBKQAAAA0cAcSUA0kAcTAABAn/UgABAoBg0kAcSUg0cAcShKQAAAUhKPAAAg0kgcSg");
	var mask_8_graphics_157 = new cjs.Graphics().p("EiAaBFGUg1HgcoAAAgoeUAAAgoeA1HgcnUA1PgcnBLLAAAUBLMAAAA1IAcnUA1OAcnAAAAoeUAAAAoeg1OAcoUg1IAcnhLMAAAUhLLAAAg1Pgcng");
	var mask_8_graphics_158 = new cjs.Graphics().p("EiCBBF5Ug1ygc9AAAgo8UAAAgo8A1ygc7UA15gc9BMIAAAUBMJAAAA1yAc9UA15Ac7AAAAo8UAAAAo8g15Ac9Ug1yAc8hMJAAAUhMIAAAg15gc8g");
	var mask_8_graphics_159 = new cjs.Graphics().p("EiDoBGsUg2dgdSAAAgpaUAAAgpZA2dgdRUA2kgdSBNEAAAUBNFAAAA2dAdSUA2kAdRAAAApZUAAAApag2kAdSUg2dAdRhNFAAAUhNEAAAg2kgdRg");
	var mask_8_graphics_160 = new cjs.Graphics().p("EiFQBHfUg3HgdnAAAgp4UAAAgp3A3HgdmUA3PgdnBOBAAAUBOBAAAA3IAdnUA3PAdmAAAAp3UAAAAp4g3PAdnUg3IAdmhOBAAAUhOBAAAg3Pgdmg");
	var mask_8_graphics_161 = new cjs.Graphics().p("EiG2BIRUg3zgd7AABgqWUgABgqVA3zgd7UA36gd8BO8AAAUBO+AAAA3yAd8UA35Ad7AAAAqVUAAAAqWg35Ad7Ug3yAd8hO+AAAUhO8AAAg36gd8g");
	var mask_8_graphics_162 = new cjs.Graphics().p("EiIeBJEUg4cgeQAAAgq0UAAAgqzA4cgeQUA4lgeRBP5AAAUBP6AAAA4dAeRUA4kAeQAAAAqzUAAAAq0g4kAeQUg4dAeRhP6gABUhP5AABg4lgeRg");
	var mask_8_graphics_163 = new cjs.Graphics().p("EiKFBJ3Ug5HgemAAAgrRUAAAgrQA5HgelUA5PgemBQ2gABUBQ2AABA5IAemUA5PAelAAAArQUAAAArRg5PAemUg5IAelhQ2AAAUhQ2AAAg5Pgelg");
	var mask_8_graphics_164 = new cjs.Graphics().p("EiLsBKqUg5yge7AAAgrvUAAAgruA5yge6UA56ge8BRyAAAUBRzAAAA5yAe8UA56Ae6AAAAruUAAAArvg56Ae7Ug5yAe7hRzgABUhRyAABg56ge7g");
	var mask_8_graphics_165 = new cjs.Graphics().p("EiNTBLdUg6dgfQAAAgsNUAAAgsMA6dgfQUA6lgfQBSuAAAUBSvAAAA6dAfQUA6lAfQgABAsMUAABAsNg6lAfQUg6dAfPhSvAAAUhSuAAAg6lgfPg");
	var mask_8_graphics_166 = new cjs.Graphics().p("EiO6BMQUg7HgflAAAgsrUAAAgspA7HgflUA7PgfmBTrAAAUBTsAAAA7HAfmUA7PAflAAAAspUAAAAsrg7PAflUg7HAfkhTsAAAUhTrAAAg7Pgfkg");
	var mask_8_graphics_167 = new cjs.Graphics().p("EiQhBNDUg7ygf7AAAgtIUAAAgtHA7ygf6UA76gf7BUnAAAUBUoAAAA7yAf7UA76Af6AAAAtHUAAAAtIg76Af7Ug7yAf5hUoAAAUhUnAAAg76gf5g");
	var mask_8_graphics_168 = new cjs.Graphics().p("EiSJBN1Ug8cggPAAAgtmUAAAgtlA8cggPUA8lggQBVkAAAUBVkAAAA8dAgQUA8lAgPAAAAtlUAAAAtmg8lAgPUg8dAgPhVkAAAUhVkAAAg8lggPg");
	var mask_8_graphics_169 = new cjs.Graphics().p("EiTwBOpUg9HgglAAAguEUAAAguDA9HggkUA9QggkBWgAAAUBWhAAAA9HAgkUA9QAgkAAAAuDUAAAAuEg9QAglUg9HAgjhWhAAAUhWgAAAg9Qggjg");
	var mask_8_graphics_170 = new cjs.Graphics().p("EiVXBPcUg9xgg6AAAguiUAAAguhA9xgg5UA97gg5BXcAAAUBXdAAAA9yAg5UA97Ag5AAAAuhUAAAAuig97Ag6Ug9yAg4hXdAAAUhXcAAAg97gg4g");
	var mask_8_graphics_171 = new cjs.Graphics().p("EiW+BQOUg+cghPAAAgu/UAAAgu/A+cghOUA+lghOBYZAAAUBYZAAAA+dAhOUA+lAhOAAAAu/UAAAAu/g+lAhPUg+dAhOhYZAAAUhYZAAAg+lghOg");
	var mask_8_graphics_172 = new cjs.Graphics().p("EiYlBRBUg/HghkAAAgvdUAAAgvdA/HghiUA/QghkBZVAAAUBZWAAAA/HAhkUA/QAhiAAAAvdUAAAAvdg/QAhkUg/HAhjhZWAAAUhZVAAAg/Qghjg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(83).to({graphics:mask_8_graphics_83,x:-637.1,y:-177.05}).wait(1).to({graphics:mask_8_graphics_84,x:-637.125,y:-177.05}).wait(1).to({graphics:mask_8_graphics_85,x:-637.1,y:-177.05}).wait(1).to({graphics:mask_8_graphics_86,x:-637.125,y:-177.05}).wait(1).to({graphics:mask_8_graphics_87,x:-637.125,y:-177.05}).wait(1).to({graphics:mask_8_graphics_88,x:-637.125,y:-177.05}).wait(1).to({graphics:mask_8_graphics_89,x:-637.125,y:-177.05}).wait(1).to({graphics:mask_8_graphics_90,x:-637.15,y:-177.05}).wait(1).to({graphics:mask_8_graphics_91,x:-637.125,y:-177.05}).wait(1).to({graphics:mask_8_graphics_92,x:-637.15,y:-177.05}).wait(1).to({graphics:mask_8_graphics_93,x:-637.15,y:-177.05}).wait(1).to({graphics:mask_8_graphics_94,x:-637.15,y:-177.075}).wait(1).to({graphics:mask_8_graphics_95,x:-637.175,y:-177.05}).wait(1).to({graphics:mask_8_graphics_96,x:-637.175,y:-177.05}).wait(1).to({graphics:mask_8_graphics_97,x:-637.175,y:-177.05}).wait(1).to({graphics:mask_8_graphics_98,x:-637.175,y:-177.05}).wait(1).to({graphics:mask_8_graphics_99,x:-637.2,y:-177.05}).wait(1).to({graphics:mask_8_graphics_100,x:-637.175,y:-177.075}).wait(1).to({graphics:mask_8_graphics_101,x:-637.2,y:-177.05}).wait(1).to({graphics:mask_8_graphics_102,x:-637.2,y:-177.05}).wait(1).to({graphics:mask_8_graphics_103,x:-637.2,y:-177.05}).wait(1).to({graphics:mask_8_graphics_104,x:-637.2,y:-177.05}).wait(1).to({graphics:mask_8_graphics_105,x:-637.225,y:-177.05}).wait(1).to({graphics:mask_8_graphics_106,x:-637.225,y:-177.075}).wait(1).to({graphics:mask_8_graphics_107,x:-637.225,y:-177.075}).wait(1).to({graphics:mask_8_graphics_108,x:-637.25,y:-177.075}).wait(1).to({graphics:mask_8_graphics_109,x:-637.225,y:-177.05}).wait(1).to({graphics:mask_8_graphics_110,x:-637.25,y:-177.05}).wait(1).to({graphics:mask_8_graphics_111,x:-637.25,y:-177.05}).wait(1).to({graphics:mask_8_graphics_112,x:-637.25,y:-177.075}).wait(1).to({graphics:mask_8_graphics_113,x:-637.25,y:-177.075}).wait(1).to({graphics:mask_8_graphics_114,x:-637.275,y:-177.075}).wait(1).to({graphics:mask_8_graphics_115,x:-637.275,y:-177.075}).wait(1).to({graphics:mask_8_graphics_116,x:-637.275,y:-177.075}).wait(1).to({graphics:mask_8_graphics_117,x:-637.3,y:-177.05}).wait(1).to({graphics:mask_8_graphics_118,x:-637.3,y:-177.05}).wait(1).to({graphics:mask_8_graphics_119,x:-637.3,y:-177.075}).wait(1).to({graphics:mask_8_graphics_120,x:-637.3,y:-177.075}).wait(1).to({graphics:mask_8_graphics_121,x:-637.325,y:-177.075}).wait(1).to({graphics:mask_8_graphics_122,x:-637.3,y:-177.075}).wait(1).to({graphics:mask_8_graphics_123,x:-637.325,y:-177.075}).wait(1).to({graphics:mask_8_graphics_124,x:-637.325,y:-177.075}).wait(1).to({graphics:mask_8_graphics_125,x:-637.325,y:-177.075}).wait(1).to({graphics:mask_8_graphics_126,x:-637.35,y:-177.075}).wait(1).to({graphics:mask_8_graphics_127,x:-637.35,y:-177.075}).wait(1).to({graphics:mask_8_graphics_128,x:-637.35,y:-177.075}).wait(1).to({graphics:mask_8_graphics_129,x:-637.35,y:-177.075}).wait(1).to({graphics:mask_8_graphics_130,x:-637.375,y:-177.075}).wait(1).to({graphics:mask_8_graphics_131,x:-637.375,y:-177.075}).wait(1).to({graphics:mask_8_graphics_132,x:-637.375,y:-177.075}).wait(1).to({graphics:mask_8_graphics_133,x:-637.4,y:-177.075}).wait(1).to({graphics:mask_8_graphics_134,x:-637.375,y:-177.075}).wait(1).to({graphics:mask_8_graphics_135,x:-637.4,y:-177.075}).wait(1).to({graphics:mask_8_graphics_136,x:-637.4,y:-177.075}).wait(1).to({graphics:mask_8_graphics_137,x:-637.4,y:-177.1}).wait(1).to({graphics:mask_8_graphics_138,x:-637.4,y:-177.1}).wait(1).to({graphics:mask_8_graphics_139,x:-637.425,y:-177.075}).wait(1).to({graphics:mask_8_graphics_140,x:-637.425,y:-177.075}).wait(1).to({graphics:mask_8_graphics_141,x:-637.425,y:-177.075}).wait(1).to({graphics:mask_8_graphics_142,x:-637.45,y:-177.075}).wait(1).to({graphics:mask_8_graphics_143,x:-637.45,y:-177.075}).wait(1).to({graphics:mask_8_graphics_144,x:-637.45,y:-177.1}).wait(1).to({graphics:mask_8_graphics_145,x:-637.45,y:-177.1}).wait(1).to({graphics:mask_8_graphics_146,x:-637.475,y:-177.1}).wait(1).to({graphics:mask_8_graphics_147,x:-637.45,y:-177.075}).wait(1).to({graphics:mask_8_graphics_148,x:-637.475,y:-177.075}).wait(1).to({graphics:mask_8_graphics_149,x:-637.475,y:-177.075}).wait(1).to({graphics:mask_8_graphics_150,x:-637.475,y:-177.1}).wait(1).to({graphics:mask_8_graphics_151,x:-637.5,y:-177.1}).wait(1).to({graphics:mask_8_graphics_152,x:-637.5,y:-177.1}).wait(1).to({graphics:mask_8_graphics_153,x:-637.5,y:-177.1}).wait(1).to({graphics:mask_8_graphics_154,x:-637.5,y:-177.1}).wait(1).to({graphics:mask_8_graphics_155,x:-637.525,y:-177.075}).wait(1).to({graphics:mask_8_graphics_156,x:-637.5,y:-177.1}).wait(1).to({graphics:mask_8_graphics_157,x:-637.525,y:-177.1}).wait(1).to({graphics:mask_8_graphics_158,x:-637.525,y:-177.1}).wait(1).to({graphics:mask_8_graphics_159,x:-637.525,y:-177.1}).wait(1).to({graphics:mask_8_graphics_160,x:-637.525,y:-177.1}).wait(1).to({graphics:mask_8_graphics_161,x:-637.55,y:-177.075}).wait(1).to({graphics:mask_8_graphics_162,x:-637.55,y:-177.1}).wait(1).to({graphics:mask_8_graphics_163,x:-637.55,y:-177.1}).wait(1).to({graphics:mask_8_graphics_164,x:-637.575,y:-177.1}).wait(1).to({graphics:mask_8_graphics_165,x:-637.55,y:-177.1}).wait(1).to({graphics:mask_8_graphics_166,x:-637.575,y:-177.1}).wait(1).to({graphics:mask_8_graphics_167,x:-637.575,y:-177.1}).wait(1).to({graphics:mask_8_graphics_168,x:-637.575,y:-177.1}).wait(1).to({graphics:mask_8_graphics_169,x:-637.575,y:-177.1}).wait(1).to({graphics:mask_8_graphics_170,x:-637.6,y:-177.1}).wait(1).to({graphics:mask_8_graphics_171,x:-637.575,y:-177.1}).wait(1).to({graphics:mask_8_graphics_172,x:-637.6,y:-177.1}).wait(23));

	// Layer_15
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("Eg5UAMOQu0hYsFpWQkdjcj3k+QgZgfgfgwIgHgKIg/hhIhVDmQg/hHgqhJIBFiwQAQgogHgnIAEgDQBgALBbATQCNDnDDDSQNxOyVVAmQODAZN3lNQDVhQCCg0QC6hLCWhHQBUgnBEgxQCnhMCjhLIgYAqIAAABIgBAAIgGAHQgDAFADADQADADAEAAQAFAAAJgHIAAgBIC5hDQBugoBMgXQDthHD5g6QEhhDEkgjQHkg6HTACQFjADEHAWQLeA/JvDIQDRBECpA/IAMADQAHABAHgFQgKgYgcgvQgagvgLgaIgFgLIAZAgQANARAJAWIBQAAIACAUQADAYAjAQQBTArBTAnQBbBNB6A4QCPBCCxBHQB8AyDHBMQFkCGGoBeQAQADAFAGQAGAGABAPQAHBegOAMQgOAMhdgTQkeg9lEhwQj6hXlUiPQmXiqjThRQlZiDkfhPQm5h5npg2Qm6gxn3AEQ0SALzlIaQlICNiyBHQkaBxjqBMQrkDwrfAAQjRAAjQgTg");
	this.shape_11.setTransform(53.5167,-29.8833);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0A4966").s().p("AgJAGQgDgDADgEIAGgHIABAAIAAAAIANAKIAAABQgIAGgFAAQgEAAgDgDg");
	this.shape_12.setTransform(7.4035,-41.825);

	var maskedShapeInstanceList = [this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},83).wait(112));

	// Layer_20 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_108 = new cjs.Graphics().p("AmzGzQizi0gBj/QABj+Czi1QC1izD+gBQD/ABC0CzQC1C1AAD+QAAD/i1C0Qi0C1j/gBQj+ABi1i1g");
	var mask_9_graphics_109 = new cjs.Graphics().p("AnCHCQi6i6AAkIQAAkHC6i6QC7i7EHAAQEIAAC6C7QC7C6AAEHQAAEIi7C6Qi6C7kIAAQkHAAi7i7g");
	var mask_9_graphics_110 = new cjs.Graphics().p("AnRHRQjBjBAAkQQAAkPDBjCQDCjBEPAAQERAADADBQDCDCAAEPQAAEQjCDBQjADCkRAAQkPAAjCjCg");
	var mask_9_graphics_111 = new cjs.Graphics().p("AngHhQjHjHAAkaQAAkYDHjIQDHjHEZAAQEZAADHDHQDIDIAAEYQAAEajIDHQjHDHkZAAQkZAAjHjHg");
	var mask_9_graphics_112 = new cjs.Graphics().p("AnvHwQjNjOAAkiQAAkhDNjOQDNjNEiAAQEiAADODNQDNDOAAEhQAAEijNDOQjODNkiAAQkiAAjNjNg");
	var mask_9_graphics_113 = new cjs.Graphics().p("An+H+QjTjSgBksQABkrDTjTQDUjUEqAAQEsAADSDUQDVDTAAErQAAEsjVDSQjSDVksAAQkqAAjUjVg");
	var mask_9_graphics_114 = new cjs.Graphics().p("AoOIOQjZjaAAk0QAAkzDZjbQDbjZEzAAQE0AADaDZQDaDbAAEzQAAE0jaDaQjaDak0AAQkzAAjbjag");
	var mask_9_graphics_115 = new cjs.Graphics().p("AodIdQjfjggBk9QABk8DfjhQDhjfE8AAQE9AADgDfQDhDhAAE8QAAE9jhDgQjgDhk9AAQk8AAjhjhg");
	var mask_9_graphics_116 = new cjs.Graphics().p("AosIsQjmjmAAlGQAAlFDmjmQDnjnFFAAQFGAADmDnQDnDmAAFFQAAFGjnDmQjmDnlGAAQlFAAjnjng");
	var mask_9_graphics_117 = new cjs.Graphics().p("Ao7I7QjsjsAAlPQAAlODsjtQDtjsFOAAQFPAADsDsQDtDtAAFOQAAFPjtDsQjsDtlPAAQlOAAjtjtg");
	var mask_9_graphics_118 = new cjs.Graphics().p("ApKJLQjzjzAAlYQAAlWDzj0QD0jzFWAAQFYAADzDzQDzD0AAFWQAAFYjzDzQjzDzlYAAQlWAAj0jzg");
	var mask_9_graphics_119 = new cjs.Graphics().p("ApZJZQj5j5AAlgQAAlfD5j6QD6j5FfAAQFhAAD4D5QD6D6AAFfQAAFgj6D5Qj4D6lhAAQlfAAj6j6g");
	var mask_9_graphics_120 = new cjs.Graphics().p("ApoJoQj/j/AAlpQAAlpD/kAQD/j+FpAAQFqAAD/D+QD/EAAAFpQAAFpj/D/Qj/EBlqAAQlpAAj/kBg");
	var mask_9_graphics_121 = new cjs.Graphics().p("Ap4J4QkFkGAAlyQAAlxEFkHQEHkFFxAAQFyAAEGEFQEGEHAAFxQAAFykGEGQkGEGlyAAQlxAAkHkGg");
	var mask_9_graphics_122 = new cjs.Graphics().p("AqHKHQkLkMAAl7QAAl6ELkMQENkMF6AAQF7AAEMEMQEMEMAAF6QAAF7kMEMQkMEMl7AAQl6AAkNkMg");
	var mask_9_graphics_123 = new cjs.Graphics().p("AqWKWQkSkSAAmEQAAmDESkTQETkSGDAAQGEAAESESQETETAAGDQAAGEkTESQkSETmEAAQmDAAkTkTg");
	var mask_9_graphics_124 = new cjs.Graphics().p("AqlKlQkYkYAAmNQAAmMEYkZQEZkYGMAAQGNAAEYEYQEZEZAAGMQAAGNkZEYQkYEZmNAAQmMAAkZkZg");
	var mask_9_graphics_125 = new cjs.Graphics().p("Aq0K1QkekgAAmVQAAmVEekfQEfkeGVAAQGWAAEeEeQEgEfgBGVQABGVkgEgQkeEemWAAQmVAAkfkeg");
	var mask_9_graphics_126 = new cjs.Graphics().p("ArDLDQklkkAAmfQAAmeElklQElklGeAAQGfAAEkElQEmElAAGeQAAGfkmEkQkkEmmfAAQmeAAklkmg");
	var mask_9_graphics_127 = new cjs.Graphics().p("ArTLTQkqkrAAmoQAAmmEqksQEskrGnAAQGnAAErErQEsEsAAGmQAAGoksErQkrErmnAAQmnAAkskrg");
	var mask_9_graphics_128 = new cjs.Graphics().p("AriLiQkxkxAAmxQAAmvExkyQEykyGwAAQGwAAEyEyQEyEyAAGvQAAGxkyExQkyEymwAAQmwAAkykyg");
	var mask_9_graphics_129 = new cjs.Graphics().p("ArxLxQk3k4AAm5QAAm4E3k5QE5k3G4AAQG5AAE4E3QE4E5AAG4QAAG5k4E4Qk4E4m5AAQm4AAk5k4g");
	var mask_9_graphics_130 = new cjs.Graphics().p("AsAMAQk+k+AAnCQAAnBE+k/QE/k+HBAAQHCAAE+E+QE/E/AAHBQAAHCk/E+Qk+E/nCAAQnBAAk/k/g");
	var mask_9_graphics_131 = new cjs.Graphics().p("AsPMPQlElEAAnLQAAnKFElFQFFlEHKAAQHLAAFEFEQFFFFAAHKQAAHLlFFEQlEFFnLAAQnKAAlFlFg");
	var mask_9_graphics_132 = new cjs.Graphics().p("AseMeQlKlKAAnUQAAnTFKlLQFLlKHTgBQHUABFKFKQFLFLAAHTQAAHUlLFKQlKFLnUAAQnTAAlLlLg");
	var mask_9_graphics_133 = new cjs.Graphics().p("AstMuQlRlRAAndQAAncFRlRQFRlRHcAAQHdAAFQFRQFSFRAAHcQAAHdlSFRQlQFRndAAQncAAlRlRg");
	var mask_9_graphics_134 = new cjs.Graphics().p("As9M9QlWlXAAnmQAAnkFWlYQFYlXHlAAQHmAAFWFXQFYFYAAHkQAAHmlYFXQlWFXnmAAQnlAAlYlXg");
	var mask_9_graphics_135 = new cjs.Graphics().p("AtMNMQldldAAnvQAAntFdleQFeleHuAAQHuAAFeFeQFeFeAAHtQAAHvleFdQleFenuAAQnuAAleleg");
	var mask_9_graphics_136 = new cjs.Graphics().p("AtbNbQljljAAn4QAAn2FjllQFkljH3AAQH3AAFkFjQFkFlAAH2QAAH4lkFjQlkFkn3AAQn3AAlklkg");
	var mask_9_graphics_137 = new cjs.Graphics().p("AtqNqQlqlqAAoAQAAn/FqlrQFrlqH/AAQIAAAFqFqQFrFrAAH/QAAIAlrFqQlqFqoAAAQn/AAlrlqg");
	var mask_9_graphics_138 = new cjs.Graphics().p("At5N5QlwlwAAoJQAAoIFwlxQFxlwIIAAQIJAAFwFwQFxFxAAIIQAAIJlxFwQlwFxoJAAQoIAAlxlxg");
	var mask_9_graphics_139 = new cjs.Graphics().p("AuIOIQl2l2AAoSQAAoRF2l3QF3l2IRAAQISAAF2F2QF3F3AAIRQAAISl3F2Ql2F3oSAAQoRAAl3l3g");
	var mask_9_graphics_140 = new cjs.Graphics().p("AuXOYQl9l9AAobQAAoaF9l9QF9l9IaAAQIbAAF8F9QF+F9AAIaQAAIbl+F9Ql8F9obAAQoaAAl9l9g");
	var mask_9_graphics_141 = new cjs.Graphics().p("AunOnQmCmDAAokQAAojGCmDQGEmDIjAAQIkAAGCGDQGEGDAAIjQAAIkmEGDQmCGDokAAQojAAmEmDg");
	var mask_9_graphics_142 = new cjs.Graphics().p("Au2O2QmJmJAAotQAAorGJmLQGKmJIsAAQItAAGJGJQGKGLAAIrQAAItmKGJQmJGKotAAQosAAmKmKg");
	var mask_9_graphics_143 = new cjs.Graphics().p("AvFPFQmPmPAAo2QAAo0GPmQQGQmQI1AAQI1AAGPGQQGRGQAAI0QAAI2mRGPQmPGQo1AAQo1AAmQmQg");
	var mask_9_graphics_144 = new cjs.Graphics().p("AvUPUQmVmWAAo+QAAo9GVmXQGXmVI9AAQI+AAGWGVQGWGXAAI9QAAI+mWGWQmWGWo+AAQo9AAmXmWg");
	var mask_9_graphics_145 = new cjs.Graphics().p("AvjPjQmcmcAApHQAApGGcmdQGdmcJGAAQJHAAGcGcQGdGdAAJGQAAJHmdGcQmcGdpHAAQpGAAmdmdg");
	var mask_9_graphics_146 = new cjs.Graphics().p("AvyPyQmimiAApQQAApPGimjQGjmiJPAAQJQAAGiGiQGjGjAAJPQAAJQmjGiQmiGjpQAAQpPAAmjmjg");
	var mask_9_graphics_147 = new cjs.Graphics().p("AwCQBQmomoAApZQAApYGompQGqmpJYAAQJZAAGoGpQGqGpAAJYQAAJZmqGoQmoGqpZAAQpYAAmqmqg");
	var mask_9_graphics_148 = new cjs.Graphics().p("AwRQRQmumvAApiQAAphGumvQGwmvJhAAQJhAAGvGvQGwGvAAJhQAAJimwGvQmvGvphAAQphAAmwmvg");
	var mask_9_graphics_149 = new cjs.Graphics().p("AwgQgQm0m1gBprQABpqG0m1QG2m2JqAAQJqAAG1G2QG3G1AAJqQAAJrm3G1Qm1G1pqAAQpqAAm2m1g");
	var mask_9_graphics_150 = new cjs.Graphics().p("AwvQvQm7m7AAp0QAApyG7m9QG8m7JzAAQJ0AAG7G7QG8G9AAJyQAAJ0m8G7Qm7G8p0AAQpzAAm8m8g");
	var mask_9_graphics_151 = new cjs.Graphics().p("Aw+Q+QnBnBAAp9QAAp7HBnDQHCnBJ8AAQJ8AAHCHBQHCHDAAJ7QAAJ9nCHBQnCHCp8AAQp8AAnCnCg");
	var mask_9_graphics_152 = new cjs.Graphics().p("AxNRNQnInIAAqFQAAqEHInJQHJnIKEAAQKFAAHIHIQHJHJAAKEQAAKFnJHIQnIHJqFAAQqEAAnJnJg");
	var mask_9_graphics_153 = new cjs.Graphics().p("AxcRcQnOnOAAqOQAAqNHOnPQHPnOKNAAQKOAAHOHOQHPHPAAKNQAAKOnPHOQnOHPqOAAQqNAAnPnPg");
	var mask_9_graphics_154 = new cjs.Graphics().p("AxsRsQnUnVAAqXQAAqWHUnVQHVnVKXAAQKXAAHUHVQHWHVAAKWQAAKXnWHVQnUHVqXAAQqXAAnVnVg");
	var mask_9_graphics_155 = new cjs.Graphics().p("Ax7R6QnanaAAqgQAAqeHancQHbnbKgAAQKfAAHbHbQHcHcAAKeQAAKgncHaQnbHcqfAAQqgAAnbncg");
	var mask_9_graphics_156 = new cjs.Graphics().p("AyKSKQngnhgBqpQABqoHgniQHingKoAAQKoAAHhHgQHjHiAAKoQAAKpnjHhQnhHhqoAAQqoAAninhg");
	var mask_9_graphics_157 = new cjs.Graphics().p("AyZSZQnnnnAAqyQAAqxHnnoQHonnKxAAQKyAAHnHnQHoHoAAKxQAAKynoHnQnnHoqyAAQqxAAnonog");
	var mask_9_graphics_158 = new cjs.Graphics().p("AyoSoQntntAAq7QAAq5HtnvQHuntK6AAQK7AAHtHtQHuHvAAK5QAAK7nuHtQntHuq7AAQq6AAnunug");
	var mask_9_graphics_159 = new cjs.Graphics().p("Ay3S3Qn0n0AArDQAArCH0n1QH0n0LDAAQLDAAHzH0QH1H1ABLCQgBLDn1H0QnzH0rDABQrDgBn0n0g");
	var mask_9_graphics_160 = new cjs.Graphics().p("AzHTHQn5n7AArMQAArLH5n7QH7n6LMAAQLMAAH6H6QH7H7AALLQAALMn7H7Qn6H6rMAAQrMAAn7n6g");
	var mask_9_graphics_161 = new cjs.Graphics().p("AzWTWQn/oBAArVQAArUH/oCQICn/LUAAQLVAAIAH/QICICAALUQAALVoCIBQoAIBrVAAQrUAAoCoBg");
	var mask_9_graphics_162 = new cjs.Graphics().p("AzlTkQoGoFAArfQAArdIGoHQIIoHLdAAQLeAAIGIHQIIIHAALdQAALfoIIFQoGIIreAAQrdAAoIoIg");
	var mask_9_graphics_163 = new cjs.Graphics().p("Az0T0QoMoNAArnQAArmIMoOQIOoMLmAAQLnAAIMIMQIOIOAALmQAALnoOINQoMINrnAAQrmAAoOoNg");
	var mask_9_graphics_164 = new cjs.Graphics().p("A0EUDQoSoTAArwQAArvISoUQIVoTLvAAQLvAAIUITQIUIUAALvQAALwoUITQoUIUrvAAQrvAAoVoUg");
	var mask_9_graphics_165 = new cjs.Graphics().p("A0SUSQoZoZAAr5QAAr4IZoaQIaoZL4AAQL4AAIZIZQIbIaAAL4QAAL5obIZQoZIar4AAQr4AAoaoag");
	var mask_9_graphics_166 = new cjs.Graphics().p("A0iUhQoeofAAsCQAAsAIeohQIhogMBABQMCgBIfIgQIgIhAAMAQAAMCogIfQofIhsCgBQsBABohohg");
	var mask_9_graphics_167 = new cjs.Graphics().p("A0xUxQolonAAsKQAAsJIlonQIoomMJAAQMKAAImImQInInAAMJQAAMKonInQomImsKAAQsJAAooomg");
	var mask_9_graphics_168 = new cjs.Graphics().p("A1AU/QorosAAsTQAAsSIrotQItotMTABQMTgBIsItQItItAAMSQAAMTotIsQosIusTgBQsTABotoug");
	var mask_9_graphics_169 = new cjs.Graphics().p("A1PVOQoyoyAAscQAAsbIyo0QI0oyMbAAQMcAAIyIyQI0I0AAMbQAAMco0IyQoyI0scAAQsbAAo0o0g");
	var mask_9_graphics_170 = new cjs.Graphics().p("A1eVeQo4o5AAslQAAsjI4o7QI5o4MlAAQMlAAI4I4QI6I7AAMjQAAMlo6I5Qo4I5slAAQslAAo5o5g");
	var mask_9_graphics_171 = new cjs.Graphics().p("A1tVtQo/o/ABsuQgBstI/pAQJAo+MtAAQMuAAI+I+QJAJAAAMtQAAMupAI/Qo+JAsugBQstABpApAg");
	var mask_9_graphics_172 = new cjs.Graphics().p("A18V8QpFpFAAs3QAAs1JFpHQJGpFM2AAQM2AAJGJFQJGJHAAM1QAAM3pGJFQpGJGs2AAQs2AApGpGg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(108).to({graphics:mask_9_graphics_108,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_109,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_110,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_111,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_112,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_113,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_114,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_115,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_116,x:30.625,y:-169.55}).wait(1).to({graphics:mask_9_graphics_117,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_118,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_119,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_120,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_121,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_122,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_123,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_124,x:30.625,y:-169.55}).wait(1).to({graphics:mask_9_graphics_125,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_126,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_127,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_128,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_129,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_130,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_131,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_132,x:30.625,y:-169.55}).wait(1).to({graphics:mask_9_graphics_133,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_134,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_135,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_136,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_137,x:30.6,y:-169.55}).wait(1).to({graphics:mask_9_graphics_138,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_139,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_140,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_141,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_142,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_143,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_144,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_145,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_146,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_147,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_148,x:30.65,y:-169.575}).wait(1).to({graphics:mask_9_graphics_149,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_150,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_151,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_152,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_153,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_154,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_155,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_156,x:30.65,y:-169.575}).wait(1).to({graphics:mask_9_graphics_157,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_158,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_159,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_160,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_161,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_162,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_163,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_164,x:30.65,y:-169.575}).wait(1).to({graphics:mask_9_graphics_165,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_166,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_167,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_168,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_169,x:30.625,y:-169.575}).wait(1).to({graphics:mask_9_graphics_170,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_171,x:30.65,y:-169.6}).wait(1).to({graphics:mask_9_graphics_172,x:30.65,y:-169.6}).wait(23));

	// Layer_19
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AmXGlQABgKAJgFIAQgIQGQkQDGmSQAag2A4gkQAGgEBmgzQAGA+gTAuQiGEyjqD2QgUAVgTAJIloCUQgLAFgLAAIgMgBg");
	this.shape_13.setTransform(-45.5687,-63.3804);
	this.shape_13._off = true;

	var maskedShapeInstanceList = [this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(108).to({_off:false},0).wait(87));

	// Layer_18 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_56 = new cjs.Graphics().p("Al6FJQiciIAAjBQAAjACciIQCdiIDdAAQDeAACcCIQCeCIAADAQAADBieCIQicCIjeAAQjdAAidiIg");
	var mask_10_graphics_57 = new cjs.Graphics().p("AmPGaQiliqAAjwQAAjvClirQCmipDpAAQDqAAClCpQCmCrAADvQAADwimCqQilCqjqAAQjpAAimiqg");
	var mask_10_graphics_58 = new cjs.Graphics().p("AmjHrQiujLAAkgQAAkfCujMQCujLD1AAQD2AACuDLQCuDMAAEfQAAEgiuDLQiuDNj2gBQj1ABiujNg");
	var mask_10_graphics_59 = new cjs.Graphics().p("Am4I9Qi2jtAAlQQAAlPC2juQC3jtEBAAQECAAC2DtQC3DuAAFPQAAFQi3DtQi2DukCAAQkBAAi3jug");
	var mask_10_graphics_60 = new cjs.Graphics().p("AnMKOQi/kPAAl/QAAl/C/kQQC/kOENAAQEOAAC/EOQC/EQAAF/QAAF/i/EPQi/EQkOAAQkNAAi/kQg");
	var mask_10_graphics_61 = new cjs.Graphics().p("AnhLgQjHkxAAmvQAAmuDHkyQDIkwEZAAQEaAADHEwQDIEyAAGuQAAGvjIExQjHExkaAAQkZAAjIkxg");
	var mask_10_graphics_62 = new cjs.Graphics().p("An1MxQjQlSAAnfQAAneDQlTQDQlSElgBQEnABDPFSQDQFTAAHeQAAHfjQFSQjPFTknAAQklAAjQlTg");
	var mask_10_graphics_63 = new cjs.Graphics().p("AoKOCQjYl0AAoOQAAoODYl1QDZl0ExAAQEzAADYF0QDZF1AAIOQAAIOjZF0QjYF2kzAAQkxAAjZl2g");
	var mask_10_graphics_64 = new cjs.Graphics().p("AofPUQjhmWAAo+QAAo9DhmYQDhmVE+AAQE/AADgGVQDiGYAAI9QAAI+jiGWQjgGXk/AAQk+AAjhmXg");
	var mask_10_graphics_65 = new cjs.Graphics().p("AozQlQjqm3AApuQAAptDqm5QDqm3FJAAQFLAADpG3QDqG5AAJtQAAJujqG3QjpG5lLAAQlJAAjqm5g");
	var mask_10_graphics_66 = new cjs.Graphics().p("ApIR3QjynZAAqeQAAqdDynbQDznYFVAAQFXAADyHYQDyHbAAKdQAAKejyHZQjyHalXAAQlVAAjznag");
	var mask_10_graphics_67 = new cjs.Graphics().p("ApdTIQj6n6AArOQAArMD6n9QD8n7FhAAQFjAAD6H7QD7H9AALMQAALOj7H6Qj6H9ljAAQlhAAj8n9g");
	var mask_10_graphics_68 = new cjs.Graphics().p("ApyUZQkCocAAr9QAAr8ECofQEEocFuAAQFvAAECIcQEEIfAAL8QAAL9kEIcQkCIflvAAQluAAkEofg");
	var mask_10_graphics_69 = new cjs.Graphics().p("AqGVrQkLo+AAstQAAssELpAQEMo/F6AAQF7AAELI/QEMJAAAMsQAAMtkMI+QkLJBl7AAQl6AAkMpBg");
	var mask_10_graphics_70 = new cjs.Graphics().p("AqbW8QkTpfAAtdQAAtcETpiQEVpgGGAAQGHAAEUJgQEUJiAANcQAANdkUJfQkUJjmHAAQmGAAkVpjg");
	var mask_10_graphics_71 = new cjs.Graphics().p("AqvYOQkcqCAAuMQAAuLEcqEQEdqCGSAAQGTAAEcKCQEdKEAAOLQAAOMkdKCQkcKEmTAAQmSAAkdqEg");
	var mask_10_graphics_72 = new cjs.Graphics().p("ArEZfQklqjAAu8QAAu7ElqmQEmqjGeAAQGgAAEkKjQElKmABO7QgBO8klKjQkkKmmgAAQmeAAkmqmg");
	var mask_10_graphics_73 = new cjs.Graphics().p("ArZaxQktrGAAvrQAAvqEtrIQEvrGGqAAQGrAAEtLGQEvLIAAPqQAAPrkvLGQktLImrAAQmqAAkvrIg");
	var mask_10_graphics_74 = new cjs.Graphics().p("ArtcCQk2rnAAwbQAAwbE2rpQE3rnG2AAQG4AAE1LnQE3LpAAQbQAAQbk3LnQk1Lqm4AAQm2AAk3rqg");
	var mask_10_graphics_75 = new cjs.Graphics().p("AsBdUQk/sJAAxLQAAxKE/sMQE+sIHDAAQHDAAE/MIQE/MMAARKQAARLk/MJQk/MLnDAAQnDAAk+sLg");
	var mask_10_graphics_76 = new cjs.Graphics().p("AsWelQlHsqAAx7QAAx6FHstQFHsqHPAAQHQAAFHMqQFHMtAAR6QAAR7lHMqQlHMtnQAAQnPAAlHstg");
	var mask_10_graphics_77 = new cjs.Graphics().p("Asrf2QlPtMAAyqQAAyqFPtPQFRtLHaAAQHcAAFPNLQFQNPAASqQAASqlQNMQlPNPncAAQnaAAlRtPg");
	var mask_10_graphics_78 = new cjs.Graphics().p("EgM/AhIQlYtuAAzaQAAzZFYtxQFZtuHmAAQHoAAFYNuQFYNxAATZQAATalYNuQlYNxnoAAQnmAAlZtxg");
	var mask_10_graphics_79 = new cjs.Graphics().p("EgNUAiZQlguPgB0KQAB0JFguTQFhuPHzAAQH0AAFgOPQFhOTABUJQgBUKlhOPQlgOTn0AAQnyAAliuTg");
	var mask_10_graphics_80 = new cjs.Graphics().p("EgPOAiZQmUuPAA0KQAA0JGUuTQGUuPI6AAQI8AAGTOPQGUOTAAUJQAAUKmUOPQmTOTo8AAQo6AAmUuTg");
	var mask_10_graphics_81 = new cjs.Graphics().p("EgRJAiZQnGuPAA0KQAA0JHGuTQHHuPKCAAQKEAAHFOPQHHOTAAUJQAAUKnHOPQnFOTqEAAQqCAAnHuTg");
	var mask_10_graphics_82 = new cjs.Graphics().p("EgTEAiZQn4uPAA0KQAA0JH4uTQH6uPLKAAQLMAAH4OPQH5OTAAUJQAAUKn5OPQn4OTrMAAQrKAAn6uTg");
	var mask_10_graphics_83 = new cjs.Graphics().p("EgU+AiZQoruPgB0KQAB0JIruTQIsuPMSAAQMUAAIpOPQItOTABUJQgBUKotOPQopOTsUAAQsSAAosuTg");
	var mask_10_graphics_84 = new cjs.Graphics().p("EgW5AiZQpeuPAA0KQAA0JJeuTQJguPNZAAQNcAAJcOPQJgOTAAUJQAAUKpgOPQpcOTtcAAQtZAApguTg");
	var mask_10_graphics_85 = new cjs.Graphics().p("EgY0AiZQqQuPAA0KQAA0JKQuTQKTuPOhAAQOjAAKPOPQKTOTAAUJQAAUKqTOPQqPOTujAAQuhAAqTuTg");
	var mask_10_graphics_86 = new cjs.Graphics().p("EgauAiZQrDuPAA0KQAA0JLDuTQLFuPPpAAQPrAALCOPQLFOTAAUJQAAUKrFOPQrCOTvrAAQvpAArFuTg");
	var mask_10_graphics_87 = new cjs.Graphics().p("EgcpAiZQr1uPgB0KQAB0JL1uTQL4uPQxAAQQzAAL0OPQL5OTAAUJQAAUKr5OPQr0OTwzAAQwxAAr4uTg");
	var mask_10_graphics_88 = new cjs.Graphics().p("EgejAiZQspuPAA0KQAA0JMpuTQMquPR5AAQR7AAMnOPQMrOTAAUJQAAUKsrOPQsnOTx7AAQx5AAsquTg");
	var mask_10_graphics_89 = new cjs.Graphics().p("EggeAiZQtbuPAA0KQAA0JNbuTQNeuPTAAAQTDAANaOPQNdOTAAUJQAAUKtdOPQtaOTzDAAQzAAAteuTg");
	var mask_10_graphics_90 = new cjs.Graphics().p("EgiZAiZQuNuPAA0KQAA0JONuTQORuPUIAAQULAAOMOPQOQOTAAUJQAAUKuQOPQuMOT0LAAQ0IAAuRuTg");
	var mask_10_graphics_91 = new cjs.Graphics().p("EgkTAiZQvBuPAA0KQAA0JPBuTQPDuPVQAAQVTAAO+OPQPEOTAAUJQAAUKvEOPQu+OT1TAAQ1QAAvDuTg");
	var mask_10_graphics_92 = new cjs.Graphics().p("EgmOAiZQvzuPAA0KQAA0JPzuTQP2uPWYAAQWaAAPyOPQP2OTAAUJQAAUKv2OPQvyOT2aAAQ2YAAv2uTg");
	var mask_10_graphics_93 = new cjs.Graphics().p("EgoIAiZQwmuPAA0KQAA0JQmuTQQouPXgAAQXiAAQkOPQQpOTAAUJQAAUKwpOPQwkOT3iAAQ3gAAwouTg");
	var mask_10_graphics_94 = new cjs.Graphics().p("EgqDAiZQxYuPAA0KQAA0JRYuTQRcuPYnAAQYqAARXOPQRbOTAAUJQAAUKxbOPQxXOT4qAAQ4nAAxcuTg");
	var mask_10_graphics_95 = new cjs.Graphics().p("Egr+AiZQyLuPAA0KQAA0JSLuTQSPuPZvAAQZyAASJOPQSPOTAAUJQAAUKyPOPQyJOT5yAAQ5vAAyPuTg");
	var mask_10_graphics_96 = new cjs.Graphics().p("Egt4AiZQy+uPAA0KQAA0JS+uTQTBuPa3AAQa6AAS8OPQTBOTAAUJQAAUKzBOPQy8OT66AAQ63AAzBuTg");
	var mask_10_graphics_97 = new cjs.Graphics().p("EgvzAiZQzwuPAA0KQAA0JTwuTQT0uPb/AAQcCAATuOPQT0OTAAUJQAAUKz0OPQzuOT8CAAQ7/AAz0uTg");
	var mask_10_graphics_98 = new cjs.Graphics().p("EgxtAiZQ0juPAA0KQAA0JUjuTQUmuPdHAAQdJAAUiOPQUmOTAAUJQAAUK0mOPQ0iOT9JAAQ9HAA0muTg");
	var mask_10_graphics_99 = new cjs.Graphics().p("EgzoAiZQ1WuPAA0KQAA0JVWuTQVauPeOAAQeRAAVUOPQVaOTAAUJQAAUK1aOPQ1UOT+RAAQ+OAA1auTg");
	var mask_10_graphics_100 = new cjs.Graphics().p("Eg1jAiZQ2IuPAA0KQAA0JWIuTQWNuPfWAAQfZAAWGOPQWNOTAAUJQAAUK2NOPQ2GOT/ZAAQ/WAA2NuTg");
	var mask_10_graphics_101 = new cjs.Graphics().p("Eg3dAiZQ27uPAA0KQAA0JW7uTUAW/gOPAgeAAAUAghAAAAW5AOPQW/OTAAUJQAAUK2/OPUgW5AOTgghAAAUggeAAAgW/gOTg");
	var mask_10_graphics_102 = new cjs.Graphics().p("Eg5YAiZQ3tuPAA0KQAA0JXtuTUAXzgOPAhlAAAUAhpAAAAXrAOPQXzOTgBUJQABUK3zOPUgXrAOTghpAAAUghlAAAgXzgOTg");
	var mask_10_graphics_103 = new cjs.Graphics().p("Eg7SAiZQ4huPAA0KQAA0JYhuTUAYkgOPAiuAAAUAixAAAAYeAOPQYlOTAAUJQAAUK4lOPUgYeAOTgixAAAUgiuAAAgYkgOTg");
	var mask_10_graphics_104 = new cjs.Graphics().p("Eg9NAiZQ5TuPAA0KQAA0JZTuTUAZYgOPAj1AAAUAj5AAAAZQAOPQZYOTAAUJQAAUK5YOPUgZQAOTgj5AAAUgj1AAAgZYgOTg");
	var mask_10_graphics_105 = new cjs.Graphics().p("Eg/IAiZQ6FuPAA0KQAA0JaFuTUAaLgOPAk9AAAUAlAAAAAaEAOPQaKOTAAUJQAAUK6KOPUgaEAOTglAAAAUgk9AAAgaLgOTg");
	var mask_10_graphics_106 = new cjs.Graphics().p("EhBCAiZQ64uPAA0KQAA0Ja4uTUAa9gOPAmFAAAUAmJAAAAa1AOPQa9OTAAUJQAAUK69OPUga1AOTgmJAAAUgmFAAAga9gOTg");
	var mask_10_graphics_107 = new cjs.Graphics().p("EhC9AiZQ7ruPAA0KQAA0JbruTUAbwgOPAnNAAAUAnQAAAAboAOPQbxOTAAUJQAAUK7xOPUgboAOTgnQAAAUgnNAAAgbwgOTg");
	var mask_10_graphics_108 = new cjs.Graphics().p("EhE3AiZQ8euPAA0KQAA0JceuTUAcjgOPAoUAAAUAoYAAAAcbAOPQcjOTAAUJQAAUK8jOPUgcbAOTgoYAAAUgoUAAAgcjgOTg");
	var mask_10_graphics_109 = new cjs.Graphics().p("EhGyAiZQ9QuPAA0KQAA0JdQuTUAdWgOPApcAAAUApgAAAAdNAOPQdWOTAAUJQAAUK9WOPUgdNAOTgpgAAAUgpcAAAgdWgOTg");
	var mask_10_graphics_110 = new cjs.Graphics().p("EhItAiZQ+CuPAA0KQAA0JeCuTUAeJgOPAqkAAAUAqoAAAAeAAOPQeIOTAAUJQAAUK+IOPUgeAAOTgqoAAAUgqkAAAgeJgOTg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_10_graphics_56,x:-515.55,y:-61.5}).wait(1).to({graphics:mask_10_graphics_57,x:-519.325,y:-63.875}).wait(1).to({graphics:mask_10_graphics_58,x:-523.125,y:-66.3}).wait(1).to({graphics:mask_10_graphics_59,x:-526.9,y:-68.675}).wait(1).to({graphics:mask_10_graphics_60,x:-530.7,y:-71.05}).wait(1).to({graphics:mask_10_graphics_61,x:-534.475,y:-73.475}).wait(1).to({graphics:mask_10_graphics_62,x:-538.275,y:-75.85}).wait(1).to({graphics:mask_10_graphics_63,x:-542.05,y:-78.225}).wait(1).to({graphics:mask_10_graphics_64,x:-545.825,y:-80.625}).wait(1).to({graphics:mask_10_graphics_65,x:-549.625,y:-83.025}).wait(1).to({graphics:mask_10_graphics_66,x:-553.4,y:-85.4}).wait(1).to({graphics:mask_10_graphics_67,x:-557.2,y:-87.8}).wait(1).to({graphics:mask_10_graphics_68,x:-560.95,y:-90.2}).wait(1).to({graphics:mask_10_graphics_69,x:-564.75,y:-92.6}).wait(1).to({graphics:mask_10_graphics_70,x:-568.525,y:-94.975}).wait(1).to({graphics:mask_10_graphics_71,x:-572.325,y:-97.375}).wait(1).to({graphics:mask_10_graphics_72,x:-576.1,y:-99.775}).wait(1).to({graphics:mask_10_graphics_73,x:-579.875,y:-102.15}).wait(1).to({graphics:mask_10_graphics_74,x:-583.675,y:-104.525}).wait(1).to({graphics:mask_10_graphics_75,x:-587.45,y:-106.95}).wait(1).to({graphics:mask_10_graphics_76,x:-591.25,y:-109.325}).wait(1).to({graphics:mask_10_graphics_77,x:-595.025,y:-111.7}).wait(1).to({graphics:mask_10_graphics_78,x:-598.825,y:-114.125}).wait(1).to({graphics:mask_10_graphics_79,x:-602.6,y:-116.5}).wait(1).to({graphics:mask_10_graphics_80,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_81,x:-602.6,y:-116.5}).wait(1).to({graphics:mask_10_graphics_82,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_83,x:-602.6,y:-116.5}).wait(1).to({graphics:mask_10_graphics_84,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_85,x:-602.6,y:-116.5}).wait(1).to({graphics:mask_10_graphics_86,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_87,x:-602.6,y:-116.5}).wait(1).to({graphics:mask_10_graphics_88,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_89,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_90,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_91,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_92,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_93,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_94,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_95,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_96,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_97,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_98,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_99,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_100,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_101,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_102,x:-602.65,y:-116.5}).wait(1).to({graphics:mask_10_graphics_103,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_104,x:-602.65,y:-116.5}).wait(1).to({graphics:mask_10_graphics_105,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_106,x:-602.65,y:-116.5}).wait(1).to({graphics:mask_10_graphics_107,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_108,x:-602.65,y:-116.5}).wait(1).to({graphics:mask_10_graphics_109,x:-602.625,y:-116.5}).wait(1).to({graphics:mask_10_graphics_110,x:-602.65,y:-116.5}).wait(85));

	// Layer_17
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0A4966").s().p("AgJAGQgDgDADgEIAGgHIABAAIAAAAIANAKIAAABQgIAGgFAAQgEAAgDgDg");
	this.shape_14.setTransform(7.4035,-41.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#074E70").s().p("AgJACQAJgLAKAKQgGAEgEAAQgFAAgEgDg");
	this.shape_15.setTransform(7.1,-138.1614);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AJwcRQA0gZAZgOQB2hCBJgiQBrgyBhgYQDPg0BJjqQAahSANhoQAIhAAIh8QACgigMgLQgLgJgiACQllASllDXQiIBShPAoQh6A/hrAfQk7BclGgUQk2gSlCh3QgGgCgCgCQgEgDADgHQDJAXDZgiQAigFAtAEQDeAXCOhgQCOhfA+jXQASg9AMhMQAIgzAJhXQADgbgJgJQgJgIgbABQiGAFieAaQhzATiuAoQijAlhsAKQiVAPh8gZQkmg7jQjSQiritiJkxIAHgEIBNAVIBMAUQDNAyCrg4QCrg4CFiiQBviGAbipQAXiWgpi5QgoizhkicQhjibiRhuQiVhxiygyQi7g1jHAWQjGAXisBbQimBYh6CPQh6COhACyQhCC3AEDIQANK4FaI6QBFBxBSBsIhPgqQAEgWgVgNQgIgFgHgHIgFgFIgFgHIgGgMQgCgEAAgFQgagCgLgKQgLgKgJgNQgDgFgIgEIgEgCQgIgEgKAAQgRAHgYAFQg2AKgsgDIAHgRQAQgngIgnIgBgEQgEgWgQgiIgKgUQiFkKhCkDQgqiiggjxQgLhQABhuIAEi/QABhPAahbQAThEAohgQBTjGCQiaQCzi/D4hfQDehVD9AMQF8ARErD6QFSEcBHHJQAbCtgmClQgkChhdCDQheCFiJBTQiPBYisAXQgeAEgtABIhOADQAFARANARIAXAdQBzCTCDBUQCSBcCtASQBsAMB/gQQBhgMCIghQGChcFRACQAeAAAKALQAJAKAAAdQAAC1geChQgaCJgyBrQg6B6hfBeQBFgGBIgSQA4gNBJgYQBjggB8hFQBHgnCMhUQEqiqEngkQBzgOCzgFQAdgBALALQAJALgBAdQgDDbgKBfQgRCug0CIQAQgCAOgJIAVgQQBthMBshsQBWhVBph9QCQirAsgyQBth7BehVQDejJELgqIAwgKQAKAFAKgHICHgCQARAAAGADQAKAFAAARQABDogMCHQgRDKg1CgQgQAvgcA4IgdA4IgXArIgBAAIAAAAIgGAHQgEAFADADQADADAEAAQAGAAAIgHIABAAIC5hEIAegLIgIAIIgZAZQgCACgFAAQgFAAgDADQgCACAAAFQgFAAgFACQhIAYhEAaQhPAcg4AuQgMALgXANIgUAAQhfgHhUAVIgZAHQAfgTAcgVQDyiwA9k2QARhWAJhpQAGhIAEh3QABgggNgIQgKgHgeAFQiBAUh4BCQhrA7hpBiQhHBEhUBeQghAlhyCGQiJChheBeQiFCGiCBZQjiCbkdBUQjzBIk6AbQAZgOA0gZgEAliAW+IgCAFIgKAAIAMgFg");
	this.shape_16.setTransform(-281.9417,-168.5185);

	var maskedShapeInstanceList = [this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},56).wait(139));

	// Layer_29 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_78 = new cjs.Graphics().p("AvIPJQmSmSABo3QgBo3GSmRQGSmSI2AAQI4AAGRGSQGRGRAAI3QAAI3mRGSQmRGSo4gBQo2ABmSmSg");
	var mask_11_graphics_79 = new cjs.Graphics().p("AwwPjQm9mcAApHQAApGG9mcQG9mdJzAAQJ1AAG8GdQG9GcAAJGQAAJHm9GcQm8Gcp1AAQpzAAm9mcg");
	var mask_11_graphics_80 = new cjs.Graphics().p("AyYP9QnomnAApWQAApVHomoQHommKwgBQKxABHoGmQHoGoAAJVQAAJWnoGnQnoGoqxgBQqwABnomog");
	var mask_11_graphics_81 = new cjs.Graphics().p("A0AQXQoUmxABpmQgBplIUmyQISmyLuAAQLuAAIUGyQITGyAAJlQAAJmoTGxQoUGyruAAQruAAoSmyg");
	var mask_11_graphics_82 = new cjs.Graphics().p("A1pQxQo9m8gBp1QABp0I9m9QI/m9MqAAQMsAAI9G9QI/G9AAJ0QAAJ1o/G8Qo9G9ssAAQsqAAo/m9g");
	var mask_11_graphics_83 = new cjs.Graphics().p("A3QRMQpqnIAAqEQAAqDJqnIQJonINoABQNogBJqHIQJpHIAAKDQAAKEppHIQpqHItoAAQtoAAponIg");
	var mask_11_graphics_84 = new cjs.Graphics().p("A45RmQqUnSAAqUQAAqSKUnTQKVnSOkAAQOlAAKUHSQKVHTAAKSQAAKUqVHSQqUHTulAAQukAAqVnTg");
	var mask_11_graphics_85 = new cjs.Graphics().p("A6hSBQrAneAAqjQAAqiLAndQK/nePiABQPigBLAHeQK/HdAAKiQAAKjq/HeQrAHcviABQvigBq/ncg");
	var mask_11_graphics_86 = new cjs.Graphics().p("A8JSbQrrnpAAqyQAAqxLrnoQLrnoQeAAQQgAALqHoQLrHoAAKxQAAKyrrHpQrqHowgAAQweAArrnog");
	var mask_11_graphics_87 = new cjs.Graphics().p("A9yS1QsVn0AArBQAArAMVnzQMXn0RbAAQRcAAMWH0QMWHzAALAQAALBsWH0QsWHzxcAAQxbAAsXnzg");
	var mask_11_graphics_88 = new cjs.Graphics().p("A/ZTPQtBn+AArRQAArQNBn+QNBn+SYAAQSZAANBH+QNBH+AALQQAALRtBH+QtBH+yZAAQyYAAtBn+g");
	var mask_11_graphics_89 = new cjs.Graphics().p("EghCATpQtsoJABrgQgBrfNsoJQNsoJTWAAQTWAANsIJQNsIJAALfQAALgtsIJQtsIJzWAAQzWAAtsoJg");
	var mask_11_graphics_90 = new cjs.Graphics().p("EgipAUDQuYoUAArvQAAruOYoUQOXoUUSAAQUTAAOYIUQOXIUAALuQAALvuXIUQuYIU0TAAQ0SAAuXoUg");
	var mask_11_graphics_91 = new cjs.Graphics().p("EgkSAUdQvCoeAAr/QAAr+PCofQPCoeVQAAQVQAAPCIeQPDIfAAL+QAAL/vDIeQvCIf1QAAQ1QAAvCofg");
	var mask_11_graphics_92 = new cjs.Graphics().p("Egl6AU3QvtopAAsOQAAsNPtoqQPtopWNAAQWNAAPuIpQPuIqAAMNQAAMOvuIpQvuIq2NAAQ2NAAvtoqg");
	var mask_11_graphics_93 = new cjs.Graphics().p("EgniAVSQwZo1AAsdQAAsdQZo0QQZo0XJAAQXKAAQZI0QQZI0AAMdQAAMdwZI1QwZI03KAAQ3JAAwZo0g");
	var mask_11_graphics_94 = new cjs.Graphics().p("EgpKAVsQxEo/AAstQAAssREo/QREo/YGAAQYHAAREI/QREI/AAMsQAAMtxEI/QxEI/4HAAQ4GAAxEo/g");
	var mask_11_graphics_95 = new cjs.Graphics().p("EgqyAWGQxvpKAAs8QAAs7RvpKQRvpKZDAAQZEAARvJKQRvJKAAM7QAAM8xvJKQxvJK5EAAQ5DAAxvpKg");
	var mask_11_graphics_96 = new cjs.Graphics().p("EgsaAWgQyapUAAtMQAAtLSapUQSapVaAAAQaBAASaJVQSaJUAANLQAANMyaJUQyaJV6BAAQ6AAAyapVg");
	var mask_11_graphics_97 = new cjs.Graphics().p("EguDAW7QzFpgAAtbQAAtaTFpfQTGpga9AAQa+AATGJgQTFJfAANaQAANbzFJgQzGJf6+AAQ69AAzGpfg");
	var mask_11_graphics_98 = new cjs.Graphics().p("EgvrAXVQzwprAAtqQAAtpTwpqQTxprb6AAQb7AATxJrQTwJqAANpQAANqzwJrQzxJq77AAQ76AAzxpqg");
	var mask_11_graphics_99 = new cjs.Graphics().p("EgxTAXvQ0bp2AAt5QAAt5Ubp1QUcp1c3AAQc4AAUcJ1QUbJ1AAN5QAAN50bJ2Q0cJ184AAQ83AA0cp1g");
	var mask_11_graphics_100 = new cjs.Graphics().p("Egy7AYJQ1HqAAAuJQAAuIVHqAQVHqAd0AAQd1AAVHKAQVHKAAAOIQAAOJ1HKAQ1HKA91AAQ90AA1HqAg");
	var mask_11_graphics_101 = new cjs.Graphics().p("Eg0jAYjQ1yqLAAuYQAAuXVyqLQVyqLexAAQeyAAVyKLQVyKLAAOXQAAOY1yKLQ1yKL+yAAQ+xAA1yqLg");
	var mask_11_graphics_102 = new cjs.Graphics().p("Eg2LAY9Q2dqVAAuoQAAunWdqWQWdqVfuAAQfvAAWdKVQWdKWAAOnQAAOo2dKVQ2dKW/vAAQ/uAA2dqWg");
	var mask_11_graphics_103 = new cjs.Graphics().p("Eg3zAZXQ3IqggBu3QABu1XIqiUAXIgKgAgrAAAUAgsAAAAXJAKgQXHKiAAO1QAAO33HKgUgXJAKhggsAAAUggrAAAgXIgKhg");
	var mask_11_graphics_104 = new cjs.Graphics().p("Eg5bAZxQ30qrAAvGQAAvFX0qsUAXzgKrAhoAAAUAhpAAAAXzAKrQX0KsAAPFQAAPG30KrUgXzAKsghpAAAUghoAAAgXzgKsg");
	var mask_11_graphics_105 = new cjs.Graphics().p("Eg7DAaMQ4fq2AAvWQAAvUYfq3UAYegK2AilAAAUAimAAAAYfAK2QYeK3AAPUQAAPW4eK2UgYfAK2gimAAAUgilAAAgYegK2g");
	var mask_11_graphics_106 = new cjs.Graphics().p("Eg8sAamQ5JrBAAvlQAAvkZJrBUAZKgLBAjiAAAUAjjAAAAZKALBQZJLBAAPkQAAPl5JLBUgZKALBgjjAAAUgjiAAAgZKgLBg");
	var mask_11_graphics_107 = new cjs.Graphics().p("Eg+UAbBQ51rNAAv0QAAvzZ1rMUAZ1gLMAkfgABUAkgAABAZ1ALMQZ1LMAAPzQAAP051LNUgZ1ALLgkgAAAUgkfAAAgZ1gLLg");
	var mask_11_graphics_108 = new cjs.Graphics().p("Eg/8AbbQ6grYAAwDQAAwCagrXUAaggLYAlcAAAUAldAAAAagALYQagLXAAQCQAAQD6gLYUgagALXgldgABUglcAABgaggLXg");
	var mask_11_graphics_109 = new cjs.Graphics().p("EhBkAb1Q7LriAAwTQAAwRbLriUAbLgLjAmZAABUAmagABAbLALjQbLLiAAQRQAAQT7LLiUgbLALhgmaAABUgmZgABgbLgLhg");
	var mask_11_graphics_110 = new cjs.Graphics().p("EhDMAcPQ72rtAAwiQAAwhb2rtUAb2gLsAnWAAAUAnXAAAAb3ALsQb2LtAAQhQAAQi72LtUgb3ALsgnXAABUgnWgABgb2gLsg");
	var mask_11_graphics_111 = new cjs.Graphics().p("EhE0AcpQ8ir3AAwyQAAwwcir4UAchgL4AoTAABUAoUgABAchAL4QchL4ABQwQgBQy8hL3UgchAL3goUAABUgoTgABgchgL3g");
	var mask_11_graphics_112 = new cjs.Graphics().p("EhGcAdDQ9NsCAAxBQAAw/dNsDUAdMgMCApQAAAUApRAAAAdNAMCQdMMDAAQ/QAARB9MMCUgdNAMDgpRAAAUgpQAAAgdMgMDg");
	var mask_11_graphics_113 = new cjs.Graphics().p("EhIFAddQ94sNABxQQgBxPd4sOUAd4gMNAqNAAAUAqOAAAAd4AMNQd3MOABRPQgBRQ93MNUgd4AMNgqOAABUgqNgABgd4gMNg");
	var mask_11_graphics_114 = new cjs.Graphics().p("EhJsAd3Q+ksYAAxfQAAxfeksYUAeigMXArKgABUArLAABAejAMXQeiMYAARfQAARf+iMYUgejAMZgrLgABUgrKAABgeigMZg");
	var mask_11_graphics_115 = new cjs.Graphics().p("EhLVAeSQ/OsjAAxvQAAxtfOskUAfOgMiAsHgABUAsIAABAfOAMiQfOMkAARtQAARv/OMjUgfOAMigsIAAAUgsHAAAgfOgMig");
	var mask_11_graphics_116 = new cjs.Graphics().p("EhM9AesQ/5suAAx+QAAx9f5suUAf5gMtAtEgABUAtFAABAf5AMtQf5MuAAR9QAAR+/5MuUgf5AMugtFgABUgtEAABgf5gMug");
	var mask_11_graphics_117 = new cjs.Graphics().p("EhOlAfGUggkgM4gABgSOUAABgSMAgkgM5UAgkgM5AuBAAAUAuCAAAAgkAM5UAgkAM5AAAASMUAAAASOggkAM4UggkAM4guCAAAUguBAAAggkgM4g");
	var mask_11_graphics_118 = new cjs.Graphics().p("EhQNAfgUghQgNDAAAgSdUAAAgSbAhQgNEUAhPgNEAu+AABUAu/gABAhQANEUAhPANEAAAASbUAAAASdghPANDUghQANEgu/AAAUgu+AAAghPgNEg");
	var mask_11_graphics_119 = new cjs.Graphics().p("EhR1Af7Ugh7gNPAAAgSsUAAAgSrAh7gNOUAh6gNPAv7AABUAv8gABAh7ANPUAh6ANOAAAASrUAAAASsgh6ANPUgh7ANNgv8AABUgv7gABgh6gNNg");
	var mask_11_graphics_120 = new cjs.Graphics().p("EhTdAgVUgimgNaAAAgS7UAAAgS7AimgNYUAilgNaAw4AABUAw5gABAimANaUAilANYAAAAS7UAAAAS7gilANaUgimANYgw5AABUgw4gABgilgNYg");
	var mask_11_graphics_121 = new cjs.Graphics().p("EhVFAgvUgjSgNkAABgTLUgABgTJAjSgNlUAjQgNjAx1AAAUAx2AAAAjRANjUAjRANlAAAATJUAAAATLgjRANkUgjRANjgx2AABUgx1gABgjQgNjg");
	var mask_11_graphics_122 = new cjs.Graphics().p("EhWuAhJUgj8gNvAAAgTaUAAAgTZAj8gNvUAj8gNvAyyAAAUAyzAAAAj8ANvUAj8ANvAAAATZUAAAATagj8ANvUgj8ANugyzAAAUgyyAAAgj8gNug");
	var mask_11_graphics_123 = new cjs.Graphics().p("EhYWAhjUgkngN6AAAgTpUAAAgToAkngN6UAkngN6AzvAAAUAzwAAAAknAN6UAknAN6AAAAToUAAAATpgknAN6UgknAN6gzwgABUgzvAABgkngN6g");
	var mask_11_graphics_124 = new cjs.Graphics().p("EhZ+Ah9UglSgOEAAAgT5UAAAgT3AlSgOGUAlSgODA0sgABUA0tAABAlSAODUAlTAOGAAAAT3UAAAAT5glTAOEUglSAOFg0tgABUg0sAABglSgOFg");
	var mask_11_graphics_125 = new cjs.Graphics().p("EhbmAiXUgl+gOPAAAgUIUAAAgUHAl+gOQUAl9gOPA1pAAAUA1qAAAAl9AOPUAl+AOQgABAUHUAABAUIgl+AOPUgl9AOQg1qAAAUg1pAAAgl9gOQg");
	var mask_11_graphics_126 = new cjs.Graphics().p("EhdOAixUgmpgOZAAAgUYUAAAgUWAmpgObUAmogOaA2mAAAUA2nAAAAmpAOaUAmoAObAAAAUWUAAAAUYgmoAOZUgmpAObg2nAAAUg2mAAAgmogObg");
	var mask_11_graphics_127 = new cjs.Graphics().p("Ehe2AjMUgnUgOlAAAgUnUAAAgUlAnUgOmUAnTgOlA3jAAAUA3kAAAAnUAOlUAnTAOmAAAAUlUAAAAUngnTAOlUgnUAOlg3kAAAUg3jAAAgnTgOlg");
	var mask_11_graphics_128 = new cjs.Graphics().p("EhgfAjmUgn+gOwgABgU2UAABgU1An+gOwUAn/gOwA4gAAAUA4gAAAAoAAOwUAn+AOwAAAAU1UAAAAU2gn+AOwUgoAAOwg4gAAAUg4gAAAgn/gOwg");
	var mask_11_graphics_129 = new cjs.Graphics().p("EhiHAkAUgoqgO6AAAgVGUAAAgVFAoqgO6UAoqgO7A5dAAAUA5eAAAAoqAO7UAoqAO6AAAAVFUAAAAVGgoqAO6UgoqAO7g5eAAAUg5dAAAgoqgO7g");
	var mask_11_graphics_130 = new cjs.Graphics().p("EhjvAkbUgpVgPGAAAgVVUAAAgVUApVgPFUApVgPGA6aAAAUA6bAAAApVAPGUApVAPFAAAAVUUAAAAVVgpVAPGUgpVAPFg6bAAAUg6aAAAgpVgPFg");
	var mask_11_graphics_131 = new cjs.Graphics().p("EhlXAk1UgqAgPRAAAgVkUAAAgVjAqAgPQUAqAgPRA7XAAAUA7YAAAAqAAPRUAqAAPQAAAAVjUAAAAVkgqAAPRUgqAAPQg7YAAAUg7XAAAgqAgPQg");
	var mask_11_graphics_132 = new cjs.Graphics().p("Ehm/AlPUgqsgPbAABgV0UgABgVyAqsgPcUAqrgPbA8UAAAUA8UAAAAqsAPbUAqsAPcAAAAVyUAAAAV0gqsAPbUgqsAPbg8UAAAUg8UAAAgqrgPbg");
	var mask_11_graphics_133 = new cjs.Graphics().p("EhonAlpUgrXgPmAAAgWDUAAAgWBArXgPnUArWgPmA9RAAAUA9SAAAArXAPmUArWAPnAAAAWBUAAAAWDgrWAPmUgrXAPmg9SAAAUg9RAAAgrWgPmg");
	var mask_11_graphics_134 = new cjs.Graphics().p("EhqPAmDUgsCgPwAAAgWTUAAAgWRAsCgPxUAsBgPxA+OAAAUA+PAAAAsCAPxUAsBAPxAAAAWRUAAAAWTgsBAPwUgsCAPxg+PAAAUg+OAAAgsBgPxg");
	var mask_11_graphics_135 = new cjs.Graphics().p("Ehr3AmdUgstgP7AAAgWiUAAAgWhAstgP8UAssgP7A/LAAAUA/MAAAAstAP7UAssAP8AAAAWhUAAAAWigssAP7UgstAP8g/MAAAUg/LAAAgssgP8g");
	var mask_11_graphics_136 = new cjs.Graphics().p("EhtgAm3UgtYgQGAAAgWxUAAAgWvAtYgQIUAtYgQGBAIAAAUBAJAAAAtYAQGUAtYAQIAAAAWvUAAAAWxgtYAQGUgtYAQHhAJAAAUhAIAAAgtYgQHg");
	var mask_11_graphics_137 = new cjs.Graphics().p("EhvIAnRUguDgQRAAAgXAUAAAgW/AuDgQSUAuDgQRBBFAAAUBBGAAAAuDAQRUAuDAQSAAAAW/UAAAAXAguDAQRUguDAQShBGAAAUhBFAAAguDgQSg");
	var mask_11_graphics_138 = new cjs.Graphics().p("EhwwAnsUguugQdAAAgXPUAAAgXOAuugQdUAuugQcBCCAAAUBCDAAAAuuAQcUAuuAQdAAAAXOUAAAAXPguuAQdUguuAQchCDAAAUhCCAAAguugQcg");
	var mask_11_graphics_139 = new cjs.Graphics().p("EhyYAoGUgvagQnAAAgXfUAAAgXdAvagQoUAvZgQnBC/AAAUBDAAAAAvZAQnUAvaAQoAAAAXdUAAAAXfgvaAQnUgvZAQnhDAAAAUhC/AAAgvZgQng");
	var mask_11_graphics_140 = new cjs.Graphics().p("Eh0AAogUgwFgQxAAAgXvUAAAgXtAwFgQyUAwEgQyBD8AAAUBD9AAAAwEAQyUAwFAQyAAAAXtUAAAAXvgwFAQxUgwEAQyhD9AAAUhD8AAAgwEgQyg");
	var mask_11_graphics_141 = new cjs.Graphics().p("Eh1oAo7UgwwgQ+AAAgX9UAAAgX8AwwgQ9UAwwgQ9BE4AAAUBE6AAAAwwAQ9UAwvAQ9AAAAX8UAAAAX9gwvAQ+UgwwAQ8hE6AAAUhE4AAAgwwgQ8g");
	var mask_11_graphics_142 = new cjs.Graphics().p("Eh3QApVUgxbgRIAAAgYNUAAAgYLAxbgRIUAxagRIBF2AAAUBF3AAAAxbARIUAxaARIAAAAYLUAAAAYNgxaARIUgxbARHhF3AAAUhF2AAAgxagRHg");
	var mask_11_graphics_143 = new cjs.Graphics().p("Eh45ApuUgyFgRSgABgYcUAABgYbAyFgRTUAyGgRSBGzAAAUBG0AAAAyGARSUAyGARTAAAAYbUAAAAYcgyGARSUgyGARThG0AAAUhGzAAAgyGgRTg");
	var mask_11_graphics_144 = new cjs.Graphics().p("Eh6gAqJUgyygReAAAgYrUAAAgYrAyygRdUAywgRdBHwAAAUBHxAAAAyxARdUAyxARdAAAAYrUAAAAYrgyxAReUgyxARehHxAAAUhHwAAAgywgReg");
	var mask_11_graphics_145 = new cjs.Graphics().p("Eh8JAqjUgzcgRoAAAgY7UAAAgY6AzcgRoUAzcgRpBItAABUBItgABAzdARpUAzcARoAAAAY6UAAAAY7gzcARoUgzdARohItAABUhItgABgzcgRog");
	var mask_11_graphics_146 = new cjs.Graphics().p("Eh9xAq9Ug0IgRyAAAgZLUAAAgZJA0IgR0UA0HgRyBJqAAAUBJqAAAA0JARyUA0HAR0gABAZJUAABAZLg0HARyUg0JAR0hJqAAAUhJqAAAg0HgR0g");
	var mask_11_graphics_147 = new cjs.Graphics().p("Eh/ZArXUg0zgR9AAAgZaUAAAgZYA0zgR/UA0ygR9BKnAAAUBKnAAAA0zAR9UA0zAR/AAAAZYUAAAAZag0zAR9Ug0zAR+hKnAABUhKngABg0ygR+g");
	var mask_11_graphics_148 = new cjs.Graphics().p("EiBBAryUg1egSJAAAgZpUAAAgZnA1egSKUA1dgSJBLkAAAUBLkAAAA1fASJUA1dASKAAAAZnUAAAAZpg1dASJUg1fASIhLkAAAUhLjAAAg1egSIg");
	var mask_11_graphics_149 = new cjs.Graphics().p("EiCqAsMUg2JgSTAAAgZ5UAAAgZ3A2JgSUUA2KgSUBMgAAAUBMhAAAA2JASUUA2KASUgABAZ3UAABAZ5g2KASTUg2JASThMhAAAUhMgAAAg2KgSTg");
	var mask_11_graphics_150 = new cjs.Graphics().p("EiESAsmUg20gSeAABgaIUgABgaGA20gSfUA20gSeBNegABUBNeAABA21ASeUA20ASfAAAAaGUAAAAaIg20ASeUg21ASehNeAAAUhNeAAAg20gSeg");
	var mask_11_graphics_151 = new cjs.Graphics().p("EiF5AtAUg3ggSpAAAgaXUAAAgaVA3ggSqUA3fgSpBOagABUBObAABA3gASpUA3fASqAAAAaVUAAAAaXg3fASpUg3gASqhObgABUhOaAABg3fgSqg");
	var mask_11_graphics_152 = new cjs.Graphics().p("EiHiAtbUg4KgS1AAAgamUAAAgalA4KgS0UA4LgS0BPXgABUBPYAABA4LAS0UA4KAS0AAAAalUAAAAamg4KAS1Ug4LASzhPYAAAUhPXAAAg4LgSzg");
	var mask_11_graphics_153 = new cjs.Graphics().p("EiJJAt1Ug43gTAAAAga1UAAAga0A43gS/UA40gS/BQVAAAUBQVAAAA42AS/UA41AS/AABAa0UgABAa1g41ATAUg42AS/hQVAAAUhQVAAAg40gS/g");
	var mask_11_graphics_154 = new cjs.Graphics().p("EiKyAuPUg5hgTKAAAgbFUAAAgbDA5hgTLUA5ggTJBRSAAAUBRSAAAA5hATJUA5hATLAAAAbDUAAAAbFg5hATKUg5hATKhRSAAAUhRSAAAg5ggTKg");
	var mask_11_graphics_155 = new cjs.Graphics().p("EiMaAupUg6MgTVAAAgbUUAAAgbTA6MgTVUA6MgTUBSOAAAUBSPAAAA6NATUUA6LATVAAAAbTUAAAAbUg6LATVUg6NATUhSPAABUhSOgABg6MgTUg");
	var mask_11_graphics_156 = new cjs.Graphics().p("EiOCAvDUg64gTgAAAgbjUAAAgbiA64gTgUA62gTgBTMAABUBTMgABA63ATgUA63ATgAABAbiUgABAbjg63ATgUg63ATfhTMAABUhTMgABg62gTfg");
	var mask_11_graphics_157 = new cjs.Graphics().p("EiPrAvdUg7igTqAAAgbzUAAAgbyA7igTrUA7jgTqBUIAAAUBUJAAAA7jATqUA7hATrAAAAbyUAAAAbzg7hATqUg7jATqhUJAAAUhUIAAAg7jgTqg");
	var mask_11_graphics_158 = new cjs.Graphics().p("EiRSAv3Ug8OgT1AAAgcCUAAAgcBA8OgT2UA8NgT1BVFAAAUBVHAAAA8NAT1UA8NAT2AAAAcBUAAAAcCg8NAT1Ug8NAT1hVHAAAUhVFAAAg8NgT1g");
	var mask_11_graphics_159 = new cjs.Graphics().p("EiS6AwRUg85gUAAAAgcRUAAAgcQA85gUBUA84gT/BWCgABUBWEAABA84AT/UA84AUBAAAAcQUAAAAcRg84AUAUg84AUBhWEgABUhWCAABg84gUBg");
	var mask_11_graphics_160 = new cjs.Graphics().p("EiUjAwsUg9kgULAAAgchUAAAgcfA9kgUMUA9jgULBXAAAAUBXAAAAA9kAULUA9kAUMgABAcfUAABAchg9kAULUg9kAUKhXAAAAUhXAAAAg9jgUKg");
	var mask_11_graphics_161 = new cjs.Graphics().p("EiWLAxGUg+PgUVAAAgcxUAAAgcvA+PgUWUA+PgUVBX8gABUBX+AABA+OAUVUA+PAUWAAAAcvUAAAAcxg+PAUVUg+OAUWhX+gABUhX8AABg+PgUWg");
	var mask_11_graphics_162 = new cjs.Graphics().p("EiXzAxgUg+6gUgAAAgdAUAAAgc+A+6gUhUA+5gUgBY6AAAUBY6AAAA+7AUgUA+5AUhAAAAc+UAAAAdAg+5AUgUg+7AUghY6AABUhY6gABg+5gUgg");
	var mask_11_graphics_163 = new cjs.Graphics().p("EiZbAx7Ug/lgUsAAAgdPUAAAgdNA/lgUsUA/lgUrBZ2AAAUBZ3AAAA/mAUrUA/kAUsAAAAdNUAAAAdPg/kAUsUg/mAUrhZ3AAAUhZ2AAAg/lgUrg");
	var mask_11_graphics_164 = new cjs.Graphics().p("EibEAyVUhAPgU2AAAgdfUAAAgddBAPgU2UBAQgU3Ba0AAAUBa0AAABARAU3UBAPAU2AABAddUgABAdfhAPAU2UhARAU2ha0AAAUha0AAAhAQgU2g");
	var mask_11_graphics_165 = new cjs.Graphics().p("EicrAyuUhA8gVAAAAgduUAAAgdsBA8gVCUBA7gVBBbwAAAUBbxAAABA8AVBUBA7AVCAAAAdsUAAAAduhA7AVAUhA8AVChbxAAAUhbwAAAhA7gVCg");
	var mask_11_graphics_166 = new cjs.Graphics().p("EieTAzJUhBngVMAAAgd9UAAAgd8BBngVMUBBmgVMBctAAAUBcuAAABBnAVMUBBmAVMAAAAd8UAAAAd9hBmAVMUhBnAVMhcuAAAUhctAAAhBmgVMg");
	var mask_11_graphics_167 = new cjs.Graphics().p("Eif8AzjUhCRgVWAAAgeNUAAAgeLBCRgVXUBCSgVXBdqAAAUBdrAAABCSAVXUBCRAVXAAAAeLUAAAAeNhCRAVWUhCSAVXhdrAAAUhdqAAAhCSgVXg");
	var mask_11_graphics_168 = new cjs.Graphics().p("EihkAz9UhC9gViAAAgebUAAAgeaBC9gVjUBC9gVhBenAAAUBeoAAABC9AVhUBC9AVjAAAAeaUAAAAebhC9AViUhC9AViheoAAAUhenAAAhC9gVig");
	var mask_11_graphics_169 = new cjs.Graphics().p("EijMA0XUhDogVsAAAgerUAAAgepBDogVuUBDogVsBfkAAAUBflAAABDoAVsUBDoAVuAAAAepUAAAAerhDoAVsUhDoAVthflAAAUhfkAAAhDogVtg");
	var mask_11_graphics_170 = new cjs.Graphics().p("Eik0A0yUhETgV4AAAge6UAAAge5BETgV4UBETgV3BghAAAUBgiAAABEUAV3UBESAV4AAAAe5UAAAAe6hESAV4UhEUAV3hgiAAAUhghAAAhETgV3g");
	var mask_11_graphics_171 = new cjs.Graphics().p("EimdA1MUhE+gWCAAAgfKUAAAgfIBE+gWDUBE+gWCBhfAAAUBhfAAABE/AWCUBE+AWDgABAfIUAABAfKhE+AWCUhE/AWChhfAAAUhhfAAAhE+gWCg");
	var mask_11_graphics_172 = new cjs.Graphics().p("EioEA1mUhFqgWNAAAgfZUAAAgfYBFqgWNUBFpgWNBibAAAUBicAAABFqAWNUBFpAWNAAAAfYUAAAAfZhFpAWNUhFqAWNhicAAAUhibAAAhFpgWNg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_11_graphics_78,x:-771.15,y:163.1}).wait(1).to({graphics:mask_11_graphics_79,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_80,x:-771.15,y:163.1}).wait(1).to({graphics:mask_11_graphics_81,x:-771.15,y:163.1}).wait(1).to({graphics:mask_11_graphics_82,x:-771.15,y:163.1}).wait(1).to({graphics:mask_11_graphics_83,x:-771.15,y:163.1}).wait(1).to({graphics:mask_11_graphics_84,x:-771.15,y:163.1}).wait(1).to({graphics:mask_11_graphics_85,x:-771.15,y:163.1}).wait(1).to({graphics:mask_11_graphics_86,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_87,x:-771.15,y:163.1}).wait(1).to({graphics:mask_11_graphics_88,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_89,x:-771.15,y:163.1}).wait(1).to({graphics:mask_11_graphics_90,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_91,x:-771.15,y:163.1}).wait(1).to({graphics:mask_11_graphics_92,x:-771.15,y:163.1}).wait(1).to({graphics:mask_11_graphics_93,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_94,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_95,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_96,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_97,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_98,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_99,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_100,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_101,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_102,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_103,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_104,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_105,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_106,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_107,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_108,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_109,x:-771.175,y:163.1}).wait(1).to({graphics:mask_11_graphics_110,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_111,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_112,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_113,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_114,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_115,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_116,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_117,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_118,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_119,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_120,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_121,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_122,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_123,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_124,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_125,x:-771.2,y:163.125}).wait(1).to({graphics:mask_11_graphics_126,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_127,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_128,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_129,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_130,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_131,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_132,x:-771.2,y:163.1}).wait(1).to({graphics:mask_11_graphics_133,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_134,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_135,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_136,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_137,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_138,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_139,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_140,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_141,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_142,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_143,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_144,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_145,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_146,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_147,x:-771.225,y:163.1}).wait(1).to({graphics:mask_11_graphics_148,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_149,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_150,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_151,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_152,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_153,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_154,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_155,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_156,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_157,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_158,x:-771.275,y:163.1}).wait(1).to({graphics:mask_11_graphics_159,x:-771.275,y:163.1}).wait(1).to({graphics:mask_11_graphics_160,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_161,x:-771.275,y:163.1}).wait(1).to({graphics:mask_11_graphics_162,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_163,x:-771.275,y:163.1}).wait(1).to({graphics:mask_11_graphics_164,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_165,x:-771.275,y:163.1}).wait(1).to({graphics:mask_11_graphics_166,x:-771.275,y:163.1}).wait(1).to({graphics:mask_11_graphics_167,x:-771.275,y:163.1}).wait(1).to({graphics:mask_11_graphics_168,x:-771.275,y:163.1}).wait(1).to({graphics:mask_11_graphics_169,x:-771.275,y:163.1}).wait(1).to({graphics:mask_11_graphics_170,x:-771.275,y:163.1}).wait(1).to({graphics:mask_11_graphics_171,x:-771.25,y:163.1}).wait(1).to({graphics:mask_11_graphics_172,x:-771.275,y:163.1}).wait(23));

	// Layer_24
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("Eg27AKKQsmg8rZkGQl0iFnBjmQiKhHimhlQhdg5jKiCQgcgSgFgTQgEgRANgfIA1h7QApAWA6AgQANAIAUADIgFALQgJAZACANQADAQAXAPQSQMNVQCaQZTC3YWosQDWhMF+iYQGdilC2hDQEVhnD4hCQEXhKEGgjQNUhvNRD5QDzBHEvBzQCJA1GPChQHJC3FzBzQHACNGXBFQCAAVDQAdQAUADAIAIQAHAIABAVQABBWgNALQgNAMhVgLQn9hAorimQnMiKozjmQlniSjQhMQk7hzkKhEQxskcyEGFQjiBMk2B6QlhCNixBGQnFCymaBzQnKCBmxA7QotBLoCAAQj9AAjzgSg");
	this.shape_17.setTransform(26.6723,249.7564);
	this.shape_17._off = true;

	var maskedShapeInstanceList = [this.shape_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(78).to({_off:false},0).wait(117));

	// Layer_28 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_50 = new cjs.Graphics().p("AqYKZQkUkTAAmGQAAmEEUkUQEUkUGEAAQGGAAETEUQEUEUgBGEQABGGkUETQkTEUmGgBQmEABkUkUg");
	var mask_12_graphics_51 = new cjs.Graphics().p("ArkLlQk0kzAAmyQAAmxE0kzQEzk0GxAAQGyAAEzE0QEzEzAAGxQAAGykzEzQkzEzmyAAQmxAAkzkzg");
	var mask_12_graphics_52 = new cjs.Graphics().p("AsxMyQlTlTAAnfQAAneFTlSQFTlTHeAAQHfAAFTFTQFSFSAAHeQAAHflSFTQlTFSnfAAQneAAlTlSg");
	var mask_12_graphics_53 = new cjs.Graphics().p("At9N+QlylzAAoLQAAoKFylzQFzlyIKAAQILAAFzFyQFyFzAAIKQAAILlyFzQlzFyoLAAQoKAAlzlyg");
	var mask_12_graphics_54 = new cjs.Graphics().p("AvJPKQmSmSAAo4QAAo4GSmRQGSmSI3AAQI4AAGSGSQGSGRAAI4QAAI4mSGSQmSGSo4AAQo3AAmSmSg");
	var mask_12_graphics_55 = new cjs.Graphics().p("AwVQWQmymxAAplQAApkGymxQGxmyJkAAQJlAAGxGyQGyGxAAJkQAAJlmyGxQmxGyplAAQpkAAmxmyg");
	var mask_12_graphics_56 = new cjs.Graphics().p("AxiRjQnRnRAAqSQAAqQHRnSQHSnRKQAAQKRAAHSHRQHRHSAAKQQAAKSnRHRQnSHRqRAAQqQAAnSnRg");
	var mask_12_graphics_57 = new cjs.Graphics().p("AyuSvQnxnwAAq/QAAq9HxnxQHxnxK9AAQK+AAHxHxQHxHxAAK9QAAK/nxHwQnxHxq+AAQq9AAnxnxg");
	var mask_12_graphics_58 = new cjs.Graphics().p("Az7T8QoPoRAArrQAArqIPoQQIRoRLqAAQLrAAIRIRQIPIQAALqQAALroPIRQoRIQrrAAQrqAAoRoQg");
	var mask_12_graphics_59 = new cjs.Graphics().p("A1GVHQoxovABsYQgBsXIxovQIvoxMXABQMYgBIvIxQIxIvgBMXQABMYoxIvQovIxsYgBQsXABovoxg");
	var mask_12_graphics_60 = new cjs.Graphics().p("A2TWUQpPpQAAtEQAAtEJPpPQJQpPNDAAQNEAAJQJPQJPJPAANEQAANEpPJQQpQJPtEAAQtDAApQpPg");
	var mask_12_graphics_61 = new cjs.Graphics().p("A3fXgQpvpvAAtxQAAtwJvpvQJvpvNwAAQNxAAJvJvQJvJvAANwQAANxpvJvQpvJvtxAAQtwAApvpvg");
	var mask_12_graphics_62 = new cjs.Graphics().p("A4sYtQqOqPAAueQAAudKOqOQKQqPOcAAQOdAAKQKPQKOKOAAOdQAAOeqOKPQqQKOudAAQucAAqQqOg");
	var mask_12_graphics_63 = new cjs.Graphics().p("A53Z5QqvquAAvLQAAvJKvqvQKuquPJAAQPKAAKuKuQKvKvAAPJQAAPLqvKuQquKuvKAAQvJAAququg");
	var mask_12_graphics_64 = new cjs.Graphics().p("A7EbFQrOrOAAv3QAAv2LOrOQLOrOP2AAQP3AALOLOQLOLOAAP2QAAP3rOLOQrOLOv3AAQv2AArOrOg");
	var mask_12_graphics_65 = new cjs.Graphics().p("A8QcSQruruAAwkQAAwjLurtQLtruQjAAQQjAALuLuQLuLtAAQjQAAQkruLuQruLtwjAAQwjAArtrtg");
	var mask_12_graphics_66 = new cjs.Graphics().p("A9ddeQsNsNAAxRQAAxPMNsOQMOsNRPAAQRRAAMMMNQMOMOAARPQAARRsOMNQsMMNxRAAQxPAAsOsNg");
	var mask_12_graphics_67 = new cjs.Graphics().p("A+peqQssstAAx9QAAx8MsstQMtstR8AAQR9AAMtMtQMtMtgBR8QABR9stMtQstMtx9AAQx8AAststg");
	var mask_12_graphics_68 = new cjs.Graphics().p("A/1f3QtMtNAAyqQgBypNNtMQNNtMSogBQSpABNNNMQNMNMAASpQAASqtMNNQtNNLypABQyogBtNtLg");
	var mask_12_graphics_69 = new cjs.Graphics().p("EghCAhDQtrtsAAzXQAAzVNrttQNttrTVgBQTWABNtNrQNsNtgBTVQABTXtsNsQttNszWAAQzVAAtttsg");
	var mask_12_graphics_70 = new cjs.Graphics().p("EgiNAiPQuNuMAB0DQgB0CONuMQOLuLUCAAQUDAAOLOLQONOMgBUCQABUDuNOMQuLOL0DAAQ0CAAuLuLg");
	var mask_12_graphics_71 = new cjs.Graphics().p("EgjaAjbQururAA0wQAA0vOrurQOrurUvAAQUwAAOrOrQOrOrAAUvQAAUwurOrQurOr0wAAQ0vAAururg");
	var mask_12_graphics_72 = new cjs.Graphics().p("EgkmAkoQvLvLAA1dQAA1cPLvKQPKvLVcAAQVcAAPLPLQPLPKAAVcQAAVdvLPLQvLPK1cAAQ1cAAvKvKg");
	var mask_12_graphics_73 = new cjs.Graphics().p("EglzAl0QvqvqAA2KQAA2IPqvqQPrvrWIAAQWJAAPrPrQPqPqAAWIQAAWKvqPqQvrPq2JAAQ2IAAvrvqg");
	var mask_12_graphics_74 = new cjs.Graphics().p("Egm/AnBQwKwLAA22QAA21QKwKQQKwKW1AAQW2AAQKQKQQKQKAAW1QAAW2wKQLQwKQJ22AAQ21AAwKwJg");
	var mask_12_graphics_75 = new cjs.Graphics().p("EgoLAoMQwqwpAA3jQAA3iQqwpQQqwqXhAAQXiAAQqQqQQqQpAAXiQAAXjwqQpQwqQq3iAAQ3hAAwqwqg");
	var mask_12_graphics_76 = new cjs.Graphics().p("EgpXApZQxKxKAB4PQgB4ORKxKQRJxJYOAAQYPAARJRJQRJRKAAYOQAAYPxJRKQxJRJ4PAAQ4OAAxJxJg");
	var mask_12_graphics_77 = new cjs.Graphics().p("EgqkAqlQxoxpAA48QAA47RoxoQRpxqY7AAQY8AARpRqQRoRoAAY7QAAY8xoRpQxpRo48ABQ47gBxpxog");
	var mask_12_graphics_78 = new cjs.Graphics().p("EgrwAryQyJyJAB5pQgB5oSJyIQSJyJZnAAQZpAASISJQSJSIgBZoQABZpyJSJQyISI5pAAQ5nAAyJyIg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_12_graphics_50,x:-486.05,y:-122}).wait(1).to({graphics:mask_12_graphics_51,x:-486.05,y:-122}).wait(1).to({graphics:mask_12_graphics_52,x:-486.05,y:-122.025}).wait(1).to({graphics:mask_12_graphics_53,x:-486.05,y:-122}).wait(1).to({graphics:mask_12_graphics_54,x:-486.05,y:-122}).wait(1).to({graphics:mask_12_graphics_55,x:-486.05,y:-122}).wait(1).to({graphics:mask_12_graphics_56,x:-486.05,y:-122.025}).wait(1).to({graphics:mask_12_graphics_57,x:-486.025,y:-122.025}).wait(1).to({graphics:mask_12_graphics_58,x:-486.05,y:-122.025}).wait(1).to({graphics:mask_12_graphics_59,x:-486.05,y:-122}).wait(1).to({graphics:mask_12_graphics_60,x:-486.05,y:-122}).wait(1).to({graphics:mask_12_graphics_61,x:-486.05,y:-122.025}).wait(1).to({graphics:mask_12_graphics_62,x:-486.05,y:-122.025}).wait(1).to({graphics:mask_12_graphics_63,x:-486.05,y:-122.025}).wait(1).to({graphics:mask_12_graphics_64,x:-486.05,y:-122}).wait(1).to({graphics:mask_12_graphics_65,x:-486.05,y:-122.025}).wait(1).to({graphics:mask_12_graphics_66,x:-486.05,y:-122.025}).wait(1).to({graphics:mask_12_graphics_67,x:-486.05,y:-122.025}).wait(1).to({graphics:mask_12_graphics_68,x:-486.05,y:-122.05}).wait(1).to({graphics:mask_12_graphics_69,x:-486.05,y:-122.05}).wait(1).to({graphics:mask_12_graphics_70,x:-486.05,y:-122.025}).wait(1).to({graphics:mask_12_graphics_71,x:-486.025,y:-122.025}).wait(1).to({graphics:mask_12_graphics_72,x:-486.05,y:-122.025}).wait(1).to({graphics:mask_12_graphics_73,x:-486.05,y:-122.05}).wait(1).to({graphics:mask_12_graphics_74,x:-486.05,y:-122.05}).wait(1).to({graphics:mask_12_graphics_75,x:-486.05,y:-122.05}).wait(1).to({graphics:mask_12_graphics_76,x:-486.05,y:-122.025}).wait(1).to({graphics:mask_12_graphics_77,x:-486.05,y:-122.05}).wait(1).to({graphics:mask_12_graphics_78,x:-486.05,y:-122.05}).wait(117));

	// Layer_26
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("Ap4SHQgcgSgFgTQgEgRANgfIA0h7IBCidIBykaIJL2eIAyh8QASgqAhhfQALgfAKgCQAKgDAWAWQB3B2CwCHIA3ApQgPBIgYBIIgDAKQh7hah2hlQgbgYgKABQgNABgOAjIgvBzQk0L8m0QsIgFALQgJAZACANQADAQAXAPIAsAdQgoAsg4AcIgZAZIhig/g");
	this.shape_18.setTransform(-557.1187,94.3945);
	this.shape_18._off = true;

	var maskedShapeInstanceList = [this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(50).to({_off:false},0).wait(145));

	// Layer_27 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_0 = new cjs.Graphics().p("AouJ9QjnkIgBl1QABl0DnkIQDokIFGAAQFIAADnEIQDnEIAAF0QAAF1jnEIQjnEHlIAAQlGAAjokHg");
	var mask_13_graphics_1 = new cjs.Graphics().p("AriLZQkykuAAmrQAAmqEykuQEykuGwgBQGxABEyEuQEyEuAAGqQAAGrkyEuQkyEvmxAAQmwAAkykvg");
	var mask_13_graphics_2 = new cjs.Graphics().p("AuWM1Ql8lUAAnhQAAnhF8lUQF9lUIZAAQIaAAF9FUQF8FUAAHhQAAHhl8FUQl9FVoaAAQoZAAl9lVg");
	var mask_13_graphics_3 = new cjs.Graphics().p("AxKOSQnHl7AAoXQAAoWHHl8QHHl6KDAAQKEAAHHF6QHHF8AAIWQAAIXnHF7QnHF7qEAAQqDAAnHl7g");
	var mask_13_graphics_4 = new cjs.Graphics().p("Az+PuQoRmgAApOQAApNIRmhQIRmhLtAAQLtAAISGhQIRGhABJNQgBJOoRGgQoSGirtAAQrtAAoRmig");
	var mask_13_graphics_5 = new cjs.Graphics().p("A2yRLQpcnHAAqEQAAqDJcnHQJdnINVAAQNXAAJcHIQJcHHAAKDQAAKEpcHHQpcHHtXABQtVgBpdnHg");
	var mask_13_graphics_6 = new cjs.Graphics().p("A5lSnQqontAAq6QAAq5KonuQKmntO/AAQPAAAKnHtQKmHuAAK5QAAK6qmHtQqnHuvAAAQu/AAqmnug");
	var mask_13_graphics_7 = new cjs.Graphics().p("A8aUEQrxoUAArwQAArvLxoVQLxoTQpAAQQpAALyITQLxIVAALvQAALwrxIUQryIUwpAAQwpAArxoUg");
	var mask_13_graphics_8 = new cjs.Graphics().p("A/OVgQs7o6AAsmQAAslM7o7QM8o6SSAAQSTAAM8I6QM7I7AAMlQAAMms7I6Qs8I7yTAAQySAAs8o7g");
	var mask_13_graphics_9 = new cjs.Graphics().p("EgiBAW8QuHpgAAtcQAAtcOHphQOGpgT7AAQT8AAOHJgQOGJhAANcQAANcuGJgQuHJiz8AAQz7AAuGpig");
	var mask_13_graphics_10 = new cjs.Graphics().p("Egk1AYZQvRqGAAuTQAAuRPRqIQPQqGVlAAQVmAAPRKGQPQKIAAORQAAOTvQKGQvRKH1mAAQ1lAAvQqHg");
	var mask_13_graphics_11 = new cjs.Graphics().p("EgnqAZ2QwbqtAAvJQAAvIQbquQQcqtXOAAQXPAAQbKtQQcKuAAPIQAAPJwcKtQwbKu3PAAQ3OAAwcqug");
	var mask_13_graphics_12 = new cjs.Graphics().p("EgqeAbSQxlrTAAv/QAAv+RlrVQRmrSY4AAQY5AARlLSQRmLVAAP+QAAP/xmLTQxlLU45AAQ44AAxmrUg");
	var mask_13_graphics_13 = new cjs.Graphics().p("EgtRAcuQyxr5AAw1QAAw0Sxr6QSwr6ahAAQaiAASwL6QSxL6AAQ0QAAQ1yxL5QywL76iAAQ6hAAywr7g");
	var mask_13_graphics_14 = new cjs.Graphics().p("EgwFAeLQz7sgAAxrQAAxrT7shQT6sfcLAAQcMAAT6MfQT7MhAARrQAARrz7MgQz6Mh8MAAQ8LAAz6shg");
	var mask_13_graphics_15 = new cjs.Graphics().p("Egy5AfnQ1GtFAAyiQAAyhVGtHQVFtGd0AAQd1AAVFNGQVGNHAAShQAASi1GNFQ1FNI91AAQ90AA1FtIg");
	var mask_13_graphics_16 = new cjs.Graphics().p("Eg1tAhEQ2QtsAAzYQAAzWWQtuQWQttfdAAQffAAWPNtQWQNuAATWQAATY2QNsQ2PNu/fAAQ/dAA2Qtug");
	var mask_13_graphics_17 = new cjs.Graphics().p("Eg4hAigQ3buSAA0OQAA0NXbuUUAXagOSAhHAAAUAhIAAAAXaAOSQXaOUAAUNQAAUO3aOSUgXaAOUghIAAAUghHAAAgXagOUg");
	var mask_13_graphics_18 = new cjs.Graphics().p("Eg7VAj9Q4lu5AA1EQAA1DYlu7UAYlgO4AiwAAAUAixAAAAYlAO4QYlO7AAVDQAAVE4lO5UgYlAO6gixAAAUgiwAAAgYlgO6g");
	var mask_13_graphics_19 = new cjs.Graphics().p("Eg+JAlZQ5wvfAA16QAA15ZwvhUAZvgPfAkaAAAUAkbAAAAZvAPfQZwPhAAV5QAAV65wPfUgZvAPhgkbAAAUgkaAAAgZvgPhg");
	var mask_13_graphics_20 = new cjs.Graphics().p("EhA9Am2Q66wFAA2xQAA2wa6wHUAa5gQFAmEAAAUAmEAAAAa5AQFQa7QHAAWwQAAWx67QFUga5AQHgmEAAAUgmEAAAga5gQHg");
	var mask_13_graphics_21 = new cjs.Graphics().p("EhDxAoTQ8EwsAA3nQAA3lcEwuUAcFgQrAnsAAAUAntAAAAcFAQrQcEQuAAXlQAAXn8EQsUgcFAQsgntAAAUgnsAAAgcFgQsg");
	var mask_13_graphics_22 = new cjs.Graphics().p("EhGlApvQ9PxSAA4dQAA4cdPxUUAdPgRRApWAAAUApXAAAAdPARRQdPRUAAYcQAAYd9PRSUgdPARTgpXAAAUgpWAAAgdPgRTg");
	var mask_13_graphics_23 = new cjs.Graphics().p("EhJZArLQ+ax4AA5TQAA5Seax6UAeZgR4ArAAAAUArBAAAAeZAR4QeaR6AAZSQAAZT+aR4UgeZAR6grBAAAUgrAAAAgeZgR6g");
	var mask_13_graphics_24 = new cjs.Graphics().p("EhMMAsoQ/lyfAA6JQAA6IflyhUAfjgSeAspAAAUAsqAAAAfkASeQfkShAAaIQAAaJ/kSfUgfkASggsqAAAUgspAAAgfjgSgg");
	var mask_13_graphics_25 = new cjs.Graphics().p("EhPBAuEUggvgTEAAAgbAUAAAga+AgvgTHUAgugTFAuTAAAUAuTAAAAgvATFUAguATHAABAa+UgABAbAgguATEUggvATHguTAAAUguTAAAggugTHg");
	var mask_13_graphics_26 = new cjs.Graphics().p("EhR1AvgUgh5gTqAAAgb2UAAAgb1Ah5gTtUAh5gTrAv8AAAUAv8AAAAh6ATrUAh5ATtAAAAb1UAAAAb2gh5ATqUgh6ATugv8AAAUgv8AAAgh5gTug");
	var mask_13_graphics_27 = new cjs.Graphics().p("EhUpAw9UgjDgURAAAgcsUAAAgcrAjDgUTUAjEgURAxlAAAUAxmAAAAjEAURUAjDAUTAAAAcrUAAAAcsgjDAURUgjEAUTgxmAAAUgxlAAAgjEgUTg");
	var mask_13_graphics_28 = new cjs.Graphics().p("EhXdAyZUgkOgU3AAAgdiUAAAgdhAkOgU6UAkPgU3AzOAAAUAzPAAAAkPAU3UAkOAU6AAAAdhUAAAAdigkOAU3UgkPAU6gzPAAAUgzOAAAgkPgU6g");
	var mask_13_graphics_29 = new cjs.Graphics().p("EhaRAz1UglYgVdgABgeYUAABgeXAlYgVgUAlZgVeA04AAAUA05AAAAlZAVeUAlYAVgAABAeXUgABAeYglYAVdUglZAVhg05AAAUg04AAAglZgVhg");
	var mask_13_graphics_30 = new cjs.Graphics().p("EhdFA1SUgmjgWEAAAgfOUAAAgfNAmjgWHUAmkgWEA2hAAAUA2iAAAAmkAWEUAmjAWHAAAAfNUAAAAfOgmjAWEUgmkAWHg2iAAAUg2hAAAgmkgWHg");
	var mask_13_graphics_31 = new cjs.Graphics().p("Ehf4A2vUgnugWqAAAggFUAAAggEAnugWsUAntgWrA4LAAAUA4MAAAAntAWrUAnuAWsAAAAgEUAAAAgFgnuAWqUgntAWtg4MAAAUg4LAAAgntgWtg");
	var mask_13_graphics_32 = new cjs.Graphics().p("EhisA4LUgo5gXQAAAgg7UAAAgg6Ao5gXTUAo4gXQA50AAAUA51AAAAo5AXQUAo4AXTAAAAg6UAAAAg7go4AXQUgo5AXTg51AAAUg50AAAgo4gXTg");
	var mask_13_graphics_33 = new cjs.Graphics().p("EhlgA5oUgqEgX3AABghxUgABghwAqEgX5UAqCgX3A7eAAAUA7eAAAAqEAX3UAqDAX5AAAAhwUAAAAhxgqDAX3UgqEAX5g7eAAAUg7eAAAgqCgX5g");
	var mask_13_graphics_34 = new cjs.Graphics().p("EhoUA7EUgrOgYdAAAginUAAAgimArOgYgUArNgYdA9HAAAUA9IAAAArNAYdUArOAYgAAAAimUAAAAingrOAYdUgrNAYgg9IAAAUg9HAAAgrNgYgg");
	var mask_13_graphics_35 = new cjs.Graphics().p("EhrIA8hUgsYgZEAAAgjdUAAAgjcAsYgZGUAsXgZEA+xAAAUA+xAAAAsYAZEUAsYAZGAAAAjcUAAAAjdgsYAZEUgsYAZGg+xAAAUg+xAAAgsXgZGg");
	var mask_13_graphics_36 = new cjs.Graphics().p("Eht8A99UgtjgZpAAAgkUUAAAgkSAtjgZtUAtigZqBAaAAAUBAbAAAAtiAZqUAtjAZtAAAAkSUAAAAkUgtjAZpUgtiAZthAbAAAUhAaAAAgtigZtg");
	var mask_13_graphics_37 = new cjs.Graphics().p("EhwwA/ZUgutgaQAAAglJUAAAglJAutgaTUAutgaQBCDAABUBCFgABAusAaQUAutAaTAAAAlJUAAAAlJgutAaQUgusAaThCFAAAUhCDAAAgutgaTg");
	var mask_13_graphics_38 = new cjs.Graphics().p("EhzkBA2Ugv4ga2AAAgmAUAAAgl/Av4ga5UAv3ga2BDtAAAUBDuAAAAv3Aa2UAv4Aa5AAAAl/UAAAAmAgv4Aa2Ugv3Aa5hDuAAAUhDtAAAgv3ga5g");
	var mask_13_graphics_39 = new cjs.Graphics().p("Eh2YBCSUgxCgbcAAAgm2UAAAgm1AxCgbgUAxBgbcBFXAAAUBFXAAAAxCAbcUAxCAbgAAAAm1UAAAAm2gxCAbcUgxCAbghFXAAAUhFXAAAgxBgbgg");
	var mask_13_graphics_40 = new cjs.Graphics().p("Eh5MBDvUgyNgcDAAAgnsUAAAgnrAyNgcGUAyMgcDBHAAAAUBHBAAAAyMAcDUAyNAcGAAAAnrUAAAAnsgyNAcDUgyMAcGhHBAAAUhHAAAAgyMgcGg");
	var mask_13_graphics_41 = new cjs.Graphics().p("Eh8ABFMUgzXgcpAAAgojUAAAgohAzXgctUAzXgcpBIpAAAUBIqAAAAzXAcpUAzXActAAAAohUAAAAojgzXAcpUgzXAcshIqAAAUhIpAAAgzXgcsg");
	var mask_13_graphics_42 = new cjs.Graphics().p("Eh+0BGoUg0igdQAAAgpYUAAAgpXA0igdUUA0hgdPBKTAAAUBKUAAAA0hAdPUA0iAdUAAAApXUAAAApYg0iAdQUg0hAdThKUgABUhKTAABg0hgdTg");
	var mask_13_graphics_43 = new cjs.Graphics().p("EiBoBIEUg1sgd2AAAgqOUAAAgqOA1sgd5UA1sgd1BL8AAAUBL9AAAA1sAd1UA1sAd5AAAAqOUAAAAqOg1sAd2Ug1sAd5hL9AABUhL8gABg1sgd5g");
	var mask_13_graphics_44 = new cjs.Graphics().p("EiEcBJgUg23gebAABgrFUgABgrEA23gegUA22gebBNmAAAUBNmAAAA23AebUA23AegAAAArEUAAAArFg23AebUg23AeghNmAAAUhNmAAAg22gegg");
	var mask_13_graphics_45 = new cjs.Graphics().p("EiHPBK9Ug4CgfCAAAgr7UAAAgr6A4CgfGUA4AgfCBPPAAAUBPQAAAA4BAfCUA4BAfGAAAAr6UAAAAr7g4BAfCUg4BAfGhPQAAAUhPPAAAg4AgfGg");
	var mask_13_graphics_46 = new cjs.Graphics().p("EiKDBMaUg5MgfpgABgsxUAABgswA5MgfsUA5LgfpBQ4AAAUBQ6AAAA5LAfpUA5LAfsAAAAswUAAAAsxg5LAfpUg5LAfshQ6AAAUhQ4AAAg5Lgfsg");
	var mask_13_graphics_47 = new cjs.Graphics().p("EiM4BN2Ug6WggPAAAgtnUAAAgtmA6WggTUA6WggPBSiAAAUBSjAAAA6WAgPUA6WAgTAAAAtmUAAAAtng6WAgPUg6WAgThSjAAAUhSiAAAg6WggTg");
	var mask_13_graphics_48 = new cjs.Graphics().p("EiPsBPSUg7hgg1AAAgudUAAAgucA7hgg6UA7hgg0BULAAAUBUMAAAA7hAg0UA7hAg6AAAAucUAAAAudg7hAg1Ug7hAg5hUMAAAUhULAAAg7hgg5g");
	var mask_13_graphics_49 = new cjs.Graphics().p("EiSgBQvUg8rghbAAAgvUUAAAgvTA8rghfUA8sghbBV0AAAUBV1AAAA8rAhbUA8sAhfAAAAvTUAAAAvUg8sAhbUg8rAhfhV1AAAUhV0AAAg8sghfg");
	var mask_13_graphics_50 = new cjs.Graphics().p("EiVUBSLUg91giBAAAgwKUAAAgwJA91giFUA92giCBXeAAAUBXfAAAA91AiCUA92AiFAABAwJUgABAwKg92AiBUg91AiGhXfAAAUhXeAAAg92giGg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:mask_13_graphics_0,x:783.25,y:90.05}).wait(1).to({graphics:mask_13_graphics_1,x:783.25,y:90.05}).wait(1).to({graphics:mask_13_graphics_2,x:783.275,y:90.05}).wait(1).to({graphics:mask_13_graphics_3,x:783.275,y:90.05}).wait(1).to({graphics:mask_13_graphics_4,x:783.3,y:90.075}).wait(1).to({graphics:mask_13_graphics_5,x:783.3,y:90.05}).wait(1).to({graphics:mask_13_graphics_6,x:783.3,y:90.05}).wait(1).to({graphics:mask_13_graphics_7,x:783.325,y:90.05}).wait(1).to({graphics:mask_13_graphics_8,x:783.325,y:90.05}).wait(1).to({graphics:mask_13_graphics_9,x:783.325,y:90.075}).wait(1).to({graphics:mask_13_graphics_10,x:783.325,y:90.05}).wait(1).to({graphics:mask_13_graphics_11,x:783.35,y:90.05}).wait(1).to({graphics:mask_13_graphics_12,x:783.375,y:90.075}).wait(1).to({graphics:mask_13_graphics_13,x:783.375,y:90.05}).wait(1).to({graphics:mask_13_graphics_14,x:783.375,y:90.075}).wait(1).to({graphics:mask_13_graphics_15,x:783.375,y:90.075}).wait(1).to({graphics:mask_13_graphics_16,x:783.375,y:90.05}).wait(1).to({graphics:mask_13_graphics_17,x:783.4,y:90.075}).wait(1).to({graphics:mask_13_graphics_18,x:783.425,y:90.075}).wait(1).to({graphics:mask_13_graphics_19,x:783.425,y:90.075}).wait(1).to({graphics:mask_13_graphics_20,x:783.45,y:90.075}).wait(1).to({graphics:mask_13_graphics_21,x:783.45,y:90.05}).wait(1).to({graphics:mask_13_graphics_22,x:783.45,y:90.075}).wait(1).to({graphics:mask_13_graphics_23,x:783.45,y:90.075}).wait(1).to({graphics:mask_13_graphics_24,x:783.45,y:90.075}).wait(1).to({graphics:mask_13_graphics_25,x:783.5,y:90.075}).wait(1).to({graphics:mask_13_graphics_26,x:783.5,y:90.075}).wait(1).to({graphics:mask_13_graphics_27,x:783.5,y:90.075}).wait(1).to({graphics:mask_13_graphics_28,x:783.5,y:90.075}).wait(1).to({graphics:mask_13_graphics_29,x:783.5,y:90.1}).wait(1).to({graphics:mask_13_graphics_30,x:783.5,y:90.075}).wait(1).to({graphics:mask_13_graphics_31,x:783.525,y:90.075}).wait(1).to({graphics:mask_13_graphics_32,x:783.525,y:90.075}).wait(1).to({graphics:mask_13_graphics_33,x:783.55,y:90.075}).wait(1).to({graphics:mask_13_graphics_34,x:783.575,y:90.1}).wait(1).to({graphics:mask_13_graphics_35,x:783.575,y:90.075}).wait(1).to({graphics:mask_13_graphics_36,x:783.575,y:90.075}).wait(1).to({graphics:mask_13_graphics_37,x:783.575,y:90.1}).wait(1).to({graphics:mask_13_graphics_38,x:783.575,y:90.075}).wait(1).to({graphics:mask_13_graphics_39,x:783.6,y:90.1}).wait(1).to({graphics:mask_13_graphics_40,x:783.625,y:90.1}).wait(1).to({graphics:mask_13_graphics_41,x:783.625,y:90.075}).wait(1).to({graphics:mask_13_graphics_42,x:783.625,y:90.1}).wait(1).to({graphics:mask_13_graphics_43,x:783.625,y:90.1}).wait(1).to({graphics:mask_13_graphics_44,x:783.65,y:90.1}).wait(1).to({graphics:mask_13_graphics_45,x:783.65,y:90.1}).wait(1).to({graphics:mask_13_graphics_46,x:783.65,y:90.075}).wait(1).to({graphics:mask_13_graphics_47,x:783.675,y:90.1}).wait(1).to({graphics:mask_13_graphics_48,x:783.675,y:90.1}).wait(1).to({graphics:mask_13_graphics_49,x:783.7,y:90.1}).wait(1).to({graphics:mask_13_graphics_50,x:783.7,y:90.1}).wait(145));

	// Layer_25
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("Eg8OAKHQx8hvtiroQgagXgLABQgNABgOAiIguBzIgDgGIgUgUQgKgKgMgGQgIgEgFgFQgFgFAAgKIAAgUIgvgYIAyh8QARgqAiheQAKgfAKgDQALgDAWAWQB3B3CvCGQNdKTQTBCQRyBHRgm+IJFjuQFeiQDthUQICi2I1hUQIPhOJHAFQTfAKSWHrIIsDnQE9CAD2BQQEyBjEmA6QA1AKAJALQAJAKAAA2QAABEgLAGQgKAGhGgUQg7gRhqgWQh3gagugMQkDhDkxhyQjPhNlWiQQmHikkOhhQlsiCk9hJQm3hmnggiQm3gfnpAYQoVAaoaCDQn5B7oKDaIo5DsQlFCCj/BQQr2DsrzAAQjnAAjmgWg");
	this.shape_19.setTransform(68.1,20.7339);

	var maskedShapeInstanceList = [this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(195));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-677.5,-353.3,1355,706.6);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AHqBqQgQgEgLgJQgMgJgHgQQgHgQAAgXQAAgXAIgQQAIgPANgJQAMgKAOgEQAOgEANABQAMgBAMADQANAEAMAIQALAKAHARQAIARAAAeIAAAIIhkAAQACAPAIAGQAIAFANgBQANAAAMgEQAMgFAIgFIAVAjQgPAJgSAFQgSAFgTAAQgQAAgPgEgAIfAMQgCgMgGgGQgGgFgLgBQgIABgGAFQgHAGgCAMIAwAAIAAAAgAltBqQgOgDgMgJQgNgKgHgQQgIgQAAgXQAAgZAIgPQAHgPAMgKQANgIAOgEQAPgEAOABQAPgBAOAEQAPAEAMAIQANAKAHAPQAHAPABAZQgBAXgHAQQgHAQgNAKQgMAJgPADQgOAEgPAAQgOAAgPgEgAlkAAQgFALAAASQAAALACAKQACAJAGAGQAFAFAKAAQAOAAAGgMQAGgKAAgTQAAgMgCgJQgDgIgFgFQgGgFgKgBQgOABgGAKgAoSBqQgOgDgMgJQgMgKgHgQQgHgQAAgXQAAgZAHgPQAIgPANgKQAMgIAOgEQAPgEANABQAWAAAPAGQAOAHAIALQAIAMAEANIgwAOQgEgNgGgEQgGgGgIAAQgNABgFAKQgGALAAASQAAALACAKQACAJAFAGQAFAFAKAAQAHAAAHgFQAHgFAEgPIAwAQQgFALgJAMQgIALgPAHQgPAIgWAAQgOAAgOgEgAK5BqIgYgnIgWAnIg6AAIA1hQIgxhLIA8AAIAVAkIAUgkIA5AAIgxBLIAzBQgAFlBqIAAheQAAgJgCgDQgDgEgHAAQgHAAgFADIgLAGIAABlIg6AAIAAheQAAgJgCgDQgCgEgIAAQgHAAgFADIgLAGIAABlIg6AAIAAibIA6AAIAAAZQADgGAHgHQAGgFAKgFQAKgFAMABQAUAAAKAGQAKAIADANQADgGAHgHQAGgFAKgFQAKgFAMABQAQAAAKAFQAKAHAFAKQAFAMAAAOIAABtgABeBqIgNgoIhEAAIgNAoIg1AAIBLjXIA2AAIBNDXgABEAZIgUg7IgBAAIgVA7IAqAAgAiFBqIAAheQAAgJgDgDQgDgEgHAAQgIAAgGADQgGACgGAEIAABlIg6AAIAAibIA6AAIAAAZQADgGAHgHQAHgFAKgFQAKgFAPABQAMgBAKAEQAKAFAGAKQAHAKAAARIAABwgArOBqIALgyIgXAAIgLAyIgzAAIAKgyIgfAAIAAgqIAFAAIAPAAIAUAAIAGgdIghAAIAAgrIAqAAIALgyIAzAAIgKAyIAXAAIAKgyIA0AAIgLAyIAlAAIAAArIguAAIgGAdIAoAAIAAAqIgxAAIgKAygArSAOIARAAIAHAAIAGgdIgXAAgAMFBqIAAgnIApAAIAAAng");
	this.shape.setTransform(-5.325,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-92.6,-22.8,185.2,45.7), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AM2BuQgTAAgRgIQgRgIgLgSQgLgSAAgcQAAgcALgQQALgSARgIQARgIATAAQATAAARAIQARAIAKASQALAQAAAcQAAAcgLASQgKASgRAIQgQAIgSAAIgCAAgAMZgFQgKAMAAAXQAAAPAEALQAEALAJAHQAIAGAOAAQATAAAKgNQAKgNAAgYQAAgOgEgLQgFgKgIgGQgJgHgNAAQgUAAgJANgACrBmQgRgIgKgSQgLgSAAgcQAAgVAHgPQAHgPALgJQAKgKANgEQANgEAMAAQARAAAQAHQAPAIAJASQAKASAAAfIAAAIIhpAAQACAVALAJQALAKARAAQAPAAAKgFQAKgFAIgIIATASQgMAOgQAHQgQAHgUAAQgUAAgQgIgADxAPQgCgQgJgJQgIgJgQAAQgOgBgKAJQgKAIgDASIBIAAIAAAAgAkdBmQgRgIgKgSQgLgSAAgcQAAgVAHgPQAHgPALgJQAKgKANgEQANgEAMAAQARAAAQAHQAPAIAJASQAKASAAAfIAAAIIhpAAQACAVALAJQALAKARAAQAPAAAKgFQAKgFAIgIIATASQgMAOgQAHQgQAHgUAAQgUAAgQgIgAjXAPQgCgQgJgJQgIgJgQAAQgOgBgKAJQgKAIgDASIBIAAIAAAAgAGuBpQgKgFgFgJQgGgIAAgNQAAgRAKgNQAKgMAWgJQAWgJAkgEIAAgEQAAgLgHgFQgGgFgNAAQgPAAgNAGQgNAHgKAHIgRgVQAMgMATgIQASgIAYAAQAVAAAMAGQAMAHAFAMQAGAMgBARIAAA/IABAXQABAJADAGIgkAAIgCgJIgBgLQgMAMgOAFQgOAFgRAAQgMAAgKgEgAHMArQgQAIAAAMQAAAJAGAFQAFAFAKAAQAOAAAKgFQALgFAJgIIAAgiQggAFgRAIgAs1BsIhKjWIAlAAIA3CmIAAAAIA4imIAiAAIhKDWgAKpBrIAAhlQAAgMgFgGQgGgGgMAAQgLAAgKAGQgKAFgKAIIAABqIgkAAIAAiYIAkAAIAAAUQAFgFAIgFQAHgGALgDQALgEAOAAQAUAAAMALQAMAMAAAXIAABtgAExBrIAAiYIAjAAIAAAZIABAAQAHgMANgIQANgIAWAAIACAAIgBAgIgFAAIgFAAQgRAAgLAHQgLAHgIAMIAABhgAAkBrIg3iYIAlAAIAlBvIABAAIAlhvIAiAAIg3CYgAiWBrIAAjVIAkAAIAADVgAnPBrIAAiYIAkAAIAACYgApABrIg4iYIAmAAIAlBvIABAAIAlhvIAiAAIg3CYgAqyBrIAAiYIAjAAIAACYgAnJg9IAbgwIAmAAIgqAwgAqzhIIAAgfIAlAAIAAAfg");
	this.shape.setTransform(-1.275,0.1514);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-97.3,-22.5,193.1,45.1), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.329)").s().p("AR/ArQgKAAgIgEQgIgFgFgIIABAAIgEgIIAAADQAAAGgDAFQgDAFgGADIAAAAQgGADgKAAQgHAAgFgBIAAAAQgGgDgEgEIAAAAIgFgHIgCAEQgDAFgHADIAAAAQgGADgJAAQgHAAgGgBIAAAAQgFgDgFgEIAAAAIgDgDIAAAGIgBADIgDABIgqAAIgDgBIgCgDIAAg6IACgEIADgBIAoAAIAEABIABAEIAAAKIgBADIgEACIgXAAIAAAEIAQAAIADABIABACIAAALIgBADIgDABIgQAAIAAAGIAZAAIABAAIACgDIAJgFIACgBIADABIABACQACADAEACIAAAAQADACADAAIAFgBIABAAIAAgBIgBgCIgHgCIgJgDIABAAIgIgEIAAABQgEgDgCgEQgDgEAAgFQAAgHADgFIAAAAQAEgFAGgCIAAgBQAFgCAIAAIAAAAIAMACQAFACAEADIAAABIAGAGIABACIgBADIgBABIgKAGIgCABIgBAAIAHADQAEADADAEIAAAAQACAEAAAFIAJgFIACgBIACABIACACQACADADACIABAAQADACADAAIAFgBIAAAAIABgBIgBgCIgIgCIgIgDIAAAAIgIgEIABABQgFgDgCgEQgDgEAAgFQABgHADgFIAAAAQAEgFAFgCIAAgBQAGgCAHAAIABAAIALACQAGACADADIABABIAGAGIAAACIAAADIgCABIgJAGIgCABIgCgBIAIAEQAEADACAEIAAAAIABACIAAgFQAAgIAEgIQAFgJAIgEQAIgFAKAAIABAAQAJAAAIAFIAAAAQAIAFAEAHIAAAAQAFAIAAAJIAAABQAAAJgFAIQgEAIgIAFQgIAEgKAAIAAAAgAQ1AoQAFACAHAAQAJAAAGgDQAGgDADgFQADgEAAgGQAAgGgCgDIAAgBQgCgDgEgCIgIgEIAAAAIgHgCIgHgBIAAAAIgDgCIgBgCIABgCIABAAIAEgBQAEAAADACIAAAAQADACACADIABABIACAAIABAAIAKgHIABgBIAAgBIgBgCIgGgGIAAAAQgDgEgFgCIgLgCIgBAAQgHABgFACIAAAAQgGACgDAFIAAAAQgDAFAAAGQAAAEACAEIAAAAQACAEAEACIAAAAIAIAEIgBgBIAJADIAIADIABADQABAAgBAAQAAABAAAAQAAAAAAABQAAAAgBAAIAAAAQgDACgDAAQgEAAgDgDIgBAAQgDgCgDgEIgBgBIgBAAIgCAAIgJAGIgBABIAAADQACAFAEADIAAAAQAEAEAFACgAP/AoQAFACAHAAQAJAAAGgDQAGgDACgFQADgEAAgGQABgGgCgDIgBgBQgCgDgDgCIgIgEIAAAAIgIgCIgGgBIgBAAIgDgCIAAgCIABgCIAAAAIAEgBQAEAAAEACIgBAAQAEACABADIABABIACAAIACAAIAJgHIABgBIAAgBIAAgCIgGgGIAAAAQgDgEgGgCIgLgCIAAAAQgHABgGACIAAAAQgFACgEAFIAAAAQgCAFgBAGQAAAFADADQACAEAEACIAAAAIAHAEIAAgBIAIADIAIADIACADQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgBAAQgCACgEAAQgEAAgDgDIAAAAQgEgCgCgEIgBgBIgCAAIgBAAIgKAGIgBABIAAADIAAgBIgCgBIgaAAIAAgIIARAAIACgBIABgCIAAgLIgBgCIgCAAIgRAAIAAgHIAYAAIACgBIABgCIAAgKIgBgCIgCgBIgoAAIgCABIgBACIAAA6IABACIACABIAqAAIACgBIABgCIAAgLQACAEADADIAAAAQAEAEAGACgARugUQgIAFgEAHQgEAIgBAIQABAKAEAHQAEAIAIAEQAIAFAJAAQAJAAAIgFQAIgEAEgIQAEgHABgJIAAgBQgBgJgEgHQgEgHgIgFQgHgEgJgBIgBAAQgJABgIAEgAQGgGIAAAAIgBABIABAAIACACIAAAAIAGADIABAAIAHAAIAAAAIAAAAIgCAAQgCgDgDgCIgGgBIAAAAIgDAAgAIsAoIAAAAQgHgEgEgJIAAAAQgEgHAAgMQAAgLAEgHIAAAAQAEgIAHgEQAHgEAJAAIAAAAQAJAAAFACIAAABQAHADADAFIgBAAQAEAFABAGIAAAEIgDAAIgMAEIgDAAIgCgDIgDgGQgCgBgDAAQgEAAgCADQgDADAAAIIABAJQABADACACQABABAAAAQABAAABAAQAAABABAAQAAAAABAAQADAAACgCIAAAAIADgHIACgDIADgBIANAEIADACIAAABIAPgoIABgDIADAAIAMAAIACAAIACADIAUA3IAAg1IABgEIADgBIANAAIACABIACABIARAYIAAgVIABgEIADgBIAMAAIAEABIABAEIAAA6IgBADIgEABIgMAAIgCAAIgBgCIgSgaIAAAYIgBADIgEABIgMAAIgDgBIAAgBIgBABIgDABIgNAAIgDAAIgBgDIgEgKIgNAAIgEAKIgCADIgCAAIgMAAIgDgBIgBgCIAAgDIABgFIAAABQgDAFgHADQgFADgJAAQgJAAgHgDgAJKAnQAGgDADgFQADgFACgHIgBgCIgBgBIgNgDIgCAAIgCACQgBAGgCACIAAAAQgCACgEAAQgDAAgDgBQgCgDgBgDQgCgEAAgGQABgIACgEIAAAAQADgEAFAAQAEAAACACIgBAAIAEAGIABACIADABIAMgDIABgBIABgCQgBgGgEgFIAAAAQgCgFgGgDIgBAAQgFgCgIgBIAAAAQgIAAgHAEQgHAEgEAIIAAAAQgEAHAAAKQAAAMAEAHIAAAAQAEAHAHAEIAAAAQAHAEAIAAQAIAAAGgDgAK4AnIABABIABABIAMAAIACgBIABgCIAAg6IgBgCIgCgBIgMAAIgCABIgBACIAAAaIgTgcIgBgBIgCAAIgNAAIgCABIgBACIAAA6IABACIACABIAMAAIACgBIABgCIAAgdgAKNApIACgBIABgBIAAgCIgVg7IgBgBIgCgBIgMAAIgCABIgBABIgVA7IAAACIABABIACABIAMAAIACgBIABgBIADgLIAQAAIAEALIABABIACABgADcAqIAAAAQgGgDgEgEIAAAAIgCgBIABACIAAADIgBACIgDABIgNAAIgDAAIgBgDIgEgKIgNAAIgEAKIgCADIgCAAIgMAAIgDgBIgBgCIAAgDIAVg6IABgDIADAAIAMAAIACAAIACADIAQArIABgBIAKgFIACgBIACABIACACQACADADACIABAAQADACADAAIAFgBIAAAAIABgBIgBgCIgIgCIgIgDIAAAAIgIgEIABABQgFgDgCgEQgDgEAAgFQABgHADgFIAAAAQAEgFAFgCIAAgBQAGgCAHAAIABAAIALACQAGACADADIABABIAGAGIAAACIAAADIgCABIgJAGIgCABIgCAAIAIADQAEADACAEIAAAAQACAEAAAGQAAAGgDAFQgDAFgGADIAAAAQgGADgKAAQgHAAgFgBgADcAoQAFACAHAAQAJAAAGgDQAGgDADgFQADgEAAgGQAAgGgCgDIAAgBQgCgDgEgCIgIgEIAAAAIgHgCIgHgBIAAAAIgDgCIgBgCIABgCIABAAIAEgBQAEAAADACIAAAAQADACACADIABABIACAAIABAAIAKgHIABgBIAAgBIgBgCIgGgGIAAAAQgDgEgFgCIgLgCIgBAAQgHABgFACIAAAAQgGACgDAFIAAAAQgDAFAAAGQAAAFACADQACAEAEACIAAAAIAIAEIgBgBIAJADIAIADIABADQABAAgBAAQAAABAAAAQAAAAAAABQAAAAgBAAIAAAAQgDACgDAAQgEAAgDgDIgBAAQgDgCgDgEIgBgBIgBAAIgCAAIgJAGIgBABIAAADQACAFAEADIAAAAQAEAEAFACgADNApIACgBIABgBIAAgCIgVg7IgBgBIgCgBIgMAAIgCABIgBABIgVA7IAAACIABABIACABIAMAAIACgBIABgBIADgLIAQAAIAEALIABABIACABgADkgGIgBAAIAAABIAAAAIADACIAAAAIAGADIAAAAIAHAAIABAAIgBAAIgCAAQgBgDgDgCIgGgBIAAAAIgDAAgAASApIgFgCIgBACIgDABIgNAAIgCAAIgCgCIgLgVIAAATIgBADIgEABIgNAAIgDgBIAAgBIgBABIgDABIgNAAIgDAAIgBgDIgEgKIgNAAIgEAKIgCADIgCAAIgMAAIgDgBIgBgCIAAgDIAVg6IABgDIADAAIAMAAIACAAIACADIAUA3IAAg1IABgEIADgBIAXAAQANAAAFAFIABAAQAIAGgBAMQAAAIgEAEQgCAEgEACIAHANIAHgIIADgBIADABIAEADIAAgBIADABIACAAIABgGIAAgmIABgEIADgBIANAAIAEABIABAEIAAAoQAAAHgDAFIAAAAQgCAFgGAEIAAAAQgFACgJAAQgGAAgFgCgAAdAqQAIAAAFgDIAAAAQAGgDACgFQACgFAAgGIAAgoIgBgCIgCgBIgNAAIgCABIgBACIAAAmIgBAHIgDABIgEgBIAAAAIgEgDIgCgBIgCABIgHAIIgBACIABABIgKgRQAEgDADgEIAAAAQAEgEAAgHQAAgLgHgGQgGgEgMAAIgXAAIgCABIgBACIAAA6IABACIACABIANAAIACgBIABgCIAAgUIADAAIALAVIABABIACABIANAAIACgBIABgCIgBgCIgBgBQADADAFABIAAAAQAFADAGAAgAgsApIACgBIABgBIAAgCIgVg7IgBgBIgCgBIgMAAIgCABIgBABIgVA7IAAACIABABIACABIAMAAIACgBIABgBIADgLIAQAAIAEALIABABIACABgAjLAqIAAAAQgGgDgEgEIAAAAIgCgBIABACIAAADIgBACIgDABIgNAAIgDAAIgBgDIgEgKIgNAAIgEAKIgCADIgCAAIgMAAIgBAAIgCAAIgnAAIgDgBIgCgDIAAg6IACgEIADgBIANAAIADABIABAEIAAArIAWAAIADABIARguIABgDIADAAIAMAAIACAAIACADIAQArIABgBIAKgFIACgBIACABIACACQACADADACIABAAQADACADAAIAFgBIAAAAIABgBIgBgCIgIgCIgIgDIAAAAIgIgEIABABQgFgDgCgEQgDgEAAgFQABgHADgFIAAAAQAEgFAFgCIAAgBQAGgCAHAAIABAAIALACQAGACADADIABABIAGAGIAAACIAAADIgCABIgJAGIgCABIgCAAIAIADQAEADACAEIAAAAQACAEAAAGQAAAGgDAFQgDAFgGADIAAAAQgGADgKAAQgHAAgFgBgAjLAoQAFACAHAAQAJAAAGgDQAGgDADgFQADgEAAgGQAAgGgCgDIAAgBQgCgDgEgCIgIgEIAAAAIgHgCIgHgBIAAAAIgDgCIgBgCIABgCIABAAIAEgBQAEAAADACIAAAAQADACACADIABABIACAAIABAAIAKgHIABgBIAAgBIgBgCIgGgGIAAAAQgDgEgFgCIgLgCIgBAAQgHABgFACIAAAAQgFACgEAFIAAAAQgDAFAAAGQAAAFACADQACAEAEACIAAAAIAIAEIgBgBIAJADIAIADIABADQABAAgBAAQAAABAAAAQAAAAAAABQAAAAgBAAIAAAAQgDACgDAAQgEAAgDgDIgBAAQgDgCgDgEIgBgBIgBAAIgCAAIgJAGIgBABIAAADQACAFAEADIAAAAQAEAEAFACgAjaApIACgBIABgBIAAgCIgVg7IgBgBIgCgBIgMAAIgCABIgBABIgSAzIAAgCIgBgCIgCgBIgXAAIAAgsIgBgCIgCgBIgNAAIgCABIgBACIAAA6IABACIACABIAnAAIABgBIACABIAMAAIACgBIABgBIADgLIAQAAIAEALIABABIACABgAjDgGIgBAAIAAABIAAAAIADACIAAAAIAGADIAAAAIAHAAIABAAIgBAAIgCAAQgBgDgDgCIgGgBIAAAAIgDAAgAl9AqIAAAAQgGgDgEgEIAAAAIgBAAIABABIAAADIgCACIgDABIgNAAIgCAAIgCgDIgDgKIgOAAIgDAKIgCADIgDAAIgMAAIgCgBIgCgCIAAgDIAVg6IACgDIACAAIAMAAIADAAIACADIAPArIABgBIAKgFIACgBIACABIACACQACADADACIABAAQADACADAAIAFgBIAAAAIABgBIgBgCIgIgCIgIgDIAAAAIgIgEIABABQgFgDgCgEQgDgEAAgFQABgHADgFIAAAAQAEgFAFgCIAAgBQAGgCAHAAIABAAIALACQAGACADADIABABIAGAGIAAACIAAADIgCABIgJAGIgCABIgCAAIAIADQAEADACAEIAAAAQACAEAAAGQAAAGgDAFQgDAFgGADIAAAAQgGADgKAAQgHAAgFgBgAl9AoQAFACAHAAQAJAAAGgDQAGgDADgFQADgEAAgGQAAgGgCgDIAAgBQgCgDgEgCIgIgEIAAAAIgHgCIgHgBIAAAAIgDgCIgBgCIABgCIABAAIAEgBQAEAAADACIAAAAQADACACADIABABIACAAIABAAIAKgHIABgBIAAgBIgBgCIgGgGIAAAAQgDgEgFgCIgLgCIgBAAQgHABgFACIAAAAQgGACgDAFIAAAAQgDAFAAAGQAAAFACADQACAEAEACIAAAAIAIAEIgBgBIAJADIAIADIABADQABAAgBAAQAAABAAAAQAAAAAAABQAAAAgBAAIAAAAQgDACgDAAQgEAAgDgDIgBAAQgDgCgDgEIgBgBIgBAAIgCAAIgJAGIgBABIAAADQACAFAEADIAAAAQAEAEAFACgAmMApIACgBIABgBIAAgCIgVg7IgBgBIgCgBIgMAAIgBABIgBABIgVA7IAAACIABABIABABIAMAAIACgBIABgBIAEgLIAQAAIAEALIABABIABABgAl1gGIgBAAIAAABIAAAAIADACIAAAAIAGADIAAAAIAHAAIABAAIgBAAIgCAAQgBgDgDgCIgGgBIAAAAIgDAAgAomAqIAAAAQgGgDgFgEIAAAAQgEgFgDgGIAAgBQgCgGgBgJQAAgIACgFIgBAAIgNAAIAAArIgBADIgDABIgNAAIgDgBIgCgDIAAgrIgNAAIgDgCIgBgDIAAgKIABgEIADgBIAwAAIAEABIABAEIAAAIIAEgFIAAgBQAFgEAGgCQAGgCAFAAQAHAAAGACQAFACAFAEIAAABQAFAEACAHIAAAAQADAGAAAIQAAAJgDAHIAAgBQgCAHgFAFIAAAAQgFAEgFADIgBAAQgFABgHAAQgFAAgGgBgAomAoIABAAQAFACAFAAQAGAAAGgCIAAAAQAGgCAEgFIAAABQAFgEACgHIAAAAQACgHAAgIQABgIgDgGIAAABQgDgHgEgEIAAgBQgEgDgGgDQgFgCgHAAQgFAAgGACQgFADgFADIAAABQgEAEgDAGIAAABQgCAFAAAIQAAAIACAHIAAAAQADAHAEAEIAAgBQAFAFAFACgApsgWIgBACIAAAKIABACIACABIAPAAIAAAtIABACIACABIANAAIACgBIABgCIAAgtIAOAAIACgBIABgCIAAgKIgBgCIgCgBIgwAAIgCABgAuWAqIAAAAQgGgDgFgEIAAAAQgEgFgDgGIAAgBIgBgEQgCAFgCAEIAAgBQgFAJgJADIABAAQgJADgKAAIgSAAIgDgBIgBgDIAAg6IABgEIADgBIASAAQALAAAHADIABAAQAIAEAFAIIAAgBQACAEACAFIABgEIAAAAQADgHAEgEIAAgBQAFgEAGgCQAGgCAFAAQAHAAAGACQAFACAFAEIAAABQAFAEACAHIAAAAQADAGAAAIQAAAJgDAHIAAgBQgCAHgFAFIAAAAQgFAEgFADIgBAAQgFABgHAAQgFAAgGgBgAuWAoIABAAQAFACAFAAQAGAAAGgCIAAAAQAGgCAEgFIAAABQAFgEACgHIAAAAQACgHAAgIQABgIgDgGIAAABQgDgHgEgEIAAgBQgEgDgGgDQgFgCgHAAQgFAAgGACQgFADgFADIAAABQgEAEgDAGIAAABQgCAFAAAIQAAAIACAHIAAAAQADAHAEAEIAAgBQAFAFAFACgAvhgWIgBACIAAA6IABACIACABIASAAQAKAAAIgEQAIgCAEgIIAAAAQAGgHgBgMQABgLgGgHIAAAAQgEgHgIgDIAAAAQgHgDgLAAIgSAAIgCABgAFrAqIgBgDIgEgKIAAAJIgBADIgDABIgMAAIgDgBIgBgBIgBABIgDABIgNAAIgDAAIgBgDIgEgKIgNAAIgEAKIgCADIgCAAIgMAAIgDgBIgBgCIAAgDIAVg6IABgDIADAAIAMAAIACAAIACADIAUA4IAAg2IACgEIADgBIARAAIADABIACACIAIAdIAJgdIABgCIADgBIARAAIAEABIABAEIAAA6IgBADIgEABIgMAAIgDgBIgCgDIAAgKIgDALIgCADIgDAAIgLAAIAAAAIgDAAgAFOApIACgBIABgBIAAgCIgVg7IgBgBIgCgBIgMAAIgCABIgBABIgVA7IAAACIABABIACABIAMAAIACgBIABgBIADgLIAQAAIAEALIABABIACABgAFrAnIABABIACABIALAAIACgBIABgBIAHgVIAAAUIABACIACABIAMAAIACgBIABgCIAAg6IgBgCIgCgBIgRAAIgCAAIgBACIgKAgIgKggIgBgCIgCAAIgRAAIgCABIgBACIAAA6IABACIACABIAMAAIACgBIABgCIAAgTgAM8AqIgCgCIgJgOIgIAOIgCACIgCAAIgOAAIgCAAIgDAAIgqAAIgDgBIgCgDIAAg6IACgEIADgBIAoAAIAEABIABADIABgDIADgBIAPAAIACABIACABIAGAMIAGgMIACgBIACgBIAOAAIADABIABADIAAADIgQAZIASAcIAAABIAAg4IACgEIADgBIAVAAQAIAAAGACQAHACADAFIAAAAQADADABAFIAAgMIACgEIADgBIAWAAQANAAAHAFIAAAAQAIAGAAAMQAAAIgEAEQgDAEgEACIALAUIABACIgCADIgDABIgOAAIgCAAIgCgCIgLgVIAAATIgBADIgDABIgNAAIgDgBIgCgDIAAgjIgCAGQgCAGgFACQgEADgGAAIABAAIgKABIgEAAIAAARIgBADIgDABIgNAAIgDgBIgBgCIgCACIgDABIgOAAIAAAAIgCAAgAOdASIAMAVIABABIABABIAOAAIACgBIABgCIAAgCIgMgUQAFgDADgEIAAAAQAEgEgBgHQAAgLgHgGQgGgEgNAAIgWAAIgCABIgBACIAAA6IABACIACABIANAAIACgBIABgCIAAgUgANTgWIgBACIAAA6IABACIACABIANAAIACgBIABgCIAAgSIAFAAIAKgBIgBAAQAFgBAEgCQAFgDACgEQADgFgBgFQAAgJgEgFIAAAAQgDgFgHgCQgGgBgHAAIgVAAIgCABgAM7AnIABABIACABIAOAAIACgBIABgCIAAgCIgTgdIAQgaIABgCIgBgCIgCAAIgOAAIgBAAIgBABIgIAOIgIgOIgBgBIgBAAIgPAAIgCAAIgBACIABACIAQAZIgSAeIAAgJIgBgCIgCgBIgaAAIAAgIIARAAIACgBIABgCIAAgLIgBgCIgCAAIgRAAIAAgHIAYAAIACgBIABgCIAAgKIgBgCIgCgBIgoAAIgCABIgBACIAAA6IABACIACABIAqAAIACgBIABgBIAAABIACABIAOAAIABgBIABgBIAKgQgAMVAYIABADIAAAEIAPgZIgPgYIgBgCIAAAKIgBADIgEACIgXAAIAAAEIAQAAIADABIABACIAAALIgBADIgDABIgQAAIAAAGIAZAAIAAAAIADABgAyMAqIgBgDIgUg6IAAgDIABgCIADgBIANAAIADABIABACIAJAcIAKgcIACgCIACgBIANAAIADABIABACIAAADIgUA6IgCADIgDAAIgMAAIAAAAIgDAAgAyfgXIgBACIAAACIAUA6IABABIACABIAMAAIACgBIABgBIAVg6IAAgCIgBgCIgCAAIgNAAIgBAAIgBACIgMAgIgKggIgBgCIgCAAIgNAAIAAAAIgCAAgAqOAqIgBgDIgEgKIgNAAIgEAKIgCADIgCAAIgMAAIgCAAIgDAAIgOAAIgCAAIgCgCIgLgVIAAATIgBADIgDABIgNAAIgDgBIgBgBIgBABIgDABIgNAAIgCAAIgCgDIgDgKIgOAAIgDAKIgCADIgDAAIgMAAIgCgBIgCgCIAAgDIAVg6IACgDIACAAIAMAAIADAAIACADIATA3IAAg1IACgEIADgBIAWAAQANAAAHAFIAAAAQAIAGAAAMQAAAIgEAEQgDAEgEACIAJAQIAUg2IABgDIADAAIAMAAIACAAIACADIAVA6IAAADIgBACIgDABIgNAAIAAAAIgDAAgAp+ApIACgBIABgBIAAgCIgVg7IgBgBIgCgBIgMAAIgCABIgBABIgUA6IgMgUQAFgDADgEIAAAAQAEgEgBgHQAAgLgHgGQgGgEgNAAIgWAAIgCABIgBACIAAA6IABACIACABIANAAIACgBIABgCIAAgUIACAAIAMAVIABABIABABIAOAAIACgBIABAAIAAAAIACABIAMAAIACgBIABgBIADgLIAQAAIAEALIABABIACABgArvApIACgBIABgBIAAgCIgVg7IgBgBIgCgBIgMAAIgBABIgBABIgVA7IAAACIABABIABABIAMAAIACgBIABgBIAEgLIAQAAIAEALIABABIABABgAw/AqIgBgDIgEgKIgNAAIgEAKIgCADIgCAAIgMAAIgDgBIgBgCIAAgDIAVg6IAAgCIABgCIAHgOIACgCIACAAIANAAIADABIACADIgBADIgKALIABACIAUA3IAAg1IABgEIADgBIANAAIAEABIABAEIAAArIAVAAIAEABIAAAAIAAgsIABgEIADgBIANAAIAEABIABAEIAAA6IgBADIgEABIgNAAIgDgBIgBgBIAAABIgEABIgnAAIgDgBIAAgBIgBABIgDABIgNAAIAAAAIgDAAgAwvApIACgBIABgBIAAgCIgVg7IgBgBIgBgBIALgMIAAgCIgBgCIgCgBIgNAAIgBABIgBABIgIAOIAAACIAAAAIgBABIgVA7IAAACIABABIACABIAMAAIACgBIABgBIADgLIAQAAIAEALIABABIACABgAv7gWIgBACIAAA6IABACIACABIANAAIACgBIABgCIAAg6IgBgCIgCgBIgNAAIgCABgAwqgWIgBACIAAA6IABACIACABIAnAAIACgBIABgCIAAgLIgBgCIgCgBIgXAAIAAgsIgBgCIgCgBIgNAAIgCABgAIXAqIgNAAIgDgBIgCgDIAAg6IACgEIADgBIANAAIADABIABAEIAAA6IgBADIgDABIAAAAgAIIgWIgBACIAAA6IABACIACABIANAAIACgBIABgCIAAg6IgBgCIgCgBIgNAAIgCABgAHeAqIgNAAIgDgBIgBgCIgBACIgEABIgqAAIgDgBIgBgDIAAg6IABgEIADgBIApAAIADABIABAEIAAAKIgBADIgDACIgXAAIAAAEIAPAAIAEABIABACIAAALIgBADIgEABIgPAAIAAAGIAYAAIAEABIAAABIAAgtIACgEIADgBIAWAAQANAAAHAFIAAAAQAIAGAAAMQAAAIgEAEQgDAEgEACIALAUIABACIgCADIgDABIgOAAIgCAAIgCgCIgLgVIAAATIgBADIgDABIAAAAgAHjASIAMAVIABABIABABIAOAAIACgBIABgCIAAgCIgMgUQAFgDADgEIAAAAQAEgEgBgHQAAgLgHgGQgGgEgNAAIgWAAIgCABIgBACIAAA6IABACIACABIANAAIACgBIABgCIAAgUgAGcgWIgBACIAAA6IABACIACABIAqAAIACgBIABgCIAAgLIgBgCIgCgBIgaAAIAAgIIARAAIACgBIABgCIAAgLIgBgCIgCAAIgRAAIAAgHIAZAAIACgBIABgCIAAgKIgBgCIgCgBIgpAAIgCABgACJAqIgNAAIgDgBIgBgDIAAgrIgNAAIgDgCIgEACIgXAAIAAAEIAQAAIADABIABACIAAALIgBADIgDABIgQAAIAAAGIAZAAIADABIABADIAAALIgBADIgDABIgqAAIgDgBIgCgDIAAg6IACgEIADgBIAoAAIAEABIADgBIAwAAIADABIABAEIAAAKIgBADIgDACIgNAAIAAArIgBADIgDABIgBAAgABpgWIgBACIAAAKIABACIACABIAOAAIAAAtIABACIACABIANAAIACgBIABgCIAAgtIAPAAIACgBIABgCIAAgKIgBgCIgCgBIgwAAIgCABgAA6gWIgBACIAAA6IABACIACABIAqAAIACgBIABgCIAAgLIgBgCIgCgBIgaAAIAAgIIARAAIACgBIABgCIAAgLIgBgCIgCAAIgRAAIAAgHIAYAAIACgBIABgCIAAgKIgBgCIgCgBIgoAAIgCABgAhwAqIgNAAIgDgBIgCgDIAAgrIgNAAIgDgCIgBgDIAAgKIABgEIADgBIAwAAIAEABIABAEIAAAKIgBADIgEACIgNAAIAAArIgBADIgDABIAAAAgAiRgWIgBACIAAAKIABACIACABIAPAAIAAAtIABACIACABIANAAIACgBIABgCIAAgtIAOAAIACgBIABgCIAAgKIgBgCIgCgBIgwAAIgCABgAn4ApIgCgDIAAg6IACgEIADgBIASAAQAKAAAIADIAAAAQAJAEAEAIIAAgBQAGAIgBALQABAMgGAIIAAgBQgEAJgJADIAAAAQgIADgKAAIgSAAIAAAAIgDgBgAn3gWIgBACIAAA6IABACIACABIASAAQAKAAAHgEQAIgCAFgIIAAAAQAFgHAAgMQAAgLgFgHIAAAAQgEgHgIgDIgBAAQgHgDgKAAIgSAAIgCABgAtDAqIgNAAIgDgBIgBgDIAAg6IABgEIADgBIAWAAQAHAAAGACQAHACAEAFIAAAAQAFAFgBAKQAAAFgCAFQgDAGgEACQgFADgFAAIAAAAIgJABIgEAAIAAARIgBADIgDABIgBAAgAtSgWIgBACIAAA6IABACIACABIANAAIACgBIABgCIAAgSIAGAAIAJgBIAAAAQAFgBAEgCQAEgDADgEQACgFAAgFQAAgJgEgFIAAAAQgEgFgGgCQgGgBgHAAIgWAAIgCABgAR0AbIADAAIAFABIADABIAEgBIAFgBIADAAIgBABIAAgBQgEADgHAAIAAAAQgGAAgFgDgAohAXIgEgFIAAAAQgBgEAAgGQAAgIADgDIAAgBQADgEAFAAQAGAAADAEIAAABQAEADgBAIQAAAGgBAEIAAAAQgBADgDACQgDACgEAAQgDAAgDgCgAobAYQAEAAACgCQACgCABgDIAAAAQACgEAAgFQAAgHgDgDIAAAAQgDgEgFAAQgEAAgCADIgBABQgDADAAAHIACAJIgBAAIAEAFIAAAAQACACADAAgAuRAXIgEgFIAAAAQgBgEAAgGQAAgIADgDIAAgBQADgEAFAAQAGAAADAEIAAABQAEADgBAIQAAAGgBAEIAAAAQgBADgDACQgDACgEAAQgDAAgDgCgAuLAYQAEAAACgCQACgCABgDIAAAAQACgEAAgFQAAgHgDgDIAAAAQgDgEgFAAQgEAAgCADIgBABQgDADAAAHIACAJIgBAAIAEAFIAAAAQACACADAAgAniAYIgDAAIAAgfIADAAQAIAAADAEIAAAAQAEADAAAIQAAAJgDAEIAAAAQgEADgIAAIAAAAgAnkAXIACAAQAHAAAEgEIAAABQADgEgBgIQAAgHgDgCIAAgBQgDgDgHAAIgCAAgAvMAYIgDAAIAAgfIADAAQAIAAAEAEIAAAAQAEADgBAIQAAAJgDAEIAAAAQgDADgIAAIgBAAgAvNAXIABAAQAIAAADgEIAAABQADgEAAgIQAAgHgDgCIgBgBQgDgDgHAAIgBAAgARtATIgBAAQgDgFAAgGQAAgGADgEIABAAIADgFIAAACIgCADIAAABIAAAAQgDADAAAGQAAAGADAEIAAABIAAABIACACIAAACIgDgFgAR+AUIAAgBIAAgCIABADIAAACIAAABgASPAVIABgCIAAAAQADgFAAgGQAAgFgCgDIAAgBIgDgEIgDgDQgEgDgHAAIgBAAIgIAAQADgCAFAAQAGAAAFADIAAAAQAFADADAFIAAAAQACAEAAAGQAAAHgCAFIgCACgASLAMIABgBIABACIgBABgAJuAMIADgIIADAIgAJxALIABAAIgBgCgAEvAMIADgIIADAIgAEyALIABAAIgBgCgACuAMIADgIIADAIgACxALIABAAIgBgCgAhLAMIADgIIADAIgAhIALIABAAIgBgCgAj5AMIADgIIADAIgAj2ALIABAAIgBgCgAmqAMIADgIIADAIgAmoALIACAAIgBgCgAqdAMIADgIIADAIgAqaALIABAAIgBgCgAsNAMIADgIIADAIgAsLALIACAAIgBgCgAxOAMIADgIIADAIgAxLALIABAAIgBgCgANrAEIgGAAIAAgLIAGAAQAFAAACABQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAIgBAAQgBACgFAAIAAAAgANmACIAFAAQAEAAABgBIABAAIAAgCIgBgEIgFAAIgFAAgAs6AEIgGAAIAAgLIAGAAQAFAAACABQABABAAAAQAAABAAAAQAAABAAABQABAAgBABQABAAgBABQAAAAAAAAQAAABAAAAQAAABgBAAIAAAAQgCACgEAAIgBAAgAs+ACIAEAAQAEAAACgBIAAAAIABgCIgBgEIgGAAIgEAAgAR+AEIAAgDIABAAIAAADgAOgACIgFAAIAAgJIAFAAQAFAAACABIABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIAAAAIgGABIgBAAgAOcABIAEAAIAHgBIgBAAIABgCIAAgCIgBAAIgGgBIgEAAgAHmACIgFAAIAAgJIAFAAQAFAAACABIABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIAAAAIgGABIgBAAgAHiABIAEAAIAHgBIgBAAIABgCIAAgCIgBAAIgGgBIgEAAgAgPACIgGAAIAAgJIAGAAQAFAAACABIAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIAAAAIgHABIAAAAgAgTABIAEAAIAGgBIAAAAIABgCIgBgCIAAAAIgGgBIgEAAgArSACIgFAAIAAgJIAFAAQAFAAACABIABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIAAAAIgGABIgBAAgArWABIAEAAIAHgBIgBAAIABgCIAAgCIgBAAIgGgBIgEAAg");
	this.shape.setTransform(-29.449,0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.663)").s().p("AASAnIAAAAQgFgBgDgDIABABIABACIgBACIgCABIgNAAIgCgBIgBgBIgLgVIgDAAIAAAUIgBACIgCABIgNAAIgCgBIgBgCIAAg6IABgCIACgBIAXAAQAMAAAGAEQAHAGAAALQAAAHgEAFIAAAAQgDADgEADIAKARIgBgBIABgCIAHgIIACgBIACABIAEADIAAAAIAEABIADgBIABgHIAAgmIABgCIACgBIANAAIACABIABACIAAAoQAAAGgCAFQgCAFgGADIAAAAQgFADgIAAIAAAAQgGAAgFgDgAAdAoQAIAAAEgCIABAAQAFgDACgEIAAAAQACgFAAgGIAAgoIgBgBIgBgBIgNAAIgBABIAAABIAAAmIgCAIIAAgBQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgBIgFgDIgBAAIgBAAIgHAIIAAABIAAABQADAEAFABIAAAAQAEACAGAAgAgRARIAMAVIAAABIABAAIANAAIABAAIAAgBIAAgBIgLgWQAEgCADgEQADgFAAgGQABgLgHgEIAAAAQgGgFgLAAIgXAAIgBABIAAABIAAA6IAAABIABAAIANAAIABAAIABgBIAAgVgAI8AqQgIAAgHgEIAAAAQgHgEgEgHIAAAAQgEgHAAgMQAAgKAEgHIAAAAQAEgIAHgEQAHgEAIAAIAAAAQAIABAFACIABAAQAGADACAFIAAAAQAEAFABAGIgBACIgBABIgMADIgDgBIgBgBIgEgHIABAAQgCgCgEAAQgFAAgDAEIAAAAQgDAEAAAIQAAAGACAEQABADACADQADABADAAQAEAAACgCIAAAAQACgCABgGIACgCIACAAIANADIABABIABACQgCAHgDAFQgEAFgFADQgGADgIAAIAAAAgAIugTQgHADgDAIQgEAGAAAKQAAALAEAHQADAHAHAEQAGADAIAAQAIAAAFgDQAGgCADgFQADgFABgGIAAgBIgBgBIgMgDIgBABIgBABQgBAFgDADIAAAAQgCADgFAAQgEAAgDgCQgCgDgCgEQgBgEAAgGQAAgIADgFQADgEAGAAQAEAAADACIADAHIABABIABAAIAMgCIABgBIAAgBQgBgGgDgEIAAAAQgCgFgGgCIAAgBQgFgCgIAAQgIAAgGAEgARBAqQgHAAgFgCQgFgCgEgEIAAAAQgEgDgCgFIAAgDIABgBIAJgGIACAAIABAAIABABQADAEADACIABAAQADADAEAAQADAAADgCIAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgBgDIgIgDIgJgDIABABIgIgEIAAAAQgEgCgCgEIAAAAQgCgEAAgEQAAgGADgFIAAAAQADgFAGgCIAAAAQAFgCAHgBIABAAIALACQAFACADAEIAAAAIAGAGIABACIAAABIgBABIgKAHIgBAAIgCAAIgBgBQgCgDgDgCIAAAAQgDgCgEAAIgEABIgBAAIgBACIABACIADACIAAAAIAHABIAHACIAAAAIAIAEQAEACACADIAAABQACADAAAGQAAAGgDAEQgDAFgGADQgGADgIAAIgBAAgAQ2AnQAFABAGAAQAJAAAFgDIABAAQAFgCADgFQACgEAAgFQAAgFgBgEQgDgDgDgCIgHgEIAAAAIgIgCIAAAAIgGgBIgBAAIgDgCIgBgDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAAAAQACgBADAAQAEAAAEACQADACACADIABABIAAAAIABAAIAKgHIAAAAIAAgBIAAgBIgGgGIAAAAQgDgEgFgBIgKgCIgBAAQgGAAgGACIAAABQgEACgEAEIAAAAQgDAEAAAGQAAAEADADQABAEAEACIAHADIAIADIAJADQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAAAAAABQgBAAAAABQgDABgEAAQgFAAgDgCIAAAAQgEgDgDgEIgBgBIgBABIgJAFIgBABIAAABQACAFAEADIAAAAQAEAEAFACgAQLAqQgHAAgFgCQgGgCgEgEIAAAAQgDgDgCgEIAAALIgBACIgCABIgqAAIgCgBIgBgCIAAg6IABgCIACgBIAoAAIACABIABACIAAAKIgBACIgCABIgYAAIAAAHIARAAIACAAIABACIAAALIgBACIgCABIgRAAIAAAIIAaAAIACABIAAABIAAgDIABgBIAKgGIABAAIACAAIABABQACAEAEACIAAAAQADADAEAAQAEAAACgCIABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIgCgDIgIgDIgIgDIAAABIgHgEIAAAAQgEgCgCgEQgDgDAAgFQAAgGADgFIAAAAQAEgFAFgCIAAAAQAGgCAHgBIAAAAIALACQAGACADAEIAAAAIAGAGIAAACIAAABIgBABIgJAHIgCAAIgCAAIgBgBQgBgDgEgCIABAAQgEgCgEAAIgEABIAAAAIgBACIAAACIADACIABAAIAGABIAIACIAAAAIAIAEQADACACADIABABQABADAAAGQAAAGgDAEQgCAFgGADQgGADgJAAIAAAAgAP/AnQAFABAHAAQAIAAAGgDIAAAAQAGgCACgFQADgEAAgFQAAgFgCgEQgCgDgDgCIgIgEIAAAAIgHgCIAAAAIgHgBIAAAAIgEgCIgBgDQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAAAAQACgBADAAQAFAAADACQAEACACADIAAABIABAAIABAAIAJgHIABAAIAAgBIAAgBIgGgGIAAAAQgDgEgFgBIgLgCIAAAAQgHAAgFACIAAABQgFACgDAEIAAAAQgDAEAAAGQAAAEACADQACAEAEACIAGADIAJADIAIADQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBABQgDABgEAAQgEAAgEgCIAAAAQgEgDgCgEIgBgBIgBABIgKAFIgBABIABABQACAFADADIAAAAQAEAEAFACgAPCgVIgBABIAAA6IABABIABAAIAqAAIABAAIAAgBIAAgLIAAgBIgBAAIgcAAIAAgMIATAAIABAAIAAgBIAAgLIAAgBIgBAAIgTAAIAAgJIAaAAIABgBIABgBIAAgKIgBgBIgBgBIgoAAIgBABgADoAqQgHAAgFgCQgFgCgEgEIAAAAQgEgDgCgFIAAgDIABgBIAJgGIACAAIABAAIABABQADAEADACIABAAQADADAEAAQADAAADgCIAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgBgDIgIgDIgJgDIABABIgIgEIAAAAQgEgCgCgEQgCgDAAgFQAAgGADgFIAAAAQADgFAGgCIAAAAQAFgCAHgBIABAAIALACQAFACADAEIAAAAIAGAGIABACIAAABIgBABIgKAHIgBAAIgCAAIgBgBQgCgDgDgCIAAAAQgDgCgEAAIgEABIgBAAIgBACIABACIADACIAAAAIAHABIAHACIAAAAIAIAEQAEACACADIAAABQACADAAAGQAAAGgDAEQgDAFgGADQgGADgIAAIgBAAgADdAnQAFABAGAAQAJAAAFgDIABAAQAFgCADgFQACgEAAgFQAAgFgBgEQgDgDgDgCIgHgEIAAAAIgIgCIAAAAIgGgBIgBAAIgDgCIgBgDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAAAAQACgBADAAQAEAAAEACQADACACADIABABIAAAAIABAAIAKgHIAAAAIAAgBIAAgBIgGgGIAAAAQgDgEgFgBIgKgCIgBAAQgGAAgGACIAAABQgEACgEAEIAAAAQgDAEAAAGQAAAEADADQABAEAEACIAHADIAIADIAJADQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAAAAAABQgBAAAAABQgDABgEAAQgEAAgEgCIAAAAQgEgDgDgEIgBgBIgBABIgJAFIgBABIAAABQACAFAEADIAAAAQAEAEAFACgAi/AqQgHAAgFgCQgFgCgEgEIAAAAQgEgDgCgFIAAgDIABgBIAJgGIACAAIABAAIABABQADAEADACIABAAQADADAEAAQADAAADgCIAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgBgDIgIgDIgJgDIABABIgIgEIAAAAQgEgCgCgEQgCgDAAgFQAAgGADgFIAAAAQADgFAGgCIAAAAQAFgCAHgBIABAAIALACQAFACADAEIAAAAIAGAGIABACIAAABIgBABIgKAHIgBAAIgCAAIgBgBQgCgDgDgCIAAAAQgDgCgEAAIgEABIgBAAIgBACIABACIADACIAAAAIAHABIAHACIAAAAIAIAEQAEACACADIAAABQACADAAAGQAAAGgDAEQgDAFgGADQgGADgIAAIgBAAgAjKAnQAFABAGAAQAJAAAFgDIABAAQAFgCADgFQACgEAAgFQAAgFgBgEQgDgDgDgCIgHgEIAAAAIgIgCIAAAAIgGgBIgBAAIgDgCIgBgDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAAAAQACgBADAAQAEAAAEACQADACACADIABABIAAAAIABAAIAKgHIAAAAIAAgBIAAgBIgGgGIAAAAQgDgEgFgBIgKgCIgBAAQgGAAgGACIAAABQgEACgEAEIAAAAQgDAEAAAGQAAAEADADQABAEAEACIAHADIAIADIAJADQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAAAAAABQgBAAAAABQgDABgEAAQgEAAgEgCIAAAAQgEgDgDgEIgBgBIgBABIgJAFIgBABIAAABQACAFAEADIAAAAQAEAEAFACgAlxAqQgHAAgFgCQgFgCgEgEIAAAAQgEgDgCgFIAAgDIABgBIAJgGIACAAIABAAIABABQADAEADACIABAAQADADAEAAQADAAADgCIAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgBgDIgIgDIgJgDIABABIgIgEIAAAAQgEgCgCgEQgCgDAAgFQAAgGADgFIAAAAQADgFAGgCIAAAAQAFgCAHgBIABAAIALACQAFACADAEIAAAAIAGAGIABACIAAABIgBABIgKAHIgBAAIgCAAIgBgBQgCgDgDgCIAAAAQgDgCgEAAIgEABIgBAAIgBACIABACIADACIAAAAIAHABIAHACIAAAAIAIAEQAEACACADIAAABQACADAAAGQAAAGgDAEQgDAFgGADQgGADgIAAIgBAAgAl8AnQAFABAGAAQAJAAAFgDIABAAQAFgCADgFQACgEAAgFQAAgFgBgEQgDgDgDgCIgHgEIAAAAIgIgCIAAAAIgGgBIgBAAIgDgCIgBgDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAAAAQACgBADAAQAEAAAEACQADACACADIABABIAAAAIABAAIAKgHIAAAAIAAgBIAAgBIgGgGIAAAAQgDgEgFgBIgKgCIgBAAQgGAAgGACIAAABQgEACgEAEIAAAAQgDAEAAAGQAAAEADADQABAEAEACIAHADIAIADIAJADQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAAAAAABQgBAAAAABQgDABgEAAQgEAAgEgCIAAAAQgEgDgDgEIgBgBIgBABIgJAFIgBABIAAABQACAFAEADIAAAAQAEAEAFACgARuAlQgIgEgEgIQgFgHAAgKQABgIAEgIQAEgHAIgFQAHgEAKgBIABAAQAJABAHAEQAIAFAEAHQAEAHABAJIAAABQgBAJgEAHQgEAIgIAEQgIAFgJAAQgJAAgIgFgARvgSQgIAEgEAHQgEAHAAAIQAAAKAEAHQAEAHAIAEQAHAEAJAAQAJAAAHgEQAIgEAEgHQAEgIAAgJQAAgIgEgHQgEgHgHgEQgIgFgJAAQgJAAgHAFgAolAoIgBAAQgFgCgFgFIAAABQgEgEgDgHIAAAAQgCgHAAgIQAAgIACgFIAAgBQADgGAEgEIAAAAQAFgEAFgDQAGgCAFAAQAGAAAGACQAFADAFAEIAAAAQAEAEADAHIAAgBQACAGAAAIQAAAIgCAHIAAAAQgDAHgEAEIAAgBQgEAFgGACIAAAAQgGACgGAAQgFAAgFgCgAoQAnQAGgCAEgFIAAABQAEgEACgHQADgGAAgIQAAgIgDgFIAAAAQgCgGgEgEIAAgBQgEgDgGgCQgFgCgGAAQgFAAgFACQgFACgFADIAAABQgEAEgDAGQgCAFAAAIQAAAIACAGQADAHAEAEIAAgBQAFAFAFACQAFABAFAAQAGAAAFgBgAuVAoIgBAAQgFgCgFgFIAAABQgEgEgDgHIAAAAQgCgHAAgIQAAgIACgFIAAgBQADgGAEgEIAAAAQAFgEAFgDQAGgCAFAAQAGAAAGACQAFADAFAEIAAAAQAEAEADAHIAAgBQACAGAAAIQAAAIgCAHIAAAAQgDAHgEAEIAAgBQgEAFgGACIAAAAQgGACgGAAQgFAAgFgCgAuAAnQAGgCAEgFIAAABQAEgEACgHQADgGAAgIQAAgIgDgFIAAAAQgCgGgEgEIAAgBQgEgDgGgCQgFgCgGAAQgFAAgFACQgFACgFADIAAABQgEAEgDAGQgCAFAAAIQAAAIACAGQADAHAEAEIAAgBQAFAFAFACQAFABAFAAQAGAAAFgBgAK5AoIgBgBIgVgdIAAAcIgBACIgCABIgMAAIgCgBIgBgCIAAg6IABgCIACgBIANAAIACAAIABABIATAcIAAgaIABgCIACgBIAMAAIACABIABACIAAA6IgBACIgCABIgMAAIAAAAIgBgBgAK5AmIABABIAAAAIAMAAIABAAIABgBIAAg6IgBgBIgBgBIgMAAIgBABIAAABIAAAfIgWggIgBgBIgBAAIgNAAIgBABIAAABIAAA6IAAABIABAAIAMAAIABAAIABgBIAAgigAKNApIgNAAIgCgBIgBgBIgEgLIgQAAIgDALIgBABIgCABIgMAAIgCgBIgBgBIAAgCIAVg7IABgBIACgBIAMAAIACABIABABIAVA7IAAACIgBABIgCABIAAAAgAKNAnIABAAIAAgBIAAgBIgVg6IAAgBIgBAAIgMAAIgBAAIgBABIgVA6IAAABIABABIABAAIAMAAIABAAIAAgBIAFgMIARAAIAEAMIABABIABAAgAFOApIgNAAIgCgBIgBgBIgEgLIgQAAIgDALIgBABIgCABIgMAAIgCgBIgBgBIAAgCIAVg7IABgBIACgBIAMAAIACABIABABIAVA7IAAACIgBABIgCABIAAAAgAFOAnIABAAIAAgBIAAgBIgVg6IAAgBIgBAAIgMAAIgBAAIgBABIgVA6IAAABIABABIABAAIAMAAIABAAIAAgBIAFgMIARAAIAEAMIABABIABAAgADNApIgNAAIgCgBIgBgBIgEgLIgQAAIgDALIgBABIgCABIgMAAIgCgBIgBgBIAAgCIAVg7IABgBIACgBIAMAAIACABIABABIAVA7IAAACIgBABIgCABIAAAAgADNAnIABAAIAAgBIAAgBIgVg6IAAgBIgBAAIgMAAIgBAAIgBABIgVA6IAAABIABABIABAAIAMAAIABAAIAAgBIAFgMIARAAIAEAMIABABIABAAgAgsApIgNAAIgCgBIgBgBIgEgLIgQAAIgDALIgBABIgCABIgMAAIgCgBIgBgBIAAgCIAVg7IABgBIACgBIAMAAIACABIABABIAVA7IAAACIgBABIgCABIAAAAgAgsAnIABAAIAAgBIAAgBIgVg6IAAgBIgBAAIgMAAIgBAAIgBABIgVA6IAAABIABABIABAAIAMAAIABAAIAAgBIAFgMIARAAIAEAMIABABIABAAgAjaApIgNAAIgCgBIgBgBIgEgLIgQAAIgDALIgBABIgCABIgMAAIgCgBIgBABIgnAAIgCgBIgBgCIAAg6IABgCIACgBIANAAIACABIABACIAAAsIAXAAIACABIABACIAAACIASgzIABgBIACgBIAMAAIACABIABABIAVA7IAAACIgBABIgCABIAAAAgAjaAnIABAAIAAgBIAAgBIgVg6IAAgBIgBAAIgMAAIgBAAIgBABIgVA6IAAgKIAAgBIgBAAIgZAAIAAguIAAgBIgBgBIgNAAIgBABIgBABIAAA6IABABIABAAIAnAAIABAAIAAgBIAAAAIABABIABAAIAMAAIABAAIAAgBIAFgMIARAAIAEAMIABABIABAAgAmMApIgNAAIgBgBIgBgBIgEgLIgQAAIgEALIgBABIgCABIgMAAIgBgBIgBgBIAAgCIAVg7IABgBIABgBIAMAAIACABIABABIAVA7IAAACIgBABIgBABIgBAAgAmMAnIABAAIABgBIAAgBIgVg6IgBgBIgBAAIgMAAIAAAAIgBABIgVA6IAAABIAAABIABAAIAMAAIABAAIABgBIAEgMIASAAIAEAMIABABIAAAAgAp+ApIgNAAIgCgBIgBgBIgEgLIgQAAIgDALIgBABIgCABIgMAAIgCgBIAAAAIgBAAIgCABIgOAAIgBgBIgBgBIgMgVIgCAAIAAAUIgBACIgCABIgNAAIgCgBIgBgCIAAg6IABgCIACgBIAWAAQANAAAGAEQAHAGAAALQABAHgEAFIAAAAQgDADgFADIAMAUIAUg6IABgBIACgBIAMAAIACABIABABIAVA7IAAACIgBABIgCABIAAAAgArTARIALAVIABABIAAAAIAOAAIABAAIABgBIAAgBIgNgWQAFgCAEgEQADgFAAgGQAAgLgHgEIAAAAQgGgFgMAAIgWAAIgBABIgBABIAAA6IABABIABAAIANAAIABAAIAAgBIAAgVgAp+AnIABAAIAAgBIAAgBIgVg6IAAgBIgBAAIgMAAIgBAAIgBABIgVA6IAAABIABABIABAAIAMAAIABAAIAAgBIAFgMIARAAIAEAMIABABIABAAgArvApIgNAAIgBgBIgBgBIgEgLIgQAAIgEALIgBABIgCABIgMAAIgBgBIgBgBIAAgCIAVg7IABgBIABgBIAMAAIACABIABABIAVA7IAAACIgBABIgBABIgBAAgArvAnIABAAIABgBIAAgBIgVg6IgBgBIgBAAIgMAAIAAAAIgBABIgVA6IAAABIAAABIABAAIAMAAIABAAIABgBIAEgMIASAAIAEAMIABABIAAAAgAwvApIgNAAIgCgBIgBgBIgEgLIgQAAIgDALIgBABIgCABIgMAAIgCgBIgBgBIAAgCIAVg7IABgBIAAAAIAAgCIAIgOIABgBIABgBIANAAIACABIABACIAAACIgLAMIABABIABABIAVA7IAAACIgBABIgCABIAAAAgAwvAnIABAAIAAgBIAAgBIgVg6IAAgBIgBAAIgDAAIABgBIABAAIAMgOIAAgBIgBgBIgBAAIgNAAIAAAAIgBABIgHANIgBABIABABIABABIgBAAIgBAAIgBABIgVA6IAAABIABABIABAAIAMAAIABAAIAAgBIAFgMIARAAIAEAMIABABIABAAgAFsAoIgBgBIgGgUIAAATIgBACIgCABIgMAAIgCgBIgBgCIAAg6IABgCIACgBIARAAIACAAIABACIAKAgIAKggIABgCIACAAIARAAIACABIABACIAAA6IgBACIgCABIgMAAIgCgBIgBgCIAAgTIgHAUIgBABIgCABIgLAAIAAAAIgCgBgAF5AnIABAAIABgBIAJgbIAAgBIAAAcIABABIABAAIAMAAIABAAIABgBIAAg6IgBgBIgBgBIgRAAIgBAAIgBABIgLAmIgLgmIgBgBIgBAAIgRAAIgBABIgBABIAAA6IABABIABAAIAMAAIABAAIAAgBIAAgcIABABIAIAbIABABIABAAgAyLAoIgBgBIgUg6IAAgCIABgCIACAAIANAAIACAAIABACIAKAgIAMggIABgCIABAAIANAAIACAAIABACIAAACIgVA6IgBABIgCABIgMAAIAAAAIgCgBgAx9AnIABAAIABgBIAUg6IAAgBIAAgBIgBAAIgNAAIAAAAIgBABIgNAlIgMglIAAgBIgBAAIgNAAIgBAAIgBABIAAABIAUA6IABABIABAAgAOrApIgBgBIgBgBIgMgVIgCAAIAAAUIgBACIgCABIgNAAIgCgBIgBgCIAAg6IABgCIACgBIAWAAQANAAAGAEQAHAGAAALQAAAHgDAFIAAAAQgDADgFADIAMAUIAAACIgBACIgCABgAOfARIALAVIABABIAAAAIAOAAIABAAIABgBIAAgBIgNgWQAFgCAEgEQADgFAAgGQAAgLgHgEIAAAAQgGgFgMAAIgWAAIgBABIgBABIAAA6IABABIABAAIANAAIABAAIAAgBIAAgVgANVApIgCgBIgBgCIAAg6IABgCIACgBIAVAAQAHAAAGABQAHACADAFIAAAAQAEAFAAAJQAAAFgCAFQgCAEgFADQgEACgFABIABAAIgKABIgFAAIAAASIgBACIgCABgANUgVIgBABIAAA6IABABIABAAIANAAIABAAIAAgBIAAgUIAHAAIAJgBQAFAAAEgCQAEgDACgEQACgEAAgFQAAgJgEgEQgDgFgGgBQgGgCgHAAIgVAAIgBABgAM+ApIgCgBIgBgBIgKgQIgKAQIgBABIgBABIgOAAIgCgBIAAgBIgBABIgCABIgqAAIgCgBIgBgCIAAg6IABgCIACgBIAoAAIACABIABACIAAAKIgBACIgCABIgYAAIAAAHIARAAIACAAIABACIAAALIgBACIgCABIgRAAIAAAIIAaAAIACABIABACIAAAJIASgeIgQgZIgBgCIABgCIACAAIAPAAIABAAIABABIAIAOIAIgOIABgBIABAAIAOAAIACAAIABACIgBACIgQAaIATAdIAAACIgBACIgCABgAM9AmIAAABIABAAIAOAAIABAAIABgBIAAgBIgTgeIAQgaIAAgBIAAgCIgBAAIgOAAIAAAAIgBABIgJAPIgJgPIAAgBIgBAAIgPAAIgBAAIAAACIAAABIARAZIgTAfIAAABIAAABIABAAIAOAAIABAAIAAgBIALgSgALngVIgBABIAAA6IABABIABAAIAqAAIABAAIAAgBIAAgLIAAgBIgBAAIgcAAIAAgMIATAAIABAAIAAgBIAAgLIAAgBIgBAAIgTAAIAAgJIAaAAIABgBIABgBIAAgKIgBgBIgBgBIgoAAIgBABgAIKApIgCgBIgBgCIAAg6IABgCIACgBIANAAIACABIABACIAAA6IgBACIgCABgAIJgVIgBABIAAA6IABABIABAAIANAAIABAAIAAgBIAAg6IAAgBIgBgBIgNAAIgBABgAHxApIgBgBIgBgBIgMgVIgCAAIAAAUIgBACIgCABIgNAAIgCgBIgBgCIAAg6IABgCIACgBIAWAAQANAAAGAEQAHAGAAALQABAHgEAFIAAAAQgDADgFADIAMAUIAAACIgBACIgCABgAHlARIALAVIABABIAAAAIAOAAIABAAIABgBIAAgBIgNgWQAFgCAEgEQADgFAAgGQAAgLgHgEIAAAAQgGgFgMAAIgWAAIgBABIgBABIAAA6IABABIABAAIANAAIABAAIAAgBIAAgVgAGeApIgCgBIgBgCIAAg6IABgCIACgBIApAAIACABIABACIAAAKIgBACIgCABIgZAAIAAAHIARAAIACAAIABACIAAALIgBACIgCABIgRAAIAAAIIAaAAIACABIABACIAAALIgBACIgCABgAGdgVIAAABIAAA6IAAABIABAAIAqAAIABAAIABgBIAAgLIgBgBIgBAAIgbAAIAAgMIASAAIABAAIABgBIAAgLIgBgBIgBAAIgSAAIAAgJIAaAAIABgBIAAgBIAAgKIAAgBIgBgBIgpAAIgBABgAB8ApIgCgBIgBgCIAAgtIgOAAIgCgBIgBgCIAAgKIABgCIACgBIAwAAIACABIABACIAAAKIgBACIgCABIgPAAIAAAtIgBACIgCABgABqgVIgBABIAAAKIABABIABABIAQAAIAAAuIAAABIABAAIANAAIABAAIABgBIAAguIAQAAIABgBIAAgBIAAgKIAAgBIgBgBIgwAAIgBABgAA8ApIgCgBIgBgCIAAg6IABgCIACgBIAoAAIACABIABACIAAAKIgBACIgCABIgYAAIAAAHIARAAIACAAIABACIAAALIgBACIgCABIgRAAIAAAIIAaAAIACABIABACIAAALIgBACIgCABgAA7gVIgBABIAAA6IABABIABAAIAqAAIABAAIAAgBIAAgLIAAgBIgBAAIgcAAIAAgMIATAAIABAAIAAgBIAAgLIAAgBIgBAAIgTAAIAAgJIAaAAIABgBIABgBIAAgKIgBgBIgBgBIgoAAIgBABgAh9ApIgCgBIgBgCIAAgtIgPAAIgCgBIgBgCIAAgKIABgCIACgBIAwAAIACABIABACIAAAKIgBACIgCABIgOAAIAAAtIgBACIgCABgAiQgVIAAABIAAAKIAAABIABABIAQAAIAAAuIABABIABAAIANAAIABAAIAAgBIAAguIAQAAIABgBIABgBIAAgKIgBgBIgBgBIgwAAIgBABgAn1ApIgCgBIgBgCIAAg6IABgCIACgBIASAAQAKAAAHADIABAAQAIADAEAHIAAAAQAFAHAAALQAAAMgFAHIAAAAQgFAIgIACQgHAEgKAAgAn2gVIgBABIAAA6IABABIABAAIASAAQAJAAAIgDQAHgCAFgIQAEgHAAgLQAAgKgEgHQgFgHgHgDQgHgDgKAAIgSAAIgBABgApYApIgCgBIgBgCIAAgtIgPAAIgCgBIgBgCIAAgKIABgCIACgBIAwAAIACABIABACIAAAKIgBACIgCABIgOAAIAAAtIgBACIgCABgAprgVIAAABIAAAKIAAABIABABIAQAAIAAAuIABABIABAAIANAAIABAAIAAgBIAAguIAQAAIABgBIABgBIAAgKIgBgBIgBgBIgwAAIgBABgAtQApIgCgBIgBgCIAAg6IABgCIACgBIAWAAQAHAAAGABQAGACAEAFIAAAAQAEAFAAAJQAAAFgCAFQgDAEgEADQgEACgFABIAAAAIgJABIgGAAIAAASIgBACIgCABgAtRgVIAAABIAAA6IAAABIABAAIANAAIABAAIABgBIAAgUIAHAAIAJgBQAEAAAEgCQAEgDACgEQACgEAAgFQABgJgEgEQgEgFgGgBQgFgCgHAAIgWAAIgBABgAvfApIgCgBIgBgCIAAg6IABgCIACgBIASAAQALAAAHADIAAAAQAIADAEAHIAAAAQAFAHAAALQAAAMgFAHIAAAAQgEAIgIACQgIAEgKAAgAvggVIAAABIAAA6IAAABIABAAIASAAQAKAAAHgDQAIgCAEgIQAFgHAAgLQAAgKgFgHQgEgHgIgDQgHgDgKAAIgSAAIgBABgAv5ApIgCgBIgBgCIAAg6IABgCIACgBIANAAIACABIABACIAAA6IgBACIgCABgAv6gVIAAABIAAA6IAAABIABAAIANAAIABAAIABgBIAAg6IgBgBIgBgBIgNAAIgBABgAwoApIgCgBIgBgCIAAg6IABgCIACgBIANAAIACABIABACIAAAsIAXAAIACABIABACIAAALIgBACIgCABgAwpgVIAAABIAAA6IAAABIABAAIAnAAIABAAIABgBIAAgLIgBgBIgBAAIgYAAIAAguIgBgBIgBgBIgNAAIgBABgAR/AgQgHAAgFgEQgFgCgDgGQgDgFAAgHQAAgHADgEQADgFAFgDQAFgDAHAAQAHAAAFADQAFADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgFADgGAAIgBAAgAR/AeQAHAAAEgCIAAAAIABgBIgDAAIgDAAIgCAAIgBgBIgDgGIgBgDIAAACIAAABIAAACIAAACIgBACIgCABIgEAAIgDAAQAFADAGAAgAR+AOIAGALIAAABIABAAIAIAAIABAAIABgBIAAgBIgGgMIADgDQACgDAAgEQAAgGgEgDIAAAAQgDgDgHAAIgNAAIgBABIgBABIAAAgIABABIABABIAIAAIABgBIAAgBIAAgCIAAgDIAAgEIAAgBgARpAIQAAAGADAFIABAAIADAFIAAgCIAAgbIAAgCIgDAFIgBAAQgDAEAAAGgAR3gLIAIAAIABAAQAHAAAEADIADADQACADAAAEQAAAFgDACIgBACIgBABIABACIADAHIABABIACgCQACgFAAgHQAAgGgCgEIAAAAQgDgFgFgDIAAAAQgFgDgGAAQgFAAgDACgAoiAZIAAAAQgCgDgCgEIAAAAQgCgEAAgGQAAgIAEgEIAAgBQADgEAGAAQAHAAADAFQAEAEAAAIQAAAGgCAEIAAAAQgBAEgDADQgDACgFAAQgEAAgDgCgAohAXQADACADAAQAEAAADgCQACgCACgDIAAAAQABgEAAgGQAAgIgDgDIAAgBQgDgEgGAAQgFAAgDAEIAAABQgDADAAAIQAAAGABAEIAAAAIAEAFgAuSAZIAAAAQgCgDgCgEIAAAAQgCgEAAgGQAAgIAEgEIAAgBQADgEAGAAQAHAAADAFQAEAEAAAIQAAAGgCAEIAAAAQgBAEgDADQgDACgFAAQgEAAgDgCgAuRAXQADACADAAQAEAAADgCQACgCACgDIAAAAQABgEAAgGQAAgIgDgDIAAgBQgDgEgGAAQgFAAgDAEIAAABQgDADAAAIQAAAGABAEIAAAAIAEAFgAniAaIgFAAIAAgiIAFAAQAJAAADAEIAAAAQAEAEAAAIQABAKgEAEQgEAEgJAAIAAAAgAnlAYIADAAQAIAAAEgDIAAAAQADgEAAgJQAAgIgEgDIAAAAQgDgEgIAAIgDAAgAvMAaIgEAAIAAgiIAEAAQAJAAAEAEIAAAAQAEAEAAAIQAAAKgEAEQgEAEgIAAIgBAAgAvPAYIADAAQAJAAADgDIAAAAQADgEAAgJQABgIgEgDIAAAAQgEgEgIAAIgDAAgAJtAOIAEgOIAFAOgAJuAMIAGAAIgDgIgAEuAOIAEgOIAFAOgAEvAMIAGAAIgDgIgACtAOIAEgOIAFAOgACuAMIAGAAIgDgIgAhMAOIAEgOIAFAOgAhLAMIAGAAIgDgIgAj6AOIAEgOIAFAOgAj5AMIAGAAIgDgIgAmsAOIAFgOIAFAOgAmqAMIAGAAIgDgIgAqeAOIAEgOIAFAOgAqdAMIAGAAIgDgIgAsPAOIAFgOIAFAOgAsNAMIAGAAIgDgIgAxPAOIAEgOIAFAOgAxOAMIAGAAIgDgIgAR/AFIgDAAIAAgFIADAAIADAAIABAAIAAACIAAACIgBABIgCAAIgBAAgAR+AEIABAAIACAAIABgBIAAgBIAAgBIgBAAIgCAAIgBAAgANrAFIgIAAIAAgNIAIAAQAFAAACABIAAAAQACACAAAEQAAACgCACIAAAAQgCACgFAAIAAAAgANlAEIAGAAQAEAAACgCIABAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgCgBgFAAIgGAAgAs6AFIgHAAIAAgNIAHAAQAGAAACABIAAAAQACACAAAEQAAACgCACIAAAAQgCACgFAAIgBAAgAtAAEIAGAAQAFAAACgCIAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQgCgBgFAAIgGAAgAOgAEIgHAAIAAgMIAHAAQAGAAACABIAAAAQACACAAADQAAADgCABQgCACgFAAIgBAAgAObACIAFAAIAHgBIAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBgBQgCgBgFAAIgFAAgAHmAEIgHAAIAAgMIAHAAQAGAAACABIAAAAQACACAAADQAAADgCABQgCACgFAAIgBAAgAHhACIAFAAIAHgBIAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBgBQgCgBgFAAIgFAAgAgPAEIgHAAIAAgMIAHAAQAFAAACABIABAAQACACAAADQAAADgCABQgDACgFAAIAAAAgAgVACIAGAAIAHgBIAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIAAgBQgCgBgFAAIgGAAgArSAEIgHAAIAAgMIAHAAQAGAAACABIAAAAQACACAAADQAAADgCABQgCACgFAAIgBAAgArXACIAFAAIAHgBIAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBgBQgCgBgFAAIgFAAg");
	this.shape_1.setTransform(-29.4452,0.1749);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AQ2AnQgFgCgEgEIAAAAQgEgDgCgFIAAgBIABgBIAJgFIACgBIAAABQADAEAEADIAAAAQAEACAEAAQAEAAADgBQAAgBABAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgJgDIgIgDIgHgDQgEgCgBgEQgCgDAAgEQAAgGACgEIAAAAQAEgEAFgCIAAgBQAFgCAHAAIAAAAIALACQAEABAEAEIAAgBIAFAHIABABIgBABIAAAAIgKAHIAAAAIgBAAIgBgBQgCgDgDgDQgEgBgEAAQgDAAgCABIAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADIAEACIAAAAIAGABIABAAIAHACIAAAAIAHAEQAEACACADQABAEABAFQAAAFgDAEQgDAFgFACIAAAAQgGADgIAAIgBAAQgGAAgFgBgAQAAnQgGgCgDgEIAAAAQgEgDgCgFIAAgBIAAgBIAKgFIABgBIABABQACAEAEADIABAAQADACAFAAQAEAAACgBQABgBAAAAQABgBAAAAQAAAAAAgBQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgIgDIgIgDIgHgDQgEgCgCgEQgCgDAAgEQAAgGADgEIAAAAQADgEAFgCIAAgBQAFgCAHAAIAAAAIALACQAFABADAEIAAgBIAGAHIAAABIAAABIgBAAIgJAHIgBAAIgBAAIAAgBQgCgDgEgDQgDgBgEAAQgEAAgBABIgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIABADIADACIAAAAIAHABIAAAAIAHACIABAAIAHAEQADACACADQACAEAAAFQAAAFgDAEQgCAFgGACIAAAAQgGADgIAAIAAAAQgHAAgEgBgADdAnQgFgCgEgEIAAAAQgEgDgCgFIAAgBIABgBIAJgFIACgBIAAABQADAEAEADIAAAAQAEACAEAAQAEAAADgBQAAgBABAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgJgDIgIgDIgHgDQgEgCgBgEQgCgDAAgEQAAgGACgEIAAAAQAEgEAFgCIAAgBQAFgCAHAAIAAAAIALACQAEABAEAEIAAgBIAFAHIABABIgBABIAAAAIgKAHIAAAAIgBAAIgBgBQgCgDgDgDQgEgBgEAAQgDAAgCABIAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADIAEACIAAAAIAGABIABAAIAHACIAAAAIAHAEQAEACACADQABAEABAFQAAAFgDAEQgDAFgFACIAAAAQgGADgIAAIgBAAQgGAAgFgBgAjKAnQgFgCgEgEIAAAAQgEgDgCgFIAAgBIABgBIAJgFIACgBIAAABQADAEAEADIAAAAQAEACAEAAQAEAAADgBQAAgBABAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgJgDIgIgDIgHgDQgEgCgBgEQgCgDAAgEQAAgGACgEIAAAAQAEgEAFgCIAAgBQAFgCAHAAIAAAAIALACQAEABAEAEIAAgBIAFAHIABABIgBABIAAAAIgKAHIAAAAIgBAAIgBgBQgCgDgDgDQgEgBgEAAQgDAAgCABIAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADIAEACIAAAAIAGABIABAAIAHACIAAAAIAHAEQAEACACADQABAEABAFQAAAFgDAEQgDAFgFACIAAAAQgGADgIAAIgBAAQgGAAgFgBgAl8AnQgFgCgEgEIAAAAQgEgDgCgFIAAgBIABgBIAJgFIACgBIAAABQADAEAEADIAAAAQAEACAEAAQAEAAADgBQAAgBABAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgJgDIgIgDIgHgDQgEgCgBgEQgCgDAAgEQAAgGACgEIAAAAQAEgEAFgCIAAgBQAFgCAHAAIAAAAIALACQAEABAEAEIAAgBIAFAHIABABIgBABIAAAAIgKAHIAAAAIgBAAIgBgBQgCgDgDgDQgEgBgEAAQgDAAgCABIAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADIAEACIAAAAIAGABIABAAIAHACIAAAAIAHAEQAEACACADQABAEABAFQAAAFgDAEQgDAFgFACIAAAAQgGADgIAAIgBAAQgGAAgFgBgAoaAoQgGAAgFgBQgFgCgEgFIAAABQgFgEgCgHQgDgGABgIQgBgIADgFQACgGAFgEIAAgBQAEgDAFgCQAFgCAGAAQAFAAAGACQAFACAEADIAAABQAEAEADAGIgBAAQADAFAAAIQAAAIgCAGQgDAHgEAEIAAgBQgEAFgFACQgGABgFAAIAAAAgAoaAbQAEAAADgCQADgDABgEIAAAAQACgEAAgGQAAgIgEgEQgDgFgGAAQgHAAgDAEIAAABQgDAEAAAIQAAAGABAEIAAAAQACAEADADIgBAAQADACAFAAgAuKAoQgGAAgFgBQgFgCgEgFIAAABQgFgEgCgHQgDgGABgIQgBgIADgFQACgGAFgEIAAgBQAEgDAFgCQAFgCAGAAQAFAAAGACQAFACAEADIAAABQAEAEADAGIgBAAQADAFAAAIQAAAIgCAGQgDAHgEAEIAAgBQgEAFgFACQgGABgFAAIAAAAgAuKAbQAEAAADgCQADgDABgEIAAAAQACgEAAgGQAAgIgEgEQgDgFgGAAQgHAAgDAEIAAABQgDAEAAAIQAAAGABAEIAAAAQACAEADADIgBAAQADACAFAAgARvAkQgIgEgEgHQgEgHAAgKQAAgIAEgHQAEgHAIgEQAHgFAKAAQAIAAAIAFQAHAEAEAGQAEAIABAIQgBAJgEAIQgEAHgIAEQgHAEgJAAQgJAAgHgEgASLAdQAFgDADgGQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgDgHAAQgHAAgFADQgFADgDAFQgDAEAAAHQAAAHADAFQADAGAFACQAFAEAIAAQAGAAAFgDgAIuAlQgHgEgDgHQgEgHAAgLQAAgKAEgGQADgIAHgDQAGgEAIAAQAIAAAFACIAAABQAGACACAFIAAAAQADAEACAGIgBABIAAABIgMACIgCAAIAAgBIgEgHQgDgCgEAAQgGAAgDAEQgDAFAAAIQAAAGACAEQABAEADADQACACAEAAQAFAAADgDIgBAAQADgDABgFIABgBIABgBIAMADIABABIABABQgCAGgDAFQgDAFgGACQgFADgIAAQgIAAgGgDgAATAmIAAAAQgFgBgDgEIAAgBIAAgBIAHgIIABAAIACAAIAEADIAEABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIAAABIACgIIAAgmIABgBIABgBIANAAIABABIAAABIAAAoQAAAGgCAFIAAAAQgCAEgFADIAAAAQgFACgHAAQgHAAgEgCgANNAnIgPAAIgBAAIAAgBIgLgSIgMASIAAABIgBAAIgNAAIgBAAIgBgBIAAgBIATgfIgRgZIAAgBIABgCIABAAIAOAAIABAAIAAABIAKAPIAIgPIABgBIABAAIANAAIABAAIABACIgBABIgQAaIATAeIAAABIAAABIgBAAIAAAAgAO6AnIgOAAIgBAAIgBgBIgLgVIgFAAIAAAVIgBABIgBAAIgNAAIgBAAIAAgBIAAg6IAAgBIABgBIAXAAQALAAAGAFIABAAQAGAEAAALQAAAGgDAFQgEAEgFACIANAWIAAABIAAABIgBAAIAAAAgAOaAEIAHAAQAFAAACgCQADgBAAgDQgBgDgCgCIAAAAQgCgBgFAAIgHAAgAIAAnIgOAAIgBAAIgBgBIgLgVIgFAAIAAAVIgBABIgBAAIgNAAIgBAAIAAgBIAAg6IAAgBIABgBIAXAAQALAAAGAFIABAAQAGAEAAALQAAAGgDAFQgEAEgFACIANAWIAAABIAAABIgBAAIAAAAgAHgAEIAHAAQAFAAACgCQADgBAAgDQgBgDgCgCIAAAAQgCgBgFAAIgHAAgAAJAnIgNAAIgBAAIAAgBIgMgVIgFAAIAAAVIAAABIgBAAIgNAAIgBAAIgBgBIAAg6IABgBIABgBIAWAAQAMAAAFAFIAAAAQAHAEAAALQAAAGgEAFQgDAEgEACIALAWIABABIgBABIgBAAIAAAAgAgWAEIAHAAQAFAAADgCQACgBAAgDQAAgDgCgCIAAAAQgDgBgFAAIgHAAgAq4AnIgOAAIgBAAIgBgBIgLgVIgFAAIAAAVIgBABIgBAAIgNAAIgBAAIAAgBIAAg6IAAgBIABgBIAXAAQALAAAGAFIABAAQAGAEAAALQAAAGgDAFQgEAEgFACIANAWIAAABIAAABIgBAAIAAAAgArYAEIAHAAQAFAAACgCQADgBAAgDQgBgDgCgCIAAAAQgCgBgFAAIgHAAgAKNAnIgNAAIgBAAIAAgBIgFgMIgRAAIgEAMIgBABIgBAAIgMAAIgBAAIAAgBIAAgBIAVg6IAAgBIABAAIAMAAIABAAIABABIAVA6IAAABIgBABIgBAAIAAAAgAJtAOIAJAAIgEgOgAF6AnIgMAAIgBAAIAAgBIgJgbIAAgBIAAAcIgBABIgBAAIgMAAIgBAAIAAgBIAAg6IAAgBIABgBIASAAIABAAIAAABIAMAmIALgmIAAgBIABAAIASAAIABABIAAABIAAA6IAAABIgBAAIgNAAIgBAAIAAgBIAAgdIgBACIgJAbIgBABIAAAAIAAAAgAFOAnIgNAAIgBAAIAAgBIgFgMIgRAAIgEAMIgBABIgBAAIgMAAIgBAAIAAgBIAAgBIAVg6IAAgBIABAAIAMAAIABAAIABABIAVA6IAAABIgBABIgBAAIAAAAgAEuAOIAJAAIgEgOgADNAnIgNAAIgBAAIAAgBIgFgMIgRAAIgEAMIgBABIgBAAIgMAAIgBAAIAAgBIAAgBIAVg6IAAgBIABAAIAMAAIABAAIABABIAVA6IAAABIgBABIgBAAIAAAAgACtAOIAJAAIgEgOgAgsAnIgNAAIgBAAIAAgBIgFgMIgRAAIgEAMIgBABIgBAAIgMAAIgBAAIAAgBIAAgBIAVg6IAAgBIABAAIAMAAIABAAIABABIAVA6IAAABIgBABIgBAAIAAAAgAhMAOIAJAAIgEgOgAjaAnIgNAAIgBAAIAAgBIgFgMIgRAAIgEAMIgBABIgBAAIgMAAIgBAAIAAgBIAAAAIgBABIgBAAIgnAAIgBAAIAAgBIAAg6IAAgBIABgBIANAAIABABIABABIAAAuIAYAAIABAAIABABIAAAKIAVg6IAAgBIABAAIAMAAIABAAIABABIAVA6IAAABIgBABIgBAAIAAAAgAj6AOIAJAAIgEgOgAmLAnIgNAAIgBAAIgBgBIgEgMIgSAAIgEAMIgBABIAAAAIgMAAIgBAAIgBgBIAAgBIAVg6IABgBIABAAIAMAAIAAAAIABABIAVA6IAAABIAAABIgBAAIAAAAgAmsAOIAKAAIgFgOgAp+AnIgNAAIgBAAIAAgBIgFgMIgRAAIgEAMIgBABIgBAAIgMAAIgBAAIAAgBIAAgBIAVg6IAAgBIABAAIAMAAIABAAIABABIAVA6IAAABIgBABIgBAAIAAAAgAqeAOIAJAAIgEgOgAruAnIgNAAIgBAAIgBgBIgEgMIgSAAIgEAMIgBABIAAAAIgMAAIgBAAIgBgBIAAgBIAVg6IABgBIABAAIAMAAIAAAAIABABIAVA6IAAABIAAABIgBAAIAAAAgAsPAOIAKAAIgFgOgAwvAnIgNAAIgBAAIAAgBIgFgMIgRAAIgEAMIgBABIgBAAIgMAAIgBAAIAAgBIAAgBIAVg6IAAgBIABAAIABAAIgBgBIAAgBIAAgBIAHgNIABgBIABAAIANAAIABAAIAAABIAAABIgMAOIgBAAIAAABIACAAIABAAIABABIAVA6IAAABIgBABIgBAAIAAAAgAxPAOIAJAAIgEgOgAx8AnIgNAAIgBAAIAAgBIgUg6IAAgBIAAgBIABAAIANAAIABAAIABABIAMAlIAMglIABgBIABAAIAMAAIABAAIABABIAAABIgVA6IgBABIAAAAIAAAAgAnjAnIgSAAIgBAAIAAgBIAAg6IAAgBIABgBIASAAQAKAAAHADQAIADAEAHQAFAHAAAKQAAALgFAHQgEAIgIACQgIADgJAAIAAAAgAnmAaIAEAAQAJAAAEgEQAEgEAAgKQAAgIgEgEIgBAAQgDgEgJAAIgEAAgAvMAnIgSAAIgBAAIgBgBIAAg6IABgBIABgBIASAAQAJAAAIADQAHADAEAHQAFAHAAAKQAAALgFAHQgEAIgHACQgIADgJAAIAAAAgAvQAaIAFAAQAIAAAFgEQADgEAAgKQAAgIgEgEIAAAAQgEgEgIAAIgFAAgAPDAnIgBAAIAAgBIAAg6IAAgBIABgBIApAAIABABIAAABIAAAKIAAABIgBABIgaAAIAAAJIASAAIABAAIABABIAAALIgBABIgBAAIgSAAIAAAMIAbAAIABAAIABABIAAALIgBABIgBAAgANVAnIgBAAIAAgBIAAg6IAAgBIABgBIAWAAQAGAAAGACQAGABADAFQAEAEAAAJQAAAFgCAEQgCAEgEADQgEACgFAAIgIABIgHAAIAAAUIgBABIgBAAgANkAFIAHAAQAFAAADgCIAAAAQACgCAAgCQAAgEgCgCIAAAAQgDgBgFAAIgHAAgALoAnIgBAAIAAgBIAAg6IAAgBIABgBIApAAIABABIAAABIAAAKIAAABIgBABIgaAAIAAAJIASAAIABAAIABABIAAALIgBABIgBAAIgSAAIAAAMIAbAAIABAAIABABIAAALIgBABIgBAAgAK7AnIgBAAIgBgBIgXgiIAAAiIAAABIgBAAIgMAAIgBAAIgBgBIAAg6IABgBIABgBIANAAIAAAAIABABIAWAgIAAgfIABgBIABgBIAMAAIABABIAAABIAAA6IAAABIgBAAgAIKAnIgBAAIAAgBIAAg6IAAgBIABgBIANAAIABABIABABIAAA6IgBABIgBAAgAGfAnIgBAAIgBgBIAAg6IABgBIABgBIAoAAIABABIABABIAAAKIgBABIgBABIgaAAIAAAJIATAAIABAAIAAABIAAALIAAABIgBAAIgTAAIAAAMIAcAAIABAAIAAABIAAALIAAABIgBAAgAB9AnIgBAAIgBgBIAAguIgQAAIgBgBIAAgBIAAgKIAAgBIABgBIAwAAIABABIABABIAAAKIgBABIgBABIgQAAIAAAuIAAABIgBAAgAA8AnIgBAAIAAgBIAAg6IAAgBIABgBIApAAIABABIAAABIAAAKIAAABIgBABIgaAAIAAAJIASAAIABAAIABABIAAALIgBABIgBAAIgSAAIAAAMIAbAAIABAAIABABIAAALIgBABIgBAAgAh9AnIgBAAIAAgBIAAguIgQAAIgBgBIgBgBIAAgKIABgBIABgBIAwAAIABABIAAABIAAAKIAAABIgBABIgQAAIAAAuIgBABIgBAAgApYAnIgBAAIAAgBIAAguIgQAAIgBgBIgBgBIAAgKIABgBIABgBIAwAAIABABIAAABIAAAKIAAABIgBABIgQAAIAAAuIgBABIgBAAgAtPAnIgBAAIgBgBIAAg6IABgBIABgBIAVAAQAHAAAGACQAGABADAFQAEAEAAAJQgBAFgCAEQgCAEgEADQgDACgFAAIgJABIgHAAIAAAUIAAABIgBAAgAtBAFIAIAAQAFAAACgCIAAAAQACgCAAgCQAAgEgCgCIAAAAQgCgBgFAAIgIAAgAv4AnIgBAAIgBgBIAAg6IABgBIABgBIANAAIABABIAAABIAAA6IAAABIgBAAgAwnAnIgBAAIgBgBIAAg6IABgBIABgBIANAAIABABIAAABIAAAuIAZAAIABAAIAAABIAAALIAAABIgBAAgASOAaIgJAAIgBAAIAAgBIgGgLIgBAAIAAABIAAAEIAAADIAAACIgBABIgBABIgIAAIgBgBIAAgBIAAggIAAgBIABgBIANAAQAHAAAEADIgBAAQAEADABAGQAAAEgDADIgDADIAGAMIAAABIAAABIgBAAIAAAAgAR9AFIADAAIADAAIAAgBIABgCIgBgCIAAAAIgDAAIgDAAg");
	this.shape_2.setTransform(-29.4539,0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-149.4,-5.3,240.3,12.5), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AI3BnQgGgCgEgDIAGgJIAJAFQAFACAFAAQAEAAACgCQAAAAABgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBIgIgCIgKgCQgEgCgDgDQgEgEAAgGQAAgFADgEQADgEAEgCQAFgCAGAAQAIAAAGACQAFACAEAEIgGAJIgIgEIgIgCIgFABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQACACAFAAIAKADQAFABADAEQADADAAAGQAAAGgDAEQgDAEgGACQgFACgGAAQgJAAgGgDgAH7BoQgDgCgCgDQgCgDAAgFQAAgJAIgFQAIgFASgCIAAgBQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgCgCgEAAQgFAAgEACIgIAFIgHgJIAGgFIAJgDQAFgCAHAAQALAAAFAGQAEAFAAAKIAAAVIABAIIABAFIgQAAIgBgEIAAgEQgEAEgFACQgEADgGAAQgEAAgEgCgAIIBSQgEADAAADQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAIAEABIAIgBIAFgDIAAgKQgKABgEACgAHABnQgFgDgCgGQgDgGAAgJQAAgKADgGQACgGAFgDQAEgEAHAAQAFAAAEACQAEACADAEIAAgbIAQAAIAAA9IAAAIIACAFIgRAAIgBgCIAAgDIAAgDQgDADgEADQgEACgGABQgGAAgEgDgAHJBDQgDAEAAAHQAAAHADAEQACAEAFAAQAEAAACgBIAFgEIAAgTIgFgEIgGgBQgFAAgCADgAGDBoQgDgCgCgDQgCgDAAgFQAAgJAIgFQAIgFASgCIAAgBQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgCgCgEAAQgFAAgEACIgIAFIgHgJIAGgFIAJgDQAFgCAHAAQALAAAFAGQAEAFAAAKIAAAVIABAIIABAFIgQAAIgBgEIAAgEQgEAEgFACQgEADgGAAQgEAAgEgCgAGQBSQgEADAAADQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAIAEABIAIgBIAFgDIAAgKQgKABgEACgAETBoQgFgBgEgDQgEgDgCgGQgDgFAAgIQAAgIADgFQACgFAEgEQAEgDAFgBQAFgCAFAAQAFAAAEACQAFABAEADQAEAEADAFQACAFAAAIQAAAIgCAFQgDAGgEADQgEADgFABQgEACgFAAQgFAAgFgCgAEUBDQgDAEABAHQgBAFACADQABAEACACQADADAEAAQAFgBADgEQADgEAAgIIgBgIQgBgEgDgCQgCgCgEAAQgGAAgDAFgAC+BoQgFgBgEgDQgDgDgDgGQgCgFAAgIQAAgIACgFQADgGAEgDQAEgDAFgBIAJgCQAHAAAFADQAEACADAEQADADABAFIgNAEIgEgHQgDgCgDAAQgFAAgDAEQgDAEAAAIIABAJQABADACACQADADADAAQAEAAACgCQADgDACgFIANAFIgEAIQgDADgFADQgFACgHAAQgFAAgEgCgACHBoQgFgBgEgDQgDgDgDgGQgCgFAAgIQAAgIACgFQADgGAEgDQAEgDAFgBIAJgCQAHAAAFADQAEACADAEQADADABAFIgNAEQgCgFgCgCQgDgCgDAAQgFAAgDAEQgDAEAAAIIABAJQABADACACQADADADAAQAEAAACgCQADgDACgFIANAFIgEAIQgDADgFADQgFACgHAAQgFAAgEgCgABKBnQgGgCgEgHQgDgGgBgKQABgIACgFQADgFAEgEQAEgDAEgBIAJgCIAJACQAEABAEADQADADACAGQADAGAAAJIAAACIgkAAQABAHADADQAEADAFAAQAFAAAEgCIAHgFIAGAKQgFAEgGACQgFACgHAAQgHAAgHgDgABhBJQAAgGgDgCQgCgDgFAAQgEAAgDACQgCADgBAGIAUAAIAAAAgAgLBnQgGgCgEgHQgEgGAAgKQAAgIADgFQACgFAEgEQAEgDAFgBIAIgCIAIACQAEABAEADQAEADACAGQACAGAAAJIAAACIgiAAQABAHADADQADADAEAAQAFAAAEgCIAHgFIAGAKQgEAEgGACQgGACgHAAQgGAAgGgDgAALBJQgBgGgCgCQgDgDgEAAQgDAAgDACQgDADgBAGIAUAAIAAAAgAhEBnQgHgCgEgDIAHgJIAIAFQAFACAFAAQAEAAACgCQABAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBIgIgCIgKgCQgFgCgDgDQgDgEAAgGQAAgFADgEQACgEAFgCQAFgCAGAAQAIAAAFACQAGACAEAEIgGAJIgIgEIgIgCIgFABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAQACACAFAAIALADQAEABAEAEQADADAAAGQAAAGgEAEQgDAEgFACQgFACgHAAQgIAAgGgDgAiVBnQgGgCgEgDIAGgJIAJAFQAFACAFAAQAEAAACgCQAAAAABgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgIgCIgKgCQgEgCgDgDQgEgEAAgGQAAgFADgEQADgEAEgCQAFgCAGAAQAIAAAGACQAFACAEAEIgGAJIgIgEIgIgCIgFABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQACACAFAAIAKADQAFABADAEQADADAAAGQAAAGgDAEQgDAEgGACQgFACgGAAQgJAAgGgDgAjJBnQgGgCgEgHQgDgGgBgKQABgIACgFQADgFAEgEQAEgDAEgBIAJgCIAJACQAEABAEADQADADACAGQADAGAAAJIAAACIgkAAQABAHADADQAEADAFAAQAFAAAEgCIAHgFIAGAKQgFAEgGACQgFACgHAAQgHAAgHgDgAiyBJQAAgGgDgCQgCgDgFAAQgEAAgDACQgCADgBAGIAUAAIAAAAgAkmBoQgDgCgDgDQgCgDAAgFQAAgJAIgFQAJgFARgCIAAgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgCgEAAQgFAAgFACIgIAFIgGgJIAGgFIAJgDQAFgCAGAAQALAAAFAGQAFAFAAAKIAAAVIAAAIIABAFIgQAAIgBgEIAAgEQgDAEgFACQgFADgFAAQgFAAgDgCgAkaBSQgEADAAADQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAIAEABIAHgBIAFgDIAAgKQgJABgFACgAlYBnQgGgCgEgDIAGgJIAJAFQAFACAFAAQAEAAACgCQAAAAABgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgIgCIgKgCQgEgCgDgDQgEgEAAgGQAAgFADgEQADgEAEgCQAFgCAGAAQAIAAAGACQAFACAEAEIgGAJIgIgEIgIgCIgFABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQACACAFAAIAKADQAFABADAEQADADAAAGQAAAGgDAEQgDAEgGACQgFACgGAAQgJAAgGgDgAnBBmQgEgDgBgJIAAgnIAQAAIAAAjQAAADACACQABACAEAAIAGgBIAFgEIAAglIAQAAIAAA2IgQAAIAAgJIgEAFIgGADQgDACgFAAQgHAAgEgEgAnvBoQgEgBgEgDQgEgDgCgGQgDgFAAgIQABgIACgFQACgGAEgDQAEgDAFgBIAJgCQAIAAAEADQAFACACAEQADADACAFIgOAEIgEgHQgCgCgEAAQgFAAgDAEQgCAEAAAIIABAJQABADACACQACADAEAAQADAAADgCQADgDABgFIAOAFIgFAIQgDADgFADQgEACgHAAQgFAAgFgCgAo3BmQgEgDAAgJIAAgnIAQAAIAAAjQAAADABACQACACADAAIAGgBIAGgEIAAglIAQAAIAAA2IgQAAIAAgJIgEAFIgGADQgEACgFAAQgGAAgFgEgApqBnQgGgCgEgDIAGgJIAJAFQAFACAFAAQAEAAACgCQAAAAABgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBIgIgCIgKgCQgEgCgDgDQgEgEAAgGQAAgFADgEQADgEAEgCQAFgCAGAAQAIAAAGACQAFACAEAEIgGAJIgIgEIgIgCIgFABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQACACAFAAIAKADQAFABADAEQADADAAAGQAAAGgDAEQgDAEgGACQgFACgGAAQgJAAgGgDgAJkBpIAAgQIARAAIAAAQgAFjBpIAAgiQAAgEgBgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQgDAAgDABIgFAEIAAAkIgRAAIAAg2IARAAIAAAJIAEgFIAGgDQADgCAFAAQAEAAAEACQADABACAEQACADAAAGIAAAngADoBpIAAg2IAQAAIAAA2gAAjBpIAAhKIAQAAIAABKgAjwBpIAAhKIAQAAIAABKgAmHBpIAAg2IAQAAIAAAJIAAAAIAEgEIAGgEQADgCAFAAIABAAIgBAPIgCgBIgCAAQgFAAgDADIgGAFIAAAhgADoAsIAAgNIAQAAIAAANgACxggQgGgDgEgGQgDgGgBgKQABgIACgFQADgGAEgDQAEgDAEgCIAJgBIAJABQAEABAEAEQADADACAGQADAGAAAJIAAACIgkAAQABAHADACQAEADAFAAQAFAAAEgCIAHgEIAGAJQgFAEgGACQgFACgHAAQgHAAgHgCgADIg/QAAgFgDgDQgCgDgFAAQgEAAgDADQgCADgBAFIAUAAIAAAAgABdggQgGgDgEgGQgEgGAAgKQAAgIADgFQACgGAEgDQAEgDAFgCIAJgBIAIABQAEABAEAEQAEADACAGQACAGAAAJIAAACIgjAAQABAHADACQADADAFAAQAFAAAEgCIAHgEIAGAJQgEAEgGACQgGACgHAAQgHAAgGgCgAB0g/QgBgFgCgDQgDgDgEAAQgEAAgDADQgDADgBAFIAVAAIAAAAgAhEggQgGgDgEgGQgEgGAAgKQAAgIADgFQACgGAEgDQAEgDAFgCIAJgBIAIABQAEABAEAEQAEADACAGQACAGAAAJIAAACIgjAAQABAHADACQADADAFAAQAFAAAEgCIAHgEIAGAJQgEAEgGACQgGACgHAAQgHAAgGgCgAgtg/QgBgFgCgDQgDgDgEAAQgEAAgDADQgDADgBAFIAVAAIAAAAgAjiggQgDgBgCgEQgCgDAAgEQAAgKAIgFQAIgFASgBIAAgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgCgEAAQgFAAgEACIgIAFIgHgKIAGgEIAJgEQAFgBAHAAQALAAAFAFQAEAFAAALIAAAUIABAIIABAFIgQAAIgBgDIAAgFQgEAFgFACQgEACgGAAQgEAAgEgCgAjVg1QgEACAAAEQAAAAAAABQAAABAAAAQAAAAABABQAAAAAAABIAEABIAIgBIAFgEIAAgKQgKABgEADgAlmggQgHgCgEgEIAHgJIAIAFQAFACAFAAQAEAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgIgDIgKgCQgFgBgDgEQgDgDAAgGQAAgGADgDQACgEAFgCQAFgCAGAAQAIAAAFACQAGACAEADIgGAJIgIgEIgIgBIgFABQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACABAFABIALACQAEACAEADQADADAAAGQAAAHgEAEQgDAEgFACQgFABgHAAQgIAAgGgCgAmnghQgEgEAAgIIAAgnIAQAAIAAAiQAAAEABACQACACADAAIAGgCIAGgEIAAgkIAQAAIAAA1IgQAAIAAgIIgEAEIgGAEQgEABgFAAQgGAAgFgDgAnxgfQgFgCgEgDQgDgDgDgFQgCgGAAgHQAAgIACgGQADgFAEgDQAEgDAFgCIAJgBQAHAAAFACQAEACADAEQADAEABAEIgNAFIgEgHQgDgCgDAAQgFAAgDAEQgDAEAAAIIABAIQABAEACACQADACADAAQAEAAACgCQADgCACgFIANAEIgEAIQgDAEgFACQgFACgHAAQgFAAgEgBgAA+geQgIAAgEgCQgEgCgBgDIgBgJIAAgaIgJAAIAAgMIAJAAIAAgSIAQAAIAAASIANAAIAAAMIgNAAIAAAXQAAAEABACQACABAEAAIADAAIACAAIAAALIgCAAIgEABIgEAAgAECgfIAAgiQAAgDgCgCQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQgEAAgCACIgGADIAAAkIgQAAIAAg1IAQAAIAAAIIAEgEIAGgEQAEgBAEAAQAFAAADABQAEACACADQACAEAAAFIAAAngAALgfIAAgiQAAgDgBgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAgBAAQgDAAgCACIgFADIAAAkIgRAAIAAg1IARAAIAAAIIAEgEIAFgEQADgBAFAAQAEAAAEABQADACACADQACAEAAAFIAAAngAhrgfIAAgiIgBgFQgBgCgEAAQgDAAgCACIgFADIAAAkIgQAAIAAgiQAAgDgCgCQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQgDAAgDACIgFADIAAAkIgQAAIAAg1IAQAAIAAAIIAEgEIAGgEQADgBAEAAQAHAAAEACQADADABAEIAEgEIAGgEQADgBAFAAQAFAAAEACIAFAGQABADAAAFIAAAmgAkNgfIgTg1IAQAAIALAjIABAAIALgjIAPAAIgTA1gAk3gfIAAg1IAQAAIAAA1gAnHgfIAAhKIAQAAIAABKgAoTgfIgLgQIgJAQIgRAAIATgbIgRgaIARAAIAJAPIAIgPIARAAIgSAaIASAbgApvgfIAAhKIAzAAIAAAOIgiAAIAAAQIAYAAIAAANIgYAAIAAASIAkAAIAAANgAk3hbIAAgNIARAAIAAANg");
	this.shape.setTransform(-0.275,0.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-65.4,-14.6,130.8,29.299999999999997), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.663)").s().p("AACA5IgCgBIAAgCIAAhSIAAgCIACgBIAKAAIACABIABACIAAABIADgCQAGgEAIAAQAIAAAGAEQAGAEADAIQAEAHAAALQAAALgEAHIAAAAQgDAIgHAEQgGAEgIAAQgHAAgFgDIAAAAIgEgDIAAAZIgBACIgCABgAABgdIgBABIAABSIABABIABAAIAKAAIABAAIAAgBIAAgbIAHADIgBAAQAFADAHAAQAHAAAGgEQAGgDAEgIQAEgGAAgLQAAgKgEgIIAAABQgDgIgGgDQgGgEgHAAQgIAAgFADIgGAEIAAgEIAAgBIgBgBIgKAAIgBABgAkBA5IgCgBIgBgCIAAhSIABgCIACgBIAKAAIACABIABACIAAABIADgCQAGgEAIAAQAIAAAGAEQAGAEADAIQAEAHAAALQAAALgEAHIAAAAQgDAIgHAEQgGAEgIAAQgHAAgFgDIAAAAIgEgDIAAAZIgBACIgCABgAkCgdIgBABIAABSIABABIABAAIAKAAIABAAIAAgBIAAgbIAHADIgBAAQAFADAHAAQAHAAAGgEQAGgDAEgIQAEgGAAgLQAAgKgEgIIAAABQgDgIgGgDQgGgEgHAAQgIAAgFADIgGAEIAAgEIAAgBIgBgBIgKAAIgBABgAFxAfIABAAQgHgEgEgIIgBAAQgDgHgBgLIAAgBQABgKAEgIQAFgHAGgEIAAAAQAIgEAHAAQAHAAAFADIABAAQAFADADAEIAAAAIAGAJIAAACIgBABIgBABIgIADIgCABIgCgBIgBgBQgBgFgDgDIgBAAQgDgCgEAAIgHABQgDACgCAFIAAAAQgDAEAAAGQABAKAEAGQADAFAHAAQAEAAADgCQADgDADgGIACgBIACAAIAIADIACACIAAACQgEAJgGAFQgHAFgKAAIgBAAIAAAAQgIAAgHgEgAFzgcQgGAEgFAHQgEAHAAALQAAALAEAGQAEAIAGADQAHAFAHAAQAKgBAHgFQAGgEADgJIAAgBIgBgBIgIgDIgBAAIAAABQgDAGgEADIABAAQgEACgFAAQgHAAgEgFQgFgGAAgKQAAgHACgFQADgFADgCQAEgCAEAAQAFAAADADQAEADACAFIAAABIABAAIABAAIAIgDIABgBIAAAAIAAgBIgFgJIAAAAQgDgEgFgDIAAABQgFgDgHAAQgHAAgHADgAneAfIAAAAQgHgEgEgIIAAAAQgEgHgBgLIAAgBQABgKAEgIQAFgHAGgEIAAAAQAIgEAHAAQAHAAAFADIABAAQAFADADAEIAAAAIAGAJIAAACIgBABIgBABIgJADIgBABIgCgBIgBgBQgBgFgEgDIAAAAQgDgCgEAAIgHABQgDACgCAFIAAAAQgDAEAAAGQABAKAEAGQADAFAHAAQAEAAADgCQADgDADgGIABgBIADAAIAIADIACACIAAACQgEAJgHAFQgGAFgKAAIgBAAIAAAAQgIAAgGgEgAndgcQgGAEgEAHQgFAHAAALQAAALAEAGQAEAIAGADQAHAFAHAAQAKgBAHgFQAGgEADgJIAAgBIgBgBIgIgDIgBAAIgBABQgCAGgEADIABAAQgEACgFAAQgHAAgFgFQgEgGAAgKQAAgHACgFQADgFADgCQAEgCAEAAQAFAAADADQAEADACAFIAAABIABAAIABAAIAIgDIABgBIAAAAIAAgBIgFgJIAAAAQgDgEgFgDIAAABQgFgDgHAAQgHAAgHADgAI2AjQgIAAgHgEQgGgEgFgHIAAgBQgEgHAAgLIAAgBQAAgHACgHIAAAAQADgGAFgEQAEgFAGgBIAAAAQAFgDAFAAQAIAAAHAEQAGAEAEAIQADAHAAALIAAACIgBACIgCABIgnAAIACAHIAAABQACADADACQAEACAEAAQAFAAAEgCIAAAAIAHgHIABgBIACAAIABABIAGAFIABACIgBACQgEAGgHAEIAAABQgGADgKAAgAIZABQABALADAHQAFAHAGAEQAGAEAIAAQAJgBAHgDQAGgEAEgGIAAgBIAAgBIgGgFIgBAAIAAAAIgBAAIgHAHIAAAAQgEADgGAAQgFAAgEgDQgDgCgCgEIAAAAIgDgJIApAAIABgBIABgBIAAgCQAAgKgEgIIAAABQgDgIgGgDQgGgEgIAAQgFAAgFACIAAAAQgFABgEAFQgEAEgDAGIAAAAQgCAGgBAIgAD/AjQgIAAgHgEQgGgEgFgHIAAgBQgEgHAAgLIAAgBQAAgHACgHIAAAAQADgGAFgEQAEgFAGgBIgBAAQAGgDAFAAQAIAAAHAEQAGAEADAIQAEAHAAALIAAACIgBACIgCABIgnAAIACAHIAAABQACADADACQAEACAEAAQAFAAAEgCIAAAAIAHgHIABgBIACAAIABABIAGAFIABACIgBACQgEAGgHAEIAAABQgGADgJAAgADiABQABALAEAHQAEAHAGAEQAGAEAIAAQAJgBAGgDQAHgEAEgGIAAgBIAAgBIgGgFIAAAAIgBAAIgBAAIgHAHIAAAAQgEADgGAAQgFAAgDgDQgEgCgDgEIABAAIgCgJIAoAAIABgBIABgBIAAgCQAAgKgEgIIAAABQgDgIgGgDQgGgEgIAAQgFAAgFACIAAAAQgFABgEAFQgEAEgDAGIAAAAQgCAGgBAIgACJAjQgJAAgGgEQgHgEgEgHIgBgBQgDgHgBgLIAAgBQABgHACgHIAAAAQADgGAEgEQAFgFAFgBIAAAAQAFgDAGAAQAIAAAGAEQAHAEADAIQAEAHAAALIAAACIgBACIgCABIgnAAIABAHIABABQACADADACQADACAEAAQAGAAAEgCIgBAAIAHgHIACgBIABAAIACABIAFAFIABACIAAACQgFAGgGAEIgBABQgGADgJAAgABsABQAAALAEAHQAEAHAHAEQAGAEAIAAQAJgBAGgDQAGgEAEgGIABgBIgBgBIgFgFIgBAAIgBAAIgBAAIgHAHIABAAQgFADgGAAQgEAAgEgDQgEgCgCgEIAAAAIgCgJIApAAIABgBIAAgBIAAgCQAAgKgDgIIAAABQgEgIgFgDQgHgEgHAAQgGAAgEACIAAAAQgGABgEAFQgEAEgDAGIAAAAQgCAGAAAIgAmiAfIAAAAQgHgEgFgIIAAAAQgEgHAAgLIAAgBQAAgKAEgHIAAAAQAFgIAHgEQAHgEAIAAQAJAAAGAEIAAAAQAHAEAFAIIAAAAQAEAHAAAKIAAABQAAALgEAHIAAAAQgFAIgHAEIAAAAQgGAEgJAAQgIAAgHgEgAmhgbQgHADgFAHQgDAIgBAKQABAKADAHQAFAIAHADQAGAFAIAAQAIAAAHgFQAGgDAEgIQAEgHABgKQgBgKgEgIQgEgHgGgDQgHgEgIAAQgIAAgGAEgApsAjQgIAAgHgEQgGgEgFgHIAAgBQgEgHAAgLIAAgBQAAgHACgHIAAAAQADgGAFgEQAEgFAGgBIgBAAQAGgDAFAAQAIAAAHAEQAGAEAEAIQADAHAAALIAAACIgBACIgCABIgnAAIACAHIAAABQACADADACQAEACAEAAQAFAAAEgCIAAAAIAHgHIABgBIACAAIABABIAGAFIABACIgBACQgEAGgHAEIAAABQgGADgKAAgAqJABQABALADAHQAFAHAGAEQAGAEAIAAQAJgBAHgDQAGgEAEgGIAAgBIAAgBIgGgFIgBAAIAAAAIgBAAIgHAHIAAAAQgEADgGAAQgFAAgEgDQgDgCgCgEIAAAAIgDgJIApAAIABgBIABgBIAAgCQAAgKgEgIIAAABQgDgIgGgDQgGgEgIAAQgFAAgFACIAAAAQgFABgEAFQgEAEgDAGIAAAAQgCAGgBAIgAJhAgIAAAAQgIgDgDgFIgBgDIABgBIAGgGIABgBIACAAIABABQADADAEACIAAAAQAEACAFAAQAGAAAEgCIAAAAQACgBAAgDQAAgDgDgCIgLgDIgLgEIAAAAQgGgCgDgDIAAAAQgDgFAAgGQAAgGADgEIAAgBQADgEAFgCQAGgDAHAAQAIAAAGADIAAAAQAGACAFAFIABACIgBACIgFAGIgBABIgCAAIgBAAIgIgFQgDgCgFAAQgFAAgCACIAAAAIgCADQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIgBAAIAKADIAMAEQAGACADAEIABAAQADAEAAAHQAAAIgEAEQgEAEgFADQgGACgIAAQgIAAgHgDgAJdAOIAAABIgGAGIgBABIABABQADAEAHADIAAABQAHACAIAAQAIAAAFgCQAGgCADgEQAEgEAAgHQAAgGgEgEQgDgEgFgCIgMgDIgKgEQgDgCAAgDQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIAAAAQACgCAGAAQAFAAAEACIAIAEIAAABIABAAIABgBIAFgGIAAgBIAAgBQgEgFgGgCIAAABQgGgDgIAAQgHAAgFACIAAAAQgFADgDADQgDAFAAAFQAAAGADAEIAAAAQADADAGACIAAgBIALAEIALAEQADACAAAEQAAADgCACQgEADgHAAQgFAAgFgDQgEgCgDgDIgBgBIAAAAIgBAAgAHBAeQgFgFAAgJQAAgHAEgGQAEgEAKgEIAAAAQAJgDANgCQAAgFgCgCIAAAAQgCgCgEAAQgGABgFACQgFACgEAEIgCABIgBAAIgCgBIgFgHIAAgCIABgCQAFgFAHgDQAIgEAKAAQAMAAAFAHQAGAFAAALIAAAaIAAAIIABAGIAAACIgBABIgCABIgKAAIgCgBIgBgBIAAgEIgIAEIAAAAQgGADgHAAQgKAAgFgFgAHBAEQgEAGAAAGQAAAIAFAFQAFAEAJAAQAHAAAGgCQAFgCAEgDIAAABIAAAAIABAEIAAABIABAAIAKAAIABAAIABgBIAAgBIgBgFIgBgJIAAgaQAAgKgFgFQgFgGgLAAQgKAAgHADIAAAAQgHAEgFAEIgBABIABABIAEAHIABAAIABAAIABAAQAEgEAFgDIABAAQAEgCAHAAQAFAAACACIAAAAQADADAAAFIAAABQgPACgIAEIAAAAQgKADgEAEgACzAgIAAAAQgHgDgEgFIgBgDIABgBIAGgGIACgBIABAAIABABQADADAFACIAAAAQAEACAFAAQAGAAADgCIAAAAQACgBAAgDQAAgDgCgCIgLgDIgMgEIABAAQgGgCgEgDIAAAAQgDgFAAgGQAAgGADgEIAAgBQADgEAGgCQAFgDAHAAQAJAAAGADIAAAAQAGACAEAFIABACIAAACIgFAGIgCABIgBAAIgCAAIgHgFQgEgCgEAAQgFAAgDACIAAAAIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAAAAIAJADIANAEQAFACAEAEIAAAAQAEAEAAAHQAAAIgEAEQgEAEgGADQgGACgHAAQgJAAgHgDgACwAOIgBABIgGAGIAAABIAAABQAEAEAGADIABABQAGACAJAAQAHAAAGgCQAFgCAEgEQADgEAAgHQAAgGgDgEQgDgEgGgCIgMgDIgKgEQgDgCAAgDQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAIAAAAQADgCAGAAQAEAAAFACIAHAEIABABIABAAIABgBIAEgGIABgBIgBgBQgEgFgGgCIAAABQgFgDgJAAQgHAAgEACIgBAAQgFADgDADQgCAFAAAFQAAAGACAEIAAAAQAEADAFACIAAgBIAMAEIALAEQADACAAAEQAAADgDACQgEADgGAAQgGAAgEgDQgFgCgCgDIgBgBIgBAAIAAAAgAhNAgIgBAAQgHgDgEgFIAAgDIABgBIAGgGIABgBIACAAIABABQADADAEACIAAAAQAEACAFAAQAGAAAEgCIgBAAQADgBAAgDQAAgDgDgCIgLgDIgLgEIAAAAQgGgCgDgDIAAAAQgDgFAAgGQAAgGADgEIAAgBQADgEAGgCQAFgDAHAAQAIAAAHADIgBAAQAGACAFAFIABACIgBACIgFAGIgBABIgCAAIgBAAIgIgFQgDgCgFAAQgFAAgCACIAAAAIgCADQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAIAAAAIAKADIAMAEQAGACAEAEIAAAAQADAEAAAHQAAAIgDAEQgFAEgFADQgGACgIAAQgIAAgHgDgAhRAOIAAABIgGAGIgBABIAAABQAEAEAHADIAAABQAHACAIAAQAIAAAFgCQAGgCAEgEQADgEAAgHQAAgGgDgEQgEgEgFgCIgNgDIgKgEQgCgCAAgDQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIAAAAQACgCAGAAQAFAAAEACIAIAEIAAABIABAAIABgBIAFgGIAAgBIAAgBQgEgFgGgCIAAABQgGgDgIAAQgHAAgFACIAAAAQgFADgDADQgDAFAAAFQAAAGADAEIAAAAQADADAGACIAAgBIALAEIALAEQADACAAAEQAAADgDACQgDADgHAAQgFAAgFgDQgEgCgDgDIgBgBIAAAAIgBAAgAiTAeQgFgFAAgJQAAgHAFgGQADgEAKgEIAAAAQAJgDANgCQAAgFgCgCIAAAAQgCgCgEAAQgGABgFACQgFACgEAEIgCABIgBAAIgCgBIgFgHIAAgCIABgCQAFgFAIgDQAHgEAKAAQAMAAAGAHQAFAFAAALIAAAaIAAAIIABAGIAAACIgBABIgCABIgKAAIgBgBIgCgBIAAgEIgIAEIABAAQgHADgHAAQgKAAgFgFgAiSAEQgFAGAAAGQAAAIAFAFQAFAEAJAAQAHAAAGgCQAFgCAEgDIAAABIAAAAIABAEIAAABIABAAIAKAAIABAAIABgBIAAgBIgBgFIgBgJIAAgaQAAgKgFgFQgFgGgLAAQgKAAgHADIAAAAQgHAEgFAEIgBABIABABIAEAHIABAAIABAAIABAAQAEgEAFgDIAAAAQAFgCAHAAQAFAAACACIAAAAQADADAAAFIAAABQgPACgIAEIAAAAQgKADgDAEgAIDAiIgCgBIgBgCIAAhUIABgCIACgBIAJAAIACABIABACIAABUIgBACIgCABgAICg2IgBABIAABUIABABIABAAIAJAAIABAAIABgBIAAhUIgBgBIgBAAIgJAAIgBAAgAGnAiIgCgBIgBgCIAAg7IABgCIACgBIAJAAIACABIABACIAAA7IgBACIgCABgAGmgdIgBABIAAA7IABABIABAAIAJAAIABAAIABgBIAAg7IgBgBIgBgBIgJAAIgBABgAFPAiIgCgBIgBgCIAAgpQAAgEgCgCQgCgCgEAAQgFAAgEACIgIAGIAAApIgBACIgCABIgKAAIgCgBIgBgCIAAg7IABgCIACgBIAKAAIACABIABACIAAACIACgBIgBAAIAJgEQAFgCAFAAQAKAAAFAGIAAAAQAGAFAAAKIAAArIgBACIgCABgAFEgUQAFAAACADQACACAAAFIAAApIABABIABAAIAKAAIABAAIAAgBIAAgrQAAgJgFgFQgFgFgJAAQgFAAgFABIgHAEIgEADIAAgFIgBgBIgBgBIgKAAIgBABIAAABIAAA7IAAABIABAAIAKAAIABAAIABgBIAAgqIAIgHQAFgCAFAAIAAAAgABGAiIgCgBIgBgCIAAg7IABgCIACgBIAKAAIACABIABACIAAADIAFgEQAGgEAKAAIABAAIABABIABABIABACIgBAJIgBACIgCAAIgBAAIgCAAQgGAAgFADIAAAAQgEADgDAGIAAAlIgBACIgCABgABFgdIAAABIAAA7IAAABIABAAIAKAAIABAAIABgBIAAgmQADgGAEgDQAGgDAGAAIACAAIABAAIABgBIABgBIAAgJIAAAAIAAgBIgBAAIgBAAQgKAAgGAEIgGAFIAAgGIgBgBIgBgBIgKAAIgBABgAi9AiIgCgBIgBgCIAAg7IABgCIACgBIAKAAIACABIABACIAAADIAEgEQAGgEAKAAIABAAIACABIABABIAAACIAAAJIgBACIgCAAIgCAAIgBAAQgGAAgFADIAAAAQgEADgDAGIAAAlIgBACIgCABgAi+gdIgBABIAAA7IABABIABAAIAKAAIABAAIAAgBIAAgmQADgGAFgDQAFgDAHAAIABAAIACAAIABgBIAAgBIABgJIgBAAIAAgBIgBAAIgBAAQgJAAgGAEIgHAFIAAgGIAAgBIgBgBIgKAAIgBABgAkcAiIgCgBIgBgCIAAgpQAAgEgBgDQgCgBgEAAQgEAAgEACIgIAFIAAAqIgBACIgCABIgKAAIgCgBIgBgCIAAgpQABgEgCgCQgCgCgEAAQgEAAgFACIABAAIgIAFIAAAqIgBACIgCABIgKAAIgCgBIgBgCIAAg7IABgCIACgBIAKAAIACABIABACIAAACIAFgDQAGgEAIAAQAIAAAFAEIAAAAIAEAFIAIgFIAAAAQAGgEAIAAQAKAAAFAGIAAAAQAFAGAAAJIAAArIgBACIgCABgAkdgKIAAApIAAABIABAAIAKAAIABAAIABgBIAAgrQAAgIgFgGIAAAAQgEgFgKAAQgIAAgGADIgIAGQgCgDgDgDQgEgDgIAAQgHAAgGADIgHAFIAAgFIgBgBIgBgBIgKAAIgBABIAAABIAAA7IAAABIABAAIAKAAIABAAIABgBIAAgqIAIgHQAFgCAEAAQAFAAACADQACACAAAFIAAApIAAABIABAAIAKAAIABAAIABgBIAAgqIAIgHQAEgCAFAAQAFAAACADIAAgBQACADAAAFgAocAiIgCgBIgBgCIAAgpQAAgEgCgCQgCgCgEAAQgFAAgEACIgIAGIAAApIgBACIgCABIgKAAIgCgBIgBgCIAAg7IABgCIACgBIAKAAIACABIABACIAAACIACgBIgBAAIAJgEQAFgCAFAAQAKAAAFAGIABAAQAFAFAAAKIAAArIgBACIgCABgAongUQAFAAACADQACACAAAFIAAApIABABIABAAIAKAAIABAAIAAgBIAAgrQAAgJgFgFQgFgFgJAAQgFAAgFABIgIAEIgDADIAAgFIgBgBIgBgBIgKAAIgBABIAAABIAAA7IAAABIABAAIAKAAIABAAIABgBIAAgqIAJgHQAEgCAFAAIAAAAgAAVAUIAAAAQgEgCgEgEIAAgZQADgEAEgDQAFgCAEAAQAFAAADACQAEADACAFIAAgBQACAFAAAHQAAALgEAFQgFAFgHAAIAAAAQgEAAgEgCgAAVgQIgGAFIAAAZQADADAEABIAAABQADACAEAAQAHAAAEgFQADgFAAgKQAAgHgBgEIAAAAQgDgEgDgCIAAAAQgDgCgEAAIAAAAQgEAAgEACgAjuAUIAAAAQgEgCgEgEIAAgZQADgEAFgDQAEgCAEAAQAFAAADACQAEADACAFIAAgBQACAFAAAHQAAALgEAFQgFAFgHAAIAAAAQgEAAgEgCgAjugQIgGAFIAAAZQADADAEABIAAABQADACAEAAQAHAAAEgFQADgFAAgKQAAgHgBgEIAAAAQgDgEgDgCIAAAAQgDgCgEAAIAAAAQgEAAgEACgAHMAUIAAABQgCgCAAgEQAAgDACgDQADgCAGgDIARgEIAAAPIgJAFIAAAAQgFACgFAAQgFAAgCgCgAHTAVQAFAAAFgCIgBAAIAIgFIAAgMIgOAEQgGACgDACQgCACAAADQABADABACIAAgBQACACAEAAgAiIAUIAAABQgCgCAAgEQAAgDACgDQADgCAGgDIARgEIAAAPIgJAFIAAAAQgFACgFAAQgFAAgCgCgAiBAVQAFAAAFgCIAAAAIAHgFIAAgMIgOAEQgGACgDACQgCACAAADQABADABACIAAgBQACACAEAAgAmcATQgEgDgCgEQgCgFAAgGQAAgGADgEIAAgBQACgEADgDQAEgDAFAAQAGAAADADQAEADACAFQACAFAAAFQAAAGgCAFIgBAAQgCAFgDACQgEADgFAAQgGAAgDgDgAmbgQQgDADgCAEIAAAAQgCAEAAAGQAAAGACAEQABAEADADQAEADAFAAQAFAAADgDQADgCACgEIAAgBQACgEAAgGQAAgFgBgFQgCgEgEgDQgDgCgFAAQgFAAgDACgAIngFQABgFACgDQACgEADgBQAEgCADAAQAHAAADAEQADAEABAHgAIrgMIgCAFIAZAAQAAgEgDgEIAAAAQgDgDgGgBQgDAAgEACIABAAQgDABgCAEgADwgFQABgFABgDQADgEADgBQAEgCADAAQAHAAADAEQADAEABAHgAEMgHQgBgEgDgEIAAAAQgDgDgGgBQgDAAgDACIAAAAQgDABgCAEIgCAFIAaAAIAAAAgAB6gFQAAgFACgDQACgEAEgBQADgCAEAAQAGAAADAEQAEAEABAHgAB9gMIgCAFIAaAAQgBgEgDgEIAAAAQgCgDgHgBIgGACIAAAAQgDABgCAEgAp7gFQABgFACgDQACgEADgBQAEgCADAAQAHAAADAEQADAEABAHgApfgHQgBgEgDgEIAAAAQgDgDgGgBQgDAAgEACIABAAQgDABgCAEIgCAFIAaAAIAAAAgAGmgmIgCgBIgBgCIAAgKIABgCIACgBIALAAIACABIABACIAAAKIgBACIgCABgAGlg0IAAABIAAAKIAAABIABAAIALAAIABAAIAAgBIAAgKIAAgBIgBAAIgLAAIgBAAg");
	this.shape.setTransform(-0.075,1.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.329)").s().p("AAMA6IgKAAIgDgBIgBgDIAAhSIABgEIADgBIAKAAIADABIABACIABgBIAAABQAGgEAJAAQAIAAAHAEQAGAEAEAJIAAgBQAEAIAAALQAAAMgEAHIAAAAQgEAIgHAEIAAAAQgHAEgIAAQgIAAgFgDIAAAAIgCgBIAAAWIgBADIgDABIAAAAgAAAgeIAAACIAABSIAAACIACABIAKAAIACgBIABgCIAAgZIAEADIAAAAQAFADAHAAQAIAAAGgEQAHgEADgIIAAAAQAEgHAAgLQAAgLgEgHQgDgIgGgEQgGgEgIAAQgIAAgGAEIgDACIAAgBIgBgCIgCgBIgKAAIgCABgAj3A6IgKAAIgEgBIgBgDIAAhSIABgEIAEgBIAKAAIADABIABACIABgBIAAABQAGgEAJAAQAIAAAHAEQAGAEAEAJIAAgBQAEAIAAALQAAAMgEAHIAAAAQgEAIgHAEIAAAAQgHAEgIAAQgIAAgFgDIAAAAIgCgBIAAAWIgBADIgDABIAAAAgAkDgeIgBACIAABSIABACIACABIAKAAIACgBIABgCIAAgZIAEADIAAAAQAFADAHAAQAIAAAGgEQAHgEADgIIAAAAQAEgHAAgLQAAgLgEgHQgDgIgGgEQgGgEgIAAQgIAAgGAEIgDACIAAgBIgBgCIgCgBIgKAAIgCABgAImAhQgHgEgEgJIAAAAQgEgHgBgMIAAgBQABgIACgGIAAgBQADgGAFgFQAEgEAHgCQAFgCAFAAQAIAAAIAEIAAAAQAGAEAEAJIAAgBQAEAIAAALIAAACIgCAEIgDABIglAAIABAEIABABQABADADACQADACAEAAQAFAAADgCIAAAAIAHgHIACgBIACAAIACABIAGAFIABADIgBADQgEAHgHAEIAAAAQgHADgKABIAAAAIAAAAQgJAAgHgEgAIsgeIAAAAQgGABgEAFQgFAEgDAGIAAAAQgCAHAAAHIAAABQAAALAEAHIAAABQAFAHAGAEQAHAEAIAAIAAAAQAKAAAGgDIAAgBQAHgEAEgGIABgCIgBgCIgGgFIgBgBIgCAAIgBABIgHAHIAAAAQgEACgFAAQgEAAgEgCQgDgCgCgDIAAgBIgCgHIAnAAIACgBIABgCIAAgCQAAgLgDgHQgEgIgGgEQgHgEgIAAIAAAAQgFAAgFADgADwAhQgIgEgEgJIAAAAQgEgHgBgMIAAgBQABgIACgGIAAgBQADgGAEgFQAFgEAGgCQAGgCAFAAQAIAAAHAEIABAAQAGAEAEAJIAAgBQAEAIAAALIAAACIgBAEIgEABIglAAIABAEIAAABQACADADACQADACAEAAQAFAAAEgCIgBAAIAHgHIACgBIACAAIACABIAGAFIABADIAAADQgFAHgHAEIAAAAQgHADgJABIgBAAIAAAAQgJAAgGgEgAD0geIABAAQgGABgEAFQgFAEgDAGIAAAAQgCAHAAAHIAAABQAAALAEAHIAAABQAFAHAGAEQAHAEAIAAIABAAQAJAAAGgDIAAgBQAHgEAEgGIABgCIgBgCIgGgFIgBgBIgCAAIgBABIgHAHIAAAAQgEACgFAAQgEAAgEgCQgDgCgCgDIAAgBIgCgHIAnAAIACgBIABgCIAAgCQAAgLgEgHQgDgIgGgEQgHgEgIAAIAAAAQgFAAgGADgAB5AhQgHgEgFgJIAAAAQgEgHAAgMIAAgBQAAgIACgGIABgBQADgGAEgFQAFgEAGgCQAFgCAGAAQAIAAAHAEIAAAAQAHAEADAJIAAgBQAEAIAAALIAAACIgBAEIgDABIgmAAIACAEIAAABQACADADACQADACADAAQAFAAAEgCIgBAAIAHgHIACgBIADAAIACABIAFAFIACADIgBADQgFAHgHAEIAAAAQgGADgKABIAAAAIAAAAQgJAAgHgEgAB+geIAAAAQgFABgFAFQgEAEgDAGIAAAAQgCAHgBAHIAAABQABALADAHIABABQAEAHAHAEQAGAEAJAAIAAAAQAJAAAGgDIABgBQAGgEAFgGIAAgCIgBgCIgFgFIgCgBIgBAAIgCABIgHAHIABAAQgEACgGAAQgEAAgDgCQgDgCgDgDIAAgBIgBgHIAnAAIACgBIABgCIAAgCQAAgLgEgHQgDgIgHgEQgGgEgIAAIAAAAQgGAAgFADgAp8AhQgHgEgEgJIAAAAQgEgHgBgMIAAgBQABgIACgGIAAgBQADgGAFgFQAEgEAGgCQAGgCAFAAQAIAAAIAEIAAAAQAGAEAEAJIAAgBQAEAIAAALIAAACIgCAEIgDABIglAAIABAEIAAABQACADADACQADACAEAAQAFAAADgCIAAAAIAHgHIACgBIACAAIACABIAGAFIABADIgBADQgEAHgHAEIAAAAQgHADgKABIAAAAIAAAAQgJAAgHgEgAp3geIABAAQgGABgEAFQgFAEgDAGIAAAAQgCAHAAAHIAAABQAAALAEAHIAAABQAFAHAGAEQAHAEAIAAIAAAAQAKAAAGgDIAAgBQAHgEAEgGIABgCIgBgCIgGgFIgBgBIgCAAIgBABIgHAHIAAAAQgEACgFAAQgEAAgEgCQgDgCgCgDIAAgBIgCgHIAnAAIACgBIABgCIAAgCQAAgLgDgHQgEgIgGgEQgHgEgIAAIAAAAQgFAAgGADgAFxAgIAAAAQgHgEgFgIQgEgHAAgMIAAgBQAAgLAFgHQAEgJAHgEIABAAQAHgDAIAAQAIAAAFACIAAABQAHACACAFIAGAJIAAADIgBACIgBACIgJADIgCAAIgDgBIgBgCQgCgEgCgDIgBAAQgCgCgEAAIgGABQgDACgCAEIAAABQgCAEAAAFQAAAKAEAFQADAEAGAAQADAAADgBQADgDADgFIACgCIADAAIAIACIADADIAAADQgDAKgHAFQgHAFgLABIgBAAIAAAAQgIAAgHgFgAGAAjIABAAQAKAAAHgFQAGgFAEgJIAAgCIgCgCIgIgDIgCAAIgCABQgDAGgDADQgDACgEAAQgHAAgDgFQgEgGgBgKQAAgGADgEIAAAAQACgFADgCIAHgBQAEAAADACIABAAQADADABAFIABABIACABIACgBIAIgDIABgBIABgBIAAgCIgGgJIAAAAQgDgEgFgDIgBAAQgFgDgHAAQgHAAgIAEIAAAAQgGAEgFAHQgEAIgBAKIAAABQABALADAHIABAAQAEAIAHAEIgBAAQAHAEAIAAgAnfAgIAAAAQgHgEgFgIQgEgHAAgMIAAgBQAAgLAFgHQAEgJAIgEIAAAAQAHgDAIAAQAIAAAFACIAAABQAHACACAFIAGAJIAAADIgBACIgCACIgIADIgDAAIgCgBIgBgCQgCgEgDgDIAAAAQgCgCgEAAIgGABQgDACgCAEIAAABQgCAEAAAFQAAAKAEAFQADAEAGAAQADAAADgBQADgDADgFIACgCIADAAIAIACIADADIAAADQgDAKgHAFQgHAFgLABIgBAAIAAAAQgIAAgHgFgAnQAjIABAAQAKAAAGgFQAHgFAEgJIAAgCIgCgCIgIgDIgDAAIgBABQgDAGgDADQgDACgEAAQgHAAgDgFQgEgGgBgKQAAgGADgEIAAAAQACgFADgCIAHgBQAEAAADACIAAAAQAEADABAFIABABIACABIABgBIAJgDIABgBIABgBIAAgCIgGgJIAAAAQgDgEgFgDIgBAAQgFgDgHAAQgHAAgIAEIAAAAQgGAEgFAHQgEAIgBAKIAAABQABALAEAHIAAAAQAEAIAHAEIAAAAQAGAEAIAAgAmjAgIAAAAQgIgEgEgIIAAAAQgEgIgBgLIAAgBQABgKAEgIIAAAAQAEgIAIgEQAIgEAIAAQAJAAAHAEQAIAEAEAIIAAAAQAEAIABAKIAAABQgBALgEAIIAAAAQgEAIgIAEIAAAAQgHAFgJAAQgIAAgIgFgAmTAjQAJAAAGgEIAAAAQAHgEAFgIIAAAAQAEgHAAgLIAAgBQAAgKgEgHIAAAAQgFgIgHgEIAAAAQgGgEgJAAQgIAAgHAEQgHAEgFAIIAAAAQgEAHAAAKIAAABQAAALAEAHIAAAAQAFAIAHAEIAAAAQAHAEAIAAgAHQAkQgKAAgGgFQgGgFAAgKQAAgHAFgHQAEgEAKgEIAAAAQAJgDANgDIgCgDIAAgBQgCgBgDAAQgGAAgEACIAAAAQgFACgEAEIgCABIgDAAIgCgBIgFgHIgBgDIACgDQAFgFAIgEIAAAAQAIgDAKAAQANAAAFAHQAGAGAAALIAAAaIABAIIABAGIgBADIgBACIgDAAIgKAAIgDgBIgBgCIAAgBIgGADIAAAAQgHACgHAAIAAAAgAHigRIAAAAQACACAAAFQgNACgJADIAAAAQgKAEgEAEQgEAGAAAHQAAAJAFAFQAFAFAKAAQAHAAAGgDIAAAAIAHgEIABAEIABABIACABIAKAAIACgBIABgBIAAgCIgBgGIAAgIIAAgaQAAgLgGgFQgFgHgMAAQgKAAgIAEQgHADgFAFIgBACIAAACIAFAHIACABIABAAIACgBQAEgEAFgCQAFgCAGgBQAEAAACACgAiEAkQgKAAgGgFQgGgFAAgKQAAgHAFgHQAEgEAKgEIAAAAQAJgDANgDIgCgDIAAgBQgCgBgDAAQgGAAgEACIAAAAQgFACgEAEIgDABIgCAAIgCgBIgFgHIgBgCIAAABIgDABIgCAAIgBAAQgGAAgEACQgEADgDAFIAAAlIgBADIgDABIgKAAIgDgBIgCgDIAAg7IACgEIADgBIAKAAIADABIABADIACgBQAHgEAKAAIABAAIACAAIACACIABADIgBAIIABgBQAFgFAIgEIAAAAQAIgDAKAAQANAAAGAHQAFAGAAALIAAAaIABAIIABAGIAAADIgCACIgDAAIgKAAIgCgBIgCgCIAAgBIgGADIAAAAQgHACgHAAIAAAAgAhygRIAAAAQACACAAAFQgNACgJADIAAAAQgKAEgDAEQgFAGAAAHQAAAJAFAFQAFAFAKAAQAHAAAHgDIgBAAIAIgEIAAAEIACABIABABIAKAAIACgBIABgBIAAgCIgBgGIAAgIIAAgaQAAgLgFgFQgGgHgMAAQgKAAgHAEQgIADgFAFIgBACIAAACIAFAHIACABIABAAIACgBQAEgEAFgCQAFgCAGgBQAEAAACACgAi/geIgBACIAAA7IABACIACABIAKAAIACgBIABgCIAAglQADgGAEgDIAAAAQAFgDAGAAIABAAIACAAIACAAIABgCIAAgJIAAgCIgBgBIgCgBIgBAAQgKAAgGAEIgEAEIAAgDIgBgCIgCgBIgKAAIgCABgAJgAiIAAgBQgIgDgEgFIgBgEIABgDIAGgGIADgBIACAAIACACQADADAEACIAAAAQAEACAEAAQAGAAADgCQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIAAABIgKgEIAAAAIgMgEIAAABQgGgDgDgDIAAgBQgEgEAAgHQAAgGAEgFQADgFAGgDIAAAAQAFgCAIAAQAJAAAGADIAAgBQAGADAFAEIABAEIgBADIgFAGIgBACIgDAAIgCgBIgHgFQgEgBgEAAQgEAAgCABIgBACIABADIAJADIANADQAGADAEAEIAAAAQAEAEAAAIQAAAIgEAFQgEAFgHACIAAAAQgGACgIAAIAAAAQgJAAgHgCgAJdANIgBABIgGAGIgBABIABADQADAFAIADIAAAAQAHADAIAAQAIAAAGgCQAFgDAEgEQAEgEAAgIQAAgHgDgEIgBAAQgDgEgGgCIgMgEIgKgDIABAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIACgDIAAAAQACgCAFAAQAFAAADACIAIAFIABAAIACAAIABgBIAFgGIABgCIgBgCQgFgFgGgCIAAAAQgGgDgIAAQgHAAgGADQgFACgDAEIAAABQgDAEAAAGQAAAGADAFIAAAAQADADAGACIAAAAIALAEIALADQADACAAADQAAADgCABIAAAAQgEACgGAAQgFAAgEgCIAAAAQgEgCgDgDIgBgBIgCAAIAAAAgACzAiIgBgBQgHgDgEgFIgBgEIABgDIAGgGIACgBIADAAIACACQACADAEACIABAAQADACAFAAQAFAAADgCQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBIAAABIgKgEIAAAAIgMgEIAAABQgGgDgEgDIAAgBQgDgEAAgHQAAgGADgFQADgFAGgDIAAAAQAGgCAHAAQAJAAAGADIAAgBQAHADAFAEIABAEIgBADIgFAGIgCACIgCAAIgDgBIgGgFQgEgBgEAAQgFAAgCABIgBACIABADIAKADIAMADQAHADADAEIAAAAQAEAEAAAIQAAAIgEAFQgEAFgGACIAAAAQgGACgIAAIAAAAQgJAAgHgCgACwANIgCABIgGAGIgBABIABADQAEAFAHADIAAAAQAHADAJAAQAHAAAGgCQAGgDAEgEQAEgEAAgIQAAgHgEgEIAAAAQgEgEgFgCIgNgEIgJgDIAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIAAAAQADgCAFAAQAEAAAEACIAHAFIACAAIABAAIACgBIAFgGIAAgCIgBgCQgEgFgGgCIAAAAQgGgDgJAAQgHAAgFADQgGACgDAEIAAABQgDAEAAAGQAAAGADAFIAAAAQAEADAGACIgBAAIAMAEIALADQACACAAADQAAADgCABIAAAAQgDACgGAAQgFAAgEgCIAAAAQgFgCgDgDIgBgBIgBAAIAAAAgAhOAiIAAgBQgIgDgEgFIgBgEIABgDIAHgGIACgBIACAAIACACQADADAEACIAAAAQAEACAEAAQAGAAADgCQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIAAABIgKgEIAAAAIgLgEIAAABQgHgDgDgDIAAgBQgEgEAAgHQAAgGAEgFQADgFAGgDIAAAAQAFgCAIAAQAJAAAGADIAAgBQAGADAFAEIABAEIgBADIgFAGIgCACIgCAAIgCgBIgHgFQgEgBgEAAQgEAAgCABIgBACIABADIAJADIANADQAGADAEAEIAAAAQAEAEAAAIQAAAIgEAFQgEAFgGACIgBAAQgGACgIAAIAAAAQgJAAgHgCgAhRANIgBABIgGAGIgBABIAAADQAEAFAHADIABAAQAHADAIAAQAIAAAGgCQAFgDAFgEQADgEAAgIQAAgHgDgEIAAAAQgEgEgGgCIgMgEIgKgDIAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIACgDIAAAAQACgCAFAAQAFAAADACIAIAFIABAAIACAAIABgBIAFgGIABgCIgBgCQgFgFgGgCIABAAQgHgDgIAAQgHAAgFADQgGACgDAEIAAABQgDAEAAAGQAAAGADAFIAAAAQADADAGACIAAAAIALAEIALADQADACAAADQAAADgDABIABAAQgEACgGAAQgFAAgEgCIAAAAQgEgCgDgDIgBgBIgCAAIAAAAgAIMAjIgJAAIgEgBIgBgDIAAhUIABgDIAEgBIAJAAIAEABIABADIAABUIgBADIgEABIAAAAgAIBg3IgBACIAABUIABACIACABIAJAAIACgBIABgCIAAhUIgBgCIgCgBIgJAAIgCABgAGwAjIgJAAIgDgBIgCgDIAAg7IACgEIADgBIAJAAIAEABIABAEIAAA7IgBADIgEABIAAAAgAGlgeIgBACIAAA7IABACIACABIAJAAIACgBIABgCIAAg7IgBgCIgCgBIgJAAIgCABgAFZAjIgKAAIgEgBIgBgDIAAgpQAAgDgBgCQgCgCgDAAQgFAAgDACIgHAFIAAApIgCADIgDABIgKAAIgDgBIgBgDIAAg7IABgEIADgBIAKAAIADABIACADIAHgEQAFgBAGAAQALAAAFAGIAAAAQAGAGAAAKIAAArIgBADIgDABIAAAAgAFEgSQAEAAACACQACACAAAEIAAApIABACIACABIAKAAIACgBIABgCIAAgrQAAgKgGgFIAAAAQgFgGgKAAQgFAAgFACIgJAEIABAAIgCABIAAgCIgBgCIgCgBIgKAAIgCABIgBACIAAA7IABACIACABIAKAAIACgBIABgCIAAgpIAIgGQAEgCAEAAIABAAgABQAjIgKAAIgDgBIgBgDIAAg7IABgEIADgBIAKAAIADABIACADIACgBQAGgEALAAIABAAIACAAIACACIAAADIAAAJIgCADIgDABIgBAAIgCAAQgFAAgFACQgEADgCAFIAAAlIgCADIgDABIAAAAgABEgeIgBACIAAA7IABACIACABIAKAAIACgBIABgCIAAglQADgGAEgDIAAAAQAFgDAGAAIACAAIABAAIACAAIABgCIABgJIgBgCIgBgBIgBgBIgBAAQgKAAgGAEIgFAEIAAgDIgBgCIgCgBIgKAAIgCABgAkSAjIgKAAIgDgBIgBgDIAAgpIgBgFQgCgCgDAAQgEAAgDACIgHAFIAAApIgBADIgEABIgKAAIgDgBIgBgDIAAgpQAAgDgBgCQgCgCgDAAQgEAAgEACIAAAAIgGAFIAAApIgCADIgDABIgKAAIgDgBIgBgDIAAg7IABgEIADgBIAKAAIADABIACADIADgCQAGgDAIAAQAJAAAFAEIAAAAIAEAEIAGgEIAAgBQAGgDAJAAQALAAAFAGIAAABQAGAGAAAJIAAArIgCADIgDABIAAAAgAkmgSQAEAAACABQABADAAAEIAAApIABACIACABIAKAAIACgBIABgCIAAgrQAAgJgFgGIAAABQgFgHgKAAQgIAAgGAEIAAAAIgIAFIgEgFIAAAAQgFgEgIAAQgIAAgGAEIgFADIAAgCIgBgCIgCgBIgKAAIgCABIgBACIAAA7IABACIACABIAKAAIACgBIABgCIAAgqIAIgFIgBAAQAFgCAEAAQAEAAACACQACACgBAEIAAApIABACIACABIAKAAIACgBIABgCIAAgqIAIgFQADgCAEAAIABAAgAoSAjIgKAAIgDgBIgCgDIAAgpQAAgDgBgCQgCgCgDAAQgFAAgDACIgHAFIAAApIgCADIgDABIgKAAIgDgBIgBgDIAAg7IABgEIADgBIAKAAIADABIACADIAHgEQAFgBAGAAQALAAAFAGIAAAAQAGAGAAAKIAAArIgBADIgDABIAAAAgAongSQAEAAACACQACACAAAEIAAApIABACIACABIAKAAIACgBIABgCIAAgrQAAgKgFgFIgBAAQgFgGgKAAQgFAAgFACIgJAEIABAAIgCABIAAgCIgBgCIgCgBIgKAAIgCABIgBACIAAA7IABACIACABIAKAAIACgBIABgCIAAgpIAIgGQAEgCAEAAIABAAgAHNATIAAABQgBgCgBgDQAAgDACgCQADgCAGgCIAOgEIAAAMIgIAFIABAAQgFACgFAAIAAAAQgEAAgCgCgAHWAHQgFACgCACIgCAEIACADIAEABQAFAAAEgBIAAAAIAHgFIAAgJIgNADgAiHATIAAABQgBgCgBgDQAAgDACgCQADgCAGgCIAOgEIAAAMIgHAFIAAAAQgFACgFAAIAAAAQgEAAgCgCgAh+AHQgFACgDACIgBAEIABADIAFABQAFAAAEgBIAAAAIAHgFIAAgJIgNADgAAWATIAAgBQgEgBgDgDIAAgZIAGgFQAEgCAEAAQAEAAADACIAAAAQADACADAEIAAAAQABAEAAAHQAAAKgDAFQgEAFgHAAIAAAAQgEAAgDgCgAAWgPIgGAFIAAAXIAGAEIABABQADABADAAQAGAAADgDQAEgFAAgKQAAgGgCgEIAAAAQgCgEgDgCQgCgCgEAAQgEAAgDACgAjtATIAAgBQgEgBgDgDIAAgZIAGgFQAEgCAEAAQAEAAADACIAAAAQADACADAEIAAAAQABAEAAAHQAAAKgDAFQgEAFgHAAIAAAAQgEAAgDgCgAjtgPIgGAFIAAAXIAGAEIABABQADABADAAQAGAAADgDQAEgFAAgKQAAgGgCgEIAAAAQgCgEgDgCQgCgCgEAAQgEAAgDACgAmcASQgDgDgBgEQgCgEAAgGQAAgGACgEIAAAAQACgEADgDQADgCAFAAQAFAAADACQAEADACAEQABAFAAAFQAAAGgCAEIAAABQgCAEgDACQgDADgFAAQgFAAgEgDgAmMARQADgCACgEIAAAAQACgEAAgGQAAgFgCgEIAAAAQgCgEgDgDQgCgCgFAAQgEAAgDACQgDADgCAEIAAAAQgCAEAAAFQAAAFACAEQACAEADADIgBAAQADACAFAAQAEAAADgCgAIpgHIACgFQACgEADgBIgBAAQAEgCADAAQAGABADADIAAAAQADAEAAAEgAIwgQIAAAAQgCACgCADIgBADIAVAAIgCgGQgDgDgFAAIAAAAIgGABgADygHIACgFQACgEADgBIAAAAQADgCADAAQAGABADADIAAAAQADAEABAEgAD5gQIABAAQgDACgCADIgBADIAWAAIgDgGQgDgDgFAAIAAAAIgGABgAB7gHIACgFQACgEADgBIAAAAIAGgCQAHABACADIAAAAQADAEABAEgACDgQIAAAAQgDACgCADIgBADIAWAAIgDgGQgCgDgGAAIgFABgAp5gHIACgFQACgEADgBIgBAAQAEgCADAAQAGABADADIAAAAQADAEABAEgApygQIABAAQgDACgCADIgBADIAVAAIgCgGQgDgDgFAAIAAAAIgGABgAGxglIgLAAIgDgBIgBgDIAAgKIABgDIADgBIALAAIADABIABADIAAAKIgBADIgDABIAAAAgAGkg1IgBACIAAAKIABACIACABIALAAIACgBIABgCIAAgKIgBgCIgCgBIgLAAIgCABg");
	this.shape_1.setTransform(-0.075,1.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AACA3IgBAAIgBgBIAAhSIABgBIABgBIAKAAIABABIAAABIAAAEIAGgEQAFgDAIAAQAHAAAGAEQAGADADAIIAAgBQAEAIAAAKQAAALgEAGQgEAIgGADQgGAEgHAAQgHAAgFgDIABAAIgHgDIAAAbIAAABIgBAAgAAUgSQgEADgDAEIAAAZQAEAEAEACIAAAAQAEACAEAAQAHAAAFgFQAEgFAAgLQAAgHgCgFIAAABQgCgFgEgDQgDgCgFAAIAAAAQgEAAgFACgAkBA3IgBAAIgBgBIAAhSIABgBIABgBIAKAAIABABIAAABIAAAEIAGgEQAFgDAIAAQAHAAAGAEQAGADADAIIAAgBQAEAIAAAKQAAALgEAGQgEAIgGADQgGAEgHAAQgHAAgFgDIABAAIgHgDIAAAbIAAABIgBAAgAjugSQgFADgDAEIAAAZQAEAEAEACIAAAAQAEACAEAAQAHAAAFgFQAEgFAAgLQAAgHgCgFIAAABQgCgFgEgDQgDgCgFAAIAAAAQgEAAgEACgAIoAeQgGgEgFgHQgDgHgBgLQABgIACgGIAAAAQADgGAEgEQAEgFAFgBIAAAAQAFgCAFAAQAIAAAGAEQAGADADAIIAAgBQAEAIAAAKIAAACIgBABIgBABIgpAAIADAJIAAAAQACAEADACQAEADAFAAQAGAAAEgDIAAAAIAHgHIABAAIAAAAIABAAIAGAFIAAABIAAABQgEAGgGAEQgHADgJABQgIAAgGgEgAIvgSQgDABgCAEQgCADgBAFIAdAAQgBgHgDgEQgDgEgHAAIAAAAQgDAAgEACgAFyAdQgGgDgEgIQgEgGAAgLQAAgLAEgHQAFgHAGgEQAHgDAHAAQAHAAAFADIAAgBQAFADADAEIAAAAIAFAJIAAABIAAAAIgBABIgIADIgBAAIgBAAIAAgBQgCgFgEgDQgDgDgFAAQgEAAgEACQgDACgDAFQgCAFAAAHQAAAKAFAGQAEAFAHAAQAFAAAEgCIgBAAQAEgDADgGIAAgBIABAAIAIADIABABIAAABQgDAJgGAEQgHAFgKABQgHAAgHgFgADxAeQgGgEgEgHQgEgHgBgLQABgIACgGIAAAAQADgGAEgEQAEgFAFgBIAAAAQAFgCAFAAQAIAAAGAEQAGADADAIIAAgBQAEAIAAAKIAAACIgBABIgBABIgoAAIACAJIgBAAQADAEAEACQADADAFAAQAGAAAEgDIAAAAIAHgHIABAAIABAAIAAAAIAGAFIAAABIAAABQgEAGgHAEQgGADgJABQgIAAgGgEgAD4gSQgDABgDAEQgBADgBAFIAdAAQgBgHgDgEQgDgEgHAAIAAAAQgDAAgEACgAB7AeQgHgEgEgHQgEgHAAgLQAAgIACgGIAAAAQADgGAEgEQAEgFAGgBIAAAAQAEgCAGAAQAHAAAHAEQAFADAEAIIAAgBQADAIAAAKIAAACIAAABIgBABIgpAAIACAJIAAAAQACAEAEACQAEADAEAAQAGAAAFgDIgBAAIAHgHIABAAIABAAIABAAIAFAFIABABIgBABQgEAGgGAEQgGADgJABQgIAAgGgEgACCgSQgEABgCAEQgCADAAAFIAdAAQgBgHgEgEQgDgEgGAAIAAAAQgEAAgDACgAmhAdQgHgDgFgIQgDgHgBgKQABgKADgIQAFgHAHgDQAGgEAIAAQAIAAAHAEQAGADAEAHQAEAIABAKQgBAKgEAHQgEAIgGADQgHAFgIAAQgIAAgGgFgAmcgRQgDADgCAEIAAABQgDAEAAAGQAAAGACAFQACAEAEADQADADAGAAQAFAAAEgDQADgCACgFIABAAQACgFAAgGQAAgFgCgFQgCgFgEgDQgDgDgGAAQgFAAgEADgAneAdQgGgDgEgIQgEgGAAgLQAAgLAFgHQAEgHAGgEQAHgDAHAAQAHAAAFADIAAgBQAFADADAEIAAAAIAFAJIAAABIAAAAIgBABIgIADIgBAAIgBAAIAAgBQgCgFgEgDQgDgDgFAAQgEAAgEACQgDACgDAFQgCAFAAAHQAAAKAEAGQAFAFAHAAQAFAAAEgCIgBAAQAEgDACgGIABgBIABAAIAIADIABABIAAABQgDAJgGAEQgHAFgKABQgHAAgHgFgAp6AeQgGgEgFgHQgDgHgBgLQABgIACgGIAAAAQADgGAEgEQAEgFAFgBIAAAAQAFgCAFAAQAIAAAGAEQAGADADAIIAAgBQAEAIAAAKIAAACIgBABIgBABIgpAAIADAJIAAAAQACAEADACQAEADAFAAQAGAAAEgDIAAAAIAHgHIABAAIAAAAIABAAIAGAFIAAABIAAABQgEAGgGAEQgHADgJABQgIAAgGgEgApzgSQgDABgCAEQgCADgBAFIAdAAQgBgHgDgEQgDgEgHAAIAAAAQgDAAgEACgAJhAfIAAgBQgHgDgDgEIgBgBIABgBIAGgGIAAgBIABAAIABABQADADAEACQAFADAFAAQAHAAAEgDQACgCAAgDQAAgEgDgCIgLgEIgLgEIAAABQgGgCgDgDIAAAAQgDgEAAgGQAAgFADgFQADgDAFgDIAAAAQAFgCAHAAQAIAAAGADIAAgBQAGACAEAFIAAABIAAABIgFAGIgBABIgBAAIAAgBIgIgEQgEgCgFAAQgGAAgCACIAAAAQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAADADACIAKAEIAMADQAFACADAEQAEAEAAAGQAAAHgEAEQgDAEgGACQgFACgIAAIAAAAQgIAAgHgCgAHQAhQgJAAgFgEQgFgFAAgIQAAgGAEgGQAEgEAKgDIAAAAQAIgEAPgCIAAgBQAAgFgDgDIAAAAQgCgCgFAAQgHAAgEACIgBAAQgFADgEAEIgBAAIgBAAIgBAAIgEgHIgBgBIABgBQAFgEAHgEIAAAAQAHgDAKAAQALAAAFAGQAFAFAAAKIAAAaIABAJIABAFIAAABIgBABIgBAAIgKAAIgBAAIAAgBIgBgEIAAAAIAAgBQgEADgFACQgGACgHAAIAAAAgAHTAWQAFAAAFgCIAAAAIAJgFIAAgPIgRAEQgGADgDACQgCADAAADQAAAEACACIAAgBQACACAFAAgAC0AfIgBgBQgGgDgEgEIAAgBIAAgBIAGgGIABgBIABAAIABABQACADAFACQAEADAGAAQAGAAAEgDQADgCAAgDQAAgEgDgCIgLgEIgMgEIAAABQgFgCgEgDIAAAAQgCgEAAgGQAAgFACgFQADgDAFgDIABAAQAEgCAHAAQAJAAAFADIAAgBQAGACAEAFIABABIgBABIgEAGIgBABIgBAAIgBgBIgHgEQgFgCgEAAQgGAAgDACIAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAQAAADADACIAKAEIAMADQAGACADAEQADAEAAAGQAAAHgDAEQgEAEgFACQgGACgHAAIgBAAQgIAAgGgCgAhNAfIAAgBQgHgDgEgEIAAgBIABgBIAGgGIAAgBIABAAIABABQADADAEACQAFADAFAAQAHAAADgDQADgCAAgDQAAgEgDgCIgLgEIgLgEIAAABQgGgCgDgDIAAAAQgDgEAAgGQAAgFADgFQADgDAFgDIAAAAQAFgCAHAAQAIAAAGADIAAgBQAGACAEAFIAAABIAAABIgFAGIgBABIgBAAIAAgBIgIgEQgEgCgFAAQgGAAgCACIAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAADACACIAKAEIANADQAFACAEAEQADAEAAAGQAAAHgDAEQgEAEgGACQgFACgIAAIAAAAQgIAAgHgCgAiEAhQgJAAgFgEQgFgFAAgIQAAgGAFgGQADgEAKgDIAAAAQAIgEAPgCIAAgBQAAgFgDgDIAAAAQgCgCgFAAQgHAAgFACIAAAAQgFADgEAEIgBAAIgBAAIgBAAIgEgHIgBgBIABgBQAFgEAHgEIAAAAQAHgDAKAAQALAAAFAGQAFAFAAAKIAAAaIABAJIABAFIAAABIgBABIgBAAIgKAAIgBAAIAAgBIgBgEIAAAAIAAgBQgEADgFACQgGACgHAAIAAAAgAiBAWQAFAAAFgCIAAAAIAJgFIAAgPIgRAEQgGADgDACQgCADAAADQAAAEACACIAAgBQACACAFAAgAIDAgIgBAAIgBgBIAAhUIABgBIABAAIAJAAIABAAIABABIAABUIgBABIgBAAgAGnAgIgBAAIgBgBIAAg7IABgBIABgBIAJAAIABABIABABIAAA7IgBABIgBAAgAFPAgIgBAAIgBgBIAAgpQAAgFgCgCQgCgDgFAAQgFAAgFACIgIAHIAAAqIgBABIgBAAIgKAAIgBAAIAAgBIAAg7IAAgBIABgBIAKAAIABABIABABIAAAFIAEgDIAHgEQAFgBAFAAQAJAAAFAFQAFAFAAAJIAAArIAAABIgBAAgABGAgIgBAAIAAgBIAAg7IAAgBIABgBIAKAAIABABIABABIAAAGIAGgFQAGgEAKAAIABAAIABAAIAAABIAAAAIAAAJIgBABIgBABIgBAAIgCAAQgGAAgGADQgEADgDAGIAAAmIgBABIgBAAgAi9AgIgBAAIgBgBIAAg7IABgBIABgBIAKAAIABABIAAABIAAAGIAHgFQAGgEAJAAIABAAIABAAIAAABIABAAIgBAJIAAABIgBABIgCAAIgBAAQgHAAgFADQgFADgDAGIAAAmIAAABIgBAAgAkcAgIgBAAIAAgBIAAgpQAAgFgCgDIAAABQgCgDgFAAQgFAAgEACIgIAHIAAAqIgBABIgBAAIgKAAIgBAAIAAgBIAAgpQAAgFgCgCQgCgDgFAAQgEAAgFACIgIAHIAAAqIgBABIgBAAIgKAAIgBAAIAAgBIAAg7IAAgBIABgBIAKAAIABABIABABIAAAFIAHgFQAGgDAHAAQAIAAAEADQADADACADIAIgGQAGgDAIAAQAKAAAEAFIAAAAQAFAGAAAIIAAArIgBABIgBAAgAocAgIgBAAIgBgBIAAgpQAAgFgCgCQgCgDgFAAQgFAAgEACIgJAHIAAAqIgBABIgBAAIgKAAIgBAAIAAgBIAAg7IAAgBIABgBIAKAAIABABIABABIAAAFIADgDIAIgEQAFgBAFAAQAJAAAFAFQAFAFAAAJIAAArIAAABIgBAAgAGmgoIgBAAIAAgBIAAgKIAAgBIABAAIALAAIABAAIAAABIAAAKIAAABIgBAAg");
	this.shape_2.setTransform(-0.075,1.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-67.7,-8.9,135.4,17.8), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AigBXQgPgHgMgLQgMgLgHgRQgGgSgBgXQABgXAGgRQAHgRAMgMQAMgLAPgFQAPgGAQAAQAQAAAPAGQAPAFALALQANAMAGARQAHARABAXQgBAXgHASQgGARgNALQgLALgPAHQgPAFgQAAQgQAAgPgFgAiigrQgLAQAAAbQgBASAGAOQAFANAKAIQAKAHAOABQANgBAKgHQALgIAFgNQAGgOAAgSQAAgbgNgQQgLgPgVgBQgVABgMAPgABgBZIAAixIB2AAIAAAhIhPAAIAAArIA4AAIAAAeIg4AAIAABHgAgeBZIAAixIB1AAIAAAhIhPAAIAAArIA4AAIAAAeIg4AAIAABHg");
	this.shape.setTransform(0.95,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-26.4,-18.7,52.9,37.5), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfD7QgvgSgjghIA5hKQAaAXAhAPQAiAPAlAAQAzgBAYgZQAXgZAAgpQAAgtgWgYQgXgXgsgBQgbAAgYALQgYANgVAZIhJgXIAVkWIE6AAIgFBWIjeAAIgJBzQANgNAagJQAagKAnAAQA3AAAmAWQAlAWAUAnQATAmAAAzQgBA4gYApQgZAqguAYQguAXhAAAQg/AAgwgSgAmbEDIAAgLQAAgcAFgcQAGgcAPgdQAQgdAfgeQAfgfAzggQAogYAZgSQAZgTALgSQALgSAAgaQAAgdgSgRQgRgQghgBQgfAAgdATQgeAUgXAjIhRg4QAhg0AwgeQAwgeBFgBQBUABAtAoQAtAoABBGQABAcgJAcQgIAbgZAdQgZAbgxAfQg5AkgiAdQgiAdgDAXID2AAIAABZg");
	this.shape.setTransform(-0.125,0.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-57.4,-54.8,114.9,109.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AC1AtQgJgDgFgIQgEgIAAgNQAAgMAEgIQAGgHAHgEQAIgEAJAAQAIAAAIAEQAIAEAFAHQAEAIAAAMQAAANgEAIQgFAIgIADQgIAEgIABQgJgBgHgEgAC3gCQgEAEAAALQAAAHACAFQACAFAEADQADADAHAAQAIAAAFgGQAFgGAAgLQAAgGgDgGQgCgDgDgEQgFgCgFgBQgJABgFAGgAh/AuQgIgEgFgIQgEgIAAgNQgBgKAEgFQADgIAFgEQAFgEAFgCQAGgCAGAAQAIAAAHAEQAGADAFAIQAEAHABAPIAAADIgwAAQABAKAEAEQAFAEAJAAQAGAAAFgBQAEgCAEgFIAJAJQgGAGgHADQgIAEgJAAQgIAAgIgEgAhgAHQAAgIgEgEQgEgEgIAAQgFAAgFAEQgFADgBAJIAgAAIAAAAgAjEAwIgihgIARAAIAZBKIABAAIAZhKIAPAAIghBggAB+AwIAAg4IgMAAIAAgMIAMAAIAAgIQAAgGACgEQACgFAFgDQAFgCAIAAIAFAAIADAAIACAAIAAAMIgCAAIgDAAQgFAAgDABQgCACgBAGIAAAHIAPAAIAAAMIgPAAIAAA4gABZAwIAAguQAAgFgDgDQgCgDgFAAQgGABgFACIgJAGIAAAwIgQAAIAAhEIAQAAIAAAJIAGgFIAIgEQAFgCAHAAQAJAAAGAFQAFAGAAAKIAAAxgAALAwIAAhEIARAAIAABEgAhFAwIAAhEIARAAIAAALIAAAAQADgFAGgEQAGgEAKAAIABAAIAAAOIgCAAIgDAAQgHABgFADQgGADgDAFIAAAsgAALghIAAgOIARAAIAAAOg");
	this.shape.setTransform(7.5,-1.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13s, new cjs.Rectangle(-19,-12.2,51.2,20.6), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABZCZQgUgNgKgYQgKgYAAgfQAAghAKgXQALgXATgNQAUgNAbAAQAbAAATANQAUANAKAXQALAXAAAgQAAAggLAYQgKAYgUANQgTANgbAAQgcAAgTgNgABxAQQgHAQAAAcQAAAeAHAQQAHAQAQAAQAQAAAGgRQAIgQgBgdQABgdgIgPQgHgQgPAAQgQAAgHAQgAh9CiIC/lCIA8AAIi/FCgAi1AgQgUgNgKgXQgKgXgBghQABggAKgXQALgYATgNQAUgNAbAAQAbAAATANQAUANAKAXQAKAYABAgQgBAggKAYQgKAXgTANQgUANgbAAQgcAAgTgNgAidhoQgHAQAAAcQAAAdAHARQAHAPAQAAQAQAAAGgPQAHgRAAgdQAAgdgHgPQgHgQgPAAQgQAAgHAQg");
	this.shape.setTransform(-0.025,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-33.3,-34.1,66.69999999999999,68.2), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ATMArQgHgDgFgGQgHgGgCgIQgEgJAAgLQAAgKAEgJQACgIAHgGQAFgFAHgEQAIgCAIAAQAIAAAHACQAHAEAGAFQAGAGADAIQADAJABAKQgBALgDAJQgDAIgGAGQgGAGgHADQgHACgIAAQgIAAgIgCgATMgUQgGAHAAANQAAAJADAHQADAHAEADQAFAEAHAAQAGAAAFgEQAFgDADgHQACgHAAgJQABgNgGgHQgGgIgKAAQgLAAgFAIgAIXArQgHgDgFgGQgHgGgCgIQgEgJAAgLQAAgKAEgJQACgIAHgGQAFgFAHgEQAIgCAIAAQAIAAAHACQAHAEAGAFQAGAGADAIQADAJABAKQgBALgDAJQgDAIgGAGQgGAGgHADQgHACgIAAQgIAAgIgCgAIXgUQgGAHAAANQAAAJADAHQADAHAEADQAFAEAHAAQAGAAAFgEQAFgDADgHQACgHAAgJQABgNgGgHQgGgIgKAAQgLAAgFAIgAhhArQgIgDgEgFQgGgFgDgGIAOgJQAFAIAFADQAHAEAHAAQAHAAAEgDQAEgCABgFQAAgFgFgDQgFgDgIgBIgMgEIgKgEQgFgCgCgFQgDgFAAgGQAAgJAEgFQAEgGAHgDQAHgDAKAAQAIAAAHACQAGADAFAEQAFAEADAEIgNALQgEgGgFgDQgHgEgFABQgHgBgDADQgDACgBAEQABADACADIAGAEIAJACIAMAEIAKAEQAEADADAFQADAEAAAGQAAAIgEAGQgDAGgIAEQgHADgMAAQgKAAgHgCgAqKArQgHgDgFgFQgFgFgEgGIAPgJQAEAIAGADQAGAEAHAAQAHAAAFgDQAEgCAAgFQAAgFgEgDQgFgDgJgBIgLgEIgKgEQgFgCgDgFQgCgFAAgGQAAgJADgFQAEgGAHgDQAIgDAJAAQAJAAAHACQAGADAEAEQAFAEADAEIgNALQgEgGgFgDQgGgEgGABQgHgBgDADQgDACAAAEQAAADACADIAHAEIAJACIALAEIAKAEQAFADADAFQADAEgBAGQABAIgEAGQgEAGgHAEQgIADgMAAQgJAAgIgCgArfArQgHgDgFgGQgHgGgCgIQgEgJAAgLQAAgKAEgJQACgIAHgGQAFgFAHgEQAIgCAIAAQAIAAAHACQAIAEAFAFQAGAGADAIQADAJABAKQgBALgDAJQgDAIgGAGQgFAGgIADQgHACgIAAQgIAAgIgCgArfgUQgGAHAAANQAAAJADAHQADAHAEADQAFAEAHAAQAHAAAEgEQAFgDADgHQADgHgBgJQABgNgGgHQgGgIgKAAQgKAAgGAIgAuXArQgHgDgGgFQgEgFgEgGIAPgJQAEAIAFADQAGAEAIAAQAHAAAEgDQAEgCAAgFQABgFgFgDQgEgDgKgBIgLgEIgKgEQgEgCgDgFQgDgFAAgGQAAgJAEgFQAEgGAHgDQAHgDAJAAQAKAAAGACQAGADAFAEQAFAEADAEIgNALQgEgGgFgDQgGgEgHABQgGgBgDADQgEACABAEQgBADADADIAGAEIAKACIALAEIAKAEQAFADACAFQADAEAAAGQAAAIgDAGQgEAGgIAEQgHADgNAAQgJAAgHgCgAvsArQgHgDgGgGQgGgGgDgIQgEgJAAgLQAAgKAEgJQADgIAGgGQAGgFAHgEQAHgCAJAAQAHAAAIACQAHAEAFAFQAGAGAEAIQADAJAAAKQAAALgDAJQgEAIgGAGQgFAGgHADQgIACgHAAQgJAAgHgCgAvtgUQgFAHgBANQAAAJADAHQADAHAFADQAEAEAIAAQAGAAAFgEQAFgDACgHQADgHAAgJQAAgNgFgHQgHgIgJAAQgLAAgGAIgAyfArQgHgDgFgGQgHgGgCgIQgEgJAAgLQAAgKAEgJQACgIAHgGQAFgFAHgEQAIgCAIAAQAIAAAHACQAHAEAGAFQAGAGADAIQADAJABAKQgBALgDAJQgDAIgGAGQgGAGgHADQgHACgIAAQgIAAgIgCgAyfgUQgGAHAAANQAAAJADAHQADAHAEADQAFAEAHAAQAGAAAFgEQAFgDADgHQACgHAAgJQABgNgGgHQgGgIgKAAQgLAAgFAIgAoWAsIgehXIAUAAIAUA9IAVg9IASAAIgfBXgASVAsIgSgiIgLAAIAAAiIgSAAIAAhXIAgAAQARAAAIAHQAJAGAAAOQAAALgEAFQgFAFgJADIATAkgAR4gDIANAAQAIAAAFgDQADgDAAgGQAAgHgDgDQgFgCgIAAIgNAAgAQbAsIAAhXIA7AAIAAAQIgoAAIAAATIAdAAIAAAPIgdAAIAAAVIAqAAIAAAQgAP4AsIgSgiIgMAAIAAAiIgSAAIAAhXIAhAAQAQAAAJAHQAIAGABAOQAAALgFAFQgFAFgIADIATAkgAPagDIAOAAQAIAAAEgDQAEgDAAgGQAAgHgEgDQgEgCgIAAIgOAAgAN0AsIAAhXIAjAAQAIABAHABQAHACAFAEQADAFAAAJQAAAGgCAFQgCAEgEACIgIADIAAABQAFAAAFABQAEADACAEQADAFAAAGQAAAJgFAGQgEAFgHACQgHACgJABgAOGAdIAQAAQAIAAAEgDQAEgDAAgGQgBgFgEgEQgEgCgHAAIgQAAgAOGgHIAPAAQAIAAADgCQAEgDgBgFQABgGgEgCQgDgDgIABIgPAAgAMpAsIAAhXIA7AAIAAAQIgoAAIAAATIAdAAIAAAPIgdAAIAAAVIArAAIAAAQgALlAsIAAhXIA6AAIAAAQIgnAAIAAAVIAbAAIAAAPIgbAAIAAAjgAKPAsIAAglIgegyIAUAAIAUAiIAUgiIATAAIgeAyIAAAlgAHgAsIgSgiIgLAAIAAAiIgSAAIAAhXIAgAAQARAAAIAHQAJAGAAAOQAAALgEAFQgFAFgJADIATAkgAHDgDIANAAQAIAAAFgDQADgDAAgGQAAgHgDgDQgFgCgIAAIgNAAgAFmAsIAAhXIA7AAIAAAQIgoAAIAAATIAdAAIAAAPIgdAAIAAAVIAqAAIAAAQgAFDAsIgng3IAAAAIAAA3IgSAAIAAhXIAUAAIAkA3IABAAIAAg3IARAAIAABXgADAAsIAAhXIA7AAIAAAQIgoAAIAAATIAdAAIAAAPIgdAAIAAAVIAqAAIAAAQgABVAsIAAhXIA8AAIAAAQIgpAAIAAATIAeAAIAAAPIgeAAIAAAVIArAAIAAAQgAAAAsIAAhXIAZAAQANAAALAFQALAEAFAJQAHAKAAAPQAAAQgHAKQgFAJgLAEQgLAFgNAAgAASAcIAJAAQAOAAAGgHQAFgGABgPQgBgNgFgHQgGgGgPgBIgIAAgAi7AsIAAhXIA8AAIAAAQIgpAAIAAATIAdAAIAAAPIgdAAIAAAVIArAAIAAAQgAjeAsIgmg3IAAAAIAAA3IgSAAIAAhXIATAAIAkA3IABAAIAAg3IARAAIAABXgAk5AsIgSgiIgLAAIAAAiIgSAAIAAhXIAgAAQAQAAAJAHQAJAGAAAOQAAALgEAFQgFAFgJADIATAkgAlWgDIANAAQAIAAAFgDQADgDAAgGQAAgHgDgDQgFgCgIAAIgNAAgAm0AsIAAhXIA8AAIAAAQIgpAAIAAATIAeAAIAAAPIgeAAIAAAVIArAAIAAAQgAnZAsIAAhXIATAAIAABXgAs2AsIAAhXIATAAIAABHIAnAAIAAAQgAxZAsIAAhXIAbAAQANAAALAFQAKAEAHAJQAFAKAAAPQAAAQgFAKQgHAJgKAEQgLAFgNAAgAxGAcIAJAAQAOAAAGgHQAHgGgBgPQABgNgHgHQgFgGgPgBIgJAAgAzqAsIAAhHIgaAAIAAgQIBHAAIAAAQIgaAAIAABHg");
	this.shape.setTransform(-0.15,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-131.3,-9.2,262.6,18.4), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0070D3").s().p("A0LANIAAgZMAoXAAAIAAAZg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-129.2,-1.2,258.5,2.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgGCHIAAkNIANAAIAAENg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-0.3,-13.1,1.4000000000000001,27), null);


(lib.lanaonima = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgmIkQghgegBg1QABgxAhgeQAigeA1gBQA8ABAgAiQAeAeAAAtQAAA1gjAeQghAdg2AAQg2AAghgdgAAvGYQgVAAgMASQgKAQAAAXQABAYAJAQQALAUAYAAQAtgBAAg7QAAgYgKgPQgNgSgVAAIgDAAgAPpI6QgLgBgFgJIgCgGQgCgDgEgEQgFgCgEAAIg0AAQgDAAgGACQgEAEgCADIgDAGQgCADgEADQgEAEgEAAIgwAAQgFAAgCgEQgCgDACgDIBLi7QACgEAEgDQAFgDAEAAIA2AAQAKAAAFAKIBLC7QACADgCADQgDAEgFAAgAOtGzIgSA1QgBADACADQADAEAEAAIAZAAQAFAAACgEQACgDgCgDIgOg1QgCgEgCAAQgCAAgCAEgAL8I6QgJAAgBgNIAAhIQADgPAAgHIADgQIAAAAIgkBuQgCAEgEADQgFADgDAAIgeAAQgEAAgFgDQgEgDgCgEIglh6IAAAUIADAXIAABPQgBAGgDADQgCADgFABIg5AAQgDgBgEgDQgDgDAAgGIAAi6QAAgGADgDQAEgEADAAIBGAAQAEAAAEADQAFADABAEIAjBuQAEALAEgLIAihuQADgEAEgDQAFgDAEAAIBFAAQAEAAADAEQADADAAAGIAAC6QAAAGgDADQgDADgEABgAHII6QgDgBgEgDQgDgDAAgGIAAi6QAAgGADgDQAEgEADAAIA0AAQALAAgBANIAAC6QAAAGgCADQgDADgFABgAFjI6QgEAAgGgEQgGgDgCgDIhGhfQgCgEgCABQgDAAAAAFIADAZIAABBQAAAGgEADQgDADgDABIgyAAQgEgBgDgDQgDgDAAgGIAAi6QAAgGADgDQADgEAEAAIAvAAQAEAAAGADQAFADACAEIBGBhQACAEACAAQADgBgCgFIgDgaIAAhCQAAgNANAAIAyAAQAEAAADAEQACADAAAGIAAC6QAAAGgCADQgDADgEABgAiUI6QgGAAgFgEQgFgDgCgDIhGhfQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBAAABQgBAAAAAFIACAZIAABBQAAAGgDADQgDADgEABIgyAAQgDgBgDgDQgEgDAAgGIAAi6QAAgGAEgDQADgEADAAIAwAAQAEAAAFADQAGADACAEIBDBhQACAEACAAQADgBgCgFIgDhcQAAgNANAAIAxAAQANAAAAANIAAC6QAAANgNAAgAmGI6QgDAAgFgEQgEgDgDgDIAAgIQgBgDgFgEQgEgDgEAAIg1AAQgJAAgGAKIgCAIQgFAJgKABIgxAAQgEAAgDgEQgDgDACgDIBKi7QACgEAFgDQAFgDADAAIA1AAQAKAAAEAKIBLC7QACADgDADQgDAEgDAAgAnBGzIgRA1QgDADAEADQACAEAEAAIAYAAQAGAAACgEQACgDgCgDIgPg1QgBgEgCAAQgCAAgCAEgArBI6QgKgBgFgJIgDgIQgCgDgEgEQgEgDgFAAIgzAAQgEAAgFADQgEAEgDADIgCAFQgCAEgFADQgEADgEAAIgxAAIAAADQgGAAgCgEQgCgDACgDIBKi7QADgEAEgDQAFgDAEAAIA2AAQAEAAAFADQAEADACAEIBLC7QACADgCADQgCAEgGAAgAr/GzIgSA1QgCADADADQADAEAEAAIAZAAQAEAAACgEQADgDgCgDIgPg1QgBgEgCAAQgCAAgCAEgAwjI2QgEgDAAgGIAAi6QAAgGAEgDQACgEAEAAIA0AAQANAAAAANIAACIQAAAEADADQADADAEAAIBSAAQADAAAEADQADADAAAEIAAAbQAAAGgDADQgEAEgDAAIidAAIAAADQgEgBgCgDgAl4DNQgKAAgFgEQgHgHACgIIAArjQAAgIAGgGQAFgEAJAAIB/AAQAIAAAFAEQAGAGAAAIIAAI/QAAAIAEAFQAGAGAJgBIAAAEII+AAQAIABAFAEQAGAGAAAJIAAB6QAAAJgGAGQgFAEgIAAgAimAKQgIAAgIgHQgGgHgBgIIAAhcQAAgJACgFQACgGAIgLIGlmlQANgKAQgFQAMgEAIgBIBJAAQAKABAHAFQAHAHAAAKIAAIVQAAAKgHAGQgGAHgLAAIlrAAQgIAAgCgFQgDgEAGgGIBuhvQAOgQARAAIBBAAQAJABAHgGQAGgFAAgIIAAhsQAAgEgDgDQgDgCgFAFIkHEJQgHAFgKAEQgLAFgKAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lanaonima, new cjs.Rectangle(-106.3,-57.6,212.7,115.30000000000001), null);


(lib.amexlogo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.amexlogo();
	this.instance.setTransform(-47,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.amexlogo_1, new cjs.Rectangle(-47,-47,93,91), null);


(lib._53453535copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D8ECE").s().p("An3B7IAAj1IPvAAIAAD1g");
	this.shape.setTransform(0.225,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._53453535copy, new cjs.Rectangle(-50.2,-12.1,100.9,24.7), null);


(lib._53453535 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0067CC").s().p("An1B7IAAj1IPrAAIAAD1g");
	this.shape.setTransform(0,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._53453535, new cjs.Rectangle(-50.2,-12.1,100.4,24.7), null);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_19 = new cjs.Graphics().p("A4NC5IAAlxMAwbAAAIAAFxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:19.525,y:25.05}).wait(44));

	// conamex
	this.instance = new lib.Symbol23();
	this.instance.setTransform(-4,55.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({y:30},29,cjs.Ease.get(1)).wait(15));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AxkCMIAAkXMAjJAAAIAAEXg");
	mask_1.setTransform(8.525,0.05);

	// vivi
	this.instance_1 = new lib.Symbol22();
	this.instance_1.setTransform(0,25);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:0},29,cjs.Ease.get(1)).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.9,-10.8,179.3,54.400000000000006);


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

	// Layer_1
	this.instance = new lib.Symbol19();
	this.instance.setTransform(6,6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.1,1.9,237.3,8.6);


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

	// Layer_1
	this.instance = new lib.Symbol17();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.2,-10.4,125.9,21.1);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.instance = new lib.Symbol16();
	this.instance.setTransform(23,41);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({alpha:1},15).wait(4));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlZCTIAAklIKzAAIAAElg");
	mask.setTransform(75.625,25.25);

	// OFF
	this.instance_1 = new lib.Symbol15();
	this.instance_1.setTransform(65,1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:21},44,cjs.Ease.get(1)).wait(19));

	// Layer_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhKC+IAAl7IJBAAIAAF7g");
	mask_1.setTransform(50.25,-7.5);

	// %
	this.instance_2 = new lib.Symbol13();
	this.instance_2.setTransform(66,28.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-6.5},44,cjs.Ease.get(1)).wait(19));

	// Layer_7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Am2FAIAAp/INtAAIAAJ/g");
	mask_2.setTransform(-3.125,2.25);

	// 25
	this.instance_3 = new lib.Symbol14();
	this.instance_3.setTransform(83,3);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-0.5},44,cjs.Ease.get(1)).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.3,-23.4,130.6,71.4);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A26BQIAAifMAt1AAAIAACfg");
	mask.setTransform(9.775,-1.45);

	// Layer_1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(0,12);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},19,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.6,-4.4,257,11);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0YBQIAAifMAoxAAAIAACfg");
	mask.setTransform(1.525,1.05);

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(-259,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},89,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.9,-1.2,258.20000000000005,2.5);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol9("synched",0,false);
	this.instance.setTransform(1,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Layer_1
	this.instance_1 = new lib.Symbol11("synched",0,false);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.6,-4.4,258.9,18.200000000000003);


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
	this.instance = new lib.Symbol3();
	this.instance.setTransform(0,0,1,0.0649);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1},29,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-13.1,1.4000000000000001,27);


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
	this.instance = new lib.lanaonima();
	this.instance.setTransform(0,0,0.2995,0.2995);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.8,-17.2,63.7,34.5);


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

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkYDfIAAm9IIxAAIAAG9g");
	mask.setTransform(8.875,-1.75);

	// Layer_1
	this.instance = new lib.amexlogo_1();
	this.instance.setTransform(-36.25,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},29,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-23.5,42.2,44);


(lib.bgcopy2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol25();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgcopy2, new cjs.Rectangle(-150,-125,300,250), null);


(lib.bgcopy = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_2 = new cjs.Graphics().p("Ax2NhIAA7BMAjtAAAIAAbBgACKpXIg8BSIgoBxIgUBXIgNCFIgdAPIgjAqIgPBBIgUC7IAFBYIAgCqIABACIAiA6IBmAeICWACIBfgZIBVgPIA6g0IAyhQIBNiPIAKhaIADhKIgKg1IgcggIhrgeIgXg3Ig0klIgthrIhQg6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:85.275,y:17.525}).wait(242));

	// miscelanea
	this.instance = new lib.Symbol24("synched",0,false);
	this.instance.setTransform(87,10,0.1266,0.1266);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(242));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-34.7,172.8,89.5);


(lib.bg_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(108));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("Ax2NhIAA7BMAjtAAAIAAbBgACKpXIg8BSIgoBxIgUBXIgNCFIgdAPIgjAqIgPBBIgUC7IAFBYIAgCqIABACIAiA6IBmAeICWACIBfgZIBVgPIA6g0IAyhQIBNiPIAKhaIADhKIgKg1IgcggIhrgeIgXg3Ig0klIgthrIhQg6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:85.275,y:17.525}).wait(107));

	// miscelanea
	this.instance = new lib.Symbol24("synched",0,false);
	this.instance.setTransform(86.8,8.9,0.1266,0.1266);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(107));

	// Layer_1
	this.instance_1 = new lib.Symbol25();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,322.6,250);


(lib._65757hs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {rollOver:5,rollOut:13};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_3 = function() {
		this.stop ();
	}
	this.frame_12 = function() {
		this.stop ();
	}
	this.frame_21 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(9).call(this.frame_12).wait(9).call(this.frame_21).wait(1));

	// Layer_2
	this.instance = new lib._53453535copy();
	this.instance.setTransform(6.1,-0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({alpha:1},8).to({alpha:0},8).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_1 = new lib._53453535();
	this.instance_1.setTransform(6.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},12).wait(1).to({_off:false},0).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-12.9,100.9,24.700000000000003);


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

}).prototype = getMCSymbolPrototype(lib.Symbol12hs, new cjs.Rectangle(-43.4,-12.6,100.4,24.6), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {loop:4};
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
	this.instance = new lib.bg_1();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:1},0).to({alpha:0},20).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


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

}).prototype = getMCSymbolPrototype(lib._897979hs, new cjs.Rectangle(-44.1,-12.9,100.4,24.700000000000003), null);


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
	this.frame_63 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(35));

	// txt
	this.instance = new lib.Symbol13s();
	this.instance.setTransform(-2,-1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({alpha:1},17).wait(59));

	// btn2
	this.btn02 = new lib._65757hs();
	this.btn02.name = "btn02";
	this.btn02.setTransform(0,-1);
	this.btn02.alpha = 0;
	this.btn02._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn02).wait(22).to({_off:false},0).to({alpha:1},17).wait(59));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("AB0CAQgogmAAg4QAAg3AognQAognA5AAQA5AAAoAnQAoAnAAA3QAAA4goAmQgoAog5AAQg5AAgogog");
	var mask_graphics_16 = new cjs.Graphics().p("Ah4B2QgxgxgBhFQABhEAxgxQAygxBGAAQBGAAAyAxQAzAxgBBEQABBFgzAxQgyAxhGAAQhGAAgygxg");
	var mask_graphics_17 = new cjs.Graphics().p("AiPCNQg8g6AAhTQAAhSA8g7QA8g6BTAAQBUAAA8A6QA8A7AABSQAABTg8A6Qg8A7hUAAQhTAAg8g7g");
	var mask_graphics_18 = new cjs.Graphics().p("AinCkQhFhDgBhhQABhfBFhFQBGhEBhAAQBiAABFBEQBHBFgBBfQABBhhHBDQhFBFhiAAQhhAAhGhFg");
	var mask_graphics_19 = new cjs.Graphics().p("Ai/C8QhPhOAAhuQAAhtBPhOQBQhOBvAAQBwAABPBOQBQBOAABtQAABuhQBOQhPBOhwAAQhvAAhQhOg");
	var mask_graphics_20 = new cjs.Graphics().p("AjXDTQhZhXAAh8QAAh6BZhZQBahWB9AAQB+AABZBWQBaBZAAB6QAAB8haBXQhZBXh+ABQh9gBhahXg");
	var mask_graphics_21 = new cjs.Graphics().p("AjuDqQhjhgAAiKQAAiIBjhiQBjhhCLAAQCMAABiBhQBkBiAACIQAACKhkBgQhiBiiMAAQiLAAhjhig");
	var mask_graphics_22 = new cjs.Graphics().p("AkGEBQhthqAAiXQAAiWBthrQBthqCZgBQCZABBtBqQBuBrAACWQAACXhuBqQhtBriZAAQiZAAhthrg");
	var mask_graphics_23 = new cjs.Graphics().p("AkeEZQh2h1AAikQAAikB2h1QB4h0CmAAQCoAAB2B0QB3B1AACkQAACkh3B1Qh2B0ioABQimgBh4h0g");
	var mask_graphics_24 = new cjs.Graphics().p("Ak2EwQiAh9AAizQAAixCAh/QCCh+C0AAQC1AACAB+QCCB/AACxQAACziCB9QiAB/i1AAQi0AAiCh/g");
	var mask_graphics_25 = new cjs.Graphics().p("AlNFHQiKiHAAjAQAAi+CKiKQCLiHDCAAQDDAACKCHQCLCKAAC+QAADAiLCHQiKCIjDAAQjCAAiLiIg");
	var mask_graphics_26 = new cjs.Graphics().p("AllFeQiUiQAAjOQAAjMCUiTQCWiQDPAAQDRAACTCQQCWCTAADMQAADOiWCQQiTCSjRAAQjPAAiWiSg");
	var mask_graphics_27 = new cjs.Graphics().p("Al9F2QieibABjbQgBjaCeicQCgiaDdAAQDfAACdCaQCgCcAADaQAADbigCbQidCbjfAAQjdAAigibg");
	var mask_graphics_28 = new cjs.Graphics().p("AmVGNQinikAAjpQAAjnCnimQCqikDrAAQDtAACnCkQCpCmAADnQAADpipCkQinCljtAAQjrAAiqilg");
	var mask_graphics_29 = new cjs.Graphics().p("AmsGkQiyitAAj3QAAj1CyiwQCzitD5AAQD7AACxCtQCyCwABD1QgBD3iyCtQixCvj7AAQj5AAizivg");
	var mask_graphics_30 = new cjs.Graphics().p("AnEG8Qi7i4AAkEQAAkCC7i6QC9i3EHAAQEJAAC6C3QC9C6AAECQAAEEi9C4Qi6C4kJAAQkHAAi9i4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:35,y:16.8}).wait(1).to({graphics:mask_graphics_16,x:53.7,y:18.8}).wait(1).to({graphics:mask_graphics_17,x:51.075,y:17.425}).wait(1).to({graphics:mask_graphics_18,x:48.45,y:16.025}).wait(1).to({graphics:mask_graphics_19,x:45.85,y:14.625}).wait(1).to({graphics:mask_graphics_20,x:43.225,y:13.25}).wait(1).to({graphics:mask_graphics_21,x:40.625,y:11.85}).wait(1).to({graphics:mask_graphics_22,x:38.025,y:10.45}).wait(1).to({graphics:mask_graphics_23,x:35.375,y:9.1}).wait(1).to({graphics:mask_graphics_24,x:32.775,y:7.7}).wait(1).to({graphics:mask_graphics_25,x:30.175,y:6.3}).wait(1).to({graphics:mask_graphics_26,x:27.55,y:4.925}).wait(1).to({graphics:mask_graphics_27,x:24.95,y:3.525}).wait(1).to({graphics:mask_graphics_28,x:22.325,y:2.125}).wait(1).to({graphics:mask_graphics_29,x:19.7,y:0.75}).wait(1).to({graphics:mask_graphics_30,x:17.1,y:-0.65}).wait(68));

	// linea02
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0067CC").ss(1.5).p("AHvB7IAAjtIvkAA");
	this.shape.setTransform(6.275,-1.9);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:false},0).wait(83));

	// Layer_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("Aj+BWQhGgSgmg1Qgmg0APg5QAPg5A7gcQA8gbBFASQBFASAmA1QAnA1gPA5QgPA5g8AbQgkARgnAAQgaAAgbgIg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AjiCRQhSgUguhAQgvg+ARhGQARhGBGgjQBGgjBTAUQBSATAuBAQAtA/gRBFQgQBGhGAjQgtAXgyAAQgcAAgdgHg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AjEDHQhggVg2hJQg2hKAShRQAThTBQgsQBQgrBgAWQBfAVA1BJQA2BKgSBRQgTBThPArQg2Adg8AAQgeAAgfgHg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AilDmQhsgWg/hTQg/hTAUheQAThgBbg0QBag0BsAXQBsAWA/BTQA+BTgTBeQgUBghaA0Qg+AkhJAAQgeAAghgHg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AiDEGQh6gXhIhdQhIhcAVhrQAUhtBkg9QBkg8B5AWQB5AXBIBcQBIBdgVBrQgUBthkA8QhJAthTAAQggAAgggGg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AhgElQiHgXhRhlQhRhmAUh4QAUh6BuhGQBthFCGAWQCHAXBRBlQBRBmgUB4QgUB6huBFQhTA1hgAAQggAAgggFg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Ag8FEQiUgWhahuQhbhuAUiGQAUiGB2hQQB3hPCTAWQCUAWBbBuQBbBugUCGQgUCGh3BPQhdA/hvAAQgeAAgggFg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AgtFkQihgVhlh3Qhlh3ATiSQATiUCAhaQB/hZChAVQChAVBlB2QBlB4gTCSQgTCUiABZQhnBJh+AAQgcAAgfgEg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AgqGDQivgThvh/Qhvh/ASigQASigCIhkQCIhkCuAUQCvATBvB+QBvCAgSCgQgSCgiIBkQhyBTiNAAQgaAAgdgDg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AglGjQi9gSh5iHQh6iGAQitQAQiuCQhuQCQhuC7ARQC9ASB5CGQB6CHgQCtQgQCuiQBtQh9BgidAAQgYAAgZgCg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AggHCQjKgPiEiOQiFiOAOi6QAOi7CYh5QCYh5DIAPQDKAPCECNQCFCPgOC6QgOC7iYB4QiHBtivAAQgUAAgWgCg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AgZHiQjXgMiQiWQiQiVALjGQALjICfiFQCgiEDVALQDXAMCQCVQCQCWgLDGQgLDIifCEQiTB6jBAAIghAAg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AgSIBQjkgJibicQicibAIjUQAIjVCmiRQCniPDjAIQDkAJCbCbQCcCcgIDUQgIDVimCQQieCIjUAAIgYAAg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AgJIgQjxgFiniiQioiiAEjhQAEjiCuicQCtibDwAEQDxAFCoChQCnCjgEDhQgEDhiuCcQioCYjpAAIgMAAg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AmxGWQizinAAjvQAAjuCzioQC0ioD9AAQD+AAC0CoQCzCoAADuQAADvizCnQi0Cpj+AAQj9AAi0ipg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-39.0289,y:-19.6547}).wait(1).to({graphics:mask_1_graphics_2,x:-38.9178,y:-19.9715}).wait(1).to({graphics:mask_1_graphics_3,x:-38.7401,y:-20.0336}).wait(1).to({graphics:mask_1_graphics_4,x:-38.4969,y:-17.797}).wait(1).to({graphics:mask_1_graphics_5,x:-38.1895,y:-15.6637}).wait(1).to({graphics:mask_1_graphics_6,x:-37.819,y:-13.6372}).wait(1).to({graphics:mask_1_graphics_7,x:-37.387,y:-11.721}).wait(1).to({graphics:mask_1_graphics_8,x:-34.5164,y:-9.9184}).wait(1).to({graphics:mask_1_graphics_9,x:-30.2578,y:-8.2327}).wait(1).to({graphics:mask_1_graphics_10,x:-25.8876,y:-6.6672}).wait(1).to({graphics:mask_1_graphics_11,x:-21.4091,y:-5.225}).wait(1).to({graphics:mask_1_graphics_12,x:-16.8254,y:-3.9092}).wait(1).to({graphics:mask_1_graphics_13,x:-12.14,y:-2.7229}).wait(1).to({graphics:mask_1_graphics_14,x:-7.3563,y:-1.6689}).wait(1).to({graphics:mask_1_graphics_15,x:-2.3,y:-1.25}).wait(1).to({graphics:null,x:0,y:0}).wait(82));

	// linea01
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0067CC").ss(1.5).p("Anuh2IAADmIPkAA");
	this.shape_1.setTransform(6.2,-1.175);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(97));

	// Layer_9
	this.instance_1 = new lib._897979hs();
	this.instance_1.setTransform(1.05,-1.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(97));

	// guia
	this.instance_2 = new lib._65757hs();
	this.instance_2.setTransform(0,-1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(98));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-14.4,102.3,25.8);


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fade:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,659];
	// timeline functions:
	this.frame_0 = function() {
		// ------------- Variables ------------------- //
		root = this;
		loopNum = 0;
		
		
		/* EVENTOS MOUSEOVER */
		document.eventoRollOver = function(){
			root.btn1.btn02.gotoAndPlay('rollOver');
		
		}
		
		document.eventoRollOut = function(){
			root.btn1.btn02.gotoAndPlay('rollOut');
		
		}
	}
	this.frame_659 = function() {
		root.opacidadintro.gotoAndPlay('loop');
		root.gotoAndPlay('fade');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(659).call(this.frame_659).wait(1));

	// borde
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(660));

	// opacidadfinal
	this.instance = new lib.bg_1();
	this.instance.setTransform(150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(625).to({_off:false},0).to({alpha:1},34).wait(1));

	// opacidadintro
	this.opacidadintro = new lib.Symbol8();
	this.opacidadintro.name = "opacidadintro";
	this.opacidadintro.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.opacidadintro).wait(660));

	// cta
	this.btn1 = new lib.ctahs();
	this.btn1.name = "btn1";
	this.btn1.setTransform(62.4,134.5,0.9902,0.9902,0,0,0,0.4,0.5);
	this.btn1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(409).to({_off:false},0).wait(251));

	// txt viví el verano
	this.instance_1 = new lib.Symbol21("synched",0,false);
	this.instance_1.setTransform(109,36);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(359).to({_off:false},0).wait(301));

	// miscelanea
	this.instance_2 = new lib.bgcopy("synched",0,false);
	this.instance_2.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(660));

	// amexlogo
	this.instance_3 = new lib.Symbol1("synched",0,false);
	this.instance_3.setTransform(124,205);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(121).to({_off:false},0).wait(539));

	// ineablanca
	this.instance_4 = new lib.Symbol4("synched",0,false);
	this.instance_4.setTransform(92,203);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(105).to({_off:false},0).wait(555));

	// la anonima logo
	this.instance_5 = new lib.Symbol2("synched",0,false);
	this.instance_5.setTransform(46,204);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89).to({_off:false},0).wait(571));

	// bg
	this.instance_6 = new lib.bg_1();
	this.instance_6.setTransform(150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(336).to({_off:false},0).to({alpha:1},23).wait(301));

	// txt válido
	this.instance_7 = new lib.Symbol20("synched",0,false);
	this.instance_7.setTransform(156,230);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(138).to({_off:false},0).wait(522));

	// exclusivamente
	this.instance_8 = new lib.Symbol18("synched",0,false);
	this.instance_8.setTransform(77,149);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},0).wait(601));

	// 25%
	this.instance_9 = new lib.Symbol12("synched",0,false);
	this.instance_9.setTransform(56.95,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(660));

	// txt01
	this.instance_10 = new lib.Symbol5("synched",0,false);
	this.instance_10.setTransform(149.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(660));

	// bg
	this.instance_11 = new lib.bgcopy2();
	this.instance_11.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(660));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,173.3,126);
// library properties:
lib.properties = {
	id: 'A4DAFDFBAF18B64E9CD2D6DEB02E1B51',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/amexlogo.png?1733858047345", id:"amexlogo"},
		{src:"images/bg.jpg?1733858047345", id:"bg"}
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