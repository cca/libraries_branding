import globals from 'globals'
import js from "@eslint/js"

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.browser,
                jQuery: 'readonly',
                $: 'readonly',
                angular: 'readonly',
            },
            sourceType: 'module'
        },
        rules: {
            indent: [ 'warn', 4 ],
            'linebreak-style': [ 'error', 'unix' ],
        }
    }
]
