from exercise1 import *


def home():
	verts = [[0,0],[4,0],[4,4],[2,6],[0,4]]
	wall = PROD([JOIN(AA(MK)(verts)), Q(4)])
	door = T(1)(1.5)(CUBOID([1,3]))
	window = T([1,2])([2.75,1.5])(CUBOID([1,1.5]))
	Home = STRUCT([ wall , COLOR(RED)(door), COLOR(BLUE)(window) ])
	return COMP([S([1,2,3])([5,-5,5]),R([2,3])(PI/2)])(Home)


def neighBuildings():
	t = T(2)(70)(home())
	return STRUCT( NN(12)([t, R([2,1])(PI/6)]) )


def all_together():
	return STRUCT([pantheon(),T(3)(-6),neighBuildings()])

VIEW(all_together())