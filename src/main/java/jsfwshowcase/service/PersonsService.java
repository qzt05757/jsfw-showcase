package jsfwshowcase.service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import jsfwshowcase.domain.Person;
import jsfwshowcase.utils.CollectionUtils;

@Path("/persons")
public class PersonsService {
	
	private static final List<Person> PERSONS =
			CollectionUtils.asUnmodifiableList(
					new Person("Hisa", "Takei"),
					new Person("Nodoka", "Hanamura"),
					new Person("Yuki", "Kataoka"),
					new Person("Mako", "Someya")
					);
	
	@GET @Produces(MediaType.APPLICATION_JSON)
	public List<Person> get() {
		return PERSONS;
	}
}
