module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["**/*.spec.ts"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      env: {
        jest: true
      }
    },
    {
      files: ["**/*.e2e-spec.ts"],
      rules: {
        // We want to disable these, as they do not play well with supertest.
        "jest/expect-expect": "off",
        "@typescript-eslint/no-floating-promises": "off"
      }
    }
  ],
  rules: {
    // Require the use of === and !==
    // https://eslint.org/docs/latest/rules/eqeqeq
    "eqeqeq": ["error", "always"],

    // Disallow await inside of loops
    // https://eslint.org/docs/latest/rules/no-await-in-loop
    "no-await-in-loop": ["error"],

    // Disallow the use of console
    // https://eslint.org/docs/latest/rules/no-console
    "no-console": [
      "error",
      { 
        "allow": ["warn", "error"] 
      }
    ],
    
    // Disallow reassigning function parameters
    // https://eslint.org/docs/latest/rules/no-param-reassign
    "no-param-reassign": [
      "error", 
      { 
        "props": false,
      }
    ],

    // Disallow the unary operators ++ and --
    // https://eslint.org/docs/latest/rules/no-plusplus
    "no-plusplus": [
      "error", 
      { 
        "allowForLoopAfterthoughts": true
      }
    ],

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/latest/rules/no-shadow
    "no-shadow": [
      "error", 
      { 
        "hoist": "functions"
      }
    ],

    // Enforce T[] syntax for arrays over Array<T>.
    // https://typescript-eslint.io/rules/array-type
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array"
      }
    ],

    // Enforce function return types.
    // https://typescript-eslint.io/rules/explicit-function-return-type
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true,
        "allowHigherOrderFunctions": true,
        "allowTypedFunctionExpressions": true
      }
    ],

    // Enforce explicit return & argument types on exported functions & public class methods.
    // https://typescript-eslint.io/rules/explicit-module-boundary-types
    "@typescript-eslint/explicit-module-boundary-types": "error",

    // Disallow explicit type declarations for numbers, strings or booleans.
    // https://typescript-eslint.io/rules/no-inferrable-types
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        "ignoreParameters": true,
        "ignoreProperties": true
      }
    ],

    // Disallow explicit `any` types. Use `unknown` instead.
    // https://typescript-eslint.io/rules/no-explicit-any
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        "ignoreRestArgs": true
      }
    ],

    // Require Promise-like statements to be handled appropriately.
    // https://typescript-eslint.io/rules/no-floating-promises
    "@typescript-eslint/no-floating-promises": "error",

    // Disable using non-null assertions as they cancel the benefits of strict null-checking mode.
    // Prefer explicit null checks for safety.
    // https://typescript-eslint.io/rules/no-non-null-assertion
    "@typescript-eslint/no-non-null-assertion": "warn",

    // Restrict use of labels and with statements.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with
    // https://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        "selector": "WithStatement",
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ],

    // Avoid unnecessary conditionals.
    // https://typescript-eslint.io/rules/no-unnecessary-condition
    "@typescript-eslint/no-unnecessary-condition": "error",

    // Warn against unnecessary type assertions.
    // https://typescript-eslint.io/rules/no-unnecessary-type-assertion
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",

    // Enforce no unused variables.
    // https://typescript-eslint.io/rules/no-unused-vars
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",

    // Warn against useless class constructors.
    // https://typescript-eslint.io/rules/no-useless-constructor
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "warn",

    // Prefer nullish coalescing operator.
    // https://typescript-eslint.io/rules/prefer-nullish-coalescing
    "@typescript-eslint/prefer-nullish-coalescing": "warn",

    // Prefer optional chaining operator.
    // https://typescript-eslint.io/rules/prefer-optional-chain
    "@typescript-eslint/prefer-optional-chain": "warn",

    // Ensure all functions that return a promise are marked as async.
    // https://typescript-eslint.io/rules/promise-function-async
    "@typescript-eslint/promise-function-async": "error",

    // Restrict template expressions to allow for string & number types only.
    // Other types must be checked explicitly.
    // https://typescript-eslint.io/rules/restrict-template-expressions
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        "allowNumber": true,
        "allowBoolean": false,
        "allowAny": false,
        "allowNullish": false,
        "allowRegExp": false
      }
    ],

    // Disallow async functions which have no await expression and do not return a promise.
    // https://typescript-eslint.io/rules/require-await
    "require-await": "off",
    "@typescript-eslint/require-await": "error",

    // Enforce covering all cases in a switch statement.
    // https://typescript-eslint.io/rules/switch-exhaustiveness-check/
    "@typescript-eslint/switch-exhaustiveness-check": "error"
  },
};
