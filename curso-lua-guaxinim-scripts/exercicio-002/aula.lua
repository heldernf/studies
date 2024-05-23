-- tipo nil
local nome = nil
-- tipo boolean
local maiorDeIdade = false
local menorDeIdade = true
-- tipo number (int)
local idade = 18
-- tipo number (float)
local peso = 85.4
-- tipo string
local sobrenome = "Neto"
-- tipo function
local carro = function()
    return "Panto"
end
-- tipo tables
local usuarios = {
    [1] = {
        ["nome"] = "Helder",
        ["idade"] = 18,
        ["dinheiro"] = 2000
    },
    [2] = {
        ["nome"] = "Caponne",
        ["idade"] = 28,
        ["dinheiro"] = 3000
    }
}

print(type(nome))
print(type(maiorDeIdade))
print(type(menorDeIdade))
print(type(idade))
print(type(peso))
print(type(sobrenome))
print(type(carro))
print(type(usuarios))