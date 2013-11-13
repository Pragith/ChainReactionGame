function show_table(){
	
	current_cell_size = []
	
	data = '<table class="table table-bordered table-condensed col-md-4">'
	for (i=0;i<size;i++){
		current_cell_size[i] = []
		data += '<tr>';
		for (j=0;j<size;j++){
			current_cell_size[i][j] = 0
			data += '<td><a href="#" onclick="increase_cell_size('+i+','+j+')">0</a><sup>'+get_max_cell_size(i,j)+'</sup></td>'
		}
		data += '</tr>';
	}	
	data += '</table>'
	localStorage["current_cell_size"] = JSON.stringify(current_cell_size)
	$("#refTable").append(data)
}



function increase_cell_size(i,j){
	
	current_cell_size = JSON.parse(localStorage["current_cell_size"])
	console.log('Cell: '+current_cell_size[i][j])
	if (get_max_cell_size(i,j+1) != 'x'){
		console.log('Increasing the size of: '+i+','+(j+1))
	}
	if (get_max_cell_size(i,j-1)  != 'x'){
		console.log('Increasing the size of: '+i+','+(j-1))
	}
	if (get_max_cell_size(i+1,j) != 'x'){
		console.log('Increasing the size of: '+(i+1)+','+j)
	}
	if (get_max_cell_size(i-1,j) != 'x'){
		console.log('Increasing the size of: '+(i-1)+','+j)
	}		

}


function get_max_cell_size(i,j){
	if (i==0 || i==size-1 || j==0 || j==size-1)
		return 2
	else if (i == size || i == -1){
		console.log("x")
		return 'x'
	}
	else if (j == size || j == -1) {
		console.log("x")
		return 'x'
	}
	else
		return 3
}

