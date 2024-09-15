package modulo5.class8;

import java.util.ArrayList;

public class ContaBancaria {

    private int saldo;

    private String titular;

    private ArrayList<String> extratoFinanceiro;


    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public ArrayList<String> getExtratoFinanceiro() {
        return extratoFinanceiro;
    }

    public void setExtratoFinanceiro(ArrayList<String> extratoFinanceiro) {
        this.extratoFinanceiro = extratoFinanceiro;
    }

    public ContaBancaria(String titular) {
        this.saldo = 0;
        this.titular = titular;
    }

    public int getSaldo() {
        return saldo;
    }

    public void setSaldo(int saldo) {
        this.saldo = saldo;
    }



    public void depositar(int depositValue){
        if(depositValue <= 0){
            System.err.print("Você deve escolher um valor maior que 0!");
        }else {

            this.saldo += depositValue;
            String mensagem = "Saldo atualizado: " + this.saldo;
            registrarExtrato(mensagem);
            System.out.println(mensagem);

        }
    }

    public void sacar(int value){
        if(value > this.saldo){
            System.err.print("O valor do saque deve ser menor que seu saldo atual");
        }else{
            this.saldo -= value;
            String mensagem = "Saldo atualizado: " + this.saldo;
            registrarExtrato(mensagem);

            System.out.println(mensagem);
        }
    }

    public void transferir(int valorATransferir){
        this.saldo -= valorATransferir;


    }

    public void exibirExtrato(){
        for (int i = 0; i < extratoFinanceiro.size(); i++) {
            System.out.println("Extrato: "+ extratoFinanceiro.get(i));
        }
    }
    public void registrarExtrato(String mensagem){
        this.extratoFinanceiro.add(mensagem);
    }


}
