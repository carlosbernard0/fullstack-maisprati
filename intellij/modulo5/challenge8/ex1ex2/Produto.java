package modulo5.challenge8.ex1ex2;

public class Produto {
    private String nome;
    private double preco;
    private Integer quantidade;

    public Produto(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        if(preco < 0){
            return;
        }
        this.preco = preco;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        if(quantidade < 0){
            return;
        }
        this.quantidade = quantidade;
    }

    public void aplicarDesconto( double porcentagem) throws Exception {
        if(porcentagem > 100){
            throw new Exception("Coloque um desconto válido!");

        }

        if(porcentagem > 50){
            throw new Exception("O desconto ultrapassou os 50%");
        }else{
            this.preco *= (porcentagem/100);
        }
    }

    @Override
    public String toString() {
        return "Produto: nome='" + nome + ", preco=" + preco + ", quantidade=" + quantidade;
    }
}
