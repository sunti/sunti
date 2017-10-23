if (!window.lib) { window.lib = {}; }

var p; // shortcut to reference prototypes

// stage content:
(lib.shirt = function() {
	this.initialize();

	// show
	this.tempbox = new lib.tempbox();
	this.tempbox.setTransform(221,-220,1,1,0,0,0,200,200);
	this.tempbox.cache(0,0,402,402);

	this.show = new lib.cover();
	this.show.setTransform(220,238.4,1,1,0,0,0,200,200);
	this.show.shadow = new Shadow("#333333",-3,4,5);
	this.show.cache(0,0,402,402);

	this.text = new Text("XL", "24px Myriad Web Pro", "#ffff00");
	this.text.textAlign = "center";
	this.text.textBaseline = "top";
	this.text.lineHeight = 24.55;
	this.text.lineWidth = 55;
	this.text.setTransform(243.5,465,1,1,0,0,0,15,13.7);
	this.text.shadow = new Shadow("#000000",-3,4,5);

	this.cover = new lib.cover();
	this.cover.setTransform(-232.4,291.4,1,1,0,0,0,200,200);
	this.cover.cache(0,0,402,402);

	this.shape = new Shape();
	this.shape.graphics.f("#ffff00").p("EApPBA+IAAEcICsiOIisiO").p("EActBDMICsCOIAAkcIisCO").f();
	this.shape.setTransform(-5.8,35.6);

	// button
	this.colorPanel = new lib.colorPanel();
	this.colorPanel.setTransform(443,125);

	// form
	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#333333").p("EA50gnDMhznAAAQhkAAAABkMAAABK/QAABkBkAAMBznAAAQBkAAAAhkMAAAhK/QAAhkhkAA").p("EAGZgihMAAABBdIAADwQAABkhkAAMg7MAAAQhkAAAAhkIAAjmMAAAhBnQAAhkBkAAMA7MAAAQBkAAAABk").f("rgba(0,0,0,0.498)").p("Eg2XAkQMA7MAAAQBkAAAAhkIAAjwMg+UAAKIAADmQAABkBkAA").f();
	this.shape_1.setTransform(380,250);

	// trant BG
	this.instance = new lib.transbg();
	this.instance.setTransform(11,9);

	this.addChild(this.instance,this.shape_1,this.colorPanel,this.shape,this.cover,this.text,this.show,this.tempbox);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-432.5,-420.1,1192.6,929.2);


// symbols:
(lib.color = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AD6i2QAAhDhCAAIlvAAQhCAAAABDIAAFtQAABDBCAAIFvAAQBCAAAAhDIAAlt").f();
	this.shape.setTransform(25,25);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,50,50);


(lib.colorPanel = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("A3bAjMAu3AAAIAAhFMgu3AAAIAABF").f();
	this.shape.setTransform(150,-16.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-19.9,300,7);


(lib.cover = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.alpha();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,400,400);


(lib.screen = function() {
	this.initialize();

	// Layer 4
	this.text = new Text("TM", "24px Myriad Web Pro", "#ff6633");
	this.text.textAlign = "center";
	this.text.textBaseline = "top";
	this.text.lineHeight = 26;
	this.text.lineWidth = 104;
	this.text.setTransform(254,96.7);

	// Layer 2
	this.shape = new Shape();
	this.shape.graphics.f("#0099ff").p("AoCmPIAAMfQAABkBkAAIM9AAQBkAAAAhkIAAnNQhcgchLg/QiFhxAAifQAAgnAIgkIp9AAQhkAAAABk").f();
	this.shape.setTransform(134.2,213.7);

	// Layer 3
	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#ffff00").p("AlBkQQhlBWgYBwQgIAkAAAmQAACfCFBxQBLA/BcAcQBIAWBSAAQC8AACGhxQCFhxAAifQAAifiFhxQiBhti1gDIgXAAQi1ADiBBt").f();
	this.shape_1.setTransform(201.2,171.2);

	// Layer 1
	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#006600").p("AmLALIAgEqIH4BqIEAm/Ilbl9IkGB2IAADQQAABihkAAIhTAA").f();
	this.shape_2.setTransform(207,262.5);

	// Layer 5
	this.shape_3 = new Shape();
	this.shape_3.graphics.f("rgba(184,184,184,0)").p("AfQ/PMg+fAAAMAAAA+fMA+fAAAMAAAg+f").f();
	this.shape_3.setTransform(200,200);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.text);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,400,400);


(lib.tempbox = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("A/P/PMAAAA+fMA+fAAAMAAAg+fMg+fAAA").f();
	this.shape.setTransform(200,200);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,400,400);


(lib.alpha = function() {
	this.initialize(images.alpha);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,400,400);


(lib.transbg = function() {
	this.initialize(images.transbg);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,500,500);