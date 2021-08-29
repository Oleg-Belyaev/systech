-- SQLite
SELECT date, docTypes.name, docs.id, image, products.name, price,quantity, products.removed FROM docs
INNER JOIN rows ON docs.id = rows.docId
INNER JOIN docTypes ON docs.typeId = docTypes.id
INNER JOIN products ON rows.productId = products.id
where docs.removed NOT IN (1) AND docTypes.removed NOT IN (1)
order by date