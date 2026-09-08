const BASE_URL = "https://www.dnd5eapi.co/api/2014";
export async function getEquipmentCategory(category) {
  const res = await fetch(`${BASE_URL}/equipment-categories/${category}`);
  if (!res.ok) throw new Error(`Failed to load category: ${category}`);
  return res.json();
}
export async function getEquipmentDetail(index) {
  const res = await fetch(`${BASE_URL}/equipment/${index}`);
  if (!res.ok) throw new Error(`Failed to load item: ${index}`);
  return res.json();
}
