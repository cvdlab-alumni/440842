from exercise1 import *

__depthWall__   = 0.3
__depthfloor__  = 4*__depthWall__
__heightFloor__ = 2.8
__distanceBetweenApartment__ = 3


##########################################################################################
#									FIRST FLOOR
##########################################################################################

shape = [3,3,2]
sizePatterns = [ [__depthWall__, 9.08+2*__depthWall__ ,__depthWall__],
                 [__depthWall__,12.23+2*__depthWall__,__depthWall__],
                 [__depthfloor__,__heightFloor__]
               ]
first_floor_diagram = assemblyDiagramInit(shape)(sizePatterns)
door = ROTATE_DIAG(PI/2.)(MKDOOR(12.23+2*__depthWall__,5.23,2)) 
first_floor_diagram = VMR_CELL(first_floor_diagram, [door], [3], [9])

first_floor = T(2)(5*__depthWall__)(STRUCT(MKPOLS(first_floor_diagram)))
first_floor = STRUCT([ COMP([T([1])([-__distanceBetweenApartment__]),S([1])([-1])]) (first_floor) , first_floor ])

VIEW(first_floor)

apartment = STRUCT(MKPOLS(build_apartment()))
floor = T(3)(__depthfloor__+__heightFloor__)(STRUCT([ COMP([T([1])([-__distanceBetweenApartment__]),S([1])([-1])]) (apartment) , apartment ]))

VIEW(floor)

building = STRUCT([first_floor, STRUCT( NN(8)([floor, T([3])(__depthfloor__+__heightFloor__)]) ) ])  

VIEW(building)