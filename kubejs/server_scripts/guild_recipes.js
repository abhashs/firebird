ServerEvents.recipes(event => {

  event.remove({ id: 'create:splashing/gravel' })

    event.recipes.create.splashing(
        [
            CreateItem.of('minecraft:flint', 0.12),
            CreateItem.of('minecraft:iron_nugget', 0.01)
        ],
        'minecraft:gravel'
    )

  // Tier 1 — Certificate of Minimal Competence
  // Mechanical Press, Compacting
  event.recipes.create.compacting(
    'firebird:certificate_of_minimal_competence',
    [
      Item.of('create:iron_sheet').withCount(16),    // [verify item IDs]
      Item.of('create:copper_sheet').withCount(8),
      Item.of('create:andesite_alloy').withCount(8)
    ]
  )

  // Tier 2 — Notice of Non-Trivial Achievement
  // Mechanical Mixer, Heated
  event.recipes.create.mixing(
    'firebird:notice_of_nontrivial_achievement',
    [
      Item.of('create:brass_ingot').withCount(16),
      Item.of('create:electron_tube').withCount(8),
      Item.of('create:polished_rose_quartz').withCount(4) // [verify]
    ]
  ).heated()

  // Tier 3 — Writ of Industrial Ascendancy (Stamped)
  // Mechanical Mixer, Superheated
  event.recipes.create.mixing(
    'firebird:writ_of_industrial_ascendancy',
    [
      Item.of('create:brass_ingot').withCount(32),
      Item.of('create:electron_tube').withCount(16),
      Item.of('create:chromatic_compound').withCount(8), // [verify]
      Item.of('create:refined_radiance').withCount(4)   // [verify]
    ]
  ).superheated()

  // Final — Master's Insignia of the Skyward Guild
  // Crafting table (shaped or shapeless — your preference)
  event.shaped('firebird:masters_insignia', [
    ' C ',
    'NWN',
    ' G '
  ], {
    C: 'firebird:certificate_of_minimal_competence',
    N: 'firebird:notice_of_nontrivial_achievement',
    W: 'firebird:writ_of_industrial_ascendancy',
    G: 'minecraft:gold_block'
  })

})