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
	#VIEW_CELL(master)
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

###############################################################################################
#                                 MASTER
###############################################################################################

shape = [5,3,2]
sizePatterns = [ [__depthWall__,2.84,__depthWall__,6.24+__depthWall__,__depthWall__],
                 [__depthWall__,12.23+2*__depthWall__,__depthWall__],
                 [__depthWall__,__heightFloor__]
               ]


master = assemblyDiagramInit(shape)(sizePatterns)

###############################################################################################
#                                 RIGHT_SIDE
###############################################################################################

shape = [1,5,1]
sizePatterns = [ [6.24+__depthWall__],
                 [4.6,__depthWall__,1.7,__depthWall__,5.93],
                 [__heightFloor__]
               ]

right_side = assemblyDiagramInit(shape)(sizePatterns)

###############################################################################################
#                                 RIGHT_TOP_SIDE
###############################################################################################

shape = [3,1,1]
sizePatterns = [ [3.4,__depthWall__,2.84],
                 [5.93],
                 [__heightFloor__]
               ]

right_top_side = assemblyDiagramInit(shape)(sizePatterns)

###############################################################################################
#                                 RIGHT_TOP_LEFT_SIDE
###############################################################################################

shape = [1,3,1]
sizePatterns = [ [3.4],
                 [4.7,__depthWall__,1.16-__depthWall__],
                 [__heightFloor__]
               ]

right_top_left_side = assemblyDiagramInit(shape)(sizePatterns)


right_top_left_side = VMR_CELL(right_top_left_side,[],[],[0,2])
VIEW_CELL(right_top_left_side)
right_top_side      = VMR_CELL(right_top_side,[right_top_left_side],[0],[0,2])
right_side          = VMR_CELL(right_side,[right_top_side],[4],[0,2])
diagram_3D          = VMR_CELL(master,[right_side],[21],[9])

DRAW(diagram_3D)














