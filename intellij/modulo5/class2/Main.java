package modulo5.class2;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);


        //Revert Array

//        int[] listCount = new int[3];
//        for (int i = 0; i < listCount.length; i++) {
//            listCount[i] = i+1;
//            System.out.println(listCount[i]);
//        }
//
//        System.out.println("Revert Array");
//        int[] listReverted = new int[3];
//        for (int i = 0; i < listReverted.length; i++) {
//            listReverted[i] = listCount[listCount.length-i-1];
//            System.out.println(listReverted[i]);
//        }

        //Adicionar elementos no array
//        int[] numbers = new int[5];
//        for (int i = 0; i < numbers.length; i++) {
//            numbers[i] = i+1;
//            System.out.println(numbers[i]);
//        }

        //Remover elementos do array
//        int[] numbersWithoutFive = new int[4];
//        for (int i = 0; i < numbers.length; i++) {
//            if(numbers[i] != 5){
//                numbersWithoutFive[i] = numbers[i];
//            }
//            System.out.println(numbersWithoutFive[i]);
//        }


        //Pesquisar elemento do array
//        int elementoPesquisa = 2;
//        for (int i = 0; i < numbers.length; i++) {
//            if(numbers[i] == elementoPesquisa){
//                System.out.println("Elemento da pesquisa encontrado: "+ elementoPesquisa);
//            }
//        }


        int[][] elements = {
                {1,2,3},
                {4,5,6},
                {7,8,9}
        };
        //soma de diagonal principal
        int primarySum = 0;
        for (int i = 0; i < elements.length ; i++) {
            for (int j = 0; j < elements[i].length ; j++) {
                if(j == i){
                    primarySum+= elements[i][j];
                }
            }
        }

        System.out.println("result of main sum: "+ primarySum);



        //soma de diagonal secundaria
        int secundarySum = 0;
        for (int i = 0; i < elements.length ; i++) {
            secundarySum += elements[i][elements.length-1-i];
        }

        System.out.println("result secundary sum: " +secundarySum);

        //rotacionar a matriz

        System.out.println("Matrix rotate 90");
        for (int i = 0; i < elements.length; i++) {
            System.out.println(elements[2][i] + " "+ elements[1][i] + " " + elements[0][i]);
        }

    }
}
