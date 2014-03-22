from pyplasm import *


def RECT(args):
	b,h = args
	def RECT0(coords):
		x,y = coords
		return T([1,2])([x,y])(MKPOL([[[0,0],[b,0],[b,h],[0,h]],[range(1,5)],None]))
	return RECT0

def CIRC(args):
	r,n = args
	def CIRC0(coords):
		x,y = coords
		return T([1,2])([x,y])(CIRCLE(r)([n,n]))
	return CIRC0

def CIRCGRID(args):
	r,n = args
	def CIRCGRID0(coordList):
		return UNION([CIRC([r,n])([x,y]) for x,y in coordList]) 
	return CIRCGRID0

def CIRCGRIDAROUND(args):
	r,n = args
	def CIRCGRIDAROUND0(args0):
		x,y,radius,gradeList = args0
		return UNION([CIRC([r,n])([x+radius*COS(g),y+radius*SIN(g)]) for g in gradeList])
	return CIRCGRIDAROUND0

def basement():
	rectExt   = RECT([15.37,19.72])([0,0])
	circleExt = CIRC([15.91,32])([27.23,9.86])
	return COLOR(WHITE)(UNION([rectExt,circleExt]))

def walls():
	#esterno
    a = RECT([14.8,19.72])([0,0])
    b = RECT([7.37,19.06])([8,0.33])
    emptySpaceEst = DIFFERENCE([a,b])
    cExt1 = CIRC([1.64,32])([8,16.44])
    cExt2 = CIRC([1.64,32])([8,3.28])
    rExt1 = RECT([4.32,6.35])([8,6.685])
    rExt2 = RECT([3.5,4.15])([12.32,7.785])
    emptySpaceEst = UNION([emptySpaceEst,cExt1,cExt2,rExt1,rExt2])
    #interno
    cInt0 = CIRC([11.91,32])([27.23,9.86])
    cIntNES = CIRCGRID([2.39,32])([[27.23,21.77],[39.14,9.86],[27.23,-2.05]]) 
    emptySpaceInt = UNION([cInt0,cIntNES])
    #VIEW(emptySpaceInt) 
    emptySpace = UNION([emptySpaceInt,emptySpaceEst])
    return COLOR(GREEN)(DIFFERENCE([basement(),emptySpace]))

def columns():
	delta = 2.48
	ini = 1.03
	x1,x2,x3 = [i*delta+ini for i in range(3)]
	y1,y2,y3,y4,y5,y6,y7,y8 = [i*delta+ini for i in range(8)]
	coordsEst = [[x1,y1],[x1,y2],[x1,y3],[x1,y4],[x1,y5],[x1,y6],[x1,y7],[x1,y8],
	             [x2,y1],[x2,y3],[x2,y6],[x2,y8],
	             [x3,y1],[x3,y3],[x3,y6],[x3,y8]]
	colEst = CIRCGRID([0.42,32])(coordsEst)
	gradeInt1 = [0.36,12.35,[41,50,86,94,130,139,221,230,266,274,310,319]]
	gradeInt2 = [0.24,11.34,[18.7,27.2,64,72.7,107.3,116,152.8,161.3,198.7,207.2,244,252.7,287.3,296,332.8,241.3]]
	gradeInt3 = [0.36,10.7,[15,345]]
	colInt = UNION([CIRCGRIDAROUND([r,16])([27.23,9.86,radius,grade]) for r,radius,grade in [gradeInt1,gradeInt2,gradeInt3]])
	return COLOR(RED)(UNION([colInt,colEst]))

basement = basement()
print("basement done")
walls = walls()
print("walls done")
columns = columns()
print("columns done")

floor0 = STRUCT([basement,walls,columns])
VIEW(floor0)



#def mkFloor1():
#	return STRUCT([DIFFERENCE([border(1),border(0.9)])])

#floor1 = mkFloor1()
#two_and_half_model = STRUCT([floor0, T(3)(5)(floor1)])
#VIEW(two_and_half_model) 