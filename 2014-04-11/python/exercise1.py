from pyplasm import *
from myfont import *

__HeightPantheon__ = 15
__SuppHeight__ = __HeightPantheon__ * 0.53

def RECT(args):
	b,h = args
	def RECT0(coords):
		x,y = coords
		return T([1,2])([x,y])(MKPOL([[[0,0],[b,0],[b,h],[0,h]],[range(1,5)],None]))
	return RECT0

def RECTGRIDAROUND(args):
	b,h = args
	def RECTGRIDAROUND0(args0):
		x,y,radius,gradeList = args0
		conv = 2*PI / 360    
		return STRUCT([ T([1,2])([x+radius*COS(g*conv),y+radius*SIN(g*conv)])(ROTATE([1,2])(g*conv)(RECT([b,h])([0,0]))) for g in gradeList])
	return RECTGRIDAROUND0

def CIRC(args):
	r,n = args
	def CIRC0(coords):
		x,y = coords
		return T([1,2])([x,y])(CIRCLE(r)([n,n]))
	return CIRC0

def CIRCGRID(args):
	r,n = args
	def CIRCGRID0(coordList):
		return STRUCT([CIRC([r,n])([x,y]) for x,y in coordList]) 
	return CIRCGRID0




def CAPITAL(args):
	baseLenght,radius,capitalHeight = args
	def CAPITAL0(definition):
		up = T([3])([capitalHeight])(RECT([baseLenght,baseLenght])([0,0]))
		down = CIRC([radius,definition])([baseLenght/2.,baseLenght/2.])
		return JOIN([down,up])
	return CAPITAL0

def COLUMN(args):
	colheight,radius,capLength = args
	def COLUMN0(definition):
		def COLUMN1(coords):
			x,y = coords
			capHeight = capLength
			upCap = T([3])([colheight-capHeight])(CAPITAL([capLength,radius,capHeight])(definition))
			capDownHeight = capLength * 0.3
 			downCap = T([1,3])([capLength,capDownHeight])(ROTATE([1,3])(PI)(CAPITAL([capLength,radius,capDownHeight])(definition)))
 			col = PROD([CIRC([radius,definition])([capLength/2.,capLength/2.]),Q(colheight)])
			return T([1,2])([x,y])(STRUCT([upCap,col,downCap]))
		return COLUMN1
	return COLUMN0


def COLUMNGRID(args):
	def COLUMNGRID0(definition):
		def COLUMNGRID1(coordList):
			return STRUCT([ COLUMN(args)(definition)([x,y]) for x,y in coordList]) 
		return COLUMNGRID1
	return COLUMNGRID0


def GRADE2COORDS(args):
	x,y,radius = args
	def GRADE2COORDS0(gradeList):
		conv = 2.*PI / 360.
		return [[x+radius*COS(g*conv),y+radius*SIN(g*conv)] for g in gradeList]
	return GRADE2COORDS0


def basement():
	rectExt   = RECT([15.37,19.72])([0,0])
	circleExt = CIRC([15.91,32])([27.23,9.86])
	return STRUCT([rectExt,circleExt])

def walls(basement):
	#esterno
    a = RECT([14.8,19.72])([0,0])
    b = RECT([7.37,19.06])([8,0.33])
    emptySpaceEst = DIFFERENCE([a,b])
    cExt1 = CIRC([1.64,32])([8,16.44])
    cExt2 = CIRC([1.64,32])([8,3.28])
    rExt1 = RECT([4.32,6.35])([8,6.685])
    rExt2 = RECT([3.5,4.15])([12.32,7.785])
    emptySpaceEst = STRUCT([emptySpaceEst,cExt1,cExt2,rExt1,rExt2])
    #interno
    cInt0 = CIRC([11.91,32])([27.23,9.86])
    cIntNES = CIRCGRID([2.39,32])([[27.23,21.77],[39.14,9.86],[27.23,-2.05]]) 
    rInt = (RECTGRIDAROUND([2.3,4.5])([27.23,9.86,10.7,[33,123,213,303]]))
    emptySpaceInt = STRUCT([cInt0,cIntNES,rInt])
    emptySpace = STRUCT([emptySpaceInt,emptySpaceEst])
    return PROD([ DIFFERENCE([basement,emptySpace]), Q(__HeightPantheon__) ])

def columns(definition):
	delta = 2.48
	ini = 0.5
	x1,x2,x3 = [i*delta+ini for i in range(3)]
	y1,y2,y3,y4,y5,y6,y7,y8 = [i*delta+ini for i in range(8)]
	coordsEst = [[x1,y1],[x1,y2],[x1,y3],[x1,y4],[x1,y5],[x1,y6],[x1,y7],[x1,y8],
	             [x2,y1],[x2,y3],[x2,y6],[x2,y8],
	             [x3,y1],[x3,y3],[x3,y6],[x3,y8]]
	colEst = COLUMNGRID([__HeightPantheon__,0.42,ini*1.8])(definition)(coordsEst)

	colInt1Coords = GRADE2COORDS([27.23,9.86,12.35])([41,50,86,94,130,139,221,230,266,274,310,319])
	colInt2Coords = GRADE2COORDS([27.23,9.86,11.34])([18.7,27.2,64,72.7,107.3,116,152.8,161.3,198.7,207.2,244,252.7,287.3,296,332.8,341.3])
	colInt3Coords = GRADE2COORDS([27.23,9.86,10.7])([10,350])
	colInt1 = COLUMNGRID([__HeightPantheon__,0.36,0.36*3])(definition)(colInt1Coords)
	colInt2 = COLUMNGRID([__HeightPantheon__*0.6,0.24,0.24*3])(definition)(colInt2Coords)
	colInt3 = COLUMNGRID([__HeightPantheon__,0.36,0.36*3])(definition)(colInt3Coords)

	colInt = STRUCT([colInt1,colInt2,colInt3])
	return STRUCT([colEst,colInt])

def stair(args):
	height,n = args 
	b = T([3])([-n*height])(PROD([ RECT([15.91*2, 15.91*2]) ([27.23-15.91,9.86-15.91]) , Q(n*height)]))
	s = STRUCT([T([3])([-height*(plane+1)])( PROD([RECT([15.37+plane,19.72+2*plane])([-plane,-plane]),Q(height)]) ) for plane in range(n)])
	return  STRUCT([b,s])

basement = basement()
print("basement is done")
walls = walls(basement)
print("walls are done")
columns = columns(16)
print("columns are done")
stair = stair([2,3])
print("stair is done")

floor0 = STRUCT([stair,basement,walls,columns])


def CIRCONFERENCE(radius):
	def CIRCONFERENCE0(point):
		return [radius*cos(point[0]),radius*sin(point[0])]
	return CIRCONFERENCE0

def MOVE(point):
	x,y,z = point
	return [x, y*cos(z), y*sin(z)]

def BALL(radius):
	semiCerchio = JOIN(MAP(CIRCONFERENCE(radius))(INTERVALS(PI)(32)))
	sc = PROD([semiCerchio,INTERVALS(PI)(10)])
	return MAP(MOVE)(sc)

def TRIANGLE(coord):
	return MKPOL([coord,[range(1,4)],None])

def RECT(args):
	b,h = args
	def RECT0(coords):
		x,y = coords
		return T([1,2])([x,y])(MKPOL([[[0,0],[b,0],[b,h],[0,h]],[range(1,5)],None]))
	return RECT0


def dome():
	arcoExt = MAP(CIRCONFERENCE(15.91))(INTERVALS(PI)(32)) 	
	arcoInt = MAP(CIRCONFERENCE(11.91))(INTERVALS(PI)(32))
	arco = SOLIDIFY(STRUCT([arcoExt,arcoInt]))
	mezzaluna = PROD([arco,INTERVALS(PI)(10)])
	semiSfera = MAP(MOVE)(mezzaluna)
	hole = MY_CYLINDER([3,50])(32)
	cup = DIFFERENCE([semiSfera,hole])

	suppExt = MY_CYLINDER([15.91,__SuppHeight__])(32)
	supp = DIFFERENCE([suppExt,BALL(15.91)])

	return STRUCT([T([1,2])([27.23,9.86]),supp,cup])

def frontDome():
	base = T([2])([0.36])(RECT([15.37,19])([0,0]))
	polBase = PROD([base,Q(__SuppHeight__ * 0.2)])

	triangolo = TRIANGLE([[0,0],[19.72,0],[19.72/2,__SuppHeight__ * 0.4]])
	poltriang = PROD([triangolo, Q(15.37)])
	poltriang = ROTATE([1,2])(PI/2)(poltriang)
	poltriang = ROTATE([3,1])(PI/2)(poltriang)
	poltriang = T([3])([__SuppHeight__ * 0.2])(poltriang)
	
	par = T([2])([0.86])(RECT([7.37,18])([8,0]))
	par = PROD([par,Q(__SuppHeight__)])
	
	written = PROD([ OFFSET([0.5,0.25])(TEXT("M.AGRIPPA.L.F.COS.TERTIVM.FECIT")) , Q(0.1) ]) 
	written = COMP([ COLOR(BLACK) ,T([2,3])([17.5,0.2]), R([2,1])(PI/2), R([2,3])(PI/2), S([1,2])([0.1,0.1]) ])(written)

	return STRUCT([polBase,poltriang,par,written])

dome = dome()
print("dome is done")
frontDome = frontDome()
print("front of dome is done")

floor1 = STRUCT([frontDome,dome])


solid_model_3D = STRUCT([floor0, T(3)(__HeightPantheon__)(floor1)])
VIEW(solid_model_3D) 






