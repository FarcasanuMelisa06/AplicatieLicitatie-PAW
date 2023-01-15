package edu.example.demospring.model;

public class ProductDTO {

    private Long id;
    private String name;
    private String price;
    private String details;

    private String initial_date;
    private String final_date;


    public ProductDTO(long id, String name, String details, String price, String final_date, String initial_date) {
        this.id = id;
        this.name = name;
        this.details = details;
        this.price = price;
        this.final_date = final_date;
        this.initial_date = initial_date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getInitial_date() {
        return initial_date;
    }

    public void setInitial_date(String initial_date) {this.initial_date = initial_date;}

    public String getFinal_date() {
        return final_date;
    }

    public void setFinal_date(String final_date) {
        this.final_date = final_date;
    }


}