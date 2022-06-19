//TODO: Stop pieces from falling out of the grid.
document.addEventListener('DOMContentLoaded', ()=>{

    let first_div = document.querySelector(".grid")
    
    const num_colum = 9
    let start_pos = 2

    const L_rorations = [[1,2,num_colum + 1, 2*num_colum + 1], [1,2,3,num_colum+3], [2*num_colum + 1, 2*num_colum + 2, num_colum + 2, 2 ], [num_colum + 1, 
        2*num_colum + 1,2*num_colum +2, 2*num_colum + 3]] 
    
    const Z_rotations = [[num_colum + 1, num_colum+ 2, 2, 3], [1, num_colum + 1, num_colum + 2, 2*num_colum + 2]]

    const T_rotations = [[num_colum + 1, num_colum + 2, num_colum + 3, 2], [1, num_colum + 1, num_colum + 2,  2*num_colum + 1], 
    [1, 2, 3, num_colum + 2], [2, num_colum + 1, num_colum + 2,  2*num_colum + 2]]

    const square = [[1,2,num_colum+1,num_colum +2]]

    const I_rotations = [[2, num_colum + 2, 2*num_colum + 2, 3*num_colum + 2], [1,2,3,4]]


    const tetrominoes = [L_rorations, Z_rotations, T_rotations, square, I_rotations]

    let select_piece = Math.floor(Math.random()*tetrominoes.length)
    let current_piece = tetrominoes[select_piece][0]


    for(let i = 0; i<162; i++)
    {
        first_div.appendChild(document.createElement("div"))
    }

    for(let i = 0; i<9; i++)
    {
        let new_cell = document.createElement("div")
        
        first_div.appendChild(new_cell)
        new_cell.className = "bottom_outside"
        new_cell.style.border = 0
    }

    let squares = Array.from(document.querySelectorAll(".grid div"))
    

    function draw()
    {
        current_piece.forEach(index=>{squares[start_pos + index].classList.add('tetromino')})
    }

    function undraw()
    {
        current_piece.forEach(index=>{squares[start_pos + index].classList.remove('tetromino')})
    }

    draw()
    
    setInterval(moveDown, 100)

    function moveDown()
    {
        undraw()
        start_pos+=num_colum
        draw()
        
        freeze()

    }

    function freeze()
    {
        if(current_piece.some(index=> squares[start_pos + index + num_colum].classList.contains('bottom_outside')))
        {
            current_piece.forEach(index=>squares[start_pos + index].classList.add('bottom_outside'))

            select_piece = Math.floor(Math.random()*tetrominoes.length)
            current_piece = tetrominoes[select_piece][0]
            start_pos = 2
            draw()
        }
    }

    
    
    

})
