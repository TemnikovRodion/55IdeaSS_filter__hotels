// Инициализация слайдера цены
function initializeSlider(slider) {
    slider.slider({
        animate: "slow",
        range: true,
        min: 0,
        max: 5000,
        values: [0, 5000],
        slide: function () {
            // Получение значений слайдера
            var lower = $(this).slider("values", 0);
            var upper = $(this).slider("values", 1);

            // Обновление поля цены слайдера
            $("#input_lower").val("от " + lower + " ₽");
            $("#input_upper").val("до " + upper + " ₽");
        },
        change: function (event, ui) {
            // Получение значений слайдера
            var lower = $(this).slider("values", 0);
            var upper = $(this).slider("values", 1);

            // Обновление поля цены слайдера
            $("#input_lower").val("от " + lower + " ₽");
            $("#input_upper").val("до " + upper + " ₽");
        }
    });
} // initializeSlider