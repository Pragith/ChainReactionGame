function show_table(){	
	data = '<table class="table table-bordered table-condensed">'
	for (i=0;i<size;i++){		
		data += '<tr>';
		for (j=0;j<size;j++){
			data += '<td><a href="#" onclick="increase_cell_size('+i+','+j+')"><img src="img/p1-'+store.get("cell"+i+j)+'.png"></a></td>'
			//data += '<td><a href="#" onclick="increase_cell_size('+i+','+j+')"><img src="img/p1-'+store.get("cell"+i+j)+'.png"></a><sup>'+get_max_cell_size(i,j)+'</sup></td>'
		}
		data += '</tr>';
	}	
	data += '</table>'
	$("#refTable").append(data)
}


function increase_cell_size(i,j){
	//Increase till maximum cell size is reached		
	if (store.get("cell"+i+j) < get_max_cell_size(i,j)){
		store.set("cell"+i+j, store.get("cell"+i+j)+1)	 // Increase the size of current cell by 1
	}
	//Explode to other cells
	else{
		store.set("cell"+i+j, 0) //Set current cell to zero
		explode(i,j)			 //Explode
	}
	// --- ISSUE - 1 Recursion required somewhere ---
	//window.location.reload()
	check_cells()
}


function check_cells(){
	for (i=0;i<size;i++)
		for (j=0;j<size;j++){
			// Check each cell whether its current size is more than max size
			if (store.get("cell"+i+j) > get_max_cell_size(i,j)){
				explode(i,j)
			}	
	}		
	window.location.reload()
}











// ---- MISC ----

function explode(i,j){
	if (get_max_cell_size(i,j+1) != 'x'){
		store.set("cell"+i+(j+1), store.get("cell"+i+(j+1))+1)
	}
	if (get_max_cell_size(i,j-1)  != 'x'){
		store.set("cell"+i+(j-1), store.get("cell"+i+(j-1))+1)
	}
	if (get_max_cell_size(i+1,j) != 'x'){
		store.set("cell"+(i+1)+j, store.get("cell"+(i+1)+j)+1)
	}
	if (get_max_cell_size(i-1,j) != 'x'){
		store.set("cell"+(i-1)+j, store.get("cell"+(i-1)+j)+1)
	}	
}

function get_max_cell_size(i,j){
	if (i == size || i == -1 || j == size || j == -1)
		return 'x'
	if (i==0 || i==size-1 || j==0 || j==size-1)
		return 2	
	else
		return 3
}

function new_game(){
	store.clear()
	for (i=0;i<size;i++)
		for (j=0;j<size;j++)
			store.set('cell'+i+j,0)
	window.location.reload()
}