local Contador = { valor = 0 }

local MetatableContador = {
    __add = function(t, num)
        t.valor = t.valor + num
        return t
    end,

    __sub = function(t, num)
        t.valor = t.valor - num
        return t
    end,

    __tostring = function(t)
        return "Valor do contador: " .. t.valor
    end,

    __index = function(t, key)
        if key == "resetar" then
            t.valor = 0
        end
    end
}

setmetatable(Contador, MetatableContador)

print(Contador)
Contador = Contador + 5
print(Contador)
Contador = Contador - 2
print(Contador)
Contador.resetar = function () Contador.valor = 0 end
Contador.resetar()
print(Contador)