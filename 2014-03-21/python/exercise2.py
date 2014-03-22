from pyplasm import *

H = 30

cilindro = T([1,2])([27.23,9.86])(SKEL_1(MY_CYLINDER([15.91,H])(32)))

VIEW(cilindro)