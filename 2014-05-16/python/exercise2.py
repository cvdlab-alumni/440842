from exercise1 import *

__depthWall__   = 0.3
__depthfloor__  = 4*__depthWall__
__heightFloor__ = 2.8
__distanceBetweenApartment__ = 3
__corridorLenght__ = 5*__depthWall__ + 12.23+4*__depthWall__ - __distanceBetweenApartment__

##########################################################################################
#									GROUND FLOOR
##########################################################################################

def mkGround():
	controlpoints=[ [[ 0,0,0],[0 ,3  ,4],[0,6,3],[0,10,0]],
   					[[ 3,0,2],[2 ,2.5,5],[3,6,5],[4,8,2]],
   					[[ 6,0,2],[8 ,3 , 5],[7,6,4.5],[6,10,2.5]],
   					[[10,0,0],[11,3  ,4],[11,6,3],[10,9,0]]
   				   ]
	dom = larDomain([20])
	dom2D = larExtrude1(dom, 20*[1./20])
	mapping = larBicubicSurface(controlpoints)
	model = larMap(mapping)(dom2D)
	V,CV = model
	model = (V,[range(len(V))])
	ground = STRUCT(MKPOLS(model))
	return COMP([COLOR(BROWN),T([1,2])([-30,-20]),S([1,2])([2,2])])(ground)

##########################################################################################
#									FIRST FLOOR
##########################################################################################

def mkfirst_floor():
	shape = [3,3,2]
	sizePatterns = [ [__depthWall__, 9.08+2*__depthWall__ ,__depthWall__],
    	             [__depthWall__,12.23+2*__depthWall__,__depthWall__],
        	         [__depthfloor__,__heightFloor__]
            	   ]
	first_floor_diagram = assemblyDiagramInit(shape)(sizePatterns)
	door = ROTATE_DIAG(PI/2.)(MKDOOR(12.23+2*__depthWall__,5.23,2)) 
	return VMR_CELL(first_floor_diagram, [door], [3], [9])


##########################################################################################
#									ELEVATOR
##########################################################################################

def mkelevator():
	shape = [3,4,2]
	sizePatterns = [ [__depthWall__, __distanceBetweenApartment__-2*__depthWall__ ,__depthWall__],
    	             [__depthWall__, __distanceBetweenApartment__-2*__depthWall__ ,__depthWall__,__corridorLenght__],
        	         [__depthfloor__,__heightFloor__]
            	   ]
	elevator = assemblyDiagramInit(shape)(sizePatterns)
	door = (MKDOOR(__distanceBetweenApartment__-2*__depthWall__,(__distanceBetweenApartment__-2*__depthWall__)/2.-0.5,1)) 
	return VMR_CELL(elevator, [door], [13], [7,11,15,23])


##########################################################################################
#									 STAIRS
##########################################################################################

def mkstairs(height, width):
	stepHeight = height / 9. 
	stepLenght = stepHeight * 2
	stepWidth = width / 2.
	shape = [4,3,3]
	sizePatterns = [ [__depthWall__, stepWidth, stepWidth, __depthWall__],
    	             [ 4 * stepLenght , stepWidth, __depthWall__],
        	         [4.*stepHeight, stepHeight, 4.*stepHeight]
            	   ]
	master = assemblyDiagramInit(shape)(sizePatterns)

	shape = [1,4,4]
	sizePatterns = [ [stepWidth],
    	             4*[stepLenght],
        	         4*[stepHeight]
            	   ]
	stairs = assemblyDiagramInit(shape)(sizePatterns)
	stairs = SELECT_CELL(stairs,[0,4,5,9,10,14,15])
	reverseStairs = SCALE_DIAG([1,-1,1])(stairs)
	return VMR_CELL(master, [reverseStairs,stairs], [11,18], [9,10,12,14,19,20,21,23]) 

def mkbuilding_stairs(height, width):
	stepHeight = height / 9. 
	stepLenght = stepHeight * 2
	stepWidth = width / 2.
	shape = [3,2,2]
	sizePatterns = [ [__depthWall__, width, __depthWall__],
    	             [ 4*stepLenght+stepWidth , __depthWall__],
        	         [ height-__depthWall__, __depthWall__+__depthfloor__]
            	   ]
	r = assemblyDiagramInit(shape)(sizePatterns)
	r = REMOVE_CELL(r,[4])
	roof = T(3)(8*(__depthfloor__+__heightFloor__))(STRUCT(MKPOLS(r)))

	stair = STRUCT(MKPOLS(mkstairs(height, width)))
	stairs = T(3)(__depthfloor__)(STRUCT(NN(8)([stair, T([3])(height)])))

	g = assemblyDiagramInit([1,1,1])([[width+2*__depthWall__], [4*stepLenght+stepWidth+__depthWall__], [__depthfloor__]])
	ground = STRUCT(MKPOLS(g))
	return STRUCT([ground,stairs,roof])


##########################################################################################
#									 ROOF
##########################################################################################

def mkroof():
	shape = [4,2,1]
	sizePatterns = [ [__distanceBetweenApartment__/2.,__depthWall__+2.84, __depthWall__+3.4+__depthWall__,2.84+__depthWall__],
                 	 [5*__depthWall__,12.23+4*__depthWall__],
                     [__depthfloor__]
            	   ]
	roof = assemblyDiagramInit(shape)(sizePatterns)
	roof = REMOVE_CELL(roof,[2,4,6])
	reverseRoof = SCALE_DIAG([-1,1,1])(roof)
	final_roof = STRUCT([STRUCT(MKPOLS(roof)) , STRUCT(MKPOLS(reverseRoof))])
	return T(1)(-__distanceBetweenApartment__/2.)(final_roof)


##########################################################################################
#									ASSEMBLY
##########################################################################################

def mkbuilding():
	ground = T(3)(-10)(mkGround())

	el = mkelevator()
	el_ground = T(1)(-__distanceBetweenApartment__)(STRUCT(MKPOLS(el)))
	el_floor = T(1)(-__distanceBetweenApartment__)(STRUCT(MKPOLS(REMOVE_CELL(el,[9]))))

	first_floor = T(2)(5*__depthWall__)(STRUCT(MKPOLS(mkfirst_floor())))
	first_floor = STRUCT([ COMP([T([1])([-__distanceBetweenApartment__]),S([1])([-1])]) (first_floor) , first_floor , el_ground ])	

	apartment = STRUCT(MKPOLS(mkapartment()))
	floor = STRUCT([ COMP([T([1])([-__distanceBetweenApartment__]),S([1])([-1])]) (apartment) , apartment, el_floor ])
	floor = T(3)(__depthfloor__+__heightFloor__)(floor)
	floors = STRUCT( NN(8)([floor, T([3])(__depthfloor__+__heightFloor__)]))

	roof = T(3)(9*(__depthfloor__+__heightFloor__))(mkroof())

	stair  = mkbuilding_stairs(__depthfloor__+__heightFloor__, __distanceBetweenApartment__)
	stairs = T([1,2])([-__distanceBetweenApartment__-__depthWall__,__corridorLenght__+__distanceBetweenApartment__])(stair)
	VIEW(stairs)
	return STRUCT([ground,first_floor, floors, roof, stairs])  


VIEW(mkbuilding())