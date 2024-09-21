package modulo5.challenge8.ex5;

public class Carro implements IMeioTransporte{

    @Override
    public void acelerar() {
        System.out.println("Vrum-vrum carro acelerando... ");
    }

    @Override
    public void freiar() {
        System.out.println("carro freiando....");
    }
}
