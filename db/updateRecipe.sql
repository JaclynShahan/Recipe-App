UPDATE recipes 
SET directions = $3, ingredients = $2
WHERE id = $1
