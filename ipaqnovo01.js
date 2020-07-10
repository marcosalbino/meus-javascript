(function(){
	'use strict'
	var $listaInput = document.querySelectorAll('input');
	var $botaoResposta = document.getElementById('botaoResposta');
	var $botaoLimpar = document.getElementById('botaoLimpar');
	var $textoResultado = document.getElementById('textoResultado')

	$botaoResposta.addEventListener('click',avaliarIPAQ);
	$botaoLimpar.addEventListener('click',limparCampos);

	function avaliarIPAQ(){
		if (getDias("vigoroso")>=5 && getMinutos("vigoroso")>=30) {
			escreverTexto("Você é MUITO ATIVO!");
		} else if ((getDias("vigoroso")>=3 && getMinutos("vigoroso")>=20) && (getDias("moderada")>=5 && getMinutos("moderada")>=30)) {
			escreverTexto("Você é MUITO ATIVO!");
		} else if ((getDias("vigoroso")>=3 && getMinutos("vigoroso")>=20) && (getDias("caminhada")>=5 && getMinutos("caminhada")>=30)) {
			escreverTexto("Você é MUITO ATIVO!");
		} else if (getDias("vigoroso")>=3 && getMinutos("vigoroso")>=20) {
			escreverTexto("Você é ATIVO1!");
		} else if ((getDias("moderada")>=5 && getMinutos("moderada")>=30) || (getDias("caminhada")>=5 && getMinutos("caminhada")>=30)) {
			escreverTexto("Você é ATIVO!");
		} else if (((quantidadeDeDiasEmAtividade())>=5) && (tempoTotalEmAtividadeNaSemana()>=150)) {
			escreverTexto("Você é ATIVO!");
		} else if (((quantidadeDeDiasEmAtividade())==5) || (tempoTotalEmAtividadeNaSemana()==150)) {
			escreverTexto("Você é IRREGULARMENTE ATIVO A!");
		} else if (((quantidadeDeDiasEmAtividade())>0) || ((quantidadeDeMinutosEmAtividade())>0)) {
			escreverTexto("Você é IRREGULARMENTE ATIVO B!");
		} else {
			escreverTexto("Você é SEDENTÁRIO!");
		}				
	}
	
	function quantidadeDeDiasEmAtividade(){
		return getDias("moderada")+getDias("caminhada")+getDias("vigoroso");
	}
	
	function quantidadeDeMinutosEmAtividade() {
		return getMinutos("moderada")+getMinutos("caminhada")+getMinutos("vigoroso");
	}
	
	function tempoTotalEmAtividadeNaSemana() {
		var totalTreinadoNaSemanaModerado = getDias("moderada")*getMinutos("moderada");
		var totaltotalTreinadoNaSemanaCaminhada = getDias("caminhada")*getMinutos("caminhada");
		var totaltotalTreinadoNaSemanaVigoroso = getDias("vigoroso")*getMinutos("vigoroso");

		return totalTreinadoNaSemanaModerado+totaltotalTreinadoNaSemanaCaminhada+totaltotalTreinadoNaSemanaVigoroso;
	}

	function getDias(tipo){
		if (tipo==='caminhada') {return parseInt($listaInput[0].value);}
		if (tipo==='moderada') {return parseInt($listaInput[2].value);}
		if (tipo==='vigoroso') {return parseInt($listaInput[4].value);}
	}

	function getMinutos(tipo){
		if (tipo==='caminhada') {return parseInt($listaInput[1].value);}
		if (tipo==='moderada') {return parseInt($listaInput[3].value);}
		if (tipo==='vigoroso') {return parseInt($listaInput[5].value);}
	}
	
	function limparCampos(){
			for (var i = 0; i<6; i++) {document.getElementById($listaInput[i].id).value="0";}
			escreverTexto("");
	}

	function escreverTexto(texto){
				document.getElementById("textoResultado").value = texto;
	}
})();
