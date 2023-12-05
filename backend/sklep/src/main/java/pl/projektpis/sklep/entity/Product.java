package pl.projektpis.sklep.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.util.UUID;

@Table
@AllArgsConstructor
@Getter // domyśl się człowieku że to potrzebne do RestController
public class Product {

    @PrimaryKey
    UUID id;

    String nazwa;
    Double cena;
}
