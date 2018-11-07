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


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-windows-string", rule, {

    valid: [

        // give me some code that won't trigger a warning
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
