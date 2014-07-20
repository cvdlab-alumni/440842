from exercise2 import *

__StairsHeight__ = 6

#########################################################################################################
                             # NEIGHBOURING'S HOME
#########################################################################################################

def home(args):
	depth,length,height = args
	verts     = [[0,0],[length,0],[length,height],[length/2.,height*1.5],[0,height]]
	wall      = PROD([JOIN(AA(MK)(verts)), Q(depth)])
	fireplace = T([2,3])([height,depth/2.]) (CUBOID([1,1,1]))
	door      = T(1)(length/2.8)(CUBOID([length/4.,height/2.]))
	window    = T([1,2])([2.75,1.5])(CUBOID([1,1.5]))
	Home = STRUCT([ wall , fireplace,  COLOR(RED)(door), COLOR(BLUE)(window) ])
	return COMP([S([1,2,3])([5,-5,5]),R([2,3])(PI/2)])(Home)


def neighBuildings():
	t = T(2)(100)(home([6,4,4]))
	return STRUCT( NN(12)([t, R([2,1])(PI/6)]) )



#######################################################################################################################
   							  #ASSEMBLY THE PANTHEON V3
####################################################################################################################### 

def pantheonV3():
	return STRUCT([pantheonV2(),T(3)(-__StairsHeight__),neighBuildings()])

VIEW(pantheonV3())