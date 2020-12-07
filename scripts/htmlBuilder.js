// Функция формиования списка отелей
function createHotelsList(data) {
    $("main").html("")
    $.each(data, function (i, item) {
        var listItem =
            `<section class="card">
                <div class="card_content">
                    <h3 class="card_name">
                        ${item.name}
                    </h3>
                    <p class="card_rating">
                        ${getStartList(item.stars)}
                        <span class="card_name_description">${item.type}</span>
                        <span class="card_reviews_amount">
                        <i class="fas fa-circle"></i>
                        ${item.reviews_amount} отзывов
                    </span>
                    <span class="card_name_country">
                        <i class="fas fa-map-marker-alt"></i>
                        ${item.country}
                        </span>
                    </p>
                    <p class="card_description">
                        ${item.description}
                    </p>
                </div>

                    <div class="card_price">
                        <span class="card_price_cost">
                            ${item.min_price} &#8381;
                            <p class="card_price_text">Цена за 1 ночь</p>
                        </span>
                        <button class="card_reserve"><i class="fas fa-window-maximize"></i>Забронировать</button>
                    </div>
            </section>`

        $("main").append(listItem);
    })
} // createHotelsList

// Функция получения блока со звездами
function getStartList(starsCount) {
    switch (starsCount) {
        case 1:
            return `<i class="fas fa-star"></i>
                    <span class="card_rating_description">${starsCount} звезда</span>`;

        case 2:
            return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="card_rating_description">${starsCount} звезды</span>`;

        case 3:
            return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="card_rating_description">${starsCount} звезды</span>`;

        case 4:
            return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="card_rating_description">${starsCount} звезды</span>`;

        case 5:
            return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="card_rating_description">${starsCount} звезд</span>`;
    }
} // getStartList

function searchNoResult() {
    $("main").html(`<div class="card_noresult">
    <span class="card_noresult__image"><img src="/img/noResult.png"></span>
    <h3 class="card_noresult__search">По данным параметрам ничего не найдено</h3>
    <p class="card_noresult__text">Попробуйте изменить параметры фильтрации или вернуться в общий каталог</p>
    <button class="filter_remove btn-clear-filter">Очистить фильтр</button>
    </div>`)
} // searchNoResult