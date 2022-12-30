	var ball;
	var ground;
	var leftObs, rightObs;

	var r = 30;

	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	function preload()
	{
		
	}

	function setup() {
		createCanvas(1200, 700);

		var ball_options = {
			isStatic: false,
			restitution: 0.2,
			density: 1.2,
			friction: 0
		};

		var ground_options = {
			isStatic: true
		};

		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.

		ball = Bodies.circle(200, 390, r, ball_options);
		World.add(world, ball);

		ground = Bodies.rectangle(400, 670, 1740, 30, ground_options);
		World.add(world, ground);

		rightObs = Bodies.rectangle(350 , 670, 20, 20,ground_options);
		World.add(world, rightObs);

		leftObs = Bodies.rectangle(350 , 670, 20, 20, ground_options);
		World.add(world, leftObs);

		Engine.run(engine);
		
		rectMode(CENTER);
		ellipse(RADIUS);
	}

	function draw() {
		background(0);
		Engine.update(engine);

		hForce();
		vForce();
		fill("cyan");
		ellipse(ball.position.x,ball.position.y,r);
		
		fill("yellow");
		rect(400,650, 1601, 20);

		fill("red");
		rect(750, 565, 20, 150);

		fill("red");
		rect(1000, 565, 20, 150);

		drawSprites();
	}
	
	//Creating the commands for Arrow Keys
	function hForce() {
		if(keyCode === UP_ARROW) {
			Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-4})
		}
	}

	function vForce() {
		if(keyCode === RIGHT_ARROW) {
			Matter.Body.applyForce(ball, {x:0,y:0}, {x:2,y:0})
		}
	}




