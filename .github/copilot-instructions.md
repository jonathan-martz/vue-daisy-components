Schreibe mir eine List von VueJs Component mit dem Script Setup und lang="ts"  mit der Compoition api.

Generieren mir die Component aus der Liste alle Komponenten aus dem File ./components.md 
von Daisuyi

Benutze die Doku für Informationen über die Komponenten.
https://daisyui.com/components/

# Style
Style die Componenten mit TailwindCSS und DaisyUI.

# Icons
Ersetze die SVG Icons mit FontAwesome Icons.

# Hints Components
Sammle Types für Variant als global type.
Teile Type und interfaces auf, ein definition pro File in types folder.
Sammle breakpoints  like xs,sm,md,lg,xl,2xl as global type.
Remove btn- from button variant name, it should only primary not btn-primary as string.
(Das gilt für alle Komponenten die Variants haben.)

Optimiere die Komponenten und entferne prefixes wie btn- oder card- aus den Variants. Das gilt auch für =>
:responsive-size="{ md: 'btn-md' } , das btn- prefix entfernen.
Dannach soll es so aussehen: => :responsive-size="{ md: $prefix+'-'+$breakointMD }
Default should be md = $prefix-$breakpointMD

Extrahieren aus dem Button btn-md den breaktpoint bezug also btn-$breakointMD oder so.
Alle Komponent müssen im Namen mit Daisy anfagen als DaisyButton, DaisyCard und so weiter.
Fasse interfaces zusammen die nur ClassName enthalten in eine Datei ClassName.ts.

# Folders
Komponentn kommen in das Folder /components/ nicht in src/components.
Typescript typen in /types/ Folder.
Typescript Interfaces in /interfaces/ Folder.
Zum Schluss optimiere die Komponenten.
