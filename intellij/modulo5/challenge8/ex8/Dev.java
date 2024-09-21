package modulo5.challenge8.ex8;

public class Dev extends Funcionario{
    public Dev(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    void calcularSalario() {
        setBonus(5);
        double salario = getSalario();
        double salarioComBonus = salario + (salario*getBonus());
        setSalario(salarioComBonus);
        System.out.println("Seu salario calculado: " +getSalario());
    }


    public Gerente promover(){
        return new Gerente(getNome(), getSalario());
    }
}
