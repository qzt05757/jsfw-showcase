package jsfwshowcase.domain;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Person implements Serializable {
	private String firstName;
	private String lastName;
	public Person() { }
	public Person(String f, String l) {
		this.firstName = f;
		this.lastName = l;
	}
	public String getFirstName() { return firstName; }
	public String getLastName() { return lastName; }
	public void setFirstName(String v) { this.firstName = v; }
	public void setLastName(String v) { this.lastName = v; }
}
