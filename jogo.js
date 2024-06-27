//Variaveis Necessarias
	var	altura = 0
	var	largura = 0
	var vidas = 1
	var tempo = 15
	var criaMosquitoTempo = 1500
	var nivel = window.location.search
	nivel = (nivel.replace('?',''))

	if(nivel ==='d1'){
		criaMosquitoTempo = 2000
	}else if(nivel === 'd2'){
		criaMosquitoTempo = 1000
	}else if(nivel ==='d3') {
		criaMosquitoTempo = 750
	}

 function ajustaTamanhoPalcoJogo(){
	 altura = window.innerHeight
	 largura = window.innerWidth
	}
 ajustaTamanhoPalcoJogo()

 	var cronometro = setInterval(function(){
			tempo-=1
			if(tempo < 0){
				clearInterval(cronometro)
				clearInterval(criaMosca)
				window.location.href = 'vitoria.html'
			} else {
				document.getElementById('cronometro').innerHTML = tempo
			}
		},1000)
			
function posicaorandom(){

	//remover mosquito caso exista
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if (vidas > 3){
			window.location.href ="fim_de_jogo.html"
		}
		else{
		document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png" //vidinhas
			vidas++
		}
	}
		//criando aleatoriedade//
	var posicaoX = Math.floor(Math.random() * largura) -90
	var posicaoY = Math.floor(Math.random() * altura) -90

	 posicaoX = posicaoX <0? 0: posicaoX
	 posicaoY = posicaoY <0? 0: posicaoY
	//Criar o Elemento HTML
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = TamanhoAleatorio() +' ' +  LadoAleatorio()
 	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id ='mosquito'
	mosquito.onclick= function(){
		this.remove()
	}

	document.body.appendChild(mosquito)

	TamanhoAleatorio()
}
	
//	function ajustaTamanhoDoPalcoJogo(){
	
//	}

//tamanho aleatorio do mosquitin
 function TamanhoAleatorio(){
 	var classe = Math.floor(Math.random() * 3)

 	switch(classe){
 		case 0:
 			return 'mosquito1'

 		case 1:
 			return 'mosquito2'

 		case 2:
 			return 'mosquito3'
 	}
 }
 //mosquito olha para dois lados
  function LadoAleatorio(){
  	 	var classe = Math.floor(Math.random() * 2)

 	switch(classe){
 		case 0:
 			return 'ladoA'

 		case 1:
 			return 'ladoB'
  }
}
