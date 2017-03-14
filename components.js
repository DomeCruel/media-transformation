AFRAME.registerComponent('VR-Theater', {
  schema: {
	  src: { type: 'string'},
	  stops: { type: 'array'},
	  st: { type: 'array'}
  },
  
  init: function () {
	var self = this;
	var data = this.data;
	
	var el = this.el;
	this.video_selector = this.data.src;
	this.video_el = document.querySelector(this.video_selector);
	this.plane_el = document.querySelectorAll("a-plane");

	var springtime = this.data.st;
	var planes = this.data.st.length;
	
	

	//For-Schleife für alle planes
	for (i = 0; i < planes; i++) { 
		var name = "plane" + i;
		this.name = document.getElementById(name);
		
		//Click
		this.name.addEventListener('click', function(){
			//idclick nimmt nur Zahlen aus der ID der gerade aktiven a-plane 
			var idclick = this.id.match(/\d+$/)[0];
			//und wählt aus dem springtime array den Zeit zum Springen aus
			var sp = springtime[idclick];
			console.log("spring to time = " + sp);
			self.video_el.currentTime = sp;
			self.video_el.play();
			//und macht alle Objekte unsichtbar
			this.vr1 = document.getElementById("vr1");
			this.vr1.setAttribute('visible', false);
			});
			
		//Mouseenter Color
		this.name.addEventListener('mouseenter', function(){
			//Do something
			console.log("rein");
			this.setAttribute('color', "red" );
			//spring to time wie bei onclick nur für mouseenter mit einer Zeitverzögerung von 3 Sekunden
				self.idplane = this.id;
				myTimer = setInterval(dosomething, 3000);
			function dosomething() {
				var idclick = self.idplane.match(/\d+$/)[0];
				var sp = springtime[idclick];
				console.log("spring to time = " + sp);
				self.video_el.currentTime = sp;
				self.video_el.play();
				this.vr1 = document.getElementById("vr1");
				this.vr1.setAttribute('visible', false);}
		});
		
		//Mouseleave Color
		this.name.addEventListener('mouseleave', function(){
			//Do something
			console.log("raus");
			this.setAttribute('color', "#CCC" );
			clearTimeout(myTimer);
		});
		
		//Mouseenter Scale
		this.name.addEventListener('mouseenter', function(){
			//Do something
			console.log("rein");
			this.setAttribute('scale', "1.2 1.2 1.2" );
		});
		
		//Mouseleave Scale
		this.name.addEventListener('mouseleave', function(){
			//Do something
			console.log("raus");
			this.setAttribute('scale', "1 1 1" );
			clearTimeout(myTimer);
			});
	}
	
	
	//Play Button
	self.picture = document.getElementById("playbutton");
	
	self.picture.addEventListener('click', function(){
			self.picture.setAttribute('visible', false);
			self.video_el.play();
	});
		

	//klappt nicht auf dem Smartphone
	self.picture.addEventListener('mouseenter', function(){
		myTimer2 = setInterval(dosomething2, 15000);
		function dosomething2() {
			self.picture.setAttribute('visible', false);
			self.video_el.play();
	}});
			
	self.picture.addEventListener('mouseleave', function(){
		clearTimeout(myTimer2);
	});

  },
  	  
  update: function () {

	  
  },
  tick: function () {
	// Variable für die Stops aus dem Array von a-entity
	var stops = this.data.stops;
	
	// Umrechnung von Sekunden/Minuten
	var current_minutes = Math.floor(this.video_el.currentTime / 60);
	var current_seconds = Math.floor(this.video_el.currentTime % 60);
	// Minuten+Sekunden zu Minuten.Sekunden
	var timestop = current_minutes + "." + current_seconds;
	//Schleife für Stops
	for (i = 0; i < stops.length; i++) { 
		if (stops[i] == timestop){
		this.video_el.pause();
		var planes = this.plane_el.length-1;

	//Schleife für das Einblenden von Elementen in vr1	
			for (i = 0; i < planes; i++) { 
			var name = "plane" + i;
			this.vr1 = document.getElementById("vr1");
			this.vr1.setAttribute('visible', true);
			}
		} 		
	}
		
  },	
  remove: function () {},
  pause: function () {},
  play: function () {}
});
