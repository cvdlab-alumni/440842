from pyplasm import *

border_ext = [[6.08,6.87],[69.51,6.87],[69.51,35.32],[6.08,35.32]]
border_center = [[6.6,7.38],[68.75,7.38],[68.75,34.57],[6.6,34.57]]
border_in = [[7.24,7.79],[68.33,7.79],[68.33,34.15],[7.24,34.15]]


def circle(r):
  def circle0(p):
    alpha = p[0]
    return [r*COS(alpha), r*SIN(alpha)]
  return circle0

EXT = AA(MK)(border_ext)
CENTER = AA(MK)(border_center)
IN = AA(MK)(border_in)
obj1 = T([1,2])([10,10])(MAP(circle(2))(INTERVALS(2*PI)(32)))
obj2 = T([1,2])([12,12])(MAP(circle(2))(INTERVALS(2*PI)(32)))

S = AA(JOIN)([EXT,CENTER,IN, obj1,obj2])

VIEW(STRUCT(AA(SKELETON(1))(S)))