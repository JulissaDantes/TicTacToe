
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    turn: 0,
    size: null,
    p1s: [],//almacena las x
    p2s: [],//almacena las o
    ,
	random: function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	},
    creaX: function(){
		if(turn == 0||turn == 2||turn == 4||turn == 6||turn == 8)
            {
		var p1 = new cc.Sprite(res.X_png);
		p1.setScale(0.4,0.4);
        p1.setPosition(this.random(1,480), this.size.height );
        this.addChild(p1, 1);
		var moveto = cc.moveTo(this.random(1,9), this.p1.getPositionX(), this.p1.getPositionY());
		p1.runAction(moveto);
		this.p1s.push(p1);
        turn = turn + 1;//para saber a quien le toca jugar
            }
    },
    
    creaO: function(){
		if(turn == 1||turn == 3||turn == 5||turn == 7||turn == 9)
            {
		var p2 = new cc.Sprite(res.O_png);
		p2.setScale(0.4,0.4);
        p2.setPosition(this.random(1,480), this.size.height );
        this.addChild(p2, 1);
		var moveto = cc.moveTo(this.random(1,9), this.p2.getPositionX(), this.p2.getPositionY());
		p2.runAction(moveto);
		this.p2s.push(p2);
         turn = turn + 1;
            }
    }
    
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("TicTacToe V0.1", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.tablero_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);


//Inicializando eventos
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			onTouchBegan: this.creaX,
			onTouchBegan: this.creaO
			
		}, this);
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

