package modulo5.challenge8.ex5;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<IMeioTransporte> arrayList = new ArrayList<>();

        Carro carro= new Carro();
        Trem trem = new Trem();
        Bicicleta bicicleta = new Bicicleta();

        arrayList.add(carro);
        arrayList.add(trem);
        arrayList.add(bicicleta);

        for (int i = 0; i < arrayList.size(); i++) {
            arrayList.get(i).acelerar();
            arrayList.get(i).freiar();
        }

    }
}
