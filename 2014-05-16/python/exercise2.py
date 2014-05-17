from exercise1 import *

__depthWall__   = 0.3
__depthfloor__  = 4*__depthWall__
__heightFloor__ = 2.8
__distanceBetweenApartment__ = 3


##########################################################################################
#									FIRST FLOOR
##########################################################################################

def build_first_floor():
	shape = [3,3,2]
	sizePatterns = [ [__depthWall__, 9.08+2*__depthWall__ ,__depthWall__],
    	             [__depthWall__,12.23+2*__depthWall__,__depthWall__],
        	         [__depthfloor__,__heightFloor__]
            	   ]
	first_floor_diagram = assemblyDiagramInit(shape)(sizePatterns)
	door = ROTATE_DIAG(PI/2.)(MKDOOR(12.23+2*__depthWall__,5.23,2)) 
	return VMR_CELL(first_floor_diagram, [door], [3], [9])

def mkelevator():
	shape = [3,5,2]
	sizePatterns = [ [__depthWall__, __distanceBetweenApartment__-2*__depthWall__ ,__depthWall__],
    	             [__depthWall__, __distanceBetweenApartment__-2*__depthWall__ ,__depthWall__,10,__depthWall__],
        	         [__depthfloor__,__heightFloor__]
            	   ]
	elevator = assemblyDiagramInit(shape)(sizePatterns)
	door = (MKDOOR(__distanceBetweenApartment__-2*__depthWall__,(__distanceBetweenApartment__-2*__depthWall__)/2.-0.5,1)) 
	return VMR_CELL(elevator, [door], [15], [7,13,17,27])


def mkbuilding():
	el = mkelevator()
	VIEW_CELL(el)
	el_ground = T(1)(-__distanceBetweenApartment__)(STRUCT(MKPOLS(REMOVE_CELL(el,[15]))))
	el_floor = T(1)(-__distanceBetweenApartment__)(STRUCT(MKPOLS(REMOVE_CELL(el,[11]))))
	first_floor = T(2)(5*__depthWall__)(STRUCT(MKPOLS(build_first_floor())))
	first_floor = STRUCT([ COMP([T([1])([-__distanceBetweenApartment__]),S([1])([-1])]) (first_floor) , first_floor , el_ground ])	
	apartment = STRUCT(MKPOLS(build_apartment()))
	floor = STRUCT([ COMP([T([1])([-__distanceBetweenApartment__]),S([1])([-1])]) (apartment) , apartment, el_floor ])
	floor = T(3)(__depthfloor__+__heightFloor__)(floor)
	floors = STRUCT( NN(8)([floor, T([3])(__depthfloor__+__heightFloor__)]))
	return STRUCT([first_floor, floors])  


VIEW(mkbuilding())