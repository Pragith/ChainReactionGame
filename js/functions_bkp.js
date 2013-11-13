function alloc_max_size(size){
	cell_max_size = []

	data = '<table class="table table-bordered table-condensed col-md-4">'
	for (i=0;i<size;i++){
		cell_max_size[i] = []
				
		data += '<tr>';
		for (j=0;j<size;j++){
			if (i==0 || i==size-1 || j==0 || j==size-1){
				cell_max_size[i][j] = 2
				data += '<td>'+cell_max_size[i][j]+'</td>'
			}
			else{
				cell_max_size[i][j] = 3
				data += '<td>'+cell_max_size[i][j]+'</td>'
			}
		}
		data += '</tr>';
	}	
	data += '</table>'
	$("#refTable").append(data)
}