from pyplasm import *

DEFAULT_PROPORTION = 1

def border(p=1):
	circleExt = CIRCUMFERENCE(15.91*p)(32)
	circleInt = CIRCUMFERENCE(13.02*p)(32)
	ring = T([1,2])([27.23*p,9.86*p])(STRUCT([circleExt,circleInt]))
	rect = SKEL_1(MKPOL([[[0,0],[15.37,0],[15.37,19.72],[0,19.72]],[range(1,5)],None]))
	rectbis = DIFFERENCE([ring,rect])
	return STRUCT([rectbis,ring])

def mkFloor0(p):
	return STRUCT([border(p)])

floor0 = mkFloor0(DEFAULT_PROPORTION)
#VIEW(floor0)
VIEW(XOR([CIRCUMFERENCE(15.91*p)(32),SKEL_1(MKPOL([[[0,0],[15.37,0],[15.37,19.72],[0,19.72]],[range(1,5)],None]))]))

#floor1 = AA(JOIN)([,])
#two_and_half_model = STRUCT([floor0, T(3)(5)(floor1)])
#VIEW(two_and_half_model) 