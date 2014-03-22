from pyplasm import *


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

def CIRCGRIDAROUND(args):
	r,n = args
	def CIRCGRIDAROUND0(args0):
		x,y,radius,gradeList = args0
		conv = 2*PI / 360
		return STRUCT([CIRC([r,n])([x+radius*COS(g*conv),y+radius*SIN(g*conv)]) for g in gradeList])
	return CIRCGRIDAROUND0

def basement():
	rectExt   = RECT([15.37,19.72])([0,0])
	circleExt = CIRC([15.91,32])([27.23,9.86])
	return COLOR(WHITE)(UNION([rectExt,circleExt]))

def walls(basement):
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
    rInt = (RECTGRIDAROUND([2.3,4.5])([27.23,9.86,10.7,[33,123,213,303]]))
    emptySpaceInt = UNION([cInt0,cIntNES,rInt])
    emptySpace = UNION([emptySpaceInt,emptySpaceEst])
    return COLOR(GREEN)(DIFFERENCE([basement,emptySpace]))

def columns():
	delta = 2.48
	ini = 1.05
	x1,x2,x3 = [i*delta+ini for i in range(3)]
	y1,y2,y3,y4,y5,y6,y7,y8 = [i*delta+ini for i in range(8)]
	coordsEst = [[x1,y1],[x1,y2],[x1,y3],[x1,y4],[x1,y5],[x1,y6],[x1,y7],[x1,y8],
	             [x2,y1],[x2,y3],[x2,y6],[x2,y8],
	             [x3,y1],[x3,y3],[x3,y6],[x3,y8]]
	colEst = CIRCGRID([0.42,32])(coordsEst)
	colInt1 = CIRCGRIDAROUND([0.36,32])([27.23,9.86,12.35,[41,50,86,94,130,139,221,230,266,274,310,319]])
	colInt2 = CIRCGRIDAROUND([0.24,32])([27.23,9.86,11.34,[18.7,27.2,64,72.7,107.3,116,152.8,161.3,198.7,207.2,244,252.7,287.3,296,332.8,341.3]])
	colInt3 = CIRCGRIDAROUND([0.36,32])([27.23,9.86,10.7,[15,345]])
	colInt = STRUCT([colInt1,colInt2,colInt3])
	return COLOR(RED)(STRUCT([colInt,colEst]))

height = 15

basement = basement()
print("basement done")
walls = PROD([walls(basement),Q(height)])
print("walls done")
columns = PROD([columns(),Q(height)])
#print("columns done")

floor0 = STRUCT([basement,walls,columns])




def circonference(p):
	a = p[0]
	r = 15.91
	return [r*cos(a),r*sin(a)]

def circonference2(p):
 	a = p[0]
 	r = 11.91
	return [r*cos(a),r*sin(a)]

cerchio = MAP(circonference)(INTERVALS(2*math.pi)(64))
cerchioInterno = MAP(circonference2)(INTERVALS(2*math.pi)(64))
anello = SOLIDIFY(STRUCT([cerchio,cerchioInterno]))

mezzoArco = MAP(circonference)(INTERVALS(PI)(64)) 
mezzoArco2 = MAP(circonference2)(INTERVALS(PI)(64))
sopr = JOIN([mezzoArco,mezzoArco2])
qlv = DIFFERENCE([PROD([sopr,Q(4)]),MY_CYLINDER([11.91,4])(64),T(1)(-4)(CUBOID([2.5,30,8]))])

cer = MAP(circonference)(INTERVALS(2*math.pi)(64))
mezzaLuna = JOIN([MAP(circonference)(INTERVALS(2*PI)(64)),cer])

cup = R([1,3])(2*PI)(mezzaLuna)

cupola = STRUCT([ T([1,2,3])([27.23,9.86,height]), cup])


floor1 = STRUCT([cup])

solid_model_3D = STRUCT([floor0, T(3)(height), floor1])
VIEW(solid_model_3D) 






