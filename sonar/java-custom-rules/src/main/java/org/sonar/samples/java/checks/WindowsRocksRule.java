package org.sonar.samples.java.checks;

import java.util.List;

import org.sonar.check.Rule;
import org.sonar.plugins.java.api.IssuableSubscriptionVisitor;
import org.sonar.plugins.java.api.tree.Tree;
import org.sonar.plugins.java.api.tree.Tree.Kind;

@Rule(key = "WindowsRocks")
public class WindowsRocksRule extends IssuableSubscriptionVisitor {

	@Override
	public List<Kind> nodesToVisit() {
		return null;
	}
	
	@Override
	public void visitNode(Tree tree) {
	}
}
