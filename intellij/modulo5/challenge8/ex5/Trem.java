package modulo5.challenge8.ex5;

public class Trem implements IMeioTransporte{

    @Override
    public void acelerar() {
        System.out.println("Vrum-vrum trem acelerando... ");
    }

    @Override
    public void freiar() {
        System.out.println("trem freiando....");
    }
}
