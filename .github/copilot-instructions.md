Schreibe mir eine List von VueJs Component mit dem Script Setup und lang="ts"  mit der Compoition api.

Generieren mir die Component aus der Liste alle Komponenten aus dem File ./components.md von Daisuyi

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
Extrahieren aus dem Button btn-md den breaktpoint bezug also btn-$breakointMD oder so.
Alle Komponent sollen im Namen mit Daisy anfagen als DaisyButton, DaisyCard und so weiter 
(das erreicht du durch einen Daisy Ordner in components wo alle componentnde drin sind)
Fasse interfaces zusammen die nur ClassName enthalten in eine Datei ClassName.ts.
Teile Interfaces und Type jeweil in einen entsprechenden Ordner zusammen.

# Folders
Komponentn kommen in das Folder /components/ nicht in src/components.
Typescript typen in /types/ Folder.

Zum Schluss optimiere die Komponenten.
