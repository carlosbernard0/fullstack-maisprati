package modulo5.challenge8.ex7;

abstract class FormaPagamento {

    private double value;

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    abstract void processarPagamento(double valor);
    abstract void validarPagamento();


}
