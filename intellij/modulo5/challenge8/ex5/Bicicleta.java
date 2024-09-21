package modulo5.challenge8.ex5;

public class Bicicleta implements IMeioTransporte {

    @Override
    public void acelerar() {
        System.out.println("Vrum-vrum bike acelerando... ");
    }

    @Override
    public void freiar() {
        System.out.println("bike freiando....");
    }
}
