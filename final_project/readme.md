#Progetto Finale di Andrea Olivieri, matricola 440842.

Il progetto Finale prevede la creazione di un appartamento in three.js.

Nel progetto sono state utilizzate, in aggiunta a quelle standard per la creazione di un progetto in three.js, le seguenti librerie : 

  TrackballControls.js : per il controllo della camera.
  OBJLoader.js, MTLLoader.js, OBJMTLLoader.js : per il caricamento degli object.    
  Mirror.js : per la gestione della riflessione dello specchio.

Gli script da me scritti sono stati :     

  apartment.js : dove viene caricato il profilo dell'appartamento derivato dall'ultimo homework.
  lamp.js : dove vengono caricate tutte le lampade e dove viene gestita la loro accensione/spegnimento.
  door.js : dove vengono caricate porte e gestita la loro aperture/chiusura.
  wallpaper.js : dove viene costruita la parete o il pavimento, applicata la texture e posizionata sull'appartamento.
  window.js : dove vengono caricate e posizionate le finestre.
  mirrorObj.js : dove vengono caricati e gestiti gli specchi e il loro riflesso
  bathroom.js : dove vengono caricati tutti gli object inerenti al bagno.
  bedroom.js : dove vengono caricati tutti gli object inerenti alle stanze da letto.
  livingroom.js : dove vengono caricati tutti gli object inerenti al soggiorno.
  generalObjects.js : dove vengono caricati altri oggetti.

La tecnica utilizzata per importare un oggetto nell'appartamento è stata d'apprima caricarne il file obj e il relativo mtl, in seguito applicargli una texture e soltanto alla fine posizionarlo in modo opportuno nell'appartamento, nella stessa maniera è stata tappezzata l'intera casa.

Le interazione che si possono avere con l'ambiente sono due: 
  l'accensione/spegnimento delle luci mediante il click su di esse.
  l'apertura/chiusura di una parta mediante il click su di esse.