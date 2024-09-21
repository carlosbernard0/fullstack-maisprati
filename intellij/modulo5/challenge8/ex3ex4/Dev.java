package modulo5.challenge8.ex3ex4;

public class Dev extends Funcionario {
    public double calcularBonus(){
        return salario *.1;
    }


    @Override
    public void trabalhar(){
        System.out.println("Estou desenvolvendo um sistema");
    }
}
