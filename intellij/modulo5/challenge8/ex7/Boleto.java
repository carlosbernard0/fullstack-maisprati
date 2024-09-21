package modulo5.challenge8.ex7;

public class Boleto extends FormaPagamento{

    private int diasVencimento;
    @Override
    void processarPagamento(double valor) {
        System.out.println("Processando pagamento de "+ valor+ " reais");
        System.out.println("Desconto especial para voce que esta pagando com boleto");
        valor *= .5;
        setValue(valor);

    }

    @Override
    void validarPagamento() {
        System.out.println("Valor total a pagar foi " + getValue() );
    }
}
