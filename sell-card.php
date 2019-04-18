<?php include ('head.php'); ?>

<body>

<?php include ('header.php'); ?>

<!-- bread crumbs -->

<div class="wrap-crumbs">
	<div class="bread_crumbs dark"> 
		<a href="#">Главная</a>
		<span>\</span>
		<a href="#">О компании</a>
	</div>
</div>

<!-- CONTENT -->

<section class="sell_content">
	<div class="container-fluid">
		<h1 class="main_h2">Оформление заказа</h1>
		<div class="row">
			<div class="col-lg-12">
				<div class="wrap-item-sell">
					<div class="sell_card">
						<div class="sell_info">
							<div class="product"><p>Товар</p></div>
							<div class="product_costs"><p>Стоимость</p></div>
							<div class="product_items"><p>Количество</p></div>
							<div class="product_all"><p>Всего</p></div>
						</div>
						<div class="item_sells">
							<div class="item_sell">
								<img src="/img/thumbs/gulf.png" alt="">
								<p>Кухонная мойка Gulf</p>
							</div>
							<div class="item_cost">
								<p>18 999 руб.</p>
							</div>
							<div class="items_sell">
								<span>-</span>
								<div>1</div>
								<span>+</span>
							</div>
							<div class="items_cost">
								<p>18 999 руб</p>
							</div>
							<div class="delete_item">
								<p class="close_sell_item">+</p>
							</div>
						</div>

						<div class="item_sells">
							<div class="item_sell">
								<img src="/img/thumbs/02.png" alt="">
								<p>Столешница (Белый мрамор)</p>
							</div>
							<div class="item_cost">
								<p>17 999 руб.</p>
							</div>
							<div class="items_sell">
								<span>-</span>
								<div>2</div>
								<span>+</span>
							</div>
							<div class="items_cost">
								<p>17 999 руб</p>
							</div>
							<div class="delete_item">
								<p class="close_sell_item">+</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-6">
				<form action="" class="in_radio">
					<div class="sell_form">
						<span>Способ оплаты</span>
						<div class="sell_radio">
							<input type="radio" name="rad" class="radio" id="radio1" />
							<label for="radio1">Выставить счет</label>
							<input type="radio" name="rad" class="radio" id="radio" />
							<label for="radio">Онлайн-оплата картой </label>
							<div class="pay_card_hov"><img src="/img/assets/question.png" class="ques" alt="">
								<div class="pay_card">В случае отказа отмены заказа, денежные средства вернутся в течение 10 дней после возвращения товара на склад или отмены заказа.</div>
							</div>
						</div>
						<div class="sell_input">
							<input type="text" placeholder="Иван">
							<input type="text" placeholder="+7 999 999 99 99">
						</div>
					</div>


					<div class="sell_form">
						<span>Способ доставки</span>
						<div class="sell_radio">
							<input type="radio" name="rad2" class="radio" id="radio2" />
							<label for="radio2">Доставка (бесплатно)</label>
							<input type="radio" name="rad2" class="radio" id="radio3" />
							<label for="radio3">Пункт выдачи</label>
						</div>
						<div class="sell_input">
							<select name="" id="">
								<option value="">Москва</option>
								<option value="">Самара</option>
							</select>

							<select name="" id="">
								<option value="">Златоустинский переулок</option>
								<option value="">Златоустинский</option>
							</select>
						</div>
					</div>
				</form>
			</div>
			
			<div class="d-none d-md-block col-lg-6">
				<div class="sell_map">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.98279590009!2d37.60001031539054!3d55.7414279003374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54babe720aabb%3A0x2eb5a156beecd385!2z0J_QvtC20LDRgNGB0LrQuNC5INC_0LXRgC4sIDYsINCc0L7RgdC60LLQsCwgMTE5MDM0!5e0!3m2!1sru!2sru!4v1554734940907!5m2!1sru!2sru" width="100%" height="226" frameborder="0" style="border:0" allowfullscreen></iframe>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12">
				<div class="wrap-sell-weight">
					<div class="sell-weight">
						<p>Общий вес: <span>8.25 кг</span></p>
					</div>
					<div class="sell_btn">
						<input type="submit" class="sell_submit" value="Оформить заказ" >
						<p>Нажимая кнопку «Оформить заказ» вы даете согласие на обработку персональных данных.</p>
					</div>
					<div class="sell-costs">
						<p>Итого к оплате: <span>37 398 руб.</span></p>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-10 mx-auto">
				<div class="help_sell">
					<a href="#"><img src="/img/assets/01.png" alt="">Сборка и установка</a>
					<a href="#"><img src="/img/assets/02.png" alt="">Оплата</a>
					<a href="#"><img src="/img/assets/03.png" alt="">Доставка</a>
					<a href="#"><img src="/img/assets/04.png" alt="">Обмен и возврат товара</a>
					<a href="#"><img src="/img/assets/05.png" alt="">Гарантия</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!--footer-->

<?php include ('footer.php'); ?>