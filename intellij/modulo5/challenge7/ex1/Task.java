package modulo5.challenge7.ex1;

public class Task {
    private String description;
    private boolean completed;
    private Task next;

    public Task getNext() {
        return next;
    }

    public void setNext(Task next) {
        this.next = next;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public Task(String description) {
        this.description = description;
        this.completed = false;
        this.next = null;
    }

    public void taskCompleted(){
        this.completed = true;
    }

    @Override
    public String toString() {
        return this.description + (completed ? " (Concluída)" : " (Pendente)");
    }
}

