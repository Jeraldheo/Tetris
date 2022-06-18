document.addEventListener('DOMContentLoaded', ()=>{

    let first_div = document.querySelector("div")
    
    const num_colum = 9
    const start_pos = 2

    const L_rorations = [[1,2,num_colum + 1, 2*num_colum + 1], [1,2,3,num_colum+3], [2*num_colum + 1, 2*num_colum + 2, num_colum + 2, 2 ], [num_colum + 1, 
        2*num_colum + 1,2*num_colum +2, 2*num_colum + 3]] 
    
    const Z_rotations = [[num_colum + 1, num_colum+ 2, 2, 3], [1, num_colum + 1, num_colum + 2, 2*num_colum + 2]]

    const T_rotations = [[num_colum + 1, num_colum + 2, num_colum + 3, 2], [1, num_colum + 1, num_colum + 2,  2*num_colum + 1], 
    [1, 2, 3, num_colum + 2], [2, num_colum + 1, num_colum + 2,  2*num_colum + 2]]

    const square = [[1,2,num_colum+1,num_colum +2]]

    const I_rotation = [[2, num_colum + 2, 2*num_colum + 2, 3*num_colum + 2], [1,2,3,4]]


    const tetrominoes = [L_rorations, Z_rotations, T_rotations, square, I_rotation]

    let select_piece = Math.floor(Math.random()*tetrominoes.length)
    let current_piece = tetrominoes[select_piece][0]


    for(let i = 0; i<200; i++)
    {
        first_div.appendChild(document.createElement("div"))
    }

    let squares = Array.from(document.querySelectorAll(".grid div"))
    

    function draw()
    {
        current_piece.forEach(index=>{squares[start_pos + index].classList.add('tetromino')})
    }
    
    draw()





})
