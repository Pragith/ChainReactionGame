function show_table(size){
	
	console.log(get_max_cell_size(size)[3][4])
	current_cell_size = []
	
	data = '<table class="table table-bordered table-condensed col-md-4">'
	for (i=0;i<size;i++){
		current_cell_size[i] = []
		data += '<tr>';
		for (j=0;j<size;j++){
			current_cell_size[i][j] = 0
			data += '<td><a href="#" onclick="increase_cell_size('+i+','+j+')">0</a></td>'
			//data += '<td>'+i+','+j+'<a href="#" onclick="increase_size('+i+','+j+')">0</a></td>'
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
	localStorage["current_cell_size"][i][j+1] += 1;
	localStorage["current_cell_size[i][j-1]"] += 1;
	localStorage["current_cell_size[i+1][j]"] += 1;
	localStorage["current_cell_size[i-1][j]"] += 1;
	console.log('Increasing the size of: '+i+','+(j+1))
	console.log('Increasing the size of: '+i+','+(j-1))
	console.log('Increasing the size of: '+(i+1)+','+j)
	console.log('Increasing the size of: '+(i-1)+','+j)
	//localStorage.setItem("current_cell_size",current_cell_size)

}





function get_max_cell_size(size){
	cell_max_size = []
	for (i=0;i<size;i++){
		cell_max_size[i] = []
		for (j=0;j<size;j++)
			if (i==0 || i==size-1 || j==0 || j==size-1)
				cell_max_size[i][j] = 2
			else
				cell_max_size[i][j] = 3
	}	
	//console.log(cell_max_size[4][9])
	return cell_max_size
}
