from exercise1 import *

__HeightPantheon__ = 15

#########################################################################################################
                                           # WINDOWS
#########################################################################################################

def window(args):
	b,h = args
	vertsEst = [[0,0],[b*1.1,0],[b*1.1,h*1.2],[0,h*1.2]]
	est = JOIN(AA(MK)(vertsEst))
	vertsInt = [[0,0],[b,0],[b,h],[0,h]]
	inter = T([1,2])([b*0.05,h*0.1])(JOIN(AA(MK)(vertsInt)))
	w = PROD([DIFFERENCE([est,inter]),Q(0.1)])
	return COMP([COLOR(BROWN),T(1)(-b/2.),S(2)(-1),R([2,3])(PI/2)])(w)


def windows(args):
	w = COMP([R([1,2])(PI/6),T(2)(15.91)])(window(args))
	ws = STRUCT( NN(9)([w, R([2,1])(PI/6)]) )
	return T([1,2,3])([27.23,9.86,__HeightPantheon__*1.05])(ws)


#######################################################################################################################
   							              #ASSEMBLY THE PANTHEON V2
#######################################################################################################################

def pantheonV2():
	return STRUCT([pantheonV1(),windows([0.5,1.5])])

#VIEW(pantheonV2())