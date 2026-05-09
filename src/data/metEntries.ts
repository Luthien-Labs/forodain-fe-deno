import type { MetEntry } from "../types/met";

export const metEntries: MetEntry[] = [
  {
    id: "hamber",
    title: "Hamber",
    sections: [
      {
        npcs: [
          { name: "Ser Davian Oss", description: "Knight of the manor and sworn sword to Lord Aldred." },
          { name: "Esme Oss", description: "Daughter of Ser Davian." },
          { name: "Carla", status: "deceased", description: "Village alchemist. Possessed by the Gullibus demon." },
          { name: "Beleg", status: "deceased", description: "Lover of Carla." },
          { name: "Georgina Tucker", description: "Apprentice alchemist, taken up the position after the death of Carla." },
          { name: "Ervain", description: "Emissary of the Vallasaari. Met at Ser Davian's castle." },
          { name: "Marla Spittle", description: "Proprietor of the Spittle Inn." },
          { name: "Reeve", description: "Chief villager." },
          { name: "Daral", description: "The miller. Lives in the windmill." },
          { name: "Alami Terga", description: "Shopkeeper." },
          { name: "Mortimer", description: "Renowned pie maker." },
          { name: "Jacksal", description: "Equally renowned pie maker." },
          { name: "Molly", description: "Wife of Jacksal." },
          { name: "Jadya", description: "Daughter of Jacksal the pie maker." },
          { name: "Timeo", description: "Son of Jacksal the pie maker." },
        ],
      },
    ],
  },
  {
    id: "caer-camlyn",
    title: "Caer Camlyn",
    sections: [
      {
        npcs: [
          { name: "Kingsthegn Aldred Caster", description: "Lord of Camelborne." },
          { name: "Aedann Caster", description: "Son of Kingsthegn Aldred of Camelborne." },
          { name: "Faril [Forral] Godber", description: "Chamberlain to Lord Aldred." },
          { name: "Bernardt", description: "Retainer of Lord Aldred. Met us at Oakhurst after we left the Sunless Gorge and escorted us to Caer Camlyn." },
          { name: "Gwen Redsparrow", description: "Mage and arcane advisor to Lord Aldred." },
          { name: "Gustaf", description: "Servant of Gwen Redsparrow." },
          { name: "Ser Mallory Avon of Penharrow", description: "Member of Lord Aldred's hunting party when ambushed by Orcs." },
        ],
      },
    ],
  },
  {
    id: "elswatch-carrick",
    title: "Elswatch / Carrick",
    sections: [
      {
        npcs: [
          { name: "Ser Harman Bryce", description: "Lord of Carrick." },
          { name: "Morten", description: "Captain of the Guard at Elswatch." },
          { name: "Fiddias", description: "Halfling, aka 'the Fidgeter' or 'the little man'." },
          { name: "Kerrick Farnham", description: "Captain of Ser Harman. Signatory of the note in Oakhurst seeking adventurers to find the dark cloak hidden within the Sunless Citadel." },
        ],
      },
    ],
  },
  {
    id: "tarrowby",
    title: "Tarrowby",
    sections: [
      {
        heading: "Clergy & Officials",
        npcs: [
          { name: "Ardsere Dakara Spuma", description: "Ardseer of Hamber. Standing in as Ardseer of Tarrowby after the disappearance of Mausel." },
          { name: "Ardsere Serrenian Mausel", status: "missing" },
          { name: "Cynowyn Berrick", description: "Administrator of Tarrowby asylum." },
        ],
      },
      {
        heading: "Traders & Townsfolk",
        npcs: [
          { name: "Florian Veldrun", description: "Antiques dealer from Wikkensmeade, now inmate of the Tarrowby Asylum." },
          { name: "Juanti Lieu", description: "Guildmaster of the Chandlers Guild." },
          { name: "Marial Barsted", description: "Seamstress and proprietor of Marial Barsted's Fine Clothing." },
          { name: "Faliver Whinns", description: "Book dealer, and part-time fence with a predilection for clocks." },
          { name: "Wilbur", description: "Owner of Wilbur's Poltices and Ointments." },
          { name: "Oswald Crawly", description: "Tailor, whose apartment above his shop was rented by Elizabeth Escal." },
        ],
      },
      {
        heading: "Inns & The Cathedral",
        npcs: [
          { name: "Adoc Umberhome", description: "Barkeep at the Cracked Flagon." },
          { name: "Calli", description: "Red-haired proprietor of the Dead Herring Inn." },
          { name: "Gerald", description: "Gentleman who showed us the way to the Dead Herring Inn." },
          { name: "Revus", description: "Cutpurse who Riswynn caught and befriended." },
          { name: "Fander", description: "Cathedral Guard, from whom Rachel won a platinum piece in a bet." },
        ],
      },
      {
        heading: "Persons of Interest",
        npcs: [
          { name: "Augustel Daws", description: "Along with Sperrel Cottabos, two guards who accompanied the silver from Caer Camlyn to Tarrowby." },
          { name: "Sperrel Cottabos", description: "See Augustel Daws." },
          { name: "Ansel Thorn", description: "River pilot who raised a complaint about not being paid his dues by the swamp witch." },
          { name: "Elizabeth Escal", description: "Possibly a pseudonym used by the swamp witch when renting a property above the tailor's in Tarrowby." },
        ],
      },
    ],
  },
  {
    id: "beneath-the-cathedral",
    title: "Beneath the Cathedral",
    sections: [
      {
        npcs: [
          { name: "Ifhalla", description: "The white lady." },
          { name: "Remulen" },
          { name: "Velma Bartler", description: "The ghost of a long-dead chirurgeon. Nilsen returned her remains to the surface for proper burial." },
          { name: "Krant", description: "Insectoid librarian beneath the Cathedral." },
          { name: "Logrim", status: "deceased", description: "Wizard whose journal and spellbook we found in the chambers under the cathedral." },
          { name: "Ser Reygal Mannaster", status: "deceased", description: "We found his remains under the cathedral. From a note he left, he was a follower of Vorennus, husband of Serri, and died in 1018." },
          { name: "Felix Hardring of Corthfield", status: "deceased", description: "Another of the shipwreck victims, branded like us. Died in the fight with the lobstermen." },
        ],
      },
    ],
  },
  {
    id: "firstwatch",
    title: "FirstWatch",
    sections: [
      {
        npcs: [
          { name: "Godmund Elvery", description: "Lord of Firstwatch keep." },
          { name: "Walder Elvery", description: "Priest and brother to Godmund Elvery." },
        ],
      },
    ],
  },
  {
    id: "ashford",
    title: "Ashford",
    sections: [
      {
        npcs: [
          { name: "Maynard of Ashford", description: "One of the adventurers who sought the healing apple. Betrothed to Parsifal." },
          { name: "Janela Fislefond", description: "Wizard residing in the Old Tower in Ashford, able to cast fireballs." },
          { name: "Eilred Lewin", description: "Landlord of the Jolly Farmer Inn." },
          { name: "__ Crawford", description: "Headsman of Comelborne." },
        ],
      },
    ],
  },
  {
    id: "elseferry",
    title: "ElseFerry",
    sections: [
      {
        npcs: [
          { name: "Parsifal", description: "Daughter of the ferryman and fiancée to Maynard." },
          { name: "The Ferryman of the Else", description: "His daughter is betrothed to Maynard. He gave us letters of recommendation to take to Lord Aldred of Camelborne." },
        ],
      },
    ],
  },
  {
    id: "oakhurst",
    title: "Oakhurst",
    sections: [
      {
        npcs: [
          { name: "Garan", description: "Innkeeper of the Old Boar Inn." },
          { name: "Talgen Hucrele", description: "Father of Sharwyn and local merchant." },
          { name: "Kerowyn Hucrele", description: "Mother of Sharwyn." },
          { name: "Sharwyn Hucrele", description: "Daughter of Talgen and Kerowyn. Has magical powers and striking red hair." },
          { name: "Erki Timbers", description: "Local halfling and guide to the Sunless Citadel. Victim of Bragi's doppelganger." },
        ],
      },
    ],
  },
  {
    id: "casterbridge",
    title: "CasterBridge",
    sections: [
      {
        npcs: [
          { name: "Trond", description: "Half-orc harbourmaster." },
          { name: "Golith", description: "Boatman. We travelled with him upriver to Ashford. We encountered the cockatrice on his boat." },
        ],
      },
    ],
  },
  {
    id: "vallasaari-of-pendryll",
    title: "The Vallasaari of Pendryll",
    sections: [
      {
        npcs: [
          { name: "Silat", description: "Leader of the Perydrall Vallasaari clan." },
          { name: "Ervain [or Irvane]", description: "Acted as emissary to Ser Davian Oss of Hamber." },
          { name: "Naven", description: "Vallasaari Ranger." },
          { name: "Meglan", status: "deceased", description: "Vallasaari Ranger. Possessed by the Gullibus demon." },
        ],
      },
    ],
  },
  {
    id: "sunken-citadel",
    title: "Sunken Citadel",
    sections: [
      {
        heading: "Goblins",
        npcs: [
          { name: "Svagi", status: "deceased", description: "Led the goblins prior to Durnn." },
          { name: "Durnn", status: "deceased", description: "Hobgoblin, leader of the citadel goblins when we first encountered them." },
          { name: "Grenl", description: "Shaman and new leader of the goblins after we left them." },
          { name: "Balsaag", status: "deceased", description: "Bugbear hunter of the goblins." },
          { name: "Ikak", description: "A goblin befriended by Riswynn." },
          { name: "Isbolk", status: "deceased", description: "A goblin befriended by Riswynn." },
        ],
      },
      {
        heading: "Kobolds",
        npcs: [
          { name: "Yusdray", status: "deceased", description: "Original leader of the citadel kobolds." },
          { name: "Calcrx", status: "deceased", description: "White dragon, whom Meepo looked after." },
          { name: "Meepo", status: "deceased", description: "Kobold, and ghost." },
        ],
      },
      {
        heading: "Others",
        npcs: [
          { name: "Bellak", description: "'The outcast', bewitched by the tree." },
          { name: "Al'Phradeas", description: "Renegade dragon-priest, until recently entombed within the Sunken Citadel." },
        ],
      },
    ],
  },
  {
    id: "the-shipwrecked-few",
    title: "The Shipwrecked Few",
    sections: [
      {
        intro: "Those we came ashore with from the wreck of the Black Fin, who did not join us at the time.",
        npcs: [
          { name: "Basso", status: "deceased" },
          { name: "Mattis", description: "Dwarf." },
          { name: "Felix Hardring", description: "See also: Beneath the Cathedral." },
        ],
      },
    ],
  },
  {
    id: "the-sunless-three",
    title: "The Sunless Three",
    sections: [
      {
        intro: "Maynard of Ashford, Sharwyn Hucrele, and an unnamed hunter ventured into the Sunless Citadel before us in search of the healing apple. We found the hunter's body within the citadel. Maynard and Sharwyn had fallen under the enthrallment of the Gulthias tree and were rescued by the party.",
        npcs: [
          { name: "Maynard of Ashford", description: "See also: Oakhurst, Ashford." },
          { name: "Sharwyn Hucrele", description: "See also: Oakhurst." },
          { name: "Unnamed hunter", status: "deceased" },
        ],
      },
    ],
  },
  {
    id: "the-plum-cloaks",
    title: "The Plum Cloaks",
    sections: [
      {
        intro: "A rival band of adventurers encountered by Rachel and Riswynn when they returned to the Sunless Citadel at the behest of Meepo's spirit.",
        npcs: [
          { name: "Gallard Britemain", status: "deceased", description: "Paladin of the Plum Cloaks. Struck down by Riswynn, twice." },
          { name: "Moll [Molg]", status: "deceased", description: "Half-orc." },
          { name: "Trosti Snell", description: "Halfling rogue, and a nasty one at that." },
          { name: "Sirithal of Dawnmarsh", description: "Vallasaari wizard. Surrendered to Rachel and Riswynn. Gave us information on the fidgeter in return for her freedom." },
        ],
      },
    ],
  },
  {
    id: "others",
    title: "Others",
    sections: [
      {
        npcs: [
          { name: "Waylin", description: "Gnomish scribe we encountered under Elswatch. Has been chronicling our journey ever since." },
          { name: "Noote" },
          { name: "Fin, The One That Talks", status: "deceased", description: "Leader of the aqua-zombies that we fought when trying to cross the river Else." },
          { name: "Neo", description: "Mysterious forest dweller that Rachel and Fair encountered in their first solo adventure." },
          { name: "Oscar of Dunhold", description: "Traveller met on the road from Elseferry to Hamber. We helped him with his broken wagon wheel." },
          { name: "Big Lungs Bill", description: "Boatman on the Helbeck Ferry." },
          { name: "Marog, the Claw of Morgh" },
          { name: "Orville Percer" },
          { name: "Maireade Percer" },
          { name: "Alvin Percer", status: "deceased" },
          { name: "Mordlay Percer", description: "Grandparent of Orville or Maireade." },
        ],
      },
    ],
  },
  {
    id: "historic-mentions",
    title: "Historic Mentions",
    sections: [
      {
        npcs: [
          { name: "Durgeddin the Black", description: '"By order of Durgeddin the Black, we have created a secret dwarven redoubt. None shall find us."' },
          { name: "Ashardalon", description: "'The old god'. Revered by the Kobolds of the Citadel." },
          { name: "Duke Ennis of Howland", description: "King Edric II's uncle. Opposed his nephew in civil war, then fled into exile." },
        ],
      },
    ],
  },
  {
    id: "ship-names",
    title: "Ship Names",
    sections: [
      {
        intro: "A few ships noted on our journey.",
        npcs: [
          { name: "The Black Fin", description: "A prison ship noted in the harbour logs found in the Cathedral library. Probably the ship we started on. It sailed from Hullwater, bound for Sedberg, far to the north." },
          { name: "The Pioneer", description: "Ask Pryce... or perhaps don't." },
        ],
      },
    ],
  },
  {
    id: "authors",
    title: "Authors",
    sections: [
      {
        intro: "Authors of texts we have encountered along the way.",
        npcs: [
          { name: "Oshcar Deterik of Vestabrock", description: "Author of a scientific treatise on the seasonal floodings of Dunmere swamp." },
          { name: "Ulfenar Fennic", description: "Author of 'The Observations of Ulfenar Fennic'; written in dwarvish." },
          { name: "__ Midorum", description: "Presumed author of 'Midorum's Gazetteer of Forodain'." },
          { name: "Talljon Havard", description: "Little is known of this person." },
        ],
      },
    ],
  },
  {
    id: "supporting-cast",
    title: "Supporting Cast",
    sections: [
      {
        intro: "In order of appearance.",
        npcs: [
          { name: "Fair" },
          { name: "Hjulner" },
          { name: "Corvus" },
          { name: "Nilah Aqueson" },
          { name: "Alystri Oakenfoot" },
        ],
      },
    ],
  },
];
