npm new proof-of-delivery --skip-install

npm install

ng add @po-ui/ng-components

ng add @po-ui/ng-templates

ng serve

Criaçao de componentes
ng g c [component name]  
ng g s [componente name service]

Deixar o build assim

       "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/poui-compras",
            "index": "src/index.html",
            "main": "src/main.ts",

Setings->extensions->TOTVS->Totvs Language Server › Launch: Args->EDITJSON

Colar esse abaixo

{
    "totvsLanguageServer.folder.extensionsAllowed": [
        ".PRW",
        ".PRX",
        ".PRG",
        ".PPX",
        ".PPP",
        ".TLPP",
        ".APW",
        ".APH",
        ".APL",
        ".AHU",
        ".TRES",
        ".PNG",
        ".BMP",
        ".RES",
        ".4GL",
        ".PER",
        ".JS",
        ".RPTDESIGN",
        ".APP"
    ]
}

              // "@angular/material/prebuilt-themes/azure-blue.css",
              // "./node_modules/@po-ui/style/css/po-theme-default.min.css",

                            "@angular/material/prebuilt-themes/azure-blue.css",
              "./node_modules/@po-ui/style/css/po-theme-default.min.css",