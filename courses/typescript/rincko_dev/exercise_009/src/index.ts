// Classes

type EntityType = 'human' | 'dwarf' | 'god' | 'demigod' | 'troll' | 'dragon'

interface EntityDefaultData {
  label: string
  health: number
  damage: number
}

const ENTITIES_DEFAULT_DATA: Record<EntityType, EntityDefaultData> = {
  human: { label: 'Humano', health: 100, damage: 20 },
  god: { label: 'Deus', health: 1000, damage: 100 },
  demigod: { label: 'Semi-Deus', health: 900, damage: 85 },
  dwarf: { label: 'Anão', health: 70, damage: 8 },
  troll: { label: 'Troll', health: 430, damage: 55 },
  dragon: { label: 'Dragão', health: 750, damage: 75 },
}

abstract class Entity {
  private readonly name: string
  private readonly entityType: EntityType
  private readonly defaultData: EntityDefaultData
  private health: number
  private damage: number

  constructor(name: string, entityType: EntityType) {
    this.name = name
    this.entityType = entityType
    this.defaultData = ENTITIES_DEFAULT_DATA[entityType]
    this.health = this.defaultData.health
    this.damage = this.defaultData.damage
  }

  public getName(): string {
    return this.name
  }

  public getEntityType(): string {
    return this.entityType
  }

  public getEntityLabel(): string {
    return this.defaultData.label
  }

  public getHealth(): number {
    return this.health
  }

  public getDamage(): number {
    return this.damage
  }

  public isDead(): boolean {
    return this.health === 0
  }

  private die(): void {
    console.log(`${this.name} morreu!`)
  }

  private setHealth(value: number): boolean {
    const newHealth = Math.max(0, Math.min(value, this.defaultData.health))

    if (newHealth === this.health) return false

    this.health = newHealth

    if (this.isDead()) this.die()

    return true
  }

  public updateHealth(amount: number): boolean {
    return this.setHealth(this.health + amount)
  }

  public attack(entity: Entity): void {
    if (this.isDead() || entity.isDead()) return

    entity.updateHealth(-this.damage)
    console.log(
      `${this.name} atacou ${entity.name} e lhe causou ${this.damage} de dano! ${
        entity.name
      } agora ${
        entity.isDead()
          ? 'está morto!'
          : `tem ${entity.getHealth()} de vida restante.`
      }`,
    )
  }
}

class Human extends Entity {
  constructor(name: string) {
    super(name, 'human')
  }

  public heal(entity: Entity) {
    if (this.isDead() || entity.isDead()) return

    const oldEntityHealth = entity.getHealth()

    if (entity.updateHealth(30)) {
      console.log(
        `${this.getName()} curou ${entity.getName()}, que antes tinha ${oldEntityHealth} de vida e agora tem ${entity.getHealth()}.`,
      )
    }
  }
}

class Dwarf extends Entity {
  constructor(name: string) {
    super(name, 'dwarf')
  }
}

const heldernf = new Human('Helder Neto')
const niltoncosj = new Dwarf('Nilton Cesar')

heldernf.attack(niltoncosj)
niltoncosj.attack(heldernf)

heldernf.heal(niltoncosj)

heldernf.attack(niltoncosj)
heldernf.attack(niltoncosj)
heldernf.attack(niltoncosj)
heldernf.attack(niltoncosj)
