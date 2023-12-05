package pl.projektpis.sklep;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.ActiveProfiles;
import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
//@ActiveProfiles("test")
//@WebMvcTest
class SklepApplicationTests {

    @Test
    void contextLoads() {
    }

    @Test
    void twoplustwo(){
        assertThat(2+2).isEqualTo(4);
    }
  @Test
    void twoplusthree(){
        assertThat(2+3).isEqualTo(4);
    }
}
