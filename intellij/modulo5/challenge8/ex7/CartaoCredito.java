package modulo5.challenge8.ex7;

public class CartaoCredito extends FormaPagamento{
    @Override
    void processarPagamento(double valor) {
        System.out.println("Processando pagamento de "+ valor+ " reais");
        setValue(valor);

    }

    @Override
    void validarPagamento() {
        System.out.println("Pagamento processado com sucesso: " + getValue());
    }
}
