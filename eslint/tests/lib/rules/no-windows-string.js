/**
 * @fileoverview Interdire de parler de Windows
 * @author matthieusb
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-windows-string"),
RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
  
      ecmaFeatures: {
        modules: true,
      },
    },
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-windows-string", rule, {

    valid: [
        {
            code: 'const anotherTest = "linux est le seul vrai os"',
            filename: 'test.js'
        }
    ],

    invalid: [
        {
            code: "const test = \"windows c'est bien\"",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
