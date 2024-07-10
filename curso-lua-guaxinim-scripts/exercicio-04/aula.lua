local lista = {1, 2, 3}
for i,v in ipairs(lista) do
    print(v)
end

table.remove(lista, 2)
for i,v in ipairs(lista) do
    print(v)
end