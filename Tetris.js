
document.addEventListener('DOMContentLoaded', ()=>{

    let first_div = document.querySelector(".grid")
    
    const num_colum = 9
    let start_pos = 2

    let current_rotation = 0

    const L_rorations = [[1,2,num_colum + 1, 2*num_colum + 1], [1,2,3,num_colum+3], [2*num_colum + 1, 2*num_colum + 2, num_colum + 2, 2 ],  
    [num_colum + 1, 2*num_colum + 1,2*num_colum +2, 2*num_colum + 3]] 
    
    const Z_rotations = [[num_colum + 1, num_colum+ 2, 2, 3], [1, num_colum + 1, num_colum + 2, 2*num_colum + 2],
    [num_colum + 1, num_colum+ 2, 2, 3], [1, num_colum + 1, num_colum + 2, 2*num_colum + 2]]

    const T_rotations = [[num_colum + 1, num_colum + 2, num_colum + 3, 2], [1, num_colum + 1, num_colum + 2,  2*num_colum + 1], 
    [1, 2, 3, num_colum + 2], [2, num_colum + 1, num_colum + 2,  2*num_colum + 2]]

    const square_rotations = [[1,2,num_colum+1,num_colum +2], [1,2,num_colum+1,num_colum +2], [1,2,num_colum+1,num_colum +2],
    [1,2,num_colum+1,num_colum +2]]

    const I_rotations = [[2, num_colum + 2, 2*num_colum + 2, 3*num_colum + 2], [1,2,3,4], [2, num_colum + 2, 2*num_colum + 2, 3*num_colum + 2], [1,2,3,4]]


    const tetrominoes = [L_rorations, Z_rotations, T_rotations, square_rotations, I_rotations]

    let select_piece = Math.floor(Math.random()*tetrominoes.length)
    let current_piece = tetrominoes[select_piece][current_rotation]


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

    function key_handler(e)
    {
        if(e.keyCode==37)
        {
            moveLeft()
        }
        else if(e.keyCode===38)
        {
            rotate_piece()
        }
        else if(e.keyCode==39)
        {
            moveRight()
        }
    }



    document.addEventListener('keyup', key_handler)

    
    
    setInterval(moveDown, 500)

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
            current_piece = tetrominoes[select_piece][current_rotation]
            start_pos = 2
            draw()
        }
    }

    function moveLeft()
    {
        undraw()
        const isAtLeftEdge = current_piece.some(index=>(start_pos + index)%num_colum==0)

        if(!isAtLeftEdge)
        {
            start_pos = start_pos -1
        }

        if(current_piece.some(index=>squares[start_pos + index].classList.contains('bottom_outside')))
        {
            start_pos+=1
        }
        draw()


    }

    function moveRight()
    {
        undraw()
        const rightEdge = num_colum-1
        const isAtRightEdge = current_piece.some(index=>(start_pos + index)%num_colum==rightEdge)

        if(!isAtRightEdge)
        {
            start_pos = start_pos + 1
        }

        if(current_piece.some(index=>{squares[start_pos + index].classList.contains('bottom_outside')}))
        {
            start_pos-=1
        }
        draw()


    }

    function rotate_piece()
    {
        undraw()
        current_rotation = (current_rotation+1)%4
        current_piece = tetrominoes[select_piece][current_rotation]
        draw()

    }
    
    
    

})
