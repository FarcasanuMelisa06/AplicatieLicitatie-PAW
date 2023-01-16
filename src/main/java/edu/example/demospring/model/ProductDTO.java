package edu.example.demospring.model;

public class ProductDTO {

    private Long id;
    private String name;
    private String price;
    private String details;

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public ProductDTO(byte[] image) {
        this.image = image;
    }

    private byte []image;
public ProductDTO()
{

}

    public ProductDTO(long id, String name, String details, String price) {
        this.id = id;
        this.name = name;
        this.details=details;
        this.price=price;
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
}
