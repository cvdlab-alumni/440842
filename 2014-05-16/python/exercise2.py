from exercise1 import *

__depthWall__   = 0.3
__heightFloor__ = 2.8

apartment = STRUCT(MKPOLS(build_apartment()))

floor = STRUCT([ COMP([T([1])([-3]),S([1])([-1])]) (apartment) , apartment ])

VIEW(floor)

building = STRUCT( NN(8)([floor, T([3])(__heightFloor__+__depthWall__)]) )

VIEW(building)