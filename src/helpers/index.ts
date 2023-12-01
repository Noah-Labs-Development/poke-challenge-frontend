export async function get_pokemon_names(limit: number = 10): Promise<string[]> {
  // TODO
  // tip: try using query params on the /pokemon endpoint
  const resp = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  ).json();
  return resp["results"].map((item: any) => item["name"]);
}

export async function get_pokemon_image_url(
  pokemon_name: string
): Promise<string> {
  // TODO
  // tip: use the /pokemon/{name} endpoint
  const resp = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon${pokemon_name}`)
  ).json();
  return resp["sprites"]["front_default"];
}
