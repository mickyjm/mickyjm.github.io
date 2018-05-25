---
---

{% assign project_pages = site.pages | where: "type", "project" | sort: "date" | reverse %}

$(document).ready(function() {
    {% for page in project_pages %}
    {% unless page.draft %}
    $('#{{ page.id }}').click(function() {
        $('#{{ page.id }}Modal').modal('setting', 'transition', 'horizontal flip').modal('show');
    });
    {% endunless %}
    {% endfor %}
});
