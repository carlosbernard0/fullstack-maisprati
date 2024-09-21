package modulo5.challenge7.ex2;

public class Main {
    public static void main(String[] args) {
        BrowsingHistory browsingHistory = new BrowsingHistory(5);

        browsingHistory.addNewURL("github.com");
        browsingHistory.addNewURL("reactnative.com");
        browsingHistory.addNewURL("chatgpt.com");
        browsingHistory.addNewURL("instagram.com");
        browsingHistory.addNewURL("trello.com");

        browsingHistory.seeList();

        System.out.println();
        browsingHistory.addNewURL("oii");

        browsingHistory.seeList();

        browsingHistory.removeURL(1);

        browsingHistory.seeList();
    }
}
