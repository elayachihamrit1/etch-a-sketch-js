	

	const drawBoard = document.querySelector('.board');
	const pen = document.querySelector('.pen');
	const eraser = document.querySelector('.eraser');
	const reset = document.querySelector('.reset');
	const color = '#0DABDD';
	let isDrawing = false;

	createGrid(32);



	function createGrid(size) {
		

		for(i = 0 ; i < size * size; i++) {
			
			let cell = document.createElement('div');

			drawBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
			drawBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
			cell.classList.add('cell');
			drawBoard.append(cell);
		
			cell.addEventListener('mousedown', () => {
				isDrawing = true;
				cell.style.backgroundColor = `${color}`;
			});

			cell.addEventListener('mouseenter', () => {
				
				if(isDrawing) {
				cell.style.backgroundColor = `${color}`;
				}
				
			});

			cell.addEventListener('mouseup', () => {
				isDrawing = false;
			});

		}
	}


		function draw(e) {
		}	

