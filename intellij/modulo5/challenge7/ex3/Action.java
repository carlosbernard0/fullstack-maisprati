package modulo5.challenge7.ex3;


public class Action {
    private String text;
    private int position;
    private boolean isInsertion;

    public Action(String text, int position, boolean isInsertion) {
        this.text = text;
        this.position = position;
        this.isInsertion = isInsertion;
    }

    public String getText() {
        return text;
    }

    public int getPosition() {
        return position;
    }

    public boolean isInsertion() {
        return isInsertion;
    }
}