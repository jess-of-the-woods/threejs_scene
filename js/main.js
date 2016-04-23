	var scene = new THREE.Scene();
	//====== camera, first arg is field of view, 2nd is aspect ratio, then near & far clipping plane
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer(); // possible to use other renderers..
	renderer.setClearColor(0x474747); // sets bkgrnd color..
	renderer.setSize( window.innerWidth, window.innerHeight, false);
	// sets size of app, can divide by 2 or 3 etc., 'false' renders at 1/2 resolution
	renderer.shadowMap.enabled = true;
	renderer.shadowMapSoft = true;
	document.body.appendChild( renderer.domElement ); // appends to html document


/*	//=========== adds axis helpers (guides to show axes)
	var axis = new THREE.AxisHelper(35);
	scene.add(axis);


				//=========== adds grid
	var grid = new THREE.GridHelper(50, 5);
	var color = new THREE.Color('rgb(255,0,0)');
	grid.setColors(color, 0x000000);
	scene.add(grid);*/


	//========================== this section defines the shape/s..
	var geometry = new THREE.BoxGeometry( 10.3, 10, 10 );
	var material = new THREE.MeshLambertMaterial( { color: 0x5faa62 } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.x = 6.5;
	cube.position.y = 16;
	cube.position.z = 3.5;
	cube.castShadow = true;
	scene.add( cube );

	var geoometry = new THREE.BoxGeometry( 8, 8, 8 );
	var maaterial = new THREE.MeshLambertMaterial( { color: 0x999933 } );
	var newCube = new THREE.Mesh( geoometry, maaterial );
	newCube.position.x = -18;
	newCube.position.y = 15;
	newCube.position.z = 12;
	newCube.castShadow = true;
	scene.add( newCube );

	var sphericalGeometry = new THREE.SphereGeometry(3, 75, 75);
	var sphericalMaterial = new THREE.MeshLambertMaterial({ shading: THREE.FlatShading, color: 0xA38CCF });
	var sphereMesh = new THREE.Mesh(sphericalGeometry, sphericalMaterial);
	sphereMesh.position.x = 10;
	sphereMesh.position.y = 15;
	sphereMesh.position.z = 35;
	sphereMesh.castShadow = true;
	scene.add( sphereMesh );


	//=============== plane
	var planeGeometry = new THREE.PlaneGeometry(100,100,90);
	var planeMaterial = new THREE.MeshLambertMaterial({color: 0x9999CC});
	var plane = new THREE.Mesh(planeGeometry, planeMaterial);

	plane.rotation.x = -.5*Math.PI; // rotate it 1/4 of a rotation (90 degrees), euler values
	plane.receiveShadow = true;
	scene.add(plane);


	//============= spot light			
	var spotLight = new THREE.SpotLight(0xFFCCCC);
	spotLight.castShadow = true;
	spotLight.position.set ( 10, 45, 2 );
	scene.add( spotLight )


	//============== camera position
	camera.position.x = 15;
	camera.position.y = 35;
	camera.position.z = 45;

	camera.lookAt(scene.position);


	//============== this is a 'render loop', it renders 60 times/second
	function draw() { 
		requestAnimationFrame( draw );
		cube.rotation.x += 0.02;
		cube.rotation.y += 0.01;
		newCube.rotation.x += 0.05;
		newCube.rotation.y += 0.03;
		// sphereMesh.rotation.x += 0.01;
		renderer.render( scene, camera );
	}
	draw();
	