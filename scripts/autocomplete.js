// Инициализация автозаполнения стран
function countriesAutocomplete(filed, countries) {
    filed.autocomplete({
        appendTo: filed.parent("div"),
        source: countries,
        change: function (evet, ui) {
            if (ui.item == null) {
                $(this).val("");
            }
        }
    });
} // countriesAutocomplete