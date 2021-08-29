// data
var dataFromBd = '{"header":["date","name","id","image","name","price","quantity","removed"],"rows":[["2017-10-16 12:07:07","Расход","564564867361367","http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg","Творог 9% с курагой","121.0","45","0"],["2017-10-16 12:07:07","Расход","564564867361367","https://www.utkonos.ru/images/photo/3265/3265004H.jpg","Молочный Яблоко 100","25.1","44","0"],["2017-10-16 12:07:07","Расход","564564867361367","http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG","Молочный Традиция 100","115.0","62","0"],["2017-10-16 12:07:07","Расход","564564867361367","NULL","Виноград 0,3л","65.0","87","0"],["2017-10-16 12:07:07","Расход","564564867361367","https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","Русская картошка чедар 50","46.3","86","0"],["2017-10-16 12:07:07","Расход","564564867361367","https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg","Молочный Груша 200","180.0","80","0"],["2017-10-16 12:07:07","Расход","564564867361367","https://www.utkonos.ru/images/photo/3054/3054289H.jpg","Аленка карамель 100г Акционный товар Большая скидка","73.9","94","0"],["2017-10-16 12:07:07","Расход","564564867361367","https://www.utkonos.ru/images/photo/3176/3176192H.jpg","Сыр 125г","131.0","83","0"],["2017-10-16 15:09:08","Расчет","564564867361368","http://карапузик.com.images.1c-bitrix-cdn.ru/upload/iblock/b28/b28f089d41db757b74cfebfe21609228.jpg","Яблоко-Виноград 0,5л","44.0","20","0"],["2017-10-16 15:09:08","Расчет","564564867361368","https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg","Молочный Груша 200","180.0","65","0"],["2017-10-16 15:09:08","Расчет","564564867361368","http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg","Творог 9% с курагой","121.0","41","0"],["2017-10-16 15:09:08","Расчет","564564867361368","https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg","Молочный Изюм 100","102.0","72","0"],["2017-10-16 15:09:08","Расчет","564564867361368","NULL","Виноград 0,3л","65.0","39","0"],["2017-10-16 18:11:09","Приход","564564867361369","http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG","Молочный Традиция 100","115.0","60","0"],["2017-10-16 18:11:09","Приход","564564867361369","https://www.utkonos.ru/images/photo/3054/3054289H.jpg","Аленка карамель 100г Акционный товар Большая скидка","73.9","99","0"],["2017-10-16 18:11:09","Приход","564564867361369","https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","Русская картошка чедар 50","46.3","51","0"],["2017-10-16 18:11:09","Приход","564564867361369","https://www.utkonos.ru/images/photo/3117/3117496H.jpg","Русская картошка икра 50","33.1","15","0"],["2017-11-01 12:09:03","Приход","564564867361360","https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg","Молочный Груша 200","180.0","96","0"],["2017-11-01 12:09:03","Приход","564564867361360","NULL","Парус апельсин 1л","150.0","89","1"],["2017-11-01 12:09:03","Приход","564564867361360","https://www.utkonos.ru/images/photo/3265/3265004H.jpg","Молочный Яблоко 100","25.1","9","0"],["2017-11-03 13:11:06","Приход","564564867361361","https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","Русская картошка чедар 50","46.3","62","0"],["2017-11-03 13:11:06","Приход","564564867361361","http://produkty-online.ru/wa-data/public/shop/products/31/83/18331/images/1359/1359.970.jpg","Молочный Сказка 100","39.0","67","0"],["2017-11-03 13:11:06","Приход","564564867361361","https://www.utkonos.ru/images/photo/3139/3139296H.jpg","Тоник 0,5л","63.0","51","0"],["2017-11-03 13:11:06","Приход","564564867361361","https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg","Молочный Изюм 100","102.0","4","0"],["2017-11-03 13:11:06","Приход","564564867361361","http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg","Творог 9% с курагой","121.0","60","0"],["2017-11-03 13:11:06","Приход","564564867361361","NULL","Виноград 0,3л","65.0","61","0"],["2017-11-03 13:11:06","Приход","564564867361361","http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png","Беседа. 50гр","36.5","41","0"],["2017-11-03 13:11:06","Приход","564564867361362","https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg","Молочный Изюм 100","102.0","3","0"],["2017-11-03 13:11:06","Приход","564564867361362","https://www.utkonos.ru/images/photo/3176/3176192H.jpg","Сыр 125г","131.0","96","0"],["2017-11-03 13:11:06","Приход","564564867361362","https://www.utkonos.ru/images/photo/3139/3139296H.jpg","Тоник 0,5л","63.0","31","0"],["2017-11-03 13:11:06","Приход","564564867361362","NULL","Парус лимон 1л","150.0","52","1"],["2017-11-03 13:11:06","Приход","564564867361362","http://www.svoda.ru/site/userfiles/images/%D0%9A%D0%90%D0%9F%D0%9B%D0%AF%20%D0%A0%D0%9E%D0%A1%D0%AB%201.5%D0%9B%20%D0%93%D0%90%D0%97%D0%98%D0%A0%D0%9E%D0%92%D0%90%D0%9D%D0%9D%D0%90%D0%AF.jpg","Капля росы негаз 1.5л","16.9","16","0"],["2017-11-03 13:11:06","Приход","564564867361362","http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg","Нежирный творог","52.41","81","0"],["2017-11-03 13:11:06","Приход","564564867361362","http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg","Творог 9% с курагой","121.0","23","0"],["2017-11-03 13:11:06","Приход","564564867361362","https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg","Горький коньяк 100","336.0","52","0"],["2017-11-03 13:11:06","Приход","564564867361362","https://www.utkonos.ru/images/photo/3054/3054289H.jpg","Аленка карамель 100г Акционный товар Большая скидка","73.9","12","0"],["2017-11-29 17:26:57","Приход","564564867361365","https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","Русская картошка чедар 50","46.3","3","0"],["2017-11-29 17:26:57","Приход","564564867361365","NULL","Виноград 0,3л","65.0","88","0"],["2017-11-29 17:26:57","Приход","564564867361365","http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg","Нежирный творог","52.41","20","0"],["2017-11-29 17:26:57","Приход","564564867361365","https://www.utkonos.ru/images/photo/3139/3139296H.jpg","Тоник 0,5л","63.0","64","0"],["2017-11-29 17:26:57","Приход","564564867361365","http://produkty-online.ru/wa-data/public/shop/products/31/83/18331/images/1359/1359.970.jpg","Молочный Сказка 100","39.0","54","0"],["2017-11-29 17:26:57","Приход","564564867361365","NULL","Парус апельсин 1л","150.0","88","1"],["2017-11-29 17:26:57","Приход","564564867361365","https://teremok.sm.ua/wa-data/public/shop/products/82/25/82582/images/35179/35179.750@2x.jpg","Сметана и лук 25г","30.0","33","0"],["2017-11-29 17:26:57","Приход","564564867361365","http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png","Беседа. 50гр","36.5","6","0"],["2017-11-29 17:26:57","Приход","564564867361365","NULL","Парус лимон 1л","150.0","65","1"],["2017-11-29 18:29:00","Расход","564564867361364","http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG","Молочный Традиция 100","115.0","64","0"],["2017-11-29 19:31:03","Приход","564564867361363","https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","Русская картошка чедар 50","46.3","6","0"],["2017-11-29 19:31:03","Приход","564564867361363","https://teremok.sm.ua/wa-data/public/shop/products/82/25/82582/images/35179/35179.750@2x.jpg","Сметана и лук 25г","30.0","18","0"],["2017-11-29 19:31:03","Приход","564564867361363","http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png","Беседа. 50гр","36.5","99","0"],["2017-11-29 19:31:03","Приход","564564867361363","https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg","Горький коньяк 100","336.0","94","0"],["2017-11-29 19:31:03","Приход","564564867361363","https://www.utkonos.ru/images/photo/3176/3176192H.jpg","Сыр 125г","131.0","64","0"],["2017-11-29 19:31:03","Приход","564564867361363","https://www.utkonos.ru/images/photo/3265/3265004H.jpg","Молочный Яблоко 100","25.1","52","0"],["2017-11-29 19:31:03","Приход","564564867361363","NULL","Парус апельсин 1л","150.0","43","1"]]}';
var data = JSON.parse(dataFromBd);
var dataConvert = [];
var dateLength = 10;
var day = 0;
var documentPosition = 0;
var days = [];
var documents = [];
var documentCount = 0;
var documentCost = 0;
var productCount = 0;
var productCost = 0;
var month = {
  10: 'Октября',
  11: 'Ноября'
}

// templates
var dayTemplate = document.querySelector('#day').content;
var documentTemplate = document.querySelector('#document').content;
var productTemplate = document.querySelector('#product').content;

// main html element
var dayList = document.querySelector('.day-list');

// Преобразуем данные в новый массив с объектами данных
for(var i = 0; i < data['rows'].length; i++) {
  var row = {
    [data['header'][0]]: data['rows'][i][0],
    ['document-name']: data['rows'][i][1],
    [data['header'][2]]: data['rows'][i][2],
    [data['header'][3]]: data['rows'][i][3],
    [data['header'][4]]: data['rows'][i][4],
    [data['header'][5]]: data['rows'][i][5],
    [data['header'][6]]: data['rows'][i][6],
    [data['header'][7]]: data['rows'][i][7],
  };
  dataConvert.push(row);
}

// создаём массив с данными по дням
for(var i = 0; i < dataConvert.length; i++) {
  if (i === 0) {
    documentCount++;
    documentCost += (dataConvert[i].price * dataConvert[i].quantity)
  } else if (i > 0 && i < dataConvert.length - 1 && dataConvert[i].date.slice(0, dateLength) === dataConvert[i - 1].date.slice(0, dateLength)) {
    if (dataConvert[i].id !== dataConvert[i-1].id) {
      documentCount++ ;
    }
    documentCost += (dataConvert[i].price * dataConvert[i].quantity)
  } else if (i > 0 && i < dataConvert.length - 1 && dataConvert[i].date.slice(0, dateLength) !== dataConvert[i - 1].date.slice(0, dateLength)) {
    days.push({day: (dataConvert[i-1].date.slice(8, dateLength))+' '+month[dataConvert[i-1].date.slice(5, 7)], documentCount: documentCount, documentCost: documentCost.toFixed(2)});
    documentCount = 0;
    documentCost = 0;
    documentCount ++;
    documentCost += (dataConvert[i].price * dataConvert[i].quantity)
  } else if (i === dataConvert.length - 1) {
    if (dataConvert[i].id !== dataConvert[i-1].id) {
      documentCount++ ;
    }
    documentCost += (dataConvert[i].price * dataConvert[i].quantity)
    days.push({day: (dataConvert[i].date.slice(8, dateLength))+' '+month[dataConvert[i].date.slice(5, 7)],documentCount: documentCount, documentCost: documentCost.toFixed(2)});
  }
};

// создаём массив с данными по документам
for(var i = 0; i < dataConvert.length; i++) {
  if (i === 0) {
    productCount++;
    productCost += (dataConvert[i].price * dataConvert[i].quantity)
  } else if (i > 0 && i < dataConvert.length - 1 && dataConvert[i].id === dataConvert[i - 1].id) {
    productCount++ ;
    productCost += (dataConvert[i].price * dataConvert[i].quantity)
  } else if (i > 0 && i < dataConvert.length - 1 && dataConvert[i].id !== dataConvert[i - 1].id) {
    if (documents.length !== 0) {
      if (dataConvert[i - 1].date.slice(0, dateLength) !== documents[documentPosition - 1].date) {
        day++ 
      }
    }
    documents.push({
      id: dataConvert[i-1].id,
      name: dataConvert[i-1]['document-name'],
      productCount: productCount,
      productCost: productCost.toFixed(2),
      day: day,
      date: dataConvert[i - 1].date.slice(0, dateLength),
      pos: documentPosition
    });
    productCount = 0;
    productCost = 0;
    productCount ++;
    documentPosition ++;
    productCost += (dataConvert[i].price * dataConvert[i].quantity)
  } else if (i === dataConvert.length - 1) {
    productCount ++;
    productCost += (dataConvert[i].price * dataConvert[i].quantity)
    if (dataConvert[i - 1].date.slice(0, dateLength) !== documents[documentPosition - 1].date) {
      day++ 
    }
    documents.push({
      id: dataConvert[i-1].id,
      name: dataConvert[i-1]['document-name'],
      productCount: productCount,
      productCost: productCost.toFixed(2),
      date: dataConvert[i - 1].date.slice(0, dateLength),
      pos: documentPosition,
      day: day,
    });
  }
};

// вставляем елементы дней
for(var i = 0; i < days.length; i++) {
  var dayElement = dayTemplate.querySelector('.day').cloneNode(true);
  dayElement.querySelector('.day__date').textContent = '˄ ' + days[i].day;
  dayElement.querySelector('.day__description').textContent = 'Документов: ' + days[i].documentCount + ' (' + days[i].documentCost + ' ₽)';
  dayElement.querySelector('.document-list').id = 'day-' + i;
  dayList.append(dayElement);
}

// вставляем елементы документов
for(var i = 0; i < documents.length; i++) {
  var documentElement = documentTemplate.querySelector('.document').cloneNode(true);
  var documentListById = document.querySelector('#day-' + documents[i].day);
  documentElement.querySelector('.document__name').textContent = documents[i].name + ' №' + documents[i].id;
  documentElement.querySelector('.document__cost').textContent = documents[i].productCost + ' ₽';
  documentElement.querySelector('.document__count').textContent = '▼ Товаров: ' + documents[i].productCount;
  documentElement.querySelector('.product-list').id = 'document-' + documents[i].id;
  documentListById.append(documentElement);
}

// вставляем элементы товаров
for(var i = 0; i < dataConvert.length; i++) {
  var productElement = productTemplate.querySelector('.product').cloneNode(true);
  var productList = document.querySelector('#document-' + dataConvert[i].id);
  productElement.querySelector('.product__image').src = dataConvert[i].image;
  productElement.querySelector('.product__name').textContent = dataConvert[i].name;
  productElement.querySelector('.product__price').textContent = dataConvert[i].quantity + ' штук х ' + parseInt(dataConvert[i].price) + ' ₽';
  productElement.querySelector('.product__cost').textContent = parseInt(dataConvert[i].quantity * dataConvert[i].price) + ' ₽';
  productList.append(productElement);
}

// создаём необходимые переменные для установки слушателей клика
var dayContainerNodeList = document.querySelectorAll('.day__container');
var dayDocumentNodeList = document.querySelectorAll('.document-list');
var documentContainerNodeList = document.querySelectorAll('.document__count');
var documentDocumentNodeList = document.querySelectorAll('.product-list');

// устанавлтваем слушателей на клик
function addAttributeForDay (pos) {
  var i = pos;
  dayContainerNodeList[i].addEventListener('click', function () {
    if (dayDocumentNodeList[i].hasAttribute('style')) {
      dayDocumentNodeList[i].removeAttribute('style');
    } else {
      dayDocumentNodeList[i].setAttribute('style','display: none');
    }
  })
}

function addAttributeForDocument (pos) {
  var i = pos;
  documentContainerNodeList[i].addEventListener('click', function () {
    if (documentDocumentNodeList[i].hasAttribute('style')) {
      documentDocumentNodeList[i].removeAttribute('style');
    } else {
      documentDocumentNodeList[i].setAttribute('style','display: none');
    }
  })
}

for(var i = 0; i < dayContainerNodeList.length; i++) {
  addAttributeForDay(i);
}

for(var i = 0; i < documentContainerNodeList.length; i++) {
  addAttributeForDocument(i);
}