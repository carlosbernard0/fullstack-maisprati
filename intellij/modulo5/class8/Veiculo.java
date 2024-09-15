package modulo5.class8;

public class Veiculo {
    private TipoVeiculo tipoVeiculo;
    private String nome;
    private Integer qtdRodas;

    public Veiculo(TipoVeiculo tipoVeiculo, String nome){
        this.tipoVeiculo = tipoVeiculo;
        this.nome = nome;
    }

    public TipoVeiculo getTipoVeiculo(){
        return this.tipoVeiculo;
    }

    public void setTipoVeiculo(TipoVeiculo tipoVeiculo){
        this.tipoVeiculo = tipoVeiculo;
    }

    public String getNome(){
        return this.nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public Integer getQtdRodas(){
        return this.qtdRodas;
    }

    public void setQtdRodas(Integer qtdRodas){
        this.qtdRodas = qtdRodas;
    }


}
