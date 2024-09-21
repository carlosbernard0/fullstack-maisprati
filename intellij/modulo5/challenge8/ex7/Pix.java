package modulo5.challenge8.ex7;

public class Pix extends FormaPagamento{
    @Override
    void processarPagamento(double valor) {
        System.out.println("Processando pagamento de "+ valor+ " reais");
        System.out.println("Me mande o comprovante por favor");
        setValue(valor);
    }

    @Override
    void validarPagamento() {
        System.out.println("Pagamento com pix realizado com sucesso!");
    }
}
