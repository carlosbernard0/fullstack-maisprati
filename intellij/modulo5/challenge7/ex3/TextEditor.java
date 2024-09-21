package modulo5.challenge7.ex3;

public class TextEditor {
    public static void main(String[] args) {
        StringBuilder text = new StringBuilder();
        UndoManager undoManager = new UndoManager();

        // Inserir texto
        text.append("Olá Mundo!");
        undoManager.addAction(new Action("Olá Mundo!", 0, true));

        // Deletar parte do texto
        text.delete(4, 10);
        undoManager.addAction(new Action("Mundo", 4, false));

        System.out.println("Texto atual: " + text);

        // Desfazer a última ação (deletar)
        undoManager.undo(text);
        System.out.println("Após desfazer: " + text);

        // Desfazer a ação anterior (inserir)
        undoManager.undo(text);
        System.out.println("Após desfazer novamente: " + text);
    }
}
