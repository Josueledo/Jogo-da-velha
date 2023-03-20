const celulas = document.querySelectorAll("td");
const end = document.querySelector(".end")
const container = document.querySelector(".container")
const h1 = document.querySelector("h1")

let tabuleiro = ["","","","","","","","",""]

let player = ["X","O"]

let vez = player[0]

let cont = 0

celulas.forEach((celula, index) =>{
    celula.addEventListener('click',() =>{
        if(celula.innerHTML === ''){
            celula.innerHTML = vez
            tabuleiro[index] += vez;
            checkWin()
            if(checkWin() == true){
                setTimeout(() =>{
                    // alert(vez + ' ganhou')
                    h1.innerHTML += vez + " ganhou"
                    end.style.display = 'flex'
                    container.style.display = 'flex'
                },150)
                
            }else{
                alternarPlayer()
                cont++;
            }
            checkDraw()
            return
        }
    })
})
function checkWin(){
    if(tabuleiro[0] === tabuleiro[1] && tabuleiro[1] === tabuleiro[2] && tabuleiro[2] != '' ||
        tabuleiro[3] === tabuleiro[4] && tabuleiro[4] === tabuleiro[5] && tabuleiro[4] != '' ||
        tabuleiro[6] === tabuleiro[7] && tabuleiro[7] === tabuleiro[8] && tabuleiro[7] != ''||

        tabuleiro[0] === tabuleiro[4] && tabuleiro[4] === tabuleiro[8] && tabuleiro[4] != '' ||
        tabuleiro[2] === tabuleiro[4] && tabuleiro[4] === tabuleiro[6] && tabuleiro[4] != '' ||

        tabuleiro[0] === tabuleiro[3] && tabuleiro[3] === tabuleiro[6] && tabuleiro[3] != ''||
        tabuleiro[1] === tabuleiro[4] && tabuleiro[4] === tabuleiro[7] && tabuleiro[4] != ''||
        tabuleiro[2] === tabuleiro[5] && tabuleiro[5] === tabuleiro[8] && tabuleiro[5] != ''

    ){return true}
 
}
function checkDraw(){
    if(cont === 9 && !checkWin()){
        setTimeout(() =>{
            h1.innerHTML += "Empate"
            end.style.display = 'flex'
            container.style.display = 'flex'
        },200)
    }
}
function alternarPlayer(){
    if(vez === player[0]){
        vez = player[1]
    }else if(vez === player[1]){
        vez = player[0]
    }
}
function restart(){
    window.location.reload();
}