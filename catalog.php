<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Kit Kraken</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	
	<link rel="stylesheet" href="/css/style2.css">
</head>
<body>
	<header>
		<div class="wrap_head">
			<div class="menu">
				<a href="#">меню</a>
			</div>
			<div class="logo">
				<img src="/img/logo.png" alt="">
			</div>
			<div class="nmb_user_basket">
				<p>+7 495 780 65 65</p>
				<a href="#"><img src="/img/assets/user.png" alt="user"></a>
				<a href="#"><img src="/img/assets/shopping-bag.png" alt="basket"></a>
			</div>
		</div>
	</header>
	<section>
		<div class="content" id="catalog">
			<div class="other_pages">
				<p>Главная</p>
				<p id="slash">\</p>
				<p>Каталог</p>
			</div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<h1>Коллекция кухонных моек и аксессуаров</h1>		
					</div>
					<div class="col-lg-3 lp-0">
						<div class="left-side">
							<h3 class="labels">товары</h3>
							<form class="radio">
								<input type="radio" name="category" value="all" id="all">
								<label for="all">Все</label><br>
								<input type="radio" name="category" value="kitchen sink" id="kitchen sink">
								<label for="kitchen sink">Кухонные мойки</label><br>
								<input type="radio" name="category" value="board" id="board">
								<label for="board">Разделочные доски</label><br>
								<input type="radio" name="category" value="table top" id="table top">
								<label for="table top">Столешницы</label><br>
								<input type="radio" name="category" value="stand" id="stand">
								<label for="stand">Подставки</label><br>
								<input type="radio" name="category" value="wall apron" id="wall apron">
								<label for="wall apron">Фартук</label>
							</form>
							<form id="polzun">
					          <label class="labels">Цена</label><br>
					          <div id="price-range"></div>
					      	</form>
					      	<p class="labels">Цвета</p>
					      	<form id="choose_colors">
					      		<div></div>
					      		<div></div>
					      		<div></div>
					      		<div></div>
					      		<div></div>
					      	</form>
					      	<div class="advanced_parameters">
					      		<p>Дополнительные параметры</p>
					      	</div>
						</div>
						<div id="back_to_constructor">
							<p>Перейти в конструктор</p>
						</div>
					</div>	
					<div class="col-lg-9 lp-0 rp-0">
						<div class="col-lg-12 lp-0 rp-0">
							<div class="view-and-sort">
								<div class="view">
									<div id="viewing">
										показать
									</div>
									<div id="nine">
										9
									</div>
									<div id="eighteen">
										18
									</div>
									<div id="thirty-six">
										36
									</div>
								</div>
								<div class="sort">
									<div id="sorting">
										сортировать
									</div>
									<div id="by_default">
										по-умолчанию
									</div>
									<div id="by_increase">
										возрастанию цены
									</div>
									<div id="by_decrease">
										убыванию цены
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-12 lp-0 rp-0">
							<div class="items">
								<div class="row only_row">
									<div class="col-lg-4">
										<div class="item river">
											<img src="img/catalog/river.png" alt="river">
											<div class="description">
												<div class="model">
													<p>модель</p>
													<p>River</p>
												</div>
												<div class="cost">
													<p>стоимость</p>
													<p>7500 &#8381;</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-4">
										<div class="item duolake mar-lef">
											<img src="img/catalog/duolake.png" alt="duolake">
											<div class="description">
												<div class="model">
													<p>модель</p>
													<p>Duolake</p>
												</div>
												<div class="cost">
													<p>стоимость</p>
													<p>7500 &#8381;</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-4">
										<div class="item gulf mar-lef">
											<img src="img/catalog/gulf.png" alt="gulf">
											<div class="description">
												<div class="model">
													<p>модель</p>
													<p>Gulf</p>
												</div>
												<div class="cost">
													<p>стоимость</p>
													<p>7500 &#8381;</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="row only_row">
									<div class="col-lg-4">
										<div class="item sea mar-top">
											<img src="img/catalog/sea.png" alt="sea">
											<div class="description">
												<div class="model">
													<p>модель</p>
													<p>Sea</p>
												</div>
												<div class="cost">
													<p>стоимость</p>
													<p>7500 &#8381;</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-4">
										<div class="item stream mar-top mar-lef">
											<img src="img/catalog/stream.png" alt="stream">
											<div class="description">
												<div class="model">
													<p>модель</p>
													<p>Stream</p>
												</div>
												<div class="cost">
													<p>стоимость</p>
													<p>7500 &#8381;</p>
												</div> 
											</div>
										</div>
									</div>
									<div class="col-lg-4">
										<div class="item gulf-and-creek mar-top mar-lef">
											<img src="img/catalog/gulf-and-creek.png" alt="gulf-and-creek">
											<div class="description">
												<div class="model">
													<p>модель</p>
													<p>Gulf &#38; Creek</p>
												</div>
												<div class="cost">
													<p>стоимость</p>
													<p>7500 &#8381;</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="row only_row">
									<div class="col-lg-4">
										<div class="item river mar-top">
											<img src="img/catalog/river.png" alt="river">
											<div class="description">
												<div class="model">
													<p>модель</p>
													<p>River</p>
												</div>
												<div class="cost">
													<p>стоимость</p>
													<p>7500 &#8381;</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-4">
										<div class="item duolake mar-lef mar-top">
											<img src="img/catalog/duolake.png" alt="duolake">
											<div class="description">
												<div class="model">
													<p>модель</p>
													<p>Duolake</p>
												</div>
												<div class="cost">
													<p>стоимость</p>
													<p>7500 &#8381;</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-4">
										<div class="item gulf mar-lef mar-top">
											<img src="img/catalog/gulf.png" alt="gulf">
											<div class="description">
												<div class="model">
													<p>модель</p>
													<p>Gulf</p>
												</div>
												<div class="cost">
													<p>стоимость</p>
													<p>7500 &#8381;</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="show">
							<p>показать еще</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<footer>
		<div class="content" id="footer_catalog">
			<div class="footer">
				<div class="logo_white">
					<img src="/img/constructor/logo2.png" alt="logo">
				</div>
				<div class="vert_line">
					<div class="little_vert_red"><img src="/img/constructor/little_vert_red.png" alt="little_vert_red"></div>
					<div class="little_vert_white"><img src="/img/constructor/little_vert_white.png" alt="little_vert_white"></div>
				</div>
				<div class="wrap_foot">
					<div class="first_column">
						<div class="telephone">
							<div class="label_telephone">
								<p>Телефон: </p>
							</div>
							<div class="telephone_number">
								<p> +7 495 777 77 77</p>
							</div>
						</div>
						<div class="email">
							<div class="label_email">
								<p>Email: </p>
							</div>
							<div class="email_address">
								<p> support@kitkraken.com</p>
							</div>
						</div>
						<div class="copyright">
							<p>&#169; 2019, все права защищены</p>
						</div>
					</div>
					<div class="social_sites">
						<a class="facebook" href="#">
							<img src="/img/constructor/facebook.png" alt="facebook">
						</a>
						<a class="instagram" href="#">
							<img src="/img/constructor/instagram.png" alt="instagram">
						</a>
						<a class="vk" href="#">
							<img src="/img/constructor/vk.png" alt="vk">
						</a>
					</div>
					<div class="sign">
						<div class="up_sign">
							<p>Подпишитесь на рассылку</p>
						</div>
						<div class="down_sign">
							<p>Получите возможность первыми узнавать о новостях и эксклюзивных предложениях</p>
						</div>
						<form class="email_form">
							<input type="email" placeholder="Email">
						</form>
					</div>
				</div>
			</div>
		</div>
		<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    	<script
			  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
			  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
			  crossorigin="anonymous"></script>
    	<script src="/js/main.js"></script>
	</footer>
</body>
</html>		