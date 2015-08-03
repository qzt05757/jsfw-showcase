package jsfwshowcase.utils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class CollectionUtils {

	public static <T> List<T> asUnmodifiableList(@SuppressWarnings("unchecked") T ...ts) {
		List<T> l = new ArrayList<>();
		for(T t: ts) {
			l.add(t);
		}
		return Collections.unmodifiableList(l);
	}
	
	public static <T> Set<T> asUnmodifiableSet(@SuppressWarnings("unchecked") T...ts) {
		Set<T> s = new HashSet<>();
		for(T t: ts) {
			s.add(t);
		}
		return Collections.unmodifiableSet(s);		
	}

}
