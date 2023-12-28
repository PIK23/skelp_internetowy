package pl.projektpis.sklep.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.projektpis.sklep.entity.Basket;
import pl.projektpis.sklep.entity.Product;
import pl.projektpis.sklep.repository.BasketRepository;
import pl.projektpis.sklep.repository.ProductRepository;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
public class BasketController {

    @Autowired
    private BasketRepository basketRepository;

    @RequestMapping(value = "/basket", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody List<Product> getBasketContents(@RequestParam UUID owner) {
        //@TODO somehow get user id from session
        Basket basket = basketRepository.findOneByOwner(owner).orElseThrow(() -> new ResourceNotFoundException("Invalid basket id"));
        return basket.getProducts();

    }
}
