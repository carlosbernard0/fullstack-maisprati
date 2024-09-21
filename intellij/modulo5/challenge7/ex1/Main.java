package modulo5.challenge7.ex1;

public class Main {
    public static void main(String[] args) {
        TaskManagment taskManagment = new TaskManagment();

        taskManagment.addTask("Study React");
        taskManagment.addTask("Review resume");
        taskManagment.addTask("Reading a book");

        taskManagment.viewTasks();

        taskManagment.selectTaskCompleted("Study React");

        taskManagment.viewTasks();

        taskManagment.removeTask("Review resume");

        taskManagment.viewTasks();
    }
}
