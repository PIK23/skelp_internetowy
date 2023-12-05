package pl.projektpis.sklep.repository;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;
import pl.projektpis.sklep.entity.Product;

import java.util.UUID;

@Repository
public interface ProductRepository extends CassandraRepository<Product, UUID> {

}
