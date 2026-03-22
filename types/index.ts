export type Faction = "baroque" | "strawhat";

export type DevilFruitType = "Paramecia" | "Zoan" | "Logia" | "None";

export interface Ability {
  name: string;
  type: DevilFruitType;
  description: string;
}

export interface Character {
  id: string;
  name: string;
  codename: string; // e.g. "Mr. 0", "Straw Hat"
  faction: Faction;
  role: string; // e.g. "Warlord of the Sea", "Captain"
  bounty?: string; // e.g. "1,500,000,000 Berries"
  ability: Ability;
  description: string; // 2-3 sentence bio
  personality: string; // one sentence personality
  color: string; // accent color for their card
  image?: string; // future use for real images
}
