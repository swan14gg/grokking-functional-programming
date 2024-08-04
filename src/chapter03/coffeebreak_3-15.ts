export function abbreviate(name: string): string {
  const [firstName, lastName] = name.split(" ");
  if (lastName === undefined) {
    return name;
  }
  if (firstName === "") {
    return lastName;
  }
  return `${firstName[0]}. ${lastName}`;
}
