package pl.projektpis.sklep;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import static org.assertj.core.api.Assertions.assertThat;


//@SpringBootTest
@ActiveProfiles("test")
@WebMvcTest
public class SklepApplicationIT {

    @Test
    void contextLoads() {
    }

    @Test
    void twoplustwo(){
        assertThat(2+2).isEqualTo(4);
    }

}
