# FTB Quests — The Industrial Horizon
## Installation

Drop the contents of this folder into:
  `config/ftbquests/quests/`

Your final structure should look like:
  config/ftbquests/quests/
    chapter_groups.snbt
    chapters/
      00_prologue.snbt
      01_certificate.snbt
      02_notice.snbt
      03_writ.snbt
      04_grand_commission.snbt

Restart or reload the world. FTB Quests reads these files on world load.

---

## Item IDs to Verify Before Use

The following item IDs should be confirmed in-game using EMI or
`/kubejs dump_registry item` before loading the quests.
If an ID is wrong, FTB Quests will usually log a warning and show
a missing item icon rather than crash.

### Create (create:*)
| Item                          | ID used                          | Confidence |
|-------------------------------|----------------------------------|------------|
| Water Wheel                   | create:water_wheel               | High       |
| Crushed Raw Iron              | create:crushed_raw_iron          | High       |
| Zinc Ingot                    | create:zinc_ingot                | Medium     |
| Chromatic Compound            | create:chromatic_compound        | High       |
| Polished Rose Quartz          | create:polished_rose_quartz      | High       |
| Refined Radiance              | create:refined_radiance          | High       |
| Sturdy Sheet                  | create:sturdy_sheet              | High       |
| Copper Casing                 | create:copper_casing             | High       |
| Empty Schematic               | create:empty_schematic           | High       |

### Create Aeronautics (create_aeronautics:*)
| Item                          | ID used                              | Confidence |
|-------------------------------|--------------------------------------|------------|
| Airship Helm                  | create_aeronautics:airship_helm      | Low — verify |

### Trickster (trickster:*)
| Item                          | ID used                          | Confidence |
|-------------------------------|----------------------------------|------------|
| Grimoire                      | trickster:grimoire               | Medium — verify |

### KubeJS custom items (guild:*)
These must match whatever namespace you used in your KubeJS startup script.
The quest files use `guild:` as the namespace. If you registered your items
under `kubejs:` instead, find and replace `guild:` with `kubejs:` in all
chapter SNBT files.

| Item                              | ID used                                    |
|-----------------------------------|--------------------------------------------|
| Certificate of Minimal Competence | guild:certificate_of_minimal_competence    |
| Notice of Non-Trivial Achievement | guild:notice_of_nontrivial_achievement     |
| Writ of Industrial Ascendancy     | guild:writ_of_industrial_ascendancy        |
| Master's Insignia                 | guild:masters_insignia                     |

---

## KubeJS Item & Recipe Reference

Paste this into your KubeJS scripts and adjust as needed.

### startup_scripts/guild_items.js
```javascript
StartupEvents.registry('item', event => {
    event.create('guild:certificate_of_minimal_competence')
        .displayName('Certificate of Minimal Competence')
        .maxStackSize(1)

    event.create('guild:notice_of_nontrivial_achievement')
        .displayName('Notice of Non-Trivial Achievement')
        .maxStackSize(1)

    event.create('guild:writ_of_industrial_ascendancy')
        .displayName('Writ of Industrial Ascendancy (Stamped)')
        .maxStackSize(1)

    event.create('guild:masters_insignia')
        .displayName("Master's Insignia of the Skyward Guild")
        .maxStackSize(1)
        .enchantGlint(true)
})
```

### server_scripts/guild_recipes.js
```javascript
ServerEvents.recipes(event => {

    // Tier 1 — Certificate of Minimal Competence
    // Craft at: Mechanical Press (Compacting)
    event.recipes.create.compacting(
        'guild:certificate_of_minimal_competence',
        [
            Item.of('create:iron_sheet').withCount(16),
            Item.of('create:copper_sheet').withCount(8),
            Item.of('create:andesite_alloy').withCount(8)
        ]
    )

    // Tier 2 — Notice of Non-Trivial Achievement
    // Craft at: Mechanical Mixer (Heated)
    event.recipes.create.mixing(
        'guild:notice_of_nontrivial_achievement',
        [
            Item.of('create:brass_ingot').withCount(16),
            Item.of('create:electron_tube').withCount(8),
            Item.of('create:polished_rose_quartz').withCount(4)
        ]
    ).heated()

    // Tier 3 — Writ of Industrial Ascendancy (Stamped)
    // Craft at: Mechanical Mixer (Superheated)
    event.recipes.create.mixing(
        'guild:writ_of_industrial_ascendancy',
        [
            Item.of('create:brass_ingot').withCount(32),
            Item.of('create:electron_tube').withCount(16),
            Item.of('create:chromatic_compound').withCount(8),
            Item.of('create:refined_radiance').withCount(4)
        ]
    ).superheated()

    // Final — Master's Insignia of the Skyward Guild
    // Craft at: Crafting Table (shaped)
    event.shaped('guild:masters_insignia', [
        ' C ',
        'NWN',
        ' G '
    ], {
        C: 'guild:certificate_of_minimal_competence',
        N: 'guild:notice_of_nontrivial_achievement',
        W: 'guild:writ_of_industrial_ascendancy',
        G: 'minecraft:gold_block'
    })

})
```

Note: Create recipe method names (compacting, mixing, .heated(), .superheated())
should be verified against the KubeJS + Create integration docs for 1.21.1.
Run `/kubejs errors` in-game after loading to catch any syntax issues.

---

## Quest ID Reference

Use these if you need to add dependencies to new quests later.

| Quest                             | ID         | Chapter              |
|-----------------------------------|------------|----------------------|
| Grey Gold                         | 00000020   | 01_certificate       |
| Force of Habit                    | 00000021   | 01_certificate       |
| Pressure Makes Things             | 00000022   | 01_certificate       |
| Two Wheels, No Waiting            | 00000023   | 01_certificate       |
| Air Quality                       | 00000024   | 01_certificate       |
| The First Submission              | 00000025   | 01_certificate       |
| On the Matter of Certification    | 00000026   | 01_certificate       |
| Certificate of Minimal Competence | 00000027   | 01_certificate       |
| The Brass Age                     | 00000030   | 02_notice            |
| The Mixing Hour                   | 00000031   | 02_notice            |
| The Long Arm                      | 00000032   | 02_notice            |
| The Tube Problem                  | 00000033   | 02_notice            |
| Non-Trivial Quantities            | 00000034   | 02_notice            |
| The Committee Reconvenes          | 00000035   | 02_notice            |
| Notice of Non-Trivial Achievement | 00000036   | 02_notice            |
| The Guild Notes Your Airship      | 00000037   | 02_notice            |
| At Speed                          | 00000040   | 03_writ              |
| The Full Workshop                 | 00000041   | 03_writ              |
| Ascendancy, Quantified            | 00000042   | 03_writ              |
| On the Matter of the Stamp        | 00000043   | 03_writ              |
| Writ of Industrial Ascendancy     | 00000044   | 03_writ              |
| The Guild Awaits                  | 00000050   | 04_grand_commission  |
| The Grand Commission              | 00000051   | 04_grand_commission  |
| Field Report: Anomalous Geometry  | 00000052   | 04_grand_commission  |
