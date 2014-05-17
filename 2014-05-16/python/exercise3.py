def VIEW_CELL(diagram):
	V,CV = diagram
	hpc = SKEL_1(STRUCT(MKPOLS(diagram)))
	hpc = cellNumbering (diagram,hpc)(range(len(CV)),CYAN,2)
	return VIEW(hpc)

def MERGE_CELL(master,diagrams,toMerge):
	V,CV = master
	for i in range(len(CV))[::-1]:
		if i in toMerge:
			k = toMerge.index(i)
			master = diagram2cell(diagrams[k],master,toMerge[k])
	return master

def REMOVE_CELL((V,CV),toRemove):
	return V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]


"""
  VMR_CELL : funzione per automatizzare la fase di eliminazione delle "cell" di un diagramma master 
             e la fusione di eventuali "diagrams" che si vogliono fondere al master.
             master : diagramma master a cui si vogliono fondere o eliminare le "cell"
             diagrams : lista di diagrammi che si vogliono fondere con il master
             toMerge : lista di celle del master che si vogliono fondere con i diagrams
             toRemove : lista di celle del master che si vogliono eliminare

             OSS: la relazione che lega "diagrams" con "toMerge" è data dalla posizione dei suoi elementi,
                  il diagrams[i] che si vuole fondere alla toMerge[i] cell del master 
"""

def VMR_CELL(master, diagrams, toMerge, toRemove=[]):
	VIEW_CELL(master)
	assert len(diagrams)==len(toMerge)

	if(len(toMerge)>0 and len(toRemove)>0):
		for i in range(len(toMerge)):
			count = 0
			for r in toRemove:
				if r<toMerge[i]:
					count += 1
			toMerge[i] -= count

	master = REMOVE_CELL(master,toRemove)
	master = MERGE_CELL(master,diagrams,toMerge)
	
	return master