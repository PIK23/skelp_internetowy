package pl.projektpis.sklep.controller;

import com.datastax.oss.driver.api.core.uuid.Uuids;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.projektpis.sklep.entity.Product;
import pl.projektpis.sklep.repository.ProductRepository;

import java.util.List;

@RestController
@CrossOrigin
public class ProductsController {

    @Autowired
    private ProductRepository productRepository;

    @RequestMapping(value = "/products", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @PostMapping("/products")
    public String newProduct(String name, Double price) {
        Product product = new Product(Uuids.timeBased(),name,price);
        productRepository.save(product);
        return String.format("Added new product '%s'", name);

    }

}