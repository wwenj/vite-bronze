// vite 配置
module.exports = {
    "root": "/Users/wangwenjian/Desktop/Private/code/viteHtml/src",
    "base": "/",
    "publicDir": "/Users/wangwenjian/Desktop/Private/code/viteHtml/src/public",
    "define": {
        "appName": "\"vite_define_name1\"",
        "import.meta.env.LEGACY": false
    },
    "resolve": {
        "alias": [
            {
                "find": {}
            },
            {
                "find": {}
            },
            {
                "find": "@components",
                "replacement": "/Users/wangwenjian/Desktop/Private/code/viteHtml/src/components"
            }
        ]
    },
    "server": {
        "port": 9000,
        "fs": {
            "strict": true,
            "allow": [
                "/Users/wangwenjian/Desktop/Private/code/viteHtml"
            ],
            "deny": [
                ".env",
                ".env.*",
                "*.{crt,pem}"
            ]
        }
    },
    "build": {
        "target": [
            "es2019",
            "edge88",
            "firefox78",
            "chrome87",
            "safari13.1"
        ],
        "polyfillModulePreload": true,
        "outDir": "/Users/wangwenjian/Desktop/Private/code/viteHtml/dist",
        "assetsDir": "./img",
        "assetsInlineLimit": 4096,
        "cssCodeSplit": true,
        "cssTarget": [
            "es2019",
            "edge88",
            "firefox78",
            "chrome87",
            "safari13.1"
        ],
        "sourcemap": false,
        "rollupOptions": {},
        "minify": "esbuild",
        "terserOptions": {},
        "write": true,
        "emptyOutDir": true,
        "manifest": false,
        "lib": false,
        "ssr": false,
        "ssrManifest": false,
        "reportCompressedSize": true,
        "chunkSizeWarningLimit": 500,
        "watch": null,
        "commonjsOptions": {
            "include": [
                {}
            ],
            "extensions": [
                ".js",
                ".cjs"
            ]
        },
        "dynamicImportVarsOptions": {
            "warnOnError": true,
            "exclude": [
                {}
            ]
        }
    },
    "plugins": [
        {
            "name": "vite:pre-alias"
        },
        {
            "name": "alias"
        },
        {
            "name": "vite:modulepreload-polyfill"
        },
        {
            "name": "vite:resolve"
        },
        {
            "name": "vite:html-inline-script-proxy"
        },
        {
            "name": "vite:css"
        },
        {
            "name": "vite:esbuild"
        },
        {
            "name": "vite:json"
        },
        {
            "name": "vite:wasm"
        },
        {
            "name": "vite:worker"
        },
        {
            "name": "vite:asset"
        },
        {
            "name": "vite:legacy-env"
        },
        {
            "name": "vite:define"
        },
        {
            "name": "vite:css-post"
        },
        {
            "name": "vite:client-inject"
        },
        {
            "name": "vite:import-analysis"
        }
    ],
    "configFile": "/Users/wangwenjian/Desktop/Private/code/viteHtml/vite.config.js",
    "configFileDependencies": [
        "vite.config.js"
    ],
    "inlineConfig": {
        "server": {}
    },
    "cacheDir": "/Users/wangwenjian/Desktop/Private/code/viteHtml/node_modules/.vite",
    "command": "serve",
    "mode": "development",
    "isProduction": false,
    "preview": {},
    "env": {
        "BASE_URL": "/",
        "MODE": "development",
        "DEV": true,
        "PROD": false
    },
    "logger": {
        "hasWarned": false
    },
    "packageCache": {},
    "optimizeDeps": {
        "esbuildOptions": {}
    }
}