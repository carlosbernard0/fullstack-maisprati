package modulo5.challenge8.ex8;

import java.util.ArrayList;

public class Main {
    static ArrayList<Funcionario> funcionarios = new ArrayList<>();

    public static void main(String[] args) {
        Gerente gerente = new Gerente("Carlos", 5000);
        Dev dev = new Dev("Bernardo", 3000);
        Estagiario estagiario = new Estagiario("Carlitos", 1500);

        funcionarios.add(gerente);
        funcionarios.add(dev);
        funcionarios.add(estagiario);

        calcularFolhaPagamento();

        Estagiario estagiario1 = new Estagiario("Mateus", 1000);
        Dev dev1 = estagiario1.promover();
        Gerente gerente1 = dev1.promover();

        gerente1.calcularSalario();
        System.out.println(gerente1);



    }

    public static void calcularFolhaPagamento(){
        for (int i = 0; i < funcionarios.size() ; i++) {
            funcionarios.get(i).calcularSalario();
        }
    }





}
