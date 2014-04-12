from exercise3 import * 

__StairsHeight__ = 6

def CIRCONFERENCE(radius):
	def CIRCONFERENCE0(point):
		return [radius*cos(point[0]),radius*sin(point[0])]
	return CIRCONFERENCE0

def JUNCTION(args):
	r,R,depth = args
	def JUNCTION0(definition):
		arcoExt = MAP(CIRCONFERENCE(R))(INTERVALS(PI/2.)(definition)) 	
		arcoInt = MAP(CIRCONFERENCE(r))(INTERVALS(PI/2.)(definition))
		arco = JOIN([arcoExt,arcoInt])
		return PROD([arco,Q(depth)])
	return JUNCTION0

#######################################################################################################################
   							              #STREET LAMPS
#######################################################################################################################

def streetLamp(args):
	radius, height = args
	def streetLamp0(definition):
		basis = T([1,2])([-radius,-radius])(CUBOID([radius*2.,radius*2.,height*0.1]))
		body  = MY_CYLINDER([radius,height])(definition)
		lbasInf = radius*1.
		lbasSup = radius*3.5
		delta = (lbasInf - lbasSup) / 2.
		head  = T([1,2])([-lbasInf/2.,-lbasInf/2.])(JOIN( [CUBOID([lbasInf,lbasInf]), T([1,2,3])([delta,delta,height*0.3])(CUBOID([lbasSup,lbasSup]))]))
		return STRUCT([basis,body,T(3)(height),COLOR(YELLOW)(head)])
	return streetLamp0

def streetLamps(args):
	def streetLamps0(definition):
		sl = T(2)(90)(streetLamp(args)(definition))
		return STRUCT( NN(12)([sl, R([2,1])(PI/6)]) )
	return streetLamps0


#######################################################################################################################
   							              #BUS STOP
#######################################################################################################################

def buShelter(args):
	depth, height, length = args
	dj = height * 0.1
	rod  = COMP([T(1)(dj),S(2)(-1)])(CUBOID([dj,height,depth]))
	junc = JUNCTION([dj, 2.*dj, depth])(16)

	background = T([1,2])([-dj,-height])(CUBOID([length+2*dj,height+dj,1]))
	borderRight = STRUCT([rod,junc])
	borderLeft  = S(1)(-1)(borderRight)
	roof        = T(2)(dj)(CUBOID([length,dj,depth]))
	buShelter = STRUCT( [background, borderLeft,roof,T(1)(length)(borderRight)] ) 
	return COMP([S(2)(-1),R([2,3])(PI/2), T([1,2])([2*dj,height])])(buShelter)

def buStop(args):
	def buStop0(args0):
		r,height,length = args0
		def buStop1(definition):
			body = T(2)(r)(MY_CYLINDER([r,height])(definition))
			head = T([1,3])([-length/2.,height])(CUBOID([length,2*r,length]))

			written = PROD([ OFFSET([0.5,0.25])(TEXT("BUS_STOP")) , Q(0.1) ]) 
			written = COMP([ COLOR(BLACK),T([1,2,3])([length/3.,2*r,height+length/2.]) ,R([1,1])(PI) , R([2,3])(PI/2), S([1,2])([0.15,0.15]) ])(written)
			board = T(1)(-10)(STRUCT([body,head,written]))
			return STRUCT([board,buShelter(args)])
		return buStop1 
	return buStop0

#######################################################################################################################
   							              #ASSEMBLY THE PANTHEON V4
#######################################################################################################################

def urbanFittings():
	bs = COMP([T([1,2])([-20,-20]),R([1,2])(PI/2)])(buStop([6,10,7])([1,10,8])(16))
	sl = streetLamps([1,19])(10)
	return STRUCT([sl,bs])


#VIEW(urbanFittings())

def pantheonV4():
	return STRUCT([pantheonV3(),T(3)(-__StairsHeight__),urbanFittings()])

VIEW(pantheonV4())