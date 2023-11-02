	

	const drawBoard = document.querySelector('.board');
	const pen = document.querySelector('.pen');
	const eraser = document.querySelector('.eraser');
	const reset = document.querySelector('.reset');
	const paintColor = '#0DABDD';
	
	let drawingMode = false;
	let erasingMode = false;

	createGrid(32);

	function createGrid(size) {

		for(i = 0 ; i < size * size; i++) {
			
			let cell = document.createElement('div');

			drawBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
			drawBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
			cell.classList.add('cell');
			drawBoard.append(cell);
		
			cell.addEventListener('mousedown', () => {
				drawingMode = true;
				erasingMode = eraser.classList.contains(`active`); // true
				updateCell(cell);
			});

			cell.addEventListener('mouseenter', () => {
					
					if(drawingMode) {
						updateCell(cell);
					}
			});

			cell.addEventListener('mouseup', () => {
				drawingMode = false;
			});


	function updateCell(cell) {

		if(erasingMode) {
			cell.style.backgroundColor = `#fff`;
		
		} else {
			cell.style.backgroundColor = `${paintColor}`;
		}

	}	

		}
	}


	eraser.addEventListener('click', () => {
	eraser.classList.add('active');		
	pen.classList.remove('active');	
	drawingMode = false;
	erasingMode = true;	


	});

	pen.addEventListener('click', () => {
	drawingMode = false;	
	erasingMode = false;	

	pen.classList.add('active');
	eraser.classList.remove('active');		
		
	});

