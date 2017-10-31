package org.sid;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.sid.dao.ContactRepository;
import org.sid.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ContactsApplication implements CommandLineRunner{
	
	@Autowired
	private ContactRepository contactRepository;
	public static void main(String[] args) {
		SpringApplication.run(ContactsApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
//		contactRepository.save(new Contact("grimeh", "aziz", df.parse("09/03/1977"), "agrimeh-prestataire@ina.fr", "0650052123", ""));
//		contactRepository.save(new Contact("ennaciri", "chourouk", df.parse("16/06/2010"), "agrimeh-prestataire@ina.fr", "0650052123", ""));
//		contactRepository.save(new Contact("grimeh", "Iyad", df.parse("16/06/2010"), "agrimeh-prestataire@ina.fr", "0650052123", ""));
//		contactRepository.save(new Contact("grimeh", "Ali", df.parse("19/12/2014"), "agrimeh-prestataire@ina.fr", "0650052123", ""));
		contactRepository.findAll().forEach(c-> {
			System.out.println(c.getNom());
		});
	}
}
