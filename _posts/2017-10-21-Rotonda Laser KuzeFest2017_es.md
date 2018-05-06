---
layout: post
date: 2017-10-21 12:10:00
categories:
 - projects
tags: kuze, kuzefest, laser, laser mapping
thumb: /thumbs/laserkuze.jpg
video_vimeo: 252066601
video_width: 958
video_height: 539
title: ROTONDA LASER
subtitle: Proyección láser generativa
lang: es
---

Proyección láser generativa mapeada sobre una rotonda en Santiago de Chile. Los trazos de ésta se generan siguiendo el flujo automovilístico al rededor de la rotonda utilizando un sistema de visión computacional hecho a medida. Esta intervención lumínica urbana fue presentada bajo el contexto del [KuzeFest, Festival de Luz, Santiago 2017](http://www.kuzefest.cl/en.html).
Esta obra fue presentada en el evento de cierre del festival en [Galeria Cima](http://www.galeriacima.cl/), desde la cual se ve la rotonda desde la altura.

Para este proyecto se utilizó un proyector láser, el cual tiene  un poderoso láser cuyo rayo es redireccionado con dos espejos que oscilan rápidamente, así creando la ilusión de una línea donde realmente solo hay un punto. Decidí utilizar este aparato por dos razonas principalmente:
* Dada la naturaleza de la luz láser, estos proyectores pueden proyectar a grandes distancias sin perder luminosidad a diferencia de los proyectores de video covencionales, asi mismo pueden abarcar grandes áreas y generar gráficas de gran tamaño, haciendolos ideales para esta obra.
* El rayo láser, según el código Hollywoodense, funciona simultáneamente como un delimitador de espacios y un sistema de detección de intrusos, como parte de un sistema de vigilancia, lo cual se relaciona con los otros aspectos de esta obra, expuestos más adelante

Utilizando la herramienta de programación openFrameworks desarrollé una aplicación computacional que controlaba el láser y hacia el seguimiento de los automóviles. Los datos de una cámara de video USB que tenía una vista elevada de la rotonda enviaba fueron utilizados para el seguimiento de las luces de los automóviles. La información obtenida de este seguimiento fue utilizada para generar los dibujos que se enviaban al proyector láser por medio de una interfaz especial.

Varios artefactos visuales se generaron dada la manera de funcionar de los proyectores láser. La complejidad de lo que éstos pueden dibujar esta limitada por la velocidad de oscilacion de los espejos. Cuando este límite es superado comienza la ilusión de línea contínua comienza a perderse y haciendo visible la "velocidad de refresco" del aparato. Cuando se fuerza al proyector a dibujar ángulos agudos este límite se hace aun más notorio; al no hacer este forzamiento el proyector interpeta las esquinas como curvas suaves, interpolando naturalmente los lados de un ángulo. Este artefacto terminó por gustarme ya que las formas producidas eran más "naturales" e introducia un alto grado de incertidumbre, y es que decidí dejarlo como parte de la obra. Pienso que estos artefactos son la "contribución" del proyector en esta obra.


Cuando fui invitado a participar en este festival de luz me encargaron hacer algo para el evento de clausura. Este evento tendría lugar en una terraza en el último piso de un edificio que tiene una vista cenital privilegiada de la Plaza Baquedano (usualmente mal etiquetada como Plaza Italia), la cual está ubicada en uno de los ejes principales de la ciudad y es usualmente tildada como el punto de la ciudad que divide la clase alta de la baja. Estas dos condiciones de la locación fueron los  conceptos precursores de esta obra.

Aun cuando en la mayoría de las ciudades los sitemas de vigilancia son ubicuos, desde pequeños sistemas caseros de CCTV a los amplios sistemas de control de tráfico, las personas usualmente los ignoran o inclusive no saben de la existencia de éstos. La interacción con estos sistemas es usualmente indeseada e inconciente, y en muchos casos anónima; la identidad de los individuos no es relevante, si no que es su comportamiento dentro de la masa y el comportamiento de la masa lo que importa, desde lo cual se puede extraer información, la que por lo general esta restringida a muy pocas y provilegiadas personas.
De un modo similar, la información que puedo extraer de los automóviles/personas que transitan al rededor de esta rotonda es presentada a los pocos privilegiados que eran capaces de ver la proyección desde la altura ya que ésta no era visible desde el nivel de la calle. Al presentar esta información en una forma estética agradable, casi hipnótica, esta obra intenta, ojalá sin éxito, enmascarar el umbral social que este lugar en la ciudad representa.

Videografía aerea: [Gonzalo Zuñiga](https://www.instagram.com/fotosaereas/)

Proveedor proyector laser: Raul Zamorano.

Hecho utilizando [openFrameworks](http://openframeworks.cc/).
