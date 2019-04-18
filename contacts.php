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
<section class="cnt-contacts">

	<div class="container-fluid">
		<h1 class="main_h2">контакты</h1>
		<div class="row">
			<div class="col-lg-6 col-md-12">
				<div class="map">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.9827959000895!2d37.600010315390534!3d55.74142790033741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54babe720aabb%3A0x2eb5a156beecd385!2z0J_QvtC20LDRgNGB0LrQuNC5INC_0LXRgC4sIDYsINCc0L7RgdC60LLQsCwgMTE5MDM0!5e0!3m2!1sru!2sru!4v1554575559104!5m2!1sru!2sru" width="100%" height="470" frameborder="0" style="border:0" allowfullscreen></iframe>
					<div class="map-info">
						<h3>Москва</h3>
						<span>Адрес</span>
						<p>Метро Проспект Мира, ул. Заводское шоссе, 11</p>
						<span>Телефон</span>
						<p>+7 926 998 78 54</p>
						<span>Режим работы</span>
						<p>с 10:00 до 22:00, ежедневно</p>
					</div>
				</div>
			</div>

			<div class="col-lg-6 col-md-12">
				<div class="map ml-auto">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128562.95775247761!2d50.26614880584425!3d53.21871373614704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416618e22bd879d3%3A0xba95cda9bb3a030b!2z0KHQsNC80LDRgNCwLCDQodCw0LzQsNGA0YHQutCw0Y8g0L7QsdC7Lg!5e0!3m2!1sru!2sru!4v1554575711237!5m2!1sru!2sru" width="100%" height="470" frameborder="0" style="border:0" allowfullscreen></iframe>
					<div class="map-info">
						<h3>Самара</h3>
						<span>Адрес</span>
						<p>Метро Проспект Мира, ул. Заводское шоссе, 11</p>
						<span>Телефон</span>
						<p>+7 926 998 78 54</p>
						<span>Режим работы</span>
						<p>с 10:00 до 22:00, ежедневно</p>
					</div>
				</div>
			</div>
		</div>
	</div>

</section>

<section class="cnt">
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-12">
				<h1 class="main_h2">Напишите нам</h1>
				<div class="wrap_contacts_form">
					<form class="contacts_form" action="">
						<div class="cnt_form_flex">
							<input type="text" class="cnt_phone" placeholder="Ваш телефон*">
							<input type="text" class="cnt_phone" placeholder="Ваш телефон*">
						</div>
						<div class="cnt_form_flex">
							<input type="text" class="cnt_mail" placeholder="Ваш почта*">
							<div class="d-flex">
								<img src="/img/contacts/captcha.png" alt="ReCaptcha">
								<input type="text" id="cnt_captcha" placeholder="Код с картинки*">
							</div>
						</div>
						<div class="txt_input">
							<textarea name="" id="txt_area" placeholder="Ваше сообщение"></textarea>
						</div>
						<input type="submit" class="contacts_submit" value="отправить">
					</form>
					<p>* Обязательные поля для заполнения</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="contacts_mail">
					<a href="mailto:info@kitkraken.ru">info@kitkraken.ru</a>
					<p>Вопросы, касающиеся сотрудничества</p>
				</div>
			</div>
			<div class="col">
				<div class="contacts_mail">
					<a href="mailto:info@kitkraken.ru">info@kitkraken.ru</a>
					<p>Вопросы, касающиеся сотрудничества</p>
				</div>
			</div>
			<div class="col">
				<div class="contacts_mail">
					<a href="mailto:info@kitkraken.ru">info@kitkraken.ru</a>
					<p>Вопросы, касающиеся сотрудничества</p>
				</div>
			</div>
			<div class="col">
				<div class="contacts_mail">
					<a href="mailto:info@kitkraken.ru">info@kitkraken.ru</a>
					<p>Вопросы, касающиеся сотрудничества</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!--footer-->

<?php include ('footer.php'); ?>