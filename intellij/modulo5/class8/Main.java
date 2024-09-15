package modulo5.class8;

import java.util.ArrayList;
import java.util.Objects;
import java.util.Scanner;

public class Main {
    public static ArrayList<ContaBancaria> contasBancarias = new ArrayList<>();

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        ContaBancaria contaAtual;

        System.out.println("Seja bem vindo!");

        int opcao = -1;
        while (opcao != 0){
            System.out.println("""
                    0- sair
                    1- depositar
                    2- sacar
                    3- transferir
                    4- exibir extrato
                    5- registrar conta
                    
                    digite uma opcao:
                    """);
            opcao = input.nextInt();

            switch (opcao){
                default: break;
                case 0: continue;
                case 1:
                    System.out.println("QUal é o nome da sua conta?");
                    contaAtual = perguntarConta(input.nextLine());
                    System.out.println("Escolha o valor para deposito: ");
                    int depositValue = input.nextInt();
                    contaAtual.depositar(depositValue);
                    break;
                case 2:
                    System.out.println("QUal é o nome da sua conta?");
                    contaAtual = perguntarConta(input.nextLine());
                    System.out.println("Escolha o valor para sacar: ");
                    int value = input.nextInt();
                    contaAtual. sacar(value);
                    break;
                case 3:
                    System.out.println("QUal é o nome da sua conta?");
                    contaAtual = perguntarConta(input.nextLine());
                    System.out.println("Digite o nome da conta que voce quer transferir:");
                    String nomeContaATransferir = input.nextLine();
                    System.out.println("Digite o valor que voce quer transferir:");
                    ContaBancaria contaATransferir = new ContaBancaria(nomeContaATransferir);

                    int valorATransferir = input.nextInt();
                    contaAtual.transferir(valorATransferir);

                    atualizarLista(contaAtual, contaATransferir);
                    break;
                case 4:
                    System.out.println("QUal é o nome da sua conta?");
                    contaAtual = perguntarConta(input.nextLine());
                    contaAtual.exibirExtrato();
                    break;
                case 5:
                    System.out.println("Digite o nome para a conta nova");
                    String nomeContaNova = input.nextLine();
                    registrarConta(nomeContaNova);

                    break;

            }
        };
    }

    private static void registrarConta(String nomeNovaConta){
        ContaBancaria contaNova = new ContaBancaria(nomeNovaConta);
        contasBancarias.add(contaNova);
    }

    public static ContaBancaria perguntarConta(String nomeConta){
        for (int i = 0; i < contasBancarias.size(); i++) {
            if(Objects.equals(contasBancarias.get(i).getTitular(), nomeConta)){
                return contasBancarias.get(i);
            }
        }

        System.out.println("Não foi possivel achar uma conta com esse nome...");
        return null;
    }

    public static void atualizarLista(ContaBancaria contaAtual, ContaBancaria contaATransferir){
        for (int i = 0; i < contasBancarias.size(); i++) {
            if(Objects.equals(contasBancarias.get(i).getTitular(), contaAtual.getTitular())){
                contasBancarias.get(i).setSaldo(contaAtual.getSaldo());
            }
            if(Objects.equals(contasBancarias.get(i).getTitular(), contaATransferir.getTitular())){
                contasBancarias.get(i).setSaldo(contaATransferir.getSaldo());
            }
        }
    }
}
