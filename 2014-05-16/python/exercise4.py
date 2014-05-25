from exercise1 import * 

import itertools

def diagram2cell(diagram,master,cell):
   mat = diagram2cellMatrix(diagram)(master,cell)
   diagram =larApply(mat)(diagram)  
   
   """
   # yet to finish coding
   V, CV1, CV2, n12 = vertexSieve(master,diagram)
   masterBoundaryFaces = boundaryOfChain(CV,FV)([cell])
   diagramBoundaryFaces = lar2boundaryFaces(CV,FV)
 """ 
   eliminated = []
   V = master[0]
   for elem in diagram[0]:
   	if elem not in V:
   		V.append(elem)
   	else:
   		eliminated.append(elem)

#   V = master[0] + diagram[0]

   offset = len(master[0])
   CV = [c for k,c in enumerate(master[1]) if k != cell] 

   
   for c in diagram[1]:
   	for v in c: 
   		extra = []
   		if v not in eliminated:
   			extra.append(v+offset)
   	print(extra)
   	print(extra)
   	print(extra)
   	#CV.append([extra])

   master = V, CV
   return master


####################################################################
#   				TEST
####################################################################

shape = [2,2,2]
sizePatterns = [ [5,5],
                 [10,10],
                 [4,4]
               ]
master = assemblyDiagramInit(shape)(sizePatterns)

shape = [5,5,2]
sizePatterns = [ [1,1,1,1,1],
                 [2,2,2,2,2],
                 [2,2]
               ]
diagram = assemblyDiagramInit(shape)(sizePatterns)


VIEW_CELL(master)
VIEW_CELL(diagram)

VIEW(SKEL_1(STRUCT(MKPOLS(diagram2cell(diagram,master,1)))))



