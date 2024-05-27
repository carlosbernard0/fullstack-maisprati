const prompt = require('prompt-sync')();
let HotelFactory= function(id,nome,cidade,quartosTotais,quartosDisponiveis) {
    return{
        id,nome,cidade,quartosTotais,quartosDisponiveis
    }    
}

let ReservaFactory= function(idReserva,idHotel,nomeCliente) {
    return{
        idReserva,idHotel,nomeCliente
    }    
}

let hoteis = [];
let reservas = [];

let option = 1;
console.log("Bem vindo ao sistema de reservas de hotéis");
do{
    console.log();
    console.log('0 - Sair;');
    console.log('1 - Adicionar hotel;');
    console.log('2 - Buscar hoteis por cidade;');
    console.log('3 - Fazer reserva;');
    console.log('4 - Cancelar reserva;');
    console.log('5 - Listar reservas;');
    console.log();
    let optionSwitch = parseInt(prompt('Selecione a opção desejada:'));

    switch(optionSwitch){
        case 0:
            option = 0;
            break; 
        case 1:
            let idHotel = hoteis.length+1;
            let nomeHotel = prompt('Digite um nome para o hotel:');
            let cidadeHotel = prompt('Digite a cidade do hotel:');
            let quantidadeQuartos = prompt('Digite a quantidade de quartos para o hotel:');
            let hotel = HotelFactory(idHotel,nomeHotel,cidadeHotel,quantidadeQuartos,quantidadeQuartos);
            hoteis.push(hotel);
            console.log('Hotel '+nomeHotel+' adicionado!!!');
            break;
        case 2: 
            let cidadeProcurada = prompt('Digite a cidade que você deseja fazer a busca:');
            let hoteisDaCidade = []
            for (let i = 0; i < hoteis.length; i++) {
                if(hoteis[i].cidade == cidadeProcurada){
                    hoteisDaCidade.push(hoteis[i]);
                }
                
            }
            console.log(hoteisDaCidade);
            break;

        case 3: 
            let nomeHotelEscolhido = prompt('Digite o nome do hotel para a reserva:');
            let hotelEncontrado;
            let idHotelParaReserva;
            for (let i = 0; i < hoteis.length; i++) {
                if(hoteis[i].nome == nomeHotelEscolhido){
                    if(hoteis[i].quartosDisponiveis < 1){
                        console.log('Desculpe mas este hotel nao possui reservas disponiveis!');
                        break;
                    }else{
                        hoteis[i].quartosDisponiveis--;
                        hotelEncontrado = hoteis[i];
                        idHotelParaReserva= hotelEncontrado.id;

                    }
                }else{
                    console.log('Hotel não encontrado!')
                }
            }

            if(hotelEncontrado == undefined){
                let idReserva = reservas.length+1;
                let nomeClienteReserva = prompt('Digite seu nome:');
                let reserva = ReservaFactory(idReserva,idHotelParaReserva,nomeClienteReserva);
                reservas.push(reserva);
                console.log('Reserva adicionada com sucesso!');
                console.log('Seu id da reserva: '+idReserva);
            }
            break;
        case 4:
            let idReservaCancelada = prompt('Digite o id da reserva que voce deseja cancelar: ');
            for (let i = 0; i < reservas.length; i++) {
                if(idReservaCancelada == reservas[i].idReserva){
                    reservas.splice(i,1);
                    for (let j = 0; j < hoteis.length; j++) {
                        if(hoteis[j].id == reservas[i].idHotel){
                            hoteis[i].quartosDisponiveis++;
                        }
                        
                    }
                }                
            }

        console.log('Reserva cancelada!!!');
            break;
        case 5:
            for (let i = 0; i < reservas.length; i++) {
                console.log('Dados reserva: ');
                console.log(reservas[i]);
                let idOfHotel =reservas[i].idHotel;
                for (let j = 0; j < hoteis.length; j++) {
                    if(hoteis[j].id == idOfHotel){
                        console.log('Dados do hotel reservado: ');
                        console.log(hoteis[j]);
                    }
                }
            }
            break;
    }
}while(option != 0);