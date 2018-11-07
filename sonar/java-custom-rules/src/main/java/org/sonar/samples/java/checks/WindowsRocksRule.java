package org.sonar.samples.java.checks;

import java.util.List;

import org.sonar.api.internal.apachecommons.lang.StringUtils;
import org.sonar.check.Rule;
import org.sonar.check.RuleProperty;
import org.sonar.plugins.java.api.IssuableSubscriptionVisitor;
import org.sonar.plugins.java.api.JavaFileScanner;
import org.sonar.plugins.java.api.JavaFileScannerContext;
import org.sonar.plugins.java.api.tree.AnnotationTree;
import org.sonar.plugins.java.api.tree.BaseTreeVisitor;
import org.sonar.plugins.java.api.tree.ClassTree;
import org.sonar.plugins.java.api.tree.IdentifierTree;
import org.sonar.plugins.java.api.tree.MethodTree;
import org.sonar.plugins.java.api.tree.Tree;
import org.sonar.plugins.java.api.tree.Tree.Kind;

import com.google.common.collect.ImmutableList;

@Rule(key = "WindowsRocks")
public class WindowsRocksRule extends IssuableSubscriptionVisitor {

	@Override
	public List<Kind> nodesToVisit() {
		return ImmutableList.of(Tree.Kind.METHOD);
	}
	
	@Override
	public void visitNode(Tree tree) {
		MethodTree methodTree = (MethodTree)tree;
		if(!StringUtils.endsWith(methodTree.simpleName().toString(), "WindowsRocks")) {
			reportIssue(tree, "Nope");
		}
	}
}
