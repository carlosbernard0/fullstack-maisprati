package modulo5.challenge8.ex8;

public class Estagiario extends Funcionario{
    public Estagiario(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    void calcularSalario() {
        setBonus(1);
        double salario = getSalario();
        double salarioComBonus = salario + (salario*getBonus());
        setSalario(salarioComBonus);
        System.out.println("Seu salario calculado: " +getSalario());
    }

    public Dev promover(){
        return new Dev(getNome(), getSalario());
    }

}
