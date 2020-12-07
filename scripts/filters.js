// Функция фильтрации данных
function filterData(data, countries, starsList, typesButtons, reviewsAmount, priceSlider) {

    // Фильтрация по стране  и диапазону цен
    data = filterByCountry(data, countries, priceSlider);

    // Фильтрация по звездам
    data = filterByStars(data, starsList);

    // Фильтрация по типу
    data = filterByTypes(data, typesButtons);

    // Фильтрация по кол-ву отзывов
    data = filterByReviews(data, reviewsAmount);

    // Фильтрация по ценам
    data = filterByPrices(data, priceSlider);

    return data;
} // filterData

// Фильтрация по стране
function filterByCountry(data, countries) {
    if (countries.val() === "") return data;

    return data.filter(i => i.country === countries.val())
} // filterByCountry

// Фильтрация по звездам
function filterByStars(data, starsList) {
    // Генерация массива со звездами
    let stars = [];
    $.each(starsList.children("li"), function (i, item) {
        let input = $(item).children("input");
        if ($(input).prop("checked") == true) stars.push(Number($(input).val()));
    })

    if (stars.length === 0) return data;

    return data.filter(i => stars.includes(i.stars));
} // filterByStars

// Фильтрация по типам
function filterByTypes(data, typesButtons) {
    // Генерация массива с типами
    let types = [];
    $.each(typesButtons.children("li"), function (i, item) {
        let input = $(item).children("input");
        if ($(input).prop("checked") == true) types.push($(input).val());
    })

    if (types.length === 0) return data;

    return data.filter(i => types.includes(i.type));
} // filterByTypes

// Фильтрация по кол-ву отзывов
function filterByReviews(data, reviewsAmount) {
    if (reviewsAmount.val() === "") return data;
    return data.filter(i => i.reviews_amount >= Number(reviewsAmount.val()))
} // filterByReviews

// Фильтрация по диапазону цен
function filterByPrices(data, priceSlider) {
    let min_price = priceSlider.slider("option", "values")[0];
    let max_price = priceSlider.slider("option", "values")[1];

    return data.filter(i => i.min_price >= min_price && i.min_price <= max_price)
} // filterByPrices

// Функция очистки всех полей фильтров
function clearFilters(countries, starsList, types, reviewsAmount, priceSlider) {
    // Обнуление текста в поле ввода стран
    countries.val("");

    // Обнуление всех чекбоксов по звездам
    let listItems = starsList.children("li");
    $.each(listItems, function (i, item) {
        $(item).children("input").prop("checked", false);
    })

    // Обнуление всех чекбоксов по типам
    listItems = types.children("li");
    $.each(listItems, function (i, item) {
        $(item).children("input").prop("checked", false);
    })

    // Обнуление кол-во отзывов
    reviewsAmount.val("");

    // Обнуление значения слайдера
    let minSliderValue = priceSlider.slider("option", "min");
    let maxSliderValue = priceSlider.slider("option", "max");

    priceSlider.slider("option", "values", [minSliderValue, maxSliderValue]);
} // clearFilters