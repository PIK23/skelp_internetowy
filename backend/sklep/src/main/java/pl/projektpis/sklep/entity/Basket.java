package pl.projektpis.sklep.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import pl.projektpis.sklep.repository.ProductRepository;

import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Basket {

    @Autowired
    private ProductRepository productRepository;

    //create basket for this owner
    public Basket(UUID owner){
        this.owner = owner;
    }

    public void addProduct(Product p){

        if (products==null)
        {
            this.products = new LinkedList<>();
        }
        products.add(p);
    }

    public void removeProductByName(String name){
        Product p = productRepository.findByNazwa(name).orElseThrow(() -> new ResourceNotFoundException("Product not found in basket."));
        removeProduct(p);
    }

    private void removeProduct(Product p){
        products.remove(p);
    }

    public Double getTally(){
        return products.stream().mapToDouble(Product::getCena).sum();
    }

    @PrimaryKey
    private UUID owner;
    // this needs to be a concrete type
    private LinkedList<Product> products;


}
