---
layout: default
lang: en
permalink: /future_sketches/
---
<div class='container clearfix'>
{{ content }}
	<div class="header_port_dma">
        <h2> MIT Media Lab Future Sketches application portfolio</h2>
    </div>
      <div class='posts fl'>
          

<h3>Projects</h3>
{% for proj in site.data.portafoliofs %}
	{% for post in site.posts %}
		{% if post.id == proj.id and proj.category == "projects" %}
			<div class='postbox'>
          	<a href='{{site.url}}{{post.url}}'>
          		<img class="imgBW" alt="{{post.title}}" src="{{site.url}}{{post.thumb}}"> 
          	</a> 
            <p><a href='{{site.url}}{{post.url}}'><span class="TXT-celeste">{{post.title}}</span></a></p>
            </div>     
		{% endif %}
	{% endfor %}
{% endfor %}

<h3>Tools</h3>
{% for proj in site.data.portafoliofs %}
	{% for post in site.posts %}
		{% if post.id == proj.id and proj.category == "tools" %}
			<div class='postbox'>
          	<a href='{{site.url}}{{post.url}}'>
          		<img class="imgBW" alt="{{post.title}}" src="{{site.url}}{{post.thumb}}"> 
          	</a> 
            <p><a href='{{site.url}}{{post.url}}'><span class="TXT-celeste">{{post.title}}</span></a></p>
            </div>     
		{% endif %}
	{% endfor %}
{% endfor %}

    </div>
  </div>
