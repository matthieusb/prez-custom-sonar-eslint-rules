# eslint-plugin-prez-custom-rules

Exemples de règles

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-prez-custom-rules`:

```
$ npm install eslint-plugin-prez-custom-rules --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-prez-custom-rules` globally.

## Usage

Add `prez-custom-rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "prez-custom-rules"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "prez-custom-rules/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





