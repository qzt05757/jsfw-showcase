package jsfwshowcase;

import java.util.Set;

import javax.ws.rs.core.Application;

import jsfwshowcase.service.PersonsService;
import jsfwshowcase.utils.CollectionUtils;

public class ShowcaseApplication extends Application {
	private static final Set<Class<?>> CS = CollectionUtils.asUnmodifiableSet(PersonsService.class);	
	@Override
	public Set<Class<?>> getClasses() {
		return CS;
	}	
}
