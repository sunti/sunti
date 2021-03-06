var canvas, stage, exportRoot, images, skin, ch;

var butArr = [];

function init() {
	canvas = document.getElementById("canvas");
	images = {};

	var manifest = [
		{src:"images/alpha.png", id:"alpha"},
		{src:"images/transbg.png", id:"transbg"}
	];

	var loader = new PreloadJS(false);
	loader.onFileLoad = handleFileLoad;
	loader.onComplete = handleComplete;
	loader.loadManifest(manifest);
}

function handleFileLoad(o) {
	if (o.type == "image") { images[o.id] = o.result; }
}

function handleComplete() {
	exportRoot = new lib.shirt();

	stage = new Stage(canvas);
	stage.addChild(exportRoot);

	//**Enable touch On iOS
	Touch.enable(stage);

	//**Enable mouseOver-Out event
	stage.enableMouseOver();
	stage.onMouseDown = stageMouseDown;
	stage.onMouseUp = stageMouseUp;
	stage.onMouseMove = stageMouseMove;

	//**Initiate page element
	setUpPage(stage);

	stage.update();
	Ticker.setFPS(60);
	Ticker.addListener(window);
}


function setUpPage(stage){
		
	var spick = new lib.screen();
	spick.x = -20;
	spick.y = -130;
	spick.scaleX = 0.3;
	spick.scaleY = 0.3;
	exportRoot.colorPanel.addChild(spick);
	//spick.cache(-20,-130,150,150);
	spick.onClick = chooseScreen;
	ch = 0;
	skin = new lib.screen();

	setColorButton(255,255,255);
	setColorButton(40,37,43);
	setColorButton(160,30,30);
	setColorButton(150,150,150);
	setColorButton(150,200,255);
	setColorButton(255,245,170);
	setColorButton(100,195,100);
	setColorButton(255,200,50);

	exportRoot.tempbox.shape.graphics.clear();
	exportRoot.tempbox.shape.graphics.beginFill(Graphics.getRGB(255,255,255));
	exportRoot.tempbox.shape.graphics.rect(-200,-200,400,400);
}

function chooseScreen(e){

	if(ch==0){
		skin.alpha = 1;
		ch = 1;
	}else{
		skin.alpha = 0;
		ch = 0;
	}
	// remove last screen
	exportRoot.tempbox.removeChildAt(1);
	// replace new screen
	exportRoot.tempbox.addChild(skin);
	exportRoot.tempbox.updateCache();

	blend();

}

function setColorButton(r,g,b){
	var bw = 50;
	var bh = 50;
	var bspace = 20;
	var bcol = 4;
	var brow = 5;

	var fc = new ColorFilter( 1, 1, 1, 1, r , g , b , 0 );
	var bc = new lib.color();
	bc.x = parseInt(butArr.length/(brow*bcol))*((bw+bspace)*bcol) + ((butArr.length%(brow*bcol))%bcol)*(bw+bspace);
	bc.y = parseInt((butArr.length%(brow*bcol))/bcol)*(bh+bspace);
	butArr.push(bc);

	exportRoot.colorPanel.addChild(bc);
	bc.filters = [fc];
	bc.cache(0,0,52,52);

	bc.onClick = chooseColor;
}

function chooseColor(e){
	var but = e.target;
	var redOffset = but.filters[0].redOffset;
	var greenOffset = but.filters[0].greenOffset;
	var blueOffset = but.filters[0].blueOffset;
	
	//redraw the floor color
	exportRoot.tempbox.shape.graphics.clear();
	exportRoot.tempbox.shape.graphics.beginFill(Graphics.getRGB(redOffset,greenOffset,blueOffset));
	exportRoot.tempbox.shape.graphics.rect(-200,-200,400,400);

	// remove last screen
	//exportRoot.tempbox.removeChildAt(1);
	// replace new screen
	//exportRoot.tempbox.addChild(skin);
	exportRoot.tempbox.updateCache();

	blend();
}

function blend() {
	// blending with template
	var temp = exportRoot.tempbox.cacheCanvas.getContext("2d").getImageData(0, 0, 400, 400).data;
	var prototype = exportRoot.cover.cacheCanvas.getContext("2d").getImageData(0, 0, 400, 400);
	var pixel = prototype.data;

	for (i=0,il=pixel.length ; i < il ;i+=4)
	 {
			pixel[i] = pixel[i] * temp[i] / 255;
			pixel[i + 1] = pixel[i + 1] * temp[i+1] / 255;
			pixel[i + 2] = pixel[i + 2] * temp[i+2] / 255;
	}

	exportRoot.show.cacheCanvas.getContext("2d").putImageData(prototype,0,0);
}

function tick() {
	stage.update();
}

function stageMouseDown(){

}

function stageMouseUp(){

}

function stageMouseMove(){

}