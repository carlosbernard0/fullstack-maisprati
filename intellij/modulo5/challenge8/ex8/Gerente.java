package modulo5.challenge8.ex8;

public class Gerente extends Funcionario{


    public Gerente(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    void calcularSalario() {
        setBonus(10);
        double salario = getSalario();
        double salarioComBonus = salario + (salario*getBonus());
        setSalario(salarioComBonus);
        System.out.println("Seu salario calculado: " +getSalario());
    }


}
