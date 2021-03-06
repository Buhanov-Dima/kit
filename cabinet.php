<?php include ('head.php'); ?>

<body class="dark_body">

<?php include ('header-black.php'); ?>

	<!-- bread crumbs -->

<div class="wrap-crumbs">
	<div class="bread_crumbs"> 
		<a href="#">Главная</a>
		<span>\</span>
		<a href="#">О компании</a>
	</div>
</div>


<section class="content_user">
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-12">
				<div class="wrap_cabinet">
					<div class="user">
						<img src="/img/user/us1.png" alt="">
						<div>
							<span>Пользователь</span>
							<p>Александров Р. К.</p>
						</div>
					</div>
					<div class="balance">
						<span>Ваш баланс</span>
						<p>250 000,00 рублей</p>
					</div>
					<div class="level">
						<span>уровень скидки</span>
						<p>Оптовый 1 (10%)</p>
					</div>
					<div class="next_pay">
						<span>ближайший платеж</span>
						<p>Платежей нет</p>
					</div>
					<div class="logout"><img src="/img/assets/log-out.png" alt=""></div>
					<div class="user_docs">
						<a href="#"><img src="/img/assets/xls.png" alt="">Скачать каталог</a>
						<a href="#"><img src="/img/assets/xls-1.png" alt="">Скачать прайс</a>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12">
				<div class="wrap_user_card">
					<div id="tab_box" class="user_card">
						<a href="#tab-1" class="active">Мои заказы</a>
						<a href="#tab-2">Товары</a>
						<a href="#tab-3">Отслеживание груза</a>
						<a href="#tab-4">Моя компания</a>
						<a href="#tab-5">Ваш менеджер</a>
					</div>
					<div class="usr_cnt_info">
						<div id="tab-1" class="tab_order">
							<div class="order_bar">
								<p>ID</p>
								<p>статус</p>
								<p>сумма</p>
								<p>платежная система</p>
								<p>подробнее</p>
							</div>
							<div class="wrap_order_info">
								<div class="order_info">
									<div class="order_id expected">000015</div>
									<div class="order_status">Принят, ожидается оплата</div>
									<div class="order_cost">216 598 руб.</div>
									<div class="pay_system">Банковский перевод</div>
									<div class="order_read"><a href="#">Перейти</a></div>
								</div>

								<div class="order_info">
									<div class="order_id expected">000015</div>
									<div class="order_status">Принят, ожидается оплата</div>
									<div class="order_cost">216 598 руб.</div>
									<div class="pay_system">Банковский перевод</div>
									<div class="order_read"><a href="#">Перейти</a></div>
								</div>

								<div class="order_info">
									<div class="order_id sucsess">000015</div>
									<div class="order_status">Выполнен</div>
									<div class="order_cost">216 598 руб.</div>
									<div class="pay_system">Банковский перевод</div>
									<div class="order_read"><a href="#">Перейти</a></div>
								</div>

								<div class="order_info">
									<div class="order_id fail">000015</div>
									<div class="order_status">Отменен</div>
									<div class="order_cost">216 598 руб.</div>
									<div class="pay_system">Банковский перевод</div>
									<div class="order_read"><a href="#">Перейти</a></div>
								</div>

								<div class="order_info">
									<div class="order_id sucsess">000015</div>
									<div class="order_status">Принят, ожидается оплата</div>
									<div class="order_cost">216 598 руб.</div>
									<div class="pay_system">Банковский перевод</div>
									<div class="order_read"><a href="#">Перейти</a></div>
								</div>
							</div>
						</div>


						<div id="tab-2" class="tab_order">
							<form action="" class="products_form">
								<input type="search" class="input_article" placeholder="Укажите артикул или несколько артикулов через запятую">
								<input type="submit" class="article_submit" value="найти">
							</form>

							<div class="products_info">
								<p>Картинка</p>
								<p>Название</p>
								<p>артикул</p>
								<p>остаток</p>
								<p>сумма</p>
							</div>

							<div class="wrap_products">
								<div class="products_box">
									<div class="products_img"><img src="/img/thumbs/05.png" alt=""></div>
									<div class="products_name">Кухонная мойка Gulf Y-900M</div>
									<div class="products_article">Y-900M</div>
									<div class="products_balance">58 шт.</div>
									<div class="products_cost">16 598 руб.</div>
									<div class="products_basket"><a href="#">В корзину</a></div>
								</div>

								<div class="products_box">
									<div class="products_img"><img src="/img/thumbs/05.png" alt=""></div>
									<div class="products_name">Кухонная мойка Gulf Y-900M</div>
									<div class="products_article">Y-900M</div>
									<div class="products_balance">58 шт.</div>
									<div class="products_cost">16 598 руб.</div>
									<div class="products_basket"><a href="#">В корзину</a></div>
								</div>

								<div class="products_box">
									<div class="products_img"><img src="/img/thumbs/05.png" alt=""></div>
									<div class="products_name">Кухонная мойка Gulf Y-900M</div>
									<div class="products_article">Y-900M</div>
									<div class="products_balance">58 шт.</div>
									<div class="products_cost">16 598 руб.</div>
									<div class="products_basket"><a href="#">В корзину</a></div>
								</div>

								<div class="products_box">
									<div class="products_img"><img src="/img/thumbs/05.png" alt=""></div>
									<div class="products_name">Кухонная мойка Gulf Y-900M</div>
									<div class="products_article">Y-900M</div>
									<div class="products_balance">58 шт.</div>
									<div class="products_cost">16 598 руб.</div>
									<div class="products_basket"><a href="#">В корзину</a></div>
								</div>

								<div class="products_box">
									<div class="products_img"><img src="/img/thumbs/05.png" alt=""></div>
									<div class="products_name">Кухонная мойка Gulf Y-900M</div>
									<div class="products_article">Y-900M</div>
									<div class="products_balance">58 шт.</div>
									<div class="products_cost">16 598 руб.</div>
									<div class="products_basket"><a href="#">В корзину</a></div>
								</div>

							</div>
						</div>


						<div id="tab-3" class="tab_order">
							<form action="" class="products_form">
								<input type="search" class="input_article" placeholder="Укажите ID заказа">
								<input type="submit" class="article_submit" value="найти">
							</form>

							<div class="wrap_tracking">
								<div class="tracking">
									<div class="tracking_id weiting">000015</div>
									<div class="tracking_name">Кухонная мойка Gulf Y-900M</div>
									<div class="tracking_cost">216 598 руб.</div>

									<div class="tracking_bar">
										<div class="tracking_date_id active">
											<p>Заказ 000015</p>
											<img src="/img/assets/ok.png" alt="">
											<span>11.02.2019 - 18:16</span>
										</div>
										<div class="tracking_issued active">
											<p>груз выдан</p>
											<img src="/img/assets/ok.png" alt="">
											<span>11.02.2019 - 18:16</span>
										</div>
										<div class="tracking_transit weiting">
											<p>в пути</p>
											<img src="/img/assets/ok.png" alt="">
											<span>11.02.2019 - 18:16</span>
										</div>
										<div class="tracking_arrived">
											<p>груз прибыл</p>
											<img src="/img/assets/ok.png" alt="">
											<span>11.02.2019 - 18:16</span>
										</div>
										<div class="tracking_accepted">
											<p>Принят</p>
											<img src="/img/assets/sucsses.png" alt="">
											<span>11.02.2019 - 18:16</span>
										</div>
									</div>
								</div>


								<div class="tracking">
									<div class="tracking_id sucsses">000015</div>
									<div class="tracking_name">Кухонная мойка Gulf Y-900M</div>
									<div class="tracking_cost">216 598 руб.</div>
									<div class="tracking_bar">
										<div class="tracking_date_id sucsses">
											<p>Заказ 000015</p>
											<img src="/img/assets/ok.png" alt="">
											<span>11.02.2019 - 18:16</span>
										</div>
										<div class="tracking_issued sucsses">
											<p>груз выдан</p>
											<img src="/img/assets/ok.png" alt="">
											<span>11.02.2019 - 18:16</span>
										</div>
										<div class="tracking_transit sucsses">
											<p>в пути</p>
											<img src="/img/assets/ok.png" alt="">
											<span>11.02.2019 - 18:16</span>
										</div>
										<div class="tracking_arrived sucsses">
											<p>груз прибыл</p>
											<img src="/img/assets/ok.png" alt="">
											<span>11.02.2019 - 18:16</span>
										</div>
										<div class="tracking_accepted sucsses">
											<p>Принят</p>
											<img src="/img/assets/ok.png" alt="">
											<span>11.02.2019 - 18:16</span>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div id="tab-4" class="tab_order">

							<div class="my_compay_info">
								<p>название</p>
								<p>баланс</p>
								<p>контакты</p>
								<p>реквизиты</p>
							</div>

							<div class="wrap_my_company">

								<div class="my_company_box">
									<div class="my_company_name">ООО “Кот Кракен”</div>
									<div class="my_company_balance">250 000 руб.</div>
									<div class="my_company_contacts">
										<p><span>Телефон:</span>+7 495 254 24 24</p>
										<p><span>Факс:</span>+7 495 254 24 24</p>
									</div>
									<div class="my_company_requisites">
										<p><span>Ген. директор:</span>Кробончук Юрий Валерьевич</p>
										<p><span>Гл. бухгалтер:</span>Семенова Надежда Сергеевна</p>
										<p><span>ИНН:</span>500100700200</p>
										<p><span>КПП:</span>3528010000</p>
										<p><span>Код по ОКПО:</span>09808111</p>
										<p><span>Юр. адрес:</span>г. Москва, ул. Проспект мира, 123</p>
										<p><span>Полное наименование банка:</span>ОАО “Сбербанк”, г. Москва</p>
										<p><span>Корреспондентский счет:</span>3010100000000000001</p>
										<p><span>Расчетный счет:</span>4010100000000000001</p>
									</div>
								</div>

								<div class="my_company_box">
									<div class="my_company_name">ООО “Кот Кракен”</div>
									<div class="my_company_balance">250 000 руб.</div>
									<div class="my_company_contacts">
										<p><span>Телефон:</span>+7 495 254 24 24</p>
										<p><span>Факс:</span>+7 495 254 24 24</p>
									</div>
									<div class="my_company_requisites">
										<p><span>Ген. директор:</span>Кробончук Юрий Валерьевич</p>
										<p><span>Гл. бухгалтер:</span>Семенова Надежда Сергеевна</p>
										<p><span>ИНН:</span>500100700200</p>
										<p><span>КПП:</span>3528010000</p>
										<p><span>Код по ОКПО:</span>09808111</p>
										<p><span>Юр. адрес:</span>г. Москва, ул. Проспект мира, 123</p>
										<p><span>Полное наименование банка:</span>ОАО “Сбербанк”, г. Москва</p>
										<p><span>Корреспондентский счет:</span>3010100000000000001</p>
										<p><span>Расчетный счет:</span>4010100000000000001</p>
									</div>
								</div>
									
							</div>

							<div class="wrap_my_company">
							
								<div class="my_company_box">
									<div class="my_company_name">ООО “Кот Кракен”</div>
									<div class="my_company_balance">250 000 руб.</div>
									<div class="my_company_contacts">
										<p><span>Телефон:</span>+7 495 254 24 24</p>
										<p><span>Факс:</span>+7 495 254 24 24</p>
									</div>
									<div class="my_company_requisites">
										<p><span>Ген. директор:</span>Кробончук Юрий Валерьевич</p>
										<p><span>Гл. бухгалтер:</span>Семенова Надежда Сергеевна</p>
										<p><span>ИНН:</span>500100700200</p>
										<p><span>КПП:</span>3528010000</p>
										<p><span>Код по ОКПО:</span>09808111</p>
										<p><span>Юр. адрес:</span>г. Москва, ул. Проспект мира, 123</p>
										<p><span>Полное наименование банка:</span>ОАО “Сбербанк”, г. Москва</p>
										<p><span>Корреспондентский счет:</span>3010100000000000001</p>
										<p><span>Расчетный счет:</span>4010100000000000001</p>
									</div>
								</div>

								<div class="my_company_box">
									<div class="my_company_name">ООО “Кот Кракен”</div>
									<div class="my_company_balance">250 000 руб.</div>
									<div class="my_company_contacts">
										<p><span>Телефон:</span>+7 495 254 24 24</p>
										<p><span>Факс:</span>+7 495 254 24 24</p>
									</div>
									<div class="my_company_requisites">
										<p><span>Ген. директор:</span>Кробончук Юрий Валерьевич</p>
										<p><span>Гл. бухгалтер:</span>Семенова Надежда Сергеевна</p>
										<p><span>ИНН:</span>500100700200</p>
										<p><span>КПП:</span>3528010000</p>
										<p><span>Код по ОКПО:</span>09808111</p>
										<p><span>Юр. адрес:</span>г. Москва, ул. Проспект мира, 123</p>
										<p><span>Полное наименование банка:</span>ОАО “Сбербанк”, г. Москва</p>
										<p><span>Корреспондентский счет:</span>3010100000000000001</p>
										<p><span>Расчетный счет:</span>4010100000000000001</p>
									</div>
								</div>
									
							</div>
						</div>

						<div id="tab-5" class="tab_order">
							<div class="wrap_manager">
								<div class="manager">
									<div class="manger_photo"><img src="/img/user/m1.png" alt=""></div>
									<div class="manager_name">
										<span>ФИО</span>
										<p>Степаненко Наталья Юрьевна</p>
									</div>
									<div class="manager_position">
										<span>Должность</span>
										<p>Менеджер</p>
									</div>
									<div class="manager_phone">
										<span>Телефон</span>
										<p>+7 495 457-16-99 (доб. 101)</p>
									</div>
									<div class="manager_mail">
										<span>Email</span>
										<a href="mailto:managersnu@kitkraken.ru">managersnu@kitkraken.ru</a>
									</div>
									<div class="manager_callback">
										<button class="man_btn">Обратная связь</button>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</section>

	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
	<script src="/js/main.js"></script>
</body>
</html>