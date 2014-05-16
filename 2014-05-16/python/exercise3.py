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