package modulo5.challenge8.ex1ex2;

public class Main {
    public static void main(String[] args) throws Exception {
        Produto skate = new Produto("Skate");

        skate.setPreco(200.00);

        skate.setQuantidade(9);

        skate.aplicarDesconto(50);

        System.out.println(skate);
    }
}
