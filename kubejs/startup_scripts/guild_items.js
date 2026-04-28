StartupEvents.registry('item', event => {
  event.create('firebird:certificate_of_minimal_competence')
    .displayName('Certificate of Minimal Competence')
    .maxStackSize(1)

  event.create('firebird:notice_of_nontrivial_achievement')
    .displayName('Notice of Non-Trivial Achievement')
    .maxStackSize(1)

  event.create('firebird:writ_of_industrial_ascendancy')
    .displayName('Writ of Industrial Ascendancy (Stamped)')
    .maxStackSize(1)

  event.create('firebird:masters_insignia')
    .displayName("Master's Insignia of the Skyward Guild")
    .maxStackSize(1)
})