---
layout: post
date: 2015-10-27 12:10:00
year: 2015
categories:
 - projects
tags: data-viz sfpc
thumb: /thumbs/flatNYC.jpg
video_vimeo: 143779655
video_width: 958
video_height: 600
title: New York City is flat... almost
lang: es
---
Esta es una visualización interactiva de las calles de la ciudad de Nueva York, que se mueve a través de éstas siguiendo el camino que realizaba en bicicleta a diario desde el [School For Poetic Computation](http://sfpc.io) (SFPC) ubicado en el East Village de Manhattan hasta Crown Heights en Brooklyn donde estaba viviendo, haciendo énfasis en la elevación de las calles.

Todos los datos de las calles fueron minados y filtrados desde G..... Street View, los cuales luego se entregan a una aplicación hecha a medida. El usuario puede rotar el punto de vista arrastrando el mouse y modificar algunos parámetros de la visualización, de los cuales el más relevante es el factor de multiplicación de la elevación. Esta obra fue presentada en la muestra final de la sesión del SFPC a la cual asistí para la cual utilicé un sistema de realidad virtual Oculus Rift en lugar de una pantalla de computador corriente.

En el otoño de 2015 llegué a la ciudad de Nueva York para asistir al School For Poetic Computation, una residencia/escuela de arte enfocada en el uso expresivo y artístico de la computación. La primera impresión que tuve de la ciudad, al menos de Manhattan, fue que era principalmente plana. No parecía haber colinas (aun cuando muchas partes tienen la palabra "Hill", colina en inglés, en su nombre) o al menos éstas eran casi indistinguibles y estaban completamente ocluidas por los inmensos edificios. Una semana después me compré una bicicleta y mi percepción cambió. Al pedalear uno puede notar las subidas y bajadas, por insignificantes que sean, ya que implica hacer un mayor o menor esfuerzo. Dada la posibilidad de la bicicleta de transladarse distancias bastante largas es que uno comienza a tener una idea más generalizada de la forma y elevación de la ciudad, lo cual desperto mi curiosidad sobre la real topología de las calles de la ciudad de Nueva York.

Visualizar las datos inalterados de las calles revela bastante poco sobre su elevación y solo cuando ésta es exagerada es posible ver y transmitir la idea y sensación de moverse a través de una ciudad en bicicleta.

Hecho con [openFrameworks](http://openframeworks.cc)
Código y aplicación para macos disponible en [https://github.com/roymacdonald/flatCity](https://github.com/roymacdonald/flatCity)
