package org.sonar.samples.java.checks;

import org.junit.Test;
import org.sonar.java.checks.verifier.JavaCheckVerifier;

public class WindowsRocksRuleTest {

	@Test
	public void checkRule() {
		JavaCheckVerifier.verify("src/test/files/WindowsRocksCheck.java", new WindowsRocksRule());
	}
}
