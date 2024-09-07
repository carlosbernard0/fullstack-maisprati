package modulo5.class1;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");

        Scanner input = new Scanner(System.in);

        System.out.println("Digite um ano para ver se ele é bissexto:");
        int ano = input.nextInt();

        if(ano % 400 == 0){
            System.out.println("O ano é bissexto!");
        }else{
            System.out.println("O ano não é bissexto!");
        }
    }
}
