package modulo5.challenge7.ex1;

public class TaskManagment {
    private Task initial;

    public TaskManagment() {
        this.initial = null;
    }

    public void addTask(String description){
        Task newTask = new Task(description);

        if (initial == null) {
            initial = newTask;
        }else{
            Task current = initial;
            while (current.getNext() != null){
                current = current.getNext();
            }
            current.setNext(newTask);
        }
    }

    public void removeTask (String description){
        if(initial == null){
            System.out.println("The list is empty!");
            return;
        }

        if(initial.getDescription().equals(description)){
            initial = initial.getNext();
            return;
        }

        Task current = initial;

        while (current.getNext() != null && !current.getNext().getDescription().equals(description)){
            current = current.getNext();
        }

        if (current.getNext() == null) {
            System.out.println("Task not found!");
        } else {
            current.setNext(current.getNext().getNext());
        }
    }

    public void selectTaskCompleted(String description){
        Task current = initial;

        while (current != null){
            if(current.getDescription().equals(description)){
                current.taskCompleted();
                return;
            };
            current = current.getNext();
        }

        System.out.println("Task not found!");
    }

    public void viewTasks (){
        Task current = initial;

        if(current == null){
            System.out.println("Not tasks for see");
        }else{
            while (current != null){
                System.out.println(current);
                current = current.getNext();
            }
        }
    }

}
