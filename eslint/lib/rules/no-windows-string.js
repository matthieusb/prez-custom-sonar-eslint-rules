/**
 * @fileoverview Interdire de parler de Windows
 * @author matthieusb
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Interdire de parler de Windows",
            category: "Syntax",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        const FAILURE_MSG = 'Le terme windows est interdit';

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            VariableDeclarator(node) {
                if (node.init && node.init.type === 'Literal' && node.init.value.includes('windows')) {
                    context.report(node, FAILURE_MSG);
                }
            }
        };
    }
};
