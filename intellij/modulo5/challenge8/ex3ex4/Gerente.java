package modulo5.challenge8.ex3ex4;

public class Gerente extends Funcionario{
    public double calcularBonus(){
        return salario *.2;
    }

    @Override
    public void trabalhar(){
        System.out.println("Estou em reuniao");
    }
}
