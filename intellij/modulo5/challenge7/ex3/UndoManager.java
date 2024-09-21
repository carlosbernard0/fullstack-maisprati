package modulo5.challenge7.ex3;

public class UndoManager {
    private Node head;

    // Adiciona uma ação à lista (inserir ou deletar)
    public void addAction(Action action) {
        Node newNode = new Node(action);
        newNode.next = head;  // Insere no início da lista
        head = newNode;
    }

    // Desfaz a última ação
    public void undo(StringBuilder text) {
        if (head != null) {
            Action lastAction = head.action;

            if (lastAction.isInsertion()) {
                // Desfaz uma inserção, removendo o texto inserido
                text.delete(lastAction.getPosition(), lastAction.getPosition() + lastAction.getText().length());
            } else {
                // Desfaz uma deleção, reinserindo o texto deletado
                text.insert(lastAction.getPosition(), lastAction.getText());
            }

            // Move o ponteiro da lista para o próximo nó
            head = head.next;
        } else {
            System.out.println("Nenhuma ação para desfazer.");
        }
    }
}
