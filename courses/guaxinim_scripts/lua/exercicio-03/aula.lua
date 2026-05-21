local Idades = {10, 20, 30, 40}
for k,v in ipairs(Idades) do
    print(v)
end

local Carros = {}
for i,v in ipairs(Carros) do
    print(v) -- return nothing
end

table.insert(Carros, "Panto")
for i,v in ipairs(Carros) do
    print(v) -- return Panto
end