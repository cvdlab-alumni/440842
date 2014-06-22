function mkApartment(scene){
  var apartment;

  var loader = new THREE.OBJMTLLoader();
      loader.addEventListener('load', function (event) {

        apartment = event.content;
        apartment.scale.set(10, 10, 10);

        scene.add(apartment);
      });

      loader.load(
        'assets/models/apartment.obj', 
        'assets/models/apartment.mtl', 
        {side: THREE.DoubleSide}
      );

  return apartment;
}

