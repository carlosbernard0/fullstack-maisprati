package modulo5.challenge8.ex3ex4;

public class Main {
    public static void main(String[] args) {

        Gerente jorge = new Gerente();
        jorge.salario = 1000;

        System.out.println(jorge.calcularBonus());

        Dev pedro = new Dev();
        pedro.salario = 2000;

        System.out.println(pedro.calcularBonus());

        jorge.trabalhar();
        pedro.trabalhar();

    }
}
