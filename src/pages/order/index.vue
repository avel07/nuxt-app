<script setup>

</script>

<template>
    <section class="my-5">
        <div class="container py-5 h-100">
            <div class="row g-3">
                <div class="col-md-5 col-lg-4 order-md-last">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span>Ваша корзина</span>
                        <span class="badge bg-dark rounded-pill">2</span>
                    </h4>

                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">Название продукта</h6>
                                <small class="text-muted">Краткое описание</small>
                                <div class="mt-2 small lh-1">
                                    <a href="#!" class="text-decoration-none text-reset">
                                        <i class="bi bi-cart-x"></i>
                                        <span class="text-muted">Удалить</span>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-end">
                                <span class="text-decoration-line-through">1000 руб.</span>
                                <span class="ms-2">500 руб.</span>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">Название продукта</h6>
                                <small class="text-muted">Краткое описание</small>
                                <div class="mt-2 small lh-1">
                                    <a href="#!" class="text-decoration-none text-reset">
                                        <i class="bi bi-cart-x"></i>
                                        <span class="text-muted">Удалить</span>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-end">
                                <span>500 руб.</span>
                            </div>
                        </li>

                        <li class="list-group-item d-flex justify-content-between bg-light">
                            <div class="text-success">
                                <h6 class="my-0">Скидка</h6>
                            </div>
                            <span class="text-success">500 руб.</span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between">
                            <span>Доставка</span>
                            <span>200 руб.</span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between">
                            <span>Итого</span>
                            <strong>700 руб.</strong>
                        </li>
                    </ul>

                    <form class="card p-2">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Промокод">
                            <button type="submit" class="btn btn-dark">Применить</button>
                        </div>
                    </form>
                </div>

                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">Оформление заказа</h4>
                    <form class="needs-validation" novalidate>
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <label for="firstName" class="form-label">Имя</label>
                                <input type="text" class="form-control" id="firstName" value required>
                            </div>

                            <div class="col-sm-6">
                                <label for="lastName" class="form-label">Фамилия</label>
                                <input type="text" class="form-control" id="lastName" value required>
                            </div>

                            <div class="col-12">
                                <label for="Email" class="form-label">Email</label>
                                <div class="input-group">
                                    <span class="input-group-text">@</span>
                                    <input type="email" class="form-control" id="Email" placeholder="Email" required>
                                </div>
                            </div>


                            <div class="col-md-12">
                                <label for="country" class="form-label">Страна</label>
                                <select class="form-select" id="country" required>
                                    <option value>Выберите...</option>
                                    <option>Россия</option>
                                    <option>Украина</option>
                                </select>
                            </div>

                            <div class="col-12">
                                <label for="address" class="form-label">Город</label>
                                <input type="text" class="form-control" id="address" placeholder="Москва" required>
                            </div>

                            <div class="col-12">
                                <label for="address2" class="form-label">Улица</label>
                                <input type="text" class="form-control" id="address2">
                            </div>

                            <div class="col-12">
                                <label for="address3" class="form-label">Дом</label>
                                <input type="text" class="form-control" id="address3">
                            </div>
                        </div>

                        <hr class="my-4">

                        <h4 class="mb-3">Доставка</h4>

                        <div class="my-3">
                            <div class="form-check">
                                <input id="delivery1" name="delivery" type="radio" class="form-check-input" checked
                                    required>
                                <label class="form-check-label" for="delivery1">Курьер</label>
                            </div>
                            <div class="form-check">
                                <input id="delivery2" name="delivery" type="radio" class="form-check-input" checked
                                    required>
                                <label class="form-check-label" for="delivery2">Самовывоз</label>
                            </div>
                        </div>

                        <hr class="my-4">

                        <h4 class="mb-3">Оплата</h4>

                        <div class="my-3">
                            <div class="form-check">
                                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked
                                    required>
                                <label class="form-check-label" for="credit">Кредитная карта</label>
                            </div>
                            <div class="form-check">
                                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
                                <label class="form-check-label" for="debit">Дебетовая карточка</label>
                            </div>
                            <div class="form-check">
                                <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required>
                                <label class="form-check-label" for="paypal">PayPal</label>
                            </div>
                        </div>

                        <hr class="my-4">
                        <button class="btn btn-dark btn-block btn-lg" type="submit">Оформить заказ</button>
                    </form>
                </div>
            </div>
        </div>
</section></template>