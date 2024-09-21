package modulo5.challenge7.ex2;

import java.util.ArrayList;

public class BrowsingHistory {
    private ArrayList<String> history = new ArrayList<>();
    private Integer limitList;

    public BrowsingHistory(Integer limitList) {
        this.limitList = limitList;
    }

    public void addNewURL(String url){
        if(history.size() == limitList){
            history.remove(0);
        }
        history.add(url);
    }

    public void removeURL(Integer position){
        history.remove(position);
    }

    public void seeList(){
        for (int i = 0; i < history.size(); i++) {
            System.out.println(history.get(i));
        }
    }
}
