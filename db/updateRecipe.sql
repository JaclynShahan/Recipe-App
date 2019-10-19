UPDATE recipes 
SET directions = $3, ingredients = $2, title = $4
WHERE id = $1
