** Release:** _Vorspiel_ - Eine Straße in der Hauptstadt von Sezuan

## ![](http://vr-theater.s-hesse.com/)

### Idee

Die Grundidee unseres Projekts stellt eine browserbasierte VR-Erfahrung in Form eines interaktiven [360° Videos](https://aframe.io/examples/showcase/videosphere/) dar. Hierbei besitzt der User die Möglichkeit, durch das KLicken von Pop-ups  - sogenannter "Planes" - zwischen verschiedenen Dialogen innerhalb der ersten Szene zu wechseln. 

### Modellierung / Animation

Die Grundlage unserer VR-Szene stellen via 3dsmax konzipierte Modelle dar. In Anlehnung an die Figur [Danbo](https://de.wikipedia.org/wiki/Danb%C5%8D) haben wir zunächst mit dem Programm Substance Designer Texturen im Pappstil erzeugt, die via Substance Painter auf die jeweiligen 3D Modelle projiziert wurden. Auf den Texturen der Figuren lassen sich vereinzelte Logos bekannter Firmen wiederfinden, die eine Verbindung zu dem konsum- und kapitalkritischen Subtext von Brechts Drama geben sollen. Nach Fertigstellung der Texturen und Modelle, wurden diese im Anschluss via 3dsmax animiert. 

### Sound

Zur Implementierung der Dialoge diente die [Adaption](https://www.youtube.com/watch?v=zG9TofQOElo) als Grundlage. Dafür haben wir zunächst selbige via DVDVideoSoft Free Studio in ein reines Audioformat (mp3) konvertiert, um die einzelnen Dialoge via Audacity herauszuschneiden und als Wave Dateien zu speichern. Zur Synchronisierung der Audio Dateien mit dem Video benutzten wir Adobe Premiere. 

### Video

Nachdem die Tonspur und das Video synchronisiert wurden, ging es abschließend darum, dieses in einer ausreichenden Qualität (in unserem Falle 2k) zu rendern. Dabei müssen prinzipiell mehrere Aspekte betrachtet werden wie z.B. die Renderer selbst. Diese haben alle unterschiedliche Funktionsumfänge und Spezifikationen. Für unser Video haben wir dabei Vray und Iray ausprobiert. Hauptunterschiede sind hier beim Renderprozess zu finden. Bei uns stark betroffen waren vornehmlich die Lichter.

### HTML Text / Javascript Code

Den Kern unseres Codes stellt das Konzept des [Component](https://aframe.io/docs/0.5.0/core/component.html)[](https://aframe.io/docs/0.5.0/guides/writing-a-component.html) dar. In unserem Falle dient dies zur Steuerung der Planes, die zu bestimmten festgelegten Zeiten in Form von Pop-ups auf der Browseroberfläche erscheinen. Der Nutzer besitzt dabei die Möglichkeit, diese Planes via kreisrunden Cursor anzuklicken, um zwischen bestimmten Zeiten des Videos hin und herzuspringen, wodurch bestimmte Dialoge getriggert werden. Durch das Manövrieren des Cursors in eine Plane, lässt sich selbiger Zeitsprung durch einen Mouseover Event mit einer 3 sekündigen Verzögerung ebenfalls ausführen Die Planes finden sich dabei in der index.html neben der Implementierung des Videos und der Kamera wieder.



## Sprintwoche 26.01 - 02-02

**Meilensteine dieser Woche:**

  1. Arbeiten am Video: Animation der Figuren, Rendern
  2. Arbeiten am Code: Pop-ups implementieren
  3. Schneiden der Tonspuren
  
  
  
## Sprintwoche 19.01 - 26.01

**Meilensteine dieser Woche:**
  
  1. Arbeiten am Video 
  2. Arbeiten am Code: Stopfunktion implementieren
  
  
  
## Sprintwoche 12.01 - 26-01

**Meilensteine dieser Woche:**

  1. Arbeiten am Code
  
  
  
## Sprintwoche 01.12 - 08.12

### Modellierung

Die Sprintwoche stand ganz im Zeichen der Modellierung der Figuren für unser VR Projekt. In Anlehnung an die Manga Figur  [Danbo](https://de.wikipedia.org/wiki/Danb%C5%8D) möchten wir die Figuren unserer Szene in ähnlichem Papp-Stil modellieren. Dafür haben wir bereits zwei Modelle gebaut:

**Dummy (1)**
![](https://cloud.githubusercontent.com/assets/24436598/20982650/be9fc01e-bcb9-11e6-9170-0fbed766d071.JPG)

**Dummy (2)**
![](https://cloud.githubusercontent.com/assets/24436598/20982740/0dd91586-bcba-11e6-9750-9242dd5806df.JPG)



**Szene:** _Vorspiel_ - Eine Straße in der Hauptstadt von Sezuan

Die von uns zu generierrende VR-Erfahrung soll mit der ersten Szene des [Theaterstücks: Der gute Mensch von Sezuan](https://www.youtube.com/watch?v=zG9TofQOElo) beginnen. Der Rezipient findet sich zu Beginn in der Stadt Sezuan wieder, in der der Wasserträger Wang verzweifelt auf der Suche nach einer Übernachtungsmöglichkeit für die 3 Götter ist. 


Die Architektur der Stadt Sezuan soll einem asiatischen Stil entsprechen.

![](https://cloud.githubusercontent.com/assets/24436598/21005356/ccc6676c-bd34-11e6-9c08-dc1cf81f55f1.jpg)

![](https://cloud.githubusercontent.com/assets/24436598/21005367/d20f1bc4-bd34-11e6-9b80-4932da008bd3.jpg)
