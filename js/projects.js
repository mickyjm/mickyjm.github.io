---
---

{% assign project_pages = site.pages | where: "type", "project" | sort: "date" | reverse %}

$(document).ready(function() {
    {% for page in project_pages %}
    {% unless page.draft %}
    $('#{{ page.id }}').click(function() {
        $('#{{ page.id }}Modal')
            .modal('setting', 'closable', false)
            .modal('setting', 'transition', 'horizontal flip')
            .modal('show');
    });
    {% if page.video %}
    $('#stop-{{ page.id }}Video').click(function() {
        $('#{{ page.id }}Video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
    {% endif %}
    {% endunless %}
    {% endfor %}
});
