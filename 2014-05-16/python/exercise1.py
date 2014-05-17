from pyplasm import *
from larcc import *


DRAW = COMP([VIEW,STRUCT,MKPOLS])

__depthWall__   = 0.3
__heightFloor__ = 2.8

###############################################################################################
#                                 FUNCTION/METHOD
###############################################################################################

def VIEW_CELL(diagram):
	V,CV = diagram
	hpc = SKEL_1(STRUCT(MKPOLS(diagram)))
	hpc = cellNumbering (diagram,hpc)(range(len(CV)),CYAN,2)
	return VIEW(hpc)

def MERGE_CELL(master,diagrams,toMerge):
	V,CV = master
	for i in range(len(CV))[::-1]:
		if i in toMerge:
			k = toMerge.index(i)
			master = diagram2cell(diagrams[k],master,toMerge[k])
	return master

def REMOVE_CELL((V,CV),toRemove):
	return V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]


def VMR_CELL(master, diagrams, toMerge, toRemove=[]):
	VIEW_CELL(master)
	assert len(diagrams)==len(toMerge)

	if(len(toMerge)>0 and len(toRemove)>0):
		for i in range(len(toMerge)):
			count = 0
			for r in toRemove:
				if r<toMerge[i]:
					count += 1
			toMerge[i] -= count

	master = REMOVE_CELL(master,toRemove)
	master = MERGE_CELL(master,diagrams,toMerge)
	
	return master

def SCALE_DIAG(vect):
	def SCALE_DIAG0(diagram):
		V,CV = diagram
		W = scalePoints(V,vect)
		return (W,CV)
	return SCALE_DIAG0

def ROTATE_DIAG(angle):
	def ROTATE_DIAG0(diagram):
		V,CV = SCALE_DIAG([1,-1,1])(diagram)
		W = [[x*COS(angle)-y*SIN(angle), x*SIN(angle)+y*COS(angle),z] for x,y,z in V] 
		return (W,CV)
	return ROTATE_DIAG0


def MKDOOR(length,left,doorSize):
	shape = [3,1,1]
	sizePatterns = [ [left, doorSize , length-left-doorSize],
					 [__depthWall__],
                     [__heightFloor__]
                    ]
	door = assemblyDiagramInit(shape)(sizePatterns)
	door = REMOVE_CELL(door,[1])
	return door

def MKDOOR(length,left,doorSize):
	shape = [3,1,1]
	sizePatterns = [ [left, doorSize , length-left-doorSize],
					 [__depthWall__],
                     [__heightFloor__]
                    ]
	door = assemblyDiagramInit(shape)(sizePatterns)
	door = REMOVE_CELL(door,[1])
	return door


###############################################################################################
#                                 MASTER
###############################################################################################

shape = [3,3,2]
sizePatterns = [ [__depthWall__+2.84, __depthWall__+3.4+__depthWall__,2.84+__depthWall__],
                 [5*__depthWall__,12.23+4*__depthWall__,5*__depthWall__],
                 [__depthWall__,__heightFloor__]
               ]

master = assemblyDiagramInit(shape)(sizePatterns)

shape = [3,2,2]
sizePatterns = [ [__depthWall__,3.4,__depthWall__],
                 [__depthWall__,4*__depthWall__],
                 [__heightFloor__*0.5,__heightFloor__*0.5]
               ]

balcony        = assemblyDiagramInit(shape)(sizePatterns)
balcony        = REMOVE_CELL(balcony,[1,3,5,6,7,9,11])



balconyReverse = SCALE_DIAG([1,-1,1])(balcony)

master         = VMR_CELL(master,[balcony,balconyReverse],[7,11],[0,1,4,5,12,13,16,17])

###############################################################################################
#                                 LEFT_SIDE
###############################################################################################

shape = [2,3,1]
sizePatterns = [ [__depthWall__,2.84],
                 [__depthWall__, 12.23+2*__depthWall__ , __depthWall__],
                 [__heightFloor__]
               ]

left_side = assemblyDiagramInit(shape)(sizePatterns)

door = ROTATE_DIAG(PI/2.)(MKDOOR(12.23+2*__depthWall__,5.23,2))

VIEW_CELL(door)

"""WINDOW"""
shape = [3,1,3]
sizePatterns = [ [ 1.6, 1.04 , 0.2],
                 [__depthWall__],
                 [__heightFloor__*0.4,__heightFloor__*0.3,__heightFloor__*0.2]
               ]
window = assemblyDiagramInit(shape)(sizePatterns)
window = REMOVE_CELL(window,[4])

left_side = VMR_CELL(left_side,[door,window,window],[1,3,5],[4])



###############################################################################################
#                                 CENTER_SIDE
###############################################################################################


shape = [3,7,1]
sizePatterns = [ [__depthWall__,3.4,__depthWall__],
                 [4.6, __depthWall__, 1.1, __depthWall__, 4.77, __depthWall__, 1.6-__depthWall__],
                 [__heightFloor__]
               ]

center_side = assemblyDiagramInit(shape)(sizePatterns)

shape = [3,3,1]
sizePatterns = [ [1.25,__depthWall__,1.75],
                 [1.6-__depthWall__,__depthWall__,3],
                 [__heightFloor__]
               ]

center_bottom_side = assemblyDiagramInit(shape)(sizePatterns)
center_bottom_side = REMOVE_CELL(center_bottom_side,[0,2,3,6,8])


center_side = VMR_CELL(center_side,[center_bottom_side],[7],[2,9,11,13,16])


###############################################################################################
#                                 RIGHT_SIDE
###############################################################################################

"""
shape = [2,3,1]
sizePatterns = [ [__depthWall__,2.84],
                 [__depthWall__, 12.23+2*__depthWall__ , __depthWall__],
                 [__heightFloor__]
               ]

right_side = assemblyDiagramInit(shape)(sizePatterns)


"""


###############################################################################################
#                                 ASSEMBLY
###############################################################################################


diagram_3D          = VMR_CELL(master,[left_side,center_side],[1,4])
#diagram_3D          = VMR_CELL(master,[left_side,center_side,right_side],[1,4,7])

DRAW(diagram_3D)














